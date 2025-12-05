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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WQJWTLO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BMzLdcAWqIJii7iyESAsubiz3nfq%2FHd7CX%2BDsEtFHhAiB%2F3A%2FxGmDDDl4QNDa8rAp%2F1IIgsCWRuUyn9gkGpFR8Pyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMqmYSbIqjCpvycKP0KtwDyBQhLXR1liqsZHq88D%2FaBsGL9BgLsPFPstLvGnedpWpXeLj8AWUM5O9aZ%2FibZaRagb4%2BtfEBHgm8b5tBqw3ymQhKmpgdtZ5m%2BZZOPFqtfCzk6v9n0%2BSB3JvrrmkRoslopENJNx4kwCmvjj%2B7tKXm4Q8mrilFsxga3V6%2FNC7RL73cF48zJda%2FLTow8rzlbUmkdyifdkX9uX33pRXg%2FR9RwY03EAdsovQAx2yHi%2BWFVzOVPrgvzTps%2BrFtfqV6vAwzjAIBwVOFW7j5EAgg5eiyKqhvSD17bW9LEhUzL3JFw%2FxlXZWN6PpnUVXxqAvYMkPig66it4OnZASyjGy5syPkBg9MJKaxCtDp2l6kOq%2BJoLfKtD0RBaVD0GmuIDVt1%2Fkiy4%2Bw0BQa%2FSROpUtoi%2FIvbfix8Uwj8rzsYm4tptOECJWXykrYyAT9Ts%2Fw1X6lX7pE9wdXIAruOqTskYOIly17XXKbwWMP3hEWsKuKKtBggoLU1iJat0dX5FX%2BjD1R7eETF3lNb%2FRVp5pRGd83BPd7xdwyC7pEp2BZPmMbHooyfxaXIxGb221nJRiZgaF8SauipcB3NcNFWxG42N2dxhOJYwsVXGnConNOPY0QhDm14EENGEl3MAXxn%2F1kFIMw5KnJyQY6pgEVpBD85I0vwL77j8nPUiDOjmx3XtawTJQfug0DSdoIKZto9%2FQ%2FJM163LVqnEN7G72HKCWucvAsODdwkNjbW2WkclASiGHG8UnozYQu6napclTrgzSzjlkst48KmJxvgtpA3JH6s%2F%2BNxONO3Gw2GzMUsxp3g%2FDmXOzI6Rc1IpCz7xcwZC8Ac49sXagdGhcoP0v7pQZSug%2BNpsAHudyt1h5Vsj8QtZd%2B&X-Amz-Signature=f27a7f7c6c36182a83257e969f571005491e7104ed36f4bdaa0b1ad3efa777d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAAUXTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS63QiOQ4nrSGTFC7C4HSFvCVJMAt2U3iHYWpRgHjeAAiEAxDCGYxb6Ue4daMxfooJi7GvAb1YleM7ROSVjeXbzFlYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL2IJNrr7vPpf1f8TSrcA%2FxX8J%2BmwwsxgD2Ab7iRyQ7SaxsZ4NP0BeZPFSU8hI4HkyQ2Fbz7%2Bj%2BoqHhvRwsOUjFiq5c9VXeO%2FGDEU2%2B0K1S9Pq6K%2BlCvZos07cy1wDgqVxrmACc81COzICFQ15qZWzpPCFNYatDOoSCi%2BVBBcKBwQ%2FcKr6kg6MuOC9U2dReRzCgaARCNKPWKkIbMezV1T1PCt06XOGy0WXYNZmiNhfw3YCsNxs6q20AuB%2BhM%2FEZcb8ue1gKr6bOBQQSzNqpXoBmo4u7wNE8dLAZMQYSsoLI1IJJTubey19Hiv9HQBvY4doGTeAmnROQYl1ITfHuEI1F5hdyTtNpmK%2FHXQ7moZ3cqSX7iumy3T9VbkDnxBiQWGRyAn4mreej9QQ56xpIHzHyRSzpu6Zp93pFcE38x9oICCuh2uYVrKzJW2DXgeIYULwcxX4tt1dMzQ3DsFjVi2U7efp7Te2lDUQPnVAqhQvAOwvdTrGtS8RnU8MiLiL830vcnpouvDdMocyRzlI3%2FJTprIuxtiXlu1%2FcneFKiZpIIjy%2FKDVbIwhcT1kWBlI%2FPgiJEzVYu0YP4w9uxY7u8s%2F7emtLkvmdtbU5OuGK952sPshV0yhtgg9I0Hw27a3SG70gXQwnJe4KuFwBjMMWtyckGOqUBe%2BS1OSNlUtMfA7CKx7GKjVHLn8JROcmkxvzhp3mj0lx3BOSRBNdoqR6DdSNvcx55pBfB%2B3kFBTLH0PSooVY7BNQfh3yEeD9HOtk91EUyCyVn0tNKt2iHeNx3X4f4avt971Lypu617zNEXNwLC6RKQ7%2FqpRD3lYlZta1T64wtNKjNO41bqjq0DGvtxBDwFlupoV0lJZ6bRkJd1VC5foeVZLvFMHLh&X-Amz-Signature=a947f8af518039434a5dc87b7c1f920e299c3660ea05ac0cee8ab8f1030d7710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

