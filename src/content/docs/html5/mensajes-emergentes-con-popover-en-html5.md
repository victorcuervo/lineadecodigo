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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCF2FKUR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnw0qJ7DbjbjIMozvyM%2FpxVzmKI2Q4qp52KkPYN1dUVAiEA7uaypTz5GB4aFsgpwGQFueL24dl14OnlhgJvRBJw5BIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl42vXlAkeBPK1ckSrcA2yM1LzLPB8m2Pj5s%2FTN4K%2BbQPsLavgVSpzDWG78uGPyVZwAG%2F%2BN72rx4dRWB%2BUP5GhEUE5g9rCyoTKwMq%2BifV9ncGBnDRlM3bGOCNzFtdOqsQ3yyIeDxIhDMhm2FGFmmMTz9Kp7UDP0iCDPQLiebSKvvZCgfaXO%2FdPlaOZ%2BKn2TjlAvsl7HZyKNxuw7mVJ72bci21AKf3pNDR9mGfAzZy9qN9LYA%2B3254RZgxc%2BZ%2F8qXFjctmfgoyXMPeeuJtuXwRrbwz06%2B7DvoZnqLSzR68nN1YFd5Vsh4U3wl7hn8YiD1r22MUiTJQu5izyeuk0%2BdkBk9XLuBi2bghu2VJcq4FgVE1QhINBzR8C8RUSGcrcrD0Nb2fsnBUz9BL4FZjZu1ZjB9yM%2F%2Bl6vnwXSDYrUNWMutzJmRXJs5pbF%2BCZ14ty%2F5UbLha4N3vJf6TyLzes1K3UfMx5%2BweKwNqNudZip0Er%2FmQ%2BMRLXYbK4DYfuqzY7T9Xs2sarm5xtkMHM2xUUUURQi1RZb%2FWsmuXJ803Y%2FSt%2BIVwZdONyPLMCcbAihhoNH2XZYRjAouXnxh4yAfP9xnR%2FYthLrHntc9G0A5vl49vRWrRWhcQmktwJK24mCqOiDDnIz6qLqkmD2dYYVMJaH3MkGOqUBiNqrvm%2FTG9iBgay5JVY7a6lLqjwhL4SCBEb4Fsf6NtQXSFCucgkD1qTJwFrewsxi%2Fh%2BleqFcpOGO3JLIP2zjU8uGVVzt%2FvA19l8J4WuMb66K3lYB7L7rDbLfyPyqbIbHZGDp0yqKFaj2BWrSrR9dNtv1hiKegaXvtK62rOqQdhIViIW0qyMVOZMMe6fFxTkG2%2F7voS8lugmBtZ%2FyQ2hGZVt%2Fl4Pr&X-Amz-Signature=6d4e8b4f9e66bcc0bd8d47b2f4c1b9d6334ffdef8920160111e35742cccd2092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657EGQMAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdrTvkS9KcFOuFUnURhX4uyQMLyuIbYdLqebZl0a0gGQIgAhoTOIgcNtMbeC2Hfeqpq%2BXpfYOO65OGH0ixrpUmWC0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FNbqxUfdL6Ge%2Bb6ircA55zxA%2FqA86lpkSeV5XUIcfJRroswTlxTWQN74b3APp%2BenOExr470zqyq4LqJBWesVlbJ49jz54P0Gb0cyRodN0nrFzQcUV7IZBx40uDKpaFvVCkPfO%2BsEcOfpX5uQPxdWjkipEPo6%2FjGOv%2B8l0Fe3EKUJ0595oQJiSSKWWOW1Z7%2B5qCQun8SAjtyEW7n8kih7iMX2ogQBGRoUnAPyOwiPjYVPCplYQHxK2mM8aqFWHEBWVBwLApJSvqdAdXCV7XEZ7uIuUiPSJBcB6E2hdw8G9%2B3r4buqK9dza4TLj2t8%2FQj1deHTl4JNCT%2FeaV1ZydKi715gN0FYgq7HrzP8dL67cH%2FsCQ%2Fe3KVREzkcKOas27%2BDbWIZaMbs6Se0bE2NFg9ItoCRKEr9AHupag9IeGBEFU6sG4cIMosU3SCMpAr4h0bRKGqrOaN43jJicDdsJcmSgcjKpYQ2WLYgACVwIAhV7haZod%2FyrXyqAP5Ifd6T9p2kGqVWRRAdzdGIDNZ3NTL46pRdATc4%2Fxanwp7NFS3xYzP0Qml%2BLKNa%2FZI6YAu0a45EhyVHuspliiBcyrYC6giLc59Uv%2BogLYI5hg5RRrAQ0vElTqJwlF8cOrb5xC1lDJ8JAdmfuSTkVXv4Q2MIOH3MkGOqUBlZhhr1kT0M7HX5%2B2zOb78NuhL0IZUye61xUOue66yVQwgDeG1UJPxU4XIHJOiDcNs93YrLbkZfugVQoLuJ%2B9pJOLGDTqHPpmv%2FsZ%2BaBS6G6fLQdsAZZYb7S8Qkdtd%2FXlgnLzcorXhmMp0LPhyk9AHi0GYIID1cCr74DrZ81u9ykxnJiH9%2FGqtF%2FzWeGiwRHAHtdG6H%2FMvHzunlWDmvmSR8VyR3bZ&X-Amz-Signature=12bf8dd9a54676e8b3fb408a7e1da25a28e594b0ec804bfb7bc3b43da0626006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

