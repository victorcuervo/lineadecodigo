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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEYKBQJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnhhNjt%2B9OtwpqViJ6Ylh%2B1eSdDaeHzuVPup8SEjjLFAiBbhxAE65FAaCMM%2F4mikPqQeEu6r1kQzrKix4EnPNqHCir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMQ0qMaunfgwgkKVSvKtwDK7zm9Qja0H6VNv2FjinoeRysYDhJ%2BzhEH7EK%2ByKQu%2B4tbG%2FvMj3Ohde8fJW8f5p3Jc85V%2BrOSk4VGPvhhDWN2dpkIpZi87eiUa0Sj30WSIXu1%2FVP7CO6yUL14tGWHx9w%2Fjr8jn5mLGQl3T10367LcSl1pYkFXGl6qQqbV6XbXz7mRP2I8%2F8J5IatDgdrGXfg1DSejoT9RwhVHB3xjaPjz3PHCYal6LmhKLVh8cVRc7MwWTORxpu1DJGk%2FErMy4%2BRgox2CQYXg9cxg4ecjJX%2BXYY222lEoVfnFkMhGDS%2FIvtBeqJYsbsZMpxstZlr3F2%2FUuGso%2Bp4GL%2FdEpiGyAqhj33Iuqp6A1aLu%2BhYlrzmmxg51nPv%2BaKJmP2WDn4lKy%2BF0WPBgEbl7atJXvFoiiiTPzPT2akwlfuFLk3VCEzKu%2BTOfL6wB2BpGJjgZtrMk7KfO0LrUJNKJt5%2BrrB8gF49D%2FFHP4Ve7xQVHXsScr951zMQTtKu%2Bn3blUwHnDBWHDDniW52xhH3Tx8Egv%2F%2FbqRMaFvS29mynxjO9%2FAEoaEeByM4yRxI2MrwZ1wQ0xVilu5BbWoY9ERvYB36kpLwxE2SHkqZ4OAeVPhOSFl%2FwBKIB2NVdZJFpg9TzUjenV4w1q%2FJyQY6pgGQ8CIRLvyx54TPezHYr9xyUL%2BJlGUGHvUMbr9nBmNX9Kpkwox4O9E%2FFJ6Hv9KHvYvAEDwmzDTn0y3GoU981lEplqVD%2BpkG7AtTOLvjQ3XME%2BTn99pUZ%2FSD1RdqgsMANPz9ku7yBmDZigstYif5%2FKin77qS1lAeMD7MTTrbyNNsSWMVUu928n6telCM9T296IUlWrEWfBkDEJaZnQN%2BlzwEqej7G3fM&X-Amz-Signature=f23c31a842b0c37b26b68d92d2a20becfdf18b568ed3ceda16644c6ad9a173f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZLJW7H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcp0UdBHVWF70Cf%2BufhPpTKFPkGWyNI8aryw5xj8wCpAiAF%2FQGC0JCqZ3OUv2HkNB2HX2aaGd%2FILAujQzhiwy45Ryr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAaoOOMe4dJ2dXoxzKtwDBDg2UOba5a6%2BPjZ2J8hu1zS6K2afhG9fryw61NVkAGP2AcbGQoaExyfDO5MgIfwcqalo5qeKqrkUPHlCqVDDjU4M2ps%2FMwruGO209nu6tHGeH34nPiL7rQ5TX2PEYjEWZnv1rwqkOfC7oaM9idK42e%2BBETH2wde3BpNTeL793WIUkrLcipezB42XxE2H1YD8RscIpfQfhpXDBan5D0%2B%2BZCKhVjaad1z9NqiqAynb4lMrQwh4ztlVwZsNb%2FD%2Fs5tqHameFRhkWwNOqCQPn1egleYvWKnakgQfxSI9fMzm4N7cw%2Bwk4fgVqiilz60y9sZ7WfeQPnA7LfMYLUIyuiIt%2Fkocd5yt9VXczKTkW9uVDhR2IN0PsFGG4izTMgEFslS2wl3gW52h7b8QUM2tiNt0JmgXS7BIABv2ck6XBxiQDzuHcMu3li6Lc1a9HqoYZ5ahYXHLxyaVOGm6%2FuJkAaiNZ2ytLVQwIecaOYHaTdS%2F%2BfDqGtXYz4tb0qVHZDshp60eAaf%2BXzFy97cfADpC9u%2BrH0lvLPw3llJDIgU5kYJyJFm4l0Ybvb2yYr7MZZApaPyamF8E7MG0B47jdMBLKs4YgWlT61V%2BgKrAKDxYrlaCXp3T9zXhMfrjrdEbQwcwgq%2FJyQY6pgH51v%2Fp19I2j%2F5U0I1u9WHHPhFi%2BqtYJjJrkWCbSa0Jzu1HW9lqNy2ssoNIVbBhw%2FZENhVCYghenvOYLWqLPYyg1SU%2BnNNYFYWOoux5z90kIHOHPtLZqEInGGgUqfVcj0tVbtQiRdGlda6JG0L2Bipj3wyr5GS6%2FVq3HD01BKsa0q4Me8REYJIY%2BgxmdzFex2apNQDzuVVouEHow1T95VFHkyhq38lW&X-Amz-Signature=a4aec2678d69ce507d1cd9578453a310e261d4aad2dc6cc947ea960723aa8534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

