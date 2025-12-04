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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJQGLU6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDQ8PquHvWFh2213EPdtLRReGT%2FCV91mcNBpOeG2c6BdAIgTVZiAuJJvUVPHbs48z5uuCAbGyJ2VxuL%2B%2B1st4kTwxcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIEsESjEC%2FI5skX3NircA8XCB2cA%2F%2FXdBqTmTEpTyCL98UJ7cX%2Bl2pMYFNByEf%2FjkYaQmlE5QOy8MFcV%2FpBWgGWPxO8GGB4%2F7oKVedCmiIsAxKJqOc3mip0xCAVX403YWeoSh6JDIJDNNBA6b3aJX4TanjSJoeXe3oMvXsHBAeNTL83v8eo%2FicJZN%2BGCWx%2FP7AliBHK1V%2FN5MYJ%2FPtfaauJa3sMfgyr5KOO4vyRnhoFqPkegSiVJfjt4IIbXbWADkaI2KmKZl7Au9rTYt%2FLd208iYFvrnbqu2dJ2TNRKXPYFMZG66y2rdD6P1kZ%2BM%2BrvvWXF6AIWt5RN4884zwlbLAmWLfh31HIzEM%2F1MiKDTLXFP9XbPd1hMoEo73Ll5ruSA2xoV%2F%2Fb9U2Ys3qox48U8ZY3SRGN21S0PXeVp7pVYdRfqjqWwe3eiZIRiany0VACC2M8VdKm8BTdPqFd2xxYRVJQO4s8Yb%2BycBGp3Gb%2BH2rDT6GJazOYNHonZyo0lZdzGkjehg%2Bccdt9ccYs4mHVJFsghvt5ohlm2lpXeJsodXrEfNS2c%2FzQyg4we6YO25KtvTpLYvsEX3F9s00%2FM%2FegfhbGwNPLckCIv1Fjjfe0KI7RepiZyKymsYreZPjzMp8r%2By%2FIpeu%2B%2FKad6llmMPOtxMkGOqUBU1gUhjpOqDB%2BPu4CGCwSFIxx%2FHv5f%2BL83w0QAsqg97oyFMVo3%2FpT8xvOli%2FuhlQ8czWnXfQWs9BxTGHLTyt2KywuH4iifF1NbGhPfg8QgWJmoiopMRAF%2Bbb0CA1mcBKCu3YyzE6fP2s%2BDPIGI94DmPAseBtgNtX%2BDOIEyowheuazPYvTL8ZgxrqoGygobHNspxPjDVDkdR0O6E8U6QiO3accCVfj&X-Amz-Signature=f3814d34634846464ee95d30e77bf586159a7aa0acd0fb46fdbe8bcb060dfead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULH3WL3O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDkwevzdEM3e2wHlMXgJzpEJ2apuQ1XJEICLrBMgsnkFgIgE0F62SOgrQ6dYq5XVlUxxjvIJ4KghTUtJYs4bZuJLe0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCJjPNTQqK6I5p4%2FMSrcA82zxDWjmfvLgjkLo1G7LHAeGN1%2BwkZsdP%2Fgk78kQ4HKghrjjMqhz%2FI%2FIaajYplSY%2BjtUiZgtjgc8yWnmOyvKxSk9KElnfQxoamWG20Gwq2Xc6IgtizBOQVRWtrKIvJjt5dlepDdXtm8dMp5QKQ9y0VJk0I2Gb1pCdFILZ%2B%2Fh4FDozJExg7EErh7oLegp90NelEJp19Bvq83XyBqj66SH87mPGAd15RwttRYoIgnzu4Db9Lqi%2FkRqSb7g8sMejzcsvyRwHi9gqbInG6P%2Bj%2Fmi4kYY%2FMD2ZoTuEmS7KE%2FY8pXK%2FhgJIkjIX4T0H8GU7CjQyvPYCMkLZ%2FHPqNHc0Pos%2BAZyLCHrsaZktemzPPhEuJBz8%2BJdtN%2FNvTexHw8HIqk7lJBZH2YwY5KZHUTkf4podzTh77uDVf56b6MhkRg0rkQaTIY3QufVTapoMMz%2Bc%2F7IdbERETBfFFAvvJoCy8QknQJ6xeq18eCJ9F19NtBPywvNy8qs%2B3H01tTWNC6YTYw3R8alw37uMgs%2FMELhdZljcQXl%2Fb6ip3jeLR%2B%2FBoc2j4QiQrJjVv1nmIrkelkfVcmQr5G2opqzxFkiLHmhb3rz6AsNaKPApow1Nk4mGKzcJXZ0nORb7SZgIVH5yT5ML%2BuxMkGOqUBpJN9o8hYYWHHWvjeQJVBsq46LYvBDORPJxcc4RLqpBXEjgn85ohsmJGdk%2FzoL%2BXZLQ7nO45hC%2BcJElfb7245naQu1sdN%2FKFUPiiwxD2SBGhc12fvpcDtOzof4uxwoYxT2bDwpnAnFkiymjXiz6i7IAHZYgeg19uOvIuV7sBc4mYEBgIWTB0G2KHQyK%2BqdmcH0I%2F%2FzS1608%2FSFpD6o9My5aEptl7I&X-Amz-Signature=761705ac7b62e3a58dfd01a7ca2ab2d90f6bb399e4209f3f836402479841cbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

