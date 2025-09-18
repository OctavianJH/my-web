import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  // Single handleSubmit inside component
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_g044yyg",      // your Service ID
      "template_d0b48pk",     // your Template ID
      formData,               // { name, email, message }
      "vQGFUMDqEcYObfT4q"     // your EmailJS Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
      console.error(error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border border-primary/10 bg-card/30 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-6">
            <Card className="border border-primary/10 bg-card/30 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/octavian-humphreys-01baba176/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="bg-primary/20 p-3 rounded-full mr-4 group-hover:bg-primary/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground text-sm">My Main Profile - Let's Connect</p>
                  </div>
                </a>

                <a
                  href="https://github.com/OctavianJH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="bg-primary/20 p-3 rounded-full mr-4 group-hover:bg-primary/30 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground text-sm">My primary Code Repositories</p>
                  </div>
                </a>

                <a
                  href="mailto:octavianjhumphreys@icloud.com"
                  className="flex items-center p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="bg-primary/20 p-3 rounded-full mr-4 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground text-sm">octavianjhumphreys@icloud.com</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};