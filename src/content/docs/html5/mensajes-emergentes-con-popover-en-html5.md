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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPFRCIV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6Zby36HPb%2FcaxnUu8uUAEKRk0czKNVJqSh%2BSA47ixuAiAX3MfGL%2B0vPRh1VRkHQYG8HK1KScLTWUSZtfEBTm6c6yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMZtZFz%2BRIi%2Fy%2BBbxJKtwDYZnAgJNBohCdDKJ6zVAI11Me%2BKgHqnBW%2FIEffojiigV4V0LvJENGO%2FLnO6ZoSsqLpm6LRVsnbdRwu6vSzS01j6EwlrYtMb5YAx2%2BKJwz6e3xvxFQ9Rina5GQQQk06CuG9ugg2COy4fC76g2zwUP48GLtOXEL5ELEvUxuZ20PwimCxZ4enmQ%2FE5rzxILGjEM%2BgH5v%2BHv6auJPMpaMaQU%2FntXC5bqF2E%2FLimc5hRjKu3THXriRyCJ8QFR1J2a4UjmQp5L7HEQRVm9JlYu57E8%2B%2F4gAHE2Z2KckiLtLlXMl%2FaRYktorQU3pwd1mM5s%2BJFlPASFYzSKhiX%2BgPVHLux7LhA%2FrhISAmg%2BPHU1vPj7KQKnOBg6t5l5Bqn9lxrSGv7FecsV4TPbwQjICE8FenRn5dGzSKcAdN4iwc2fGn5XuIp4iyXRTCQpDlQvgtm9cGcfBf%2B93F%2BDyB%2FPzmN8EWXWJMuI5kHHO4MLk3M2ic2m8QVVAOYXSSkTtk6JTvjzmO2QPBr4zkAeLWJtO8qGvCHc9N%2BIP5hZzTe1YFFufaB7oK6Th%2BVWUofFd6NJ5jmqK9hzd8uRqCyXbjyYxDnHW3y3KD5HTgJyek2V3chdC3JOrY3mrMmvCz2EBgI%2BpvbAwkfTLyQY6pgH1bxrUcpm2Hr93kUW7qAk4zFbhElym%2B5YlYFFqnUUqehc1cTSwiJ2EikiCu8NyqJSs8zSgmA4xdpkMuyw8S4%2BOZ9Vy5Eyqxp7q23nEBM6XOwzE2iVavU6lQW146qExU%2FbtCInuigYTGDzZv4%2FuqOb1x8GrXy5VkebkCJ18QlrhE5c%2FGj8zQXny4r42BurqEpj80rwI3g5kacozF90SWyil8Bas6TaA&X-Amz-Signature=bcfc233ce0a5e068508121ed66fa3cca80993b1fc12f39cf8cdd2841e330127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2L6R42%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6C7GG86F%2Fuay6BuNFQVbmhQYoox7U8%2BHyCs4lRhMw2gIgE1v24DS1auR6c6Xta9GgQQbiUxaa%2Fb7xSAMU5DuYzTkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEfZsLMjO9H59kp%2BhSrcA3V4w2OZpqgrN%2BZMNefvErBZCGBkeYMf6%2F7LT5xGcS9MoI1XZJrhQxtH274KmJ50p0AoWUVGSzlCadwkKkhJF2BCgncQP5FLnX%2FbLnyeJtCg4PAXH3xzQtJJGajn2OvIURhGh0X4xGWu43Pa9LsNmXNNhP5nEoVqDm3UrcBLJO16v%2BfFbU9k%2BaPDo7mVhw7Msbzjl%2FzhghAgxpmQkCGdL9EXfE3i%2BQXaW17CPdJTK3AA4y0M9PVy5hGRIuCONvUwdfljxO%2BWoofOGQbGmcUTflR4wFOkhiBKjppnVYGfbt2zrnwdM6PGuSPQAmW5uT%2B2LIF8w3FzIQmA7iVaAv4RCui5ZN9hNW3Z12B53EQ0f199nqdTtQTy5%2BO4h3DNa2ZJDZ%2BCApNKWr7%2B5NJS5C7C97rMl%2Fand%2BRI%2BUGvJZ44TTOi%2BEp1JXhbpVbRGf2bbYVPInJDDqnYeWdEjsOz8ztw5YutDRzvZIJ6Vp8Vq1%2Bj92Li809MEPYHe6O74idtbtbHECKjIt%2BreJo3U2dNjWwLnrcrAuQ%2BBdsdL8uwCIZhKXW8xoFLvvpNtPRm7eJaf8iiWZiBh7rpfMUbE%2BAbk34SKSVcgcS94FSTuhCCtUnckvGXmRBNRAq%2B563a5pWGMIvzy8kGOqUBcBzmqKpVmumDrbHfTNruvgFc73iPJzX2UeS4yYlcsxeKM7Q7xQ4%2BWEefhH%2FJuHTGfHBqsfdTkL02CnW3roDS%2FnNCO8Mr%2FydoRkkoU1MrQEqm%2FGE4Usegp608neY3JJOKyvdZqdeL1bvW15PHxNJTqzHuD0xKjdFwmFQeX5sJw7XLgnXnmAW4JAbjW67k2Elak12awypy6if0RWtnt13jc7aui08o&X-Amz-Signature=6c893fb8b2aafbf3de1f17a7844e8745ed22d7bdb04b8000b2be15e1945faa59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

