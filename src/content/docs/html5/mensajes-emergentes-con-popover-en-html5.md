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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ452FPK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFzbFyYro10U6j1c4lFGHBl2WYcFiXCaLZpNxyyIWd%2BcAiEAm05vfCAscyLZamsr%2B6uTTu3uM%2BVco2umKn4X7G9cEnYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIFb9Q1lDgV5jkYUrCrcA9twh7hLlwqpqsPU17kaiyhw6cG28%2BOwX4krZTJd6ka%2FUhNV%2BBbsvGfzsHAeTKgnNqHiHbhdrWnXaEfwAwXuC%2Bsl706kAz2hWcSg1pD5bJEe%2Fgaxh6cKnXe6OH34HfCKplI60YrkPoOj1hw1GwYqgLqbxPrEY831a%2FW2BvNbY7C7VVMWrSlO9cg8qCwMGTH7Kwo0TKIdXsO962IhWV9h6P%2BczALtXDtoUpHkyjkv0gaajU%2FGwLltKdmxhFL3UaelWBoyx%2F9W%2BflgsynoG8KrIZ5EpeWfoo%2Bh3hkArn7E0%2BdOy3y%2B2SBaJF75ChcUyAbqgM4qNChWHbo94%2FMZ8CqV%2F7rij%2FdhdVKCOQdl8j1sMoLJwiApRZEDgnOkE3I6eC0ZPO1395fdo8njw9uF38ZMIFOE7lh6wKwrVUjedZYrDlZaHDERmwAztRhkQgqMgiKwohBvNDfYcjvGZISoklWHjlG5UQAbX896OAnAACxNeNOkovsZam03bPUBYIw5yOmYPfA5R63a7OreCXeud8SxSG82I3mLKuotShRwdWXq8tqU6x%2FA3%2BcLJzdMwvQyRXih4p5to4an7poOdOlRGtiMgSYQS9EQ0UZ%2B3T7Y3FQ4%2FrptaDeZg1br%2BpvqPFOlMP6Uw8kGOqUBrDdDarT%2BOcsZlLeFfM8Fd7duEYp2ul7wsIgC9wFWavVIULU%2FBk9nt1jqYRN%2BEAF3Ilr%2Bo95FT1ZpbvutQiqUhEF19v4EMlGBmoI7HOohh5HTdH%2FEcPM65j2Fm%2FJ5qISKh3Yb%2Fb4rw7hJc9AQoy%2BduQcaQPMONftXzqdGQAaeCk4WmmH5z%2B9zkooE98OcJySSWOD7VaadXTCAl0H4iiYkqQDmfc8t&X-Amz-Signature=3ae27723603a30a34991ec0481463a65dfe075ae4063d5bb1013587366d736d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GY6XUB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDfhyssw2RZs%2BCkQ1SmQgxKOdF56UKGgOiZ2JJHqumtnAiAEIYBpWCdLZbJ4l09S7%2Bmhl9zZvT24hBq7AwD0%2FNyx7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMF8fcyV1JVltnboZ2KtwDESnil8suehlfdCvV7vklL8j5YRK4Za3VU6yjREu3aEkBIPqZnmS410w3rn8shTUQ4KyHHu6LXr%2BppUD3o96rEnqLNkFEWw2rz7u8kvXlQ%2FbmyD1jj2Jj1yGaO91xASjJbBPqn4JvgOOjfeZWk7JbIY9irVJAhJca9Pi5HKq%2F%2F9k9VbefV1UNL1Rh033b4PW2zb8ELbwQPHJ5OTWsVGApYqcLqh%2B%2F5tu%2BJM6ILKB9fnFl144ODM4vPr60K4S5KdhNvQm1T%2F3yX%2F465XRsXZ8ghaA6a9TsP%2B0P29ddiUc%2FyhbHHeQTS%2F9aNr12AbrkLzTlPBOPW9f8ENEnmcHLRWdGJj%2FC%2F%2FYFySjfF7r%2Fuk%2BmauNURaIWFVfQIcfHyLghsM7tDMCKqnO9eV8i1%2FOvgSp68hGDxPB0c%2BFby0IGgM68i81tiDHJAPkwkqRFGpA49xTJNtHJFZaRLMUQoJFHLyQkkGOZWN0%2FXNENtCoOpdQiU6dJZ4hzLnu6FnG%2B6atwTZMT%2FGTDfCzj6U0%2BCbDwk1%2Fvebteu7PAPBxIDNECP2wcED5I4i5edwBseMpmmIhbdva0zG7t5mgtV3tF5S16emJ%2FkVkve76vOJr5Qvqy%2ButuNaUCjcn3dnCJudAzxUgw15TDyQY6pgHmvNUnM%2FUex4s8aJpeopaM6AD2%2Fe2tSrbljSa57v8KfcDwcUoAiKpOfB4mkXf5n454ZkZBJBgQ0rhfezu3woXjcPn1EVzRXbIEbtUid3oKAUvpntZnHiPnmnaLIBKxD1hPQ3PT70%2Foq7q8atGnzhwp43RIfPf9BPOFl0IyRoVaSZvH4awVN0v%2BkB%2BTRBvZMQjQiGctwAddIzqGIZ8asy%2FXSkRCVhVV&X-Amz-Signature=98de3ba07747f2f657600f0ed3e5a45f4c7135235a9fbc5038df4fd8c8da2fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

