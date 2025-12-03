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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATIF2N4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDzlyDEQucWX8770nlCnMlQOSQQRA%2FJ8wVroqqlOhGSLgIhALEdZ7sgwBZ5Pb7khXLn2%2FRu%2FRCsDkujYcpWjwCI5RymKv8DCDEQABoMNjM3NDIzMTgzODA1Igx9gVovayBAiGGoVw0q3AONHWSDghzjc%2BKKESGI%2FQ2yTALMlHvkLCzwu67HEzkhl8obvo765jiN4EHBMgbO4F5j7silRaZhxM50W9jvmoZLg6PLki%2BLZ3FlAfLBOLE0MOswn5VYXe8eYu5uSVBfouVr9JDxH5RnpgEtkiu8jbCSZrWSX4SgRunbbU7tHagtN6aqwB%2FPLzL84rL%2FRFMoovtYiVXbel9xi5kFA4U1QsnoB8Uep7WX%2Fapb%2Fg2TsQ%2FQLOqKRFYEyecwP5LHEkEQg%2FUlZd3lUXOkN%2Fz3C%2BP3jdXNB%2F9dbhtQINvTzS783FrSC13Sh9j4O4NJMnT0PGIZDG6vXBnShqssHjCBEct%2B4Dx8h74DWPziVPmWQ4QjkOF8%2FuesudnZSzabyxnFkmPRDkR1BkLygT3W%2BuNO9ZDLreiAK9GJeu9XZ7U9wgf9p4Dhy5crfwp2PhaidYx24IGytwwr3wqcUxuswFNN%2FkDH4w4HuPJBaFHb4OG4L9xlj%2FVg1jh36ZnWS7AIa5INnuqXtKy%2FyBKWKm8tZNgsfM%2FH0NRCMjTB%2FxtVKg1b3xdd%2BWs3FzHxOPL8dOCf7kf5Vx7mFJvllAhFZPlH1VaqrA%2BoTA8ObdhgivWRjEfx28XdlhLi6DME6KsNWorxMmsD6jC%2BwcHJBjqkAWGo79bFCnIVB405lI5VPNdP%2Bnz2wIbsuq6nKibm1goZHdoHA8TXOHu2Ck6zNVdxG1MaEn4OOthBvFc0Gks4ZMLBYhUoeUL27ymM1RlJ8hj0ZHy5nuaoRxtVswlh8WhBxt%2FFIIvtI8RnyKuLXFULgWEVn8Lfj%2BW9sPi8Ur2HjsccV2wfAyKiVYNSPus056IJX8TbuVwFIU1jfyygPJARZ2xBq6XB&X-Amz-Signature=4738f728a88f6908fc6f9ddd45cb82ba3fdab0b7c7e720a2eb03052145737089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA72VPNL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD%2FeK3uAg5dAaJ69IjrPY%2B%2F%2FGFkXdDo0HpckdhtSxi9MgIhAKLe6nrYKoyl%2FfEUuE6RijVp9iZX%2FMb0JcQstdUXHFXtKv8DCDEQABoMNjM3NDIzMTgzODA1IgzUTFTmEV2KDlZlm3oq3AMpFu70D4U%2FFzKBbhXdv4IeGbIlYqNGeOhZmX%2BM3jxliIo5z19lC9i0gJ1tpwell4AiZxkmvRZBmbISrqC5gf%2B1pyb32kfAYKuNprsmQOFhfJ4fY%2BZtV%2BgjAglw8mFWctrfG8nErLAwxrf6elOa3%2BLNz%2BJaaI7SPfG6QCGjBXoMYy19D4y5xgF%2FHXBqDOi%2B6vz9QqSR7O8kT%2FcmDPHsWY4tosD96G4Abq1cNjKowpIn1kEYOriUr5qP6Fv9wmrecb%2FYeTUhgt%2BGxisOeiR0qzGw7jPFx0YuED0uaSCTJ1biKQdyQ7opLAMADde1f%2B3GlP%2FW0OTZU%2BMvyflzQKjMVbwZO2yewatx5Dpy5MHxjO4mZMvHGm0qguNKxb1sggVPbqqlAcoeeVTFfY4X%2ByvrHcnyXFhHwn%2B%2B31i6tFaUIrgr8nN3R2dKAuYkV53E%2BBoFZUuJLcPMmKNF4njwGHUExGMxtBE8q%2BVQrQl0886GlcffeZoU1vklxcR4qX6EzsBmXqvq3pXtb8mqnpUl8NDyOh81UPirOoHVAcD8JWAe%2FsRwhYbP1ryX7Vu3IfKjxmmIfg1oZkb7m%2FCVuo0HEbSkYGUrh1HiuzbJ8WoP4PQcLWK0xM2rCi7RZJBqXAzt9zCuwcHJBjqkAS0LPsFRSWhC%2BNJLOKB7pU%2BfGj93C4rMc%2FsqJY5mn31CykdkMwYUCA6PWLWbKwn6TifCepZFB7s2jLlOR1ttRnkUGkfAv9oNMxV4Y7Pvb2irnwwHVw0XjYn%2F3fNTV7PZEZFbZSxYDsGRIiJGr0mT8Ovcdh423G6cQDwHm%2BbO7D674UxozZ%2BtBFZcYu%2BxZe3KKLQCiv7%2Bs%2Flmz%2BLwZM8l6X0EkqUl&X-Amz-Signature=b652d7941bfd5c94f0025f2ee8db1589dc3614b6cbeb130f656c12d9a3ddf74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

