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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDTWUVF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F07NFh6oO%2FC0WzMPNvB3J0lsXHrCESZyspT3L17OwlQIgEXqgteZflGPYcIruf2Wfgi2xXPR8YKzCgLVHxdZgE20q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKeSzkBKe3qQjUu%2FMyrcA6HrLaTNUHAtCGFRoltYzFP0VeBWmJe2OPBMPLDOEv%2FYkluc2JeUrpxRfnNQjIfqHlsq%2BgCabhduC3ShuPVHeaybH9eGhR50kkPy1eBjH9tllsVG45A3bCjSApcGZLBYVpLHqHEaVajC4QupuxKMUPQsclHmdoruE9LCXkgysI1YK2151E1GXnb22GxiDaPFFa64juHH3pYMQRBHrjzNc4g3Qi4Bmk7NeK3k0FHjvxNqrl3RCMyDrp3yK1uKoHQNI6M%2BKsoADyPGTPnJmcloxSN%2FKWdifiatYN3Pg3DaA0VIH5GOly76RU0dDfEYbjPu02AokmbtfuDt3x22WGPV5FijzPCRD0VNjl8c8fSNEPvzCEzzmXWGt%2B6W0TSq0IXciN1SWrcFNFbn6C%2FgIMa1OhY1Q%2FtokaZMz5VpC6MGMZ2E1nOC4DmwLLfFPLRvl0dAksCbCJX6BisK%2FeqbYwBdOkjTBDYTgz3p%2FnTC07MMADo6qZqF2IOFAwRcQ1nhfJSzE6xhXRqnJydaVr%2BQtAGbDvqCCKuST6v4XQ8jfolJ3Dc2qgnZc38v3jw4G5ZWkvGqj2W9OSV%2F%2Fid%2Bt%2FJXuCetYZ1AL4%2BTcV%2BuSDS6eQzQ%2Brohg78IninNsXUWaYOuMIStyckGOqUBF6hBvddX3D1nbpPuMmJllw%2BviW7alcYWBpc2Cp2gEW%2FOYfNB1JzH0UKbbQj6YveBZ1MBdGYAzn%2BobSKmkmFuz5C34yWr7tnrom46HhJ%2FUCRGzjoBznd9AjAwnO7QMMgLjMzogVbdsMoFhCCWU4Pe7omgO7LjugGeZgltDXEPHDsloaJLFn71kxekXLHomAjTI%2F7M4g3I96jFzJIEd%2BNV3RSfAMzO&X-Amz-Signature=0dff5f7e30f43d8b72f5754ad2d7ccd1b28a38c026b6aaefe545f4a83f2e4686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV74C5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboA7xRLgrjYY6Tq%2FmaU9V0nOz7Zu7zXWrWy3rt%2BP2gAiEAi%2F4tRGZVToVeWe0JxZS%2BZzjRq8MDjZ8ABQ5zjo354Gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAp%2FC31VD8oXnmZWhircAwrhGS7wpI6uGiU4VT0bxdR3xa4D0jgToah%2Fvp9PN9taf%2FSJsIt7FBO1UIiKyT7PCg5NrjPVMPL%2BNKLeS1N%2BT5Lv5X87c5pG6bhEkPommnpB7N7qkjwVaUnNF%2FXDtawKtPpQwgiVTm4ss4rGJ5e36O48lkp1b172jEIzYK1YcauPwCLj4PG5cN9qGGA4pX3vB23TNH1oc%2FTdARL%2Fimt35yuRFFfM5ML85KFZQ%2F7AlIwmiuv7EJOL88ml0LZshnEqSlG8UnDxFMj5MH5lATCR8GMBUAa%2F4vP6wG2gdib1IJHuXtWkAKL7NhEBkyXydEZV8YqKFEFB8MPQILp1OgARe1nsPt2R0OmpCiRRqg3qdTMuEnCgLkl6Ls7LtQdvVI04gNIGXk9%2FPdVDUc96tdce8Uj9swJ49HYG6qyNljGb1SqK2LFaNnwewbxr8OQU2JyjdtinyXgahqL0sg16gseGEJFEGLoXkXU3D7%2FZBZHIspOtasuPEls1WR7UjHHv1cR%2FsOA%2F0K%2F3PxMqAo0yurBBANb1ixoVOUYY9YVlGUc4VqqHVr1qu0lkH%2BTA1GcRqOAj%2BSkkgXaaSfhVwXJ6TH0msRdaMQYzcdkenVolTVSWVZ%2FcFqg%2FS8%2Fv1wkK9c3KMNWyyckGOqUBtDvCTkTzayoQtwLdKQuFWmKKRSWG9sTx6ED6breUxs1vCp6ajDRBUfNgR5IkmwiUu820wTkBlWgLtxncuHHnFzLWj8w0yGJZMPeJOBIY2zPEhuNMFke%2Fqhmn9J%2BGw7N6CL8%2FGmSKrCqtB1CTMoaK7RmrA%2B%2Fz0UeKKaPeMvXon6MOjM7J1hWKVq%2F914wGYSsVJ%2FLj2wBNM%2FDvQ2lDDRYM538cckTh&X-Amz-Signature=84565d5cbb341d250d4e75b2128f7461a17036c44b6543b91ff582bc374e7c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

