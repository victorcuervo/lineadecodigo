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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUGJYWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6cKqy3%2F7l3tKSwQsKiG0vFxsSw2sfuzFQE2AM%2BzYOBAiEA4hlQxPk%2FQiStNznhwKwH%2FnXA3AeuYaCaPM4C0NDHMYUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFdkS829o1jRPkp%2F7yrcA7KmY7Bx2xaRMBgD3tBnF8i4Y37GaPn67pf3CjBhXnmYarC289xlUkDqI0h3Klc%2Fw7INt18PRnxC4NTgQVpK%2F5wsHxnRThxP1iSmQsFujTNBImDXn9AF4OauUNbDHUgi2nY6L5vuhkiO5HOVvLw6aGKLEdrCGt33FRMEAYhBlpt25C8UB%2Fx0FAISh%2BwMUYLMrC0ei3vxbw0iMjBCgo4%2Bt9No7MJZEYLhlZxuumcVnYDPg3z3ajr0As80euqklAFPmGl%2Bg6jCQUFnZyaI1OSAJ2vLhKnookECT1YHZd7I1PlMU1p8OfAcKgH%2B6qwXkqaPz%2BW1DZUyRKgvW5WoSeZBLMso%2F4jo3xIw4wf8aoU8RO3wNPosape4Cq4N%2FYdjYesTx0IWxFUBanGD8zTzOk1lL%2FFfvTrMZ0NRAoV9teX2mxrK2KdagSBUGaanBz1sbtN15GpLg5d1FHaLSMLVrjFsxUt2RyYBIZveSF9srpgSNx6HSukcbl6EnDZvGbuc0nbu6oEqj2J4rHixEPPW7XmoW0%2BuBBrJL%2BumHE7h%2FUZszhdfaGjldM%2BDuzXVJTLqBBNEUkpfFbro5%2BQObBCDxZVeXTYzVE6cX5KftpXTtbioawXoq02O6vcufUQovpPJMK7U0skGOqUBW6Kl2NjjP1M4W%2Fstq0PwT%2FocP2lbAzWxM8i5z6nqov9vf%2FhgrlRnaiXiHiu7uGSxSyVnBtYGcVNED6h0E4ZOxdfbweZK%2Fx75%2FGEgev2tsbm6nIV5GwBuHrMJMYkIywQROvUKKyZmtkG5Cie%2BTlQdyZgpBBNXjYvqf6CExqE3GyBiaAd%2FFYp69jLq8qG%2BO21S9lzEHPHDtnHMbj8JQaba6v4lUsxO&X-Amz-Signature=641ea84a5be09b90e66e35628374cba9f3ce6d648aaae8db52fff65007f76111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH66T5WL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjOAXrTVkXR5D8wXXK%2BsELB2BMuX7U6mZeMPJetQ8D4AiAgAC5ChEwwdDbmkKpD7yQILCwtmYL%2BETCYoY2w9a6VUir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM2R%2FwdqOF%2B7iP%2BRCQKtwD5Z%2BAX5lWUiUXfmE%2ByGU72rNjzYup1J0jsltVmwR8Bezf6GvASJ0bQLKdYfN1nTKxS1K1Jq43xIonrB9AVMNE7VFPSuuhiaLGzkmAUc2YtddEKLO2S8YI5kELeSYITvoIhr%2FuOYUQ4vRex5JSb9RJ8k7z4h5QEdEYi0Cwmo2neiZY37GHfyltEGV0lOd71IXq6uJSX%2B37jI52t%2BmoVqztHTGePYbGm%2BiKBWPLwSs%2FbKriPE71HieZJS05N4LDjpcp4ChL3GaD6GHpEIWfjTQtMu4ryejVygU83rWexBDKozs6HvEU3YCFiwwrnsjAbTrkHSLgWydJaDwnCDxuMusFDwsC2l0GTVMuL8WJO3f%2B9KX4y8ZQaZQ1c9OY93GeKbh1gt8senBbxTjEyZHJdeBqvsq9Fpha25iFkzBDEM6pn%2BlROceukp9UwK7ZJIPmtfhXwtISmYWiXakfg%2B1nsWN2kJo6JTOi%2BdgHJs86kQhyHE5EBTqdyQcahb3WTchu1VwPKQ6UMqUIcUn5J%2BWR4fvW6J2YAtTvU9X6mMAGfW8Rh9XKLnjFl8kDr1vB5l7hLlWJRw6SVfouGvqWfgqEj3kJfmXxknbsMZmstcRlW6SUzntk0D1lxsbELuCdZG0w6dPSyQY6pgEIxW%2B5WdixFPB8ZGnVWA4K%2FU6XMPsOVh2iGG5%2Bcd6DmaYH1dTIhiTfLAgNM1OJS7yd0C%2Bo32f%2BBIRnE6jOcqzyuxFVE0eFQh1mfsiCP5hwwqrj8QPtDQBvI1sTgJvXhE7iCr%2BsiK7aXfzqJ%2Fl%2BNkwyRNq3UBdmybBXzeIeXGTGOFoPCpVw3jL8Kdq%2FVEW3Tk%2BReq4LygkOLWaceC8kpk7ON46oJ5b2&X-Amz-Signature=1d1f1047d78213d5a80214c1c4abb89b23117a4b43b08f57f14ab81da16da69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

