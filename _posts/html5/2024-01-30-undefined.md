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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIAEQ7KT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE2sBObkegFmWQIU3Eioh%2FStuLaBX%2FFwtkR9tyefxi9AAiEAlZhGEIzV5ss4H1Uy%2FIu0ZtyWwO9gKg7UapDGVz6MNEoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKj%2FkeMmv%2F7u0nw35yrcA7ZFVD89vbx7yJkZtR1W%2F%2FrPG9cH%2BnaGvTb0XaLGwBRhhBQSOtT%2B7LwxfUFlD1NTmbcBJeg9yh1ozYDK3nUVbVWm6xPyKl87qXmpDFEqsHn8GGDbusClmYnraXNFBZ49pdAeZCXBPFneTtNnHyNgO%2B378A50kXp%2FkCsBLyMPQLFwPWIFrQuJGyaij%2BASaT9ddSxX0So7Cojm%2BO8CHCAcfrshVx94V4%2FOZ6%2BxWf%2Bpplyb7Wcqep%2Fj3nR2DsWxQ1hIrtKO6SS0cvS2sGoR9iY4o1QIvG5pPxy31tCRpK%2Fp8Vsj6KxCT7HCli1dtJt2vk3WPVEk7xWpVgrCRqzSA9XDHpQ0VgZk8Nr9K4OgHDflw7Ev4tYc5mhejF%2FNnsPkmmuNplG3QVaKM30Wd0gBKRHpap8SuF4b6Xpc9MOYOBIWdgLUHZlMfqTAA%2BeOtHIzfXhIK6qEV%2FBnzoWQWfHvZvr6rufGgzGcf02eMDCLPhiXA4iOnkN8Zr4b0%2FEIx50hF7V9Gvi824RdGrVB5oSD%2BE%2B3VAXMZkZd%2BiPA9VuYFFFE2M75otlSpQE7bzScL00tvGex86pxMxTrquIuCAE5wYMwbOu%2F2CNcianFL0cnZJ0kCMmlBYNmYsEb1PyXJmapMKK4v8kGOqUBxwdJkZYueAlP5w2UwIcDNgUZACH%2BNhqLXUh4EfZL2VvTY51Q1jTe7XoXqyMPk6orbDJVcit6IZELm%2B68aa7gmENGmXz18ukXEY64dyz%2FgfWKdJCrwl1rHPqb8g%2BI2zThc7nI8WTO21dYBYzEH87R6qqbrIqOPiRuU85TN890N07P867mNGfW32bwPHorbL1SN1fmktZ1uZ63z7mMuw%2BjcLhWLnG7&X-Amz-Signature=bf0be26d428f17384b9a89468fe8a6f3aca67bd3d542a0986b00338e4ac259df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHWVEX4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDOO6BH7sB9xWcgSiFb9u%2BdRJ%2B%2FJikfPZoE8%2FPffEBUtAIgfhjamyQ4MDdg42Ecaq2C9vJk%2BK6ncUBJ2jhnceMhffAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDM%2BXaHurnN2k8qvYiyrcAxrI5XYXP9jAYN8lBN1zxptbBigBM%2BXTOBnW3gaV7XV9owAPWlcgz2ImHwbVrdBzTNEN9qHI%2FZzYXVLRP9Wf4uk%2FEJLczJpA7WFQQ4zsWYVmfsNrAiCPBHBkTo%2BNNTolOk5afDUlcZFcNJ3h3RnoU9jcbsEZ2EOEgcCSRJGaFFJ3hl9CsSiRAazN5ozgNhN6Yapad75XIvWALVPYk8pT2dp%2BsTMtKNnK43O4QwZDtE19en1qiIKY%2Bhr6i6R6zaxhdORunbw0THJgjklVjke4zA%2Bp8pCRxLDX4etXY0aq38JhVOqnPZVtBuGtzLAmGJvYHcbgKv0Qrsjj1A8ZqSImNar9OXL9mff76Bi99oT7tAaIYWrW1dPnfHajLYaxAhS86lfdO9w0dcpYpiUAfuZ64u48piFwdE0oWV16jUEvjXpNLJ7C4R4AUoB87753KKPJd91Ig%2FVRYM6NYliVbsI4dFbUUvLnUgwDbJNwtwlS%2BM20MG%2FYej4IFw0pEJ%2BYKdCHVOSpVCUlrAGUkh0ckC22PvBYaz6%2Bmlhqvk2rEcJwvxbdZ8nhhCM30HbcP6N6gFp7LUwJZUC83L%2BgPKo14p8cphqgMpodNQ6Qg%2BBpEsiliIhLBWVAc8Nx9zP6GCzWMLS4v8kGOqUBcTbHe0DE7VJJWFDXubU8jOWrFg8NQJQ3g%2FgThP3h5UeVwTYCyMIubLc10PTryxeGyigKJCc8EDWF00Nxw2t49SGdFOZHJNt2bvbP90wSkK7iwG%2FplLGTsUn2anhXdW2%2FtxMXkPVcN5fZzhO0pd7tPdKjiuMptW7SdlY0WPqJu8QzP5Esn0%2BOJrptKDM77JBP0ZeSabkGdFYtLyDAzAcVmNdQdeZU&X-Amz-Signature=e1a736527d422135be4696abad9302ea7039d05832d0dc6a885e66431cc4cdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

