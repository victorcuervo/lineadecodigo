---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7IY66XM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDI261VexEahCIEdbmKNfWa9UkjdGeAyTQsgc9ymwpwcwIhALe49NjfhGISlXQPCxVxs%2FgjWxZLUmFLu1q7lEg590ajKv8DCC8QABoMNjM3NDIzMTgzODA1Igx1AAJdIQW8rv9dTmcq3AOZDNFxBZZo5bh%2Fi19At6%2BuW%2B6PwNSitOhoVZVD%2F2y4DzFZVgTuy5EC%2BTmuNlrOET%2Fi4A9JnCn7iZ2LV%2FfONr5VHVGlyVWjEpn33ARMEUUdHc3VrqU9xvholTeaqNNURlZS0bHZiPQUlZQKhJXF%2BH1ozIAJHLJ%2B1vOrezisOHPbY5GcGbKtv5Xq5%2FH7rnXWlD0csnG4ANYeXbhPoBiWX4XwxPnIskQgPnNwMeCYKDE9jk3qUdQ%2BrMeBvuJjJsFUpCvMEx3wfjiyzsiXNHcfViR8bSFLgwUrRXqJxsZsno0nqDAsYHamFvvTcU22mEpizKVUQJNcxyxGvSF2TffzpGQZr4yw3pSqNyhKA7NMytIQaVYZxdpgM3SJou1o9C2KScUurouoT4tRMALTZHUiqFyzSeWG0i%2BFl60aNzH4SjV%2BJwKPj7vXlX9MwsYVvl%2BDYmkGPO5Ihr%2BLFq2KbpznsXW3BQTPHiUHl%2FMA2TeqJBSKIBaje2OSc2su2STm362B6gmb8s1BFTOE1biqdrm6LL7%2FzmiwStX3k3DVafw1ZrizTjRZw0fieqMxtENUI3D53q3PPDs1sUBRulyKoEWUzDR8%2BrJOxwhdB2oHN%2FfZYuP9ZBa%2Bm1Z7rLyJ3t%2FTiTCXh8HJBjqkAXq9n1vN1HCiEIYLLqzlw8Jafh0JSTxHMUSHsrkyBoaHw9us0VwoB2OYfjxYe3T4NfwrHSMlUxJ28AJlufK2YmFsD5Ce9nZ%2BBJwPu6NfrWx%2BH5vnL1v3%2FveffoIvernPiBS58vnlxF11fidBuiklnr2PMPMY%2Bq7IOKjU2HAT0Z6j3VOWuyIYWeQRaQ%2FADC4ZkLB%2Fw5565uUy%2F8SKYAI01k1k0Ew%2F&X-Amz-Signature=49b2236cf04509f37dd5d1dffd78fb2ac31f25b63c1393f50c38756f15739616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBZEJGR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIB%2FQoEkY0t7MuTxsxZ%2FjCf0APc4yegjZb%2FZp6f2LL%2BDZAiEAvWyOZcNA09vDBVXzSZC3zV4heO1Y1Uz%2F6ARew0p4K9sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDvbds4w5Re4H1DfLSrcA199LHIjxrMll%2BQAmfYEr5LZVqslBynURDK1%2BadJ7c0UdpYg5UuH9Pc%2BBEPfDyKRC%2BR63kFmui58l%2FBtNObavYgNU63tV1sJBWGiXiKCjkkX6kl77UvOcPEDOF%2F3HE2UOqS%2Fma%2BAe5gESsNr83gPOy1y%2FtjZ93FMI%2FnmmI3RQxDYqHPycQEujxQxrPttNl0%2F93SJsXmIU8iVHuhEtqbNsyE1aRVHaxxOv2YdVXfLSF1H%2Fz3emKPBOiA%2BHvZNSRUit36gz9i4opEwCwwVWp8%2BBt8%2BgbfBaDslQmkvCTtB3%2FjIdlcA%2FLx%2Fdx5oX%2F1LI5%2BTI672R7VlAfYpoVkKMmLB%2FSX23cWzd7dsp8z0JpNE7TjRCekKKufTtwQyBoldLoVHEDjFCZRxqelsXddvbHoS8V1cK67JOu28cBVOXHfssXEU5FcXEezEiHM2Wi4dYGo7F6uM5nEirx9%2BJ0vz%2FHHIMPH0CnPNC7tFD8h3L1A4ng0heLeZ7Hb7WXaCDaZ%2FB1GCqkP%2BdXBzx9cCEBAIvaUghmxe0DpX3pdU3cwEDPs7I8U5VJwPLkdJRhR5mz%2BRScv%2Fhlh0NX4HhJVcrzfKKPTRzjuf2a3uVdwHWkdjCKH1xa4e6H9sUKAQvMMsYU%2FTMI6IwckGOqUBTrrOVSH2K97g0RRFWIReqbE%2Fd%2FaiXazIO%2FAvekkuW0JVRKDw7GFPpA7W%2BJfaAy8AtpxNcI7veI9KxnlSB8J92bkIeC0QS%2BxxGW55Jnw7zFBEjltBTbKPt7RNjJfzt0HHKZ9y72M9GuvWWBeQxbfiHZwGF39%2Fzkh902vom0cNs7zejW8onw%2FwcFd6ayw7qjB4Ez6H0VTwl5pJmdjMLJ3VBBJIj7b1&X-Amz-Signature=ebb0f796ff014914bbaa5902ad197d1ebc62db386f534f7dbc5577fe595e558d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

