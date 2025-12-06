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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YRLT2X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDIoHz%2F0tIN9Dib%2BvcR6y5bQGrv9qV1QWatX2uGTmOqAiBxhY7QjVRsM964BXHl2ZnRhZaMRzTSriRR7YW0Y7B5%2Fir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMmotHezUzS5i4NibTKtwDHC3A4rp6THf%2FF%2B2Ra47V%2B%2FKmQQcJwScpR5%2F%2FHcUZWZ28WxNOZ6RA6ZkdBExIKrXZekeccCJfJzTSEmkT1%2FH5dPgLl9US7jFBZOVzAVXHP7Z8RIUI5LSwF94EWhB5g6rvRrg5T4PXQ2Cll2s3%2FuDPI9bpKTFCprWz%2Bnn9d%2BJYkY27X1c94L%2Fu5YvNknMeP6ITf8aTMLL1MrjLHX0zpwtIfgU8VPVDa823uq813Hi0zUhPT7OXJY8AquOKotA9s4K2xvH9EaAV3sO5ZPFYjZ43oNBtJgr%2BsmxZOiGdlEtqQUjprIbSMUvdVfy6KYuIUFV%2Bf4FcJzsxCZPwuAaM2AAPr4ygsPVMmkLPuLt%2BObXyVXMoJYNZerCx57o0byyPefAG1fvzNaUXsZFSkrxzpjcobrm8YXkBswTBzF9PU1Y7vsrMmdg16T3AzBaP%2BPTAdj6VwCqfABmwEWa%2F4xbiSRuGm4chdPWFx59A7n%2Bwzl6w2W4YIyLn8%2F8FQTH4LgWOTHrl%2FsCEnT%2B5jKRgaVRX5DNrUjDE8fJVKd%2F8wws%2FiazpUYvXamzzbTQ6YDF1R8KP0W6jGXuUPCU1G9wQs%2BdcMpxyjCNIvejuZuNlP8QNm3ZhllY1QXAJK4tKUscyaSYwisrRyQY6pgEFpKeTs5XUKr4YcSODtXAP3WAbD9l3ZkWC06b%2BZhSmxiwVNiW%2BLWzY%2FYXIrnkN%2FeMNtSwtyJahSkPPRTq8r5TIxhryRrVeUdyIHsfaFDqLID%2FiE7tHEANU3GQU%2BoR%2FYRugOGJOwiVqtuD04clVKeghOElVWGyJJ0jGcVGdZ5cUtgmilrMGiUl%2B%2BusmH86G0KLkgvB9I4StKpX%2FfJEJ6lf1sxFfgX8%2F&X-Amz-Signature=bde7ec2fd8a6e57d935849dde38fe518a6e02b742dac8d8a2214103e2a073e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7SFC4C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7BCgrobMSQvTUjCr5FONF%2FXeVjMD8avKr5GbC2YqeHAiEA%2BkcTmXITJKLsq6kjf1DRSki8H8tkl69xjmyJnRCRl0cq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMAJDG79WWhidUA6rSrcA7zSDSh18vyZyrXiYEG24Twr7ZQlMck%2FO8HA98SopB%2FNLxqJYRT%2BKMgud4BhexG3CoLMInXxYwW16e1GeAM9qwfZN%2FT7XAWI6n0X3JkI47Hg%2Bl%2Bitz%2FV8VBYbM1D%2BYwNyETIinOXbn6lbGOL68NsGhc2XkWQVzhUuK%2F4a8PmbDomlrI4XFv%2F03iWTiQLTI01DhZoVjZY5ZFiy8RSwcg19nyRymNfR%2BXUuplMjwOxu%2FCYN99UWuAWZ7uqrv4MXHx36mAV%2FBxszi%2FC%2BhK9wj730zTpigYw6Iq%2B93DumaArYiuqRTZypHiTGsUqMWkd7dsB57rkGN6bBw2earzQj6P8eD9dcvtUcr3NOn%2F7xTDxoX0E%2FuxVy4i%2F5gJgZ%2FrSU%2BGFUcxHB139ufUd9AILJle%2FGMxxXIV8eUyRD0YysbTNUGWri8P0SPv52z3O1Ing4%2BPUZWRk4BR%2FcmlBviogqykFIdWuWQALExk59rTdHqunodytHQRkzB77udtZ2O%2BUIJB2XMCqevV6btwM29%2FC14z%2ByOxBEUyN58iQoxKXlcn%2BkY%2FhBq4CPuJyBGkayCWKWOFcTSWrtq%2Bq4FGPZBeciC56itgqbLg5Rc2c7g63qOODGJnp4WAPvoCJZXjgCkWHMMLG0ckGOqUBZaMGaPW7bvtN8TXknILQKej8ce2qgKdXO%2FVY8TXS9AeQOmiqiqNmnViFTzOJD6NbjsablNB0nHm%2BKwAdWJw%2BFVm%2BD4ck4WTsLPaGOLy7dus2jmnS42qSUSpn1zd1HIks5gd%2BELmz7YoxssV8jmYzoLc0wzrYrltRcKaK3TTx1dGILw63CC9olTQ7Uze6rcrzL%2BYq4u4jr9D3Q%2FvciHdjdESRn6LV&X-Amz-Signature=7c56c8038bf29d05931ed0277007eb9b05e849a02210b846d9972ee7802c1c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

