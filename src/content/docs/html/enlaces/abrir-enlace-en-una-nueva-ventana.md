---
title: "Abrir enlace en una nueva ventana"
description: "Cómo configurar un elemento a o anchor para poder abrir enlace en una nueva ventana utilizando el valor _blank es su atributo target."
lastUpdated: 2025-12-18
slug: html/abrir-enlace-en-una-nueva-ventana
author: victor_cuervo
---

Lo primero que tenemos que saber si pensamos en abrir enlace en una nueva ventana es que es una opción configurable por los navegadores en su comportamiento por defecto y que lo más normal es que los enlaces de una página [HTML](https://www.manualweb.net/html/) se habrán en la misma página que los contiene. Pero puede darse el caso que esto no sea lo que más nos interese y queramos cambiar su comportamiento.


Si lo que queremos es abrir el enlace en una nueva ventana simplemente tenemos que trabajar con los atributos del elemento[ ](https://www.w3api.com/HTML/a/)[`a`](https://www.w3api.com/HTML/a/)[ o anchor](https://www.w3api.com/HTML/a/) de [HTML](https://www.manualweb.net/html/). En concreto con los valores que le asignemos al atributo [`target`](https://www.w3api.com/HTML/a/target/).


Es decir, nuestro código para crear un enlace quedará de la siguiente manera, utilizando la siguiente estructura:


```html
<a href="enlace" target="valor">Contenido Enlazable</a>
```


Tenemos que conocer que los valores que se le pueden dar al atributo [`target`](https://www.w3api.com/HTML/a/target/) son varios. Entre ellos podemos encontrar los siguientes:

- **_blank**, el enlace se abre en una nueva página.
- **_parent**, el enlace se abre sobre la página padre.
- **_self**, el enlace se abre en la misma página.
- **_top**, el enlace se abre sobre la ventana superior. En este caso es si estamos en un frame o iframe. Se abriría sobre la página que lo contiene.

Por lo que si queremos abrir enlace en una nueva ventana deberemos de asignarle el valor de `_blank` a dicho a tributo, para que cuando pinchemos sobre el enlace, el enlace se abra en una nueva ventana.


Es por ello que nuestro código para crear el enlace quedará la siguiente [línea de código](https://lineadecodigo.com/):


```html
<a target="_blank" href="http://www.lineadecodigo.com"
  >Abrir Linea de Codigo en una nueva ventana</a
>
```


De esta forma tan sencilla podemos conseguir el cometido que estábamos buscando dentro del diseño de nuestra página web. ¿Se te ocurre qué tendríamos que hacer para que el enlace se abriese en una pestaña del navegador? ¿Podríamos utilizar alguno de los valores del atributo [`target`](https://www.w3api.com/HTML/a/target/)? 

