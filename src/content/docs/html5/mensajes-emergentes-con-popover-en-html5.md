---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6LJ7YC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCajP32TVmLF6yo0x4qTlbI4zjk3Qmx1qTr9MlBXHlk6wIgVovyhuDN6EflaZxvbKCfLcefIs7QMYniW8fF2G%2B96S0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOdnbojO4R1ZQriOUyrcA9fpLwSH9BZ9rk7k2KHUdufbe57Cr1vOZpcQhS3fo83zWctFaE%2BCBXABFO57vzJ%2F03JNsOCmUyOn5OP4Xepd4Wf2jdD4P8BVp1BYTWSmAujLZpA6RaKS8kqnZTdl8wpNNhmdrV3nsDSFd05lpY19kZ3NwrzOLWbKSRAtqSFslm6d85JFBl85MG777cYdOuG%2FkDieyfjtwDh8Jj8HpvR3bUy6YUjAg7lO%2F%2BLr3XCb60s6fjSMLvisWELNcLsOmi70zwypu9oC%2Bi%2B3y%2Ba2aAYe9gqlilWPELQ0Q3UbYW7NQ48twTzcnfYww9ej8LyAjVemRedvEEZdL8vB1wYp%2FRVB%2Fb779Xcy5C7PJgBaLXSGN6ngB5DNaG3fVTPCrL9a1N%2B4kzaA99EJ3raYdG53Z7e0aRxUniRCpFW9BiFQtSg71h5PF7sPtTJV8%2FPCkh9Iu9dVdgMsHl1UwUq4BSy2tJ4vnzXfGp0u0CHAR3LnhBjv%2F1oxgkWPHCpPY4CV0%2BwvDpbgBjtC65wqp%2Fraz4clqCM2JEazPBbBz%2Bh1%2BBMv4VIXDV%2FUPgwYu02EMRPlUTo%2FB8frUFDVPf0OpZm%2F%2F4kH3%2Ffl7j4FuUsj0h%2FD8IQVg3dshq8c90sazMt59Q8SYmw0MJW9wskGOqUBDzaF4cRA3aWUuKK41OGeV7HF0EORmtL5HwSOovDs6loADi6GhLpra0yzKhUQRgle587iXHFzdIClsn1yy38sNkDJ2gknwCUrjYngcV0v%2FDW3HXOPZrJ%2FAQKbfw3%2BtdpjeoGHSB7143nkmsrS4nYiLV6qw8DVxODhqSrJFOv%2BsifCryTM1rsxB62HPCHyHWJcjqM3GFELp9Yf6HGweddgdJrrjjV%2B&X-Amz-Signature=466c9d4b6ef24a06769df5ce8f086c5c05cd2675ff726dece055143d8fe929a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVO34BW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCgqeslKrJT6mTInpsnx8kmnspYZ5n4B76nPua7znK11wIhAKCj9VTrxEUsxO%2BQHkRny6HUnPcjbbXgQ1yznb6KI68MKv8DCDYQABoMNjM3NDIzMTgzODA1IgzxXXmplqQIZYlQyiQq3AM5HNzjrH%2FmWGAqqw9KKtmB7qAUGHl9r7xljcJgcU48UkonW2AH6T2noRWgbvCv30i4nr3tPrR8BNVRm7cpzVFqJCVc8kXyjU2sLFF7kmAEjaWc2sMm9Mqqtyo8HKjokB2QPY4086K7f1k%2FttBKi%2FWpy0AszPDZKiYnXfWTf3AUKc5El6gSZS%2FFK5tDAYWs%2BkGchNZHM81jYAY6mhqIbX%2FrMmQIe2bKZOwGIPVHv9DFDfh93xBku1TrnpDpZ%2F5bQJO5f94VqCL0DMpe3xHhT%2BWW8GLkc8JSPmsPQmg8ZFxrV3%2F%2BO1dKSPk%2B4Jokcsp7FQWl58DXlxh44X1AH1wiMf9UT1wf%2FHK6uut9%2BzxMObOsu7UxIagG2%2FbLonFU8tt8lBmUs3xVKo42Ybvdo97Z1GUPPYPhEQUT8qO4IUimnVwo%2FeVnm1GyM%2BxYvCrUTl8tlF3h27QdF7AqdHEQQZ3%2F4nCJMBX2KbYDl0FuPRB36Z9kuNsWxaNhqKujoQazdqrp5hY1731CEHLPsvkSo0W8zQOaoXnc68vKKj%2FZaP88J99vNW2VFNuNLgB8uIzPy8Cg5tHR0fM4hFQxGC4htlUUaWn3fbOewY1LRuYApioWOYFJAIeFjDfZsIXW8TWwkTDYvcLJBjqkASaKOGIpCPv%2FiJ3wP%2F3lrfPsoLjS9Vjy7ZuQBZIhPSLgO5YGY%2F49GzyBnGKeXwbir4PyUuYWMYsZGafalQeo4ONNBHbjBgIRIFwybkn9%2Feb4g8eLqhwNtKGKpcCNwG3c1gX6N%2FrVL6vuZzdC268Pf7Ia2a5EOGFk2xHep9l9LgHZ2RPDlHkwC38uY1DQQvijssL0nh6HOAgOb8771nUxBIXb%2BVOV&X-Amz-Signature=4176bf5858637987647c7a0aacd87044e6c3eb67394497a50a9561a547f4aba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

