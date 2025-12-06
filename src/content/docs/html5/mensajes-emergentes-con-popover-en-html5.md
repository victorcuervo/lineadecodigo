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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P25U47J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67VNaKkdmBzQyJlgrCV8S74M9eRxdjrIkuMhbbwzfoAiAjJ%2FnuM0aGI32gQXYjepwSXiwIAL69AtLsXhUrs9XuPyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdg%2FcVkwnpB4EqqaTKtwDC8okt3AOrBZR1DXb6qP%2FWosRzp%2FN%2Brer8DNHXpvjL4VY6zSCj5R98Hcq5xxNxBo5fRdn1aiKwaNerhQ2sUVM7gxGmnAt3tC%2FcbWgfM0oJtramlo2khoA1aB%2BKO1mzwfEld7YJVAfWlAQJBoi2z0B%2F%2BEnNkJgfv98cRSBsVwi%2B1eOEmgIPbyhJvXR8Pj9U5U5hop9FTfVb0zMt9ceKJQmhYSlKGf%2BKS71iaeyfmctt3Ws%2BwyP%2FKNgakfPlIYWIfnST7fDfYV5m0mTebhBB%2FhAJqfZ2fGTD8S8xA8sn4JNYoNVtcAF06acM%2BdlUa3P883Z9TDIXwNdNIrEKuxLzQVD689o8ZLeHnKmFSJmxC25oAfho3ls2oWihL3kLytobu4Ldl1SfW%2F9tGMWUtqHm28OvQH%2FpBlRH%2BJKt4e3GMi0eJ6FW6orVittG4u%2B4lV8eZpY9xKrT%2BR7SIeh3wApC3eS21CoWmwrB1YZeSVE4MvEWBZE3y4kH%2FU0AxBv1KqcC6cmxE8Tpkt7kbxbGNwpI3o89aF3w5fCCoTbfpZVkhnsFlAlEHlyJCRT4tLp9WqMWVmErizRGTvDKvMwYcb3cWGSC9KwGMOjCzkLisW2gUTG6R0A2lEv9swzm0%2FCDlgw%2F6bQyQY6pgF1PwYpIvkcCyc8opgtY%2FqmjvGuP%2BU%2FRqvqurV1ZGVrcnpajWDc0cyEkolaQkXn%2BkAkiFKda0dUe61dQadA%2Bf6Edf8S66gC2YplQxDf84vB6Jedxwvti2WXWSjnAl6UFx%2FYrIggsaQL0%2BTE1mB93Cq8HKsHRsB46RIfuhbCHF%2BkEA4tnnLzjrK1sFzMGyBZBzmrnOKqe7vNUZxgussqbJirFFaDqGvm&X-Amz-Signature=44e618b52cad26285a3328458b4917f584b18199b18841eb6bb55c895488bc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPESSUSQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Qh4LqsfP6613eT5QOQS4vts7dfHI2G4kQQnPrb37zgIgT5M0VgW4YglcefdCCkRNKcIniM0zyMQLL2vQ2D6ieawq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNs%2BzEGHF1mhFStdhSrcA%2F747ROlXeLT1N%2BgDPjdyyTUkNXnMBS0%2B061%2FzjBb5rLu9ZPCZHgClw3T%2FLb%2FkPhU3LIFKmjqGrbo%2BpHmk0QkVpN%2Ff0jR942lPb3uM9mC0r3gIk2JNHZS9tFHoYo0n0xHhwkMJy9q8Ta%2F%2FEJP6cWBm3S5h1UqlYTypg6lGwFL7Hd6QInFxhBX1%2B2sbmGeaAG%2FSxFJ3yyzCeuRprOSrU%2FZwxLUjF5QwKKMANjM5pYjwManhfpUFZDyP%2BBE%2FoNYiYC9iDfHcc5jGG%2B29W1LILJTmSp4szRyWEWUAugrQxTeNFXjN8gPPvp9KzsoOLcbxnp18Wc8ZMVWVRkbVNYyobo%2FpUB1%2BBj7PiPsTaTGZaJEUe5BbjcsfLHZiNyMaZvYxZWy6UUnj%2F5fLsakIGmTsGozAAaZIMH%2FWBl2sbuuEjcEgntJ6yVx4Q6Q6Ak3lCHqpCt4Bi69ORjDO99MZ8GC6pkQmQPXv3YF%2BOLnRIuYANE8c6twmK275oMZMNrWwRnuOOcV9xGvbWBAVGVP4C2a6uhsZkh3EYZyxnFWX%2FaWKpUO2P%2FUzx%2BV9YwfZJetzBjnEOlKV8J0bW78feQQDVURvMjGe7qyYuuz9qj2LS%2Bt346ik0J084mAa9aAPI9y0jBMI2n0MkGOqUBvU73fvQASqclMLRDebDtGZUmEufHpCaaz5I3HXlAZ8aGaOadvrX9PgJqKHVzQbkoxr8l82EH7A0xyUn%2Fj0zOUyEJIiNYKA1HHoD8%2B%2FiZmGvjQfCCMYRh%2Fv7lRlQSF4S2o%2BQzcoHSEF6uOOspRSWnqoeXkWuJCCDIcOj2eewsYr6Vkerjc0k065s3JTOWeEqAy%2BeChOuRIizrWPI%2Fzknlv8w8HuOE&X-Amz-Signature=c171500bc10ec7a716bbe7d367c8fe2c84fa93b9073140b36ad520417d10df64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

