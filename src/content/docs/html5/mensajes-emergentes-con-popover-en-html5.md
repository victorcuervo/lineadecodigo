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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEU323FT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2Bb0Iziel1hmi25LRKyHvkoPvQiPxhxbRAmdERK85uAIgNT1FT6Nv6DZgIqPA4VYtppQU0LNb3KZSglMsfzkC7msqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESwNsMYgKNfZuSY%2FCrcA0J2qVH77MRuOPPl%2BG%2Bwk7WuQ3FpJpgYAkbABujM1cUqSbc%2Faeti3hDRpAQLkCSSK7GXby9Ur2yY%2FaVSdSDIQQGsYUo1US%2FhQ1ssOfAlohoygW6u4%2BfcFZo%2BL4LQmXa1c%2BFkWg%2FKQ%2BK8TOE%2FYuqQFzSv%2FmVEJuN26%2B1oNRBbPA9JTBTsDBB4ZVl43y%2FA5CuQmwddC61HbHzR4g%2FMbKu%2FAWjk%2Fe9Z6WURdfPZ%2B2Fq1qSqwDKkVhvu5aZ1ssZ8NqQBYludhkNcV%2BuDeIIgyVEvjLifSXKUH6VtSwzJPIU6tzVT7fT%2Fb6dsseNAPGGBHqYAw8D2Z%2F7WZeFZkcQUiE%2FLjLbKdAib0uXnrTRmdJu4cLYf7jX5urgSssNKl4u7BWAoAhYwikJxtGMq27TGqr9NWzjl3g2mM0WLENW5hN7z9PPf5bihzD3TxGQj3DLb8%2Fy5Yi4SZumXrKvBcSWssvOzpFQKOdJyuyRFXT1Ua7XryL889Q5m0CfOQRk83p%2Fk4HZTAnOQq%2BEO2HoFEGzs4wkdPPmw%2FJ0Mlmg8QhMBgojiCKD4Jyvbi3m7kFteYIw7uqxJRMaJZrATGICkL2X4MLYWLNudMLOed%2BbRDVn0%2FVh%2FmGk%2FCAVQ9BsyTwbp6EB2MLiF2MkGOqUBYlkfrYQAPGPcRIDHNTSJFaqHX7KqDIPryHjI3GtYKbOwngF30k5xjF0qaXn4v%2FgQfQFGQV7XskDoC6dda2paFE%2B7ButIR0AapqF1C%2F42%2FzsoJlIPYj17HACuisxUuTxghk3rD3bjQtxZJQxcQrNSZF2tntJtsJTk30YIlucWSG831uwfrryOAKoXB5%2BXPbMUFPb4Nqb2ADjDyhtxP%2BdwMlxBk5d9&X-Amz-Signature=9d4795d538c506a23b43708f17f81bb3ae8f729211fbe36d80d86511323c1fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJO3POA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4tTsaZpEfD3I0P7I7e2mf5GBmDwOk0uiGT17HGSck%2FAiACasQ%2Fpl3ps%2Be8XpfNGk78IAeisSfhVjz1v4EkHflU1yqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxQM8M2egStWtQk2LKtwDBFbUcaRZ5yU%2BiVF0fAiJ2EYjJFejNC6n7YqZK0Tmq6a1IqzU2CcLtythy2c35x8oylmsvz2s0jfqCljXAErSO6nlGirn4VLC83MhEkz4NdHX7JD9QwuYxuZpeIPLqW%2FinBPSPe2qNTDvcVcS55pWBF9NJcWvyNw2wTUjqPFlzG7414fUOOIkcbuoVh0i%2F%2Bp8zIMqqDJlnh%2Fn0JQD5948by1xtTYUzqcJ%2BVM3XQ5NKg%2FgYoRBN8c3wp23DBj7lCbBltKhQ1LkGh89fgw3iHNOuI%2BNXC%2BdYgdWqUN2l0zWqMfr4BjQU%2Bz0uetDAAuaZzjvoQwiJ3p3eZmz41TONV6lZJzVTQOgGyO6rAifCY%2Bm2%2FvoZ%2BUyUTSr84%2Bydcn%2BlscKptHpLSzhnR%2BmMvm%2Fa0hSeFIT72cHAn6l7FZZ6iqzrahtVE5pfyDNTvebU84xOKZNvxp3TktitJFTRcZru%2BsLaPST0JtI9%2BdA%2FoNOpnsrGGaM%2Ff4VDFc6SKNdhkTWXzA%2B7PXGsX56R09uWGx%2ByRDZb3T%2BGYgktq6fGaFFZredGT9LMj%2BZUD5EdqcaUAc4fxbH87sEnmebwjNt%2BAMqpWdaDf3hE0VyYAk3KOU0dk%2FIjS%2F8k6dhC0qIfhNIwY8wrIXYyQY6pgHPuLW%2BpdlBSaDIe6k1MLmFzK9gwQ1jLuarZEDwiizHDhynb2bbXe5y1O1PsVszelA2COlXEw3K3MKpJEThkDz%2FLBE0PnVXW348i4W1Zmd5FcAB60e%2BLuhQQqXXLykhYNOiTsQsoK%2F3l3JlJeq6hO35iZ2yvA%2B7vSLzYg4dtbaUXC3U1ClqRCLqyZH6AKPuvGkUcC6wfkHO2%2FcUQLx7IOAiVP%2BdT85C&X-Amz-Signature=41becc57301222a95ee18f87923bf1b36fbe39d7bdeb93dc6f17ae1d171cd4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

