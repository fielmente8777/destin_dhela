import { contact } from "@/src/utils/constent";

interface FooterData {
  logo: string;

  lists: {
    title?: string;
    links: {
      label?: string;
      label2?: string;
      href?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/images/footer.png",

  lists: [
    {
      title: "Location",
      links: [
        {
          label: "",
          href: contact.addressLink,
        },
      ],
    },

    {
      title: "Contact",
      links: [
        {
          label: `Call: ${contact.phone[0]}`,
          href: `tel:${contact.phone[0]?.replace(/[\s-]/g, "") || ""}`,
        },

        {
          label: `Email: ${contact.email}`,
          href: `mailto:${contact.email}`,
        },
      ],
    },
  ],
};
