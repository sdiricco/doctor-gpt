import OpenAI from "openai";
import { CHAT_GPT_APY_KEY } from "@/constants/index";
import { Ref, ref } from "vue";

const JSONClone = (obj:any) => JSON.parse(JSON.stringify(obj)); 

const openAi = new OpenAI({
  apiKey: CHAT_GPT_APY_KEY,
  dangerouslyAllowBrowser: true,
});

const status = ref(0);

const messageSystem = {
  role: "system",
  content: `Fornisci sempre la risposta utilizzando sintassi html ed evita il carattere ("). Sei un medico virtuale, l'utente è il tuo paziente. Cerca di aiutarlo fornendo una diagnosi del problema che ha o analizzando i sintomi che ti descrive. Devi cercare di fornire visite da fare e tutto il possibile.`,
}

const messages = ref<any>([]);

const messageAssistant = ref({
  role: "assistant",
  content: ''
});

export function useGpt(): {messageAssistant:Ref, messages: Ref, status: Ref} {
  return {
    messageAssistant,
    messages,
    status
  };
}

export async function execGpt(input: string){
  status.value = 1;
  messageAssistant.value.content = "";
  messages.value.push({
    role: "user",
    content: input,
  });
  const messagesClone = JSONClone(messages.value)
  messagesClone.unshift(messageSystem)
  console.log(messagesClone)
  const stream = await openAi.chat.completions.create({
    messages: messagesClone,
    model: "gpt-3.5-turbo",
    stream: true,
  });
  let output = '';
  for await (const part of stream) {
    const content = part.choices[0]?.delta?.content?.toString();
    if (content) {
      output += content;
      messageAssistant.value.content = output;
    }
  }
  messages.value.push({
    role: "assistant",
    content: output,
  });
  status.value = 0;

}
