import { Link } from "react-router-dom";
import { Sprout, ClipboardList, Calendar, User, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Banho de ovelhas - Campo 5",
      description: "Banho contra piolho - 30 ovelhas",
      worker: "João Silva",
      priority: "alta",
      status: "pending",
      dueDate: "Hoje",
      aiSuggestion: true,
    },
    {
      id: 2,
      title: "Vermífugo - Gado Campo 1",
      description: "Aplicar vermífugo em 42 bovinos",
      worker: "Maria Santos",
      priority: "alta",
      status: "in-progress",
      dueDate: "Hoje",
      aiSuggestion: false,
    },
    {
      id: 3,
      title: "Pesagem - Ovelhas Campo 6",
      description: "Pesagem de controle mensal",
      worker: "Pedro Costa",
      priority: "média",
      status: "pending",
      dueDate: "Amanhã",
      aiSuggestion: false,
    },
    {
      id: 4,
      title: "Esquila - 15 ovelhas",
      description: "Esquila programada Campo 5",
      worker: "João Silva",
      priority: "média",
      status: "completed",
      dueDate: "Ontem",
      aiSuggestion: true,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-primary";
      case "in-progress": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle2;
      case "in-progress": return Clock;
      default: return AlertCircle;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Concluída";
      case "in-progress": return "Em andamento";
      default: return "Pendente";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sprout className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Gestão da Fazenda</h1>
                <p className="text-sm text-muted-foreground">Gestão de Tarefas</p>
              </div>
            </div>
            <nav className="flex gap-2">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/animals">
                <Button variant="ghost">Animais</Button>
              </Link>
              <Link to="/fields">
                <Button variant="ghost">Campos</Button>
              </Link>
              <Link to="/tasks">
                <Button variant="ghost">Tarefas</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Tarefas</h2>
            <p className="text-muted-foreground mt-1">Gerencie todas as atividades da fazenda</p>
          </div>
          <Button variant="hero" className="gap-2">
            <ClipboardList className="h-4 w-4" />
            Nova Tarefa
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="pending">Pendentes</TabsTrigger>
            <TabsTrigger value="in-progress">Em Andamento</TabsTrigger>
            <TabsTrigger value="completed">Concluídas</TabsTrigger>
            <TabsTrigger value="ai">Sugestões IA</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {tasks.map((task) => {
              const StatusIcon = getStatusIcon(task.status);
              
              return (
                <Card key={task.id} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{task.title}</CardTitle>
                          {task.aiSuggestion && (
                            <Badge variant="outline" className="text-accent border-accent">
                              IA
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{task.description}</CardDescription>
                      </div>
                      <Badge 
                        variant={task.priority === "alta" ? "destructive" : "secondary"}
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{task.worker}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{task.dueDate}</span>
                      </div>
                      <div className={`flex items-center gap-2 ${getStatusColor(task.status)}`}>
                        <StatusIcon className="h-4 w-4" />
                        <span>{getStatusText(task.status)}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">Ver Detalhes</Button>
                      {task.status === "pending" && (
                        <Button variant="default" size="sm">Iniciar</Button>
                      )}
                      {task.status === "in-progress" && (
                        <Button variant="default" size="sm">Concluir</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="pending">
            <div className="space-y-4">
              {tasks.filter(t => t.status === "pending").map((task) => (
                <Card key={task.id} className="shadow-soft">
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress">
            <div className="space-y-4">
              {tasks.filter(t => t.status === "in-progress").map((task) => (
                <Card key={task.id} className="shadow-soft">
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-4">
              {tasks.filter(t => t.status === "completed").map((task) => (
                <Card key={task.id} className="shadow-soft">
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <div className="space-y-4">
              {tasks.filter(t => t.aiSuggestion).map((task) => (
                <Card key={task.id} className="shadow-soft border-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {task.title}
                      <Badge variant="outline" className="text-accent border-accent">
                        Sugestão IA
                      </Badge>
                    </CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Tasks;
