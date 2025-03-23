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
import { Check, MoreHorizontal, Search, Star, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function RatingReview() {
    return (
        <div>
            <p className="text-white my-1">List of reviews with ratings, comments, and user details</p>
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <div>All (877)</div>
                            <div className="text-[#00A3B5]">Approve (500)</div>
                            <div className="border h-8"></div>
                            <div className="text-[#00A3B5]">Pending (377)</div>
                        </div>
                        <div className="relative">
                            <Button className="absolute px-4 py-2 rounded-md right-[0px] top-[0px] text-white bg-[#00A3B5]">
                                Search
                            </Button>
                            <Input className="pr-8 w-[400px]" placeholder="Search Review by Date..." />
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
                                <TableHead>Comment</TableHead>
                                <TableHead>Ratings</TableHead>
                                <TableHead>Date & Time</TableHead>
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
                                        {/* <div>
                                            <div className="text-xs text-red-500">{user.sold} Sold</div>
                                            <div className="text-xs text-green-500">{user.bought} Bought</div>
                                        </div> */}
                                        <div>{user.comement}</div>
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
                                        {/* <Button
                                            variant={
                                                user.status === "Block" ? "destructive" : "outline"
                                            }
                                            size="sm"
                                        >
                                            {user.status}
                                        </Button> */}
                                        <div>{user.DatenTime}</div>
                                    </TableCell>
                                    <TableCell>
                                        {/* <DropdownMenu>
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
                                        </DropdownMenu> */}
                                        {user.isRequest == 'request' &&
                                            <div className="flex space-x-4">
                                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center [&_svg:not([class*='size-'])]:size-7">
                                                    <Check />
                                                </Button>
                                                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-lg w-8 h-8 flex items-center justify-center [&_svg:not([class*='size-'])]:size-7">
                                                    <X />
                                                </Button>
                                            </div>
                                        }
                                        {user.isRequest == 'approve' &&
                                            <div className="flex">
                                                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-lg w-20 h-8 flex items-center justify-center [&_svg:not([class*='size-'])]:size-7">
                                                    Approve
                                                </Button>
                                            </div>
                                        }
                                        {user.isRequest == 'decline' &&
                                            <div className="flex ">
                                                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-lg w-20 h-8 flex items-center justify-center [&_svg:not([class*='size-'])]:size-7">
                                                    Decline
                                                </Button>
                                            </div>
                                        }
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
        comement: "Very good",
        DatenTime: "July 3, 2023 12:33 pm",
        isRequest: "request"
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
        comement: "Very good",
        DatenTime: "July 3, 2023 12:33 pm",
        isRequest: "approve"
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
        comement: "Very good",
        DatenTime: "July 3, 2023 12:33 pm",
        isRequest: "decline"
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
        comement: "Very good",
        DatenTime: "July 3, 2023 12:33 pm",
        isRequest: "request"
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
        comement: "Very good",
        DatenTime: "July 3, 2023 12:33 pm",
        isRequest: "decline"
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
        comement: "Very good",
        DatenTime: "July 3, 2023 12:33 pm",
        isRequest: "approve"
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
        comement: "Very good",
        DatenTime: "July 3, 2023 12:33 pm",
        isRequest: "request"
    },
];