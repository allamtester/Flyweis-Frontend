import { useState } from "react"
import { Link } from "react-router-dom"
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { toast } from "sonner"
import { Label } from "@/components/ui/label"
import axios from "axios"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // Trim and split name properly
    const nameParts = formData.name.trim().split(/\s+/);
    const firstName = nameParts[0] ? capitalize(nameParts[0]) : "";
    const lastName = nameParts[1] ? capitalize(nameParts.slice(1).join(" ")) : ""; // Handle multi-word last names
  
  
    try {
      const response = await axios.post('/api/v1/admin/registration', {
        fullName: firstName+lastName,
        firstName,
        lastName,
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
      });
  
      console.log("Form submitted:", formData);
      toast.success("Account created!", {
        description: "Your account has been created successfully.",
      });
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Registration failed", {
        description: error.response.data.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="gap-0">
        <CardTitle className="text-2xl font-bold">Create New Account</CardTitle>
        <CardDescription>Welcome to Free Shops App controller</CardDescription>
      </CardHeader>

      <CardContent>

        <form onSubmit={onSubmit} className="space-y-3">
          <div>

            <Label htmlFor="name" className="mb-1">Name</Label>
            <Input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div>

            <Label htmlFor="email" className="mb-1">Email</Label>
            <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>

            <Label htmlFor="phone" className="mb-1">Phone Number</Label>
            <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div>

            <Label htmlFor="password" className="mb-1">Password</Label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="mb-1">Confirm Password</Label>
            <div className="relative">
              <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full mt-4 bg-[#00A3B5]" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center">
        <div className="text-center text-sm">
          <Link to="/" className="text-[#00A3B5]">
            Already have an account?
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}