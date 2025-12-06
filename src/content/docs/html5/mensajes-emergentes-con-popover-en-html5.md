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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCCEBCRX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM7zZ2Bi690mOkoPo3RO7Nld1sYyLT5mtRJ6zfKzTCJAiALVBPXW39oBpIdO5d2BaCpNfLSWg8MnnORBuqVz2HNKCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMfnqrYjboJQhKIDiwKtwDLb5QtMhuD8Q%2BoQCXV51SbsGsvNAHGWqJB2L%2Fkj5FXWR9R1aUVGQvClEvtg4gPalf38DuipjIzg6GHwTng0pN%2Fo4MQKzFYxBJJyS%2BGXCbLbhRTZV3VKeP3KVKNfeSEhDTN1UOfO2rCgrV1%2B7ASOwYYw316xTXVdSvsrbrvODEfjMwkDA5T%2BUAh17043jKfm5ja7exwi9KNTBY5ZbOW5TypH6ajaGfBV5Qylw%2FWU5HWtGP%2B7bh%2BFm8nfx%2FMCZHD%2Fb%2FfYiGkNLegiQV3cD7%2BRtYFazc6molMJJkjNgUqw63xA6Eox2RwzHRboTbT3k368WWxuMc%2BhzeZsHZJbqlDm0zRLOlv6Ip6Ntj4IJBGof2e%2BoJBBHyY%2FYe%2Fi1XDPubZCLrM9PIp7wJDxX39K17XG9LH7UKjuFbxfb9I6gH33bUMgE4a8c%2BHqw8AMc0Vqlj%2Fona5FHN12KtV6NW4QA8VgjA6z6CnKacttgaTibAlSYxbIpYwbPChYGHEkrD6eUWXQOutQ%2FP8aiUnYX5GMU%2FmUxM%2FCaNXgE%2FUb58Pqpj4%2FyH1pSm565rWpz0U5x4n%2B5AeG8LFbl4FIIAl33CpaEUAoWb1%2BddY7pKPWWLjCGJmNy3d6NXkFcNcUj3NaxRoAAwk8POyQY6pgF%2FUoOSszhJlmP6O2hhfjCFVOQZLNiNQCgvVFsjjkjGv3WUMiGkJobFZfgUnz1%2FwvYuHUQZZxev1p3DUAo%2BCHzDW%2BPQmH2QLD8XxkdrjwqH66mYp7cahLASy4EN4h2dK0sSQ5cJfrNNfaT9XqOnRQzMsX8LM0SHnb1%2FuR7hC7j8ZRHbKjr6gZ0fBiaNTiSlLaY76ks%2F5yp2bcoJSy9rc%2B2HflpRtUNj&X-Amz-Signature=329100f85787805107208e158671b9b1b6021b184f534145852796b862a7642a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKF2WUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocjc2gCSUJ5rBbYuFGGwYi%2BJEcYCzJDEOzd6dsTmYFgIgX7ZEODJfzdda%2FAosYyaOfNKUcoqWOsjVOllX59Igmq8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ64WxD19%2BAr0GiVpSrcAz4NlxuvSr7dA1sMrQUtAJfuQ7uW205O7li3CcMvC%2Fxkktf65bj772LfF6gARriJvyQciVIapp4KD0u3yW1YqcxovVTvKznBfNN7LKLFl0XaWOWuuEj%2FAZCuuzhzvmfbUZbQAuKwGTScpkB%2BsIzC%2BEKewAo03iRdvlCUm%2FrN9wwkkpjAw0qBfdR42kipUrP5V4WStHsCa0qqqmJRaIb8LzOj6pWkwoj7lSiYD7ttAOoylYLei1EirYcW2Zlay%2FXi8MTUmi9YXw8svouXJ6DQce%2BAiexBPgfvFzr8D5uTw8do5LWudWAc%2BUfVNlIQTn2PZjhq3xlKcZQCrwb6JqFihtl42A7ePqmp8hYXITG6agqJ%2Bgdw8M5lpZMYpLqCO08RjV9BZ5owBQXG%2BrQ3aYccsrFf3ds%2FMqgku7%2F223vpAJ8h8xP5HjJ6d62%2FJFA%2BUlsjUdBCBIZwSKKC2Eos9v7B2iWg9F0%2FRaky%2FB60vOLPG%2Fp9GekD1djjTvE12IxmcpA%2FCvRfvd2xX5f%2FbcOXIsKkc%2Fgxq%2FAD354SxOTidXqcEDO%2F6hedRfDH7fQWTU65LojR%2BoqHSVQ1vaSAaHtw%2F%2FQv1tw947dAaE8HvFAa3Heuh%2F2QzIzXoJLoqFD3ebWYML%2FCzskGOqUBwkhA3cs%2FadXLm19qJWDLUL0m5CwGzOXqDs14FZvCt61Xk9%2BMxVPbQXkZOR0b3DMZm54useekrejE3FzDdf%2BG3byGT02PLYMsx%2BOkImAc%2F6BjOJBNyck7%2Bg4yEG04wtMrejSDxSVP3uo%2BZ8JKA3EK3GT3YLmN6vC9M4CftLUquIaEhxKJ21SKbIViEg%2BUh%2FWwjBb5pdSVA7ZTu089eWHcC12J582z&X-Amz-Signature=51939695a53ad993724f630822b6f02dc64a517d9fce548018838cdfa80d91e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

