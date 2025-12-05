---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZ773F6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHD%2F19fSNBs6vXWKYFc%2BBVVD2%2F6BjM%2FelMEcbnksuq2AiEAn4w9ZPRIEhE8jzjfCSzOGqT%2Bylj3gp%2FEDz4FuCRC8tIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIsgy%2B28kWMJZa1AbircA9oLdlm%2BVwjO7%2FxDYjtseVnp5MxjefLbIniFuCZ7mBwz7LDOQ560YG05yCNRx69isJeNWKMNSlPtX6cFjbqpN2r5DWy8ePdxGjPS8XMbgYFC7ETdLm7Wis%2B2K0FxlbJm3GMFuQT4ZVmL6BtAUrlxMfL6rYC1h9qBZU0fLRii%2FplgeBNuwsEDCfvkatOxoUh9e2l4SrX9juc2rQn18Vq%2FEjh0mFybDtPkwmDLWfqyiBUEoz7LQuzwiJV6K226xgAosnkfw2i4QiR6WJ%2Brq2AlzXTa2FlDGYxmN1X4EiukMubAqlOt39sJ4hBVAhV3xSAWqVFxghUvfCtGTRLKSfs2diQwSX0xq1XaFzInFpgiTi%2BrOZcj3oWqNdJOTPLkRv1TrB3PAzYkrrVEyP0J%2BZr97Io6mzzORzkk%2BFJgc0IoJZ5EWvX%2FwPHUQkUyhpf0HaEGrDENao100GrE3WfyZFPiTAV52yeqZgq35TmIlGi6oghHVj2KuuNo1epWLinXx6FMXvh1FGwI38FBruOl%2Flte%2F0yG%2BpmntxH0Hdl6XriQoN%2Bowt7SX7UJLl%2Fs98htDlrDhLmb8jaNBCi%2BbzgOJ0oAL0tIUrOa7zbOw7HoLYzfrIhjXCuCEOfJufNwkyIOMOmpyckGOqUBs%2B8D%2BSr9BQy2v%2F3DMBxG8rW97jsgNjRU%2BDu18bLNyGx7hFl5%2B%2Ber%2BbTMEd2CtpdFc2%2BJatr1fCAV%2BKvxo5julQ26V7rniP0HxbsCWvkL0tBG3YKvZXCDszVefbda2ToSP0MwynQB3Z3y7jg%2FO%2F6QrOFGhgwkk3FALhdZ4KhzyeUqTtjhT9D9mRe%2FXm6OLsBCs4rFCc3TianXKvhARNlYzddzBtdP&X-Amz-Signature=b3549b2ca63e6fc78bcdab4079ae832787a2ff0c30dba0051380f17d2177c876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW53OR7D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQy01JuCk0QPceRdqW2lqiunsB5mkt7NQSD%2FKJsrZVwAiAns6jWAFiAotlgUkeYmUKY3pcQuJlG72Fz26mXIiodISr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMM8ST32Qmh1x9KsmiKtwDdNfkeiDzEWimugiW1bUQqtceVBtsirlcXaemM0OKdlg0jd3HsvoPyG7eEX29LZGbLs025x3AlJOQkJPWiyzXdhr5xaRgPGXwCGogpU2nyrPgQr2QJvMs9RRqum1iIYD2oF8KSX7qM1Cl7bGRjmSbT8UO3J%2FyhBIpKw125JlJpI%2FDhl%2FYZu7XDREmGYSgzSL2%2BNImBFI4wn8%2Fy%2BxDBqwH5%2F9kQhXj8%2FqIavIKRxUtCcJbOsg2k42u4x1ckqiRCkJiX00WtyXj%2BlGAv%2FzWDXWb5M%2BqX0wItBHaH4stUcHf1itEnvCwKhRvDrZbXttFGW8wTGm4ICDAiMABcIGrMuEOWY7k90IVUEKfRqEqk5OQAyM2xtStTQSrZ3BXF%2FUXgiEFKlRf2LmjwqWGbbhT2E0MdOMU8oSqk0g%2FzJJ%2F0HMAqU9xrrW2b0nncsVZ1yDP03pwSpXobEPfNGQX3%2FsUqBGJ5aCOBICP6kwooUor3QW%2FZakePmpGHrP4vBqLj9FloB%2FVztjohcFjWzJUqgGS4k59%2FKXYkIKo4SLO96EnPDhdTM2tvYNvfIU8yVH3Gis9wPoblgT4ApM%2B8HXJzZ4Ui7U4RreB2VC%2FclqEhdh4uE8t8%2BWVDomiI0PtoJnCUhYw47DJyQY6pgHX7W9OWmfU0Ly82Tn6%2FrjY2Yw1hIl54ShgGn8lPCORCPcwK9JO8B9Mr6KtyJ%2FoWbz5E838tSyXarLA8on93zx4cuo9rKzfVYRnIkAH0b6HEccpDAQvzaXSThnIJQQ4RTm7Liwn9CgSCX4ee8l00LVDlKEgqy771xyLgkEvScTFy2lIvZ4C6jnCmxLNVisU6nYXrjHwGtbvX1uFfjy4GdVJ0PBI%2FgFW&X-Amz-Signature=bd2505664b7533e688670e1ee2a1be53570ff1a0523ca942247963135075069c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

