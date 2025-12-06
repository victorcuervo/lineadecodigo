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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZHHHWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVmTxU0meA3Ih5A3PCR9CjmbfK29aM%2BGfQuXhxdomyKAiEA0pSNlENUm1pv%2Fhkwtzaed6AW%2BuSLUArP98qRQb409AAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDkrz8Mx0SlvNUjRgSrcA%2FQgt3VqQ5XRWuxVVDAQzkUc9sR6WumW%2BAdJz2igsLAC91bFTH3LEwupeZDkaHfFEqHO1%2FIWKSKlvQxVUr%2F3%2B14to2bYGcgjDfv3DLnsxaNsliYkCkpmMs9fa%2BzWfNeHr5nsZ%2FXHWpSTrAJQOuSNFmsEHYpkKsrxEsaPKBJArm9RFLH4sfycdIuV3wKiIE%2FIBsc0DhcErpbmNH%2Fu9CPeDFoDKHQ8r%2FXOT3x8VvqZOK0G3o7iSNu07CUYgR2N8V0pJRM0OvEjg7Wltb9rZ%2F4ZMhT6uvwnCPODPHnVivXdBmSncg%2FJ0cSa2lppWnDwBdU32QY95cgo6OW6O5qilDeervdG9N8mv%2BH2LnfYfYqVJ%2B78vY1RLt3a0bCjgkW%2F39QnhXH%2FIZgr9oXKEULSFuNvhhqeJQxwXMl7NBDWHuBUoTwjBxOC8C4%2Fac9kFG%2B7mRhOl2I8hZHTwD5MiEbO0hyT%2BlbuMtmB61p5E3AHT001QAl9ammuPYknMmei2pZOdUeV0G7fKarCtDTWXMAMbO4INj4fZWs3RNMlN1oliDMIsNlbE7M8d%2B8U%2FdjdTzRGAHiDDm3GgYE3axNNkJIAFhBAC%2F4k%2FbYPCUIZSqQYF%2FPwEPLHOfZVnkQQKra7gNxXMLO8z8kGOqUBmDU%2B3M6hV3ci9AjHsxnNvJ9fevbj0cSos8e%2BC5HycrbuNKO5DmolDWEC1QPqodPX6ttm9hYt9yCuOiErHGmquIGJvjSOyDQe8sFnWezsgLGKqYkq45CQPnIfm66moC9L5Q82bwcHeL%2FCDU80QFJrA8Qz7DLytcdDNpYfgRRsUpaGOXWuuD7ludchaxxvJJ6owfDMXFii02Woi0r1Ms%2FOJqjz%2BrQW&X-Amz-Signature=c237aa8a66b4ced0bd91a41d52306a5adcd1337b5f6d941c2f621a78d8d8c888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BZ5DLJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX5iTgveE7%2B4mEVYG8U64QrWyD1Ex6sk3DxRSn0OrQ5gIhAP%2FzOEQUQ5FW4p2B2RoJsLSUpfeNCS%2FyzDspVT5e2gaRKv8DCHEQABoMNjM3NDIzMTgzODA1IgwKHK1AgulHA0bUlEgq3AP%2BGl%2B9CJt5pfTPmWE4yV2zI57BDxnZKvs9UgUinBRNzKKN943hG%2FQP05NLM%2B3vdqh4QBWAcFoRbCWBWVyVv%2F7C3Im%2FTXQoN4suECopPjdgWeT%2FDg34v3oaImo1p%2FJsFKtsqyRaB%2B3XbmMDrhieL8bQxQ4l34u2yfNNCTPT9Ny2pk58C6ahpd8HHXSIOS3eDD77f64ytijN%2BRP9GyRQMEnBCpeYhma0lhe1Xu8ZgmipF3kAgoJMe%2BHEpXebvJSnCQ47Ul3Lr3XvVTo%2FN4PnP%2FZ4SdEVPEAK8AQtwCuU2IWyOMr%2FH3ljZ4PN3UXr7WUe02N3PsMUkAo2POYEhLfXUxqBu%2BrWpxsGmiXez1SCfX%2F0%2FkqVl27sW9jjtQk5wLteE6%2BcI%2FokniTwWgRBF4FWK1L5JG58k9%2B8w1xKSlnh8et%2B6iAnOFqEUOn54iEdcTWExifSfBZKkhkl4e%2BW60EYV0tRBFFgvugJqF9%2FG%2B6TVtmljgF8CSzpT1f5VpIzsKKfc8k61Ey2HRSz6ElWP%2BXk%2BzEhpuiQPqcgpLn8GwMl74dkNxQVzbNrf1rfsZjyp6K0sI8pJd7xPloWxp%2Fv6p56CdGyTA2RWpR2WdzuoGoDFyT5%2FSkyAIBnknF8X7QGyDCYvM%2FJBjqkAS%2FHIWBAFd6rXdZ%2FuLRJSclcdWIDJYkQM%2FhAC0%2BlT17nXc9crdsfBLIuLvELCliyRqGT%2BaSx8o%2FavjfXCqlbj3QoFaAHUdaXFsFKR3IJH%2B%2BiSXdPMk1nyJN1iNBp8mW7osh4bXXmUNc4kbQ46Gbu6oukGpE4M%2Fa5%2FJWXFvtgvxGULubSz2n5g6BLOl9xDRavmtOygl7yxm7EOdy10%2F683LomPFg%2F&X-Amz-Signature=de3e0ecef691d3c2b662540c2f8be6d4b35d4286b7c9153013e31947a06b429f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

