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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQ7OWGV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVdmwfken2FrT96L474gJMZI3GhcFp%2F672Nhbk3KyVAIgbcq4Qx62w0ybIKpwPg0mxwJjnmUCxlcCy4zdWR6B9ekqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhNBscRMV1%2FxudNLCrcA4IZHVLhqobiv9yhRtVP5wCO%2FS2Krtb5aQw6l16%2B%2FKkeWVfBjrCgsQwASTHWLnUY3KQ9hnuN8Aai34uUOJ2ljvWQU3K4C%2FSLFbriNp7sSMTUvNtMSK6HI7iY1USiGKOS0NUy4mpd9F3nlZn6SkKTcuc2rz14VcxPzk%2FDiWlbOCoEngzdKNx7n9eAUX9cdQi%2B2uvyttVeXgEPNBTRZ%2Foeq9GwBn%2FB1WwLEqYqCd%2B9xDm74f%2FaR69tShbXFW1jCR29N6ho7OHXthR8Fv1MODFzsfnEBRa7i9pvJaTFXP72ls1CLADDMQRHEWBkmzlYRd5QMVJk8A7jTXmMxvQvY77YE%2BhUTeJOPbeE53F8Opy4NMoO2YbkykyHgYsiijzyYqev1ok8mAHC0fBeUHu%2F8dEhKRj3UXmTyvNnLgMFpX83Qfh1VxWQOx1RPi8ciMas7J347gV0yh01vfUNQJ8q%2F3sQ0VO%2FRqycNFyr4A1Hse1M%2FVXovPPbn7ZD2gjh2Tvt3bR3K5iFAiQKx3npsyAROUk7WK2y1P7k8V0hS2ItC8E%2Bu1bCJ8Por3mciNAri5U2LQtzobbv0KTCQARbTS4adptZj2fNPF%2Bcf5ZgMnPvtkSXl4WUQGiAKICO1Ugqnx4tMI%2BQ28kGOqUBF93eCpAjpmkynFEK%2F7RQKl6ExuopX7xqkPyGi1DJcxlwW4%2FC97ies9Oyy1KGGA6kHjU4Da66uckR29crHIYVA9Ea2wPy5PnSA1Aqdmziw4TCEjcX4xqt5wy4SaBj3e9EM41Hi8sJ67t1yphfldvpzrNVB5ey4C0PqNb5qlrvpb17IuFgGYntvt%2FqntlJvhQvP%2Fwd2jJ9BFi9uxkeHN7LV9P%2BqkhB&X-Amz-Signature=ea05728538846b85e5314fb2fbf53f259651da97a9bad759b10fc6ae6469c95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5JDQWI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExIZa8Tu2qBygo2SzGWo5fuH0IBZIealZ9I2iXC0aMtAiAN1nvD3KWPdznlCkjP6M4VWbooBNe0y44L6J1tW1CKpiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQnkv1eWeZsOB01SKtwDpNlpSLJdb4bRAGt1AMb1P8Mqn9tnzHAMUJOfwO3xnG8L4IhoKx20AbR6YkuLHlb8M%2FpQYaFKaWAg1LKxEuQ2F0G9BYaFvuh6f84n5p2nAIzKFLTTFGXpECRjt5jA1SEu6OYQ9aaL8o6mnu9TimtCIpASgfGEeyFYJ5onRxhARnhLaffW3R0wXtBqiE6pAkY1HE5JZpbXXd4t%2BztNAblj%2F6sBB8ciYNnfdOmFlPrPToAb9FFqW0dk16fOTXvyiOm0DysJC83HngtZMNC0N%2B%2FnToS761fxsByaNb8PUqkSxLVSh5B0u3ixGvsecjq5i%2F6c92KsVHGN3wLiflEit8%2Fxd0ePoX6GG%2FotebOQ0bFIdZCk%2FchhAKF6NbgNRwVrbYpLYAMnMlxag1El2Lr9CPiwoOsnj%2BlIW6nQ0tbXyaaaOHckrRl%2B6vU3FZ3LEWVvP6g5bBVxbPHN5AGr1PZo4sO00yc8jkNDbemv9mfZf53KnPtesybDoOMk4eLOZP%2FBQ3oBh3OHJ4hrG9EOBRcTu9r9AUJiIbBGv916jcXXbl93tZG995ICIy%2Ff8RV9h0uY2gyhJYy3p49hVI3MesXORH42OB%2BXZoflZs6mH9f0DnKHXXYCIFvzn2gJ0XBhjf0w24%2FbyQY6pgFrMkYQAI%2BLJA%2B2c7RE4eoCYQikF7s9nmlxStHJ9hvhCmy1yJeg3Y9xbFA3ghazPw1wkyeSgRUi6%2FNOFJzfWgOFVT3hIxLrkmdzHtR8qjUfXyi12ET%2F4kfBpCyEafsyJqUDI%2FaorUbDJyLhYohmV7MW0dqpvh4DU4Un%2BqT1XlhDnGttRpbPRp%2FgVdjT%2FdX0c1t1m%2BjZ%2BORZ8cf13zfxbpnQHEyr8sFx&X-Amz-Signature=99562d8c937606243bfef0fddb675b04269c812dea039b46ba377a95448895f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

