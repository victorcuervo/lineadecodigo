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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUC4QX2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXB%2FhysIYU5CsGPNWrwpcuNOFJMoVsDys9btzqNvwCYAiEAwBKWq3Vu7%2BRe9eKmavXh%2FPiLhBO7rl%2Bi8wNKxTloZMEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6%2FBFpkIODD7h5aYSrcA9IegPqhEK6Bw3oIlvkB%2B3FDFVL39xfSGdZMUB0yGTs8SFTVdYmMctRPYpwLdT%2FQph9D3x8abMBczlTcsoxkCVx1%2BEkkUq5odLlMAy65mNGaaxVS0DUh6p8nR4Md2rr4OgEJ54%2B7Ami2BnS6qRoR1UrAaxJ7t2P7z9vRAZ1c5QPDvBizPi1vMXflUAo8fbGoeY3N6FQDNoZ%2BaRdEr9IyY5ItS1zQ0U7mmqy1qEUEd%2BJgpbwdGb%2BFORKNT3DN084Oo65NeNihSxNh73Q1FSfuurkOpSZVlKB5RXkV2OsspRh5AzHuX0FUDpQeOHY%2FHhqBxHOUALzJZDPJ98swVoCQyaVlHawgEMJ81cU91eI4I%2FvzcWwRP%2B%2F%2FP9L3NHb9rmCP63SxNOA6Kn6hcvrUYTpj8GYoyDlQGOjMaBQsMGakyU5vp7s1s%2Frht%2FZmfEEWj%2BsElZ36OExlBHT6DNe%2Ffh0gVKOcmHUAkbQISzAv46SOa%2Bw41zq8NIaxfVJkbZVncgduSdulVEmqVOzh6GVP9gOUBKtop1%2FtQpQWQ9t%2BBzXf6qTSmTkX9uJdZ1Bz8E%2F6oQAoU2HcQn5spa8G4o%2BAOcEninjkUZcGusIP%2BtraW5SdU5s2vFIfx7oV3ZfDGOLlMNvp3ckGOqUBBH0dadMs3Ly5t6F7mAMUI5qlXNPlUnvLsp1Jc%2FQZCWbxn0Hqgxji4FseYohDnNYy5CtU72aHRls1D9nq7QLIN7Gjsjb4Ej%2FO8b4V9K53031e1o3je%2B%2FgdcrM9BMSGdpX86pdkzSGtV27ry6%2Bo%2FuiS6vgzSpV%2FEcytap%2BhiQ7f8t9yV3haFOM0%2BO4LYz8fnQTa8gFJfO7mAsI9UFLrm475zpYCkjm&X-Amz-Signature=51896688d7756581116b8a4979c656a1eeaf24e9fb1160e0fd7bd12d6374cc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CV5CX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUon7TRvbSEr85FMRAArs8QIVzT5CDbtBhhX%2B9Kvl5pAiBFvNAmXia9iAEKd4MTcjuJq5%2FPDB5okG5pE5EEtd4pcCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQeWgFbb%2BGez%2BjS7cKtwD%2FI4VYrTRFlw2iFfIYZqd17SsD767BCGNhXkeeY%2FvqtGG1Iu4FmrjY96riQB5gRYnVikDqkCh5JRnMKpB1n4Er8FsH3WdHZJz7PggSIUTuqrkCeLbC839v49XnqRcxig4TuejR2Fbq1T%2BKtECDHkyjOdCVan9GgQOw%2BBvfZtjBSxl74jcu%2Bri%2FJIfG5nT%2FGUG%2Bfx6Sdm8CLFTW4cUeKOZmKeQdy3Q52cWFU1%2BhpyL1cvewXFJbCi4J2LRKiw9zez3%2B9gRb4Ot%2FO7tL99m1Y2UEsrldSKGKEX3F6i3JwDzbVCbc07NFRRInyvqS56kSaOd3%2BVtwq5t39vKDw8%2B9L1Wm%2FAB6pl8FWIyp3rJEMhyy%2FuqVUGOAcKfV4nrrBNGmMlHD0zOs1Tw1UvR9ApZ0MOKq7Ouyt97OEbyu%2F9WesNhQAQTqa6xoLOWcPYFCmvCLiHpiZifLTlOST%2FPfp1n60HmBjMHalfG7BYDzVjCFHUXjlfS9OmgwYNYamqVG39LklPEw9LWuFZwsmGfKKFA8Ge1t9Hsim7zWWqz%2BwPuGmd6SSc6RX5s%2FZ5awpPv11OXk5%2FSOWNZlVADVk26WRIaxTAD31JhXetK%2FJMQMYPCn%2BFR%2FJkUk%2BUDRBCCDfjyw3IwgendyQY6pgHDy7TQF6KLcsgqYgstZfMIsd2uGQ2nEAOrnICoXFG6NVvQh4iMN5G%2BvQj9dpo06K5lOGKnjwlA68bx%2BQ2BOBK%2BZG4MT6RpFv5Ur3hc68m6LlNW9SgaMsDIpAnL9h%2BNlgFxAywvC8VxaXDWSfsASYBl3xnZbQgfUCe7R8kYaGH1hOMtzmLjADip8lGrewBlDGsHAdQROBc8tzDlaDb84lIInNveDUGL&X-Amz-Signature=306f2a79bc42190c880279b944ae7e355bb1d72e2f24e5280fbd6b7608be01dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

