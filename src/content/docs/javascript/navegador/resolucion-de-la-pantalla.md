---
title: "Resolución de la pantalla"
description: "Ejemplo de cómo obtener la resolución de la pantalla mediante código Javascript."
date: 2007-06-02
updatedDate: 2026-01-13
tags: ["screen","width","height","availablewidth","availableheight"]
slug: javascript/navegador/resolucion-de-la-pantalla
author: victor_cuervo
type: doc
id: af976270-961d-492d-91d5-32e7d2d6b4e6
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/resolucion-de-pantalla.html
---

Los diseños que hagamos de páginas web siempre van a quedar supeditados a la resolución de pantalla que tenga el usuario final. Si nuestro entorno de desarrollo es acotado (por ejemplo, dentro de una empresa que controle la resolución de sus ordenadores) nos será más sencillo el diseñar nuestras páginas web, si por el contrario desarrollamos páginas para la web, deberemos buscar que nuestra página se adapte a todas las resoluciones y que aproveche el máximo de ellas.


Esto normalmente se consigue mediante las [hojas de estilo](http://www.manualweb.net/css/) y los diseños relativos. Me explico, dependiendo de la resolución que tenga el usuario se le aplica una [hojas de estilo](http://www.manualweb.net/css/) u otra.


Es por ello que necesitaremos saber la resolución de la pantalla del usuario. Esto lo podemos conseguir mediante [JavaScript](https://www.manualweb.net/javascript/) y en concreto con el objeto screen. Este es un objeto que empezaron a definir los primeros navegadores de forma independiente y que ahora forma parte del conocido como HTML DOM.


## Propiedades del objeto screen


Las propiedades que más nos interesan de este objeto serían:

- **width**, valor del ancho de la pantalla.
- **height**, valor del alto de la pantalla.
- **availableWidth**, contiene el valor del ancho de la pantalla, sin incluir la barra de tareas de Windows.
- **availableHeight**, contiene el valor del alto de la pantalla, sin incluir la barra de tareas de Windows.

## Acceder a las propiedades


Para acceder a ellos, simplemente deberemos de poner:


```javascript
screen.width
screen.height
screen.availableWidth
screen.availableHeight
```


## Ejemplo de uso


Por ejemplo, para mostrar el alto/ancho de la ventana por pantalla, deberíamos de utilizar el siguiente código:


```javascript
document.write("Resolución de la pantalla: " + screen.width + "x" + screen.height);
document.write("Resolución disponible: " + screen.availableWidth + "x" + screen.availableHeight);
```

