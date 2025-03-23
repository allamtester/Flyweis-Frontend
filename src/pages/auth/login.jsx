import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { AuthContext } from "@/context/auth";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    try {
      const response = await axios.post('api/v1/admin/login', {
        email: formData.username.trim(),
        password: formData.password.trim()
      })

      if (response) {
        setToken(response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      } else {
        toast.error("Invalid username or password!");
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed", {
        description: error.response.data.message,
      });
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <Card className="w-full max-w-md rounded-lg bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Log in</CardTitle>
        <p className="text-sm text-gray-500">Welcome to Free Shops App controller</p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div >
            <Label htmlFor="username" className="mb-1">User Name</Label>
            <Input id="username" type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>

          <div >
            <Label htmlFor="password" className="mb-1">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="text-center">
            <Link to="#" className="text-sm ">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full rounded-md bg-[#00A3B5]" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Log in...
              </>
            ) : (
              "Log in"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-center text-sm">
          <Link to="/register" className="text-[#00A3B5]">
            Create New Account
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}