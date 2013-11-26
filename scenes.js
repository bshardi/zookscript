var SCENES = [
	{ id: 1, 
		name: "The Beach",
		description: "You find yourself on a smooth white beach. You hear the sound of sea gulls and the surf. To the off shore you see a shipwreck, inland is a small path. The Beach streaches in either direction.",
		directions: { north:  2, south: 3, east: 4, west: 5},
		items: ["water bottle", "Dead Fish", "Sea Shell"]
	}, 
	{ id: 2, 
		name: "The Coconut Tree",
		description: "After a short walk up the trail you come to a small hill with a tall coconut tree.",
		search: "You can see out over the beach you left. The shipwreck appears to be a large trawler that ran aground. There are many birds flying over the beach. You can see several coconuts in the tree above you. The sun feels very warm.",
		directions: { south: 1, up: 6},
		items: ["water bottle", "Dead Fish", "Sea Shell"]
	}, 
	{ id: 3, 
		name: "The Old Trawler",
		description: "You find yourself on a smooth white beach. You hear the sound of sea gulls and the surf. To the off shore you see a shipwreck, inland is a small path. The Beach streaches in either direction.",
		directions: { north:  1, south: 6, east: 6, west: 6},
		items: ["water bottle", "Dead Fish", "Sea Shell"]
	}, 
	{ id: 4, 
		name: "More Beach",
		description: "You continue to follow the beach heading east. The sound of the serf is lulling you to sleep.",
		search: "Sand and serf. Not much else. But you do see a peice of paper half burried in the sand.",
		directions: { south: 7, east: 4, west: 1},
		items: ["note"]
	}, 
	{ id: 5, 
		name: "West Beach",
		description: "YHeading west you see the sun setting over the beach. It looks as though you could go on west forever.",
		search: "Not much to see here. Jungle to the north, ocean to the south. Sand and beach otherwise.",
		directions: { south: 7, east: 1, west: 5},
		items: ["Sea Shells"]
	}, 
	{ id: 6, 
		name: "The Top of a Coconut Tree",
		description: "You struggle up the tree. But after a few minutes you make it to the top of the tree.",
		search: "Well, you are at the top of a tree. Palm fonds go off in all directions. You do see some coconuts and a big hairy spider.",
		directions: { down: 2},
		items: ["coconuts", "Hairy Spider"]
	}, 
	{ id: 7, 
		name: "The Ocean",
		description: "Water water everywhere and not a drop to drink. You are in the ocean.",
		search: "Not much to see here. Water, waves, maybe a shark fin here and there. you might want to swim back to shore.",
		directions: { north:  1, south: 7, east: 7, west: 7},
		items: []
	}
]