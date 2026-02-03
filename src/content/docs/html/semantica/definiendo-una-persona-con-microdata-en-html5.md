---
title: "Definiendo una persona con microdata en HTML5"
description: "Descubre cómo definir una persona con microdata en HTML5 para mejorar la semántica de tu web y optimizar su visibilidad en los buscadores."
date: 2012-10-07
updatedDate: 2026-01-24
tags: ["HTML5 Microdata"]
slug: html/semantica/definiendo-una-persona-con-microdata-en-html5
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-818e-aeff-ead574955a43
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Microdata/persona.html
---

Dentro de la especificación de [HTML5](https://www.manualweb.net/html5/) aparece el concepto de **microdata** (o microdatos). Al igual que teníamos los microformatos, el microdata nos ayuda a dar información semántica a una estructura de datos. De esta forma conseguiremos dar información adicional a nuestra página. Esta información adicional servirá a otros, como puede ser el caso de los buscadores, a extraer información de la página.


En este caso vamos a definir una persona con la estructura de microdata de [HTML5](https://www.manualweb.net/html5/). Y veremos como Google utiliza esta información para extraer datos relativos a los autores de las páginas web.


## El esquema de microdata


Lo primero que tenemos que saber es que los microdatos que utilicemos tienen que seguir un esquema, el cual deberá de estar definido en algún sitio. Este esquema es que nos dice de que partes se conforma la estructura. En nuestro caso vamos a utilizar los esquemas de [Schema.org](http://schema.org/) y en concreto el [esquema de una Persona](http://schema.org/Person). Si bien hay que saber que podríamos definirnos nuestro propio esquema. A esto se lo conoce como **namespace**.


> El microdata de persona en [HTML5](https://www.manualweb.net/html5/) es utilizado por Google en sus resultados para indicar la auditoría de los artículos y proporcionar información adicional.


## Propiedades del esquema persona


Echandole un vistazo a la estructura persona vemos que los datos básicos que tiene que tener toda persona son:

- **name**, como nombre de la persona
- **url**, web asociada a la persona
- **image**, una foto de la persona.

Aunque podemos tener otros datos como:

- **nickname**, apodo de la persona
- **affiliation**, empresa en la que está dicha persona.
- **jobTitle**, rol de la persona en una empresa
- ...

## Definiendo el ámbito con itemscope


A la hora de empezar a definir la persona con microdata en [HTML5](https://www.manualweb.net/html5/) lo primero será definir el ámbito al que aplica, es decir, la zona sobre la cual definimos a la persona dentro de todo el contenido de nuestra página. Para definir el ámbito utilizamos el atributo **itemscope**. Por ejemplo, si el ámbito queremos reducirlo a una capa lo haremos de la siguiente forma:


```html
<div itemscope="">
  <img loading="lazy" src="foto.jpg" width="150" height="150" alt="Foto de Víctor">
  <strong>Nombre</strong>: Víctor Cuervo<br>
  <strong>Posición:</strong> Editor en Aulambra<br>
  <strong>Web:</strong> <a href="http://lineadecodigo.com" title="Linea de Código">Línea de Código</a>
</div>
```


## Definiendo el tipo con itemtype


Pero a parte de definir el ámbito del microdata en [HTML5](https://www.manualweb.net/html5/) hay que indicar el esquema sobre el que se va a trabajar. En el caso de definir una persona utilizaremos el esquema [http://schema.org/Person](http://schema.org/Person). En este caso el atributo a utilizar es **itemtype**.


```html
<div itemscope="" itemtype="http://schema.org/Person">
  <img loading="lazy" src="foto.jpg" width="150" height="150" alt="Foto de Víctor">
  <strong>Nombre</strong>: Víctor Cuervo<br>
  <strong>Posición:</strong> Editor en Aulambra<br>
  <strong>Web:</strong> <a href="http://lineadecodigo.com" title="Linea de Código">Línea de Código</a>
</div>
```


## Añadiendo propiedades con itemprop


Ahora que ya tenemos definido el ámbito vamos a empezar la información semántica al contenido. Por ejemplo, al nombre "Víctor Cuervo" hay que indicar que es el nombre o "name". Para poder hacer esto utilizamos el atributo **itemprop**. Por ejemplo, para el caso del nombre y empresa lo haremos de la siguiente forma:


```html
<strong>Nombre</strong>:
<span itemprop="name">Víctor Cuervo</span><br>
<strong>Posición:</strong>
<span itemprop="jobTitle">Editor</span> en
<span itemprop="affiliation">Aulambra</span>
```


Como el texto no tenía una etiqueta asociada hemos insertado una etiqueta `span` para poder añadirlo. En el caso de la imagen lo haremos directamente poniendo `itemprop="image"` sobre el elemento IMG.


```html
<img loading="lazy" itemprop="image" src="foto.jpg" width="150" height="150" alt="Foto de Víctor">
```


De igual manera para la URL utilizamos el elemento A para incluir el atributo `itemprop="url"`.


```html
<strong>Web:</strong>
<a href="http://lineadecodigo.com" title="Linea de Código" itemprop="url">Línea de Código</a>
```


## Código completo


Todo el código quedará de la siguiente forma:


```html
<div itemscope="" itemtype="http://schema.org/Person">
  <img loading="lazy" itemprop="image" src="foto.jpg" width="150" height="150" alt="Foto de Víctor">
  <strong>Nombre</strong>: <span itemprop="name">Víctor Cuervo</span><br>
  <strong>Posición:</strong> <span itemprop="jobTitle">Editor</span> en  <span itemprop="affiliation">Aulambra</span><br>
  <strong>Web:</strong> <a href="http://lineadecodigo.com" title="Linea de Código" itemprop="url">Línea de Código</a>
</div>
```


## Probando el microdata


Para poder probar tu código para definir una persona con microdata en [HTML5](https://www.manualweb.net/html5/) se puede utilizar un snippet de Google en [http://www.google.com/webmasters/tools/richsnippets](http://www.google.com/webmasters/tools/richsnippets)


---


**Actualizado 26.agosto.2015**


Modificado el itemprop="image" en vez del itemprop="photo".


**Actualizado 16.octubre.2014**


Utilizado el atributo "jobTitle" para identificar el campo del rol dentro de la empresa.


**Actualizado 14.octubre.2014**


Hemos modificado el código para utilizar la definición de microdata de [http://schema.org/](http://schema.org/).

