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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFBEDUR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfQk9efvT3pTdzNkvfmVlfoDTje2p5YGEkV9rsfrMuDAiEAi5XfScnEQidxgxE7VHvJx9QjSowabrCB8zTtvHzbTjIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5g65%2BgnTv2yp8TeCrcA5s9HXCp1fBkqSo%2Bq5QKPHfUw5GbPDdLDRFaX6nG9VDwRry2dlwVO8xD4eCEtfaCOKtJtqhZD81PW8Nj8%2BW5OM45dWUYkmS1jF8dVhD0yV27kiRrwQAjKYFlwu1nCTYfOKgXdMzqTTYPODt2Vrs7BNn5yPurgi78G79VqVN5pTg%2FITJ8l%2Fu1n5%2BR21qoI%2BtnJFptsUUpXzb3qtIXiEq0MoUCceA%2FhvU2jB7SNaSqrJcjvQdxcqC9oYzxZvNKrSKD06B6077ca3%2Bka5K2a4%2Fmi6XoSn9es6J%2BwtWQiTHENf%2F2J%2FOwOHPbAJ71TVHHV4meMau6edG%2FPWfs5f%2FtAwvWy%2FvjRyOy3nqWyLmopGqXChyKPN9cLkGkmM42wy1o5HurbsUuYU8Bh4KMCGPIbR4r3IF7uLIo5JzFgYG%2F9rJnkEqz0w7rYxLVw%2BDv4Xs4atRU%2FARPLDJlqhCFVdXr5TXrsYdVSr%2FJa5LwcJYGdED86XJlxxA3D1sl4o5v1cPrJf38ILXIGHs5ovllhU3cKxjq22YyTIbYMn10EF8xbvS7CwCTYTOyBfbKwtnuLBIhpYkaNbFCnxkzFWC2OaSCu2I%2FpgyyPgsjlm1mED4m%2BcAaL%2FfGjwGz%2FyaF0XKUHwtiMO%2Bt3skGOqUBSOlhkzKWiU8BBRZ15u8fq7KhmQ9I53UUe0cQXmBy%2FyBw%2FMyfD%2FjY%2Bi%2BMXOD%2BX3YQMeLH9Qo4yVWTguQjNVC4BV3ippx7LcDLJdrEpwMfXL94er%2BOjkBbpK9rHF%2Fj%2FY3l0my%2BVu5RtvtmkIsdgYetCiJRXDDEhXaS14yYko3zrf6HTlqqjD0p53L7283xXD7R%2FI8WnatHQ5nRBHLF2e34lXV2cGm2&X-Amz-Signature=59ea2e15ffa072b05e95b15262726c02d6d74ec8f3db6a2e79b59afca859f84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM5EUYWS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyaGpaUqNnccyokDbm9SXJ%2BxS5kAFCkbSR%2F1V88PP42AiEA5BuVv5xWI9%2BawvjDqndM8uJtTflfLh%2F2kSyEwgIFLswqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlktFdZcDWiaNNmqCrcA2hcBuhDnVUjY8OAMg3Jipkqb5MFMYWRP5I3hRLo2Q4ecJ%2BdUd1WgEMHDs0q%2FUisz2UOYd4PpmOPVrQXDgJLkxjUQNSfsF5q6loXLQ3X7xP8SQbKdN2VN4xXJCsf9u7ruuNp0UZ2j%2B5vfG31%2FVg2JZUKeO8MNNedsQVm7MVOxlHFlXXwZpi7rlTHT%2FHiEUy0UvUq%2F8wxcNM%2FiwW%2F0uFOl63lXniAot83fZoGs5CUDbSrZkIXOgYo9KzwNeONykiGIqlqp38LCmHQIKP0adpoH2mogthV9Ql0UB55IUXD0vtWl2YmMeDGqj0yxznqG5Mqv4EaQnSWghxmkFKrnMjKgyahOWydS3xNsc9Lzj5gxsLGQsE3XiEdDApeoXr40NZ8Ixo89Zm%2Bq9H%2Fh0AJ3bTP%2FEyLKe8ZPISo46g8VvJpyPd7JEnO%2FMj7m%2BMQcvWwfUDwgl%2BT8Pl8NxXcPizBmL6p8CqmrOwrE48I1g%2FFc5mO1s1vxTiwSd%2BnIplx%2BqijL%2ByTIX9TTAncu%2FUgeKZkQL1B%2BLeCMtRIohDqcqEte%2FSDH%2BUhpYsURWe%2FcMRnpPu%2FxdxyUeXk09D3aNCSPQ1R9DE8vvSrSjNjT1ek7AyyXtq1BqfjiCS%2FUKdBm4KotspUMKCu3skGOqUBftuH08vY0u3Sotc%2BrRo3P1CBenkB%2Fwzln2H%2BpnsuEDiQyWzhduD59S6NDK9k3UkwNHbjrRv5W8AhhemKLo0jQC8xd6zseL8%2BbPI6n3IBTt1xYbXHWkWejinHKqq%2BfC%2BoEUvDxwUBe8T1SYLvfpjrge2V2LRtOZxRvXo29azY%2FuVpLzDUvwVVBgZRjpmJ6Pu5fylUbbjxyo9kmgmW8bnRYFQH%2F81g&X-Amz-Signature=18cd588147a21db2c7d836144403e0f4decacb8e92370e57604d82dc5bf730b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

