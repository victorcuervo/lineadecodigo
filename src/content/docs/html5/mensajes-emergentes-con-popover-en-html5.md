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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJ4ABR2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRK%2Bnq%2FXTt0XHHpW1hHQlu%2FMQ2bzoyzD84ywDxIjcIvAiEA0KcFbeecXhaLmhNdm0sGhj719X7kCAlTRFDOnYELQuwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL8FUIbxVsS9cpJyZyrcAy9qSooryqaEJfe7ahZMKRgSgfWjTPc7y8j814RYDydPat0TN8ZYbc0EOzTaXPJa%2F6t6LUDhji7N5qAf5LuwGsii%2Bwd8Nzl5Q1EeFdPYuz%2BXzMieqXWO569MRFYoedquRL8GUn3L71FfxL%2Fl8%2BIUf29tuF%2FIZbaqngNWwsfjMzeUeVwTyAsMA46xVewunYuvG8zPU08y8Y7GhRE%2BbW%2BkS699XfWvHlzFa1V7GvPysmN7WzQw9MmjxidTiq7JiN6k3pxwMt6uSdIEG5RpMpx5tQrlRc0PYFdmiO3fyr6oa8kR3KN3Cg0ar0HxTkck86QXmrDk3xHFE21%2F9yVI9yU9%2F%2BqO6KsNm1qzz0cIwBn5gXTEC8KCgAJv6UigOKgsdCX7rQeK4hVMNdxZjjuLpeeHpoXef01RYp4m%2FKkVlReBmAHi04KxXeCflT0xeiLf19SmbQ4bZ%2BwJdfWnIoxwZDFQ47EEREBh6Zar327RqbyX3feNJ0bMbnAo%2Fw%2B2Ou%2BqCNttoJ6NUoSJrHFa9WxoGhD5JTOb3sDfTgAo9y1V1CiH%2FxXUpvJRIfph4r4vZMS3ZdvM3jdYqSa5wXd4XVHArblhK0zXO7ruKQu7Fylv%2F537nc4%2FWNaedGVtLqWeMjIrMNim0MkGOqUBlLVjB5lMpptQXJCDS%2BwSLmP0A6PgFkjZE8swKIz1bVyfWw5%2BT9xLEDC9ttk7A3wIwcb7MmT%2BU1lZN3fvrgjWuYao97uFjMoOuAqi%2F3T%2BjWgDwHVRq8N463ck0HxuDUyG%2FIMWO3%2FGZERPLEdfpm1%2F2AljIIjvM730I7J6ojZer%2BEirBzSXSGZ9V8GiCbE5nCtUkc8RuMzamYpleclhzNR5T1NzGK2&X-Amz-Signature=615af7b0a2396cab4d484b5feb65fa815d267f1b08ca7f4e37b80f4873eb8b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7EVCHZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQWycurM08pXRGQKkb4sVSq0%2BBTwSJsDgAOkM8NrBBEwIgGZSTOgPFq0%2BL3%2BUA6HAAGVev3SBTHHLhKVBCpAedRUkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDLbIGtuwpRlaZRLRCrcA4SjxUWHShTYiAbt%2FdRfFeyKD92C4EDLNWD7kgUs56Y6PLwjVpwGy5oEp07jCmWrerbrzzVvBRMxZTD0On6a%2FIQq3OGbFlp1Vvm4sl0mGyHWzEQGWtZO%2BNWicIHBHNPtF3pwPnj%2BFrhYVyw2o%2Fs1537I3tRWeuX%2FJVEtfKA%2FpR%2BCo8CSR6x%2BG1zI19Ukb5QkJ6F0vjXriSHMVhlwrGD6VV%2FGW74y4Oll9hRlxWsdNgRYt9M1Nsk9cEFMYunA8hIZBETXkOOf9RK9PybNvJZs7N6uKLPmC5q%2FC0PB9SxlRflPVOH9u%2BDhowcJ9dkCO7UbwmxZ76iD1BoJgT7%2Fyoy9Km5gRJujBXQs%2B0fne6T2BI4BwYlqcCFo%2BOxCFQxOnk8AKWidmj6gLYIcSyFzZpM2b2Yx1ZCURZSzQKzhWWU45FOsKeanhz7DUa5Cebs%2FmkOxFOvXcgHzWjrSoTayXO77G8po4pt3gL1stcPTX1HP69WfjofREDxUbyMUrNry6MfN3Ub0fdoGR9vym77Kda0i6q3tT7o0xIe211gIj7zk0jnvD%2FhMB49q%2FNVQkqaHJa2vKm6JufYep50G3B7sIAAPrIlEG0PXriORMrm%2F3qAiHNckUMiJ9OmgpaijAqG%2FMPWm0MkGOqUBO3wu7%2FvG7rEddvgvd%2BvcJ9jERrOFhfOjRWoF7i70YlFON3Lf%2B4DAxy14I4vnrwaBhEzu%2FlzR%2FrfUHKY1d7sNq%2B%2BBAUXS37fnRH1osg7RSwvcdSH9G1LdiJACJ8k0RQJg3A0or23Lhv63MJ9eyLHgopu9KC9CW9agdiV7nwl%2Ftio8N%2F7sLenJEbyNZ8W0c%2FE4tSckulE%2Faw9fP487SWVRt4qkt3LB&X-Amz-Signature=f8708d3f3483542944ce582a80c0762777f8fa631d41e1d0b1d43113e07570a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

