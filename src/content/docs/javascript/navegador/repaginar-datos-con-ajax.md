---
title: "Repaginar datos con AJAX"
description: "La repaginación de datos con AJAX permite actualizar partes de la página sin recargarla completamente, mejorando la experiencia del usuario."
date: 2009-08-05
updatedDate: 2026-01-13
tags: ["innerhtml","asincrono","xmlhttprequest","getelementbyid","open","send"]
slug: javascript/navegador/repaginar-datos-con-ajax
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/xmlhttrequest/repaginar-con-ajax.html
topic: javascript

---

Una de las cosas que nos permite [AJAX](http://www.manualweb.net/javascript/) es realizar peticiones asíncronas, las cuales solo recarguen una parte de la página. Esto nos da la posibilidad de dar la sensación de velocidad de cara al usuario.


Un caso ejemplo es el de la **repaginación de datos**. Es decir, tener una lista de elementos dentro de las páginas e ir avanzando o retrocediendo en el listado, buscando no afectar al resto de la página.


En el ejemplo repaginar datos con AJAX nos vamos a centrar en la parte cliente de petición (en nuestra página HTML). No entraremos en detalle de la construcción de la parte servidor. Si bien, dejo pendiente el escribir un artículo completo que utilice AJAX, PHP y acceso a datos MySQL, lo cual nos dejará ver el proceso entero de una forma más detallada.


## Definir la página del servidor


Empezaremos definiendo la página del servidor que nos devuelva los datos. Esta puede estar construida en cualquier tecnología del lado del servidor: [ASP](http://www.manualweb.net/asp/), [PHP](http://www.manualweb.net/php/), [JSP](https://www.manualweb.net/javaee/)...


En nuestro caso vamos a crear una pequeña página en JSP. Esta página recibe un parámetro denominado **"página"**. Según el valor que le llegue como parámetro devolverá una lista HTML u otra. La URL será algo como lo siguiente:


```text
[http://localhost/listado.jsp?pagina=1](http://localhost/listado.jsp?pagina=1)
```


Aunque no quiero entrar en detalle del código JSP, os adjunto un pequeño extracto del código de forma orientativa:


```javascript
<%
int pagina = Integer.parseInt(request.getParameter("pagina"));
out.println("<ul>");
for (int x=0;x<10;x++) {
  out.println("<li>" + provincias[pagina+x] + "</li>");
}
out.println("</ul>");
%>
```


Comentándolo muy por encima, recupera el valor del parámetro utilizando el método `.getParameter()` y lo utiliza para acceder a un array de String. A partir de ese elemento del array devuelve 10 elementos en una lista HTML utilizando las etiquetas `<ul>` y `<li>`.


## La parte cliente


Pero centrémonos en la parte cliente. Lo primero será definir la página. La página tendrá una capa `<div>` donde iremos mostrando el contenido. Es importante darle un **ID** a la capa, ya que nuestro código JavaScript accederá a ella para ir modificando el contenido de forma asíncrona.


Debajo de la capa pondremos 5 enlaces que llamen a una función JavaScript `paginar()`. Esta función será la que realice la petición AJAX y cargue el contenido en la capa DIV. Veamos este código:


```html
<div id="listado"></div>
<a href="#" onclick="paginar(0);">Página 1</a>
<a href="#" onclick="paginar(1);">Página 2</a>
<a href="#" onclick="paginar(2);">Página 3</a>
<a href="#" onclick="paginar(3);">Página 4</a>
<a href="#" onclick="paginar(4);">Página 5</a>
```


## La función paginar


La función JavaScript `paginar()` será la que realice todo el trabajo. Como vemos, esta función recibe un parámetro que indica el número de página sobre el que queremos posicionarnos.


```javascript
function paginar(numeroPagina) {
  // código de la función
}
```


Lo primero que tiene que realizar esta función es cargar el objeto que nos permita realizar las peticiones asíncronas a modo AJAX. Este objeto es **XMLHttpRequest**.


Aunque el objeto XMLHttpRequest es un objeto ya [estandarizado y definido por la W3C](http://www.w3.org/TR/XMLHttpRequest/), hay ciertos navegadores (como el Internet Explorer) que siguen sin implementarlo. En su defecto utilizan el objeto `Microsoft.XMLHTTP`. Este viene a hacer lo mismo, pero con otro nombre.


Es por ello que la instancia del objeto XMLHttpRequest se complica un poco. Quedaría de la siguiente manera:


```javascript
var req;
if (window.XMLHttpRequest) {
  req = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  req = new ActiveXObject("Microsoft.XMLHTTP");
}
```


La variable que tiene la instancia es `req`. Esta variable será la que represente la conexión con el servicio de datos.


## Establecer la conexión


El siguiente paso será establecer la conexión. Para ello seguimos tres pasos:


**Primero**, indicamos qué función JavaScript es la que va a procesar la respuesta del servidor. Esto lo hacemos mediante el evento `.onreadystatechange` de la petición. En nuestro caso será la función JavaScript `procesarRespuesta`:


```javascript
req.onreadystatechange = procesarRespuesta;
```


**Segundo**, indicamos la URL a la cual queremos realizar la petición. Para componer la URL concatenamos la URL del servicio de datos con el número de página recibido como parámetro:


```javascript
[req.open](http://req.open/)("GET", "listado.jsp?pagina=" + numeroPagina, true);
```


El método `.open()` es el que utilizamos para indicar la URL. Este tiene varios parámetros: tipo de petición (GET, POST o PUT), la URL y si queremos que sea síncrono (false) o asíncrono (true) como tercer parámetro.


**Tercero y último**, realizamos la petición. Para ello nos apoyamos en el método `.send()`:


```javascript
req.send(null);
```


Veamos cómo es la función `paginar()` entera:


```javascript
function paginar(numeroPagina) {
  var req;
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  req.onreadystatechange = procesarRespuesta;
  [req.open](http://req.open/)("GET", "listado.jsp?pagina=" + numeroPagina, true);
  req.send(null);
}
```


## Procesar la respuesta


Ahora nos tenemos que centrar en la función JavaScript `procesarRespuesta()`. Esta función es la que recibirá los datos del servidor y los colocará en la capa.


Los datos de la respuesta vienen en la propiedad `.responseText` de la petición (es decir, del objeto `req`). Es por ello que simplemente tenemos que pegarlos en la capa:


```javascript
function procesarRespuesta() {
  if (req.readyState == 4) {
    document.getElementById("listado").innerHTML = req.responseText;
  }
}
```


Para poder poner los datos en la capa DIV tenemos que haber accedido a ella mediante su ID y la función `.getElementById()`. Para modificar el contenido de una capa nos apoyamos en la propiedad `.innerHTML`. Esta propiedad será sobre la que dejemos el contenido de `responseText`.


Y ya está. Con esto hemos construido una repaginación de datos con AJAX de una forma muy sencilla.


> **Nota:** Como último hay que destacar que tanto el archivo cliente como el servicio de datos tienen que estar en el mismo dominio, debido a las políticas de seguridad de JavaScript.

