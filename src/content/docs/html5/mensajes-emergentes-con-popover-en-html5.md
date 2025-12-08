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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICDCEL2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC205HJctDKUYsncPpaIKVvb85A17no8WQfikLBultlxgIhAPy%2BbNR9eYPNtAkSE2kWgU3swHyfRKTiC3%2FpJRFiF9hBKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFfI09Wv7YHAv9x9Uq3APYpy%2Bc5M%2FzRIo%2BS1SBrEpTTCSzwtgWkxt7mT6RiCfIUoV6EgAHxxvVPagQnopd%2FvYZ69l0Nx%2BMrmFeOMMTkufP8Gpt3qb6Mo9ipDATMD3TwTY776f2ESFRGpWp6DyGzNWbj%2BWAzapjEf24cvpaVrTPK%2Bv1ljveLg5RGdtkgWG61rVhHAQyl54TSOpTZxkQLWdSXfYCpQxizBdfS%2F1WGGnFoNP0jD68JHraiQnznQsdi0VhhgGqBxYTX9SrPk8lg11wrSTTNR6cuEYLjT7%2B7%2Fg68A0RwaNMQuVot5url2zkYqg0yZuugVp0PdpP8AYXymP0Zr%2BM%2Bjc0kaf7eVXkZXPvYiMuDFwqEWl6d5Y920C0Ux0%2FMMcmWZdxiFZieRaw0cCjRnRM2GAaqEkzXN7RhgWeYqWYoIdXx9zQkYwaERQC%2FNKPNGLr0EEV093w0%2FQVR3nJp7I7azz32O%2FlDdhjqyWzNlLCY%2B7z8xg15g%2FFPJFllfwz3ogNueKRb%2FGcacDDveU3oBkjexCPbQRt368awftIO6wjiSAMn1JzM0B7Y%2BzcjI4DG81gQvRyMw%2FnvL1Zjgd%2Bj5l%2B8s4v0qH2BJFYkxAbZQRYSy7KGSBANAsatSVvjcleS2rOD1PFpqw3FzDGj9vJBjqkAd7lk9nB4scQ9GXo2FFtDthS9kRb%2BJsIK1BR%2BA5zUc8BMCcMiNbBP5Y%2FEXLvPF8MGSZE7gw9WaNf0WwmAp%2FCBhIlxqtuwXF2vNRfwYek6xFTzCXspkzWzssSc6gCiz15bi1AzioWk6WLCvgPI%2B%2BMBAgp8No2JEDQtOtJhQIeH72LKuCMYItJtPDChQOziWn7LsNZYqn0qzCrwKKpP0Q2BoZ0NavE&X-Amz-Signature=4a5fbf521e4ed01e45c09bf85d87b0ac119c680c74994142f3769da776cac15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOLWQEO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPwYHDxQoFPfsKutBSqt0qgRDdtaVU8ARMkPWMNnomcAiAuGRdj0QC2CVf1gtIArflysksWKw57L5wUleO4ivBZXSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBaJqVV%2FEkcM5ScMAKtwD8C%2FbQglpDeXuUszHaESlhM2ARS5790E%2Bkg3eUSnpsYrfHvVsEWmHCSGSGNu3JldsvsrI16uydw3aqxtNh8HnKSFDtj518NlfR%2B4u9%2FsrrOd7eks7wBFvjtanvRgZtwuvIZNoCSb7skzggs3D2Lg5xYBhdMZ%2F5JlaA1Rs53AQxQY2roaF4OC89Wir8zmirYiLLJsd1TuFW7D1IO%2ByN5N14PznrH3ogFFaL9s6iRvYD6Lb38tK96aUPoynR3sv8G8dMPm6SzOBHASmf%2B3Z%2BJeNZi8MaOYvMx89Hi3x3BSRJUjLpczgLPDOr4ny%2FX67Szmzp%2FFpqzuxoAqSI18nFhqwklkdcKHHGt2nbDzsaE9W88TZSSe8rusXvDPXuyfwKDRWTPhR2y4xs971l3JqZWmm4YqW%2BtZ%2BMnLPMxpezo%2FB%2BvrWg9rVpO67MzLBCXv0lQTvZfJrd2PXiQSc2ovm%2Fjzl%2BmfZr31CPOCyTkD4DEee49tTQ9JIKf5hk6b3ohkkCIWx9iHqx3U3byL8owGENAn7ZagQ%2F6QFzPJSwwADCtQBx4aCx%2Fq8f8Oe%2F0ta1fLMHY7ixd75a9x6Tumx3dltCb1l8CGuWQ2tumz4FjED%2B5eFCeYM5q%2Ba7BnEOUURzBkw3I%2FbyQY6pgE8NFUrHr1FVrXeZ80KJD9588E%2FxMcHHm8qdk7IcFdZRW815NQv%2FspsXlnEGNHkzkO3ExrcVZQMjVPVxoFZR8ATmtArV5Cw1QWosYKQNC85ZirKOxf4yhTSUYS31xERVLZDozP6W8D0FfsiSOsst0Zrg25LxL7QjSox3MwCuC2QWZV%2BLE%2Fz2TFPQIsyh4chrXcV7%2BN1PZ9lSx%2F4tWEdjyodTspBhV1J&X-Amz-Signature=587b7a7f79c047d8b89712ddc8317646038e8dc81457ba2f990fb01a6dcce016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

