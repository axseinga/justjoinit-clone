import { Box, List, ListItem } from "@mui/material";
import { Logo } from "../logo";
import {
  FooterInner,
  FooterLink,
  FooterListTitle,
  FooterSocialsList,
  FooterSocialsListItem,
  FooterWrapper,
} from "./footer.styles";
import NextLink from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconYoutube } from "@/components/icons/icon-youtube";

export const Footer = () => {
  const footerLinks = [
    {
      label: "Products",
      links: [
        {
          label: "Offers",
          href: "/",
        },
        {
          label: "Top Companies",
          href: "/",
        },
        {
          label: "Geek",
          href: "/",
        },
        {
          label: "Employer Panel",
          href: "/",
        },
        {
          label: "Candidate Profile",
          href: "/",
        },
        {
          label: "Pricing",
          href: "/",
        },
      ],
    },
    {
      label: "Resources",
      links: [
        {
          label: "Help",
          href: "/",
        },
        {
          label: "Terms",
          href: "/",
        },
        {
          label: "Privacy Policy",
          href: "/",
        },
        {
          label: "Cookie settings",
          href: "/",
        },
      ],
    },
    {
      label: "About us",
      links: [
        {
          label: "About us",
          href: "/",
        },
        {
          label: "Career",
          href: "/",
        },
      ],
    },
  ];
  return (
    <FooterWrapper component="footer">
      <FooterInner>
        <Logo />
        {footerLinks.map((footerColumn, index) => (
          <Box key={`${index}_${footerColumn.label}`}>
            <FooterListTitle variant="h5" component="p">
              {footerColumn.label}
            </FooterListTitle>
            <List>
              {footerColumn.links.map((link, linkIndex) => (
                <ListItem sx={{ paddingLeft: 0 }}>
                  <FooterLink
                    component={NextLink}
                    href={link.href}
                    key={`${linkIndex}_${link.label}`}
                  >
                    {link.label}
                  </FooterLink>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
        <Box>
          <FooterListTitle variant="h5" component="p">
            Follow us on social media
          </FooterListTitle>
          <FooterSocialsList>
            <FooterSocialsListItem sx={{ padding: 0 }}>
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="facebook"
              >
                <FacebookIcon fontSize="large" />
              </a>
            </FooterSocialsListItem>
            <FooterSocialsListItem sx={{ padding: 0 }}>
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="instagram"
              >
                <InstagramIcon fontSize="large" />
              </a>
            </FooterSocialsListItem>
            <FooterSocialsListItem sx={{ padding: 0 }}>
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="linkedin"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </FooterSocialsListItem>
            <FooterSocialsListItem sx={{ padding: 0 }}>
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="youtube"
              >
                <IconYoutube />
              </a>
            </FooterSocialsListItem>
          </FooterSocialsList>
        </Box>
      </FooterInner>
    </FooterWrapper>
  );
};
