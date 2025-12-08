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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPJKRNP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRUxi0zxaVFtT9Axl6fvpkTmQuKSL7%2BeRAWNgRXtXE5AIhAPpqJIiLCEhsItD4HoB%2BtAPBLwwD3z3N5EkOifv73UibKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHgWw8t%2BbIDi7W55gq3AMuT6%2FzrUfUHA2SF4CbGlMR0zwoJZYkBTo1xE27LM7Gy%2FFziz0hOJNnFLFUeQtNydfObaCM%2FRo9C5gJMcLu3t5KQ4ToYaTWqq5OCP%2BRWVnqrFUfZJvfOO4g1UuzDTSD8xr9ptojdmioPaIlepNDWWMkJ%2B7fYdAgydnTjrvu2C2yKBM4FYG%2BjiMK5YmcofN1diSBp%2FAh%2F42L84rRx9bdhcYmLTb2ruooq1yOkkajb39iEUxsz01ltbP6MNk6N5SycG3Bt0ABY%2ByaOdzWa3shkfu2d7nAgF1wYWZS78Gt%2BiNpktcXuKaieF%2FprU09ADIeYFe%2BW%2Btnt%2B21YeliPN448jdXF1AFyrS6QgRs3%2B6c2yo%2BYFyQEsprc%2B9PBF95CljsJwKsi%2Fg6Wrbkk0BNk01M9soJVpoPkSzfwgsKPCx39r0ALZ8N3zC77e6NHN32tWawdIt46v2jkNyCxsOx8Fp9YyCZLabR4lhyWp%2B2EE%2BFPbnMP%2FKpkWsWbRJOEkuxMihuLsOSJk%2BEE7FW0xyZtCc4lRUjIUHg%2F2XqGsLeo7YW7ogXZTan1o%2B8DKkarono8eejGrJMI81oWmC76JPxeBfG6nxvOnSV2GVdPo2AgTj8SFh5Z8ciFPU4I90LZtMhLzDCgN3JBjqkAYRqwg3s2JuBSQvJggZ8ib06rP5zSkKhdN%2BEcgAvFiVj8NDDfVhBCVuNewTvReXkw2y9ZNN0CkKL2kXxDATEMqaNW0lJ6uGNvrpAQMxarMVeqgzl2WaRu3ahJ4I1lj0aZNDt2x6rTNxw8c0jObwZ3YZGkgEyecj%2FiZIAAX3ZMr6Gig%2FRiMO5mR%2BubqNrdgoiwJTLyTUPFwtEjPTdLxre9dnVDSVc&X-Amz-Signature=e51d0e8b2ae0cd2a0a9d72e8cabbfa78e3c7a651ee43da582fa9d8d5207a48be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTBXLNL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJJ%2BqfYfCtySuPKR2AJwvAz0GT%2FuZOrxHC04R7q5fGbgIhANFVnF%2FezyRFuLsCdn9SYf3M%2BcLISaA6RrTmt6cHebSIKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW7LUc5DhzMVKhLdoq3APyRn0d0H%2F3H0wFH76IswH8wdW5vPj5k54I8lXoLH8967iZRtl%2FaYQglwub3eEqtNtzb9sEDp6gl7KJjQuQB%2BlNsBD3VNJ31uwtT5HcFEXUcYPcb3LwQmV8eCuhVs7cyC1eA%2BFbQclmXaN6tWhgG3prLjkIpii9rk%2F8s0eaxsT2npGSVWbtfIUstwoAxK4YbZHlixjCU3hoy5xFa1DoIUOjgNAzIdJmBGFRd0aLS2i1sc0KdwCEZ8FYPNELE%2F2BufIY47I1akoxwqoQjRPnpkfeMMwmdZ1r8VXpU7V9J0W66yGCLG%2B84kma2O5OSSYLX5f4hmvUhv0em42nbBIR79ULDt6BzqWx5BOJnr02%2FBocqXda4m2ZV4EESyf%2BzoanwJMytJXiYOjLWawyR%2BKW9P6YGowWcMgYoPr6X6sZzRB80NH9y5c%2BFKrAGiQk0hvzORi4si46oytGCY0gRvH%2BVXK2IVkfVoKbxCo8%2FprMvgszgwbiXK1Kbymy6dDBq55IRnw9IeTAY00D87ufWxYV1kIqom3TzbazFj07BsBNXNMsvT6bRMJWxE7FhoRMnb0Y4%2FhauPmXruPudqozXWUlymDb6bPnXJAigrkZ1IV%2B%2FGijViw8lethQVVeOGxlEzDo%2F9zJBjqkAa6RlhaBrBvtyM19TBnQEXL5rIX885peJ3IAuz67aN2jOIWGeF75iY%2FZMyMRb9%2BiLPnJ%2Fi9rWGDQssdWTLQJEH1HAYe6aP5vq%2Fk1frNQVn6aiVS4D1wDocFQQSu1HHXI0ec%2BwWyC3LJEjlBX2VTLmBUhVtq0f3rv0uu0rrTfaX%2Bww9v%2BKut%2FixVl%2BdWbuzmbn%2BUEXSB773QbcYpluDwTZfaQ%2BhJ%2B&X-Amz-Signature=73f908a0820ef04b951db67a5b805d07db0e8f7bbb4f76e94576b1f1bedca3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

