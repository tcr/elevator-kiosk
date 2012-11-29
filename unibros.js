/**
 * Detect Webkit
 */

if (!window.WebKitAnimationEvent) {
	alert('Pleae use a WebKit based browser. We\'re sorry Mozilla :(')
}


/**
 * Fake information.
 */

var companies = [
	{name: 'Apple'},
	{name: 'Adobe'},
	{name: 'AMD'},
	{name: 'Disney Interactive'},
	{name: 'Dropbox'},
	{name: 'IDEO'},
	{name: 'Instagram'},
	{name: 'JC Penny'},
	{name: 'Jitter'},
	{name: 'Kindle Books'},
	{name: 'Luminair'},
	{name: 'Mass Challenge'},
	{name: 'Quora'},
	{name: 'Twitter Labs'},
	{name: 'Xerox'}
].map(function (company) {
	company.domain = company.name.replace(/\s+/, '').toLowerCase() + '.com'
	return company;
})

var people = names = ["Aaron Ruppe", "Abe Welliver", "Abram Rondeau", "Addie Maricle",
  "Adelina Steinfeldt", "Adell Tacker", "Afton Yarborough", "Aisha Aquino", "Akiko Hiltz",
  "Alanna Mcconico", "Albertina Weymouth", "Alecia Yopp", "Aleen Boyce", "Alejandrina Walborn",
  "Alfonzo Bigley", "Alica Obrien", "Allan Oglesby", "Alonso Carini", "Alton Lancon", "Alton Stalling",
  "America Wicker", "Amira Sobolik", "Andres Guzman", "Andrew Helms", "Angla Hug", "Annalee Richins",
  "Annelle Koonce", "Anton Herder", "Antonette Remmers", "Arnita Mccarty", "Ashley Merida",
  "Athena Dahmen", "Aubrey Sun", "Audie Alfieri", "Audry Hirata", "Aurea Corl", "Ayesha Mcwhorter",
  "Barry Coger", "Barton Fegan", "Becky Francisco", "Bennie Mello", "Bertie Marion", "Billye Sias",
  "Bob File", "Bob Normandin", "Bobbi Saeger", "Bobbye Swarey", "Bradford Lainez", "Bradly Vanburen",
  "Brianna Eargle", "Brice Gulick", "Bridget Mulkey", "Brigida Foraker", "Buster Christon", "Byron Corral", 
  "Carl Balboa", "Carlota Steinbeck", "Carolin Sokol", "Chad Balmer", "Chanel Hawke", "Chang Lanasa", 
  "Charles Gotto", "Chelsie Heron", "Chester Roark", "Cheyenne Morel", "Christoper Rhem", "Claudine Hughey", 
  "Clemente Gosney", "Clementine Stogsdill", "Clifford Mcculley", "Clint Morlan", "Cole Tietz", 
  "Coleman Marcin", "Collen Dewitt", "Conrad Brezinski", "Coralie Scianna", "Cordie Peter", 
  "Corey Sprau", "Corine Mckeller", "Corrie Mcbroom", "Corrinne Reda", "Criselda Duong", "Dale Chumbley", 
  "Danette Ranney", "Daron Barbagallo", "Dean Gallagher", "Deangelo Penson", "Debbi Patino", 
  "Delfina Twining", "Delma Hackett", "Demetrius Loughlin", "Deon Keffer", "Desmond Forshee", 
  "Dewey Messmer", "Diane Hagen", "Dodie Mendieta", "Donn Tipler", "Donte Provenza", "Doreatha Conte", 
  "Dorethea Everton", "Dorthey Umberger", "Dreama Halfacre", "Dwight Lock", "Dylan Glasser", 
  "Eddy Conry", "Edmond Steuck", "Edmundo Sturdevant", "Efren Pratte", "Eileen Bacher", 
  "Ellis Lovings", "Eloise Renaud", "Elroy Amundsen", "Emanuel Digby", "Emerson Lavin", 
  "Emmaline Fredericksen", "Emmett Burchett", "Eric Hoop", "Eric Perl", "Ernie Gartner", 
  "Esmeralda Spitler", "Evelia Ransom", "Everett Cortright", "Evon Furtado", "Ezekiel Whittle", 
  "Fausto Escalona", "Ferdinand Wicks", "Ferdinand Widner", "Fermin Mickelsen", "Fidela Bellows", 
  "Filiberto Tony", "Florentino Stewart", "Francesco Behling", "Francie Strobl", "Freddie Ham", 
  "Frieda Crossman", "Frieda Hartman", "Fumiko Cooks", "Gabriel Isbell", "Garrett Radel", "Garth Agosta", 
  "Gary Petrus", "Gavin Biddy", "Gayle Forsberg", "Gene Remick", "Geraldo Toussaint", "Gerda Mauck", 
  "Gilda Sapien", "Gino Stockdale", "Giuseppe Amend", "Glen Defazio", "Glory Minogue", "Greg Murdock", 
  "Hannah Pratt", "Hans Hartl", "Harley Flavors", "Hedwig Kaylor", "Heriberto Law", "Herta Fanning", 
  "Honey Chmiel", "Hong Krings", "Horace Tupper", "Hosea Gaddis", "Houston Mogan", "Howard Hemond", 
  "Ian Dockins", "Ilona Kettner", "Ilona Mcswain", "India Frasure", "Inge Villano", "Irena Mcginley", 
  "Irish Tijerina", "Isreal Herford", "Issac Borda", "Jack Pagano", "Jade Crandle", "Jaime Hadsell", 
  "Jalisa Avendano", "Janina Sumlin", "Jared Groner", "Jarrett Beckerman", "Jarrod Hardaway", 
  "Jarvis Hiles", "Jason Bieniek", "Jason Laiche", "Jason Tomaselli", "Jayson Hollingsworth", 
  "Jeanine Curiel", "Jeff Mandez", "Jefferson Cerrone", "Jeffery Davey", "Jerald Marcotte", 
  "Jere Mccleery", "Jermaine Dilbeck", "Jermaine Vasser", "Jerold Irey", "Jerry Herdon", "Jesusa Dyck", 
  "Jona Talbert", "Josh Donelan", "Juan Croteau", "Julius Trost", "Karen Liang", "Karima Viramontes", 
  "Karly Haffner", "Kati Poeppelman", "Kiana Tuff", "Kimberly Ong", "Kirby Ellerbee", "Kirby Sanderson", 
  "Kirk Mailman", "Korey Westberg", "Kristopher Blanton", "Kurt Severance", "Kyla Mor", "Lakesha Sitsler", 
  "Lang Rosenberry", "Lanny Gardener", "Larisa Noon", "Latoyia Oxley", "Laura Gutter", "Lauralee Karl", 
  "Lauretta Focht", "Lea Peredo", "Leatrice Waag", "Leland Saladin", "Leona Rosell", "Lera Sipos", 
  "Lewis Hymel", "Lilia Eakes", "Lionel Harrison", "Lloyd Rossell", "Lon Wimbush", "Loraine Bona", 
  "Loreen Paulding", "Lorraine Dejarnette", "Louie Petrarca", "Loyd Simoneaux", "Luisa Kitchell", 
  "Lulu Outten", "Lurlene Tam", "Lyndsay Plantz", "Madalene Augustus", "Malcolm Gurrola", "Malik Kirschner", 
  "Malik Woodrow", "Man Frederick", "Many Beverlin", "Marco Hosier", "Margarete Stull", "Margot Buckles", 
  "Maria Southwell", "Maria Spataro", "Marquis Miro", "Marybelle Trombetta", "Maxie Kirkman", 
  "Maya Junious", "Meaghan Deaner", "Michale Mcglinchey", "Michell Leader", "Michelle Laughter", 
  "Milda Batton", "Moshe Willmore", "Murray Witherite", "Myles Cutsforth", "Na Hentz", "Napoleon Overcash", 
  "Narcisa Crossno", "Natashia Covington", "Nathanial Melody", "Nathanial Pauline", "Nathaniel Smeltzer", 
  "Ned Skalski", "Nena Bardsley", "Nenita Mccaw", "Nevada Soper", "Nicki Thibodaux", "Nikole Guinyard", 
  "Nolan Adkison", "Numbers Kopecky", "Octavia Connelly", "Odell Hirano", "Olimpia Tozier", "Orlando Newlon", 
  "Otis Feldt", "Otto Brazell", "Owen Schuller", "Palmer Schwandt", "Pam Basilio", "Pam Gabler", 
  "Pamela Zych", "Patria Zalenski", "Patti Profit", "Paulina Quarles", "Percy Lincoln", "Perry Im", 
  "Philip Leboeuf", "Porter Utley", "Preston Morones", "Quentin Feucht", "Racquel Klapper", 
  "Rafael Daluz", "Rafael Flaugher", "Ramiro Angeles", "Randy Lao", "Ranee Hsieh", "Rashad Rowlands", 
  "Rashida Kabel", "Rea Kemmer", "Reagan Martell", "Reginia Theus", "Rey Straight", "Rickey Kerley", 
  "Ricki Rohman", "Ricki Steere", "Ricky Fowkes", "Rico Lofton", "Rocco Jessee", "Rocio Wardle", 
  "Rodrick Evanoff", "Rogelio Maule", "Rolland Macky", "Rosalyn Melugin", "Rosaria Coen", "Rosaria Sidhu", 
  "Roscoe Ogg", "Roxy Newnam", "Rufus Cardinale", "Russell Huckaby", "Samuel Linck", "Sandy Maurer", 
  "Santo Escalera", "Sarai Cameron", "Scot Orloff", "Scott Aguila", "Sean Pardo", "Season Clairmont", 
  "Shad Sievert", "Shakia Lukasiewicz", "Shakia Steeves", "Shala Loy", "Shanae Machen", "Sharen Remley", 
  "Shay Brackins", "Shelby Hamann", "Sherley Mathes", "Sherrell Janelle", "Simon Veal", "Somer Withrow",
  "Sondra Blackmer", "Soo Faber", "Spencer Ratcliff", "Stanton Scheidler", "Stephan Rigsby", "Sunni Alongi", 
  "Susan Stpierre", "Tabatha Zale", "Tammera Stokely", "Tasia Kreamer", "Taylor Marmolejo", "Teodoro Marrinan", 
  "Terrell Corbo", "Terrie Strey", "Terry Arviso", "Tessie Bills", "Theda Arnone", "Theresa Fett",
  "Thersa Pilling", "Tien Stripling", "Timmy Yeh", "Tod Sweatman", "Tommy Ahlgren", "Toney Rinke", 
  "Tory Coomes", "Trevor Mau", "Tristan Dower", "Vada Sessoms", "Val Bozell", "Velia Stansberry", 
  "Victor Pou", "Victor Scheetz", "Vikki Orozco", "Vincenzo Gertz", "Walker Lepine", "Ward Bardwell", 
  "Ward Gingerich", "Warner Kenney", "Wayne Raap", "Wesley Prentiss", "Weston Champ", "Will Monte", 
  "Woodrow Hsieh", "Wynell Kamm", "Xenia Shriner", "Xiomara Goodwill", "Yolonda Schiel", "Young Kasel", 
  "Zora Schoch"].map(function (name, i) {
	  // Map each of these to an oject and fake information.
		return {
			name: name,
			phone: Math.floor(Math.random()*10000000000),
			email: name.toLowerCase().replace(/\s+/, '.').replace(/[^a-zA-Z\.]/, '') + '@' + companies[i % companies.length].domain,
			company: companies[i % companies.length].name,
      floor: Math.floor(Math.random() * 10) + 1
		};
	});

