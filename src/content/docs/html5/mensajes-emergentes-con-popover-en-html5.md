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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIKRDG4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAguXzl2GCeNqFjZ54GbfASlLxiTUSb5nHFnIao1c4FrAiA1v2iEdbquvzW2MUixCvQwl1a%2B9OlrEXl9dHayhPcqeir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMO7YUgC%2FsmeGpat7WKtwDe9w26g3ONZBv3HhCRCsxU42utc6Ub8Iljfr1TdVB1rXDCnFGyLwQ%2Bih8I1qSU7Q76wJ59AZAcwdvfPVjrihQ6Pc8rZTrN%2BJ%2BEgNrT%2F6Keg%2F9CWvVB%2F1WCzNq9kCm%2B4%2FRp8zaLC4%2FxhrEATKgEkwFN7UrGEdXQ3vyR7Wl4%2Bim3IKp4W%2BXqjmJUHRAAAwbPWX9%2F11u6ybJRSIY8hMHH9wpX12cxncEifAxYg7cEIQk%2BdXQvvHPypmgreL7EJdkzW95fjvVuPNytWkwzPa9J0HHk3bTqQ9Raqy2JEKZw5dVa9wVuzBYpgVL4xBV8aWSvMqH251bEu0QF3jUyZMmVLEwhQD9IyfkYLcAuuIhEBWIMzrub5%2F4baqAwDjrsMYzrt5V%2F0r9vn5KsSTU3NXyU0BRaEWOs%2Fs79%2B2Jk0Giy3Uh9ZlZmHDBarRrNSTIr4lHV6NNlSKpK3jJ5AvUjlQeqIqnz0zsd2%2Fdi1houqn9182XK985Tuaesm%2FgPo6T1WCuVdLKPA8Ujzij8BxldgJkyEYZbXqhC5VcQROGp3f4rhoUiFBNjTv7IYlZ%2BbJrzjaLpgsJZ9vZIiJh2FWhRqgepaArshaeRj3B1eHohT5lAYvPCyGORFbiUSNc1iEeeFowlMPOyQY6pgGh1FKcEP8oQHnacGMx7CBJ7hOUGSEBVWnH9i1jYjwiRzcrVFHQkbSVw8%2BsrdzrgyqLoGkM5SWciKWqsR5FbV5%2FkHZzwFi8P1Y53uB86SzPf4cliSQ%2BZ1jzozmXSY8ZMO48PBxhTH%2BuGABRw54EHicu1KJDq9jg7%2FoQalZQSb8uVjyhVI7BaotmWq%2FLioHH3velvcwyFEjJOxXQVCe%2FU3S%2B89CX1AXC&X-Amz-Signature=b091af5732d05f9a0e6c473f19b36b883da87957e5104d0ac6712b37dd81bb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJEXOE33%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4XyVwvlZqdDWrVXngSApEkD7gp8KiwI9Ah4AV64r1KAiANrVRFnf0MURG2BL7vhObSpwb5eCn6UlBvacXbGit1lCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM8zgin8MvGwBlUsgVKtwD1eTWghpUPQvW2EdsXbkwGkYh4322GJdQtBTqYoJc%2BZKdE34pKcJOw6SDAivLyG%2FLGsfTFv4HhTpxRvRii%2F%2BhJDLgxFpQZSnnguPmgpM21ToY8HsuV%2BsxYJapCnJs5mPDXJHLeiU%2BYxAtC6vOWEz9MEBcgs839NgXW3uZaFevRh4DnyVGaqJdjXTolp%2BJBvNEySarkAhUqPBcA31%2FLKOXuMM1JsRHleAyt5rOx%2FRuxP9sHmTgg38KHjnPxOs2rgs1Z4zeTUSjcWovZomVKZRMYuYA8W0pFFGTngYK4jOzMZGEXRxT53fbc6GXziK3r5R4fF%2Flm4ffDVyjgRI6TCHIQnFQQDWdK19xvqjhb8q4CFTArk6RR4a9encqzfkyKqNjOikto7N8mNpOE3M1gFEiVsMDsutACTRWwHF70fyzKWxtVaw2hxaqJNDojenIsbwDJ19zG4SFUkAJs9Y%2FiGn6hZYEgjyYgatqNPsK1o50%2Bp%2FgAdu%2BZ%2B%2FB1Zv9KjUoNZLWOOL0LSRKrtVHf1jKYYobLcODBaFFOQ549k2agbbJAMQZ7m82nyit0uWFTE2Ov3Y%2ByVco7UPvQSSaZis4TT2tRRv52BIoaJ0tFAEokbIHpoW5FdHJStEMyn9OR0owlMPOyQY6pgF7sseReaQeYr28yuvpc37x3zNOhgEFLWuoSyjAAWuOk8r8phRN6ZbnII%2BWZVvIHmf98JFOzGnh9JwR%2Fkr21wQT9cZ9nF%2BfwCoFv5L%2Fan9eYArumgEGY2pf49oph76cjk6PglvcCUfCgBda%2BeNVwH9TwAiACGPF0smHaMVrstc4CMYoCiQHtUi6VoR9lJMpi0L%2F9DeeT7IRfvAymba4P8jKBp7Rgb%2Bf&X-Amz-Signature=01a260f0e3d2d71a950763d8865a666886f958a4df40c7b647fb955815a2cd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

