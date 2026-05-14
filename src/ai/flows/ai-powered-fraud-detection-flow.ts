'use server';
/**
 * @fileOverview This file implements an AI-powered fraud detection flow.
 *
 * - aiPoweredFraudDetection - A function that assesses an order for potential fraud and suggests blacklisting customers.
 * - FraudDetectionInput - The input type for the aiPoweredFraudDetection function.
 * - FraudDetectionOutput - The return type for the aiPoweredFraudDetection function.
 * - blacklistCustomer - A tool to blacklist a customer, which influences future AI assessments.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// --- Tool Implementations (Simulated for this example) ---

// In-memory store for blacklisted customers and mock order history
const blacklistedCustomers = new Set<string>(); // Stores phone numbers
const mockOrderHistory: { [phoneNumber: string]: { orderId: string, deliveryStatus: 'delivered' | 'failed' | 'returned' }[] } = {
  '0555123456': [
    { orderId: 'ORD001', deliveryStatus: 'delivered' },
    { orderId: 'ORD002', deliveryStatus: 'failed' },
    { orderId: 'ORD003', deliveryStatus: 'failed' },
  ],
  '0777987654': [
    { orderId: 'ORD004', deliveryStatus: 'delivered' },
    { orderId: 'ORD005', deliveryStatus: 'delivered' },
  ],
  '0666112233': [
    { orderId: 'ORD006', deliveryStatus: 'returned' },
  ],
};
const suspiciousIPs = new Set<string>(['192.168.1.100', '10.0.0.50']);

const fetchCustomerOrderHistory = ai.defineTool(
  {
    name: 'fetchCustomerOrderHistory',
    description: 'Fetches the order history for a given customer phone number.',
    inputSchema: z.object({
      customerPhoneNumber: z.string().describe('The phone number of the customer.'),
    }),
    outputSchema: z.array(z.object({
      orderId: z.string(),
      deliveryStatus: z.enum(['delivered', 'failed', 'returned']),
    })),
  },
  async (input) => {
    // Simulate fetching from a database
    return mockOrderHistory[input.customerPhoneNumber] || [];
  }
);

const checkIpFraudDatabase = ai.defineTool(
  {
    name: 'checkIpFraudDatabase',
    description: 'Checks if an IP address has been flagged for fraudulent activity in the past.',
    inputSchema: z.object({
      ipAddress: z.string().describe('The IP address to check.'),
    }),
    outputSchema: z.boolean(),
  },
  async (input) => {
    // Simulate checking an external fraud database
    return suspiciousIPs.has(input.ipAddress);
  }
);

const isCustomerBlacklisted = ai.defineTool(
  {
    name: 'isCustomerBlacklisted',
    description: 'Checks if a customer is currently blacklisted in the system.',
    inputSchema: z.object({
      customerPhoneNumber: z.string().describe('The phone number of the customer.'),
    }),
    outputSchema: z.boolean(),
  },
  async (input) => {
    return blacklistedCustomers.has(input.customerPhoneNumber);
  }
);

export const blacklistCustomer = ai.defineTool(
  {
    name: 'blacklistCustomer',
    description: 'Adds a customer to the blacklist. Future orders from this customer will be flagged, and the AI will consider this decision.',
    inputSchema: z.object({
      customerPhoneNumber: z.string().describe('The phone number of the customer to blacklist.'),
      reason: z.string().describe('The reason for blacklisting the customer.'),
    }),
    outputSchema: z.boolean().describe('True if the customer was successfully blacklisted.'),
  },
  async (input) => {
    console.log(`Blacklisting customer ${input.customerPhoneNumber} for reason: ${input.reason}`);
    blacklistedCustomers.add(input.customerPhoneNumber);
    return true;
  }
);

// --- Input and Output Schemas ---
const FraudDetectionInputSchema = z.object({
  orderId: z.string().describe('The ID of the current order being evaluated.'),
  customerPhoneNumber: z.string().describe('The phone number of the customer.'),
  customerIpAddress: z.string().describe('The IP address from which the order was placed.'),
  customerEmail: z.string().optional().describe('The email address of the customer.'),
  orderValue: z.number().describe('The total value of the current order.'),
});
export type FraudDetectionInput = z.infer<typeof FraudDetectionInputSchema>;

const FraudDetectionOutputSchema = z.object({
  isFraudulent: z.boolean().describe('True if the order is deemed fraudulent or highly suspicious.'),
  reason: z.string().describe('The detailed reason for the fraud assessment.'),
  fraudScore: z.number().min(0).max(100).describe('A score from 0 to 100, where higher means higher likelihood of fraud.'),
  isBlacklisted: z.boolean().describe('True if the customer associated with this order is currently blacklisted.'),
  shouldSuggestBlacklist: z.boolean().describe('True if the system suggests blacklisting this customer based on current patterns and criteria.'),
});
export type FraudDetectionOutput = z.infer<typeof FraudDetectionOutputSchema>;

// --- Genkit Prompt Definition ---
const fraudDetectionPrompt = ai.definePrompt({
  name: 'fraudDetectionPrompt',
  input: { schema: FraudDetectionInputSchema },
  output: { schema: FraudDetectionOutputSchema },
  tools: [fetchCustomerOrderHistory, checkIpFraudDatabase, isCustomerBlacklisted],
  prompt: `You are an expert fraud detection system for an e-commerce store named THILELI, specialized in Algerian Amazigh products. Your goal is to assess whether an incoming order is potentially fraudulent or problematic, considering various factors and using available tools.

Here is the current order information:
Order ID: {{{orderId}}}
Customer Phone Number: {{{customerPhoneNumber}}}
Customer IP Address: {{{customerIpAddress}}}
Customer Email: {{{customerEmail}}}
Order Value: {{{orderValue}}} DA

Use the following process:
1. First, check if the customer's phone number ({{{customerPhoneNumber}}}) is already in the blacklist using the 'isCustomerBlacklisted' tool. This directly populates the 'isBlacklisted' field in the output.
2. Next, retrieve the customer's order history using the 'fetchCustomerOrderHistory' tool with their phone number ({{{customerPhoneNumber}}}). Analyze the delivery statuses. A high number of 'failed' or 'returned' deliveries is a strong indicator of fraud.
3. Then, check if the customer's IP address ({{{customerIpAddress}}}) has been flagged for suspicious activity using the 'checkIpFraudDatabase' tool.
4. Based on all this information, determine if the current order is fraudulent or highly suspicious.
5. Provide a detailed 'reason' for your assessment, referencing specific findings from the tools or input data.
6. Assign a 'fraudScore' from 0 (no fraud) to 100 (very high fraud likelihood). Factors like blacklisting, multiple failed deliveries, or suspicious IP should increase this score significantly.
7. Finally, decide if you 'shouldSuggestBlacklist' this customer for future review. This should be true if there are strong patterns of repeated non-deliveries (e.g., more than one failed delivery), a suspicious IP, or other significant red flags, even if they are not yet blacklisted. If the customer is already blacklisted, this field can be false unless there are new, additional reasons for concern.

Strictly adhere to the output schema and provide a concise JSON response.
`,
});

// --- Genkit Flow Definition ---
const aiPoweredFraudDetectionFlow = ai.defineFlow(
  {
    name: 'aiPoweredFraudDetectionFlow',
    inputSchema: FraudDetectionInputSchema,
    outputSchema: FraudDetectionOutputSchema,
  },
  async (input) => {
    // The prompt automatically calls the tools as instructed.
    const { output } = await fraudDetectionPrompt(input);

    if (!output) {
      throw new Error('Fraud detection prompt did not return an output.');
    }

    return output;
  }
);

// --- Wrapper Function for External Use ---
export async function aiPoweredFraudDetection(
  input: FraudDetectionInput
): Promise<FraudDetectionOutput> {
  return aiPoweredFraudDetectionFlow(input);
}