var mtgs = ['Meeting Room 100', 'Meeting Room 101', 'Meeting Room 102'];


/**
 * Automatically zoom screen.
 */

function fitScreen () {
	$('body').css('zoom', $(window).height()/900*100 + '%'); 
}
$(window).on('resize', fitScreen);
$(fitScreen);


/**
 * Panel Setup
 */

// Store previous panel state.
var _backqueue = [];

// Show a panel and with the header text.
function showPanel (id, header) {
	_backqueue.push(arguments);

	$('.panel').hide();
	$('#' + id).show();
	
	$('h2').text(header);
	$('#back-button').toggle(id != 'panel-find');
}

function generateFloorButtons () {
	// Generate floor buttons.
	for (var i = 1; i < 12; i++) {
		$('<tr><td><span>' + i + '</span><b></b></td></tr>').prependTo('#floorbuttons table');
	}
	$('<tr><td><span>Lobby</span><b></b></td></tr>').appendTo('#floorbuttons table');
	$('<tr><td><span>Garage A</span><b></b></td></tr>').appendTo('#floorbuttons table');
	$('<tr><td><span>Garage B</span><b></b></td></tr>').appendTo('#floorbuttons table');
	$('#floorbuttons td').on('mousedown', function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('b', this).text('0:30');
		}
	})

}

