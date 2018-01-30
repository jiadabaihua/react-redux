export function GetHomeInfo(arg){
    let {name,value}=arg;
    return {
        method: 'post',
      headers: {
        'Accept': 'application/json, application/xml, text/play, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `/AssessMRest/100000/InviteTestee/AddTesteeByImport`,
      data: `excelPath=${name}&groupId=${value}`
    }
}

export function GetDetailInfo(arg){
    return {
        method: 'post',
      headers: {
        'Accept': 'application/json, application/xml, text/play, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `/AssessMRest/100000/InviteTestee/AddTesteeByImport`,
      data: 'excelPath=111&groupId=222'
    }
}