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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5XBARA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHI3aANDEk6QaqAz7pgUW1kbUFXj5LsxmMShI8cUNQtrAiBoe4HWuzCs4r2rAfpfutojUTMmRah0wHTybJmMWcy4WyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYUw7fa7yfNBmxMw7KtwD4fyDhN8ITZa3aTcKcRm5ymyONIFinWjeUZB1ryrIq5l%2BZayBolO1ppTwRb6bI5FE2qfmRyioBrhPeUJtQVzFk9K4cAk9mBM2AlVqf0RLQlgU2MJtK5%2B9J4sOqjf2cl60LFcAncLZU8ijgrbtAz9DS9T7cf0%2FwZxQqx8j3uOtVjaluaNoVxzZylRyYFeWcA%2FwuVaLyBQ%2Bnbd4ta1fhgnbg2G%2FCk3WmAoD8wdIVSSV7q5i3e%2FSDHU%2BspcSoq5hatfaxfO1gbYeRkGgufJUyct%2FJY0Hk%2Fv9k5oB5vklrZHh%2FLWfWKjxjNJCuZUNpl9mNQpGGrNnS8awgMe2iSIBy9jMd4Mq5vkDYiHQ9eN1XX44v9ad04E7cLMyk8Ca2kCeQJdEy7r29aaNTsgvSJZyF%2FaOoYOBrcaBvIbhc8KH7rCp6JS8h1EcU6m736Zh70iVWwhKcyBZouoBQiH8GnlFSmWOpMIU0cnPGF%2B3%2BzGQcmYUlUPo0Ymg0s5OHbONYoBY9LmMEm%2BPGecxEziqlr6QZ8DIjQD2o1LaH3r8yozE1ghPI9EhxTGavTR9lN4%2Bh14QxWn%2B5T2VvkWOifBNGV3TnBeP9o66H%2FYUDjuBpz3wafInMAVSvsJ8vP4j3frD%2Fz8wtb3WyQY6pgGHsH1FdE8hY%2F1LSm7yIwL%2BttcZ9CQcuLrkJVBpHxHQsT0xe6lG4noZ4PFP1iEPIrPyi%2BdoiC4FdBkN0uZ22bhhKwCcu3USFWg60rbLhT8CF6kZGEzZc8nZ%2F%2Bd3DmGoLNvFjH8EVQQA%2Fb7Gk34bbixFhelFL2lETtnODbB%2FdVFsUhM5feQj4WTvvvvx%2FjI2mYFKgI3NVXgTOCinqEt8sGzK7omr9x%2FG&X-Amz-Signature=5c8dab05b9add00da3d13f2e7d1a8b38f2af31a5bc14caaea78165572618bf4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YMPWNXG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPvraF6N61UyIoEqUhVLQTPKSOWLtDLP4CuhxX%2Biox0AIhAJjmLXEZCWTmxg3%2BBqYJX7IV2ogyu1uglY813EJefZGwKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5ic2F7f3s%2Bhx3Bxoq3ANP72Hd0Z9jySwqOTzF88KXcyHHRGIguGbO30WMtyhyggMJo0YU%2FGPIJ7uhpQh%2BmophsrJ%2BgYVeQ2%2BcZaLvAFdPcIbVYaZOpggUWr46H80IKzWHn81OgQAkgYq1MCGlI36r1m%2F8T72jc6BZ%2FNyoQaQy%2F2j%2BW6BmBRgBFRlcc8DzvlqM2MWgdUvIVo5OpLPNCPRblOaxGrcwn07H6BaHhmna9nGBlvhJNOShLJmZ8QTfqYU1d50WAHipi0KNeReXSpVcN9OfSu7QYjAwlCzWtBt9tapn89CbSP%2F6O%2F4%2BdeEWCDdpKDJPtXU59v31ir7A8w8D%2BsNGH9CpG%2FFRpmdyt10zVKbd7eKh8TS%2BslP8A%2Fp2MrLv3atYKOwlg4VCumyCWUMYFEZGjoFQc3HYawnsKHY002fGT7Cxx7oSTIUdZgnRqhc82mXelW5z7rs1%2FpqBugQqkiA7p4heBXV6zdLvjMQhWoR636DlgcsxRQSGI06qIPSzuwxdNru2j3QN5YztI3AFxvtiAeLgzPkwlYvZa5EsxicJZK%2FHdjc5e8O%2BhoYL80Y%2BQI9DRNCaQ2BiCulkpnhkOWSCDYj4n3TtR4ueSrMd3N5vpMt3ByU4j04rKmBQE%2FW0VGHL0ifks6f0TDCvt9bJBjqkAS0lQWV0%2FjTMf%2BfAwLMIdHyvMaw9asyFJueFaMRmCiMYrorbKPAWYEePXkx%2F5YxesmNKD%2Ba0iWj9ENijb5L77U6XxsREcbDrBF2p1Qi0aFBL6r2lI%2F1pzgrDc9XiAvgGdVRrEz%2BpsxJaCHgfYlEfdIROUkq8GEl498UEsURUPGdWY5fV8tERhn%2FLaGYnom3nnit9uU%2FhNpVm%2B9fgcrC9t6EiTZO%2F&X-Amz-Signature=ad47f87e2e9184762aa561736745227e528b26cfc3c19043d579fab46327ba37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

