(function (d, g) {
    var c = "kje-jaws-panel";
    var a = null;
    d.jawsReader = d.jawsReader || {};
    function b() {
      var h = document.createElement("div");
      h.setAttribute("aria-live", "assertive");
      h.style.position = "absolute";
      h.style.left = "-9999px";
      h.id = c;
      document.body.append(h);
      return h;
    }
    function f() {
      if (!a) {
        a = document.getElementById(c);
        if (!a) {
          a = b();
        }
      }
      return a;
    }
    d.jawsReader.read = function e(i, j) {
      var h = f();
      if (j) {
        h.innerText = "";
      }
      setTimeout(function () {
        h.innerText = i;
      }, 50);
    };
  })(window);
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    };
  }
  document.documentElement.setAttribute("KJE-useragent", navigator.userAgent);
  var KJE = {
    lang: "EN",
    initFired: false,
    reportTest: false,
    CalcDelay: 100,
    CalculatorWidthMax: 900,
    CalculatorWidthMin: 320,
    CalculatorWidthNoMargin: false,
    bLockDown: false,
    ShowDefinitions: true,
    ShowCalculateButton: true,
    ShowReportButton: true,
    ShowPrintButton: true,
    ShowExtraClientInputs: false,
    ShowRequiredMessage: true,
    KeepCalculatorOnPage: false,
    KeepCalculatorOnPageAutoReport: false,
    closeCalculatorDroppersForReport: false,
    sExtraClientInputs: "EXTRA",
    ExtraClientInputs:
      "<div id=KJE-D-EXTRA><div id=KJE-P-EXTRA>Input information:</div></div><div id=KJE-E-EXTRA ><div id='KJE-C-EXTRA_CLIENTNAME'><input id='KJE-EXTRA_CLIENTNAME' /></div><div id='KJE-C-EXTRA_NOTES'><input id='KJE-EXTRA_NOTES' /></div><div id='KJE-C-EXTRA_DATE'><input id='KJE-EXTRA_DATE' /></div><div style=\"height:10px\"></div></div>",
    DivDataPoint: "<div id='KJEGuiDataPoint' aria-hidden='true'></div>",
    IncludeDefinitions: true,
    PopupDefinitions: true,
    InlineDefinitions: false,
    SliderWidthAdjust: 0, 
    bNativeSlider: true,
    bElementStyling: true,
    ErrorBackground: "#FF7777",
    IncompleteBackground: "#FFFF77",
    CalculatorName: "Calculator Title",
    bUseInputForm: false,
    CommandButtons:
      "<div id='KJEFixed'><div id='KJECommandButtons'><input type=button class=KJECommandButton  name=KJECalculate id=KJECalculate value='**LBL_CALCULATE**' aira-live='assertive'/><input **VIEWREPORT** class=KJECommandButton  id=KJEViewReport name=KJEViewReport value='**LBL_VIEWREPORT**' aira-live='assertive'/></div>**FLOAT_TITLE**</div>",
    CommandMoreButtons:
      "<div id='#KJEMoreButtons**MORE_BUTTON_COUNT**'><input type='button' class='KJEMoreButton' id='KJEAddMore**MORE_BUTTON_COUNT**' name='KJEAddMore' value='**LBL_MORE**'></div>",
    CommandButtonsFloatTitle: "<div id='KJEScrollSticky'></div>",
    ReportButtons:
      "<div id=KJEReportButtonsWrapper><div id='KJEReportButtons'><input type=button class=KJECommandButton  name=KJEPrint id=KJEPrintReport value='**LBL_PRINTREPORT**' /><input type=button  class=KJECommandButton  id=KJEHideReport name=KJEHideReport value='**LBL_HIDEREPORT**' /></div></div>",
    CommandButtonsFixed: false,
    CommandButtonsTop: true,
    CommandButtonOffset: 22,
    CommandButtonHeader: 0,
    FixedHeaderHeight: 0,
    CommandButtonPosition: "relative",
    Scroll: true,
    ScrollMinimum: 23,
    ReportHeader: "<div class='KJEReportTitleHeader'>**REPORT_TITLE**</div>",
    ReportGraphContainer:
      "<div id=KJE-C-REPORTGRAPH**COUNT** class=KJEGraphReport>",
    iDecimal: 2,
    ReportShowGraphs: true,
    ReportStyleSheet: null,
    ReportStyleSheet2: null,
    KJEReportBodyClass: "KJEBody KJEReportBody",
    ReportOKToOpen: true,
    ReportDocumentStart:
      '<!DOCTYPE html><html><head><title>**REPORT_TITLE**</title><meta name="viewport" content="height=device-height,width=device-width,initial-scale=1"><link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET**" /><link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET2**" /></head><body class=\'**REPORT_BODY_CLASS**\' id=KJEReportBody>**HEADER**',
    ReportDocumentEnd:
      "**FOOTER** <script>setTimeout(function() {window.print(), window.close();}, 1000)</script></body></html>\n",
    CalculatorTitleTemplate: null,
    CalclatorTitle: null,
    CalculatorTableClass: "KJECalculatorTable",
    CalculatorTableReportClass: "KJECalculatorReportTable",
    CalculatorTitleClass: "KJETitle",
    CalculatorTitleAdditionalClass: "KJEFontHeading KJETitleExtra",
    CalculatorTitleError: "KJEError",
    CalculatorTitleErrorCalculation: "KJEErrorCalculation",
    CalculatorTitleMissing: "KJEMissing",
    CalculatorStickyTitleClass: "KJEFontHeading KJETitleExtra",
    CalculatorDescInputClass: "",
    CalculatorDescReportClass: "KJECalculatorDescReportView",
    CalcTitlePaddingTop: 30,
    CalcTitlePaddingLeft: 40,
    CalcTitlePaddingRight: 40,
    CalcTitlePaddingMenu: 55,
    ClearColor: "#FFFFFF",
    colorList: [
      "#f7f7f7",
      "#efefef",
      "#dfe0db",
      "#CCCCCC",
      "#CCDDCC",
      "#CCCCDD",
      "#DDCCCC",
      "#CCCCDD",
      "#CCDDCC",
      "#CCDDDD",
      "#CCCCDD",
    ],
    colorRGBackground: "#FFFFFF",
    DefinitionsH1:
      "<h2 class='KJEDefinitionsHeader KJEFontHeading'>**LBL_DEFINITIONS**</h2>",
    LBL_DEFINITIONS: "Definitions",
    Colon: ":",
    CalculatorTitleEntry:
      "Please enter or select a value in all required fields.",
    CalculatorTitleCalc: "Press &ldquo;Calculate&rdquo; to view your results.",
    ButtonMore: "More +",
    ButtonCalculate: "Calculate",
    ButtonViewReport: "View Report",
    ButtonHideReport: "Hide Report",
    ButtonPrintReport: "Print",
    sCurrency: "Dollars",
    MSG_YEARS_LBL: "years",
    MSG_YEAR_LBL: "year",
    MSG_MONTHS_LBL: "months",
    MSG_MONTH_LBL: "month",
    MSG_AND_LBL: "and",
    MSG_YES: "Yes",
    MSG_NO: "No",
    YES: "yes",
    NO: "no",
    MSG_EXCEEDS_LIMIT_OF_RANGE: "KJE1 is limited to KJE2",
    MSG_UNDER_LIMIT_OF_RANGE: "KJE1 can't be less than KJE2",
    MSG_VALID_RANGE: "Enter an amount between KJE1 and KJE2",
    MSG_INVALID_DATE: "Please enter a valid date for KJE1",
    MSG_MISSING_ITEM: "Please enter a value for KJE1",
    MSG_REQUIRED_NOTICE:
      "<div id='KJERequiredNote' class=KJEFooter><span class='KJERequired'>KJE1</span>KJE2</div>",
    MSG_REQUIRED_SYMBOL:
      "*<span class='KJERequiredShowHover'>This entry is required.</span>",
    MSG_REQUIRED_SYMBOL_BARE: "*",
    REQUIRED_SYMBOL_CLASS: "KJERequired",
    REQUIRED_HOVER_CLASS: "KJERequiredShowHover",
    MSG_NOTREQUIRED_SYMBOL: "",
    MSG_GRAPH: "**GRAPH**",
    SplashContent: "Financial Calculators from<br />Dinkytown.net",
    SplashContentFooter:
      "Financial Calculators &copy;1998-2023 KJE Computer Solutions, Inc.",
    Default: {
      CURRENT_YEAR: new Date().getFullYear(),
      CURRENT_DATE: new Date(),
      RORMarket: 7,
      RORRetire: 4,
      RORSave: 1,
      RateCard: 16,
      RatePersonal: 7.5,
      RateFix15: 6.5,
      RateFix30: 7,
      RateAdj: 5,
      RateAuto: 7,
      RateAutoLow: 1.9,
      MortgageAmt: 350000,
      HomePrice: 400000,
      StateTaxRate: 8,
      InflationRate: 3,
      RateCardMax: 48,
      LoanRateMin: 0,
      LoanRateMax: 36,
      LoanSliderRateMax: 36,
      MortgageMin: 0,
      MortgageMax: 250000000,
      MortgageRateMin: 0,
      MortgageRateMax: 50,
      MortgageSliderRateMax: 10,
      MortgageTerm: 30,
      MortgageTermMin: 1,
      MortgageTermMax: 40,
      MortgageTermIncrement: 5,
      MortgageShowAll: true,
      MortgageShowAllMax: 25,
      InvestRateMin: 0,
      InvestRateMax: 20,
      InvestSliderRateMax: 12,
      InflationRateMin: 0,
      InflationRateMax: 20,
      InflationSliderRateMax: 12,
    },
    initializing: 0,
    InTask: false,
    calcCleared: false,
    AllContent: "KJEAllContent",
    CalcTimeout: 0,
    CalcTitleHeight: 0,
    Error: false,
    InComplete: false,
    bValidateIncomplete: true,
    Calculating: false,
    gGraphs: new Array(0),
    gReportGraphs: new Array(0),
    iOldWidth: -1,
    bSizeInitialized: false,
    ResizeTimeOut: null,
    iUrekau: [
      -285475731, -797088933, 613793604, -285475731, -358416382, 448415095,
      -1455475115, -797088933, 495331177, -2014569277, -1066131782, -177821615,
      1408146177, 495331177, 1332498680, 0, 1505998205, 380075612, -1435395332,
    ],
    InputScreenText: false,
    DefinitionText: false,
    ReportText: false,
    MSG_ADA_TABLE: "role='presentation'",
    TypedArray: typeof Float64Array != "undefined",
    showInputsFirst: false,
    showSliderTitle: true,
    ShowScrollTitle: true,
    URLValueParm: "KJEData",
    SidebySidePrefix:
      "<div class=KJECalcTableSidebySide id=KJEInputsSidebySide><div class=KJECalcTableDivLeft id=KJEInputsColumnLeft>",
    SidebySideMid:
      "</div><div class=KJECalcTableDivRight id=KJEInputsColumnRight>",
    SidebySideEnd: "</div></div>",
    replace: function (c, b, a) {
      return a ? a.split(c).join(b) : "";
    },
    getKJEReplaced: function (a) {
      if (a || a == "") {
        for (var b = 1; b < arguments.length; b++) {
          a = a.replace("KJE" + b, arguments[b]);
        }
      } else {
        a = "";
        for (b = 0; b < arguments.length; b++) {
          a += arguments[b] + (b == arguments.length - 1 ? "" : ", ");
        }
      }
      return a;
    },
    dateFormat: function (d, a) {
      if (d == null) {
        return a;
      }
      var b = "/",
        c = d.getMonth() + 1;
      return d == null ? "" : c + b + d.getDate() + b + d.getFullYear();
    },
    chjilap: function (d) {
      var b = 0;
      var e = "";
      if (d.length == 0) {
      } else {
        for (var a = 0; a < d.length; a++) {
          e = d.charCodeAt(a);
          b = (b << 5) - b + e;
          b = b & b;
        }
      }
      return b;
    },
    getTermLabel: function (f, c) {
      var n = KJE;
      var j = Math.floor(f / 12),
        b = f % 12,
        d = n.MSG_AND_LBL,
        g = n.MSG_MONTH_LBL,
        l = n.MSG_MONTHS_LBL,
        e = n.MSG_YEAR_LBL,
        k = n.MSG_YEARS_LBL,
        h = " ",
        a = "";
      return (
        (c || j > 0 ? j + h + (j == 1 ? e : k) : a) +
        (c || (j > 0 && b > 0) ? h + d + h : a) +
        (c || b > 0 ? b + h + (b == 1 ? g : l) : a)
      );
    },
    setOrientation: function () {
      var a = KJE;
      switch (window.orientation) {
        case -90:
        case 90:
        default:
          a.resize(true);
          break;
      }
    },
    resize: function (b) {
      var a = KJE;
      if (!a.device.iphone || b) {
        if (a.ResizeTimeOut != null) {
          clearTimeout(a.ResizeTimeOut);
        }
        a.ResizeTimeOut = setTimeout(a.calcResize, 50);
        a.bSizeInitialized = true;
      }
    },
    InputSetupMoreButtons: function (a) {
      return KJE.replace(
        "**MORE_BUTTON_COUNT**",
        a + "",
        KJE.CommandMoreButtons.replace(
          "**LBL_MORE**",
          KJE.parameters.get("MSG_MOREBUTTON" + a, KJE.ButtonMore)
        )
      );
    },
    InputSetup: function (f, h, r) {
      var d = KJE;
      var a = d.bUseInputForm;
      var k = "**COMMAND_BUTTONS**";
      var l = "**REPORT_BUTTONS**";
      var j = "**MORE_BUTTONS**";
      var x = (d.deviceMobile || d.CommandButtonsFixed) && d.CommandButtonsTop;
      var u = f.indexOf(k);
      var t = r.indexOf(l);
      var w =
        "<div id='KJETitle' aria-live='polite' class='" +
        d.CalculatorTitleClass +
        " " +
        d.CalculatorTitleAdditionalClass +
        "'>" +
        d.CalculatorTitleShow +
        "</div>";
      var g = "**TITLE_BAR**";
      var e = f.indexOf(g);
      d.bSidebySide = false;
      d.bSidebySideViewing = false;
      if (KJE.parameters.get("USE_INPUT_SIDEBYSIDE", false)) {
        var o = f.indexOf("**GRAPH");
        var m = f.indexOf("KJE-D-INPUTS");
        if (o != -1 && m != -1) {
          if (
            f.indexOf("KJE-D-INPUTS", m + 1) == -1 &&
            f.indexOf("**GRAPH", o + 1) == -1
          ) {
            f = f.replace(
              "**GRAPH",
              KJE.SidebySideMid.replace("transparent", d.colorList[1]) + "**GRAPH"
            );
            d.bSidebySide = true;
          }
        }
      }
      var p = d.bSidebySide;
      for (var q = 1; q < 10; q++) {
        f = d.replace("**GRAPH" + q + "**", d.getGraphCode(q), f);
      }
      var n = "<!--KJEMAIN-->" + d.DivDataPoint;
      if (d.MSG_SR_HEADER) {
        n +=
          "<span id='KJEScreenReaderHeader' class='KJEAccessible'>" +
          d.MSG_SR_HEADER +
          "</span>";
      }
      if (d.SRExtraHeader) {
        n += d.SRExtraHeader;
      }
      if (a) {
        n +=
          "<form title='" +
          (d.CalcName ? d.CalcName : d.CalculatorTitleShow) +
          "' name=KJECalcForm id=KJECalcForm'>";
      }
      n += "<div id=KJECalculatorScreenSize>";
      n += u < 0 && x ? k : "";
      n +=
        "<div id='KJEWaitContainer'><div id='KJEWait' class=KJEWait></div></div>";
      n += "<div id=KJECalculatorTable>";
      n += "<div id=KJECalculatorTableCell class='KJECalculator KJEEase'>";
      n +=
        "<span id=KJESplash class=KJEBold><br /><br /><br />" +
        "<p class=KJEFooter>" +
        "</p><br /><br /><br /><br /><br /><br /><br /><br /></span>";
      n += "<div id='KJEMain' class=KJEMain >";
      n +=
        "<div id='KJEMenuContainer'><button id='KJEMenu' type='button' class=KJEMenu tabindex='0' aria-label='" +
        KJE.MSG_MENU_TITLE +
        "'></button><div role='region' aria-label='" +
        KJE.MSG_MENU_TITLE +
        "' id='KJEMenuWindow'></div></div>";
      n += e < 0 ? w : "";
      n += d.ShowRequiredMessage
        ? d.getKJEReplaced(
            KJE.MSG_REQUIRED_NOTICE,
            KJE.MSG_REQUIRED_SYMBOL_BARE,
            KJE.parameters.get("MSG_INDICATES_REQUIRED", "indicates required.")
          )
        : "";
      n +=
        "<div id='KJEInputs' class='KJEInputs'>" +
        (d.ShowExtraClientInputs ? d.ExtraClientInputs : "");
      n += p ? KJE.SidebySidePrefix.replace("transparent", d.colorList[0]) : "";
      n += f;
      n += p ? KJE.SidebySideEnd : "";
      n += "</div>";
      n += "</div>";
      n += "</div>";
      n += "</div>";
      n += u < 0 && !x ? k : "";
      n += "</div>";
      if (a) {
        n += "</form>";
      }
      n += "<!--KJEMAINEND-->";
      n += "<div id=KJEReport class=KJEReport>";
      n += u >= 0 && t < 0 ? l : "";
      n += "<div id=KJEReportTop></div>";
      if (d.ExtraFooter) {
        n += d.ExtraFooter(h);
      }
      n += "</div>";
      if (d.IncludeDefinitions && !d.InlineDefinitions) {
        n += d.formatDefinitions(h);
      }
      d.fmtReportButtons = d.ReportButtons.replace(
        "**LBL_HIDEREPORT**",
        d.ButtonHideReport
      ).replace("**LBL_PRINTREPORT**", d.ButtonPrintReport);
      d.fmtCommandButtons = d.CommandButtons.replace(
        "**LBL_VIEWREPORT**",
        d.ButtonViewReport
      )
        .replace("**LBL_CALCULATE**", d.ButtonCalculate)
        .replace("**VIEWREPORT**", a ? "type=submit" : "type=button");
      d.fmtCommandButtons = d.fmtCommandButtons.replace(
        "**FLOAT_TITLE**",
        d.CommandButtonsFixed ? "" : d.CommandButtonsFloatTitle
      );
      r = r.replace(l, d.fmtReportButtons);
      n = n
        .replace(g, w)
        .replace(k, d.fmtCommandButtons)
        .replace(l, d.fmtReportButtons);
      var q = 0;
      while (n.indexOf(j) > -1) {
        n = n.replace(j, this.InputSetupMoreButtons(++q));
      }
      return { sInputs: n, sReport: r, bReportAddButtonEvents: t >= 0 };
    },
    formatDefinitions: function (d, c) {
      var a = KJE;
      c = c ? c : a.LBL_DEFINITIONS;
      var b = "";
      b +=
        "<div id=KJEDefinitions class=KJEDefinitions>" +
        a.DefinitionsH1.replace("**LBL_DEFINITIONS**", a.LBL_DEFINITIONS).replace(
          "**LBL_DEFINITIONS**",
          a.LBL_DEFINITIONS
        );
      b += "<div id='KJEDefinitionsDL'>" + d + "</div>";
      b += "</div>";
      return b;
    },
    inCommandTask: function (c) {
      var a = KJE;
      var b = "inline-block";
      var d = "none";
      if (a.InTask && c) {
        return true;
      }
      a.Wait.style.display = c ? b : d;
      a.InTask = c;
      return false;
    },
    setTitle: function (c, g) {
      var j = KJE;
      var h = j.subheader;
      var i = j.kujiae;
      var a = j.CalcTitle;
      var b = j.kujaleip;
      var d = j.UKuejna;
    
        KJE.TrialReplace1 = 1;
        var f = c + h;
        if (f != a.innerHTML) {
          a.innerHTML = f;
        }
        if (g) {
          a.className = j.CalculatorTitleClass + " " + g;
        } else {
          a.className = j.CalculatorTitleClass + " " + j.CalculatorTitle;
        }
        if (j.KJEScrollSticky) {
          var e = j.KJEScrollSticky;
          if (
            j.Error ||
            j.InComplete ||
            (j.ShowScrollTitle && !j.reportViewable)
          ) {
            KJE.scrolled();
            if (f != e.innerHTML) {
              e.innerHTML = f;
            }
            e.className = g ? g : "";
          } else {
            e.style.display = "none";
            if ("" != e.innerHTML) {
              e.innerHTML = "";
            }
          
        }
      }
    },
    setTitleTemplate: function () {
      var a = KJE;
      var c = "";
      if (a.CalculatorTitleTemplate) {
        c = a.CalculatorTitleTemplate;
        for (var b = 0; b < arguments.length; b++) {
          c = c.replace("KJE" + (b + 1), arguments[b]);
        }
        a.CalculatorTitleShow = c;
      } else {
        a.CalculatorTitleShow = a.CalculatorTitle;
      }
    },
    results: function (g, j, f) {
      var l = KJE;
      l.calcCleared = false;
      if (l.CalcTimeout) {
        clearTimeout(l.CalcTimeout);
      }
      if (g || f == true) {
        if (l.inCommandTask(true)) {
          return;
        }
        if (g) {
          l.showInputs();
        }
      }
      KJE.bCalculationModuleError = false;
      try {
        l.Error = false;
        l.InComplete = false;
        l.DataPointHide();
        var a = l.CalcControl;
        a.clear();
        l.GuiControl.setValues(a);
        if (l.setValuesAdditional) {
          l.setValuesAdditional(a);
        }
        if (l.ShowExtraClientInputs) {
          l.setExtraClientInputs(a);
        }
        var k = 0;
        var d = "";
        var h = l.inputs.items;
        for (var e in h) {
          if (!h[e].validate()) {
            k++;
            l.InComplete = true;
            d = (d ? d + ", " : "") + h[e]._sLabel;
          }
        }
        d = l.getKJEReplaced(l.MSG_MISSING_ITEM, d);
        if (!l.InComplete) {
          if (j && a.initReport) {
            a.initReport();
          }
          try {
            a.calculate(j ? true : false);
          } catch (b) {
            KJE.bCalculationModuleError = true;
            throw b;
          }
          if (KJE.calculateAdditional) {
            KJE.calculateAdditional(a, j ? true : false);
          }
          l.GuiControl.refresh(a);
          if (KJE.refreshAdditional) {
            KJE.refreshAdditional(l.GuiControl, a);
          }
          for (var e in l.droppers.items) {
            l.droppers.items[e].setText();
          }
          l.setTitle(l.CalculatorTitleShow);
        }
        if (l.InComplete && l.bValidateIncomplete) {
          l.calcClear(
            k > 3 || d == l.getKJEReplaced(l.MSG_MISSING_ITEM, "")
              ? l.CalculatorTitleEntry
              : d,
            l.CalculatorTitleMissingClass
          );
        }
      } catch (b) {
        l.Error = true;
        var c = (b.err ? b.err : b) + " ";
        if (b.oInputElement) {
          b.oInputElement.setCalculationError(b);
        }
        if (c.indexOf("NS_ERROR_FAILURE") < 1) {
          l.calcClear(
            c,
            l.CalculatorTitleError +
              (KJE.bCalculationModuleError
                ? " " + l.CalculatorTitleErrorCalculation
                : "")
          );
        }
      }
      if (g || f) {
        setTimeout(function () {
          l.inCommandTask(false);
        }, 400);
      }
      if (KJE.StorageSet) {
        KJE.StorageSet();
      }
      l.initializing = 2;
      KJE.bCalculationModuleError = false;
    },
    calcClear: function (c, f) {
      var a = KJE;
      var d = a.gGraphs;
      if (!c) {
        c = a.CalculatorTitleEntry;
      }
      if (!f) {
        f = null;
      }
      for (var e = 0; e < d.length; e++) {
        if (d[e]) {
          d[e].blank();
        }
      }
      for (var b in a.inputs.items) {
        if (a.inputs.items[b]._inputType == a.TypeLabel) {
          a.inputs.items[b].setText("");
        }
      }
      if (a.GuiControl.clear) {
        a.GuiControl.clear();
      }
      a.setTitle(c, f);
    },
    calcResize: function () {
      var a = KJE;
      if (a.setWidth()) {
        if (a.bSidebySide) {
          if (a.CalculatorWidth < 1000) {
            KJE.InputsSidebySide.classList.add("KJECalcTableStack");
            KJE.InputsColumnLeft.classList.add("KJECalcTableDivStack");
            KJE.InputsColumnRight.classList.add("KJECalcTableDivStack");
            a.bSidebySideViewing = false;
          } else {
            KJE.InputsSidebySide.classList.remove("KJECalcTableStack");
            KJE.InputsColumnLeft.classList.remove("KJECalcTableDivStack");
            KJE.InputsColumnRight.classList.remove("KJECalcTableDivStack");
            a.bSidebySideViewing = true;
          }
        }
        for (var b in a.inputs.items) {
          a.inputs.items[b].newWidth();
        }
        a.resizeGraphs(true);
      }
      if (a.reportViewable) {
        var c = a.gReportGraphs;
        for (var d = 0; d < c.length; d++) {
          if (c[d]) {
            c[d].setWidth(true);
          }
        }
      }
      a.resizeTitle();
      if (a.resizeMenu) {
        a.resizeMenu();
      }
      a.scrolled();
    },
    resizeTitle: function () {
      var a = KJE;
      if (!a.ShowMenu) {
        a.CalcTitle.style.paddingRight =
          a.CalcTitlePaddingRight / (a.CalculatorWidth < 480 ? 4 : 1) + "px";
      }
      a.CalcTitle.style.paddingLeft =
        a.CalcTitlePaddingLeft / (a.CalculatorWidth < 480 ? 4 : 1) + "px";
    },
    resizeGraphs: function () {
      var a = KJE.gGraphs;
      for (var b = 0; b < a.length; b++) {
        if (a[b]) {
          a[b].setWidth(false);
          a[b].setHeight(true);
        }
      }
    },
    iDropperHeights: function () {
      var c = 0;
      for (var b in KJE.droppers.items) {
        if (b != KJE.sExtraClientInputs) {
          var a = KJE.droppers.items[b];
          c += a._idDropper.clientHeight;
          if (a._bShow) {
            c += a._idDroppee.clientHeight;
          }
        }
      }
      return c;
    },
    dataChanged: function (b) {
      var a = KJE;
      if (a.CalcTimeout) {
        clearTimeout(a.CalcTimeout);
      }
      if (a.CalcShowReportTimeout) {
        clearTimeout(a.CalcShowReportTimeout);
      }
      a.CalcTimeout = setTimeout(a.results, a.CalcDelay);
      if (KJE.KeepCalculatorOnPage && a.Report.style.display != "none") {
        a.showInputs();
        if (KJE.KeepCalculatorOnPageAutoReport) {
          a.CalcShowReportTimeout = setTimeout(function () {
            a.showReportFinal();
          }, 1000);
        }
      }
    },
    completeFade: function () {
      var a = KJE;
      if (a.fade < 100) {
        a.fade += a.device.iphone ? 100 : 4;
        a.Buttons.style.opacity = a.fade / 100;
        a.Main.style.opacity = a.fade / 100;
      } else {
        clearInterval(a.pace);
        KJE.Calculator.style.transition = a.DropeeTransition;
        if (KJE.reportTest) {
          a.showReport();
        }
      }
    },
    Startfade: function () {
      var a = KJE;
      if (a.fade < 100) {
        a.fade += 4;
        a.Splash.style.opacity = 0;
      } else {
        clearInterval(a.pace);
        a.Splash.style.display = "none";
        a.fade = 0;
        a.pace = setInterval(a.completeFade, 10);
      }
    },
    showCalculator: function () {
      var a = KJE;
      a.results(true);
      a.ms = a.Main.style.opacity != 0 || a.Main.style.opacity == "";
      if (a.ms) {
        setTimeout(function () {
          a.Buttons.style.visibility = "visible";
          a.Main.style.visibility = "visible";
          a.Splash.style.display = "none";
        }, 500);
      } else {
        a.Buttons.style.opacity = 0;
        a.Main.style.opacity = 0;
        a.Splash.style.opacity = 0;
      }
      a.fade = 0;
      a.pace = setInterval(a.Startfade, 10);
      a.initializing = 1;
    },
    getOffset: function (c) {
      var b = 0;
      var a = 0;
      while (c && !isNaN(c.offsetLeft) && !isNaN(c.offsetTop)) {
        b += c.offsetLeft - c.scrollLeft;
        a += c.offsetTop - c.scrollTop;
        c = c.offsetParent;
      }
      return { top: a, left: b };
    },
    setWidth: function (b) {
      var a = KJE;
      KJE.elementWidth(a.CalculatorTable.style, "100%");
      var c = a.ScreenSize.clientWidth;
      a.oldClientWidth = c;
      a.DataPoint.style.maxWidth = c - 37 + "px";
      a.CalculatorWidth = c - 10;
      if (b) {
        a.oldClientWidth = 0;
      }
      return true;
    },
    FloatArray: function (d) {
      var a = KJE;
      if (a.TypedArray) {
        return new Float64Array(d);
      }
      var b = new Array(d);
      for (var c = 0; c < d; c++) {
        b[c] = 0;
      }
      return b;
    },
    IntArray: function (d) {
      var a = KJE;
      if (a.TypedArray) {
        return new Int16Array(d);
      }
      var b = new Array(d);
      for (var c = 0; c < d; c++) {
        b[c] = 0;
      }
      return b;
    },
    init: function () {
      var a = KJE;
      if (a.initFired) {
        return;
      }
      a.initFired = true;
      if (document.getElementById("KJE-IFRAME")) {
        KJE.KJEFrame = document.getElementById("KJE-IFRAME");
        KJE.KJEFrame.height = 1500;
        if (typeof ResizeObserver !== "undefined") {
          window.addEventListener("message", function (d) {
            if (d.data.hasOwnProperty("frameHeight")) {
              KJE.KJEFrame.height = d.data.frameHeight;
            }
          });
        } else {
          KJE.KJEFrame.height = 3000;
        }
        KJE.KJEFrame.style.width = "100%";
        KJE.KJEFrame.style.border = "none";
        KJE.KJEFrame.setAttribute("scrolling", "no");
      } else {
        if (typeof ResizeObserver !== "undefined") {
          KJE.Bodyheight;
          KJE.sendPostMessage = function () {
            if (KJE.Bodyheight !== document.body.clientHeight) {
              KJE.Bodyheight = document.body.clientHeight;
              window.parent.postMessage({ frameHeight: KJE.Bodyheight }, "*");
            }
          };
          KJE.resizeObserver = new ResizeObserver(function () {
            KJE.sendPostMessage();
          });
          var c = document.getElementsByTagName("body")[0];
          if (c) {
            KJE.resizeObserver.observe(c);
          }
          setTimeout(KJE.sendPostMessage, 1000);
        }
      }
      KJE.bDescribedBy = a.parameters.get("DEFN_DESCRIBED_BY_ATTRIB", true);
      if (a.initialize) {
        if (KJE.IE7and8) {
          document.write(
            "This browser is not supported.  Please use a modern browser such as Chrome, Firefox, Safari or Edge browser."
          );
          return;
        }
        KJE.closeCalculatorDroppersForReport = a.parameters.get(
          "CLOSE_DROPPERS_FOR_REPORT",
          KJE.KeepCalculatorOnPage
        );
        a.initAfterLoad();
        if (a.ShowMenu) {
          a.displayMenu(true);
          KJE.sMenuHelp = a.parameters.get(
            "MSG_MENU_HELP",
            "<dt><span class='KJEDefinitionsHeader KJEFontHeading'>Additional Functions</span></dt><dd>Click this menu to access the additional functions including:<p><span class=KJEBold>Reset to Defaults:</span>Click the &quot;Reset to defaults&quot; button to reload the default values for this calculator.</p><p><span class=KJEBold>Clear all Fields:</span>Click the &quot;Clear all fields&quot; button to clear all entry fields and reset any radio buttons or drop downs to their default values.</p></dd>"
          );
          if (a.parseMenuDefn) {
            KJE.sMenuHelp = a.parseMenuDefn(KJE.sMenuHelp);
          }
          a.AddDefinitionEvents(
            document.getElementById("KJEMenuContainer"),
            a.formatDefinitionEntry(a.sMenuHelp),
            a.parameters.get("MSG_MENU_HELP_TITLE", "Additional functions"),
            "MSG_MENU",
            1,
            KJE.Menu,
            "KJEDefinitionIconMenu",
            "KJEGuiDefnPopupRight KJEMenuDefinitions",
            true
          );
        }
        var b = (a.buttonResetLink = document.getElementById("KJEResetLink"));
        if (b) {
          b.addEventListener(
            "click",
            function (d) {
              d.preventDefault();
              KJE.resetPage();
              return false;
            },
            false
          );
        }
      }
    },
    initAfterLoad: function () {
      var ae = KJE;
      ae.InputClass = "KJEInput" + (KJE.InputModern ? " KJEInputModern" : "");
      var M = navigator.userAgent;
      ae.device = {
        iphone: M.match(/(iPhone|iPod|iPad)/),
        android: M.match(/Android/),
      };
      ae.deviceUseNumberType = false;
      ae.deviceInputPad = ae.deviceUseNumberType
        ? KJE.parameters.get("DEVICE_INPUT_PAD", 10)
        : 0;
      if (ae.bNativeSlider == true) {
        var Y = document.createElement("input");
        Y.setAttribute("type", "range");
        ae.bNativeSlider = Y.type !== "text";
      }
      ae.bUseStorage = false;
      if (ae.bStorageInit) {
        ae.bUseStorage = ae.bStorageInit();
      }
      var R = ae.ReportStyleSheet,
        ab = ae.ReportStyleSheet2,
        l = "KJE.css",
        k = "KJESiteSpecific.css",
        H = document.getElementsByTagName("link");
      var p = "";
      for (var K = 0; K < H.length; ++K) {
        var U = H[K].href;
        if (U.indexOf(l) >= 0 && R == null) {
          R = U;
          p = U.substring(0, U.lastIndexOf("/") + 1);
        }
        if (U.indexOf(k) >= 0 && ab == null) {
          ab = U;
        }
      }
      if (R == null) {
        R = p + l;
      }
      if (ab == null) {
        ab = p + k;
      }
      ae.hRefPath = p;
      ae.ReportStyleSheet = R;
      ae.ReportStyleSheet2 = ab;
      var W = ae.iUrekau;
      var ag = W.length,
        w = location.hostname,
        T = (ae.kujiae = w.replace(/^www\./i, "")),
        c = ae.parameters,
        g = document;
      var aa = ae.chjilap(T);
      ae.kujaleip = true;
      for (var Y = ag - 1; Y >= 0; Y--) {
        if (aa == W[Y]) {
          ae.kujaleip = false;
        }
      }
      KJE.TrialReplace1 = 2;
      ae.CalculatorTitleShow = ae.CalculatorTitle = c.get(
        "TITLE_TEMPLATE",
        ae.CalculatorTitle ? ae.CalculatorTitle : document.title
      );
      ae.AllContent = document.getElementById("KJEAllContent");
      ae.CalculatorDesc = document.getElementById("KJECalculatorDescID");
      if (!ae.AllContent) {
        ae.AllContent = document.createElement("div");
        ae.AllContent.id = "KJEAllContent";
        if (KJE.AllContentTemp) {
          ae.AllContentTemp.parentNode.insertBefore(
            ae.AllContent,
            ae.AllContentTemp
          );
        } else {
          if (ae.CalculatorDesc) {
            ae.CalculatorDesc.parentNode.insertBefore(
              ae.AllContent,
              ae.CalculatorDesc.nextSibling
            );
          }
        }
      }
      var V = document.getElementById("KJEAllContentTemp");
      if (V) {
        V.parentNode.removeChild(V);
      }
      if (ae.InlineDefinitions) {
        ae.DefinitionTextContainer = g.getElementById("KJEDefinitionText");
        ae.DefinitionText = ae.DefinitionTextContainer.innerHTML;
      }
      var o = g.getElementById("KJEReportText");
      if (o) {
        ae.ReportText = o.innerHTML;
        o.innerHTML = "";
      }
      ae.DefinitionText = ae.formatDefinitionEntry(ae.DefinitionText);
      if (ae.DefinitionTextContainer) {
        ae.DefinitionTextContainer.innerHTML = ae.DefinitionText;
      }
      var S = ae.ReportText;
      if (ae.ReportProcess) {
        S = ae.ReportProcess(S);
      }
      S = ae.replace("KJE_CURRENTDATE", ae.Default.CURRENT_DATE, S);
      ae.ReportGraphCount = 0;
      if (!ae.ReportShowGraphs) {
        S = ae.replace(ae.MSG_GRAPH, "", S);
      } else {
        if (S) {
          var e = 0;
          while (true) {
            e = S.indexOf(ae.MSG_GRAPH, e);
            if (e >= 0) {
              ae.ReportGraphCount++;
              e += ae.MSG_GRAPH.length;
            } else {
              break;
            }
          }
        }
      }
      ae.ReportText = S;
      if (ae.parseInputs) {
        ae.InputScreenText = ae.parseInputs(ae.InputScreenText);
      }
      if (ae.inputPostprocess) {
        ae.InputScreenText = ae.inputPostprocess(ae.InputScreenText);
      }
      var t = ae.InputSetup(ae.InputScreenText, ae.DefinitionText, ae.ReportText);
      ae.AllContent.innerHTML = t.sInputs;
      ae.ReportText = t.sReport;
      ae.bReportAddButtonEvents = t.bReportAddButtonEvents;
      ae.Splash = g.getElementById("KJESplash");
      ae.inputsViewable = true;
      ae.Wait = g.getElementById("KJEWait");
      ae.Report = g.getElementById("KJEReport");
      ae.ReportTop = g.getElementById("KJEReportTop");
      var b = (ae.Fixed = g.getElementById("KJEFixed"));
      var G = (ae.Buttons = g.getElementById("KJECommandButtons"));
      var P = (ae.Calculate = g.getElementById("KJECalculate"));
      var J = (ae.PrintReport = g.getElementById("KJEPrintReport"));
      var m = (ae.ViewReport = g.getElementById("KJEViewReport"));
      var j = (ae.HideReport = g.getElementById("KJEHideReport"));
      var ac = (ae.Inputs = g.getElementById("KJEInputs"));
      var x = (ae.DataPoint = g.getElementById("KJEGuiDataPoint"));
      var C = (ae.KJEScrollSticky = g.getElementById("KJEScrollSticky"));
      var y = (ae.ScreenReaderHeader = g.getElementById("KJEScreenReaderHeader"));
      var Q = (ae.Calculator = g.getElementById("KJECalculatorTableCell"));
      ae.H1Title = g.getElementById("KJETitleH1");
      KJE.InputsSidebySide = document.getElementById("KJEInputsSidebySide");
      KJE.InputsColumnLeft = document.getElementById("KJEInputsColumnLeft");
      KJE.InputsColumnRight = document.getElementById("KJEInputsColumnRight");
      ae.ScreenSize = g.getElementById("KJECalculatorScreenSize");
      var O = g.getElementById("KJECalcForm");
      var X = (ae.CalcTitle = g.getElementById("KJETitle"));
      X.style.paddingTop = ae.CalcTitlePaddingTop + "px";
      X.style.paddingRight = ae.CalcTitlePaddingRight + "px";
      X.style.paddingLeft = ae.CalcTitlePaddingLeft + "px";
      X.style.paddingBottom = "0px";
      X.style.setProperty("display", "block", "important");
      var ad = (ae.Main = g.getElementById("KJEMain"));
      var q = (ae.Definitions = g.getElementById("KJEDefinitions"));
      if (q && q.lastChild) {
        var A = q.lastChild.childNodes;
        var af = A.length;
        for (Y = 0; Y < af; Y++) {
          var f = A[Y];
          if (f.id && f.id.substr(0, 6) == "KJE-D-") {
            var u = f.id.substr(6).trim();
            var I = c.get("DFN_" + u, null);
            if (I == "REMOVE") {
              f.innerHTML = "";
              f.style.visibility = "hidden";
              f.style.display = "none";
              f.id = null;
            } else {
              if (I) {
                if (f.lastChild) {
                  f.lastChild.innerHTML = I;
                }
              }
              var I = c.get("DFN_NAME_" + u, c.get("MSG_" + u, null));
              if (I) {
                if (f.firstChild) {
                  f.firstChild.innerHTML = I;
                }
              }
            }
          }
        }
      }
      ac.style.display = "block";
      ae.CalculatorTable = g.getElementById("KJECalculatorTable");
      ae.menuInit(X);
      var N = "click";
      P.addEventListener(N, ae.calculateButtonAction, false);
      x.addEventListener(N, ae.DataPointHide, false);
      if (m) {
        m.addEventListener(N, ae.showReport, false);
      }
      if (O) {
        O.addEventListener("submit", function (h) {
          h.preventDefault();
        });
      }
      ae.addReportButtonEvents();
      G.style.opacity = 0;
      ad.style.opacity = 0;
      ae.Splash.style.opacity = 0;
      if (b) {
      } else {
        b = ae.Fixed = ae.Buttons;
        ae.CommandButtonsFixed = true;
      }
      if (ae.CommandButtonsFixed) {
        b.style.position = KJE.CommandButtonPosition;
        ae.FixedTop = ae.CommandButtonOffset;
      } else {
        b.style.position = "absolute";
        ae.FixedTop = Q.offsetTop - ae.CommandButtonOffset;
      }
      b.style.top = ae.FixedTop + "px";
      if (!ae.CommandButtonsFixed) {
        window.addEventListener("scroll", ae.scrolled, false);
      }
      window.addEventListener("resize", ae.resize, false);
      window.addEventListener("orientationchange", ae.setOrientation, false);
      ae.oldClientWidth = 0;
      ae.setWidth(true);
      ae.CalculatorTitleTemplate = c.get(
        "TITLE_TEMPLATE",
        ae.CalculatorTitleTemplate
      );
      var a = (ae.HeaderTitle = c.get("CALC_HEADER_TITLE", ""));
      var B = (ae.HeaderDesc = c.get("CALC_HEADER_DESC", ""));
      ae.initialize();
      if (ae.ShowExtraClientInputs) {
        ae.parameters.getSet("EXTRA_CLIENTNAME", "");
        ae.parameters.getSet("EXTRA_NOTES", "");
        ae.parameters.set("USFD_EXTRA_CLIENTNAME", false);
        ae.parameters.set("USFD_EXTRA_NOTES", false);
        ae.parameters.set("USFD_EXTRA_DATE", true);
        KJE.InputItem.AltNotRequired = true;
        ae.StringInput("EXTRA_CLIENTNAME", "Name");
        ae.StringInput("EXTRA_NOTES", "Notes");
        ae.Date("EXTRA_DATE", "Date").bIncompleteCheck = false;
        KJE.InputItem.AltNotRequired = null;
        var d = ae.parameters.get(
          "MSG_DROPPER_EXTRATITLE",
          "Name, notes and date for report:"
        );
        ae.addDropper(new ae.Dropper("EXTRA", true, d, d), ae.colorList[0]);
      }
      var F = g.getElementById("KJEHeaderContent");
      if (F) {
        var n = c.get(
          "CALC_HEADER_DIV",
          "<div id=KJECalculatorTitle><h1>CALC_HEADER_TITLE</h1></div><div id=KJECalculatorDescription>CALC_HEADER_DESC</div>"
        );
        F.innerHTML = n
          .replace("CALC_HEADER_TITLE", a)
          .replace("CALC_HEADER_DESC", B);
      }
      var D = ae.inputs.items;
      var r = KJE.INIT;
      var Z = KJE.INIT_NOCHANGE;
      var L = KJE.INIT_ACTION;
      for (var Y in D) {
        var z = L[D[Y]._inputType];
        if (z != Z) {
          if (D[Y].bShow && !D[Y]._inputField.disabled) {
            if (
              D[Y]._inputType == KJE.TypeNumber &&
              z != "" &&
              z < D[Y]._minimum
            ) {
              z = D[Y]._minimum;
            } else {
              if (
                D[Y]._inputType == KJE.TypeNumber &&
                z == "" &&
                D[Y].vDefault == 0
              ) {
                z = 0;
              }
            }
            KJE.InputItem.InputSetValues(
              D[Y],
              z,
              L[D[Y]._inputTypeAdditional],
              false
            );
          }
        }
      }
      if (KJE.FixedHeaderHeight == 0) {
        var E = document.getElementById("KJETitleBar");
        if (E) {
          KJE.FixedHeaderHeight = E.offsetHeight;
          KJE.ScrollMinimum = E.offsetHeight + KJE.ScrollMinimum;
        }
      }
      if (ae.customInit) {
        ae.customInit(this);
      }
      ae.showTimer();
    },
    showTimer: function () {
      var a = KJE;
      setTimeout(a.showCalculator, 250);
    },
    scrolled: function () {
      var a = KJE;
      if (!a.CommandButtonsFixed) {
        if (a.ScrollTimeOut != null) {
          clearTimeout(a.ScrollTimeOut);
        }
        a.ScrollTimeOut = setTimeout(a.buttonPosition, 10);
      }
    },
    buttonPosition: function () {
      var a = KJE;
      var c = a.util.findPosRelativeToViewport(
        a.reportViewable ? a.Report : a.CalculatorTable
      );
      var b = (a.KJEButtonYPoint = c[1]);
      if (a.FixedTop + a.FixedHeaderHeight < b) {
        a.Fixed.className = "KJEButtonIsScrolling";
        a.Fixed.style.position = "absolute";
        if (a.KJEScrollSticky) {
          a.KJEScrollSticky.style.display = "none";
        }
        a.Fixed.style.top = a.FixedTop + "px";
        a.Fixed.style.left = "";
        a.Fixed.style.width = "100%";
      } else {
        a.Fixed.className = "KJEButtonIsFixed";
        a.Fixed.style.position = "fixed";
        a.Fixed.style.top = a.FixedHeaderHeight + "px";
        if (a.reportViewable) {
          a.Fixed.style.left = "";
          a.Fixed.style.width = a.ScreenSize.clientWidth + "px";
        } else {
          a.Fixed.style.left = 0 + c[0] + "px";
          a.Fixed.style.width = a.CalculatorTable.clientWidth + "px";
        }
        if (a.Error || a.InComplete || a.ShowScrollTitle) {
          if (a.KJEScrollSticky) {
            a.KJEScrollSticky.style.display = "block";
          }
        }
      }
    },
    goScroll: function () {
      var a = KJE;
      if (a.Scroll) {
        var b = a.util.findPos(a.H1Title ? a.H1Title : a.Calculator);
        window.scrollTo(b[0], b[1] - a.ScrollMinimum);
      }
    },
    showInputs: function () {
      var a = KJE;
      if (a.CalcControl.initInputs) {
        a.CalcControl.initInputs();
      }
      var b = (a.Report.style.display = "none");
      if (a.ScreenReaderHeader) {
        a.ScreenReaderHeader.style.display = "inline";
      }
      var c = "inline-block";
      var e = "block";
      a.CalculatorTable.className = a.CalculatorTableClass;
      a.Calculate.value = a.ButtonCalculate;
      if (a.ViewReport) {
        a.ViewReport.value = a.ButtonViewReport;
      }
      a.Calculate.style.display = a.ShowCalculateButton ? c : b;
      a.ViewReport.style.display = a.ShowReportButton ? c : b;
      var d = a.Definitions;
      if (d) {
        d.style.display = a.ShowDefinitions ? e : b;
      }
      a.Calculator.style.overflow = "hidden";
      a.Main.style.display = e;
      a.reportViewable = false;
      if (a.showInputsFirst) {
        a.goScroll();
      } else {
        a.showInputsFirst = true;
      }
      a.calcResize();
      setTimeout(function () {
        KJE.Main.style.overflow = "visible";
        KJE.Calculator.style.overflow = "visible";
      }, 500);
    },
    calculateInputInitiatizing: function (b) {
      var a = KJE;
      if (a.initializing == 1 || b) {
        a.initializing = 2;
        a.results(!a.reportViewable);
      }
    },
    calculateButtonAction: function () {
      var a = KJE;
      if (a.InTask) {
        return;
      }
      if (a.MenuWindowHide) {
        a.MenuWindowHide();
      }
      a.calculateInputInitiatizing(true);
      if (a.KeepCalculatorOnPage) {
        a.goScroll();
      }
      if (a.reportViewable) {
        a.printTheReport();
      } else {
        if (!a.Error && !a.InComplete) {
          a.CalcTimeout = setTimeout(a.resultsCalcButton, 50);
        }
      }
    },
    reportButtonExtraAction: function () {
      if (KJE.closeCalculatorDroppersForReport) {
        for (var a in KJE.droppers.items) {
          if (KJE.reportViewable) {
            KJE.droppers.items[a].doOpen(10);
          } else {
            KJE.droppers.items[a].doClose(10);
          }
        }
      }
    },
    resultsCalcButton: function () {
      KJE.calculateInputInitiatizing(true);
      KJE.results(false, false, true);
    },
    printOpenReport: function (e) {
      var b = KJE;
      var d = document.getElementById("KJEAllContent");
      var t = b.replace;
      var r = b.gReportGraphs;
      var h = d.innerHTML;
      var l =
        b.ReportDocumentStart.replace(
          "**REPORT_BODY_CLASS**",
          b.KJEReportBodyClass
        ) +
        h +
        b.ReportDocumentEnd;
      var k = l.indexOf("<!--KJEDEFINITIONS-->");
      var j = l.indexOf("<!--KJEDEFINITIONSEND-->", k);
      l = l.substring(0, k) + l.substring(j);
      k = l.indexOf("<!--KJEMAIN-->");
      j = l.indexOf("<!--KJEMAINEND-->", k);
      l = l.substring(0, k) + l.substring(j);
      l = t("<!--KJEDEFINITIONSEND-->", "", l);
      l = t("<!--REPORT_DEFINED_END-->", "", l);
      l = t("<!--KJEMAINEND-->", "", l);
      l = t("**REPORT_STYLE_SHEET**", b.ReportStyleSheet, l);
      l = t("**REPORT_STYLE_SHEET2**", b.ReportStyleSheet2, l);
      var p = b.replace(
        "<img src='assets/img/kilomark-favico.png'",
        "<img src='assets/img/kilomark-favico.png'"
      );
      p = b.replace("**REPORT_TITLE**", document.title, p);
      l = t("**HEADER**", p, l);
      l = t(
        "**FOOTER**",
        t(
          "<!--EXTRA_FOOTER-->",
          KJE.parameters.get(b.lang + "ReportExtraFooter", b.ReportExtraFooter),
          KJE.parameters.get(b.lang + "ReportFooter", b.ReportFooter)
        ),
        l
      );
      l = t(
        "**REPORT_TITLE**",
        b.CalcName ? b.CalcName : b.CalculatorTitleShow,
        l
      );
      l = t("**CURRENT_DATE**", b.dateFormat(KJE.Default.CURRENT_DATE), l);
      l = t("**current_date**", b.dateFormat(KJE.Default.CURRENT_DATE), l);
      l = t("**CURRENT_YEAR**", b.input(KJE.Default.CURRENT_YEAR), l);
      l = t("**current_year**", b.input(KJE.Default.CURRENT_YEAR), l);
      l = t("**TITLE**", b.CalcName ? b.CalcName : "Financial Calculator", l);
      l = t("Calculator Calculator", "Calculator", l);
      if (b.reportViewable) {
        for (var q = 0; q < r.length; q++) {
          if (r[q]) {
            var c = r[q]._cBackground;
            r[q].setBackground("#FFFFFF");
            r[q].setWidth(true, KJE.gWidthReport);
            r[q].setBackground(c);
          }
        }
      }
      var f = "<!--GRAPHEND-->";
      for (var o = 0; o < b.ReportGraphCount; o++) {
        var u =
          '<img src="' +
          r[o].wCanvas.toDataURL() +
          '" height=' +
          r[o].wCanvas.offsetHeight +
          " width=" +
          r[o].wCanvas.offsetWidth +
          ">";
        var a =
          "<h2 class='KJEGraphTitle'>" +
          t('"', "&quote", r[o]._titleGraph.s) +
          "</h2>";
        k = l.indexOf("<!--GRAPH" + o + "-->");
        j = l.indexOf(f, k);
        l =
          l.substring(0, k) +
          b.ReportGraphContainer.replace("**COUNT**", o + "") +
          a +
          u +
          "</div>" +
          l.substring(j + f.length);
      }
      e.document.write(l);
      var n = KJE.replace("'", "'", l);
      n = n.replace(/(\r\n|\n|\r)/gm, " ");
      e.document.close();
      e.focus();
      if (b.reportViewable) {
        var m = b.gReportGraphs;
        for (var q = 0; q < m.length; q++) {
          if (m[q]) {
            m[q].setWidth(false);
            m[q].setHeight(true, 0);
          }
        }
      }
    },
    printTheReport: function () {
      var a = KJE;
      var c = 0;
      if (screen) {
        c = screen.width / 2 - 480;
      }
      var b = window.open(
        "",
        "_blank",
        "toolbar=yes,menubar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=960,height=" +
          (screen.height - 170) +
          ",left=" +
          c +
          ",top=5"
      );
      if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        setTimeout(function () {
          a.printOpenReport(b);
        }, 100);
      } else {
        a.printOpenReport(b);
      }
    },
    showReport: function () {
      var a = KJE;
      if (a.InTask) {
        return;
      }
      a.InTask = false;
      if (a.Error || a.InComplete) {
        a.calculateInputInitiatizing(true);
        return;
      }
      if (a.ReportOKToOpen) {
        if (a.inCommandTask(true)) {
          return;
        }
        setTimeout(a.showReportFinal, 200);
      }
    },
    showReportFinal: function () {
      var b = KJE;
      b.DataPointHide();
      if (b.ScreenReaderHeader) {
        b.ScreenReaderHeader.style.display = "none";
      }
      if (KJE.KeepCalculatorOnPage == false) {
        if (KJE.MenuWindowHide) {
          KJE.MenuWindowHide();
        }
      }
      if (b.reportButtonExtraAction) {
        b.reportButtonExtraAction();
      }
      if (!b.reportViewable) {
        if (b.displayMenu) {
          b.displayMenu(false);
        }
        if (KJE.KeepCalculatorOnPage == false) {
          b.CalculatorTable.className = b.CalculatorTableReportClass;
        }
        b.results(false, true);
        if (b.Error || b.InComplete) {
          b.inCommandTask(false);
          return;
        }
        b.reportViewable = true;
        if (b.ViewReport) {
          b.Calculate.value = b.ButtonPrintReport;
        }
        b.Calculate.style.display = b.ShowPrintButton ? "inline-block" : "none";
        if (!b.KeepCalculatorOnPage) {
          b.Main.style.overflow = "hidden";
          b.Main.style.display = "none";
          jawsReader.read("Report Displayed press enter to hide report", true);
        }
        if (b.Definitions) {
          b.Definitions.style.display = "none";
        }
        b.Report.style.display = "block";
        if (b.ViewReport) {
          b.ViewReport.value = b.ButtonHideReport;
        }
        if (b.reportPreprocess) {
          b.sReport = b.reportPreprocess(b.CalcControl, b.ReportText);
        } else {
          b.sReport = b.ReportText;
        }
        var a = new KJE.ReportMessage(b.sReport);
        if (b.ShowExtraClientInputs) {
          b.setExtraClientReport(b.CalcControl, a);
        }
        a.input("**CURRENT_YEAR**", b.Default.CURRENT_YEAR);
        a.date("**CURRENT_DATE**", KJE.Default.CURRENT_DATE);
        b.CalcControl.formatReport(a);
        if (b.CalcControl.formatReportSpecial) {
          b.CalcControl.formatReportSpecial(a);
        }
        if (b.reportPostprocess) {
          a = new KJE.ReportMessage(b.reportPostprocess(a.get()));
        }
        a.input("**CURRENT_YEAR**", b.Default.CURRENT_YEAR);
        a.date("**CURRENT_DATE**", KJE.Default.CURRENT_DATE);
        b.sReport = a.get();
        setTimeout(b.fireReport, 50);
      } else {
        b.showInputs();
        if (b.CalculatorDesc) {
          b.CalculatorDesc.className = b.CalculatorDescInputClass;
        }
        if (b.KeepCalculatorOnPage) {
          b.Calculate.style.display = "none";
        } else {
          setTimeout(b.results, 400);
          setTimeout(function () {
            jawsReader.read("Report Hidden press enter to display report", true);
          }, 500);
        }
        if (b.displayMenu) {
          b.displayMenu(true);
        }
        setTimeout(function () {
          b.inCommandTask(false);
        }, 400);
      }
      if (b.CalcShowReportTimeout) {
        clearTimeout(b.CalcShowReportTimeout);
      }
    },
    fireReport: function () {
      var b = KJE;
      if (b.CalculatorDesc) {
        b.CalculatorDesc.className = b.CalculatorDescReportClass;
      }
      var e = b.sReport;
      for (var d = 0; d < b.ReportGraphCount; d++) {
        var h =
          "<!--GRAPH" +
          d +
          "-->" +
          b.ReportGraphContainer.replace("**COUNT**", d + "") +
          "<canvas id=KJE-G-REPORTGRAPH" +
          d +
          "> </canvas></div><!--GRAPHEND-->";
        e = e.replace(b.MSG_GRAPH, h);
      }
      b.ReportTop.innerHTML = e;
      if (b.ReportGraphCount > 0) {
        for (var f = 0; f < b.ReportGraphCount; f++) {
          var a = b.gNewGraph(
            b.gGraphs[f]._gtGraphType._iGraphType,
            "REPORTGRAPH" + f,
            true,
            false,
            false,
            b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""),
            true
          );
          if (a) {
            b.gReportGraphs[f] = a;
          }
        }
      }
      var c = null;
      for (f = 0; f < b.gReportGraphs.length; f++) {
        c = b.gReportGraphs[f];
        c.setAriaRole(b.gGraphs[f].getFigureTitle());
        c.setProperty(b.gGraphs[f].getProperty());
        c._legend.setProperty(b.gGraphs[f]._legend.getProperty());
        c._grid.setProperty(b.gGraphs[f]._grid.getProperty());
        c._axisY.setProperty(b.gGraphs[f]._axisY.getProperty());
        c._axisX.setProperty(b.gGraphs[f]._axisX.getProperty());
        c.setTitle(b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""));
        c._titleXAxis.setProperty(b.gGraphs[f]._titleXAxis.getProperty());
        c._titleYAxis.setProperty(b.gGraphs[f]._titleYAxis.getProperty());
        c.add(b.gGraphs[f].getDataProperties());
        c.setBackground(
          b.parameters.get("PAGEBACKGROUND_COLOR", b.colorRGBackground)
        );
        c.setWidth(true);
      }
      var j = b.CalcControl;
      if (j.formatGraph) {
        j.formatGraph(j, b.gReportGraphs);
      }
      if (j.reportComplete) {
        j.reportComplete(b.GuiControl);
      }
      if (b.reportComplete) {
        b.reportComplete(b.CalcControl, b.ReportText);
      }
      if (b.bReportAddButtonEvents) {
        b.addReportButtonEvents();
      }
      if (b.addReportExtraEvents) {
        b.addReportExtraEvents();
      }
      if (!b.KeepCalculatorOnPage) {
        b.ViewReport.focus();
        b.goScroll();
      }
      setTimeout(function () {
        b.inCommandTask(false);
      }, 400);
    },
    formatDefinitionEntry: function (d) {
      var a = KJE;
      var c = a.definitions.items;
      for (var b in c) {
        d = a.replace(b, c[b], d);
      }
      d = a.replace("<dt>", "<h3 class='KJEDefinition'>", d);
      d = a.replace("</dt>", "</h3>", d);
      d = a.replace("</dd>", "</p>", d);
      d = a.replace("<dd>", "<p>", d);
      d = a.replace("<p>", "<p class='KJEDefinition'>", d);
      if (a.parseDefinitions) {
        d = a.parseDefinitions(d);
      }
      return d;
    },
    addReportButtonEvents: function () {
      var b = KJE;
      var a = (b.PrintReport = document.getElementById("KJEPrintReport"));
      var c = (b.HideReport = document.getElementById("KJEHideReport"));
      var d = "click";
      if (a) {
        a.addEventListener(d, b.printTheReport, false);
      }
      if (c) {
        c.addEventListener(d, b.showReport, false);
      }
    },
  };
  KJE.util = {
    findPos: function (a) {
      var b = (curtop = 0);
      if (a.offsetParent) {
        do {
          b += a.offsetLeft;
          curtop += a.offsetTop;
        } while ((a = a.offsetParent));
      }
      return [b, curtop];
    },
    getPageScroll: function () {
      var b, a;
      if (self.pageYOffset) {
        a = self.pageYOffset;
        b = self.pageXOffset;
      } else {
        if (document.documentElement && document.documentElement.scrollTop) {
          a = document.documentElement.scrollTop;
          b = document.documentElement.scrollLeft;
        } else {
          if (document.body) {
            a = document.body.scrollTop;
            b = document.body.scrollLeft;
          }
        }
      }
      return [b, a];
    },
    findPosRelativeToViewport: function (c) {
      var b = this.findPos(c);
      var a = this.getPageScroll();
      return [b[0] - a[0], b[1] - a[1]];
    },
  };
  KJE.stripDate = function (a) {
    if (!a) {
      return "";
    }
    var c = a.length;
    var d = "";
    while (c > 0) {
      var b = a.charAt(c - 1);
      switch (b) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "/":
          d = b + d;
          break;
        case "-":
          d = b + "/";
          break;
        default:
          break;
      }
      c--;
    }
    return d;
  };
  KJE.strip = function (a, f) {
    if (!a) {
      return "0";
    }
    var c = a.length;
    var e = "";
    var g = 0;
    var h = 0;
    while (c > 0) {
      var b = a.charAt(c - 1);
      switch (b) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          e = b + e;
          break;
        case ".":
          if (!g) {
            e = b + e;
          }
          g++;
          break;
        case "-":
        case "(":
          h++;
          break;
        default:
          break;
      }
      c--;
    }
    if (e == "") {
      return "0";
    }
    return h && !f ? "-" + e : e;
  };
  KJE.InputModern = true;
  KJE.WindowsOS = navigator.userAgent.indexOf("Windows") != -1;
  KJE.IE7 = navigator.appVersion.indexOf("MSIE 7.") != -1;
  KJE.IE8 = navigator.appVersion.indexOf("MSIE 8.") != -1;
  KJE.IE9 = navigator.appVersion.indexOf("MSIE 9.") != -1;
  KJE.CHROME = navigator.userAgent.toLowerCase().indexOf("chrome") !== -1;
  KJE.FIREFOX = navigator.userAgent.toLowerCase().indexOf("Firefox") !== -1;
  KJE.IE7and8 = (KJE.IE7 || KJE.IE8) && !window.addEventListener;
  KJE.IEOld = KJE.IE9 || KJE.IE7and8;
  KJE.Safari =
    navigator.userAgent.indexOf("Safari") != -1 &&
    navigator.userAgent.indexOf("Chrome") == -1;
  if (!KJE.IE7and8) {
    KJE.IE7 = false;
  }
  KJE.VML = false;
  KJE.List = function () {
    this.length = 0;
    this.items = {};
    this.bLock = {};
  };
  KJE.List.prototype.getSet = function (b, a) {
    if (this.exists(b)) {
      return this.items[b];
    }
    return this.set(b, a);
  };
  KJE.List.prototype.get = function (b, a) {
    if (typeof this.items[b] == "undefined") {
      a = a;
    } else {
      a = this.items[b];
    }
    if (typeof a == "string") {
      a = KJE.parseList ? KJE.parseList(a) : a;
    }
    return a;
  };
  KJE.List.prototype.exists = function (a) {
    return !(typeof this.items[a] == "undefined");
  };
  KJE.List.prototype.locked = function (a) {
    return !(typeof this.bLock[a] == "undefined");
  };
  KJE.List.prototype.set = function (b, c, a) {
    if (typeof c != "undefined") {
      if (typeof this.items[b] == "undefined") {
        this.length++;
      }
      if (this.locked(b)) {
        return this.items[b];
      } else {
        if (a) {
          this.bLock[b] = true;
        }
        this.items[b] = c;
      }
    }
    return c;
  };
  KJE.setExtraClientInputs = function (b) {
    var a = KJE.inputs.items;
    b.EXTRA_CLIENTNAME = a.EXTRA_CLIENTNAME.getValue();
    b.EXTRA_NOTES = a.EXTRA_NOTES.getValue();
    b.EXTRA_DATE = a.EXTRA_DATE.getValue();
  };
  KJE.setExtraClientReport = function (c, a) {
    var b = KJE;
    var d = KJE.parameters.get(
      "EXTRA_CLIENT_BLOCK",
      "<div class='KJEReportExtraClientBlock'>" +
        (c.EXTRA_CLIENTNAME
          ? "<strong>Prepared for: EXTRA_CLIENTNAME</strong> "
          : "") +
        (c.EXTRA_NOTES ? "<br>EXTRA_NOTES<br>" : "") +
        (c.EXTRA_DATE ? "EXTRA_DATE" : "") +
        "</div>"
    );
    if (a.indexOf("**EXTRA_CLIENT_BLOCK**") < 0) {
      a.prepend("**EXTRA_CLIENT_BLOCK**");
    }
    if (c.EXTRA_CLIENTNAME || c.EXTRA_NOTES || c.EXTRA_DATE) {
      a.replace("**EXTRA_CLIENT_BLOCK**", d);
    } else {
      a.replace("**EXTRA_CLIENT_BLOCK**", "");
    }
    a.replace("EXTRA_CLIENTNAME", c.EXTRA_CLIENTNAME);
    a.replace("EXTRA_NOTES", c.EXTRA_NOTES);
    a.replace("EXTRA_DATE", b.dateFormat(c.EXTRA_DATE, ""));
  };
  KJE.CalculatorWidth = KJE.CalculatorWidthMax;
  KJE.MSG_SR_HEADER =
    "By changing any value in the following form fields, calculated values are immediately provided for displayed output values. Click the view report button to see all of your results.";
  KJE.parameters = new KJE.List();
  KJE.inputs = new KJE.List();
  KJE.droppers = new KJE.List();
  KJE.definitions = new KJE.List();
  KJE.subheader = "";
  KJE.iStorageTime = 1000;
  KJE.STORAGE_NONE = 0;
  KJE.STORAGE_AUTO = 1;
  KJE.bStorageNonsupportWarning = true;
  KJE.bStorageOK = function () {
    if (typeof Storage !== "undefined") {
      try {
        localStorage.setItem("localStorage", 1);
        localStorage.removeItem("localStorage");
      } catch (a) {
        KJE.bUseStorage = KJE.STORAGE_NONE;
        return false;
      }
      return true;
    }
    return false;
  };
  KJE.bStorageInit = function () {
    KJE.oStorageItems = null;
    KJE.bUseStorage = KJE.parameters.get("LOCAL_STORAGE", KJE.STORAGE_AUTO);
    KJE.sStorageKey = typeof KJE.CalcType != "undefined" ? KJE.CalcType : "TEMP";
    if (KJE.bStorageOK()) {
      try {
        var b = localStorage.getItem(KJE.sStorageKey);
        if (KJE.LZString) {
          b = KJE.LZString.decompressFromEncodedURIComponent(b);
        }
        KJE.oStorageItems = JSON.parse(b);
      } catch (c) {
        KJE.oStorageItems = {};
      }
      if (KJE.oStorageItems == null) {
        KJE.oStorageItems = {};
      }
      localStorage.setItem(KJE.sStorageKey + "_href", KJE.formatHref());
      localStorage.setItem(KJE.sStorageKey + "_title", document.title);
    } else {
      KJE.bUseStorage = KJE.STORAGE_NONE;
    }
    if (KJE.getURLValueParam) {
      var a = KJE.getURLValueParam();
      if (a) {
        KJE.oStorageItems = a;
      }
    }
    return KJE.bUseStorage;
  };
  KJE.StorageSet = function () {
    if (KJE.bUseStorage) {
      if (KJE.bStorageTimeout) {
        clearTimeout(KJE.bStorageTimeout);
      }
      KJE.bStorageTimeout = setTimeout(KJE.bStorageSet, KJE.iStorageTime);
    }
  };
  KJE.getJSONFromInputs = function () {
    var b = KJE.inputs.items;
    var a = {};
    for (var c in b) {
      if (b.hasOwnProperty(c)) {
        if (b[c]._inputType != KJE.TypeLabel && b[c]._inputType != KJE.TypeNone) {
          a[c] = b[c]._value;
        }
        if (b[c]._inputTypeAdditional == KJE.TypeDropBox) {
          a[b[c]._Additional.name] = b[c]._Additional.value;
        }
      }
    }
    var d = JSON.stringify(a);
    return d;
  };
  KJE.bStorageSet = function (c, b) {
    var a = KJE.getJSONFromInputs();
    if (KJE.LZString) {
      a = KJE.LZString.compressToEncodedURIComponent(a);
    }
    if (KJE.bUseStorage) {
      localStorage.setItem(KJE.sStorageKey + (c ? "#" + c : ""), a);
      if (b) {
        localStorage.setItem(KJE.sStorageKey + "#" + c + "_name", b);
      }
    }
    return a;
  };
  KJE.bStoragePopulate = function (c) {
    var b = KJE.inputs.items;
    for (var d in b) {
      var a = false;
      if (c.hasOwnProperty(d)) {
        a = c[d];
      } else {
        if (b.hasOwnProperty(d)) {
          a = b[d].vDefault;
        }
      }
      var e = null;
      if (b[d]._inputTypeAdditional != KJE.TypeNone) {
        if (c.hasOwnProperty(b[d]._Additional.name)) {
          e = c[b[d]._Additional.name];
        } else {
          e = b[d].vDefault2;
        }
      }
      KJE.InputItem.InputSetValues(b[d], a, e, false);
    }
    KJE.results(true);
  };
  KJE.StorageGet = function (b, a) {
    var d = KJE.parameters.get(b, a);
    if (KJE.oStorageItems && KJE.bUseStorage) {
      var c = KJE.oStorageItems[b];
      if (c != null) {
        d = c;
      }
    }
    return d;
  };
  KJE.bHrefTrimURL = true;
  KJE.formatHref = function () {
    var a = document.location.href;
    if (KJE.bHrefTrimURL) {
      var b = a.indexOf("?");
      if (b > 0) {
        a = a.substr(0, b);
      }
    }
    return a;
  };
  KJE.MenuResizeTimeOut = null;
  KJE.MenuWindowVisible = false;
  KJE.MenuSelectedRow = -1;
  KJE.menuInit = function (b) {
    KJE.sMenuRESET =
      "<div class='KJEMenuGroupRow'><input type=button class='KJEMenuButton KJEMenuButtonWide' id=KJEReset value='" +
      KJE.parameters.get("MSG_MENU_RESET", "Reset to Defaults") +
      "'/></div>";
    KJE.sMenuCLEAR =
      "<div class='KJEMenuGroupRow'><input type=button class='KJEMenuButton KJEMenuButtonWide' id=KJEClear value='" +
      KJE.parameters.get("MSG_MENU_CLEAR", "Clear all Fields") +
      "'/></div>";
    KJE.sMenuHTMLAuto = "**RESET****CALCCLEAR**";
    KJE.MenuHeader =
      '<div class="KJEMenuHeader"><h3 id="KJEMenuWindowTitle">**MSG_MENU_TITLE**</h3></div>';
    KJE.ShowMenu = KJE.parameters.get("SHOW_MENU", KJE.ShowExtraClientInputs);
    if (KJE.ShowMenu) {
      if (b) {
        b.style.paddingRight = KJE.CalcTitlePaddingMenu + "px";
      }
      var a = (KJE.Menu = document.getElementById("KJEMenu"));
      if (a) {
        KJE.MenuContainer = document.getElementById("KJEMenuContainer");
        a.addEventListener("click", KJE.showMenu, false);
        KJE.MenuContainer.setAttribute(KJE.sExpand, "false");
      }
    }
  };
  KJE.MenuResize = function () {
    if (KJE.ShowMenu) {
      var a = KJE;
      clearTimeout(a.MenuResizeTimeOut);
      a.MenuResizeTimeOut = setTimeout(a.resizeMenu, 50);
    }
  };
  KJE.displayMenu = function (a) {
    if (KJE.ShowMenu) {
      var b = KJE.Menu.style;
      if (a && KJE.ShowMenu) {
        b.display = "Inline-Block";
        KJE.MenuContainer.setAttribute(KJE.sExpand, "false");
      } else {
        b.display = "None";
        KJE.MenuContainer.removeAttribute(KJE.sExpand);
      }
    }
  };
  KJE.resizeMenu = function () {
    var a = KJE;
    if (a.reportViewable || !a.ShowMenu) {
      return false;
    }
    if (a.MenuWindowVisible) {
      a.MenuWindowShow();
    }
  };
  KJE.showMenu = function () {
    if (KJE.MenuWindowVisible) {
      setTimeout(KJE.MenuWindowHide, 1);
    } else {
      setTimeout(KJE.MenuWindowShow, 1);
    }
  };
  KJE.MenuWindowHide = function (c) {
    if (KJE.ShowMenu && KJE.MenuWindow) {
      var a = KJE;
      a.MenuWindow.style.display = "none";
      KJE.MenuContainer.setAttribute(KJE.sExpand, "false");
      if (c) {
      } else {
        try {
          KJE.Menu.focus();
        } catch (b) {}
      }
      a.MenuWindowVisible = null;
    }
  };
  KJE.MenuWindowOffset = function () {
    var a = KJE.MenuWindow.offsetParent;
    if (a) {
      var b = KJE.getScreenCoord(0, 0, a);
      return { x: -b.x, y: -b.y };
    } else {
      return { x: 0, y: 0 };
    }
  };
  KJE.MSG_MENU_TITLE = "Additional Functions ";
  KJE.MenuWindowShow = function () {
    var b = KJE;
    b.DataPointHide();
    if (b.DefnPoint) {
      b.DefnPointHide();
    }
    if (b.MenuWindow == null) {
      b.MenuWindow = document.getElementById("KJEMenuWindow");
      KJE.MenuHeader = b.replace(
        "**MSG_MENU_CLOSE**",
        KJE.MSG_DEFN_CLOSE_LABEL,
        KJE.MenuHeader
      );
      var d = false;
      if (KJE.initMenuMulti && KJE.bUseStorage == KJE.STORAGE_MULTI) {
        d = KJE.initMenuMulti();
      }
      if (!d || KJE.bUseStorage == KJE.STORAGE_NONE) {
        KJE.MenuHeader = b.replace(
          "**MSG_MENU_TITLE**",
          KJE.MSG_MENU_TITLE,
          KJE.MenuHeader
        );
        b.MenuWindow.innerHTML =
          KJE.MenuHeader +
          b.replace(
            "**CALCCLEAR**",
            KJE.sMenuCLEAR,
            b.replace(
              "**RESET**",
              KJE.sMenuRESET,
              b.replace(
                "**EMAIL**",
                b.replace("**EMAIL_DEFAULT**", KJE.sEmailDefault, KJE.sMenuEMAIL),
                b.sMenuHTMLAuto
              )
            )
          );
      }
      var a = (b.MenuWindow.buttonReset = document.getElementById("KJEReset"));
      var c = (b.MenuWindow.buttonClear = document.getElementById("KJEClear"));
      var f = (b.MenuWindow.buttonEmail = document.getElementById("KJEEmail"));
      var e = (b.MenuWindow.buttonEmail = document.getElementById("KJECopyLink"));
      if (a) {
        a.addEventListener("click", KJE.resetPage, false);
      }
      if (c) {
        c.addEventListener("click", KJE.clearPage, false);
      }
      if (f) {
        f.addEventListener("click", KJE.emailpage, false);
      }
      if (e) {
        e.addEventListener("click", KJE.copyLink, false);
      }
    }
    b.MenuWindow.style.display = "block";
    KJE.MenuContainer.setAttribute(KJE.sExpand, "true");
    b.MenuWindowVisible = true;
  };
  KJE.resetPage = function () {
    if (KJE.MenuColorRows && KJE.bUseStorage) {
      KJE.MenuColorRows(-1);
    }
    KJE.bStoragePopulate({});
  };
  KJE.clearPage = function () {
    var a = KJE;
    var b = a.inputs.items;
    if (a.MenuColorRows && a.bUseStorage) {
      a.MenuColorRows(-1);
    }
    a.bStoragePopulate({});
    for (var c in b) {
      if (b[c]._inputType == a.TypeNumber) {
        var d = b[c]._minimum < 0 ? 0 : b[c]._minimum;
        b[c].setValue(d, true);
      } else {
        if (b[c]._inputType == a.TypeDate) {
          b[c].setText("");
        } else {
          if (b[c]._inputType == a.TypeString) {
            b[c].setText("");
          }
        }
      }
    }
    a.calcClear();
  };
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", KJE.init, false);
  }
  KJE.INIT_BLANK = 1;
  KJE.INIT_ZERO = 2;
  KJE.INIT_NORMAL = 0;
  KJE.INIT = KJE.INIT_NORMAL;
  KJE.INIT_NOCHANGE = "NOCHANGE";
  KJE.INIT_DEFAULT_NORMAL = [
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
  ];
  KJE.INIT_DEFAULT_ZERO = [
    KJE.INIT_NOCHANGE,
    0,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
  ];
  KJE.INIT_DEFAULT_BLANK = [
    KJE.INIT_NOCHANGE,
    "",
    "",
    "",
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
    KJE.INIT_NOCHANGE,
  ];
  KJE.INIT_ACTION = KJE.INIT_DEFAULT_NORMAL;
  KJE.errorObject = function (a, b) {
    this.err = a;
    this.oInputElement = b;
  };
  KJE.getURLValueParam = function () {
    var g = {};
    var f = window.location.href;
    var a = f.indexOf(KJE.URLValueParm);
    if (a > 0) {
      var c = f.substring(a + KJE.URLValueParm.length + 1);
      if (c) {
        var b = null;
        try {
          b =
            "{" +
            KJE.replace(
              "*",
              '"',
              KJE.replace(
                "(",
                "",
                KJE.replace(
                  ")",
                  "",
                  KJE.replace(";", "", KJE.replace("EMPTY", '""', c))
                )
              )
            ) +
            "}";
          b = JSON.parse(b);
        } catch (d) {
          b = null;
        }
      }
      if (b == "" || b == null) {
        alert(
          "There was an error in the data sent to this calculator. This can be caused by editing or changing a calculator link. We were unable to populate the calculator with the sent values. Calculator will appear with default values."
        );
        return false;
      }
      return b;
    }
    return false;
  };
  KJE.iAddMoreCount = 0;
  KJE.iAddMoreDropperCount = 0;
  KJE.initializeMore = function (d, c, a, b) {
    if (d.addMoreInit) {
    } else {
      d.oAddMores = new Array();
      d.addMoreInit = function (f, h, m, j) {
        var g = new Object();
        g.sRows = h;
        var k = (g.oRowsToShow = new Array(h.length));
        g.visibleMax = f;
        g.visibleCount = KJE.parameters.get(
          "VISIBLE_COUNT" + j,
          KJE.parameters.get("VISIBLE_COUNT", 1)
        );
        g.AddMore = document.getElementById("KJEAddMore" + (j + 1));
        this.oAddMores[KJE.iAddMoreCount] = g;
        var i = this;
        if (g.AddMore) {
          g.AddMore.addEventListener("click", function (n) {
            i.addMore(j);
          });
          for (var l = 0; l < h.length; l++) {
            k[l] = new Array(f);
            if (Array.isArray(h[l])) {
              for (var e = 0; e < f; e++) {
                k[l][e] = h[l][e]._container;
                if (m[l]) {
                  if (h[l][e].getValue() > 0) {
                    g.visibleCount = g.visibleCount <= e ? e + 1 : g.visibleCount;
                  }
                }
              }
            } else {
              for (var e = 0; e < f; e++) {
                k[l][e] = this.getInputDivider(h[l], e);
              }
            }
          }
          for (var e = g.visibleCount; e < g.visibleMax; e++) {
            if (g.visibleCount <= e) {
              for (var l = 0; l < h.length; l++) {
                if (k[l][e]) {
                  k[l][e].style.display = "none";
                }
              }
            }
          }
        }
      };
      d.getInputDivider = function (e, g) {
        var f = document.getElementById("KJE-" + e + "" + (g + 1));
        return f ? f : false;
      };
      d.addMoreDropper = function (e, f) {
        KJE.iAddMoreDropperCount++;
        f = f ? f : KJE.iAddMoreDropperCount;
        this.oAddMores[f - 1].AddMoreDropper = e;
      };
      d.addMore = function (j) {
        var f = this.oAddMores[j].sRows;
        var n = this.oAddMores[j].oRowsToShow;
        var k = this.oAddMores[j].visibleCount;
        var e = this.oAddMores[j].visibleMax;
        if (k < e) {
          for (var o = 0; o < f.length; o++) {
            if (n[o][k]) {
              n[o][k].style.display = "block";
              var i = n[o][k].id;
              if (i) {
                var i = i.replace("KJE-C-", "");
                if (KJE.inputs.items[i]) {
                  KJE.inputs.items[i].newWidth();
                }
              }
            }
          }
          var g = n[1][k];
          if (g) {
            var m = g.getElementsByTagName("input")[0];
            if (m) {
              m.focus();
            }
          }
        }
        if (k >= e - 1) {
          document.getElementById("KJEAddMore" + (j + 1)).style.display = "none";
        }
        k++;
        this.oAddMores[j].visibleCount = k;
        var h = this.oAddMores[j].AddMoreDropper;
        var l = h._iHeight ? h._iHeight : 0;
        KJE.elementHeight(h._idDroppee.style, "100%");
        setTimeout(function () {
          h._iHeight = h._idDroppee.offsetHeight - KJE._idDroppeePadding;
          KJE.elementHeight(h._idDroppee.style, h._iHeight + "px");
        }, 250);
      };
    }
    d.addMoreInit(c, a, b, KJE.iAddMoreCount);
    KJE.iAddMoreCount++;
  };
  KJE.elementHeight = function (a, b) {
    if (KJE.bElementStyling) {
      a.height = b;
    }
  };
  KJE.elementWidth = function (a, b) {
    if (KJE.bElementStyling) {
      a.width = b;
    }
  };
  if (!document.getElementById("KJEAllContent")) {
    if (document.currentScript) {
      KJE.AllContentTemp = document.createElement("span");
      document.currentScript.parentNode.insertBefore(
        KJE.AllContentTemp,
        document.currentScript
      );
    }
  }
  KJE.parameters.set("USE_INPUT_SIDEBYSIDE", true);
  KJE.bHT = false;
  KJE.getDate = function (b, c, a) {
    var e = null;
    if (c + a + b >= 0) {
      if (c >= 1 && c <= 12 && a >= 1 && a <= 31 && b >= 1 && b <= 9999) {
        var e = new Date(b, c - 1, a);
      }
    }
    if (e == null) {
      throw KJE.getKJEReplaced(KJE.MSG_INVALID_DATE);
    }
    return e;
  };
  KJE.getAge = function (c, a) {
    if (c) {
      var d = new Date();
      var b = d.getFullYear() - c.getFullYear();
      if (!a) {
        if (
          d.getMonth() < c.getMonth() ||
          (d.getMonth() == c.getMonth() && d.getDate() < c.getDate())
        ) {
          b--;
        }
      }
    } else {
      throw KJE.getKJEReplaced(KJE.MSG_INVALID_DATE);
    }
    return Math.floor(b);
  };
  KJE.SUM_ARRAY = function (a) {
    var c = a.length;
    var b = 0;
    for (var d = 0; d < c; d++) {
      b += a[d];
    }
    return b;
  };
  KJE.ROR_MONTH = function (a) {
    return Math.pow(1 + a, 1 / 12) - 1;
  };
  KJE.ROR_PERIOD = function (a, b) {
    return Math.pow(1 + a, 1 / b) - 1;
  };
  KJE.APY_MONTH = function (a) {
    return KJE.FV_AMT(a, 12, 1) - 1;
  };
  KJE.NPV_AMT = function (b, c, a) {
    if (b == -1) {
      return 0;
    }
    return a / Math.pow(1 + b, c);
  };
  KJE.FV_AMT = function (b, c, a) {
    if (b == 0) {
      return a;
    }
    return a / Math.pow(1 + b, -1 * c);
  };
  KJE.FV_BEGIN = function (a, c, b) {
    if (a == 0) {
      return c * b;
    }
    return (b / a) * (Math.pow(1 + a, c + 1) - 1) - b;
  };
  KJE.FV = function (a, c, b) {
    if (a == 0) {
      return c * b;
    }
    return (b / a) * (Math.pow(1 + a, c) - 1);
  };
  KJE.PV = function (a, c, b) {
    return KJE.NPV_AMT(a, c, KJE.FV(a, c, b));
  };
  KJE.PV_BEGIN = function (a, c, b) {
    return KJE.NPV_AMT(a, c, KJE.FV_BEGIN(a, c, b));
  };
  KJE.RATE = function (h, c, b) {
    var a = 0;
    var g = 1;
    var e = c;
    var d = KJE.PMT;
    for (var f = 1; f < 50; f++) {
      e = d(a, h, b);
      if (e == c) {
        return a;
      } else {
        if (e < c) {
          a += g;
        } else {
          a -= g;
        }
      }
      g = g / 2;
    }
    return a;
  };
  KJE.PERIODS = function (b, c, a) {
    if (b == 0 && c != 0) {
      return a / c;
    }
    var f = 3120;
    var h = 1560;
    var e = c;
    var d = KJE.PMT;
    for (var g = 1; g < 50; g++) {
      e = d(b, f, a);
      if (e == c) {
        return f;
      } else {
        if (e < c) {
          f -= h;
        } else {
          f += h;
        }
      }
      h = h / 2;
    }
    return f;
  };
  KJE.PERIODS_FV = function (h, i, a) {
    var f = 720;
    var g = 360;
    var e = i;
    var d = KJE.PMT;
    var c = KJE.NPV_AMT;
    for (var b = 1; b < 50; b++) {
      e = d(h, f, c(h, f, a));
      if (e == i) {
        return f;
      } else {
        if (e < i) {
          f -= g;
        } else {
          f += g;
        }
      }
      g = g / 2;
    }
    return f;
  };
  KJE.APR = function (f, c, b, a, e) {
    var d = KJE.PMT(b, f, a + e);
    return KJE.RATE(f, d, a);
  };
  KJE.PMT = function (a, c, b) {
    if (c <= 0) {
      return b;
    }
    if (c <= 1) {
      return b * (1 + a);
    }
    if (a == 0) {
      return b / c;
    }
    return (b * a) / (1 - Math.pow(1 + a, c * -1));
  };
  KJE.PMT_BEGIN = function (a, h, e) {
    var c = KJE.PMT;
    if (h <= 1) {
      return e;
    }
    var b = c(a, h, e);
    var g = b / 2;
    var d = 0;
    for (var f = 1; f < 50; f++) {
      d = c(a, h - 1, e - b);
      if (d == b) {
        return b;
      } else {
        if (d < b) {
          b -= g;
        } else {
          b += g;
        }
      }
      g = g / 2;
    }
    return b;
  };
  KJE.showCode = function (e, h, d, b) {
    var g = b;
    if (!d) {
      var c = g.indexOf(e);
      var a = g.indexOf(h);
      var f = "";
      while (c > 0 && a > c) {
        f = g.substring(0, c);
        f += g.substring(a + h.length);
        c = f.indexOf(e);
        a = f.indexOf(h);
        g = f;
      }
      g = f == "" ? b : f;
    }
    g = KJE.replace(e, "", g);
    g = KJE.replace(h, "", g);
    return g;
  };
  KJE.ScheduleTableTitle = "Periodic Schedule";
  KJE._sTableHeader =
    "<p class='KJEFooter KJEScheduleNote'>**ROTATE_MESSAGE**</p><table class='KJEScheduleTable KJEReportTableShrink' summary='**TITLE_TAG**'>";
  KJE._sTableFooter = "</table>";
  KJE._sFooterRow = "<tr class='KJEScheduleFooterRow' >";
  KJE._sTopRow = "<tr class='KJEScheduleHeaderRow' >";
  KJE._sEvenRow = "<tr class='KJEScheduleEvenRow' >";
  KJE._sOddRow = "<tr class='KJEScheduleOddRow' >";
  KJE._sRowFooter = "</tr>";
  KJE._sHeading = "<th class='KJEScheduleHeading' >";
  KJE._sHeadingUnderline =
    "<th class='KJEScheduleHeading KJEScheduleHeadingBorder' >";
  KJE._sHeadingLeftBorder =
    "<th class='KJEScheduleHeading KJEScheduleHeadingLeftBorder' >";
  KJE._sHeadingRightBorder =
    "<th class='KJEScheduleHeading KJEScheduleHeadingRightBorder' >";
  KJE._sHeadingFooter = "</th>";
  KJE._sCell = "<td class='KJEScheduleCell' >";
  KJE._sCellStrong = "<td class='KJEScheduleCellStrong' >";
  KJE._sCellFooter = "</td>";
  KJE._sScheduleRotate =
    "(Rotate device or make window larger to view schedule.)";
  KJE._sScheduleHeader = "<thead class='KJEScheduleTHeader'>";
  KJE._sScheduleHeaderEnd = "</thead>";
  KJE._sScheduleFooter = "<tfoot class='KJEScheduleTFooter'>";
  KJE._sScheduleFooterEnd = "</tfoot>";
  KJE._sScheduleBody = "<tbody class='KJEScheduleTBody'>";
  KJE._sScheduleBodyEnd = "</tbody>";
  KJE._sCellBorderClass = "KJECellBorder";
  KJE.ScheduleGroupingNotStarted = 0;
  KJE.ScheduleGroupingStarted = 1;
  KJE.ScheduleGroupingEnded = 2;
  KJE.Repeating = function (a) {
    a = !a ? "MSG_REPORT_COL" : a;
    this.sRepeating = "";
    this.nRepeatingCount = 0;
    this.bScheduleHeader = KJE.ScheduleGroupingNotStarted;
    this.bScheduleFooter = KJE.ScheduleGroupingNotStarted;
    this.bScheduleBody = KJE.ScheduleGroupingNotStarted;
    this.sReportCols = new Array(15);
    this.bReportRequired = new Array(15);
    for (var b = 0; b < 15; b++) {
      this.sReportCols[b] = KJE.parameters.get(a + (b + 1), "");
      this.bReportRequired[b] = KJE.parameters.get(
        "MSG_REPORT_REQ" + (b + 1),
        true
      );
    }
  };
  KJE.Repeating.prototype.sReportCol = function (a, b) {
    var c = "";
    if (b < 1 || b > this.sReportCols.length) {
      c = a;
    } else {
      if (!this.sReportCols[b - 1] || this.sReportCols[b - 1] == "") {
        c = a;
      } else {
        c = this.sReportCols[b - 1];
      }
    }
    return c;
  };
  KJE.Repeating.prototype.getRepeat = function (d) {
    var a = KJE;
    var c = a._sTableHeader.replace("**ROTATE_MESSAGE**", KJE._sScheduleRotate);
    var b = a._sScheduleBodyEnd + a._sTableFooter;
    return (
      c.replace(
        "**TITLE_TAG**",
        d
          ? d.replace("'", "&#39;")
          : a.parameters.get("MSG_REPEAT_TITLE", a.ScheduleTableTitle)
      ) +
      this.sRepeating +
      b
    );
  };
  KJE.Repeating.prototype.clearRepeat = function () {
    this.sRepeating = "";
    this.bScheduleHeader = KJE.ScheduleGroupingNotStarted;
    this.bScheduleFooter = KJE.ScheduleGroupingNotStarted;
    this.bScheduleBody = KJE.ScheduleGroupingNotStarted;
    this.nRepeatingCount = 0;
  };
  KJE.Repeating.prototype.add = function (p, n, c, b, k, m, d, l) {
    var q = "";
    if (arguments.length == 0) {
      return q;
    }
    var f = this.bReportRequired;
    var a = "";
    var j = "";
    for (var h = m.length; h > 1; h--) {
      if (m[h - 1] != null) {
        break;
      }
    }
    var g = 0;
    d = d ? true : false;
    var o = "";
    for (var e = 0; e < h; e++) {
      if (m[e] != null) {
        if (m[e] != "" && f[e]) {
          if (m[e].sContent) {
            j = m[e].sContent;
            a = m[e].sCell ? m[e].sCell : p;
            if (m[e].sFormat) {
              a = a.replace(">", " " + m[e].sFormat + ">");
            }
            if (m[e].sClass) {
              a = a.replace("class='", "class='" + m[e].sClass + " ");
            }
            d = false;
          } else {
            a = p;
            if (d) {
              a = a.replace("' >", "' scope='col' >");
            }
            j = m[e];
          }
          if (g == 0) {
            o = j + "";
          }
          if (e < h - 1) {
            a = a.replace("class='", "class='" + k + " ");
          }
          g++;
          q += KJE.Repeating.bCellRemoveHeader(a, j, n, l);
        }
      }
    }
    if (g > 0 && d) {
      q = KJE.replace(
        "' >",
        "' width=" + KJE.number(Math.floor(100 / g), 0) + "% >",
        q
      );
    }
    this.sRepeating += c + KJE.Repeating.bDataHeader(l, q, o) + b;
  };
  KJE.Repeating.bCellRemoveHeader = function (b, a, d, c) {
    s = b + a + d;
    if (c && (a.trim().toLowerCase() == "&nbsp;" || a.trim() == "")) {
      s = s
        .replace("<th", "<td")
        .replace("</th>", "</td>")
        .replace("scope='col'", "");
    }
    return s;
  };
  KJE.Repeating.bDataHeader = function (c, a, b) {
    if (!c && b.trim().toLowerCase() != "&nbsp;" && b.trim() != "") {
      a = a.replace("<td", "<th scope='row' ").replace("</td>", "</th>");
    }
    return a;
  };
  KJE.Repeating.prototype.addHeader = function () {
    var a = KJE;
    if (this.bScheduleHeader == KJE.ScheduleGroupingNotStarted) {
      this.bScheduleHeader = KJE.ScheduleGroupingStarted;
      this.sRepeating += KJE._sScheduleHeader;
    }
    this.add(
      a._sHeading,
      a._sHeadingFooter,
      a._sTopRow,
      a._sRowFooter,
      "",
      arguments,
      true,
      true
    );
  };
  KJE.Repeating.prototype.addFooter = function () {
    var a = KJE;
    var c = false;
    var d = arguments;
    if (typeof arguments[0] === "boolean") {
      d = new Array();
      c = arguments[0];
      for (var b = 1; b < arguments.length; b++) {
        d[b - 1] = arguments[b];
      }
    }
    if (!c) {
      if (this.bScheduleHeader == KJE.ScheduleGroupingStarted) {
        this.bScheduleHeader = KJE.ScheduleGroupingEnded;
        this.sRepeating += KJE._sScheduleHeaderEnd;
      }
      if (this.bScheduleFooter == KJE.ScheduleGroupingNotStarted) {
        this.bScheduleFooter = KJE.ScheduleGroupingStarted;
        this.sRepeating += KJE._sScheduleFooter;
      }
    }
    this.add(
      a._sCellStrong,
      a._sCellFooter,
      a._sFooterRow,
      a._sRowFooter,
      a._sCellBorderClass,
      d,
      true,
      true
    );
  };
  KJE.Repeating.prototype.addRepeat = function () {
    var a = KJE;
    if (this.bScheduleHeader == KJE.ScheduleGroupingStarted) {
      this.bScheduleHeader = KJE.ScheduleGroupingEnded;
      this.sRepeating += KJE._sScheduleHeaderEnd;
    }
    if (this.bScheduleFooter == KJE.ScheduleGroupingStarted) {
      this.bScheduleFooter = KJE.ScheduleGroupingEnded;
      this.sRepeating += KJE._sScheduleFooterEnd;
    }
    if (this.bScheduleBody == KJE.ScheduleGroupingNotStarted) {
      this.bScheduleBody = KJE.ScheduleGroupingEnded;
      this.sRepeating += KJE._sScheduleBody;
    }
    this.add(
      a._sCell,
      a._sCellFooter,
      this.nRepeatingCount % 2 == 0 ? a._sOddRow : a._sEvenRow,
      a._sRowFooter,
      a._sCellBorderClass,
      arguments,
      false,
      false
    );
    this.nRepeatingCount++;
  };
  KJE.ReportMessage = function (a) {
    this.sDisplayMessage = a;
  };
  KJE.Default.LoanRateDecimals = 3;
  KJE.Default.ReturnRateDecimals = 2;
  KJE.Default.TaxRateDecimals = 2;
  KJE.Default.InflationRateDecimals = 1;
  KJE.Default.PercentDecimals = 2;
  KJE.Default.DollarDecimals = 2;
  KJE.Default.NumberDecimals = 0;
  KJE.Default.InputDecimals = 0;
  KJE.ReportMessage.prototype.get = function () {
    return this.sDisplayMessage;
  };
  KJE.ReportMessage.prototype.show = function (b, c, a) {
    return (this.sDisplayMessage = KJE.showCode(b, c, a, this.sDisplayMessage));
  };
  KJE.ReportMessage.prototype.indexOf = function (a) {
    return this.sDisplayMessage.indexOf(a);
  };
  KJE.ReportMessage.prototype.prepend = function (a) {
    return (this.sDisplayMessage = a + this.sDisplayMessage);
  };
  KJE.ReportMessage.prototype.append = function (a) {
    return (this.sDisplayMessage = this.sDisplayMessage + a);
  };
  KJE.ReportMessage.prototype.replace = function (b, a) {
    return (this.sDisplayMessage = KJE.replace(b, a, this.sDisplayMessage));
  };
  KJE.ReportMessage.prototype.dollars = function (c, b, a) {
    return this.replace(c, KJE.dollars(b, a ? a : KJE.Default.DollarDecimals));
  };
  KJE.ReportMessage.prototype.percent = function (c, b, a) {
    return this.replace(c, KJE.percent(b, a ? a : KJE.Default.PercentDecimals));
  };
  KJE.ReportMessage.prototype.loanRate = function (b, a) {
    return this.percent(b, a, KJE.Default.LoanRateDecimals);
  };
  KJE.ReportMessage.prototype.returnRate = function (b, a) {
    return this.percent(b, a, KJE.Default.ReturnRateDecimals);
  };
  KJE.ReportMessage.prototype.taxRate = function (b, a) {
    return this.percent(b, a, KJE.Default.TaxRateDecimals);
  };
  KJE.ReportMessage.prototype.inflationRate = function (b, a) {
    return this.percent(b, a, KJE.Default.InflationRateDecimals);
  };
  KJE.ReportMessage.prototype.number = function (a, c, b) {
    return this.replace(a, KJE.number(c, b ? b : KJE.Default.NumberDecimals));
  };
  KJE.ReportMessage.prototype.input = function (b, c, a) {
    return this.replace(b, KJE.input(c, a ? a : KJE.Default.InputDecimals));
  };
  KJE.ReportMessage.prototype.year = function (a, b) {
    return this.input(a, b, 0);
  };
  KJE.ReportMessage.prototype.age = function (a, b) {
    return this.input(a, b, 0);
  };
  KJE.ReportMessage.prototype.yesno = function (b, a, c) {
    return this.replace(b, KJE.yesno(a, c ? c : false));
  };
  KJE.ReportMessage.prototype.date = function (a, b) {
    return this.replace(a, b == null || b == "" ? "" : KJE.dateFormat(b));
  };
  KJE.collapseSection = function (a, c) {
    var b = a.scrollHeight;
    a.style.transition = "";
    requestAnimationFrame(function () {
      a.style.height = b + "px";
      a.style.display = KJE.DropeeDisplay;
      requestAnimationFrame(function () {
        a.style.transition = KJE.DropeeTransition;
        requestAnimationFrame(function () {
          a.style.paddingTop = 0 + "px";
          a.style.height = 0 + "px";
        });
      });
    });
    a.addEventListener("transitionend", function (d) {
      a.removeEventListener("transitionend", arguments.callee);
      a.style.visibility = "hidden";
      a.style.display = "none";
      (c ? c : a).setAttribute(KJE.sExpand, "false");
      a.style.overflow = "hidden";
      a.style.height = 0 + "px";
      KJE.resizeGraphs(true);
      KJE.inCommandTask(false);
    });
  };
  KJE.expandSection = function (a, b) {
    a.style.overflow = "hidden";
    a.style.height = 0 + "px";
    a.style.display = KJE.DropeeDisplay;
    a.style.paddingTop = KJE._idDroppeePadding + "px";
    requestAnimationFrame(function () {
      var c = a.scrollHeight;
      requestAnimationFrame(function () {
        a.style.height = c + "px";
      });
    });
    a.addEventListener("transitionend", function (c) {
      a.removeEventListener("transitionend", arguments.callee);
      a.style.height = "auto";
      (b ? b : a).setAttribute(KJE.sExpand, "true");
      a.style.overflow = "visible";
      KJE.resizeGraphs(true);
      KJE.inCommandTask(false);
    });
  };
  KJE.getScreenCoord = function (g, a, b) {
    var f = 0;
    var e = 0;
    do {
      f += b.offsetLeft;
      e += b.offsetTop;
    } while ((b = b.offsetParent));
    var d = f + g;
    var c = e + a;
    return { x: d, y: c };
  };
  KJE.getMouseCoord = function (a, j, c) {
    var n = 0;
    var m = 0;
    do {
      n += j.offsetLeft;
      m += j.offsetTop;
    } while ((j = j.offsetParent));
    var h = 0;
    var e = 0;
    var g = a.pageX;
    if (g == null) {
      var b = document.documentElement;
      var l = b && b.scrollLeft != null ? b : document.body;
      h = a.clientX + l.scrollLeft;
      e = a.clientY + l.scrollTop;
    } else {
      if (c) {
        var k = a.touches[0];
        h = k.pageX;
        e = k.pageY;
      } else {
        h = g;
        e = a.pageY;
      }
    }
    var i = h - n;
    var f = e - m;
    return { x: i, y: f };
  };
  KJE.sIncomplete = "?";
  KJE.DropperColors = false;
  KJE.DropperHide = false;
  KJE.iDropperCount = 0;
  KJE.sToggleTitle =
    "<table **EXPANDED** class='KJEToggleTable' " +
    KJE.MSG_ADA_TABLE +
    "><tr><td class='**TITLE_CLASS** KJEToggleTitle99Cell'><h2 class='**TITLE_CLASS**'>**TITLE_TEXT**</h2><span class='KJEAccessibleInLine' aria-live='polite'><br>**IMG_TEXT**</span></td><td class='KJEToggleIcon **IMG**'>**ICON**</td></tr></table>";
  KJE.sToggleTitleH2Only =
    "<div class='KJEToggleTitle100Cell'><h2 class='**TITLE_CLASS**'>**TITLE_TEXT**</h2></div>";
  KJE.sToggleTitle2 =
    "<table **EXPANDED** class='KJEToggleTable' " +
    KJE.MSG_ADA_TABLE +
    "><tr><td class='**TITLE_CLASS** KJEToggleTitle49Cell'><h2 class='**TITLE_CLASS**'>**TITLE_TEXT**</h2><span class='KJEAccessibleInLine' aria-live='polite'><br>**IMG_TEXT**</span></td><td class='**TITLE_CLASS** KJEToggleTitle99Cell'>**TITLE_TEXT2**</td><td class='KJEToggleIcon **IMG**'>**ICON**</td></tr></table>";
  KJE.MSG_DEFINE_PREFIX = "Define: ";
  KJE.MSG_DEFINE_HELPICON = "?";
  KJE.MSG_DEFINE_HELPICON_CLOSE = "X";
  KJE.MSG_DEFN_CLOSE_LABEL = "Close definition";
  KJE.MSG_SLIDER = "slider";
  KJE.ErrorsDisplayAfterInputField = false;
  KJE.POPUP_REQUIRED_MSG = true;
  KJE.HELP_ON_ICON_ONLY = false;
  KJE.sToggleAltTextClose = "";
  KJE.sToggleAltTextOpen = "";
  KJE.sToggleTitleClass = "KJEToggleTitle";
  KJE.sInputDescTextClass = "KJESubTitle";
  KJE.sInputDescAlignDefault = "KJERight";
  KJE.sToggleIcon = "KJEInputIcon";
  KJE.sToggleOpen = "<div class='KJEToggleOpen' aria-hidden='true'></div>";
  KJE.sToggleClose = "<div class='KJEToggleClose' aria-hidden='true'></div>";
  KJE.sExpand = "aria-expanded";
  KJE.sExpanded = "";
  KJE.sCollapse = "";
  KJE.DefinitionIconPosition = 1;
  KJE.DefinitionIconPositionLeft = 0;
  KJE.DefinitionIconPositionRight = 1;
  KJE.DefinitionIconPositionLeftOut = 2;
  KJE.DefinitionIconPositionRightOut = 3;
  KJE.DefinitionIconPositionLeftNonDefn = 4;
  KJE.DefinitionIconPosition5 = 5;
  KJE.DefinitionIconPositionAsIs = 6;
  KJE.InputFieldPosition = "absolute";
  KJE.InputFieldDisplay = "inline-block";
  KJE.DropeeTransition = "height 0.5s";
  KJE.DropeeDisplay = "block";
  KJE.DropeeWidth = "100%";
  KJE.bShowSliders = true;
  KJE.FMT_NUMBER = 0;
  KJE.FMT_DOLLARS = 1;
  KJE.FMT_PERCENT = 2;
  KJE.FMT_INPUT = 3;
  KJE.FMT_YESNO = 4;
  KJE.FMT_STRING = 5;
  KJE.FMT_SOCIALSECURITY = 6;
  KJE.sCP = "$";
  KJE.sCS = "";
  KJE.sPP = "";
  KJE.sPS = "%";
  KJE.sNP = "";
  KJE.sNS = "";
  KJE.sPC = ",";
  KJE.sPD = ".";
  KJE.sCC = ",";
  KJE.sCD = ".";
  KJE.bEuropeDecimals = false;
  KJE.ACCOUNTING_NEGATIVE = false;
  KJE.format = new Array();
  KJE.iDPItemHeight = 28;
  KJE.iDPDropHeight = 32;
  KJE.iDPInputHeight = 22;
  KJE.iDPInputTop = 2;
  KJE.iDPInputPad = 5;
  KJE.iDPSliderPad = 0;
  KJE.iDPDropBoxPad = 5;
  KJE.iDPDropBoxModernPad = 20;
  KJE.iDPDroppeeForceSize = false;
  KJE.DataPointX = 0;
  KJE.DataPointY = 0;
  KJE.bNoLabel = false;
  KJE.bPlusMinus = false;
  KJE.TwoLineEntry = false;
  KJE.RadioesTwoLineEntry = false;
  KJE.SetLabelLength = true;
  KJE.iDPRowHeight = 32;
  KJE.iRadioPad = 5;
  KJE.iRadioLabelPad = 40;
  KJE.iInputContainerPad = 10;
  KJE.setPriorYear = function (e, c) {
    var b = document.getElementById("KJEPriorYear");
    if (b) {
      b.innerHTML = e + "";
    }
    var a = document.getElementsByClassName("KJEPriorYear");
    var d;
    for (d = 0; d < a.length; d++) {
      a[d].innerHTML = c;
    }
  };
  KJE.subText = function (a, c, b) {
    c = KJE.sInputDescTextClass + " " + (c ? c : KJE.sInputDescAlignDefault);
    b = b ? b : "div";
    return "<" + b + " class='" + c + "'>" + a + "</" + b + ">";
  };
  KJE.nbr = function (p, e, b, m, c, q, o) {
    var t = KJE;
    if (!p) {
      p = 0;
    }
    q = q || false;
    c = c || false;
    b = b || "";
    m = m || "";
    e = e || 0;
    if (e > 10) {
      e = 10;
    }
    var f = t.round(p, e);
    var j = f < 0;
    if (j) {
      f *= -1;
    }
    var h = (f + "").split(".");
    var g = "";
    if (e > 0) {
      if (!h[1]) {
        if (!c) {
          g = "0000000000".substr(0, e);
        }
      } else {
        if (h[1].length == e) {
          g = h[1];
        } else {
          g = h[1] + (c ? "" : "0000000000".substr(0, e - h[1].length));
        }
      }
      if (g.length > 0) {
        g = t.sPD + g;
      }
    }
    var a = "";
    if (!q && f > 999) {
      var k = h[0].length;
      if (k % 3 > 0) {
        a = h[0].substr(0, k % 3) + t.sPC;
      }
      for (var d = k % 3; d < k; d += 3) {
        a += h[0].substr(d, 3) + (d + 3 < k ? t.sPC : "");
      }
    } else {
      a = h[0];
    }
    if (a == "") {
      a = "0";
    }
    if (o && o > a.length) {
      a = "0000000000" + a;
      a = a.substring(a.length - o);
    }
    return (
      (j ? (t.ACCOUNTING_NEGATIVE ? "(" : "-") : "") +
      b +
      a +
      g +
      m +
      (t.ACCOUNTING_NEGATIVE && j ? ")" : "")
    );
  };
  KJE.format[KJE.FMT_NUMBER] = function (a, b) {
    return KJE.nbr(a, b, "", "", true, false);
  };
  KJE.number = KJE.format[KJE.FMT_NUMBER];
  KJE.format[KJE.FMT_DOLLARS] = function (a, b) {
    if (b === 0) {
    } else {
      b = b ? b : KJE.Default.DollarDecimals;
    }
    return KJE.nbr(a, b, KJE.sCP, KJE.sCS, false, false);
  };
  KJE.dollars = KJE.format[KJE.FMT_DOLLARS];
  KJE.format[KJE.FMT_PERCENT] = function (a, b) {
    return KJE.nbr(a * 100, b, KJE.sPP, KJE.sPS, true, false);
  };
  KJE.percent = KJE.format[KJE.FMT_PERCENT];
  KJE.format[KJE.FMT_SOCIALSECURITY] = function (a) {
    var b = KJE.nbr(a, 0, "", "", true, true, 9);
    return b.substr(0, 3) + "-" + b.substr(3, 2) + "-" + b.substr(5, 4);
  };
  KJE.socialsecurity = KJE.format[KJE.FMT_SOCIALSECURITY];
  KJE.format[KJE.FMT_INPUT] = function (a, b, c) {
    return KJE.nbr(a, b, "", "", true, true, c);
  };
  KJE.input = KJE.format[KJE.FMT_INPUT];
  KJE.format[KJE.FMT_YESNO] = function (b, a) {
    return b ? (a ? KJE.MSG_YES : KJE.YES) : a ? KJE.MSG_NO : KJE.NO;
  };
  KJE.yesno = KJE.format[KJE.FMT_YESNO];
  KJE.round = function (b, a) {
    return a ? Math.round(b * Math.pow(10, a)) / Math.pow(10, a) : Math.round(b);
  };
  KJE.roundDollars = function (a) {
    return KJE.round(a, KJE.Default.DollarDecimals);
  };
  KJE.appendSpan = function (e, b, a, d) {
    var c = document.createElement("span");
    c.setAttribute("id", b);
    c.className = a;
    c.innerHTML = d;
    e.appendChild(c);
    return c;
  };
  KJE.setLabelWrap = function (e, h, d, g, c, f, b) {
    if (!g) {
      if (b || e == KJE.TypeLabel || e == KJE.TypeRadios) {
        h._oLabel = document.createElement("div");
      } else {
        h._oLabel = document.createElement("label");
        var a = document.createAttribute("for");
        a.value = d;
        h._oLabel.setAttributeNode(a);
      }
      if (f) {
        h._oLabel.className = f;
      }
      h.appendChild(h._oLabel);
    }
    if (c) {
      KJE.setLabelText(h, c);
    }
  };
  KJE.setLabelText = function (b, a) {
    if (b._oLabel) {
      b._oLabel.innerHTML = a;
    } else {
      b.innerHTML = a;
    }
  };
  KJE.SliderKnobExtraClass = false;
  KJE.SliderKnobSize = 12;
  KJE.SliderLeftMargin = 12;
  KJE.SliderKnobVertAdj = -3;
  KJE.SliderLabelVertAdj = 0;
  KJE.LabelLength = 210;
  KJE.InputLength = 110;
  KJE.RightPad = 10;
  KJE.LabelLeftMargin = 0;
  KJE.InputTotalLength =
    KJE.LabelLeftMargin + KJE.LabelLength + KJE.InputLength + KJE.RightPad;
  KJE.SliderMinLength = 150;
  KJE.TypeNone = 0;
  KJE.TypeNumber = 1;
  KJE.TypeString = 2;
  KJE.TypeDate = 3;
  KJE.TypeRadio = 4;
  KJE.TypeRadios = 8;
  KJE.TypeCheckbox = 5;
  KJE.TypeDropBox = 6;
  KJE.TypeLabel = 7;
  KJE.SliderScale = new Object();
  KJE.s_scale = new Array(10);
  KJE.s_scale[0] = [0, 1000, 5000, 10000, 10, 50, 100];
  KJE.s_scale[1] = [0, 1000, 5000, 20000, 10, 50, 200];
  KJE.s_scale[2] = [0, 1000, 10000, 100000, 50, 100, 1000];
  KJE.s_scale[3] = [0, 10000, 100000, 500000, 250, 1000, 5000];
  KJE.s_scale[4] = [0, 10000, 100000, 1000000, 250, 1000, 10000];
  KJE.s_scale[5] = [0, 100000, 1000000, 10000000, 500, 10000, 100000];
  KJE.s_scale[6] = [0, 500, 2500, 5000, 10, 50, 100];
  KJE.s_scale[7] = [0, 100, 500, 1000, 5, 25, 50];
  KJE.s_scale[8] = [12, 48, 84, 120, 6, 6, 6];
  KJE.s_scale[9] = [0, 100, 200, 300, 10, 10, 10];
  KJE.s_scale[10] = [0, 1000, 10000, 50000, 50, 100, 500];
  KJE.s_label = new Array(10);
  KJE.k = "k";
  KJE.m = "m";
  KJE.s_label[0] = ["$0", "$1k", "$5k", "$10k"];
  KJE.s_label[1] = ["$0", "$1k", "$5k", "$20k"];
  KJE.s_label[2] = ["$0", "$1k", "$10k", "$100k"];
  KJE.s_label[3] = ["$0", "$10k", "$100k", "$500k"];
  KJE.s_label[4] = ["$0", "$10k", "$100k", "$1m"];
  KJE.s_label[5] = ["$0", "$100k", "$1m", "$10m"];
  KJE.s_label[6] = ["$0", "$500", "$2.5k", "$5k"];
  KJE.s_label[7] = ["$0", "$100", "$500", "$1k"];
  KJE.s_label[8] = ["12", "48", "84", "120"];
  KJE.s_label[9] = ["$0", "$100", "$200", "$300"];
  KJE.s_label[10] = ["$0", "$1k", "$10k", "$50k"];
  KJE.MakeScale = function (a, e, c, f, h, g, d) {
    var b = this;
    b._Min = a;
    b._Mid1 = e;
    b._Mid2 = c;
    b._Max = f;
    b._stepMin = h;
    b._stepMid = g;
    b._stepMax = d;
    b._range = 100;
  };
  KJE.useScale = function (b) {
    var a = KJE;
    var c = a.s_scale[b];
    return new a.MakeScale(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
  };
  KJE.s_Translate = function (a, b, h, g, f, c, j, i) {
    var e = 0;
    if (a > 66.66) {
      e = Math.round((g + ((a - 66.66) / 33.33) * (f - g)) / i) * i;
    } else {
      if (a > 33.33) {
        e = Math.round((h + ((a - 33.33) / 33.33) * (g - h)) / j) * j;
      } else {
        if (a > 0) {
          e = Math.round(((a / 33.33) * (h - b)) / c) * c + b;
        } else {
          e = b;
        }
      }
    }
    return e > f ? f : e;
  };
  KJE.s_Untranslate = function (b, a, e, c, f) {
    var g = 0;
    if (b > f) {
      return 100;
    } else {
      if (b > c) {
        g = 66.66 + ((b - c) * 33.33) / (f - c);
      } else {
        if (b > e) {
          g = 33.33 + ((b - e) * 33.33) / (c - e);
        } else {
          g = ((b - a) * 33.33) / (e - a);
        }
      }
    }
    return g < 0 ? 0 : g;
  };
  KJE.Slider = function (g, i, f, c, e, k, a, j, b, d, h) {
    return new KJE.InputItem(
      d,
      KJE.TypeNumber,
      g,
      i,
      true,
      "KJE-" + g,
      f,
      c,
      0,
      e,
      k,
      a,
      h ? false : j,
      h ? null : b
    );
  };
  KJE.MortgageAmtSlider = function (f, e, b, d, c) {
    var a = KJE;
    return a.Slider(
      f,
      e,
      a.Default.MortgageMin,
      a.Default.MortgageMax,
      d ? d : 0,
      a.FMT_DOLLARS,
      0,
      [
        a.dollars(a.Default.MortgageMin / 1000, 0) + a.k,
        a.dollars(200, 0) + a.k,
        a.dollars(500, 0) + a.k,
        a.dollars(1, 0) + a.m,
      ],
      new a.MakeScale(0, 200000, 500000, 1000000, 5000, 10000, 20000),
      b,
      c
    );
  };
  KJE.LoanAmtSlider = function (e, d, b, c) {
    var a = KJE;
    return a.Slider(
      e,
      d,
      a.Default.MortgageMin,
      a.Default.MortgageMax,
      0,
      a.FMT_DOLLARS,
      0,
      [
        a.dollars(a.Default.MortgageMin / 1000, 0) + a.k,
        a.dollars(5, 0) + a.k,
        a.dollars(25, 0) + a.k,
        a.dollars(100, 0) + a.k,
      ],
      new a.MakeScale(0, 5000, 25000, 100000, 100, 500, 1000),
      b,
      c
    );
  };
  KJE.MortgageTermSlider = function (f, d, e, b, c) {
    var a = KJE;
    return a.Slider(
      f,
      d,
      a.Default.MortgageTermMin,
      a.Default.MortgageTermMax,
      0,
      a.FMT_NUMBER,
      e ? e : a.Default.MortgageTermIncrement,
      [
        a.Default.MortgageTermMin,
        a.number(
          Math.floor(
            (a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.334 +
              a.Default.MortgageTermMin
          )
        ),
        a.number(
          Math.floor(
            (a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.667 +
              a.Default.MortgageTermMin
          )
        ),
        a.number(a.Default.MortgageTermMax),
      ],
      null,
      b,
      c
    );
  };
  KJE.MortgageTermDropBoxSlider = function (f, e, c, d) {
    var a = KJE;
    var b = a.getMortgageTermList().v;
    if (d) {
      a.DropBox(f, e, b);
      return;
    }
    return a.DropBoxSlider(f, e, b);
  };
  KJE.NumberSlider = function (j, l, b, h, f, a, g, c, i, k, d) {
    var e = i ? true : false;
    c = c ? c : b;
    i = i ? i : h;
    d = d ? d : 0;
    a = a ? a : 1;
    var n = KJE;
    var m = [
      n.number(c),
      n.number(Math.floor((i - c) * 0.334 + c)),
      n.number(Math.floor((i - c) * 0.667 + c)),
      n.number(i),
    ];
    if (a > 0) {
      m = [
        n.number(c, d),
        n.number(KJE.round((i - c) * 0.334 + c, d), d),
        n.number(n.round((i - c) * 0.667 + c, d), d),
        n.number(i, d),
      ];
    }
    return n.Slider(
      j,
      l,
      b,
      h,
      f ? f : 0,
      n.FMT_NUMBER,
      a,
      m,
      e
        ? new n.MakeScale(
            c,
            Math.floor((i - c) * 0.334 + c),
            Math.floor((i - c) * 0.667 + c),
            i,
            a,
            a,
            a
          )
        : null,
      g,
      k
    );
  };
  KJE.InputSlider = function (f, j, b, e, c, h, a, d, i) {
    var k = KJE;
    var g = k.Slider(
      f,
      j,
      b,
      e,
      c ? c : 0,
      k.FMT_INPUT,
      a ? a : 1,
      [
        b,
        k.input(Math.floor((e - b) * 0.334 + b)),
        k.input(Math.floor((e - b) * 0.667 + b)),
        k.input(e),
      ],
      null,
      d,
      i
    );
    g._iPadding = h;
    g.setValue(g.getValue(), true);
    return g;
  };
  KJE.DollarSlider = function (h, l, j, n, c, b, e, d, k) {
    var a = KJE.parameters.get("MINVALUE_" + h, j);
    var f = KJE.parameters.get("MAXVALUE_" + h, n);
    e = e >= 0 && e <= 9 ? e : -1;
    if (a != j || f != n) {
      e = -1;
    }
    var m = KJE;
    if (e == -1) {
      for (var g = 0; g <= 7; g++) {
        if (m.s_scale[g][3] == f) {
          e = g;
          break;
        }
      }
      if (f == 50000) {
        e = 10;
      }
    }
    if (e != -1) {
      return m.Slider(
        h,
        l,
        a,
        f,
        c ? c : 0,
        m.FMT_DOLLARS,
        1,
        m.s_label[e],
        m.useScale(e),
        d,
        k
      );
    }
    return m.Slider(
      h,
      l,
      a,
      f,
      !c && c != 0 ? KJE.Default.PercentDecimals : c,
      m.FMT_DOLLARS,
      b ? b : 10,
      [
        m.dollars(a),
        m.dollars(Math.floor((f - a) * 0.334 + a)),
        m.dollars(Math.floor((f - a) * 0.667 + a)),
        m.dollars(f),
      ],
      null,
      d,
      k
    );
  };
  KJE.ZipcodeInput = function (e, d, b) {
    var a = KJE;
    var c = new KJE.InputItem(
      b,
      KJE.TypeNumber,
      e,
      d,
      true,
      "KJE-" + e,
      0,
      99999,
      0,
      0,
      a.FMT_INPUT,
      0,
      false
    );
    c._iPadding = 5;
    c.setValue(c.getValue(), true);
    return c;
  };
  KJE.SocialSecurityInput = function (e, d, b) {
    var a = KJE;
    var c = new KJE.InputItem(
      b,
      KJE.TypeNumber,
      e,
      d,
      true,
      "KJE-" + e,
      -999999999,
      999999999,
      0,
      0,
      a.FMT_SOCIALSECURITY,
      0,
      false
    );
    c._iPadding = 9;
    c.bAbsoluteValue = true;
    c.setValue(c.getValue(), true);
    return c;
  };
  KJE.DollarInput = function (g, f, d, a, e, c) {
    var b = KJE;
    return new KJE.InputItem(
      c,
      KJE.TypeNumber,
      g,
      f,
      true,
      "KJE-" + g,
      d,
      a,
      0,
      !e && e != 0 ? 2 : e,
      b.FMT_DOLLARS,
      0,
      false
    );
  };
  KJE.PercentInput = function (g, f, d, a, e, c) {
    var b = KJE;
    return new KJE.InputItem(
      c,
      KJE.TypeNumber,
      g,
      f,
      true,
      "KJE-" + g,
      d,
      a,
      0,
      !e && e != 0 ? 2 : e,
      b.FMT_PERCENT,
      0,
      false
    );
  };
  KJE.PercentSlider = function (i, l, b, h, f, a, g, k) {
    var n = KJE;
    var b = n.parameters.get("SLIDER_MIN_" + i, b);
    var h = n.parameters.get("SLIDER_MAX_" + i, h);
    var a = n.parameters.get("SLIDER_INC_" + i, a);
    var c = 100;
    var j = 0;
    if ((b - h) % 3 != 0 && h < 12) {
      c = 10;
      j = 1;
    }
    var e = n.percent(Math.floor(((h - b) * 0.334 + b) * c) / (100 * c), j);
    var d = n.percent(Math.floor(((h - b) * 0.667 + b) * c) / (100 * c), j);
    var m = [n.percent(b / 100), e, d, n.percent(h / 100)];
    return n.Slider(
      i,
      l,
      b,
      h,
      !f && f != 0 ? 2 : f,
      n.FMT_PERCENT,
      a ? a : 0.1,
      m,
      null,
      g,
      k
    );
  };
  KJE.LoanRateSlider = function (e, d, b, c) {
    var a = KJE;
    return a.RateSlider(
      e ? e : "INTEREST_RATE",
      d ? d : "Interest rate",
      a.Default.LoanRateMin,
      a.Default.LoanRateMax,
      a.Default.LoanSliderRateMax,
      null,
      b,
      c,
      KJE.Default.LoanRateDecimals
    );
  };
  KJE.MortgageRateSlider = function (e, d, b, c) {
    var a = KJE;
    return a.RateSlider(
      e,
      d,
      a.Default.MortgageRateMin,
      a.Default.MortgageRateMax,
      a.Default.MortgageSliderRateMax,
      null,
      b,
      c,
      KJE.Default.LoanRateDecimals
    );
  };
  KJE.InvestRateSlider = function (e, d, b, c) {
    var a = KJE;
    return a.RateSlider(
      e,
      d,
      a.Default.InvestRateMin,
      a.Default.InvestRateMax,
      a.Default.InvestSliderRateMax,
      null,
      b,
      c,
      KJE.Default.ReturnRateDecimals
    );
  };
  KJE.InflationRateSlider = function (e, d, b, c) {
    var a = KJE;
    return a.RateSlider(
      e,
      d,
      a.Default.InflationRateMin,
      a.Default.InflationRateMax,
      a.Default.InflationSliderRateMax,
      null,
      b,
      c,
      KJE.Default.InflationRateDecimals
    );
  };
  KJE.TaxRateSlider = function (e, d, b, c) {
    var a = KJE;
    return a.RateSlider(
      e,
      d,
      a.Default.TaxRateMin,
      a.Default.TaxRateMax,
      a.Default.TaxSliderRateMax,
      null,
      b,
      c,
      KJE.Default.TaxRateDecimals
    );
  };
  KJE.preKJE = function (a) {
    return a ? "KJE-" + a : null;
  };
  KJE.suffix = function (b, a) {
    return a ? b + a : null;
  };
  KJE.RateSlider = function (g, o, j, e, i, a, d, l, c) {
    a = a ? a : 0.5;
    j = j ? j : 0;
    e = e ? e : 25;
    c = c ? c : KJE.Default.PercentDecimals;
    i = i ? i : 12;
    var p = KJE;
    var k = p.percent;
    var h = i - j;
    var n = Math.floor(h * 0.337 + j);
    var m = Math.floor(h * 0.667 + j);
    var f = [k(j / 100), k(n / 100), k(m / 100), k(i / 100)];
    var b = new p.MakeScale(j, n, m, i, a, a, a);
    return p.Slider(g, o, j, e, c, p.FMT_PERCENT, 0, f, b, d, l);
  };
  KJE.Nbr = function (f, g, e, a, b, h, d, c) {
    var i = KJE;
    return new i.InputItem(
      c,
      i.TypeNumber,
      f,
      g,
      true,
      "KJE-" + f,
      e,
      a,
      0,
      b,
      h,
      0,
      false,
      false,
      i.suffix(f, "_TRAIL"),
      i.suffix(i.preKJE(f), "_TRAIL"),
      d,
      null,
      null,
      i.TypeLabel
    );
  };
  KJE.NbrDropBox = function (e, g, d, a, c, i, f, h, b) {
    var j = KJE;
    return new j.InputItem(
      b,
      j.TypeNumber,
      e,
      g,
      true,
      "KJE-" + e,
      d,
      a,
      0,
      c,
      i,
      0,
      false,
      false,
      f,
      j.preKJE(f),
      h ? h : g
    );
  };
  KJE.Checkbox = function (e, d, f, b, c) {
    var a = KJE;
    return new a.InputItem(
      c,
      a.TypeCheckbox,
      e,
      d,
      true,
      "KJE-" + e,
      0,
      0,
      f,
      0,
      0,
      0,
      false,
      false,
      null,
      null,
      b
    );
  };
  KJE.DropBoxString = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(
      c,
      a.TypeDropBox,
      f,
      d,
      true,
      "KJE-" + f,
      0,
      0,
      0,
      0,
      a.FMT_STRING,
      0,
      false,
      false,
      e,
      a.preKJE(e),
      b
    );
  };
  KJE.DropBox = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(
      c,
      a.TypeDropBox,
      f,
      d,
      true,
      "KJE-" + f,
      0,
      0,
      a.parameters.get(f, 0),
      0,
      0,
      0,
      false,
      false,
      e,
      a.preKJE(e),
      b
    );
  };
  KJE.DropBoxSlider = function (d, c, e, b) {
    var a = KJE;
    var f = [
      e[0],
      e[Math.floor(e.length * 0.333)],
      e[Math.floor(e.length * 0.666)],
      e[e.length - 1],
    ];
    return new a.InputItem(
      b,
      a.TypeDropBox,
      d,
      c,
      true,
      "KJE-" + d,
      0,
      e.length - 1,
      0,
      0,
      0,
      1,
      f,
      null
    );
  };
  KJE.Label = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(
      c,
      a.TypeLabel,
      f,
      d,
      true,
      "KJE-" + f,
      0,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      e,
      a.preKJE(e),
      b
    );
  };
  KJE.StringInput = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(
      c,
      a.TypeString,
      f,
      d,
      true,
      "KJE-" + f,
      0,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      e,
      a.preKJE(e),
      b
    );
  };
  KJE.Date = function (f, d, e, b, c) {
    var a = KJE;
    return new a.InputItem(
      c,
      a.TypeDate,
      f,
      d,
      true,
      "KJE-" + f,
      0,
      0,
      "TODAY",
      0,
      0,
      0,
      false,
      false,
      e,
      a.preKJE(e),
      b
    );
  };
  KJE.Radiobox = function (f, e, d, g, b, c) {
    var a = KJE;
    return new a.InputItem(
      c,
      a.TypeRadio,
      e,
      d,
      b ? false : true,
      "KJE-" + e,
      0,
      0,
      g,
      0,
      0,
      0,
      false,
      false,
      null,
      null,
      b,
      null,
      f
    );
  };
  KJE.Radioboxes = function (g, f, h, d, b, e, c) {
    var a = KJE;
    return new a.InputItem(
      e,
      a.TypeRadios,
      g,
      f,
      true,
      "KJE-" + g + "1",
      0,
      0,
      h,
      0,
      0,
      0,
      false,
      false,
      g,
      a.suffix(a.preKJE(g), "2"),
      d,
      b,
      null,
      c
    );
  };
  KJE.InputItem = function (
    ap,
    i,
    g,
    h,
    a,
    aq,
    aj,
    X,
    m,
    z,
    M,
    F,
    aB,
    l,
    y,
    G,
    al,
    I,
    ar,
    A
  ) {
    var E = this;
    var aw = KJE;
    var av = aw.setLabelWrap;
    var ao = aw.parameters;
    var af = KJE.TwoLineEntry;
    var ab = KJE.TwoLineEntry || KJE.RadioesTwoLineEntry;
    E._inputType = i;
    E._name = g;
    E._inputRequired =
      E._inputType != aw.TypeLabel &&
      E._inputType != aw.TypeRadios &&
      E._inputType != aw.TypeRadio &&
      E._inputType != aw.TypeCheckbox &&
      E.inputType != aw.TypeDropBox &&
      KJE.InputItem.AltNotRequired != true;
    E._inputTypeAdditional = aw.TypeNone;
    E._inputTypeAdditionalRequired = false;
    E._increment = Math.abs(F);
    E._decimals = z;
    E._iPadding = 0;
    E._format = M;
    E._minimum = aj;
    E._maximum = X;
    E._range = X - aj;
    E.bShow = true;
    E.bValidate = true;
    E.bIncompleteCheck = true;
    E.bNoLabel = KJE.bNoLabel;
    E.vDefault = ao.get(E._name, m);
    E.oAdditional = G;
    E.bUseStoredForDefault = ao.get("USFD_" + E._name, true);
    E.bAbsoluteValue = false;
    E.idRG = null;
    E.bValueBeenSet = false;
    var S = ao.get("MSG_" + g + "1", al);
    var V = ao.get("MSG_" + g + "2", I);
    var an =
      typeof document.createElement != "undefined" &&
      typeof document.documentElement != "undefined" &&
      typeof document.documentElement.offsetWidth == "number";
    if (!an) {
      return;
    }
    E._sError = "";
    E._bError = false;
    E._InComplete = false;
    E._mouseDown = false;
    aw.inputs.set(g, this);
    var au = (E._container = document.getElementById("KJE-C-" + E._name));
    if (!au) {
      E._inputType = aw.TypeNone;
      E.setValue(E.vDefault, true);
      return;
    }
    var P = au.parentElement.nodeName;
    au.className = "KJEInputContainer";
    var f = au.style;
    au.setAttribute("aria-live", "assertive");
    au.setAttribute("aria-atomic", "true");
    au.backgroundColor = f.backgroundColor;
    var w = au.offsetWidth;
    E.bSlider = aB != false && KJE.bShowSliders == true && KJE.bNativeSlider;
    if (l) {
      E._oScale = l;
    }
    var d = aw.iDPInputPad;
    var J = (E._inputField = document.getElementById(aq));
    var W = (E._iInputFieldDiv = document.getElementById(aq + "Div"));
    if (W == null && KJE.InputFieldPosition == "static") {
      W = document.createElement("div");
      W.className = "KJEInputFieldContainer";
      J.parentNode.insertBefore(W, J);
      W.appendChild(J);
    }
    var ag = J.style;
    J.name = ar ? ar : E._name;
    J.className = aw.InputClass;
    if (
      E._inputType != aw.TypeRadio &&
      E._inputType != aw.TypeRadios &&
      E._inputType != aw.TypeCheckbox
    ) {
      KJE.elementHeight(ag, aw.iDPInputHeight - KJE.iDPInputTop + "px");
    }
    if (E._inputType != aw.TypeRadios) {
      ag.top = (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
      ag.position = KJE.InputFieldPosition;
    }
    ag.display = KJE.InputFieldDisplay;
    E._sLabel = ao.get("MSG_" + E._name, h);
    var ad = (E._fieldset = document.getElementById("KJE-FS-" + E._name));
    if (ad) {
      ad.className = "KJEAccessibleFieldSet";
      var D = document.createElement("legend");
      D.className = "KJEAccessibleFieldSetLegend";
      D.innerText = E._sLabel;
      ad.insertBefore(D, ad.firstChild);
    }
    var C = 0;
    var ae = false;
    if (h != null && aw.LabelLength != 0) {
      ae = true;
      ap = ap ? " " + ap : "";
      var c =
        "KJE-D-" +
        (aw.InputItem.AltHelpName ? aw.InputItem.AltHelpName : E._name);
      var T = document.getElementById(c);
      E.className =
        (T && KJE.PopupDefinitions && !KJE.HELP_ON_ICON_ONLY
          ? "KJEHelp "
          : "KJELabel ") + ap;
      var az = E.getLabelForInput(i, aq, a, J, aw.ErrorsDisplayAfterInputField);
      E.spanInputRangeDesc = az._oRangeSpan;
      E.spanInputRangeDescInnerHtml = az._oRangeSpan
        ? az._oRangeSpan.innerHTML
        : null;
      E.spanInputRequiredDesc = az._oRequiredSpan;
      E.spanInputRangeID = az._oRangeSpanName;
      try {
        au.insertBefore(az, ad ? ad : W ? W : J);
      } catch (L) {}
      if (T && KJE.PopupDefinitions) {
        E.oDivDefn = KJE.AddDefinitionEvents(
          az,
          T,
          E._sLabel,
          E._name,
          KJE.DefinitionIconPosition,
          J,
          null,
          null,
          KJE.HELP_ON_ICON_ONLY
        );
      }
      if (aw.TwoLineEntry) {
        C = 0;
      } else {
        C = az.offsetWidth;
        if (!C) {
          C = aw.LabelLength;
        }
      }
      if (az._oLabel) {
        az._oLabel.style.marginTop =
          aw.iDPInputHeight / 4 + aw.iDPInputTop + "px";
      }
      if (aw.TwoLineEntry) {
        KJE.elementHeight(f, aw.iDPRowHeight * 2 + "px");
      } else {
        if (az._oLabel) {
          if (
            az._oLabel.offsetHeight + 6 > aw.iDPRowHeight &&
            KJE.bElementStyling
          ) {
            az._oLabel.style.marginTop = "0px";
          }
          if (az._oLabel.offsetHeight + 6 > aw.iDPRowHeight) {
            au.style.height = az._oLabel.offsetHeight + 6 + "px";
          }
        }
      }
    }
    J.indent = (aw.deviceInputPad ? aw.deviceInputPad : d) + C;
    if (E.bNoLabel) {
      J.indent = 0;
      C = 0;
    }
    if (E._inputType === aw.TypeCheckbox || E._inputType === aw.TypeRadio) {
      E._sTrailingText = S;
      if (az._oLabel) {
        ag.left = C + aw.iRadioPad + "px";
      } else {
        ag.left = aw.iRadioLabelPad + "px";
      }
      if (S) {
        var t = document.createElement("div");
        var am = t.style;
        av(ae ? aw.TypeLabel : E._inputType, t, aq, false, E._sTrailingText);
        t.className = "KJETrailingLabel";
        am.position = KJE.InputFieldPosition;
        am.display = KJE.InputFieldDisplay;
        C = C + d * 1.5 + (J.offsetWidth ? J.offsetWidth : 15);
        if (az._oLabel) {
          am.left = C + "px";
        } else {
          am.left = aw.iRadioLabelPad * 2 + "px";
        }
        au.appendChild(t);
        am.top =
          (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
          aw.iDPInputHeight / 4 +
          aw.iDPInputTop +
          "px";
        var R = t.offsetHeight;
        if (R + 6 > aw.iDPRowHeight) {
          am.top =
            (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
            (aw.iDPInputHeight / 4 + aw.iDPInputTop) +
            "px";
        }
        C += t.offsetWidth;
        E._label2 = t;
      }
    } else {
      if (E._inputType === aw.TypeRadios) {
        var w = aw.CalculatorWidth - aw.iDPInputPad * 2;
        var o = document.createElement("div");
        var ai = o.style;
        ai.left = C + aw.iRadioPad + "px";
        ai.position = KJE.InputFieldPosition;
        ai.display = KJE.InputFieldDisplay;
        o.className = "KJERadioFieldContainer";
        KJE.elementHeight(f, aw.iDPRowHeight * 2 + "px");
        E._sTrailingText = S;
        E._sTrailingText2 = V;
        var t = document.createElement("div");
        var am = t.style;
        av(aw.TypeRadio, t, aq, false, E._sTrailingText);
        t.className = "KJERadioTrailingLabel";
        J.title = (h ? h + aw.Colon + " " : "") + E._sTrailingText;
        var j = (E._Additional = document.getElementById(G));
        var ay = j.style;
        E._inputTypeAdditional = aw.TypeRadios;
        j.name = ar ? ar : E._name;
        j.className = KJE.InputClass;
        var q = (E._label3 = document.createElement("div"));
        var ax = q.style;
        av(aw.TypeRadio, q, G, false, E._sTrailingText2);
        q.className = "KJERadioTrailingLabel";
        j.title = (h ? h + aw.Colon + " " : "") + E._sTrailingText2;
        var aa = document.createElement("div");
        aa.className = "KJERadioHolder";
        var Z = document.createElement("div");
        Z.className = "KJERadioHolder";
        o.className = "KJERadioes";
        J.parentNode.insertBefore(o, J);
        aa.appendChild(J);
        aa.appendChild(t);
        Z.appendChild(j);
        Z.appendChild(q);
        o.appendChild(aa);
        o.appendChild(Z);
        E._oDivRadios = o;
        j.addEventListener("change", aw.dataChanged, false);
      } else {
        if (E._inputType === aw.TypeDropBox) {
          J.className = "KJEDropBox";
          var at = (aw.deviceInputPad ? aw.deviceInputPad : d) + C;
          var N = aw.iDPDropHeight - aw.iDPInputTop;
          if (W) {
            var B = W.style;
            W.className = "KJEDropBoxDivModern";
            J.className = "KJEDropBox KJEDropBoxModern";
            B.top =
              (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
            B.position = KJE.InputFieldPosition;
            B.display = KJE.InputFieldDisplay;
            B.left = at + "px";
            ag.top = "0px";
            KJE.elementHeight(ag, N + "px");
            KJE.elementHeight(B, N + "px");
          } else {
            ag.left = at + "px";
            ag.top =
              (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
            KJE.elementHeight(ag, aw.iDPDropHeight - KJE.iDPInputTop * 2 + "px");
          }
          KJE.InputItem.bDropBoxRequired(g, J);
        } else {
          if (E._inputType === aw.TypeLabel) {
            J.className = "KJEOutputLabel " + ap;
            ag.top =
              (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
              aw.iDPInputHeight / 4 +
              aw.iDPInputTop +
              "px";
            ag.left = C + d + "px";
            J.indent += aw.deviceInputPad;
            KJE.elementHeight(ag, aw.iDPItemHeight - 2 + "px");
          } else {
            if (E._inputType === aw.TypeString || E._inputType === aw.TypeDate) {
              ag.left = (aw.deviceInputPad ? aw.deviceInputPad : d) + C + "px";
            } else {
              ag.width = aw.InputLength + "px";
              if (aw.deviceUseNumberType) {
                var p = document.createElement("div");
                var aC = p.style;
                p.className = "KJELabelBold";
                aC.position = KJE.InputFieldPosition;
                aC.display = KJE.InputFieldDisplay;
                aC.width = aw.deviceInputPad + "px";
                aC.left = C + "px";
                aC.top =
                  (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
                  aw.iDPInputHeight / 4 +
                  aw.iDPInputTop +
                  "px";
                if (M == aw.FMT_DOLLARS) {
                  p.innerHTML = aw.sCP + aw.sCS;
                } else {
                  if (M == aw.FMT_PERCENT) {
                    p.innerHTML = aw.sPP + aw.sPS;
                  } else {
                    p.innerHTML = "";
                  }
                }
                KJE.elementHeight(aC, aw.iDPInputHeight + "px");
                au.appendChild(p);
                d = p.offsetWidth + 1;
              }
              if (
                aw.deviceUseNumberType &&
                E._maximum < 1000 &&
                !(KJE.bEuropeDecimals && E._decimals > 0)
              ) {
                J.type = "number";
                if (E._decimals > 0) {
                  J.setAttribute("step", "any");
                }
              }
              ag.left = C + d + "px";
            }
          }
        }
      }
    }
    if (G && aw.TypeRadios != E._inputType) {
      var j = (E._Additional = document.getElementById(G));
      if (E._Additional) {
        var ay = j.style;
        ay.position = KJE.InputFieldPosition;
        ay.display = KJE.InputFieldDisplay;
        ay.top = (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
        var w = aw.CalculatorWidth - aw.iDPInputPad * 2;
        j.setAttribute("aria-required", "true");
        E._inputTypeAdditional = aw.TypeDropBox;
        var K = (E._AdditionalDiv = document.getElementById(G + "Div"));
        j.name = y;
        j.className = "KJEDropBox";
        j.setAttribute("aria-label", S);
        var k = aw.iDPDropHeight - aw.iDPInputTop;
        var ac =
          C + (aw.offsetWidth ? aw.offsetWidth(J) : J.offsetWidth) + 5 + d * 2;
        var n = ac - d;
        var Y = w - ac;
        if (K) {
          var U = K.style;
          K.className = "KJEDropBoxDivModern";
          j.className = "KJEDropBox KJEDropBoxModern";
          U.position = KJE.InputFieldPosition;
          U.display = KJE.InputFieldDisplay;
          U.top =
            (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop - 1 + "px";
          U.height = k + "px";
          U.left = n + "px";
          U.width = Y + "px";
          ay.left = 0 + "px";
          ay.top =
            (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
        } else {
          ay.left = n + "px";
        }
        ay.width = Y + "px";
        ay.height = k + "px";
        j.indent = ac;
        if (Y < aw.SliderMinLength && au.offsetWidth) {
          ay.top = aw.iDPRowHeight + "px";
          KJE.elementHeight(f, aw.iDPRowHeight * 2 + "px");
        }
        j.addEventListener("change", aw.dataChanged, false);
      } else {
        if (S) {
          E._inputTypeAdditional = aw.TypeLabel;
          E._sTrailingText = S;
          var t = document.createElement("div");
          var am = t.style;
          av(i, t, G, false, E._sTrailingText, null, h ? true : false);
          t.className = "KJETrailingLabel";
          am.position = KJE.InputFieldPosition;
          am.display = KJE.InputFieldDisplay;
          am.left =
            C +
            (aw.deviceInputPad ? aw.deviceInputPad : d) +
            d +
            aw.InputLength +
            5 +
            "px";
          am.top =
            (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
            (aw.iDPInputHeight / 4 + aw.iDPInputTop) +
            "px";
          E._Additional = t;
          j = E._Additional = t;
          E._label2 = t;
          au.appendChild(t);
        }
      }
    } else {
      if (E.bSlider) {
        var ah =
          C +
          (aw.deviceInputPad ? aw.deviceInputPad : d) +
          d +
          aw.InputLength +
          aw.SliderLeftMargin;
        var N = aw.iDPItemHeight;
        var x = (E._slider = document.createElement("div"));
        var H = x.style;
        x.setAttribute("aria-hidden", "true");
        if (!KJE.bPlusMinus) {
          x.labels = E.setLabelSlider(N, aB, x);
          x.labels.indent = ah;
          H.position = KJE.InputFieldPosition;
          H.display = KJE.InputFieldDisplay;
          H.left = ah + "px";
          x.className = "KJESlider";
        } else {
          x.className = "KJEIncrementer";
          H.position = KJE.InputFieldPosition;
          H.display = KJE.InputFieldDisplay;
          H.left = ah + d + "px";
        }
        if (aw.TwoLineEntry) {
          H.top = aw.iDPRowHeight + "px";
        }
        x.indent = ah;
        x.unselectable = "on";
        H.height = N + "px";
        x.bMO = true;
        if (W && KJE.InputFieldPosition == "static") {
          W.appendChild(E._slider);
        } else {
          au.appendChild(E._slider);
        }
        if (KJE.bPlusMinus) {
          var b = (E._plus = document.createElement("div"));
          var aA = (E._minus = document.createElement("div"));
          var ak = b.style;
          var u = aA.style;
          aA.className = "KJEIncrementControl KJEIncrementMinus";
          b.className = "KJEIncrementControl KJEIncrementPlus";
          u.bMouseoutignore = ak.bMouseoutignore = true;
          u.unselectable = ak.unselectable = "on";
          u.position = ak.position = "relative";
          u.cursor = ak.cursor = "pointer";
          x.appendChild(E._minus);
          x.appendChild(E._plus);
          E.AddPlusMinusEvents(b, aA);
        } else {
          var r = (E._line = document.createElement("input"));
          r.setAttribute("type", "range");
          r.setAttribute("aria-hidden", "true");
          r.setAttribute("min", "0");
          r.setAttribute("max", "100");
          r.setAttribute("step", ".01");
          if (KJE.showSliderTitle) {
            r.title = KJE.FTR(E._sLabel + " " + KJE.MSG_SLIDER);
          }
          r.tabIndex = "-1";
          KJE.elementHeight(r.style, aw.iDPRowHeight / 2 + 2 + "px");
          r.style.outline = "none";
          r.className = "KJERange";
          var O = r.style;
          r.bMouseoutignore = true;
          r.unselectable = "on";
          O.position = "relative";
          O.cursor = "pointer";
          x.appendChild(E._line);
          var Q = aw.SliderKnobSize;
          E.bSetRange = true;
          E.AddNativeEvents(r);
          O.left = "0px";
          E._posAdjust = 0;
        }
      }
    }
    E.labelOffsetWidth = C;
    E.vDefault2 =
      E._inputTypeAdditional != aw.TypeNone ? E._Additional.value : null;
    aw.InputItem.InputSetValues(E, E.vDefault, E.vDefault2, true);
    E.AddInputEvents(J);
    if (ao.get(g + "_HIDE", false)) {
      E.bValidate = false;
      E.hide();
    }
    if (ao.get(g + "_DISABLE", KJE.bLockDown ? true : false)) {
      E.disable();
    }
  };
  KJE.InputItem.bDropBoxRequired = function (b, a) {
    var c = true;
    if (KJE.parameters.get(b + "_HIDE", false)) {
      c = false;
    } else {
      if (KJE.parameters.get(b + "_DISABLE", KJE.bLockDown ? true : false)) {
        c = false;
      }
    }
    KJE.InputItem.setRequiredAttribute(a, c);
    return;
  };
  KJE.InputItem.prototype.getLabelForInput = function (c, h, f, b, d) {
    var a = this;
    var i = KJE;
    var g = (a._label = document.createElement("div"));
    var e = g.style;
    e.position = KJE.InputFieldPosition;
    e.display = KJE.InputFieldDisplay;
    if (i.SetLabelLength) {
      e.width = i.LabelLength + "px";
    }
    e.left = KJE.LabelLeftMargin + "px";
    i.setLabelWrap(c, g, h, !f, null, a.className);
    g.className = a.className;
    if (g._oLabel) {
      g._oLabel.setAttribute("id", "KJE-LB-" + a._name);
      g._oTextSpan = i.appendSpan(
        g._oLabel,
        "KJE-RT-" + a._name,
        a.className,
        a.bNoLabel ? "" : a._sLabel
      );
      g._oColonSpan = i.appendSpan(
        g._oLabel,
        "KJE-RC-" + a._name,
        a.className,
        a.bNoLabel ? "" : i.Colon
      );
      g._oRequiredSpan = null;
      if (a._inputRequired) {
        g._oRequiredSpan = i.appendSpan(
          d ? b.parentNode : g._oLabel,
          "KJE-RR-" + a._name,
          "KJERequired",
          i.InputItem.getRequiredSymbol(a._inputRequired)
        );
      }
      g._oRangeSpan = null;
      if (a._inputType == i.TypeNumber) {
        g._oRangeSpanName = "KJE-RG-" + a._name;
        g._oRangeSpan = i.appendSpan(
          d ? b.parentNode : g._oLabel,
          g._oRangeSpanName,
          "KJEAccessibleInLine",
          i.getKJEReplaced(
            i.MSG_VALID_RANGE,
            i.format[a._format](
              a._minimum / (a._format == i.FMT_PERCENT ? 100 : 1),
              a._decimals
            ),
            i.format[a._format](
              a._maximum / (a._format == i.FMT_PERCENT ? 100 : 1),
              a._decimals
            )
          )
        );
      } else {
        if (a._inputType == i.TypeDate) {
          g._oRangeSpanName = "KJE-RG-" + a._name;
          g._oRangeSpan = i.appendSpan(
            d ? b.parentNode : g._oLabel,
            g._oRangeSpanName,
            "KJEAccessibleInLine",
            i.getKJEReplaced(i.MSG_INVALID_DATE, a._sLabel)
          );
        }
      }
      g._oLabel.style.marginTop = i.iDPInputHeight / 4 + i.iDPInputTop + "px";
    }
    return g;
  };
  KJE.InputItem.prototype.setInputItemRequired = function (b) {
    var a = this;
    a._inputRequired = b;
    KJE.InputItem.setRequiredAttribute(a._inputField, b);
    if (a._label._oRequiredSpan) {
      a._label._oRequiredSpan.innerHTML = KJE.InputItem.getRequiredSymbol(b);
    }
  };
  KJE.InputItem.getRequiredSymbol = function (a) {
    return a ? KJE.MSG_REQUIRED_SYMBOL : KJE.MSG_NOTREQUIRED_SYMBOL;
  };
  KJE.InputItem.setRequiredAttribute = function (a, b) {
    if (a) {
      a.setAttribute("aria-required", b ? "true" : "false");
    }
  };
  KJE.InputItem.InputSetValues = function (e, d, f, a) {
    var c = KJE;
    var g = d;
    if (a && e.bUseStoredForDefault) {
      g = KJE.StorageGet(e._name, g);
    }
    switch (e._inputType) {
      case c.TypeRadios:
      case c.TypeRadio:
        e._inputField.checked = g;
        if (e.oAdditional) {
          e._Additional.checked = !e._inputField.checked;
        }
        break;
      case c.TypeCheckbox:
        e._inputField.checked = g;
        break;
      case c.TypeDropBox:
        var b = c.setDropBox(e._inputField, g);
        e._InComplete = false;
        if (b == 0 && KJE.bFirstNotValid) {
          e._InComplete = true;
        }
        break;
      case c.TypeLabel:
        e._inputField.innerHTML = g;
        break;
      case c.TypeDate:
        e._inputField.value = g;
        e.setTypedDate(true);
        break;
      case c.TypeString:
        e._inputField.value = g;
        e.setTypedString(true);
        break;
      case c.TypeNumber:
        e._inputField.value = g;
        e.setTypedValue(true);
    }
    if (e._inputTypeAdditional != c.TypeNone) {
      var g = f;
      if (a && e.bUseStoredForDefault) {
        g = c.StorageGet(e._Additional.name, e.vDefault, e.bUseStoredForDefault);
      }
      switch (e._inputTypeAdditional) {
        case c.TypeDropBox:
          var b = c.setDropBox(e._Additional, g);
          e._InComplete = false;
          if (b == 0 && KJE.bFirstNotValid) {
            e._InComplete = true;
          }
          break;
        case c.TypeDate:
          e._Additional.value = g;
          break;
        case c.TypeString:
          e._Additional.value = g;
          break;
        case c.TypeNumber:
          e._Additional.value = g;
          e.setTypedValue(true);
      }
    }
  };
  KJE.InputItem.AltHelpName = false;
  KJE.AddDescribedBy = function (a, b) {
    if (KJE.bDescribedBy) {
      a.setAttribute("aria-describedby", b ? b : a.sDescribedBy);
    } else {
      a.removeAttribute("aria-describedby");
    }
  };
  KJE.AddDefinitionEvents = function (m, o, i, j, c, e, h, n, f, g) {
    var l = 50;
    var k = KJE.iDPInputHeight - 5;
    var b = document.createElement("div");
    b.className = "KJEGuiDefnPopup" + (n ? " " + n : "");
    b.id = "KJE-PODEFN-" + j;
    if (e) {
      if (!f) {
        if (KJE.bDescribedBy) {
          e.sDescribedBy = b.id;
          KJE.AddDescribedBy(e);
        }
      }
    }
    var d = g;
    if (d == null) {
      d = document.createElement("button");
      d.id = "KJE-PO-" + j;
      var a = (d.open_help_button = "PO-" + j);
      if (a) {
        e.addEventListener(
          "focus",
          function (p) {
            if (KJE.MenuWindowHide && e != KJE.Menu) {
              KJE.MenuWindowHide(true);
            }
          },
          false
        );
      }
    }
    d.setAttribute("aria-label", KJE.MSG_DEFINE_PREFIX + i);
    d.className = "KJEDefinitionIcon" + (h ? " " + h : "");
    d.innerHTML = KJE.MSG_DEFINE_HELPICON;
    d.tabIndex = "0";
    d.setAttribute("type", "button");
    b.id_closebutton = "KJE-POCLOSE-" + j;
    b.innerHTML =
      "<div class=KJEDefinitionPopup>" +
      (o.innerHTML ? o.innerHTML : o) +
      "</div>";
    var c = c ? c : KJE.DefinitionIconPosition;
    if (c == 1) {
      d.style.cssFloat = "right";
      m.appendChild(d);
      d.aDefnLabelPointer = m;
    } else {
      if (c == 0) {
        d.style.cssFloat = "left";
        m.insertBefore(d, m.firstChild);
      } else {
        if (c == 2) {
          m.insertBefore(d, m);
        } else {
          if (c == 4) {
            m.insertBefore(d, m.firstChild);
          } else {
            if (c == 3 || c == 5) {
              KJE.insertAfter(d, m);
            }
          }
        }
      }
    }
    b.setAttribute("aria-label", KJE.MSG_DEFINE_PREFIX + i);
    d.addEventListener(
      "focus",
      function (p) {
        if (KJE.MenuWindowHide) {
          KJE.MenuWindowHide(true);
        }
        if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint != b) {
          KJE.DefnPointHide();
        }
        p.preventDefault();
      },
      false
    );
    if (KJE.bDescribedBy) {
      d.setAttribute("aria-controls", b.id);
    }
    if (f) {
      d.addEventListener(
        "click",
        function (p) {
          if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == b) {
            KJE.DefnPointHide();
          } else {
            KJE.DefnPointShow(d, b, l, k, m, 60000, j, c);
          }
          p.preventDefault();
        },
        false
      );
    } else {
      if (c < 4) {
        m.addEventListener(
          "click",
          function (p) {
            if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == b) {
              KJE.DefnPointHide();
            } else {
              KJE.DefnPointShow(d, b, l, k, m, 60000, j, c);
            }
            p.preventDefault();
          },
          false
        );
        m.addEventListener(
          "keyup",
          function (p) {
            if (p.key === "Escape") {
              if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == b) {
                KJE.DefnPointHide();
              } else {
                KJE.DefnPointShow(d, b, l, k, m, 60000, j, c);
              }
              p.preventDefault();
            }
          },
          false
        );
      }
      if (c > 1) {
        d.addEventListener(
          "click",
          function (p) {
            if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == b) {
              KJE.DefnPointHide();
            } else {
              KJE.DefnPointShow(d, b, l, k, m, 60000, j, c);
            }
            p.preventDefault();
          },
          false
        );
      }
    }
    d.setAttribute(KJE.sExpand, "false");
    b.style.display = "none";
    b.setAttribute("aria-hidden", "true");
    m.parentNode.insertBefore(b, m.nextSibling);
    return b;
  };
  KJE.InputItem.prototype.AddPlusMinusEvents = function (c, a) {
    var b = this;
    c.addEventListener(
      "click",
      function (d) {
        b.doIncrement(true);
      },
      false
    );
    a.addEventListener(
      "click",
      function (d) {
        b.doIncrement(false);
      },
      false
    );
  };
  KJE.InputItem.prototype.AddNativeEvents = function (b) {
    var a = this;
    b.addEventListener(
      "input",
      function (c) {
        if (a.bSetRange) {
          a.setRangeValue(c);
        }
        if (KJE.MenuWindowHide) {
          KJE.MenuWindowHide(true);
        }
        a.bSetRange = true;
      },
      false
    );
    b.addEventListener(
      "change",
      function (c) {
        a.setRangeValue(c);
        if (KJE.MenuWindowHide) {
          KJE.MenuWindowHide(true);
        }
      },
      false
    );
    a.setLowerFill(b);
  };
  KJE.InputItem.prototype.setCSSProperty = function () {
    this._line.style.setProperty(
      "--webkitProgressPercent",
      Math.ceil(
        ((this._line.value - this._line.min) /
          (this._line.max - this._line.min)) *
          1000
      ) /
        10 +
        "%"
    );
  };
  KJE.InputItem.prototype.handleUpAndLeave = function () {
    this.isRangeChanging = false;
  };
  KJE.InputItem.prototype.handleDown = function () {
    this.isRangeChanging = true;
  };
  KJE.InputItem.prototype.setLowerFill = function (b) {
    if (!KJE.CHROME && !KJE.Safari) {
      return;
    }
    var a = this;
    this.isRangeChanging = false;
    b.addEventListener("mousemove", function () {
      if (!a.isRangeChanging) {
        return;
      }
      a.setCSSProperty();
    });
    b.addEventListener("mousedown", function () {
      a.isRangeChanging = true;
    });
    b.addEventListener("mouseup", function () {
      a.isRangeChanging = false;
    });
    b.addEventListener("mouseleave", function () {
      a.isRangeChanging = false;
    });
    b.addEventListener("click", function () {
      a.setCSSProperty();
    });
  };
  KJE.InputItem.prototype.AddInputEvents = function (b) {
    var a = this;
    b.addEventListener(
      "change",
      function (c) {
        a.doBlur(c);
      },
      false
    );
    b.addEventListener(
      "focus",
      function (c) {
        a.doFocus(c);
      },
      false
    );
    b.addEventListener(
      "keypress",
      function (c) {
        if (c.keyCode == 13) {
          a.doBlur();
          return KJE.Dropper.stopBubble(c);
        }
      },
      false
    );
  };
  KJE.InputItem.prototype.doFocus = function () {
    var a = KJE;
    switch (this._inputType) {
      case a.TypeRadio:
      case a.TypeRadios:
      case a.TypeCheckbox:
      case a.TypeDropBox:
      case a.TypeLabel:
        break;
      case a.TypeDate:
      case a.TypeString:
      case a.TypeNumber:
        this._inputField.select();
        if (this._inputField.value == this.getName()) {
          this._inputField.value = "";
        }
    }
    if (this.oDivDefn) {
      if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint != this.oDivDefn) {
        KJE.DefnPointHide();
      }
    }
    if (KJE.MenuWindowHide) {
      KJE.MenuWindowHide(true);
    }
  };
  KJE.InputItem.prototype.doBlur = function () {
    var b = KJE;
    var c = this;
    switch (c._inputType) {
      case b.TypeRadio:
      case b.TypeRadios:
      case b.TypeCheckbox:
        b.dataChanged();
        break;
      case b.TypeDropBox:
        c._InComplete = false;
        var a = c._inputField.selectedIndex;
        if (a == 0 && c.bFirstNotValid) {
          c._InComplete = true;
        }
        c.setSliderPosition(c._inputField.selectedIndex);
        b.dataChanged();
        break;
      case b.TypeDate:
        c.setTypedDate();
        break;
      case b.TypeString:
        c.setTypedString();
        break;
      case b.TypeNumber:
        c.setTypedValue();
    }
  };
  KJE.InputItem.prototype.doClick = function (b, a) {
    this.setMouseValue(b, a);
  };
  KJE.InputItem.prototype.doMouseUp = function (c, a) {
    var b = this;
    b._mouseDown = false;
  };
  KJE.InputItem.prototype.doMouseOut = function (g, f) {
    var b = this;
    var c = window.event;
    if (b._inputField.disabled) {
      return;
    }
    if (b._mouseDown) {
      if (!g) {
        var g = c;
      }
      var d = c ? g.srcElement : g.target;
      if (d.bMouseoutignore) {
        return;
      }
      var a = g.relatedTarget ? g.relatedTarget : g.toElement;
      while (a != d && a.nodeName != "BODY") {
        a = a.parentNode;
      }
      if (d != a) {
        b.doMouseUp();
      }
    }
  };
  KJE.InputItem.prototype.doMouseDown = function (c, b) {
    var a = this;
    if (a._inputField.disabled) {
      return;
    }
    a._mouseDown = true;
    if (c) {
      a.setMouseValue(c, b);
    }
  };
  KJE.InputItem.prototype.doMouseMove = function (c, b) {
    var a = this;
    if (a._mouseDown) {
      a.setMouseValue(c, b);
    }
  };
  KJE.InputItem.prototype.setRangeValue = function (a) {
    v = this._line.value;
    this.setChangeValue(v / 100);
  };
  KJE.InputItem.prototype.setMouseValue = function (h, g) {
    var d = this;
    var a = KJE.getMouseCoord(h, d._slider, g);
    if (a.x >= 0) {
      var c = d._posAdjust;
      var f = d._slider.offsetWidth;
      var b = (a.x - c) / (f - c);
      this.setChangeValue(b);
    }
  };
  KJE.InputItem.prototype.setChangeValue = function (b) {
    var c = this;
    var e = c._minimum;
    var f = c._maximum;
    var d = c._oScale;
    if (d) {
      b = KJE.s_Translate(
        b * 100,
        d._Min,
        d._Mid1,
        d._Mid2,
        d._Max,
        d._stepMin,
        d._stepMid,
        d._stepMax
      );
    } else {
      var a = c._increment;
      b = b * c._range + e;
      b = a == 1 ? Math.round(b) : Math.round(b / a) * a;
    }
    c._InComplete = false;
    c.setValue(b > f ? f : b < e ? e : b, false, true);
  };
  KJE.InputItem.prototype.doIncrement = function (d) {
    var c = this;
    var a = c._format;
    var e = c._minimum;
    var f = c._maximum;
    if (a == KJE.FMT_PERCENT) {
      iIncrement = 1;
    } else {
      if (f < 20) {
        iIncrement = 0.5;
      } else {
        if (f < 100) {
          iIncrement = 1;
        } else {
          if (f < 250) {
            iIncrement = 5;
          } else {
            if (f < 1000) {
              iIncrement = 10;
            } else {
              if (f < 10000) {
                iIncrement = 100;
              } else {
                iIncrement = 1000;
              }
            }
          }
        }
      }
    }
    var b = c.getValue() + (d ? 1 : -1) * iIncrement;
    c._InComplete = false;
    c.setValue(b > f ? f : b < e ? e : b, false, true);
  };
  KJE.InputItem.prototype.validate = function () {
    var b = this;
    if (b.bValidate) {
      if (b._bError) {
        throw b._sError;
      }
      var a = !(b.bIncompleteCheck && b._InComplete);
      if (!a) {
        b.setIncomplete();
      }
      return a;
    } else {
      return true;
    }
  };
  KJE.InputItem.prototype.setValue = function (p, b, j) {
    var r = KJE;
    var l = this;
    var k = l._inputField;
    var g = l._format;
    var f = l._container;
    var i = l._inputType;
    var a = false;
    if (i == r.TypeNone) {
      l._value = p;
      l._bError = false;
      return;
    } else {
      if (i == r.TypeDate) {
        var o = new Date();
        try {
          var c = new Array();
          if (p.indexOf("/") > 0) {
            c = p.split("/");
            c[0] = Math.round(c[0]);
            c[1] = Math.round(c[1]);
            c[2] = Math.round(c[2]);
          } else {
            c[0] = Math.round(p.substring(0, 2));
            c[1] = Math.round(p.substring(2, 4));
            c[2] = Math.round(p.substring(4));
          }
          if (c[2] < 100) {
            c[2] += 2000;
          }
          o = KJE.getDate(c[2], c[0], c[1]);
        } catch (m) {
          a = true;
        }
        if (a) {
          l._sError = r.getKJEReplaced(r.MSG_INVALID_DATE, l._sLabel);
          l._value = null;
        } else {
          l._value = o;
          k.value = r.dateFormat(o);
        }
      } else {
        if (i == r.TypeString) {
          k.value = p;
        } else {
          if (i == r.TypeDropBox) {
            k.selectedIndex = Math.round(p);
            l.setSliderPosition(p);
          } else {
            if (i == r.TypeLabel) {
              k.innerHTML = p;
            } else {
              if (i == r.TypeCheckbox) {
                k.checked = p;
              } else {
                if (l.bValidate) {
                  if (p > l._maximum) {
                    l._sError = r.getKJEReplaced(
                      this.MSG_EXCEEDS_LIMIT_OF_RANGE
                        ? this.MSG_EXCEEDS_LIMIT_OF_RANGE
                        : r.MSG_EXCEEDS_LIMIT_OF_RANGE,
                      l._sLabel,
                      r.format[g](
                        r.FMT_PERCENT == g ? l._maximum / 100 : l._maximum,
                        l._decimals,
                        l._iPadding
                      )
                    );
                    a = true;
                  } else {
                    if (p < l._minimum) {
                      l._sError = r.getKJEReplaced(
                        this.MSG_UNDER_LIMIT_OF_RANGE
                          ? this.MSG_UNDER_LIMIT_OF_RANGE
                          : r.MSG_UNDER_LIMIT_OF_RANGE,
                        l._sLabel,
                        r.format[g](
                          r.FMT_PERCENT == g ? l._minimum / 100 : l._minimum,
                          l._decimals,
                          l._iPadding
                        )
                      );
                      a = true;
                    }
                  }
                }
                var q = (l._value = r.round(p, l._decimals));
                var h = "";
                if (
                  r.deviceUseNumberType &&
                  (g == r.FMT_DOLLARS || g == r.FMT_PERCENT)
                ) {
                  h = r.nbr(q, l._decimals, "", "", true, false);
                } else {
                  h = r.format[g](
                    g == r.FMT_PERCENT ? q / 100 : q,
                    l._decimals,
                    l._iPadding
                  );
                }
                k.value = r.replace("&nbsp;", " ", h);
                l.setSliderPosition(q);
              }
            }
          }
        }
      }
    }
    l._bError = a;
    if (a) {
      l.setError();
    } else {
      l.setGoodInput();
    }
    if (!b) {
      r.dataChanged(j);
    }
  };
  KJE.InputItem.prototype.setCalculationError = function (a) {
    this.setGoodInput();
    this.setError(a.err);
  };
  KJE.InputItem.prototype.setSliderPosition = function (a) {
    var f = this;
    if (f.bSlider) {
      var e = f._slider.width;
      if (e && (a || a == 0)) {
        var g = f._oScale;
        var d = f._posAdjust;
        var b = 0;
        if (g) {
          b = KJE.s_Untranslate(a, g._Min, g._Mid1, g._Mid2, g._Max) / 100;
        } else {
          var h = f._maximum;
          var c = f._minimum;
          b = ((a > h ? h : a < c ? c : a) - c) / f._range;
        }
        f._line.value = b * 100;
        if (KJE.CHROME || KJE.Safari) {
          if (f.setCSSProperty) {
            f.setCSSProperty();
          }
        }
      }
    }
  };
  KJE.InputItem.prototype.setTypedString = function (c) {
    var b = KJE.replace;
    var a = this;
    a.setValue(
      b("<", "", b(">", "", b("(", "", b(")", "", a._inputField.value)))),
      c
    );
  };
  KJE.InputItem.prototype.setTypedDate = function (f) {
    var a = KJE;
    var c = this;
    var e = c._inputField.value;
    var b = e;
    c._InComplete = false;
    if (e == "TODAY") {
      b = a.dateFormat(new Date());
    } else {
      if (e == "NEXT_MONTH") {
        var g = new Date();
        g.setMonth(g.getMonth() + 1);
        b = a.dateFormat(g);
      } else {
        if (b.substr(10, 1) == "T") {
          b = b.substr(5, 2) + "/" + b.substr(8, 2) + "/" + b.substr(0, 4);
        }
        b = a.stripDate(b);
        if (b == "" || b == c._sLabel) {
          c._inputField.value = c.bNoLabel ? c._sLabel : "";
          c._InComplete = true;
          c._bError = false;
          if (c.bIncompleteCheck) {
            c.setIncomplete();
          }
          if (!f) {
            a.dataChanged();
          }
          c._value = null;
          return;
        }
      }
    }
    c.setValue(b, f);
  };
  KJE.InputItem.prototype.setGoodInput = function () {
    var a = this;
    if (a._inputType != KJE.TypeNone) {
      a._container.style.backgroundColor = a._container.backgroundColor;
      if (a.spanInputRequiredDesc && KJE.POPUP_REQUIRED_MSG) {
        if (a.spanInputRequiredDescMsg) {
          a.spanInputRequiredDescMsg.className = KJE.REQUIRED_HOVER_CLASS;
        }
        if (a.spanInputRangeDescInnerHtml) {
          if (a.spanInputRangeDescInnerHtml != a.spanInputRangeDesc.innerHTML) {
            a.spanInputRangeDesc.innerHTML = a.spanInputRangeDescInnerHtml;
          }
        }
      }
      if (a.spanInputRangeDesc) {
        a.spanInputRangeDesc.className = "KJEAccessibleInLine";
      }
      a._inputField.setAttribute("aria-invalid", "false");
      if (a._inputField.sDescribedBy) {
        KJE.AddDescribedBy(a._inputField);
      } else {
        a._inputField.removeAttribute("aria-describedby");
      }
      if (a._inputField.classes) {
        a._inputField.className = a._inputField.classes;
      }
    }
  };
  KJE.InputItem.prototype.setError = function (a) {
    var b = this;
    b._container.style.backgroundColor = KJE.ErrorBackground;
    if (b.spanInputRangeDesc) {
      b.spanInputRangeDesc.className = "KJEGuiErrorPopup";
      if (a) {
        b.spanInputRangeDesc.innerHTML = a;
      }
      KJE.AddDescribedBy(
        b._inputField,
        b.spanInputRangeID +
          (b._inputField.sDescribedBy ? " " + b._inputField.sDescribedBy : "")
      );
    }
    b._inputField.setAttribute("aria-invalid", "true");
    b._inputField.className =
      b.preserveClasses(b._inputField) + " KJEInputErrorField";
  };
  KJE.InputItem.prototype.setIncomplete = function () {
    if (KJE.initializing > 1 || this.bValueBeenSet) {
      var b = this;
      var a = KJE;
      b._container.style.backgroundColor = a.IncompleteBackground;
      if (b.spanInputRequiredDesc && a.POPUP_REQUIRED_MSG) {
        b.spanInputRequiredDescMsg = b.spanInputRequiredDesc.firstElementChild;
        if (b.spanInputRequiredDescMsg) {
          b.spanInputRequiredDescMsg.className = "KJEGuiErrorPopup";
        }
      }
      b._inputField.setAttribute("aria-invalid", "true");
      b._inputField.className =
        b.preserveClasses(b._inputField) + " KJEInputErrorField";
    }
  };
  KJE.InputItem.prototype.preserveClasses = function (a) {
    if (a.classes) {
    } else {
      a.classes = a.className;
    }
    return a.classes;
  };
  KJE.InputItem.prototype.setTypedValue = function (e) {
    var a = KJE;
    var c = this;
    c._InComplete = false;
    var d = c._inputField.value;
    if (d == "" || d == c._sLabel) {
      c.setSliderPosition(c._minimum);
      c._inputField.value = c.bNoLabel ? c._sLabel : "";
      c._InComplete = true;
      c._bError = false;
      if (c.bIncompleteCheck) {
        c.setIncomplete();
      }
      if (!e) {
        a.dataChanged();
        this.bValueBeenSet = true;
      }
    } else {
      var b = a.round(parseFloat(a.strip(d, c.bAbsoluteValue)), c._decimals);
      c.bSetRange = false;
      c.setValue(b, e);
    }
  };
  KJE.InputItem.prototype.getSecondValue = function () {
    var a = this;
    return a.getV(a._inputTypeAdditional, a._Additional);
  };
  KJE.InputItem.prototype.getValue = function () {
    var a = this;
    return (a._value = a.getV(a._inputType, a._inputField, a._format));
  };
  KJE.InputItem.prototype.setText = function (a) {
    var b = this;
    return b.setT(b._inputType, b._inputField, a);
  };
  KJE.InputItem.prototype.setSecondText = function (a) {
    var b = this;
    return b.setT(b._inputTypeAdditional, b._Additional, a);
  };
  KJE.InputItem.prototype.getSecondFormatted = function () {
    var a = this;
    return a.getF(a._inputTypeAdditional, a._Additional);
  };
  KJE.InputItem.prototype.getFormatted = function () {
    var a = this;
    return a._InComplete ? KJE.sIncomplete : a.getF(a._inputType, a._inputField);
  };
  KJE.InputItem.prototype.getF = function (g, f) {
    var b = KJE;
    var e = "";
    var d = this;
    var c = d._value;
    var a = d._format;
    switch (g) {
      case b.TypeRadio:
      case b.TypeRadios:
      case b.TypeCheckbox:
        e = f.value;
        break;
      case b.TypeDropBox:
        e = f[f.selectedIndex].text;
        break;
      case b.TypeLabel:
        e = f.innerHTML;
        break;
      case b.TypeDate:
        e = b.dateFormat(c);
        break;
      case b.TypeString:
        e = f.value;
        break;
      case b.TypeNumber:
        e = b.format[a](
          a == b.FMT_PERCENT ? c / 100 : c,
          d._decimals,
          d._iPadding
        );
        break;
      case b.TypeNone:
        e = c;
    }
    return e;
  };
  KJE.InputItem.prototype.getV = function (f, e, b) {
    var a = KJE;
    var c = 0;
    var d = this;
    switch (f) {
      case a.TypeRadio:
      case a.TypeRadios:
      case a.TypeCheckbox:
        c = e.checked;
        break;
      case a.TypeDropBox:
        c = e[e.selectedIndex].value;
        if (b != a.FMT_STRING) {
          c = Math.round(c);
        }
        break;
      case a.TypeLabel:
        c = e.innerHTML;
        break;
      case a.TypeDate:
        c = d._value;
        break;
      case a.TypeString:
        c = e.value;
        break;
      case a.TypeNumber:
        c = a.round(parseFloat(a.strip(e.value, d.bAbsoluteValue)), d._decimals);
        break;
      case a.TypeNone:
        c = d._value;
    }
    return c;
  };
  KJE.InputItem.prototype.setT = function (e, d, b) {
    var a = KJE;
    var c = this;
    switch (e) {
      case a.TypeRadio:
      case a.TypeRadios:
      case a.TypeCheckbox:
        break;
      case a.TypeDropBox:
        break;
      case a.TypeLabel:
        d.innerHTML = b;
        break;
      case a.TypeDate:
        d.value = b;
        c.setTypedDate(true);
        break;
      case a.TypeString:
        d.value = b;
        c.setTypedString(true);
        break;
      case a.TypeNumber:
        d.value = a.replace("&nbsp;", " ", b);
        c.setTypedValue(true);
        break;
    }
  };
  KJE.InputItem.prototype.shortDesc = function () {
    return this._sLabel + KJE.Colon + " " + this.getFormatted();
  };
  KJE.InputItem.prototype.containerWidth = function () {
    return this._container.offsetWidth - KJE.iInputContainerPad;
  };
  KJE.InputItem.prototype.newWidth = function () {
    var m = KJE;
    var f = this;
    var e = f._inputField;
    var a = f._Additional;
    if (f._inputType == m.TypeNone) {
      return;
    }
    var k = this.containerWidth();
    var d = f.SliderX();
    var j = false;
    if (!f._sTrailingText && !f.bSlider) {
      switch (f._inputType) {
        case m.TypeRadio:
        case m.TypeCheckbox:
        case m.TypeNumber:
        case m.TypeDate:
        case m.TypeRadios:
          break;
        case m.TypeString:
          var c = Math.max(k - e.indent - m.iDPInputPad * 3, 0);
          var b = Math.max(k - e.indent - m.iDPInputPad, 0);
          if (c < m.InputLength) {
            c = b > m.InputLength ? m.InputLength : b;
          }
          j = true;
          break;
        case m.TypeDropBox:
          var c = Math.max(k - e.indent - m.iDPInputPad, 0);
          var b = Math.max(k - e.indent + m.iDPInputPad, 0);
          if (c < m.InputLength + m.iDPInputPad * 2) {
            c =
              b > m.InputLength + m.iDPInputPad * 2
                ? m.InputLength + m.iDPInputPad * 2
                : b;
          }
          j = true;
          break;
        case m.TypeLabel:
          var c = Math.max(k - e.indent + m.iDPInputPad, 0);
          j = true;
      }
    }
    if (!j) {
      switch (f._inputType) {
        case m.TypeRadio:
        case m.TypeCheckbox:
          break;
        case m.TypeRadios:
          var c = Math.max(k - e.indent, 0);
          if (c < m.InputLength) {
            c = m.InputLength;
          }
          j = true;
          break;
        case m.TypeDropBox:
          var c = m.InputLength + KJE.iDPDropBoxPad * 2;
          var b = Math.max(k - e.indent + m.iDPInputPad, 0);
          if (b < c) {
            c = b;
          }
          j = true;
          break;
        case m.TypeNumber:
        case m.TypeDate:
        case m.TypeString:
          if (f._sTrailingText) {
            if (f._label2 && f.bTooNarrowForSlider()) {
              f._label2.style.display = "none";
            } else {
              if (f._label2) {
                f._label2.style.display = KJE.InputFieldDisplay;
              }
            }
          }
        case m.TypeLabel:
          var c = Math.max(
            k -
              m.iDPInputPad -
              e.indent -
              (f.SliderWidthAdjust ? f.SliderWidthAdjust : m.SliderWidthAdjust),
            0
          );
          if (f.bTooNarrowForSlider() && c < KJE.InputLength) {
          } else {
            c = KJE.InputLength;
          }
          j = true;
      }
    }
    if (j) {
      if (f._inputType == m.TypeRadios) {
        if (f._oDivRadios) {
          f._oDivRadios.style.width = c + "px";
        }
      } else {
        if (f._iInputFieldDiv) {
          f._iInputFieldDiv.style.width = c + "px";
          e.style.width = c + "px";
        } else {
          e.style.width = c + "px";
        }
      }
    }
    if (a) {
      if (a.indent && f._inputTypeAdditional != m.TypeRadios) {
        var c = d + 10 - a.indent;
        if (f._AdditionalDiv) {
          f._AdditionalDiv.style.width = c + "px";
          a.style.width = c + KJE.iDPDropBoxModernPad + "px";
        } else {
          a.style.width = c + "px";
        }
      }
    }
    var g = f._slider;
    if (g && !e.disabled) {
      this.showSlider(g);
    }
    var l = f._label2;
    if (l) {
      var h = l.offsetHeight;
      if (h + 6 > m.iDPRowHeight) {
        l.style.top = (m.TwoLineEntry ? m.iDPRowHeight : 0) + "px";
        KJE.elementHeight(f._container.style, h + 6 + "px");
      } else {
        KJE.elementHeight(f._container.style, "");
        l.style.top =
          (m.TwoLineEntry ? m.iDPRowHeight : 0) +
          (m.iDPInputHeight / 4 + m.iDPInputTop) +
          "px";
      }
    }
  };
  KJE.InputItem.prototype.SliderX = function () {
    var a = this.containerWidth();
    return (
      a -
      KJE.iDPInputPad * 2 -
      (this.SliderWidthAdjust ? this.SliderWidthAdjust : KJE.SliderWidthAdjust)
    );
  };
  KJE.InputItem.prototype.bTooNarrowForSlider = function () {
    return (
      this.SliderX() -
        KJE.InputTotalLength +
        (KJE.TwoLineEntry ? KJE.LabelLeftMargin + KJE.LabelLength : 0) <
      KJE.SliderMinLength
    );
  };
  KJE.InputItem.prototype.showSlider = function (e) {
    var a = KJE;
    var d = this;
    var c = d.SliderX();
    if (e.indent) {
      if (d.bTooNarrowForSlider()) {
        e.style.display = "none";
        if (e.labels) {
          e.labels.style.display = "none";
        }
      } else {
        e.style.display = "inline-block";
        if (e.labels) {
          e.labels.style.display = "inline-block";
          var b = c - e.indent;
          e.width = b;
          e.style.width = b + "px";
          d._line.style.width = b + "px";
          e.labels.style.width = c - (e.labels.indent + KJE.iDPSliderPad) + "px";
          d.setSliderPosition(
            d._inputType == a.TypeDropBox ? d._inputField.selectedIndex : d._value
          );
        }
      }
    }
  };
  KJE.InputItem.prototype.hide = function () {
    var a = this._container;
    if (a) {
      this.bShow = false;
      a.style.display = "none";
    }
  };
  KJE.InputItem.prototype.show = function () {
    var a = this._container;
    if (a) {
      this.bShow = true;
      a.style.display = "block";
    }
  };
  KJE.InputItem.prototype.setLabelSlider = function (g, h, e) {
    var j = ["left", "center", "center", "right"];
    var d = document.createElement("div");
    d.className = "KJEScale";
    d.setAttribute("aria-hidden", "true");
    d.className = "KJEScale";
    d.unselectable = "on";
    d.style.position = "absolute";
    d.style.height = g + "px";
    d.style.cursor = "pointer";
    d.style.top = "0";
    d.style.left = KJE.iDPSliderPad + "px";
    (e ? e : this._container).appendChild(d);
    var a = KJE.SliderLabelVertAdj;
    if (h) {
      var c = (h.length > 5 ? 5 : h.length) - 1;
      for (var b = 0; b <= c; b++) {
        var f = document.createElement("div");
        f.className = "KJEScale";
        f.unselectable = "on";
        f.style.position = "absolute";
        f.style.height = g + "px";
        f.style.textAlign = j[b == c ? 3 : b];
        f.style.cursor = "pointer";
        f.style.top = 0 + a + "px";
        if (c == 4) {
          switch (b) {
            case 0:
              f.style.width = "100%";
              f.style.left = 0;
              break;
            case 1:
              f.style.width = "55%";
              f.style.left = 0;
              break;
            case 2:
              f.style.width = "100%";
              break;
            case 3:
              f.style.width = "75%";
              f.style.left = 0;
              break;
            case 4:
              f.style.width = "100%";
              f.style.right = 0;
              break;
          }
        } else {
          if (c < 2) {
            f.style.width = "100%";
          } else {
            f.style.width = (c > 2 ? 66.66 : 100) + "%";
          }
          if (b > 1) {
            f.style.right = 0;
          } else {
            f.style.left = 0;
          }
        }
        f.innerHTML = h[b];
        d.appendChild(f);
      }
    }
    return d;
  };
  KJE.InputItem.prototype.disable = function (a, b) {
    var d = this;
    var e = d._inputType;
    var c = d._label2;
    var f = d._label;
    if (e == KJE.TypeNone) {
      return false;
    }
    d.bValidate = false;
    d._container.style.backgroundColor = d._container.backgroundColor;
    d._InComplete = false;
    if (e == KJE.TypeCheckbox) {
      if (c) {
        c.className = "KJETrailingLabel KJETrailingLabelDisable";
      }
    }
    if (f && !a) {
      f.className = d.className + " KJETrailingLabelDisable";
    }
    if (d.bSlider) {
      if (d._slider.labels) {
        d._slider.labels.style.display = "none";
      }
      d._slider.style.display = "none";
    }
    if (d._inputField && b) {
      d._inputField.style.display = "none";
    }
    if (d._inputField) {
      d.setInputItemRequired(false, true);
      if (d.spanInputRangeDesc) {
        d.spanInputRangeDesc.style.display = "none";
      }
    }
    return (d._inputField.disabled = true);
  };
  KJE.InputItem.prototype.enable = function () {
    var a = KJE;
    var c = this;
    var d = c._inputType;
    var b = c._label2;
    var e = c._label;
    if (d == a.TypeNone) {
      return false;
    }
    c.bValidate = true;
    if (d == a.TypeCheckbox) {
      if (b) {
        b.className = "KJETrailingLabel";
      }
    }
    if (e) {
      e.className = this.className;
    }
    if (c.bSlider) {
      c.showSlider(c._slider);
    }
    if (c._inputField) {
      c._inputField.style.display = KJE.InputFieldDisplay;
      c.setInputItemRequired(true, true);
      if (c.spanInputRangeDesc) {
        c.spanInputRangeDesc.style.display = "inline";
      }
    }
    if (d == a.TypeDate) {
      c.setTypedDate(true);
    }
    if (d == a.TypeNumber) {
      c.setTypedValue(true);
    }
    return (c._inputField.disabled = false);
  };
  KJE.InputItem.prototype.getName = function () {
    return this._sLabel;
  };
  KJE.shortDesc = function () {
    var b = "";
    for (var a = 0; a < arguments.length; a++) {
      if (arguments[a].shortDesc) {
        b += arguments[a].shortDesc() + (a == arguments.length - 1 ? "" : ", ");
      } else {
        b += arguments[a];
      }
    }
    return b;
  };
  KJE.DataPointTimeOut = -1;
  KJE.DataPointObject = null;
  KJE.DataPointShow = function (f, c, b, g, h, d) {
    var j = KJE;
    if (!d) {
      d = 2500;
    }
    j.DataPoint.style.display = "block";
    var i = j.getScreenCoord(b, g, h);
    var a = j.DataPointOffset();
    j.DataPoint.style.left = i.x + a.x - 47 + j.DataPointX + "px";
    j.DataPoint.style.top = i.y + a.y - 5 + j.DataPointY + "px";
    j.DataPoint.innerHTML = c;
    if (j.DataPointTimeOut) {
      clearTimeout(j.DataPointTimeOut);
    }
    j.DataPointTimeOut = setTimeout(j.DataPointHide, d);
    j.DataPointObject = h;
  };
  KJE.DataPointHide = function () {
    var a = KJE;
    a.DataPoint.style.display = "none";
    if (a.DataPointTimeOut) {
      clearTimeout(a.DataPointTimeOut);
    }
    a.DataPointTimeOut = -1;
    a.DataPointObject = null;
  };
  KJE.DataPointOffset = function () {
    var a = KJE.DataPoint.offsetParent;
    if (a) {
      var b = KJE.getScreenCoord(0, 0, a);
      return { x: -b.x, y: -b.y };
    } else {
      return { x: 0, y: 0 };
    }
  };
  KJE.DefnPointTimeOut = -1;
  KJE.DefnPoint = null;
  KJE.DefnPointX = 5;
  KJE.DefnPointY = 19;
  KJE.DefnPointShow = function (b, i, c, g, f, e, d, a) {
    var h = KJE;
    if (h.DefnPointTimeOut) {
      clearTimeout(h.DefnPointTimeOut);
    }
    if (h.DefnPoint) {
      h.DefnPointHide();
    }
    if (!e) {
      e = 2500;
    }
    h.DefnPoint = i;
    if (typeof i.pDroppee == "undefined") {
      i.pDroppee = KJE.isInDroppee(i);
    }
    if (b.aDefnLabelPointer) {
      b.innerHTML = KJE.MSG_DEFINE_HELPICON_CLOSE;
    }
    i.style.display = "block";
    KJE.DefnPoint.focus();
    if (!i.closeButtonActive) {
      i.close_button = document.getElementById(i.id_closebutton);
      if (i.close_button) {
        i.close_button.addEventListener(
          "click",
          function (j) {
            KJE.DefnPointHide(b.open_help_button);
          },
          false
        );
      }
      i.closeButtonActive = true;
      i.aButton = b;
    }
    if (a != h.DefinitionIconPositionAsIs) {
      i.style.left = h.DefnPointX + "px";
      i.style.top = h.DefnPointY + "px";
    }
    i.setAttribute("aria-hidden", "false");
    h.DefnPointTimeOut = setTimeout(h.DefnPointHide, e);
    b.setAttribute(h.sExpand, "true");
  };
  KJE.DefnPointHide = function (d) {
    var a = KJE;
    var c = a.DefnPoint;
    c.style.display = "none";
    c.aButton.setAttribute(a.sExpand, "false");
    c.setAttribute("aria-hidden", "true");
    if (a.DefnPointTimeOut) {
      clearTimeout(a.DefnPointTimeOut);
    }
    a.DefnPointTimeOut = -1;
    a.DefnPoint = null;
    if (c.aButton.aDefnLabelPointer) {
      c.aButton.innerHTML = KJE.MSG_DEFINE_HELPICON;
    }
    if (d) {
      try {
        document.getElementById("KJE-" + d).focus();
      } catch (b) {}
    }
  };
  KJE.sDropperTitle =
    "<div class=KJEToggleIcon>**ICON**</div><div class=KJEToggleTitle>**TITLE_TEXT**</div>";
  KJE.DropperDefined = function (a) {
    return document.getElementById("KJE-P-" + a);
  };
  KJE.DivDefined = function (a) {
    return document.getElementById("KJE-D-" + a);
  };
  KJE.Dropper = function (f, c, p, o, h, g) {
    var j = this;
    var m = (j._idDropper = document.getElementById("KJE-P-" + f));
    var k = (j._idDrop = document.getElementById("KJE-D-" + f));
    var b = (j._idDroppee = document.getElementById("KJE-E-" + f));
    m.className = "KJEDropper";
    k.className = "KJEDrop";
    b.className = "KJEDroppee";
    j.getOpen = p ? p : false;
    j.getClosed = o ? o : false;
    j._bShow = true;
    j.InCalculator = h ? false : true;
    j._sInnerHTML = m.innerHTML;
    j._sName = f;
    if (!KJE.DropperHide) {
      if (g) {
        m.style.display = "none";
      }
      var j = this;
      var q = KJE;
      q.iDropperCount += 1;
      var a = "DROPPER_OPEN" + q.number(q.iDropperCount);
      c = KJE.IEOld || q.parameters.get(a, c) ? true : false;
      m.setAttribute("role", "button");
      m.setAttribute("aria-controls", "KJE-E-" + f);
      q._idDroppeePadding = 0;
      if (b) {
        if (!q._idDroppeePadding) {
          try {
            q._idDroppeePadding = parseInt(
              window
                .getComputedStyle(b, null)
                .getPropertyValue("padding-top")
                .replace("px", "")
            );
          } catch (l) {}
        }
      }
      m.tabIndex = "0";
      b.style.display = KJE.DropeeDisplay;
      b.style.width = KJE.DropeeWidth;
      b.style.transition = q.DropeeTransition;
      j._iHeight = b.scrollHeight;
      if (!j._iHeight || q.iDPDroppeeForceSize) {
        j._iHeight = 0;
        var n = b.getElementsByTagName("div");
        for (var d = 0; d < n.length; d++) {
          if (n[d].className == "KJEInputContainer") {
            j._iHeight += q.iDPRowHeight;
          }
        }
        j._iHeight += 10;
      }
      j.sExtraClass = q.DropperColors
        ? q.DropperColors.length >= q.iDropperCount
          ? q.DropperColors[q.iDropperCount - 1]
          : false
        : false;
      j.AddEvents();
      j.show(c ? true : false);
      if (!c) {
        if (!(KJE.InputFieldPosition == "static")) {
          KJE.elementHeight(b.style, "auto");
        }
        b.style.display = "none";
        b.style.visibility = "hidden";
        m.setAttribute(q.sExpand, "false");
      } else {
        b.style.display = KJE.DropeeDisplay;
        KJE.elementHeight(b.style, "auto");
        m.setAttribute(q.sExpand, "true");
      }
    }
  };
  KJE.Dropper.prototype.AddEvents = function () {
    var a = this;
    var b = a._idDrop;
    b.addEventListener(
      "click",
      function () {
        a.toggle(a);
      },
      false
    );
    b.addEventListener(
      "keypress",
      function (c) {
        if (c.keyCode == 32 || c.keyCode == 13) {
          a.toggle(a);
          return KJE.Dropper.stopBubble(c);
        }
      },
      false
    );
    b.addEventListener(
      "keydown",
      function (c) {
        if (c.keyCode == 32 || c.keyCode == 13) {
          a.toggle(a);
          return KJE.Dropper.stopBubble(c);
        }
      },
      false
    );
    b.addEventListener(
      "focus",
      function (c) {
        if (KJE.MenuWindowHide) {
          KJE.MenuWindowHide(true);
        }
        return KJE.Dropper.stopBubble(c);
      },
      false
    );
  };
  KJE.Dropper.prototype.setHidden = function (b) {
    var a = this;
    a._idDrop.style.display = "none";
    a._idDroppee.style.display = "none";
  };
  KJE.Dropper.prototype.setShown = function (b) {
    var a = this;
    a._idDrop.style.display = "block";
    if (a._bShow) {
      a._idDroppee.style.display = KJE.DropeeDisplay;
    }
  };
  KJE.Dropper.prototype.setBackground = function (b) {
    var a = this;
    if (a._idDrop) {
      a._idDrop.style.backgroundColor = b;
    }
    a._idDroppee.style.backgroundColor = b;
  };
  KJE.Dropper.prototype.setText = function (b) {
    var c = this;
    var d = c.getOpen;
    var a = c.getClosed;
    var f = c._bShow;
    if (b) {
    } else {
      if (f && d) {
        if ("function" == typeof d) {
          b = d();
        } else {
          b = d;
        }
      } else {
        if (!f && a) {
          if ("function" == typeof a) {
            b = a();
          } else {
            b = a;
          }
        } else {
          b = c._sInnerHTML;
        }
      }
    }
    var e = b;
    e = KJE.replace(
      "<div class='KJESubTitle'>",
      " ",
      KJE.replace("</div>", " ", e)
    ).trim();
    e = KJE.replace("<div class='KJESubTitle KJECenter'>", " ", e);
    e = KJE.replace("<div class='KJESubTitle KJERightBold'>", " ", e);
    e = KJE.replace("|", " ", e);
    c._idDropper.setAttribute("aria-label", e);
    c._idDropper.innerHTML = KJE.setToggleTitleText(b, c, KJE);
  };
  KJE.Dropper.prototype.show = function (a) {
    var b = this;
    b._bShow = a;
    b.setText();
  };
  KJE.Dropper.prototype.toggle = function () {
    if (KJE.IEOld) {
      return;
    }
    if (KJE.inCommandTask(true)) {
      return;
    }
    var a = this;
    var b = a._idDroppee;
    b.style.overflow = "hidden";
    if (a._bShow) {
      a.doClose(500);
    } else {
      a.doOpen(500);
    }
  };
  KJE.Dropper.prototype.doClose = function (c) {
    if (KJE.MenuWindowHide) {
      KJE.MenuWindowHide(true);
    }
    var a = this;
    if (a._bShow) {
      KJE.collapseSection(a._idDroppee, a._idDropper);
      a.show(false);
      var b = a._idDroppee;
    }
  };
  KJE.Dropper.prototype.doOpen = function (d) {
    if (KJE.MenuWindowHide) {
      KJE.MenuWindowHide(true);
    }
    var b = this;
    if (!b._bShow) {
      KJE.expandSection(b._idDroppee, b._idDropper);
      b.show(true);
      var c = b._idDroppee;
      c.style.visibility = "visible";
      for (var a in KJE.inputs.items) {
        KJE.inputs.items[a].newWidth();
      }
    }
  };
  KJE.Dropper.stopBubble = function (a) {
    a.cancelBubble = true;
    a.returnValue = false;
    if (a.stopPropagation) {
      a.stopPropagation();
    }
    if (a.preventDefault) {
      a.preventDefault();
    }
    return false;
  };
  KJE.Dropper.prototype.open = function (a, b) {
    return;
  };
  KJE.addDiv = function (c, b, d) {
    var a = document.getElementById("KJE-D-" + c);
    if (a) {
      a.className = "KJEInputDiv" + (d ? " " + d : "");
      if (b) {
        a.style.backgroundColor = b;
      }
    }
    return a;
  };
  KJE.addDropper = function (b, a) {
    if (a) {
      b.setBackground(a);
    }
    KJE.droppers.set(b._sName, b);
    return b;
  };
  KJE.setToggleTitleText = function (e, h, d, g) {
    if (!e) {
      e = "";
    }
    var f = e.indexOf("<");
    var k = e.indexOf("|");
    if (f > 0 && k > 0) {
      f = f > k ? k : f;
    } else {
      f = f < k ? k : f;
    }
    var i = (f > 0 ? e.substring(0, f) : e).trim();
    if (i.charAt(i.length - 1) == ".") {
      i = i.slice(0, -1);
    }
    if (i.charAt(i.length - 1) != KJE.Colon.trim()) {
      i += KJE.Colon;
    }
    var l = "";
    var b = "";
    var n = "";
    if (h) {
      l = h._bShow ? d.sToggleAltTextOpen : d.sToggleAltTextClose;
      b = h._bShow ? d.sToggleClose : d.sToggleOpen;
      n = h._bShow ? d.sExpanded : d.sCollapse;
    }
    var m = KJE.sToggleTitle;
    var c = "";
    var j = e.indexOf("|");
    var a = g || !h ? "" : d.sToggleIcon;
    if (g || !h) {
      b = "";
      l = "";
    }
    if (j > -1) {
      m = KJE.sToggleTitle2;
      c = e.substring(j + 1);
      e = e.substring(0, j);
    } else {
      if (!h || g) {
        m = KJE.sToggleTitleH2Only;
      }
    }
    if (h != null) {
      if (h.sExtraClass) {
        m = KJE.replace("**EXTRA_CLASS**", h.sExtraClass, m);
      }
    }
    return m
      .replace("**IMG_TEXT**", l)
      .replace("**SUMMARY_TEXT**", i)
      .replace("**TITLE_TEXT**", e)
      .replace("**TITLE_TEXT**", e)
      .replace("**TITLE_TEXT2**", c)
      .replace("**ICON**", b)
      .replace("**IMG**", a)
      .replace("**TITLE_CLASS**", d.sToggleTitleClass)
      .replace("**TITLE_CLASS**", d.sToggleTitleClass)
      .replace("**EXPANDED**", n);
  };
  KJE.setDropBox = function (c, b) {
    b = b + "";
    for (var a = 0; a < c.options.length; a++) {
      if (c.options[a].value == b) {
        c.options[a].selected = true;
        break;
      }
    }
    return a;
  };
  KJE.getDropBox = function (f, g, d, h, b) {
    b = b ? ' class="' + b + '" ' : "";
    h = h ? h : d;
    var e = h.length;
    var a = d.length;
    var k = "<select name=" + f + " id=KJE-" + f + b + ">";
    for (var c = 0; c < a; c++) {
      var j = d[c] == g ? " selected='selected' " : "";
      k += "<option value='" + d[c] + "' " + j + ">" + (c >= e ? d[c] : h[c]);
    }
    k += "</select>";
    if (KJE.InputModern) {
      k = "<div id=KJE-" + f + b + "Div >" + k + "</div>";
    }
    return k;
  };
  KJE.getTermChoice = function (l, k, e, h, b, m, g, d, o, f) {
    var q = new Array();
    var p = new Array();
    if (f) {
    } else {
      f = KJE.Default.MortgageTermIncrement;
    }
    m = m ? m : "";
    g = g ? g : false;
    o = o ? o : 1;
    var a = 0;
    var j = KJE.parameters.get("TERM_SHOW_ADDITIONAL", 7);
    for (var c = o; c <= h; c++) {
      if ((e && c <= b) || c % f == 0 || c == j) {
        if ((j == 0 && (c == 5 || c == 25 || c == 35)) == false) {
          q[a] =
            c +
            " " +
            (c == 1 ? KJE.MSG_YEAR_LBL : KJE.MSG_YEARS_LBL) +
            (c > b ? m : "");
          p[a] = c;
          a++;
        }
      }
    }
    if (d) {
      return KJE.getDropBox(l, k, p, q, g);
    } else {
      return { d: q, v: p };
    }
  };
  KJE.getMortgageTermChoice = function (b, c, d) {
    var a = KJE;
    return a.getTermChoice(
      b,
      c,
      a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageShowAll),
      a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageTermMax),
      a.parameters.get("MORTGAGE_SHOW_MAX", a.Default.MortgageShowAllMax),
      "",
      false,
      d,
      a.parameters.get("MORTGAGE_TERM_MIN", a.Default.MortgageTermMin)
    );
  };
  KJE.getMortgageTermDrop = function (a, b) {
    return KJE.getMortgageTermChoice(a, b, true);
  };
  KJE.getMortgageTermList = function () {
    return KJE.getMortgageTermChoice("", 0, false);
  };
  KJE.insertAfter = function (b, a) {
    a.parentNode.insertBefore(b, a.nextSibling);
  };
  KJE.hasClass = function (b, a) {
    return (" " + b.className + " ").indexOf(" " + a + " ") > -1;
  };
  KJE.isInDroppee = function (b) {
    var a = b.parentNode;
    if (a) {
      if (KJE.hasClass(a, "KJEDroppee")) {
      } else {
        a = a.parentNode;
        if (a) {
          if (KJE.hasClass(a, "KJEDroppee")) {
            return a;
          }
        }
      }
    }
    return a;
  };
  KJE.iGraphFixedWidth = 0;
  KJE.gScaleLabel = ["", "Thousands of ", "Millions of ", "Billions of "];
  KJE.gScaleLabelMax = [0, 100000, 100000000, 100000000000];
  KJE.gScaleLabelFactor = [1, 1000, 1000000, 1000000000];
  KJE.gFont = [];
  KJE.gFontStyle = [];
  KJE.gFontSize = [];
  KJE.gFontDefault = ["Arial", "Arial", "Arial", "Arial", "Arial", "Arial"];
  KJE.gFontStyleDefault = ["bold", "bold", "", "", "bold", ""];
  KJE.gFontSizeDefault = [13, 11, 11, 11, 11, 9];
  KJE.g = new Object();
  KJE.g.sToggleAltTextClose = "";
  KJE.g.sToggleAltTextOpen = "";
  KJE.g.sNewGraphPleaseComplete = "please complete inputs to view graph";
  KJE.g.sToggleTitleClass = "KJEGraphTitle";
  KJE.g.sToggleIcon = "KJEGraphIcon";
  KJE.g.sToggleOpen = "<div class='KJEToggleOpen' aria-hidden='true'></div>";
  KJE.g.sToggleClose = "<div class='KJEToggleClose' aria-hidden='true'></div>";
  KJE.g.sExpanded = "";
  KJE.g.sCollapse = "";
  KJE.g.sExpand = "aria-expanded";
  KJE.gHeight = 350;
  KJE.gHeightReport = 350;
  KJE.gWidthMax = 900;
  KJE.gWidthReport = 720;
  KJE.gLegendMin = 550;
  KJE.gLegendFontMin = 400;
  KJE.gColorBackground = "#FFFFFF";
  KJE.gColorForeground = "#333333";
  KJE.gColorGrid = "#AAAAAA";
  KJE.gColorGridBackground1 = "#f7f7f7";
  KJE.gColorGridBackground2 = "#f7f7f7";
  KJE.gColorAxisLine = "#333333";
  KJE.gColorText = "#000000";
  KJE.gColorList = [
    "#158f8f",
    "#1CBDBD",
    "#77b800",
    "#FFF200",
    "#5f007f",
    "#F15A22",
    "#B72467",
    "#6DC8BF",
    "#FF0000",
    "#ff00ff",
    "#ffff00",
    "#00ffff",
    "#7f007f",
    "#7f0000",
    "#007f7f",
    "#0000ff",
    "#00c8ff",
    "#bfffbf",
    "#ffff90",
    "#a0c8ef",
    "#7cff7c" 
    
  ];
  KJE.gPleaseComplete = "";
  KJE.gWidthAdjust = 0;
  KJE.gPIE = 0;
  KJE.gCOLUMN = 1;
  KJE.gCATEGORIES = 2;
  KJE.gSTACKED = 3;
  KJE.gLINE = 4;
  KJE.gGraphDescription = [
    "Pie Chart",
    "Column Graph",
    "Column Graph",
    "Stacked Column Graph",
    "Line Graph",
  ];
  KJE.gGetFontHeight = function (a) {
    return Math.ceil(a.measureText("m").width + 2);
  };
  KJE.gDarker = function (d, h) {
    if (d[0] == "#") {
      d = d.slice(1);
    }
    var c = parseInt(d, 16);
    var f = (c >> 16) * h;
    if (f > 255) {
      f = 255;
    } else {
      if (f < 0) {
        f = 0;
      }
    }
    var a = ((c >> 8) & 255) * h;
    if (a > 255) {
      a = 255;
    } else {
      if (a < 0) {
        a = 0;
      }
    }
    var e = (c & 255) * h;
    if (e > 255) {
      e = 255;
    } else {
      if (e < 0) {
        e = 0;
      }
    }
    return (
      "rgb(" + Math.floor(f) + "," + Math.floor(a) + "," + Math.floor(e) + ")"
    );
  };
  KJE.MSG_ADA_GRAPH_TEXT =
    "Please use the calculator's report to see detailed calculation results in tabular form.";
  KJE.MSG_ADA_REPORTGRAPH_TEXT =
    "Results shown are available in tabular form on tables that follow this image.";
  KJE.MSG_ADA_GRAPH_SPAN =
    "<span class=KJEAccessible id='KJE-F-GRAPH**X**_TITLE'>**FIG_GRAPHTITLE**</span> **FIG_GRAPHTYPE**: **FIG_ADA_GRAPH_TEXT**";
  KJE.MSG_ADA_GRAPH_ARIA_LABEL =
    "**FIG_GRAPHTYPE**: **FIG_GRAPHTITLE**: **FIG_ADA_GRAPH_TEXT**";
  KJE.MSG_GRAPH_CANVAS =
    "<div id=KJE-C-GRAPH**X** class='KJEGraphCanvasContainer'><canvas id=KJE-G-GRAPH**X** class=KJEGraphCanvas aria-label='**FIG_GRAPHTITLE**' role='img'></canvas></div>";
  KJE.MSG_ADA_GRAPH =
    "<figure class=KJEAdaGraphFigure><figcaption id='KJE-F-GRAPH**X**' class=KJEAccessible>**MSG_ADA_GRAPH_SPAN**</figcaption>**GRAPH**</figure>";
  KJE.getGraphCode = function (b) {
    var a = KJE;
    var c = a.replace(a.MSG_GRAPH, a.MSG_GRAPH_CANVAS, a.MSG_ADA_GRAPH);
    return a.replace("**X**", b + "", c);
  };
  KJE.gTitle = new Object();
  KJE.gGraphLine = new Object();
  KJE.gAxis = new Object();
  KJE.gGraphColumn = new Object();
  KJE.gGraphPie = new Object();
  KJE.gTitle.HORIZONTAL = 0;
  KJE.gTitle.VERTICAL = 1;
  KJE.gLegend = new Object();
  KJE.gLegend.LEFT = 0;
  KJE.gLegend.RIGHT = 1;
  KJE.gLegend.TOP = 3;
  KJE.gLegend.BOTTOM = 4;
  KJE.gLegend.TOP_LEFT = 5;
  KJE.gLegend.TOP_RIGHT = 6;
  KJE.gLegend.BOTTOM_LEFT = 7;
  KJE.gLegend.BOTTOM_RIGHT = 8;
  KJE.gLegend.GRID_TOP_RIGHT = 9;
  KJE.gLegend.GRID_TOP_LEFT = 10;
  KJE.gLegend.GRID_BOTTOM_RIGHT = 11;
  KJE.gLegend.GRID_BOTTOM_LEFT = 12;
  KJE.gLegend.GRID_TOP = 13;
  KJE.gLegend.GRID_BOTTOM = 14;
  KJE.gLegend.GRID_RIGHT = 15;
  KJE.gLegend.GRID_LEFT = 16;
  KJE.gLegend.TOP_GRID_ALIGN = 17;
  KJE.gLegend.BANDED_LEGEND = 0;
  KJE.gLegend.DATA_SERIES_LEGEND = 1;
  KJE.gLegend.CATEGORY_LEGEND = 2;
  KJE.gLegend.ROUND_LEGEND = 0;
  KJE.gLegend.SQUARE_LEGEND = 1;
  KJE.gLegend._sSHADOW_COLOR = "";
  KJE.gTITLE_FONT = 0;
  KJE.gBOLD_FONT = 1;
  KJE.gPLAIN_FONT = 2;
  KJE.gLEGEND_FONT = 3;
  KJE.gLEGEND_FONT_BOLD = 4;
  KJE.gLEGEND_FONT_TINY = 5;
  KJE.gSCALE = 2;
  KJE.ggetFont = function (b, c) {
    var a = KJE;
    var d = a.gFontSize.length <= b ? a.gFontSizeDefault[b] : a.gFontSize[b];
    var e = a.gFont.length <= b ? a.gFontDefault[b] : a.gFont[b];
    var f = a.gFontStyle.length <= b ? a.gFontStyleDefault[b] : a.gFontStyle[b];
    if (a.gFontStyle.length <= b) {
    } else {
    }
    return f + " " + Math.floor(a.gSCALE * d) + "pt " + e.trim();
  };
  KJE.gBORDER_WIDTH = 10 * KJE.gSCALE;
  KJE.gLegend._iSIDE_BORDER_WIDTH = 14 * KJE.gSCALE;
  KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH = 3 * KJE.gSCALE;
  KJE.gLegend._iBOX_SIDE_LENGTH = 14 * KJE.gSCALE;
  KJE.gLegend._iCIR_SIDE_LENGTH = 10 * KJE.gSCALE;
  KJE.gLegend._iBOX_TO_LABEL_SPACE = 4 * KJE.gSCALE;
  KJE.gLegend._sSHADOW_BLUR_X = 0;
  KJE.gLegend._sSHADOW_BLUR_Y = 0;
  KJE.gLegend._LINE_WIDTH = KJE.gSCALE;
  KJE.gLegend._LINE_SPACE = 12 * KJE.gSCALE;
  KJE.gLegend._PAD = KJE.gSCALE * 4;
  KJE.gGraphPie._LINE_WIDTH = KJE.gSCALE * 4;
  KJE.gGraphPie._FLAT = true;
  KJE.gGraphPie._DROP_SHADOW = false;
  KJE.gGraphLine._CLICKABLE = 7 * KJE.gSCALE;
  KJE.gGraphLine._sSHADOW_BLUR = 0;
  KJE.gGraphLine._LINE_WIDTH = 3 * KJE.gSCALE;
  KJE.gGraphLine._sSHADOW_BLUR_X = 0;
  KJE.gGraphLine._sSHADOW_BLUR_Y = 0;
  KJE.gGraphColumn._LINE_WIDTH = KJE.gSCALE * 2;
  KJE.giGridLineWidth = KJE.gSCALE;
  KJE.gAxis.TICK_LENGTH = 3 * KJE.gSCALE;
  KJE.gAxis.LABEL_SPACE_LENGTH = 5 * KJE.gSCALE;
  KJE.gAxis.LINE_WIDTH = KJE.gSCALE * 1;
  KJE.gAxis.LEFT = 0;
  KJE.gAxis.RIGHT = 1;
  KJE.gAxis.TOP = 3;
  KJE.gAxis.BOTTOM = 4;
  KJE.gGraphColumn.LINE_NONE = 0;
  KJE.gGraphColumn.LINE_ON_FIRST_ONLY = 2;
  KJE.gGraphColumn.LINE_ON_ALL = 3;
  KJE.gGraphColumn._sSHADOW_COLOR = "";
  KJE.gGraphColumn._sSHADOW_BLUR = 0;
  KJE.gGraphColumn._sSHADOW_BLUR_X = 0;
  KJE.gGraphColumn._sSHADOW_BLUR_Y = 0;
  KJE.gGraphPie._LINE_JOIN = "round";
  KJE.gGraphPie._LINE_COLOR = "#000000";
  KJE.gGraphLine.AREA_NONE = 0;
  KJE.gGraphLine.AREA_ALL = 1;
  KJE.gGraphLine.AREA_FIRST_ONLY = 2;
  KJE.gGraphLine.AREA_SECOND_ONLY = 3;
  KJE.gGraphLine.AREA_BANDED = 4;
  KJE.gGraphLine._sSHADOW_COLOR = "";
  KJE.sgvStr = function (a) {
    if (a == null) {
      return null;
    }
    return a
      .replace(/%%/g, '"')
      .replace(/@@/g, "|")
      .replace(/\^\^/g, ",")
      .replace(/!!/, "~");
  };
  KJE.spvStr = function (a) {
    if (a == null) {
      return null;
    }
    if (a.replace) {
      return a
        .replace(/"/g, "%%")
        .replace(/\|/g, "@@")
        .replace(/,/g, "^^")
        .replace(/~/g, "!!");
    } else {
      return a;
    }
  };
  KJE.spvColor = function (a) {
    if (!a) {
      return "#000000";
    }
    return a;
  };
  KJE.sgvColor = function (a) {
    if (!a) {
      return "#000000";
    }
    return a;
  };
  KJE.sgv = function (b, a) {
    if (b == null) {
      return a;
    } else {
      if (b == "null") {
        return a;
      } else {
        if (b == " ") {
          return a;
        } else {
          if (typeof a == "string") {
            return KJE.sgvStr(b);
          } else {
            if (typeof a == "boolean") {
              if (b == "") {
                return a;
              }
              return b.trim() == "true";
            } else {
              if (typeof a == "number") {
                return parseFloat(b);
              }
            }
          }
        }
      }
    }
  };
  KJE.sgvNumList = function (d) {
    if (d == null) {
      return null;
    } else {
      if (d == "null") {
        return null;
      } else {
        if (d.trim() == "") {
          return null;
        } else {
          var b = d.split(",");
          var a = KJE.FloatArray(b.length);
          for (var c = 0; c < b.length; c++) {
            a[c] = parseFloat(b[c]);
          }
        }
      }
    }
    return a;
  };
  KJE.sgvStrList2 = function (d) {
    var a = [];
    if (d == null) {
      a = null;
    } else {
      if (d == "null") {
        a = null;
      } else {
        if (d.trim() == "") {
          a = null;
        } else {
          var c = d.split("~");
          for (var b = 0; b < c.length; b++) {
            a[b] = KJE.sgvStrList(c[b]);
          }
        }
      }
    }
    return a;
  };
  KJE.sgvStrList = function (d) {
    var a = [];
    if (d == null) {
      a = null;
    } else {
      if (d == "null") {
        a = null;
      } else {
        if (d.trim() == "") {
          a = null;
        } else {
          var c = d.split(",");
          for (var b = 0; b < c.length; b++) {
            a[b] = KJE.sgvStr(c[b]);
          }
        }
      }
    }
    return a;
  };
  KJE.spvStringList2 = function (d) {
    var a = KJE;
    if (d == null) {
      return "null";
    }
    var c = a.spvStringList(d[0]);
    for (var b = 1; b < d.length; b++) {
      c += "~" + a.spvStringList(d[b]);
    }
    return c;
  };
  KJE.spvStringList = function (d) {
    var a = KJE;
    if (d == null) {
      return "null";
    }
    var c = a.spvStr(d[0]);
    for (var b = 1; b < d.length; b++) {
      c += "," + a.spvStr(d[b]);
    }
    return c;
  };
  KJE.spvColorList = function (d) {
    var a = KJE;
    if (d == null) {
      return "null";
    }
    var c = a.spvStr(d[0]);
    for (var b = 1; b < d.length; b++) {
      c += "," + a.spvColor(d[b]);
    }
    return c;
  };
  KJE.spvFloatList = function (e, d) {
    var a = KJE;
    if (e == null) {
      return "null";
    }
    var c = "" + a.input(e[0], d);
    for (var b = 1; b < e.length; b++) {
      c += "," + a.input(e[b], d);
    }
    return c;
  };
  KJE.gNewGraph = function (f, i, a, e, k, g, h, b) {
    var c = document.getElementById("KJE-C-" + i);
    if (c) {
      var j = KJE;
      e = !j.parameters.get("GRAPH_OPEN" + Math.floor(j.gGraphs.length + 1), !e);
      var d = (j.gGraphs[j.gGraphs.length] = new j.gCanvas(
        c,
        f,
        i,
        a,
        e,
        k,
        g,
        h,
        b
      ));
      if (f == j.gPIE || f == j.gCATEGORIES) {
        d._bPopDetail = false;
      }
      if (f == j.gSTACKED || f == j.gLINE || f == j.gPIE) {
        d._showItemLabelOnTop = false;
      }
      return d;
    } else {
      return null;
    }
  };
  KJE.gCanvas = function (c, g, o, b, e, q, j, l, a) {
    var k = this;
    k.sGraphName = o;
    k._titleGraphFigure = null;
    var p = KJE;
    var n = (k.wCanvas = document.getElementById("KJE-G-" + o));
    k._bPopDetail = true;
    k._bPopCat = true;
    k.wContainer = c;
    k.wContainer.className = "KJEGraphContainer";
    k.wCanvas.className = "KJEGraph";
    k.wContainer.style.transition = p.DropeeTransition;
    k._ctx = null;
    k.InCalculator = l ? false : true;
    k.bBorder = a ? false : true;
    k.sTitle = j;
    k.TT = j;
    k.bTitleInitialized = false;
    k._sGraphType = g;
    k._gtGraphType = new p.gType(g);
    var d = (k.fFigureCaption = document.getElementById("KJE-F-" + o));
    if (d) {
      d.innerHTML = p.replace(
        "GRAPH**X**",
        o,
        p.replace(
          "**FIG_GRAPHTYPE**",
          KJE.gGraphDescription[g],
          p.replace(
            "**FIG_ADA_GRAPH_TEXT**",
            p.MSG_ADA_GRAPH_TEXT,
            p.MSG_ADA_GRAPH_SPAN
          )
        )
      );
    }
    var h = c.clientWidth;
    k.FONT_TITLE = p.ggetFont(p.gTITLE_FONT, h);
    k.FONT_BOLD = p.ggetFont(p.gBOLD_FONT, h);
    k.FONT_PLAIN = p.ggetFont(p.gPLAIN_FONT, h);
    k.FONT_LEGEND = p.ggetFont(p.gLEGEND_FONT, h);
    k.FONT_LEGEND_BOLD = p.ggetFont(p.gLEGEND_FONT_BOLD, h);
    k.FONT_LEGEND_TINY = p.ggetFont(p.gLEGEND_FONT_TINY, h);
    k._legend = new p.gGraphLegend(p.gLegend.RIGHT, this);
    k._grid = new p.gGrid(this);
    k._axisY = new p.gValueAxis(this);
    k._axisX = new p.gCategoryAxis(this);
    k._titleGraph = new p.gGraphTitle(k.sTitle);
    k._titleXAxis = new p.gGraphTitle("");
    k._titleYAxis = new p.gGraphTitle(p.sCurrency);
    k._titleYAxis._iOrientation = p.gTitle.VERTICAL;
    k._vDataSeries = new Array();
    k._showItemLabel = false;
    k._showItemLabelFmt = p.FMT_DOLLARS;
    k._showItemLabelDecimals = k._iLimit = 0;
    k._showItemLabelOnTop = k._showLabelFactor = true;
    k._iArea = p.gGraphLine.AREA_NONE;
    k._cGrid = p.gColorGrid;
    k._cGridBackground1 = p.gColorGridBackground1;
    k._cGridBackground2 = p.gColorGridBackground2;
    k._cAxisLine = p.gColorAxisLine;
    k._cTextColor = p.gColorText;
    k._sGraphCategories =
      k._sGraphCategoriesBold =
      k._sValueLabels =
      k._showItemValues =
        null;
    k._colorList = p.gColorList;
    k._iDataSeriesCount = 0;
    if (b) {
      var m = (k.wTitle = document.createElement("DIV"));
      m.className =
        k.InCalculator && k.bBorder ? "KJEGraphDropper" : "KJEDropperReport";
      if (k.InCalculator) {
        m.setAttribute("role", "button");
        m.tabIndex = "0";
      }
      c.insertBefore(m, n);
    }
    if (k.wTitle && !l) {
      k.wTitle.addEventListener(
        "click",
        function (i) {
          k.toggle();
        },
        false
      );
      k.wTitle.addEventListener(
        "keypress",
        function (i) {
          if (i.keyCode == 32 || i.keyCode == 13) {
            return KJE.Dropper.stopBubble(i);
          }
        },
        false
      );
      k.wTitle.addEventListener(
        "keydown",
        function (i) {
          if (i.keyCode == 32 || i.keyCode == 13) {
            k.toggle();
            return KJE.Dropper.stopBubble(i);
          }
        },
        false
      );
    }
    if (n) {
      var f = k._gtGraphType;
      n.addEventListener(
        "click",
        function (t) {
          var i = KJE.getMouseCoord(t, n);
          var r = f.getWedgeValue(i.x, i.y);
          if (r) {
            KJE.DataPointShow(t, r.s, r.x, r.y, n);
          }
        },
        false
      );
      n.addEventListener(
        "mousemove",
        function (t) {
          var i = KJE.getMouseCoord(t, n);
          var r = f.getWedgeValue(i.x, i.y);
          if (r) {
            KJE.DataPointShow(t, r.s, r.x, r.y, n);
          }
        },
        false
      );
    }
    k.setBackground(q);
    this.setHeight();
    this.setWidth();
    k.wCanvas.style.overflow = "hidden";
    k.wCanvas.style.display = "block";
    k.show(!e, k.sTitle);
  };
  KJE.gCanvas.prototype.setShown = function (b) {
    var a = this;
    a.wContainer.style.display = "block";
    a.wContainer.style.width = "100%";
    this.setHeight(false);
    this.setWidth(true);
  };
  KJE.gCanvas.prototype.getFigureTitle = function () {
    return this.titleGraphFigure;
  };
  KJE.gCanvas.prototype.setAriaRole = function (c, e) {
    var a = KJE;
    var d = a.MSG_ADA_REPORTGRAPH_TEXT;
    if (e) {
      d = a.MSG_ADA_GRAPH_TEXT;
    }
    this.wCanvas.setAttribute("alt", a.gGraphDescription[this._sGraphType]);
    this.wCanvas.setAttribute("role", "img");
    var b = a.replace(
      "**FIG_GRAPHTYPE**",
      a.gGraphDescription[this._sGraphType],
      a.replace(
        "**FIG_GRAPHTITLE**",
        c ? c : "",
        a.replace("**FIG_ADA_GRAPH_TEXT**", d, a.MSG_ADA_GRAPH_ARIA_LABEL)
      )
    );
    if (b == "") {
      b = "Graph will be available when all required entries are entered.";
    }
    this.wCanvas.setAttribute("aria-label", b);
  };
  KJE.gCanvas.prototype.setHidden = function (b) {
    var a = this;
    a.wContainer.style.display = "none";
  };
  KJE.gCanvas.prototype.setTitle = function (a) {
    this.sTitle = a;
  };
  KJE.gCanvas.prototype.toggle = function () {
    if (KJE.Error || KJE.InComplete) {
      return;
    }
    if (KJE.inCommandTask(true)) {
      return;
    }
    var b = this;
    var c = b.wCanvas;
    var a = 0;
    if (this._bShow) {
      this._bShow = false;
      this.show(false);
    } else {
      setTimeout(function () {
        this._bShow = true;
        b.show(true);
        b.paint(null, true);
      }, 25);
    }
    setTimeout(function () {
      KJE.inCommandTask(false);
    }, 500);
  };
  KJE.gCanvas.prototype.show = function (b, a) {
    if (this.wTitle) {
      var c = this;
      c._bShow = b;
      var d = c.wTitle;
      d.innerHTML = KJE.setToggleTitleText(
        a ? a : this._titleGraph.s,
        c,
        KJE.g,
        !this.InCalculator
      );
      if (b) {
        if (this.InCalculator) {
          d.setAttribute(KJE.g.sExpand, "true");
        }
        this.setWidth();
        this.setHeight();
      } else {
        if (this.InCalculator) {
          d.setAttribute(KJE.g.sExpand, "false");
        }
        c.wCanvas.style.height = "0px";
      }
      if (this.InCalculator) {
      }
    }
  };
  KJE.gCanvas.prototype.setProperty = function (d) {
    var b = d.split("|");
    var a = KJE.sgv;
    var e = KJE.sgvStrList;
    var c = this;
    c.removeAll();
    for (var f = 0; f < b.length; f++) {
      switch (f) {
        case 0:
          if (b[f] != c._gtGraphType._iGraphType) {
            this._gtGraphType = new KJE.gType(b[f]);
          }
          break;
        case 1:
          c._showItemLabel = a(b[f], c._showItemLabel);
          break;
        case 2:
          c._showItemLabelFmt = a(b[f], c._showItemLabelFmt);
          break;
        case 3:
          c._showItemLabelDecimals = a(b[f], c._showItemLabelDecimals);
          break;
        case 4:
          c._showItemLabelOnTop = a(b[f], c._showItemLabelOnTop);
          break;
        case 5:
          c._iArea = a(b[f], c._iArea);
          break;
        case 6:
          c._cBackground = a(b[f], c._cBackground);
          break;
        case 7:
          c._cGrid = a(b[f], c._cGrid);
          break;
        case 8:
          c._cGridBackground1 = a(b[f], c._cGridBackground1);
          break;
        case 9:
          c._cGridBackground2 = a(b[f], c._cGridBackground2);
          break;
        case 10:
          c._cAxisLine = a(b[f], c._cAxisLine);
          break;
        case 11:
          c._cTextColor = a(b[f], c._cTextColor);
          break;
        case 12:
          c._iLimit = a(b[f], c._iLimit);
          break;
        case 13:
          c._sGraphCategories = e(b[f]);
          break;
        case 14:
          c._sGraphCategoriesBold = e(b[f]);
          break;
        case 15:
          c._sValueLabels = e(b[f]);
          break;
        case 16:
          c._colorList = e(b[f]);
          break;
        case 17:
          c._showItemValues = a(b[f], c._showItemValues);
          break;
        case 18:
          c._bPopDetail = a(b[f], c._bPopDetail);
          break;
        case 19:
          c._bPopCat = a(b[f], c._bPopCat);
          break;
        case 20:
          c._showLabelFactor = a(b[f], c._showLabelFactor);
          break;
      }
    }
  };
  KJE.gCanvas.prototype.getProperty = function () {
    var c = KJE.spvStringList;
    var b = this;
    var a = KJE;
    return (
      b._gtGraphType._iGraphType +
      "|" +
      b._showItemLabel +
      "|" +
      b._showItemLabelFmt +
      "|" +
      b._showItemLabelDecimals +
      "|" +
      b._showItemLabelOnTop +
      "|" +
      b._iArea +
      "|" +
      a.spvColor(b._cBackground) +
      "|" +
      a.spvColor(b._cGrid) +
      "|" +
      a.spvColor(b._cGridBackground1) +
      "|" +
      a.spvColor(b._cGridBackground2) +
      "|" +
      a.spvColor(b._cAxisLine) +
      "|" +
      a.spvColor(b._cTextColor) +
      "|" +
      b._iLimit +
      "|" +
      c(b._sGraphCategories) +
      "|" +
      c(b._sGraphCategoriesBold) +
      "|" +
      c(b._sValueLabels) +
      "|" +
      a.spvColorList(b._colorList) +
      "|" +
      a.spvStringList2(b._showItemValues) +
      "|" +
      b._bPopDetail +
      "|" +
      b._bPopCat +
      "|" +
      b._showLabelFactor
    );
  };
  KJE.gCanvas.prototype.getColor = function (a) {
    a -= 1;
    a %= this._colorList.length;
    return this._colorList[a];
  };
  KJE.gCanvas.prototype.blank = function () {
    this.removeAll();
    this.paint();
    if (this.wTitle) {
      this.setTitleGraph(KJE.gPleaseComplete);
    }
  };
  KJE.gCanvas.prototype.getDataSeriesCount = function () {
    return this._iDataSeriesCount;
  };
  KJE.gCanvas.prototype.getDataProperties = function () {
    var a = "";
    for (var b = 0; b < this._iDataSeriesCount; b++) {
      a += "|" + this._vDataSeries[b].getProperty();
    }
    return a.substring(1);
  };
  KJE.gCanvas.prototype.getValueCount = function () {
    var b = this._iDataSeriesCount;
    var a = this._iLimit;
    var c = 0;
    while (b) {
      c = this._vDataSeries[b - 1].getValueCount();
      if (a > c || a == 0) {
        a = c;
      }
      b--;
    }
    return a;
  };
  KJE.gCanvas.prototype.getMinValue = function () {
    if (this._vDataSeries == null) {
      return 0;
    }
    var a = this._vDataSeries[0].getMinValue(this._iLimit);
    var b = a;
    for (var c = 1; c < this._iDataSeriesCount; c++) {
      b = this._vDataSeries[c].getMinValue(this._iLimit);
      if (b < a) {
        a = b;
      }
    }
    return a;
  };
  KJE.gCanvas.prototype.getMaxValue = function () {
    if (this._vDataSeries == null) {
      return 0;
    }
    var d = 0;
    var f = 0;
    if (this._gtGraphType._iGraphType == KJE.gSTACKED) {
      var c = new Array();
      for (var a = 0; a < this._vDataSeries.length; a++) {
        var b = this._vDataSeries[a]._fValues;
        for (var e = 0; e < b.length; e++) {
          c[e] = b[e] + (c[e] ? c[e] : 0);
        }
      }
      return Math.max.apply(Math, c);
    } else {
      d = this._vDataSeries[0].getMaxValue(this._iLimit);
      f = d;
      for (e = 1; e < this._iDataSeriesCount; e++) {
        f = this._vDataSeries[e].getMaxValue(this._iLimit);
        if (f > d) {
          d = f;
        }
      }
      return d;
    }
  };
  KJE.gCanvas.prototype.add = function (c) {
    if (c == null) {
    } else {
      if (typeof c == "string") {
        if (c.trim() == "") {
        } else {
          var a = c.split("|");
          for (var b = 0; b < a.length; b++) {
            this._vDataSeries[this._iDataSeriesCount] = new KJE.gGraphDataSeries(
              a[b],
              null,
              null,
              null
            );
            this._vDataSeries[this._iDataSeriesCount].gCanvasPointer = this;
            this._iDataSeriesCount++;
          }
        }
      } else {
        this._vDataSeries[this._iDataSeriesCount] = c;
        this._vDataSeries[this._iDataSeriesCount].gCanvasPointer = this;
        this._iDataSeriesCount++;
      }
    }
  };
  KJE.gCanvas.prototype.removeAll = function () {
    this._vDataSeries = new Array();
    this._iDataSeriesCount = 0;
    this._iLimit = 0;
    this._gtGraphType.syncSetup(this);
    this._legend._cBGColor = null;
  };
  KJE.gCanvas.prototype.paint = function (e, c) {
    if (this.sTitle) {
      this.setTitleGraph(this.sTitle);
    }
    if (!this.wCanvas.getContext) {
      return;
    }
    if (!c) {
      if (!this._bShow) {
        return;
      }
    }
    var b = this.wCanvas.getContext("2d");
    if (b.canvas.width == 0 || b.canvas.height == 0) {
      return;
    }
    if (b) {
      this._ctx = b;
    }
    var a = this._ctx.canvas.width;
    var d = this._ctx.canvas.height;
    if (this._iDataSeriesCount != 0) {
      b.fillStyle = this._cBackground;
      b.fillRect(0, 0, a, d);
      this._gtGraphType.paint(this._ctx, a, d);
    } else {
      b.fillStyle = this._cBackground;
      b.fillRect(0, 0, a, d);
    }
  };
  KJE.gCanvas.prototype.setGraphCategories = function (a) {
    this._sGraphCategories = a;
  };
  KJE.gCanvas.prototype.setBackground = function (a) {
    this.wContainer.style.backgroundColor = a;
    this._cBackground = a;
  };
  KJE.gCanvas.prototype.setWidth = function (c, b) {
    bForceWidth = b ? true : false;
    var a = 0;
    if (!bForceWidth) {
      this.wContainer.style.width = "100%";
      a = this.wContainer.clientWidth;
      if (!a) {
        a = KJE.CalculatorWidth;
      }
    } else {
      a = b;
    }
    if (a > KJE.gWidthMax && !this.InCalculator) {
      a = KJE.gWidthMax;
    }
    a -= KJE.gWidthAdjust;
    this.wCanvas.style.width = a + "px";
    this.wCanvas.width = a * KJE.gSCALE;
    this.iWidth = a;
    if (c) {
      this.paint();
    }
  };
  KJE.gCanvas.prototype.setHeight = function (c) {
    if (!this.InCalculator) {
      this.setCanvasHeight(c, KJE.gHeightReport);
    } else {
      if (KJE.bSidebySideViewing) {
        var b = 0;
        var a = 0;
        for (var d = 0; d < KJE.gGraphs.length; d++) {
          if (KJE.gGraphs[d]._bShow) {
            b++;
            a += KJE.gGraphs[d].wTitle.clientHeight;
          }
        }
        iHeight = KJE.iDropperHeights() - a;
        if (b > 1) {
          iHeight = Math.round(iHeight / b);
        }
        if (KJE.gHeight > iHeight) {
          iHeight = KJE.gHeight;
        }
        for (var d = 0; d < KJE.gGraphs.length; d++) {
          KJE.gGraphs[d].setCanvasHeight(true, iHeight);
        }
      } else {
        this.setCanvasHeight(c, KJE.gHeight);
      }
    }
  };
  KJE.gCanvas.prototype.setCanvasHeight = function (a, b) {
    if (this._bShow) {
      this.wCanvas.style.height = b + "px";
    }
    this.iGraphHeight = b;
    this.wCanvas.height = b * KJE.gSCALE;
    if (a) {
      this.paint(null, true);
    }
  };
  KJE.gCanvas.prototype.getBackground = function () {
    return this._cBackground;
  };
  KJE.gCanvas.prototype.setTitleGraph = function (c) {
    var b = this;
    if (!(b._titleGraph.s == c) || !b.bTitleInitialized) {
      if (b.wTitle) {
        b.wTitle.innerHTML = KJE.setToggleTitleText(c, b, KJE.g, !b.InCalculator);
      }
      b._titleGraph.setText(c);
      if (b._titleGraphFigure == null) {
        b._titleGraphFigure = document.getElementById(
          "KJE-F-" + b.sGraphName + "_TITLE"
        );
      }
      if (b._titleGraphFigure) {
        var d = (c.indexOf("<") > 0 ? c.substring(0, c.indexOf("<")) : c).trim();
        if (d.substring(d.length - 1, d.length) === ".") {
          d = d.substring(0, d.length - 1);
        }
        b._titleGraphFigure.innerHTML = b.titleGraphFigure = d;
        b.setAriaRole(d, true);
      }
      var a = c.indexOf("<");
      var e = c;
      if (a > 0) {
        e = e.substring(0, a);
      } else {
        if (c.length > 100) {
          var a = c.indexOf(":");
          if (a > 0) {
            e = e.substring(0, a);
          }
          var a = c.indexOf(".");
          if (a > 0) {
            e = e.substring(0, a);
          }
        }
      }
      e = KJE.replace(
        "<div class='KJESubTitle'>",
        " ",
        KJE.replace("</div>", " ", e)
      ).trim();
      b.wTitle.setAttribute(
        "aria-label",
        e == "" ? "Empty Graph - required inputs not complete" : e
      );
    }
  };
  KJE.gCanvas.prototype.setTitleTemplate = function () {
    var b = this.TT;
    for (var a = 0; a < arguments.length; a++) {
      b = b.replace("KJE" + (a + 1), arguments[a]);
    }
    this.sTitle = b;
  };
  KJE.gCanvas.prototype.getFormat = function (c, g, b) {
    var e = "";
    var d = this;
    var f = d._showItemLabelFmt;
    var a = d._showItemValues;
    if (a == null) {
      e = KJE.format[f](
        c / (f == KJE.FMT_PERCENT && d._showLabelFactor ? 100 : 1),
        d._showItemLabelDecimals
      );
    } else {
      if (a.length > g) {
        if (a[g].length > b) {
          e = a[g][b];
        }
      }
    }
    return e;
  };
  KJE.gGraphDataSeries = function (i, p, k, l, g, j, d) {
    var h = this;
    h._iDecimals = d ? d : 2;
    var e = i instanceof Array;
    if (!e && KJE.TypedArray) {
      e = i instanceof Float64Array;
    }
    if (e) {
      h._fValues = i;
      h._sSeriesTitle = p;
      h._cColor = k;
      h._sSeriesTitleBold = !l ? "" : l;
      h._sSeriesPop = !g ? p : g;
      h._bNoPopDetails = j ? true : false;
    } else {
      var m = i.split("~");
      var o = m.length;
      var a = KJE.sgv;
      for (var b = 0; b < o; b++) {
        switch (b) {
          case 0:
            h._cColor = a(m[b], "#0000FF");
            break;
          case 1:
            h._sSeriesTitle = a(m[b], "");
            break;
          case 2:
            h._sSeriesTitleBold = a(m[b], "");
            break;
          case 3:
            h._fValues = KJE.sgvNumList(m[b]);
            break;
          case 4:
            h._sSeriesPop = a(m[b], h._sSeriesTitle);
            break;
          case 5:
            h._bNoPopDetails = a(m[b], false);
            break;
          case 6:
            h._iDecimals = a(m[b], 2);
            break;
        }
      }
    }
    h._sSeriesTitle = KJE.removeHTMLTags(h._sSeriesTitle);
    h._sSeriesTitleBold = KJE.removeHTMLTags(h._sSeriesTitleBold);
  };
  KJE.removeHTMLTags = function (c) {
    while (c) {
      var b = c.indexOf("<");
      var a = c.indexOf(">");
      if (b < a && b >= 0 && a > 0) {
        c = c.substr(0, b) + c.substr(a + 1, c.length - 1);
      } else {
        break;
      }
    }
    return c;
  };
  KJE.gGraphDataSeries.prototype.getProperty = function () {
    var a = KJE;
    var b = this._iDecimals + (this.gCanvasPointer._showLabelFactor ? 0 : 2);
    return (
      this._cColor +
      "~" +
      a.spvStr(this._sSeriesTitle) +
      "~" +
      a.spvStr(this._sSeriesTitleBold) +
      "~" +
      a.spvFloatList(this._fValues, b) +
      "~" +
      a.spvStr(this._sSeriesPop) +
      "~" +
      this._bNoPopDetails +
      "~" +
      KJE.number(this._iDecimals)
    );
  };
  KJE.gGraphDataSeries.prototype.getValueCount = function () {
    if (this._fValues == null) {
      return 0;
    }
    return this._fValues.length;
  };
  KJE.gGraphDataSeries.prototype.getMinValue = function (c) {
    var a = this._fValues;
    if (a == null) {
      return 0;
    }
    var b = a[0];
    var d = a.length;
    if (d > c && c != 0) {
      d = c;
    }
    for (var e = 1; e < d; e++) {
      if (b > a[e]) {
        b = a[e];
      }
    }
    return b;
  };
  KJE.gGraphDataSeries.prototype.getMaxValue = function (c) {
    var a = this._fValues;
    if (a == null) {
      return 0;
    }
    var d = a.length;
    if (d > c && c != 0) {
      d = c;
    }
    var b = a[0];
    for (var e = d - 1; e > 0; e--) {
      if (b < a[e]) {
        b = a[e];
      }
    }
    return b;
  };
  KJE.gGraphTitle = function (a) {
    var b = this;
    b._iOrientation = KJE.gTitle.HORIZONTAL;
    b.s = a;
    b.f = "11pt Helvetica";
    b.c = "#000000";
    b.bShow = true;
    b.sText = "";
  };
  KJE.gGraphTitle.prototype.setProperty = function (a) {
    this.setText(KJE.sgv(a, ""));
  };
  KJE.gGraphTitle.prototype.getProperty = function () {
    return KJE.spvStr(this.s);
  };
  KJE.gGraphTitle.prototype.paint = function (b, a, e, c, d) {
    b.font = this.f;
    b.fillStyle = this.c;
    b.shadowBlur = "";
    b.shadowColor = "";
    b.shadowOffsetX = "";
    b.shadowOffsetY = "";
    b.textAlign = "center";
    b.textBaseline = "middle";
    if (this._iWidth != 0) {
      if (this._iOrientation == KJE.gTitle.VERTICAL) {
        b.save();
        b.rotate(-Math.PI / 2);
        b.fillText(KJE.FTR(this.sText), -e - d / 2, a + c / 2);
        b.restore();
      } else {
        b.fillText(KJE.FTR(this.sText), a + c / 2, e + d / 2);
      }
    }
  };
  KJE.gGraphTitle.prototype.setText = function (a) {
    this.s = a;
  };
  KJE.gGraphTitle.prototype.setFont = function (a) {
    this.f = a;
  };
  KJE.gGraphTitle.prototype.setColor = function (a) {
    this.c = a;
  };
  KJE.gGraphTitle.prototype.setTitle = function (b, d) {
    var a = 0;
    var f = 0;
    var c = d || "";
    c += c == "" && this.s == KJE.sCurrency ? "" : this.s || "";
    if (c != "" && this.bShow) {
      b.font = this.f;
      var e = (f = KJE.gGetFontHeight(b) + 10);
      a = b.measureText(KJE.FTR(c)).width;
      if (this._iOrientation == KJE.gTitle.VERTICAL) {
        f = a;
        a = e;
      }
    }
    this.sText = c;
    this._iHeight = f;
    this._iWidth = a;
  };
  KJE.gGraphLegend = function (c, a) {
    this._gGraph = a;
    var b = this;
    b._iShape = KJE.gLegend.ROUND_LEGEND;
    b._iOrientation = c;
    b._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
    b._border = false;
    b._cBGColor = null;
    b._iLegendWidth = 0;
    b.LINE_SPACE = KJE.gLegend._LINE_SPACE;
    b._bShow = true;
    b._cColor = "#000000";
    b._iXOffset = 0;
    b._iYOffset = 0;
    b._iWidthOffset = 0;
    b._iHeightOffset = 0;
    b._iMaxLegendLength = 0;
    b._iWidth = 0;
    b._iHeight = 0;
    b._iFontHeight = 0;
    b._iColorBoxYOffset = 0;
    b._iLabelOffset = 0;
    b._iColorBoxOffset = 0;
    b._iBORDER_WIDTH = 0;
  };
  KJE.gGraphLegend.prototype.setProperty = function (d) {
    var b = d.split("|");
    var a = KJE.sgv;
    var c = this;
    for (var e = 0; e < b.length; e++) {
      switch (e) {
        case 0:
          c._cBGColor = a(b[e], c._cBGColor);
          break;
        case 1:
          c._iShape = a(b[e], c._iShape);
          break;
        case 2:
          c._iOrientation = a(b[e], c._iOrientation);
          break;
        case 3:
          c._border = a(b[e], c._border);
          break;
        case 4:
          c._iLegendWidth = a(b[e], c._iLegendWidth);
          break;
        case 5:
          c.LINE_SPACE = a(b[e], c.LINE_SPACE);
          break;
        case 6:
          c._bShow = a(b[e], c._bShow);
          break;
      }
    }
  };
  KJE.gGraphLegend.prototype.getProperty = function () {
    var a = this;
    if (a._cBGColor == null) {
      a._cBGColor = a._gGraph.getBackground();
    }
    return (
      a._cBGColor +
      "|" +
      a._iShape +
      "|" +
      a._iOrientation +
      "|" +
      a._border +
      "|" +
      a._iLegendWidth +
      "|" +
      a.LINE_SPACE +
      "|" +
      a._bShow
    );
  };
  KJE.gGraphLegend.prototype.setVisible = function (a) {
    this._bShow = a;
  };
  KJE.gGraphLegend.prototype.useOrientation = function (a) {
    var b = this._iOrientation;
    this.bLegendSmall = false;
    if (a / KJE.gSCALE < KJE.gLegendMin) {
      b = KJE.gLegend.BOTTOM;
    }
    return b;
  };
  KJE.gGraphLegend.prototype.paint = function (m, j, h, n, f, c, b, r, p) {
    var o = this;
    var q = o._iHeight;
    var l = o._iWidth;
    var e = this._iBORDER_WIDTH;
    var a = KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH;
    if (!c) {
      c = 0;
    }
    if (!b) {
      b = 0;
    }
    if (!r) {
      r = 0;
    }
    if (!p) {
      p = 0;
    }
    m.textAlign = "left";
    m.textBaseline = "middle";
    var g = KJE.gLegend;
    var d = o.useOrientation(m.canvas.width);
    switch (d) {
      case g.TOP:
        f = q;
        break;
      case g.TOP_GRID_ALIGN:
        f = q;
        n = l;
        j = c;
        break;
      case g.BOTTOM:
        h += f - q;
        f = q;
        break;
      case g.LEFT:
        if (b > 0) {
          h = b;
        }
        if (p > 0) {
          f = p;
        }
        n = l;
        break;
      case g.RIGHT:
        if (b > 0) {
          h = b;
        }
        if (p > 0) {
          f = p;
        }
        j += n - l;
        n = l;
        break;
      case g.TOP_LEFT:
        f = q;
        n = l;
        break;
      case g.BOTTOM_LEFT:
        h += f - q;
        f = q;
        n = l;
        break;
      case g.TOP_RIGHT:
        j += n - l;
        f = q;
        n = l;
        break;
      case g.BOTTOM_RIGHT:
        h += f - q;
        j += n - l;
        f = q;
        n = l;
        break;
      case g.GRID_TOP_RIGHT:
        j = c - a + r - l;
        h = b + a;
        n = l;
        f = q;
        break;
      case g.GRID_TOP_LEFT:
        j = c + a;
        h = b + a;
        n = l;
        f = q;
        break;
      case g.GRID_BOTTOM_RIGHT:
        j = c - a + r - l;
        h = b - a + p - q;
        n = l;
        f = q;
        break;
      case g.GRID_BOTTOM_LEFT:
        j = c + a;
        h = b - a + p - q;
        n = l;
        f = q;
        break;
      case g.GRID_TOP:
        j = c;
        h = b + e;
        n = r;
        f = q;
        break;
      case g.GRID_BOTTOM:
        j = c;
        h = b - e + p - q;
        n = r;
        f = q;
        break;
      case g.GRID_LEFT:
        j = c + e;
        h = b;
        n = l;
        f = p;
        break;
      case g.GRID_RIGHT:
        j = c - e + r - l;
        h = b;
        n = l;
        f = p;
        break;
    }
    if (this._bShow) {
      var k = j + n / 2 - l / 2;
      var i = h + f / 2 - q / 2;
      if (this._border) {
        m.fillStyle = this._cBGColor;
        m.fillRect(k - 0.5, i - 0.5, l, q);
        m.strokeStyle = this._gGraph._cTextColor;
        m.strokeRect(k - 0.5, i - 0.5, l, q);
      }
      if (this._legendType <= g.DATA_SERIES_LEGEND) {
        this.drawDataSeriesLegend(m, k, i);
        return;
      }
      this.drawCategoryLegend(m, k, i);
    }
  };
  KJE.gGraphLegend.prototype.drawDataSeriesLegend = function (i, e, d) {
    var f = this._gGraph._vDataSeries.length;
    var h = new Array(f);
    var a = new Array(f);
    var g = new Array(f);
    var c = this._gGraph._vDataSeries;
    for (var b = 0; b < f; b++) {
      h[b] = c[b]._cColor;
      a[b] = c[b]._sSeriesTitle;
      g[b] = c[b]._sSeriesTitleBold;
    }
    this.drawLegend(i, e, d, h, a, g);
  };
  KJE.gGraphLegend.prototype.drawCategoryLegend = function (a, e, d) {
    var b = this._gGraph._sGraphCategories;
    var c = this._gGraph._sGraphCategoriesBold;
    this.drawLegend(a, e, d, this._gGraph._colorList, b, c);
  };
  KJE.gGraphLegend.prototype.drawLegend = function (t, l, i, z, a, p) {
    var g = KJE.gLegend;
    var w = i + g._iSIDE_BORDER_WIDTH;
    var c = this._iShape == g.SQUARE_LEGEND;
    var u = 0;
    var d = this.LINE_SPACE + this._iFontHeight;
    var o = this._iColorBoxOffset;
    var b = this._iColorBoxYOffset;
    var h = g._iSIDE_BORDER_WIDTH;
    var A = g._PAD;
    var y = this.bLegendSmall
      ? this._gGraph.FONT_LEGEND_TINY
      : this._gGraph.FONT_LEGEND_BOLD;
    var e = this.bLegendSmall
      ? this._gGraph.FONT_LEGEND_TINY
      : this._gGraph.FONT_LEGEND;
    var f = this._legendType == g.BANDED_LEGEND;
    var x = a.length;
    var m = KJE.FTR;
    t.font = e;
    t.lineWidth = g._LINE_WIDTH;
    t.shadowColor = g._sSHADOW_COLOR;
    t.shadowOffsetX = g._sSHADOW_BLUR_X;
    t.shadowOffsetY = g._sSHADOW_BLUR_Y;
    for (var r = 0; r < x; r++) {
      t.fillStyle = z[r];
      if (c) {
        t.fillRect(l + o, w + b, h, h);
      } else {
        var q = g._iCIR_SIDE_LENGTH;
        t.beginPath();
        t.arc(l + o + q - A, w + b + q, q, 0, Math.PI * 2, true);
        t.closePath();
        t.fill();
        t.lineWidth = g._LINE_WIDTH * 2;
        t.strokeStyle = KJE.gDarker(t.fillStyle, 0.6);
        t.stroke();
      }
      w += d;
      if (f) {
        r++;
      }
    }
    t.lineWidth = g._LINE_WIDTH;
    t.shadowBlur = "0";
    t.shadowColor = g._sSHADOW_COLOR;
    t.shadowOffsetX = "0";
    t.shadowOffsetY = "0";
    t.fillStyle = this._cTextColor;
    w = i + h + b + h / 2 + (!c ? this._iFontHeight / 2 : A);
    var j = l + this._iLabelOffset;
    for (r = 0; r < x; r++) {
      t.fillText(m(a[r]), j, w);
      if (p && p[r]) {
        u = t.measureText(m(a[r])).width;
        t.font = y;
        t.fillText(m(p[r]), j + u, w);
        t.font = e;
      }
      w += d;
      if (f) {
        r++;
      }
    }
  };
  KJE.gGraphLegend.prototype.setSize = function (l) {
    var j = KJE.gLegend;
    var g = this;
    g._iWidth = 0;
    g._iHeight = 0;
    g._iXOffset = 0;
    g._iYOffset = 0;
    var d = (g._iWidthOffset = g._iBORDER_WIDTH = KJE.gBORDER_WIDTH);
    g._iHeightOffset = 0;
    if (g._bShow) {
      var i = j._iSIDE_BORDER_WIDTH;
      var c = g._gGraph;
      var h = g.LINE_SPACE;
      var f = g._iFontHeight;
      var e = j._PAD;
      g._iColorBoxOffset = i + e;
      g._iLabelOffset = i + i + j._iBOX_TO_LABEL_SPACE + e * 2;
      var k = (g._iWidth = g._iLabelOffset + g._iMaxLegendLength + i);
      var b = (g._iHeight =
        i +
        (f + h) *
          (g._legendType == j.CATEGORY_LEGEND
            ? c._sGraphCategories == null
              ? 0
              : c._sGraphCategories.length
            : c.getDataSeriesCount()) -
        h +
        i);
      g._iColorBoxYOffset = Math.ceil((f - i) / 2) + e;
      var a = g.useOrientation(l.canvas.width);
      switch (a) {
        case j.TOP:
        case j.TOP_GRID_ALIGN:
          g._iYOffset = b + d;
        case j.BOTTOM:
          g._iHeightOffset = b + d;
          break;
        case j.LEFT:
        case j.TOP_LEFT:
        case j.BOTTOM_LEFT:
          g._iXOffset = k + d;
          g._iWidthOffset = k + d + d;
          break;
        case j.RIGHT:
        case j.TOP_RIGHT:
        case j.BOTTOM_RIGHT:
          g._iWidthOffset = k + d;
          break;
      }
    }
  };
  KJE.gGraphLegend.prototype.setINF = function (k) {
    oThis = this;
    oThis._cColor = oThis._gGraph._cTextColor;
    oThis._cTextColor = oThis._gGraph._cTextColor;
    if (oThis._cBGColor == null) {
      oThis._cBGColor = oThis._gGraph._cBackground;
    }
    oThis._iMaxLegendLength = 0;
    oThis._iFontHeight = 0;
    oThis._iFontDescent = 0;
    var b = oThis.useOrientation(k.canvas.width);
    var c = oThis.bLegendSmall
      ? oThis._gGraph.FONT_LEGEND_TINY
      : oThis._gGraph.FONT_LEGEND_BOLD;
    var d = oThis.bLegendSmall
      ? oThis._gGraph.FONT_LEGEND_TINY
      : oThis._gGraph.FONT_LEGEND;
    if (oThis._bShow) {
      if (oThis._iLegendWidth > 0) {
        oThis._iMaxLegendLength = oThis._iLegendWidth;
      } else {
        k.font = d;
        var f = 0;
        var j = "";
        var h = oThis._gGraph._vDataSeries.length;
        var l = "";
        if (oThis._legendType != KJE.gLegend.CATEGORY_LEGEND) {
          for (var g = 0; g < h; g++) {
            l = oThis._gGraph._vDataSeries[g]._sSeriesTitle;
            j = oThis._gGraph._vDataSeries[g]._sSeriesTitleBold;
            j = j ? j : "";
            f = k.measureText(KJE.FTR(l)).width;
            if (j != "") {
              k.font = oThis.FONT_LEGEND_BOLD;
              f += k.measureText(KJE.FTR(j)).width;
              k.font = d;
            }
            if (f > oThis._iMaxLegendLength) {
              oThis._iMaxLegendLength = f;
            }
          }
        } else {
          if (oThis._gGraph._sGraphCategories != null) {
            var h = oThis._gGraph._sGraphCategories.length;
            var a =
              oThis._gGraph._sGraphCategoriesBold == null
                ? 0
                : oThis._gGraph._sGraphCategoriesBold.length;
            for (var e = 0; e < h; e++) {
              l = oThis._gGraph._sGraphCategories[e];
              j = e < a ? oThis._gGraph._sGraphCategoriesBold[e] : "";
              f = k.measureText(KJE.FTR(l)).width;
              if (e < a) {
                k.font = c;
                f += k.measureText(KJE.FTR(j)).width;
                k.font = d;
              }
              if (f > oThis._iMaxLegendLength) {
                oThis._iMaxLegendLength = f;
              }
            }
          }
        }
      }
      oThis._iFontHeight = KJE.gGetFontHeight(k);
    }
  };
  KJE.gValueAxis = function (a) {
    this._gGraph = a;
    this._font = a.FONT_PLAIN;
    this._bShow = true;
    this._cColor = "#FFFFFF";
    this._cLine = "#000000";
    this._cTextColor = "#000000";
    this._iFormat = KJE.FMT_DOLLARS;
    this._iXOffset = 0;
    this._iYOffset = 0;
    this._iLabelCount = 0;
    this._iMaxLabelLength = 0;
    this._iMaxLength = 0;
    this._iWidth = 0;
    this._iHeight = 0;
    this._iPixelsPerIncrement = 0;
    this._iDataLength = 0;
    this._fValuePerPixel = 0;
    this._iFontHeight = 0;
    this._iFormat = KJE.FMT_DOLLARS;
    this._bAutoMaximum = true;
    this._bAutoMinimum = false;
    this._axisMinimum = 0;
    this._axisMaximum = 100;
    this._sUnits = "";
    this._iUnitFactor = 1;
    this._fAbsoluteMinValue = 0;
    this._fAbsoluteMaxValue = 0;
    this._fRange = 0;
    this._fMinValue = 0;
    this._fMaxValue = 0;
    this._iIncrement = 0;
    this._iFactor = 0;
    this._fIncrement = 0;
    this._iZeroIntersects = 0;
  };
  KJE.gValueAxis.prototype.setProperty = function (c) {
    var b = c.split("|");
    var a = KJE.sgv;
    for (var d = 0; d < b.length; d++) {
      switch (d) {
        case 0:
          this._bShow = a(b[d], this._bShow);
          break;
        case 1:
          this._iFormat = a(b[d], this._iFormat);
          break;
        case 2:
          this._bAutoMaximum = a(b[d], this._bAutoMaximum);
          break;
        case 3:
          this._bAutoMinimum = a(b[d], this._bAutoMinimum);
          break;
        case 4:
          this._axisMaximum = a(b[d], this._axisMaximum);
          break;
        case 5:
          this._axisMinimum = a(b[d], this._axisMinimum);
          break;
      }
    }
  };
  KJE.gValueAxis.prototype.getProperty = function () {
    return (
      this._bShow +
      "|" +
      this._iFormat +
      "|" +
      this._bAutoMaximum +
      "|" +
      this._bAutoMinimum +
      "|" +
      KJE.input(this._axisMaximum, 2) +
      "|" +
      KJE.input(this._axisMinimum, 2)
    );
  };
  KJE.gValueAxis.prototype.getLabel = function (a) {
    if (this._gGraph._sValueLabels == null) {
      return KJE.format[this._iFormat](
        a / this._iUnitFactor,
        this._fAbsoluteMaxValue - this._fAbsoluteMinValue <= 5 ? 2 : 0
      );
    } else {
      return this._gGraph._sValueLabels[Math.floor(a)];
    }
  };
  KJE.gValueAxis.prototype.getNextIncrement = function (b) {
    var a = this._iIncrement;
    return this._gGraph._sValueLabels == null
      ? this._fRange > 100
        ? b - a * this._iFactor
        : Math.round(b * this._iFactor - a) / this._iFactor
      : b - 1;
  };
  KJE.gValueAxis.prototype.paint = function (i, h, g) {
    if (this._bShow) {
      var f = KJE.gAxis;
      i.font = this._font;
      var a = this._iWidth - f.TICK_LENGTH - f.LINE_WIDTH;
      var c = f.LABEL_SPACE_LENGTH + f.TICK_LENGTH;
      var e = 0;
      var d = this.getStartingPlotValue();
      for (var b = 0; b <= this._iLabelCount; b++) {
        i.strokeStyle = this._cTextColor;
        if (this._iPixelsPerIncrement < this._iFontHeight) {
          if (b % 2 != 0) {
            this.drawText(i, h, g, this.getLabel(d), c, e);
          }
        } else {
          this.drawText(i, h, g, this.getLabel(d), c, e);
        }
        i.strokeStyle = this._cColor;
        i.beginPath();
        this.drawLine(
          i,
          h,
          g,
          a,
          e,
          a + f.TICK_LENGTH + KJE.gAxis.LINE_WIDTH / 2,
          e,
          this._cLine
        );
        e += this._iPixelsPerIncrement;
        d = this.getNextIncrement(d);
      }
      this.drawLine(
        i,
        h,
        g,
        a + f.TICK_LENGTH,
        0,
        a + f.TICK_LENGTH,
        this._iDataLength,
        this._cLine
      );
    }
  };
  KJE.gValueAxis.prototype.drawLine = function (b, e, f, a, h, c, d, g) {
    b.strokeStyle = g;
    b.lineWidth = KJE.gAxis.LINE_WIDTH;
    b.moveTo(a + e + 0.5, h + f + 0.5);
    b.lineTo(c + e + 0.5, d + f + 0.5);
    b.stroke();
  };
  KJE.gValueAxis.prototype.drawText = function (h, e, c, i, g, f) {
    var d = h.measureText(KJE.FTR(i)).width;
    var a = f + this._iFontHeight / 2;
    var b = this._iWidth - g - d;
    h.textAlign = "left";
    h.textBaseline = "bottom";
    h.font = this._font;
    h.fillText(KJE.FTR(i), e + b, c + a);
  };
  KJE.gValueAxis.prototype.setSize = function (a, b) {
    a.font = this._font;
    a.fillStyle = this._cColor;
    this._iPixelsPerIncrement = Math.floor(b / this._iLabelCount);
    this._iDataLength = this._iPixelsPerIncrement * this._iLabelCount;
    this._iMaxLength = b;
    this._iHeight = this._iDataLength;
    var f = 0;
    var d = this.getStartingPlotValue();
    for (var e = 0; e <= this._iLabelCount; e++) {
      if (d == 0) {
        this._iZeroIntersects = f;
        break;
      }
      d = this.getNextIncrement(d);
      f += this._iPixelsPerIncrement;
    }
    var c = KJE.gAxis;
    this._iWidth =
      this._iMaxLabelLength + c.LABEL_SPACE_LENGTH + c.TICK_LENGTH + c.LINE_WIDTH;
    this._iYOffset = this._bShow ? this._iHeight : 0;
    this._iXOffset = this._bShow ? this._iWidth : 0;
    this._fValuePerPixel = this._iDataLength / this._fRange;
  };
  KJE.gValueAxis.prototype.setFormat = function (a) {
    this._iFormat = a;
  };
  KJE.gValueAxis.prototype.setINF = function (j) {
    this._cLine = this._gGraph._cAxisLine;
    this._cColor = this._gGraph._cTextColor;
    this._cTextColor = this._gGraph._cTextColor;
    this._iFontHeight = KJE.gGetFontHeight(j);
    j.font = this._font;
    j.strokeStyle = this._cTextColor;
    this._fAbsoluteMaxValue = this._bAutoMaximum
      ? this._gGraph.getMaxValue() *
        (this._gGraph._showItemLabelOnTop && this._gGraph._showItemLabel
          ? 1.09
          : 1)
      : this._axisMaximum;
    this._fAbsoluteMinValue = this._bAutoMinimum
      ? this._gGraph.getMinValue()
      : this._axisMinimum;
    if (
      this._fAbsoluteMaxValue < 0.00001 &&
      this._fAbsoluteMaxValue > -0.00001 &&
      this._fAbsoluteMinValue < 0.00001 &&
      this._fAbsoluteMinValue > -0.00001
    ) {
      this._fAbsoluteMaxValue = 25;
    } else {
      if (
        this._fAbsoluteMaxValue < 1 &&
        this._fAbsoluteMaxValue > -1 &&
        this._fAbsoluteMinValue < 1 &&
        this._fAbsoluteMinValue > -1 &&
        this._iFormat == KJE.FMT_DOLLARS
      ) {
        this._fAbsoluteMaxValue = 1;
      }
    }
    var d = this._fAbsoluteMaxValue - this._fAbsoluteMinValue;
    this._iFactor = 1;
    this._iIncrement = 1;
    this._fIncrement = 1;
    if (this._gGraph._sValueLabels != null) {
    } else {
      var g = d;
      if (g > 100) {
        while (g > 200) {
          this._iFactor *= 10;
          g = d / this._iFactor;
        }
      } else {
        while (g <= 20) {
          this._iFactor *= 10;
          g = d * this._iFactor;
        }
      }
      this._iIncrement = g > 100 ? 20 : g > 50 ? 10 : 5;
      this._fIncrement =
        d > 100
          ? this._iIncrement * this._iFactor
          : this._iIncrement / this._iFactor;
    }
    if (this._fAbsoluteMinValue == 0) {
      this._fMinValue = 0;
    } else {
      if (this._fAbsoluteMinValue % this._fIncrement == 0) {
        this._fMinValue = this._fAbsoluteMinValue;
      } else {
        this._fMinValue =
          Math.floor(this._fAbsoluteMinValue / this._fIncrement) *
          this._fIncrement;
      }
    }
    if (this._fAbsoluteMaxValue == 0) {
      this._fMaxValue = 0;
    } else {
      if (this._fAbsoluteMaxValue % this._fIncrement == 0) {
        this._fMaxValue = this._fAbsoluteMaxValue;
      } else {
        this._fMaxValue = Math.ceil(this._fAbsoluteMaxValue / this._fIncrement);
        this._fMaxValue =
          Math.round(this._iFactor * this._fMaxValue * this._fIncrement) /
          this._iFactor;
      }
    }
    this._fRange = this._fMaxValue - this._fMinValue;
    if (this._fRange == 0) {
      this.fRange = this._fIncrement;
    }
    if (this._gGraph._sValueLabels == null) {
      this._iLabelCount = Math.round(this._fRange / this._fIncrement);
    } else {
      this._iLabelCount = this._gGraph._sValueLabels.length - 1;
    }
    this.setGraphUnits(this._fMaxValue, this._fMinValue);
    if (this._bShow) {
      var a = this.getStartingPlotValue();
      var e = 0;
      var c = 0;
      var f = this._iLabelCount;
      for (var b = 0; b <= f; b++) {
        c = j.measureText(KJE.FTR(this.getLabel(a))).width;
        e = c > e ? c : e;
        a = this.getNextIncrement(a);
      }
      var h = KJE.gAxis;
      this._iMaxLabelLength = e;
      this._iFontHeight = KJE.gGetFontHeight(j);
      this._iWidth =
        this._iMaxLabelLength +
        h.LABEL_SPACE_LENGTH +
        h.TICK_LENGTH +
        h.LINE_WIDTH;
    }
  };
  KJE.gValueAxis.prototype.getStartingPlotValue = function () {
    return this._gGraph._sValueLabels == null
      ? this._fMaxValue
      : this._gGraph._sValueLabels.length - 1;
  };
  KJE.gValueAxis.prototype.setVisible = function (a) {
    this._bShow = a;
  };
  KJE.gValueAxis.prototype.getDataLength = function () {
    return this._iDataLength;
  };
  KJE.gValueAxis.prototype.setGraphUnits = function (d, g) {
    var a = KJE;
    g = g || 0;
    var c = a.gScaleLabelMax;
    var e = a.gScaleLabelFactor;
    var f = c.length;
    for (var b = f - 1; b >= 0; b--) {
      if (d >= c[b] || g <= -1 * c[b]) {
        this._sUnits = a.gScaleLabel[b];
        this._iUnitFactor = e[b];
        break;
      }
    }
    return this._iUnitFactor;
  };
  KJE.gCategoryAxis = function (a) {
    this._gGraph = a;
    this._bShow = true;
    this._cColor = "#FFFFFF";
    this._cLine = "#000000";
    this._cTextColor = "#000000";
    this._fFont = "11pt Helvetica";
    this._iXOffset = 0;
    this._iYOffset = 0;
    this._iLabelCount = 0;
    this._iMaxLabelLength = 0;
    this._iWidth = 0;
    this._iHeight = 0;
    this._iPixelsPerIncrement = 0;
    this._iDataLength = 0;
    this._iFontHeight = 0;
    this._iFontOffset = 0;
    this._fSpacingPercent = 0.25;
    this._fDataGapPercent = 0;
    this._bNoOffset = false;
    this._sCategories = new Array();
    this._iCategoryCount;
    this._iBarCount;
    this._iBarWidth;
    this._iSpaceWidth;
    this._iGapWidth;
    this._iBarsPerCategory;
    this._iAxisSegmentLength;
    this._bVertical = false;
  };
  KJE.gCategoryAxis.prototype.setProperty = function (c) {
    var b = c.split("|");
    var a = KJE.sgv;
    for (var d = 0; d < b.length; d++) {
      switch (d) {
        case 0:
          this._bShow = a(b[d], this._bShow);
          break;
        case 1:
          this._fSpacingPercent = a(b[d], this._fSpacingPercent);
          break;
        case 2:
          this._fDataGapPercent = a(b[d], this._fDataGapPercent);
          break;
      }
      d++;
    }
  };
  KJE.gCategoryAxis.prototype.getProperty = function () {
    return (
      this._bShow +
      "|" +
      KJE.input(this._fSpacingPercent, 2) +
      "|" +
      KJE.input(this._fDataGapPercent, 2)
    );
  };
  KJE.gCategoryAxis.prototype.paint = function (m, j, h, r, u) {
    var p = this;
    if (p._bShow) {
      var t = KJE.gAxis;
      h += u;
      m.font = p._fFont;
      var c = t.TICK_LENGTH;
      var q = t.LABEL_SPACE_LENGTH + t.LINE_WIDTH + t.TICK_LENGTH;
      var e = c + t.LABEL_SPACE_LENGTH;
      var a = 0;
      var b = 0;
      var d = 1;
      var i = p._sCategories;
      var f = p._iCategoryCount;
      var n = p._bVertical;
      var o = (n ? p._iFontHeight : p._iMaxLabelLength) + q;
      if (o > p._iAxisSegmentLength && f > 2) {
        d = Math.ceil(f / (p._iDataLength / o));
      }
      m.strokeStyle = p._cLine;
      m.beginPath();
      for (var g = 0; g < f; g++) {
        b = p.getCategoryLeft(g);
        if (g == 0) {
          b -= t.LINE_WIDTH;
        }
        m.moveTo(b + j + 0.5, 0 + h + 0.5);
        m.lineTo(b + j + 0.5, c + h + 0.5);
      }
      m.moveTo(j - 1, h + 0.5);
      m.lineTo(p._iWidth + j + 0.5, h + 0.5);
      m.stroke();
      if (i) {
        m.setStyle = p._cTextColor;
        if (n) {
          m.save();
          m.rotate(-Math.PI / 2);
          m.textAlign = "right";
          m.textBaseline = "middle";
        } else {
          m.textAlign = "center";
          m.textBaseline = "top";
        }
        p.getCatOffset = p._bNoOffset ? p.getCategoryLeft : p.getCategoryMid;
        var l = i.length;
        var k = KJE.FTR;
        for (var g = 0; g < f; g++) {
          a = p.getCatOffset(g);
          if (
            d < 2 ||
            (g % d == 0 && g < f - d * 0.9 && g != f - 2) ||
            g == f - 1
          ) {
            if (g < l) {
              if (n) {
                m.fillText(k(i[g]), -h - e - 0.5, j + a - 0.5);
              } else {
                m.fillText(k(i[g]), j + a + 0.5, h + e + 0.5);
              }
            }
          }
        }
        if (n) {
          m.restore();
        }
      }
    } else {
      m.moveTo(j - 1, h + u + 0.5);
      m.lineTo(p._iWidth + j + 0.5, h + u + 0.5);
      m.stroke();
    }
  };
  KJE.gCategoryAxis.prototype.drawLine = function (b, e, f, a, h, c, d, g) {
    b.beginPath();
    b.strokeStyle = g;
    b.moveTo(a + e + 0.5, h + f + 0.5);
    b.lineTo(c + e + 0.5, d + f + 0.5);
    b.stroke();
  };
  KJE.gCategoryAxis.prototype.setSize = function (k, d) {
    k.font = this._fFont;
    var e = this._gGraph.getValueCount() - (this._bNoOffset ? 1 : 0);
    var a = this._gGraph.getDataSeriesCount();
    var h = a * e;
    var j = 2 * e;
    var b = (a - 1) * e;
    this._iWidth = d;
    this._iDataLength = d;
    var c = Math.floor(
      this._iWidth /
        Math.round(j * this._fSpacingPercent + h + b * this._fDataGapPercent)
    );
    var i = c * this._fDataGapPercent;
    var f = Math.floor((this._iDataLength - c * h - i * b) / j);
    this._iAxisSegmentLength = 2 * f + i * (a - 1) + c * a;
    this._iXOffset = 0;
    this._iYOffset = 0;
    if (this._bShow) {
      var g = KJE.gAxis;
      if (
        this._iMaxLabelLength > this._iAxisSegmentLength &&
        this._iMaxLabelLength > k.measureText("9999").width &&
        this._iMaxLabelLength < k.measureText("9999999999999999999").width
      ) {
        this._iHeight = this._iMaxLabelLength + g.TICK_LENGTH;
        this._bVertical = true;
      } else {
        this._iHeight =
          this._iFontHeight + g.LABEL_SPACE_LENGTH + g.TICK_LENGTH + g.LINE_WIDTH;
        this._bVertical = false;
      }
    } else {
      this._iHeight = 0;
    }
    this._iBarsPerCategory = a;
    this._iBarWidth = c;
    this._iGapWidth = i;
    this._iSpaceWidth = f;
  };
  KJE.gCategoryAxis.prototype.setINF = function (a) {
    this._iCategoryCount = this._gGraph.getValueCount();
    this._sCategories = this._gGraph._sGraphCategories;
    this._fFont = this._gGraph.FONT_PLAIN;
    this._cColor = this._gGraph._cTextColor;
    this._cTextColor = this._gGraph._cTextColor;
    this._cLine = this._gGraph._cAxisLine;
    this._iFontHeight = 0;
    this._iMaxLabelLength = 0;
    this._iHeight = 0;
    if (this._bShow) {
      var b = KJE.gAxis;
      if (this._sCategories) {
        this._iFontHeight = KJE.gGetFontHeight(a);
      } else {
        this._iFontHeight = -b.LABEL_SPACE_LENGTH * 2;
      }
      a.font = this._fFont;
      a.strokeStyle = this._cColor;
      this._iMaxLabelLength = this.getMaximumCategoryLength(
        a,
        this._iCategoryCount,
        this._sCategories
      );
    }
  };
  KJE.gCategoryAxis.prototype.getCategoryLeft = function (a) {
    return Math.round(
      (this._iWidth / (this._iCategoryCount - (this._bNoOffset ? 1 : 0))) * a
    );
  };
  KJE.gCategoryAxis.prototype.getCategoryMid = function (a) {
    return (
      Math.round((this._iWidth / this._iCategoryCount) * a) +
      Math.round(
        (this._iBarsPerCategory * this._iBarWidth +
          (this._iBarsPerCategory - 1) * this._iGapWidth) /
          2
      ) +
      this._iSpaceWidth
    );
  };
  KJE.gCategoryAxis.prototype.getDataWidth = function () {
    return this._iGapWidth + this._iBarWidth;
  };
  KJE.gCategoryAxis.prototype.getMaximumCategoryLength = function (b, e, d) {
    if (d == null) {
      return 0;
    }
    if (d.length == 0) {
      return 0;
    }
    var a = 0;
    var c = 0;
    for (var f = 0; f < e && f < d.length; f++) {
      c = b.measureText(KJE.FTR(d[f])).width + 3;
      a = c > a ? c : a;
    }
    return a;
  };
  KJE.gCategoryAxis.prototype.setVisible = function (a) {
    this._bShow = a;
  };
  KJE.gGrid = function (a) {
    this._gGraph = a;
    this._showYGridLines = KJE.parameters.get("YGridLines", true);
    this._showXGridLines = KJE.parameters.get("XGridLines", false);
    this._lineWidth = KJE.giGridLineWidth;
  };
  KJE.gGrid.prototype.setProperty = function (c) {
    var b = c.split("|");
    var a = KJE.sgv;
    for (var d = 0; d < b.length; d++) {
      switch (d) {
        case 0:
          this._showYGridLines = a(b[d], this._showYGridLines);
          break;
        case 1:
          this._showXGridLines = a(b[d], this._showXGridLines);
          break;
        case 2:
          this._lineWidth = a(b[d], this._lineWidth);
          break;
      }
    }
  };
  KJE.gGrid.prototype.getProperty = function () {
    return (
      this._showYGridLines + "|" + this._showXGridLines + "|" + this._lineWidth
    );
  };
  KJE.gGrid.prototype.paint = function (q, n, m) {
    var j = this._gGraph._axisX._iDataLength;
    var p = this._gGraph._axisY._iDataLength;
    var d = q.createLinearGradient(0, 0, 0, p);
    d.addColorStop(0, this._gGraph._cGridBackground1);
    d.addColorStop(1, this._gGraph._cGridBackground2);
    q.fillStyle = d;
    q.fillRect(n, m, j, p + 1);
    q.beginPath();
    q.strokeStyle = this._gGraph._cGrid;
    q.lineWidth = this._lineWidth * 2;
    q.strokeRect(n - 2, m, j + 2, p);
    q.strokeStyle = this._gGraph._cAxisLine;
    q.beginPath();
    q.moveTo(n, m + p);
    q.lineTo(n + j, m + p);
    q.closePath();
    q.strokeStyle = this._gGraph._cGrid;
    var k, i, g;
    var b = this._gGraph.getValueCount();
    q.lineWidth = this._lineWidth;
    if (this._showXGridLines) {
      k = 0;
      i = 0;
      g = 0;
      for (var h = 0; h < b; h++) {
        g = this._axisX.getCategoryLeft(h);
        if (h == 0) {
          k--;
        }
        k = n + g;
        q.moveTo(k + 0.5, m);
        q.lineTo(k + 0.5, m + p);
      }
    }
    var f = 0;
    if (this._showYGridLines) {
      i = m;
      var a = this._gGraph._axisY._iLabelCount;
      var c = this._gGraph._axisY._iPixelsPerIncrement;
      var o = this._gGraph._axisY._iZeroIntersects;
      for (var e = 0; e < a; e++) {
        if (o + m == i) {
          f = i;
        }
        q.moveTo(n, i + 0.5);
        q.lineTo(n + j, i + 0.5);
        i = i + c;
      }
    }
    q.strokeStyle = this._gGraph._cGrid;
    q.stroke();
    q.closePath();
    if (f) {
      q.beginPath();
      q.strokeStyle = this._gGraph._cAxisLine;
      q.moveTo(n, f + 0.5);
      q.lineTo(n + j, f + 0.5);
      q.stroke();
      q.closePath();
    }
  };
  KJE.gType = function (a) {
    this._iGraphType = a;
    this.bTitleHigher = false;
    this._gGraph = null;
    this.xPopup = new Array();
    this.yPopup = new Array();
    this.xArray = new Array();
    this.yArray = new Array();
    this.sItems = new Array();
  };
  KJE.gType.prototype.syncSetup = function (a) {
    this._gGraph = a;
    if (a.wTitle) {
      a.wTitle.style.fontColor = a._cTextColor;
      a._titleGraph.bShow = false;
    }
    a._titleGraph.setFont(a.FONT_TITLE);
    a._titleXAxis.setFont(a.FONT_BOLD);
    a._titleYAxis.setFont(a.FONT_BOLD);
    a._titleGraph.setColor(a._cTextColor);
    a._titleXAxis.setColor(a._cTextColor);
    a._titleYAxis.setColor(a._cTextColor);
    switch (this._iGraphType) {
      case KJE.gCOLUMN:
        a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
        a._axisX._fDataGapPercent = 0.05;
        this.bTitleHigher = true;
        break;
      case KJE.gCATEGORIES:
        a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
        a._axisX._fDataGapPercent = 0.05;
        this.bTitleHigher = true;
        break;
      case KJE.gLINE:
        a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
        a._axisX._fDataGapPercent = 100;
        this.bTitleHigher = false;
        a._axisX._bNoOffset = true;
        break;
      case KJE.gPIE:
        a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
        this.bTitleHigher = false;
        break;
      case KJE.gSTACKED:
        a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
        a._axisX._fDataGapPercent = -1;
        this.bTitleHigher = true;
        break;
    }
  };
  KJE.gType.prototype.paint = function (t, q, F) {
    var x = this;
    var y = x._gGraph;
    var D = y._legend;
    var d = y._axisX;
    var b = y._axisY;
    var w = y._titleXAxis;
    var l = y._titleYAxis;
    var G = y._titleGraph;
    G.setTitle(t);
    D.setINF(t);
    y._axisX.setINF(t);
    y._axisY.setINF(t);
    w.setTitle(t, "");
    l.setTitle(t, y._axisY._sUnits);
    var H = false;
    var I = KJE.gBORDER_WIDTH;
    var B = KJE.gBORDER_WIDTH;
    var K = q - 2 * KJE.gBORDER_WIDTH;
    var A = F - 2 * KJE.gBORDER_WIDTH;
    var m = G._iHeight;
    var e = I;
    var h = B + (H ? Math.ceil(m / 2) : 0) + m + KJE.gBORDER_WIDTH;
    var f = K;
    var c = A - ((H ? Math.ceil(m / 2) : 0) + m + KJE.gBORDER_WIDTH);
    D.setSize(t);
    var E, i, p, j, L, a, z, o, M, C, k, n, g, J, r, u;
    switch (x._iGraphType) {
      case KJE.gPIE:
        E = e;
        i = h;
        p = f;
        j = c;
        L = f;
        a = c;
        z = e;
        o = h;
        M = e;
        C = h;
        k = f;
        n = c;
        g = e + D._iXOffset;
        J = h + D._iYOffset;
        r = f - D._iWidthOffset;
        u = c - D._iHeightOffset;
        break;
      default:
        E = e + D._iXOffset;
        i = h + D._iYOffset;
        p = f - D._iWidthOffset;
        j = c - D._iHeightOffset;
        L = p - l._iWidth - KJE.gBORDER_WIDTH;
        a = j - w._iHeight - KJE.gBORDER_WIDTH;
        d.setSize(t, L - b._iWidth);
        b.setSize(t, a - d._iHeight);
        z = E + l._iWidth + KJE.gBORDER_WIDTH;
        o = i + (b._iMaxLength - b._iHeight);
        M = z + b._iXOffset;
        C = o + d._iYOffset;
        k = d._iDataLength;
        n = b._iDataLength;
        g = M;
        J = C;
        r = k;
        u = n;
    }
    switch (x._iGraphType) {
      case KJE.gPIE:
        break;
      default:
        y._grid.paint(t, M, C);
        w.paint(
          t,
          M,
          b._iDataLength + C + d._iHeight + w._iHeight / 2,
          k,
          w._iHeight
        );
        l.paint(t, E, C, l._iWidth, n);
        b.paint(t, z, o + d._iXOffset, k, n);
        d.paint(t, z + b._iXOffset, o, k, n);
    }
    switch (x._iGraphType) {
      case KJE.gCATEGORIES:
      case KJE.gCOLUMN:
        x.paintDataColumn(t, g, J, r, u);
        break;
      case KJE.gLINE:
        x.paintDataLine(t, g, J, r, u);
        break;
      case KJE.gPIE:
        x.paintDataPie(t, g, J, r, u);
        break;
      case KJE.gSTACKED:
        x.paintDataStacked(t, g, J, r, u);
        break;
    }
    G.paint(t, I, B - (H ? Math.ceil(m / 4) : 0), K, m);
    D.paint(t, e, h, f, c, M, C, k, n);
  };
  KJE.gType.prototype.paintDataColumn = function (t, m, j, z, f) {
    var r;
    var L = this._gGraph;
    var B = KJE.gGraphColumn;
    var F = this;
    var c = L._axisX._iBarWidth;
    var u = L._axisY._fValuePerPixel;
    var g = L._axisX._iSpaceWidth;
    var G = L._axisX.getDataWidth();
    var q = L._axisY._fMinValue;
    var J = L._axisY._fMaxValue;
    var b = L._axisY._iZeroIntersects;
    var C = L.getValueCount();
    t.shadowColor = B._sSHADOW_COLOR;
    t.shadowBlur = B._sSHADOW_BLUR;
    t.shadowOffsetX = c < B._sSHADOW_BLUR_X * 3 ? 0 : B._sSHADOW_BLUR_X;
    var p = (t.shadowOffsetY = c < B._sSHADOW_BLUR_X * 3 ? 0 : B._sSHADOW_BLUR_Y);
    t.lineWidth = B._LINE_WIDTH;
    var N = new Array();
    var a = new Array();
    var d = new Array();
    var M = 0;
    t.font = L.FONT_LEGEND;
    if (!L._showItemLabelOnTop) {
      M = -KJE.gGetFontHeight(t);
    }
    t.textAlign = "center";
    t.textBaseline = "bottom";
    var I = 0;
    var i = 0;
    var A = "";
    var e = L._legend._legendType != KJE.gLegend.CATEGORY_LEGEND;
    var o =
      L._sGraphCategoriesBold != null &&
      L._legend._legendType == KJE.gLegend.CATEGORY_LEGEND;
    var h = L._axisX._sCategories;
    for (var K = 0; K < L._vDataSeries.length; K++) {
      if (e) {
        A = L._vDataSeries[K]._sSeriesPop;
      }
      var E = -9191;
      var w = -9191;
      t.fillStyle = L._vDataSeries[K]._cColor;
      var l = L._vDataSeries[K]._fValues;
      var D;
      var k, H;
      N[K] = new Array();
      a[K] = new Array();
      d[K] = new Array();
      for (var r = 0; r < C; r++) {
        D = m + L._axisX.getCategoryLeft(r) + g + K * G;
        I = l[r];
        if (I < 0) {
          if (J < 0) {
            k = j;
            H = -1 * Math.round((I + J) * u);
          } else {
            k = j + b;
            H = -1 * Math.round(I * u);
          }
        } else {
          if (q > 0) {
            H = Math.round((I - q) * u);
            k = j + f - H;
          } else {
            H = Math.round(I * u);
            k = j + b - H;
          }
        }
        t.beginPath();
        if (L._legend._legendType == KJE.gLegend.CATEGORY_LEGEND) {
          t.fillStyle = L.getColor(r + 1);
        } else {
          t.fillStyle = L._vDataSeries[K]._cColor;
        }
        t.strokeStyle = t.fillStyle;
        t.fillRect(D, k, c, H);
        t.shadowOffsetY = "0";
        if (c > KJE.gGraphColumn._LINE_WIDTH * 4) {
          t.strokeStyle = KJE.gDarker(t.fillStyle, 0.6);
          t.lineWidth = KJE.gGraphColumn._LINE_WIDTH;
          t.strokeRect(D, k, c, H);
        }
        if (
          L._iArea == KJE.gGraphColumn.LINE_ON_ALL ||
          (L._iArea == KJE.gGraphColumn.LINE_ON_FIRST_ONLY && K == 0)
        ) {
          t.lineWidth = KJE.gGraphLine._LINE_WIDTH;
          t.shadowOffsetY = KJE.gGraphLine._sSHADOW_BLUR_Y;
          if (w != -9191) {
            t.beginPath();
            t.moveTo(E + c / 2, w);
            t.lineTo(D + c / 2, k);
            t.stroke();
          }
          E = D;
          w = k;
        }
        t.closePath();
        N[K][r] = L.getFormat(l[r], K, r);
        F.xPopup[i] = (D + c / 2) / KJE.gSCALE;
        F.yPopup[i] = (k + H) / KJE.gSCALE;
        F.xArray[i] = new Array(4);
        F.yArray[i] = new Array(4);
        F.xArray[i][0] = D / KJE.gSCALE;
        F.yArray[i][0] = k / KJE.gSCALE;
        F.xArray[i][1] = (D + c) / KJE.gSCALE;
        F.yArray[i][1] = F.yArray[i][0];
        F.xArray[i][2] = F.xArray[i][1];
        F.yArray[i][2] = (k + H) / KJE.gSCALE;
        F.xArray[i][3] = F.xArray[i][0];
        F.yArray[i][3] = F.yArray[i][2];
        F.sItems[i++] =
          A +
          " " +
          (h ? h[r] : "") +
          (o
            ? L._sGraphCategoriesBold[r]
              ? L._sGraphCategoriesBold[r]
              : ""
            : "") +
          (L._bPopDetail ? KJE.Colon + " " + N[K][r] : "");
        a[K][r] = D + c / 2;
        d[K][r] = k - M;
      }
    }
    F.xArray.length = i;
    F.yArray.length = i;
    F.sItems.length = i;
    t.shadowBlur = "0";
    t.shadowOffsetX = "0";
    t.shadowOffsetY = "0";
    t.fillStyle = L._cTextColor;
    if (L._showItemLabel) {
      for (K = 0; K < N.length; K++) {
        if (!(N[K].length > 3 && z < 600)) {
          for (r = 0; r < N[K].length; r++) {
            t.beginPath();
            t.fillText(KJE.FTR(N[K][r]), a[K][r], d[K][r]);
            t.closePath();
          }
        }
      }
    }
  };
  KJE.gType.prototype.paintDataLine = function (p, j, g, u, d) {
    var b = KJE;
    var k = b.gGraphLine;
    var c = KJE.gSCALE;
    var F = this._gGraph;
    var C = this;
    var q = F._axisY._fValuePerPixel;
    var o = F._axisY._fMinValue;
    var D = F._axisY._fMaxValue;
    var a = F._axisY._iZeroIntersects;
    var z = F.getValueCount();
    var f = 0;
    var r = k._CLICKABLE;
    p.shadowBlur = k._sSHADOW_BLUR;
    p.shadowColor = k._sSHADOW_COLOR;
    p.shadowOffsetX = k._sSHADOW_BLUR_X;
    p.lineWidth = k._LINE_WIDTH;
    p.shadowOffsetY = k._sSHADOW_BLUR_Y;
    var e = F._axisX._sCategories;
    for (var E = 0; E < F._vDataSeries.length; E++) {
      var w = F._vDataSeries[E]._sSeriesPop;
      var l = F._vDataSeries[E]._bNoPopDetails;
      p.fillStyle = F._vDataSeries[E]._cColor;
      p.strokeStyle = F._vDataSeries[E]._cColor;
      var i = F._vDataSeries[E]._fValues;
      var B;
      var h;
      var A = -9191;
      var t = -9191;
      for (var m = 0; m < z; m++) {
        B = j + F._axisX.getCategoryLeft(m) - 0.5;
        h = a - Math.round(i[m] * q) + 0.5;
        if (D < 0) {
          h = -1 * Math.round((i[m] + D) * q);
        } else {
          if (o > 0) {
            h = d - Math.round((i[m] - o) * q);
          }
        }
        h += g;
        if (t != -9191) {
          p.beginPath();
          p.strokeStyle = F._vDataSeries[E]._cColor;
          p.fillStyle = F._vDataSeries[E]._cColor;
          if (
            F._iArea == k.AREA_ALL ||
            (F._iArea == k.AREA_FIRST_ONLY && E == 0) ||
            (F._iArea == k.AREA_SECOND_ONLY && E == 1)
          ) {
            p.moveTo(A, g + d);
            p.lineTo(A, t);
            p.lineTo(B + 0.5, h);
            p.lineTo(B + 0.5, g + d);
            p.lineTo(A, g + d);
            p.fill();
          } else {
            p.moveTo(B + 0.5, h);
            p.lineTo(A, t);
            p.stroke();
          }
        }
        C.xPopup[f] = (B - 5) / c;
        C.yPopup[f] = (h + 5) / c;
        C.xArray[f] = KJE.IntArray(4);
        C.yArray[f] = KJE.IntArray(4);
        C.xArray[f][0] = (B - r) / c;
        C.yArray[f][0] = (h - r) / c;
        C.xArray[f][1] = (B + r) / c;
        C.yArray[f][1] = C.yArray[f][0];
        C.xArray[f][2] = C.xArray[f][1];
        C.yArray[f][2] = (h + r) / c;
        C.xArray[f][3] = C.xArray[f][0];
        C.yArray[f][3] = C.yArray[f][2];
        C.sItems[f++] =
          w +
          (l
            ? ""
            : " " +
              (e ? e[m] : "") +
              (F._bPopDetail ? b.Colon + " " + F.getFormat(i[m], E, m) : ""));
        A = B;
        t = h;
      }
    }
    C.xArray.length = f;
    C.yArray.length = f;
    C.sItems.length = f;
  };
  KJE.gType.prototype.paintDataPie = function (t, b, a, D, d) {
    var H = 0;
    var F = this._gGraph;
    var C = this;
    var l = F._vDataSeries[0]._fValues;
    for (var r = 0; r < l.length; r++) {
      H += l[r];
    }
    var o = -1;
    for (var r = 0; r < l.length; r++) {
      if (H == l[r]) {
        o = r;
      }
    }
    var k = Math.round(D / 2 + b);
    var j = Math.round(d / 2 + a);
    var G = 0;
    if (D / d) {
      G = Math.floor(d / 24);
      j -= Math.ceil(G / 2) + 1;
      d -= Math.ceil(G) + 1;
    }
    t.save();
    var g = 1;
    var f = 1;
    if (!KJE.gGraphPie._FLAT) {
      var g = D > d ? D / d : 1;
      var f = D > d ? 1 : d / D;
    }
    k = k / g;
    j = j / f;
    t.scale(g, f);
    var c = Math.round(Math.min(D / 2, d / 2));
    var u = 0;
    var B = 0;
    t.shadowBlur = 0;
    t.shadowOffsetX = G;
    t.shadowOffsetY = G;
    t.lineWidth = KJE.gGraphPie._LINE_WIDTH;
    t.lineJoin = KJE.gGraphPie._LINE_JOIN;
    t.fillStyle = KJE.gGraphPie._LINE_COLOR;
    var h = F._axisX._sCategories;
    if (o >= 0 || H == 0) {
      if (H == 0) {
        o = 1;
      } else {
        o += 1;
      }
      t.fillStyle = F.getColor(o);
      t.moveTo(k, j);
      t.beginPath();
      t.arc(k, j, c, 0, Math.PI * 2, true);
      t.closePath();
      t.stroke();
      t.fill();
      t.fillStyle = F.getColor(o);
      t.strokeStyle = KJE.gDarker(F.getColor(o), 0.6);
      t.moveTo(k, j);
      t.beginPath();
      t.arc(k, j, c, 0, Math.PI * 2, true);
      t.closePath();
      t.stroke();
      t.fill();
    } else {
      if (KJE.gGraphPie._DROP_SHADOW) {
        for (var z = l.length - 1; z >= 0; z--) {
          if (l[z] != 0) {
            B = l[z] / H;
            t.fillStyle = KJE.gDarker(F.getColor(z + 1), 0.5);
            t.shadowColor = t.fillStyle;
            t.beginPath();
            t.moveTo(k, j);
            var A = u * Math.PI * 2;
            var w = z == 0 && l[z] > 0 ? 0 : (u + B) * Math.PI * 2;
            t.arc(k, j, c, A, w, false);
            t.lineTo(k, j);
            t.closePath();
            t.fill();
            u += B;
          }
        }
      }
      u = 0;
      t.shadowBlur = 0;
      t.shadowOffsetX = 0;
      t.shadowOffsetY = 0;
      var m = 0;
      for (z = l.length - 1; z >= 0; z--) {
        if (l[z] != 0) {
          B = l[z] / H;
          if (B < 0) {
            B = 0;
          }
          t.fillStyle = F.getColor(z + 1);
          t.strokeStyle = KJE.gDarker(F.getColor(z + 1), 0.6);
          t.beginPath();
          t.moveTo(k, j);
          var A = u * Math.PI * 2;
          var w = z == 0 && l[z] > 0 ? 0 : (u + B) * Math.PI * 2;
          t.arc(k, j, c, A, w, false);
          t.lineTo(k, j);
          t.closePath();
          t.stroke();
          t.fill();
          var e = Math.ceil(B * 20 + 0.01);
          C.xArray[m] = KJE.IntArray(e + 2);
          C.yArray[m] = KJE.IntArray(e + 2);
          C.xArray[m][0] = (k * g) / KJE.gSCALE;
          C.yArray[m][0] = (j * f) / KJE.gSCALE;
          var E = B / e;
          for (var q = 0; q < e; q++) {
            C.xArray[m][q + 1] =
              ((k + c * Math.cos((u + E * q) * Math.PI * 2)) * g) / KJE.gSCALE;
            C.yArray[m][q + 1] =
              ((j + c * Math.sin((u + E * q) * Math.PI * 2)) * f) / KJE.gSCALE;
            if (q == Math.floor(e / 2)) {
              C.xPopup[m] =
                ((k + c * 0.75 * Math.cos((u + E * q) * Math.PI * 2)) * g) /
                  KJE.gSCALE -
                5;
              C.yPopup[m] =
                ((j + c * 0.75 * Math.sin((u + E * q) * Math.PI * 2)) * f) /
                  KJE.gSCALE +
                10;
            }
          }
          C.xArray[m][e + 1] =
            ((k + c * Math.cos((u + B) * Math.PI * 2)) * g) / KJE.gSCALE;
          C.yArray[m][e + 1] =
            ((j + c * Math.sin((u + B) * Math.PI * 2)) * f) / KJE.gSCALE;
          C.sItems[m] =
            (h ? h[z] : "") +
            (F._bPopDetail ? KJE.Colon + " " + F.getFormat(l[z], 0, z) : "");
          u += B;
          m++;
        }
      }
      C.xArray.length = m;
      C.yArray.length = m;
      C.sItems.length = m;
      C.xPopup.length = m;
      C.yPopup.length = m;
    }
    t.restore();
  };
  KJE.gType.prototype.paintDataStacked = function (p, G, F, R, N) {
    var D = this._gGraph;
    var d = D._axisY;
    var e = D._axisX;
    var K = KJE.gGraphColumn;
    var B = this;
    var H = e._iBarWidth;
    var a = d._fValuePerPixel;
    var A = e._iSpaceWidth;
    var r = e.getDataWidth();
    var c = d._fMinValue;
    var g = d._fMaxValue;
    var h = d._iZeroIntersects;
    var t = D.getValueCount();
    var m = new Array();
    var w = new Array();
    var k = new Array();
    var J = new Array();
    var O = B.xArray;
    var o = B.yArray;
    var u = B.sItems;
    var l = B.xPopup;
    var L = B.yPopup;
    var j = e._sCategories;
    p.shadowColor = K._sSHADOW_COLOR;
    p.shadowBlur = K._sSHADOW_BLUR;
    p.shadowOffsetX = H < K._sSHADOW_BLUR_X * 3 ? 0 : K._sSHADOW_BLUR_X;
    var b = (p.shadowOffsetY = H < K._sSHADOW_BLUR_X * 3 ? 0 : K._sSHADOW_BLUR_Y);
    p.lineWidth = K._LINE_WIDTH;
    p.font = D.FONT_LEGEND;
    p.textAlign = "center";
    p.textBaseline = "bottom";
    var i = 5;
    if (!D._showItemLabelOnTop) {
      i = -KJE.gGetFontHeight(p);
    }
    var E = null;
    for (var I = 0; I < D._vDataSeries.length; I++) {
      E = D._vDataSeries[I]._fValues;
      for (var P = 0; P < E.length; P++) {
        m[P] = E[P] + (m[P] ? m[P] : 0);
      }
    }
    for (P = 0; P < m.length; P++) {
      w[P] = D.getFormat(m[P], I - 1, P);
    }
    var S = 0;
    var q = 0;
    for (I = 0; I < D._vDataSeries.length; I++) {
      var z = D._vDataSeries[I]._sSeriesPop;
      var Q = 0;
      var C = 0;
      var f = 0;
      E = D._vDataSeries[I]._fValues;
      for (P = 0; P < t; P++) {
        Q = G + e.getCategoryLeft(P) + A + I * r;
        S = m[P];
        m[P] -= E[P];
        if (S < 0) {
          if (g < 0) {
            C = F;
            f = -1 * Math.round((S + g) * a);
          } else {
            C = F + h;
            f = -1 * Math.round(S * a);
          }
        } else {
          if (c > 0) {
            f = Math.round((S - c) * a);
            C = F + N - f;
          } else {
            f = Math.round(S * a);
            C = F + h - f;
          }
        }
        p.beginPath();
        p.fillStyle = D._vDataSeries[I]._cColor;
        if (I == 0) {
          p.shadowOffsetY = b;
          p.fillRect(Q, C, H, f);
          if (H > KJE.gGraphColumn._LINE_WIDTH * 4) {
            p.strokeStyle = KJE.gDarker(p.fillStyle, 0.6);
            p.lineWidth = KJE.gGraphColumn._LINE_WIDTH;
            p.strokeRect(Q, C, H, f);
          }
          k[P] = Q + H / 2;
          J[P] = C - i;
        }
        p.shadowOffsetY = "0";
        p.fillRect(Q, C, H, f);
        if (H > KJE.gGraphColumn._LINE_WIDTH * 4) {
          p.strokeStyle = KJE.gDarker(p.fillStyle, 0.6);
          p.lineWidth = KJE.gGraphColumn._LINE_WIDTH;
          p.strokeRect(Q, C, H, f);
        }
        var M = C + Math.floor(E[P] * a);
        l[q] = (Q + H / 2) / KJE.gSCALE;
        L[q] = M / KJE.gSCALE;
        O[q] = new Array(4);
        o[q] = new Array(4);
        O[q][0] = Q / KJE.gSCALE;
        o[q][0] = C / KJE.gSCALE;
        O[q][1] = (Q + H) / KJE.gSCALE;
        o[q][1] = o[q][0];
        O[q][2] = O[q][1];
        o[q][2] = M / KJE.gSCALE;
        O[q][3] = O[q][0];
        o[q][3] = o[q][2];
        u[q++] =
          z +
          (D._bPopCat && j ? " " + e._sCategories[P] : "") +
          (D._bPopDetail ? KJE.Colon + " " + D.getFormat(E[P], I, P) : "");
      }
    }
    O.length = q;
    o.length = q;
    u.length = q;
    p.shadowBlur = "0";
    p.shadowOffsetX = "0";
    p.shadowOffsetY = "0";
    p.fillStyle = D._cTextColor;
    if (D._showItemLabel) {
      for (P = 0; P < m.length; P++) {
        p.beginPath();
        p.fillText(KJE.FTR(w[P]), k[P], J[P]);
        p.closePath();
      }
    }
  };
  KJE.gType.prototype.poly = function (e, f, a, k) {
    var d,
      b,
      h = 0;
    if (e) {
      var g = e.length;
      for (d = 0, b = g - 1; d < g; b = d++) {
        if (
          ((f[d] <= k && k < f[b]) || (f[b] <= k && k < f[d])) &&
          a < ((e[b] - e[d]) * (k - f[d])) / (f[b] - f[d]) + e[d]
        ) {
          h = !h;
        }
      }
    }
    return h;
  };
  KJE.gType.prototype.getWedgeValue = function (a, i) {
    var e = this;
    var g = e.xArray;
    var f = e.yArray;
    var d = e.sItems.length;
    for (var b = d; b > -1; b--) {
      var h = e.poly(g[b], f[b], a, i);
      if (h) {
        return { x: e.xPopup[b], y: e.yPopup[b], s: e.sItems[b] };
      }
    }
    return null;
  };
  KJE.FTR = function (a) {
    return a;
  };
  KJE.lang = "EN";
  KJE.definitions.set(
    "**ROR_DEFINITION**",
    "The actual rate of return is largely dependent on the types of investments you select.  The Standard & Poor's 500&reg; (S&P 500&reg;) for the 10 years ending December 31<sup>st</sup> 2022, had an annual compounded rate of return of 12.6%, including reinvestment of dividends. From January 1, 1970 to December 31<sup>st</sup> 2022, the average annual compounded rate of return for the S&P 500&reg;, including reinvestment of dividends, was approximately 10.7% (source: www.spglobal.com). Since 1970, the highest 12-month return was 61% (June 1982 through June 1983). The lowest 12-month return was -43% (March 2008 to March 2009). Savings accounts at a financial institution may pay as little as 0.25% or less but carry significantly lower risk of loss of principal balances.<p>It is important to remember that these scenarios are hypothetical and that future rates of return can't be predicted with certainty and that investments that pay higher rates of return are generally subject to higher risk and volatility. The actual rate of return on investments can vary widely over time, especially for long-term investments. This includes the potential loss of principal on your investment. It is not possible to invest directly in an index and the compounded rate of return noted above does not reflect sales charges and other fees that investment funds and/or investment companies may charge."
  );
  KJE.definitions.set(
    "**ROR_SHORT_DEFINITION**",
    "It is important to remember that these scenarios are hypothetical and that future interest rates can't be predicted with certainty."
  );
  KJE.definitions.set(
    "**INFLATION_DEFINITION**",
    "This is what you expect for the average long-term inflation rate. A common measure of inflation in the U.S. is the Consumer Price Index (CPI).  From 1925 through 2022 the CPI has a long-term average of 3.0% annually. Over the last 40 years the highest CPI recorded was 13.5% in 1980. For the 12 months ending October 31<sup>st</sup> 2022 the CPI for All Urban Consumers (CPI-U) was 7.7% as reported by the U.S. Bureau of Labor Statistics."
  );
  KJE.gColorGridBackground1 = "#f7f7f7";
  KJE.gColorGridBackground2 = "#f7f7f7";
  KJE.ReportHeader =
    "<div class='KJEReportTitleBlock'><div class='KJEReportTitle'>**REPORT_TITLE**</div><br><div class=KJELogo><img src='assets/img/kilomark-favico.png' class=KJELogo alt='Dynamic Funds'></div>dynamic.ca</div>";
  KJE.ReportFooter =
    "<div class=KJECenter><p><span class='KJEBold'>Copyright &copy; Dynamic Funds. All rights reserved.</span></p><p class='KJEReportFooter KJECenter'>Information and interactive calculators are made available to you only as self-help tools for your independent use and are not intended to provide investment or tax advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes. We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues.</p></div><!--EXTRA_FOOTER-->";
  
    KJE.parameters.set("RESP_CHECKED", true);
  KJE.parameters.set("RESP_SHOW", true);
  KJE.parseInputs = function (a) {
    KJE.parameters.getSet("MSG_DROPPER1", "Education Savings plan");
    KJE.parameters.getSet("MSG_ENTER_LBL1", "Education expenses child one:");
    KJE.parameters.getSet("MSG_ENTER_LBL2", "Education expenses child two:");
    KJE.parameters.getSet("MSG_ENTER_LBL3", "Education expenses child three:");
    KJE.parameters.getSet("MSG_ENTER_LBL4", "Education expenses child four:");
    KJE.Default.RESP_RANGES_DESC = KJE.parameters.get("ARRAY_RESP_RANGES_DESC", [
      "&nbsp;&nbsp;0 - " + KJE.dollars(KJE.Default.RESP_RANGES[1]),
      "&nbsp;&nbsp;" +
        KJE.dollars(KJE.Default.RESP_RANGES[1]) +
        " - " +
        KJE.dollars(KJE.Default.RESP_RANGES[2]),
      "&nbsp;&nbsp;over " + KJE.dollars(KJE.Default.RESP_RANGES[2]),
    ]);
    var b = KJE.getDropBox(
      "RESP_INCOME",
      0,
      KJE.Default.RESP_RANGES_ID,
      KJE.Default.RESP_RANGES_DESC
    );
    a = KJE.replace("**RESP_INCOME**", b, a);
    return a;
  };
  KJE.Default.CACollegeSavingsSetValues = function (b) {
    var a = KJE.inputs.items;
    if (a.RESP_INCOME) {
      b.RESP_INCOME = a.RESP_INCOME.getValue();
    }
    if (a.RESP_CHECKED) {
      b.RESP_CHECKED = a.RESP_CHECKED.getValue();
      if (b.RESP_CHECKED) {
        a.RESP_INCOME.enable();
      } else {
        a.RESP_INCOME.disable();
      }
    }
  };
  KJE.Default.getRESPGrant = function (c, d, f, g) {
    var k = 0;
    var a = 0;
    var m = KJE.Default.RESP_CONTRIB_MAX;
    var b = KJE.Default.RESP_CONTRIB_MAX1;
    var e = KJE.Default.RESP_PERCENTAGES;
    var j = KJE.Default.RESP_GRANT_MAX_RANGES;
    var q = KJE.Default.RESP_MAX_AGE;
    var l = KJE.Default.RESP_LIFE_TIME_GRANT_MAX;
    var o = KJE.Default.RESP_GRANT_PERCENT;
    var p = KJE.round;
    var h = f * 12 > m ? m : f * 12;
    if (c + d <= q) {
      g = g > e.length - 1 ? e.length - 1 : g;
      k = p((h < b ? h : b) * e[g], 2);
      if (h > b) {
        k += p((h - b) * o, 2);
      }
      if (k > j[g]) {
        k = j[g];
      }
      a = (q - d + 1) * k;
      if (a > l) {
        var i = Math.floor(l / k) - 1;
        if (i + 1 == c) {
          k = l % k;
        } else {
          if (i < c) {
            k = 0;
          }
        }
      }
    }
    return k;
  };
  KJE.Default.RESP_RANGES = [0, 50197, 100392];
  KJE.Default.RESP_RANGES_ID = [0, 1, 2];
  KJE.Default.RESP_CONTRIB_MAX1 = 500;
  KJE.Default.RESP_PERCENTAGES = [0.4, 0.3, 0.2];
  KJE.Default.RESP_GRANT_PERCENT = 0.2;
  KJE.Default.RESP_GRANT_MAX_RANGES = [600, 550, 500];
  KJE.Default.RESP_MAX_AGE = 17;
  KJE.Default.RESP_CONTRIB_MAX = 2500;
  KJE.Default.RESP_LIFE_TIME_GRANT_MAX = 7200;
  KJE.Default.InflationRate = 2;
  KJE.Default.TaxRate = 35;
  KJE.Default.TaxRateRetire = 15;
  KJE.definitions.set(
    "**INFLATION_DEFINITION**",
    "What you expect for the average long-term inflation rate."
  );
  KJE.definitions.set(
    "**ROR_DEFINITION**",
    "The actual rate of return is largely dependent on the type of investments you select. For example, the total return including dividends of the S&amp;P/TSX Composite Index for the 10 year period from December 31, 2012 through December 31, 2022 was 7.6% (source spindices.com).  Savings accounts at a bank or credit union may pay as little as 2% or less.  It is important to remember that future rates of return can't be predicted with certainty and that investments that pay higher rates of return are subject to higher risk and volatility. The actual rate of return on investments can vary widely over time, especially for long-term investments. This includes the potential loss of principal on your investment."
  );
  KJE.CollegeSavingsCalc = function () {
    var b = KJE;
    this.AGE_TO_ATTEND_SCHOOL = 18;
    this.YEARS_OF_SCHOOL = 4;
    this.CHILD_COUNT_MAX = 4;
    this.sPrefix = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Sixth",
      "Seventh",
    ];
    this.sPrefixLower = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
    ];
    this.sPrefixCount = ["one", "two", "three", "four", "five", "six", "seven"];
    this.MSG_ROOM_AND_BOARD = KJE.parameters.get(
      "MSG_ROOM_AND_BOARD",
      "Room and board"
    );
    this.LBL_ROOM_AND_BOARD = KJE.parameters.get(
      "LBL_ROOM_AND_BOARD",
      "room and board"
    );
    this.MSG_ANNUAL_TUITION = KJE.parameters.get("MSG_ANNUAL_TUITION", "Tuition");
    this.LBL_ANNUAL_TUITION = KJE.parameters.get("LBL_ANNUAL_TUITION", "tuition");
    this.MSG_PERFECT = KJE.parameters.get(
      "MSG_PERFECT",
      "You will meet your savings goal!"
    );
    this.MSG_OVER = KJE.parameters.get(
      "MSG_OVER",
      "You will exceed your savings goal!"
    );
    this.MSG_UNDER = KJE.parameters.get(
      "MSG_UNDER",
      "You may need to make a few changes."
    );
    this.MSG_SUMMARY = KJE.parameters.get(
      "MSG_SUMMARY",
      "Your CHILD_LBL will be entering school in CHILD_START_YEARS years. At that time, one year's LBL_ANNUAL_TUITION plus LBL_ROOM_AND_BOARD will have increased from CHILD_TOTAL_PER_YEAR to CHILD_FIRSTYR_COSTS. Total costs for your CHILD_LBL's education are estimated at CHILD_TOTAL_COSTS."
    );
    this.MSG_SUMMARY = KJE.replace(
      "LBL_ROOM_AND_BOARD",
      this.LBL_ROOM_AND_BOARD,
      KJE.replace("LBL_ANNUAL_TUITION", this.LBL_ANNUAL_TUITION, this.MSG_SUMMARY)
    );
    this.MSG_ERROR2 = KJE.parameters.get(
      "MSG_ERROR2",
      "Education age cannot be less than your child's current age."
    );
    this.MSG_ERROR1 = KJE.parameters.get(
      "MSG_ERROR1",
      "Please enter expenses for at least one child."
    );
    this.MSG_MAINTAIN = KJE.parameters.get(
      "MSG_MAINTAIN",
      "You should keep your monthly savings at KJE1."
    );
    this.MSG_INCREASE = KJE.parameters.get(
      "MSG_INCREASE",
      "You should increase your monthly savings to KJE1."
    );
    this.MSG_DECREASE = KJE.parameters.get(
      "MSG_DECREASE",
      "You could decrease your monthly savings to KJE1."
    );
    this.CHILD = new Array(this.CHILD_COUNT_MAX);
    this.CHILD_START_YEARS = KJE.IntArray(this.CHILD_COUNT_MAX);
    this.AGE_OF_CHILD = KJE.IntArray(this.CHILD_COUNT_MAX);
    this.AGE_START = KJE.IntArray(this.CHILD_COUNT_MAX);
    this.CHILD_TOTAL_COSTS = KJE.FloatArray(this.CHILD_COUNT_MAX);
    this.CHILD_FIRSTYR_COSTS = KJE.FloatArray(this.CHILD_COUNT_MAX);
    this.CHILD_TOTAL_PER_YEAR = KJE.FloatArray(this.CHILD_COUNT_MAX);
    this.CHILD_ANNUAL_TUITION = KJE.FloatArray(this.CHILD_COUNT_MAX);
    this.CHILD_ROOM_AND_BOARD = KJE.FloatArray(this.CHILD_COUNT_MAX);
    this.CHILD_SUMMARY = new Array(this.CHILD_COUNT_MAX);
    this.MSG_SUMMARY_LBL = new Array(this.CHILD_COUNT_MAX);
    this.CHILD_LBL = new Array(this.CHILD_COUNT_MAX);
    this.MSG_CHILD = new Array(this.CHILD_COUNT_MAX);
    for (var a = 0; a < this.CHILD_COUNT_MAX; a++) {
      this.CHILD_LBL[a] = KJE.parameters.get(
        "CHILD_LBL" + b.number(a + 1),
        this.sPrefixLower[a] + " child"
      );
      this.MSG_SUMMARY_LBL[a] = KJE.parameters.get(
        "MSG_SUMMARY_LBL" + b.number(a + 1),
        this.sPrefix[a] + " child summary"
      );
      this.MSG_CHILD[a] = KJE.parameters.get(
        "MSG_CHILD" + b.number(a + 1),
        "Child " + this.sPrefixCount[a]
      );
    }
    this.CHILD_COUNT = 0;
    this.TOTAL_COST = 0;
    this.CHANGE_REQUIRED = "";
    this.RESP_SHOW = KJE.parameters.get("RESP_SHOW", false);
    this.RESP_CHECKED = KJE.parameters.get("RESP_CHECKED", false);
    this.RESP_INCOME = 0;
    this.DS_SAVINGS = null;
    this.DS_EXPENSES = null;
    this.DR_SAVINGS = null;
    this.DS_TOTAL_COST = null;
    this.CS_TOTAL_COST = null;
    this.cats = null;
    this.sSchedule = new KJE.Repeating();
  };
  KJE.CollegeSavingsCalc.prototype.clear = function () {
    for (var a = 0; a < this.CHILD_COUNT_MAX; a++) {
      this.AGE_OF_CHILD[a] = 0;
      this.CHILD_ANNUAL_TUITION[a] = 0;
      this.CHILD_ROOM_AND_BOARD[a] = 0;
      this.AGE_START[a] = this.AGE_TO_ATTEND_SCHOOL;
    }
    this.COLLEGE_COST_INFLATION = 0;
    this.CURRENT_SAVINGS = 0;
    this.MONTHLY_ADDITIONS_TO_SAVINGS = 0;
    this.RATE_OF_RETURN = 0;
    this.INCOME_TAX_RATE = 0;
  };
  KJE.CollegeSavingsCalc.prototype.calculate = function (o) {
    var e = KJE;
    this.TOTAL_COST = 0;
    this.RESP_GRANT_AMT = 0;
    var j = (this.RATE_OF_RETURN / 100) * (1 - this.INCOME_TAX_RATE / 100);
    var f = this.COLLEGE_COST_INFLATION / 100;
    var r = 0;
    this.CHILD_COUNT = 0;
    this.YOUNGEST_CHILD = 1000;
    var h = 0;
    for (k = 0; k < this.CHILD_COUNT_MAX; k++) {
      this.CHILD_TOTAL_COSTS[k] = 0;
      this.CHILD_FIRSTYR_COSTS[k] = 0;
      this.CHILD_TOTAL_PER_YEAR[k] =
        this.CHILD_ANNUAL_TUITION[k] + this.CHILD_ROOM_AND_BOARD[k];
      r += this.CHILD_TOTAL_PER_YEAR[k];
      if (this.AGE_START[k] - this.AGE_OF_CHILD[k] < 0) {
        throw this.MSG_ERROR2;
      }
      if (this.CHILD_TOTAL_PER_YEAR[k] > 0) {
        this.CHILD[k] = true;
        this.CHILD_COUNT++;
        this.CHILD_START_YEARS[k] = this.AGE_START[k] - this.AGE_OF_CHILD[k];
        if (this.YOUNGEST_CHILD > this.AGE_OF_CHILD[k]) {
          this.YOUNGEST_CHILD = this.AGE_OF_CHILD[k];
        }
        if (h < this.AGE_START[k] + this.YEARS_OF_SCHOOL - this.AGE_OF_CHILD[k]) {
          h = this.AGE_START[k] + this.YEARS_OF_SCHOOL - this.AGE_OF_CHILD[k];
        }
      }
    }
    if (r <= 0) {
      throw this.MSG_ERROR1;
    }
    var c = Math.ceil(this.getMonthlySavings(j, this.CURRENT_SAVINGS, f, h));
    if (c < this.MONTHLY_ADDITIONS_TO_SAVINGS) {
      this.CHANGE_REQUIRED = KJE.getKJEReplaced(this.MSG_DECREASE, e.dollars(c));
      this.MSG_RESULTS_STATEMENT = this.MSG_OVER;
    } else {
      if (c > this.MONTHLY_ADDITIONS_TO_SAVINGS) {
        this.CHANGE_REQUIRED = KJE.getKJEReplaced(
          this.MSG_INCREASE,
          e.dollars(c)
        );
        this.MSG_RESULTS_STATEMENT = this.MSG_UNDER;
      } else {
        this.CHANGE_REQUIRED = KJE.getKJEReplaced(
          this.MSG_MAINTAIN,
          e.dollars(c)
        );
        this.MSG_RESULTS_STATEMENT = this.MSG_PERFECT;
      }
    }
    var q = Math.round(h);
    this.DS_SAVINGS = KJE.FloatArray(q);
    this.DR_SAVINGS = KJE.FloatArray(q);
    this.DS_EXPENSES = KJE.FloatArray(q);
    this.cats = KJE.FloatArray(q);
    var b = this.CURRENT_SAVINGS;
    var m = 0;
    var a = 0;
    var l = 0;
    for (d = 0; d < h; d++) {
      if (this.RESP_SHOW && this.RESP_CHECKED) {
        l = 0;
        for (k = 0; k < this.CHILD_COUNT_MAX; k++) {
          if (this.CHILD[k] == true) {
            l += KJE.Default.getRESPGrant(
              d,
              this.AGE_OF_CHILD[k],
              this.MONTHLY_ADDITIONS_TO_SAVINGS / this.CHILD_COUNT,
              this.RESP_INCOME
            );
          }
        }
      } else {
        l = 0;
      }
      if (d == 0) {
        this.RESP_GRANT_AMT = l;
      }
      this.RESP_CONTRIB_AMT =
        KJE.Default.RESP_CONTRIB_MAX * this.CHILD_COUNT <
        this.MONTHLY_ADDITIONS_TO_SAVINGS * 12
          ? KJE.Default.RESP_CONTRIB_MAX * this.CHILD_COUNT
          : this.MONTHLY_ADDITIONS_TO_SAVINGS * 12;
      b =
        KJE.FV_BEGIN(
          KJE.ROR_PERIOD(j, 12),
          12,
          this.MONTHLY_ADDITIONS_TO_SAVINGS + l / 12
        ) +
        b * (1 + j);
      for (k = 0; k < this.CHILD_COUNT_MAX; k++) {
        if (
          this.CHILD[k] &&
          d >= this.CHILD_START_YEARS[k] &&
          d < this.CHILD_START_YEARS[k] + 4
        ) {
          m = KJE.FV_AMT(f, d, this.CHILD_TOTAL_PER_YEAR[k]);
          b -= m;
          a += m;
          this.CHILD_TOTAL_COSTS[k] += m;
          if (d == this.CHILD_START_YEARS[k]) {
            this.CHILD_FIRSTYR_COSTS[k] = m;
          }
        }
      }
      this.DR_SAVINGS[d] = b;
      this.DS_EXPENSES[d] = a;
      this.TOTAL_COST += a;
      a = 0;
    }
    this.DS_TOTAL_COST = KJE.FloatArray(this.CHILD_COUNT);
    this.CS_TOTAL_COST = new Array(this.CHILD_COUNT);
    var p = 0;
    for (k = 0; k < this.CHILD_COUNT_MAX; k++) {
      if (this.CHILD[k] == true) {
        this.DS_TOTAL_COST[p] = this.CHILD_TOTAL_COSTS[k];
        this.CS_TOTAL_COST[p] = this.MSG_CHILD[k];
        p++;
      }
    }
    if (o) {
      var g = this.sSchedule;
      g.clearRepeat();
      g.addHeader(
        g.sReportCol("<br />Year", 1),
        g.sReportCol("Starting Savings<br />Balance", 2),
        g.sReportCol("Savings Contributions<br /> and Interest", 3),
        g.sReportCol("<br />Expenses", 4),
        g.sReportCol("Ending Savings<br />Balance", 5)
      );
    }
    var k = 0;
    for (var d = 1; d <= q; d++) {
      k = d - 1;
      this.cats[k] = "" + d;
      if (this.DR_SAVINGS[k] < 0) {
        this.DS_SAVINGS[k] = 0;
      } else {
        this.DS_SAVINGS[k] = this.DR_SAVINGS[k];
      }
      if (o) {
        g.addRepeat(
          d,
          e.dollars(k < 1 ? this.CURRENT_SAVINGS : this.DR_SAVINGS[k - 1]),
          e.dollars(
            this.DR_SAVINGS[k] -
              (k < 1 ? this.CURRENT_SAVINGS : this.DR_SAVINGS[k - 1]) +
              this.DS_EXPENSES[k]
          ),
          e.dollars(this.DS_EXPENSES[k]),
          e.dollars(this.DR_SAVINGS[k])
        );
      }
    }
    for (k = 0; k < this.CHILD_COUNT_MAX; k++) {
      if (this.CHILD[k]) {
        this.CHILD_SUMMARY[k] = this.getSummary(k);
      } else {
        this.CHILD_SUMMARY[k] = "";
      }
    }
    this.CALC_MONTHLY_SAVINGS_REQUIRED = c;
    this.YEARS_BEFORE_DONE = h;
  };
  KJE.CollegeSavingsCalc.prototype.formatReport = function (b) {
    for (var a = 0; a < this.CHILD_COUNT_MAX; a++) {
      b.replace("CHILD_SUMMARY" + (a + 1), this.CHILD_SUMMARY[a]);
      b.dollars("AGE_OF_CHILD" + (a + 1), this.AGE_OF_CHILD[a]);
      b.age("AGE_START" + (a + 1), this.AGE_START[a]);
      b.dollars("CHILD_ANNUAL_TUITION" + (a + 1), this.CHILD_ANNUAL_TUITION[a]);
      b.dollars("CHILD_ROOM_AND_BOARD" + (a + 1), this.CHILD_ROOM_AND_BOARD[a]);
      b.dollars("CHILD_TOTAL_PER_YEAR" + (a + 1), this.CHILD_TOTAL_PER_YEAR[a]);
      b.year("CHILD_START_YEARS" + (a + 1), this.CHILD_START_YEARS[a]);
      b.dollars("CHILD_TOTAL_COSTS" + (a + 1), this.CHILD_TOTAL_COSTS[a]);
      b.dollars("CHILD_FIRSTYR_COSTS" + (a + 1), this.CHILD_FIRSTYR_COSTS[a]);
    }
    b.replace("CHANGE_REQUIRED", this.CHANGE_REQUIRED);
    b.inflationRate("COLLEGE_COST_INFLATION", this.COLLEGE_COST_INFLATION / 100);
    b.dollars("CURRENT_SAVINGS", this.CURRENT_SAVINGS);
    b.dollars("MONTHLY_ADDITIONS_TO_SAVINGS", this.MONTHLY_ADDITIONS_TO_SAVINGS);
    b.returnRate("RATE_OF_RETURN", this.RATE_OF_RETURN / 100);
    b.dollars("INCOME_TAX_RATE", this.INCOME_TAX_RATE);
    b.dollars(
      "CALC_MONTHLY_SAVINGS_REQUIRED",
      this.CALC_MONTHLY_SAVINGS_REQUIRED
    );
    b.replace("MSG_RESULTS_STATEMENT", this.MSG_RESULTS_STATEMENT);
    b.dollars(
      "CALC_MONTHLY_SAVINGS_REQUIRED",
      this.CALC_MONTHLY_SAVINGS_REQUIRED
    );
    b.year("YEARS_BEFORE_DONE", this.YEARS_BEFORE_DONE);
    b.number("YOUNGEST_CHILD", this.YOUNGEST_CHILD);
    b.dollars("TOTAL_COST", this.TOTAL_COST);
    b.dollars(
      "ANNUAL_ADDITIONS_TO_SAVINGS",
      this.MONTHLY_ADDITIONS_TO_SAVINGS * 12
    );
    if (this.RESP_SHOW) {
      b.dollars("RESP_CONTRIB_AMT", this.RESP_CONTRIB_AMT);
      b.replace("RESP_INCOME", KJE.Default.RESP_RANGES_DESC[this.RESP_INCOME]);
      b.dollars("RESP_GRANT_AMT", this.RESP_GRANT_AMT);
      b.dollars("RESP_GRANT_MAX", KJE.Default.RESP_GRANT_MAX);
      b.dollars("RESP_CONTRIB_MAX", KJE.Default.RESP_CONTRIB_MAX);
      b.percent("RESP_GRANT_PERCENT", KJE.Default.RESP_GRANT_PERCENT);
    }
    b.replace("MSG_ANNUAL_TUITION", this.MSG_ANNUAL_TUITION);
    b.replace("LBL_ANNUAL_TUITION", this.LBL_ANNUAL_TUITION);
    b.replace("LBL_ROOM_AND_BOARD", this.LBL_ROOM_AND_BOARD);
    b.replace("**REPEATING GROUP**", this.sSchedule.getRepeat());
  };
  KJE.CollegeSavingsCalc.prototype.getSummary = function (a) {
    var c = KJE;
    var b = KJE.replace(
      "CHILD_START_YEARS",
      c.number(this.CHILD_START_YEARS[a]),
      this.MSG_SUMMARY
    );
    b = KJE.replace(
      "CHILD_TOTAL_PER_YEAR",
      c.dollars(this.CHILD_TOTAL_PER_YEAR[a]),
      b
    );
    b = KJE.replace(
      "CHILD_FIRSTYR_COSTS",
      c.dollars(this.CHILD_FIRSTYR_COSTS[a]),
      b
    );
    b = KJE.replace("CHILD_LBL", this.CHILD_LBL[a], b);
    b = KJE.replace("CHILD_TOTAL_COSTS", c.dollars(this.CHILD_TOTAL_COSTS[a]), b);
    return "<p><strong>" + this.MSG_SUMMARY_LBL[a] + "</strong><br />" + b;
  };
  KJE.CollegeSavingsCalc.prototype.getMonthlySavings = function (d, b, e, a) {
    var f = 10000;
    var h = 5000;
    var c = 0;
    if (this.getBalance(d, 0, b, e, a) >= 0) {
      return 0;
    }
    for (var g = 1; g < 50; g++) {
      c = this.getBalance(d, f, b, e, a);
      if (c == 0) {
        return f;
      } else {
        if (c > 0) {
          f -= h;
        } else {
          f += h;
        }
      }
      h = h / 2;
    }
    return f;
  };
  KJE.CollegeSavingsCalc.prototype.getCurrentSavings = function (d, e, b) {
    var a = 2000000;
    var g = 1000000;
    var c = 0;
    for (var f = 1; f < 50; f++) {
      c = this.getBalance(d, 0, a, e, b);
      if (c == 0) {
        return a;
      } else {
        if (c > 0) {
          a -= g;
        } else {
          a += g;
        }
      }
      g = g / 2;
    }
    return a;
  };
  KJE.CollegeSavingsCalc.prototype.getBalance = function (g, l, p, f, k) {
    var a = p;
    var j = 0;
    var h = 0;
    var c = this.AGE_OF_CHILD;
    var b = this.CHILD_COUNT;
    var q = this.CHILD;
    var o = this.CHILD_COUNT_MAX;
    var e = this.CHILD_START_YEARS;
    var m = this.CHILD_TOTAL_PER_YEAR;
    for (var d = 0; d < k; d++) {
      if (this.RESP_SHOW && this.RESP_CHECKED) {
        j = 0;
        for (h = 0; h < this.CHILD_COUNT_MAX; h++) {
          if (q[h] == true) {
            j += KJE.Default.getRESPGrant(d, c[h], l / b, this.RESP_INCOME);
          }
        }
      } else {
        j = 0;
      }
      a = KJE.FV_BEGIN(KJE.ROR_PERIOD(g, 12), 12, l + j / 12) + a * (1 + g);
      for (h = 0; h < o; h++) {
        if (q[h] && d >= e[h] && d < e[h] + 4) {
          a -= KJE.FV_AMT(f, d, m[h]);
        }
      }
    }
    return a;
  };
  KJE.CollegeSavingsCalc.DefaultTuition = 39400;
  KJE.CollegeSavingsCalc.DefaultRoom = 18170;
  KJE.CollegeSavingsCalc.DefaultAgeStart = 18;
  KJE.CollegeSavingsCalc.DefaultInflation = 4.8;
  KJE.CalcName = "Education Savings Calculator (Canadian)";
  KJE.CalcType = "CACollegeSavings";
  KJE.CalculatorTitleTemplate = "KJE1 KJE2";
  KJE.initialize = function () {
    KJE.CalcControl = new KJE.CollegeSavingsCalc();
    KJE.GuiControl = new KJE.CollegeSavings(KJE.CalcControl);
  };
  KJE.CollegeSavings = function (g) {
    var f = KJE;
    var t = KJE.gLegend;
    var j = KJE.inputs.items;
    this.MSG_GRAPH1 = KJE.parameters.get("MSG_GRAPH1", "Balance");
    this.MSG_GRAPH2 = KJE.parameters.get("MSG_GRAPH2", "Expenses");
    this.MSG_GRAPH3 = KJE.parameters.get(
      "MSG_GRAPH3",
      "Balance and Expenses by Year"
    );
    this.MSG_GRAPH4 = KJE.parameters.get("MSG_GRAPH4", "Year number");
    this.MSG_GRAPH5 = KJE.parameters.get("MSG_GRAPH5", "Total Costs By Child");
    var a = KJE.parameters.get("MSG_TOTAL", "Total expenses");
    KJE.SliderKnobExtraClass = KJE.DropperColors ? KJE.DropperColors[0] : false;
    KJE.InflationRateSlider("COLLEGE_COST_INFLATION", "Education cost inflation");
    KJE.DollarSlider("CURRENT_SAVINGS", "Current savings", 0, 1000000);
    KJE.DollarSlider(
      "MONTHLY_ADDITIONS_TO_SAVINGS",
      "Monthly contributions",
      0,
      100000
    );
    KJE.InvestRateSlider("RATE_OF_RETURN", "Rate of return");
    KJE.Label("MONTHLY_REQUIRED", "Monthly contributions required");
    KJE.DropBox("RESP_INCOME", "Annual income range");
    KJE.Checkbox(
      "RESP_CHECKED",
      "Include RESP",
      null,
      "Include Registered Education Savings Plan in calculations"
    );
    for (var o = 0; o < g.CHILD_COUNT_MAX; o++) {
      KJE.SliderKnobExtraClass = KJE.DropperColors
        ? KJE.DropperColors[o + 1]
        : false;
      KJE.InputItem.AltHelpName = "AGE_OF_CHILD";
      KJE.NumberSlider(
        "AGE_OF_CHILD" + f.number(o + 1),
        "Age of child " + g.sPrefixCount[o],
        0,
        g.RESP_SHOW ? 25 : 25,
        0
      );
      KJE.InputItem.AltHelpName = "AGE_START";
      KJE.NumberSlider(
        "AGE_START" + f.number(o + 1),
        KJE.parameters.get("MSG_AGE_START", "Age to start education"),
        0,
        g.RESP_SHOW ? 25 : 25,
        0
      );
      KJE.InputItem.AltHelpName = "CHILD_ANNUAL_TUITION";
      KJE.DollarSlider(
        "CHILD_ANNUAL_TUITION" + f.number(o + 1),
        g.MSG_ANNUAL_TUITION,
        0,
        100000
      );
      KJE.InputItem.AltHelpName = "CHILD_ROOM_AND_BOARD";
      KJE.DollarSlider(
        "CHILD_ROOM_AND_BOARD" + f.number(o + 1),
        g.MSG_ROOM_AND_BOARD,
        0,
        100000
      );
    }
    var r = KJE.gNewGraph(
      KJE.gLINE,
      "GRAPH1",
      true,
      false,
      KJE.colorList[1],
      this.MSG_GRAPH3
    );
    r._legend._iOrientation = t.GRID_TOP_LEFT;
    r._titleYAxis.setText(KJE.sCurrency);
    r._titleXAxis.setText(this.MSG_GRAPH4);
    var s = KJE.gNewGraph(
      KJE.gCATEGORIES,
      "GRAPH2",
      true,
      true,
      KJE.colorList[1],
      this.MSG_GRAPH5
    );
    s._axisX._fSpacingPercent = 0.3;
    s._showItemLabel = true;
    s._showItemLabelOnTop = true;
    s._legend.setVisible(false);
    s._titleXAxis.setText("");
    s._titleYAxis.setText(KJE.sCurrency);
    var q = KJE.parameters.get("MSG_DROPPER1", "College Savings plan:");
    var p = function () {
      return (
        q +
        "|" +
        KJE.subText(
          a + " " + f.dollars(g.TOTAL_COST),
          "KJERightBold",
          KJE.subTextDropperContainer
        )
      );
    };
    KJE.addDropper(new KJE.Dropper("INPUTS", true, p, p), KJE.colorList[0]);
    var n = KJE.parameters.get("MSG_ENTER_LBL1", "College expenses child one:");
    var e = function () {
      return (
        n +
        "|" +
        KJE.subText(
          f.dollars(g.CHILD_TOTAL_COSTS[0]),
          "KJERightBold",
          KJE.subTextDropperContainer
        )
      );
    };
    KJE.addDropper(new KJE.Dropper("CHILD1", true, e, e), KJE.colorList[0]);
    var m = KJE.parameters.get("MSG_ENTER_LBL2", "College expenses child two:");
    var d = function () {
      return (
        m +
        "|" +
        KJE.subText(
          f.dollars(g.CHILD_TOTAL_COSTS[1]),
          "KJERightBold",
          KJE.subTextDropperContainer
        )
      );
    };
    KJE.addDropper(new KJE.Dropper("CHILD2", false, d, d), KJE.colorList[0]);
    var k = KJE.parameters.get("MSG_ENTER_LBL3", "College expenses child three:");
    var c = function () {
      return (
        k +
        "|" +
        KJE.subText(
          f.dollars(g.CHILD_TOTAL_COSTS[2]),
          "KJERightBold",
          KJE.subTextDropperContainer
        )
      );
    };
    KJE.addDropper(new KJE.Dropper("CHILD3", false, c, c), KJE.colorList[0]);
    var h = KJE.parameters.get("MSG_ENTER_LBL4", "College expenses child four:");
    var b = function () {
      return (
        h +
        "|" +
        KJE.subText(
          f.dollars(g.CHILD_TOTAL_COSTS[3]),
          "KJERightBold",
          KJE.subTextDropperContainer
        )
      );
    };
    KJE.addDropper(new KJE.Dropper("CHILD4", false, b, b), KJE.colorList[0]);
  };
  KJE.CollegeSavings.prototype.setValues = function (c) {
    var a = KJE.inputs.items;
    c.COLLEGE_COST_INFLATION = a.COLLEGE_COST_INFLATION.getValue();
    c.CURRENT_SAVINGS = a.CURRENT_SAVINGS.getValue();
    c.MONTHLY_ADDITIONS_TO_SAVINGS = a.MONTHLY_ADDITIONS_TO_SAVINGS.getValue();
    c.RATE_OF_RETURN = a.RATE_OF_RETURN.getValue();
    c.INCOME_TAX_RATE = 0;
    for (var b = 0; b < c.CHILD_COUNT_MAX; b++) {
      var d = KJE.number(b + 1);
      c.AGE_OF_CHILD[b] = a["AGE_OF_CHILD" + d].getValue();
      c.CHILD_ANNUAL_TUITION[b] = a["CHILD_ANNUAL_TUITION" + d].getValue();
      c.CHILD_ROOM_AND_BOARD[b] = a["CHILD_ROOM_AND_BOARD" + d].getValue();
      c.AGE_START[b] = a["AGE_START" + d].getValue();
    }
    if (KJE.Default.CACollegeSavingsSetValues) {
      KJE.Default.CACollegeSavingsSetValues(c);
    }
  };
  KJE.CollegeSavings.prototype.refresh = function (e) {
    var d = KJE;
    var b = KJE.inputs.items;
    var a = KJE.gGraphs[0];
    var c = KJE.gGraphs[1];
    KJE.setTitleTemplate(
      e.MSG_RESULTS_STATEMENT,
      KJE.subText(e.CHANGE_REQUIRED, "KJECenter")
    );
    a.removeAll();
    a.setGraphCategories(e.cats);
    a.add(
      new KJE.gGraphDataSeries(
        e.DS_SAVINGS,
        this.MSG_GRAPH1,
        a.getColor(1),
        "",
        this.MSG_GRAPH1 + " " + KJE.MSG_YEAR_LBL
      )
    );
    a.add(
      new KJE.gGraphDataSeries(
        e.DS_EXPENSES,
        this.MSG_GRAPH2,
        a.getColor(2),
        "",
        this.MSG_GRAPH2 + " " + KJE.MSG_YEAR_LBL
      )
    );
    a.paint();
    c.removeAll();
    c.setGraphCategories(e.CS_TOTAL_COST);
    c.add(
      new KJE.gGraphDataSeries(e.DS_TOTAL_COST, this.MSG_GRAPH1, a.getColor(1))
    );
    c.paint();
    b.MONTHLY_REQUIRED.setText(d.dollars(e.CALC_MONTHLY_SAVINGS_REQUIRED));
  };
  KJE.CollegeSavingsCalc.DefaultInflation = 3.3;
  KJE.CollegeSavingsCalc.DefaultTuition = 10000;
  KJE.CollegeSavingsCalc.DefaultRoom = 12000;
  KJE.InputScreenText =
    " <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-COLLEGE_COST_INFLATION'><input id='KJE-COLLEGE_COST_INFLATION' /></div> <div id='KJE-C-CURRENT_SAVINGS'><input id='KJE-CURRENT_SAVINGS' /></div> <div id='KJE-C-MONTHLY_ADDITIONS_TO_SAVINGS'><input id='KJE-MONTHLY_ADDITIONS_TO_SAVINGS' /></div> <div id='KJE-C-RATE_OF_RETURN'><input id='KJE-RATE_OF_RETURN' /></div> <div id='KJE-C-RESP_CHECKED'><input id='KJE-RESP_CHECKED' type=checkbox /></div> <div id='KJE-C-RESP_INCOME'>**RESP_INCOME**</div> <div id='KJE-C-CALC_MONTHLY_SAVINGS_REQUIRED'><div id='KJE-CALC_MONTHLY_SAVINGS_REQUIRED'></div></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-CHILD1><div id=KJE-P-CHILD1>Input information:</div></div> <div id=KJE-E-CHILD1 > <div id='KJE-C-AGE_OF_CHILD1'><input id='KJE-AGE_OF_CHILD1' /></div> <div id='KJE-C-AGE_START1'><input id='KJE-AGE_START1' /></div> <div id='KJE-C-CHILD_ANNUAL_TUITION1'><input id='KJE-CHILD_ANNUAL_TUITION1' /></div> <div id='KJE-C-CHILD_ROOM_AND_BOARD1'><input id='KJE-CHILD_ROOM_AND_BOARD1' /></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-CHILD2><div id=KJE-P-CHILD2>Input information:</div></div> <div id=KJE-E-CHILD2 > <div id='KJE-C-AGE_OF_CHILD2'><input id='KJE-AGE_OF_CHILD2' /></div> <div id='KJE-C-AGE_START2'><input id='KJE-AGE_START2' /></div> <div id='KJE-C-CHILD_ANNUAL_TUITION2'><input id='KJE-CHILD_ANNUAL_TUITION2' /></div> <div id='KJE-C-CHILD_ROOM_AND_BOARD2'><input id='KJE-CHILD_ROOM_AND_BOARD2' /></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-CHILD3><div id=KJE-P-CHILD3>Input information:</div></div> <div id=KJE-E-CHILD3 > <div id='KJE-C-AGE_OF_CHILD3'><input id='KJE-AGE_OF_CHILD3' /></div> <div id='KJE-C-AGE_START3'><input id='KJE-AGE_START3' /></div> <div id='KJE-C-CHILD_ANNUAL_TUITION3'><input id='KJE-CHILD_ANNUAL_TUITION3' /></div> <div id='KJE-C-CHILD_ROOM_AND_BOARD3'><input id='KJE-CHILD_ROOM_AND_BOARD3' /></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-CHILD4><div id=KJE-P-CHILD4>Input information:</div></div> <div id=KJE-E-CHILD4 > <div id='KJE-C-AGE_OF_CHILD4'><input id='KJE-AGE_OF_CHILD4' /></div> <div id='KJE-C-AGE_START4'><input id='KJE-AGE_START4' /></div> <div id='KJE-C-CHILD_ANNUAL_TUITION4'><input id='KJE-CHILD_ANNUAL_TUITION4' /></div> <div id='KJE-C-CHILD_ROOM_AND_BOARD4'><input id='KJE-CHILD_ROOM_AND_BOARD4' /></div> <div class=KJEDropperSpacer></div> </div> **GRAPH1** **GRAPH2** ";
  KJE.DefinitionText =
    " <div id='KJE-D-AGE_OF_CHILD' ><dt>Age of children</dt><dd>The current age of your children. The difference between their current age and the age they start college is the number of years you have to save. Note that there can be restrictions on the amount of grant available and participation in an RESP for children 16 or older.</dd></div> <div id='KJE-D-AGE_START' ><dt>Age to start education</dt><dd>The age your child will begin post-secondary education. The default is 18, but this can be any age up to 25.</dd></div> <div id='KJE-D-CHILD_ANNUAL_TUITION' ><dt>Annual tuition</dt><dd>Current estimated cost of one year of tuition and books. This amount should be per child and be specific to the school and program they may be interested in attending. For the purposes of this calculator all expenses are assumed to be due at the end of the year.</dd></div> <div id='KJE-D-CHILD_ROOM_AND_BOARD' ><dt>Room and board</dt><dd>The current estimated cost of one-year room and board. Like tuition and books, this amount should be per child and specific to the school they may be interested in attending. For the purposes of this calculator, all expenses are assumed to be due at the end of the year.</dd></div> <div id='KJE-D-COLLEGE_COST_INFLATION' ><dt>Education cost inflation</dt><dd>This is the percentage that you expect educational costs to increase per year. The annual education inflation is approximately 3.3% <!--(source: Statistics Canada 2018 - 2019 Academic year)-->.</dd></div> <div id='KJE-D-CURRENT_SAVINGS' ><dt>Current amount</dt><dd>The total amount you currently have saved for your children's education.</dd></div> <div id='KJE-D-MONTHLY_ADDITIONS_TO_SAVINGS' ><dt>Monthly contributions</dt><dd>The dollar amount you plan to save per month toward your children's education. All amounts are assumed to be added to your account at the beginning of the month.</dd></div> <div id='KJE-D-RATE_OF_RETURN' ><dt>Rate of return</dt><dd>This is the annually compounded rate of return you expect from your investments. This will also be the rate used if you end up with a negative balance and need to borrow money to meet your goal. **ROR_DEFINITION** </dd></div> <div id='KJE-D-RESP_CHECKED' ><dt>Registered Education Savings Plan (RESP)</dt><dd>Check this box if you wish to calculate your savings with a Registered Education Savings Plan (RESP). There are two advantages to using an RESP to save for your children's education. First, the money grows tax free until the child needs it for tuition, residence and other educational expenses. Second, you receive a Canada education savings grant (CESG) worth as much as $600 per year per child. The grant amounts are calculated as follows: <p> <div class='KJEReportTableDiv'><table class='KJEReportTable KJEReportTableShrink'><caption class='KJEHeaderRow KJEHeading'>Canada education savings grant (CESG) 2022</caption> <thead class='KJEReportTHeader'> <tr class=KJEHeaderRow><th class='KJEHeading KJECell30' scope='col'>Income Range</th><th class='KJEHeading KJECell70' scope='col'>Annual Grant Calculated As</th></tr> </thead> <tbody class='KJEReportTBody'> <tr class='KJEOddRow'><th class='KJELabel KJECellBorder KJELabelPad' scope='row'>$0 - $50,197*</th><td class='KJECell KJELeftPad'>$0.40 for each $1 for the first $500. <br>$0.20 for each $1 for the next $1,500. <br>Maximum annual grant is $600.</td></tr> <tr class='KJEOddRow'><th class='KJELabel KJECellBorder KJELabelPad' scope='row'>$50,197* - $100,392*</th><td class='KJECell KJELeftPad'>$0.30 for each $1 for the first $500. <br>$0.20 for each $1 until you reach the maximum grant. <br>Maximum annual grant is $550.</td></tr> <tr class='KJEOddRow'><th class='KJELabel KJECellBorder KJELabelPad' scope='row'>over $100,392*</th><td class='KJECell KJELeftPad'>$0.20 for each $1 for the first $2,500. <br>Maximum annual grant is $500.</td></tr> </tbody> </table></div> <p>*These amounts are adjusted annually for inflation. <p> Please note that for the purposes of this calculator, taxation is not factored into the results. This calculator assumes that 1/12 of your annual Canada education savings grant (CESG) is added to your savings each month along with your normal contribution. <p> You are limited to a total of $50,000 in contributions to an RESP per child, but there is no annual limit. You may contribute the entire $50,000 contribution in one year if you have the means or a windfall. Lifetime CESP grants are limited to $7,200 per child. The grant amount you receive does not reduce your contribution limit to an RESP. For additional information you can visit: <a href='https://www.canada.ca/en/services/benefits/education/education-savings.html' target=new> Canada RESP</A> </dd></div> ";
  KJE.ReportText =
    ' <!--HEADING "College Savings Plan" HEADING--> <h2 class=\'KJEReportHeader KJEFontHeading\'>MSG_RESULTS_STATEMENT</h2> During the next YEARS_BEFORE_DONE years you will need to save about TOTAL_COST to cover educational expenses. MSG_RESULTS_STATEMENT CHANGE_REQUIRED **GRAPH** This education savings plan assumes contributions of RESP_CONTRIB_AMT per year to one or more Registered Education Savings Plan (RESP). This entitles you to a Canada Education Savings Grant of RESP_GRANT_AMT. Please note that if you have more than one child, the contributions and grants are divided equally among your children. <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Your Current Savings Plan</caption> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell70" scope=\'row\'>Education cost inflation </th><td class="KJELabel">COLLEGE_COST_INFLATION </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder KJECell70" scope=\'row\'>Current savings </th><td class="KJELabel">CURRENT_SAVINGS </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell70" scope=\'row\'>Monthly contributions </th><td class="KJELabel">MONTHLY_ADDITIONS_TO_SAVINGS </td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder KJECell70" scope=\'row\'>Rate of return </th><td class="KJELabel">RATE_OF_RETURN </td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell70" scope=\'row\'>Total expenses </th><td class="KJELabel">TOTAL_COST</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECenter" colspan=2 scope="colgroup">CHANGE_REQUIRED</th></tr> </tfoot> </table> </div> <h2 class=\'KJEReportHeader KJEFontHeading\'>Educational Expenses</h2>The following educational costs assume that your children will attend a four-year program. If they are planning on attending school for a longer period of time, the cost will increase. **GRAPH** CHILD_SUMMARY1 CHILD_SUMMARY2 CHILD_SUMMARY3 CHILD_SUMMARY4 <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Savings and expenses by year</h2> **REPEATING GROUP** ';
  KJE.CalcName = "Education Savings Calculator ";
  
  KJE.parameters.set(
    "COLLEGE_COST_INFLATION",
    KJE.CollegeSavingsCalc.DefaultInflation
  );
  KJE.parameters.set("CURRENT_SAVINGS", 0);
  KJE.parameters.set("MONTHLY_ADDITIONS_TO_SAVINGS", 250);
  KJE.parameters.set("RATE_OF_RETURN", KJE.Default.RORMarket);
  KJE.parameters.set("AGE_OF_CHILD1", 9);
  KJE.parameters.set("AGE_START1", KJE.CollegeSavingsCalc.DefaultAgeStart);
  KJE.parameters.set(
    "CHILD_ANNUAL_TUITION1",
    KJE.CollegeSavingsCalc.DefaultTuition
  );
  KJE.parameters.set("CHILD_ROOM_AND_BOARD1", KJE.CollegeSavingsCalc.DefaultRoom);
  KJE.parameters.set("AGE_OF_CHILD2", 0);
  KJE.parameters.set("AGE_START2", KJE.CollegeSavingsCalc.DefaultAgeStart);
  KJE.parameters.set("CHILD_ANNUAL_TUITION2", 0);
  KJE.parameters.set("CHILD_ROOM_AND_BOARD2", 0);
  KJE.parameters.set("AGE_OF_CHILD3", 0);
  KJE.parameters.set("AGE_START3", KJE.CollegeSavingsCalc.DefaultAgeStart);
  KJE.parameters.set("CHILD_ANNUAL_TUITION3", 0);
  KJE.parameters.set("CHILD_ROOM_AND_BOARD3", 0);
  KJE.parameters.set("AGE_OF_CHILD4", 0);
  KJE.parameters.set("AGE_START4", KJE.CollegeSavingsCalc.DefaultAgeStart);
  KJE.parameters.set("CHILD_ANNUAL_TUITION4", 0);
  KJE.parameters.set("CHILD_ROOM_AND_BOARD4", 0);
  
  