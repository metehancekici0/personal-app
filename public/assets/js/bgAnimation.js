function animateWithRandomNumber(e, t, s) {
    TweenLite.fromTo(
      e,
      Math.floor(20 * Math.random() + 1),
      { y: t },
      {
        y: s,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [e, t, s],
        ease: Linear.easeNone
      }
    )
  }
  const itemsDown = [
    '.light4',
    '.light5',
    '.light6',
    '.light7',
    '.light8',
    '.light11',
    '.light12',
    '.light13',
    '.light14',
    '.light15',
    '.light16'
  ].forEach(e => animateWithRandomNumber(e, -1080, 1080)),
    itemsUp = [
      '.light1',
      '.light2',
      '.light3',
      '.light9',
      '.light10',
      '.light17'
    ].forEach(e => animateWithRandomNumber(e, 1080, -1080))
    