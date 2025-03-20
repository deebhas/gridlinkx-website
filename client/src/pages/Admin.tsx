import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  organization: string | null;
  interest: string;
  message: string | null;
  createdAt: string;
};

export default function Admin() {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const { data: submissions, isLoading, error } = useQuery({
    queryKey: ["/api/admin/submissions"],
    enabled: isAuthenticated,
    queryFn: async () => {
      const response = await fetch("/api/admin/submissions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch submissions");
      }
      const data = await response.json();
      return data.data as ContactSubmission[];
    },
  });

  const handleLogin = () => {
    if (!token.trim()) {
      toast({
        title: "Error",
        description: "Please enter an admin token",
        variant: "destructive",
      });
      return;
    }
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Admin Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <Button className="w-full" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">Loading submissions...</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center text-red-500">
              Error loading submissions. Please check your admin token.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Interest</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions?.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{new Date(submission.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.organization || "-"}</TableCell>
                  <TableCell>{submission.interest}</TableCell>
                  <TableCell>{submission.message || "-"}</TableCell>
                </TableRow>
              ))}
              {submissions?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No submissions yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
