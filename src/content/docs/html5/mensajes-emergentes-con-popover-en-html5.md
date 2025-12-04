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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ4CT4UR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIA30zYCOvBBP%2F%2BEjBTArrTgZ6a5RHMLTYOSbq38NPfOOAiB6QUzg2ZJ6PMgyj4%2Fyt5bb2zqdGDBhvXXy3Iih18K2cyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMn4hoOLQJnHQuAB7VKtwDQHSEC9I6ZbXyNAwze7QWm%2BLyJJM59rC48hFroL1FIfDRc9Ez0MZRLKBCCZ2xM%2Fnc%2BVg1fyqihgTH4oisX%2FNx5h5KU5m65x%2B2X0%2F1cZDG7DbNpUHN5ZZ42xx%2F%2Brj%2F5o3UAvaTKIML7w%2Bvg%2BkDEplfR3G7L%2B9M%2B%2BWKZoJRRkavUvefpuF6CJYrzsqeM6ugnWHgpHbs0NozCjz0TrcBNxnQi82J5lsvUheAUyxoDmMpNstBRywWdz1h3GHpT1pAfoR7MdMSBj4q1xch6GihuHJfKTAj1zJRQDpBc%2FBruEgPrl5ZbeK9VpRjfd%2FOFs4ny8wpRlQRz0GbgQpGOZA2eElJ1FYvX8jX%2BW69F15cZ4NSqdK9UKlPyTIqM165I7ujVb2aS7Xgjh7tfjXdFc37B%2FMIEd%2BeyQWpWM3qMSqEOCb1UjA%2Brun5Wby6hQMbiboL9hqdfJnTRQEtt%2Bud6akMh8VrNnYr2GMP7e9WqDpLCV%2BrLkYMPargTdFI8CNQzcDhsSEXfaw2Hjk%2FL1%2B4GvdohgzZHmxcNygsChjisM47efBBautJv9fLIcDsqy7z7hWzt18T3m5ymMzWY3C7h6d2I9awtPrft9ZFWhP24lemgJrtTRXNX4Az1%2B2LuOXeBlgw5vLDyQY6pgH0e1cKZ8S01CYE2uqkWRAVjEGC5S2jdePgtf6r7%2B0SWzx3qRGG7Pb%2F%2BUGsgeKXtvRIwUyKMqEPGEcZ6VKfZOk3H67gsc8Fxfah5DAO8cC0fhSATaKCbVWSIjeJpU3KBxKl1Rx2SQ%2BJiHMtch8Ws%2FQ3Tr113vpA8SqKpGHYTTQ%2F9qpZz82hSlKuvJGJTGuV6F8FDVuNiNp5Q3DH3mX7gF%2F8TADNbvLN&X-Amz-Signature=1faadd3dc83b2e47a90809c9a5cd12c63b0cba63897a727d27510afe3e57d917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXFA76B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGPyxxlQl%2FrAVndEuZQCpzfOY7VaXodcala17tMBlJuvAiA%2BpSK8BP3ykDNDdJt0srgrOlKejmFzKJXvZvqSsenAzir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMF55P%2BgV2fKC%2BjXJVKtwDlFLNbIfwLZ%2BkPj%2BJYx3612uDhl3LqQwG5XfUcvgm26XrwpDUMUuLHcvzz1wa1NPOecNcZNNUFI8%2BlzfuCreIVOlup%2Fsi4gAgcvgTjCudAfQksZ%2BFrI%2BVRUrOCS503sQTN8zqUuUZS7j8t8gSVmEf6vJ68BqhKEavVUwMe21d4%2F%2FpLHVh5Xb1cu1P%2FgrHSXaxeFaOr3jYYrJXGCutDXU2yc6dUNs4vFJnfa8%2BBagthfG0kbWFG1RwNJH1pyb5nl8MS2rfyDOuw0YpaPg8Ly%2BcJhiuHH8RolzlhLYxXmpWD9jysOapfCh48hFd0nEEt9CWB8SwpTtJmrBYWUpp2OneR9%2FBXzKP3OutJvOZzbXRITQe%2Br0BbK60V1xYBBAohhJYLukCDVhBKl6wO0bVY9EgAWLrL3HqSEYlW6styr8TuWyjpaleNLCQz7iQ5UlpNJ168a1LJWS%2FJPyZNDC1eSPwqc4CB1aD9ggylDhZ%2Ftz9iyru07maIR1J6GXxwPGj%2Ft0uFdbdB15jsR%2B1bUdPqmofrPnPXL54Nbk92Pj96uQy%2FcyFC2x3%2BIw6CBsZJsWZkfpE%2F3%2F2zuJ2wQFzX7t3olTZgLd3sz5npZ9nTIR36h1dsjpVAgvIwIGSa%2FW6WqgwofPDyQY6pgG5eDlFSeaoNOfeLy7SCDHIeAJJTO2F6l47WfYJRjTiDg1tQcuLHICXzzifWsEzjWtGiaZ7mrCMDIWUBJC93iJKFx1sR3F7WOoYSWfS6ixxAeRxVKKv9WqaZ2j4%2FZfdKH5PbLgMBSyFYGyX%2BfGJwzMTgnYUXG2Ybpnu3JCO104AB09WiretgpF1SHw%2FfL0qhxEGmPFt%2BgajThUErnB8mmJdNJEbms2i&X-Amz-Signature=cc95618bc0ed0086641b360cb37dfe148ca287ea5d43fd19c656775e4cda60df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

