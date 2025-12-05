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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOVXV3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk9C5ymuaaIraJI6Ph8wwCguwqPd%2FwhjKVe9u0nFKTgAiEAuQ%2B%2FQ%2BmNxBb9WuF%2BsK0bQ7ko6G7bFK1RNzLfuVVpwMUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGm9Dr%2BtNrJNG3Y7wSrcAxmtMTQEZOAQ37eGO%2BROQGn7w57FTrWaX5T64zz%2B54DZUCG8X5xjThthmglxUsXXEuO1nASN%2BAl%2BqpZHebBffqYyoXoHyrtcNnZZybO%2F3frqiLaqxNC9kLwDe9DJ4XmwHRkfq18xEMsNLspmt18Ouaw817hgKjPwMF8ojTI0cV1IPHs8XUhe8qmP25cVxRXwEaSMgLayVQNjCsGeoTgunQ1kMNk8bM8VvnzgBmCGN%2FKa51%2B9JSbqUytM3%2FfGQJrta9ahW4SlUzIJvxFMqT4%2F9mGNqRrwCOEH%2Bl8lqWM692NKV6pmEm%2B0jRrG95HVqM7dt%2Fw9E7GJULVVGqmtyf9Hogyygw7Kg5Iu2eDqBEiFYSUE2zIjSf2oGjt3nG5ie7FP2jFaq7zWtvugRaL4zs9PhYjnDmIu70E9jy9pnyZXOEMHAdwEqC43wfxCdpcWPxf9KW4%2BrszrDSinEJukCjXwJ%2BBHeejoJnKgop%2Bknzu5Km5OCtuAspGwGAYiEv0V1XtVZrimQAfwX9Qau%2FVlKwdDier79McWGGX5J%2FNWGurzAIAdas8Cp%2FmJZoi2X6mibua1t31ZtnzHzMOUviXVPjhywPTaqKexzr1VG7xIaxD5XLDEzcgJG6BCMn73SUa4MIvUyskGOqUBL8fbSHk6wIYhRd6cQdxTKztdTHbmHkvH0IBDzAr2vCT%2BEN9N8%2FuMMHAb84EKTLrbtyTeEH%2BrqSFJ2NIcGv6c4hnULbhldHIvm2Ebng4a6mtb4YXVVwRCSHabK7qQK%2F8E%2B8pTyhxZzeXCuRoc4zTgyuDoDCv4ZFEFXxr9bpQ9YCy6zbGsgcRhOiPzf97i%2BiJDGZT6kmQ%2BW0h4HB7ceNKSDaSA8eAi&X-Amz-Signature=512b53c68fa1c2688b81fcbbaeb83b0ddec186f0500558c1936256c3a951393c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6FZN6Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbv%2Fx6RSAT13EdE1Bc%2F0EltGt%2Bj9EiD1mrhgtsG3LahAiAVVDnbW6li4bI8xJIXZ6Y58y20FSNuJ1M12r%2FHXHTLLSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMOvtIWzhanrXAbx3xKtwDCTmModk1D%2FA%2B%2FPjRkWbtSh28DrY1Y8oe%2F5lVO9262p7qM%2FJyK%2BVieYrEurCyhNoZOIb9xUA5xznzXcODiuazG15%2BPWBKhYhzvGY6FLlz4qYTOJqeS7Jud47ae2QkK9CiZwbgH50TBjEvXSGckyGd5oErGH35ibNtSgzp0Meve5n%2BNGjSx7zuCEamou58Avtb4fSrdWRi2HW%2B5hyUhpyN1hFBYRo1wbnrrh%2BYADjdUnCA4m3bw8u8Mum9j2%2Fe51U%2BnX05qAx%2F%2BlPlQzHe7rbWmMvb5dBommswWWU5D%2Fll25EoiJXyHcw1wxbPC1Bd3EMhmU1ACPwGU4D4gtfLaMmJNIZiCKwM7sZWEkAzWKpDadRhFfFiXERrEERbba9M863GAb9nMfuHS%2BXY0MozIHMXPu3eIygaJamYo92aPDFhGKBIaHNzm3PNqaHzWl2zlMRzzyPCDgTQUCNHJNdsbHhen4PpdYvhM1Ry3eg9d6C8rKYMScPG6S%2FGwuSxjAjWvmJJGFojoUeb6GRgkYH60cqWZ3MGCJLO14OLYeMInBtsL6PTK74fOjLRCBNEVS16szltiq7NsmNjr80qK6RNjaBujX4t4vnEude2yWItCXwQYb27qjxElj5s6D5X%2F5ww39DKyQY6pgGUV1cavEPUtK%2BQe1gM%2FR3JSgFi%2BB8vUP6CfvkXWMG82YvVP%2FGSEgUCWKNbssvtyaXImifLm3YgUlNdOM4vPY%2F6ebgs3akkuYgbOd8y%2Bskun3oJGNKezaEFCJs15dWiK2Q5jEjfhYXu3d5ef%2FUY%2FXOpalmn7PWKcDFS%2BPJau4r8A%2Fzg95KJqLmSlHOJGZe0RaXT7dvVFNnpZ4sOTX5CmujNCJyEWcMz&X-Amz-Signature=79b3da60ec514a3d92bf54993320bc5d02ba326163fe9b72ebbe6b42a23cde9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

