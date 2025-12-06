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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHMAYUXX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyBBMalG%2Fj6qRF70uUOciuyg9jGxS8sroN6SX1NKyCrAIhAO%2Ffq2n%2Fucub7NZ9XhmDO5w80l3b3lon0wSPOkJkSS1xKv8DCHEQABoMNjM3NDIzMTgzODA1Igxbfutny04K9hcU6Kwq3AM93LDMGXNT4bmsDP5wc14cr8zxCyfVgh5ydtEhX%2FO9JBzL6STZBQE0w4xv%2B04UF5bOqGHfLdDFgARN2U%2BtdWPXnamr75Gd7lKf4%2BM%2FG161CCSVqNv6jmQfDieflq3JPi%2FiMrL6PtPbsGJLtwqPm5KN%2B6yCIai6sZOl421hUQkE1AgXToyp1iGfLnZb%2B6vhobKKru24BsctKbyaqZ2JgVAJffZc2LZiuHTJEf6Oeh%2Folw7jNvRZwsyu5Wkd2u0AZaTv7bsOt%2BuEirkmKgQdclAPfHnXkFSDLCztMayzXADr%2BW1FRrkdsiOATcVCUk8GVEjn%2BbXZnn5VEAsq2SOfIRBA6JeCVr%2FvwHwl%2BkNtW6z8EmKlfETfGrXT2Z1ar1YO7d4JtSsv5bpiuoWMoLbZ97awsNLqf8UB%2Fc%2F%2BkvV0HAEqrORQjz0y5CmZcCDvLpK05QLn8N%2BGf%2F8j7JqHT6ZGSn6cpBG2SVJQOE7YSKeVk6FUmE2EISYv9bzs9Fo34McHfeCcUxT0SNaHq7atxqJNe5ReoC9w%2FvHEwyIyOwwHEHnHd71RNCo%2FLTCdyiBr%2B8gQCxF1hrsf9VyCKWOLQYsuKLKlaUYZvbi1Hbvgy6O%2Bq9Snv%2Fp1U3dGE%2BGv%2BZd0%2FTDGvM%2FJBjqkAWHbTv5IhzFPWYRy4RCWoUr%2Fp8BWpD5c9Bw5DcbOLsnBGoq9iDbXjb0AydLASpt9Lk9H8hUlmo9Cf1m08q4scoIgRQU9L%2BBEa04TokcirnDidnpHczXeDCJmrOY2X0Zd23G4Oc%2BNypA%2FskjAi3%2FzyHMrPPaK6HFkQ7G1vMC%2Brj7lB55jJo1psi7QfZ1grpWhqRklFHNF4%2Fgbjs6ZktysNKkQJ3Dv&X-Amz-Signature=09c512aa184ade7e8815c4619bb2c47185101f758315d7a0eabbef213205ba28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJWL6I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmoJPxHjCc0WVZ%2FRqwz1o3WBsjcBoZfuXbnvvomNqhWAIgAzSkTSJMBWSSwda8urTDH%2BgQ09TuGqlJfQW5H%2Biq49Uq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFJJAIHIemGk12L7ACrcA5%2F8%2Fbh%2FWHom%2BfLTuLAeul133e%2Bh8olmEseWGsu04zfdeq1AQfA5bx%2FbvakFthKKNe%2Fa5gQE0E4iiY9L4K%2Fs2Spb3%2FDsCJpoJjMfPrAApg8qqhA1UpzPfvIm6kSxyMSumoM1%2FIC6yj%2BI1wP2uSFfytr5nNwCJYrMi3WuaWsNcJz4wGnC7F8z8TQEUwkhbhjTQlgPHfsBicPPRTT7k69JlBeyPFnvi2hdjUI6OlXPYTHFFWFkCI6UPHdS8pQKQm8nP8KO%2BzLHI4DJmcgHlgTouLQYnHFimC3dQoqmo5yiVy3bbbg2FpWOBqRtOpJjHuyckrixaVnMfRnGiKLS2cLHh%2FLR3Lkr4gxSEFi27QV%2BKrypmGTerfmKCzrHOurZUNKo4lQQ7fAa5My395YTSr7VXvXRPyKtrph%2B7lc%2BYBYIhsVKffkr4P8oVfcIjJDOObDZTwaSB9%2FUXcK4MR8e09P1ScEuYGhq3QMpEwnU4V%2BQGgNhX6XlUgjf83lRvzphXDcWn2vHQxGR6APFuW3qJR4cwvJ%2FRzuCJeq5ZYXHHh6IBqXlVW2XURhkuqexbAwau3f1osPrFC5S75%2Fai87%2Bt54EvwfqUE%2F7c3ZNF6p4CfG8TeIbNjxY74ZfLGHMKW0pMLy8z8kGOqUB92JFHAJwoH11zGzShCyzHyTYjwVXdj2FnD6l7kdDgRE%2FEWGQsnKGaebshCMPhuOpQNf3tIiOc8pxqkDpelMddt4VxJtZ8bCPXx%2FPhTS%2BJ91rnzoVUZsCXsfQOdThRzkAzJyT9mwsEENoXpP7JuwhhK4n1oHoeFSqFs2fakf4gu%2Fm01mLuvxqz9wHqPL6zILi2eQJT3Bvkf671u2PG8PlsteVlBYH&X-Amz-Signature=ab4082c6527e599f2db77960748d71bfc00d00e06cea594441cefbcd1b28a5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

