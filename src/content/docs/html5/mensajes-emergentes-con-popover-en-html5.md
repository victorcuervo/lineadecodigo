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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZVPAEO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDGodeqFb%2Fs0ms%2BysTBUalGLAhF1ZI67iVelPy%2FkrdHbgIgUMSG1W2JLuvUltHx5%2B%2BLWKyuNR1Ai0lya%2Bj3vQOmJjQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBW%2F%2BQ6o8yNKHDMCVSrcAzQLY%2B3Er0ZqQLVPwk3tDGfYNRJ8l4Nh7Qxpsdj6ro%2B%2F3Ka7t813J2wjLHgsGwQ7Gyhrai%2BQ14U5z412erC0SzbO98HU7XGO5PFrXKTv86Qih0ERGWdtXQbni%2FMLrM%2BENKPzAbkeJ%2FoqCqPqRbBkoIX0%2BRYAK5caUES9zDEOeizkzcNxR0Fyle28nFei9HF1jo%2BMhkvLu22d%2BtMdd75CXBGtFgWu1B44c%2BeLNSC3MXT7SAUQou5HXY6WJi5DBGGLw3aQ9YZNf%2BoCWuDo1AX5ervVRbfYBzf4Xx0fTBpZg6kFk8xykVeaXqB59N%2BLZR71WJxtkfuCunpac7L0eSw%2FIMqu72rhe8V0ns%2Fyw5RhQ7NHecY%2FjoYXECqwAncQYP%2BAzYiWXF05T9jAJbXlrzl2WblhOsOGqkGl3PojilFzYhh6GOC4umBHGEFeX27vX6l3GKXz6rF3plmwoptqI2gL0HGBZuDc6d4MEYrS%2FET9DLAVZ5%2FUhk5igX%2BGAngUfd8DypRpNf0Lvr2gEhCGLLy8x6SzT2S6pvHOjYjbOnYUlHbvAC2qHU%2FJhRq1oyrg9C5P5JAchpmMhnuJaVvW3LjZ2bSMBu4jW31CEm4eNyc4GXgt2la%2BdjqWyfpybATFMOyqxckGOqUBRzGwWP%2F%2Ba%2FO8P8%2BTXzNoFGAvBIq3EPCmkXPbX2Hv1PcnP2MvsxLq2q1okwjmA2WSxh7o0yILt%2BeNUuPFRpt8XpIBY2EInAOJhsS6VmdpOfxiEVsd3sfZg%2FPBj4nY1TOxY%2BIOwFBJcaqDMRnZxaM%2B4s7NndRwQp35%2FaUQp%2BUgYqKJd%2FHwqa7oSD38kuMLKMl0W2mV33Z0JPxwPkN%2BrDpSHIfuHBmj&X-Amz-Signature=b8b288b81368a918eedf83b493e9c10314170aed6633a3178fc24494f590671f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5FZZQF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIByfaQ63%2FF4Lfilis%2B40kTNihfsdnwdQDDn%2FaKb24SvpAiEA9JuvyD7K87P0OcbJxgVsAzQT86ib05Un7MS8J8tURaIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKchh2IAXvPTHvAj9CrcA1T4%2FWF2KNnFQ9u6mOfV9HL3TB%2F1HzFrFaR3vtfhmcYGMdCfC2CR9PZwBSL%2FACu77yUBIKrb%2BCXWrDizosziFvajmAVfQd980nua%2B4zKqTC8fVFna7jIHQxYJd2BdQSkdKeHl5WkXJh5k%2BYYAjYN8Wi2uuV6HzGudd%2F0q8Av7%2BBFZa9K0jjhkxWRzARI3QgtuumtrnD5T4FS%2BdCZDnc9LbUBJItBmxPZ85gnpSxAtN1%2FLIBWAgG1lEoatyF8vW6HRnx7QJldqCHhZP2wd4NlbPHSyo5b1Z%2FOcZaLgr%2BugOz6wFPPffuGDF%2BboctwHbRrpG1oUMke8wJpOoJr0jhoHL9qrRvR5WyhCFl3d3AtX9VHzIEli5UabXsjls0It8kwr525UJOt7es%2BSDgvRTkxZxq6MvlBAhBhcBed386rLmJoPCgmpZB4dg7clw21am8mpB7HpZZ4987Tc%2BJfZeqZTGgKUjTKWLs5sB6KKU02eQGh9qYseRfnh0qUDI5%2Bwuz9OLM8lm2yEnCLe1KA%2F9ryJmxEApSuYdoWDRs%2BZUnGMhbdIWqcopsybt2Okbr25Gw0msowme7sRBjpNbTW1hdqVHrYJzuKy%2BoRyXgsytXc3tCq4YCcK%2BkSceZC7g3hMKKrxckGOqUBs6aE%2FR8ImpiJ397C95yt0I13NFD3Lefm3WBJhygBZlQIjwvRE8OtCMnnVN4X%2B8Do%2Bu%2Bb1jgp2CE6Y9WNRA87vqgZm6pMN97Oh8pk5coi%2FVhnEwm3ZQNk7nTgguAl1%2Bvl7%2BWwACp2aGc5iPFmElShTj2%2B6cbrGPLBEIzipusZNjWjO21Gt3MgeQL4YmvtDHwvHarNfI6gwupY%2FKoWaQLjz976wClp&X-Amz-Signature=f45ab9679b10ac4c5a01a25f53dfb95038ac59199f97559e631a20f8a41b06be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

