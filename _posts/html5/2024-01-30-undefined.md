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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2QIVYT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAO0TT0Ce4Duw5ZpmpRC6ZzLJJ1xuWV34AXOrj2Vyna8AiBR8pBdLyOM2VA14HMriUdtdKV27RtW7y%2BGde9QI4DTCir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMApkF7K5azxsV7etYKtwD4Kuk1avyED9uMU%2FnTdwmG4wPF%2B74LjuiMNsUm81ohMKzEjD78ldnuIjNjz1Tl7GRJK8LKdJXbxUXtxgpfIGY%2BvSlHgDpHK6Kv5UYNHedMKqZvSGSYdt%2BAuH9iOTRIebvVP57C8NkJHh5zqlYRIn8bQs4%2BQ%2BQjHrDCnIx%2B01Q2GBKBhUUI%2BJrINBPrg4PM8b6Z0j57axODfl5AUlmdm%2Bqie%2F3y%2FjtXnAmKTCjAXq1B1zykJKOQZSYf0t5b0PdxPfHC1xu7JYtnxGCrAHReTR4ABBoODpMGsom7LLrhpTewKwny6uoXpQZ%2FEYEYdz9%2Feec8LrziGSNQYWYiIxM%2F50QOZpEXdXHsPgUjdpFDWUKvqOkksYuhupxK2ONvpNDdxn3aHSy1rZdcTHSAC8VgPIAAm2JYDrWdNBCUWTrGkwR9uF46k3BBaXlPjAJhBCH9Xbi0l4w6tPSXMXtEVqk4fDE78HhJqTAO2h1AMDu9YXWDqkLh65Tk0Flio%2B9lc1TmeMNLgQH1l7zTUsDztr83N6WeCFKolrPP7KY6cxOuX%2Fta1690TPHOZe2L9k4b%2BBBgA9d2VcvzHPfH2Ry3s9JS%2FhddhIaZDxF1WbmYWOKeBJCVNmiihS1ruDtAvHwYiowmunAyQY6pgH6F84ZHb6ABKC%2B3g0yKh0r3UTvbZ%2FT8guFLiDhqVuqWKjEp7Jm5xm8Bd%2F%2FUYdxc3rX%2F3PITBsGAW9o3NY3IQMEPqV%2B5ONzpKh4qeABGUfOxfM7CtReTKl4nKdKJuZqNN0%2FvVl7dDZ9VOt4HCq4cywJo%2BUoAZTC6PkB80fb3cBlxqGdElShcNoLFwjXZxiD8zdkTSgxOyZ94YDBYPb35pXAiOFWn%2FSj&X-Amz-Signature=8849c7af644486fee23bd5d14b53a65c082838e9420f03902eeadb3b2b0a71e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2OXSPLY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBefAVmxDPsb0R%2FPdNQaJFbF8Ivnk1E4V14ih8jH5tnnAiEA2lZ1BxqQrsVU3Hvx1M0ZzOI%2BibjKcMxUfSWogw94ZEIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCv%2BeKXoSH4Twq4mwSrcAzMd5VAgebAiDKWUn%2BeYC9di1C%2BcKu5RXe2QpwLbD%2FJbCJx%2BnCCCmab7wbdIyyzKzpgyd%2BjL1ocmGbICTs69HhE1i%2FfZzDiC%2F14qgckLb27M2qgtfoy8ijfYJ38jMdA55OOeH2TWZp7SvBmxJN3q7fndtXVc22ur2GJbpikn8dRsO5AF24geL%2B%2BEDgIskIM24unmBK3tqCLkjU65J7Ej3rHqJPJUf2pC9NX%2BYAnDjwmsapeUGKbmh%2FqqA%2FxUZQTheu3yKgbR%2FYJv0tnIEkN7nnr6ksI0dA8Vo5eK5FGBzAdSeL7UB2Gu%2FfcYpqWUjBDrN5n37VmMQ%2F54BtSnBtw0H4fBGzfdn3I1%2FICp8WTlD0kAaJrq0kNWZGvhCxQuRfZ%2BlOEMvacNETT8hbjV60tEGRT30y%2FcWOiMBhodxy1iI3KGBRQXGwkjFOMasABrHAi20yx2OI%2FzxWzC575FdZVI638tJkc0m4gKV6WGQz0JcxxVKICmfft1GMuIvBnvvq64KvtsT%2BSXg%2FJXh8GONA2nqtVorwzR7XFIXba%2Fc0E1jg%2BQe55SIVaijMPKp9cSMwNQbq%2FKSliFS1VchJvEUNFWHxleKEF2O3ECTO0q%2FobNr53SjdHU2TwXYeA4UslfMMbpwMkGOqUB%2FUC8kunUvFADP31%2FI5dPb591SfAR8yjSdTZiU51XpsoBRG9kD8iugkEoiR2iHk%2BcBCblMrIj2htEVK%2B0VwHTwfhQFA8%2FQkamI3FHZyktYthRD17oPCRBucMquMB8USqIIir5jVOUkDdpQNtaWaq5T%2FwO7qUYbXCYsm0ALijZvUHqNEX10%2FSJFZR4ipXFtY9K7%2FSsYK3%2FIp%2BaTWZ8rfs0Qm7nLFsu&X-Amz-Signature=4f7ce976ca9f75c7368cf50838c542a5f29d9dd55f015f5a79f34063f17f7cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

