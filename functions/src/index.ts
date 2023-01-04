import * as functions from "firebase-functions";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getPrompt = functions.https.onCall(async (data, context) => {
  const { name, age, gender, location, countryOfOrigin, hobbies, fact } = data;

  const genderText = gender === 3 ? "" : `I am a: ${gender}`;
  const prompt = `Write me a short to medium length online dating profile biography. \n\nSome information about me:\n\nI am ${name}.\nI am: ${age} Years old.\n.${genderText}\nI live in: ${location}.\nI am from: ${countryOfOrigin}.\nMy hobbies include: ${hobbies}.\nA fun fact about me is: ${fact}.\n\nYou can rewrite the hobbies.\nThe first line should be a joke. \nMake the joke a one line joke.\nThe joke should be about dating or tinder.\nTry to make me stand out from the rest.\nKeep the biography short.\nKeep the language level very low.\nMake the biography very easy to understand.\nI am 21 years old and a student in the Netherlands. \nUse emojis in the biography.\nMaybe put a question for the match in the end of the biography.\nwrite it in the form of a small joke at the top, then a newline and then the rest of the biography.\n\nGive me three very different options.\nEnumerate the options with a newline between them.\n\nContinue after here:\n\n`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.88,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  functions.logger.info(response);
  return response;
});
