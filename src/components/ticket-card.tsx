import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar, Ticket, User } from "lucide-react";

const priorityColors: Record<number, string> = {
  1: "bg-green-500",
  2: "bg-yellow-500",
  3: "bg-red-500",
};

const statusLabels: Record<number, string> = {
  0: "Aberto",
  1: "Em andamento",
  2: "Resolvido",
  3: "Fechado",
};

export default function TicketCard() {
  const ticket = {
    id: 1,
    title: "Erro ao acessar o sistema",
    summary: "Usuário relata erro ao tentar fazer login no sistema.",
    requester: "João Silva",
    team: "Suporte TI",
    created_at: new Date(),
    status: 1,
    priority: 2,
  };

  return (
    <Card className={"w-full max-w shadow-lg border border-gray-200"}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Ticket className="w-5 h-5 text-blue-500" /> {ticket.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 text-sm mb-2">{ticket.summary}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <User className="w-4 h-4" /> {ticket.requester}
          {ticket.team && <span>| {ticket.team}</span>}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-1 text-gray-500">
          <Calendar className="w-4 h-4" />{" "}
          {format(ticket.created_at, "dd/MM/yyyy HH:mm")}
        </div>
        <div className="flex gap-2">
          <Badge className={`${priorityColors[ticket.priority]} text-white`}>
            Prioridade {ticket.priority}
          </Badge>
          <Badge variant="outline">{statusLabels[ticket.status]}</Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
