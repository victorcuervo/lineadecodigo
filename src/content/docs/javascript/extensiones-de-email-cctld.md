---
title: "Extensiones de email - ccTLD"
description: "Función Javascript que nos ayuda a conocer las extensiones de email y obtener la información relativa al país."
date: 2009-01-10
updatedDate: 2026-01-13
tags: ["email","array","while","substr","cctld"]
slug: javascript/extensiones-de-email-cctld
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/tree/master/validaciones/ccTLD
topic: javascript

---

En ciertas ocasiones nos encontraremos direcciones de email de las cuales no conozcamos el país de referencia al que pertenecen. Los países de referencia vienen especificados en las extensiones de email. 


El ejemplo que vamos a realizar será un código en [JavaScript](https://www.manualweb.net/javascript/), el cual, dado una dirección de email nos devuelva el país al cual está asociada su extensión de email.


## Extensiones de email: ccTLD


Antes de empezar hablemos de donde procede la lista de las extensiones de los emails, también conocidas como **ccTLDs (country code Top Level Domains)**. 


La lista de extensiones esta mantenida y gestionada por [IANA (Internet Asigned Numbers Authority)](http://www.iana.org/) organismo que se atiene a las extensiones recogidas en la lista ISO 3166-1, las cuales no se usan solo para el correo electrónico. 


Cabe mencionar que IANA es un grupo asentado en el seno de [ICANN (The Internet Corporation for Assigned Names and Numbers)](http://www.icann.org/) creada en Octubre de 1998 por una serie de empresas de Internet, técnicos, académicos y comunidades de usuarios con el fin de ejecutar un conjunto de funcionalidades técnicas para el mantenimiento de Internet.


## Crear el array de extensiones


Una vez vista este breve introducción indicar que el ejercicio no es complicado y casi lo más complicado era buscar las asociaciones entre extensiones y nombres, las cuales almacenaremos en un array:


```javascript
var extensions = new Array(
  [".ad", "Andorra"],
  [".ae", "United Arab Emirates"],
  [".af", "Afghanistan"],
  [".ag", "Antigua and Barbuda"],
  // ... más extensiones
);
```


## Función para obtener el país


Lo siguiente que haremos será crear una función JavaScript, la cual reciba el email y devuelva el país asociado a la extensión:


```javascript
function getCountry(email) {
  // Obtener la extensión del email
  var ext = email.substr(email.length - 3, 3);
  
  var encontrado = false;
  var cont = 0;
  
  // Buscar en el array de extensiones
  while ((!encontrado) && (cont < extensions.length)) {
    if (extensions[cont][0] == ext)
      encontrado = true;
    else
      cont++;
  }
  
  // Mostrar el resultado
  if (encontrado) {
    alert("La extensión " + ext + " pertenece a " + extensions[cont][1]);
  } else {
    alert("Extensión no encontrada");
  }
}
```


Lo primero que haremos en la función será obtener la extensión. La extensión se encuentra en los últimos 3 caracteres del email. Utilizaremos la función `substr` sobre la cadena de texto.


Ahora hay que empezar a buscar la extensión sobre el array de extensiones. Nos apoyaremos en un bucle `while`, del que nos saldremos si hemos encontrado la extensión o si hemos recorrido todo el array de extensiones.


Si hemos encontrado la extensión, mostramos la información por pantalla. Solo nos quedará llamar a la función desde un formulario.


## Notas


**Nota 1:** Para simplificar el ejemplo no he incluido la validación sobre la cadena de texto que compruebe que el e-mail es correcto o no está vacío. Si estáis interesados en eso leer el artículo [validar email con JavaScript](http://lineadecodigo.com/2009/01/09/validar-el-email-con-javascript/).


**Nota 2:** No he tenido tiempo para traducir los nombres de los países. Si alguien se anima... ;-)

