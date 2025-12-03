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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2M2XEF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCtlNkol8untzq%2FH3CTxXB6eQ154J2OziqKa%2F8Z9%2BmAmQIgY4W5P7SBfjKJKp526wxT3MWlQToJD15AYZkDm7i5wMMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL%2B8xDAFDPrmnA4ztSrcA24baXsSNdqOo9SwXqCE9FAKQIHQxUmmy83GS%2Bm2dNo43d4p6P%2FnlVVIyQOs4x0MLmOj1JiguczMRBgfugqp7bNYoLV6t8%2FBgtuFQ2SomP4bZsRxI%2BaGteuHsIr0ylnuf8PwJqfOHqR6My74EouffWShSHbvD0nwqGbYPS90OxwK9RH53AzVd6HNzM4CpqKqbmon%2FqctMCHDzkxhmh1JLDVgoR%2FiQZHY%2Bpnq2vimvkbLwMnop%2BnQBg%2B8xb95re49N7qjFicyCOzo7EfnRvSe2lsWuh8fi%2FHDsXQNvqai6Q31tNWyAjnOYA5upoAyZ1na9wsIQ7bO6DsG5Yq4Ku1JDQY7%2BWQw8FLc4OeyY6tS9QfIXT7wqGTbe7ogVq0ZRZ0%2BCrWG87OIoxhWlEmr7ZVhHVGZ1GDPUsEHQHs0%2FjxDtjEAiY1LGR%2Bx8xmIW2QFw%2F0twoOgAM1c6MffMpo%2FR6%2FS5%2B9JaUXsl0EnnIc38FuFUsTduKbz3AVwFJIDM4R3FIGzknBHhQ%2BmQn9twKKoZGv6qEuLY91HmysMJ30BFXhDpTkI%2BJFucCjV0HYKL7wk7GfR3847PhFMS5VsHfxha0WSmPc%2FfNyOKh9LHf8w3c3FSwcAv8BgQulNlx2JCg6gMJiav8kGOqUBaIEAGaumpOi1NmZXDSw22pHiNoAiORZSVKj9QfTWCZW7RFJrijiuUE%2BxdA5ZNh4WQSHE6GhSlaIwFqKmehWh%2BIsrfeW9Do7fD501qVTFACSpscnDIRp07zWRSuxdHwJ4dZReSjF9gltbQvYruoPxySCA%2FQIkJtStwUGlJdSORORxNUoEPFPTMp%2BSq43J6oFv9SRgR0xeVsTMKGfF2%2F1u6kAjKH4Z&X-Amz-Signature=477d43fe8101b006aaa4008021b55097757028dc8a92e44e27dc5b42cd4387c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEYNCFD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDM5jXY85Q7ihZphxO1TXVYiPSODukctpravKcAjAMqogIgAdvi8%2BMc%2BRi3vUZND0W%2BY99TZ89YyDgjHqJXEKJEsRAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDF9ABlY2QZIwQiAUtyrcA1WzpsIcposfcWgz6vRctbsqA%2F9wXASEmVbcfLedAVBoLC6nMBkQShPsWnHFBL%2FzmyEsWNdfUoqyH35aBvKVm0c7sT7sOaKOmyikiQ2rm55IGNWAw0UAOVdYQgt9%2FBDEgBbglTHtGSvo%2FwxXJSp7DX0B3RcC12ov6wovDuDVUpJBByW1tEPSlK%2BTT%2F00llzaSQPoW%2Fuulp1AOhrGmY0o2Q4u5hlpiKn2KDIAA0O%2BD7wj9dfoBmSj1gi7X2FT2%2BjlxrWqk2szs4srKug27LkZLNv%2FJ6l41Z2OEs83a28VMD5Ip5FnBY3vLLC7Xh2fmqYx2E6VlS9uCXfvnbDg5ObqAwcHpO6S6KPfhR7WN%2FH0zrE8OVj42eCTgsJeWyy4djI9%2BGI4W1djFV44N8fdix%2FLv0BRyRERMZ7lMUU9hsfxaAWHdmMnDFp3mXb8bhaURFVcbcuwMx3WtBGLd93ESxkkJRbAhRmL4RWBGlLNiwJtBVL2FleVb456aCQzPIxpW54tGoxqE2vsNNI7GdWsNEDH2bjaKgZSUcKxXrWzSFCY8xl6CYvbMz9RIL6r6Fh5pJ7ubcJ2Hl5Jz3kjHb9LtewF84zPtWsANbGY72Wp%2Fnrq2zOqfxxK7TI2QrGi1KCIMJubv8kGOqUB0Z9JcdQO0LDHWzUAJ%2FHY%2FcHbuCKgtrtZeqtewzRx8QSBT6Cr775wyK0JtSWxZxggz%2BCchSPREOZM%2BEOzwShx6R7Q6MX%2Ff22Hp4eRem3LrBuj0w3XYw5xyVnfSzaTUMaD3QeVPmoVI6wcJxLsw0NYsYuhaRGjHN1kaGUrE%2FJyjBU6sUJkN9oHJAtYTPkhlc6UItEkg3bZIei1JqFles4DzM2DOuSH&X-Amz-Signature=90203a2e0c004e49f53fa0be7f781df49f34835625786b31683d24e5db769cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

