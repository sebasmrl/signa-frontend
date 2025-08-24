import { getOneBrandById } from "@/app/actions/server/get-one-brand.action";
import { UpdateBrandForm } from "@/app/components/forms/update-brand/UpdateBrandForm";
import { Brand } from "@/interfaces/brand.interface";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

interface Props {
    params: Promise<{ id: string }>
}


export default async function UpdateBrandPage({ params }: Props) {

  const rs = await getOneBrandById((await params).id);
  if(rs?.status != 200) return redirect('/dashboard/brands');

  return (
    <div className="flex flex-col bg-white w-full h-full rounded-lg p-4 sm:p-8 ">
      <UpdateBrandForm brand={rs.data as Brand}/>
    </div>
  );
}