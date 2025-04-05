import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-500 to-yellow-500 py-6 shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Sujata Snacks</h1>
            <p className="mt-2 text-white text-lg">A unit of Chakravartin Balaji Food</p>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="bg-amber-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">About Us</h2>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-amber-600">Chakravartin Balaji Food</h3>
              <div className="text-gray-700 leading-relaxed text-left">
                <p className="mb-4">
                  Was incorporated in the year 2025 having its Registered office at Garbeta, West Bengal. We are into
                  manufacturing of Bakery products like Bread, Rusk, Cakes, Cookies and Khari items. We are a renowned
                  brand operating in the Eastern part of India.
                </p>
                <p className="mb-4">
                  We at Salasar Bakers Private Limited believe "Quality is Supreme", there are no compromises made when
                  it comes to the Quality of Raw Materials. We can proudly say that we use the best available Raw
                  Materials for Manufacturing, keeping the Health of our esteemed customers in mind. We have a good
                  brand recall among our consumers because of our Taste & Quality.
                </p>
                <p>
                  We have a very warm relation with our Channel Partners/Distributors, most of them have been with us
                  throughout our journey of more than 20 years. The promoters of our company are first generation
                  entrepreneurs in the business of bakery products with the experience for more than last 20 years and
                  are known for their expertise in Bakery and their use of latest machine technologies. We believe that
                  our journey has just begun and we are determined to reach the Highest level possible by overcoming new
                  challenges everyday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Company Information Card */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="border-b border-gray-200 bg-amber-50 px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">Company Information</h2>
            </div>

            <div className="px-6 py-6">
              {/* Product Information */}
              <div className="mb-6 rounded-md bg-amber-50 p-4">
                <h3 className="mb-2 text-lg font-medium text-gray-800 text-center">
                  Official Website of Sujata Snacks
                </h3>
                <p className="text-center text-gray-700">
                  We are manufacturer of confectionery items like Cakes, Rusks, Cookies, Bread & Kharis.
                </p>
              </div>

              {/* GSTIN */}
              <div className="mb-6 rounded-md bg-amber-50 p-4">
                <h3 className="mb-2 text-lg font-medium text-gray-800">GSTIN</h3>
                <p className="text-lg font-semibold text-amber-700">19AJMPS1870M2ZD</p>
              </div>

              {/* Addresses */}
              <div className="mb-6 grid md:grid-cols-2 gap-6">
                {/* Factory Address */}
                <div className="rounded-md border border-gray-200 p-4">
                  <div className="mb-3 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-amber-600" />
                    <h3 className="text-lg font-medium text-gray-800">Factory Address</h3>
                  </div>
                  <div className="ml-7 space-y-1 text-gray-600">
                    <p>Vil-Moirakata</p>
                    <p>Post - Garbeta,</p>
                    <p>District - Paschim Mednipur,</p>
                    <p>Pin Code - 721127,</p>
                    <p>West Bengal</p>
                    <p className="mt-2 font-medium text-gray-700">Opp. Moirakata Bus Stand</p>
                  </div>
                </div>

                {/* Head Office */}
                <div className="rounded-md border border-gray-200 p-4">
                  <div className="mb-3 flex items-center">
                    <Building className="mr-2 h-5 w-5 text-amber-600" />
                    <h3 className="text-lg font-medium text-gray-800">Head Office</h3>
                  </div>
                  <div className="ml-7 space-y-1 text-gray-600">
                    <p>568 Block N</p>
                    <p>New Alipore,</p>
                    <p>Gangotri Apartment, Kolkata</p>
                    <p>Pin Code - 700053,</p>
                    <p>West Bengal</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 rounded-md border border-gray-200 p-4">
                <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-amber-600" />
                  <p className="text-gray-600">+91 XXXXXXXXXX</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-amber-600" />
                  <p className="text-gray-600">contact@chakravartinbalajifood.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-amber-600" />
                  <p className="text-gray-600">Business Hours: -:00 AM - -:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm">© {new Date().getFullYear()} Chakravartin Balaji Food. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

