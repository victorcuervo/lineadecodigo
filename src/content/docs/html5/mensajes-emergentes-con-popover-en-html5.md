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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2OXRRH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRyNgISeOWpNN%2FlD48yE9ts4rIE1hfre%2FbTYnw1HcFaAiEAiWLEZfKdxN6R3IfmJg%2FtwidaIMtw5oKPn2M%2FHA2iDygq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDP%2BW2ErYqx610fZUKSrcAyJeXCra24Y%2B5wqgaGVO4AJyGOY6QWn0z%2FINfP%2FADW1889Qnvlnu8NHZLchcIK7yrZbdidN5UvvMZeaLoJeZBCZ4lvgkBtiUoBGM%2BKBeHuW%2BZU%2Bs8REYOfNkeX88X4HFxZ1678PEbFNdXZtY9gxnre7XHny7B6UMdeskFGoFIl8AjFNnHHDsfT10jTkTwpes%2FeH0T%2F2uhIaHSf3B%2F1etBLypaJ8kwi1UI7Gvp108JNXTpo0civ0OOvN%2BQ1unpuCTbfMBjyjbmRSn1Mz7p1NGZaul9EGlNrFlmNgUfZ1TRRpSbvSNTCBjgRHUo4ivXQ0HkUI%2F1VK87AxxFl%2FvIa4YvPBDrQVMiIXK%2FZj244IphkMpHpaGyI%2FJMSEwdjcCrJfZfHIJnYttwUCQEEgzlrsk5%2F7FSw%2Fu57i7P6f2B9LJG2d84W46V8NSLRt8rNySxRgjJ66%2FSV7HzrshZXDDLUnT9KUT6zJrBhNteqZIllFBxKsL40VaXr6LPDbLkM7yFZQpPpUtROKPnNoMhBLgsNE0HcJJTJifILrOFuq7Cv6puBmt55Ft0XHW246Od1QGMPgwOM97A81zQUdSTXvmlhUhbzzA37aM%2FSNqxBKgu9uUXOXqBBYOtk4pGfEerR%2FvMNisyckGOqUBbTuSjMm%2FGhJ2OAT4sA%2F9yN5IT%2BhUD12%2BGQ2J1Tpm4MW3NzkVz4O7HfUL9zGwcdI7zhci10BLUEZ%2BZMUhkBEx9VpX2EjyO6xKuYGUvF1gl4Lg1cGqmcUGXqBtOhfKEbp%2FWutDGRlSax8npcR0VlwuoB0Q9wTKdHt8SYtAnYaEq2X3Pnkijkb1cAy33y7ep%2BxePXfjvot0Gy3Xq0hYi2S%2BE3DpQFNL&X-Amz-Signature=34fe13f23761aa914205f3beb70f78423c81eeed3745f1553e09278b6dcde0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDTNWNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe51LrjOknon8QrPZae%2F2tKznlp%2FIKdjO79g0FcrTa0AiEAqv8sG3rWTJ3ns4LUMs6hR8eiyE5Y6H%2F7zePETzTYY5Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLzr0py4d%2FeMjA5bWyrcA7YmY9ZtklUO6mLhKY88d3suZQP%2BgUehsqCfs0wjhmDwSFHxpicIYnB2BvsF5%2Fh3Mp2aoBTDBHvgMqF285e523v27fJt4AtMKSsEZTrNcDFcfzUxc51O%2BYhkjkz5gnGDNR88w1a3B19HCtoX4DDDq8RDDYvioKKFauFksb%2Fpz2J3GAVcYwgWVgzJTK9EVYZwp%2BpvckM7i3zOb0dUnjrVSQoAgB5YfxFPUQHp0aQkrs4RYDD%2FCuAjXnoBaOmvxxWML%2BuV%2FPl8aqL60uHQxunawEaKA9Fn0I%2BlkGJldK%2FqsXbyiv%2Fy28ZQ2uZi4lwK6v8nb9fsCwT5Usg6%2F8XT9NSWfHatqAoz09ylge%2BHv%2FqiborBQhC12x22D%2FkaGcZxA6GFpH033pnwQf0QVQ%2BWCbOZ80dI74EwxfiQPsbOossd2mCkXxKKEeZiplWgJ0q%2BehcIf2TWJ8dukL7yuAJw6ixi2rFWgm%2BGwCd8w4myKycZzAPDelDiClgLHAyla8TNOmN6c8sffG7P16T8Xa%2FMRD9bXxyan2sHfBRrzM27N6Y2DrTUsvKNeBDrFDsLLe6svZRCRTCRwGKV99mfzIOVvZnjpMzGLrt51S9FzjZgHCCd3p6FtggVsOh93ynAmEtmMM%2BuyckGOqUB4K%2Bp0L9VFso524hYv4Dg%2F9K1FrUsInKqvcjGxxscAluyw%2FfDXP6J%2BxVmgXuHslp43kIP4AGgPYday0JehR9pOD3Otc7HtDWTl%2BwbbMqdtq%2BtKsK8vhxGVX8u1MrLNFOi%2BYw4gEuUUoT8wWZtms4BYXEkWKAxQ4wyDB1owZI9pIPPgToMP0xJO1PjbHvfCMuOR%2BtIuQWYubJHSMBJ65fg0915nm%2BB&X-Amz-Signature=f549426857ccd905ab910441d08d88f66f9097dd8fa31d8165c96dcb106dfa1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

