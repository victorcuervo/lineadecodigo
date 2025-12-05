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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTJVETT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHc6tiQiWttKObXBELKipBNPIJYIxbeb0IBo0gzxY2HQIgHJ0YTkqxOXnQZu0gOAUOzRemOJ%2BzLnKpMklULJaQyRoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNTwafgsiO9VnWNulCrcA34HaFFAK9xOQtVPi3nhBeGvcWxBc1J7neY4l5DP37PvHR55m1IO79Sp3dI033FZBqzPivVSe8oalMU8hJfLbyS7U%2BLilZknEyx3EMjK8dFhuScGOCYjgd02w%2F9zCNMEcm%2FaMUKF762gdVIUDXta%2BOexhhesO8J5OJ5G9AUb0WiYjPMawVYK8WOa5qZcKcRCcP%2BSEtq64CXKKUPY%2F3LKRn8GGtoY9Ogk%2FMof4GkALEbrlxlhShRd9hj6ZagdPiGiyjtsngZvkCgAWxdfUAwxf4LRVwbl3ci67VZTxRRZwa78pno5Lf6uVb9S5aJd%2BmjXu3Uct4qL05rLpqXNNaZN36nkayqNI%2BWFN4mzXG07nz4AD3EJwcJ8ooxCr0ABPVC5EVjFqdwK9QGV9lv7Sjv57IomqSh1EnB1zX2Cmhq0jGIIURT%2Bbsf7T6O4qlXIkZ6trWi3vclHPPayOB9hdzFl0u6gpra%2BWJZ7AYDQraPm%2BbG9h8eUjWtW%2F3d7HY9%2F6OLfGjfatE4JTJm%2Fm6kgXlo1oWGbQArgfMiwuvrXh0LKCz3ZH54Rc%2BNdTsWEtM5r40tL%2B%2FR2vpo44YHz2T3wHuFFJfIjo9hOBupiOa0QW27nEqssnjs3YA89uHKKpVvCMI2MyMkGOqUB%2BtzmzCtF3SWpjdGc8nDXqLVbXWNYk%2B28GxHrHF%2FVEOl2JOYg8kfgtlVk8pjIs7zCVI1%2Bf0aott%2FlDRVW1ELv06RFZ5bSFB6d3MBDn%2FX0%2Bntpg2LcqxiD4MmVnkyBgRvyZmfkTS9WsZ0xzEQh9m%2FuXpNvuhlIHzX%2FT43Cdh%2BlLMxgqgofOXa2F41bTtrHfLjv6JAexY9K0wjVOYpdx4NWZJBBC8Us&X-Amz-Signature=901d1d0eda07ea9c80e71444feb9272d927c91d3d583fd2311915b65a4d15101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POHTHII%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8U9r0H16qBxm3lLAGVzp7YIT2fP0iXvPrOfKkYr5pQAiAlLGEGyUSD1VBeaRBt7aDLbhkv381%2BCaRu%2Fp2LsXVPWSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM7nButG7x6WKxvdInKtwDVsSrgwcITL9bMEcOFhEDzY0OcZkUwmPoWt%2BHmqC5qjQIo9PGTv3BiwhvpsY%2FxRLaBR0MG9RSPMJf2bxnsArlIK9hs9W9kHWTmhIqFQZFssRlo0oGTdOga7q1KkA0I55p%2FRyjit2h2Mr%2F9D%2BQ8VUoFrHJQTWBbF4aZKXKxpb7ecGiDnjqqTK1aZkElL%2Br2SznRfFH9HVySYqu2cb1HZv%2BP%2BBr5uNTJngATDVE6hwlvn1Yb5oapQgrB7NtdQ3G8obX7uPwWpeK%2Fu7Fdb%2BbBpbCGDcSggFxBn0Am2Y59R3i%2BiNoyR4jRTH8n%2Bw%2FwdnDkI9KN%2Bv5p81XWs%2FTtKmkPwzCRHu%2BO3pP2zlnPJygmT66o3AHy7dv04%2FJld1PFWSMGiyUD5jaA%2BlfANaMQi%2B3aBkkm1HMvtvUV3%2FjX5FzkFx0Cc6A%2B3Weh2F%2FHASLN9vhzWBFJUYitBfdMIKJmV78qBvDXw3xYGwitsHByzfJsBY%2BeeP96Ifscljeo264n4bwyIBpyAQUgJD2kXknpiPxN4Hp37o%2F29hzFWe5Kbt3KbXpLtCOSxYTJHpDIPCoEtXOwBjqLYKnaJFZWncbCa3H0mydScVKpXONm7s7tWtsi%2BER3Qp0E1UPkL53Aiz5xEQwiozIyQY6pgFo6WkcM%2BZ8%2Bsh0LebJGjhrAm0GE%2B5BWkxPszbGX6qmJuH3vgmpla%2Fe7UMpPh0nGZv6FM7W%2Fu7FPQfis6ohdGMxoODu%2B20utF24GYh6%2FxMVceAKcC1nrzdkQHaCt2gyT4ELhJ96DldoPdxwJ0YXApa9UIl9tPnX%2BbVoejfPp%2FHzlRSwM3GXaEGzvIokmaq90HYcQyCYliV9cL3ImtUI04L1F%2FOm4w1d&X-Amz-Signature=49e28a917f733e0379403fb2da38638084417a30a7eafda796fd855c46bd68d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

