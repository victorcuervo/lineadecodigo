---
title: Enlace a una parte concreta de la pagina
description: "Crear un Enlace a una parte concreta de la página mediante identificadores que generen un ancla y enlaces que accedan a dicho ancla."
lastUpdated: 2023-05-29
author: victor_cuervo
---

En varios artículos de [Linea de Código](https://lineadecodigo.com/) hemos visto la [importancia de los enlaces](https://lineadecodigo.com/tag/html-enlaces/) dentro de la **World Wide Web** y en particular dentro de la creación de páginas web [HTML](https://www.manualweb.net/html/). Lo más normal suele ser el enlazar una página con otra. De esta forma, una vez que pulsemos en el enlace, nos posicionaremos en el principio de la página enlazada. Pero puede ser que lo que nos interese sea llevar al usuario a una parte en concreto del nuevo documento. Por lo que vamos a ver cómo podemos crear un enlace a una parte concreta de la página.


[HTML](https://www.manualweb.net/html/) nos proporciona un mecanismo mediante el cual podemos enlazarnos a una parte en concreto de la página.


Para ello lo primero que tenemos que hacer es definir un ancla (queda más bonito en ingles... anchor). Este será un punto de una página al cual querremos crear, posteriormente, un enlace.


En las primeras versiones de [HTML](https://www.manualweb.net/html/) para crear un ancla utilizábamos el elemento [`a`](https://w3api.com/HTML/a/) de [HTML](https://www.manualweb.net/html/) y en especial su atributo `name`.


```html
<a name="tema1"></a>Tema 1
```


En nuestro ejemplo hemos definido un ancla al que le hemos llamado "tema1". Ya que la parte en la que está posicionado dentro del documento sería la relativa al "Tema 1".


Si bien [el estándar HTML](https://html.spec.whatwg.org/) ya no contempla el atributo name dentro del elemento [`a`](https://w3api.com/HTML/a/). Y para poder crear el ancla vamos a recurrir al atributo [`id`](https://www.w3api.com/HTML/id/) sobre los elementos. Por ejemplo podemos hacerlo sobre un elemento de cabecera [`h2`](https://www.w3api.com/HTML/h2/) de la siguiente forma.


```html
<h2 id="tema1">Tema 1</h2>
```


> Recuerda que el nombre identificador que le pongamos al ancla es muy importante, ya que será el mismo que tendremos que utilizar a la hora de realizar el enlace.


Una vez definido el ancla, lo siguiente será el realizar en enlace a dicho ancla. El elemento que necesitaremos en este caso es el mismo que para realizar el ancla, es decir, [`a`](https://w3api.com/HTML/a/). Si bien, ahora utilizaremos el atributo [`href`](https://w3api.com/HTML/a/href/). Atributo que se utiliza para indicar la URL del enlace.


Para crear un enlace al ancla, el valor del atributo href será el nombre de la página web que contenga el ancla, seguido de una almohadilla (#) y del nombre que le dimos al ancla.


De esta manera el enlace al "Tema 1" será de la siguiente forma:


```text
<a href="#tema1">Enlace al Tema 1</a>
```


En este caso, antes de la almohadilla no hemos puesto ningún nombre de página. Ya que hemos asumido que el enlace y el ancla se encuentran dentro de la misma página. Si, por ejemplo, el ancla estuviese dentro de la página "historia.html", nuestro enlace a la parte concreta de la página quedaría de la siguiente forma:


```text
<a href="historia.html#tema1">Enlace al Tema 1</a>
```


Con esto ya habremos conseguido crear un enlace a una parte concreta de la página con [HTML](https://www.manualweb.net/html/).

