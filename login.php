<?
  //GLOBAL VAR
  $debug=true;

  //FUNCTION
  function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
      $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
      $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
      $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
      $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
     $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
      $ipaddress = getenv('REMOTE_ADDR');
    else
      $ipaddress = 'UNKNOWN';
    return $ipaddress;
  }

  //FIND LOCAL IP
  $local_ip=get_client_ip();

  //FIND GAME LOGIN SESSION

  //CREATING ENV VARIABLE
  $web_session_id=hash('sha256', rand(), false);

  //DEBUGING
  if($debug==true) {
    echo '======== DEBUGING ========<br />';
    echo 'LOCAL IP: '.$local_ip.'<br />';
    echo 'SESSION ID: '.$web_session_id.'<br />';
  }

  //RETURN STATE
  if($debug==false) {
    header('Location: /dashboard');
  }
?>
