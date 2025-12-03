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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWQ5PJJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHFxShAAnvLNHK%2FpI5ZzYia0wjNAbSr3nfNXUwYlIpznAiEA2IIYBIE3vXtYGwGio8hm4XiS7VisQ30cKon6YYX%2BJeMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEwZ12v3P4XPNTQ4uircA5T30NyF1y9SJphpTZfqW%2FakALEjdh%2BUYKY%2Br8KWik9khTzJHVXruyW1dEeH1YHEbGsnBF4zHjQHUcvusRfxFkamoyDkSQ%2BSVC0Pz7GlLPvWStDYBQhDs%2BcoDc0Tkcoz4OwTU%2Bl%2FWEfEO67GMMDshme4AxoSq5zWdwq0%2FVyhiTvgqjvZpRo98lZ1mIBmnYb0Wr0ZHlyzv9Y4Qw5ILJ%2FJHJNwSswbQNGO0TAfDZ01rGA%2FC0v6VSd8S9glznstVjY3DNJUaadAGQFbyPxs2jtxQIl2ZC%2BtNUDxJ3yh5RxtkJ3GgljhrP5q1ay1mtEyzOcK8A1vuoUPH0SW2ODQxdiaW7Ij%2B8ygpSHYFUXEeOUw2VSe5qOto2eUJo2OF4PWyWtDBscr6hJmsjSkz4vsjJTuldcRbmW247RGtMQB11ViW9qNCBMX%2B3nFQCiE4DNGfPj9eaUt3GnHLFuoz7iBMI368UgZjLRQgFAd%2B%2BWo2Kgp2guHt4wktu1rK15c4868FTOh9kIJuhoIuw6ZUPC9Sdzk4%2BW8aVhfBUhnzl1nle4uqNL%2BmT1B8X652Hyl39eXYwRCytrSrqxqDg7muoLBu8o9l%2FrD8dC73EdeZxYpFix9K0mPAyZw%2BJVwDSIx9JNQMNmUvskGOqUBNzSjdMpkGERjw35ePHgUjkessuL4C3aiBfVSXUJX%2Bv1gECdaEsZdN3%2FvDzPtNLcIMwc2FKE8lkVvr%2FzGCAZkTCNfWB8ae7xSsP34VNt8gzYUeFpp3jUmIMwJt%2FgHCFAoj%2B2VUYc2%2B4qbdKEDnOC9hR4%2BkTO6Ny2WAhGOHkhm6vwfqmaC5tX5X7oudof6qPjt%2F4%2FcJm55Z%2BV%2BRY%2BASF4fgLHZ3loE&X-Amz-Signature=bdfea37f9357ab9591521ec2ae400ba7fdf340eee3c2a678484f38fd4ff4e680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667LRMM2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDk4GpLIC7bqcRL2d%2FjZynvTLG3r0Mvx8T1qvFj3ciaVAIgO32XmdhlRmGMzgwJYeKpG2foLPblBW0yaJqM%2FIsOIKUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJMUJ4TQK1DlbWyWByrcAz02VI7jCDHUKkkg2ihOEXeguBTnzwYhYKsoEBGUtCENJrreahyfhQ6mCGn2bSGnfSzyPF%2BktxnKPwJP1uI9jOKt9nvuBFP3jIP5t7hSstxYn4qs%2BjRIi2izBhubLkZJLxA%2BMKp8gwQfyiHueqzcIVsovA7SkOyN0PsmZX7VkVSugUifU4ftEfrxVDi9EJAu4TyE6fiwkseW2ZqOeSo0L1aCUyhzW9unf8jjD7l5WVd%2Bt2y5%2FYIRbJxRYGZFT%2FfQ%2Bym7YyKOEbkPXQ2lCouxfh5rA2oEiFlS7Yin6HuFVLyC2RNGWeU5DnK9NzUYoVfCNhinhxC9yPSnqNfDBQyXFU2Hv9VRjPkf4l%2BPLop2Kyw7A%2BO1moFea%2FFMBTJNp59nBVfLyLRov2OyEnw9U3j5RqQ2d7p2fGBKtCHzVlRCG%2FTfL5Ajndk56HXfcV2HTzbt2hTaMNhqRooPVXUsA0urxIbVARBCtiOUzTjiqDiRz7JU0sDM6QACFoEZ1H0F9ijMXcE9pdhP78WHONJT3oqPo%2F%2FvMUTXy7GIXHoEoccbpY6EnyDuJPkpvF39watcfP6MQWRzyOT%2FTPi%2BXZIDcGSYsRwca%2BcjTWDntK7nm5fY5jATyqUv2KPInVo5qWZaMIKWvskGOqUBwHU7vzB9%2BoAukr83bQraz88rmRpHsDQ4hDq8vI5ACb2%2FXQNIiKqqvSdDja7WeCrX2dd0MjH8jJTyC86%2Bsf02PXd8oqTjPihkUcFmXmCpU7Dy4hU%2Fn9waoTGlM%2BeeBeuJb9NVS7GmZAtxEa0zCyzNrF8vjFWmXs2%2B%2FcgXSG4JhHzNvZw37Vdg8gAv166C44PFo%2BSAcntfqgceDh7nFxwQ3BayIDlG&X-Amz-Signature=e447aac2d38833d863adde1946179d298ff36e601dd47321b5f07aa34b12b92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

