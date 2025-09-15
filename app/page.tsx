"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { LogIn, UserPlus, Shield, Zap, Globe } from "lucide-react"

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect to dashboard
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-balance">
              Bienvenido a tu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                App Segura
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Una aplicación moderna con autenticación Firebase que te permite iniciar sesión de forma segura con email
              o Google.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/login">
                <LogIn className="mr-2 h-5 w-5" />
                Iniciar Sesión
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/register">
                <UserPlus className="mr-2 h-5 w-5" />
                Crear Cuenta
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Seguridad Avanzada</CardTitle>
              <CardDescription>Autenticación robusta con Firebase y protección de rutas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tu información está protegida con los más altos estándares de seguridad.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Acceso Rápido</CardTitle>
              <CardDescription>Inicia sesión con email o Google en segundos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Múltiples opciones de autenticación para tu comodidad.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Acceso Universal</CardTitle>
              <CardDescription>Accede desde cualquier dispositivo, en cualquier momento</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Tu cuenta sincronizada en todos tus dispositivos.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
