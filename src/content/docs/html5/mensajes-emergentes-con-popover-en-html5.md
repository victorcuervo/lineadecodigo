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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KD2KHKS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBYyLcjoPxvvMwrhascPDN11laXVypB29HlAM5U8j%2BciAiAgxWRII9z9qLsGGLw0fEMdxTztT0AFE8r6AVmykWLiDCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMroZC4dFkD1zd1l1HKtwDzDvpz2TvVUPN1Mf883Ktg8K5cGFxyjdQVje8LBl1JvIuynCZ15xODQLzLxnmaUeAXWrZ%2F5m%2FHh6aoXRWJKjoI%2FR%2FtmrvLcCU18p1%2ByBdaPhB%2FP%2BeuGU29eGLatRNCQuMez9R2UCz22JjenJ2JFnaYJTiV3d4lXuDfmqD34b1wMaRuYKXMQJrewxGJGcRUYJ44Iau9uHTzd5svM0U5N0wsGSv0%2BNJJjAj0QvMyJ7KeynZTl55I6jWmyB1l80CeLilrNPCA8amkl7yDUgmt7NL%2B361mDRrEluDWoz0Bi49FPrbZ%2F6CDj7G3vHCnYhHGD%2BZh5HTa6Fbej88e8sDSyZkvJluRcnyT4y1bobBUv6nOaS0t5nLMoClJ%2F6uxTqB2j4IOP7DAO%2F%2BjfQ6g7cvRDB4BG37l%2FGUNU%2FTlHlC4ggkWwfLHoNDwTqH6SLjnWiBzljzr4VM%2BKD%2B57moKbo5lgghYq0X8nsWvKA%2BUXC1fIDnpbqS%2FlAzTIOXCurk%2F2Sdgk4FQcxOSZtDnYFLVL9Vbl%2BuAHGFM3wxCDzrKd%2BRLzQD5SAUsDSjTqFS5CTEkTdfNWS5WvNPWjD4k%2Fm7t6kGRISzOoQRgyEMiCoXGpvtyctiyBO0dfRMSJGSCIHg%2FLIwtq7EyQY6pgFbhHr1o0Hz0ObzUJcyK7WmhHJuPDW0ZixEU70tTRx01RyWT3z%2Fs%2BB81mNgL9HSrf96ocGZtjIS16uzKGD6VW%2F%2F4PMU4%2B5UH7J3%2FZvXyzAaY%2B2EP10PC6van1GgZDn19GjKjCUnjAaps%2BArgDvSZRKGPHzvi66H5v4y5%2FBuqynS8fQVFbnRA7VIcjqk0bon0h1tkY2NbDjUNRRl3uS2vckcw9r7bgZ5&X-Amz-Signature=05ce9bf6429c765c6af7ecfbded2cbdd6a7319929af8c114f0a4bc8d022daf3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GUPKJHJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEPg32e%2FTmdTdOaBY3u8r%2FtJ5sUaUwk2%2BfQkqa%2FejbfUAiBgt1GSZbhhEbZ2Pqxi8LWVbDVK0uPuLBQfUQQfr4dZhyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMTauu57fLlOdlFxfzKtwDg0SjJzLxyErcIaN2qHZhuxGB4%2FZIL6%2FsYP563R8Kju%2FVbruu7NOESlsMZZ%2FGi5bzhslZGEWalXhhcsgzoqA2ylwXrM3gHAB%2FPiaOVF6NwP3bfx%2FDknKaPokQzoc9mAA86Red5xmQnq61lUevirQzdbydKhmgEFIsaJtR8%2BLSbGO%2BjKZjYD7XYGVc96GTXVXHetBqmY%2FUamQ%2FdrTlpsc8kvpxRwcryEBZuhVjg4EC26QcWBlOipuWvlFFOlEcknVkMo4byq7rIHEBcz7KqSbYY4RqQc4h2K3UmVWV4xHB6LXEbPPH0XZh9JNW2UHt%2Fs6InWXaiTH%2BQ2IYAXumKArTX6cTkdqq6unM6plJHridIIbIoLyh%2FVtdaEpjFDQSyHUNdFRge4g%2FIygRY%2Bzl9oUZw48aAKUV8dWFEQpmzfS0l%2F8GJau%2FI1Ozl39%2FuOjb01cZ%2BIaWGSGbHnXTaNLgoLguNMsnhsAHd7OvtF9R8mu3jYCEYCT%2BkUkcwopbZSTPAmMw7kctsFyy42DvoOTPRwLFF6tDZY6oUYA0u8oEWMBPDw1cEHt9dvIbJroURrMPsfX%2BQvPvwMcLc451DS1IIJbmgFV35%2B5bdUIzfnV%2F5gKVwkWM2xMbyUspBYV9q8swra7EyQY6pgHvex0z3TpMtLx%2B8Xk41Ld%2FpduY5Z35O%2FKCBHuh65XONutm0t1XWpD2urIM1HEM0kqIul9GmGTIZvmVkJZ16%2FxWy8U6fFU7lJXWyZ%2FUToGQJWM8JZagFqqmHUoALmNUQ9HsNp8txp8uKCodB6bpia3vRs9w2dYayHn8s33TLamymNhPeZYKfTS9lBlm2rechUuE7Jp1PloJg3I%2Brncf2ooHCRTPjYgp&X-Amz-Signature=5aa9680a8bd5d35b43e1ded779e2bcf1b50b38162da329b39ee29b00d773d291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

