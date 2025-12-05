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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD3KMM67%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEuHnbnWYCYN59%2BuCdTJSSGup%2BjVtjeX%2BYgsTvLHVTmAiEA9nfFf5bpwJXD2L5ODMu6TQ75EfoosLHprNEZJlckuR8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMqe%2FTVmnKApCJjskSrcA8ZcpKp7om3dXVnmiQWbO1d4l5zqRHrLqsuLZpuT3kQhjJVpx6Zat4mHQTfTn0GUc%2FTuBBt0U3eq1SiUMefPjSfzjrDsZL8%2FroLTFgT6aLKgd1i9LaYzwAsurN9XnwtzFvStNj4o%2F0YMAONwdicsfH4ORi4nxMOdrq1uywE8uc1FBHZVq1F9T5zfTjBS7wIfp7RQrOcyhGkibrLX03XNgPIq2kZy4%2B62i%2FSSa%2BQMl2LZ%2BgHjxLMWtNBNKP1vifZp3awUoY7TXc3WZANvS3ZkEsdJlLn7cySqgTLwW1UYlU1nWMX4byOpeYK%2B4HnHw6d2ceN90nJGqSvRqkKWelZObxtUHgrXi0DjiKXytc3glYvEM%2BcKh%2BG80nMtHN7LCxiRaOPiopuMgyYEUrAsIAwtwX29ba0j%2Fw%2BZS1axJ3jDOPXy0Y1qaw9o%2BVq76UfyF3AmNfd1YwANuuK8JMsOtqLLgkl5SGLvQYYSfYKbf5f1y69g7p%2BtRo%2FF64hV3naOG4WGmVRdUvdsh5eo4JBCjA88p7n6MYbyTicN2dMZrp3zD%2BXA4p6%2FViXQRxbyiFWHZb0OjNi8PbKvwk3Phm%2FVn08SUY9pQgWv8srAS%2BJNh78V9Xe3%2F5MxYzgM6PnCYVkoMJXGzckGOqUB9XOWP9EiUXvGeLg6CrTDyXnbx5ADrNGsKMfZfgaHS5fay0GMWRKl1Gu%2B51JdQdaiBtZzV%2FRA3fjqTZx3pYpjPBID5Sw1lS%2FDNnJB%2FabTG0JEAJp1ahC%2Fl6%2BTbT4YVzawK87EoGvNpZt49%2FxG0R7e%2ByJ1amzPVGOuqzLQo70ucDYSGJEV0R3DYBamMtM13ixtb6gjK614%2BH0Q9n33WE%2BStHHOIwQ6&X-Amz-Signature=e6c0673010e8d8b3d781d6162131a88616eb1395c7fa9706dff6bd639cc59af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4IS7EO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkZF4CsR8sihc3c487YMdYTTM%2BKY9V%2B%2Bpi%2B%2FIKQIB04AiBkUAt3OJnjy5IGU2Yq9ailDQxK7wRnBJm2nx%2Fk3w448Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMzOhRqfat8nR6VyE9KtwD8v9806CY27jbkXD8xzCdWa6R5mGtBkVMs5nM5YDxLbupnc9GDdzymvPpUXCUQ8YJYNkM6l4H2As2OUvY4Bb3%2FexykPedLUFe0OfcyALGq0HZJp4fKNEw1F76Ot4xLH4%2FrTgGDGDyq3eJNvT%2BY9%2F%2BbaublCu2GE%2FyGLkb2%2FN1mb5Hs8gpr6fVn13CgSt4jIHhSctUeIgYv0IsHjAl8v9eu33dW%2Fg1zyHLbCls1mknLTbZ3KdSL9wzaR0bzeK9nmus6Tcc23SSOUOnvTME62A6FvifalukuGMMJxUwsWWfL053hKSL8VwlHP5L%2FCyWNduQyiuDlkxa9HOaeVzU%2FJIEg0b1i7B0AohbgjI9%2B%2BnrIP4CDf%2FC%2BIA4XpWAiBGdDVIDGzgVTQ1zrhbsoplgcCjkReg01RexqkSOWv%2BWlIkF3ddhVyKZ9i4s5BVH5vObVenlPZZ5m24SGCZfvcXuFuQXuld9RjQOujDoC74cuyc4Lbh%2FpSxxR9WuC2bpNb8MTH%2FLWhs%2BnxzajaNBWrYS%2F9tX6jdhVTtUbuzDp98Dn6FWQAd0M4guUU%2FSCWNoLBTInrv9VFT6xIgvjHSEzzZbRKbkcVRhjkAJjEMPrbgqYIZU1%2BHQlmhM02WzqtIIT%2Bww5sXNyQY6pgGfybQFsgrVQ3Fu1hFgg09bzsSt4DtOg5rLsdDjCpgrW9t9Tr3Al85TqGBAlWvxWI4B%2F%2BJteT%2FH0HeK%2F8uqKfiy4PnnkAttCQ5zmBKMHZLZoigvzDtIligsWYZnO1CfLQINXnQnN2oJIOXy%2FsKtBXIDYDOpnX7X0JA2mxkuvu%2BNo85XzeLqZkJjrV8bkSYxnIgL32fmtllBe9z2%2Fe1oD1sLPCciA3UY&X-Amz-Signature=5039681970400de11690a263b69b9ba7ecad9b7625ac966376b4e5a2be310b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

