var playlist = {"The Postal Service" : "Brand New Colony"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {Object[artistName]: songTitle})
}
