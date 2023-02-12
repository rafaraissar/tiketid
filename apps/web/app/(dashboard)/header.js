"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosee = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerleft}>
        <Link className={styles.logocontainer} href="/home">
          <Image
            src="/logo/logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className={styles.logo}
            alt="logo"
            priority
          />
        </Link>
        <div>
          <form className={styles.searchcontainer}>
            <label
              htmlFor="search"
              onClick={handleOpen}
              className={styles.search}
            >
              <SearchIcon />
              &nbsp;&nbsp;Cari event disini...
            </label>
          </form>

          <div className={open ? styles.modalsearch : styles.modalsearchclose}>
            <div className={styles.searchbar}>
              <div className={styles.searchbarinput}>
                <ArrowBackIcon
                  onClick={handleClose}
                  className={styles.searchicon}
                />
                <input type="text" id="search" className={styles.searchinput} />
              </div>

              <div className={styles.searchvalue} onClick={handleClose}>
                asd
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerright}>
        <div>
          <Link href="/help" onMouseOver={handleClick}>
            Tentang Kami
          </Link>
          <Menu
            className={styles.dropdownheader}
            anchorEl={anchorEl}
            open={openn}
            onClose={handleClosee}
          >
            <MenuItem onClick={handleClosee}>Profile</MenuItem>
            <MenuItem onClick={handleClosee}>My account</MenuItem>
            <MenuItem onClick={handleClosee}>Logout</MenuItem>
          </Menu>
        </div>
        <Link href="/help">Tentang Kami</Link>
        <Link href="/id">Pusat Bantuan</Link>
        <Link href="/home">Masuk/Daftar</Link>
        <a href="#about" className={styles.createetiket}>
          <AddIcon className={styles.createetiketicon} />
          &nbsp;Buat etiket
        </a>
      </div>
    </div>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
