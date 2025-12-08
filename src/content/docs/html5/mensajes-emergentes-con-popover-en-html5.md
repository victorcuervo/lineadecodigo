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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFZ4GS2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkRZkJiXL2xS8rp9JfG%2FiKx056dEMQ27TIAeSNCJTBCgIgLGIUCFJIsJd39yhcQY%2Bph7FzYtkr93UZh9VyxCnCuyoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv7pFqkcu2CWdvDBircAwhczjQK7YbH%2B5xcADqggDOAopQjC2qI3Q8PIQcwP0pCYY7z%2FMOiwCvvX0mHHJyq6EMFPvyI6Sn8ohZyjPQtt06m0zRMBOYGEe3%2FuDIXlzX4Ww2hlMXZ6HsCtD1bx%2BYq7FSxQEOW6QQJ%2FKwDW23P1YNaZPQ6%2Ffm9u08yrgHVus0NesHxQ0UaNeKKceFlfz80HThUiuonL7mHy5KGmpzRQxjwhRr5hmWaDMsCJbt5u6y1GjSg8ysM2XrAawOYe6upuJZOHQ%2FOxSzcOF3DEiJt%2BKoxeew9pBvTHoYiNLeODtMcVT%2BG4n1YTqbMVSs6eJkPAzXtS7mUK9QpdPRWJHVYX%2Bh1AaXgDX0tTxx3%2B%2B5J%2BPav%2BQcIkDBYc3e5uvi2EyVWKmpIspI1Gq3DN%2B%2F98Y9t5Ub65NMioY6aVJrvMvSbvi9%2FhdXa2i5dSrCyR1tXvHnIJBG7NvCNZ%2FiVEW2FRhpEV%2BqNUssr1nQOL2L2tZan7MP8u0lAZmi0%2FNR1yNdVM0LhXCUdyLqcVyESjzuCjFS%2BNomBqv2TIKzSGcF9Agg26NzbJCozuxh9%2B70%2FAoFzJXgh7bBwqJqYybTBjvwVDHxPT0cxlkaE%2FfFhX60WVYDKPL16ERpIYrQDKI1t6WMZMLjt2ckGOqUBCBmBfHO100%2BFswUBu1iHYmaC5he8zBHTgyf7w5br0FThC9vCMNnY6PBC9dY7rbTEAywH6J6iGLLJp0Q2%2BQWARfOsoWzNorNkLyekBvilaBdjUxLcJGbAUROeSe%2BCkEwCtHOxsh93LchNg80g0RWgVAmUEWDoCS6ER%2FRuRd%2F72FdnxjdvIK1T3ncgoGY5bRIVDn2akUudbRwFuyEwBpiiymcGjwiy&X-Amz-Signature=7417d23ba9ff7c7592114de7096794fe6e692bb8aa99d72e9767e4cb797fefeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM2NTPU4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzqokHqRsdVqx%2FmkPAT5%2BXB0LzhGCXwUWwyYQ8HT0SYAiEA3f68Rl7hmGzL6mbAVoelqTzyOek%2FhDqb0QPudUz7tc0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuUnEfh67RumD1yZircA6K2YyP8vevuZ3QqF5fKu%2Fn12o4Ea5BasCiX%2F2Z7E7T2U7MQTJecvQ7sL97es7sXDiYGpET7S6R7NgH5HiVNGGWhJq63B4rSr6RHwcAFlRD2qXA8SNI2v6lx6LY5ffulz%2BfCTp5uhhNULno8%2FTu2fkBmWn9DNZ7Ir510xA%2FAVU4MiIBuDrW54Av%2FCOiFRhgjFxl2ot5jjPLdzrWrD9DtArwv7NsHjdenxZ4f9TAUXPp5pBgGlVKbVLfKzl0S5BhW4oNku5zD0Cp3GQUI82qcrtNb0KhwEvBDAS00O9%2BqdOXt45h3uqmHHgiPgwzKAewlVy2W%2FQLNlNprpBhLVOEgrTZuPmFfICaSabURrG%2BnjCLH0fY3v2hr1JDVR9bZvr52Ir903sMf%2BtdpgBgw274j%2F2i00PSYhrUt79mKlUf0gea7Jwx8aYNfIwpsnvm%2FtdEj4yOGLUfvZjrtrZWZQUkQvDh%2FcpO5YmPcSso4GV3tMPde10NUfEmd%2FainGTpuQ8mmeQfMjHvc907%2BO%2BuFc3ojXOrp3eipxJ4pt8cLztlqCPkOA4qr7%2By79b58HkAHAaZX7jmLvICochs6Bu1hpELLySw8neqlpbFtoN2ZsIrfhwcbE1RWvYjRYGC2x6F%2BMPXy2skGOqUBmbCFWYzTrJ%2BmQaJjD0pyQT8VngtK1tWuY4HMUWRzrL3I0D7HFYmsJAo9VgWcI%2BWBnNfi8YIxvL8Rv8wNBYayLnXD46U8Qgi%2FGsdx5QrPEl%2BiyNGqQclCIMNN2aXH9U9320driYWrr9Zk%2FTbf8UZaAaealJdmb%2FMFo2Z44s0ut1MK1jy0%2Be7alMyKXN%2BS1572yY9ZAC7FahHWViObnk%2B26Xop%2FS%2FA&X-Amz-Signature=8089d2bb53baac7571176971355fab37beac2dcd0d1f99db7b3dad6e034a6cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

