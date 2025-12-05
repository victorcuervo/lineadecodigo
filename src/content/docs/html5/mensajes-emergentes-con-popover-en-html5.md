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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KC27HRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn3cNzpwjTFCcsuFDDWT3jZ3CpbnlIt6DkP33zgAO%2BAgIhAICo0bEzoBr6gWTt6T30W4ybLWSupKBOcC1jak3XPisrKv8DCFsQABoMNjM3NDIzMTgzODA1IgzasMREfIgjJi8j3iwq3AM7Y6%2Fex7M2U3LZy00YwNk2jxcv1Qxl10qwJBzk%2FlEf4IbLmDefy%2FscoonaFKFI%2BhrpyVezJyDkOdih3BUA44uUkc9jTKQt4HFJgwfNymV78HqVQpb%2FmDQXqN6AKuduh%2BuU5CpZrLVO%2B7i5erF4naP1EYVCiKXbp8YlxjynGeLB0Bx%2Bk1T6tHsIxBU%2Bl5GK%2FSB9JJVmsICtTEQ0AvejG3VwPQCFVmQJHFjoDqtjv7rWtY2BKzuDXPYOvkKM4%2FKhQhNZ5dPJYyd8EJObz3215QJtQiwDv9r7p%2Fcw7NL7aCMmZeh40dUUbPyfL%2FFzIAX8Bd9HHg2NL1ROwYWDVJiLNwEPX8xjthQhOvEloVGfDHgDnQ3oVAK%2F%2Brk507UG5sguK%2FTTw%2BJ9ozvad9QqhxMBw4EiwEr9a%2Be4kHAWo0IKEdMrDhhkEI9WIRxTUKV81H5Y0yqdDRpmjgV%2FL8RY6riK5n0bZYkTO8iS8%2F%2Fayn3ZbcIvM%2Be9q8NN2eRICHIJ%2F8os2JzZLD%2FuB4J7bai4iRjsjq3rtmQ3CkoNQHgZ9b%2Frq1SpYbQVrvwVK633b6MVGldfnraLO7KSYcU3EygeTjYkqILj6Bt89Up0gBu%2BqWrtyV91MrOwC60mHtAl%2BGZE3zCbzcrJBjqkAc6jz2fX%2BFZHEwkhbvitzHg6K0biPp%2Bj3%2F2doAeLZWPeuFrijNav9i9kUbEoYlRpU1QLsJ%2F4cSJ67ZSwVl%2FCLAIPLkTtNVITdZg50WZ%2F8%2BtOBrOGZElq8lTKZnW4LRgI0IQse2z8Q3gxPbB%2BJCYPp0yZrTWhPYNyQmKSShk368Q%2FQm9J6OSJCq%2F2RheskBwwDF0jxSR7mmze9rAu9QxzymsvlODE&X-Amz-Signature=5439025138ab60ed933469fb845ea36d3b76d5bf97599546b6a9212063517930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2R7V25D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLzCXWnLsOKCTk7RoyyAtDUpQZDwMzYYXS4z%2BskokZmAIhANl%2BYTG2ToDd4WQWn94gDkaBer%2Fs8dLaOErsuJNBwG9TKv8DCGAQABoMNjM3NDIzMTgzODA1IgxeN3%2BMob5YVEZV34sq3APHyBD%2BvTWY4DixNvDhm1aDE7GV2B%2FJ3nJihiMg%2FoDuOG%2BekSb117Q3XnCCVIhsCi8dU5uFUuG3l3HUYteOhIWokYMdyjgI9WyBXht%2FafdkiLogiiYFzadIA4T6p56l2e3BjEfajtRub8oOPR1Io2%2Bu%2BOsOZm0dhLR3U6wD1JdL3mGio9NOoVrEEbfx6rY1WSI6%2BEZ%2F4SRcTpn8l3FVu9rJUY%2F18GAHFiixBWYGkqEue9HeMX2bMHX4eS847jco%2BzcpLeX%2Ba6g0PCe4cVzMREtJIvs44LyAWaJmoAab34sbykgHN7yuc0OFCBKWlRRMrEh8jI4e6q7WK9ReVGavxS9hHoF5G7sfV3SSg79veVnwNkZdpx9dyxR4yCcXxWDKP0%2F3EzxjvfDu5rNFd4A9qBXbGppHqxWWZGA6wQDghpkDWXg%2Bx%2FzyGkuLhc2%2FXEio2yEMrWNiD%2Fr1rpeNCxvfqDTEmRgA76CC3jzAkWdS6tZklM7zz2T3NN7TVSaNenScRJbn4odosBwllDjsURROXVMR%2B1JOuhTEzt6a1aIS8qYGkpGt%2B3MCceEvrIfQIW79qLcVp%2F0K3EmrR%2Bi%2FYYzdRb9GllpFnoCIb%2BY%2FH0ZkQH7%2FT0B6RyDeOk21zXbqWzCf48vJBjqkAaUOdAzJLgtLzfjvMa9FZ%2B3kCFqDACHD4OmRnq6CLRx9YIxzsr3TuxbZZP%2BM0NpqKSeKey1vDP8EIYwfKUPORA4b%2BldSLClAaY3L2wNcfb5gMpA6hFFNGmh%2FPgwi%2BPSYmBFwU8e%2B%2BbaCXbvSa3Fry2j2MUERNTwfEzo9v1M8hKN%2F4sKQPHC%2BWPwDMm8MjeXOM8zJagvt1mDdQVW%2FkEwEuHF3vpT7&X-Amz-Signature=1eafc89fd5c04d2a1d3a4fbc6ee0ce10b4b314ead1e01c466d626a85680c51b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

