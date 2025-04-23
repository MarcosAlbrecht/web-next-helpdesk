import TicketCard from "@/components/ticket-card";

export default function MyTickets() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-0 pt-0">
      <div className="grid auto-rows-min gap-4 sm:grid md:grid-cols-1 xl:grid-cols-3 bg-muted/50">
        <TicketCard />

        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
}
