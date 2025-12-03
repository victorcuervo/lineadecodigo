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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZUO6YD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIE7gtSI2%2FB4Gx1oiiDPv%2BLqo%2FL4v8c6WWIpOBXrIknO1AiEAqdqKa4PBMXp7am7ObEv8wILTP9nRhr0YWzetCyH0ByYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLz6IzMPCZC%2Fa7UulircA6z9J1P2GxwGW2%2FeFy9fsji4y%2Fsun%2F6L3zEC20iRr%2FJ%2FSz9cuijpT6THoJh0I9o1Gz5nlNa8Syt88%2BAEdy%2Ftjonx7ps2%2B8OKfXLWbJM6Qswr4G72zbIEhfOI0BoZoMwCZC%2FkqufJFoERc7eIMMa%2B%2BEqhWcRGvkohF35SKHC5bcy%2B2CRSGnNpXNXpGnjjH1riWptGb%2FVVERhfeww%2BsVIWFhz7ytOnNuj1RAV4yK2TOzW39zG5oAzqacVErlOKEQlrReChp7TnPMHRBukll30Ruu%2BVyg36DEyLojBoiDrv2bARNjEhgTORKcrahqlSVdDQSG4WaR4pIDM7jOjfty%2BhDb6tuVnyTCu3jLWPbwBU3056b7vYdgkuZ1rke%2FSasYxDZsuhec7lbOeXlZxnPzfQXoMZVy%2BrYgaUGil0eFZqgDhsJrbhi1r5whP9JriJEw%2BAP7wjbmY6p5LNS5l%2F56tuKcTV8HL8J02Qo7e6iFn1yXkCIAm9GBnVcSfAM%2BESHUq2L4yWuVEluBoTsuMHcVzq61T3FtYPTftKDSVkUVTy%2BBD5TYdeaooyOxHcKQf1inZaxBoLUtAHTfkTFk7QIAULVSsxxzvGgC22MMaIMDe38ScmyGdlpWtipXjTYTreMNuav8kGOqUBXjVD178sEFqXLvzlccmzEi5rkB4Mo9GDRkD%2FUqQdnrpIi0i48Kb%2BWNxn1m%2BhtwMIqSqBM16sFyUOKEe4QGjkAYLG8vqTyTFtV3P%2BanTPBsjGqVHOSYNLOiKpoKSWDk3P2veoE9IaB6P0Tf3MKgpLK1mcmINXjITv08%2FFLWlOcZMPPeghIYzs6ll1RPc1jEWhx%2BCCkSFIBBbSmoI8n5BxA863Dvxh&X-Amz-Signature=d7fe1e50fbfa6206c579da4fbb511fe32c6e362d0afc5fcef442aeee8ee20afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGR3QJFR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFl71kHlkACNSwQ8FpCto1dIF5V6cq1iCjNvCn3Rc%2BtiAiEAmbys1M%2FOhwB6lNwflCvuBtwj99Cj9SOwY6%2BL323Dcvgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDE8GLJIoyaymXQUpQyrcA%2F%2Bp9GbglkkhBCGEF8gXpzPYDq3MbVgBRYso2b%2FZgFdyLsDsBGkX0j%2BOrhBETmQSoizTw4ehXKLrkh0UNZ%2FKo5R0GXqQBK6dp9gv4pbNhkFqp1ZWhFl3sI9sX%2F8OC9nasDqrWiW7sNbnv1fmR30ZmXXTeTSMFBLYtzUWsaLXhcx71RtKkW4k9mu4jgxovDJAlJFH0w0mFF%2F81Jmhn12ELBje9urVbKA%2FlOYUbF5k6JTDqnoTnu0bRsxz8MTeZLN7KZKLIZwt9WvTLzAtf%2F%2FNnZxtFFF%2FJYc2zOYc6q%2FKdlmHEF6FgjhdoCqotZXse5FR%2Fx5cYnX5t4X%2FzKN%2BRFctdiIgolakNBFxs%2BjSCq66RWQGW4RoMfZR%2FvGbwUoNIuwEhfl%2BJo5x0f9m4qjorjBScrMi6nC9AClXx7dt%2FugCPdRfotEAiUwELxTPapHMCyD2c0R5Zun%2B6c6rJazzrpN47ZuURHtSaChkjNtBlh1y21za3JtK2qZ3p3I69F6mag5AeLFXkzF4FiZiKgOTVGLrMANU9EBnbsAMP%2B2vs0WYNV1g%2BT3Xv%2FT5UKx9Kvxv3tfGb9JVMA1rCUCd%2FHSo0EX4Re30ucqzwcF4PbWLdrwomWG4IsRu4sTS2W8%2F6CZSMPmZv8kGOqUBp6%2BetIMcQJrhKJENz38mgVMAQ%2FWAlT%2FmpN%2Fk4gtCL7yeYqoyeYo5zNN%2FFq%2FnCY0Ke7BPaTsctRdENXxzobKwJ4Xe6RCFej9QVNWNnq8Xg9Qac8%2BqbKkxGPxjcV7ybaRrdfclO8suGrkw9UI5mbphxypQlgtODuOJeLod99lhV%2F%2BcQJP3yD5h3YWiRSYOfUe3FF3q53Io90r7lwrD0tBRfFkVK5%2Fg&X-Amz-Signature=eae171618220d4af3d8c614525e3df51de60e128f169efa3492db9b1ed97b915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

