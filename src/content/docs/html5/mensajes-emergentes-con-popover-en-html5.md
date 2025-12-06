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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT6CDPVZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSWEGutLmDI3vUFY8UG106fFnTRgSLoWKKj2ja07MDcAIgOQin2o%2F3uA5fyUhNLvbEXtrHPp5chsEJuY7ZKTt883Eq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLUmJ02dDAY%2Fz85qxSrcA2MLdAqoifDKi2ILWnfkdIMn2dD5YsLmIb7xbuUmGigOAviILb9GXsDwDJgzkbVAlaV32Ufbq7e4EWWVSIeHSKzA5BmdQEZZFmxVHVMAN9gMOg%2BAAbGH8%2FlxL13PbMeFweQH3pWlKmmbrbcMFdQ5fFm6ySgGAtm8t6LfOoCFvjb0wtAojohVWn4ck1SSfWZ2cUOicK9571%2BoYxPJ4q2dnuZ5Posk4PAso99ShAgKMYt1aHNO%2Fsn3%2FM8oImLmEPJKSds1csMhUlOZURB5TO7fTbpxxahFY7D3KR76El4fo%2FFjmsV8yIVEThgI2kbuv9mW40xtB7pYBz%2F%2FENgJi9JhkMDaYDnkw2gOopaLs0VBqUOuvqsfq%2Bva6uhEUMcU%2Fk2NpnmIEA5Mdym%2B9PTqmixSGIPTiZE8pSTExkMVlpYX2hH7Y7IxmjM8eO70LryrsIpTD7LD0PylPJfo7iNQI0cUOfH%2BMbGo98LlddPmm3%2B8djpFfD3eZt0JDvKmFtf7V4tZuoPTkS4YQxWVA5MZZLpqnbDpxbUXhEb7iTsjSqbMhWDw2g1PnNU2TJ%2Bjg2SYWCa2GVHCBEv2%2BigYgNEzQUePCJcVGBmFJgh%2BFXWRABlqJHwABDHb5hg6ZrEA0UtLMMq8z8kGOqUBKEhPd3nXK0NxWi0DwjbyHfcEvd1N2%2Bn1LQoRIjDFfcAEOpx56zC8fH%2BddTunvARrjQOrJvxhFiOPLe%2F5QlOA0z5bmWlipc4wKmMPIqPCsg5T9NnvMHEyOV29lrpwlQuetUNg5yWerH1OjJqia0u6P90sQyqUtcnTX%2BVXO7mGpVYRuHgXRWcHb%2F9BOKzDpsIG5KYtb9Lqv2DX4KcYF62n0PHbVxMl&X-Amz-Signature=2a64ad85360a8457372eaedcc9e84e3db966f722f45094d1e728b143b89db7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIAKKUJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyMLozQZ3NBFGCPiovSfN7zjYPi87YtxFZKHVz61deYAiAYm82FT8iqkHFEP8EKi5L1%2BrJgnvEczuEDLh4EsETE%2Fir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMRoZ8hkIDZjsba5Z7KtwD2LarKHiwo%2FYNZeVBIUGZGCzAd5Q7rvFoMbEgAlH8K5iqAe2kMZj9d8xLQj%2FG9pxhoVaZ3z7cO3f1%2BG3ypxUlXThnBXXoaFPSSXim3FNIjALA1ZznsG%2BfrycmlQL4ueNJUrfoGE8%2BxZZ6CGLeDjJNKg9AedNFL5gEkg68EhzTqkrbtR9z6AGYQhdByM0zmNvU4e01o016EQ9mwLbgZEGQBi9FXx9Omt9ZIBnhohNW%2F8hYOfD4kW1iJdBPJs9X7k2CLrxN5SeXBwFidzvC%2Fo28UVhEwz2zseT47usvtw0FDNmKJzuBMMLasLW1sMCU5TkVEMK9YrdXUtsketdMYZYkx1UeZaPJKy9ZdaiST7h1z9JvZQPU%2Br6qz0s8aR9h0RGA6CWx2vvtCOrmX1%2B17BynOPm4l%2FeUWgxT7Npqh%2BuQVCF25BtDwNE%2B0S0SIkcMw6P2tJgc4GOiTb%2F08gmBrrh8jdQiXP2wHwYdFI1OSwgaLvErKADEFU9WVmGbzV8tZ%2BbFMaiHxBjvLYEogbbV2mNNkol3GlYe%2BicADGKeUQd0%2FoEjRzdskBK8wD%2F7opzMgsLJK%2FhqXZ%2Fl5Fp1U6yLKGOoqR3%2FPRp0grpGNQLv5ak00%2F9%2BEkRQzedweolGiWkwmLzPyQY6pgFX2RNVaKdaxw%2BwJuEWhyOJzeLtGgT7HgHYqx6aKj1ZV0USnJjd8LAxo%2BIoEjoHQ9%2FQeIWd7NlVVmF2y8qY9yUH16IgYI8ajECo6a2VEuA5A%2BpEuIv39KgFfgIK8gs%2B%2FZXM12liqyH47AHaI%2Bv27NJYMgd3%2BmJjGNMCPUN5plFvo7eFnW3ji0pnQZGaEMnRtRsQOt7RNPMGIiincq4aW2Th0eJ8p%2FZ7&X-Amz-Signature=7f2581a658eef4ea5376d64331990c5f31143bc02ebbeb3515307251f8b48d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

