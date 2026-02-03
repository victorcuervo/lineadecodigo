---
title: "Abrir enlace sobre varios frames"
description: "Ejemplo de página HTML en la que podemos abrir enlace sobre varios frames de tal manera que se cargue la nueva página eliminando todos los frames."
date: 2006-11-04
updatedDate: 2026-01-06
tags: ["a","target","frame"]
slug: html/frames/abrir-enlace-sobre-varios-frames
author: victor_cuervo
type: doc
topic: html
id: a0b521be-6fa5-4a7c-8249-6b29110671e1
download: https://github.com/victorcuervo/lineadecodigo/tree/master/lineadecodigo_html/enlaces/abrir-enlace-sobre-varios-frames
---

Podríamos empezar una discusión sobre si el hecho de [desarrollar páginas con frames](http://lineadecodigo.com/tag/html-frames/) es el más correcto o no. Lo que es cierto es que fueron una alternativa que facilitó la creación de páginas compuestas antes de que se contase con [IFRAME](http://w3api.com/wiki/HTML:IFRAME), con soluciones de includes en servidores,… etc. Y en esa situación se nos presenta la necesidad de abrir enlace sobre varios frames. La idea es que tenemos una página que está compuesta por varios frames y al pulsar sobre uno de los enlaces que esté dentro de un frame queremos que desaparezcan todos los frames y aparezca en la pantalla entera cagado en enlace que hemos pulsado. A día de hoy siguen existiendo diseños que están basados en frames. Uno de los temas a resolver en este tipo de diseños es el frame sobre el que se quiere abrir un enlace. Para resolver esto, dentro de la especificación [HTML](http://www.manualweb.net/html/) contamos con el atributo [target](http://w3api.com/wiki/HTML:Target) del [elemento anchor A](http://w3api.com/wiki/HTML:A). Los valores que puede recibir este atributo son varios: _**_blank**_, _**_self**_, _**nombre frame**_,… y _**_top**_. En el caso que queramos abrir un enlace sobre todo el sistema de frames, es decir, sobre la página padre, deberemos de usar el valor _**_top**_. Quedándonos el enlace de la siguiente forma:


```text
<a href="http://www.google.com" target="_top">Abrir sobre los frames</a>
```


En este caso será la página de [Google](http://www.google.com/) la que tome el control de nuestro marco de trabajo y de esta forma habríamos conseguido abrir enlace sobre varios frames y que desapareciesen todos ellos.

