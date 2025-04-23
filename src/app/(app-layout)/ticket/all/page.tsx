import TicketCard from "@/components/ticket-card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AllTickets() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-0 pt-0">
      <ScrollArea className="h-[calc(100vh-6rem)] w-full">
        <div className="grid auto-rows-min gap-4 sm:grid md:grid-cols-1 xl:grid-cols-3 ">
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </ScrollArea>
    </div>
  );
}
