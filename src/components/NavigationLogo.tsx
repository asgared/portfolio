/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import {IconUniverzooLogo} from '@/src/assets/univerzooIcons'
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <IconUniverzooLogo className="container-fluid univerzooLogo" />
    </nav>
  )
}

export default Navigation