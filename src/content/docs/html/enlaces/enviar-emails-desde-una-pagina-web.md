---
title: "Enviar emails desde una página web"
description: "Descubre cómo enviar emails desde una página web utilizando formularios HTML. Aprende a configurar tus enlaces y a recibir opiniones de manera sencilla y efectiva."
date: 2009-02-27
updatedDate: 2026-01-24
tags: ["mailto","form","action","email"]
slug: html/enlaces/enviar-emails-desde-una-pagina-web
author: victor_cuervo
type: doc
topic: html
id: c77ec9a8-b0cd-42cf-b213-16294b42afb8
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/enlaces/enviar-emails-desde-pagina-web.html
---

Aunque al día de hoy casi todas las páginas están versadas en uno u otro lenguaje de servidor: [ASP](http://www.manualweb.net/asp/), [PHP](http://www.manualweb.net/php/), [JSP](https://www.manualweb.net/javaee/),... existe un amplio espectro de páginas desarrolladas en [HTML](https://www.manualweb.net/html/). Casi siempre con la inestimable ayuda de un editor web. Y es que es mucha la gente, que con unos conocimientos mínimos de Internet, se lanza a este para contarle algo al ciber espacio. E incluso habrá sitios dónde podramos insertar código [HTML](https://www.manualweb.net/html/) y que no permite utilizar otro lenguaje.


Y ya puestos, y una vez que nos hemos currado una página web, nos apetece que la gente comparta con nosotros su opinión sobre la misma. O simplemente se ponga en contacto con nosotros. Una vez en esta tesitura, lo más fácil sería poner un texto que sea un enlace (o no) con nuestra dirección de email.


Aquí, le estamos dando al comunicante solo nuestra dirección y el, la utilizará para contarnos lo que quiera. Si quieres tomar esta opción léete el articulo ["Propiedades de los enlaces de email"](http://lineadecodigo.com/2007/03/24/propiedades-de-enlaces-de-email/) el cual te ayudará a darle más potencia a tus enlaces de email.


Pero claro, puede ser que queramos, que cuando nos escriba, rellene cierta información que con el email no sabremos nunca si nos la va a enviar o no. Para ello tenemos los formularios. Y será entonces cuando queramos que nos envíe lo relleno en el formulario.


En este punto tenemos dos opciones. O bien tiramos de algún lenguaje de servidor (para aludidos, no tiene desperdicio [Mandar emails con JavaMail](http://lineadecodigo.com/2006/11/10/mandar-emails-con-javamail/)).


## Configurar el formulario con mailto


Para que el usuario nos envíe el formulario utilizando [HTML](https://www.manualweb.net/html/) solo tendremos que hacer una cosa. Poner **"**[**mailto:miusuario@miemail.com**](mailto:miusuario@miemail.com)**"** en el campo [action](https://www.w3api.com/HTML/a/ction) del formulario.


Quedándonos un código [HTML](https://www.manualweb.net/html/) como este, mediante la etiqueta FORM:


```html
<form action="mailto:miusuario@miemail.com"></form>
```


Con esto conseguiremos que el usuario nos envíe un email con la estructura del formulario.


## Formato del mensaje recibido


Una vez montando nuestro formulario veremos que si le damos a enviar el texto recibido puede ser algo como esto:


```text
textfield=victor&textfield2=victor%40miemail.com&textarea=cojonuda
```


El problema es que para diferenciar las diferentes partes del mensaje, el navegador utiliza los identificadores de los campos. Es por ello que es bastante conveniente el modificarlos. Para tal fin hay que modificar el campo name de los campos del formulario. Podríamos ponerlos así:


```html
<input name="nombre" type="text" />
```


Ahora, la cadena recibida, sería la siguiente:


```text
nombre=victor&email=victor%40miemail.com&opinion=cojonuda
```


Aunque sigue siendo una cadena críptica, es algo más clara que la anterior.


## Consideraciones importantes


Además tenemos que tener en mente un par de cosas. La primera es que esto solo funcionará si el usuario tiene un programa de correo electrónico en su ordenador (Outlook, Outlook Express, Eudora...). Hay que tener cuidado, ya que aunque es raro que el ordenador no tenga un programa de correo electrónico, puede darse el caso.


La segunda es que aunque nosotros le hayamos puesto los campos (incluso poniéndolos como obligatorios -podríamos usar [JavaScript](https://www.manualweb.net/javascript/)-), el usuario tiene la capacidad de modificar el email antes de enviarlo.


## Ejemplo completo de formulario


Aún con todo, esto es una buena solución para que se pongan en contacto con nosotros de forma sencilla. Al final nos quedará el siguiente formulario:


```html
<form action="mailto:contacto@lineadecodigo.com" method="post" name="form1">
  <label for="nombre">Nombre: </label>
  <input id="nombre" name="nombre" type="text" />
  <label for="email">Email: </label>
  <input id="email" name="nombre" type="text" />
  ¿Qué te pareció la página?
  <textarea id="opinion" name="opinion"></textarea>
  <input name="Submit" type="submit" value="Enviar" />
</form>
```

