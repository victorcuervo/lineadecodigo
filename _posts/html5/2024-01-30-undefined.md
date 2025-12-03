---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OYHPXLY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICUA%2Bw6UagZsZOi%2FbOtTjOvg3bsiSnaf4pKtYXMyWRThAiEA6JuJ8v5Xr7oLvriWDH8cGyrKhf4WMcCPPBfS4K1610Eq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBq4XChVjsMIn5WZcircA7kTnlSvu1KQls6m4J6gtHf%2Bhp62tDKhrvRvsd3KNR8Oa7V8OHdF%2FWX65BhNzdloL%2Bv8eSzzU0Ms%2FQS6XSq3v7iqbeiuhLbDu2RlkxrcE3Hy1Rv9B8%2BS3Mo6nLhrUYayfY0R42aM9dH8Ji8DnUPGP9p0jOzplgu3Mfk6%2BE5Y9cM4QohJAohDh9e1R%2FK%2Fg5XSNHHbpIc41F%2Bi1aqTvAc3ZW4AiwB4Mi%2FcORM3V4B0oRulah6TkDXl4Ko4yMiShshfevJQ7cOEASM2mMHrYgsVJMrG30C3DIdiO1%2B763PWXkQg47WCS3XkLwNwzO%2FvbrY9pwzzV%2BjdlSN9cbv6RfrGpWMxCGCKDq%2BXmusyMsK98Fdb4OMp5W0Y7Z%2BWU3BPMas8xFE1Gz%2BYa1OQpC5mUAQYFcL4hGuadmcebiC2IagU30v%2BpMLp8RuIQObxhT97pi%2FWl4mig8p3QV9Ogfn724ltgP0UUYbKRhfONS52Ek%2F5vAdZeWoRJog0puwAWV4vCbi6rYf0Emaxq7Pr1hB6KsqEjsLUIcfqodyCOeq7Z%2FKNJ1MC4Ck5BxZjh%2Bz95ZYoVt%2FB9sw90Kz3CuKoRxL5jdZWttV%2B8GsDOQiCEYohv1IOg544MYUuqEeltv5Ec4uoML%2BHwckGOqUBQ00Bq1BuyQjNxtj4cQv%2FyvGLmFRAjDTiPjOiF%2FzAoGId7gjMRSwcPIdCeD0U1O3W6smr1%2B0Tgarrc0cTfbuzNPMInHlu5hxgV7q0kxbjVI2l8o4yS4RpNmGiS7FcsMjBVl1jtQ1fu5JnELZOHnBux3l81VOMELU5NpEOrgZYbrucK3nkM0%2FJIwRiRAAGS08AiMLRuNawwRY7PShW00jm5QjvQFXC&X-Amz-Signature=72d4f8badc27e1cfd6d0794494a97dbd46a5afc74e124300f21cb960c54e3167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWRGUKS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA7cH7YbyPeEt2p6THrOjqckDc8lwOMl%2FHSqBCTPdqymAiEA98zR3udSNz2sRV7QJKfQf5S%2FK94N%2BMfnTzJI747zsV8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFJIPqSWa6Ztmgp2uCrcA9gYWQkTrDOozPS4wV9Z3yE4PJEvFlrCRBQmOUoDDG13XHmilnLhekHKewMvUB00ol92jSQTGxCtj4MkTEUcbA4IyIBANuFPnMByDk3COyR3KIy96CDnaUIxhyqs5K4KmDvIMCDqf1wRGpkDWOBZjHp9HK3WBYdmh7XHJe4123hD0OyG2heh85S7y6ad9Dufnx44wQR06d53zH%2F4a02ACRalgbrSUC%2Be5R7u6cAo2QVbPqEWPPIc0BhWoABm1vhVpfKEXDeUmKwvA56Mm2yVo0kyCYF9sQ5UpVvtnnnuycu5MbeybPUcFVoatWeLDVDqzf3FOlz%2Bal%2F5%2BdgEUKs7GkVkGx7T%2FNO97h%2Fjq9jqFWxFm19OCoDl0%2FULcw70xetSHx2%2B85SjqMt1uYDC5yFAlvWfMFcnApju1T5cFFp8qC7W5VpPWubPIgvDXnhjcPpuUGF4MdH53rv0nUXX9UPJ7BrRMTaOJT4sAB6O4t5obQTHue%2FqCJIeysrJ2fa3b8Ry5lNRuC%2FMCPu2AysHjq6K5Tj1TdcK%2FNjgGCzeeV%2BOdJmmlMZYlTDBaeqh1k0LxGceyUAKB00uFs9PIfgjCyPOzBqj9vNmA8fKT6x1Z7fpf4WF4dgYjHFe%2FCiiyRa5MIWHwckGOqUBWrRClBw1NccOaDEcVU4a26o5exiIQs5GOEKRMrOKc7qIhCdidMOit%2Bp6uCu%2BpsGeYoNNJpPzC2fCFZnui5Ju5rXQARohoCZaO6mZEGbnmch8xXE1mMZnBZOkol3%2BVXKZnD2sPQpAEBs3sNFQ9SoWCjHioG5jApcVPs%2F95WY0H4K%2FHMVtMsJ99bKNUXGEcj4btCRoialHf4vE18AAngQoUHKcVa1Y&X-Amz-Signature=374fb14f8c81a5d9f51416936bb4ce67a84b2beea189de0e7e32d8a61acf7877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

