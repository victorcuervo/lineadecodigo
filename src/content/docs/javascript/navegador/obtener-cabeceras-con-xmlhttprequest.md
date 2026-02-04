---
title: "Obtener cabeceras con XMLHttpRequest"
description: "El artículo explica cómo obtener cabeceras con XMLHttpRequest en AJAX para mejorar la comunicación web."
date: 2008-03-24
updatedDate: 2026-01-13
tags: ["xmlhttprequest","getelementbyid","cabeceras","http"]
slug: javascript/navegador/obtener-cabeceras-con-xmlhttprequest
type: doc
topic: javascript
id: 2c8a9dfb-adca-8111-abdf-f84f3ec54cf6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/xmlhttrequest/cabecerashttprequest.html
---

Si tenemos que describir la Web 2.0 estoy seguro que no podríamos obviar la palabra [AJAX](http://www.manualweb.net/javascript/). Y es que podríamos decir que la Web 2.0 se sustenta sobre un modelo tecnológico asíncrono, el cual, mediante peticiones/respuesta para regenerar parte de la página busca dar un efecto de mayor velocidad al usuario final. Al menos, mayor que la recarga entera de la página. "Pure [AJAX](http://www.manualweb.net/javascript/)".


Y si hablamos de [AJAX](http://www.manualweb.net/javascript/) tenemos que hablar del objeto **XMLHttpRequest**, sobre el cual nos apoyamos para realizar las peticiones asíncronas desde la página web.


## Obtener información de las cabeceras HTTP


Una de las posibilidades que nos ofrece este objeto es la de conocer la información de la cabecera HTTP. Para ello tenemos los métodos `.getAllResponseHeaders()` o `.getResponseHeader(etiqueta)`.


El primero nos dará toda la información de la cabecera y el segundo nos permitirá ir a buscar un valor en concreto.


Un ejemplo de esta respuesta sería el siguiente:


```shell
Date: Mon, 24 Mar 2008 09:00:00 GMT
Server: Apache/2.2.3 (CentOS)
Last-Modified: Wed, 09 Feb 2005 20:18:35 GMT
ETag: "45b6-834-4117e680"
Accept-Ranges: bytes
Content-Length: 2100
Connection: close
Content-Type: text/html; charset=UTF-8
```


El uso de estas cabeceras puede ser de lo más variopinto y va desde la validación de las ultimas modificaciones del recurso para ver si es válido o no, control de la cache o del contenido de la respuesta...


## Crear el objeto XMLHttpRequest


Para poder recuperar las cabeceras lo primero que tenemos que hacer es crear un objeto **XMLHttpRequest**.


A la hora de cargar un objeto **XMLHttpRequest** lo podremos hacer de dos formas: mediante el propio objeto **XMLHttpRequest** o bien mediante un **ActiveX** para mantener compatibilidad con IE5 e IE6.


```javascript
if (window.XMLHttpRequest)
  peticion_http = new XMLHttpRequest();
else if (window.ActiveXObject)
  peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
```


## Configurar la petición


Una vez que tenemos el objeto **XMLHttpRequest** instanciado deberemos de indicar cual es el método de callback, es decir, que método va a atender la respuesta. Esto lo hacemos mediante el atributo **onreadystatechange**.


```javascript
peticion_http.onreadystatechange = procesaRespuesta;
```


Lo siguiente será llamar al **método open**, para indicarle los parámetros de conexión: método de envío, URL destino...


> Recuerda que la URL destino del método open tiene que estar en tu mismo dominio. En caso contrario no podrás acceder al contenido de dicha URL.


Por último llamaremos al **método send**, el cual realizará la conexión.


```javascript
peticion_[http.open](http://http.open/)('GET', '[http://www.lineadecodigo.com](http://www.lineadecodigo.com/)', true);
peticion_http.send(null);
```


## Procesar la respuesta


Cuando procesemos la respuesta simplemente tendremos que llamar al método `.getAllResponseHeaders()` o `.getResponseHeader(etiqueta)`.


Debemos de recordar que para procesar la respuesta es una buena práctica validar que la petición ha terminado:


```javascript
if (peticion_http.readyState == 4)
```


Y que la respuesta del servidor ha sido un OK, es decir, un código de status 200:


```javascript
if (peticion_http.status == 200)
```


Una vez hechas todas las validaciones, en nuestro caso vamos a volcar las cabeceras en un área de texto:


```javascript
function procesaRespuesta() {
  if (peticion_http.readyState == 4) {
    if (peticion_http.status == 200) {
      document.getElementById("textarea").value = peticion_http.getAllResponseHeaders();
    }
  }
}
```

