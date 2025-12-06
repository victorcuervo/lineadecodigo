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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKRGWHKV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiHOAIl79Zw%2FG2%2FcGVtp46Dujbp8goNF2FohIFaX15sQIhAMQCBD7hFA%2BSfX0RjKA56h7qJ3MQlzhcyYMzFXEVK8EEKv8DCGkQABoMNjM3NDIzMTgzODA1IgwYKrbWvrUsIry%2FQTIq3AMA5eeHHzLFph%2BosKFLXUzp7XTVspLAU%2F0ZTvbDRcNC7XPyVraLRfhSHXo6rGicpX0ntOIxj%2BaGaKICNws4Bw0I0BjqhQ4JURcFpTM8QW%2BEMsQK1lv%2BslH%2FpODPEE3A7VY9DVIIEgf9LitJHXIc1JhI20wonVEgmVuIPG%2Fy1Qrmszrpcg21CaR44gXX0m%2B9sGLWu19g6DlDbwlNOBAb4%2FtgocBTjG2RtJT0Imqmc8Z8fTtlFsRzugmY1YckXhIMImI7%2FM%2BWHipt7G6Dm%2FmRub6R7zs8dFsnkfGykf3JLHrn8Xwj6iIvZL%2BJ9OacUwlEVN%2Fn8v2DkYgUc%2BpvFuODV08QMeUDfKv15jpU%2FLw5bUU7y%2Fz1y8YyrWQEzcC0NuIS7wT3bInFVzr3sZgj4doiF2o1cLNU%2F15okJ2s86yxM8FB2jTBcm%2Fkh6I0jdypGr9ywEHd37UzrJaTt9zKbmQM9e8JQhmAFn86BN67gzHTazoM8LUiXo5W0zqv%2FW138bRikEW%2FSah44BqC%2BVOGdlk0Yxzqm5XrO6%2FmJnwEIId3yZQC6Y%2BMa5cIGbCGNNK%2Fslnh3SJXBrJqLa17tUVZ6mElssLB2fcwCZBBEtV8jIEF7hfv8ohA4pnEmm%2BXx%2Bl65jCv6M3JBjqkAbCGdZTzrJIhs1XLVlaBWlooPXzJVPn9OL3Uc0Eb5UudJYt5etH0MDec8%2FZ0pIgaAFuF4YsbvutbknFIljaThUkMy4blFq01zVlUu575ZOTdgUvpQ9IwBj3%2FBn8MLkQzuyO4WTyJLw6WW5qXLfSR03lRXe4%2FgMr2ZSvWwF0D%2BNxblvWDWWZUfKMlaO9vgqpWBKcKTo0hk%2FokOTduGaBBSjWyhbEO&X-Amz-Signature=8e3e90e01dbd7218085f0e34eb9f1946761818659ef45a44d4f8cee9d150d4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667K3MGIB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBI9hvboG2eoSiO8z6q%2F%2FFRy%2F6m87k7jPfXReFLinWgQIhAPUmLQ3zOUHN4tP%2FyaV1AdysAh4NxlC3hpmIl441DuNjKv8DCGkQABoMNjM3NDIzMTgzODA1Igy3L90wGytM3wjBbwYq3ANxbQzFd42iAeI2s1ZOZoxG7IHRoJquXR0cpiF3ylX9%2BwCdSG2njnGiS6FgxuPoHcx%2B0eDWpf7Pl5TVo83cE2raPOJpZILNO%2FUJJTLjGyAQOP0aHfq%2F%2BX10JVXR6qNXHLwLiYFPgSEGtj3J7V7vGBw5zxFMry4n2b1m%2FCsWqTigdO1QjWZzSJUhodYNoB5ZQCUvErgwBQHkmFOefox%2FmsmGGuPmzTs0WX0McPjFN32LTP4N7PpJsePeJYlD4VzKZsC7o6ezIU9iuP%2Bx%2B00UVT%2By1YHS1%2FyuNkFme2KHqPudHsc66eFvJRmGk3u1lToGHv1gu6PzfqgwiNsUdAqF3DEyUSaACf%2FsWMFg85fOD%2F53va8L%2F5FQyaQSAfA7ICnop26%2FWT1QWn5pduqac48xEEWv9%2BhTFA09PoWQeSoQ5inaaXBIKiqYaqLh6OOWVPLUY0BfKyXN%2F6pKZhJMe4hYF4NqzDJbCX%2FzyW781N5BKjouxwD8%2FLhgaklywH7ijDcWUc0MO71X1NyooEqKrszn87wWlkEqBC0SIwydsLhCMYHpPvM3g4oouTL0HAoMm4yUcmY3qeosWaATLdQ6yXG%2Fc2SwRHSPLDO2LRStoiE0VQ5%2BYJB5PPyUacSHyRa4VDCH6c3JBjqkAZJaW7S7pmYWMiMsRCHD2dconw%2FDZexhGQ%2FEGul1GPO6kus2mR%2BGRBEYCx%2FGSZgRjMV8BU964fogtTcIDtbPzJWFhyxS7qZpw7o%2B4Vo4J%2BDhYTgjFZqLAWVSQzIIyspvo9T%2BRrEj%2FgHdtzcnKPTCUx2W%2FqSWLrJ0yNPLVDguoIymBYirkav2Fa1o1tnoBF0sktAi382vF28LYhbM6Pom7lCrNjDy&X-Amz-Signature=eed6bba74678600318718608ab2d8fb621a03e189ec64fd0e55ccfc11c9944d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

