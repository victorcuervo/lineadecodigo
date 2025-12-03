---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCSGJOK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDkG2DU%2FOwL59R9HRSl0tt0mPlKCQj%2Fiv1BKoxFjZC1GwIhAK9ql31Yx7JnT%2BuOGqRl4mb4kbEZ3DHbfW%2F%2BfuQSXMTLKv8DCDcQABoMNjM3NDIzMTgzODA1Igz4aE8OeFMYwda9EZkq3AP%2Btjyu1PeDhYAestJZlBsZpC%2FythIOEX4aygMdQ42vZ4jYFNG7pp242CTZ51ent5I67Y2Fhi9TB5CppwJai2ocLd0ih3uszaJGOkagMOs83fAypE%2F%2Fli6rV%2BRWzn6CcrwU%2BQjgJu6MYgn0hz7wa1UFtxI1vOuwK%2F5%2Bwp3W%2FiFMz27EWn5JyoMVffFljQoj0eFACkruTqUfAheS5tByanD3bs2Z%2FjvOgI0H9gyqwa0QFrJ3dw9QXrQ37o5fa2Ki%2BMc7VQ2nIPUEa%2BOhmvHdH%2BbN1ASvU3fJKS%2F00kZ0e4QXwDDN3jV6ZBioFkot8dbY%2BvoRunY%2FPkUneJ2c8LCGbTrVe973PXVjbaYPon10pmLeG9tW9T6e%2Fizg3Cu%2B2lmq9cSP%2BQ3MkWhWVzQqnU%2FIikVzjZ5g0tb4ryiUckESy9Igmr%2FXfK6BnFt9KvS1UreXxfUn%2BYYqKhtub%2BC%2BfJUJYURq85VC6CL5ylzRy5aVlNMxR8uVEs78FCM8rLC5elDqGgYSFti56PgittYQ64yneQoujpHj4E1R0zhKjJfILZLYa03H3J0RYOIJblDeRZIDp%2FlIz%2FS07Q5LCTWWUkGeJAkT6D8WbupiEvujtgN4YWlukgwXpMx8%2BYwgHL0PSjCa3MLJBjqkAcBbTFtdZ%2B7mf9mGP1E%2BC2h2PSPU6raGZIYXRZXQ8NOV51Avij1uuq5mX2tzfJES%2F%2B6Nb2pVVu7bfU%2F%2BziK9pglfrqhu92SGZdibtI0vPQyCUQ875OBDSk6r0o2FQ%2BvGVn4AFvUb9gQcxo5PoQspOiaIOPT5ypqfAJd6lHuDG2cVbSw4PQ%2FZE97z0MvoErcF94CZ%2BlTNL5IEKcF%2Fj9kO2o4xvZj9&X-Amz-Signature=f6663f3be92176aaada783c2a9a7726c49c93ea362d8bb44dd6d0a57a6b95250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H47ZXS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCrgZVW1%2F4H94Djg3MG4oqULVrvXgyOvSn6lg7k2KU6DgIgSbPATjSQWNCpBbO%2Fe90b3yvGEob5pmISdCsB5RDk6pIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBSphUW%2FI738ILVG4CrcA0gqfE4gYTY4ds%2Fiiasy%2BPLCa7l6s0O4ixZAKnBv9SspZIs%2FNFBUjHKdkaTqPxyJ1tFVTw9qQjcatjJGawSeDaz%2FNBgsfhFhDvZLLeNkj4%2FjjogBldpSzs%2FNYmkZlogFln5bieuVD4rEOljbwYQ6%2FB7XXvRem62uePWHAWuhsXnQi%2FCRYHRSQDExj%2FmSdBUg5N2cCJzCr1iZnilO%2FquQR4PJRjmMnuGKQXUvqDAXfTkUvwZfOBm2ibtu%2B0MtjskPxYSoXh%2B3VHstCUW%2B%2BQM%2BzCXiwuWNB3%2BepPJmHn07sBAiILg%2BJG2hTnn39xZOpavQL6Bk2R4AcgwEK0UZPpB1iJqrUpIcxZgW1MJstpO7HMLADxr3TcNJOIXhEOPpx1DbDPU3L6gPXCmWW3dSk4w38dMwc1FOOEyq7KQI480uctzkjmdY8xjFPnfjN13iXGgWnsyRwhWABX6USuKcsdPxBYnIf%2F1Emqe9tIYqH6XpYBHD9LKwzVQKrGZrH2mK%2F155eX2BnfpMRQ5AUsovt%2FaqTSNoEV9WpRyJH5%2FJDBk1CQYLH0cI4Nb8bBBRS6pNppgRnNu2L%2Bdv67rvDQlkCxZM6%2BSV6rioMRkilJdK2zPUOiQKJopHguy2%2BhenrCv4MLbcwskGOqUBdAWWJSX8lnqzSeE6dM9iR%2BRKvFo0wYRyqZaoOp2TuXZDHMsRHMe%2FLl%2BhfGSb%2FRXD2HJDyECFoIQ%2Bo9GiTHqSBsIcT46zhs%2B%2BkmjbYl8tG6URDBPSdi%2BKcAkEQco8itaoc00nM3uMgs7BSnl4hHwvhi6rghs7EqBWLjsObLOsyFS%2F4THPbxoLJhO%2FB97FQbnTUVA%2BdpTtFJUaJGTToErFrewPZUdc&X-Amz-Signature=67c1ed44a1d594bde89db5d0cc3ca940b091ed494520fa7801ebb3afacb36eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

