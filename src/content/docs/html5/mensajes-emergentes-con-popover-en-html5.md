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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQKDULI3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8wyzqZE6Xf48xq2BiC19sxkzKH0CjQOxmec52xgqdeAiAZKCgljxi5G4Q7Mf8Y3ohZndyngNhCo8a%2BJ0cgulLs4yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW9ZoxFrEu4RCWZ3tKtwD7C5DRfandygYzP9pajpFkxiU6tJU3Ut3GTISHyYh9MQWiHcT2fUUHH%2B2voC2wCiY0evIjuZqkXKswI2SRB9LzBTjrYVt%2BuSXJl1NUiiz7zMTrQ6BYOYgFD%2FA5%2BK4%2FQ9hbbq8ZboAssAfFmpKlfMns%2B%2Fuk5M%2F7IvWDpGu3%2Br7oVA4riW70yfenHK8rQpiuldzhza9v5lJYKshGK7UR3IdZARi%2BFg8EcIQSO0bCUprbtf2A9mYIqnAIXl2qnVdKjLh3Dtqw5chFie4T1BO2o%2B%2B3FkStE%2B7hzNJ%2FyQuqfkr3WvRL0h1gPQUHyzDCejYXMtXD%2F0b4F6Qe9gqCsSlcjnbtotQCe3S1BCFZJeK%2BqiJ5F%2BE2nkz2OY%2FB1eM3NHvOdjYFrsccxhDjBrbdke%2BMo18nt8B62hhajlPMSxyhDGElcjRDVUQ6t%2BCxy1t7kMr7s8U9KKYkdFqAGmcfhN6ZflTX5NmXPedX%2B6Z2Tgp9iPzc7X9En%2FKmhWFJiBL58z3TuAaNU5vqx87aMlIb1UlMB2e3BBtKeoOLNcJ5r0c6BQesYxSDkkWEip1DRDE8cZieNSGvhcg4DzvCFKqtL4yfT%2FEWZJ5SrTojnS1WafNFYnpHyWN7LKI3oI3kfr497Iw%2F5PZyQY6pgGJBa7NFOt8r%2F9TCAC8azS03Pipa9pRcy2h07RTwIJleCx9BpKW9Q0rrMa7LjVCk%2Bz%2BpsFXxF6favDaTDvTNDBmyGHXvYOZsR4%2BDzo%2FVQDYx5B9eBQ3ZZ8QY70SCBIUujTsSo8Wo56rh8%2F07bnoQyteUL5DOJJpFLXUSvS19S3qkmA86RgmSvMFIwhBzFrKAcQ2X7BzrohxoqccR7VY9OmftgZMJEKS&X-Amz-Signature=12cbca82753264eea473ddf3262a22bb33f8a378081731b5b8a7a7ad80122eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUD6RDCS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKUBCGD5BEAD8sXY49kv7IWnDgSrTZetT0Gu6Aiw5kcAiB723K1oDPXDirixvuwTZVNOpMmzp6Vx0s6yMnzCKZCsiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ihUtidJzjFpPFR5KtwD%2F%2FVgjz4Zk0qVF4l2YaVydaZwAV0NHbA6Q1hHO2C8LRQv3CuALJ%2F22gn2pevpaweggl2og%2F4sxjc0KnM8UEUHGXYZtM2Gm%2F7o2zavjVOYkI%2BnNILPo06KLLqdd55XS1sSZV46jE9vVCYwDCpeYd0lXC6zDsGxA0hPTyDiup5YI0NLBQZ2NjQaQu%2BD8t7Sxv61%2FaGpA%2BoEzlRkideFB%2B6xbFmrFRLMaq1g%2BK0G3OhZeF6CumHl9nUJF1opoITyv%2FDb1F0HCAZClk2NY0QRyhqfmU2hVSizxIY%2FRN08mSX0uesTM5C5BGadQzzGfODV6xuUjh0%2FERWYtcjgGZHoutapGNt17Ox%2FUW1i4ViRxWnxx6I%2F2OVqY4oCUW8XR6owUs9rexMaar7M2UQQST5%2BOiXwHcBa0GHSJkPAz6j5bcabfYf1WTALkGNBTr5QAGDDzrLZfTF2bOds31UlcQQ%2FKFwZH%2BGu4a807x9PZosApNGiiNdkjJSDXAOtOVnG%2BLmKMN1lQPCZ9YWsMdOiMazQhJGh7JAhggaiPMXYSQV%2BNsyKB1oEqW9u7hpzbBvBsVslJ7%2Bgse7rkNKU1ZsxV2hP%2FrCpmwkhbUu1nWDTOXSh9ieXjX8gIlr72BgzzR3LFeAw55TZyQY6pgHyg9fXnZGANqYG0IXi9LcIL4HzniNayQJIysx7On7oKXqMhUaKhcSA8g9FO9NCczSdjijO0RsoPE6Ed2pBOOpbVrdfg4pZQjt2BPrjrUYTqBMHq9BlYZfNBvJg%2BQVVU%2BYrz6qKFqIMNR5Vuf5ZPZNztZDSPKHQ8uTqUEbs2vkA2q8DqYUj8dL5LA39DdCM3ik2flqGboUAIo9Dku8f2EKXVUbWL1A8&X-Amz-Signature=a0d6997faab03a3e629a4fe8de58abba06676958d0da1327be386ccff25c7e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

