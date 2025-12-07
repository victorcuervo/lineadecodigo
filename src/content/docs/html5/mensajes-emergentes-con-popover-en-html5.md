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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRWSMNM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID99PqUVxSWa1gETd%2BTFOQ%2FANODpKhqOk1WTXfTRUMaJAiBSMiwyQzpxGqGBI7WXj8vFHccNyfeYltkT%2BMDF5FJ7%2FSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8UltRiMYUypWBWUgKtwD%2B13RDg%2FCeER5tmCE87zr49k3EG2q25pd1b3bRlqWPXnMoaPFT9Kes0w3fihk1xAA8crMdURFIFvnnWEHlQEvlPg%2BO%2FcsrIiaCm8Xs3eVVim313CvM6%2FsHVUS0zLyn36m5A%2BQIjtTz6TnxH4M4nP%2BjK3TFJ9%2BseXrYynViwgCuSyZMk11WBApa6s4WvtSFm%2BQPr2KjTHEKgqYKm111C6lptaOS0q5WufS%2BNGYtnVVwhGX6vblRwFAD1V%2BbkBrTobgzRQUHp1K9TFdBSsm%2Br2ii3z69a1k0wRthKizRZ9d8SeT9srG37j1JtvC93K13E%2B%2BrITEGV4%2B8hGBoIVdnD40bkCG%2BoMkTBfClLkS2fandLIxteNkXe43eCfjY5x%2FwVtB88pqUv1gswWsyVGQRhMgZTid8JDedo%2BK0U5dEQ1UGhXJwz8Mbzhmsadewm4TIRlvvLBreh8BTtygb%2BQPWNkuS7dVMuFv9Yk80meJIms93tcAyeSmaqrtRAPfOLRTiIOPYSe%2BT6z8LbJOKih7q0legGj9mkL373LlphlD9qDdv2QZAy%2B6bQi3PpDmqkrO1B8sbQ0xEn5jKgM8C3AY28dfb4%2BF%2FxavsOU7J3dI3qM5J8QPZMoDhkZp7Hqs%2FnowjrnWyQY6pgGx2LcMAjBs2e9lPMbks%2BhV%2BX0qjlomzyAgVmM7BmQOmitvvcntszOyvvzg403gL69N%2FXiOyZ1hN%2BggjTASSZtbL6ckSZzfwIofm%2Bjw3bTuEedlDe6WbGMDmKeQQnpfubafhRt7lyN1f21EXGTYR79gKR4ZxJobEOKTbX5MTRW8xRHreBlOFjGM8FvyTcjFJOm5UgCSo9e8nSKxR28bDyRy05NxgOH9&X-Amz-Signature=75360bec93910c720ba292d01e2cd39a815de4855d94e9f196c323fa645241fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722CDUCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeb2j0SXxY4H9SvI0sTshatBaofVrl68KueCqE6w%2FTcAiAt8Nz%2B%2FYweO9Fztk%2BYrsfRnnV%2FjhaVb85gYWxhXaVCzCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZhy4fsngAPbKC%2BuKtwD7Uuiwc2mU62%2BdPoH9yoN4SpOSbrBqLXOvRRiJFBjIuVHDHH807nXD4KByNf9NJDUBW5eyalcjsTAnPjg7vBsZblwP4AZ1RbaGAsjRsJhqWyjSgUZ5E3eokU3BmUQrjMNOrHpQfS6SsLGiS0O89kj072JWsBovEIS89CQ3YCCoc6mB68KGsxIaIVy8ERRTgkoE7R55uwiDTBBwDPRfc1rB8tc97PKJQtqVxIKq4K881QkG0mRr2rL6n6Ba2cRMlxPN1jcy0IbWKSyo2SlhcqPQkyjHP0Kp8Cz%2FaasihjGvDuRfkial2rkTicK8zqwkQDFGS3%2Ff9eaZy74EQYbmi6NSMJmWwT4UC0daLxDSFtg%2F5ZLVQypQzhLb3Hs88zAytS2ZUDjjtZxf6uTn8LBJ7POFtLI0o9I9%2F4sltnPDSum2Pj0IG7ebDyvSXOAvv9xHm2BbPILBXuDR52Y4jcVrSGhYblg2zgI9851VVVu0z4EEqZ3t0n9rs%2Fcr4mGoB%2BwCVZnBrAyKQ8akk9ApO8LM3xv60fIKgcck4bD%2FH9wIqMcpwUe6zLN2RcPh0LyuWWoHbi1o8oIN%2F%2F6WUbnMN5CmhQPjIX4omRYhqOWkyFppw3XfqukmyCaEM27Ho0wJmwwo77WyQY6pgEWN4LencfqvPdfgDQfaSkUO2up2EOc%2B%2F9sUW5TuxBHW84lJYYy3p%2B3z8bmEEZSl%2FGib%2Bv1EeAggTODe1OSNpg6tdaKxz6OS2S8dyLXMZ5LjsF3UDaXvIIVOxuhcUqfkZq1I66%2BW8SFnY166kh%2F%2BXLiislTMJ%2F3ujDN0Q3iWJAxwNq0OMt6%2B61EGFmhF9XDbPnETK3Aa%2FVJ%2FKd0hYxiehLZFha2R%2Bf6&X-Amz-Signature=94ae56c8e7fdd0795c15697b967b9830a2545cb99d36fcce941a1b225259de4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