$(function () {
	// Attach connection to back-button.
	$('#back-button')[0].onmousedown = function () {
		backqueue.pop();
		var last = backqueue.pop();
		showPanel.apply(null, last);
	};
});


/**
 * What are you looking for?
 */

function showLookingPanel () {
	showPanel('panel-find', 'What are you looking for?');
	$('#sideinfo').addClass('start').removeClass('companies');
}

function restartPanel () {
	showLookingPanel();
	$('#panel-find').removeClass('mode-person').removeClass('mode-room');
}

/**
 * Companies
 */

function createCompanyList () {
	$('#companies').append('<p class="showallcomps" style="font-style: italic">Show all...</p>')
	$('#companies p.showallcomps').on('mousedown', function () {
		showPeopleOrMeetingsPanel(null);
		$('#sideinfo').removeClass('start').addClass('companies');
	});
	companies.forEach(function (company) {
		$('<p></p>').text(company.name).appendTo('#companies').on('mousedown', function () {
			showPeopleOrMeetingsPanel(company);
			$('#sideinfo').removeClass('start').addClass('companies');
		})
	});
}

function showCompanyPanel (modeperson, modecompany) {
	$('h2').text('Choose a company.');
	$('#panel-find').toggleClass('mode-person', modeperson);
	$('#panel-find').toggleClass('mode-room', modecompany);
	$('#listings').hide(); $('#companies').show();
	$('#sideinfo').addClass('start').removeClass('companies');
}



