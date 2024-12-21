"use client";

import React from "react";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Avatar } from "@/components/ui/avatar";

import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  type ProfileFormSchema,
  type PersonalInfoProps,
  profileFormSchema,
} from "./types";

export default function PersonalInfo({ user }: PersonalInfoProps) {
  const form = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.name ?? "",
    },
  });

  function onSubmit(formData: ProfileFormSchema) {
    console.log(formData);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-xl">
          Personal Information
        </CardTitle>
        <CardDescription className="text-zinc-500 italic">
          Your personal information is not shared with anyone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex items-end gap-2">
          <div className="flex flex-col">
            <p className="text-sm mb-2">Profile Image</p>

            <Avatar>
              <Image
                src={user.image!}
                alt="profile__image"
                width="50"
                height="50"
              />
            </Avatar>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="sr-only"
            />
            <Label htmlFor="avatar" className="cursor-pointer">
              <Button variant="outline">Change Profile</Button>
            </Label>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" defaultValue={user.email!} disabled />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel>Account ID</FormLabel>
              <FormControl>
                <Input type="text" defaultValue={user.id!} disabled />
              </FormControl>
            </FormItem>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. .
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg">
              Save Changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
