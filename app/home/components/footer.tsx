import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 pl-20 pr-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">FoodDelivery</h2>
          <p className="text-sm">
            Telefone: (11) 98765-4321 <br />
            Email: contato@fooddelivery.com
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaXTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} FoodDelivery. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
