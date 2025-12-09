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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3KG4VL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PpWBwX0DpvPDxYw1XLBacoOcAfy89jaOvFqLPYrHXwIhAOXgwFPbnRjTB9kYYCnvgGA3vHHKB1Cnnp0uO0xQ8D07KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvLpmiZn6UTdv1Xmcq3AOAOnsqnvcMQZEq9zChi%2FMWH2%2FThTtNWBPG9oOI%2FCLOwdUA89hClh1Ml4vTtvg%2BDWKnJ%2Fy60%2BAzuag1NDmtPrnI%2Fd%2BqhvgZPi3nUMO0BBCO8Yg4%2BrwtN0sdHlVC%2FLyT69mxA7BBXnS2swYEkYcG8sk89mQVbL8dMp%2FwqUX3Js0Kw3TZ9VgTo9UqIWguUodbZT91lUMLGAiczTqzKII%2BsO8GAr7dcs3cpwH%2FooiwVd3miWjq%2BNsWlP%2FNifxOuVKeWSMXEQk96DRBJ3GaoFN6RMhw%2BCeaIhLkq%2BwXzbOJwwqpyjolbCRqzu7wVmI8NqUOUtHp9QooMYnAOS%2F1o2C6JbI%2FatEr9xPqlQbwTB%2BYcsdufWlcZNAPcioDw0%2FLHAeJ5VqigurTOpY3Hb6bMIHYVBvtKj0%2BAn74zGumWwIdkqNDyDd5t0qF0285259RCgwdvFQR37oOMKRZvFx6ZZKZ%2F6eIXKt2jKYmx1L%2BYqg3H19S83NoCfeswaG86iXq60WJ602sXdPG%2FF4MExAeMNuGfXYIJkPn4mer6SFv%2Bzz3pZoyowdxNZlZe6xBQ5jJshzX6rPTGqsLhHA2VKTqRh7SAF4K3Zd0xOa5diTxwJKXLvhfS%2BvWzt41pJIPKR%2BG7DD3jt7JBjqkAbKrs17OftyPfjZnr1qrG0hzRS6Gp%2Fflni8PeIW%2Bky3s0UniDZWhqpXjBaQke71rzrz6oVTb9gjT%2BfrEEEGpiDgT8WlbXnFOvDofyBfcfN044%2BukBJCtkwdhh8sMpoRw8kTC%2F6N32begV2k0JHFGonsmS%2F42qzRzq5Hgw9vZ1w9z3%2BbjIVJpDHRVMTAYwnHjO3fHFwGA3ZEAXGPH%2BJjNgsDJnYZ1&X-Amz-Signature=139959f45e37e5b328970d26461cd9bd0e31e9f14b15df4bc081de85cbd69266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2V6MCP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbMPhmQsx6rgwcr50yAxK%2BxI5gV1vf3wG%2F0PG2o799HAiEAkkCcAbscjFKqUn6diwiwxjSA36jTV8wXmD%2Busui4%2FLsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUbJaQaS1tdFOiwfyrcA4%2BXuT01k1P23TLdwTMvMx%2B9CnPfpKOa2Ei%2FHbgr%2BL%2FYjLahJt1aDoKSWILt3fv2GLTjBxuOSmR7HOJcSmabaKbyNj5wRBsxla%2BrOvoc%2B3okkLTGtbJYDUMGXjZdb4Z7P4PrJutkeE22Hh8EqDw9Hf5Qqi9NwsT9sloNZMEblymPripnqAOvzO9cabVWd3EG4oRNglKu9lQQXacVHEbrjFlDZF1ytDIKKUx%2B%2ByWAw8gYhdDAmPa8Cp3fbfLfduHeWj7V1kzAbcv6IRSB40VlAG%2F9qpTJvD63BtI5oEUtu6AbutHbPQvqx4I8Ii8NFfO4Hc5y6oovPYU0g19o%2Bmi7ObuJmbg87xzvh6BSgqTC8iFXcz1%2F%2B8nyCJGRx9K9xFSfpOwTWGdjJHA1DZohaLlgRmZbc%2FZkhyd%2BFyT0Qz8kHEctjz5Nk9gVHfDv9UUgWIiRFzoZj%2FkbdHmNqw9fsrL1x%2FxI248XcOOYcfEnAoE7w4b6l2M08PjqX4f5ldJod7Wak4646DTLtDCpp9a7AyARpBnpgafMiXUxNfpQGYu6PamhdMEf%2FM%2FJ8NEHlr9cYlg3aMJ3aCZuGW9EcZc955Tx4y8G4W2yK7ZATDJw5Fg88masNzXpeSzLh8JugbwOMPqO3skGOqUBPwXiDZQ1MPq2AhjlsO6tv0WPurc4rQ%2FrGOBdec%2FfKuGqq5PYDuMVN8v6ue5t8bEt2h0ZVZHHLowcLcuofHrI5k5Y87f9sTxRcR3r6XKrjq8VFwVM4%2F9Q9I4cfZzUrFL3ej6ZFKEhjsYpJOEPaH3fwTPS7enr8zmwp08BKi42z3ezXjV%2Fdlsc19oNyiRVGGTFS0ZTYjGJb5CQUajHt%2FFU%2FKBy5CtA&X-Amz-Signature=bdd3f5c21eaa80d903a49404d4e4e5eb1423e39cd87ba86a850ce0126e2e3f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

