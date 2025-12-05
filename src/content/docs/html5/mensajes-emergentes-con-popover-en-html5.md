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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFZEIMJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7AOGRffzFKZsozbWfP%2FeYCF8579Czh5Cag53PcUFvsAiEA25%2FhiEFOwVgJCiQF5TW47NfbkB6Iii0M0EY4GorFfqoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ3dMHA2jSm2%2FqEXwircAxSuOpfqhLeN2GBGwh2DiSrcGG6sYzcJ4yYZ%2FNVS33dlSb3o2k88IuAVnD6KpOJoRwmOCxiIPV%2FesT1V7sICn8fgQ4IxGFatc5jysYFHM16iV1cIlepPCGnehbixvqWP7JAjkkCgfxo7fjH23Goah7aCOsMhr%2FwF6qRCFOJZDtFCnv8p7mUGzoJUlARD8esEuX4XU4qznPCl3uRzYrXPr4mX6i66GBTbbE%2FobmjAGxiQ91%2B5DQKCw6oA41B1H01RnYz17zpC%2BXH%2BWmDxYM8ipN1RLs8U5YeNSVyqxSAg9hMG61cov%2BDkU3B1u%2Fy%2BXp52bNTDj3P0OzQlKaBUe%2BpBNhkuFgdMlcu83fCVXz7yzG4RHA5pHoZ1lqeVUrh0LKKTRQjw8SS1gH9RELjBtyBTJPU6SQyk9amNBIt9ZhBV%2FTxk1b7tQuz3rVJQ%2BkO%2FmjHqjIlXICf%2BHnxEwQQI0a6LHAgSWS0fIiHhKGF5fzSA2olIrDeIKNDE%2Fi91eZnQ5ErJx2L%2FvfS10bcZ9HN3w5ewpZ%2BePC3ad3USRBbuoqW%2FmUNh3pZ%2BisK456W0cLqwVSBxc9bj2zIewCBQZyE%2FygqFxl6LUdPZzzs92zQq%2B1Lhmeg5tfgX3Y67MdcUsPMJMI6myckGOqUBs1nOxuefWF5hYSMC1GUxAje1XQqLUwaC8IP3JDYdMEcD%2F4Aycjdu3lRZpb1c7YUjNOAcOMPuXYlukZvSmuquToXp74dmzNa3GYTeNsmU6EUiEu5ZQW8BKNIBr1PPKghxusMcSnCYaipk8I1FLRGxf9aAGtAEsvZ1RHd8WA9jSyHkYGLZJ2VBee0wquk14skAAXI6yZobEtT3Z9OY1IkkHUAloXCr&X-Amz-Signature=bb4a67b24e7bc1f4355529f26b627674b771d3dafea1b1d7d1e49f71e245d685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DGSFAPQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGQMo%2BXW2%2FsUZQMC2mzxbl2S2mtc4Q%2BT9mh7baqji8BAiA04616bJYEhxQZ1jjQELWDjb%2Br1Gw8htcFMhey75GXiyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMJ3Cj4Or4iCnNFmghKtwD0%2BaI2o5oWFy2Syo1EFqH2O1hy%2BPNi%2F0jchcrL1vZkr6zSe8vd1wFNg29TeGCktqCvGJhfHMsS%2BjApjww098Ea%2F3vFDhMPMC3rCWBtm%2BdFl1d%2F5BDV3OiwGeWzKC57zoSqyJYEvKk2W0B0BvlA5cUF9BONkud9EIfIM70ZjN0x4Ffv%2BlQkOcOadEBaXGBXrltKezPzQsxtArlFbxKyaheAh99q5ZcCetdMZi%2BIDS8YpCuduSYtaSyklkuypSQJcFTDuGGjdEPGP6%2F9JwZKh4NBhqMWHimb4heOBGp%2B%2Fm7ByK4hbf%2FtJSkTGCgAzogNflRHYjuJ9%2BUbCH3oHcdcAR3H9ja%2B1PHwgU1El7gc5Hq%2FT83B7bLY9zoSP%2B6b4CC8EYV2AWB3hpxODe8%2BR6xNSFqmh6kaJHxxOYe%2Bie%2BPtmGez43H94BTAzwSQ27zdCuaucIAtye7Mez%2FvAy0BGryEInlq9zNQGr8UAiipbL6fNQx2xnEFihbd5N%2Fwh155YdODfi7I%2FTTpr0FesmTWjBwDllubgqYjL1PGblv0JL%2FbaWdbU5wrHPJ3ZL1FPfs88zCLoBo0F61IuTgRN%2FX83TLjAy85ycrSKXMmqS7wlmlK4c0EPzI6EnkWyPoKVObxcwu6zJyQY6pgFZe6NL63MjCaJh5NzKfgO0f1raY3DQ8TY8vC7hhfss%2BWCNQO5QeIww%2FkZkXY%2BegMChKE2e1A%2BAoxbbCJV9yAdtMFerH7KK4n3IHedBLcOYyVJyQKlOc0eDu0XuhXzNQ5Q1adGNRGzKBKXiE66SvV6GmggWTd%2BIizcXnyENNFT9ku%2FBVEUphyZ5c3KuxPlYoWvFPaAJcQ2n8qrjoiBIKL9d6z%2Fb%2FALZ&X-Amz-Signature=f1a2c790ea67dfab366cc0a55d14fdbf513b5ee56e0d3a44e2e9ea2a2389430a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

