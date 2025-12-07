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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFG24PSN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzTUK5NdSrTxhWPgSYEJ96vcQL9L%2Bbmlo2aKgKYinOaAIhAIVBrq9lcRUyDbImmlmoQksWyOgKCRQlDDKQa%2By5hko4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9W%2F1q2tfuoeeT9UUq3ANULRBc5rgMNP8%2B%2Fr%2BlKxINQImKiWK76cQmhJBAPDiz4O0I1BmAH1ol%2FPgWmlESYQfFIhsr0YsXYaikabvjuX289MKJ2Yjl8p%2FCS3i5RqOocZru5Op1YX60HDyOWYctzacTvXLDGoaDwoDfyteI6SJHsfk62HqT24X6PWi0HfR42GosjK2j2%2BpvQ9Oj2m028w%2FJ2FG8i6eAnNPd8cZZAFdYdwqp7ty1zDHQzKcULQXT4z67HzvZ3x7O2gXNb%2FOoQ74oft7l%2B5jYP2XhTDsnrouzhAcJ1pqmN6GlGSo36%2B6NDh%2FwUM9YmKuzTLGJxvqa1WG0UXRhjlhXM%2FAZhMTZF%2FWy4U%2FJPrbN5MMONiwyuGzqWB5mBu3umQoqufJo%2Bkomkk9C0eJZGA18XE5dBSGG7gfHFglkKWA6cshBsIcyavMHfgLe%2FqpjTzQMhdkitMj4lvKllHWMAN0cpTeXjDEE%2FBqM9ZJjaXUoR2L3Azn0r47GsrNOcsYJKCAGdRE3eg7a%2FAEnLjic428ap8ATWJwcvominUoOm%2FzvF1nko9lPyQFDckEzF8zTH22FaOEVDkqxtFp4Uwm%2FoXshULcWSRDqsROCAMCqTxV9XO%2BirUwhwvlevfFEFg2iaRnI0qFDJjClotTJBjqkAdhK4MEvdSWR319gNWSMtAlSOieBwu7fh12zESBIhlvBehzvoGaODkBSy%2B7lu5kImahDQH6moyNv08EksQJupdOph6uwb73v1GSBHR62dK1S3kh1Pk2cLVwVBYQgboc%2B1D8uTQ5RJXyQNcB9qHPqHi4d7%2BLHMGbEjJo5QmwLBuc0TtjCoDnMyCrP0QzA3JFmfUxqJU2PBdiSZ150NFlJ3TytV%2Fif&X-Amz-Signature=971723355655ca1fe651feea7daa059c8ccee4002f91dbdb4e9e96851162fccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDE3Q52U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdM7oe3VgWrh6kfhxYvnQorszbxTgI6c%2F%2BefIvkPHCtgIgcdSYcrVYXFZ9DNP3abjWjfLbvY4%2B%2BRiI%2BeYyAYCTcjAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa%2FOLm%2F%2BW0uq95XeircA%2FFvqZ7w7T6RaGFCWah70Kfs6E%2FRpYxlJcpeXsEx2Wiz8eWxfFTuIcLpeGy8hvSteyq7Cm38w7TViIaxMEO%2BKsSMX9rz4V%2FRB51vWgGKum2IZVx4zTfcRUMGeCafU88BQ2RWn4lBnBxL0yYlFu3Ft6H0mO9E3ClRq2zNSVgqDuWrEBMTIYDhVZA8znS0yaTIjBEfk0FhflI9NnFPMoMnXgbyFYdVfS2ZUqGwBoU5tALJOeTPMpRY%2Bf37%2F63rZ8KmW3DTZFNAjqTqCeEZIT8pq5QCYY8QCROfr%2BkMS8ryOpjqEMbtwWJDh%2Fu0cAa4%2B97Y0QN6AKxaLBC%2FAoSSIS%2BHgQdfE0qxrjHV2XygSeB1PXml0X%2FUZdMCUjv4j1aH%2BkcojQmPGkzEr4Y0WGvAxQFughSfeSrnhTDsEiJuE2Mk0O11srABK%2BNuooBt2H3mvfaiMIY3Ec1sHDOWfAjLosmYdG1X4hc9cHIAcLl3I992PDKfdleUra3sBvp9UEH1I%2Be1%2FCZXl0rzH1ve2RhUaHnDDWGj%2BmmalYbeg7ReMcIlt6Yn91AI8d9BEOuXnyKtj7lyuyMOEFPvfA2i9nqQKear7SnqQOX6l21VarOsfNcjF2P7h2%2FU0rdtmSKjpqicMJqa1MkGOqUB90yQ0WrO%2BeyvJP8NGstljGXLox0VnY7g0PYlD9skl3t7K5zchPhJag%2FRBRu3uTrjzHLSEmHK5LvDGjFNNKVpUlyx%2Fhfc9mGN4%2B5W6UkhthBxkontJaarKn76dmSvEABheMU%2BjZpIOJJKR%2B1Zwe1j4rZ6yzsZFPV4K5FLdudq%2FWnt9ZBE0vUrJz%2BGl3SseQBkr94GvMID%2FVywVKfsTf1e9xetPoKz&X-Amz-Signature=584fc4a3247c6e8b82d702f85eda8950cccab0a6be739b193cdd0a5079b4ca8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

