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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKJRICC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIA00KWUgdWXGj9MxT95Ye%2BW59xGLp8sW6BkZrJnS4Di3AiA21IeQ6LePfow3whROkKWGZw%2FGppy%2BLmvfsfzV3V4YHSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM9eWwcwhi2bPF0S5xKtwDz3ok%2FLi19PSn14%2BlqNDd09rndb8ZZ4mQjQ4F8zMXF5bhEW3UxGUPnFr7iUJ77Wel7zt10HbMXdwh6yDtsyRZuib89DOuEawLpewjW1XSf7cbcvouAKEErdBa4qj%2BVX%2Fz27G182chpSs2PsKnaxCANXDghxPtIlddEoY7o1nav8u7HD6ANBYdojA9yCSZj7TSov9I9Vm2DPPgFNPiEh7JoJKB4lDVLW400ndebDEwXKaxy9zxfiRsrh82SAdBcvbuuVe0HviOYvdazZlg2EOoz20R2aNWeSkqKWzMH%2F4woFSNbWX7s3XZ2MS4YmOT782hRJYwsTIiMSM%2B0lw0vR%2FbHc%2FaKkkOabcFFhCwfX3ZaKWm%2BoyjPXWaFVu2HyX2KBq%2Br7pr3GO3kb%2F%2F97phIVmABjy9A8cIZtPedRN4gU7vhHAXq4xL9FEaN%2Fgnv4iSqVJqBFUVhWzCRcxw0kmdPdk5j21DnA9DmaFcQmJufKSdKTBtd81ooj9sOITjJAvlOnSKTTs30NkEau3l%2BtG7DGpw3l6b0M8C%2BA85CkDZHcFNA4pVY95Ms5BeJ4Du%2BRt5WFFo%2BRy5ve1yBMHSwzpSaDhkv4rBcujsM0rq7Rs1zyhI6iVWtiQDWrbBB%2FLzLbQwlazFyQY6pgHPznLCdHSc4V%2BJokhLNY7E2FlWv32nSrbDVEbivL%2FTOYiLhxjLHXfhxDHVWnADx7h4bORc%2BBfHNdWJtmT0G86QAq2pNwK9cvaTiaVj9%2Bz%2Fz3JJfZU1mPQSt0vZsRVgqRg%2B8kn5ouy9CJbZ7d0P5Hj6gy%2FkLvuM2ijYPPcLvBDV%2BQMl4s80HGzjcsWySehEODr8WfuRKFf%2B%2F5ZwfEwrsPfQdVCt1Oyr&X-Amz-Signature=9803070d0a6d4f8d315930f7e4f17828f0aeb62c55e5e50c73230ffa142303cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOCTBVC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDX6g7qmLvK5k3H06bMtUxn62Bj0g09Y2oWuL3blqZPDAiEAt2DPELaLhkkLd3qjn%2BPzj6o88VtZHYHG5dVng5dIf40q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDR%2FenbD1xfs2Jla2CrcA2U8OAnvQkXoJTjAXfRcYgKgRsmWvTXzbab4gJp1CgQH4FBFUAaXtXgGAkN4vxmaYYFeIhR1vOvjcb64Hjfm%2FJgjV5dsIxLnpC%2FmxxRvTz%2FaXhtcoN72J4HdYpomD24Cixfb7AVEfj4txwDgOpkcm%2Flc5EPZP88nZgK%2FhhWssuw9LeqneLHDegcRj39Ra%2F2dLPgX4%2FEDsN7lY5O%2BBi6cD%2FXOI4RXAWrmQEpqzfJCO5Oo91dmcQJwjqPRv5A7ni5Ez9WibTP%2BCt%2FKTRJ4fwEWEZyWlxYvWYFBhHtOLr8VvPhO%2F57s2X4OC46lMBrSG5lireIwCCOhudzxSQ39VYJtHqU0OU9v0pZNsJLkqr6CT9G8hKvjx4BFj9GoopI0Gen4hUCpPbE91yHcnUFfybv%2BQ7fdPHJeS6sFObZtyxi%2Fyxs3O%2FJHQSZUZLjrIyUFDe0ENah4albvCVPft1T%2FojgrFNoX4dr%2FpxCQBKlQoL0OBucBEkO7MfjmyRADXGMHEuP0clSojuO1rl20jZhca8PM%2BjUkTS9nMrTsGD7BNU4JxTf1zH%2FZ%2BpvI9HSniuguff9L0LADzqUz5I9wvxJFHaBSf7KggXlK7I%2BVNcLOYQlGI8yK2qakIUmcR%2BJHR3SNMJaqxckGOqUBvzDCB50pVIU3FNh5eMv3DlkAXUkGPFaryDmokizNrqfStaKvp166vaAC2E410RiT5U9keyja7%2BWI%2BKHIWTynjC4am%2B0Yfu6maasS%2BWyTUBvwlv9BFB6TeJWht9Ki8eLPP36fp4TGpi5zkhabsLxpx0qJET3jt6Yp4iujOY1oGt5owQqe2oWDAbpqCXFWe2oD8A7WAL3kpVaDEtj%2Bt4KixI3NVaHu&X-Amz-Signature=479121d7af69981ff41bea1946e78af5fef5e44ad9344711c125b876b1749a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

