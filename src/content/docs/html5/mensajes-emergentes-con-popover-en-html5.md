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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRMAW5B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD0Zq%2BnF%2BHD9ZL5wPFoPcx0aoxa0MJpywQoNcc7ysA7rAIhAMvw%2BbCCm7brzxWdPnpEvslB6hBm8l3BTcGzuG0nDHb5Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwwIIzGUH38c%2FU4BC0q3ANigqqyF0Y1aalikfHrva8RhuIj2nFsylf76AwWn58qJYZHtJPOwifItIILmCHxsVn0yFnm%2B6eEF2uFri0aV7yvap6d6pyzdbt3SgPa%2BUT47Iz93FWKiZdCvcLrJmG05g6d69kBf52dBOipu42h4oLQpMysz0f1IaDhVRGC0eAppj9DcbFWYPZkpfmTzcDNtU82w7Q77z%2F%2FWFvQ72Oy9gI71dUsh6ALv8zRmOOEDjr5GHrqxM9tpBQ2bSow%2FVYAfyPkXu2ngrcZjVuAUx9JgFPrbAK7xiaxSgKnR%2Ft9y2h1OGL2KH%2BcvHJnUhlBYFOcimRj4dtGsnNYkyR8e7CzBNmEv2nRa4AlXGvRAv4jHET1iTBgRvblF32BorS27eOySwNQ8%2BBH%2BPibubXH1xJekLBkbBfEl%2FNAwHUIi1zWtUhVLCh%2Bmn9NOsiWH8%2Fq4IBLe9QfUOAtcKu9PsiJlYpUmz3HTxUrq%2BbVOqZQX%2Fa10thQN54nTmSRzFV815axJGjyZ%2BHo%2B1wz%2Bjn%2Fd3u5wMTAEWEK6BFNVEbKJhnIWG3sIfqFDA05QAS9Fj5WULczeYfRHJ1yf3l2pKn7waVHUAMuIIy0WauILypWbf%2B1noNlkI601j80zM32PnQ6eIsNaDDO%2BMLJBjqkAXuE02Bhv%2BiVCtKgBN6tCG%2B2TUHU0bspKRRU7d6b3bNQkjOWdhMnQPxfmTWhe%2F%2B3oEkF0P5b7yvbnKpec27ffi3q72mGnG%2FaWmhj0lTzYX3HSsFyebxShihMgtQfQpk188IXmC2rZ7%2FQYNx%2Bbxah935YecQvqDb5rou4JRRmY23QKSjaE2TzJr4yY2gzqsGDtgvIPVlKc4O5b9a4V6bxOMrYe3kw&X-Amz-Signature=9b57ff77a14e0f6be7e6d5dce6e3291e94da508069613076de10415d5259df13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHA5XJN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDnodcKEU%2F8ggs%2FpJNiX%2FGpLWwSBC%2FVclWDAMuqAxiSmAiEA5uk6%2FPkl6sel600t5JytIYZS7W3mY5P736y6E%2BrZ82Uq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLlBOYsB92oLhqaoxyrcA3mvjzi%2FUluyqTDymlXD%2BlohgOt%2BDmicQ%2FVCaIgMR9TGCvDBvFZPqX3P0CDT4JTZxNLNfQ3WEfIzYh8nBhG7reBY5BJFNh%2Fp6B4TfeVWhwqGMfHZa5%2Fj%2B1G%2F8ZNugUn8x23wXeLtnajFOMz82q%2BooGb9MaGRVxbKv7sKFl%2B42oXPUhoktc%2Fd2hJXVlf%2BFg7OYysR%2B%2FtdiRudOFkMGFUGqAV63O%2Fo3G2%2FnW9YGwkHbi676mtK1Nrxs%2BLMebx1uyiH72CixoB7I4W6v6AY33SPZ7ixN2EwNt2urX1h3wlMZXQjCjzaR2i2JFtNhNWnX5X58vMWVsI9F1CZ7j8rLtT%2BPcpEL5NctAP2M%2FT2pB%2BuHfduz2%2BqgNvybrlYAKukBMvdlUYduN6nktCYjPmy%2FOxb3UistQnJSShLzqNrPiuP%2BtBsHDrCTlwv3NbccV5xV0XRSA65lY0oh%2BHrJxcpiDI4X1QFBuPmVi7Ic2t7BNg1%2BBt3lnO99buvzwKSAHcqekzVU401ZKsJhRZIrTVMFTL0km8KHWaRZKERk5Pu%2BHUrZbHYMnEq%2FosmgVHAQCaXBU9bIqVf98NLWIF7NFLXIjhqKAQkt4nc6%2FUTB3X3XSnnB5uIFKMKf%2F1xDDlKweW9MMr4wskGOqUBmWrusMi7%2BheARKQgLyMGe48PDhvK2AA0UGnONlR5DWvCkC9Tf6ybqFkzlHdF4iTM7lqLsdg44GUU%2FAvXgibKJ5LjvGqQIHe8gHT%2Bo%2FElX58N24AvGOVvZF6aqU7T8mfOJVzGqUwp9XDYr4IDeWW72jcu2cqkpl4t1XLMhxUmfp1gMTg01VvHoHaLQpJZH51Vh5BA85Kms4BaFOZRz1dWCbfSrKJh&X-Amz-Signature=0b1741565b2dcc30ec7b59d5f790c4dc2e54eb66f5d659670884e46033023bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

