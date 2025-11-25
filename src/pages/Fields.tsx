import { Link } from "react-router-dom";
import { Sprout, MapPin, Users, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Fields = () => {
  const fields = [
    { 
      id: 1, 
      name: "Campo 1", 
      capacity: 50, 
      current: 42, 
      type: "Gado", 
      pastureType: "Brachiaria",
      status: "Bom estado"
    },
    { 
      id: 2, 
      name: "Campo 2", 
      capacity: 45, 
      current: 38, 
      type: "Gado", 
      pastureType: "Tanzânia",
      status: "Bom estado"
    },
    { 
      id: 3, 
      name: "Campo 3", 
      capacity: 40, 
      current: 38, 
      type: "Gado", 
      pastureType: "Mombaça",
      status: "Atenção - quase cheio"
    },
    { 
      id: 5, 
      name: "Campo 5", 
      capacity: 80, 
      current: 52, 
      type: "Ovelhas", 
      pastureType: "Azevém",
      status: "Bom estado"
    },
    { 
      id: 6, 
      name: "Campo 6", 
      capacity: 75, 
      current: 48, 
      type: "Ovelhas", 
      pastureType: "Trevo",
      status: "Bom estado"
    },
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
                <p className="text-sm text-muted-foreground">Gestão de Campos</p>
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
            <h2 className="text-3xl font-bold text-foreground">Campos e Potreiros</h2>
            <p className="text-muted-foreground mt-1">Gerencie todos os campos da fazenda</p>
          </div>
          <Button variant="hero" className="gap-2">
            <Plus className="h-4 w-4" />
            Cadastrar Campo
          </Button>
        </div>

        {/* Fields Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => {
            const occupancyPercent = (field.current / field.capacity) * 100;
            const isNearCapacity = occupancyPercent > 90;

            return (
              <Card key={field.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{field.name}</CardTitle>
                        <CardDescription>Tipo: {field.type}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={isNearCapacity ? "destructive" : "secondary"}>
                      {occupancyPercent.toFixed(0)}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Lotação</span>
                      <span className="font-medium text-foreground">
                        {field.current} / {field.capacity}
                      </span>
                    </div>
                    <Progress 
                      value={occupancyPercent} 
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pastagem</span>
                      <span className="font-medium text-foreground">{field.pastureType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className={`font-medium ${isNearCapacity ? 'text-destructive' : 'text-primary'}`}>
                        {field.status}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Card */}
        <Card className="mt-8 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Resumo Geral
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total de Campos</p>
              <p className="text-3xl font-bold text-foreground">{fields.length}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Capacidade Total</p>
              <p className="text-3xl font-bold text-foreground">
                {fields.reduce((acc, f) => acc + f.capacity, 0)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Animais Alocados</p>
              <p className="text-3xl font-bold text-foreground">
                {fields.reduce((acc, f) => acc + f.current, 0)}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Fields;
