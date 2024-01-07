function pushAnalyticsPageView(productId) {
  var payload = {
    v: '1',
    tid: 'UA-98434618-1',
    cid: Session.getTemporaryActiveUserKey(),
    t: 'pageview',
    dp: productId
  };
  var params = {
    method: 'POST',
    payload: payload
  };
  UrlFetchApp.fetch('https://www.google-analytics.com/collect', params);
}

function pushAnalyticsEvent(productId) {
  var payload = {
    v: '1',
    tid: 'UA-98434618-1',
    cid: Session.getTemporaryActiveUserKey(),
    t: 'event',
    ec: productId,
    ea: pushAnalyticsEvent.caller.name
  };
  var params = {
    method: 'POST',
    payload: payload
  };
  var resp = UrlFetchApp.fetch(
    'https://www.google-analytics.com/collect',
    params
  );
}

//Analytics script added by Malarvizhi Balakrishnan on 20-01-23
