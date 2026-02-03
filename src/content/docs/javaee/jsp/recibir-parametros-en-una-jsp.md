---
title: "Recibir parametros en una JSP"
description: "La página explica cómo recibir parámetros en una JSP utilizando métodos GET y cómo mostrarlos en la web."
date: 2006-12-27
updatedDate: 2026-01-09
tags: ["jsp","servlet","servletrequest","getparameter"]
slug: javaee/jsp/recibir-parametros-en-una-jsp
author: victor_cuervo
type: doc
id: 398f7434-0157-468f-8caa-8b4dffcb55fb
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/sumar-datos.jsp
---

Una página [JSP](https://www.manualweb.net/javaee/) nos permite combinar la tecnología de las páginas web con la tecnología de las páginas de servidor. Es por ello que en una página [JSP](https://www.manualweb.net/javaee/) siempre veremos dos partes bien diferenciadas. El código relativo a la tecnología cliente: [HTML](https://www.manualweb.net/html/), XHTML, [SVG](https://www.manualweb.net/svg/),... y lo que denominaremos scriptlet. Estos scriptlet no deja de ser código [Java](https://www.manualweb.net/java/) que se ejecutará en el lado del servidor para añadirse al código cliente ya existente. Es decir, el navegador que ejecute nuestra [JSP](https://www.manualweb.net/javaee/) solo verá una página web (sea la tecnología que sea). Dicha página web se habrá compuesto en el servidor mediante código [Java](https://www.manualweb.net/java/) y código cliente. Una de las primera cosas que querremos hacer será pasarle información a esta página. Lo primero que conocer son las formas de pasar información a una página web (vía POST y vía GET). Las diferencias, a grandes rasgos, son que las peticiones vía GET encadenan los valores a pasar a la página web en la URL, mientras que si hacemos una petición vía POST se pasará la información de forma implícita. En el primer caso veremos URL del tipo...


```text
ObtenerParametros.jsp?dato1=pagina&dato2=lineadecodigo
```


Lógicamente nuestro cometido será el recuperar la información que llega como parámetro para utilizarla dentro de nuestra página web. Dentro del contexto de la página [JSP](https://www.manualweb.net/javaee/) tenemos disponible la variable request. Dicha variable viene a representar la petición que es recibida en la página. Y consecuentemente los parámetros y valores que la llegan. Si queremos recuperar el valor de los parámetros, simplemente deberemos de utilizar [el método .getParameter(String parametro)]( "Método Java getParameter"). Donde indicaremos el nombre del parámetro a recuperar. Así, en la anterior petición podremos recuperar los valores de los parámetros dato1 y dato2 mediante la siguiente [linea de codigo](http://lineadecodigo.com/):


```java
String datoUno = request.getParameter("dato1");
String datoDos = request.getParameter("dato2");
```


Ahora solo nos quedará el utilizar los valores de los datos recibidos como parámetro donde y como queramos. Por ejemplo para, simplemente, mostrarlos por pantalla.


```java
out.println(datoUno);
out.println(datoDos);
```


En este caso hemos utilizado la variable out, que viene a representar la respuesta hacia el cliente y en concreto el método .println(variable) que vuelca información sobre la página.

