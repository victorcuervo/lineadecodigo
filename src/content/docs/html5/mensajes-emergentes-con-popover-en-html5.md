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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JN4SKOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJvuTLMCzHjrqIo0DbPYtGWcsl%2FCvCtT0ce6BxWgN7gIgMq9XUe4IERh7p8aOIGnLBWraNIABQPDg3oW47Xt7aM0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzevOe0l0aI%2FDQWJircA5WjfdnZqrV6TcxIpejt37ViH4LnEKHrCuKPJgU4RCm6KTBpT%2FQYcYwBvBcmgIvG%2BmxdPzZ7SVuLK8X0P6ztixKCcmwPWBn2useIo97FFi%2BgaL1T9OBmmIyfgUl7cwfXFs4DRF7Qlxutg%2FMC7JuuTbp7%2FdSRacnCI3ZIgZ8R%2FaL7QejOWuKgk%2Bp5EUgnO6q5VGNKy2JwpuY7E6Qbf5p1l7hX2ZGQBpHps%2Btpex67conuSfruuOBH8wCztKB0bici6WNXR%2FtwxX%2BjoC1CaOOEZZhMN76T67pUpNDu2t2V68jvDGe8ccpLa2pQrSpGJaMgASFczCxJ6bUq6iGslOIb70blIlA00xOhb4F0K33VDUUTdrRTlMze43zW9DGwhn4TEV285CGURAU%2Fa9V%2BmfrO1reXHp6EcT5hBm%2BfKMoPzz6BULpd7Hc5KC%2F2Fgj0Q5SrLb5Br8kw4BY%2FkfWvlRA4hCjXsmf5KMCj3s%2BX7UgoEehkIqZBWlYHGTQ7wfcojDrTh5pnDHa9g%2Fitj%2BsbAe5q4X88zdIVbrzI8%2BQXc2TO%2BIXvxQ36cXl%2F6J%2FvEkMkmrr4gmA8n5OR%2Bwi7vq1tgZd9qrt7vN5p7n39OjScVGpbVeeoXQu6LlfC2%2FyXgTuJMLPk28kGOqUBHTcF9eFj8SBIl%2Fbdm39hG4Qmv9XrO3GwocvVSlZiX8lN%2FvKMro78iLBGERnri3N40vKm85WK2%2FQVVbs2Vzju7cpgs0J%2BS0xFOt4hZijjCDyiSKhQjaNAuMRE5YQD7%2BbRrKJtuMBAl1MV%2FrpnA4iNh87aE2DTuZVmkKS%2F5uzsc%2FT66Q3r9VISqJKlGPVmXyKcqrLdW%2Fe%2BWOSQPR3mqptFo85k9j7i&X-Amz-Signature=88fe2532737dcb99e34a8cd7f603df526125dd5e6e8b8b741d9f455b1c617cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS6GAURG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDurCiHhAvbbKqW87O51fE0FRgQS1ivT%2FShT7mBPPRgrwIhAPbU7KNv1IoR6smaS1XErD9UFGaWHo%2BQRj8zcHxiUj5kKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvuX1iQQX5SsnNTl4q3AO0eQFPSnOQfZFC9ZjGK8uqpUNa33dXLhGvrBQUMgoKiCr7rsA1kHZcQZ4UxjBAO8zL5WrjkfL1gCfcC4kjJmjIO%2BppXhq2VOxn7HCxaBm%2Bq6kywyfckagYMfCGu5R6807EGISE0UCQlKZ8uwt8AzVs4p4h7A1DWWk0E4mxE3WcdBF%2FvLR%2Bv8EPLTampwwp3JaZ%2BWF0H%2BC1j6tfoGbhitTjSGzFyzqNzPeVjNO8wS%2FVsOqc5LnpLq7k007OQUZ936Cuecy2lkg1BMVyAL3vdK%2BCo9ZTDzwzXwjHw5LLZNMykJ73wQciwAyVIJzNA2GchnvKB8QhMFNgV3CQP2kvlxWA5AWRbzLu6NiNRUrPI0c4hI%2Bm9bBals8qc28okcPEFCjK%2FCve2vTzL5sEfTtMfimJEawTZyOo3M4CrJtg9jexSe3pB6SQlydqNr8PY7AF%2BJnzXBEl01nwmjcBRz2FIrBgsjqG%2FGT041r3Xi1X68I%2FZq3714WKtyrhTdTQVatEK7iAZScjpIyG0y2IcKg2NYyVSuFjbZl1Z44c%2F5UMXjcFNQbzb%2B8FD8DcQXEiRigQPcgNdCoHAKDTXcplAZgWI%2FkQoFtYqiWs0%2ByDlVbU%2F%2BT%2BZ5JRyPNtjbgyXwQGqTDN5NvJBjqkAcTPziAQAePFQc%2BXLkE9X1H8jSUVEXFYW6I1uV2Oymyj%2FeWMEO0Z4VxmZURynu1qZki8mUkZl1r6yMbK70Vhhwwp%2BlP1XE5VVzSlsuW3BX1CwlkqoufxYFhWaVtgRwG8xoOA8vhFouWG2SRMaoiHB3jZJVu%2FJikCtl3xH3N5xm72phm%2Bn3RIkQf%2BB5AIjThT6JoE0O%2BSxIWRayWiYs%2Bx705KK8w4&X-Amz-Signature=84345c8734c5e5809918d05794ec74a979cbb8690c00b17660ae086ee1cfdd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

