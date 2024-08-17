// accepting props 25 jul 14.47
import Image from "next/image"
import Link from "next/link"

import infoAvatar from "@/assets/images/Unknown_person.jpg"

interface SidebarContactInfoProps {
  name: string;
  role: string;
  contactLocation: string;
  email: string;
  phone: string;
}

const SidebarContactInfo: React.FC<SidebarContactInfoProps> = ({
  name,
  role,
  contactLocation,
  email,
  phone
}) => {
  return (
    <>
      <Image src={infoAvatar} alt="" className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar" />
      <div className="text-center mt-25">
        <h6 className="name">{name}</h6>
        <p className="fs-16">{role}</p>
        <ul className="style-none d-flex align-items-center justify-content-center social-icon">
          <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
          <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
          <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
        </ul>
      </div>
      <div className="divider-line mt-40 mb-45 pt-20">
        <ul className="style-none">
          <li>Location: <span>{contactLocation}</span></li>
          <li>Email: <span><Link href={`mailto:${email}`}>{email}</Link></span></li>
          <li>Phone: <span><Link href={`tel:${phone}`}>{phone}</Link></span></li>
        </ul>
      </div>
      <Link href="/contact" className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONTACT US</Link>
    </>
  )
}

export default SidebarContactInfo
