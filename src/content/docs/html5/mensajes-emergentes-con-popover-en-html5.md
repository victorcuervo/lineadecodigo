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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4IM2A5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJxJ3DnZ80l%2FHVLrWIsXxzH418RcDMxSOS%2FrM6BvAC0AiAfh%2BomaKnaAohuneKGJpAQK5yPIcxnvl4ZGtzt9yKXPCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMC4%2F76dlQoUHFWduVKtwDD9UREnUDt%2FJhm2TY%2FpeyfduXUC004cxWl8ZjNdLlZoed3GTLP9j08A93NFMax%2BhECISmeX%2FB2177ZSov49INgxX%2FRSxQlfwna70OsaIekG2lwXM58ZJkInCWxIEqT%2FUm25YFL9MFo829Pzuoa3rSgwq0woWyUO0YQoVZJGgh02qt%2Bsc5hVGVBIUC8nKzmDxflDf0do0TYoKjuMMZA5ZyK70HXwW63qHModCGMB5xnrO8EgIw9ENABUVUFyzeAU2jSWpgInBJseaPA9syTVbXR75n1Zd1qtagDJQbdfSauXPW49koc2g4LoHxSkfje1uAaTnxl134WaHRs%2F6b1%2FNPqlwLzYnAJyKaM0MOJFYyPdt5ZNCsbwCO4MWdgqwovTm1Bbc8uOxDhSVif3J1P8TpDra%2FZlajxjCYysa%2F8CRy9Om%2Bi7v%2BdppLkVUJ1C%2BkoldiGuxtjdkh%2Fh%2FjOT2OHMpS8ezDEXQ2wpRE%2FDLgkXaChKZkvb6IzBf8tbBXTvd%2Bwauu5jPCTJB0FRUENoRknZIW28NqNa9Sw%2B4si%2Fbk9Ha4p0WsYKMfiYgfwIC59BjCbU1%2BiD6LvkQ7498VNu9Fbsb0MJOTdoJLy%2BJuNT%2F%2FsLHWaArQJSVkp5A%2BlUF01icw1YzIyQY6pgF53NE4qyswxT44qgzCfp3gUVJFF2WwzjdKKG3CQcXD1yqUK3eCWfRUM6lQxto0KpcAJG0BBkR8VNSAlIVT3anSR6bzvYqMd4zSp7Y6a9y0%2Ff7EyowqvVUuAN%2F4NG8DWMmCcz3zV2DJVAJCcfPbDOmcATP%2F2GqxRIDdv0OKZgF3P7A5PxbZ6SmGDhRQAlIDtjHJ9Vh3SFPhjjE9AHHr%2BGXG3BS9tscP&X-Amz-Signature=25dc553b4b994bfbcb4da65c0cba3215dec1ccd51f744f00986f324b7fdf3b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZREW4Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL2sMFDReuAOZ62OxfI0c7fVe0RgAd%2BIMSKTvuA0Lb%2FAiAZufCaDY2u7DmJUtvfrPh4HKeegVagTQcI5DrlXBCooir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM0ZU2HJCaCQsPAyrUKtwDW1YPwdfAqpV8CR%2Bsc5TLUZcZOrioxJ7hr9klBJ4LAILCZX0fDBG4gDyLgsF1Vzl6A5uPmZw5zUcmlgD9csdA1IQn7VHRwAPFjjqQtGgyt3jjYeYOh360Z%2BA1hAyPB0bcl7qYS5HmEKSptmaozUU4MEdJ%2F2RT255e9M5m68gOYHPIoJV4KqY52WEx1CALd014WFtfvyV7tKR%2BcRpzkyN1UTTrohI5FRmwyKvmqQY7ugHTXuwtAU4gzPkd7cbqWZssImp%2BinVnt1TaOF7qqbjw%2BW1y0eWGWr%2FMCjDTBAhAI74DM%2BPjp%2BB0o5lMW9HzBZ%2Flw7HVJc0TUvyYLTbS4cTXVyyPe3QF9TUALRxnIK1gsjwYqyhspY%2F%2Fub6jPzbbyNS1bo43jlexukAbbyY81uh%2B4RJ87LVgQaLqktJ%2B5ut5YNtwmxbukoNAaFZxx6Vf7yb5%2FdDSkrhB0%2Bq4Jf0rYv2B3i3klzC%2Be48Gava27FmF%2BZc2U4N%2B16Y2QK2xhfQDA5YAjoPsAq%2Bo7q4GqkKWtyZ3Lio0npc61L1Fh4FGxBHRFokRbO2CI%2B9ppvdZt%2BcC0DKtoR6ft5L%2B8fMS12q7LmDAWLT7fg67Bw2txTGJTcKtVIqQfoqzi3co7Ax%2BJN0w0IzIyQY6pgEJZl4%2FeosnRfgBoV39IF0FzwhZgvoNXFYEv0AYQRMKYsJEpTaZ%2FrBgXW7qAbUd8Emrm56yVJUucheiUY%2Fx1%2FsCkTCMcRhBkX8zA3GKM0YItDVNrKMHros49L2jrjEjgkakeMYRflhIwb1hvoiLW%2Fa7r0X7DaSlE8Q5KNCxgS1gnycjYN5mas5IZlEpYufZH1C%2BK%2B8KlLe32nEEJFSg14%2FQiJWJafAQ&X-Amz-Signature=5c5e5778d435d1cf29a31ce03981765699d0a7bbd8b9bca4ab80256b59098cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

