---
title: "Obtener la URL actual con PHP"
description: "Se explica cómo obtener la URL actual con PHP y varios detalles como el puerto y el protocolo."
lastUpdated: 2025-12-19
slug: php/obtener-la-url-actual-con-php
author: Dave Rndn
---

En este post veremos cómo obtener la URL actual por medio de un par de funciones con [PHP](http://www.manualweb.net/php/), además de obtener la URL también podemos obtener ciertos detalles como el puerto, el protocolo y el host. En [PHP](http://www.manualweb.net/php/) existen varias variables que ofrecen datos sobre la URL que se está ejecutando. Nosotros podemos obtener diferentes datos a través de estas variables según nos convenga.


Por ejemplo, con las variables `_SERVER` de [PHP](http://www.manualweb.net/php/) siguientes puedes obtener esa URL que estamos ejecutando:

- **_SERVER["REQUEST_URI"]**, devuelve la URL que se está ejecutando, relativa a la raíz del dominio
- **$_SERVER["PHP_SELF"]**, devuelve el script que se está ejecutando, relativo a la raíz del dominio, que puede ser distinto a REQUEST_URI
- **$_SERVER["SERVER_NAME"]** Almacena el servidor donde está alojada la página

De esta manera podríamos juntar las variables y concatenarlas en una sola para obtener la URL completa de manera sencilla


```php
$url_actual = "http://" . $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
echo "$url_actual";
```


También podemos obtener más datos además de la URL, como lo son el protocolo, el host y el puerto que se esta usando, a continuación les muestro el código para obtener dichos datos:


Una vez que la función `obtenerURL` ha montado la URL lo que hacemos es descomponerla mediante la función `parse_url` para ver las partes que lo componen.


```php
$url = obtenerUrl();
$datos = parse_url($url);

foreach ($datos as $key=>$value) {
  echo "$key: $value <br></br>";
}

$url_actual = "http://" . $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"];
echo "$url_actual";
```

