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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLVZHEH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC3JLdCrAPjK83%2BnYQccBZI7JexC%2BRCOWN9tIVsKuHIdwIhAMQC4f%2FUmR6k%2BmxZzL1B2TagGW0RteyvCWl4Nn6S4yT1Kv8DCCIQABoMNjM3NDIzMTgzODA1Igx9%2BrUZ4lEdabAy4Psq3AMf4rQQ%2FNuTnx4Vz3eCHo2g5ZXIMLnFhObgrP6KbVETmLSJbh0h20kAnZfVOFFaqgRibgBPl0cec41k5UI0Ex7OB5swJuwtcBTZw2%2BpdIv2u3nidkoSAFcT%2BUhedsHQq3GIQWg80r8k9IRo%2B3IY0Ndeeov6dDTqAlQwR8GKZqZkJh5div46nl9dca%2FsSl2WtQ%2FGlKH5DPtrgQ%2FJlR6zu6B88S8259wCGID%2BEmc3pW4hj1apf4quHVeJ7V6gjBIPcEouzNLP7yFzD%2FDShm1I95jocTxJFWUZ8vGrMlPClD248dE8nxN%2BQJCHMFfRpJxcx2Gj06Hoqi%2FD%2FvnbrI3jfzYEouSdWoHLJDNt%2FSNhbC5mURzSEwmFLYrLeNJWheBR2LhcdkCwduiaxxHURpZ4RJ3RLXKa7sPsT54uomGcvgZR2VOt9psG8lMlc5GCsJvwVoDx4upZtfYnJ0%2B5C75d4wtnVgQFt3%2BApYI05KRHi4kZzc1dgcrYK5RYtLPwnoOd0S6e%2Boh%2FdD9MWRfXjuvzLid2zRkkigKYiobm2EFiI6MGUuAoaHeLIQwHBuMICKd%2BRVKP5HOOSegERMRJRFk19dNQ%2F5xLuUElRChGOfH8FwMqCUh%2FYyiQSS451e1z4DDRlL7JBjqkAed1OdfgKwHk5vGJXVYa9UwDxN8abjOaLvOdXOMTn2DeMjCddys%2BZu15%2Fev3rpEym5Dd35i30kQpmNaruYiR4Zn7o2ABQj%2Fs8i6R0XkbdN%2BtcO2H0UKLYQ8G2ZV6TDbvx%2FNDk6LZoNm8feck01eNy%2BFmHs1aV9TbpyDirEAgBmznAcxu4n5ar9%2Bx8Aovg1BUAGopyzlVSJ%2BkrRdMaHRPtEgIt%2BhD&X-Amz-Signature=fed2bd566d505cad2b6a99042446adca08ac95e7690c2c574684db7c678ac7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSWC3UQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE3pyVSKvZy8N0bmuO24ZA2GLQ%2FtAsRjAi7WefXNwhkjAiEA2ydvsDLTI%2FoZVciMBN0tjbcLQjX5jT4Yf3EUWHousnYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKeRdd6HTGMiZwGotCrcA7O69GlKKrFf8h0JMrfmysvTf99uSCubxh1LerPmPKoSKa1Fo53kuWk7cQ%2FIvAI4%2BboDiPa9f0MrpZx7MWFAcVLuzpdP%2BC4TJEqq9jTgFqlKLmjbDxW5NNukS71oQp3qUBFgc69%2F0Jp8VPwItSfV6tNrInW2HgfmX8bL3%2FhdURMsiV6dIwC7qw1tJONcVHsSTILyIo7oiCuKra5Sph9QgQr65MFRyJcRnrPKIgAZizkUXz15PxvAGav3PY0t4yujjAMCp10bd%2FeBN7rNnHA0oudDUNOYI4mWHMoDXw6iXlIJOMmnxKfQBXr51RLl6QddfnFO8wpcUlkp7%2BsYMWCfBU0gsKmt6UaPuWU4pNwPhTEt%2Fu9XFxd17C6amekgn8%2Fu1qV9Mta84heNiGkWiL7Hez0QMT6x3xHtxp81%2BepaCRdBFWEMr0hoDzZjyKOas4h0c8YXOVPloORwClvuxVmYMiiz9GOaj78IyS531ymVnsKgbfKp3ZPSt1H4%2BGuj0tCtQCGzDCUec9sqFEttrDf4Bic5jTaRWUHJtdGgXvlP0TNVG4quXcTVQ5kKYp1cH%2BtixX0RFbPqor2m00jcFFVrB7nlKTS1fAXHcdFKXt7KiWuZ2B8XKRHjR6DFjCMRMIKWvskGOqUBNsDPNwC5w45H58DmKE97ZJa35WzukwMTxfVpoFLnW%2Fg7UP6v8N0y36gdWgfjCuuBtdYFGdSWGAKlxL4xc9VPW2w9JvxhAxMDKStao2OydbBwjMkGZ9sKBtrGH0%2BTQuhOIb%2FDpZWaEmk2yqeIfYOloO2lLwZaQxFibh%2FwalLTmcSNINduCQ69jk0uB4cgDTRvmNHfgCTYEmtve3L1umE%2FEOBEX8YN&X-Amz-Signature=6e8972403f2cfaf96583bb1f8221ffecd2ce3e5ed809faf64ad3780a3894176c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

