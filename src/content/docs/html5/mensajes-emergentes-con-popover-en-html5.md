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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLN43AH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvIsX0CB6H4W%2ByUArS%2F1CutEd55qF63ZyyZ0TW6RfyGgIgKKhy2wWnVbC548eMWQWtdK%2Fmna2mgMbt%2BJuPCGt0rbcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLzL%2FSQgKOanjWcjNSrcA0qgiiAGSpqEoHWZ4dAOfEtnSB3rG6nDzMCZGSNwWgsVFkfZfrVz3ERTzAE5NrCxHtTNKwwAdAnAKOtJyO2lz0c2j4%2BOA1Q7AdQaBxBqtJvbOalu4Q4ApX7Fx9HnNR%2Feuo%2FE3fyoM%2Bohszj0JYuzWoDwL0Mi9779XGMTvPVeP8HJ4d6XkW1OB1U%2FpSCa25XqYwZthonUDD4nmgIDn2RnmjyfZ4gKyl1OhfjdvQi6MVqQ7G4iRZzH8Y5QGai804AkredBRibu5b4WvGned%2BtbQmmHS8mmAQdwkb05EABG9AWP5oq7E4c%2BqvaYfRf%2BqlcTsygKaRN%2B%2FtGcWz0Ou55I2ezJsm4LP6UvlNxTZy1HWqcy2v8WDV9gvBVDrJLQtcyfRJGEe1vXgLnEUCY8rIp8MHAP7ljnfvMvwg3hOx%2Bi47sNjVABjv3rBorcEhi47aX7KVjkO7HaflJb4SD1b8ycMVgDNU%2BQHzoDIUx8tUswnFA%2F3fo5ntrLrBO9CcQgMY2KJehMCJTONdL%2FijGhzBqS2TfiYigcLTxGCjcEVia7YBamdM6q%2Bk6hpiQ1JPY2giwO%2BSNnUUUgIooiRRUhGjPhHkXXzkA2FB5l7NEjaPaS0u42Jq4Yn0FGjUo%2FRiozMOrGyskGOqUBH0k%2BP2nwhqSGsff28MKEb%2BOzqRd2yst354UNwbwy8qbkFTszPEHPIVEbZ6mLCA0fM3mVoeWkEdoJFBZazQzLXHbpKbNSKgxxWlK8zBYzUH2tFwbYrTkblFfA6XMfagbxQAE4GGNZp2UWgtqBE%2FN2%2FrEMGQ%2BgtRuQMWIfSR2nzOeD4C%2FBNaYxh3ySNedQ67EXF93I8oqoYw0XeUqamncZXs%2FJY3Qu&X-Amz-Signature=e7cd5c8edef0e681de5cebaa61956165859bf645cec87386114f74a9d1a8cbc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6E25XD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCutZqdBmAsQmkokoOKjt3oR8SqEjwC0Z%2FHEq7BUB8KLAIhAL5QS8tKsOKmrwRc80FapL%2FNRkkVl90a6xU8LuA3oRX7Kv8DCFsQABoMNjM3NDIzMTgzODA1IgyIx4MPP0zbQpwHq3Aq3ANxxdWnlMN3iei%2F23xQSRTn8OtecQEbIskoKRKJKLoN1OHE7ZVSkASoiXPixGT306a5Pp%2FmxDOxC4BUX2DW8l6ZKxCyup7ZEolw1A9vp06JyqVZi1qtDJTRNOCDaAI3RwiGeSZw5xhLdbuZZnq%2FLpVgzDVc6zanf5rKa7ApGG49UYT8dCy5mA9OuM1rfMIXK2TcCxsvs4k79%2FFKh2MOXFgO%2BYH95Ac%2F6qifKGOQQEGScsPFeCs7c3cGIekiYMIbkCz%2F%2F0iGtrpOpn1PcN7wvk7qZiSXLGq%2FGT0ujiQDwvlEDfebvudd%2F7sbLYarUPVpCNXf7RAStfL0fuCMEePj9Cp%2BiIP5yRVENwoG0BDZj8eHx%2FZ0vUE%2Bv2rOgVA3PPB%2BypC7I%2Fyj4DnwBd4cNkbbK5puHEeEdkWEHdkC4TQoN6E7iCrzahji08ej6hHNl6bETqyC8Bh7mjLlHzrA80L3htfvF%2BYO3q1jOyF3ke6PKj9vbigFVZM1N1m%2Fyhxp34LRx12F%2B%2FOtvWEiZIGLq9xQZIWw%2BYmzSRL5jeyJ9JqYoqQJsnBNGlInd4ht5ExFh0NrYYjiVuyX8inAtFQqrzQdKm4Trxrk1oFQwycNrZwf7Y8j5gt19pEM2sdJ2%2Bz34DCSz8rJBjqkAQAwnG%2BxoXwLwTSSGPZYn1fZ1uSs7mR3FBej9bdeLAPCb1BQ0mP10YJXtXqrLWLA1x48bN5a%2B02teqAaXnvG5J%2Bds%2Fo2xNcfVmfeyzsJQe%2FKiEANQiRrrkbvItBywb6QHhQVOFYmaP6onfhoIPKKYpFgpCQ0d6l7cx8p8ZbbRqEO2XFELNjxVjdoiYukbmPyYloB2HjthpzQGvUK9hLMr0iYqLUW&X-Amz-Signature=ce420cf914312328173035f4f05cf6590c8b42b05a4ffbf33bfaff839c46975a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

