import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

type ResponseData = {
  url: string | undefined;
};

interface RequestImage extends NextApiRequest {
  body: {
    prompt: string;
    n: number;
    size: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
  request: Request,
  res: NextApiResponse<ResponseData>
) {
  const body = await request.json();
  const string = body.prompt;

  if (!string) {
    return new Response("You need a prompt", { status: 400 });
  }

  const response = await openai.createImage({
    prompt: string,
    n: 1,
    size: "512x512",
  });

  const imageUrl = response.data.data[0].url;
  return NextResponse.json({ url: imageUrl }, { status: 200 });
}
