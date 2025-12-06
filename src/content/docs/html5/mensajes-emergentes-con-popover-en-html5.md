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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4MK5CSM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHkgeUs9chluHRsw2LBssbbUS7bNrdienyjoQCkLQeEgIhAP77b%2BZ3IBOerV7gINBUzphG26a9%2BmYHQVCFbwlXhTCOKv8DCHoQABoMNjM3NDIzMTgzODA1IgwtROulo2NIRy02GsMq3ANDPSyO95xFUdPRT9JSklQP7NpMdBIwi6vdZr3ylLzyXWbQ%2B1r5CCxsy4dq393qSZ5g%2F7cmrOrCv4zd7I4jlNVF%2Fk4qFeaIx%2BzKPGMf52dt43IuVToq78%2FX9eq%2FTH70HIT7zePHTnTaIW0SRugUNI%2FMilrZz2CkA0d5rLvtUnuGFLb6H3kpBkRn77p83aY4Hl8wDI4iaaEpTWB%2BRZGZL9ofGaeNs5mgbBu4TE0mYM6uCGtTXKTjGhJU%2F8bkwaBPIKFXHRGh5lmPYPdvk6vuWwKvfJ%2Bzyh1ArA6dq0NSv4fnUaJul%2FGpUGq%2BukQ%2FcVNgjmapXM3vIHHrbBt48IiwfjS%2FC8QzcGwdRt5ulGsPiakIr8SUhfwFQMEe0UXqfNPKkJg4RsEBe8CcMGh4rEpMr9r6H%2B8z9IAwzdme%2B3Gjp5cVop4gA8sdNtD8GJIfbBu9%2F0cytWdK9E%2B7iEniUIX2zEvhvwPZx5h%2BZf11dOhxA2W6TM9pVTPt8ZrB%2FC8UPC7LPHbcWcueqdRBGMHn%2BmjmBeDtg1UaIoE%2BrCs742%2FPFnUJV3NygXhkbFox0pM6Euq6jTc56onH1%2Bxc3tgUhPUUbKdYlSkLGUBQC%2BDg9R%2B9%2F3kQ8dh8jwd8NdXNuDfT%2BDCty9HJBjqkAZ9PzTp6nV1%2FkzHjc3E9XpkA3nPHa3idiQMbX%2FC1COed6iC66lN92FIQS44KxaC7svVlg%2BtQdmvd1X%2BHE5%2BZ2lfg%2F%2BljrzLLd1tavRUr%2BOPwB4oyPdizWpDVwjM9i6EaurxrFtP7lST8nHl0Rr8icBm0dzQ%2BeH47FV%2FxipKDHJxnXa0NyqZnSGXt0pMpgEdGcGqEICd6l%2FQhEnEYk%2FLFxlngGaY4&X-Amz-Signature=ea12393b552e730378a07383e45519065e24938c594d836390af7c0876574d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JDRGAZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSAf6eSQdfVjx4ibnYZzZDVR%2F41o51%2FhPoKQWMp2CcegIhAOFHpP5HcaG7e%2FB1BPgXFSk6OSQrDOBPL3WF8iZDn3LOKv8DCHoQABoMNjM3NDIzMTgzODA1Igw%2BJz2mHIBSbBl1Rm0q3AMaHBGH%2F72pe9XpD014qK41%2FvIitKEU1lPhoZ7Sq1C9sDK64zOZYGGTmiHNmPaKdh7r36HbzeIbEWjLMPIVz23bv2UF9ac8%2F7DMVDuESNs1LFKf8Ukq%2FzdZ3KK72NMNDs1QOg%2BoZSlQzbqSCgS%2F4KUnV%2FZ7QOsY4TLVtpeu3lqfSfTznpT2RSzycjgW7Rb%2FnJsTWxfUXaXa6j%2BoBTsOlXNlNo9W%2FPrRYmJo6zmzJXmzBp8IRD3%2F%2BJK1uSePO5fLZ8UaZLqVRRKOp1wCXin7%2Fmgd%2FJhUohnwhFum%2Fv8dgRGtUUaGobkYxYJ6NX%2B2lFzV55FWat2GQ2Ld%2Fz7eTTO%2BnekBySSLcBmmon%2BI41AtkEUscrIbpc2jgdBEEB3gsG4mCaBQhwr2DrYzD74b46XRyPVc4%2FbnioAs1l3nVWHFn0dfvR0H%2B2pu3CH9rTa97Z7LeGjju%2FYonM3KKzkMNZDzdQaxOnek%2FukDYyJ1DYFnM1XPPXecpoZy%2F4AA3%2B9mB9a1frx9e6oFg9UErGeK5HDdjZ2wGDr1toxpyc7BGadtrgEw%2Fkzmbn%2BEBRNZohjrjJpTAh2978Kq%2FivUJiAjXFG3UUpdD%2F2PZIm6hQqgD%2FAPEIeM6zvY8B06mCHB97SFuDDmw9HJBjqkAY6yGI%2BPTGXY7nIoQB9kixsuV393iEDDDLbCvkBOEWIqXZDMZ8lEHlrvqzfVPEttwpkve%2F7aVpOBlGTmvXZkyKOZHEjTXryPp5Xchglyu%2FbiiIjsNBI3nXq8IOB6HC9vgKAuhiGxejDtI2XSjNs1%2BrLr4bRK0O%2FgNscWGOSD%2B7DaBAIwxv%2FFaDb%2BRPBZS5NhLRHaRUEm7IuRVmW6FgjECQtCimz4&X-Amz-Signature=07bc64d40c88600bbdd7c80a9abc44eef149775b414ed2b8fba5c94cc27ec0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

