import { Search, Bell, MoreHorizontal, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnalyticsCard } from "./analytics-card";
import { CompanyGrowthChart } from "./company-growth-chart";
import { EarningsChart } from "./earnings-chart";
import { Pagination } from "./pagination";

export function Dashboard() {
  return (
    <>
      <p className="text-white my-1">Analytics</p>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
            <AnalyticsCard
              title="Active Users"
              value="5556"
              linkText="View All Users"
              color="blue"
            />
            <AnalyticsCard
              title="Total Buyers"
              value="3480"
              linkText="View All Buyers"
              color="green"
            />
            <AnalyticsCard
              title="Total Ads"
              value="459"
              linkText="View All Ads"
              color="yellow"
            />
            <AnalyticsCard
              title="Total Sellers"
              value="2924"
              linkText="View All Sellers"
              color="pink"
            />
            <Card className="gap-0 relative col-span-2">
              <CardHeader className="">
                <CardTitle className="absolute text-lg">Total Earning</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">$12,423.48.00</div>
                <EarningsChart />
              </CardContent>
            </Card>
          </div>
          {/* </div> */}

          <Card className="lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Company Growth</CardTitle>
              <div className="text-xs text-gray-500">Feb-July 2023</div>
            </CardHeader>
            <CardContent>
              <CompanyGrowthChart />
              <Tabs defaultValue="month" className="mt-4">
                <TabsList className="grid grid-cols-4 w-full max-w-[400px]">
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                  <TabsTrigger value="2year">2 Year</TabsTrigger>
                  <TabsTrigger value="3year">3 Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>User Deal</TableHead>
                  <TableHead>Block / Unblock</TableHead>
                  <TableHead>Ratings</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <img
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                          />
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-gray-500">
                            {user.email}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user.phone}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-xs text-red-500">{user.sold} Sold</div>
                        <div className="text-xs text-green-500">{user.bought} Bought</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant={
                          user.status === "Block" ? "destructive" : "outline"
                        }
                        size="sm"
                      >
                        {user.status}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < user.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuItem>Delete User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex justify-between items-center mt-4">
              <Button variant="outline" size="sm">
                Delete
              </Button>
              <Pagination />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

const users = [
  {
    id: 1,
    name: "Yessy Rosales",
    email: "yessyrosales@gmail.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=32&width=32",
    sold: 2,
    bought: 1,
    status: "Block",
    rating: 4,
  },
  {
    id: 2,
    name: "Taleb Collins",
    email: "talebcollins@gmail.com",
    phone: "+1 (555) 987-6543",
    avatar: "/placeholder.svg?height=32&width=32",
    sold: 6,
    bought: 3,
    status: "Unblock",
    rating: 5,
  },
  {
    id: 3,
    name: "Yessy Rosales",
    email: "yessyrosales@gmail.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=32&width=32",
    sold: 2,
    bought: 1,
    status: "Block",
    rating: 3,
  },
  {
    id: 4,
    name: "Taleb Collins",
    email: "talebcollins@gmail.com",
    phone: "+1 (555) 987-6543",
    avatar: "/placeholder.svg?height=32&width=32",
    sold: 6,
    bought: 3,
    status: "Unblock",
    rating: 4,
  },
  {
    id: 5,
    name: "Taleb Collins",
    email: "talebcollins@gmail.com",
    phone: "+1 (555) 987-6543",
    avatar: "/placeholder.svg?height=32&width=32",
    sold: 6,
    bought: 3,
    status: "Unblock",
    rating: 4,
  },
];
