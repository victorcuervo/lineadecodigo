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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFWASSD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDJoveERZ3z5%2BimuPcN5gRLHNXkf%2BM8FsZ7FtFhjDwUxQIhANvcuTnszYuG5fi9yAZV0JetxxRFmTDKH9eE%2FEW%2BD8nKKv8DCEAQABoMNjM3NDIzMTgzODA1IgyOKwNz61jN44NBZTsq3AOnU8fWC4G5Bia%2Bd0VSkmkUpLZlUxTcRahk7hy45boYPauWMMHoafMpe3xYPxvR2HzI6EZFSwqfM3YT1%2FYOsaRFGSl7zgUcAhGSGRilHAEmdr2dSfkC%2F3K%2FbJwmcTrYfjzqVrnBhhPpBHS5RrJsbxm8kkwXpIVb%2FCPeE0TagBHdh9C7dLBp17eRRzwW8mmMXf%2F3aphYV%2BSFnbQG8aYI2SFHAAa0r%2FXGg%2BVFfLcwqL7kw%2B5r8r04lztHUQgTRdMtlw3ZqngGhWYVrUDkjD8Ggzq%2BPQbZi5FP9BPXv7Ey%2BW5wbwLg5l%2BKranBurzg0VjEYjGoTGGXmDNvphDkVkQ62DY0IGx3s5ClYMCXE0mtRxdDV71Ll1FI0T9isELgUw0tfldiltBbe3SI0tefZLKCuuK%2B0flgXZ381S9RXdbJ25dSXrY6YgIUIS%2B7Q95BFJ1t0DOLRP0v4pVQ58Ep9oo4gL%2F9DCuo3Ru3qBNo99XnLIYUT2cu9GnEm%2BRCI1JfOe8KON36hzOW0blANLfLvMxraXZUFGEUSHHT7%2F0U3yO6DJUI3u8wKZKsaTToweSZqax8seIlE9UNj4OJkiZqGDM62KJvpRkRN%2B1NEKDUJmCCpGoOBIs%2F3ZfK4fKMetqbuzC%2F6MTJBjqkATSYZRK7fqg5fKD7HsQqu8fuPSdgxYqSvDd%2FZ85STsxTeeSVvgFE1%2FP4MescCcjyB88aYrALwZ1YgxfORqXFDrcGoRXqUj8R43%2BZB6cDyEPavz%2BWnUqwS8yIHVGabpEvOW4M2r53tb0ZFPAQQd%2FuiRb0c0MmhrOWKugzKp1Ue6cK3MhbWxSvVC3iXTVGL72HbbtYNo71z91%2BxrhIUuhAzyHPdcrQ&X-Amz-Signature=b930bdd673dec68cc38ecb130676fee8d7e6fc7476e3a98eef328229a7e1065b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQYC3FA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDVw3vrCP%2Bzysr8XEPSgRuUFWqfMu1CGl3avy2x%2Fm4CqAIgPXDQlm1ANhKQzpUOlirlSx9hjb3lwXN4GcrlCoS1EXAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO3YVuuXjh38nkRp4ircAyKGcrG%2F%2BhnNQ6mlMdWT%2FjChaqdFksmwA8APGVXs8j6CZ8jFZLvvaLVJvsjVPBbwhDo1hwZV7Xtcr%2FdZvxZcvBI0hwpr0W0tqK2mEO6dsjAqqqFiO%2BhO%2Bx9qU9P4603vmOht%2BwUhF9pidPQj4KO64itZbwMBj9wVijgGTJFOdpE042hiHAZNlp%2F9QjvsliCNo6IoRc%2BIiqn2iqviNopLD8hh52EfIP0D2YELtJaRasSt5EDYRRP1TMpYtr1GN8OSbx4zM3nwq0WBxXpC6981GFrdJNVy9g6eorMC4GFjaws7dXek0zGh5wil9yaFnTNlnz2P8JL4RetM1tOJmyafPKFBYXhBODSr284sGqp8RALtVUeptESxzY%2BBTDGeJuRqo%2BMDPVgEQMlJMYY7R0c9gTNaUWRE3mvNNE5VwUhJtpwWrnF%2FfuEZ49dulqmcVy4XG8EwTN1EQKSgtnS%2BnwfWhXOLefrr5hkxsSOhwLDmGSwAui3aynyPOPSAsaO85ekrGx189%2F8x3Sai8IJlfDBjgrhQycmAWO4HX3L%2BTVkOjMGARamoa4PbjNC%2F3U%2FSoy%2FyVgVgP4kvgM%2BbxZ9lrY1foeH0DfX4FNRYZ1Z77G3yO4tpCer5ewahyf%2B17SuuMLXnxMkGOqUB1JL5W%2BixxLIu4S%2BqKy3b31RuZjiCIZqyQyKn0K%2BtDBRXl32Q3VhaC2K96C%2FHLgyWGeYhP42ZqhEuTCDgeFL81XBHPU7bNHLlzg0dd0HTa9OJYx22Xb9I7MUdHIZvYL5K6QdK3l0CQR67xA40vohM94WBtf4ADGklT%2Bm5%2FuHJoZctz9pKU4hGgX3ZA2mRepYjLlTXLHti%2B6ddfx5AnRCR5ICwzydP&X-Amz-Signature=949f07c9c2ebebfa5b9058f9d969531a375f173e73995bb02dd41e28d280aa5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

