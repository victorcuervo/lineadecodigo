---
title: "Manejar objetos JSON con acentos en PHP"
description: "Aprende a manejar objetos JSON con acentos en PHP convirtiendo cadenas a UTF8 con utf8_encode() para evitar valores nulos en json_encode()."
date: 2013-05-16
updatedDate: 2026-02-08
tags: ["json_encode","stdclass","utf8_encode"]
slug: php/json/manejar-objetos-json-con-acentos-en-php
type: doc
topic: php
id: 75d069bd-a54b-4275-838b-f924d9968d4e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/json/objetos-json-con-acentos.php
---

Si [estas creando objetos JSON en PHP](http://lineadecodigo.com/php/crear-un-objeto-json-en-php/) es posible que te encuentres ante la necesidad de manejar objetos JSON con acentos. En estos casos hay que realizar una serie de manipulaciones sobre dichos textos para poder manejar objetos JSON con acentos en [PHP](http://www.manualweb.net/php/) de la forma correcta.


Y es que después de realizar el siguiente código:


## Código con problema


```php
$objeto = new stdClass();
$objeto->texto = "Víctor";
$json = json_encode($objeto);
echo $json;
```


Te encuentres con la desagradable sorpresa de que el resultado del objeto JSON contenga un null.


```json
{"texto":null}
```


## Solución: Convertir a UTF8


Es por ello que tenemos que saber como manejar objetos JSON con acentos en [PHP](http://www.manualweb.net/php/). El truco está en convertir los textos que necesitemos en UTF8. Esto lo podemos hacer de dos formas:

1. **Todo el sistema funcione en UTF8**: Las cadenas ya son UTF8 en su totalidad
2. **Convertir la cadena a UTF8**: Utilizar la función `utf8_encode()`

La función `json_encode` está esperando un parámetro que sea puramente UTF8. Para convertir el texto en UTF8 utilizamos la función `utf8_encode()` pasándola la cadena como parámetro.


```php
$objeto->texto = utf8_encode("Víctor");
```


Una vez que hemos manipulado el objeto JSON con acentos en [PHP](http://www.manualweb.net/php/) obtendremos la siguiente respuesta:


```json
{"texto":"V\u0092ctor"}
```

