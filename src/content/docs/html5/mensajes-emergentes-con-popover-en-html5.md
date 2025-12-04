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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IQDVG3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIFpvnZ8JXXRopyhVc70afTNzHCXf54fUnjFy3zLfoDrmAiEA2nTx5AH54n5EpOuP3D8itWV3BhnpDQXWZm7wvRWlgkQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCTKMARNfSLeu94RTCrcA2Gy6tMr150d8oJkSU7cCeweVzEt7ruM%2BtLuvdYnnB%2FszN0t1frFVkNylnNuwxRnzafP6Cg9I6HjRRHcJbhANUO3U90sbtkTUZUQf%2Fo%2Bs15v8Acw6oAEmytButCVKBdZ3Rm4v1QSiPuXWozvjQKU4jFbrRP4hq7Gi6X227J2t1ib6SdKCWV4pjEKkTlLXmn4nrR0CAnjjCFiqDkt2vbquEgfbmXL3YjvHJURYD%2BxyxEEWyxh%2FDVSeRi%2FTPGm7S6Pg%2Btbk%2Fgtd1TOUW53B9CMO8tj%2BMwubgZARL4H9%2B9XpiQfPrKFyj8zLIJsdGqX7q%2BtUJdNh8bkKSzqosU3b54LSSrj52te2%2BwznsWHsmTBQMC5WlG8DzerE8hYDk9Aw%2FRBxZAkQ6mL%2Bj5xOkqg%2Bfe8ckC%2BqKGN%2BudGIQa6YL8He6LEzKBqUrT8nTPpqQgewhJVVjfh4ld2W9jUGGvttYoQ3S8drCg90eOGLNrP5jcvJf59h%2BV0lGdWlNDBV7mSZPJ%2FoV22%2FiALGxZDIsa9euvGG%2FmIOZeswGH4r7LB8xfr5FXtzHtpnduyXbum4%2FZ7%2FFIsBl4ZKfriwvtmMLcWqTIhGxYxrfLzgwW%2BOzQx74NRVw4%2BlAbntrzkD1R4v0HvMNuExskGOqUBoGVezud9kGN2ZgooEiqW7cUvPql2aGpg%2FSn8z0m71IW9QQBaVmwGkI3PKvjFYnSr5l1W%2Brs%2BFgdzhivfdunnorTzAWtZw4GpgJn90zkfLuvRcTftiCmsC3Gjyv3rryshnUf2mMk8OhGgCX%2BG27YnMRXj35j8QTAG%2FkgHPXFu%2FFPW2FwQLmbF05APMQbScPqLabCHpOaW9UmPklciEFVQZDk%2BYv0H&X-Amz-Signature=d7d447f1b8f442207fcc8bdb86889a2e167e817199ff463182ae37a65b2cf7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJFNRC3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrpI01OOyPJmGOHNn9m22nB3ok%2BsbYhK%2FoBrXbuN9IVQIhAIKN5zndGyJL3uaMM34oMmX2MSoTbRspeuNS%2BDU62rPqKv8DCEYQABoMNjM3NDIzMTgzODA1IgwzlBWztKb9z%2BXi2m4q3APsTUq%2BwfDkJRn6cobHwwsw63CfPTcwO5r453m6Hz4DE5c52spV3bQwDJBlGEGRb7oKUi8uTmuqcRcyuJsMB9c1g5C6YQyLjPhZDtSk%2B6svb2mme%2FLOOMNGTiFCMyjGmISWZHUKIuN16tOPKfzMtgPE1iktjRC%2BZVLEAmVH0gJhUp%2B%2FPL6Prhb2gekGWiBTpGZte3IgxAVDXKvX%2BFjN3ZdQhhbyh8PtXdBx4Sh4izRqDmYxiJsa08sso18bla52bQTMVR0HfCHAp1PqPVtR6AhHobIoP0YxJ7lHPzJkxvZ1Fmb1zgiFpDs9CIiH58Bckfq1Ez7LE3wTIW2F5i8QL%2FwY%2Fhp24gdnpP2V30bagLDt2g1d6NdmeMPkBcv8X0I5mrtcC%2BId7IdZyyYeYtPptGvt5U3KYjwiyI6OhYFYW6ZHaYkSKDHq6N0JVpo%2F5HibWn8FsC0EqFo2m833r4UycbKI3Dbg%2FtMKaKhF7B7XcLfSZLfK3yQ%2B4fKLwGNGXfJgns3%2Big%2FCfvrToCAlhNaaT8DT0mtE%2BP%2B4%2B2z4z3aaaYb6cG3ohRN4t90rRBdiFtkVFgO5NRPxG%2BPn1kBUfJCUl2OAKINyfMMRzJvN3N6xV%2F8zK1%2FTTHWaJOC4Dpe0IDCcg8bJBjqkAX4zu5Ai2uIHp3jV%2BOm1m7yhztaHRGch7NbQlCeRZxxXE75WcNfsmr%2BDLb5LjeK2OVNEm4BivfEOvDyaUuLL8XQIfbjZy2w5wamj50PNdbppiYMDRNImIl5NXkPQlTz4KDaQ85kDQ6pJRgKsNAow8aCrPn%2FxYr5J97UB15L8DPlFWnFdTKCsaoI6hbTcd1oT00eHl01baYNaE%2FDZE4zseGHIPHJb&X-Amz-Signature=3d088ec8a9977a8e01604fe43d34cd98203b8dc47354d39585d7d0b556bd1f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

