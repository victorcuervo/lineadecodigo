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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKG5KIC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIH3gVbFAdsLcFdAEDps3cq6ru1L4ftI6iVSLRjHN89JgAiAFDO%2BfsHJ0AL%2Fo9ePScwc6sTcI2SN3Ry7a8J0Lix%2Fw3ir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM3pa%2Ff3H66vXlYANFKtwDhsILn5eFaskW2eo7Nx0mMk8mxPEBcetZtFjaOR29Ah%2BhkPMURMTg9hBjrmm4UqUcye%2F%2Fywemo5fsgTuR8CiPwWGKW9b3%2FXlzu3WPUY8OzJ6FRVzDPyJglfyV24PX%2B7PLxZvLjwtV2j0zQPHs5WImKnAk0oytkdw3jv7dMj8eeMJ%2BgwFzmJTEIQuQIcmIwDan9zaIyypHbk6tR9Ci%2FEoaXUSxMekFB6WourjgjMti8TL86i3vtQfNRykwbuCvzATEU3tPJGDtASHSqYwbfRPQZ%2FPACWRI0viVYcS4iJH%2B%2FYbwY4iWOcajRCaUhiop2Qg6kmWde0zWo7kHCHoPN5UDkAbOCk6V0d%2F7icWrm%2BnsezstGW%2BH%2B63QlgRDCF8nybeADlrOkZ8grfJu%2F4ETg1zbCa24CqDxJdtPnftFzXp4ZSnixG4cOZviHj7YvivRVmnkxyauY%2BgacJ4ghtkb0N1teIacc6xZnWt8NjwaUlWUKpMZJ07l7QOQA77prd1%2BS4ltO7zpJxJ9j3U%2BedJUzf%2FKTQRHxgdALxc03ufzYJ9Fu9d0RXdrfw4nBdkJUITIt%2FNC7UlhcBuwa3Xd344C16vEBp2dmaQDVLDglxjSK3KVUR8PNWkD5jg4o6VW8Bsw%2FujEyQY6pgFV3li1j0CFvYlRNr%2B1jOq8CESIcJ3HPuO%2F1R9ulFb9%2BG0jztGYFZrG5DXyOFshwnJlRVIYQ8kByklPmHV1i1ihIWsgzCYey5DgvB3z9BhfXX0LCd4WKEhPY6TtnKQ6XDpbFLiPuEQbTxMu73%2FmuXH4RLhCk1zFfmpgEwy8Td8yI8dmgeEnBISw6tNwiQyADGZ2FgIwFQz9r%2B5Ey2KlfCKyHH1m3rmA&X-Amz-Signature=760a6ff5b72dc48632272053b685c382c0c20b3617c40367678e10e52a34b548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFPKM5A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIASv1dQTVVPs8auS%2BbNwlR03YfH0JaUgIXuJbKRPHTxNAiA1PbNCDISI2kz8b798kygtGV6h2KMcr%2Bji5T5hCwp5Kir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMuU3Xo62llPmiiJIFKtwDtR5Prz8QsQaKFPw05k%2B6ybM3QrdAO4jhvc9dleOp4Zy8t%2BKZvLpSHccH1sFyj2rAl9vU1Bnj5vBZ0mDU7DPlG5IeAapwukj%2Bn6aGOUj5xitwC3f5zhuXgzWrLvA9GUOVPdWwOEYwv3Khh9YpwZCi6s1TmVj1uCxz3zzwSdKaD%2BVwYkLyYO%2BCIoTfR6Lht1kDNWiO6qxk7yUEn3cxMhdLb9%2Fa8FbRYnwoKVE9c1%2FIaWFO7PcNOMQ6nLSBgNuAdzMmk15PZssHbd6faI%2B3J27dAAzujHElQn11z1JFGB%2BN7jvDqBfeQp1Gz8AvAjdJ%2F1vogaSC5GEZ3Y2%2F82oOEHCxPmz2KebDT6cNRmpLroiB3AqHlGZaqGWpiumsvD%2FaQPTZsJlC5qCBYbeCTy8vxkto1pH6%2BD0HeQZPV6atkUkHSmV%2BitHsVhUPIsEPSNhblWcGq0WX9KRcAUhccYLiVGmz2xdZ8tlL6DlVvPRS3G8OkQRdVrOADW26tMQibr7jdbwdfgzimZABC%2FnvixajMFRhn8bI0LJfBaOxscTk1v45Z3scZ3LDmjiDi4swI2WJbz3EVg3xPXnQaG%2FjY4FIKdPLU48II0zaoWnwVX7SBkbrEAR0UZQDpGAex0sxhEsw3ejEyQY6pgHXQH%2FxkYuMDdvlp0AGwXTT%2B2iJOZFd%2FK8V510%2FqrQ4tBsyjh331Yp9WwKlK7pMd3XFicJHEw70%2BVops3dDy1iB4EajnfmcUrmdC3IeExw2ZUfa%2Br4TIlMPIuBr%2BHRVYXN263nfvzBh7B6naVdL95%2FCDn5fz2w6td6mIa7IiYZ5KiU60eu1Y7Gh8BL0G1Qv3cfzLh%2FmBZyHYePwXkt1utR9OBt0HYIh&X-Amz-Signature=e20a31e515e35217aaab68a97480e4af51233ea7eefb4774a1aa312a4a7c182a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

