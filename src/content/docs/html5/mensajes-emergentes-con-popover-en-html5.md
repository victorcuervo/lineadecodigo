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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZNSP6WS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFXcV2xK9xD3T2R4zMn2iyS6hwSgFVZELLQikqUKF4nHAiBWtZgyNeBa3eI3PYUMa0O74Q9X4gvDqxBeAOj5H00K0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqwtNoDtfDDmeifHsKtwD06hDekEQhWV8kIghmo92TRgN2XbL%2FkbsxZK5wVKcgtR2FOpIkaLaKgOLfV%2BFMI9KV2%2BItPZbSLrV9qTwUKh4U33VrTQSn6Jcf%2FmYNqFpq6cpB5iT1cjmd89AclAQucIk5hWF55saKVIWPvLKWDB%2BZBssOrNxX350pTsrI92js%2FIrzyrkoi02tPQXf9WmGSDikCi9iJFaRjmJoD9wEAyJ0num9L6wBKZksLo2e9KcJjlr%2BTUIxAxGZ%2Fy%2FxsDO4TrBTHMlIzKt%2FIpXWgpqydUyqNLvGNc4yeqWbKNO5tqD%2Fi5w%2FmRqapAl6ZzcTpxW7m0yBeiRvq0fNYpEsvg8eCANZHn1E%2FIEIacNXAZ3nH7iwnoaT8pmlnN4c6j7%2F9p1IjJ3nipQhsLuYg3jwBt0GLSMXlkoh6ZlmixNzf%2FkkVbNgQtIFJCQhnhQ0k%2FsmhqjuNqXVNH%2F8M2Q8%2FV92pxz96ElJm5NNl60mViH3eMZmUtURhktkoCiH3uUm8x0%2Fu7wY0%2F8eFeO1uzjpnsGImW3KU%2Fx2IpjXBPqcciewjh%2FgbY9ggJFp2%2BXMeHvFPd6NSj3bNHKf20YaXiqxNAY9NpgukCubr2QsSIKJaYqAsusyPHOMLPgTdtpTKwL4BWdfb8w4ZDEyQY6pgGd5QyLLyDc%2FRmvjaveVvP5uOjb9ocFgc3Y7u39R%2BAlK7XZ8hbwJSnGNKXIfSz4fxCT7M%2Ffd24wkS01uWhC9EK6mCskNUKIRe6g269pBSqNgEgKhdagkGfoSMePf9hY9N8pCri0uTQEJwnQ2Yb6pidpXJjnSGnjwSVhKEusSgBXYZ1gL%2F5HyWSwFIRbwGAk2G7cWxwQryy36RyuPZz2Mk8kwiM%2BZ1SF&X-Amz-Signature=d8592a0f8255a95ae1fbdbd48289cbcd3293ab00ab593c8d5260e02f88cc9f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMSZYMH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB0RihgsBuq5pyDiENtZb45CX5DKmgBEnQ16gm%2FSkz%2BkAiEA639WkYRW1%2BYH5%2B5F35vVhzSQ%2Bc01%2B3azbVRnCUGaE4Mq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLaLPv3ovr7CXY7VGCrcAy1KPjH1kGAOyqGuFs1ZvUT0d09T2eooJMy0EFqed%2BUyj3Ffq6CbALRfI3MGd2l488A2G7Zp0zmBM4LfjIJj5cUABkW4Ji7fQb8WBuWkwPub1E67qYFU1yW%2FJgs1ebuqy3TBbYlzMnG%2Br18zle4F9Wv5XTm88vkzKS2iPBeNvR0owNQbUC8rVTj%2FCQ3kkK7skM3SoChJW4zvcM%2F3USPdhXTLADxwmoC45QdZ2kQoPU81L6Z5AfXVUinAjdZotoDOPldu%2FTTmSmp7r%2F%2F5Nkn3ODm3eXQ7DwSkReyhWuRnoNuWvNAWsGvCwrbjWdKX%2F4OWoXGKba0bXcoDfDJwDS%2B7yTf9PN9NPhxOrNoaeQkGRPMuRvO%2B4El69UbT9qfG%2B9H3oA%2FklqmOltsY52mCSplyDqBLNNFYRFuAEKXqVwcy3mi%2F7XZsLgkHfLLRv%2BGbEwS3gJGBFJyz8Zyw%2FBTn9HbvYIMichka0TN%2FTeUKHaAQJsGQVIplGVwGKVsXbomMvA9j7E3Xa%2BUVcDOqoTtV%2Bx8vOlJGe9fn7jR9BDEP6nWPYMzVLPcOhTLSsInGDcMkfh6lp47WWi1629bEd49klS41PsgOpYCpNcjVZ4RP3PRNV4HFyFl5N7nKokKOx6G9MPGQxMkGOqUBpDrapLceKYoVaaauJKGYShBKOBKDE%2Bl3xp3ErdjrAyBghbeA5TI2fRY%2BAl4qsz9BL%2FezRNxF3gEskxICgr2Ii6f4PBrdZw%2FjyWJ%2BaotTIR06WDWlD1iVBKkV9ARLh9rM06%2B6AZ%2FZpaXTdB9OUNuWurmYhwnIuW8sK96gggzJ%2F%2FyLcmIG49ltMB%2By73bHwKCG4ZU%2Fe5mMfRblpeHO1%2FHKHwOiQygg&X-Amz-Signature=7268e90c4cdba75f2f7e241cd77a36b5a7f6680e987e6a3f9b1aabe93cc06ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

