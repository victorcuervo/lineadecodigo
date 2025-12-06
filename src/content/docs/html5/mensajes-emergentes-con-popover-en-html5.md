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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZIRO2YX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUe6pKL66nGIQXIZxJguorvruQMHux4MZZwnaSBy1alwIgRZZZm%2FwMUlexl7h2uPYnwWb2uuXanqfuZAKruyQC9RUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJKvStrVdzy2fTvCHircA6vyqiNEWTdjh8zs9yu670m4hubal71WN5cL%2FDqXxrPSeAqUBVm6EIO1hTfeIj4R6%2Bsj97NkVqX57nEW2lXSPg4tO9jqVstSModjVwN2LEAvmVEzZj9FlvySd7n8iBMxpbBN2MxGMdoiCpULCOrQZvodD9keKWgIGZlGUK2IxcEPRaKZAXZTmUDHjRZftfD%2Fy3SekvMez7LUWCVye1mg%2F1uR43x7mL9gPeYwA%2BmvuAmNrb0%2BjOFEq7rsWtjfzlXBS%2Bft%2Bl3mTPMUb%2BMpUI6RzdenMWvKvONMkNfIsc9Gr7s%2BxW0YN8N%2FCIpMXd0%2FxQIzhPXewYKySyFwe838Xt44z9Bo1Vg6ISKwdtZGZNdJQx%2BvNBEhcnLeuMvehocpduGg4Y9xO03dYfwkWCDWPDahpOBADZPQ9REXfy1xp%2BQ4jojVanAAbqJtZ6yU7PZIx3yrJhuTfWKd%2FWkQ0JpvZhzC3wtE8hA1eOwshdMDU7OeHqRKXv8mdC6aWt4A4I3DA4wqhaOmEXN%2FCNdwslF0YJrHoH5E8FRdIrg7dcqaSBN2QIrEgaYzjB5hpB2JSh3AYj8Hx9vsH2mIm%2BBcdwUoG2Qks0K0pVmaWcLpV%2FmEelRn0mJbZEwv%2FJ1lCm825xTPMJXrz8kGOqUB0JkQdUFL0nGlqg68MkFokOG1s%2BHl16l5N6Qg7V7N8tqvGGEhz3nbx9G96Rl%2F%2FPzHoxODps5Sj5CamGFSl6sDfHw7ZvXE0er3z68Kavczka8NZMTY%2BCvvSQWhu3VVuStKV4CNhr8nxmH7V5r9b9zB7B8dRYEXSFfnxSvqQ7XhUOHK3g1Rollim3GQg6Izp9PrmnQ0tdgWF70U%2Fc6SkLjmu9X2FLD3&X-Amz-Signature=a196f088c42100167b08681df6d4246148941026b337bfe379d977d345af9fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLODV4A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQSloS4NwHtjdLL62%2FhHHW7RH8rxC9a1iNcc%2FcccBaxAiB0B5HVRsHQzAi2sfwg2M6ZUggSoqEO3wc6zniorTEAKyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMLDs14iWVpivhja3lKtwDengVBQLZ9%2F1mZqk8JzKvblxH%2FJJZF02k%2BYdqJW5r%2BhNv15MCZioC%2BebpfN1oSXtx7mZXApSUxL83h22wvprEnBLV1TyKwdJId%2F0lHWSZ8Cw0kGfsZ8wZfTfQF%2F6MX6YcGMFD5%2Fc76IchXIMZpFsr7fPYwngn9UpliQpNtDOuU7e0KO75HnppdWlVkMhshvZwKyNhy0kPzBiOibsU06MQ9y1x41%2FPXtioUCrSbKk2zvRSeqocKMzDyOpLpGbRcpl4mRFZ9SAhpDKKwoAQ81HaERk3UmueRuPgKMx1CH%2Bl7nQ9Tuho2GlrmsN%2FpzwxOixcM9eAKnHpPslQ7orUxiCbfw31aKKLuXM2Qn8%2FyGc94uBwGqdnw%2FS9twl5RPfBdho5AY8iJS0QmpDohblH9cZjTNSt1tCA7vRYaBWftvj8HlxvoQHdsIyo%2FKZP9bzieHAzgv1CwZ%2F0BG2VYUjSNfX2Z1ZyBooSdPCpS7M4Z1rtRL4ug9A1JTb0OmYTJFe6h7K93PZtKBapRwQND1eirA2gP5k7Z8WHzIwNoPH%2F%2Fu1vHMrU6yLTheatzCIeh6iS9BdjwpUU6X8YBauxhbbYjADmUHdMBh1AuT3b%2FBdNqWmGOCtVuUgAGdeD%2B3agjKkw8evPyQY6pgGlvN7mmjWSHXyEWY5AydGGenrU8goaU0r19WGWFJ%2BoWq6k5jRtN8hSqIaqNjT4PIdnOH5kgny4%2BH8WMjAvHar01j0P%2B0LdqxmxcQ39nhnbB8hIkndFO5GJ2Y5vS%2BUdRNPwwbfOeHdRY0Rl4199plpKEIk5CY0GRAttLVEdQ2oVVKymVyc6B5cYIJ%2Fp14lEgOdeimw5ndN5Wqy4krxpqfS8HD%2BDrujH&X-Amz-Signature=7b2c26014fef3c621b3f39651169f28c227e0d34fecde6f19c2f68e68349e3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

