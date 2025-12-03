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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJHNBA6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCpNfH6OWhrLNJNYUX9BfqP65fQFEHufz7v8QUD7rp7sgIgG1iRtisKByoC2Gvi%2BSPAPv23VjHnzRFUxOq3Fm3Cp9Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMnESIp9uzustERkRyrcA%2FfPSPwvHtwAuzLKnFibZxWcDIFkGDB5D6jw%2FIkgntNG%2BqDk5ga6cpKyrgqiGPGDWqc8CMYyk3LMITakaVtlVyQ6oY3Q7qjc4ZaIcz2TxbIcDYTNgbd5PLty3XAo4jZNNx%2F2K3ZQm8HFCWImyWG6L%2Fec0bFfB%2Fobz6sbIWLjj3c4tf3MIqJ1xSRHlqV%2FHIDKUiwwf%2FzZNs88XP3MvkK5WpvOZ123V8a07eIoW4W2pXv8zWbiw9VgQmlcUY8z8DT37gp1HEpkRZrlZWgreNED0msOxI0cIh4Yx58rPzLm%2BxAgACOBI8cQXit48U2nm6fySC6ouopRz98hdn2%2FKc8VQJjhi2X56QhGi5e0pWAaMFwf8E%2BIGqy82s4wpf6F8pAfe16ONQTCPPH36M1%2BfqCkKxyJMnd0cXtweoZG3AWIOuSo6KVPIQf87NxUCOr0fBw4h5Rcu%2Bt6%2F4s6ApkA9mcUAyQqcNOPmIGCiWO1GcPYraTGdtGDTXlgNpni2%2BhTvZS9hVFA52WwQAH%2Ff7zYF0U9hSPtvWu6B8b1mRoKd9k3JuRAO5Wvcipy%2BtBWqS%2FVdnlQYHe9%2F2H6z%2FghsHMz6soBLFNXpY3KOeeVce2Int%2FtxjIcErvRkzsXmbgoc1jUMMXawckGOqUBnEahY%2BGNPo%2FiJmYrTEGWfd3nX7z4HYO12JG5W9k79nKs%2FlInOK4WPPtiG9U524vSe5BqeGr4EezbaCIuTEimvJjDaQEn8EtsNaGIYzXTYvscnYFrKUgYPVRGkcS5Y9sjxeLst0kibEwKgw8b7pRqXpt07w%2BAAl43T7bH6HdwP1jXDsXw9gkxwMCwkfID3LbGGJvpriYBf3v1gKmDJa25p%2FPEtQ5C&X-Amz-Signature=11e33b2dbd75130cd1ddf2fb2bf0210edaa9661f3f7acc325d2057a9d6aa6567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMIBPR3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD0kG9gb1H%2FNAiiMpOXR13ucp%2BqLrD3RUMgQtBktqR5ewIgczp0GU6RcJKKyApt3yrPzGy7GuD%2FpuxBrs9hz6%2BF4Bgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIi%2Fl8nwz%2Ft2sHP4VSrcA3fH%2FzFkbNxg6MUXXuENEQq%2BmlKstsv8VZFdQH2QxJzjWv1%2FA6OdIltvmwEsJXf8HjavqM7asND4XN%2F%2B%2Bj9CUY1bMt2d6RNWHXJhm4jXcnKC7x%2BSzCVagUgpNzzvYj3XAFEO%2FDGVWNYxZQCV3k4UDIw%2Bd9jb1%2BxaWKa4KVGFcog0A1phDIFjo9Bs1VlXSboWQmqzNW823xl7o4wKaLv0KgRGE%2F31%2BCcAKAvodK9MnVpSzbWU6WtsikmWOk9YdHLLwtJr9tdmlcx4sD1%2BpksnzVKIXByamKiCTsOuJFFa7nYF3tp4MK3tbNcqHw5MTrw4zw6ClCR%2FCCLVS865X%2B4vprMFeNqfhwWIru3Yp4hb2%2FvQgsuqpFXaaCH%2Fj0qpGnbixIUDRT6G86PNNbGDsI8d5m7nxKOXeE468rjFnRglzPaDVhuJA5vhafcrWozMyHFitHErohR%2FX8dtSteLTmEb7W0O41Z15tPDcDdQwryAlJiHAsZLWQLTVeyG4kfF77YjlTWjRuydKcMzmRKo0iw9oHkhWR%2BgIWBnfRpVSK8ENozECNgh4wDNT5uFDLnOZLFvoplCPsfG4VGLvOcubc%2F8RPcMqbNbLBLrTABK0Cff%2FQkA8iu3Adogek9KY%2BiSMJzbwckGOqUB73KJL7aFfx9UVgHf6bzyI4PxR2gAB2yS8ZjPD9nkxF58M2rTDI7v1IPE8AXa8pUThz5uY38gOeuoZBIjdLm6tlhgVFpzQ%2BnFl%2BxJUYRrddkIjgdrzYq%2FVnwqdDxH%2Bzk4pchJe58YEQJa2ebg6wqUNdRAC2Agkt4KZ%2BG0wuJzXe4cEEzySoTO%2FB45WcwBDG%2BZZPcT%2BowerqZWqV1X281%2BQ7Y%2BQF%2Bj&X-Amz-Signature=45a051bcdb3ec3269560055b9a28b7f32171144370d5532cbf3b65eb9c43ddf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

