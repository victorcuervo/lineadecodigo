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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5XUGPW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXL139BA6beb89sKV3eHhUKxtIoeL7xwEMMKcwIziAXgIgLc4NOgCB0fvr44s2C%2BXpFnF5pjc1E1qrhQhoP1zmpEsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCA1HZmYy3ZyBBMLSSrcAxRViEPbDzPhuDvbBbGRbqs5%2FDJV962R48UEBJOELSHKAqHMoD2zUud6aQmYOV5CUyZFyvu3NKOMlI%2Fa8iiOShtn%2F%2BNH7RKfK9QpPykt8OQUdvpCJGtXPMctxUQImupjp7nRNALkvfXE3e9xylVK%2BvFA%2FhagMsC%2F4gJJBOyKsjqyVvLMfDJL%2BnEDBliUDMEBEEQQ8EJcVsugCz4ynCQcYrHldgbrVjGGJGDJbNIhLo74S0H0Dip%2BLHBje%2F92lYOx%2FjYakM%2F3kRZe0j32tpQoTln1rq1zzztyJ8GcFXJS8FZ23cIx1Zft17J5dSKidwcJhn7giDFi%2BUx97YuO6xWNmy0TTYaQ9NHUwtiOhI3O84OIYE0xwLKBIdOq7%2BROEA8b97iRq8vXzwwCGd3Fat6QkSmziWaqL1gFb9pRNe6XtG6vSiP4oUZwB2WX7f219HnIIetwjEYg8n4YK1eEbTT6kUY1EGpqFNDwywWPKtT5r2uXtEAasYLKC6Bv9O0YFFTjPVWxso9hkYMj526R58%2BmSJbNBBzp8HilShl4PszbWyhL1IY7rQLhGveU45rqTSpn9bYaMPlcbd9JZX%2FVV%2BnUe%2FkeL9w5YZzjMWdRqcaX3VfemKAoeQ1QXk%2BtDy7nMNvJ0ckGOqUBNIbs1EsUhowge%2BnwAZF8%2FdVX563MkJS%2F8UHyYxP2CDf0u9%2BQVKbJHaahyzT1MeCI2YSycSx8%2B2m6uVS83KuwYd%2Fn9NAQxvxx3wYt4TmZ7XX4xUzIvGgvqUy2WTAQ%2FeZYw9krYX6Iauu8e%2BX2armtOg5p1%2FpEzcq%2BiwwoOFQo7zu1z7SNtq%2FSRfjZabedaieZY8VmDuPMnZe65a7Cq%2Fv84eabSGOs&X-Amz-Signature=fc31c37855fbfdceb9fc38b207582448bf619e142e8755df9cc28bac1e6669d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ISCLGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtQ6hmoHnBJznqPU6zynwR9FowlOPZgE4TaLCELKGQbAiEAm%2FlYFENBInoT1KmJ7Wrsf0Ub94V2golgIynRGW13Z4kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP3jS6Km2T0OASPRoSrcA0LwC2t4wiSjS930jgEQSHy3vPyCZOIiMwGz9tdIKYZsLkJZ99vsMSPHkT3RX2zU5%2BuCVhh7LvY%2FxQM%2F%2B4Gff6FXipS3IOGk%2Fmst82iynZlp%2FtoC5eUjuVWAwqE57C6Am3%2F0o16spFamytuIg6B7i0iSvth8Ha41eYvrkNV6avglJb3Kmr5YXoTeExOwz%2FcEfWOlQN88g7sjsj%2FvchBDifzScweQ2%2BBnSPw4M7FPZtBVN3IOTECnJVCbtYY0ZrPzdnuOo7hE3DX45esy7NUmzSViM7p%2Bwi%2FcpG2zQMKfygiAjQANXwFgzDj8EjEQgXVRtFUoxnxyVufXUrz6uMhSlVu%2FINrcvwkSZ2HEJ3f3QZTj9ZBZBTP0RPp90nUubOSFPFUI6DoGCNO3SFYQlcuSJjhIfbUjCKC7n3QqzxxaDlAHJIhDo23S3YrrFToF5Xv1UjuPY61AQXgaheJZnZZrDwrmQr19ad4%2FMKUp0UQOd%2B%2BB6jCsbwgIzw84lgMrz7bofKq2N%2FJJT5aJveHDwXrn8ZgrVLifOTrhlLAvQ46YwDg%2BGa3I0PS1PpMOVRxpFjh0L%2BQmiiwlfNS7j9xY1z5Zdm7dIyElpN5nitu2Uf7uTPig1gFYpL0sYrabdh3TMJmy0ckGOqUBEgLR3JwEIeHit1GDTJTYC8KGIP%2FRA8o7%2BsWEExbEB8onrObsl8hm5WxUaSf7H%2FyjosPv8fUlC%2BeE392Bd%2F21HLH4CNV2FB%2BsRRxHyVdWunDNahtLpaIk%2BUERjyGPGRUihDWGJWlTJ3EG80Bf%2FElxD1c8IMpDjqyLbtrCOEbDGYUOIlQQyfykSdQFvj2vuzAbNRTATFipzxwHwTPewWbEVhsGJ0Ms&X-Amz-Signature=5c2dd7f3aee425721c11fe4c6724ab3497134568ac9b24099c7ac0ba1b32a706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

