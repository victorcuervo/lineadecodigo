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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPYIXEC6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl4MKyJ27%2Bzy24brlgx%2BOWjhVUaCOJFJkgWdkiEoH2BAiEA1j0ti9B3UNLunOHCsACH1uyZc3eOFTFIYhoZmmB8xYIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFBz2Z%2BgiXIVAenvSrcAxrKtiER4wDtXAMYeN0%2BjeyoHeYsuneMnjmWZFufn8sq1l1f8jDNu8ueQ3iR0sq%2BdbCca0gnjRBcvwgp31RlQMefJ78vdEhQeY2AzzfHcGH%2F4PYRxckzebDy6Jlu5%2FnlKOnsVOnwDG6MInf4nRutNdawp9yWY%2FzyxFvPjmAMKZtVmyBpMDphFXLWMwubtn50G6g4R%2FF94OhQg54AgVzkXBH4uPg2YXjvNxQom3NslrwOqTP5MTBAITa9o50X%2FactBsE9mH5b3x4jImNXCYaIvYl9ENm2%2FKJVk3t%2BHl0%2BtZhwKoAEWbaRIfKfwZ7Uig1JID1Nhb3umEUxlwH9mD7KS5jD74bVqHttu5yEp41HWMH1HhYD8tbBwSgMoGTtW7GY%2B6UMi8qpTx5R9Dpw7%2FM5X27BYdzZaYwJwV9eK%2BTnWPks4%2FaN0YJToME95W9NlKzMW%2FZ53ahEX60P3zMFZFPqaLCEt%2F0CsGZSFPxRBqaL4%2FbKqOYH4bfQDwO9B0g3OLM8BnxIp0T0BMiLlRNGfa3dx4pdwbpE8BMoxjWjE9EXiyxg5kGGOqxmQ9WrJs0zu%2BUVxstOWY%2BslkE0cCAVmi3uUCAQI2cChLCpH%2Bu%2Bvb9ttK05uT5aJUNoSItB5LRUMKWQ28kGOqUBTZ6HwIR26oIs%2BF2gOcJP8cCyKVSsv0kgk594ZSJ7dCfi%2Fs%2FbcSdRInPfSYnlO200YuVCKfBRMXuJ3AAvUxaSeYvCYgpOupKdcrrGSFQecdQJmZKJgVnAH9J1C6nXkxERp2TUhETAxJr4%2FPMkZo5aZrBZ2CETOpY4deYYlT28nKi9xNRJL1%2BiORhHOgRW2zyLo5G%2Bkqf9s1GZXT2U9UwZuJm3ap8X&X-Amz-Signature=43975035241d711f42060bf24459b4e940dd8bad79fd5d4319209af38fa4ef78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJXXUCR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfewXgQl%2BWErj5k2RjfWsKeBrGSd8BXeOI2%2FlkxirI3AiEA5YFO9PWDEmsN4cCAEQogZSojhFQSPrrMsqaOJS9XMJ4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPMkIf7UgXTMxVGXSrcA1FFDTqBRTMprZh4pFIIZG9CbEw%2B%2BoJLWUm4Fqkx76s5aj0xJqVADAzlYQAX4TaozsXIgfDjHsxWEonxCrI0zOH6cg63oPt7XMxHUrM9d5bN6TlnqzJwWU1rsLdDR%2FjwF61y%2FUF6i%2FbikArwbPTyC9%2BFk4WAj4puJSxKNrK4a%2BJFIIzk7I%2B%2Fd%2BYZyCEBQBRlwpUhz1l9PsLQ37we05HBRpSk1fkvJCDhIRX1twkx45nJRmdO6Stakz%2FPrwwNyAzFBGc71%2FjbmLExKgfINZp7PbGx2iVTcbRhzRa%2Fx5Cnc1MkwRR%2B0xVWZEw%2FePzX0utB0P0vedUJ%2BHaIhga%2FAOAZUM1%2BUw%2BKd25PLDtjgso3iAZ12jTVWuYwz%2F7E3XeJXVdCiQkyUxRT7zZVqk9vc9vb7MngeVwwRAN%2B%2BwnZuyChEGE7ApxJy2GqSxLVf2k4pNXAZronvX6zkUO5oENvukntIHNHD7e2lxZowW440clchJOOwO4M6OcV9X6iOwUBDUeWsnOTa%2FnfHJAHAg%2F9nqmfhcroK8qMDKUMF4p9f6uJ1Puz5zzkEhxuUQZlWkzak7c0XZKCB3aO%2B%2BXhki96eMPAmtmi5BfPKXAlDi1QWyJF4fxMP8gsrCm7XMIHloE2MNyP28kGOqUBjJO8H2eX8OQl%2FlbvFU1uQd9h5LSFjGPqNF1r4ja7z1qKC%2BhDD99%2FG9JcCJa6kifadsvCqHiUtnG9Ld9QIY9qtZ9sjX%2FGd%2B3PoP7HPp0kGDD0FlhoMK2FCJ%2FPi4vgW2GTwuU6sSjeaJphxbBtr50q%2FCPOpmbL4y%2BHs6zVIJbH1Q1WZdptZPJKCBlmXwERsVHTeOsJUBLfFqEEXs9WQuMg%2F7yW5tcl&X-Amz-Signature=ef3881e04208edb3fe25b09c88097a527ea3ef9164d3b4bb6f1975b8a9552d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

