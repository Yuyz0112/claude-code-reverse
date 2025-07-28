
// @from(Start 1522245, End 1535121)
ak1 = Y((xM9, rk1) => {
  rk1.exports = () => {
    return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g
  }
})
// @from(Start 1535127, End 1537086)
Hx1 = Y((zS9, Dx1) => {
  var {
    Duplex: M_4
  } = B1("stream");

  function Yx1(I) {
    I.emit("close")
  }

  function S_4() {
    if (!this.destroyed && this._writableState.finished) this.destroy()
  }

  function _x1(I) {
    if (this.removeListener("error", _x1), this.destroy(), this.listenerCount("error") === 0) this.emit("error", I)
  }

  function L_4(I, d) {
    let G = !0,
      Z = new M_4({
        ...d,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1
      });
    return I.on("message", function C(W, w) {
      let B = !w && Z._readableState.objectMode ? W.toString() : W;
      if (!Z.push(B)) I.pause()
    }), I.once("error", function C(W) {
      if (Z.destroyed) return;
      G = !1, Z.destroy(W)
    }), I.once("close", function C() {
      if (Z.destroyed) return;
      Z.push(null)
    }), Z._destroy = function(C, W) {
      if (I.readyState === I.CLOSED) {
        W(C), process.nextTick(Yx1, Z);
        return
      }
      let w = !1;
      if (I.once("error", function B(A) {
          w = !0, W(A)
        }), I.once("close", function B() {
          if (!w) W(C);
          process.nextTick(Yx1, Z)
        }), G) I.terminate()
    }, Z._final = function(C) {
      if (I.readyState === I.CONNECTING) {
        I.once("open", function W() {
          Z._final(C)
        });
        return
      }
      if (I._socket === null) return;
      if (I._socket._writableState.finished) {
        if (C(), Z._readableState.endEmitted) Z.destroy()
      } else I._socket.once("finish", function W() {
        C()
      }), I.close()
    }, Z._read = function() {
      if (I.isPaused) I.resume()
    }, Z._write = function(C, W, w) {
      if (I.readyState === I.CONNECTING) {
        I.once("open", function B() {
          Z._write(C, W, w)
        });
        return
      }
      I.send(C, w)
    }, Z.on("end", S_4), Z.on("error", _x1), Z
  }
  Dx1.exports = L_4
})
// @from(Start 1537092, End 1537581)
sA = Y((QS9, Jx1) => {
  var Fx1 = ["nodebuffer", "arraybuffer", "fragments"],
    gx1 = typeof Blob !== "undefined";
  if (gx1) Fx1.push("blob");
  Jx1.exports = {
    BINARY_TYPES: Fx1,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob: gx1,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {}
  }
})
// @from(Start 1537587, End 1539123)
SM = Y((fS9, Rj) => {
  var {
    EMPTY_BUFFER: y_4
  } = sA(), a51 = Buffer[Symbol.species];

  function P_4(I, d) {
    if (I.length === 0) return y_4;
    if (I.length === 1) return I[0];
    let G = Buffer.allocUnsafe(d),
      Z = 0;
    for (let C = 0; C < I.length; C++) {
      let W = I[C];
      G.set(W, Z), Z += W.length
    }
    if (Z < d) return new a51(G.buffer, G.byteOffset, Z);
    return G
  }

  function Kx1(I, d, G, Z, C) {
    for (let W = 0; W < C; W++) G[Z + W] = I[W] ^ d[W & 3]
  }

  function Nx1(I, d) {
    for (let G = 0; G < I.length; G++) I[G] ^= d[G & 3]
  }

  function $_4(I) {
    if (I.length === I.buffer.byteLength) return I.buffer;
    return I.buffer.slice(I.byteOffset, I.byteOffset + I.length)
  }

  function s51(I) {
    if (s51.readOnly = !0, Buffer.isBuffer(I)) return I;
    let d;
    if (I instanceof ArrayBuffer) d = new a51(I);
    else if (ArrayBuffer.isView(I)) d = new a51(I.buffer, I.byteOffset, I.byteLength);
    else d = Buffer.from(I), s51.readOnly = !1;
    return d
  }
  Rj.exports = {
    concat: P_4,
    mask: Kx1,
    toArrayBuffer: $_4,
    toBuffer: s51,
    unmask: Nx1
  };
  if (!process.env.WS_NO_BUFFER_UTIL) try {
    let I = (() => {
      throw new Error("Cannot require module " + "bufferutil");
    })();
    Rj.exports.mask = function(d, G, Z, C, W) {
      if (W < 48) Kx1(d, G, Z, C, W);
      else I.mask(d, G, Z, C, W)
    }, Rj.exports.unmask = function(d, G) {
      if (d.length < 32) Nx1(d, G);
      else I.unmask(d, G)
    }
  } catch (I) {}
})
// @from(Start 1539129, End 1539645)
qx1 = Y((qS9, fx1) => {
  var zx1 = Symbol("kDone"),
    o51 = Symbol("kRun");
  class Qx1 {
    constructor(I) {
      this[zx1] = () => {
        this.pending--, this[o51]()
      }, this.concurrency = I || 1 / 0, this.jobs = [], this.pending = 0
    }
    add(I) {
      this.jobs.push(I), this[o51]()
    } [o51]() {
      if (this.pending === this.concurrency) return;
      if (this.jobs.length) {
        let I = this.jobs.shift();
        this.pending++, I(this[zx1])
      }
    }
  }
  fx1.exports = Qx1
})
// @from(Start 1539651, End 1547025)
PM = Y((RS9, Mx1) => {
  var LM = B1("zlib"),
    Rx1 = SM(),
    u_4 = qx1(),
    {
      kStatusCode: Ux1
    } = sA(),
    T_4 = Buffer[Symbol.species],
    O_4 = Buffer.from([0, 0, 255, 255]),
    Ej = Symbol("permessage-deflate"),
    oA = Symbol("total-length"),
    yM = Symbol("callback"),
    jY = Symbol("buffers"),
    vj = Symbol("error"),
    Uj;
  class vx1 {
    constructor(I, d, G) {
      if (this._maxPayload = G | 0, this._options = I || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!d, this._deflate = null, this._inflate = null, this.params = null, !Uj) {
        let Z = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
        Uj = new u_4(Z)
      }
    }
    static get extensionName() {
      return "permessage-deflate"
    }
    offer() {
      let I = {};
      if (this._options.serverNoContextTakeover) I.server_no_context_takeover = !0;
      if (this._options.clientNoContextTakeover) I.client_no_context_takeover = !0;
      if (this._options.serverMaxWindowBits) I.server_max_window_bits = this._options.serverMaxWindowBits;
      if (this._options.clientMaxWindowBits) I.client_max_window_bits = this._options.clientMaxWindowBits;
      else if (this._options.clientMaxWindowBits == null) I.client_max_window_bits = !0;
      return I
    }
    accept(I) {
      return I = this.normalizeParams(I), this.params = this._isServer ? this.acceptAsServer(I) : this.acceptAsClient(I), this.params
    }
    cleanup() {
      if (this._inflate) this._inflate.close(), this._inflate = null;
      if (this._deflate) {
        let I = this._deflate[yM];
        if (this._deflate.close(), this._deflate = null, I) I(new Error("The deflate stream was closed while data was being processed"))
      }
    }
    acceptAsServer(I) {
      let d = this._options,
        G = I.find((Z) => {
          if (d.serverNoContextTakeover === !1 && Z.server_no_context_takeover || Z.server_max_window_bits && (d.serverMaxWindowBits === !1 || typeof d.serverMaxWindowBits === "number" && d.serverMaxWindowBits > Z.server_max_window_bits) || typeof d.clientMaxWindowBits === "number" && !Z.client_max_window_bits) return !1;
          return !0
        });
      if (!G) throw new Error("None of the extension offers can be accepted");
      if (d.serverNoContextTakeover) G.server_no_context_takeover = !0;
      if (d.clientNoContextTakeover) G.client_no_context_takeover = !0;
      if (typeof d.serverMaxWindowBits === "number") G.server_max_window_bits = d.serverMaxWindowBits;
      if (typeof d.clientMaxWindowBits === "number") G.client_max_window_bits = d.clientMaxWindowBits;
      else if (G.client_max_window_bits === !0 || d.clientMaxWindowBits === !1) delete G.client_max_window_bits;
      return G
    }
    acceptAsClient(I) {
      let d = I[0];
      if (this._options.clientNoContextTakeover === !1 && d.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
      if (!d.client_max_window_bits) {
        if (typeof this._options.clientMaxWindowBits === "number") d.client_max_window_bits = this._options.clientMaxWindowBits
      } else if (this._options.clientMaxWindowBits === !1 || typeof this._options.clientMaxWindowBits === "number" && d.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
      return d
    }
    normalizeParams(I) {
      return I.forEach((d) => {
        Object.keys(d).forEach((G) => {
          let Z = d[G];
          if (Z.length > 1) throw new Error(`Parameter "${G}" must have only a single value`);
          if (Z = Z[0], G === "client_max_window_bits") {
            if (Z !== !0) {
              let C = +Z;
              if (!Number.isInteger(C) || C < 8 || C > 15) throw new TypeError(`Invalid value for parameter "${G}": ${Z}`);
              Z = C
            } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${G}": ${Z}`)
          } else if (G === "server_max_window_bits") {
            let C = +Z;
            if (!Number.isInteger(C) || C < 8 || C > 15) throw new TypeError(`Invalid value for parameter "${G}": ${Z}`);
            Z = C
          } else if (G === "client_no_context_takeover" || G === "server_no_context_takeover") {
            if (Z !== !0) throw new TypeError(`Invalid value for parameter "${G}": ${Z}`)
          } else throw new Error(`Unknown parameter "${G}"`);
          d[G] = Z
        })
      }), I
    }
    decompress(I, d, G) {
      Uj.add((Z) => {
        this._decompress(I, d, (C, W) => {
          Z(), G(C, W)
        })
      })
    }
    compress(I, d, G) {
      Uj.add((Z) => {
        this._compress(I, d, (C, W) => {
          Z(), G(C, W)
        })
      })
    }
    _decompress(I, d, G) {
      let Z = this._isServer ? "client" : "server";
      if (!this._inflate) {
        let C = `${Z}_max_window_bits`,
          W = typeof this.params[C] !== "number" ? LM.Z_DEFAULT_WINDOWBITS : this.params[C];
        this._inflate = LM.createInflateRaw({
          ...this._options.zlibInflateOptions,
          windowBits: W
        }), this._inflate[Ej] = this, this._inflate[oA] = 0, this._inflate[jY] = [], this._inflate.on("error", l_4), this._inflate.on("data", Ex1)
      }
      if (this._inflate[yM] = G, this._inflate.write(I), d) this._inflate.write(O_4);
      this._inflate.flush(() => {
        let C = this._inflate[vj];
        if (C) {
          this._inflate.close(), this._inflate = null, G(C);
          return
        }
        let W = Rx1.concat(this._inflate[jY], this._inflate[oA]);
        if (this._inflate._readableState.endEmitted) this._inflate.close(), this._inflate = null;
        else if (this._inflate[oA] = 0, this._inflate[jY] = [], d && this.params[`${Z}_no_context_takeover`]) this._inflate.reset();
        G(null, W)
      })
    }
    _compress(I, d, G) {
      let Z = this._isServer ? "server" : "client";
      if (!this._deflate) {
        let C = `${Z}_max_window_bits`,
          W = typeof this.params[C] !== "number" ? LM.Z_DEFAULT_WINDOWBITS : this.params[C];
        this._deflate = LM.createDeflateRaw({
          ...this._options.zlibDeflateOptions,
          windowBits: W
        }), this._deflate[oA] = 0, this._deflate[jY] = [], this._deflate.on("data", m_4)
      }
      this._deflate[yM] = G, this._deflate.write(I), this._deflate.flush(LM.Z_SYNC_FLUSH, () => {
        if (!this._deflate) return;
        let C = Rx1.concat(this._deflate[jY], this._deflate[oA]);
        if (d) C = new T_4(C.buffer, C.byteOffset, C.length - 4);
        if (this._deflate[yM] = null, this._deflate[oA] = 0, this._deflate[jY] = [], d && this.params[`${Z}_no_context_takeover`]) this._deflate.reset();
        G(null, C)
      })
    }
  }
  Mx1.exports = vx1;

  function m_4(I) {
    this[jY].push(I), this[oA] += I.length
  }

  function Ex1(I) {
    if (this[oA] += I.length, this[Ej]._maxPayload < 1 || this[oA] <= this[Ej]._maxPayload) {
      this[jY].push(I);
      return
    }
    this[vj] = new RangeError("Max payload size exceeded"), this[vj].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[vj][Ux1] = 1009, this.removeListener("data", Ex1), this.reset()
  }

  function l_4(I) {
    this[Ej]._inflate = null, I[Ux1] = 1007, this[yM](I)
  }
})
// @from(Start 1547031, End 1549135)
GQ = Y((US9, Mj) => {
  var {
    isUtf8: Sx1
  } = B1("buffer"), {
    hasBlob: b_4
  } = sA(), h_4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];

  function j_4(I) {
    return I >= 1000 && I <= 1014 && I !== 1004 && I !== 1005 && I !== 1006 || I >= 3000 && I <= 4999
  }

  function e51(I) {
    let d = I.length,
      G = 0;
    while (G < d)
      if ((I[G] & 128) === 0) G++;
      else if ((I[G] & 224) === 192) {
      if (G + 1 === d || (I[G + 1] & 192) !== 128 || (I[G] & 254) === 192) return !1;
      G += 2
    } else if ((I[G] & 240) === 224) {
      if (G + 2 >= d || (I[G + 1] & 192) !== 128 || (I[G + 2] & 192) !== 128 || I[G] === 224 && (I[G + 1] & 224) === 128 || I[G] === 237 && (I[G + 1] & 224) === 160) return !1;
      G += 3
    } else if ((I[G] & 248) === 240) {
      if (G + 3 >= d || (I[G + 1] & 192) !== 128 || (I[G + 2] & 192) !== 128 || (I[G + 3] & 192) !== 128 || I[G] === 240 && (I[G + 1] & 240) === 128 || I[G] === 244 && I[G + 1] > 143 || I[G] > 244) return !1;
      G += 4
    } else return !1;
    return !0
  }

  function k_4(I) {
    return b_4 && typeof I === "object" && typeof I.arrayBuffer === "function" && typeof I.type === "string" && typeof I.stream === "function" && (I[Symbol.toStringTag] === "Blob" || I[Symbol.toStringTag] === "File")
  }
  Mj.exports = {
    isBlob: k_4,
    isValidStatusCode: j_4,
    isValidUTF8: e51,
    tokenChars: h_4
  };
  if (Sx1) Mj.exports.isValidUTF8 = function(I) {
    return I.length < 24 ? e51(I) : Sx1(I)
  };
  else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
    let I = (() => {
      throw new Error("Cannot require module " + "utf-8-validate");
    })();
    Mj.exports.isValidUTF8 = function(d) {
      return d.length < 32 ? e51(d) : I(d)
    }
  } catch (I) {}
})
// @from(Start 1549141, End 1559532)
I91 = Y((vS9, ux1) => {
  var {
    Writable: x_4
  } = B1("stream"), Lx1 = PM(), {
    BINARY_TYPES: c_4,
    EMPTY_BUFFER: yx1,
    kStatusCode: p_4,
    kWebSocket: i_4
  } = sA(), {
    concat: t51,
    toArrayBuffer: n_4,
    unmask: r_4
  } = SM(), {
    isValidStatusCode: a_4,
    isValidUTF8: Px1
  } = GQ(), Sj = Buffer[Symbol.species];
  class $x1 extends x_4 {
    constructor(I = {}) {
      super();
      this._allowSynchronousEvents = I.allowSynchronousEvents !== void 0 ? I.allowSynchronousEvents : !0, this._binaryType = I.binaryType || c_4[0], this._extensions = I.extensions || {}, this._isServer = !!I.isServer, this._maxPayload = I.maxPayload | 0, this._skipUTF8Validation = !!I.skipUTF8Validation, this[i_4] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = 0
    }
    _write(I, d, G) {
      if (this._opcode === 8 && this._state == 0) return G();
      this._bufferedBytes += I.length, this._buffers.push(I), this.startLoop(G)
    }
    consume(I) {
      if (this._bufferedBytes -= I, I === this._buffers[0].length) return this._buffers.shift();
      if (I < this._buffers[0].length) {
        let G = this._buffers[0];
        return this._buffers[0] = new Sj(G.buffer, G.byteOffset + I, G.length - I), new Sj(G.buffer, G.byteOffset, I)
      }
      let d = Buffer.allocUnsafe(I);
      do {
        let G = this._buffers[0],
          Z = d.length - I;
        if (I >= G.length) d.set(this._buffers.shift(), Z);
        else d.set(new Uint8Array(G.buffer, G.byteOffset, I), Z), this._buffers[0] = new Sj(G.buffer, G.byteOffset + I, G.length - I);
        I -= G.length
      } while (I > 0);
      return d
    }
    startLoop(I) {
      this._loop = !0;
      do switch (this._state) {
        case 0:
          this.getInfo(I);
          break;
        case 1:
          this.getPayloadLength16(I);
          break;
        case 2:
          this.getPayloadLength64(I);
          break;
        case 3:
          this.getMask();
          break;
        case 4:
          this.getData(I);
          break;
        case 5:
        case 6:
          this._loop = !1;
          return
      }
      while (this._loop);
      if (!this._errored) I()
    }
    getInfo(I) {
      if (this._bufferedBytes < 2) {
        this._loop = !1;
        return
      }
      let d = this.consume(2);
      if ((d[0] & 48) !== 0) {
        let Z = this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
        I(Z);
        return
      }
      let G = (d[0] & 64) === 64;
      if (G && !this._extensions[Lx1.extensionName]) {
        let Z = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
        I(Z);
        return
      }
      if (this._fin = (d[0] & 128) === 128, this._opcode = d[0] & 15, this._payloadLength = d[1] & 127, this._opcode === 0) {
        if (G) {
          let Z = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          I(Z);
          return
        }
        if (!this._fragmented) {
          let Z = this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE");
          I(Z);
          return
        }
        this._opcode = this._fragmented
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          let Z = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
          I(Z);
          return
        }
        this._compressed = G
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          let Z = this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN");
          I(Z);
          return
        }
        if (G) {
          let Z = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          I(Z);
          return
        }
        if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
          let Z = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, !0, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          I(Z);
          return
        }
      } else {
        let Z = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
        I(Z);
        return
      }
      if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
      if (this._masked = (d[1] & 128) === 128, this._isServer) {
        if (!this._masked) {
          let Z = this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK");
          I(Z);
          return
        }
      } else if (this._masked) {
        let Z = this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK");
        I(Z);
        return
      }
      if (this._payloadLength === 126) this._state = 1;
      else if (this._payloadLength === 127) this._state = 2;
      else this.haveLength(I)
    }
    getPayloadLength16(I) {
      if (this._bufferedBytes < 2) {
        this._loop = !1;
        return
      }
      this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(I)
    }
    getPayloadLength64(I) {
      if (this._bufferedBytes < 8) {
        this._loop = !1;
        return
      }
      let d = this.consume(8),
        G = d.readUInt32BE(0);
      if (G > Math.pow(2, 21) - 1) {
        let Z = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", !1, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
        I(Z);
        return
      }
      this._payloadLength = G * Math.pow(2, 32) + d.readUInt32BE(4), this.haveLength(I)
    }
    haveLength(I) {
      if (this._payloadLength && this._opcode < 8) {
        if (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
          let d = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
          I(d);
          return
        }
      }
      if (this._masked) this._state = 3;
      else this._state = 4
    }
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = !1;
        return
      }
      this._mask = this.consume(4), this._state = 4
    }
    getData(I) {
      let d = yx1;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = !1;
          return
        }
        if (d = this.consume(this._payloadLength), this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) r_4(d, this._mask)
      }
      if (this._opcode > 7) {
        this.controlMessage(d, I);
        return
      }
      if (this._compressed) {
        this._state = 5, this.decompress(d, I);
        return
      }
      if (d.length) this._messageLength = this._totalPayloadLength, this._fragments.push(d);
      this.dataMessage(I)
    }
    decompress(I, d) {
      this._extensions[Lx1.extensionName].decompress(I, this._fin, (Z, C) => {
        if (Z) return d(Z);
        if (C.length) {
          if (this._messageLength += C.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
            let W = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
            d(W);
            return
          }
          this._fragments.push(C)
        }
        if (this.dataMessage(d), this._state === 0) this.startLoop(d)
      })
    }
    dataMessage(I) {
      if (!this._fin) {
        this._state = 0;
        return
      }
      let d = this._messageLength,
        G = this._fragments;
      if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
        let Z;
        if (this._binaryType === "nodebuffer") Z = t51(G, d);
        else if (this._binaryType === "arraybuffer") Z = n_4(t51(G, d));
        else if (this._binaryType === "blob") Z = new Blob(G);
        else Z = G;
        if (this._allowSynchronousEvents) this.emit("message", Z, !0), this._state = 0;
        else this._state = 6, setImmediate(() => {
          this.emit("message", Z, !0), this._state = 0, this.startLoop(I)
        })
      } else {
        let Z = t51(G, d);
        if (!this._skipUTF8Validation && !Px1(Z)) {
          let C = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
          I(C);
          return
        }
        if (this._state === 5 || this._allowSynchronousEvents) this.emit("message", Z, !1), this._state = 0;
        else this._state = 6, setImmediate(() => {
          this.emit("message", Z, !1), this._state = 0, this.startLoop(I)
        })
      }
    }
    controlMessage(I, d) {
      if (this._opcode === 8) {
        if (I.length === 0) this._loop = !1, this.emit("conclude", 1005, yx1), this.end();
        else {
          let G = I.readUInt16BE(0);
          if (!a_4(G)) {
            let C = this.createError(RangeError, `invalid status code ${G}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE");
            d(C);
            return
          }
          let Z = new Sj(I.buffer, I.byteOffset + 2, I.length - 2);
          if (!this._skipUTF8Validation && !Px1(Z)) {
            let C = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
            d(C);
            return
          }
          this._loop = !1, this.emit("conclude", G, Z), this.end()
        }
        this._state = 0;
        return
      }
      if (this._allowSynchronousEvents) this.emit(this._opcode === 9 ? "ping" : "pong", I), this._state = 0;
      else this._state = 6, setImmediate(() => {
        this.emit(this._opcode === 9 ? "ping" : "pong", I), this._state = 0, this.startLoop(d)
      })
    }
    createError(I, d, G, Z, C) {
      this._loop = !1, this._errored = !0;
      let W = new I(G ? `Invalid WebSocket frame: ${d}` : d);
      return Error.captureStackTrace(W, this.createError), W.code = C, W[p_4] = Z, W
    }
  }
  ux1.exports = $x1
})
// @from(Start 1559538, End 1567000)
G91 = Y((MS9, mx1) => {
  var {
    Duplex: ES9
  } = B1("stream"), {
    randomFillSync: s_4
  } = B1("crypto"), Tx1 = PM(), {
    EMPTY_BUFFER: o_4,
    kWebSocket: e_4,
    NOOP: t_4
  } = sA(), {
    isBlob: ZQ,
    isValidStatusCode: ID4
  } = GQ(), {
    mask: Ox1,
    toBuffer: Dg
  } = SM(), WZ = Symbol("kByteLength"), dD4 = Buffer.alloc(4), Hg, CQ = 8192, SC = 0, GD4 = 1, ZD4 = 2;
  class kY {
    constructor(I, d, G) {
      if (this._extensions = d || {}, G) this._generateMask = G, this._maskBuffer = Buffer.alloc(4);
      this._socket = I, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._queue = [], this._state = SC, this.onerror = t_4, this[e_4] = void 0
    }
    static frame(I, d) {
      let G, Z = !1,
        C = 2,
        W = !1;
      if (d.mask) {
        if (G = d.maskBuffer || dD4, d.generateMask) d.generateMask(G);
        else {
          if (CQ === 8192) {
            if (Hg === void 0) Hg = Buffer.alloc(8192);
            s_4(Hg, 0, 8192), CQ = 0
          }
          G[0] = Hg[CQ++], G[1] = Hg[CQ++], G[2] = Hg[CQ++], G[3] = Hg[CQ++]
        }
        W = (G[0] | G[1] | G[2] | G[3]) === 0, C = 6
      }
      let w;
      if (typeof I === "string")
        if ((!d.mask || W) && d[WZ] !== void 0) w = d[WZ];
        else I = Buffer.from(I), w = I.length;
      else w = I.length, Z = d.mask && d.readOnly && !W;
      let B = w;
      if (w >= 65536) C += 8, B = 127;
      else if (w > 125) C += 2, B = 126;
      let A = Buffer.allocUnsafe(Z ? w + C : C);
      if (A[0] = d.fin ? d.opcode | 128 : d.opcode, d.rsv1) A[0] |= 64;
      if (A[1] = B, B === 126) A.writeUInt16BE(w, 2);
      else if (B === 127) A[2] = A[3] = 0, A.writeUIntBE(w, 4, 6);
      if (!d.mask) return [A, I];
      if (A[1] |= 128, A[C - 4] = G[0], A[C - 3] = G[1], A[C - 2] = G[2], A[C - 1] = G[3], W) return [A, I];
      if (Z) return Ox1(I, G, A, C, w), [A];
      return Ox1(I, G, I, 0, w), [A, I]
    }
    close(I, d, G, Z) {
      let C;
      if (I === void 0) C = o_4;
      else if (typeof I !== "number" || !ID4(I)) throw new TypeError("First argument must be a valid error code number");
      else if (d === void 0 || !d.length) C = Buffer.allocUnsafe(2), C.writeUInt16BE(I, 0);
      else {
        let w = Buffer.byteLength(d);
        if (w > 123) throw new RangeError("The message must not be greater than 123 bytes");
        if (C = Buffer.allocUnsafe(2 + w), C.writeUInt16BE(I, 0), typeof d === "string") C.write(d, 2);
        else C.set(d, 2)
      }
      let W = {
        [WZ]: C.length,
        fin: !0,
        generateMask: this._generateMask,
        mask: G,
        maskBuffer: this._maskBuffer,
        opcode: 8,
        readOnly: !1,
        rsv1: !1
      };
      if (this._state !== SC) this.enqueue([this.dispatch, C, !1, W, Z]);
      else this.sendFrame(kY.frame(C, W), Z)
    }
    ping(I, d, G) {
      let Z, C;
      if (typeof I === "string") Z = Buffer.byteLength(I), C = !1;
      else if (ZQ(I)) Z = I.size, C = !1;
      else I = Dg(I), Z = I.length, C = Dg.readOnly;
      if (Z > 125) throw new RangeError("The data size must not be greater than 125 bytes");
      let W = {
        [WZ]: Z,
        fin: !0,
        generateMask: this._generateMask,
        mask: d,
        maskBuffer: this._maskBuffer,
        opcode: 9,
        readOnly: C,
        rsv1: !1
      };
      if (ZQ(I))
        if (this._state !== SC) this.enqueue([this.getBlobData, I, !1, W, G]);
        else this.getBlobData(I, !1, W, G);
      else if (this._state !== SC) this.enqueue([this.dispatch, I, !1, W, G]);
      else this.sendFrame(kY.frame(I, W), G)
    }
    pong(I, d, G) {
      let Z, C;
      if (typeof I === "string") Z = Buffer.byteLength(I), C = !1;
      else if (ZQ(I)) Z = I.size, C = !1;
      else I = Dg(I), Z = I.length, C = Dg.readOnly;
      if (Z > 125) throw new RangeError("The data size must not be greater than 125 bytes");
      let W = {
        [WZ]: Z,
        fin: !0,
        generateMask: this._generateMask,
        mask: d,
        maskBuffer: this._maskBuffer,
        opcode: 10,
        readOnly: C,
        rsv1: !1
      };
      if (ZQ(I))
        if (this._state !== SC) this.enqueue([this.getBlobData, I, !1, W, G]);
        else this.getBlobData(I, !1, W, G);
      else if (this._state !== SC) this.enqueue([this.dispatch, I, !1, W, G]);
      else this.sendFrame(kY.frame(I, W), G)
    }
    send(I, d, G) {
      let Z = this._extensions[Tx1.extensionName],
        C = d.binary ? 2 : 1,
        W = d.compress,
        w, B;
      if (typeof I === "string") w = Buffer.byteLength(I), B = !1;
      else if (ZQ(I)) w = I.size, B = !1;
      else I = Dg(I), w = I.length, B = Dg.readOnly;
      if (this._firstFragment) {
        if (this._firstFragment = !1, W && Z && Z.params[Z._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) W = w >= Z._threshold;
        this._compress = W
      } else W = !1, C = 0;
      if (d.fin) this._firstFragment = !0;
      let A = {
        [WZ]: w,
        fin: d.fin,
        generateMask: this._generateMask,
        mask: d.mask,
        maskBuffer: this._maskBuffer,
        opcode: C,
        readOnly: B,
        rsv1: W
      };
      if (ZQ(I))
        if (this._state !== SC) this.enqueue([this.getBlobData, I, this._compress, A, G]);
        else this.getBlobData(I, this._compress, A, G);
      else if (this._state !== SC) this.enqueue([this.dispatch, I, this._compress, A, G]);
      else this.dispatch(I, this._compress, A, G)
    }
    getBlobData(I, d, G, Z) {
      this._bufferedBytes += G[WZ], this._state = ZD4, I.arrayBuffer().then((C) => {
        if (this._socket.destroyed) {
          let w = new Error("The socket was closed while the blob was being read");
          process.nextTick(d91, this, w, Z);
          return
        }
        this._bufferedBytes -= G[WZ];
        let W = Dg(C);
        if (!d) this._state = SC, this.sendFrame(kY.frame(W, G), Z), this.dequeue();
        else this.dispatch(W, d, G, Z)
      }).catch((C) => {
        process.nextTick(CD4, this, C, Z)
      })
    }
    dispatch(I, d, G, Z) {
      if (!d) {
        this.sendFrame(kY.frame(I, G), Z);
        return
      }
      let C = this._extensions[Tx1.extensionName];
      this._bufferedBytes += G[WZ], this._state = GD4, C.compress(I, G.fin, (W, w) => {
        if (this._socket.destroyed) {
          let B = new Error("The socket was closed while data was being compressed");
          d91(this, B, Z);
          return
        }
        this._bufferedBytes -= G[WZ], this._state = SC, G.readOnly = !1, this.sendFrame(kY.frame(w, G), Z), this.dequeue()
      })
    }
    dequeue() {
      while (this._state === SC && this._queue.length) {
        let I = this._queue.shift();
        this._bufferedBytes -= I[3][WZ], Reflect.apply(I[0], this, I.slice(1))
      }
    }
    enqueue(I) {
      this._bufferedBytes += I[3][WZ], this._queue.push(I)
    }
    sendFrame(I, d) {
      if (I.length === 2) this._socket.cork(), this._socket.write(I[0]), this._socket.write(I[1], d), this._socket.uncork();
      else this._socket.write(I[0], d)
    }
  }
  mx1.exports = kY;

  function d91(I, d, G) {
    if (typeof G === "function") G(d);
    for (let Z = 0; Z < I._queue.length; Z++) {
      let C = I._queue[Z],
        W = C[C.length - 1];
      if (typeof W === "function") W(d)
    }
  }

  function CD4(I, d, G) {
    d91(I, d, G), I.onerror(d)
  }
})
// @from(Start 1567006, End 1570362)
ix1 = Y((SS9, px1) => {
  var {
    kForOnEventAttribute: $M,
    kListener: Z91
  } = sA(), lx1 = Symbol("kCode"), bx1 = Symbol("kData"), hx1 = Symbol("kError"), jx1 = Symbol("kMessage"), kx1 = Symbol("kReason"), WQ = Symbol("kTarget"), xx1 = Symbol("kType"), cx1 = Symbol("kWasClean");
  class xY {
    constructor(I) {
      this[WQ] = null, this[xx1] = I
    }
    get target() {
      return this[WQ]
    }
    get type() {
      return this[xx1]
    }
  }
  Object.defineProperty(xY.prototype, "target", {
    enumerable: !0
  });
  Object.defineProperty(xY.prototype, "type", {
    enumerable: !0
  });
  class wQ extends xY {
    constructor(I, d = {}) {
      super(I);
      this[lx1] = d.code === void 0 ? 0 : d.code, this[kx1] = d.reason === void 0 ? "" : d.reason, this[cx1] = d.wasClean === void 0 ? !1 : d.wasClean
    }
    get code() {
      return this[lx1]
    }
    get reason() {
      return this[kx1]
    }
    get wasClean() {
      return this[cx1]
    }
  }
  Object.defineProperty(wQ.prototype, "code", {
    enumerable: !0
  });
  Object.defineProperty(wQ.prototype, "reason", {
    enumerable: !0
  });
  Object.defineProperty(wQ.prototype, "wasClean", {
    enumerable: !0
  });
  class uM extends xY {
    constructor(I, d = {}) {
      super(I);
      this[hx1] = d.error === void 0 ? null : d.error, this[jx1] = d.message === void 0 ? "" : d.message
    }
    get error() {
      return this[hx1]
    }
    get message() {
      return this[jx1]
    }
  }
  Object.defineProperty(uM.prototype, "error", {
    enumerable: !0
  });
  Object.defineProperty(uM.prototype, "message", {
    enumerable: !0
  });
  class yj extends xY {
    constructor(I, d = {}) {
      super(I);
      this[bx1] = d.data === void 0 ? null : d.data
    }
    get data() {
      return this[bx1]
    }
  }
  Object.defineProperty(yj.prototype, "data", {
    enumerable: !0
  });
  var WD4 = {
    addEventListener(I, d, G = {}) {
      for (let C of this.listeners(I))
        if (!G[$M] && C[Z91] === d && !C[$M]) return;
      let Z;
      if (I === "message") Z = function C(W, w) {
        let B = new yj("message", {
          data: w ? W : W.toString()
        });
        B[WQ] = this, Lj(d, this, B)
      };
      else if (I === "close") Z = function C(W, w) {
        let B = new wQ("close", {
          code: W,
          reason: w.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });
        B[WQ] = this, Lj(d, this, B)
      };
      else if (I === "error") Z = function C(W) {
        let w = new uM("error", {
          error: W,
          message: W.message
        });
        w[WQ] = this, Lj(d, this, w)
      };
      else if (I === "open") Z = function C() {
        let W = new xY("open");
        W[WQ] = this, Lj(d, this, W)
      };
      else return;
      if (Z[$M] = !!G[$M], Z[Z91] = d, G.once) this.once(I, Z);
      else this.on(I, Z)
    },
    removeEventListener(I, d) {
      for (let G of this.listeners(I))
        if (G[Z91] === d && !G[$M]) {
          this.removeListener(I, G);
          break
        }
    }
  };
  px1.exports = {
    CloseEvent: wQ,
    ErrorEvent: uM,
    Event: xY,
    EventTarget: WD4,
    MessageEvent: yj
  };

  function Lj(I, d, G) {
    if (typeof I === "object" && I.handleEvent) I.handleEvent.call(I, G);
    else I.call(d, G)
  }
})
// @from(Start 1570368, End 1573676)
C91 = Y((LS9, nx1) => {
  var {
    tokenChars: TM
  } = GQ();

  function mw(I, d, G) {
    if (I[d] === void 0) I[d] = [G];
    else I[d].push(G)
  }

  function wD4(I) {
    let d = Object.create(null),
      G = Object.create(null),
      Z = !1,
      C = !1,
      W = !1,
      w, B, A = -1,
      V = -1,
      X = -1,
      _ = 0;
    for (; _ < I.length; _++)
      if (V = I.charCodeAt(_), w === void 0)
        if (X === -1 && TM[V] === 1) {
          if (A === -1) A = _
        } else if (_ !== 0 && (V === 32 || V === 9)) {
      if (X === -1 && A !== -1) X = _
    } else if (V === 59 || V === 44) {
      if (A === -1) throw new SyntaxError(`Unexpected character at index ${_}`);
      if (X === -1) X = _;
      let g = I.slice(A, X);
      if (V === 44) mw(d, g, G), G = Object.create(null);
      else w = g;
      A = X = -1
    } else throw new SyntaxError(`Unexpected character at index ${_}`);
    else if (B === void 0)
      if (X === -1 && TM[V] === 1) {
        if (A === -1) A = _
      } else if (V === 32 || V === 9) {
      if (X === -1 && A !== -1) X = _
    } else if (V === 59 || V === 44) {
      if (A === -1) throw new SyntaxError(`Unexpected character at index ${_}`);
      if (X === -1) X = _;
      if (mw(G, I.slice(A, X), !0), V === 44) mw(d, w, G), G = Object.create(null), w = void 0;
      A = X = -1
    } else if (V === 61 && A !== -1 && X === -1) B = I.slice(A, _), A = X = -1;
    else throw new SyntaxError(`Unexpected character at index ${_}`);
    else if (C) {
      if (TM[V] !== 1) throw new SyntaxError(`Unexpected character at index ${_}`);
      if (A === -1) A = _;
      else if (!Z) Z = !0;
      C = !1
    } else if (W)
      if (TM[V] === 1) {
        if (A === -1) A = _
      } else if (V === 34 && A !== -1) W = !1, X = _;
    else if (V === 92) C = !0;
    else throw new SyntaxError(`Unexpected character at index ${_}`);
    else if (V === 34 && I.charCodeAt(_ - 1) === 61) W = !0;
    else if (X === -1 && TM[V] === 1) {
      if (A === -1) A = _
    } else if (A !== -1 && (V === 32 || V === 9)) {
      if (X === -1) X = _
    } else if (V === 59 || V === 44) {
      if (A === -1) throw new SyntaxError(`Unexpected character at index ${_}`);
      if (X === -1) X = _;
      let g = I.slice(A, X);
      if (Z) g = g.replace(/\\/g, ""), Z = !1;
      if (mw(G, B, g), V === 44) mw(d, w, G), G = Object.create(null), w = void 0;
      B = void 0, A = X = -1
    } else throw new SyntaxError(`Unexpected character at index ${_}`);
    if (A === -1 || W || V === 32 || V === 9) throw new SyntaxError("Unexpected end of input");
    if (X === -1) X = _;
    let F = I.slice(A, X);
    if (w === void 0) mw(d, F, G);
    else {
      if (B === void 0) mw(G, F, !0);
      else if (Z) mw(G, B, F.replace(/\\/g, ""));
      else mw(G, B, F);
      mw(d, w, G)
    }
    return d
  }

  function BD4(I) {
    return Object.keys(I).map((d) => {
      let G = I[d];
      if (!Array.isArray(G)) G = [G];
      return G.map((Z) => {
        return [d].concat(Object.keys(Z).map((C) => {
          let W = Z[C];
          if (!Array.isArray(W)) W = [W];
          return W.map((w) => w === !0 ? C : `${C}=${w}`).join("; ")
        })).join("; ")
      }).join(", ")
    }).join(", ")
  }
  nx1.exports = {
    format: BD4,
    parse: wD4
  }
})
// @from(Start 1573682, End 1592034)
V91 = Y(($S9, Wc1) => {
  var AD4 = B1("events"),
    VD4 = B1("https"),
    XD4 = B1("http"),
    sx1 = B1("net"),
    YD4 = B1("tls"),
    {
      randomBytes: _D4,
      createHash: DD4
    } = B1("crypto"),
    {
      Duplex: yS9,
      Readable: PS9
    } = B1("stream"),
    {
      URL: W91
    } = B1("url"),
    cY = PM(),
    HD4 = I91(),
    FD4 = G91(),
    {
      isBlob: gD4
    } = GQ(),
    {
      BINARY_TYPES: rx1,
      EMPTY_BUFFER: Pj,
      GUID: JD4,
      kForOnEventAttribute: w91,
      kListener: KD4,
      kStatusCode: ND4,
      kWebSocket: Y8,
      NOOP: ox1
    } = sA(),
    {
      EventTarget: {
        addEventListener: zD4,
        removeEventListener: QD4
      }
    } = ix1(),
    {
      format: fD4,
      parse: qD4
    } = C91(),
    {
      toBuffer: RD4
    } = SM(),
    ex1 = Symbol("kAborted"),
    B91 = [8, 13],
    eA = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
    UD4 = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
  class f4 extends AD4 {
    constructor(I, d, G) {
      super();
      if (this._binaryType = rx1[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = Pj, this._closeTimer = null, this._errorEmitted = !1, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = f4.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, I !== null) {
        if (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, d === void 0) d = [];
        else if (!Array.isArray(d))
          if (typeof d === "object" && d !== null) G = d, d = [];
          else d = [d];
        tx1(this, I, d, G)
      } else this._autoPong = G.autoPong, this._isServer = !0
    }
    get binaryType() {
      return this._binaryType
    }
    set binaryType(I) {
      if (!rx1.includes(I)) return;
      if (this._binaryType = I, this._receiver) this._receiver._binaryType = I
    }
    get bufferedAmount() {
      if (!this._socket) return this._bufferedAmount;
      return this._socket._writableState.length + this._sender._bufferedBytes
    }
    get extensions() {
      return Object.keys(this._extensions).join()
    }
    get isPaused() {
      return this._paused
    }
    get onclose() {
      return null
    }
    get onerror() {
      return null
    }
    get onopen() {
      return null
    }
    get onmessage() {
      return null
    }
    get protocol() {
      return this._protocol
    }
    get readyState() {
      return this._readyState
    }
    get url() {
      return this._url
    }
    setSocket(I, d, G) {
      let Z = new HD4({
          allowSynchronousEvents: G.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: G.maxPayload,
          skipUTF8Validation: G.skipUTF8Validation
        }),
        C = new FD4(I, this._extensions, G.generateMask);
      if (this._receiver = Z, this._sender = C, this._socket = I, Z[Y8] = this, C[Y8] = this, I[Y8] = this, Z.on("conclude", MD4), Z.on("drain", SD4), Z.on("error", LD4), Z.on("message", yD4), Z.on("ping", PD4), Z.on("pong", $D4), C.onerror = uD4, I.setTimeout) I.setTimeout(0);
      if (I.setNoDelay) I.setNoDelay();
      if (d.length > 0) I.unshift(d);
      I.on("close", Gc1), I.on("data", uj), I.on("end", Zc1), I.on("error", Cc1), this._readyState = f4.OPEN, this.emit("open")
    }
    emitClose() {
      if (!this._socket) {
        this._readyState = f4.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
        return
      }
      if (this._extensions[cY.extensionName]) this._extensions[cY.extensionName].cleanup();
      this._receiver.removeAllListeners(), this._readyState = f4.CLOSED, this.emit("close", this._closeCode, this._closeMessage)
    }
    close(I, d) {
      if (this.readyState === f4.CLOSED) return;
      if (this.readyState === f4.CONNECTING) {
        ad(this, this._req, "WebSocket was closed before the connection was established");
        return
      }
      if (this.readyState === f4.CLOSING) {
        if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) this._socket.end();
        return
      }
      this._readyState = f4.CLOSING, this._sender.close(I, d, !this._isServer, (G) => {
        if (G) return;
        if (this._closeFrameSent = !0, this._closeFrameReceived || this._receiver._writableState.errorEmitted) this._socket.end()
      }), dc1(this)
    }
    pause() {
      if (this.readyState === f4.CONNECTING || this.readyState === f4.CLOSED) return;
      this._paused = !0, this._socket.pause()
    }
    ping(I, d, G) {
      if (this.readyState === f4.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof I === "function") G = I, I = d = void 0;
      else if (typeof d === "function") G = d, d = void 0;
      if (typeof I === "number") I = I.toString();
      if (this.readyState !== f4.OPEN) {
        A91(this, I, G);
        return
      }
      if (d === void 0) d = !this._isServer;
      this._sender.ping(I || Pj, d, G)
    }
    pong(I, d, G) {
      if (this.readyState === f4.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof I === "function") G = I, I = d = void 0;
      else if (typeof d === "function") G = d, d = void 0;
      if (typeof I === "number") I = I.toString();
      if (this.readyState !== f4.OPEN) {
        A91(this, I, G);
        return
      }
      if (d === void 0) d = !this._isServer;
      this._sender.pong(I || Pj, d, G)
    }
    resume() {
      if (this.readyState === f4.CONNECTING || this.readyState === f4.CLOSED) return;
      if (this._paused = !1, !this._receiver._writableState.needDrain) this._socket.resume()
    }
    send(I, d, G) {
      if (this.readyState === f4.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof d === "function") G = d, d = {};
      if (typeof I === "number") I = I.toString();
      if (this.readyState !== f4.OPEN) {
        A91(this, I, G);
        return
      }
      let Z = {
        binary: typeof I !== "string",
        mask: !this._isServer,
        compress: !0,
        fin: !0,
        ...d
      };
      if (!this._extensions[cY.extensionName]) Z.compress = !1;
      this._sender.send(I || Pj, Z, G)
    }
    terminate() {
      if (this.readyState === f4.CLOSED) return;
      if (this.readyState === f4.CONNECTING) {
        ad(this, this._req, "WebSocket was closed before the connection was established");
        return
      }
      if (this._socket) this._readyState = f4.CLOSING, this._socket.destroy()
    }
  }
  Object.defineProperty(f4, "CONNECTING", {
    enumerable: !0,
    value: eA.indexOf("CONNECTING")
  });
  Object.defineProperty(f4.prototype, "CONNECTING", {
    enumerable: !0,
    value: eA.indexOf("CONNECTING")
  });
  Object.defineProperty(f4, "OPEN", {
    enumerable: !0,
    value: eA.indexOf("OPEN")
  });
  Object.defineProperty(f4.prototype, "OPEN", {
    enumerable: !0,
    value: eA.indexOf("OPEN")
  });
  Object.defineProperty(f4, "CLOSING", {
    enumerable: !0,
    value: eA.indexOf("CLOSING")
  });
  Object.defineProperty(f4.prototype, "CLOSING", {
    enumerable: !0,
    value: eA.indexOf("CLOSING")
  });
  Object.defineProperty(f4, "CLOSED", {
    enumerable: !0,
    value: eA.indexOf("CLOSED")
  });
  Object.defineProperty(f4.prototype, "CLOSED", {
    enumerable: !0,
    value: eA.indexOf("CLOSED")
  });
  ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((I) => {
    Object.defineProperty(f4.prototype, I, {
      enumerable: !0
    })
  });
  ["open", "error", "close", "message"].forEach((I) => {
    Object.defineProperty(f4.prototype, `on${I}`, {
      enumerable: !0,
      get() {
        for (let d of this.listeners(I))
          if (d[w91]) return d[KD4];
        return null
      },
      set(d) {
        for (let G of this.listeners(I))
          if (G[w91]) {
            this.removeListener(I, G);
            break
          } if (typeof d !== "function") return;
        this.addEventListener(I, d, {
          [w91]: !0
        })
      }
    })
  });
  f4.prototype.addEventListener = zD4;
  f4.prototype.removeEventListener = QD4;
  Wc1.exports = f4;

  function tx1(I, d, G, Z) {
    let C = {
      allowSynchronousEvents: !0,
      autoPong: !0,
      protocolVersion: B91[1],
      maxPayload: 104857600,
      skipUTF8Validation: !1,
      perMessageDeflate: !0,
      followRedirects: !1,
      maxRedirects: 10,
      ...Z,
      socketPath: void 0,
      hostname: void 0,
      protocol: void 0,
      timeout: void 0,
      method: "GET",
      host: void 0,
      path: void 0,
      port: void 0
    };
    if (I._autoPong = C.autoPong, !B91.includes(C.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${C.protocolVersion} (supported versions: ${B91.join(", ")})`);
    let W;
    if (d instanceof W91) W = d;
    else try {
      W = new W91(d)
    } catch (K) {
      throw new SyntaxError(`Invalid URL: ${d}`)
    }
    if (W.protocol === "http:") W.protocol = "ws:";
    else if (W.protocol === "https:") W.protocol = "wss:";
    I._url = W.href;
    let w = W.protocol === "wss:",
      B = W.protocol === "ws+unix:",
      A;
    if (W.protocol !== "ws:" && !w && !B) A = `The URL's protocol must be one of "ws:", "wss:", "http:", "https", or "ws+unix:"`;
    else if (B && !W.pathname) A = "The URL's pathname is empty";
    else if (W.hash) A = "The URL contains a fragment identifier";
    if (A) {
      let K = new SyntaxError(A);
      if (I._redirects === 0) throw K;
      else {
        $j(I, K);
        return
      }
    }
    let V = w ? 443 : 80,
      X = _D4(16).toString("base64"),
      _ = w ? VD4.request : XD4.request,
      F = new Set,
      g;
    if (C.createConnection = C.createConnection || (w ? ED4 : vD4), C.defaultPort = C.defaultPort || V, C.port = W.port || V, C.host = W.hostname.startsWith("[") ? W.hostname.slice(1, -1) : W.hostname, C.headers = {
        ...C.headers,
        "Sec-WebSocket-Version": C.protocolVersion,
        "Sec-WebSocket-Key": X,
        Connection: "Upgrade",
        Upgrade: "websocket"
      }, C.path = W.pathname + W.search, C.timeout = C.handshakeTimeout, C.perMessageDeflate) g = new cY(C.perMessageDeflate !== !0 ? C.perMessageDeflate : {}, !1, C.maxPayload), C.headers["Sec-WebSocket-Extensions"] = fD4({
      [cY.extensionName]: g.offer()
    });
    if (G.length) {
      for (let K of G) {
        if (typeof K !== "string" || !UD4.test(K) || F.has(K)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
        F.add(K)
      }
      C.headers["Sec-WebSocket-Protocol"] = G.join(",")
    }
    if (C.origin)
      if (C.protocolVersion < 13) C.headers["Sec-WebSocket-Origin"] = C.origin;
      else C.headers.Origin = C.origin;
    if (W.username || W.password) C.auth = `${W.username}:${W.password}`;
    if (B) {
      let K = C.path.split(":");
      C.socketPath = K[0], C.path = K[1]
    }
    let J;
    if (C.followRedirects) {
      if (I._redirects === 0) {
        I._originalIpc = B, I._originalSecure = w, I._originalHostOrSocketPath = B ? C.socketPath : W.host;
        let K = Z && Z.headers;
        if (Z = {
            ...Z,
            headers: {}
          }, K)
          for (let [Q, E] of Object.entries(K)) Z.headers[Q.toLowerCase()] = E
      } else if (I.listenerCount("redirect") === 0) {
        let K = B ? I._originalIpc ? C.socketPath === I._originalHostOrSocketPath : !1 : I._originalIpc ? !1 : W.host === I._originalHostOrSocketPath;
        if (!K || I._originalSecure && !w) {
          if (delete C.headers.authorization, delete C.headers.cookie, !K) delete C.headers.host;
          C.auth = void 0
        }
      }
      if (C.auth && !Z.headers.authorization) Z.headers.authorization = "Basic " + Buffer.from(C.auth).toString("base64");
      if (J = I._req = _(C), I._redirects) I.emit("redirect", I.url, J)
    } else J = I._req = _(C);
    if (C.timeout) J.on("timeout", () => {
      ad(I, J, "Opening handshake has timed out")
    });
    if (J.on("error", (K) => {
        if (J === null || J[ex1]) return;
        J = I._req = null, $j(I, K)
      }), J.on("response", (K) => {
        let Q = K.headers.location,
          E = K.statusCode;
        if (Q && C.followRedirects && E >= 300 && E < 400) {
          if (++I._redirects > C.maxRedirects) {
            ad(I, J, "Maximum redirects exceeded");
            return
          }
          J.abort();
          let S;
          try {
            S = new W91(Q, d)
          } catch (P) {
            let $ = new SyntaxError(`Invalid URL: ${Q}`);
            $j(I, $);
            return
          }
          tx1(I, S, G, Z)
        } else if (!I.emit("unexpected-response", J, K)) ad(I, J, `Unexpected server response: ${K.statusCode}`)
      }), J.on("upgrade", (K, Q, E) => {
        if (I.emit("upgrade", K), I.readyState !== f4.CONNECTING) return;
        J = I._req = null;
        let S = K.headers.upgrade;
        if (S === void 0 || S.toLowerCase() !== "websocket") {
          ad(I, Q, "Invalid Upgrade header");
          return
        }
        let P = DD4("sha1").update(X + JD4).digest("base64");
        if (K.headers["sec-websocket-accept"] !== P) {
          ad(I, Q, "Invalid Sec-WebSocket-Accept header");
          return
        }
        let $ = K.headers["sec-websocket-protocol"],
          h;
        if ($ !== void 0) {
          if (!F.size) h = "Server sent a subprotocol but none was requested";
          else if (!F.has($)) h = "Server sent an invalid subprotocol"
        } else if (F.size) h = "Server sent no subprotocol";
        if (h) {
          ad(I, Q, h);
          return
        }
        if ($) I._protocol = $;
        let O = K.headers["sec-websocket-extensions"];
        if (O !== void 0) {
          if (!g) {
            ad(I, Q, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
            return
          }
          let T;
          try {
            T = qD4(O)
          } catch (c) {
            ad(I, Q, "Invalid Sec-WebSocket-Extensions header");
            return
          }
          let V1 = Object.keys(T);
          if (V1.length !== 1 || V1[0] !== cY.extensionName) {
            ad(I, Q, "Server indicated an extension that was not requested");
            return
          }
          try {
            g.accept(T[cY.extensionName])
          } catch (c) {
            ad(I, Q, "Invalid Sec-WebSocket-Extensions header");
            return
          }
          I._extensions[cY.extensionName] = g
        }
        I.setSocket(Q, E, {
          allowSynchronousEvents: C.allowSynchronousEvents,
          generateMask: C.generateMask,
          maxPayload: C.maxPayload,
          skipUTF8Validation: C.skipUTF8Validation
        })
      }), C.finishRequest) C.finishRequest(J, I);
    else J.end()
  }

  function $j(I, d) {
    I._readyState = f4.CLOSING, I._errorEmitted = !0, I.emit("error", d), I.emitClose()
  }

  function vD4(I) {
    return I.path = I.socketPath, sx1.connect(I)
  }

  function ED4(I) {
    if (I.path = void 0, !I.servername && I.servername !== "") I.servername = sx1.isIP(I.host) ? "" : I.host;
    return YD4.connect(I)
  }

  function ad(I, d, G) {
    I._readyState = f4.CLOSING;
    let Z = new Error(G);
    if (Error.captureStackTrace(Z, ad), d.setHeader) {
      if (d[ex1] = !0, d.abort(), d.socket && !d.socket.destroyed) d.socket.destroy();
      process.nextTick($j, I, Z)
    } else d.destroy(Z), d.once("error", I.emit.bind(I, "error")), d.once("close", I.emitClose.bind(I))
  }

  function A91(I, d, G) {
    if (d) {
      let Z = gD4(d) ? d.size : RD4(d).length;
      if (I._socket) I._sender._bufferedBytes += Z;
      else I._bufferedAmount += Z
    }
    if (G) {
      let Z = new Error(`WebSocket is not open: readyState ${I.readyState} (${eA[I.readyState]})`);
      process.nextTick(G, Z)
    }
  }

  function MD4(I, d) {
    let G = this[Y8];
    if (G._closeFrameReceived = !0, G._closeMessage = d, G._closeCode = I, G._socket[Y8] === void 0) return;
    if (G._socket.removeListener("data", uj), process.nextTick(Ic1, G._socket), I === 1005) G.close();
    else G.close(I, d)
  }

  function SD4() {
    let I = this[Y8];
    if (!I.isPaused) I._socket.resume()
  }

  function LD4(I) {
    let d = this[Y8];
    if (d._socket[Y8] !== void 0) d._socket.removeListener("data", uj), process.nextTick(Ic1, d._socket), d.close(I[ND4]);
    if (!d._errorEmitted) d._errorEmitted = !0, d.emit("error", I)
  }

  function ax1() {
    this[Y8].emitClose()
  }

  function yD4(I, d) {
    this[Y8].emit("message", I, d)
  }

  function PD4(I) {
    let d = this[Y8];
    if (d._autoPong) d.pong(I, !this._isServer, ox1);
    d.emit("ping", I)
  }

  function $D4(I) {
    this[Y8].emit("pong", I)
  }

  function Ic1(I) {
    I.resume()
  }

  function uD4(I) {
    let d = this[Y8];
    if (d.readyState === f4.CLOSED) return;
    if (d.readyState === f4.OPEN) d._readyState = f4.CLOSING, dc1(d);
    if (this._socket.end(), !d._errorEmitted) d._errorEmitted = !0, d.emit("error", I)
  }

  function dc1(I) {
    I._closeTimer = setTimeout(I._socket.destroy.bind(I._socket), 30000)
  }

  function Gc1() {
    let I = this[Y8];
    this.removeListener("close", Gc1), this.removeListener("data", uj), this.removeListener("end", Zc1), I._readyState = f4.CLOSING;
    let d;
    if (!this._readableState.endEmitted && !I._closeFrameReceived && !I._receiver._writableState.errorEmitted && (d = I._socket.read()) !== null) I._receiver.write(d);
    if (I._receiver.end(), this[Y8] = void 0, clearTimeout(I._closeTimer), I._receiver._writableState.finished || I._receiver._writableState.errorEmitted) I.emitClose();
    else I._receiver.on("error", ax1), I._receiver.on("finish", ax1)
  }

  function uj(I) {
    if (!this[Y8]._receiver.write(I)) this.pause()
  }

  function Zc1() {
    let I = this[Y8];
    I._readyState = f4.CLOSING, I._receiver.end(), this.end()
  }

  function Cc1() {
    let I = this[Y8];
    if (this.removeListener("error", Cc1), this.on("error", ox1), I) I._readyState = f4.CLOSING, this.destroy()
  }
})
// @from(Start 1592040, End 1593029)
Bc1 = Y((uS9, wc1) => {
  var {
    tokenChars: TD4
  } = GQ();

  function OD4(I) {
    let d = new Set,
      G = -1,
      Z = -1,
      C = 0;
    for (C; C < I.length; C++) {
      let w = I.charCodeAt(C);
      if (Z === -1 && TD4[w] === 1) {
        if (G === -1) G = C
      } else if (C !== 0 && (w === 32 || w === 9)) {
        if (Z === -1 && G !== -1) Z = C
      } else if (w === 44) {
        if (G === -1) throw new SyntaxError(`Unexpected character at index ${C}`);
        if (Z === -1) Z = C;
        let B = I.slice(G, Z);
        if (d.has(B)) throw new SyntaxError(`The "${B}" subprotocol is duplicated`);
        d.add(B), G = Z = -1
      } else throw new SyntaxError(`Unexpected character at index ${C}`)
    }
    if (G === -1 || Z !== -1) throw new SyntaxError("Unexpected end of input");
    let W = I.slice(G, C);
    if (d.has(W)) throw new SyntaxError(`The "${W}" subprotocol is duplicated`);
    return d.add(W), d
  }
  wc1.exports = {
    parse: OD4
  }
})
// @from(Start 1593035, End 1600642)
_c1 = Y((OS9, Yc1) => {
  var mD4 = B1("events"),
    Tj = B1("http"),
    {
      Duplex: TS9
    } = B1("stream"),
    {
      createHash: lD4
    } = B1("crypto"),
    Ac1 = C91(),
    Fg = PM(),
    bD4 = Bc1(),
    hD4 = V91(),
    {
      GUID: jD4,
      kWebSocket: kD4
    } = sA(),
    xD4 = /^[+/0-9A-Za-z]{22}==$/;
  class Xc1 extends mD4 {
    constructor(I, d) {
      super();
      if (I = {
          allowSynchronousEvents: !0,
          autoPong: !0,
          maxPayload: 104857600,
          skipUTF8Validation: !1,
          perMessageDeflate: !1,
          handleProtocols: null,
          clientTracking: !0,
          verifyClient: null,
          noServer: !1,
          backlog: null,
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: hD4,
          ...I
        }, I.port == null && !I.server && !I.noServer || I.port != null && (I.server || I.noServer) || I.server && I.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
      if (I.port != null) this._server = Tj.createServer((G, Z) => {
        let C = Tj.STATUS_CODES[426];
        Z.writeHead(426, {
          "Content-Length": C.length,
          "Content-Type": "text/plain"
        }), Z.end(C)
      }), this._server.listen(I.port, I.host, I.backlog, d);
      else if (I.server) this._server = I.server;
      if (this._server) {
        let G = this.emit.bind(this, "connection");
        this._removeListeners = cD4(this._server, {
          listening: this.emit.bind(this, "listening"),
          error: this.emit.bind(this, "error"),
          upgrade: (Z, C, W) => {
            this.handleUpgrade(Z, C, W, G)
          }
        })
      }
      if (I.perMessageDeflate === !0) I.perMessageDeflate = {};
      if (I.clientTracking) this.clients = new Set, this._shouldEmitClose = !1;
      this.options = I, this._state = 0
    }
    address() {
      if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
      if (!this._server) return null;
      return this._server.address()
    }
    close(I) {
      if (this._state === 2) {
        if (I) this.once("close", () => {
          I(new Error("The server is not running"))
        });
        process.nextTick(OM, this);
        return
      }
      if (I) this.once("close", I);
      if (this._state === 1) return;
      if (this._state = 1, this.options.noServer || this.options.server) {
        if (this._server) this._removeListeners(), this._removeListeners = this._server = null;
        if (this.clients)
          if (!this.clients.size) process.nextTick(OM, this);
          else this._shouldEmitClose = !0;
        else process.nextTick(OM, this)
      } else {
        let d = this._server;
        this._removeListeners(), this._removeListeners = this._server = null, d.close(() => {
          OM(this)
        })
      }
    }
    shouldHandle(I) {
      if (this.options.path) {
        let d = I.url.indexOf("?");
        if ((d !== -1 ? I.url.slice(0, d) : I.url) !== this.options.path) return !1
      }
      return !0
    }
    handleUpgrade(I, d, G, Z) {
      d.on("error", Vc1);
      let C = I.headers["sec-websocket-key"],
        W = I.headers.upgrade,
        w = +I.headers["sec-websocket-version"];
      if (I.method !== "GET") {
        gg(this, I, d, 405, "Invalid HTTP method");
        return
      }
      if (W === void 0 || W.toLowerCase() !== "websocket") {
        gg(this, I, d, 400, "Invalid Upgrade header");
        return
      }
      if (C === void 0 || !xD4.test(C)) {
        gg(this, I, d, 400, "Missing or invalid Sec-WebSocket-Key header");
        return
      }
      if (w !== 8 && w !== 13) {
        gg(this, I, d, 400, "Missing or invalid Sec-WebSocket-Version header");
        return
      }
      if (!this.shouldHandle(I)) {
        mM(d, 400);
        return
      }
      let B = I.headers["sec-websocket-protocol"],
        A = new Set;
      if (B !== void 0) try {
        A = bD4.parse(B)
      } catch (_) {
        gg(this, I, d, 400, "Invalid Sec-WebSocket-Protocol header");
        return
      }
      let V = I.headers["sec-websocket-extensions"],
        X = {};
      if (this.options.perMessageDeflate && V !== void 0) {
        let _ = new Fg(this.options.perMessageDeflate, !0, this.options.maxPayload);
        try {
          let F = Ac1.parse(V);
          if (F[Fg.extensionName]) _.accept(F[Fg.extensionName]), X[Fg.extensionName] = _
        } catch (F) {
          gg(this, I, d, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
          return
        }
      }
      if (this.options.verifyClient) {
        let _ = {
          origin: I.headers[`${w===8?"sec-websocket-origin":"origin"}`],
          secure: !!(I.socket.authorized || I.socket.encrypted),
          req: I
        };
        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(_, (F, g, J, K) => {
            if (!F) return mM(d, g || 401, J, K);
            this.completeUpgrade(X, C, A, I, d, G, Z)
          });
          return
        }
        if (!this.options.verifyClient(_)) return mM(d, 401)
      }
      this.completeUpgrade(X, C, A, I, d, G, Z)
    }
    completeUpgrade(I, d, G, Z, C, W, w) {
      if (!C.readable || !C.writable) return C.destroy();
      if (C[kD4]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
      if (this._state > 0) return mM(C, 503);
      let A = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${lD4("sha1").update(d+jD4).digest("base64")}`],
        V = new this.options.WebSocket(null, void 0, this.options);
      if (G.size) {
        let X = this.options.handleProtocols ? this.options.handleProtocols(G, Z) : G.values().next().value;
        if (X) A.push(`Sec-WebSocket-Protocol: ${X}`), V._protocol = X
      }
      if (I[Fg.extensionName]) {
        let X = I[Fg.extensionName].params,
          _ = Ac1.format({
            [Fg.extensionName]: [X]
          });
        A.push(`Sec-WebSocket-Extensions: ${_}`), V._extensions = I
      }
      if (this.emit("headers", A, Z), C.write(A.concat(`\r
`).join(`\r
`)), C.removeListener("error", Vc1), V.setSocket(C, W, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        }), this.clients) this.clients.add(V), V.on("close", () => {
        if (this.clients.delete(V), this._shouldEmitClose && !this.clients.size) process.nextTick(OM, this)
      });
      w(V, Z)
    }
  }
  Yc1.exports = Xc1;

  function cD4(I, d) {
    for (let G of Object.keys(d)) I.on(G, d[G]);
    return function G() {
      for (let Z of Object.keys(d)) I.removeListener(Z, d[Z])
    }
  }

  function OM(I) {
    I._state = 2, I.emit("close")
  }

  function Vc1() {
    this.destroy()
  }

  function mM(I, d, G, Z) {
    G = G || Tj.STATUS_CODES[d], Z = {
      Connection: "close",
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(G),
      ...Z
    }, I.once("finish", I.destroy), I.end(`HTTP/1.1 ${d} ${Tj.STATUS_CODES[d]}\r
` + Object.keys(Z).map((C) => `${C}: ${Z[C]}`).join(`\r
`) + `\r
\r
` + G)
  }

  function gg(I, d, G, Z, C) {
    if (I.listenerCount("wsClientError")) {
      let W = new Error(C);
      Error.captureStackTrace(W, gg), I.emit("wsClientError", W, G, d)
    } else mM(G, Z, C)
  }
})
// @from(Start 1600648, End 1600651)
pD4
// @from(Start 1600653, End 1600656)
iD4
// @from(Start 1600658, End 1600661)
nD4
// @from(Start 1600663, End 1600666)
Dc1
// @from(Start 1600668, End 1600671)
rD4
// @from(Start 1600673, End 1600676)
Hc1
// @from(Start 1600682, End 1600821)
Fc1 = Gw(() => {
  pD4 = J1(Hx1(), 1), iD4 = J1(I91(), 1), nD4 = J1(G91(), 1), Dc1 = J1(V91(), 1), rD4 = J1(_c1(), 1), Hc1 = Dc1.default
})
// @from(Start 1600827, End 1600829)
Oj
// @from(Start 1600835, End 1601583)
gc1 = Gw(() => {
  Fc1();
  Oj = global;
  Oj.WebSocket ||= Hc1;
  Oj.window ||= global;
  Oj.self ||= global;
  Oj.window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ = [{
    type: 1,
    value: 7,
    isEnabled: !0
  }, {
    type: 2,
    value: "InternalApp",
    isEnabled: !0,
    isValid: !0
  }, {
    type: 2,
    value: "InternalAppContext",
    isEnabled: !0,
    isValid: !0
  }, {
    type: 2,
    value: "InternalStdoutContext",
    isEnabled: !0,
    isValid: !0
  }, {
    type: 2,
    value: "InternalStderrContext",
    isEnabled: !0,
    isValid: !0
  }, {
    type: 2,
    value: "InternalStdinContext",
    isEnabled: !0,
    isValid: !0
  }, {
    type: 2,
    value: "InternalFocusContext",
    isEnabled: !0,
    isValid: !0
  }]
})