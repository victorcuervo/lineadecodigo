---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6A2QEX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCfccOPJThCeS640D8qy3MqHAmVfxt0tZNIvTQlIKmh4AIhAKG4w3jLeC4aI9jDpkyUhNSmXYYIiWbTEON%2FGbggwwHTKv8DCDYQABoMNjM3NDIzMTgzODA1IgyNIQuNhtKyRY5g6qsq3ANea7mlJM5HY6GkuNBr8yN3fbtGjrpFjE56aTOisOkUQEBbFJqyKkPC34N7GF081yw%2FdhhcvbpPMBN%2BGFx%2F%2FJkC4Tlhqil9vd4dP7h1y%2BQsEkWpCgzsbduVCOT%2F1Nbfblf2ZNq0j%2FrVnC3KrZk2X%2BKxD3GlfS9qGWL2CWeIHVd6cZ6LExPKuU8Wd%2BTw02OZi%2BmzFxvxe9sSGsD7CqWVN40%2BF0Hr%2FTIUT8C5bHvCsAlAhC0bpv6Klfqzd3sg3nSVGmY9wU9A9m1rZtS%2FEbsbIQyLl%2FjUckvWaOvMCid6%2Fn19fUjDetjSn4h96O8kVIxSSpeM8SliJinu4Xzm6vTDFAzqtaGATzf40zuwmUVbE2rf9CmmgAXMKg119xcA0Gh9lUr8CHoE7MghwQfSApBpw9njYdOYKBh47NWWKHzEVycmDRvw9wkIMfXxVztWL2nNXKDkamgJlLwyTRjQx0D771En6Ua%2BG9E%2FJzXK3DVWyBLKxSQ109x%2F2QPw41kj5GXaIxt%2FXf%2F1tuYR9nkvetOLn0twhK3UIQec1XJYsIJaapKv7PwNTrLRXt0ESCf1e%2BdSff4t8wD2H2zxxZ6np283MNHsFwRvqAleQYhOCAxWU9jSs7hVKcMMAZVIZv3rVjCGvsLJBjqkAfOJq1DbvaKdLxoK4St5rEiSO%2FaQGC82qn5pJXTr7TtoLPchd9IDfJf6pQKNT2ZIFVVfkRdFk78gq4A7K4qZ%2BrP3LTXpS6k9cpbmT6yfyKOhgXkx5rclw8H%2FVe28zQHBa8%2FVC4kJ6BeenqzYXg05pGQvv8dG1H2nX5tWJk4WMdlI7Y2QaZiKZr7xQdWyUpm1RbcV9piIqSWvjNAHAxGPz7BCVJj%2F&X-Amz-Signature=7b1461f6d55901625a3b8342009a07943fc041eea432cdddb33bc010541762b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4Q3I2Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDv21jfKRhFJ5npZWo3Dip4WNGZKIXCNeozDAdvC18EPAIgbIAjRELL66blfzlQ%2FLcDYeuKLGThZ8C6SOVK3ovphT8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEI7L2cPSV2RumyWrSrcAwPyVr6MMwmM1iEI3ek5aWV3KE%2F4SldMCxmVutwXYq5ZlcoSyI2aiAxITw4Gni8rmSHAPkb4sEN9JiHmZIs%2BHxrXH%2B0b1rtgKCjkqKL3QcsPNGG62TICP2rJ2gsW19NYInawk7BUBlH4VXSTIxIw00N0zLdfZK3meK19pMuZSQqthOOJ8%2Bcm6o%2BKhXuEtTcFbciGIDPabwNj0kvq49dJqcv1CPlrxcH1uxko4vPbN%2BjRfV0Olw2tzrDw4OXK6kuEwFxze8gPmeIKPvy7MWVuHYnYOR9XdGgtOLaa289fVOnUv9kBI5yjK9IkSm85F%2BrLmJNXt0rouIvCsos1M8X7hFV4vP548ZOdXu7IRF%2BE622PPhzHq6mu%2B3R%2BW4THEYRU1EYm2%2FtQ15JQ%2Fu7iHxl%2BqPdTsFda3XR%2B4gc3HQO3Xsa5nPFekHaHNZiyWqTLnj3js%2Be1zmLqRh8oeryIKanFCKAwCddWq3%2Bu1ufrHg4MOk%2B1pqsLvkGRmTZRvzk2SVYAJkqcy5Hun%2BICyVP4NVpKzhZmMhxCAP9Ty7axdGehZdS%2FuSdCsbQOlEdE64p1XAV74oErSJq5z%2FCLarmiuRECrXqJdi6s533nDUghkq3kBZkTFLS4ytkiLgGzdVo4MIi9wskGOqUBQcwEhK3T4QiQezgTQRCriXQ9HQ6OUg%2B0yqCx91ahmaJKul3zdxJnGSIdQGT%2FVEpMcFMuYRm9XdnTpeehNwYL6USxJ1EXdDd2gDVc5rfNvfbo31e9o37lg26RZHn5mOgbXhNA%2BSai42T5h53ogWUXQCrTnFIvMkrAY6AfzqmNQNKMQq4BfilTVtKjQ2SX%2FsdkAKmb4ocFWCwl0a9wMpjSFc0HO5bK&X-Amz-Signature=9f9d37e81bb5facaaaba5505787a635d214067e621d48391c5c6f30018bc195a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

