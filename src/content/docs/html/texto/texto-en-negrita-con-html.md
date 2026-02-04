---
title: "Texto en negrita con HTML"
description: "Explicación del uso del elemento b y el elemento strong en HTML 4.01 para poder poner texto en negrita con HTML."
date: 2009-08-01
updatedDate: 2026-01-05
tags: ["texto","negrita","b","strong"]
slug: html/texto/texto-en-negrita-con-html
type: doc
topic: html
id: c5418167-6730-47d0-aaa0-03c24fb22fd4
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/texto/texto-en-negrita.html
---

La [W3C](http://www.w3.org/) recomienda el uso de [CSS](https://www.manualweb.net/css/) para realizar acciones de estilo y en este caso el uso de la negrita sobre el texto. Si bien, en este artículo vamos a ver cómo poner texto en negrita con [HTML](http://www.manualweb.net/tutorial-html/).


Esta técnica viene de [las primeras versiones de HTML](https://manualweb.net/html/historia-html-inicios/) en las que todavía no se había desarrollado el lenguaje de estilos [CSS](https://www.manualweb.net/css/) y se tenían que utilizar elementos de estructura del propio lenguaje [HTML](http://www.manualweb.net/tutorial-html/) para poder dar estilos.


### El elemento b


En este sentido nace el [elemento b](https://www.w3api.com/HTML/b) (que viene del inglés _“bold”)_ el cual nos ayudaba a crear texto en negrita con [HTML](http://www.manualweb.net/tutorial-html/).


La codificación será realmente sencilla, ya que solo necesitaremos utilizar el [elemento b](https://www.w3api.com/HTML/b) con el contenido de texto. Este elemento contendrá internamente el texto que queramos visualizar en negrita.


El código que tendremos que incluir en nuestra página web seguirá la siguiente estructura semántica:


```html
<b>Texto en negrita</b>
```


De esta manera si queremos poner un párrafo con los nombres de las personas en negrita crearíamos el siguiente código [HTML](http://www.manualweb.net/tutorial-html/):


```html
El pase que dio <b>Joaquín</b> fue rematado a gol por el delantero <b>Borja Iglesias</b>
```


Se puede observar la codificación es muy sencilla para incluirla dentro de nuestras páginas web.


El uso del [elemento b](https://www.w3api.com/HTML/b) está muy extendido, y aunque se ha intentado marcar como obsoleto en algún momento del estándar, a día de hoy (marzo 2023) [sigue estando como elemento dentro del estándar](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element).


Y es que se refiere al [elemento b](https://www.w3api.com/HTML/b) como un elemento con el cual _queramos llamar la atención del lector sin transmitir importancia adicional que no implica una voz o estado de ánimo alternativo_.


Los navegadores o agentes de usuario representan al [elemento b](https://www.w3api.com/HTML/b) en un formato de negrita y de esta forma podemos utilizar esta compatibilidad para poder disponer de texto en negrita con [HTML](http://www.manualweb.net/tutorial-html/).


### El elemento strong


Algo parecido nos puede suceder con el [elemento strong](https://www.w3api.com/HTML/strong/) que en algunos momentos ha sido utilizado como alternativa al contenido de [CSS](https://www.manualweb.net/css/) para poder poner texto en negrita.


En este caso [el estándar HTML dice sobre el elemento strong](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element) que es un elemento de estructura que nos sirve para presentar _una gran importancia, seriedad o urgencia para el contenido_.


La sintaxis del [elemento strong](https://www.w3api.com/HTML/strong/) es:


```html
<strong>Texto en negrita</strong>
```


Que aplicado al mismo ejemplo que hemos visto antes quedaría de la siguiente forma:


```html
El pase que dio <strong>Joaquín</strong> fue rematado a gol por el delantero <strong>Borja Iglesias</strong>
```


Con esto hemos visto dos alternativas a poder poner texto en negrita con [HTML](http://www.manualweb.net/tutorial-html/) sin recurrir a las hojas de estilo [CSS](https://www.manualweb.net/css/).

