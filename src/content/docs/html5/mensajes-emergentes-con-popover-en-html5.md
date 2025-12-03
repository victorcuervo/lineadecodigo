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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KEWF76N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDJdJ9zmzlSxreH9AHTobvQUnD0bXmK33kDT0YtYuufMAIhAMf5ZuCGS3otlG6Vjn%2BZnxfFeL1bH0UYsZZr2w6%2FvUpEKv8DCDgQABoMNjM3NDIzMTgzODA1IgxjgBXwOsnETkcCDn8q3ANfOasE61OENonGfsdcijKeifhvNUb%2BE9arOC82FSv6aPK%2BOxmMFdgjA7j7ctcQkDD9eKqdh%2FDE8KlH5n01cuB%2F8QyIOKj5USA968aDEb%2Fgveg%2BfIV57YSk95wP8CZSJ%2B27xXaXNrYwjrBql%2FBmzX0%2BVXA732sgJV7xwXB1Kzm2gEcKuSMs2G3KQVQ8bVxKdt9WmqV%2FT%2Bks6eXv%2FaSLakZqAIIIYO34334nz11rlAGwzfPd14iGH4XGqYmq7xJPTZ4nsIDypySp11G4oAuFysOWYXHPCStKeS2sgpJ5OezZya%2FP%2BpKlQ8RvwF3Chtph05Bq%2Bt4xo3fTMCAAXMLgTtfj%2F9fLpFfFeIIo64inpTr3IU0FC7pVvIx5lHFWwGx9BDMYVvAzSGdgl7HSks0%2FlUMBAzrmGbOqDuDAKDD%2FH0qevkQM2waxLl4oN6BhHkazaL1cX2yicLDASw%2BGgHShytY3WVyEQSAbnR9sKzbIlWR9jpGKoU49U5iQBYIg5eX3SvNo4k6UL2AWo%2BP8JaaNe3ixoTnNn8thUO0vdV%2FfqWdRFsp%2F9v0LxVoCdPG7p2rKXd7GOE8jRBTeqCiQ8wRlgY95ObToslTSYAgGlfYIU9l6sE%2B1zceECvlr7kVHVjCB%2BMLJBjqkAZUckEuXkmiqTLF01euNR5X0zCqO6NJKJLk6G1iBQgBWs%2FrVN381GRsnYBgYx8%2F4VdLtJ8fV7xs8C7azGxDiYBp3kkDtXq%2B2FI452%2FUzBdb8%2BzzvjbOnMAydn2AhieOmz%2BbbStAShzmisEZZpI4AxPUprTyNqZq8hJrjmo32JlbaliaFFoJrMXZJZVg8MlI9IXoCEul7UeiSijh5Txo%2FraPskIKf&X-Amz-Signature=5bef051c888d89805ed1fd6abbf27d6f1a67d1e01143c346fee9c564e52457cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWAWN2Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBtwqHu5HDKIXmYQx3jnjLAFrqFTme7yDeiqJW3MQblQAiAYLHhfFX8iGdZ5HZ3vID6zl%2BDyVCajIk8JyM%2BKhVdNzCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMrHT8n1jtwzTjxHTEKtwDp87CkNjV6nN78ibTybvN2Rj3ZTchO%2FuK%2FQ1ofSztHfZDh%2BqMsg6aLxVnTL3TKnm8sDf7j6QuURxGHpORyHspMEZjmSUeWh3i1nLO18kwz4eVXwdJIQQezjrz8mpVO%2B8brWaeEaof%2FKWruUwShGMGtijf9%2Bwscix1OJpq64asKHy3cO5NwoKee31e3YFTtFX4t%2BQEApw3BAdTfKYWSTQUUEWeSi4AEdFAK64PwwcAwG9GmVFrYxcp8xUBqFpbHP5UmCQ2ZEY6uF7dZTfTKjzhnObdBn5cAH59JNr72lxSrAlaCulxVKu7I0DXaYjnV%2BoL3ZP9tlYwOF5SEcfcG%2B7q2TmqRPnaWCLfOWISAJKSJEMBEGutXnX4QnEjBCabqKaXeJKmX6Wy%2Fej5znaAGNp6zugkCQ4EAcghv10cuUsgvh9NTU73nab8Gk%2B%2BTPgenv9ECnPdd7eDPrrw692HYIwUtS8roZApqwYfMIWF5PGY6sqcFtFHeUoWs7M0fnbVb9AwQi8bJF1Gf1lYpLOE0NGIy1x6nZyxDqvtBJTCg%2FDGvXNzgXIi2cxfCTvCMqvhczQAVRL8MvzMO%2F3I5O8U8ytOHe6DtmZPK6XoOUFl3l%2BF67JNoLRthimLaDNrgJ0wx%2FfCyQY6pgF%2BAuEkj4TF0DIcRSAEsV%2FvJ0rvHNHXVxkF1vKGSjkqXrm3TSoL0SseIwX44YWqk55muhMZEUNCuICutNDpILBRB52wtcA%2BPvWrQsPacJeX7kq2HBjqhmGcd3zf9i92sXSCNQjbvZ%2FRDbpfnM5Q%2BMN6ebGQZCtRJ1R4WXTEG9OtFc6eGz9ls0CmkqyDTsh%2BIUEmGjikqI5pBqMOyuPzA9%2FIOr3jwSEF&X-Amz-Signature=314a4213aa680629522bcb4098c806179e40506486d1908a220421ea72b0eecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

