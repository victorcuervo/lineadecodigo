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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GEPF55W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0I9XmvDkrGeXmEFfvli0%2B51e98MUgQtNQg%2BGlzdr4KgIhAK6Pc1Wxt4uavUdJ7LjUqf0RZdDJ3OCDK38JRSch9CDTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQW4LS0IrrUKmrUUUq3ANkNskl8Qs1FRDG4D6RGcHHO7qJyY4ZFkemv9P4z2FNqP9Q%2FZ2sW4%2F6VFOaSKpp0BdYF24SKogVOpZ3S3S%2Bv9YeDHfWHB4TYOwb9PuWh%2BJeRw5OCVCD20RN4nsk9h6%2Fqao%2FlJlVwNxar5Ycis2K%2FblaXeQGl4FnIlsMsHzDhV5QW6zq6d5Ny95dmqLjTE%2B65E46yrR7r5YnRfYKnUtVPfTaMZ%2F%2Bru2P%2FL4%2FnNRjgRnsv7JKFxDcv7QHKXqaxwAclVL%2Bn0eUZ5h%2FQyzxwEQSTWWdR%2Fq1RUl0lubDGJSP2Mr0gzRGkG%2FVphwfSowQaQfaPI57hWHFq8gpaAeZLg%2FILjHcVvL3dmU%2Fvxzt6b8rO63yGhHD6kaHb6yt3N6MwM%2F4KvZrR9Lq5DG9qCaVzx2%2FcLozEYaISaH2BUEEZlzyxKq%2BJetHJI7WGDXC714Tuug%2FWrGSl6xH8EkVTagmGmWS5LhIeg%2BE6EV16UEdhc5FENxl6IDTbXCOGAy71LrtKZvJ0iC2BPHOoNhfO5A8cvplTwBLZgTULP%2Bj6D9oNDL5YRIaXTppmlPIID0trfuEZGkLU9kIdbg0r8IGsiSxCMz%2BaDxKkYdhsOf8tvakKfCCky6YOAodAngVQNtd%2FpQqRjC8mtXJBjqkAWls%2BdyxnqM2wxITeQEXNK%2FXZfnGdugvBUe9qTJodfwxV6Bp6XOu7GTgEwOVxMrEXM9hO8%2BcHSfskr0ykKpLlqnrLfUy0nMKF%2BPX1QKpzde0JpWmElcX6S2U7gByZ4LyqC5yMWQsz%2Fke2rbG%2FbgjtPvz1Dsi1L3OBaMg3uVNaF6JLCquk60aVCZtrxcR6lkEEDUOjZdFO%2FlEjo3Xn3sWnCSvuhWa&X-Amz-Signature=781f70582a761d4b3af89721b4bf6e32b5e4c67e9d28a166a689a56bc9f5951f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3FB4W2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnRmUjGXmKrGSsfLpJ7WMGhTXGSy79xxspUdaeF9aRdAiBFXp%2BY2NoZf4RK20vk7MMPl8sL9VYrWVuW47nqNztiyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXqPjYY%2BMfpsKbTKtwDVJ3TJBGPjJ5HuqM%2FijWHzu3GvbF7E%2F8UhrFaKUJBSz3kjys6EIMy4GR3qA%2BkshLmycGTBaTRbwc1a4OKUUQG8v3Vo9HzhXpBXyoB3iaI2AqnYgvbmfe39XXJBRH8aKtA6rP%2BaBlVf9BkprjcOx1xN6MeMbVWhaJ7XccWgZ%2BQNOmVuLeeGaM5QUyV3YrGCiTjGK8erR8ahxuyM5QixJ%2FM0U9PwowP3BTKeQ1uvOWI1Na%2FXPCQEW1Br42vES1r%2FW5OxBAUwYvdN7csm5u%2FaYkpWuB2h2ntdFevNgjlANUL5m7oecaTVN20AtMDEQc33LY4LHHoplWIamBdOe%2FFPYaS%2F54kd8fMX8SR6413f4ALzuJtt1ltLPF%2FWvtK%2FY0Pz35uD7lb9grksVocjmzZHJ%2BekEnMi8mqTBfkPekUMPCRHKpj%2BXn2PxsJsmibxbJY0TR36u%2BgUYkqnWqYmPu2Dd8cktKn0bDybrKQvjOpXWGAMtU1%2FmhQBXdo75VsQfK9%2BQ9coxG00NPS7sHOWvHey%2FNjMOeSCpBEnhyZyLujaqjfAUPI4%2BSLtR9R%2F3K9gfaVGSg9dkdp4da7bM99mA2d8G5UU3I8%2Bk9KxoVO09rVfK5tVBBTzeVMRJgciig9yXswqJnVyQY6pgEfT1lbi1F209IVq2nwn1klV%2F%2F5CS%2BtPl4bTn9CyK7uhbupVMc5Z7Rv5oT3eUo%2BdTZNyK7NBJ1cP0uOH6Q2O5DZH29wFxwfs8D1SjXTPbKsaALUxJiThdC8pUaGUsFJ0zdjx2kOC4RTFzxMMjVFy%2BFSxts5l6TytJrOeqHSfR3Vr3gNcESljJgi9j9L8XfoI8nueFYc8HSoB7DoOsaKHDxkB4600ki0&X-Amz-Signature=389ac84117d589e1ca98a6e065e364c593f193661300ab2d5af94c225548f2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

