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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7EPMD3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdOkutd%2F4DXsNbOjf00bLKFgVqN5OFsU6QnDgVgkAFxgIgIViY7SxdnhGSibKI%2BIuGk4vHPMzvU3b9SbhzIJTmoEgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyYZ87o3vwYVig7LSrcA8mR4JXu4UEE9jz1HmMq5FPuKJX0vdV0zHOkyQaEg1W1O%2B8V0kndrdh3CrS%2FzTZWKAxbzkjvTYhtzC3u0kB5FqcCjBos8UeHeJgqnMCtwem1U1aMUbxC0yql2yd7YZDp0mQ4i7JODGsTf2FqotqI7LYmMBM42V0rTBu2qZLYPeeeiZtkZJk0WHNgoPpRG26PwBDMwV00E7DrE9h4kw9Pd3RsQF99dqj5YHlxxCM7V2jcGBp%2BOF%2FLSCV6dU5IpQWF7P8Z6k6xt03eY2YG6YhKRNf5LujcGj7Y4vKdireBJ8jcWguqO6tjJUw8WW70ubY8qublNcZ%2BjMSHARt9AZcByTi3NzilomwiEerPYhG26wAXKOs83OXJQ3rghTO7gZf44XuuekuATD4WmncFu%2BOpac%2B5jC9g%2FRgeu8M1R6G%2F4euN1TbMMNeFXOeYOa%2B1X3DVkvGAUGmMuI6pl%2FIncRZbX2GjukIJEZu1trs9NdjYzm4XnEuiB0Bz1eh%2BLraviHPQCB888EqZBC2U64QUsPgoNBJdA18dIPdMNOXgFo%2BYdnPvPcxwBYxK4stXeEJncBU5ZoIN%2Be%2F518akwfkquH09mAQ5YkRwczHjg99ZAPF%2Bln%2FttS1mWtEn4Av2U6cnMNCc1MkGOqUBJ0wViktODUTIS0nWQrxLZ4VOb9qvaWiktrduof6YblzEO%2BmdIQ7aK2U3nNXNhrxFBoKQORyds23Sate7%2FaRkvJT9Kpri26pNMI0vZ6RBBnRkqgh0H%2BzMQhfBDuYJE0IGPstm4vnzijS1JYqa40fG2a3uQJYdlDRgqlaVevnp1giAESSkK%2FfpV4nktNXPKie3654yHBe%2BgEGwf91clTEDUhkAoeeq&X-Amz-Signature=dc8294bb07cc0a1afd76150178e023d2b371a7dc7a4483c0c31871f4b5964844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IUA54%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwCImoqnT8VWSJrJvt%2FU9ZVzML4b%2BPciDsPOFF55tYHQIgV9TCh8jQ6S2wTW6tttEzV%2BiOMLo4gO5qcPVlno8YNxsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtUTC6G%2BPN5WDmwxSrcA0eqlf68zCDbR6vXrUrRHIUl3DywVCsMUMNRlDrYaiZ4VSasj%2BQufocwvybztJ7yk7LdanIOs6lFi2L3EXW0iExJN61UMmmG6Q5auWu2Z1J5KUhvNyQMaWC38oryj8S%2FQ4QqQ1ZsyecbG4bKFlpRgVaZ43mMTEZ5wZPBYB8Kv2aR3pM2MAVBYoTsBBsqG8iCKSkTizW%2FB%2FBqnqcc1u%2BUoVh38pZ%2FMrOBPAL8TpddjOm67qXwmQfJyUjL3ePpDUF4REF1zpM6A%2FtvIS8QS%2FKRueg2QalIQxfwzW8oR%2B63Oz4BEYrj2u0nK2Tv%2Bowwsdz4Jy1NOT6V7huQfsvgzXajgeBtQ9koVktfjQxM9qTDK6BgkofQc%2F24tRpvGPOQ0lRozEx0wqnnWQVgq0lYzpM1YY4kKUClTJ4K7wDWECRQqWoW7aanZbIS9rQTcRJDMg4Wt6YmyTLd1NnklLeCPRiJfNPOzgF6uUj8jAa%2BVt8AfUvJ5sGugEZ%2Fjfnxd4GvPN98Xws8mcji%2Fr%2FpVwN6kOJSxidmyU6UbaKGwwpMWevo%2FOu%2BBDW7UkY0Kyd3BNY9ZR6JuZBFVeCknn4LugGZWtf1%2FOFLeUcfCQ8miiNva6TKFMXzj1F9vrh6PnbPVIA%2FMP%2Bj1MkGOqUBVg55lmt4ymuAwzaq%2FNeqEmRO5ecpayn6gcQJE%2BerFbwwI95gJOD%2FDzRHA7yXsafGHmDB1H6%2BEm74JTqMEWwB6YKemxEbuJY%2BEAbEM9p2EeDAwcjy15R%2FbWcysqv8aUDlxVZx9riIi9%2FA6nptj5UL8Pf0QkRf%2FYycuI7wqENvye4Tw8TyAyKu5SrbhDWgOyofDyBdxPUgS5140FMN1zvFUfU4mExw&X-Amz-Signature=1ef63bb0a97599342e7d45adab947dca86f5624ff73115afc39db404c094676a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

