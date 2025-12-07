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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYD2E6KX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWYXHz0NcQsWB5o65ZwoYxs1N1qbwxBcTAIWdCp4jLGAIgCYphysnKWvDIUFtHfRIqf2RdfILQGD2wJzqMf7ySBA4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGavZI6K8JBX27qzircA4EdZwdSPf0%2FQ4jb50dfD4YstF8zaTT8VSnPL2TKXugRpItmOEN1lxr6Io0CSAdoFHewHpj9kmQbS2GMHLadfVQxxigSa1OcUj0jSFsD5KFaUHD3%2Fxeirjp%2F3IJ81cDMb0sVaTlMPhjKe54%2FE1ol7h6P71RV8ypABo0Psixba4rzESpfPkK%2FxLeXcWhm%2BkVwWtzj%2FS7HfSh7tcT7JHP1QBRebzv2Z2RZqtU%2FVEqcxE5xIDezMboET7iU3aP3Id5SSc3%2F%2FB2c7oX3fRS1BVpR8AeKnUafX0xDwdMcVfgDI0XFvG4egDKGEmFoBHb3hzmLsCvmzLSaBGvlTl5L8JijsbIeQqocV2zxFjry3vebWBIUCAr6MMWM%2FN84T7YSmoZcfqURghZ0P3n3Qea6a0RceSNq%2FJxsfW87Knqf%2BuODjpyt5%2F0nuh16wHIALRmHn%2B8n8RJcbfTQDP1K8kUWWaidaKvyQAPyEf8UsWq4HsF%2FipzgSPJ1ZESZElsO7I2sCf3TPXGa0vm2LeatGnQ6kH%2FAJ5rMvCHopaSUMFZzJcHZ2tahg9%2Fj87OnymTqgIN7Isnh4qINjhPYNVn1k3ptlDaYFuBv58vWrT3epoXZRW%2FJk1SAQ%2BAJF04Kfa%2BxcLDVMPf90skGOqUBQ4beGpkEkDOq8mDHKs0VGPWayUMHLg0oaBPntwK3yxf%2FD9DBhlSR%2FT1I%2Fgq0wgzT1PbB7mzlF8fId%2FYBCrQq%2BQNPY7mv%2Bcg0smuhTCqVs9MrVgrUiCBDs8TYBy8gDzMK1CRhRVJsJ7UAEz3xNXg5lRS9OY5lZQPW7%2BnSYXOWGXfnaTFTndfA0%2BU58%2F6mu%2Fx3Clqcgh119gjiZU5Vs0rK3vgL75zI&X-Amz-Signature=ee1626b06cd715a3dbec56f677d77055b17978b680c26c357dd42c817b0c7ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U77KOOM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNQfPEojAOpojMTtyHG91RWYIvEFyx30Byl8m%2BNWyGfAiEAzifUJ2O6c74BBjIcaJFS3WmP%2B8NJ6LWMBmQNPUbV4nIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6soPsh1aPX6phQircAwopNzwv3zahI3gfiSiQo01rliK%2FxUu%2F5GEihBXGofX%2Fmg5yG8plH95ZQv2HO1u8nUn8uqrVXKxsb05pgmVHtsyS63OoxIVBdOKqZQlp1mBiNDg0Bm8z4sLQE3BwdgNeKRrchMGac3zaV96MeFJE%2BW%2FS%2BlYSMWqimayApVoKqNv09NNxKC%2BiLhMwahCosucHEYkDqgxOTIQoE0dQ3eL9WeHTlRYdIqb%2FwGgOZ662BG5aK3pFVgQ5qaNaUFbgmrusa%2Bm88b6BwsJlAraogyapdvluA3Ql1R3A1zST1lyL1MxoonVLyJ4LVSGU9dF6a1u8%2FAMi7T%2FMYGnYG%2FRDBF41t8F67YUI6OCS88AfDMSXzUq8pBRDR%2FpJyUdUEG6N1XmgDrKUrV6X%2BH9KpB7L4K3zHek4c3IzBxgtczL9iO7pF9eIzlbrw9VgNxznDHxk9nG82D9fiEcdG4pB9DeY%2BX9gjcRB85hXQ7H7wMctnVPsihDd77%2BRooffs9AFaqPDEsrGrk%2F1ZhAlWb0NEPQajSCwb%2Fq0fLJjCL33JR5bC9eFKKh1GDHqEj1yKYqd88oIYovDUXa%2FXTYV7VJuC7J9luTijFpZs4I%2Bkl2yGNOHA3R16b%2F%2FHKy3HlUBCrOdXU%2F5MPL90skGOqUBvcaTHu4w7eNQh0M47O7flmCdX4daM94cFL3qEQFnr2TOaf5VavI5%2F9oKlidmjYTqtjq4WOikw25nuarSzT3b2nPHYQKiOB7UD57jyjF5xKO1MJU4EDnNeylteC6zZjR2YqgpWrg7cxWuWrzdadsyxQPvpohvUOI1X1wXpyTQ2xBFUphYaKTFLEHf725%2FvyRWG%2Bugj67HlXnAFkUeCaXoEwH2eniR&X-Amz-Signature=5636b802c6864b17ce2c984ba3e4d9071f4954b46e9d7e83d20bbb36cf6e000a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

