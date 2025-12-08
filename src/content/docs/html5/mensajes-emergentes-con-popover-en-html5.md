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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXC2CJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDslkwRXfqDWvd8TfZlYgiDrgbTnGa5gj%2BcrMx%2BsZKOEwIhALJvTA2M0MnGISouiru7ZvIFIcMEPpqVRLkm%2B2bvuXtXKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzpaCzjCZty3fI%2BpYq3APnncw6rGCb5xxIKejCHpttHko9BvTn52%2BSQzPp5fJh1Dv4hnOhxAzUw1OA6cHN8%2FRzJsLL6F1%2FCy2MhgC4bvrJVF4x4b%2BpQi8DR8NhG%2FG0U4WzjC6XYNcLZHKmJwXKxXu%2Bh6bjpwUy%2FIMLfSCuwwd%2FNA58FzgpZBjdxwNqMHKdkJdVMfV0DZXZcqGVN7R0C4BTDdduVkI3efXbVMgkJnJa0QWtZq0YC3V93PjYI%2BO4AkstZel6MKOFfk3q%2FFno2mrC4C5LXAojrF1QT479dgMizJVIkyn2cI4Cb5rQfUJ8H1GXRUekEodaNUr2OPqFeIcUWX0n9EYLx33eqHdBPo7GCCflNZwIVnVQxWY5LYQGbDKWwArq1JMUa%2FTpiNflmjN3O5hhH2w8yFpSBxDUNMQ9N%2BRaxaoFKlwmmkWr4PX0EhETJ1fxsvElAwGyNdFCNeCmV4euSdF9eRrM1MEskXqI5q0LWB3aNKSxvf5oqPqYaW4onD3UJ3A33ibxNZXlRcnKebwrvCVnI4OXiQo%2FuciKcli7kFa%2F0OOdVwXQwpaOPT%2FN2J0JWfq9%2BXzJUke7u0hm8csmIIzPaDeiqPDFshHAtOtV78ZWRPENwvDGocx%2FCYWsio2SjNVpeLcsbzCHh9zJBjqkAQDzejugpZAFqasvT4WaXEf%2Fx5dJVCop%2FxzGi8UWCPZ%2F%2Fyw8RPZS%2Fq%2BS2D5G2T9CDAn39WYQc%2Fv4wdYBEK2ExyMFeG847kLb8dmUR6tYZZg1%2BKljpalTAx4zbtbjuM2ff0Hdu9O1eyqO9xWuYBeqqKA%2FSwlS9vvxYxRWeNS5Cko8ZeyYtIeDhPiNwiW1PqIN23tTRGqPYH99qhgrDaXIzlb8Ix78&X-Amz-Signature=25a17376cd27ba96f0e8dc19203f201491288b35e6c17f00c32669bf5a3d0424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMH52OKV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFY2b4O9c3s7j1Ktiz4MImsK7r9CGxoL81OWE2FvdkqAiEAxrRBj7DFQlAL9HWA2i2HDKzkS5dH8O7MZ5bO5HsgIBIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxnFzrsGp91UrHcXSrcAxvPIQD8dimIZovF5XizZHR1E%2BXbNFJ3%2B%2BY1jfrU2UHZ87gFQOzcADWPkwVBiohwGI3XtuTg2fzrLlY3t0MEr6cUn%2BdO0%2BhhLSlYlA2QN8w2Bmi7Yykj83bPgXOVYUDLnZv15jJlWw4sqLjWVa6mLTmEzX5LwDmZhqGDkvFs81DlWcyo1H1ihVM%2BK4UPfMb063cG37Ws%2Fvd2fs0tIRHQ%2FQhXIdf1S%2FJDYKY5zn%2FFnfzWW0qybJS5VqRtstKDIili7nc9u2wEw3tmdIHjZIfVem2K%2BnwZMYatpWPQ%2FlyMOk08Hab0wT4DOGd1LVNfDQElH55Ua8Iv1aweYHjgO%2BiE7%2FD%2Baql3WL%2B9AZGFf4wxND2%2BQ3Tg%2FsPrww6uzKA%2BLxoSHXRlrlV7Rw8LSjeSoTLjYwJGXqcJMH5%2BBbLFUubPRyeOPq4xKQTsj9PWTqZilWYSTla2uUuJN1UHuFy9ezNC7Piw88f8NtJB1VPmNh2JEI5ycVrr2sXgoUL7q81kRrVURUFYV9IUb0yh9BJc7bYrG9VM9O7p2iU8SxQ%2FfuFfxDyk%2BJ4DGoI%2FQbmo1pLRkHNKV2d3LkubdRopVIVmKGrYhpseRlOBefqKxgVe4aDl7Ie8zPjabyOUvxUbg%2BryMPmG3MkGOqUBYbpPYy7PzGz7eqOv7dPX9SPK%2BoTvmEtQVFd3lV9Qg%2FfeDcrh0Hqa22BXUVBs%2Bxe%2FJCBc%2Fulq1%2BU5s0Ib1y%2FKpMS8746LBW%2BFS04XaoHAa0VDai9%2Bv3%2BbE1He1nxbW24pToYeGdRdPOvD4y4PLRLxo99vDjUzgnjifvpyYfzXeQWeZKkOvCe4VzEuevmNXayUwCaI8CeyCr68OrUxdItOSi%2FET48R&X-Amz-Signature=3d5c28661383137af21892f62f9042b0bc8261b5733aa094e75404969e6327e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

