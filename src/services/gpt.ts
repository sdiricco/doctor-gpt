import OpenAI from "openai";
import { CHAT_GPT_APY_KEY } from "@/constants/index";
import { Ref, ref } from "vue";

const openAi = new OpenAI({
  apiKey: CHAT_GPT_APY_KEY,
  dangerouslyAllowBrowser: true,
});

const messages: any = [
  {
    role: "system",
    content: `Fornisci sempre la risposta utilizzando sintassi html ed evita il carattere ("). Sei un medico virtuale, l'utente è il tuo paziente. Cerca di aiutarlo fornendo una diagnosi del problema che ha o analizzando i sintomi che ti descrive. Devi cercare di fornire visite da fare e tutto il possibile.`,
  },
];

const message = ref("");

export function useGpt(): {message:Ref} {
  return {
    message,
  };
}

export async function execGpt(input: string){
  message.value = "";
  messages.push({
    role: "user",
    content: input,
  });
  const stream = await openAi.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
    stream: true,
  });
  let output = '';
  for await (const part of stream) {
    const content = part.choices[0]?.delta?.content?.toString();
    if (content) {
      output += content;
      message.value = output;
    }
    console.log(output)
  }
  messages.push({
    role: "assistant",
    content: output,
  });
}
