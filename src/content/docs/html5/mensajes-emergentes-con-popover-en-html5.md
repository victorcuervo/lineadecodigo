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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQSKQ22%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8r%2BjUix3uE%2F%2FKu1g01OrzKdBUG4iWcgjstL71LyLXaAiEAr2dacFkNx2H%2BfDfcp7cilcvTsvCFOyCUs4EQLWaRsl0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIb4gg4YfgS7%2F0o7UCrcA7%2BWWFHCc6Fn9E8umu%2BFjP5ypyGreNDAKlUUIRKTF1Kc7sCySlawdBZ%2BVzUbZry2Z9D5DB7%2FsmX3IsPHw2RaP5B9MLKp%2BqX7uK98VfekmtCWJOnzF%2BXFOrUR0ZXdUPGPzCCYHPhwqqIee2h%2Bc053XwrImarrwkuUvZdMVbPuhGbUyPXbqPZJSQ5af33FoGBubvueaCeQoROAnF59yMBJJIBlbRCpZTGoYKXmtkcDFeQtc8qzgRWyffNpfMbZycDEMNZVdHEugsCXQwVk1ChKY1cnsDU4N8NN0ZkBn%2FByaMEx6aQ1WK0BS1kMkGr2%2Bet006WqNrA6fJXauE5YWOI%2FyK9lWpMQcDKeUj8S1E6KQ%2Bj9zzMPsBTYyC8A3tUNN1ws4mtDToql9vR6OoM4KU%2B9pG1LOSTRClVxVxB6ba74FYNrfrh8CjN4yJDJRoe2r0%2BrZueLGhUWv5jdgnHfLLcqcFNstMaYX9i23oohBz55v5cgSDAvq%2BGGw%2BGmglWv6SioQTlhckBeP5YFVb1NRdFpla5GlXQoZNne4oVHcFXPkhUPFXP0%2B9IxiiqC9rtQmse2gGKlgJMHO20nhB0aWa2zr1KGdLCButwa%2F0Fh8gPgxgR%2FXkuTtRksjHC62yF7MODQ2MkGOqUBr7oIJf5Y1cc41da6vJeFBeFV2Ho5TTqaWeCkMRM2Zq7KSctbRUNz%2F8a9Hq57F7iNQv2WzIYevaw5F1%2FYQe39F1Ns97cEdKjvFc1Tsz5WAOHRYz5l9DxtQFi3VQ80%2F1S3WYbNihtIF0KMTy0Ip4mt4A6bCzkUmFZ%2BgRi1BvF%2FQ1WT5qtlpqHkfWAI4rz%2BMlaEr2jLO5zfpP212SXdtYPB3wwTg7Up&X-Amz-Signature=5a1c266ddda812c672ab05033b4442bc05310b3ffc5c83c0e6ce4c76e45cc01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA4KEGFH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuB%2FTyXbKow16n5iGNxrBjRMuvMAwN3Rpqb%2FGv%2F4r%2BEwIgK415NAdvX2Qxv9Tvs86f0stDuWodxELwnbcjQTgMMhgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWi%2BudXCjQasKqOryrcA7xN0Sw4xuPSEXt3ds1gSIDamH6cZvE%2B%2FKDzEe468M7p133P4OBjPz2AU9V3lO%2BxVCsWsabrFkTchSxQU%2BNLZnoJw2pwfwaGTSqi5EKQL3cVd2wiyMBZeDkxTsoz1s7eFse93hkpJfbwxteXrJVidSR9GxG3FyAIOBgEm4ucfxUE1Qknof64hrHJqeBbo85s6mbSbPA1tCFvh9br1BBBsMrSBxfBdtV1j0rysaEKAgy04npucDYPZFX5m%2BpdyyekMaphzKpFv6qckxD5imsucXKZijtH4c5mJ5VZYR2hNnchYeLxDf%2FqDLrymn4AlhaOPYoT81gkYEI9%2FCgGsnxu72DAa%2Fqu9DIOw7EXOxD%2BxOx9XoxYb3G8mtTu9QsyBoTy4C%2Ba%2FWireGPijdE95L07Eece3TkmxnTVVcr5f9eOxeB3fFy8NPuTV%2FZ0344V0KGx4V1ugSANq%2BCuk5DFP72F%2FumJY0iTSV1NOHZxgj5910aIy5MHqMjfOxS%2BOTkvpYSTwto%2FwCUjmUmqJU7Pv%2BvuRY40JNVrzkPh55zVqnbawdguNKYVcrNvAZa9drQT%2BHz3Mj5y%2BQR2u%2BVC%2F5nRSFZpMycoqcCIKsglumyQf5OxPDi2YWAIhQolPhUN%2Fy%2BsMN7R2MkGOqUBuWNddx4m%2FD8CimmpNvhFe1br6%2F0FYCpwEPYmck%2B2MpnQsQe77imPQxNaNyZtcg%2B5zXQHd2V6m1KqBISfQyIOyshPxrVhWyn8KJpGSWK027TqKr5Y50vplx83hjWaGHL%2FXfcrzNy0XBDNnHEY7LGhydKhAHUo6Es4lFNaK6gCVVRiPPCGdhLpinE%2FjY0OnET90dg8VjqytVgIvzN2h8pZ9z5PWp89&X-Amz-Signature=3ab712601e81128d461df5a7565279662bd3dbcac37bc2cfe21fef22498e0a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

