import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleDot, Cloud, Sprout, Plus, Search, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Animals = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cattle = [
    { id: "B-001", name: "Boi 001", age: 3, weight: 650, field: "Campo 1", status: "Saudável" },
    { id: "B-002", name: "Boi 002", age: 2, weight: 520, field: "Campo 1", status: "Vacinação pendente" },
    { id: "B-003", name: "Boi 003", age: 4, weight: 720, field: "Campo 2", status: "Saudável" },
  ];

  const sheep = [
    { id: "O-001", name: "Ovelha 001", age: 2, weight: 55, field: "Campo 5", status: "Esquila em 2 meses" },
    { id: "O-002", name: "Ovelha 002", age: 1, weight: 42, field: "Campo 5", status: "Saudável" },
    { id: "O-003", name: "Ovelha 003", age: 3, weight: 62, field: "Campo 6", status: "Saudável" },
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
                <p className="text-sm text-muted-foreground">Gestão de Animais</p>
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
        {/* Header Actions */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Rebanho</h2>
            <p className="text-muted-foreground mt-1">Gerencie todos os animais da fazenda</p>
          </div>
          <Button variant="hero" className="gap-2">
            <Plus className="h-4 w-4" />
            Cadastrar Animal
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por ID, nome ou campo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="cattle" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="cattle" className="gap-2">
              <CircleDot className="h-4 w-4" />
              Gado
            </TabsTrigger>
            <TabsTrigger value="sheep" className="gap-2">
              <Cloud className="h-4 w-4" />
              Ovelhas
            </TabsTrigger>
            <TabsTrigger value="all">Todos</TabsTrigger>
          </TabsList>

          <TabsContent value="cattle" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cattle.map((animal) => (
                <Card key={animal.id} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <CircleDot className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{animal.name}</CardTitle>
                          <CardDescription>ID: {animal.id}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Idade</p>
                        <p className="font-medium text-foreground">{animal.age} anos</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Peso</p>
                        <p className="font-medium text-foreground">{animal.weight} kg</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Localização</p>
                      <p className="font-medium text-foreground">{animal.field}</p>
                    </div>
                    <Badge variant={animal.status === "Saudável" ? "secondary" : "outline"}>
                      {animal.status}
                    </Badge>
                    <Button variant="outline" className="w-full mt-2">Ver Detalhes</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sheep" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sheep.map((animal) => (
                <Card key={animal.id} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Cloud className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{animal.name}</CardTitle>
                          <CardDescription>ID: {animal.id}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Idade</p>
                        <p className="font-medium text-foreground">{animal.age} anos</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Peso</p>
                        <p className="font-medium text-foreground">{animal.weight} kg</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Localização</p>
                      <p className="font-medium text-foreground">{animal.field}</p>
                    </div>
                    <Badge variant="secondary">{animal.status}</Badge>
                    <Button variant="outline" className="w-full mt-2">Ver Detalhes</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all">
            <p className="text-muted-foreground text-center py-8">Visualização combinada em desenvolvimento</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Animals;
