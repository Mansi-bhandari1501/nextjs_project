// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}

// import axios from "axios";
// const POST = async (request: Request) => {
//   try {
//     const API_URL = process.env.NEXT_MESSAGE_BACKEND_API_URL;
//     const { message_id, attachment_id } = await request.json();
//     const res = await axios.get(
//       `${API_URL}/messages/${message_id}/attachments/${attachment_id}/signed-url`
//     );
//     return Response.json(res.data);
//   } catch (err: any) {
//     return new Response(err?.message ?? "Something went wrong", {
//       status: err?.response?.status ?? 500,
//     });
//   }
// };
// export { POST };
