---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEAXO3ZM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDl3mqVX8ue9k%2BxULBkG5Rp7pKTbVkSEa%2BPuRalBkSb8wIhALhaPkK8PCJaNscI%2BpLSon2mA%2BwN%2FxNVblZG5J785RBQKv8DCCgQABoMNjM3NDIzMTgzODA1IgwaquQQ%2B%2FzT7hbkuygq3ANEnguzIpBCGN%2BfEu4Gz5PktpGKQZry7zmeffC02bZ3iCVhZtQV2egq2kR4etTyzTe%2BPPYGkVmGGfE3UE%2BzZ5lnjsP5YbkXauFU7JFiqqmgtBzDhkJXkKnCVvAOQ875DDsP6R5i0NigfsXTmJHKjA1GTQO3nvc%2F%2BpwvULF7uiU2WwMNx5PhtigDJ7N6gsNJ%2Btk6ihzDLpA0d9F3zSkq02vlxJDRAHcDAdahkQ%2BPttYknZ8ovdI%2F%2Fr9A9H0SgvYm%2BhUCs8NXqScxbaY%2FdS9ubM5bowvnrP6tUhuQ90NmINhXA%2Biwdibb6F8gUvtUroY0bcM3l7XeoNOsUzyouRjwo7vfwdchA9bj%2BXNF9g8oG2DMu5NWzkE88xzDnQtEpjsC1hWPEsmM%2FI0VbMJJnZKJidnn7ptnMafPGkNfRC7UXSvwFSDJBa%2BVX5sO0129IXOgmVytZ6iqHdMUTmt%2FHt3E87tsFMI7DzXBXX48zaLc631l4Km0U6ws%2FonRpvv%2F5sdVcCMcoR44baWhC%2BDLOFLazvwqHQ2SqWuarzEsFa1xBbV%2Fb0rn%2F%2B%2FfY0IgyjrvVc8y8NMy5JJ6VNbotUSbW%2B6DQRJf16zClViNITC%2FZlDHKyeBn4%2BU28v4gQDqbJLJgjCzub%2FJBjqkAWj%2Be8ROMdOZNKuyIsr4rHn%2FJwNYa7nOUFUmpsL0AX%2B0YvKKKeOKJF0BSEkoPR8L9qXP3lr5a2skGa7wN1frQyweCH5mdW9FH137PxCfmtbJLLjZs4NwRXcLE9eedTYSYtaZ%2FPLER888RClUS45vJHRg%2FNtsmY4Ig6qCM%2BTXFrVPHBacPE5jsYMjxujj5%2BYNdBoL4CL33A7m45D85ZQrKnx7LYhK&X-Amz-Signature=5ab65c16150dc1e8813868affd67a6c6dc92dc4250ff652ee5bfbad710b991e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EBJEWN7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCSInLWI4o1dcTzVYMbdZvj2VoXk7tZbyrzGTEUmS0rFgIgD5n5bfwxjiBbIDZpSwx3WLzRhO0pEJ5jiXuJi4ggCyQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDG38AdO3vpv9JhoovCrcAyF4SSaJ5gYBvVWjdCpHP87G7Zx627Xaur6gK1uGRnZzpDRxuhH5fRcO5M7tcIHWG7aW%2FnzmuGllaKjO%2FxtW0jrQ2W%2B9w47dw8AGDVA56aMPAl5EZiASZMJ8AUE8XJpBUhmLvTDf3np7tJ%2BAJuTHzjoDQpJPpdkoXs9ulFaSfnKZRS%2Bwprhy9yWYQYqk9rWkbV05BRwAOPqq2zYrB8Mb%2Bv3bUXtzc1gOijp3%2BwYzMXorBFm3HSem5MS923qev2nLkLquVhvlbVYXB3BK%2FllBPQFgPZv2EE46wrDPy8AiuFBHgYFfW3aqSFWq7%2BnC4nQAzcdxAn9iJ3k220nf%2BNQhBoBYviqSlf43xgT8r0QmBjhI0Da1fLtSEApg9ltXYKrkLq%2FGXzTnyh7preBKow9gpwwIpJ8%2BlBZ7wc8zGSlgiDcTNs2nZDXcNFW5gXwjWBU6EXvq6NH6YKlwSGbd7pNtEtSE0aconhEylY2uTJjHnyYaqLkkCBcb8%2FY9RSoWRJMqVPbKJpzc4EbkCSSta%2BOfIrNL8935FbnaQo4X8HgLMQXQaRWUv2XfiDI1tbUthxzidZXPgCOaiax0DYlFlZovh6HikzlFWDFnBCYHoZHYuUKTj7tRZVjs1%2BHdr%2FynMLK5v8kGOqUBRJMBeKdiO8mNOfaTcGwTaBr5y7iu%2Fv8%2FH6WR8X1B8BkKCmjg4oOFopsJlKWRnbPqOG4uaCFgoly%2BhyCdYlWcWwnC%2FxHlqmBy1Arb%2FQRlH%2Fx4m0NMCBm9dqxyNez71UwluukH2OC7bsKiXvhqkyuwrZu2lO2Ymv10zicWi9O77VHntoUKJQgHl77wMTy2xs0b7RQqeBguLVNB7TrKie8ylgQQ5J5n&X-Amz-Signature=b002ae99b4cc89bec070e4ef90395804fd18e8952f2c515de8c2d8fa793e7860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

