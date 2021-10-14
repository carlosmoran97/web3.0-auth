import Moralis from 'moralis';

export function useMoralis() {
  // Moralis initialization
  let moralis;
  if (typeof window !== 'undefined') {
    moralis = Moralis;
    moralis.initialize(process.env.GATSBY_MORALIS_APPLICATION_ID);
    moralis.serverURL = process.env.GATSBY_MORALIS_SERVER_ID;
  }
  return { moralis };
}
