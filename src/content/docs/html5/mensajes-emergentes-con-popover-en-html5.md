---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ENBH6SX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAacKUUu8XhQYjlh1q%2FPlE%2Fz5VGxQxYq9bibK7US5bs%2FAiBIcabMc5CjuMGBzKPiToiPIWHRVfUm8gGbQHbm%2FQjS5ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMwPuFu%2FDtgA7dQaQ%2BKtwDmXcgs17lstoGUoi3pbnvBkGKU1W26nvUXNsmMCqHq7lmJ%2Bo74kYCfPeUYVJZD%2B1dg5o%2BSzi0MzsMV2ijeROLx%2FRm2EMaR5360ClrDQ1thvAgV15uVIf%2BQWIay1ziCBdTy9eIrEzRhu5j1YUH0pMB%2B4B46hgeFhT9hbUENoDuQwlQAYAh1cWllVV7Wjqw9IvS3ut%2FspXWUPkd4sZepO0%2Fr8KHpVhcwv%2FKQzH9SZwhIpc%2Ba8lohNCdKZuR5VLYZCJCJ%2FI62Ji8q9TQJsZf4Zm6dgzUu%2FsGN%2Frw7fwU063BwzJBPFZC1tBMM7TG3ySTdqtAbb8nQjeydIf2viI7qvqeJG7ZzmY2d384dB9kkyYn%2FQDKNgRW32zBDw2KGrDmHOZzDlfdx%2FUIBbw5xOMisa1kM84BfyXBx2%2FOMP8rKd%2BtqmeRtWgQhYwAtOYHBHYwmS5QjT1MHM1S2eeDh7JyML9ssxNQZ8KDLXaiWWQawUZAK%2F1AmQz72q4IaCATpAKoTmOLsbbD3IMdgACNhNJCNvpnW%2BLfZx9mrFkDbNGlEkJfaoJlJY3hqfwWQcdg3fc1Jg%2FCAa3m7St9%2BUjEUhc73ILEYoHjUMtTTv2AKzUXTPEcXozSIGqRrlhuyUaKMWww3IfFyQY6pgFAgSxj1wcf1%2F1GohgS%2FmyAvOzSOcF9Ru1UC5CLdbzR7CIgKQUmdWilzEqpfwI8Zn%2BCrR3AjZO1XlNKZxx3U1wUPeZuGAfprwtLgyGs0So%2F74H9YRj7k6IdDRhm9uQLOEoZEUaTORxVICgo3oXi6R%2Bf0sbLElFVP7AJ3F27QRxcE8i%2FbT3NHU9pMjcQJawwMBIcSt19Hv4tmweBVqWpgRvtFOFNPilu&X-Amz-Signature=47039090ce8bc6055d701ba4b3e6ae0b64b9dd3a7bf9632caea3ed9335965234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYUVK6B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCE3UHaWfGTsVBZjZZ%2FBAbkzNotO7X21zWke0F87Yc1QAIhANIkaSDPJGlrn6UbgrNe3dR%2Bx4nhJJ7m2Hk9FYGrFInCKv8DCEEQABoMNjM3NDIzMTgzODA1IgzSkM0rhg2Dbciy3YQq3AOTDyN8PmfqVVYDeLn4%2BzSpNC1a5TTgjNCuQV5birfTH0C7%2FcFmHoMRiOSzzD1%2FNCOrakB%2BisdiXCFJFNNka6lVsU9eHHDzdAgCUS3No5VhHwbKiXBJ%2F4h5P3U%2BH5PIfzxj5U5iSerMMP6vtbvDCpI9M7%2F2uEYMVwbBA%2FV25p89%2B4%2BK%2BftexIbME6DYCAAOhaWcCWl4EfszJNnF8LcumkDi9pC7OmqYw9IH5fgUZiqKbDRcLbDOaGM1ZlRoAhID3Q8efiRnJMOdXwH7v%2BrLVqayE6ftpRAAaRfinJqVXQ%2BAYQHxvtOiAtxyFk4Nf53su29%2F9QoVUhlArxLRJ4XG0w8Dyis6TjG%2F7NIJo8fOCDeJuGD8d34lyqEfo7xcEOqb1FOXrrCaVH9AwlmyOQIdF1KIrNcZncrWXcP94TrbA9hqQxN%2BMj99CTJz0ejBpkIB7SGqt6bNuvPGhW8HbbhnDosuTtszn7GSgysh%2BweAbSRy552EDq1Qfly3cKaDAOzBRRGZQAOfqPcgJ9ySOT5ePYBHb0xXdOXsfMhMH32O588ecGElR43dzMhhgs2rCX5JEFz9q8SvT7QpeE6n4O2rRXaE7gz4UI5B%2FpHj0jYi0Y6tHoeB9Iz%2FGKkLkkdutzDqhMXJBjqkAaEVOUpRkNMFfhnfK7cvFi8CNahBSQafWjQ%2FcKsZUe8ngMcUGA5QcXuNQvBaOELKcD%2BlCcNu9PSXoc68Kc9uUTETloGT8QIIB5QCRopTO5dbku4F3jLrlVdL4ottw7NH%2FAWSE6VvPsIzjY2QXbQBZ25XlDfdubxIPJng14cuWsQbAnmKNjNhLHkv4H4xA7Dkt%2F6MWjcJGODVhGvOvrIIQuGuhcx5&X-Amz-Signature=de5c819316a972b9ae15fe935a0d042a0840c04f9cc141fb21f3ca0d649a5961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

