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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2KRSVO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLVWD9LHPU7hFaQDrulJnshRhdHmmb03yG12AY3C9TFgIhAOuM1X0MBOwab%2Fd0nn3QVqX4uF%2B5fmdQfArJAKzTXRUNKv8DCE8QABoMNjM3NDIzMTgzODA1IgwehgPolcSxxJ%2FVdZ0q3API4tyDT3e%2BjDrKL8R%2B6%2BW9RQ8PG%2FNS%2BKiDVX8FwOtvf9e2gDF4%2BGflVPHYjX0GNcGlN5aMVYQ2fSxhxCI%2FiF%2FA9UkNmPoAxKGC9hRdPlCcEQPLj6l0HfDRxBmieFq%2Fpw8QW0DF7QMrGvZXLZFCw%2FpNT3TQ4%2FHaymePDSARrih1MuhB5VZP6h9ZJ5VL0p98DVdNYVBvyrmBLaQw2xEt6vHkIIf7KyvjBuHRvNAXVMJL1bdYp39kV%2F7j3Cl%2BmM%2BCwNiKSjPvEvQHCrd7QTqGXCmgPositttHtvZWEeKkZHCfBbMD5YTrKRIYXdYy3%2FhEeI7%2BALGjH0Lixsm3TLc1jpCNBgtzoKzeQoqn5RTnRTvCWwhCXZC6uJTBIrzzjW2IAanNX%2Fxc%2BbD8cpCG0J3Cef6ZSk7mNuKrx6LRKLHRcfDuw5geQDrO1mLTOU8p2U%2BT2iM1Fcmi8iLCoeElNhWBCsIZw3orsCbVbEjPkEslTy8qhMBll1Yopv%2BFfV8Q4kHILEKTGW3K17auIB5ShEiAUCwSs8QpATKTGiiUQEg2JiFdH%2Fpm9AOQ16D3HMcZ4M35z%2Bacz34gKha5FCoYtYADcPwzkLk%2BHzyO1d%2BEawVrBsoWiqL7Z0piBUhMH83MXzCojMjJBjqkAaWfOemP7u5KJJ4H7%2FZqc4If401Hywvo0ssT5T5T6jEaBaZePdUPG%2FiRnItbOQTA5RWHPTUCnJOl96V6%2F%2F0KDrZT8YhT7VocHOcl2CNc2vetm8Tt2gKFVbDRjmTA2QuttZ%2Bbpqs8y4SHcuKTy8lhdNnZxWJZPw3F8xAheMKyPsNvNgdBabs6Av34RAI5WpSnkacA93AWE1tatN7qO%2BzVj%2BFEbESz&X-Amz-Signature=7e166a253fee951e8104dd9c17862f76f3fa33cad069c6f54d824842cac255b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMMOG4E2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtr3cblOs6ScJVT3ydhTDPDCjw1TDPGVno1q4o2ZuG2AiAFXUUUlG4764Y8IU89EtX2EExY2%2FgN0V9hc7okCjOTASr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMUgCQws9N28vsjWbkKtwD1PjaLXUnLAfjr0qPJJ%2BSIFBh%2BKCedl9uhzbxs0A1NFJxnV%2Fv2AZ6o5dBHL67Ai9Aaud4ppIJWyNnMz%2B9DWgjPeH38cd7JCntc0iVmzqBMR%2Bf3%2BhEnmSVsNaa%2BgqgELCoKER%2FEvvNZBgfHiGN1mTp2m7%2BbzaEj4Pe2TVfODtfoIZmvsab3TuuI5pmkiFJKv7fRIR%2FOC2imyVAddyVeswH2k6PldKdO6RKSd18lut%2Fm55Dhd3ah7p%2F1CIZ1harC%2BFy5bkr2sIhUS4%2BPnUSEmveRfu2TljskWid6ejmywJfFLVd6hhS%2B4yvUCo7d724ZYcUssb6rBZlxUcUPdHeMJqOZo3xkBQbePFg21xUM9ao96vWUPSw0KDtGkuiUL6Y2cLFSiwl6gCnSVRS%2FVVLj1C8ptX1tmYMrCL5kuiBOLPtl%2FJmAU%2Bmb1Az0DFmwsxmpYiZ%2BDBV013kZ63rbl9EhjPK9AbeeS3aCXbN8IwUFUsbAHAhQnGf5VPQnCnFH8l4HspGVdDdVPUTLyIz7ayJ7HU9iQpmq48eE73T%2BtC4nXjd5KhrDOJe%2FgtKmZVj%2Bz0Cp0%2Bx6vLS%2BD8mXWyhlU6HKSXD75PGHRrsTVBlwcNIXJzyEPzuuTSMJgy8EZSuP0Iw3ozIyQY6pgGrNiKO2H1WQydLe2aW66YChXE9%2FJVh6mtcvRyD3bRgjvJlJmy%2B9Utp1Szy3sZwFkFCZ8SI7TJ%2F8ePvOEciNtyxdr1iQJfPtrDXy2JhGwL2l7UIONuJ0YlQfHR%2F1BYCGbxn9AJPc33b5V5gNgdF5pEgifjvLK1ahaLtvFvcE67RWr%2FWgvzYcNSxErU%2FC4uAgFHCRJbtf0N4Syb8LVylnYe2tQ%2Bry24e&X-Amz-Signature=c8deb08975cd575fc8d81a2e35921d7fbfa221cdd3cda0907e1402ffd20570f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

