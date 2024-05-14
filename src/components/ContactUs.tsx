import React from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoIosSend } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  email: z.optional(z.string().min(1, { message: 'Email must be filled' }).email('This is not a valid email.')),
  subject: z.string(),
  message: z.string().max(100, 'max limit 100 characters'),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-gray-800 h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="user@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Please enter a valid email address.
                </FormDescription>
              </FormItem>
            )}
          />
          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message" {...field} rows={7} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Your message will be sent directly to my email.
                </FormDescription>
              </FormItem>
            )}
          />
          <div className="mt-8 flex justify-end">
            
            <Button type="submit" className="w-full sm:w-auto">
               <IoIosSend size={30} /> Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactUs;
