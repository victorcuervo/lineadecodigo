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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDC3IXT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2BqBzn0Y41JiFJS4y8ZP3%2FHCtrUPCOP9Uzn5rCpWRNgIgF0p0EC%2B35DkOymJTFiOU8aEGNbEgL2VjCJLzx1%2BfmpYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDi%2F%2Fs33ZhHLGU79wircA%2FHhds382geXETl6fMWG1QTsQSFdKZrxhebSQSyQ7YzDrhkytt6Ytc4vMx5x6UyqODr%2B%2BooQyHQVgySB%2BnRVMN6laPg6%2FpNLvaQy2yDLZONZ7mhs7gDWo%2BGCqBvfF%2BSXcCCgu1Q7OaAPbN%2FwMRX8M1W6WrEXqZo9CWVnlQSxIDB1sFFA4kD%2F4K4RHvRobARNLMZFBT1pf0VVEu51%2Bin%2FDc6jzzhdjuqBJFnKRt52s66QOC3g7URw7xeuELUlrE1OoOJSXMNcnK8CXst2ebR%2FHmrGekSVZ%2FE2wCuvnRyX%2BWKQWGHnSnuqaztu15Z7oCm5MNfOiMYOPDCR3hT%2BLNwhUYPn%2FiJbSqMgg7vd0OwAnmyLSyR0wpOGfxynPw%2F6vg%2BH0aO4SNUt4EhWBPTDJkf00E16C%2F9fgI48vHE5gVQqcodOMQW6Ie5M8VONLEQ4kqB15wt4g2HRqB9WcA%2BoqAYfDteU26qe0V06S1CF5VyOgLCy7rj3D07NPIX2l0iD5cqWAT%2FdOitA%2F8AzFZgqDP96U%2FT%2FYPirpB6KKpvT8U2w4T%2BseTo2qmiJ66HbveExztNGge49%2FnNmXXX8MsBXqR2Gz8bJrgZLkd1ULNz0GuPKf4hjplTEgfZ7XFfmrEbLMPam0MkGOqUB4iS%2B6lUIOlg0ymb0RFjoIjpj%2FAoDXNBlg6kw3vHwUZGb0bk82Sod3SOpZpgv8ClJFtPeHr%2BVcfJCip3RGn5f1pOzJHSyovzYk43Vp5AxJEwM4qS8KspKAmHPdffqypDFoYum%2FiKmPIZyBBB9sya7y5JYjfWzFCp5zhphD0idrfuDvM16R%2FGCR0oKcD9%2FbmQyIT4JLv%2FaMM2o0b1LoJSz%2F2OIsfb9&X-Amz-Signature=1041b033c29559b641377ec35658a28accc2654831ce48bb44a63803f301acb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7BXNXU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2FQ4mDl%2BHAsL3JYDwYwhasKo6MP%2FXZkWKs%2F41g1EI4wIhAN4iNnIPFnxsLyIbPd4o1qaPL4TIxjL4Jp03bYbrJ3K5Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy0tiNUYewBlHpW99Uq3APNfIujanuo2aFb%2B5jJGN9EkGhVjrCJrOgcJXKTUpMxMiLnkEl6%2FCmF3f%2BLi7XwsOV%2BsubLkySkgjfyAyMrfQR6PAqtPF%2Fehviul5pGaYq%2BOMadKVjPjmH%2F9yH8h3BcFO4xq4csxefmPZMZ73o5ioHFBtmwjbwgxmQoPDixF3d%2BgLI718cms%2BX0anJtM6gmO85hV%2F6pS3ecx1%2BKfHAqhmjeE1MumLEvyUSJRRtyGlzPDtgjB65p2oJx3Mkek59ldSUZ7cuhVIapwWMtknefvNyQ5dGThkpcZrFSuhmvoLO2fvr1mD08OpRRSJGlqNcYNWXnnYFtwJOlVSozqenWUcX3DjtORi3Tiwwd1%2F4EUmCZXispuo0apskN6Pqs4dkFJkiDM7LlJfluxMoASqMIqMHEQrmLU1R3SB7e6VP1a%2BFekpvWDM2WVDANYUs9KVouNecm7iRc01sguBtpWtxLxgzer03uNNL%2FW%2BtsY66XWyGKazLvqq1b2Plkl8bvSzxjlwRwM3uH%2FoSQO7IH8atNPOVBIHCL8nCh1pXiuGxHAxOV2MP82qgTpxaGRFnfn9IoH2cT%2BUYBb9haoZU0DA1ZsK0u4KFz3P4AxWhZYf1Yq4OeK%2FDkO9iloJePcB769DD4ptDJBjqkAbW8WX7WduDO2jSISKPyE2CbY0F9D70yL2gVgDlajrBuh4GE0ReW0qD30WhjXFJejuy0ayR32fSqaMuuJNBIaPjcvHXspehG0jWA5XwNnckH8zG67cEZjtLLgiZFam7nl8eEzpv0bT%2BpMTXWJ8dRBH1TmSWo1M2d74BdPDbX0n5Ge%2FNUbF%2FGW1u9i5bOuUXlk5Q7Vv04aQA0%2FptYUEGtvH%2BmOy82&X-Amz-Signature=b20e82fe0329460049bbbadb3d84032f42cdb413b3b69e96dfe7a8333815a17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

