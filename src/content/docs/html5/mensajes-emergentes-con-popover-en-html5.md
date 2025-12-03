---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOHLX7T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCNSS1EocQSdwTr%2B6So2LS2VIkBKoPsxIpNZdtUaouOxwIhAPB924iVQSDaiwyeEch99HRzG8kHwebhyi3WJ%2BxbEf2gKv8DCDQQABoMNjM3NDIzMTgzODA1IgyCfGzwhbJBVvwFayYq3AO7RW4jABn53zcANMq7Ju06JDcNWMbQWwfvgUZrJc7gSWUU3Jae86EXBj2lyOkc3jwRtlZyTiCCnlCEuP1wxsgZ1PeyQwWMLINsyehRVDg1bXhHtNCLMG4yHaOEzfF%2FQ2iXCeUK3OTUSnivwUeJBU1hl0AOMwh%2BpfMyZPXOELEo7mphs0PYlMW2cDW9wziyimDh3KmxxBlnOuW4QZSK8VkKnHm5AhaBXl3Tc7AsFDzFgQS6UD5qYa5Gxw%2Bq4iEm%2BwiOMrvFyEWG9RHMZ%2FDqELY9zbUVs2LClwCGB1YJs0DNjNf5AQ0MwmZXs31EUIkSK7AQCPsmC73VzkpCv8Gd5ljmZ0%2FJEZJYNL%2F830QPfdgCY5Q9LCvAkeCXINMpNdfZmARuV0%2BlXE%2BHslNUuUqeMHfNbdrq4L6hE6H8O51g7cor1gOpXL45w5%2BjTP6hxYkXdBm2A2Uw0939M3zev%2BG5el2EjifurOOQ4jjjZG3EelvY3nEdvkL3MAzcyUFLQXDFYKOB5AtO2nsVdi9tPe0D4geMLVI%2BQWV6EuVyQnqqUQdAM27vbB3WOlseLXhQfvVlL9dtfjP9r3eJdocnHV6Tfjp0pc37O8KsQHnmLAMJ%2BItTYMausW3QRNx1QcJRZzCWksLJBjqkAUHpCsF37%2Fpg8sB5%2BkWasqQ%2F23qjzCSvwHahGCm0KTL%2FeLFNg%2FHEevgWPqX4uXZ9Ww3U0jsT9otfK8i4j4VitZYyI5oFyruap%2BeQXszEZLkrugrUItjpiGOM%2FkOWmLBtCQglkRLlBVfKP89FQ449RAnBqDFnyFSnAe0rK6Zq82NJ7a6NkXyfU812UOzAnz9GQgT9BwKVImnSN37NlSfFbyssaKi%2F&X-Amz-Signature=21194da338c10c8a53d62eb313548b9d90fc4b0c9afb5c84b9a7d1e7f660611a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JJI3FNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAmM7YEiEU4GUDR37%2BxHCqRu4Cw9ibJ2bwWQlwPDCIXvAiBbvTq3hPIone1woWajFhv%2B80KoKXJVSjcdM9A4pSGvBCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM0r96%2FTbQNtZce5YcKtwDMo6E7bprTul9LLqO%2FTV0IHFmZG7NVMklCjNrn8Smwzuc3j%2FHC0rUK%2F1sX93suVNuBmIAM3GsL0jrG85x1S9qGdmcFf8oNpI3qoTODR1Q%2FEvL%2B2qCBv8rzrIsY6BzIXFVhR15VWxX8dIKyDbmoyaZw93bXwiwjtXKi74Ul7bq06GJ3iCGzpLJw6p5hL3xiS0Pup4x%2FkYYWHtzzR79J8R%2F3l8Qqnv2gAhEqkyBV2pqaa5pZ0ez7Y%2F3e%2Fu9Z4hA3oIvNNcV7fVnXgc9ZCmMrNZIXsnYeZCZXfxWOoVjU3P6J6Isd2QCvy1mV%2BXv5q0%2BLczRbtmX%2BbEzEde9VkJeS53cU6gt3K5zzzSuSfRjFHRNfN1BrykoInlZleE%2FoFkWMgt8bfXXETpUWxBIczP%2BKMANX%2B%2F9VrOjwWQcFk504Ylb9GA9dQnWCuOLfdKpNj5Ij%2FN77A5Xr7ImOCMHed3QEiqmBKkBBHsmruD5L3ZDcfmf90FL9Tc%2B1G0M%2FlKRrXzF5EgyAuw1VTNATygZg8OthaJWtfSVzAknjiAeiDLpcrLlRQi%2BeOxuHdbN4PPzPpcXF4owFhCuxSt3IqM1pY1jv0dWuMjdRBSpoKdFhkquHMwDhrWdQ0ZUDnTHW6H7C1kwrZLCyQY6pgEWhBABBoTVD7aBfr%2FdYBuZAoi6JeHbA9AO%2F%2BOl5w%2BKvzt04sKihS4VL0prWINDo9GirAI%2BHZ8tpF%2FJxPIPKK4HpwSWBBYBVxzriplgJNPw7mKoXTm1XpXaDe4HwagsVca1WFxCaYR%2B3nNBqNA7yAf9H1A1k%2Bj%2FMnlXijAvkWX81Wkh%2BvNE5Hp2I75v2%2BF7XTI0MIgsz%2Fn34HPGKnPvVxt9cR7VGjFr&X-Amz-Signature=7cc322f48ae9beb62087c5bff0bf9a2f1069b68ea3e510d6b8795fa68d398354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

