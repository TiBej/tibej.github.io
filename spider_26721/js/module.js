const jsonToolList = `
{
    "tool": [{
            "name": "Moodle",
            "description": "Ist das Learning Management System (LMS), welches über alle Hochschulen hinweg an der FHNW genutzt wird und zentral administriert und bewirtschaftet wird. Lernaktivitäten werden in Kursräumen, die von in der Hochschullehre tätigen Personen selber gestaltet werden können, organisiert. Mit verschiedenen Lernaktivitäten können verschiedenste Lehr-/Lernsettings realisiert werden.",
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
            "description": "Ist eine Sammlung von untereinander verlinken Seiten, die alle Teilnehmer*innen eines Kurses bearbeiten und ergänzen können. Die Änderungen sind für alle nachvollziehbar und können rückgängig gemacht werden.",
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
            "description": "Erlaubt das Anlegen von unterschiedlichen Test-Fragen (Multiple Choice, Zuordnungsfragen, Textantworten) und die Überprüfung nach definierten Werten. Die Auswertung der Testergebnisse kann die Grundlage für ein Feedback an Lernende sein. Die Aktivität kann (neben weiteren Anwendungen) als Lernkontrolle, als Prüfung oder als Selbsttest eingesetzt werden.",
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
            "description": "Die beiden in Moodle integrierten Lernaktivitäten können von mehreren Personen gelichzeitig verwendet werden um entweder an einem Textdokument (EtherPad) oder an einer Tabelle (EtherCalc) zu arbeiten. Die Import/Export Funktion ermöglicht das Vorbereiten oder das Weiterbearbeiten von Dateien.",
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
            "description": "Teilnehmer*innen können unterschiedliche Dateitypen zu einem definierten Zeitpunkt hochladen. Eine Einreichung ist als Einzelarbeit oder als Gruppe möglich und in der Hochschullehre tätige Personen können die eingereichte Aufgabe bewerten. Diese Bewertung kann mittels Textfeedback erfolgen oder über eine Datei mit einer Bewertung/einem Feedback. In der Hochschullehre tätige Personen können die Aufgabe benoten und diese Note für die Teilnehmer*innen sichtbar machen.",
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
            "description": "Über längere Zeit können in einem Forum asynchrone Diskussionen zu einem bestimmten Thema, oder Kursinhalt geführt werden. Verschiedene Typen des Forums erlauben das Eröffnen von neuen Themen, oder ein reines Frage-Antwort-Forum. Beiträge in einem Forum können mit Dateianhängen versehen werden. Je nach Einstellungen erhalten Teilnehmer*innen Benachrichtigungen über neue Beiträge in einem Forum.",
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
            "description": "Diese Aktivität bereitet eine Upload Möglichkeit vor, bei der definiert werden kann, welche Dateitypen hochgeladen werden können und wer die Uploads sehen darf. Weitere Optionen der Aktivität ermöglichen das Einrichten eines zeitlich begrenzten Upload Fensters, welches die Aktivität für eine Produktabgabe einsetzbar macht.",
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
            "description": "Die Aktivität Glossar gleicht einem Wörterbuch, welches Begriffsdefinitionen enthält. Beiträge in einem Glossar können mit Dateianhängen (Mediendateien, Texte, etc) versehen werden oder Links auf externe Seiten enthalten. Eine weitere Option erlaubt Kommentare zu Einträgen im Glossar, welche eine Diskussion unter Teilnehmer*innen zulässt.",
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
            "description": "Beide Aktivitäten gleichen sich, indem sie eine Rückmeldung zu einem Thema zulassen. Die Aktivität Feedback erlaubt, verschiedene Fragetypen zu erfassen, die ausgewertet werden können (auch eine externe Auswertung der Antworten ist möglich). Feedback kann anonym erfolgen. Die Aktivität Befragung ist für die Erstellung von Fragebögen in Moodle hilfreich.",
            "scenario": [
                10,
                11,
                13
            ]
        },
        {
            "name": "Digitaler Semesterapparat",
            "description": "Über die Anbindung an den Bibliothekskatalog können digitalisierte Bibliotheksinhalte über Moodle bei der Bibliothek bestellt und im Kursraum als PDF angeboten werden.",
            "scenario": [
                12,
                13,
                14,
                15,
                17
            ]
        },
        {
            "name": "SWITCH Dienste",
            "description": "Die Stiftung SWITCH ist eine von Schweizer Bildungs- und Forschungseinrichtungen getragene Serviceanbieterin von Internetdiensten. Alle Daten werden in der Schweiz gelagert und die Dienste werden von der Schweiz aus betreut. ",
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
            "description": "Versenden von grossen Dateien (bis zu 50 GB) an einzelne oder mehrere Emailadressen. Empfänger*innen erhalten per Mail einen Downloadlink zur Datei. Die Absender*in erhält eine Bestätigung der Email-Übermittlung sowie jedes erfolgten Downloads.",
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
            "description": "Ermöglicht die permanente Speicherung von Dateien aller Art in einem 100GB Cloud-Speicher. SWITCHdrive lässt sich ins Filesystem integrieren oder per Webinterface bedienen, SWITCHdrive ist auch ausserhalb des FHNW Netzwerkes verfügbar. Das Webinterface erlaubt die Anzeige von PDF und einigen Bild- und Video-Formaten sowie die Bearbeitung von Office-Dokumenten (auch durch mehrere Bearbeiter*innen gleichzeitig).",
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
            "description": "Ist die Video-Plattform für Schweizer Hochschulen und erlaubt die Cloud-Speicherung von Videos auf schweizer Servern. Videos werden in Channels organisiert und können mit unterschiedlichen Nutzungs- und Zugriffsberechtigungen versehen werden. SWITCHtube Benutzer können ihre Videos an andere SWITCHtube Benutzer übertragen. SWITCHtube-Videos lassen sich kommentieren und in andere Webseiten (z.B. in das LMS Moodle) einbinden ohne deren Serverplatz zu beanspruchen.",
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
            "description": "Bietet eine automatisierte Aufzeichnung in entsprechend ausgestatteten Aufzeichnungsräumen wobei jeweils mehrere Audio- und Videoquellen aufgezeichnet werden können. Über SWITCHcast ist die Bearbeitung (Auswahl der Audio-/Videoquellen/einfache Schnittfunktion) sowie die Weitergabe an SWITCHtube oder SWITCHannotate möglich. Letzteres erlaubt Videos mit einer erweiterten Kommentarfunktion zu annotieren.",
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
            "description": "Basierend auf Adobe Connect ermöglicht SWITCHinteract Web-Konferenzen und Teamarbeit über das Web. Neben Audio-Übertragung sind weitere Funktionen Bildschirminhalte teilen, Whiteboard, Dateiaustausch oder Abstimmungen. Die Verbindung ist über verschiedene Endgeräte möglich.",
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
            "description": "Die Videokonferenzlösung über Server, die in der Schweiz stehen. SWITCH Open Meet kann ohne Registrierung verwendet werden und verwendet verschlüsselte Kommunikation. Die vollständige Integration in den Internet-Browser macht keine Installation von Software nötig und ermöglicht eine einfache und schnelle Bedienung.",
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
            "description": "Ist eine von der FHNW lizenzierte Video-Konferenzlösung, die allen Mitarbeiter*innen und Student*innen zur Verfügung steht. Zoom bietet die Möglichkeit «Break-Out-Rooms» zu nutzen und erlaubt das Teilen von multimedialen Inhalten. Zoom ist nicht für alle Arten der Kommunikation an der FHNW geeignet und steht der FHNW befristet zur Verfügung. Zoom wird zudem innerhalb der FHNW nicht supportet.",
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
            "description": "Ist eine von der FHNW lizenzierte Video-Konferenzlösung, die auch die höchste Vertraulichkeitsstufe für Videokonferenzen erfüllt.",
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
            "description": "Über die Computer basierte Telefonie Lösung der FHNW lassen sich Festnetz-Telefonnummern ausserhalb der FHNW erreichen sowie Anrufe vom Festnetz beantworten. Zusätzlich kann innerhalb der FHNW eine Chatfunktion und Videotelefonie genutzt werden.",
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
            "description": "Die Sharepoint Integration ermöglicht das gemeinsame Bearbeiten von Dokumenten und somit die Zusammenarbeit in Gruppen innerhalb der FHNW und mit externen Partner*innen.",
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
            "description": "Die FHNW-internen Serverlaufwerke dienen der gemeinsamen Dateiablage und Nutzung. Die Server werden von der FHNW betrieben und gewartet, was die regelmässige Datensicherung miteinschliesst.",
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
            "description": "Mit der Gruppenfunktionen unterschiedliche Literaturquellen von Mitarbeiter*innen und Student*innen gemeinsam genutzt und verwaltet werden.",
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
            "description": "Bietet eine Kollaborationsplattform für Gruppen, die das gemeinsame Bearbeiten von Dokumenten sowie verschiedene Kommunikationskanäle wie Chat, Videokonferenzen für projektbasiertes Arbeiten bereitstellt.",
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
        },
        getToolNameArrayBySecenario: function(num) {
            var self = this;
            var tools = self.toolList.filter(t => t.scenario.includes(num));
            return Object.keys(tools).map((key) => {
                return [tools[key].name];
            });
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