/**
 * People in a Company panel.
 */

function resetAlphabetFilter() {
	$('#alphabet b').removeClass('selectedfilter');
}

var showAll = false;
function showPeopleOrMeetingsPanel (company) {
	if (!company) {
		showAll = true;
	}
	var doShowPeople = $('#panel-find').hasClass('mode-person');

	$('h2').text('-').html('&nbsp; ');
	$('#listings').show(); $('#companies').hide();

	$('#items').html('');

	// Company description
	$('.sideinfo-block-company').toggle(!!company);
	$('.sideinfo-block-all').toggle(!company);

	$('#alphabet').toggle(doShowPeople);
	if (doShowPeople) {
		resetAlphabetFilter();
		var lastletter = '';
		people.filter(function (person) {
			return !company || person.company == company.name;
		}).forEach(function (person) {
			if (person.name.charAt(0) != lastletter) {
				lastletter = person.name[0];
				$('<h5>').text(lastletter).appendTo('#items');
			}
			$('<p></p>').text(person.name).appendTo('#items').on('mousedown', function () {
				showPersonPanel(person);
			})
		})
		$('#search').focus();

    $('#personCompanyBackBtn')[0].onmousedown = function () {
      showCompanyPanel(true, false);
    };
	} else {
		mtgs.forEach(function (mtg) {
			$('<p></p>').text(mtg).appendTo('#items').on('mousedown', function () {
				showRoomPanel(mtg);
			})
		});

    $('#personCompanyBackBtn')[0].onmousedown = function () {
      showCompanyPanel(false, true);
    };
	}
}

function generateAlphabetFilter() {
	// generate alphabet
	[].forEach.call("abcdefghijklmnopqrstuvwxyz".toUpperCase(), function (letter) {
		$('<b>' + letter + '</b>').appendTo('#alphabet').on('mousedown', function () {
			if ($(this).hasClass('selectedfilter')) {
				$('#items p, #items h5').show();
				return resetAlphabetFilter();
			}
			resetAlphabetFilter();
			$('#items h5').hide();
			$('#items p').each(function (i, p) {
				$(p).toggle($(p).text().toLowerCase().charAt(0) == letter.toLowerCase())
			});
			$(this).addClass('selectedfilter');
			console.log(this, this.className);
		})
	});	
}

