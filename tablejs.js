const jsonToolList = `
{
    "tool": [
        {
           "name":"Moodle [2] ",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle Wiki",
           "scenario":[
              3,
              4,
              5,
              6,
              7,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle Test",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle EtherPad & EtherCalc",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle Aufgabe ",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle Forum",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle Studierenden-Ordner",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle Glossar",
           "scenario":[
              3,
              4,
              5,
              6,
              7,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Moodle Feedback/Befragung",
           "scenario":[
              10,
              11,
              13
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Digitaler Semesterapparat",
           "scenario":[
              12,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/forschung/projekte/digitaler-semesterapparat-in-moodle/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Turnitin",
           "scenario":[
              4,
              12,
              13,
              14,
              15,
              16,
              17
           ],
           "instructionLink":"<a href=\'https://www.fhnw.ch/plattformen/plagiat/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"SWITCH Dienste",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'\'></a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"SWITCHportfolio",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/e-portfolio/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"SWITCHfilesender",
           "scenario":[
              6,
              7,
              12,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/methoden/organisieren/dateien-versenden/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"SWITCHdrive",
           "scenario":[
              3,
              6,
              7,
              12,
              13,
              14,
              15,
              16,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/methoden/organisieren/dateiablage-mit-switchdrive/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"SWITCHtube",
           "scenario":[
              4,
              6,
              7,
              12,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/video/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"SWITCHcast und annotate",
           "scenario":[
              10,
              11,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/themen/video/#video-auf-switchtube-bereitstellen\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"SWITCHinteract",
           "scenario":[
              0,
              1,
              3,
              4,
              9,
              13,
              15,
              16
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/methoden/kommunizieren/#switchinteract\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'>FDL</a>"
        },
        {
           "name":"Jitsi (SWITCH Open Meet)",
           "scenario":[
              0,
              1,
              3,
              4,
              9,
              13,
              14,
              15,
              16
           ],
           "instructionLink":"<a href=\'\'></a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        },
        {
           "name":"Zoom [4]",
           "scenario":[
              0,
              1,
              3,
              4,
              9,
              13,
              14,
              15,
              16
           ],
           "instructionLink":"<a href=\'https://welcome.inside.fhnw.ch/hsle2025/Seiten/Zoom.aspx\'>Plattform Lehre</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        },
        {
           "name":"Webex",
           "scenario":[
              0,
              1,
              3,
              4,
              9,
              13,
              14,
              15,
              16
           ],
           "instructionLink":"<a href=\'https://welcome.inside.fhnw.ch/organisation/hochschule/services/cit/seiten/videokonferenz.aspx\'>CIT</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        },
        {
           "name":"Jabber",
           "scenario":[
              0,
              1,
              4,
              13,
              14,
              15,
              16
           ],
           "instructionLink":"<a href=\'https://welcome.inside.fhnw.ch/toolsandservices/SitePages/MyPhone.aspx#manualsPhone\'>CIT</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        },
        {
           "name":"Groups Inside",
           "scenario":[
              3,
              12,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://groups.inside.fhnw.ch/workspace_sites/InsideHelp/SitePages/Home.aspx\'>CIT</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        },
        {
           "name":"Laufwerke FHNW",
           "scenario":[
              3,
              12,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/methoden/organisieren/dateiablage-mit-laufwerk-fhnw/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        },
        {
           "name":"Literaturverwaltung (Citavi, Litlink, Zotero)",
           "scenario":[
              3,
              12,
              13,
              14,
              15,
              17
           ],
           "instructionLink":"<a href=\'https://www.digitallernen.ch/methoden/organisieren/literatur-verwalten/\'>digitallernen.ch</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        },
        {
           "name":"MS Teams [4]",
           "scenario":[
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
           ],
           "instructionLink":"<a href=\'https://welcome.inside.fhnw.ch/hsle2025/Seiten/Microsoft-Teams.aspx\'>Plattform Lehre</a>",
           "helpLink":"<a href=\'https://www.digitallernen.ch/termine/\'></a>"
        }
     ]
}
`;

var app = new Vue({
    el: '#app',
    data: {
        sortKey: 1,
        filterKey: '',
        search: '',
        activeFilterArr: [],

        reverse: false,
        toolList: JSON.parse(jsonToolList).tool,
        tools: JSON.parse(jsonToolList).tool
    },

    computed: {
        filteredTools: function() {
            var self = this;

            // sort name
            if (self.sortKey == 1) {
                self.tools = self.toolList;
            } else {
                self.tools = self.toolList.slice().sort(function(a, b) {
                    if (self.sortKey == 2) {
                        return (a.name > b.name) ? 1 : -1;
                    } else {
                        return (a.name > b.name) ? -1 : 1;
                    }
                });
            }

            // filter search
            self.tools = self.tools.filter(function(t) {
                return t.name.toLowerCase().includes(self.search.toLowerCase());
            });


            // filter num
            self.tools = self.tools.filter(function(t) {
                return self.activeFilterArr.every(r => t.scenario.includes(r))
            });

            return self.tools;
        }
    },

    methods: {
        hasScenario: function(tool, num) {
            return tool.scenario.includes(num) ? "x" : "";
        },
        sortBy: function(key) {
            var self = this;
            if (self.sortKey < 3) {
                self.sortKey += 1;
            } else {
                self.sortKey = 1;
            }
        },
        filterBy: function(key) {
            var self = this;
            var keyParsed = parseInt(key);
            if (self.activeFilterArr.includes(keyParsed)) {
                self.activeFilterArr.remove(keyParsed);
            } else {
                self.activeFilterArr.push(parseInt(keyParsed));
            }
        }
    }
});

$(document).ready(function() {
    $(".toolTable>td:not(.notSelectDown)").click(function() {
        $(this).toggleClass("hightlight");

        $(this).find("i").text(function(i, text) {
            return text === "add" ? "clear" : "add";
        });
    });
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