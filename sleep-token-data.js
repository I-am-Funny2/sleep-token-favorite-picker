var items = [
    // ONE
    {id: 'thread-the-needle', name: 'Thread the Needle', album: 'One', image: 'images/sleep-token/one.jpg'},
    {id: 'fields-of-elation', name: 'Fields of Elation', album: 'One', image: 'images/sleep-token/one.jpg'},
    {id: 'when-the-bough-breaks', name: 'When the Bough Breaks', album: 'One', image: 'images/sleep-token/one.jpg'},

    // TWO
    {id: 'calcutta', name: 'Calcutta', album: 'Two', image: 'images/sleep-token/two.jpg'},
    {id: 'nazareth', name: 'Nazareth', album: 'Two', image: 'images/sleep-token/two.jpg'},
    {id: 'jericho', name: 'Jericho', album: 'Two', image: 'images/sleep-token/two.jpg'},

    // STANDALONE / FROM THE ROOM BELOW / COVERS
    {id: 'jaws', name: 'Jaws', album: 'Standalone', image: 'images/sleep-token/jaws.jpg'},
    {id: 'the-way-that-you-were', name: 'The Way That You Were', album: 'Standalone', image: 'images/sleep-token/the-way-that-you-were.jpg'},
    {id: 'shelter', name: 'Shelter', album: 'Standalone', image: 'images/sleep-token/sundowning-deluxe.jpg'},
    {id: 'hey-ya', name: 'Hey Ya!', album: 'Cover', image: 'images/sleep-token/hey-ya.jpg'},
    {id: 'when-the-partys-over', name: "When the Party's Over", album: 'Cover', image: 'images/sleep-token/sundowning-deluxe.jpg'},
    {id: 'i-wanna-dance-with-somebody', name: 'I Wanna Dance With Somebody', album: 'Cover', image: 'images/sleep-token/sundowning-deluxe.jpg'},
    {id: 'is-it-really-you', name: 'Is It Really You?', album: 'Cover', image: 'images/sleep-token/is-it-really-you.jpg'},

    // SUNDOWNING
    {id: 'the-night-does-not-belong-to-god', name: 'The Night Does Not Belong to God', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'the-offering', name: 'The Offering', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'levitate', name: 'Levitate', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'dark-signs', name: 'Dark Signs', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'higher', name: 'Higher', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'take-aim', name: 'Take Aim', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'give', name: 'Give', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'gods', name: 'Gods', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'sugar', name: 'Sugar', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'say-that-you-will', name: 'Say That You Will', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'drag-me-under', name: 'Drag Me Under', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},
    {id: 'blood-sport', name: 'Blood Sport', album: 'Sundowning', image: 'images/sleep-token/sundowning.jpg'},

    // THIS PLACE WILL BECOME YOUR TOMB
    {id: 'atlantic', name: 'Atlantic', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'hypnosis', name: 'Hypnosis', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'mine', name: 'Mine', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'like-that', name: 'Like That', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'the-love-you-want', name: 'The Love You Want', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'fall-for-me', name: 'Fall for Me', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'alkaline', name: 'Alkaline', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'distraction', name: 'Distraction', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'descending', name: 'Descending', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'telomeres', name: 'Telomeres', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'high-water', name: 'High Water', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},
    {id: 'missing-limbs', name: 'Missing Limbs', album: 'This Place Will Become Your Tomb', image: 'images/sleep-token/tpwybt.jpg'},

    // TAKE ME BACK TO EDEN
    {id: 'chokehold', name: 'Chokehold', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'the-summoning', name: 'The Summoning', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'granite', name: 'Granite', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'aqua-regia', name: 'Aqua Regia', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'vore', name: 'Vore', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'ascensionism', name: 'Ascensionism', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'are-you-really-okay', name: 'Are You Really Okay?', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'the-apparition', name: 'The Apparition', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'dywtylm', name: 'DYWTYLM', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'rain', name: 'Rain', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'take-me-back-to-eden', name: 'Take Me Back to Eden', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},
    {id: 'euclid', name: 'Euclid', album: 'Take Me Back to Eden', image: 'images/sleep-token/tmbte.jpg'},

    // EVEN IN ARCADIA
    {id: 'look-to-windward', name: 'Look to Windward', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'emergence', name: 'Emergence', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'past-self', name: 'Past Self', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'dangerous', name: 'Dangerous', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'caramel', name: 'Caramel', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'even-in-arcadia', name: 'Even in Arcadia', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'provider', name: 'Provider', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'damocles', name: 'Damocles', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'gethsemane', name: 'Gethsemane', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'},
    {id: 'infinite-baths', name: 'Infinite Baths', album: 'Even in Arcadia', image: 'images/sleep-token/even-in-arcadia.jpg'}
];