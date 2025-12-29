import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or reach out via email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink via-purple to-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you! Drop me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-md rounded-3xl border border-card-border shadow-2xl p-8 md:p-10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    
                      <FormLabel className="text-foreground font-semibold">Name</FormLabel>
                      
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-background/50 border-border/50 focus:border-primary rounded-xl"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    
                      <FormLabel className="text-foreground font-semibold">Email</FormLabel>
                      
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field} 
                          className="bg-background/50 border-border/50 focus:border-primary rounded-xl"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    
                      <FormLabel className="text-foreground font-semibold">Message</FormLabel>
                      
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          {...field} 
                          rows={6}
                          className="bg-background/50 border-border/50 focus:border-primary rounded-xl resize-none"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple via-blue to-pink hover:from-purple/90 hover:via-blue/90 hover:to-pink/90 border border-primary-border text-white shadow-lg rounded-xl min-h-12"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-10 pt-10 border-t border-border/50">
              <p className="text-center text-muted-foreground mb-6 font-semibold">
                Connect with me please
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 hover-elevate active-elevate-2"
                  onClick={() => window.open("https://github.com/vineet", "_blank")}
                  data-testid="link-github"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 hover-elevate active-elevate-2"
                  onClick={() => window.open("https://linkedin.com/in/vineet", "_blank")}
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 hover-elevate active-elevate-2"
                  onClick={() => window.location.href = "mailto:vineet@example.com"}
                  data-testid="link-email"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
