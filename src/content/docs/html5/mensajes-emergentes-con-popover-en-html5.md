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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MLH32P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcroW0PbMG6E30ZLFOBJJ73f20b2SSSzV25zqs8ZMEyQIhAPFj2EX86rFyMyznyTaAcJLEUoWDVeSCBra6AxpHNGfkKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVEbdayzySJeCg3MMq3AMeabe5VSrou2IF6dsgur26ZFps9NCfZFmlJAJw%2Fpm%2FsR2rRcx25%2FcBDAWpy0EdxdaZqyytS7p58rwX7TqZCN2BQyOSINy2L1l%2ByQWnqbIYCW6OWNNVzVmTj%2FiUySVGYPmH%2FYUitlWtBIZJi7gCLeTz%2Fey5MJbyO8F9dqra1wbwF2XvARDkL8Cy18STKEdf6NuJWRymqGSSR7syPnWIZeL2vNmryvVBfpaGCCn0EdC42AR9RJM%2FVNjMbia%2FzIT8LAd7CBhZDBHryHf%2BiYUBIrWWvPy3dCxm9oQjblK2g3jn1lWawofauq8vWnLh5shnt0AQBMNtej9XSRTODEnOcXUlhTWGlC1tCONXYDvjRV14doTese87%2BRJC%2F7S62K81VpWuzHb7Symau9%2FNSIt7Jy1GeG%2FuBqtxrBR8qLvZXesUQ63%2BPeZ4%2FVHejwSq1laDO9rb5VyCJBS4HmACRZ2HeymCoP%2Fdpg1eDP2hsHdfEc1dSFR3BAu%2FPYfQz1IZo4r8C6MXDhshKy2NLoWUaaytc2fmnOtf7gpULZqQBND5jqd0d1T%2BzmwxqqJGCDOiO1714W%2BAibZ9uzyVEOOfAGS2iZsghCVxZZwmi3j0h2Hh3zp3wuXAAdhGUfSwFkH5OzC7ttbJBjqkAc83chl7e0S6eGJ35E07GFBOYEnaSwIXHnvfiKrJsRV82mVyboyjU8f0ky%2FKFqXc2svSwV3vWWLY%2B18HvEA0TobLkiBPLpi%2BIIV8XiMyfoorpxrpNKG18EJnv1LsSgbodoVXg3LqkhMNF70%2FxB8V%2FGuR%2FUYDVaiy9i0iM0D5wGEcJwv8ejrBFL%2FgAAp5c%2BKPhVO6bnRKwcNKXudORyVsJ3S08T%2Br&X-Amz-Signature=3d15c0427575db026021d2aa9d1a90779d517ae74b81f2d0a7f16f6acc931e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNNS324M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqalsfzRgCcN1IDqkelsBn24rJRqDFe%2BVyTQbbDZDWPAiEArbNhiy2ZkI9yn5fGIBqkDPDhssg0YFSXUQp9GKtBG2AqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYhU9yjI6wp626JsSrcA%2B6%2Bi8b1HAUMi8wRe5SUAMf994w3E%2BijLCqXoVJ%2FhWKtgPcjoXk2UkVY%2B%2FqfBYslOSu0n6bpxxslfP9Z7%2Ffk2HCLcqwClqo9%2BW%2F8CMNyJNmCxYG%2FZzjTlxcC7%2BoMMCebl35xLSvzEcoR3zoOb%2Fi7uJ2Fj%2BsisjULVdZjYTFwEbxC53RHwz1n812wm8T%2FBXOns9QSYl%2B9RWgZs8x1PaCB9PnajfUXM1TfrPXKvY%2FsOjGbuHvQnFHPn3rvY3rBDoURrk%2FCnkygPupMlNulvFc4k5x8H4CIwE56HBh4W69nxE52le9JgjRYGkBg310dvFX8nyEizWK1E8TZRmS4k1bYgsYydcXpclgb8%2B9tM3YBdZiJC7DV90h%2Fc8RtHTsirt1Z3acgxhkLQK9JfVDi5Kvx6njeeq3TzV0Xeb4iPhlv7CpIp3JqvdYHJtEaoJeVNvz7WY0zHTDXiZc2Ec2qFnMu59ggbH7fV%2FuGpG7FMk9v5AUhVzwyb6pIXj4fglFrfeJ8WZXIchGEu2Z0RxvKJdhJ%2BxsNd1X8J34isQ%2FzE6cJb4lIkiOkMkaf6KtIkElvdXKlqKCLEzO9j1vfvVIlCOTasGXc2TqKq7w0H1PqhOIQmz4jrJclA%2FbI6n3K1Ud%2FMK261skGOqUBqlvGT7EokkGLXxAiZCDTh6mBw7rUGHtTUcN8Dk%2BtBKhecPJw8DbH9EIdkAaDWJynTmoGcsx%2F5kXnORMtwbcm8va%2BZFcsbuiizpfCRbeVGfI8VewXdeT1HlWos9Jy1JXzilo1U12ibO5aXgktCgiEfzdMnADQiksx7hKKRvpD7hSNieXU5UQ1625Y0wq9duoQVdmZsB9wLWcM2GGFUmZ6Fx0PShV5&X-Amz-Signature=6ebb667f6ce9462f8d2dc86b1d8101a4f7e59889543729c6115a4499f2a5c6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

