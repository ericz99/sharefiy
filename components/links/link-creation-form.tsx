"use client";

import { useEffect, useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Switch } from "@/components/ui/switch";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Link } from "@prisma/client";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  slug: z.string(),
  originalUrl: z.string(),
  isActive: z.boolean().default(true),
});

type FormSchema = z.infer<typeof formSchema>;

interface LinkCreationFormProps {
  createOrUpdateLink: (data: {
    originalUrl: string;
    slug: string;
    isActive?: boolean;
    isEditMode?: boolean;
    id?: string;
  }) => Promise<
    | {
        error: string;
      }
    | undefined
  >;

  checkSlugAvailability: (slug: string) => Promise<boolean>;

  children?: React.ReactNode;
  initialData?: Link;
  isEditMode?: boolean;
}

export default function LinkCreationForm({
  createOrUpdateLink,
  checkSlugAvailability,
  children,
  initialData,
  isEditMode = false,
}: LinkCreationFormProps) {
  const [toggle, setToggle] = useState(false);
  const [slugError, setSlugError] = useState<string | null>(null);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      originalUrl: initialData?.originalUrl || "",
      slug: initialData?.slug || "",
      isActive: initialData?.isActive == false ? false : true,
    },
  });

  async function onSubmit(values: FormSchema) {
    const res = await createOrUpdateLink({
      ...values,
      isEditMode,
      id: initialData?.id,
    });

    if (res?.error) {
      form.setError("slug", {
        message: res.error,
      });
    } else {
      setToggle(false);
    }
  }

  const handleSlugBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const slug = event.target.value;
    if (slug) {
      const isTaken = await checkSlugAvailability(slug);
      if (isTaken) {
        setSlugError("This slug is already taken.");
      } else {
        setSlugError(null);
      }
    }
  };

  return (
    <Sheet onOpenChange={(isOpen) => setToggle(isOpen)} open={toggle}>
      <SheetTrigger asChild>
        {isEditMode ? children : <Button variant="default">Create Link</Button>}
      </SheetTrigger>
      <SheetContent className="w-[600px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Track Link Creation</SheetTitle>
          <SheetDescription>Start tracking your links!</SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col flex-grow"
          >
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="slug"
                      {...field}
                      onBlur={handleSlugBlur}
                      className={cn(slugError && "border-red-500")}
                    />
                  </FormControl>

                  {slugError && <FormMessage>{slugError}</FormMessage>}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="originalUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Original URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem className="border-solid border-zinc-200 flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Track Link Active</FormLabel>
                        <FormDescription>
                          Start tracking immediately after creation.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex-grow">
              <Button type="submit" className="w-full">
                {isEditMode ? "Update Link" : "Create Link"}
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
