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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDBJ47L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyhoodADYV8U01XGWTnziOMoruqm7JNfUFVg2ehm60AiBEbniSCaC%2Fpr6rp0nhq1Ztfh7hgaPFxGV8pTeEeZKdjyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOgK%2BwRzXo5unPxB9KtwD7eVL%2FobeVBlH44MPRA5zp%2FXIllk6GNIhza703hjVRcsIFPEZcdEJQyOYsQ3B%2Bi9lcbBOz38j0R3xPPq04q2rJegNq2Ra%2BFjkskM7YDFIhVcAwzBTkrkYP%2BQKYAFBtfsokBPPJG0Cy33QHL%2BJ7MSuofTalMA%2BcvulVCW4%2F4JTokPXSdxnnb9O5StFMrzFgoJZmRYI%2F1A5S7jo%2B0wl16iOITZxxzgquJrZXuVJEmoQ7tfZBJYAhDLPgjjOhqWtEUH6c5cci8DmGsyXJ0k3R%2FsfEQ0UOsobKWOlEakizPZnFDy4tr8GE9mwHGQwuJvswntADEmDTbE0L%2FmOhrCcuvXP%2FG8wVZ7Wcgo%2BlJYwvOhm6GCMQy%2FUnXoV4KuA87CQKZBTgpb9W9Ynpqg0vPTb6pRBxOY2sh%2FBgQYS1wfbd1TusYiN1UTbmiF0cx6lqckWMTGKz9ehCq8DkIfGFnGCsTJ4wI%2BuL8pEWrF2o7x0yc87u7XHO6tQq0UBmjwGvgA4a173p1NvFWIBB3Wu9QHD3S4%2BJVMMYobRfQK9z2ilpfqKiSeMyKu9Fj8NXw2VKQNAtb2BwzZYPZHD%2FkdrCiP4seHbK8F5yLLcz8%2Fwb%2BgpHQQ9ITEMAcl%2BnmJlJ2OcQY4w%2Fv3SyQY6pgEEDTaQ%2BvyVEzjAHBupRz%2FF%2BOTmr3%2BOJoHmsmpnvyHcsPIFKV29aWxD2lchI6QC6U7mNloVYJ3cDORI8bE1tNVcsSFZOmvlf%2Ftwxb42ZDkp9pABEjvtWkj155E%2BAFbB9XAfVSKv97bEjy6PhtY%2FoiC4d6ZITOV37xKpZpO4Z5RiMmQaIq0QQErjrotu2Y1uWpxc71%2BMEL0FrlYj9SdpS8v5fjuNY9ic&X-Amz-Signature=3251eb0473c98d0f74ed63f29cf58d82c46a0462a954bcf1a7d1e29497ab03b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUTSDRP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALZYb6MouvrGcHrFgAPztvOWq2DIQ0dGMGct3KTQqd4AiA0vDTCXI6a2cF2r7aMlF%2FtWGNqqKOAAyXR2xjzQuv7%2FCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsj6I53M1e63f5ZVFKtwDRdjy%2BIM4qJjnBmkAYWm7DuKslHP3kCQufcy8WhqH4zALj5B0HWO%2FXzlXfB%2BsyEh75E%2BNTC4xbfQpLjsS%2Bii%2BR5J0q7k1U4Sn9gZHAGaMirc%2BLLSQ5%2FpMc46C2%2B9he3M%2FoHJTy2cRn1DQQuHRURFqQuIaVLr%2BGjLcnk5WQNpWnLUJVYuVB3HIJCy9SlcUgZ3pAbGx6hRMvDUpf8wHJR5GTdPUN6k9g9biknNkwMMlCm5JQ8Y7SZoTlXQY7te27%2Bm6jj83HCCViEX%2BZ0kx46WHD1RKvF57seZlkIlGP%2FvH6FgQ3lY9t9miKT%2FvBjDq5Nz5HZ3QcsnedGYyA2L6UVICLDMjlfHx1FWFTO1VXIKQWjvyt4bTdMIM6Ri5qqerDE8AZLMyHPCNqzMHn1lF%2BzX0y3Xxx%2FXELFu6dxXUk7Z789BMtpQE2IY8YvpiSVxEbYWfvtOKdom%2FKUp1BCpq1H7K7Tjc%2Ft1%2Be%2BSVyXWidVDFQEyWmMBGNk0Xb0wKQrewrjKKdgyu1rzRFr1dntKy8T%2FgyDMENoDVhm6Xh1QvJgMB1YVOIoQqRONzO5lFbOgivT%2F5farDDrHnv0H%2FcMgBuEmSb2f9A%2BtNWXo6hk000nV4E0mE6uDr8XKJQs2hk%2B8w9f3SyQY6pgFgeNI73jzUTVZvHrRwvcmh0peEvadVhjkn5j2VOtoeSwR6aHA0j5EiuyxlAzZqimZY1QcnuljvXAS45ZOWp19tealcFnc3XCfwLL0gQvvTZpkG0s%2FG4q9SoGX4XzSR0jJXgKY1zqFdEbSx1O3FJifX6ZpZSyNtElPmlJ%2BOuqigmEvdWb4%2B0j4gNy%2B7qlONTQsHrlKxuAM4q1mXN38QcfJJJyLA0g0Q&X-Amz-Signature=ab0b96f680f3b615e1a4dc80c2552696a9dc129fcf3caaa10559581aadb0bcf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

