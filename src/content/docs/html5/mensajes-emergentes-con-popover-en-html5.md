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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HDVBSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRkEqZABPVZTBlPoj19jgyizDB6P5BQsnsr20V91TqkAiAk2c12ZSh0hlVjxuP3oSsUbykZKSThRPqQaSq5de9ypiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHiOBAVMH9Z4rS%2F6mKtwDX9SuHEN21Do5HsoqHo%2BBqHdCv7Su7%2FMHQqsjsdGZylAoynCdn9KqPz5oUN%2Fhhmtl%2F%2B%2FiWs5cPcbau%2FDIfBoi%2FOgDyd0fA8N6zYL2%2FEOfqHxfnVF8RU3M5%2BrD5kDxn8Ih8mAJk99%2BGHngcCAzlPrqcTD8t8cImb%2Buzj64vPKyS8vqmhTztXuckke44DRj7wO1bTalrW382kwUUBzoVPNmeCjQ3jOHia2%2FYzhq4N4qySfW76skYSX3omeXf4%2F2ZFEyDOMz55UcAG4dHkFZHzxA3OknXwJuizFDRQWZQV1%2BNUzXP%2BFk7ZZvNkt%2F3cqVPgpvJPnHoPKCaLofZs4cwtgGUGm6osngylF57u4%2BIZlpex3BQX%2FIFb5geRNYs9D2Eg0g8Y4igXKEjkEBKlv2rb%2BKIvYgNB%2Fr%2FkFpmVCU57sq6aro5woVaT2e16ELdKVY0VPX%2BfgP4HZoJIX5njZHG2yb5RbCeZtfdbzEv%2FhUwKXZST%2BCzHVv9o5RxdOMfP2x3n15yjo0prHWbyO3ghkFNyBde%2BCyKVKZ%2FvvGBMjccaSO5Bp0quhFgebt1HlUu%2BxOPsMNR2849QfrHoXFCIaSH5oaoM6Z9z2OVcCjv8V9pDiGuKhRaQ%2FTeoUIf5xl2vMwsO3ZyQY6pgFn7bg83%2BJPzxFwjRymJzS2WZTTIfAGNJoSkEu%2FodzvVWvXgmbcqE4AEfzIDB9u16dRWs7Ak8s9nF7Imi2UUhxElC4n19kwkxJZzIakCoeQLX7JNfrHEHha8hXKU4G6cffMM8bEW1EKwvvhtZ6879bviz%2FBZJVHm1%2BOFBsy2z43HG2SZsfMiZSaMNx4moJLwVj52YKPRG2RcgtBHZFFlyQtEjjqaOJc&X-Amz-Signature=d44832e2f723394e19e7d51915f791f8de0c8a6ade548216cca56ce5ed0e8948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VX5RJI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVSxFX9PP6lEF38zM%2B2J0CQySTQemfuVqnQBKd61qw9AiEA2TK%2F7j2u6NRCecnf%2BBnueW4MsULvmaPdw%2BHoubDuLacqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOL3BH5%2BsIhN3BnnyrcAz9RFOgqCKLpJ%2FFIAi3zIHwq61JehRdn2CWW4G8denY0inh44ajtbYp%2FJ9IUOTtt4YEmi7e2WES1r1gZ%2FTRbgGjzf4qFHqMMT2Hqcs0sttUVyoTxKaBIN1xwsPsfiVdpIUDw9wE%2BO9uv33UL%2FDpz3Jt%2Fp0Pmtt6MDuYsEiSXlm%2BxdYA%2BCQtkZoRp615GzbaDNoxCmsPfnB0E407mOB1%2FCn0xiDSuHk3y3Eanp88m3ET%2F9W1adrV5H5Tdf1Bpkq6prAk29uViPBHzBJN2Mum78Eco9hzRX0dppyhx6cnMMUke8jvODw38qpJwD%2BRuh5mplhRYeEL4CKXV4F5F11wolQgO%2B1s7up8mk8OP0pyNlSOsIViF1rGFCmBJ%2FYNkas798oe9bfDJXTAS5nWOorJX5gghv4q42t4dnElORBpD1PA%2F%2BduVCxtZHnGVCsFNk6Op9Bt%2BVS%2FpSkqaiyXt%2FLDzq2SMGGK0CJjCOtoQyp1Oc%2BGoywJf8cOcaqdw6LH1MHxf9t0%2BK%2F28KtBDMBRhLFuFfVV7EP%2BPGJSVp5WeHd3NzjoVWtHVNr2ld5OzyHDOrCLvS7avrn8w%2FISgWz5ZUJ1xySd3A9dFAHUxpHyI5V2HCnwUy7G3pDs7qRN%2B%2FQrjMPvs2ckGOqUBBrrbQ8tHXIMTJvSA3qfQBMlLvsXLTqs4gbypYQUmqnFGrLEgndWgJr7hRwfUwvtqcczce3CjKk4Dozk2uUoTNG%2FAbNVbzVylA%2BLdRHJGOlO64TCVFZ%2F4Vh8UmbQoTojnB%2Boibii4clLsab6wv8XOE8Wlm8z5V%2Bcmmfr%2BeHWBhPsq%2Fwcs9Tp%2BgMO5bCdf64hH5vBOp7A8h%2BH1TFoZrW31wbVBxE%2BU&X-Amz-Signature=bc6c9f53346d5e2501bd5408c32a9048d44e6b6102a9570f1fbd323189df71e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

