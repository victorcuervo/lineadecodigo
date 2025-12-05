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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYRDXXS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH1i%2FttFDQv%2FONrysWMiVFbWnPAQw754UKPYX0sJVEjQIgTWxnKB%2F1dZ0Sak5O3BbcVrn%2FPn4hL5noTnmOKfETJfUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDC0FBQKI4J2TnCcGrSrcA7UKODzdDxdVNVYbn67DEpOhRUV%2Fzkx6zmDpQXOQhDgeDtQl8fPZgftJnyf2ungwDlfoDAZq8%2F6Ss2a4AHwkNgwca0t2FE21tDqOB4h%2B6V94ks41BrAxFGT1KVbwBspN3DyNAhSg57%2BygFV8wRGod%2F19ttN%2Bqzedcsd7Ri9z4ycW6IHWqsMx%2BAbEdIrC1fpmjLPj7CrC92wJudGttfKngGsHFOhb%2B7hmoLKT6Ib9y%2BIkeNHQ2pK2Tz1BsjFW9vOkPH4G8XBwaidnCl73bEkkXqqs9ymW9vQDKtQ49aLfw6eTBg1pKUlKRQpWWH9dXPLZfm6oSISn695cUhUweRvQrjgHtT6%2BROZZAxAH5gRRTbOF8%2FaLio8qbIYn2vvg2Xd3JqyhPiKMDUufgt9p7ggoEtJP7M2RfgjF%2FMZznBbdnyxC%2BNZTF5kGx7TjPzXJmmQXiPkIuXbgHYtR%2FHa%2B9hLd1wWd%2B2ZXrI1MkbYeZPl43GY4KYMN9jBNk9tKxHYIlJCcbTWO%2BOdtDb1A7CC3dItJcGoj4wzAKJDwNlQ0CLfs23Dktw9GTJnSufMpkhABycLLlD22NmsfCkKZJxKCwxzFZZdXqOCgXLOHr4o9qp6dq%2FJl4%2FB01%2B7%2F1sJao6ICMMKMyMkGOqUBB900NTTMUGicTW6Vz33sHdFhlAiqiFHM7xoK5tt1koqNaREj2sGb978kZrRfVMXxO62Ia%2FYPSnwZu0RZ6NG5Wd2KjhMPP12kpj0S97oWrzElNCXUASn9j%2BB7x6%2FJjweAB07s0NnQNX5p94%2Fnq5BSB7B4spZD4d1zGzW3%2FwAyIm0SEGhCq2rRJHnNnUA0TiUkDRQ6%2FsLGjdmXb%2F8PSUIt5yl7WMGU&X-Amz-Signature=c4b7284431018484ff070daff1f56575f6affac8ed43bcbb7435b2a4c3b12135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4FUIEM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5Q%2BAaOP24eNRxW1mnna7XzNpjA0J61R93SUOK%2FY1ybAiBI4IO0PCTWj6gQrjOmJplRhdkvGZ%2Bg730%2FQ5MHDDAxMCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM8YYSf54aN4uiCr3qKtwDHDrBFJoTpXWtCtFwHbzoSFCixA9jIxZ%2BxlSg64Mj6C1k71oiErGxttB6za06e225pZYZu%2BtwhL6opYM2WkND0JoPOjtyl%2Bt4vj8UsVBXKPa3gzOgoPZySDY4RqIobWTC8DdXeyKTA1dvEfzMx4ZkQUtVPWCZI2Bk6kVfB3AKPQk%2FqAJBgcmBlHNMSX2EAV7OmM5tdj3SG8BsC9BbtlrLH%2BceF7Ep9qGZG%2BcWjfok6hsCWmdt%2FyAV9BfC9pnCh3H%2BQ2noW0uJFfajDUUs8xH9z2dUNg7lkfQteYWy%2BLPTelmCOMJOTZ7tXQGXbegWz6h%2BozJOLaUEhGsTHs1M%2BufTPkz5iJxXJ1VuWQzZfWqDHF%2F%2B4Y3OleMfzadJYupMUOUyKK%2BGwxVeW7oItsZ2ufPcw%2F1FvemMhwfWlL5qCb9dm8QFnveAD%2BR2bkiNRdwy807Ka7a2IBxednfWUT6H%2BNlRn6rf1T7K4M16GSLZldkYommZo6Q0T0hqXRqdorOhMwdimrxn4HIj5SUcyfZtVlC%2FgxFYf2Ce%2FEFszd%2BJI8JkDwF4bZXTU3EFIoOlubp4%2BSBmLuBHNVFPaJocGeiV4MTPF8v0eRIXyij6ETQgXIYMMuzDD3ZOV35L4BzgkQow7YzIyQY6pgGCkhWSOQAvq9VvLTj3yZfZAPqP1pCGT8EO1lTfjjyvs514Tm2FFc5o2rizd%2BMuhuyJpCMBcDy9HzE6T5iAztAmtFltkXcmEOIsIpSDTS28eUrGTDNuCg9InzEK4%2BQqPr8QkIG0iXBZImVdwDps410Kmj9pkRGFBEr1KG%2B2%2Btq13ZgjsNOWExAVHJySGnLCNDfpvXWmbJZtRYDpsYgnT0f%2FNp43lEGO&X-Amz-Signature=403a316d14dcc38aba27d4af82e6dc4c9020e55080842f1fb420f18a08bd8fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

