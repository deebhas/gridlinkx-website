import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Status() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">System Status</h1>
      
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
  );
}