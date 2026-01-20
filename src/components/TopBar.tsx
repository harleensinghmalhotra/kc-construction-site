import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar__container">
        <div className="top-bar__left">
          <a href="tel:(773)582-1366" className="top-bar__link">
            <Phone size={14} />
            <span>(773) 582-1366</span>
          </a>

          <a href="mailto:info@kingcoleman.com" className="top-bar__link">
            <Mail size={14} />
            <span>info@kingcoleman.com</span>
          </a>
        </div>

        <div className="top-bar__right">
          <span className="top-bar__location">
            <MapPin size={14} />
            <span>Chicago, IL</span>
          </span>
        </div>
      </div>
    </div>
  );
}
