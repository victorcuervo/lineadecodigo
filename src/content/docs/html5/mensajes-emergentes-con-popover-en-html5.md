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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWN2V2T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYfkAvrBN3MlTXDZTKzD74g6LLP%2By6mq1ga4CcK3k4zAiAGdjhQSb7vDg9odKBYhk09Tp28REQtz0cyVyjT8fXVSir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwM4LJTzAwjnkc06IKtwD%2Bn%2B6yGUzcxmZvcnJj3ardTadNecUUM4R9g6UQzhrPoGNY8yjk4rugNQeE6qeotE0tBJxuLbIQ8mXYWGxc74qa5u1ZYWtqHFGc6C%2BlhiMdbtI3vpBwxcLztWEnas2bmUdi%2BFW2aMoYlRjTnRXt4p87%2F6EdkvRvD0sR23hD0Xyg97dzxbD5uMf0mIXXslBPXe%2BoopllrrH6DvmkO53izBjDa0IeIhU8Exb07VQIGtRWxJwvHQ%2FBYoY%2BM2OgGj5QE5wDQQfmICDvvCF5cK76hmJ6vQPFIfEtBVUYGzIDudlKpgW%2BBbnOxbcr%2F5ox5H93c01B1x6y1So%2FoLs5JhbbHfnmTLo%2BHrCGW%2B4yFafR6fdS0IJwC66TQzkCfovuy%2FJK4dtRWzXAnRs4y9T22nMzpejintWePyeLrtw%2FkbhAV5v97wIa3lCmirVnjNydkOab%2BdxUPtoGIMQX%2BiUUugy5dIoecPEZzElW1o63%2FdWeJcNBZtDWsdZlZ%2F3huHKYGfkcyr4F0cJgmOF2KXiNkLpn5P%2F844pelECfJz9%2BFk2sFhp2LdF4uRTTDocGi5kZG06BN34hfFdm%2BZM0paXKDsvAecvOhfrmCixWiaDSApyvOnLCQ7abN0CnQw5rK1xjgcwyrzPyQY6pgEVCMr%2FqY4WcTw2SpxsiycRsv4ywSpdE4%2BRRbxOKYljXcrytxIKxOMnCM9%2BIkFQKe%2B4YRnFv38BiYIs465%2BZEpbBkv2aR%2FUqJmjmgmVDkt5kxkXwtqTUIg3wgbnGVLkXRdUrBR02L2IvTHtT%2Fm1m0HiRa9iDGkju%2FBeUPpdAfE59L%2B8ONvp5hklSAHFuZ1iEz7ifoDX443W%2B86bLoC1oLZ%2FbotxoPXj&X-Amz-Signature=df8911db013f2cd534d4442e190a5051ebeadc48b815014a1cd720dd92eef1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7SUNPR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchMBnQvNuqOrnu7QvEhWeKDG3xaHDi5i%2F9JZTSKbBNwIhAMUxVnhrJTGPx%2Fo49sjJNl8Z4FT5Jx2GFEjd0EcLaZ8PKv8DCHEQABoMNjM3NDIzMTgzODA1IgxiAPlL1yQBfPIiCE8q3AN%2BLHlORS%2BaQvbeFT4EKXYCxIyLFC0LGUZho6Tonpr7MzQxOpGt8jyb1CtZnIgJ2CAzdos7ZMIvV4exmWwknoO5q9frkoWb9q3MlcF1WWNp7CZmRHb1RFlvYKJxaCINv5p%2BJExhCPdVQMSIB0YNVCehchVzhBDuW6xP6VU%2Bz7Bf106C0c6WOQUx8P7Qf533MU%2Fx3FdjujXLp8v%2FFX8J%2FBXiDzFHl5NvzlqHg0i05B7EKBYchTPfZzN%2FvGIeeFwYAla6l0RUAYGCg3UEpzhCpxR0h0RqVYllpD3xNTK8G9eqFoi38eO75%2Fk58b30z9H3H8um8s%2B9OIMYk0t17OKiK%2FU2jSH5476XHiOdXo%2BjFBxsZtxIoYVF9p9M1PK9E%2FYH3YBDa6c9qzKhPHCH%2FbH2V7hLeHbyKmhwD16cPhq5dLGdsWf4JxbDPYyZtaSsN%2FQ5%2FTjGhq42b%2BSE2ImQQRPIh7rIaMZz75U9CEEe5uWU7nHiBdWpUXxOO4wuzYd%2FEhXaRUneb1K01FJp9BlpdY%2BrgQDocsv91gFxMTQ1Nn14jayBYFdkBJuyXb8VUodvOiWB1fvSIkDivounmjgvFAp9Ty%2BFA8WiqGKbrGGluclyPaqxWxPpxZOHZTrP5WPJ%2BzDjvM%2FJBjqkAdJX%2BrzWux8dV7WMdHn9Dbk%2FoPAJIbhH6udQM6SHARtahirbOHAvZLwzLgfAYyqRD%2F%2FLfWoxMeImGceZUlAuALM63q%2BpL%2FXm5MeKx9JpPFtT2MEtbudjdf%2FkWNYyzpr%2BiBb7SfiOupy25MdA2C7xiR9DO6Lrhhme7%2B5ugDOk7r8lzyjHsnhgyh7oADfVVO1UBUwyoTzyFkF3mIgu76MbAV%2F211uE&X-Amz-Signature=ecbb586c016eb9961a90e76bfe74970f81287b3d6bcf40c061cbfc922d2180a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

