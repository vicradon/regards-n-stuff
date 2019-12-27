export function handleShare(){
  if (navigator.share) {
    navigator.share({
      title: 'Regards n Stuff',
      text: 'Check out Regards n Stuff',
      url: 'https://rns.netlify.com/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
export function handleCreate(){
  
}