---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GUQR2EK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHjB69tiPGCd%2FO8iBsdElD4tfWWNiOKrS2i4kbAcMy%2BYAiB2tYKeQG0iKgx2SU9M8ac3CcyF4rTCVed%2F%2FI4%2Bo4mFSir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMmHOUcOyMg1EqFTSfKtwDz1UZEJnLtXPEg1ozGbq8dWKpDmhZMXK%2Fq%2BnXyK%2BDr2C3hkzLlNfK6ZHKKWsxUO1Bxd16z19fZBF57iCCC2%2Bau9cEDnhiWbEF5o0KoAy%2BVuPu0efG5IArdjDBDYVblJ0EZkcgH8MzdrxMem02lmNt2nwYSbhdiVVmpniSoUSeJ0uuOoOKlwTGEBZBwiBeO1ucszAolGGe8ysgpjs4tFG6bkbGIKqF%2FS7TnxbvSWCw9xtPl%2FIrepDmH8f43s44U9jdIlacU7ZSrSDJ36t3fPfTyZr9YKl6fhLTs8XJa2mmaJemscdWuJUBrl9uG5W4vmREWaG9iRN%2F6fA1e6cwi1NL9ljRuWInh0sm8MbSuL%2FPJY%2Bn1UQoCJqbEPriOul%2BRzL1cs3yh3ie0aKmm5Jz99gDa%2FCpB5vSoBJBOqJn7evT3yL%2BwgZgHA9wq4%2FcgP%2B7uaePjFdWVNBn3cUXM0Hbdw23%2BjH8PL0kDyAtl7ySdCS0YB7gIX5pRfNaOZoybyKcUD6Lu1h%2Fs62fzn3iZyvHCGjAwg2838l5mPNCpUKy81SckwaNLQaWpJGwn0J1D5AMYDk8LNrp5rBMczSznwKqag60vtCpotc9oPDIgC3rO50Sbxl37EiNeViZH1nh6%2FEwr73CyQY6pgHCR26IIJKydNmTBqY1GxEXCnjDYA4s7izhVNigDz%2BaWh00mg%2BtlMvVJ9%2FdBq9PcqjBVXQYn%2BrWa0VmSDMgnWIK9vZ5AeIsB0YDBfUKQepZdNO8OTu%2FJHW9zZRgXK6QHdL0g%2Bz%2FHmtkWECjvrpVYBET%2F2r%2BdsR5vb8ZjtxcCK6o4kThtzT219Ey44o9MtcmlwJ%2Bw3iWys4tg%2BWx09kpm8%2BWI4M0d4mG&X-Amz-Signature=abcfc34fe14902bcc8210357b9a8cbb48dd556f49259c9383d5c61686baaf025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DZMYO5D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICys1FeAwQG7hCI21KqDJkflfDkfVnQnBcozykl9yrCiAiA%2BZHZ99%2BKXNCWy6w5Ikh0KNuaATdTwp8FMcwIHTTbS0yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMjozqdBdEORLTUCLmKtwDWFv7CzrOywrIRirRjlourx%2B5zwlFlz%2F8RBRENSXrK%2BgQ0KEt3IHc1Z83knrvBF95CJYE8dXIwGXFyXoVnTIgrO4QB3rQqB8gv1RDbXV1TdT8RMoF1m1i0haoclxnl0PKYL2NHbEfY%2BEfDOL9AFUqT2FxLJKz%2BK47Mm8Np405LNTINs3%2FIS1ggJe5IqzzmZ%2FilFyOwNkhwHlm%2Baf7z4S4OXOksH4GLGZ0Cl%2F0yiXkXGznyQ3MBiBE4B111knApFNgk84hVk2%2BoZTjtopZ7Botf%2BMXg0xKW4aMDm4AqYFF9err68xJ1qBh3yYKAWMqMNKjHYSd3Qp2GR6WQJ0%2Bmv%2FxRxtol9lhybJe08Ooz5rS7ByLWGJeEFUBUVwyaBEYdp9JV1lw8xA9yVNxBZ7iiAnxNnM139G0%2B6b3VrGeKv66YxUmJ%2FcEPzg3Zj0%2BMjj4UIXsCUC2%2FOfBj8j8KYxT2qzUhxo57E9wz4pCxSHg4oOJGPy35PzAxq3HRH4NCfB%2B1a%2BGB8kK8AQMc1X98iBFB29SvHNadkFNbivH2UxGaX1XBi4K9w2PuzitOApN5f%2BxvjN%2FI6mY5v2nIW%2B%2FzKIA%2F5ZOJjtQSRL2NFCRrePhRZogVCYzA5obhCZ%2BrPDwThww6L3CyQY6pgGmCopCYDPjSRYRr%2FFS0%2FWK8FzcD%2FC7T1eWLrp%2BMbCmL5H4JJEkPXpGzOHPvBpWEnfLTclWOTTh2v9f32jdkFCo7%2Bttref3N7gq7vCCTq3dfYf%2FNlYDJ8Ejode2HqA30aaCpja16GDg5X%2F67q0zVMxkUWE53fAoW%2F5ELmSWRZycYyQYDA6saJa3L%2BltSFHwiPZJXL81hcDyALR0EW3mh3UrV2duk2u7&X-Amz-Signature=ff364e3ca8ac70da79f6645142fbfeade239b396e6f4612ef4b19363179b0a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

