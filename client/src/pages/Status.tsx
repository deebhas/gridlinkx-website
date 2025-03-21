import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { Link } from "wouter";

export default function Status() {
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Admin: System Status</h1>
        </div>
        
        <div className="mb-6 flex justify-between items-center">
          <p className="text-muted-foreground">
            This page is not visible in navigation and is for deployment verification only.
          </p>
          <Link href="/admin">
            <a className="text-primary hover:underline">Go to Admin Panel</a>
          </Link>
        </div>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Deployment Information</CardTitle>
              <CardDescription>Details about the current deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Environment</span>
                  <Badge variant="outline">{import.meta.env.NODE_ENV || 'development'}</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Deployment Platform</span>
                  <Badge variant="outline">
                    {window.location.hostname.includes('render.com') ? 'Render.com' : 'Other'}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Application Status</span>
                  <Badge className="bg-green-500">Online</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Version</span>
                  <Badge variant="outline">1.0.0</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Deployment Time</span>
                  <Badge variant="outline">{new Date().toLocaleString()}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}