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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGPRIVE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICoJowS2U0IHhvLUG2DqXq4RSWBCxUWYAfIkcxiB%2F85iAiBzqfwgVAASsIBQHFFyAqM08IjVYGpmsdCy5H%2FNJ6fQISr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMLcgsn0HOVCcBQiTWKtwD1NWglKWyPGefo3iQIX4kxUWEZ3aXaL8ul0tFOLBQM396NZM%2FUnuLfpGSCnztsPAcFvFBAGUpl2HVAK9AR6Aijjx0iHWm9xXVKxxlbn1teyhx33F5XrwLHH8JzbSMofVqTxRtVXsE11ey58WGqkBZkf4XjAistd1mV2n1ndaq%2FGkVXHa7a9h%2BExrOSWMcsvTngV%2FUCGgWpA1tBD5uOaovBxou8K22oe%2FJ8Zk2MUbItqZ6vmqL%2BrilBuDJJlXSmeDvKN7Fgdeg8srFVX9Ec6pYk1%2FXWYOK4MtHi81UCcpw%2B%2BXWy3x8tJsoz2naWoF3O8AAc1K0oHOXyxIB0GzWOVuLJLP5sKpYCoFyp2gUJUm8i0XCN5W7syzKFMjOD39bK3dTE2yhqOdrZGg35mwdSBcsX8tvI%2FPKPtRgnPuuEP9vll67yi%2F63CXgAjTnw2EiCnwqftAk7XOMS4HLN%2FO7m%2FfPdXy4DnGW4FGR%2FKHwaOBWV%2BRFjv%2BqjDrAGFUuc8%2BQWdGt0GUPsieOh2bSkNx5LaP7LNzXQY6vQkjWJwVPeq96stGRBUo4MLCIsQRh4T7gCDKSo19o6sQ72H%2B4GDsk446fL19DOKYGWOzuQz2jyyCbndpfgocg8mF1fTLc4Swwh4bFyQY6pgG81u%2BLkg2%2Fe3shOdwelmrs09vRo8mU2NUQaAxqaCIdWC5mGsyS4uYHAL9BdgucfS0wabUKWYTpaLTNgQcwZ%2BFln8uBTx33A7cGfNdNPaH33zGUWLWCogIZsI2vPEutzmK%2BUeB4Q1e1OT6ET1Rew%2BUykd54VsSRFHSM%2B0U5DIZWxwPjXzGMxNj%2FkG1abuRs4JX85R46rVBpQPgqzSNjxV1En4Xc0Jpq&X-Amz-Signature=82a98131ba2c37fe264d5ab3c733ff5209577f764fbb1aad908a365ed8f9a8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKZZUH4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBA3nz9T%2F5G5puZJPsIkqg0KFRh3oCQ0T%2F%2BdxphdfgJyAiEA27agxwkjJMPy4oWFlfthZtJvU4EwxVhIrY9Vs99JO9gq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJTOl4r00K%2BuW6a5KSrcAzn50Zw2ZcRIuwrnyXyHIh8Oylin3q%2F9ypZhk05dLF0NVs0wHfeUvU6AIIw8eWrjme4X3hziK1AGJPk%2BOWBiqoHtIFwrydGJgsVn6xTUOXZrfHE3zfHAOzBkEHK9Cz5Fd0Hro1tYOLMfREZSxiuUh6i5iHKgQN5TEHLZXBUZpl2zq8hnGqF6sqllbP2iYDZS8jQYthG7pwX31fpXtV%2B%2B4ciX48rg9o3DqRMtzD9gBRAZRW6catRFKgTJg5lmSnZcAwRVKSRZT79Zcfo7QfO88FzAuRUWE2YnHasOCFMYIQB2ly99XH4WHO%2FHtVwzuTq4iDBZBkKRRHIqjaRGPxqgpaC1GzmyzUZq4D9OgaZRf3Bf0%2BXBeM%2FGWYtSYooGBMGSCxpJaUTkQqPbANBEy9C4f9qjkcgstchsS4RYkXac2eJEwLjliczy%2Fwom1Ak9Tt276lZKV12DieUADzNLUE3AGRYrTYkkuj3ZVzhZ%2FC54x0rfEOk%2FiYhWernqqYdXXYiEl7qFfdAS8BIgFCspY0DVxAbP0HfrCRio%2BqRuPGobFiREuzYl6MOFDR76n2IeQ0SfA6xm1euN9YkAjodZE5J5MA2JCk82PhSSigdcCqPoliZghSpIMMsyESuZpH9NMLaGxckGOqUB8fGQoIvzR8t6Mb9zK244Tsq7dYaPGFUdDCJQuB9UVUiGY7jw%2Fnebf%2FZ7LYKzdDCysgA6KheyhaaAL%2FOfiDfg9OO64N0CAVdSheYa7tZARIPEwo9uDhAypYb5iR7mZ5DNOlATZUIjEIeh9BS8VFRA8QtHl0IA6gS1QWk5hOJbpwdYcNQC4XnbD2USVdXp3RCALUNtu1VDTvZKnzMH%2B1I7dzDUwL5Q&X-Amz-Signature=9c5d1fa99547ab790cd81204a0713a8d4104b1e64d3fa0c1bb522c99d79942e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

