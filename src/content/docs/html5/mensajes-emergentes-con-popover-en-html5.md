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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXWMTRPP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSXc%2FViZEv0dINxEGb59rjiVE7LueWh8ifXwln5uV4fAiEAtnLguXQuFizkgJQXWFzMErkVLgjn3sErLKREgtwLegYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIn%2BgaOhuBEhfd1GzyrcA2ujXcCk46iX05TEtJ98H8eibkv9P9KfJDsqcJZLp%2FxWQ75xrayzT3qBYqm9AnaklgwA9SJWKLaTXHLtaHyDFZp%2BiNuScxjMIbfdqR0XabwEEkTnN1UzRFqfhwW17Ekrxo5L9JP%2Bgy3wURA3sKT4fZH0J2OpnZUhDipQ%2FUGihuS%2B4andplBCLvu%2Fed8HZnvp0%2FXEeFDfyVqNJanYbyVAofBfqs6fzG28W8OyyzoViJk%2FB9pttxnii2FNW1arokXYmI0cMskemF8dyzCW2%2BL0kMPobeL6LcKWAZUW7dtJeSSM5FFrD4e7zz0qBfnsAP2HGwUvXZKRTEluG84zU223ARc%2Bax8vFpftfuxi5KYAwGxPdgGyHxGsL%2F17NCR9a1Vmym1R5r1VOBg76W0JAuN99sh5DV6%2FRpfG7C2StVJhJzNh01%2F%2BYdxwbW%2B3KzOU9gt8IKcjigZY2sGHnChY5vW%2BxUcD0QwbeXyR%2FnZKbw1pXup2PN2do1n1QtZwSkqTheqQQkU23v0LuOZYIh7zDNrjjnDGtjaqxScOWOFCt8m9USQpbPkmac4PMb3Sp0tJwC4WhYLrGoJIwRbThNe1wAfG11UBR72iz4n65zwAAPSBEahYXQpRGcWqHM5eETs2MOWSzckGOqUB%2Be57Scy4oHxMRgQ5ZMsb3ww%2BCz5nB7saJYE%2FfcpHTOYI4x6pLkoYP%2BqpaudqaecdU0T4EYRQ1cXwWjqvsDfjtYAZ9rWgVkXhOZqUV0xeplHmBcxih%2FpMjvcnWEN1BWRCv9QlBsjioNV63zHsOs78OjOvYQV3AJF%2BTe0oTPEgWkFDJyKPh3OV6jRfgP1wyDlEwVR3d3nELITxOlcoaVhzHXZqP11H&X-Amz-Signature=c5bcf25866abf0ef408ab6ae3e575793085dc3ea7f2db23a05003b09883e81d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAPJP4K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABsUIm5IPfnubZpbmWNZLUM6iaiHcBaVPP5dhZj%2Bk7AIhAI%2BhcSatyPqd594mkHMjIckta3hUZ7aeQi21YVyrHRYDKv8DCGUQABoMNjM3NDIzMTgzODA1Igy06uM6qCxN3F8zB%2Fsq3AO7sTZsV5zhKMbyFu7HR0Qe8sFyxjk9wQIgGGhjzQdvwW46%2Bj6a6i0UErCXZAqWIbXGVTOq9idREqSGNbgzvu1h8aI1bNVJK%2ByNb4qPjryh2VgT8AnycNnCign%2FIHcWdPtQaJyVtu4EurCK0%2Bv4mifPvjDhkKVi46bdw8bxL8qx21%2FQCjgnTYCBguOUIIiCXgcfQann8%2BOP8jCDO1rIV5xwmq1ueLrL23qPw%2FuYPn1ymg8pm5GVnF8qsF2EsYe1CljSgRPBRVxe%2B6l1eiXCZM3UcWOxA%2FWXy8BB6t2CIbqNrwyji3FovmdNQkhIonLWykzTXVDZUVK2VMB%2BAFWtY1ZUFn%2Fz3S3JwkeAiYaWmkDZSYDgayMLTbIRqBfcqMSOjkTG3yPTmThaz4JRBM%2FWw6AJmrJd3q2HP4pokjnWut%2FPg8ewn2tr7Z%2FGc%2BvDjJBz5dXc8O%2By7i77tcKK4seJdz6%2Bpz9K3ss1MaMVcoQAr%2BpsHFd38FZlRI%2FmSIywWeiuEcoTCZLpck35PGWFhkNvX0w1VGV3ca8BwqtoeyKt5VlMWNiwb7nY1D5nnBIiq7%2BFo%2FntIZ9Zvs0I47%2FizOGHbvVEYd7%2Fz66LncjenPsXYBhF8UcWuMJegAcNIXV6JjDv7czJBjqkAbYC0mEgAbBEmfSUgCkLhKtD3NDXZ%2Fb%2B%2FPHJuGl%2FTbYXCQBhIq3Q8EfvqouIDHgXVJbLBH5uy6ae0BxMXhZD34Fg6WFFJrxGQjuGX%2Fve6VbEvSnwho4sPkpQEr6%2BT1yfg8YUm0NbOJLydVx0agJjrjrBYJFlqrkKO6KOeAA2yo9UuBMpM%2FeYbaiNSGUzO%2FCRIFTpIyNpw%2BeJ1HblBjvOznnsVpqZ&X-Amz-Signature=7d80548abc0c00dbbe71866698fc99214f7c774949c6ac6d2a995d85b28d083d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

