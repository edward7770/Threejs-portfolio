export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("https://github.com/edwardthomas7770", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("https://linkedin.com/in/edwardthomas7770", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("https://wa.me/19175636098/", "new");
  if (onObject.object.uuid === cc.current.uuid)
    window.open("https://twitter.com/edwardthomas703", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("https://www.facebook.com/profile.php?id=61555996817955", "new");
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://social-freaks.vercel.app/", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://iicdcrustm.com/home/", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://whats-clone-1c76b.web.app/", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://museum-counsel.herokuapp.com/", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open("https://tic-tac-toe-7fcb8.web.app/", "new");
};

export const openProjectGithub = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://github.com/VinayMatta63/Social-Freaks", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://github.com/VinayMatta63/web", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://github.com/VinayMatta63/Chat-App", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://github.com/VinayMatta63/Museum-Counsel", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open(
      "https://github.com/VinayMatta63/tic-tac-toe-multipayer",
      "new"
    );
};
