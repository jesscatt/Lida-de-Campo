import { Link } from "react-router-dom";
import { CircleDot, Cloud, Sprout, ClipboardList, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const stats = [
    { title: "Gado Total", value: "247", icon: CircleDot, change: "+12", changeType: "positive" },
    { title: "Ovelhas Total", value: "156", icon: Cloud, change: "+8", changeType: "positive" },
    { title: "Campos Ativos", value: "12", icon: Sprout, change: "0", changeType: "neutral" },
    { title: "Tarefas Hoje", value: "8", icon: ClipboardList, change: "3 pendentes", changeType: "warning" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "Banho de ovelhas recomendado - inverno iniciando", priority: "alta" },
    { id: 2, type: "info", message: "Esquila de 15 ovelhas agendada para próxima semana", priority: "média" },
    { id: 3, type: "warning", message: "Campo 3 atingindo capacidade máxima", priority: "alta" },
  ];

  const recentTasks = [
    { id: 1, title: "Vermífugo - Gado Campo 1", completed: true, worker: "João" },
    { id: 2, title: "Pesagem - Ovelhas Campo 5", completed: true, worker: "Maria" },
    { id: 3, title: "Banho contra carrapato - Gado", completed: false, worker: "Pedro" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sprout className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Gestão da Fazenda</h1>
                <p className="text-sm text-muted-foreground">Painel do Administrador</p>
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
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className={`text-xs mt-1 ${
                    stat.changeType === 'positive' ? 'text-primary' : 
                    stat.changeType === 'warning' ? 'text-accent' : 
                    'text-muted-foreground'
                  }`}>
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* AI Alerts */}
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    Alertas IA
                  </CardTitle>
                  <CardDescription>Sugestões baseadas em clima e ciclos</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-card border border-border">
                  <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                    alert.type === 'warning' ? 'text-accent' : 'text-primary'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <Badge variant={alert.priority === 'alta' ? 'default' : 'secondary'} className="mt-2">
                      Prioridade {alert.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Tasks */}
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    Tarefas Recentes
                  </CardTitle>
                  <CardDescription>Últimas atividades dos peões</CardDescription>
                </div>
                <Link to="/tasks">
                  <Button variant="outline" size="sm">Ver todas</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border border-border">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{task.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">Responsável: {task.worker}</p>
                  </div>
                  <Badge variant={task.completed ? "secondary" : "outline"}>
                    {task.completed ? "Concluída" : "Pendente"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-6 shadow-medium">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Link to="/animals">
              <Button variant="default" className="gap-2">
                <CircleDot className="h-4 w-4" />
                Cadastrar Animal
              </Button>
            </Link>
            <Link to="/fields">
              <Button variant="secondary" className="gap-2">
                <Sprout className="h-4 w-4" />
                Gerenciar Campos
              </Button>
            </Link>
            <Link to="/tasks">
              <Button variant="outline" className="gap-2">
                <ClipboardList className="h-4 w-4" />
                Criar Tarefa
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
