import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro de marca",
  description: "Gestiona el registro de tus marcas",
};

export default function BrandsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}