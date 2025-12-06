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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAHVTTGU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJbOxHzxvpRBZx3QyLKf7B3CsOx1lnD%2FRfYy2cFebggIgB2%2FPtx2dAzACcRupjg7xuFtkKI%2F5pPAqlw1XzTBHqK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOefSyJyzNivCf0nPCrcA3eex97YEOCtyqMxvjqSwJhehylaXdrGY7GRajVrdo0NB7oirQjgSWKSmpiF%2F2UwRdY3WQIy7pk%2BlWEtHsm8bv37oRa%2BHO4yEYFFw68pySFwHEMCvkmYuf3koreNVS5%2FreuGAMYMUMWmaqMa1vP8Hjbu9oJiQxaLBtvW2XkO4nAifx6YY1UaJm%2BeDHiQhbaoKbVCV3pmOuoe9yusEzlQIGcYOti63M7ZHfG66%2FZ%2BaHSou6XO%2BOi1Tbv8hr1CIpyn%2B1Mk1IYi684UQGZG0jb8BdCim4UXFWyOd%2B3Nhumt0WisSF9JMsy01mruRc0q%2Bnb6gBUqvt0mcjumWn%2B0NJPmE5VdUnpYCq0ztSK%2FLKUfeMECj9vFoptnBaFCWmtOgeMgdECRUdosRT7DCqIinVEoxD%2Be7ekJc4KrsXyDC71oqmMtfWEUUm2XW42oerefVs8mtJu8ipj%2FIO7yayh62Zr7K0QfiugRJGjMJAdRDoJfr4X%2BsqYkXEZpSrrnpaj5xE3NAw85Y%2FHuJuwbv0W%2B2jFA7nNaebejITcK37VQr3s4JdWMy8qvAG2GSnigGq2knPTkc5NQQMF%2BczUjGpE83sb6K3cR2cLTEW2krnNxk1jyE0nQfAJZQp0tasGZuZ7jMN7H0ckGOqUBcxUETaNUEILsrP6vSA4Ugt5pBHOGJ29ZVg8tPlOpITm6ut9HTFFpsemG%2FxK1sP%2BQHlrJ%2B7BZkk9xO1B6WRSyD9aSLIZwJ8aL%2B6SH4u%2BYT5gxnIHQIc4bFY28P6F2Q0XNhSDARdL4oAukP5lXRlUMW6zR9ifWvL2IaYuqBUpY5loTkyLNw9EeP37k6UD2Kh5%2FWwAxNYgdKqqL%2B15d2OHxQ%2FbpSKag&X-Amz-Signature=49190702116d28c09599fecaeda5a398218839dbfb0dc7eeb14247cfb228c809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJTRYWY4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnQz8Rsv5Zfiglkr%2F6YohHQJBaZwSqzcuJEjdzfcA6OAiEAxrDwislB7N3ZkLcIGqICvcL%2BBQm8jPIo8tPFEMAWyYAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOYukM82gSwKBpaamCrcA7lnpYdfu7dtDJ23dhpINDcLr6eqXGZPK%2BhlpP3s3%2FsqGF9OZ8x16GPi0tkTQYTbp7Z405GW7HhWZiwZ4UK9WnQg8l12HAgIyTW4ZwvNh7EqXKYpyAi3RbQNASVYS3f8SC4QcuPZN5%2FpuuAc4NaM26hCUNPu0p9MVHetK1LH1Y%2FIfLWF0kGOtiBAi9P9jMUdRd4%2FqM49FTG1u6ckol%2B1JCp2TLFPqCmQM2MvWgi0P4XoglKdqL1bJoXRnRvBuz9lffkrS6cdCtMWE%2Flrf28x1HsKVFYVFtpZM0BsHbhR57NPv7naUS79fhyvlpxT%2Be9YNKcpVK4CoxRTVUbHECsugpRqyjjUwa90hCu718A%2FLFG9E%2BEZCQYlpDUjJPk1hfahYXNS%2B65KZkXzUTTxWuFIHq1R12fewYp1Do3vArxhvwMG4Pb5%2FgAScMGvffjQKepgJxJZEq5l13NMbmXiC5Lirz72gDEVQeQMIhlnVL395vc5q0T76LGHvOj3OEQ3eU6%2FZmnUxSAxbvWe9O5Ct5Sod1ciaklr2AgwGFZFRC7jlAi6NmAZLS%2BKLBIImPDDjALmlijKD0mSGKs6L58MJfydkESSQLH5%2FGcxRyFYNyju3%2B8hL8VNViydAJh23Va8MI7G0ckGOqUByy0CvLBeYBOdvAniiABpNgvCbvfRzzBG5pQONmZcfVvEaw%2FDyzsaAThDSjmup1s8HbAEU1Z06wDI8VcgpaDzVvZFkS8oMOwjdfcD15yiEb5CxuGOV%2BjqkZCjAnVyEU36wxcT8%2FPcB7uuexMBHkrqB7zAvTrnIlgd3bwifPc38dFGIPrBUSl4rEOMrl%2FNc36exUpyH16rSljZLbWX3I9Uk3H94oWn&X-Amz-Signature=7b459851097658c96f62ee6085c86e2c7fec99577d20713c9c91ac3c3ee18fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

