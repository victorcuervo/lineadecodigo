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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DNZYBU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kYLJTLNOstcIKUD6D3MjgJJN2nVEdxpUP1bcd%2Bc%2BEgIhAKI7LXPpYyLxbiqpKkOIIV2BSdX7SL3YGtnyDYD4Ntz1KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz1i%2BUHcoL03vKJ%2BYq3APK8%2FMaPTPG3KoroLSBi0TFZxR01wyY8bprdjAXQrqn9gUK63I30pioLsRjWE1W6ODmruFLc4YNVVkYeJyw7tbPNue1rgslaFKhZ1oVhT9bFyZQKZ7V7q5jssR8t52IXismqfNOBDQJFdjDuQgTZxt3R7bRtJ0Dw651un6Q0b5HtgObuahn81108V8hBcDvlM26tEblfipWm8PxJTGxoxvvYuIlo%2Ba1QFGHMB46poMZgJ%2BsbU7XJ10uMicBa%2BpaagyZRaEDWRcTcDFTogrAfuKkEAXO233exFKrtFZOOmkH09ZqJor4n3EJl3rx7UNbXNcNaBGTujX8OXC7MpEwwDhyGj2JRfe9aOI%2BhVUHsbezdtATsVcczxFThg5Krm%2F9VgEtD0vHFEuQ5qeRv0w9JRcUPE%2FPSOKETIqDdOF5Y7Wmwn7iPgZtANT%2F6sSmqSYvu4QDdikLtU6RjvVMGAkRH8YnaanoYnwyldBW78Wd%2BlrMFC0Mt%2FPcdZnVdT6DyIMuVGN3otom0VJFbEE5uWsWeUAq0qQyeX6HpE%2FD%2Bhq2UoRU1LXa1Hq1YNbtVB%2F1VdNg6iiof2HtqCULf8PJRvIZ8OHr8djAy%2BeGqvmE0rpIcDrv95Lf1a%2BkZqS4e56E8jDiiN%2FJBjqkAceiNkdYXdCRHNSmt3R%2F3CGwWiGXRJURHYb6bFXLQtWuzhT2EGzKkTBbMnViY9Ot%2B6weyqMU%2BFOsp%2F8O%2Bc%2B%2Bdxk7gUAs29fARCrsvqre73r3j8dxKY6wCkggQo2F%2BczfczzoVpBM6bTn40EyOVHOp8JUQPsXCo9Q%2BGO9vH7g4ezt1iiUrJ8moAQUGwGsY%2BJKSU%2Fq1VLZ%2Bn1Qoj3PHrCBImKjVlcc&X-Amz-Signature=ec580faf2e0809cd15256d83da839d82e0994f44c49b3fcfb1162009f4e8d477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6KFGEW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjNDqVL5xE2pZv2efDN6HVEUC8E2kU4waiwZQd44X5EAiAhcAEiv0A9cXlKiJusYiYCTvTqcchE%2BhcMjHEa2ZwbwSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqTSfRj4tlmxjmzSBKtwDO%2B%2FupQbNDZcT1KU2oMBYK6dEQN4Bg0qeyfInmkh58FkzsfS%2BNBap0t3gXeXoq2VNsYf5WDSTWwHI%2F7xayyKMLVTI7oESCrG%2FDuSAoLkEjtWqP0uAjXI1ShNB92hZl7KyWloHxypZnMqHAEorFT5NgZKN%2Fva%2F5K1T5O4siQCBtd62q7G6xwJSX9ynzpUu3M%2FPWexiw2VlQ5ZY8FANTuhPpIpbS2EWeds0%2BD5lG%2Febd1dxok7PXL%2BYoIJ52sJnReoItgBDACDeG5OSbdGrQvn9kGjkskKCbWMZrq9TJUOATuRNVrrPfaRyR4itWQqoHO65DyUWtNvMP%2FqHgLZEm3h1voez531ZiKpbWpVlJ0PI7%2B4BD%2BTXJ0Z8eohaEgutIi6XzEt6nlsst2Qpp5ewXI%2BLPn0EiFUkEJ2giw3111YULCXnnXlW9RUF%2FdwGZ8xsXzo6O27s8SijfR4xQYDYW9V6PMjSBQXPidlpmQQxLhwe2oyPJRpg3ONuQ7Lu5NbWoU8lr2GlgQAWO93ijCASJrVijlq8b%2F5aIguzvAsJEE7cMIDGn7JLUdsvk9ArcGygUYPZ%2F6uI7S7H31OhJit4ZHgg3ztuEq%2FJGdqpApTDpl2l9Da%2B034Wacu7SfYaZnsw3IffyQY6pgGnDudlEiFCo8s4Ih4ZWnJY4fCb8tUkDqVtFnSPs2kHN06NztXkDrI5RTYXpGPyW2KF4zBw%2BLfpOZDl8PUKHjX0a3jTHmqMtYVeH9HdcHW35GGQQEkZYfDQB2nTZf%2Fx7P28%2BZ4FRGx%2FPCqWXR%2Fv9I1%2BRB69YYiN2V%2F1E3fpQgK0J%2B%2BxW522%2FgVWTAHpjcTnENmomjYotO6oM47hmCI3sPTh6Uf8rdYr&X-Amz-Signature=e6a471c6573975fe4b091b2efccc93f26591a963340b56fa016f9e67ee16cff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

