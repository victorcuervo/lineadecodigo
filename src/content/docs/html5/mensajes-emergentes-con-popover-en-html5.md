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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4VNAP2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAeyxdo9PoQmdqjfBzNtA3mKQLfa%2F0Mobmre8i7WwmViAiAJ2%2BTzE2Pp5bKod%2F77sgwNqJTKkQHd6ZVxOClv629vqir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMIbG2o9geKk0f2oRHKtwDilXsTL7vJHOdbSiJTX%2B3rD2s7ukZD9KKXW4h966WW5vOvSjBZHLRG6z6iEd0v4lXvVb%2B1K6gBLyfFZqibR%2B6ZsYM7wacgc4wFtIBLxhI646ZzmQCwnXI3gdEjaPamscUFmmS3sRrmeVI3T8CTJVfT0Cuwaj96fdzXu6rDTZ9RWIo9ug39zyPlS3eQVD7sykyW8IaYTw2yH6Zqz7ynelhIGvKXDlf1iUrh1flFjQfqC6cBVfwH6yTYyjn2%2B7C1JSYJj3Tsp8YZ6AXkJwx1GSFL1GB0KOD1XMVQCA469nvE3oef1C5Zqmm%2BfuwYZiUexAlhjIEZQWd4ahq%2Fts85CI08hxY8LnD%2FHoGEdQkvkjs4vmrKMvEpMw3naysgDOj8oHGswTnfUM6jj1vI62C5QEVQKI50SoeaApxlokC7uFTlgPvROUdS7IkC1PQPbwQlaryWzVIpxennrY%2BFRKOTlYrOEymvMDnxqL34dsuv57CYaZ6XRYpxYQjjuNfFJ3rKgLXR74KgOL6%2F1F%2BAbo1i%2FPDRqi4MsFQPu7ThxdTESmVkYSK8zJYSE0jISCXEA7GI6OhbjI0ax75W32uUSSKZDfoLExqnJZgPN8b4ISq5iymeayfuGEy4pSik98b7U0wpYTGyQY6pgGDnESJJlWRcAD1StkIgIarqMsCN%2FprmVEi2wPs%2BnEKpL%2BH8QZz6pVGR5%2BPv6h%2BLFhPWeBuYnW1wtGcmQUPi5Wyvdf%2FZAFXG1jgff506q8j8nz%2FQhE9AE7sneyvtS2H4LyZfbQKf5dy7AplIoddfa4ya%2Fcz5q2RrSNQcI4ajxK7C8OSvUNnv2jDvaGcjvfV8M33upolfFTsqzXUEC%2F3LnUrenklAM6j&X-Amz-Signature=120c2eb8aa4138d745ee0d1672142b7bc922c62864dac5d1a77efd2a84b34c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M54YEMG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIE0tywF1rYfjhM4rY23DDjIB%2F7nZweNe3KRu4tJmNLouAiEA%2FQ1T%2BuM%2Boz5Z703XNnSYY%2FtE3jBJT%2F4pdqe2Dj53C14q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDLkEjsY6xNhChvd8CrcA9aj9e8WN5OMRtWNf2Uyk75laqGC2vZOMR7UsnZjPNHeR769INfhPq2no9FZx%2FrCAyOMyyY91VuxLXdbUW%2B3irlaFDuZPMbNH6Ir0jnIhw9EWNk5pF6CU7BOL%2BjYBddUutvo0i5mGCl9%2FEy%2FpM%2BXg7bWMRP9FpY4T1rzkCCUtO1e4Ii7GC5aebhjilnB0DKcLUbJBfncmUzyspwvzKuy%2BYy9hG9RGbDYIrL1QUuWTEYFxOxItQZXAgdn7bj2ZfrJQTJa550mPmmonz1eqSKixt%2FHhDzAjIMN8pg3WIiXf5I7fh4%2B2slXKUC9yMonQ%2FNSbXyi9yyqONkTAl%2FxjONN8WKkvW5zSNVdxRpJJAiMlDFkUbVBN6k%2BHB8GVhpBtatT1fSNUCiqgFCmtXSBGdqfba4TCrprTXm5lnAvI1%2F4NomHj7a%2BKtobcV6MXL0wQ0YD5XvxhGyeultqzwJOiRqNpTwjZ%2FMFS57oOGi6KsPY4A92SfoUH11zkIyj%2Bue4ak9Jqp3Km0ss5qYb7zg9x5CMbP6md1snGoyj6sZCuqCDptbBoSpQ2chvdcNUjYeXCvfU59c0nPEXZCRvWlxipYIGhKdTIVo5SgU107TqPdyj8q6At%2FXcqIOWBVDK98vrMJiDxskGOqUBlJF5Lm0iciCdRGGHtYsXDyeFog4UuD24Zz0jmj1k1vS1MD80VdzGEH1pV4hUfVd1K21CsA%2Figcw%2BVCIPD%2FxotaiKmYk%2BwxiNOk8f7woNjQj5wkhZybwgKGDRHC%2Btr5X0nPG%2FPDH0nwHs92o3fMrFIwZlyGjM3K1hnwvXABGNPs6jyYSB2%2FPfVN6VVS3E5PgQfZ8%2FfGdlf0kNNAqoixKd%2FGpMjXq0&X-Amz-Signature=6a6243378b1e3ab8ee92dc930676704dc26fbf2961cee3a7ef7424a450ecfbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

