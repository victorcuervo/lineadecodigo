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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWSIDS4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7Sff25WN9SF8JR71I%2BYJr9rQlnhIWji4qfQbT1LrHZAiEA3gqJpIIoaGUIo9xizcrN36vmc2yjMVxDjXtMRLU07ioq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMxJx8A6xNZfZriXoyrcA5XIIxgre91Ue%2FqyFEYvjScTKdf7luz4y4dZ9H8inRSmbpk%2BPMo%2FbfxcmNZbqeaipKinljTB4XNNQw%2BTikPBCDb4wA0RWyo8QRD5dJ2Hlt2W%2FEsjDVZ8tvDDqi%2FNnTBgfuyZxTwEgfXrijJoRo6AG7aOQQozQ4eu4%2B83mMCXAaiaP7BVb81pIQ7V0nAB8abXmS%2F2siUUFGHhaV9mcPX2bBmYsMiyjr7savY4nHZ2%2BVguG9oXlMIq9RDFGCBLcF4eceTjDdKnTKNJz3SpyIADfO1e%2BoksfIFbtobE2%2FVqrIftaI2zLf%2Futs7V%2ByV7%2FvKM68%2FAx5TOvfbKvBKB93Aakw2mQWruI4%2F71ZSZMSHUDkc3hOCo1GZff9wz9ljqaDICzepvhN13yDIKQqjDXfbES0yGJftkIoKBzVOFbSEtS27ZtNiBRLpVVUqIxFnlQZ5X4N7lhEUtvliLXdCzim8oLjSpM8gU5My0k88mMi%2FcsayrryVIPcHySF9dzVp8gZjVckSjYL1s3NOLTwIkkO4NyqGmEzG7pQOnrRwwk7kh82nNUQP82TLzvh6UqXlMYrWmBi4zzSeRwgxm%2BMRQu1ykj4FRMebF8ByXi5N0eyMtTB3j%2F8XfIJ603O8qos%2FdMLnLyskGOqUBnfAH7P1NUkkdkSZiTdzMcVjJhPjiuhZejU9HauGHM%2BjY%2Bwm2fwLi%2FUwtHoUDZuB3x6XDN17jWgCsKhGtWzXY2H9fG0Q90dLYPz4vDacv8rD2AvV04LrTwv4PkWmML0DXDOKfI%2B3hZAThHIyAt%2FYMZmvKO4CUZncFN%2FVq2FB9dyWS%2BLYuTArBQmjW3h1BsOlg6%2F7%2FM%2BbGiW5EbPo%2B%2BV4%2FLrC2O9XV&X-Amz-Signature=c88e27b5c09d16709a4b8277722bc865155953dff849b7e5c8e7f948c4629360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W3OUCV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb9JIYigxKnmlbuHDk5d0Zgw8yE0mJzOp6KAoeM%2FBpUwIhAJKKbqljHlrGYgbW9KqXWi8D5nFiSsc9pdMpPd3OFLIpKv8DCFoQABoMNjM3NDIzMTgzODA1IgxmtM9h5MLNM3WMyaIq3AMrTUybQ3d5nzMRPvgtiqCrOq5GNXh%2BacXQ5mEUre%2B35z69Ik9bmPSsGwNtatmLwPWbdEbQe%2BxuedaM1W7RJQ%2FuGu6ZrjgnEXAW72iy8oBL%2B1KgALi65uiuNwcxOBOg%2FPJGpMDmV3h%2FEVdQWk0cyGjPyoKOkFv6Whfhlh7L4rAFZyW10pAtUqaKERYpmfwzrrYh%2B8Wo4dFfivpDDw%2FYGMgb%2Fz%2BWWsvRpdXpnVbDtPvIspYS%2FX33JNn3DQ18tZnau9%2B2vHuT28yTeMZSpy7BctHiPUOo2y7OcI5U76Zn70LfKkT0o0IYsZxQ263EcCOUOOUl9BO8h3zB2wpf9d6vwCPJcrPqR6TQPNkC4ke%2BFAl3qPNUw%2Bl0SgLpRnhaQ%2BDVM4EqsZlBGy%2FjpqXDZsMCP13luxSG4JJzL%2FbrH7EjnT4T0BBYpJlDsRB8i%2FybUu9MC9Zras0UU9CpjbsqCf5T4aR79Gf2LVxDgxUmbi29THkVZZp5eY63vBHUua%2BiZ8tU9Y%2BCJ0rmVucJ4bnP0tTWcSmd%2FoyGqEh7qUsq7RiRLbQ6mAxJiTiCfKqAJBOJHIqQNbeit2pszDWTQ3QxP6gmNSPanUwvYGI%2FqVYxfOs0JTHjoXCkZ%2F77WFzvX9O5DTDbycrJBjqkAUNEd50Nwws8asX%2BUVRYrQzhZd8048EJodMJnkKBT6a8ByGxWM0V2Lp6xDgRfjc2uE6uBIJUtQZG0hrSR%2FuKDn7v2Igr%2FvXvKBCeox6VA7vm9MQuQa8AFvUl2NXWLtxd%2BRFbXFefitw0TR9VvDM33LVP32prqjxYr5hy4r5FMySIVuTVBgahR%2Fgk1a1QnS1iS1mT3Dz7x9%2F5TjlBuJGJuoSW07SR&X-Amz-Signature=9f856954a80ded9c6f7c24243a7db96b07ec18d563a44f2e73fd800dc962fb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