function textFilter() {
	resetAlphabetFilter();
	var s = $('#search').val();
	$('#items h5').toggle(!s);
	$('#items p').each(function (i, p) {
		if (!s) {
			$(p).show();
		} else {
			$(p).toggle($(p).text().toLowerCase().indexOf(s) != -1)
		}
	})
}



/**
 * Individual Person
 */

var currentPerson = null;
function showPersonPanel (person) {
  currentPerson = person;
	showPanel('panel-person', '');
	$('#panel-person').removeClass('room').addClass('human');

	var phoneNumber = '(' + String(person.phone).substr(0, 3) + ') ' + String(person.phone).substr(3, 3) + '-' + String(person.phone).substr(6)
	$('#person-name').text(person.name);
	$('#person-info').text('Employee at ' + person.company + '\n' +
		phoneNumber + '\n' +
		person.email);
	$('#person-img').css({width: 200 + 'px', height: 300 + 'px'})
  $('#elevator-pullout span').text(person.floor);
}

$(function () {
  $('#elevator-pullout').on('click', function () {
    elevatorCalledPanel(currentPerson.floor, currentPerson.name);
  });
});


/**
 * Individiual room
 */

function showRoomPanel (name) {
	showPanel('panel-person', '');
	$('#panel-person').addClass('room').removeClass('human');
	$('#person-name').text(name);
	$('#person-info').text('Currently Occupied');
}


/**
 * Elevator Called Panel
 */

function timeoutUsage () {
	var INTERFACE_TIMEOUT = 10;
	setTimeout(function () {
		// Only timeout if the elevator called panel is visible.
		if ($('#panel-called').is(':visible')) {
			resetPanel();
		}
	}, 1000 * INTERFACE_TIMEOUT);
}

function elevatorCalledPanel (floor, text) {
	$('#elevatorcalledtext').text((text || '') + ' is on floor ' + floor + '. Your elevator to floor ' + floor + ' has been called.');
	$('#floorbuttons td').each(function (i, td) {
		if ($('span', td).text() == floor) {
			$(td).addClass('active');
			if ($('b', td).text().indexOf('0:') == -1) {
				$('b', td).text('0:30');
			}
		}
	});
	showPanel('panel-called', '');
	$('#countdown').text('30 seconds');

	// Interface timeout.
	timeoutUsage();
}


/**
 * Clock
 */

// Flash clock.
var colonswitch = false;
function updateClock () {
	colonswitch = !colonswitch;
	var hours = (new Date().getHours() + 23) % 12 + 1;
	$('#header-time a').text((new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + String(new Date().getFullYear()).substr(-2));
	$('#header-time span').text(hours + (colonswitch ? ':' : ' ') + ('00' + new Date().getMinutes()).substr(-2));
	$('#header-time sup').text(new Date().getHours() < 12 ? 'am' : 'pm')
}

// Start interval immediately.
setInterval(updateClock, 1000)
$(updateClock);


/**
 * Elevator clock countdown.
 */

function countdown() {
	var txt = parseInt($('#countdown').text());
	if (txt) {
		$('#countdown').text(txt - 1 + ' seconds');
	} else {
		$('#countdown').text('Your elevator has arrived.');
	}

	$('#floorbuttons td.active b').each(function (i, td) {
		var sec = Number($(td).text().substr(2)) - 1;
		if (sec) {
			$(td).text('0:' + ('00' + sec).substr(-2));
		} else {
			$(td).parent('td').removeClass('active');
			$(td).text('0:30');
		}
	})
}

setInterval(countdown, 1000);


/**
 * Start
 */

$(function () {
	// Generation.
	generateFloorButtons();
	createCompanyList();
	generateAlphabetFilter();
	
	// Search keydown.
	$('#search').on('keydown', function () {
		setTimeout(textFilter);
	}).on('mousedown', textFilter);

	// Header is a restart button.
	$('#header').on('mousedown', restartPanel);
	
	// Show first looking panel.
	restartPanel();
})


/**
 * Text-to-Speech API
 */

$(function () {
	$('body').on('dblclick', function (e) {
		var txt = $(e.target).text();
		var url = 'http://tts-api.com/tts.mp3?q=' + encodeURIComponent(txt);
		new Audio(url).play();
	})
});