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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN7TVH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv3m9200Mef1NNaat5aogOX6%2Bib01G%2F5ozpifEE7Ns0AiEA%2BCMECIq3plRYusb9kndtl2ApdJlPhmzZ0jFJ47lUOp8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJ6sAGShsAGN1JRECircA%2BCagGq26thWF0aolJJ1l9zJ1hKCpnsY7lc17wTXcT3gQfkyrP%2F27C4leK0CaLdM8s7xtPMBKkQIH3BGgHi6eC5BNbAo4PJa94qIoTFmOWic%2BXPHGaaIUtw6Jhebch5ZBpYq%2FtjjA%2BUoOe9pIoYRV7pd5kmVcah1nkgdNs%2FvPcDZIic3afrpfKQswvMaA%2Fzm5THSk6yH3usXg%2FAQXCj0LJFBkMhOPKkJA3iijqBvg38y0IAcBhCD%2B72CS8RYzW0HJpFHwpxE2tPJOg5LyfD%2F7PawaPKXw795nbN5E247k2UYPl%2BDejhA4hnzJDAob7Y8agswil9yydQCK7daKAnu0mkI6GQaKQGC6mHCCCkUSN%2F0KPCg6Spnhg1k7sLd%2FQUJxyDmiQzGHJsV%2BeK6MnZNH3YyS5ill8Drq%2B0ShKgNp22Gg%2BzDHtuN55UKLH3IdgfK%2Fva93IX5JaI6wHZkKeADfE5iQNu9U5DTp8v2drQ%2Fgw2XyT3azi3Z21hZNmjCfqY%2B%2BKovUPDr4kgXxD0Pfr7AHpUbdm5ES46mpz4VGI2EGdwxqQgb11Jzc0BoKciBsvYM4wpL4ozj3%2FHL618YYc5%2BJwSIXE9ukFWUmo%2B7RMsxE07fsfOVaRAxZFpBIIrYMKnezskGOqUBFdYpKOYTOoWO4N2yXP18WzNZZtDoeXnB%2BOsq1G3cQ3Q6O8UyqWwO0LClgsdkwTnnVW%2BLxDlmn0Kn%2FmU8xdHU%2F1SyktvsvqA7Z8q%2BX8NWoGNYiK5oqwSjtHWE%2FSHA48T6avAK1FS1nhKTWkghtmHUGXdp11N%2FdiUIO6jMDrM73RyfTAjUVc9vt%2BdoYAqOcap1dnYaqtiWYbHAb4qv89ZqQaH9peZM&X-Amz-Signature=5aa62a55a06d20239e4f4c32768038218707fbd1dc6da8d0af96c3114372fc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OAKLZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAe3%2Fjmj8jekSyfqJGMVWJT0gy6Ps1Wv%2B2h3XDlNaN8AiBYIR9HK0keCJmaQ3WD5vjM2jDSR1U7ahAGfxWXEZGBlir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMxxKwo16b5Bmc9ed7KtwDx2ksZ7FAunK%2BvrnmIeXHFG40Rv8r%2FNcVGcNvsrYuov8sMcfiu3%2BXcJvbKqDD7ejtzXqsEoc0vdl7aP0uvjr3vKqSgEKkHDw%2F615BPJoY7CZ4SAxet3K8BNWNd2T4AGflTf%2FoKoqaraL4WigNjarpcf%2B6ufIQK3Hfw%2FxuRfIn4gQUPPUEOKNzhZDyCQmV8DZN3eb2fzCwIF%2BnU1xL4yfHZ6QTCYT%2BjZINfFPgJ5p%2BPIxs209V8H1LKymJtUXjViKjDBwLwqDo1mOd718%2B0YMwVKswgs%2B%2FXKQron6eQ%2BwppNJR4iXBlO2LRUde2YGpgpPANyuF6BanZEIu9Pz91i7bonfEML1e66csvdp%2BCWSB9ar1xNjkBZ3cITtpL75igp87VA7FvWp7xAsCnuO1%2F8FQwXSWVDG28%2BZYfbDRcqSr2Dd0lnJujuzzb38ZtFzHKsV9Zyg3eha4KlCURnqFyQw1DpzWHOgJsuRweDaOnSzOOcV9GGyf8huC4JSdqi9PyxWwSBcxt%2BA8VipyoqcE1JbKGsNAnI1VYH%2B2axOhXQm5j5nqJPB91jNac9tHd%2BHJo7qq8qCzem%2FwCS9oJcZZy5yYg1%2B8mKdyyZ7LqKCJlIR7F2lOy%2B0ozhD3hxVzOL0wgt7OyQY6pgEUL%2BHgvpzkjV8Wm83wik3n6arazn6FsFBb9138E1jYSp%2B61Lu7cqY%2Bb4GWWbj2qPuIRRE9dkcVwsliaqDjZZY058IBjOURQsAPZuGOf9PtYyQILgV4S4tGneoDZDbOcoe4eVLrVh8KgT4lj%2FldhIEusAbJuWPpMeo3BLLX9UpE55ujMNk9P1w9u7Xwg4lV8LjFOC6%2Bz8Fgg4vbJgLMInIqWeLQSm90&X-Amz-Signature=d69e4b89e5c88d893289129d79692db212860d79834f8a28d11870b6e4292e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

