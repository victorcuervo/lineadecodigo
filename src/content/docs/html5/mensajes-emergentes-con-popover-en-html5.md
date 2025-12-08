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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47HJB7M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDClEfA4Yd1v%2FUnIfUfIde3XQ6t6SIEWp6mXfq3IuuzzwIgXIWA0ZmQaXlcuSKu7hsg2DThj43sAi0c7kxaCJnMWgEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeZflnxb7weXGNvJircA6copTX6KUjiV81JXEO9ZX5mNREj12opl4FRiu8qbcOiWIfeRzVbUVdhMBNG8UVQtXhpnDFu%2FED3G%2BpaGhPwgR4cGxOMYyiUobsu1Ixf2dkyB8F1%2F8Ipcu%2Fk0G%2FJncI6LJDyZw9fboUE3Bl0digp9G1LEvtVEpW2INUaA4zlx0UURyswSeNyFOzVWt0mWmcY2SQ15R87R7cupqSypHp4%2BhULVZvS1Qb%2BKwlnxt37I%2F1nBjZKM1knbHuWzCfBjU5JIRtu5Il8OXgJ6IOh8KbSwYPi08RXLLL7OpOSosVj3cbXKWUBanCzLp41RaV2wgaeQl9q7xa9FY16q%2F%2Ff3zAgIUB9fJosxgeaO99%2BuIR4nn4KZ8UzQi80AVm0dsc%2B7BQ8s17TOMwD0r4wi7XlAsz8w1QIqNPl41Db7EuN9sWb%2BD5D2DodKgEUG%2FtIMFDWEJhGp3Ha9wafmdFHwW3tfL6ZHFhtrZpVOtfJhOcxxkUjI%2BH7aD7xyTRhxsVKGUPZ9xJidO9MB00Q4ZzN3XaGirosQlO%2BWUvJwjKiOuX0q5svzM5kjeD3CT1vhusVLHVSfg3Io4mIsMdo8ro1lgaTutte8lYIsq4wZ4XWHFj0CklK7JccoDd2zYU3CI3SBj%2FkMM%2BU2ckGOqUBzcvUnCp4AHAKS0dBOHdHaZ3lkyk7RTBaijN4zkPjVDPNDDruxujifgm4fWH8WZ%2Bo7VKWRERf26HveD1%2FwppN6%2F97fWOviwgN%2Fv4ah05vW6Mj1d8lQPgH6axzVThWT%2BThIV6%2F%2FOfFs%2F4a9YAua4vnSqu6v3aUr8n7RMu87Ld6lQlFqYG%2BAIFVDlquG3XvrI0D9g9wCccuLHy1PHWwZpl8h8rh5mko&X-Amz-Signature=8cda8b06f2686660c17ce5a7cb10b9905b81e08c78edb6f3f6130e556680c2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKVZAJIY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYi3kafBAW9RjrLIvD3Qa5QF0YhB7wSiMBmxFuV7OlqAIhALWe1%2FvGAzmAEv0r0iCMsnjJLECaO%2FXY70Dnq32qV2wnKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOIXMFVIVv9%2FOEK3Uq3AMXU%2FGX%2FQPbU88rQbYBM7b93gbGzA0a%2FvthDpPXQ8HcODhJUW6ARmF2dxwB304Jc9b3QLDb1WxzsNK8S%2Fld5gz1%2F7oYs%2Boea7jCbLSIo9a91V8eVBSaA5muOJbwwMxQqP9OjXC%2F2GW2kAO1lVl3HJvwHBF2m9Ch%2BckFl3HYBlSG2pfHB7nqhpcQl8Tnd33oUvycFRzW77TWKrQR3iDNnuYk3jrRDxl3KOI7aCsNxuJvCLh1%2B8Yntd0qN5h5LQDa7AgDkfuJXkpBJpCY0cUVvNeIpsXS1978jDUO069LGg4ts1%2BUg4wm7Zcn946HW4dQKzYXdjYdC4OgJDvthbHPSLFrx4Av9E3%2F8xi%2BL2qODYtLquSoGwD7N9VZpe%2B%2Bu9PxbQ3clz1pY8maIvPam2FCYN7oL2pBOioh%2BR8PUPij3ZuqCzTysK2onr7F%2FwNCLw7wr1wBc18TDfvYt9tncHHlG%2FkdjBj7u5RgeCtIyBuWt67S7bdKBKTRIdXiWLdULNv3%2F%2F40SzLOPgJXonFol51SKrbn5ZAppnAw5Yo28cb%2FektS8uyNdMeFuUyQopMHFAVdv3JDnZoK0b38FAelhIjSkNL6vm1geyQAqzTNn%2B3thuONqvPSL44TqfmU8zEPbzDOlNnJBjqkAZI%2F8JzH3ozEMxA%2FVlB6lRkJAsRDiS8cwxgu%2B%2B%2FVsdZMCahFRQms%2B3f5hbR6p%2FAkkt10NQupZTbokhR0%2BJCDlaw8r9ttoKJm%2BxOR%2BfVADQxKuZR4%2Fc786xOCPcuSiTXWHNs%2FvyUKRca%2BQhkm5MyBnYz6MtWYf5hAk%2Bw%2F6v3BzVtg2aodXc8F4WS3ijhpXwrr18HSeYV9VFaPGZ%2Fl7CvQkxMz7Y66&X-Amz-Signature=52594219c6f69adec157452723bd6a3526a1c9ef421d382bd0ee2f123202da41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

