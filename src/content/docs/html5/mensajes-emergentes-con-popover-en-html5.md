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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YK5TJRG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbJHg0OPIGjAwdcjY5UMnEZQuga3HodlXwSwvVp7Pb2QIhAJ9VNEpMlFpcHOgbMo1V5bglLqe1deMOFj5AaNng0iRkKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZt3xKdAhtjAy5fXcq3ANfI%2Bw8OXHapMJm5jcPyuworEvYD7G4hs3V9gqOAolhhC9C0QvnPfJ%2FzkuDT6u1aBS3NBhc%2Ff1ippKVu2Q6gIupUBS03hkXsqIGtFLyUHGJHx5CdKCWePE%2FPrxsojLFGKZdZ6mMo%2FnD%2FPLXHKwn7iJOAF5TUB97M9RNJnZum8okfATkultnOvYNuZs3e4Qzyjpt6%2B0NYWJNfNVZxqbVuWN2IKuQq4WXErk6hqy8htBLzm0dUPtVHRCok62ZWMijdchA%2Fv631md%2FNIy33D02D9YRtF0t8k4uYWvgExrhxTInB0wQsDpg0GKnFb%2FvGCzluYPTsZsjcBbnrfdnIXRC5F0kLe1mUBZIhKJ4cbnqJGDQfKFW4hv24agQye9pIDhoJNPOq%2Fm9Lp6vmj70Tio7xI1FaLmxAMvfp7lSh6RSfdYaJvxObbVM18EjcbB2sXhUnWwvc4tuWdnz4R53Ai%2BRn%2B4yMilkQ4Kc%2Fxi4GfXE3spaGtHQHlhnAitSUkPlh5CGpzy69lLLKIS%2FbsMAB3%2B38uAQ9RRmdoOQ2u%2FWe9RwUCFTWd9j1bvWO%2FdwpfuEAQrIs2X3f6Yb3652OhGk1rpYzTn3zJuIPk5YIt%2BRHS%2BRfSOyWgXG%2BW9sXY7ryNquyDCbwtvJBjqkAZziszZ4QLQjm6p0%2BCJlHBz6ZoUvUXRaI1xyb7WW3sviZoIDG0PjohQVM%2FlMhk1xQW2iZt1YoMYkWocn%2B90%2FjWYdVUX%2FbwePWm9d4nb4Q0QURSNkbIzdjDGGT2KSFnyMSo37wMzpX5VJTU1dHSf4L7ndxWXIY9ytRW9Biz5cUA8eGnLngFzl2ffscD0Rq1TB5p9fGVa73PiSqC5ogjDTfRD0IV%2BG&X-Amz-Signature=1ce690b6e201fd9dfd54f866d98e38e4f72e4c425b4503670b35ecd01b9da919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUVFBUG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr6h3Kpp%2BWB2l%2Bf5kDmeXzuGw%2BxmdhvtaVSzfeYhGHSAIhAPLW02PCmzfs1ZJlSfK05jQBJ02sV%2BQBkBIPfeGbWcSfKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe3Qetc4TXJU%2FWAWwq3AOSDU9CoCAo3vlUcUWppd1XM%2FsBeo2NOpCLFEOYU4Z6phaA%2F9x%2BSOHdXFW0P18qA4H4GIiDIVGfb%2F9eZKlzrpTGADxB3cHDoVnbDm32UWbtv3aZDJvjpKh%2BTXFC5XwdVmiVOezOTInps4UYoJWFxYnhgYa%2FDLYFnSx3Wo84HeCN2og%2B81egz6F6r%2FJXdqt25jYr01qJyYdsv76NFwO7ydME6CUSBk%2FCxy1Ils7ZYlZJ58rmOazLS8Q3QnJxP92zEDqrpNwBR1orhcQqI6EJGRX7RYm%2Fe%2FbmUePlo7p1TF8V2g67%2FPRBmYCxBF%2FQXxcS3Q4wp3r1MAyoSqKedjtsXzf6VXOMgoc8LRQCTkqoyeDvn9cobajYp1BRItJemp6pllVPV7Do0h80FPoKuYLbHz7zTOVCsKiPS5EP5Sxa%2F03IdPyCOQo8Jeoqak0x2QAgX13m0NEEKKqAsNAQeSBv%2BloxvSXYJNnU7Kd%2BN5xtXGI1HG8k9AvZcpPSW%2BRsohiZtqyj27%2BA%2BUK5KrN2bk1RW%2BeBbrcHrcKIHZS0JRSe%2Fv1OikHB74FAFJ%2FPLxmgc23f0R4MpmWzSAFwETlSMIV5tI6CBc5gkQ%2BFPSPu5hfa%2BOdyeA%2F0irjaKk3FvLK6uDDiwdvJBjqkATF%2Fg6U4ccRf5EWszKWUnHADyesQArD%2BNHySjkSeNnvM81Px3dejxFXDz4OcrbijYj8yDxf2EfHU1os%2FmYbJT239d2Rrhjs%2FqRJ2LOG2gyp9ms98oAkJwtPlywgwaFuZzTkEenkpT%2BIkLGLpfkqxpSG2gvD8LTIZLzZgJYcdeVJgzLCln1AxtHlpBSDi6maaGqAEz4JUmOevVKSfK0fPxYojUhOk&X-Amz-Signature=c80710a7e266fbef0d6777a1877b7abfb95aa55b38e261b7f3e200bfa611c3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

