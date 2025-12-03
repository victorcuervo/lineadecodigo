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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICRX42G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDN0cbgy5pO4n9rxiBQeUBLQ1%2FKLco%2F2PaVD2cEbYGOGAiAQQ1b4za9iNt3wqGDs8uoGvYjpu7fdQqT38Geghp22%2Bir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMNdBDukbcAfIRaQYCKtwDgGJY8ugWK42L8%2FU5sK54AwLzwT7bORs2RZeCkZXPmBoW6jNMseA%2FIlPyq8H02361iMEhBmMZvewYpzNnYBYjbivKmMBYomJT874sMOa6hOHSsdUffF47KSQSAsdRJvnHPyj5XUJIvftghmYtwoppdF1tpPZdFBGKFrE4i1iknT0n0EmRB0uZmki7RgVt%2BNl9zTxYJr5ATzPe%2BUkqIyzwDgZdGR8zCjPTX9%2BI4zv4BKONW4BFocyP%2Bg2oGNe2bSHiTad1btxro8WT2OnKo%2BZSOfMvw5Tvt6DWjRa9Dow8wALeOUl%2FNmy9ibhbt6C2GWgNMI6hRSpngMrr5xIXA%2BAt8q%2BM44x4x9%2BwSECq8RAFEj57swGuuXdzzLq19S13l%2BcLAm9ONJbJjrvEThku4U3G63NqaEfQ48WViTQZdviY51zIRp8nnmchd0QDcK18Lx316JnOH%2BYzYIDkG6B4o22pLzmQz1tI2mQ%2BN4fhwsouv9AIXfu4VVNvbNV1dD5zblH9UyJyOArgRu4XA4RTwOTIwBLFrEpGfXnhP0KtNv3EJegdSx14jgJ7PQGlgXKun7RzoU8gAuEKLubEGKJrQ14ulYKyxwrMT6vaQbNEVOHKxWxhgHoKD4f%2BMPfP6b0wyPa%2FyQY6pgFFMD082H0hKPxhMYNaCA0QNqps9%2BJfiiTy1jucF8NGnf68hyzf3sV%2FobG8gCmJBygGV%2FfX1S7M4zifGDUSGPYTG5uwwXjdeMdjowoMc%2BHRWof1HAkb4XMztxzc%2BM2M4%2FP2Xm0%2FfuphGau6ITIVB1mmbyPsLCJPuTNpB3OEGDw0hk1D1Kz%2BLjnZJagn3VgGn%2Fqtu8GPxWXyaqj3l4NG7fhNaNygwdI7&X-Amz-Signature=48ef323351e0e53d87c91944b9e125553ee21a7b7e22879effb9714648045c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWICZWSX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBiBaNpYTfVNk9Ya22ZIDf2RExaXP3G2EqXipaQFznIMAiEA4xGhti1AXZUYx2hrva8bWnb3paAh7AkvyGsdcm9IaU0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEnL%2FOpJOTPMvvDIqircAyU%2FBLt9UgqzeHl08Kj2WyAJbW6KVIXYL1tDyAiLMDMF%2FjsWmvAN6jnNrhDRUkyQiunr5fBBi9yvIxYFiBBeEhGK1LMYCdaKsdkC2Qd4zWFXTBMCzMXVjQz49srL7Hapt9gSrvY8E48EwLRiYPMAi3Uzc08LmwviLyn3BvI5N3dMqFKMgbURcuzndzKXGLgOmTuQK6lnfhPMK0OJs3ji5o4SO6VfKT%2B%2B%2BO%2B4%2BgUVbYRFii9xCRJUOntRW0ucuAnmbSCn82mHRSqAiGKZwZa6%2FrFvTyWFiJFZveNZQTpMy7P11nbwils%2F9EDXsMM2p1lEx86gJjY8xEPtCsq%2BIta1s0zYVctcYuS5Ed25NvEyZWjn65Orxa6hLn1vejfL7R9f5ScZE%2FhaC48CopuVE0%2B5h0%2F0HiqJE7ji822GW9on5hcsgeciQ9wFumoZADgAufhdJeS0uCxKgRN6a5RZyg8fZduZb8BaNcgbFAgg2w5Z9MhUKm%2BjnjmBSVqmhZ6kcr5hmo23v0JKJsDb%2F4xLa4pbq9NJ%2FL5k9f1wrtellQUyc3%2BlFIfo4YFIUZjBFUoA59dNh2kvVWrrPxD5wuR9i91AR7fbg19Fh%2FNNccbuihVJyDDBS9weANzeXTGFpW7%2FML%2F1v8kGOqUBDxXMnLnnwra9dpBcrCBV5AIkN1fW2Q2h9ghkIxRV%2F0qE3B2Fzcasq6yCCThhwrxCjWzKIv9Lak9sMznb91Rw7V6Y5Lqg%2B5jnxa40UkvkO3XhE0F1DKDroOYyJssRM2aY8hAuh4Wt%2FnsOXoQkQl8oePcPe94lJx6kOL4HdfnH1FIU8jl9ac1WL3RuxVn2HprqQx%2FnB73i5Uq0uGM%2FZTmETbkqGeZX&X-Amz-Signature=74f29f258c17f2ee2e5b6ced63761e905adcc6b1f8695e4e8267fa16fc0b7234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

