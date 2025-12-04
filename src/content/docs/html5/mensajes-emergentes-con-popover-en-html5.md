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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2TDM3D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC5pqXTfZV6EEj%2B1mWvxO%2Bxm3dCyEVsNgvOTNIb9bAkXQIgIJ%2BGFOiGDflydhe%2F5ZM%2FsLMyZ%2FCERXG6435NYcsb4%2B0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKcDy6IlCLtOUvZTIyrcA7SjsIaB%2F7SHtQhb9m%2FQ0ebvfloDLGHdyoEXxh7%2FgP%2BO4d8yzI20bHRjzBDvroEbQcvvlrWHUzzIPRxoUHr0pNy3PteakR6JJPBGcKMTSjQ%2B0cxj%2Fm9lj%2FJRi1xGiH2GhypyxDyoXcxj%2Fq0byHCPY%2BZYciltMDVK97q7Vd1K0ed6Qw9yDVDdYu0FWpq1ma4jMXErTIWQBaKmB7Sx7kN%2BceKlWHwNRG8%2BnABXrjQNkPRJfVfiZbYkga020t%2FpFq0I5%2BTQdV0eneWPKjygmeX5nVLma76XASXRqS3C9TegDWerjBifMDsuFTnCqYeD9qDiWxbVmvu1yhyUf%2FwYhoYYB%2F8OBFlxyctWmpaqb5n%2FNu8mJ7gi0VVlxZHGrcyecQqOMQBUMmiu2m%2FVWP9bx9xcFH%2FJwbLR0lQCVnt2fa3%2BwyiBWtbT%2BTmmUDrvzxBqp2HRcs0Mm5RFh3SNEcoRZouLB17Hlu9P4wXbDI0396nL1xJK5ij9buMQmNJDjfXGKWBi%2BKWLV0Vxl7L6EtfbUCuHe0r5ISg3e9wPxd4DM6C%2BWLQCwMcWSlUnxUnmhRCnr6WaCeUjpUDAfSp9HNskYlcoZfI5lGQeTexds74KqZTZANHrXpIHQ1nR1U%2F9ZF7UMKySxMkGOqUBq1PyTw0WXMk%2BIBdrvzHsHCQc1fikeuX%2ByV0XaRDm%2FyuPMLO1EAa%2BJjVhsnHKFs9m0KYJPzREOlGHjEiQItsPR31SQVJ%2FwBMxiTLBZybsfKI7njJdgDQpFjhKWZIA2%2BqpFkAVCx%2FJOFw8z7keCPxZ6ZByCB%2Bm5Dyi0LU%2BpitjuRePHJtjI7TCvCZrawarjBlgMT4Ik5EXdBESy7bJ9Afr%2BTHCSfip&X-Amz-Signature=ec07014e1896dca92699ae395c25294cb247f13dcebbf8cd703f1e508e1657a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJHQUYX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDd4zFuBOi5zea7S9cjf3wmJ94oLEutTR5J86OxYiUmygIhAO4Vm2VnSuZ84pUYJm4C%2FO1eeF8eq%2BxaLz4E2Ktk1IbfKv8DCD0QABoMNjM3NDIzMTgzODA1IgzCAj08a3WBiQpLv5cq3AOhMOdYShBCreO4ho07wSjTJdjDMMVK9iOHJb5LW6P7s%2BHV%2FoynkeNTVF008zog9TBoM%2BSUDVm3key9noVNbCuaNoO5L185tYtBBAeB8%2FqzhidxnPsq28UC%2FdXw1pRgMpepOG13EEfctLgVywMiDmoEiILEkPCxh3tZ383Uzz7Z9t6EJOj8Q%2FCzZdDj%2BgPuF%2BYIvT7MF%2FdxfF3CiE%2Bepg%2Bslr8CEVsv7xZHFKe%2ByESo4tTl10PHk82NUuhl4bBacYZh%2FnC28aFPzXzoRAxws%2BRCozCy9%2BSb%2FvT70n1vJ89wLAhbaF%2BZkI8N%2FMF0uW3nuD0kFJx7ri5Y6q%2BqaSd2RX3FfFESkKQ7rsCImAfDJYAzkd2wnUVWMYwgXCqdP2%2FTJhxA8zSKNC6uSYpOGVDIEYEtGqMeILbnvuAp6d4mEmsF%2FrkecS89GP%2Bt3zD0zgZspsiTgpJAsI5YMUPC8FS1aqbVV%2FrQAoZORe%2Ff5qiBsNVB1PhG0QHRrrTcPZif6OWY6BxS5H54TRUHkqzTtb1FB6hZw0ZtSWqhbT2WZZlF%2FuCzAR7T%2FQtYNLOMYtdmCyoyujYSsifQvP5tJziZaf16MhU5oXLzMZKihbtf6ZbdL0gKXgfio2DJ3YJBafq9bzDEkMTJBjqkARxLo%2F1pioQ1W2LNoPC2R0ZwAy5gz%2FrVWGEKt5pUphQ52oWDVz9zLpq087AHL5h7Qh98rE0bmKx6eAHBskFEA65zI2uAmZNdruJcUYhaUoQs9dvDAVrwWwP2ukPKotDjstosDXh7OHX8eDeKaiQZg3watoJCGxIiNTqMRObltJQzE7wh8HOjA298Evu841vSP6wPlCsQt544y84EWFw9dK%2FIyFi0&X-Amz-Signature=b4c0578d6815aaaab3888f708381e714d429869bb9f0729f8c758493aa4f1b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

