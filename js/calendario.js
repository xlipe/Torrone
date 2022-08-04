window.onload = function gera_calendario(ano) {
    var dias_semana = new Array(
      "Dom",
      "Seg",
      "Ter",
      "Qua",
      "Qui",
      "Sex",
      "Sab"
    );
    var meses_ano = new Array(
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    );
    var qtde_dias_mes = new Array(
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    );
    var calendario = new Date();
    var num_dias_semana = 7;
    var cal;
    var ano = calendario.getFullYear();
    var mes = calendario.getMonth();
    var dia_hoje = calendario.getDate();
    var TR_start = "<TR>";
    var TR_end = "</TR>";
    var TD_start = "<TD BORDER=0 WIDTH=30 BGCOLOR=e9e9e9><CENTER>";
    var TD_end = "</CENTER></TD>";
    var red_start = "<TD BORDER=1 WIDTH=30 BGCOLOR=ffa4fc ALIGN=CENTER>";
    var red_end = "</TD>";

    if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0))
      qtde_dias_mes[1] = 29;

    cal = "";

    cal += '<div class="row">' + '<div class="col">';

    calendario.setDate(1);
    calendario.setMonth(mes);
    calendario.setUTCFullYear(ano);

    cal +=
      "<TABLE BORDER=1><TR><TD><TABLE BGCOLOR=0852d1 BORDER=0 CELLSPACING=5>" + TR_start;
    cal +=
      '<TD BGCOLOR=a0a0a0 COLSPAN="' +
      num_dias_semana +
      '" BGCOLOR="#EFEFEF"><CENTER><B>';
    cal += meses_ano[mes] + "   " + ano + "</B>" + TD_end + TR_end;
    cal += TR_start;

    for (i = 0; i < num_dias_semana; i++)
      cal += TD_start + "<B>" + dias_semana[i] + "</B>" + TD_end;
    cal += TD_end + TR_end;

    cal += TR_start;
    dia = 0;
    let j = 1;
    for (i = 0; i < calendario.getDay(); i++) {
      cal += TD_start + "  " + TD_end;
      dia++;
    }
    for (i = 1; i <= qtde_dias_mes[mes]; i++) {
      if (dia == 0) cal += TR_start;
      if (i == dia_hoje) cal += red_start + i + red_end;
      else cal += TD_start + i + TD_end;
      dia++;
      if (dia == num_dias_semana) {
        cal += TR_end;
        dia = 0;
      }
      j++;
    }
    cal += "</TABLE></TABLE></div>";
    document.getElementById("calendario").innerHTML = cal;
  }