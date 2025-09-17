import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CVDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV_Octavian_Humphreys.pdf'; 
    link.download = 'CV_Octavian_Humphreys.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleDownload}
      className="fixed top-6 left-6 z-50 h-10 w-10 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 group"
    >
      <FileText className="h-5 w-5 text-primary group-hover:rotate-[360deg] transition-transform duration-500" />
      <span className="sr-only">Download CV</span>
    </Button>
  );
};