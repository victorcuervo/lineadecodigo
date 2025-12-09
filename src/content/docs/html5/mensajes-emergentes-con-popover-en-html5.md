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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF5HI36%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyR1ndNXUNQloRNQsXt%2B75hhqcgUxK20XZm9%2FkuEehFAiEAzXqgSrUbdJVX30Zg%2FtSlmmGbPE6zujkPHySSKmiPgSkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9XxH%2Fqmwri9cmBSrcA7HthIfygxTQzS2OjwFXo7FvV22Qpi1fTHQEc3GzUVLTiT7qPbc06MDnTaDy97E0RXXrKG%2FSiWovK2QMcsXbO2VzrC40IQ8CExYrl5oN4FSVYHGgxWJLtytMG4y8iLZF9G%2Be%2Bnx7yR5HJoFcBA3sI5ZAhL%2BAA6X%2BSDpV5Nwv5ba3X7Lgq69wJznFVPTJ%2BfBNnMksMY0ElirP1V2ss%2BFvyrjVEkLNLbx9f7IODSNpPY4QUY6TrLXG6CfErDLowD%2FOu6lm4ucoqOR4CtwXmLaSidYN2qq103lbulr7XYKUsk02pWAA69gtLjX2XevDE2bXP7K21hWVGnv%2BT0qlFnNguYlidmafoXJS4ox6BAF5QxMN7pvMnO5v2B%2BAEnRT4NkFSOW6HqN%2BFDwz87r6CZk%2FlqCEVihXHKpvpIT%2BJEl616nj%2BguwQob904ea%2FT6T%2FkfX1HTQr7ZfxA4g3Tl3NOPhQK%2BqZ5HfDXpK2vyWEkK5GuPhoIh2psOQIQ8THlWYyvulIj0U3xOjB3af9YOKQPkKQ5JAPN2RNDTPkzZS9g5XOPKsJZtT5wEMLd4fl1LiVj8wY7TprDeuUKQsQKpvzfcuT0Vr3SMSS2kOdjv%2FPrrGzkip7REt31OZl0l4Ah%2BGML6l38kGOqUBUludCLkLTD9LDRkrF4uTYPhQU%2Fe8wxR1SzPlud0UA76Iz%2FpA0dss%2BUA1z87oFpBJ8jXPjHE1DSZmDOPAk57xyXjYV6Oetj6qwucEpWe7IGkn6nsI1xY4n%2BmTjbeR8EkYn9VsFA4RxRke01wwib2R4LW19nKqFbLWp9bP3Knic4n48oVV8bEI%2FRTn8qQPmFzTVUBmpJyrW%2Bg5XKqmNshgvbrq%2Bi19&X-Amz-Signature=62295b3dc1364df2a68e284bff1b5d41c6df2a37e53cb8072301de551b780f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMOWY45%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCej4l9OgcUw7kZGuaR6EHzIEYliFRFtPLZ%2BPV1Gs%2BqIwIgMtNkYFIZFMWmXlDeLQGbcm9cpl4%2FNbRHe%2BB%2FJYMFK8gqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvjQUY0fQl8Glvq%2BSrcA112Qi41DKNRKn0uzikEh2XMIe8KH8mQnEF7AWcTjm9fks94HyFk4JoJ5NQc2vziTEoZ6IvLFDPscyKIqMskcCYgSZks3kBfxq%2FZgyyp8IN2kA7pQECFM%2Fu1wBVD2xEnaNRK5f%2B5QEk%2FLgn8EFTb%2FcX7f3cDWjOwRJl5Mwibt7jM9kQC3ao8kXa6ZGa4eNGn6c4gUeKTspb0%2BKq46XKHmfPNBgWz5wlD2nD23OMEKMbuMtk7CkjmuUDFDfC99HJ0a1dONPiE2Pan%2BinUxH0AX1eMOkf6justc1sN5lT8K1Fihc0PHvaX2hCdeUz1YRD4CvrX32iTFIdvUbk8Wc8H63t0C5OolSs1vpeTRd5yBqEwrhhNaR5g1ygnRDjke2Hseyodk8zUZU1xkJMheCwT3ySsJbuyCXN%2BzekvnNCQWIw9zDRNtFLa7K%2F%2B2uDgx8sC7vFw30az3B0R5zIi%2BXJfexDPG7%2BeZawpdDS%2BnfYVFb5UBsQALDqUELptF5bI%2B6tarvEDG1AT%2FvFQNnng5fnVD8guHUW4l71o0iabUrYMhbMBNwJXjGh%2FneyGo9YkvYb1%2F3qkuHrYk7F2QoKYiIuj%2BzF3B7OwrXImnCx2njjo08co2YCHoE9cURgn9e1pMPOk38kGOqUBNw5s8KOg7G1dm4WzefyI2BD%2BUpGQV4SN3fXxiLRb8pKv3anNmz%2FeMlIpJHg%2BFXSUTjme6HpnR%2B%2F3OmA9p5wubL3FHNcRxdJXUSBncPrNWbBXqdrNbSzgvWdWeEr0VnisiJOMohv7ofz0j4WI69BhKi9XpC3Np9RCEVuxnE6I9dfmkndWuIjVYVNqlYin0nSroLq3KMjDyM9qAQkbSKXc9Sz7mR%2B5&X-Amz-Signature=a3bcca15be08d1d352ef3f373b23ca32ca3ee8cd9705cd16831e703190575fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

