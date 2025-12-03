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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AE4QYGH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGfRd7EWsm52wCHKUWU6BBZwP3cT6U7%2BLfuDclCHqeVXAiALCfwsJyn1tqIL1CvmOAQskHiW5p4Ff0w6vZmcHjZoYCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMNMny1HSx%2FsRyh0NqKtwDc1DreQXuWl0EgHW5f8GPaEaNFHPevkhYY5nP2vETUn5pWdc4cSQK7FV35YzahYh4BaH8GAGmtOHCpMUE4ZBE6QLEa40sBo8dz1oTkcBj0b%2FOgYEiVaCVjvCvrbqq7okoq96%2BClzrDvVgPOznNWOAPQZovkt8SfymoR2OWqmjwZpZLbL2pSBVKb4AuJe50Deg5EeMmJku7zcqnVbdv1uUaKNUB4Or1vriGquz93XopNHGEVIE10umgrDUtvR0qB%2FW9iOxRjA%2FGrCUJHPXJ9cvSatn%2FpmigjAV27hbZTsZ%2ByEZv26k8oJHxNohU2Fk%2BwwaYlnBXisd2blBkh9QkAjN9OkWkT0Awr6V92oeFQcLMw9OEsuoqbKe96WHxBN8OHEY%2BLAhsY6W9WyCtD63EqTBUZVMZ3zq29A8GfNcEeXVdddMpXW8Yzsnj%2Fi6F6haW0Q6nfIm6jbVe%2FKQic7%2FfsCUZ%2BBkNU6UYWukLpA7vKmSM%2BHsRFrAw1wqKhb4zXi477yv8b0GFv6N2Crvbg3lojXmDNyEjUr43j2s2WTUFjC8CjyqPdDulkHcrNFOs0ZRhgGqIQqXHwuJUhIbX3QhpPVknVG774ZNGb9q4ubvCybmivAbaai2DpWcKqoGyxAwtPjCyQY6pgEI9fhAWK3YmBvUwUz4hFPNTTbKKKznSRDWTu9jRgn%2B%2FIx7W8sB4vBJP9%2FuTx6BBe2b5PJCGiEHsXAhQggWrPDglA4fHfkos86jFPe1xHagfKBjB4%2FOmJj9%2B5%2BWjrB70FqrGkVqJ90QJR5DgG2D%2F9xQS1%2Fk6TrGCshWsw7neSSGXtINWcNWZlXsZ8W6fLmEScAGCxT72gO9i%2Bjm7IvXbGp5bGHdR3DT&X-Amz-Signature=3d373fcea2d086b620840e3d48fbbc4578f303877d6c7dc6f157635a980fe814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJDLNSQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDihJMzJWX13k0X%2B9aq109F4XASt%2Ff%2FRkdZ3XvoHldTLQIhAMedQHgvRJAcEwEwzIreQ2QxzcGqIoSr4ELvFhTKXiOfKv8DCDgQABoMNjM3NDIzMTgzODA1IgydbflXmzMVFzLTNE0q3ANcAZxYJtzegkq%2BTDmQXKBy5IuJ5Dcu9pj5JfKcR8xux%2FeHneSh3lVjUtuAGLOfeX9piVlmu%2F1XHYqEHkJ1xa7teQHSdyms1w7IrBhE8ApNDbdJ6JvKKXx6yU1w%2BqdSgd4QRdL1E6VEgSQxDTzmSSw58hzLWlXw6MLaVJwpEjumKZq9JXibBdbNsVeV9X%2F7Rmb%2FP0M6XsrsiXU6QH7Q8Ie6tnsvV2gd9BsptTaEcyXegsaK2ng8hCib8Uv3coqfX4NiWLw14TF8uoEDau8leIWU3G5A26KNIXX8cVXbO3ep%2BYVjde5%2B29DLw0Obh0UyV0vKI8g%2BwP0T0lZ%2BzFQ2XDZcAY0unIPLLM5oKbALWuT%2BgUI%2F4YflsMOPHqS0MFpHWaQiol3f8D7wpSb3jOkybmoB8G%2B5aATU3Tu9j6uSpoIc%2BW3udNjDAl8k3YaZIbC0Sn8F9dLwc5chk13GKuIwfcUIimWV2iLdXmOvcDQKsIVLT6C2FuQw9%2Fodv5jCXDbJJ%2Fh9nAWhS064xk3bdALykqozbbuLbp3lkZLDvHGc2mG2iC2LoZ6zUceocnxaE6BIKsoxENIfQT3FW4i%2BdHsvlYn4DPAzg8Z4htq1QGCwAo6nADfDFKc0CALSCXsIBjDs98LJBjqkAQjjzR9vCpDdRhKrYaPAVQgUKMP0CbNwOXm6UO1b%2B2fu7RtVvQq5Wp5gTy8Tm4hfRqtkdFz%2FQtNSFyOpsCWU%2FCTqh67R9RkB%2Fug6AfnPdNwJufEubDQjSCOU0MWcGOhkPhZZoDv%2F5nn9I3rJAAkSkAThSue%2F6JFmz9r3O6WJiYyanhc4kCo7OAIkS4V6WTFmLflgl61hDvwD1J4k2b9Cf%2Ftr6yOm&X-Amz-Signature=899730f72491557a0ef8614499dc763008769c15089d951864d3993737635408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

