---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS4J4WA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCpT38HE3GhCtxMMR2kxhAxbeZ3Wq9BHFoszgkxFMlujAIhAN1WJoetbmYEoGPsNrt1gnp2Qk1mize6qnzIJFbc9d09Kv8DCDgQABoMNjM3NDIzMTgzODA1IgyzLCNwC2ZzhQvsTsEq3AMOB80KLt6InV9DoO6DTr6q00eljxj7%2BALM7dyFwhEr5hKGDPq1JxjgSyfKTptOp392nojS8sF%2BjJ%2BSB9CrKik2mxLAFRXrun%2BZ3bJdDus32DnIebk9UVW%2Fb64HO1Zeg140PvFkGRHyZl%2FEu4Z7M2yOmZJY4i5%2Ff4Waxz3BCcYZgOQvJMeDSWAzuIno%2ByunutjHCt4a1kPrW3HOImw%2B4StE%2B3w4nXHiTN%2B4G0lUYxJSKbP8Cr3Y9dX%2F2MY0VwuMFwiIzq6w5XgRZQi8r7N2rpd93f%2B3ZTZKJ6RxedP6ZqOV4iwRs0GGWOnXK%2FlBbe6o4IMSW3NEJk9QWXkz4qvwENVpi4KTENRZNwmujrfXdXk1xHfGGBx4cxWuyjCe0FdZr6TzIsLilAfI%2FCENCsHpMiqdzCaArhyQJXQwLYoJclS6Qmq%2BGXkETXvaTGRa6MEGX%2FB5hcUTvEsUxSpt0LnxhEIXuWR9N6ZTjDIWUz75x5rsUSiUdfTQG2rYxrz5PKARiY2Y76VV6SlnzX9J3RCpiVIBvJX8yTTvo2Mn9ipb69fxmiWiLLTHA18XpRGuoGFkB8OlVEx2CAuSyuEoXfEDr8zzX0CN4ixONWZAzQP%2FGaY%2BYOUMIyIVosOhrul%2B2jCE%2BMLJBjqkASNmUIjV8kFwi%2FysXJwdDLsnxcv0h3yKwVeRZMZPvu0Fo%2Fhg3esCvWHjvLq51CdDvMBl7HGqgKPw0wkE5Rb7dBWzdo8nBHNIArFCPBAk2hXs5j92XbuY%2B6QOEJAAweXUlwjioNhvpUW8jzkhW5QiaYiVHlbWwZTWk%2BsZut7YhkVW2Qg2pA5oWwsNSGRQ4UPJDgAnk0c1QrN3iCTNWjul%2BeJMIqbX&X-Amz-Signature=3f24e54962b295f4c709979254d770da7bb2be0da96cdd7c4f5222a7802fd979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STORKOUL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDG1412IfTueclCSxHm6ZpN9X7pPjCUQIunxUxrG1rtOAiEA0V6gbkIcbdoG2111J0y0m8gpLOP6HHAq%2F6YhTWFWiowq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPeeKhiTPZFnXYj%2FhSrcAxrOHkPLVJsAZmL6xrk8bStqdMSLQGiy7NFlU1gSLgoc6p1VCjHESnNxbi9BACMZQN9%2FzkmvemijAgVDx5SU4r1XEkrdEGAOyhjCzWRTWBQ4OOfgVLLhXluc%2FTJwm1UencbF8O4egMa36MmnZctld0Lq0jReCUsn1X5IJDPQIm5aS35lZU5kt%2FWlXPnPJtjiWJgWro7m2w14cbZmjMmWP%2BHL5AY95d8mDfNEWO4QnAiLxohqHPEzB4kIrstckxWBv%2B0XLBGHMnHOLxSMH2IXcsWJyduVmbmdZA0Xy3Jzk%2BY4xV0pOR2q46omtokKWb1MZeL1%2Fa4vNyS9DFlc%2FeV3kCb9oJmkBu%2FF9A1fTGT%2BZb7YfKDtGGWWz0a6B7rzUN59797qlTjjE8x38oa7a8Bfc8BJ59O3YTKlyc3b3rDUBSVRMo9%2Bme3qXefydn6g8e34ITQwrGmYFQZqAL18SOyZ%2BeoMUKCCg85sLz3RN4oyKIxKaEx0Q2d2UqKJ6pw6LpTz0eE%2F%2FvxPUEySkr3Io0khVfo33Ef5hCuxGzxi%2FIYkibW9GsYrv%2F8Vsiss%2BPdYJS7RdW5jh3UdtNI5NcHXLdaPrhXPfPsAm61%2BR1h%2BwswiwnQLMofyei5kS38BKPIBMMr4wskGOqUBABn7g9FhkYcc%2FVcAq3lTgLr6visn188AQm0PUPs3%2FC5DLEtg00FQq751YyNkrZE0HQL3g6ocQrSt6Rl41e8QaWoOnPwK%2FsiOVZsMvYP02FkeR04WYHUTflk%2Fr%2BQtRDGBijGaGP%2BPAy7kLktGy7RXHpjFkyhmayCx%2FK11ZKllTS7w2MlT8KNe4D5H7B6hOQ0LorpVIychWObn46jbogFXL1SSpkyo&X-Amz-Signature=b7334178586f342791b0a4eb9a28f867968794ff00e03221c8d927027127e879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

