const jsonToolList = `
{
    "tool": [{
            "name": "Moodle",
            "description": "",
            "scenario": [
                0,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17
            ]
        },
        {
            "name": "Moodle Wiki",
            "description": "",
            "scenario": [
                3,
                4,
                5,
                6,
                7,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Moodle Test",
            "description": "",
            "scenario": [
                4,
                5,
                6,
                8,
                10,
                11,
                13,
                14,
                15,
                16
            ]
        },
        {
            "name": "Moodle EtherPad & EtherCalc",
            "description": "",
            "scenario": [
                3,
                4,
                5,
                6,
                7,
                13,
                14,
                15,
                16,
                17
            ]
        },
        {
            "name": "Moodle Aufgabe",
            "description": "",
            "scenario": [
                4,
                5,
                6,
                7,
                10,
                11,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Moodle Forum",
            "description": "",
            "scenario": [
                0,
                2,
                4,
                5,
                6,
                7,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Moodle Studierenden-Ordner",
            "description": "",
            "scenario": [
                3,
                4,
                5,
                6,
                7,
                11,
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Moodle Glossar",
            "description": "",
            "scenario": [
                3,
                4,
                5,
                6,
                7,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Moodle Feedback/Befragung",
            "description": "",
            "scenario": [
                10,
                11,
                13
            ]
        },
        {
            "name": "Digitaler Semesterapparat",
            "description": "",
            "scenario": [
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Turnitin",
            "description": "",
            "scenario": [
                4,
                12,
                13,
                14,
                15,
                16,
                17
            ]
        },
        {
            "name": "SWITCH Dienste",
            "description": "",
            "scenario": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                12,
                13,
                14,
                15,
                16,
                17
            ]
        },
        {
            "name": "SWITCHportfolio",
            "description": "",
            "scenario": [
                0,
                2,
                3,
                5,
                6,
                10,
                11,
                14,
                15,
                17
            ]
        },
        {
            "name": "SWITCHfilesender",
            "description": "",
            "scenario": [
                6,
                7,
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "SWITCHdrive",
            "description": "",
            "scenario": [
                3,
                6,
                7,
                12,
                13,
                14,
                15,
                16,
                17
            ]
        },
        {
            "name": "SWITCHtube",
            "description": "",
            "scenario": [
                4,
                6,
                7,
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "SWITCHcast und annotate",
            "description": "",
            "scenario": [
                10,
                11,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "SWITCHinteract",
            "description": "",
            "scenario": [
                0,
                1,
                3,
                4,
                9,
                13,
                15,
                16
            ]
        },
        {
            "name": "Jitsi (SWITCH Open Meet)",
            "description": "",
            "scenario": [
                0,
                1,
                3,
                4,
                9,
                13,
                14,
                15,
                16
            ]
        },
        {
            "name": "Zoom",
            "description": "",
            "scenario": [
                0,
                1,
                3,
                4,
                9,
                13,
                14,
                15,
                16
            ]
        },
        {
            "name": "Webex",
            "description": "",
            "scenario": [
                0,
                1,
                3,
                4,
                9,
                13,
                14,
                15,
                16
            ]
        },
        {
            "name": "Jabber",
            "description": "",
            "scenario": [
                0,
                1,
                4,
                13,
                14,
                15,
                16
            ]
        },
        {
            "name": "Groups Inside",
            "description": "",
            "scenario": [
                3,
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Laufwerke FHNW",
            "description": "",
            "scenario": [
                3,
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "Literaturverwaltung (Citavi, Litlink, Zotero)",
            "description": "",
            "scenario": [
                3,
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "MS Teams",
            "description": "",
            "scenario": [
                0,
                1,
                2,
                3,
                4,
                9,
                13,
                14,
                16,
                17
            ]
        }
    ]
}
`;
var app = new Vue({
    el: '#wrapper',
    data: {
        sortKey: 1,
        filterKey: '',
        search: '',
        activeFilterArr: [],
        activeToolName: '',

        toolList: JSON.parse(jsonToolList).tool,
        tools: JSON.parse(jsonToolList).tool
    },

    computed: {
        filteredTools: function() {
            var self = this;

            // sort name
            if (self.sortKey == 1) {
                self.tools = self.toolList;
            }

            // filter search
            self.tools = self.tools.filter(function(t) {
                return t.name.toLowerCase().includes(self.search.toLowerCase());
            });

            self.tools = self.tools.filter(function(t) {
                return self.activeFilterArr.every(r => t.scenario.includes(r))
            });

            return self.tools;
        }
    },

    methods: {
        hasScenario: function(tool, num) {
            return tool.scenario.includes(num);
        },
        filterBy: function(keys) {
            var self = this;

            if (keys.includes(15) && keys.includes(16) && keys.includes(17)) {
                if (self.activeFilterArr.includes(15) && self.activeFilterArr.includes(16) && self.activeFilterArr.includes(17)) {} else {
                    self.activeFilterArr.remove(15);
                    self.activeFilterArr.remove(16);
                    self.activeFilterArr.remove(17);
                }
            }
            keys.forEach(key => {
                if (self.activeFilterArr.includes(key)) {
                    self.activeFilterArr.remove(key);
                } else {
                    self.activeFilterArr.push(parseInt(key));
                }
            });
        },
        hasFilter: function(key) {
            var keyParsed = parseInt(key);
            if (typeof self.activeFilterArr !== "undefined") {
                return self.activeFilterArr.includes(keyParsed);
            }
            return false;
        }
    }
});

Array.prototype.remove = function() {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};