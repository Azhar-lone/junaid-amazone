"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SendHorizonal } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const popularEmailProviders = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
];

const reviewSchema = z.object({
  review: z
    .string()
    .min(5, { message: "review should be at least 5 characters" }),
  email: z.string().email(),
});

const AddEmail: React.FC = () => {
  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      review: "",
      email: "",
    },
  });
  const { toast } = useToast();
  async function onEmailSubmit(values: z.infer<typeof reviewSchema>) {
    const emailDomain = values.email.split("@")[1];

    if (!popularEmailProviders.includes(emailDomain)) {
      form.setError("email", {
        type: "manual",
        message:
          "Invalid email provider must be gmail or yahoo or outlook or hotmail",
      });
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast({
          title: "Email sent successfully!",
        });
      } else {
        toast({
          title: "Failed to send email.",
        });
        form.setError("email", {
          type: "manual",
          message: "Failed to send email.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "An error occurred.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onEmailSubmit)}
        className="md:gap-6 gap-3 flex flex-col w-full relative md:w-[60%] mx-auto"
      >
        <h1 className="md:text-2xl text-xl font-bold">Send an Email Message</h1>

        <div className="flex gap-4 items-center flex-col">
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="enter your email here" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={"review"}
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    draggable
                    {...field}
                    placeholder="enter your message here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant={"ghost"}
          className="absolute bottom-0 right-0"
        >
          <SendHorizonal />
        </Button>
      </form>
    </Form>
  );
};

export default AddEmail;
