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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJKRX3A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOEPXwzRePWCSZYl0SUPM6gnyNU8BHvARjZJkAxM%2F3NAiAiuFizCsfp%2FTU8BEWQawaWVuPYqAo90eWKyEduee8m1Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMm9WNpUXlapFWFh1YKtwDjz1wBnkwNOPt27WlpAoih9daNVlHgAZODw7jb6tZh7XBDsyYPcx79S7erH0yDFDAW8gaMQfNZGIGkp930Bgo4KNBTWawM%2BIHHcl6wMqCnNxBLlsc2QRGteNmK7dhq16jtvpJaN7wjZ1jbDPYQ9UV6k8CNy2JzSx%2FTqVq0vTirzTFIPFAl1kVAzK1btTeXs4Al8ASUyUEDcaSJQWYnrgj%2FSA7%2FJhwnRPM28YFeNLxrio4HWzBdjz1qt%2BSvbEIyzw2nw12IZOAd4b8mY%2BAA78N47Ycp9Cbf%2FHn08GHGQdsbiyNCy8voMd0uqXYfPNGJHL9w1o5YKOdr5Ht5DTWubXHYaZWcI7g1k2u5aO00oMvZe3cianv6tpS%2BcThPOs3C1HSvQ8Y4pod%2Fw9t3ZIMqSgFODFmMYI7OPNwGHK7p1zY73NRGJzLwqkYHB%2BVd9WU%2Bpaw5VbOnSZY999p1%2Ffxj%2F0sjipTv7e52MQwqkC7FY9gb5ddkHXLgEP8ZHxqyWRQo%2FF4WU3HMMcxse5EpWN%2FvVThWJDd63MP26sXe%2FESzwv0AOF1r%2BsdkcXx0a%2FeiSjBh3CNAXj2T8AOE4tD%2Feo7paAOnipmTTj8zJQEFsmoGC5z35ON8LVhMT8nqyszEv4w3NTKyQY6pgHh%2BRSDJiPCtuIB95K5vSe2AYgIEQCeJAK4BAa%2B5mRy2vJB0%2B0uTTJq9bguamzNc8f45NrADAT84Igi0O6M3%2FVxm6C%2FC%2F6EwOXT5%2B0UJnxCv%2FSlQenbfZCdkWrV%2FJ%2BK3y6pLrS1x6cSSbwjl5LA9MfkUZblhubtvRmMJ8cjAK%2F%2Fjnw0B94naIpYBfJpba4RunTr%2B0vguInOJhO%2BNk0%2BuUpX8oFPvY1r&X-Amz-Signature=71e7221af97de0c4ce12eb4274afe8fe95cd6d9281e87d5b557df5f6e81fb2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSESYLQO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2J15zbjI9pgrEYV8zRvkxgofegACvnyqC%2Fz3Z3VJKsAiAnkTVA7%2BpS4EDJC8IkKI3jx1R87NprnZYN3j8oDK2mlyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMd4kGZ7MkBfvz9E1HKtwDWd7dFuSsAdthupyIhmjkBGGSZes4JcegZD9HexznoCGUgsw%2BnG62bBVvGDB%2BhQG%2BlnziJHK31rQxQJ8fcTbV5LB%2BmkwuIyJAAJ7aRCH4uou8EldApxouY4sb5wux5xuyOISFUPyIpyWodsYxa0qjN8FlXnrjo4ZI5JTttzh6%2BP12%2BjuEST2fakFK9F3GUAYly3yGRNDGGs4kilP3fLvxx%2BNZxqFuXA%2Fc0orHdfOPCLO1kEKzmWWV17fmPrLfHMIgvAV9Q8dB3pszuXj2VAMpLTTLTUifMmaMa9ac3ONolcOo9mibQBByyuRlnQXl5riFOZlqHHFlipiI47xfZPP6M4S1JgssgVY6RrPADfWSFN9BbVqogr7Fh5F01QRe9KXO1WTQPG8TqerHYQPfhMdJ5ASeGbIGhCEREQQn2AtnfGwcQsDH2iBnGXdoOuuwNFqii5V8%2BX%2BWY7S%2FnqGjxndSLhcpMCCmCyTpeMqUA6UibENVbAbjvFppH%2Fv3mhaJ3l9Nm0QdyZqAUQcU3tLNxCjhRD2pM1JcI2oKfGSL7RO60ScbHUBZ0%2FeioR3NsMiH27L8kaKxD%2B6oH%2BsCQKTZQ8D%2F3vMI0ZZ44muAIuKSxMjaBBftrHFC54WZ8hELdu0wkMnLyQY6pgFEWyvuVSxr1Ry1GzKz5e8WkP4gf%2BuwnmFICGomqKHZZfmwFvxw9LFYmWttHesLQ5osyLzb06UIVzAiphu%2Fmkd8cXqNr2oRC0jr44SgUiCLWLegMlpUgh6f6AHGmorymTmFlqiLYEx0Eyo%2BbL1hpvWMH4h08jDX5GjTWkAoRr%2BICRaoGoU5LanECliHGW0Hl1ZIHaRyxapB%2FMZptlbBRyV05%2Bs9lgyz&X-Amz-Signature=fd4fc6d37967c77aa7693fd63116cb75d5b665f24b7a586b51c5ec1c33803d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

