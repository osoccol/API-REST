exports.getFarm = (req, res, next) => {
    console.log('Méthode')
    const stuff = [
    {
      _id: 'oeihfzeoi',
      animal: 'Elephant',
      description: 'All of the info about my first thing',
      imageUrl: '',
      length: 320,
      weight: 4900,
    },
    {
      _id: 'oeihfzeomoihi',
      animal: 'Girafe',
      description: 'All of the info about my second thing',
      imageUrl: '',
      length: 2900,
      weight: 2100,
    }];
    res.status(200).json(stuff);
}

exports.getObj = (req, res, next) => {
    let object =
    {
      _id: 'oeihfzeoi',
      animal: 'Elephant',
      description: 'All of the info about my first thing',
      imageUrl: '',
      length: 320,
      weight: 4900,
    }
    res.status(200).json(object);
}