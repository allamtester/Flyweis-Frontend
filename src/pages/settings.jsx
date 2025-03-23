import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import authLogo from "@/assets/auth-logo.png"

export default function SettingsPage() {
    const [logo, setLogo] = useState(authLogo)
    const [appName, setAppName] = useState("Free Shops")
    const [tags, setTags] = useState("#shopping #free #freeshoppingapp")
    const [phone, setPhone] = useState("+141-298 142 234")
    const [email, setEmail] = useState("freeshopsapp@mail.com")
    const [currencyOption, setCurrencyOption] = useState("disable")
    const [paymentGateways, setPaymentGateways] = useState(false)
    const [headline, setHeadline] = useState("")
    const [subHeadline, setSubHeadline] = useState("")
    const [description, setDescription] = useState("")
    const [privacyPolicy, setPrivacyPolicy] = useState("")
    const [termsConditions, setTermsConditions] = useState("")
    const [banner, setBanner] = useState(null)

    const handleLogoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => setLogo(e.target.result)
            reader.readAsDataURL(file)
        }
    }

    const handleBannerChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => setBanner(e.target.result)
            reader.readAsDataURL(file)
        }
    }

    const handleSaveChanges = () => {
        // Handle saving changes
        console.log("Changes saved")
    }

    return (
        <>
            <p className="text-white my-1">Configure app settings and integrations</p>
            <div className="container mx-auto space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>General Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="logo">App Logo</Label>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="border rounded-lg w-20 h-20 overflow-hidden">
                                    <img src={logo || "/placeholder.svg"} alt="App Logo" className="w-full h-full object-cover" />
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-[#0ea5e9] border-[#0ea5e9] hover:bg-[#0ea5e9]/10"
                                    onClick={() => document.getElementById("logo-upload").click()}
                                >
                                    Change logo
                                </Button>
                                <input id="logo-upload" type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="app-name">App Name</Label>
                            <Input id="app-name" value={appName} onChange={(e) => setAppName(e.target.value)} className="mt-2" />
                        </div>

                        <div>
                            <Label htmlFor="tags">Tags</Label>
                            <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} className="mt-2" />
                        </div>

                        <div>
                            <Label>Contact</Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <Input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Currency</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup value={currencyOption} onValueChange={setCurrencyOption} className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="enable" id="enable" />
                                <Label htmlFor="enable">Enable</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="disable" id="disable" />
                                <Label htmlFor="disable">Disable</Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>enable/disable payment gateways</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Switch checked={paymentGateways} onCheckedChange={setPaymentGateways} id="payment-gateways" />
                            <Label htmlFor="payment-gateways" className="sr-only">
                                Toggle payment gateways
                            </Label>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Push Notification</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input placeholder="Headline" value={headline} onChange={(e) => setHeadline(e.target.value)} />
                        <Input placeholder="Sub headline" value={subHeadline} onChange={(e) => setSubHeadline(e.target.value)} />
                        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 border rounded-lg h-32 flex items-center justify-center bg-gray-50">
                                {banner ? (
                                    <img src={banner || "/placeholder.svg"} alt="Banner Preview" className="w-full h-full object-contain" />
                                ) : (
                                    <span className="text-gray-400">Banner Preview</span>
                                )}
                            </div>
                            <div className="flex items-center">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-[#0ea5e9] border-[#0ea5e9] hover:bg-[#0ea5e9]/10"
                                    onClick={() => document.getElementById("banner-upload").click()}
                                >
                                    Upload Banner
                                </Button>
                                <input id="banner-upload" type="file" accept="image/*" className="hidden" onChange={handleBannerChange} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Privacy Policy/Terms:</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Textarea
                            placeholder="Write Privacy Policy description"
                            value={privacyPolicy}
                            onChange={(e) => setPrivacyPolicy(e.target.value)}
                            className="min-h-[100px]"
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Terms & Conditions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Textarea
                            placeholder="Write Terms & Condition description"
                            value={termsConditions}
                            onChange={(e) => setTermsConditions(e.target.value)}
                            className="min-h-[100px]"
                        />
                    </CardContent>
                </Card>

                <div className="flex justify-center">
                    <Button onClick={handleSaveChanges} className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white">
                        Save all changes
                    </Button>
                </div>
            </div>
        </>
    )
}

