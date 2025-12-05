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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCH52I4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtmY8KtX3OUaUCyUE6pS6vpP5hBQSHT5wpaYvr2RZagIgcxL2cSz8Jz0d45I5f7mb%2Fi31zfDnXq7TCiQ%2FgcVMcKYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMbYikuFGLOaBTJVSircAw8hY5xxdhgqP9lD%2BdxPfng2XBGSvHl1QtQTI6LyKTjSVLQliGG6h8zM0u0q8nTIsNslHQMjtHvoO4wRndFY18nV5QU4cDtM6rGgIP2%2BlCeJpDbO6%2FgksaZAkQRQyfHAt0E26KEdB5FPBK7sFzX73boKo3NNXiRn3csKNkkg7oG0HAVUbgdgXxL4IbFEoNlwIOAtVFiVeBe5HdtHhkogcU24hcQTuu1QvkUJRHl5SrO06TjOFf2dzsvXBjz%2Fod3yiZDZPiBxjNI7hL1W4AXr3hIxN35vGGCa%2BUZP5%2BGKs7qF%2FR%2FY8%2Bb20tD8UgJUwnr12T0ASZdJIKMflD54KPoyAKHnQdejfodxlG49WiQpRodH8%2FpV8SN2nIdtEJMYDm6eu5mR6u5MS8itUpy5EGH8r41rnsJa6e8MDeHI7ILeVyeEvIgBpN8mofw2O1LmALe4muQF3V4G75wbM%2Fd2TIYAjIGNMEOHNx1btqonu0%2BJApAQ6Da1MKdiPWhiy0v%2FsJOgfoozcmEO908VQ1j2kYVuZ10omKgQ98Q6XWDXz7c1cjh%2F0BflXuss6t%2Fwk1IWKJpRvkw%2BI4hj%2BWb%2FrxUIAcu5ZvP%2F2Yu5UDqMS2uCMD6ZkUUbRi82ujHDIU5NqHlMMMOMyMkGOqUB3N64o9IXReHh0e3tFNT4iYLSXRb0d8Bi38dijZGrP6BvImk3q9fkzBwKWxIOqkpuzsOcF9WHbMwQeIwxBqzE2A9nxwgzRpqNoD%2FRNLCW7gR3nDDRhlrtTtfgEG%2BbLf8Wfj%2BVslhY08PYK9%2BMWko8joThSB42nar8%2F4wGRii6jakSXd%2B5BveRr1IPKugHXTnH2NJF4dwajc8y92hMPjDJC8csXzDx&X-Amz-Signature=173e4dc479f348c536f65a0c4a2457e1b44edeeb985309e5548341769023c467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7SNZSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgP4j7kUJNm%2BC4ZCa0%2B0yAjzrpjYabyNfs%2Fy6bowRtTAiBieDNmPf5bnk6yjtDv30Mi1iZeTOdw7pWEQNnRvxYYdSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMhfGgCcNgCiRoOo2VKtwDOXVllWHmZFRrzMP1lAKEP55LhHRtgHzb2qbW74BAU1FmwKbNfCH9OOeKlam41nRjX57NxfgJ5JOQB2LlBBvWXNpDjzpdTJK8oEqkP4wMp707ceXZ6zf7GeLjOzW7rc3WevRJBfNuFWwcU8UYS1WsUC3xea3E2NTGWYysdFenvO7fBc%2BGRWXkd3hG0dPHw8pwlqDTQRpZXlmjuRh4ybR3j51gRR39HUGyJ0uVIDSyfw8EPFxBwLPYbiR%2BIuyQfNyE54xT7DVj4cQcHx62yNVCHjR4oy1owIJ6Ui159Eaq39zXHDA1DAiOoXb%2Fcsf07WMKaX4np0cZVcy0pQ9uEqdLiEw26vA6JMi%2B%2B%2BqLD3dhU3s1oFUQFv%2Bii1PmwtrrI%2BUEWPQApW%2BAKw%2FtuHsBTnHBf%2BjmNJIFuVwmnEdmM9EDLhcDtkiJNygy1i0nnA2sDN543Ktxpb%2FoE%2BJmayTve57b6nPWIBYbWUk8Yfpm0NOpG%2FYk%2B2LqncaKxuvwgowjKt7Bmor6qA%2FMkdYSOveylH97IAMDMmlziGob4kpK7H6LND4KQaPqPRBHWC2MgYBWZH4cyzSJSIWH4PI6eiKzpDdTxp3exwIW%2BAut6yS73cI40C21HqmfNGnWnlV%2BJKUwvIzIyQY6pgGAqcgietyfW%2B4iDpToNxJnTVn77EJso%2BS0GVUdmf%2BXV980%2FP6x%2FzlyIU%2BWn2f3evRI2Te7X7z09uWdzcP31Tw0WQshooGq1xuMIUJt8pWti8Qchj%2Bqhj4G5IgloHFCA41zC%2FKXY6Xuirs8SPT0wqXyKwpGiy9Q9lFRlLJ6PPrl%2BkNLcS10Q0Q%2F4VWMpKYymAquV26LMFaPlP2HEbFBlm2tcufsuOmP&X-Amz-Signature=96b5da2a4093268790414429fdf82d0251c4b95bfd43b07f14f05d9f3fa18920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

