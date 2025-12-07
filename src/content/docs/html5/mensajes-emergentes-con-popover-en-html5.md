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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJKI6XN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhKdcfLoWgPLP9UE%2B%2FHVsZn0UZboT1m6fGGmKpCpENuwIhAPVTSL6QNeYL4%2Fhbu6CGq3URpFGhIOaRgHlEzFTsGKJDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiJMb9quF1CtdhKUq3AMZdEf6fZditdnbekZmoJqnqGAK5kxN%2FIpzPfHvv02fSDdA0TqPYfP2dCTp2Y3Z057q%2F3MSLW6PU%2FHCbBjHQr5ACoL%2FrIr2oxDEsad6iwo213a3DGPzWeHMeo5E8ITnx0iHBiWJhjZP4w8hh4x%2Ft2fisrw%2BsoqbpYQqAsr5hMP4M9wKHcsSVOv1J6SfQjX%2F2SeNUkYQwA%2FXZLELUy6wPVASoh9cRK3gj1hakzuvFkvfH13WaP5R7V5lCYPg%2B5nbQtvBRnK6fWH%2FkDAoy89I52Q798IKUG5smHO4WwkulU6X2H5S3rwh8zV3jO10eQQwb64dHW9t2%2BAuKQJSnX9fioAU66Sth3wIu6ZWpOw%2F2AYhdCeQooW5KnpNwR8rpAuGnysczCmF9%2B0hbkVXR1Xzf0PjOh4qkWR%2BDjFDZWV4ooDLAfKnuHViA3c3XV6Se%2FEKqMt8Ayyh4HSsGa%2F%2BADvq%2FQeWI%2F1QUggzu%2BAkfQg3Qms%2BNjF5XZrtXqTBVd54vQ2faM%2BmEAxCQFiJPcebwX36uaXu%2B%2BFUwCS6T9YsO5u2ZYGSlQnP5yP3%2FFM6SZuiEDJ9qIHRMQKKNEUiKqT7NEJxt5%2B5i2xPeCyiTxLUAg3o3PTeHckWEwEFh1GetUTngTDSmdXJBjqkAS8BMx7b%2F7DNPRC02BWFLaNR1Cmp81X0SWDz51gFw%2Brha2eXgyX8LhUJvqua%2BG7ralrirI5yDToFPl3DSVcbbMfQ9SaCRrMEM15Q4f5wLfz51imdVHDIN%2B0%2Fj5GOEYP8eCcFkoo%2BXVCalNL9EFTJZnyG96NBDGyuPuqZNwCtsvqfSOdKjQg9kq2bRvVUgTRV1XdPt3If7cxOHDSR4z%2Fp0fvXNkXN&X-Amz-Signature=bb60ca9430373ab4ef6fef33f26cf72ffd133b9757b613682ce5cc3b0c2bc7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKBWT3Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDEdyjxDCoDTLhN%2B2%2FNalEBvOBOspmgKszYH7ODIcw6AiAfccftSuC%2FJ4uNCoB3H7SnoQFGsxFHwR%2BUGsbyctH5oSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJD78T9O04ErYF9H1KtwDiUs%2FtlcfXERmQYgtwyusB95hZ3%2BX3KpjdMbReQiJQLNZevxiqapuutJM3rMAF8DQADrNm99oR0Q7GlHt30ogSMNmv%2Bk0kfGZoBW%2FrpE%2F%2F%2BSDggy2Zvy4QMLLqMvs4UmJRkgt5DxE054eHRJ34oJkXG%2B9rtE9xk0cpmFhCbQsbLpXVVBuoWFQf3syrNN2feoSaox9Ux%2FwApELGhKxJjocAuL4xLEaG8klJS9w8x1nLTFhud4uKb6U5qw8dZNCOqrO5jrkvAfSzmjZeWW0KsrnIhS%2FzF00azMprrt4phTMoYy9x3Jv8ASDQ%2FwhpEdH%2Fs%2Fe%2FlfKDcquPwUJrLrDmungBb1GpTXponuXFsh%2B9qQI2bInHMDDTyTsJpvtYjzWk97TkUDXUTpzur%2BOuI1%2BtCfi0LroEYJjrzXqQdQKNwB8x%2F4OzVYF2uTLdvxV754Kd2hZEUO6khaqg%2FFfGl77WopBtDDTgq5D33c%2BiE3yufGFv%2F1TC2%2B3WwiGMEE32epb53esGcwFjy5NHqXjxV9k11rl3LLm4WB9xYLgk1AcwOfLjr95AUv5SNWudkCIyIxWWmOwLT0EQ2CBTL7RuHXHuyw5WHttAvk4XyZ0OZ3eBDy3b8%2F3A1LgsKVbwV4yBuwwvJrVyQY6pgH%2B0xePzwQIL2Sj3jVbdIBgxK8guRPW7wo0WyXjVpDLgwBFnf%2FqH2C9mnTToK7TEMKi2KU2r7mCnUk4Irqqql%2FUMW0bnCuMSDwPX7Lq0Np7x%2FI8CzOnumlTdx0gdgzmQrKtuwyOkkQQAYXQVs2Q%2BzbnHWC7O3fogKBbLH4uSnQM0IVlqiOb8TXIQIfSEKva6MjNZPrWbLu4jO8bdJQwI%2BIrpPXnal7I&X-Amz-Signature=4625a42656b32092da6acf8fb0841ee736efc9e8b8e53930a5d3c381bd82d559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

