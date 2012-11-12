function com_canoo_gwt_contentflow4gwt_ContentFlowDemo(){
  var $wnd_0 = window, $doc_0 = document, $stats = $wnd_0.__gwtStatsEvent?function(a){
    return $wnd_0.__gwtStatsEvent(a);
  }
  :null, $sessionId_0 = $wnd_0.__gwtStatsSessionId?$wnd_0.__gwtStatsSessionId:null, scriptsDone, loadDone, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'begin'});
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc_0.getElementById('com.canoo.gwt.contentflow4gwt.ContentFlowDemo');
      var frameWnd = iframe.contentWindow;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name_0){
          return computePropValue(name_0);
        }
        ;
      }
      com_canoo_gwt_contentflow4gwt_ContentFlowDemo = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, 'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', base, softPermutationId);
      $stats && $stats({moduleName:'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'end'});
    }
  }

  function computeScriptBase(){
    if (metaProps['baseUrl']) {
      base = metaProps['baseUrl'];
      return base;
    }
    var thisScript;
    var scriptTags = $doc_0.getElementsByTagName('script');
    for (var i = 0; i < scriptTags.length; ++i) {
      if (scriptTags[i].src.indexOf('com.canoo.gwt.contentflow4gwt.ContentFlowDemo.nocache.js') != -1) {
        thisScript = scriptTags[i];
      }
    }
    if (!thisScript) {
      var markerId = '__gwt_marker_com.canoo.gwt.contentflow4gwt.ContentFlowDemo';
      var markerScript;
      $doc_0.write('<script id="' + markerId + '"><\/script>');
      markerScript = $doc_0.getElementById(markerId);
      thisScript = markerScript && markerScript.previousSibling;
      while (thisScript && thisScript.tagName != 'SCRIPT') {
        thisScript = thisScript.previousSibling;
      }
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == '') {
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc_0.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc_0.createElement('img');
      img.src = base + 'clear.cache.gif';
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
    return base;
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content_0;
      if (name_0) {
        name_0 = name_0.replace('com.canoo.gwt.contentflow4gwt.ContentFlowDemo::', '');
        if (name_0.indexOf('::') >= 0) {
          continue;
        }
        if (name_0 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_0 = content_0.substring(0, eq);
              value = content_0.substring(eq + 1);
            }
             else {
              name_0 = content_0;
              value = '';
            }
            metaProps[name_0] = value;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc_0.createElement('iframe');
      iframe.src = "javascript:''";
      iframe.id = 'com.canoo.gwt.contentflow4gwt.ContentFlowDemo';
      iframe.style.cssText = 'position:absolute;width:0;height:0;border:none';
      iframe.tabIndex = -1;
      $doc_0.body.appendChild(iframe);
      $stats && $stats({moduleName:'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'moduleRequested'});
      iframe.contentWindow.location.replace(base + initialHtml);
    }
  }

  providers['user.agent'] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf('opera') != -1) {
      return 'opera';
    }
     else if (ua.indexOf('webkit') != -1) {
      return 'safari';
    }
     else if (ua.indexOf('msie') != -1) {
      if (document.documentMode >= 8) {
        return 'ie8';
      }
       else {
        var result_0 = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
        if (result_0 && result_0.length == 3) {
          var v = makeVersion(result_0);
          if (v >= 6000) {
            return 'ie6';
          }
        }
      }
    }
     else if (ua.indexOf('gecko') != -1) {
      var result_0 = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result_0 && result_0.length == 3) {
        if (makeVersion(result_0) >= 1008)
          return 'gecko1_8';
      }
      return 'gecko';
    }
    return 'unknown';
  }
  ;
  values['user.agent'] = {gecko:0, gecko1_8:1, ie6:2, ie8:3, opera:4, safari:5};
  com_canoo_gwt_contentflow4gwt_ContentFlowDemo.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  com_canoo_gwt_contentflow4gwt_ContentFlowDemo.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'end'});
    maybeStartModule();
  }
  ;
  processMetas();
  computeScriptBase();
  var strongName;
  var initialHtml;
  if (isHostedMode()) {
    if ($wnd_0.external && ($wnd_0.external.initModule && $wnd_0.external.initModule('com.canoo.gwt.contentflow4gwt.ContentFlowDemo'))) {
      $wnd_0.location.reload();
      return;
    }
    initialHtml = 'hosted.html?com_canoo_gwt_contentflow4gwt_ContentFlowDemo';
    strongName = '';
  }
  $stats && $stats({moduleName:'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'selectingPermutation'});
  if (!isHostedMode()) {
    try {
      unflattenKeylistIntoAnswers(['gecko'], '560C82CEA9BFC1B50E35872EADA89DA6');
      unflattenKeylistIntoAnswers(['gecko1_8'], '560C82CEA9BFC1B50E35872EADA89DA6');
      unflattenKeylistIntoAnswers(['ie6'], '5B93B4E87F4C463727DA3AD5A2AAA2E5');
      unflattenKeylistIntoAnswers(['opera'], '883004F5A52809483720A787A47D7F83');
      unflattenKeylistIntoAnswers(['ie8'], '9A4A7F3FBDA4DE6C0A6ED605B01E007D');
      unflattenKeylistIntoAnswers(['safari'], 'FF1C3E9C8DEDBB1CCA28A9F898972D38');
      strongName = answers[computePropValue('user.agent')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = Number(strongName.substring(idx + 1));
        strongName = strongName.substring(0, idx);
      }
      initialHtml = strongName + '.cache.html';
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'end'});
  $stats && $stats({moduleName:'com.canoo.gwt.contentflow4gwt.ContentFlowDemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'begin'});
  if (!__gwt_scriptsLoaded['contentflow.js']) {
    __gwt_scriptsLoaded['contentflow.js'] = true;
    document.write('<script language="javascript" src="' + base + 'contentflow.js"><\/script>');
  }
  $doc_0.write('<script defer="defer">com_canoo_gwt_contentflow4gwt_ContentFlowDemo.onInjectionDone(\'com.canoo.gwt.contentflow4gwt.ContentFlowDemo\')<\/script>');
}

com_canoo_gwt_contentflow4gwt_ContentFlowDemo();
