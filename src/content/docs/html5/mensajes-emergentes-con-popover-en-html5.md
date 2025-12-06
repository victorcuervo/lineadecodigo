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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJEC4L4O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtmAUzQKjkEsEttjx9fEAXm%2FGnShXQ1ipTmXlM%2Bp80bAiEA93tYMa9sK0%2FiUwjmG6jKH77cG8inVYeNMejY4C5zJtEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKrsQE%2Fff5uhKzEacSrcA2sCP5WeLqKqDE1%2F%2BUXOBuuMJuCqos0UEmbw7lIwU3oNzu%2FtxOBXDUywOPKODW8mjhsbPJXdQcZKz3NzpgYOMuqu5p99QFl%2FrlH%2BMaih9dfVoZ1XHB2qEY3BlEUoUERi3iijDKY4YsIz7zVomyIR3vtXdp%2B6SiILUfcupmRRHWyvFsAWeW80VrgN21mwjGkOx0gYj0QBqIrSsjqNvAshVbUTIKrixcZJ3Cnj1NGOZnPkn5oabBPOKNDrm0i1AV1nGvtU4r3ehmOimKiCcG%2BWpup1whtXz3SpFFUQRJH%2FT5RFDd8edfS%2BYz3xi2gJLiLjR5HfJ9uZAT8LDmFPQ6%2BTZ%2B2A9BRSPfLpjnd%2BNPpqvEwM2GWx094yPUkEw9YcUiDvDL3ceYQ80fDe7hG5tmoCR98MipjkUK0sroUpX8kJEn3vPLx%2BNkZ5iIT7X0TbHZLVlX9H1HoyoXav3DHAFl6rcH2PkZCfdSqIG50ENl86I%2BqlMGwyERQAPX2YgpQAw7unWffdtYNsgfEuSlfHGar27U1tYJG7gFjSQSaJyR1GYAVDRhFI%2F7YUpqoweXRoSSexY6Boivu4gWPDxYJbhEg8sDU7390CJeACpiLhLNWQzWmyZ1CqdouJ2EY7PuJBMOuez8kGOqUBz6Ratyx%2BIg8dur11Ha0rn00p%2BcyDHm5Uw1eWcSwSWXU8SCtn%2B4Uutg%2BH6ZJqfm1NDCpNgVSHZdAbRRGl8wgj7R1seP48D0eKAEi2TmxltiKFfbSlPZsuieD5bIW9HORzA%2B8eSOgkQQsFsq%2Bl%2FhL%2B6ATs1g%2Fv59Q1C2hkA374sASdEJ1GAxuTInC6WlYhc%2BXVEbIs%2BRpURiHPeUHP%2FIdAmH8y2SQ3&X-Amz-Signature=1fc32880c36fa0a66dc03bc563afe649501bb7815ecaca91caffbff2e5f56a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOEDS646%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV1L7Fo0nh47FPkPw6XK%2FQTXtQgQC3wT6BSA%2BWZQAfHwIgTbVhlxlf20OpxiCfQmIfTEQUk36Em6xTYPFZL%2BPb7Uoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDECgU5wd%2BrLaOzf9BSrcAwVkh07v7%2B77BbZ8vsO299RPiTytfM%2BD%2B9RVM%2BOYNP4bfxLU2x4NYoSgYG7NfiiZUyDF4sOugjjfcxe8kwi4BUYo1VXwjxobAlIhrhIFP2hzS5CL8M8sowQy8z0STACVgIqypMxLTchSMmYy7a7me9bKRltcsv44dLLyd1%2F7XfhJxb3vsm6CkVYTSrlEfy0Z7ZwOAm79lj32Gw8SqbOvpOBTntvHyz8%2Fuar2kAEKr3dP8ytj2zt1dfQSvVG7Vfsl%2BWvyCAB8t0yTjN82i5YkANLHNue4dPd%2FXZe3w%2F%2BHdL3qw23XAeCUjewzLZivyIUuFgzY%2B0RK9ZdMYdjBDk23nwK2BNXf5f7VYgnagrSx1ol%2F%2BalLtK3v2w86yxAxUq0qAPKyqfyzbul8uz3rShc8RfkRzQ4ZVhBLZsj4m75VdnPfrjEpQR3G0Nd4Yh3S5LEnTH4r0Ou4Yo%2FCLw95RpWDdkB7gyW192BrYY%2BkbSddNwjwsGx18b5nwqVnqgGBUZx2HZhBsJk6u%2FeeWGwwm2GFSsxzuaY%2F9yn%2BTzwfSbV4xnk3DkKpaOI2sf6UoEi%2BtVMfOuhuz2NBd%2B3Q1tG%2F3NloqL7T3c9Ka1JKG%2FWKZOOIajZ621%2Ba9KDj3pHVOOo1MM6ez8kGOqUBIXFNhgSacVrvWAr4OKBaulU8O4QYs2Q9AS4ur6ZCh%2F78rezjDyLj1rHTHF50jilgLDmVpGf72z2qGqxqCJGcXK0OfhKRDIxVauyPuLS3GUkl23tMYmtgNs0BbDiX7JWspj2Kj6vf%2FQSotl%2B7eVik%2FkeMx63iKD9SQRUPpuYeL5VnKE9qp0334o4MrkxVd0zFAgl52sREy6Et8Ig24KHmFIBDj%2FH5&X-Amz-Signature=6446a05e0b4ca8f853625c295756377aa68bd95ee543f18c780a88fd25bcd41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

