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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWG7T6K6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDE%2FOs906ssg89qwmWPFh6TeR609PIermr4xXp1%2BK2XzgIhAM%2FSypmsObQ2ONrAXaD3V3IJrgkuPFQy%2BoFfvu17YEsAKv8DCEQQABoMNjM3NDIzMTgzODA1IgyirnZQzU1EMDhXRVMq3AMw%2FujLmkzdxt3k0LArr75ptkfMf%2F%2FI%2Fh%2BgDI3JkAMZjPVwgExiyCCvVEYmvCtWeQb31FF6OhYGD4erxpPbJgnTlX6a9uvm9qcZY%2BiDnCdna4C9ENLQRAT8VLJKNQ7N00f2q7%2FHs0plCKZM4DeC7AtMBW%2BqM97RuxtNdzQ5c%2FN9sXvXNQeBVe5WzCo8jfEq8ifTXHiUYgFIfJfJ7Bg9J14vXg0dqN8ta55a%2B9ag17QpCWxmStLcQDKJfhlqswIreJ%2F%2B2BUb8reTAaqQt7Opg8SbzG9hasmNf3YIhXZaDj%2F8ljMThHH%2B8iVCK7KPCU9kdoeqV1uhNBpA1PAQaEYEWu6C1wzk4q1w2nUaJB93MaenAmfQTaeh6ElKJBYehJ04QconAJGQ831WUXtu%2Fy7MzyIVu7VakYOvfIah%2FWdlqUbjA9sSbD0eimm8CjJ%2Begh%2FgQnBnB1g90eOznOmmSmarHe1AGoI%2FZ2TLDjMfmoIiXyRkMDy2VdjWuQo7aK5Abwij1rpQ9Y1RGNxzUSXrksvzeTAyW6ReaH2%2Fp7aVT5Uian9fyU22qdaP6mgIZWr30UhjLoqHw9TexF31CHS1mA3rnZFtEotfacBwH%2B%2FZ3cSxvwroCMdKp8Ei0xUd5vwLDCzysXJBjqkAd6nFzSnN%2Bw5UsAoh5Bw%2BaYIeRd7Lh7xCtKpNDYjaApEj%2FzUkEblXV9NuyztX5H9MU28OfSYITwbppRn3pz4PQiCKHrtxemdBzQnhxX4Mae0Bg%2BvJv8a0qF3pWrrO100VGcOX2yi%2FXcrFip458aPxFO3wioCV7nqOBbTsJTsqgM7bwdYlggQX3EKmYzTTGJjUnu59DuQaA6B%2BIFXzMpVTHrLs%2Fm2&X-Amz-Signature=ac25d335d07694b9f1947daef31c4c82e800a0c83459c64b190d9f70b58c2160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YATEWDK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDWYaXZZDoOc%2BEn6Na6mhvCd%2BlVF%2BN96fgxGZwBRElu6wIhAOK9ZVPcD%2FTrr1QB36%2F71WOu8I2Y2HiC99QuZh4ZHtQ7Kv8DCEQQABoMNjM3NDIzMTgzODA1Igy4bWY5%2F7xylAVLFv4q3AO6F9wVdZrxb%2FiyrWYeSbcdQo5jXTkoK87e61A2ejbMJ%2B1XgYXh778%2BLYfr9QZwZV2bzZ7icTO0gD12A34waYAtkP0%2FVT9UmM0k2dzmnsMM%2FBbCig0ZThS%2F6Y7d400L%2BrW6lmkFsVpkhh52zJ7ewSSY7f3AObz%2BLXCx%2ByS9sVFiAUbadPB9zawHSxPmopcYgoysttToGQ6DDxAWyolWUBdfR6sCEazG%2FFnfv493kCYOMGTMkhZjrupcUUFnCo9GThONY1S8vvRAuv5tLcXH1RcZZx%2ByDOhs%2Bwb9th4dLrXWzAG%2FsGzhuaDLPMbJVdqG12lmnuwgA29fYRkkio2WfL7ribWrYesLw9814E5utJXHABtuez7oNTsf8uAwzAsIr57LRaT8kDdKg6XN9Y8APKsdqUElNv%2FAN1IpQgERaK8SbMT2%2F6icLy24ts626fb90cNMTnjwOAo51uAX3IKE5agl40iIOawtRMag8jUex%2FAZoamNilMiNoW%2Bwnr9R0TwwRAZriTEbjDlNanTwSqmKX8sCdezRDnWq6pqO2FV45KlrmrJ8p%2FJFG60iG95xpOOBvl%2BpEfM6wIav0YU5HiBRQy27vgNAVrxkRea1og9iFk0nuYb%2Bsdl0D%2BpzE%2FXpTD3ycXJBjqkAcxS8rWY1o0akH5Ggii0bX3NvCqIX1gr9A0HOwHUxvVsHqWOq3nG8LMvRVnW3sGb0%2Fexo7DAatJ90O%2Fcp8DBAYwUHmcgNFkeLLUUIku0NBk6NDGETFzm9x6Vu8W3BrZLMi0StPPvQrOIuGILJCPp6hGjbGUHQcfunKYZRa0aaXywg250NLPcz4shFZjtxIDg6HW0bDCSBrFucOqEcAGfn4VGNn4S&X-Amz-Signature=e8deea7fedaa3d62d41d4e252cc34ba10fb69515330fad1d50ad0a4d70590f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

