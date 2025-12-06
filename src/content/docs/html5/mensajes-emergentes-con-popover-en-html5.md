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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNAG7FW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICymAy9BAm6plIIkzn0IHxkCp23u%2FnPIuFJSoksEYyXaAiEAkBWTxjPy0B6oEvq0Y%2B9Yu2rbIcsqq2qks2DOr9DMFZQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHiQmlY3wH5VKB%2B4GyrcA0cCo2jhtamjqmK2zU%2FVeKjChpB9UbpnjwYWoxElz9HuIAxY7tODh9cHEFD44p9ZERlPxH5Z5mXm2dvR7fKi8g7BrSluVl0%2BBR%2Fk3MKpusCLKX8fgwM9LmMuNFRgi3zgoZwqOox53C3bR44nz5sFuKr14tcE3bdcvcZk%2Bh3DqGK%2BIKWijIvTFHqXDvCGxJQ6eCe7pQYIYNuDPZ5yczBqrKmF4Cbu78XNfdBlnH65n%2FLXSSl%2B1ImtBLF%2B2%2BaIk%2Bt6CQh7LAe0G3nKBiPH%2FcfommeCocmQUWXn1cmoymTHy%2Ft6NoZqgSo1jQvxRfqPUyWuHTqJUkSYeg%2BqxDxsjO8%2F3x0lkuETvQt0viROOf01ium35DsB8xalRHtk7dzBvPYqWLfY%2B7NuEGEmPq3YRznBx09vlsBuDkjdjVij0uQGgFuvmQz27o%2FoYOp15WkWp9XqA91bFfriLNEvvt7KHFEtM1GQTbT6b4D1x5dKrHkDqwm5IdZ61iXhpFT8e9lz5gczkAzC3OthSIj3KFiCb611aAZuGB1R2WDSiZ7CjFG4msY4Aw%2B2j9O30dqVbI7sCcyXyMeYus3UzntVwmq643Yzvu8%2ByQSfsde2szp3AZ1z1qQVx%2BFZu%2BF4jVSNjpBeMI6n0MkGOqUBA%2BDPfKsHGlhth7YqGzB7OUTCuyDp6y%2BfSY24tFIFo%2FQbFlp%2FdRPQbpUXD2N6y%2BFJTeab70Wxq%2Bl3%2FwxDfkuAQEp7w9nxDbVy20aPImx5yQ2iFbGQqhiQwcZMaq6I7Pf5LVdUmZVYVtrwsMulBQWScIuoC5Ryh7yGaoXEqBvNcyiUyMhOfiQ3l3FsvGC%2BQpRyd3c4oKfjtBs9uktBlIESl2KRoQSK&X-Amz-Signature=f336697d6d41b8610855c6f3207f43a375c618de2a4100808374b4f5b985ae65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBUX5MT6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXqgWbjsned9oXRG8DSZ8U%2F5NQgEVi%2BkrHrvNrgrOoEAiA2P6pwUuR1APgw8vghYAT5vCcZIK70VwToZKYrK8PNvyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWhsGjUHS%2FjIdfzJwKtwDxg67lsIep0EepzXAgKamN0n3Nv6QBM3WCZkj23HfrJGwWjgyhOKTEfWSC88ltElFaGdxy%2FcBHuyTeEtDZN0%2FxbubZAzWAJknvG3v8rkcF%2FbLQ7hht5TDcik5GLos6NfeT%2Bwad7I9d1A9DuTalYHQpcqsBF6QFbo56pqV74MWsYlJQaqb6oXFfVpH52U%2BObdTJa%2FTGiokazVmmoC98vwUQh954AZ5sQgJ3ZEBqerWK3KiI7VZ%2F1ZWsBs%2FkyWLW0p7WaRHDCuRzr9KChvmt3tu2XbSfzrQ%2B4G%2BIi1TPdoHe73BvdKLll3PRwyleHrFIGgRSkhYoFVlnLUqpqPOGvxrR0hJV6aY7ISApjEOw7hufd4%2BOmnljgFdH18yenrRXv3KuDjVfSHJUxk33d%2BlMGudf9IbcYUMLerv0XviT2co0ihVm0Q1eoZyvYiS6QAzioVGx62eDwy5t7pz6zcJpCXU38VpRm7Kqkvs62H1TrJIRjk99ne%2BwlL25VOKjABKtDkVk7isghtGOITcnmDJK%2FccTTHWASKrrqhRS5u%2BQoemoaVByQq5r0ausKczw5AxCXhMbfsClpbiRsQKUa2i00y327mV9V7oO56H2%2BwV%2BD7OW4xZhOz%2FYzLmOq%2Fe9%2FgwgKfQyQY6pgGh9nXDb%2BcQp9NloXzHEpmORW3A%2B54k8HTwv4pEYBYjJ1JBX9pLjOzkv%2BGBuqr3dsVhB%2BU%2FRFJZg3oL5Zf5cUFrgB7XnNKmn2BCPPLqwkCw559nJhr5q65nfUE8fxrWuie87t41GS%2Bo%2BmCXIPnIXBkVkndU3pQUrVfepyyyFO2tw48eEcOJoR2uNl72f%2FRcUr4dwGXnTeo4SCO%2FQrxTR7vOmCB2UqVl&X-Amz-Signature=392f1b224176e9f7fa9f7635d516d8919a9595b373b429ec07c6196a4b65cfb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

