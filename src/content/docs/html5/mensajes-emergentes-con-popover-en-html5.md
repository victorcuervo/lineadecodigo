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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NHCXM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpzhti0idj36s4F%2FMFv3EAE2a8UyY7T4D9VS2WAll3LAiAmeXtMIgPyw3AQZbF013XoUO8KnIVTkbds8Voe8gqtUSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMjQqQHCfqToM8CYl3KtwD53e4CrJvmRggmmlDN9JXZRIjeM0bLeCuu%2F3p8Dm%2B1AF6GWVgtPahbKr5RiVJ6Zu6MZ8jp8D1%2BEJ24t1R5fMZKIJpi%2FAH3D%2Bh%2F7yqisNV4X4mkK6%2FWVC1IbyjJSKTXdr2AbjK3P6joEVl%2BJBkyJfZjXy8Hzqzgc3CXQWPuWFeBai1rV7EKn%2B5%2FJmVnfGuk%2BJIi3uWQB%2BjfWr480tDM5o8VF%2BUrMgP63WDJK3f42Eu3XHrQ1FMTko5HyDseLkR00wLBOIa7YZVkERaBbQl7lO1OQM9O5ZVTVcX5knvGf0r%2BEpK9YmoXE0JuIf0YCvXqqHOKai73DZQBfooNJF7ylxvk59orkZxmXJvLoEVVbs2Dq1qwxlbRPLIXz7iU5IM6H%2F%2BRU2ux%2BJd5rHVs3K%2BEScBw2Fpte4oQw0mF%2F1M%2B%2FWeB071B5CDFLO6rSdh4653gvkK8DLhOgfEIdZIg6TQa%2B3qTk%2B5BC3yh2ZLO4bwaEN8SVS0my7%2FORhLu9%2BtVT8UkaYqAYbZzGH4GyD9sKRwaivRYn0rS%2BdIXyKhPvIWKcuDc2%2BletAlfZt%2B7%2BIQi5ZxByAdIvd2yyAdToUToGSXF0b4fOB0PsfxaZsXDjQWBT%2B3RfY5tfRmdwhA4Sq5Z24w84vIyQY6pgF6fLgpXjG6ZNUhNe100fZLZQgdXQiwDdpTw%2BceR%2BYbnNIqYV2kisfflJ2pEwLq8zH7eVUf8HneX7WPNFiFyF%2Bl16RoZPWniR%2FrrlKpDX%2FcbQchkooGL7HkYfperz4sHeioquid2OjF7aj8JmsvDV8C7NpVR7CAA0LPx%2BlTCFEbtOa8XwqpWDmsLRmZPqYn4f9YBUMWopT5YoOGzSFpNu0Bh5d4A2VT&X-Amz-Signature=2752a851844a8235d6ff16325a38bdedc196dfd8808759800cfff8997b1ffca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI22ZLRZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK6xZ9zj2XaZhpnHaRug%2FMkXKDuVXbgfXxeIrM2pyZzAIgHYOsaEp4ZyJ6j3wsvv9BOHtG88GBjuOEMFa2Xhw9dfcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMFRKYo3OtYyfjUZZyrcA5m4QvjY%2B3wq2JIQh7qFy76bYkXWKOkh2XEVGdOmkZQeybUQc7m%2FS0Te51v5i7WQFjw3TVCfenoh86h2lDKbVfFgGZzmgbb%2FQk0CjKsL1pSLGgyFeNVciOkPrrw%2BFGPwiro4LXA6SF91LWmxcq2QkFuy5%2FBafGRvFBZfwHFbuWHHn8Jm0GebuNc88HjACIuTDSZTpOn3co1aIsTovh%2FRO1iQLSKxOenXLGv6RxY8XSUsi7DtGLzJMhgDJLuqb2xUaTNxwJ09t8MxOL8gfF%2BInIbVqik6zQe3K4sDQXBbn4YKw9j%2B7kWVFA0Jhs5fTcU9wG%2FJaNM6pwzv%2BKsmqyGX%2FXIegA8E6RwJxKyakvRTFKuG8l6kzheGHz97yA%2Bi886eDTqwd%2BvqpjRbQ3kRQzvtvhkhoLVW%2FeJhPNu3SFyXcIbPkNtMd93xRbFwi8PvELAG3qR1C93jo5AzifRfScZ34qIqioZfA64AqjZyN8KxYtYu3MtOwwoUCwZjoIXs%2BDVP%2FcnOlizGJGvKPz4kpFnRODYDsFe4j5s3EpwNF9r7AfYtXd0r%2BpimU80KkHPQlQ%2FYPjVTDoEKEYgifolfWJ6D5CNR82m1mqnHWLPGf9818uDGnqAnY%2B472mao1zw8MI6MyMkGOqUBRVu0Qsusx4z%2FNcL1TxSYQs47ZfA3sOQxtuSKwZ86N2nhkYxhMPhCbt1KASDZxGTbLsUcXj6zTsJ2IvY%2FX9m0uuXeyKyOGRM2JbCKcH77lTv9kkroj%2Bn%2FjreCLPM3xMJ%2Fe2uTjBKhMloHgCFxTyo1vu9RoHa6tCl1TP5bNQWyo0wA%2BE%2BHxzBWT02b5k3fyB43iS8IpbpK9xwL70hVlhzMJWhjbi3Z&X-Amz-Signature=ff92df80538479666c8c530b8cd2df55bd0b13503816e42801311dfd4b05c962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

