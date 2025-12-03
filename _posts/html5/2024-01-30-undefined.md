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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJ63NM4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCe5abEqq7Pmo1Xd6n1EYHIgIb1rWMBvZav59KMsKxSxgIhAL2mSnj0f4Q1OIO2sBzeU6S7j0qU1ez5mEkA0MQNo0FKKv8DCCwQABoMNjM3NDIzMTgzODA1IgwZHOlXX5ja1JUQlYAq3ANUgey2QDmY9KNcdDK9J57dbsG1bhNvYU%2BTo0%2BESHaYXCjAGtSYwk2Z05WT5n9JBUKuLPYn%2BVvV2lV7ghT93jpGq3aA2OTssMJhkdjjPN1gNMt7fDzELa5H3GioNsFIihUiwuYvcT135P7X%2Fka7YvxLA0iCVVVz1o2sLl0UTFDwW42F6OTk%2B3N1hDkv3cbyToBg6pvKbaknu14cptT4svhS%2BgVcAKXD5%2BsZYWb1j8gwnrpqNyHyjC%2FVOHSol8dtezZKuxTc5mTmKZWIac06%2BMYzK%2BkR%2B4dz%2FlWKrui5gFqdGU%2Fh4cNMrXy9wEWjJmUtheyMi%2BRvBk8Q%2BuWsKadiIvXZD%2F5nZSC5940y7VlWEsWJzYzMvPLRMUqrngvSCLxOmr6kSq0EihbfmqsTkOT8vXssgc3SXnWPJCNJsys3qMZ%2FPlUQv3W7GJK3R8lpJm2Sk%2BsmAfroPmYEhbJqhLQlyNwLybe37maCvZebaOs8eZ7G4XqkYze4Jdv49T3b4acxwuHVfyeeh9t8B0EbMpiUKSLZnzKDLHjYI%2FuGXG3ul8E%2F9gC9LPwn6DmnoM9sqZk1ZaXJ7ck573momX2DjpyrvfCQ9gzTEBOoVN%2B8iN9gFSWFF5ElmX3dWsxfFJMhKzDJrsDJBjqkAVW7YFn4vhYimxm5EDCUhH1rW%2FC%2BVmRYRwwhFi4uZijqvMf%2BTs2P7NV%2B0kO5YiXU4PA9Vl3hSusdpqITuujB2XNgjuvfT8u0fzS%2BXx4Gq80meNlERoxzKl94rvBCSBZJdgLlleQ9EfXdFm1flczw22JyassehbMstaUEwA5cfEW%2FBGoRCnnUUpbrHcWIInIFYLuITeNdAtz0ax2HpoyutOzUvB9C&X-Amz-Signature=056392f5539f4af2eda0baa70b98257ff8b709f7ac2393aa1d461311e9b957cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWZ3M5Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDpdHFn6lMymN6idJS%2BY4SiZB01zKX4207DS4stCYRytwIhAJ%2BfWxCXdCET9ElQoKYQL0QWmgloB1TOCk7z2Dv%2F3B3DKv8DCCwQABoMNjM3NDIzMTgzODA1Igxx0VCO%2Fo%2FzcVJruU0q3AN%2FGODkVVYnA%2FgSh85fWlvefE%2BmP2PsLENVRT2JsfQaEz%2FzfB5M4B64zLNUzLylW0IXHd1eeyO1JckVdpemSIB3UqgyzybV68as43Kh9XX4jQ1yrtptaztSwmgdKtBoSOBp%2BkLDXcfuRmUXoxUCYgL4f94l3auNQsGiGdutkzZBQ6zDsImye6ah8%2FZtegaCtKsDmFsok9y2KFS59HqFrktHTC%2FDL9hqB30tWxdFcsn%2BK8u%2Blssc%2FPpU4W%2Fx4DroB3KoHaCneuU4mH9mTh7nHHpLHju8QMo7kqN0OtlzbiUyqQZunxE%2B1Kb4MrE1W86%2BuXKaXkKtA9sRbQzQjWovsbo5YlreqJdRCIOcJM5xAo4g8jJtEtjJCXwA6tKQK9l8HO2H9i34veARKSKMANUKErr%2BrMiwULryjxqYHivLi2ujnBSyYhW5pE8rM5YnAaWShptbP9Ef3xtMvU%2BBmJ8E19NOY%2BkPsYzos%2FAcTQjYbByKExgcw5DaHAn9R2hmPzVXF9VI1xUpAnMu6BR%2FCptVbmNdT1Knw5OMPbcqM3xp7fHFbrXnT0zDKa%2BMtNs0NvDHw0WdcZZlda3wi8ecLD7K6Qo1vLVQiEaQ2nMOfTgwwvC%2FBDordX6iODiAeNNmTTChr8DJBjqkAWojW5s5tva3g%2BY9wIBw1PPEhTlVs2TICg6ZIt4ebA4yReEF7C5NX77a5cuPhvqmo6XD8RNdGt5GqbYhxYRDHNPipRnonNFWHxwhov27TRWVzNDyX5oxZjVQevh54Cr2r7kV%2FK5NAUYuymlFYCtBZfX27BGOIavXropAFzcj9h%2FKGx0JZPiJly6h7rlWHGDwMa2cZeIaeH0Rd7Fbu34DTvv411ai&X-Amz-Signature=8f0a98672fd1383466a21e12d43d78a67835353406e8f80669673be656028a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

