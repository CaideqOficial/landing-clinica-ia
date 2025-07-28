import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function LandingPageClinica() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto grid gap-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">Automatiza tu Clínica y Aumenta tus Ingresos</h1>
          <p className="text-lg text-gray-600">
            Implementamos inteligencia artificial para llenar tu agenda, automatizar tareas y mejorar tus ingresos sin contratar más personal.
          </p>
          <button className="text-lg px-6 py-3 rounded-2xl bg-blue-500 text-white shadow-md">Reserva tu Demo Gratuita</button>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold">¿Qué conseguirás?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Llenar tu agenda con pacientes nuevos y recurrentes</li>
                <li>Reducir tareas administrativas más del 40%</li>
                <li>Fidelizar pacientes con seguimientos automáticos</li>
                <li>Mejorar tu reputación online y atraer más pacientes</li>
                <li>Decisiones basadas en datos reales</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold">¿Cómo lo hacemos?</h2>
              <ul className="list-decimal list-inside space-y-2">
                <li>Analizamos tu clínica y puntos de mejora</li>
                <li>Activamos un sistema de IA personalizado</li>
                <li>Tú te enfocas en atender mientras el sistema trabaja</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Solicita tu Demo Gratuita</h2>
          <form className="grid gap-4 md:grid-cols-2">
            <Input type="text" placeholder="Nombre y Apellido" required />
            <Input type="email" placeholder="Email" required />
            <Input type="tel" placeholder="Teléfono de contacto" />
            <Textarea placeholder="Cuéntanos brevemente sobre tu clínica (opcional)" className="md:col-span-2" />
            <Button type="submit" className="md:col-span-2 text-lg px-6 py-3 rounded-2xl shadow-md">Solicitar Demo</Button>
          </form>
        </section>

        <footer className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Tu Agencia IA. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}
