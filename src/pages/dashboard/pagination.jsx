import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex items-center gap-1">
      <Button variant="outline" size="icon" className="h-8 w-8">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        1
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        2
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        3
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        4
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        5
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        6
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8">
        7
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}
