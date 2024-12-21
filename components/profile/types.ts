import { Account } from "@prisma/client";
import { User } from "next-auth";
import { z } from "zod";

export const profileFormSchema = z.object({
  name: z.string().min(2).max(50).optional(),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;

export interface PersonalInfoProps {
  user: User;
}

export interface SocialLinkedAccountProps {
  linkedAccounts: Account[];
}
