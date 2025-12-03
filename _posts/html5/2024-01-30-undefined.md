---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBB4FOR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGSERcnb5zS6TUWox%2BW9PfjOtdWpYG7sgD18%2B7YecLpuAiEA8Y4noZD49XB104q2Ho2Eyr7YDxZvIiewjokMmqY3xCcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLpq7OYGxqtWYix5tyrcA6ialkKsFZoTDnpk3q8QYewuXw5eVeGMeS1dwHtGFFrvk8Dn6e6hlsx%2FK0x5qHKtzF%2ByAcUE5uU9oru95cgsrFApAD1wzXwzjWMRcFZ3I%2Bkm8KaeLZ1vvKLC7%2FzTpUh4OaGEiIWYCOi8AdXEjx%2BTHRuWmc0TTjBi8AdTPbRmMoJAlbvdx9iXav8I4EDbNRx4aVBIQ7KZ9RWyt3%2BunOUICaIuH%2BI6u8dN4wPUCcsDfWMUzerxuFVcUlFxBoyQMUn1GEP3tyfsOiHUt04tqoVqWwVlfLaEZBQIGlD%2FtH%2B5MpKwdwpSHtcdj2t6j4NqW0rFXTcS%2BMKhIiycnLN3Tn%2Boh3JeVqOZDLncDfxPY7kjQe5WqNWPLIAhKUNhZYLM6CnY87k6WYWfNCElRJWHRMvqY0XqhacE8s2t1ntYBZ084n%2BRRdQ5oGC4gPxsg5rLoUz0sf3iEY2Ihkzvf7NBNAX0CNL1WvZMBQbSR1mwG70IZUUebnkfxGXFodh6Li%2Fw%2BW0uvkzECU8lRCqiu%2FRhHu1DxocA%2BymHU6ryfhHFUhebuX1On%2FbU8xRhFn0ZH%2FPnrkSW2EclolPYQ7vDL1tXUG1s5iyNKTblicodWvZDfnMWN2gf5XZGv0ZfJcAmxAWhMJjpwMkGOqUBx8zneVPMTolKlzqukUSEax%2BJHTkKVI%2B4Qa33lNTqGREIn96678RBBfkaMUmfaJpV2R%2BQm6frBM82FYjBzlTSc96SarcibLCzOSnGpRgqQF8qXlw1h%2FUBxIY8fgp6crZysd4vopGI5yP0l0TP2Gd80QeYkDCoShpwVdQII9MsV1kokzdfnyw23nlRaQranYNTPQoG%2BVNe%2Brhb5oW9Yo6hKIisvXOt&X-Amz-Signature=7092560e066b3576535e1096a5898806e47c8d2eaae90228256480d8ef500f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSYI64S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGo8rli0mfMgHDrC4noKACQPnTpTyOsbvsT%2F5UuW57ktAiBO%2BWM7b9gdnOkuC1VyMGWYnORTArRaGTe%2F3m5ry8lCzCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMGHjc%2FPhHlTS%2BSLbwKtwDBamg0uHmY7o6ZK3kviJeByWRGnI%2BKhkZN5Y2ubFI27SjTsnUsaAXU57SVk60hSkTf5TjYqR9Jfi1m5b%2BjXw37TjFddg1p3tPJ8Gs5FUj0NQEZ3819PPwZ3q79qpXZcQ5rXsVaIqmjGMe%2FDayFq45Ks7NoZeeSEi4yQ4QeZbxkeJEGQ0wnZkKtVCinFe3X1MB%2FwN%2FJOAxJ%2BHQ72oQa%2Fkqh%2F8sWptWmD9DBfBsNdk0ikWnJeKciK2dCq1Um7JIWFMz%2Brl8PEq6CJu9dyL3yuyHaTT%2BHO43crqwbNnCagm0lLxma8X8pN4OLWZXVl71uZzgtxaVYwcvHWQU%2BKm3OX94f8m05%2BbmE4rj50nPsdQ55MVx30IalwWEh%2BkfECFI2QhGOmiMwnOPzBPD2h6koxXM7PIWYKnpQIKgRQ5w4wScG3R7cKY9kgyNglbrPLPs72eLdQkfPsgTeUNZUDkqobRlw10JRdH1Fui%2BhFNGTxMYhGc5x2YLEB4kjUHP7OR6EB21kiqkN710Ak7GsQtX3kOfG12F2Y3eAhRWw54R6juyZ0EaGPIaEYYOr4A24S9kpZ8THgdCIr4YuK33BQzZfrlGHhLXOk%2Bk2Ptuvt7DgsAu4AB4Z4m2N%2FeWVumi5osw3unAyQY6pgG26C6RAiqj1yxkg83kt97PDt%2BLUIUo0F2LJA3NsFBhxx450g%2BkzpWqkeJD6Zp91I9yJNtGzYO%2FXvmJBpKLJ0PChu6BwSnawR4J%2BCrtyss7At9LUUOMhb6F5rEYItNhF2ik5eznOcJxYNs%2FDEFK9n8KbATp3LoAa6PaEqz5qfW0%2BWP2u5jFlrHW135PpUSf9zHqBVGCF9lpCg6lVXxq%2BGj3z%2Fd9Jdz2&X-Amz-Signature=c6d89637b2579db1891ed14e2a3f4be89eb8d0368fcc2cdf6c4cc91117bb0835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

