import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Pagination } from "./dashboard/pagination";
import { MoreHorizontal, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function UserManagement() {
    return (
        <div>
            <p className="text-white my-1">List of users</p>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex justify-end">
                        <div className="relative">
                            <Button className="absolute px-4 py-2 rounded-md right-[0px] top-[0px] text-white bg-[#00A3B5]">
                                Search
                            </Button>
                            <Input className="pr-8 w-[400px]" placeholder="Search user by their name..." />
                        </div>
                    </CardTitle>
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
    )
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