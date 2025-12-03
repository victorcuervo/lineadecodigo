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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X7CFYKJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDrrZIBcripZm9OcQiM6jFds1YDvO8Mt9MLlsLR%2FQKigQIgOJVir%2FagG3hc9edTRzj1XUGsdog4p9tY8l%2FrQI9k1wMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEGZy35AsaCnIV1BdCrcA0jVAnNtLhuVf23OEO2P3NJmofLhUkEP7gmm2%2Fc%2BDorJLin2trkLhrP335vsR8fs3PKWxB3DnDGwdQfqy2UxGPKB0T2LthWM0%2BBQAGs4Q806BB4tJVBjECy2FsfunVEZDNlP8MplGfj%2F%2BQeajd8704mf74scz7V%2Fsv%2Bvz7t6ZM3swEIsntvVsO1ztJjjRV0SKMeU8fWk9GQTyuUzyzfohM3wVSe%2FkMyFeH%2FKmmuYJWtafqW5kY4C6%2BwSdjyR2v%2Fq9Yhb52UvcDrtywQgYX6h%2BcS0Ud2g5DhahQHBx8MeUUbcCrVkVEVkgE9MUpuhhHnU54vFk9AZc7Db6AX2cnjOlUo0IB4KYPXLVmES7wIoVfUg0J%2B95Q1yCpAoyxp27DGJg%2F9I4Y3Vq%2FZACqpvBODNX9gl181WyrsA%2BrLcQkL0vykCdGuvnmjeny9iwX5YHnbU3yi5jLCM4P5nVq1HjY3sDqJQfb68g4xM60jrUoR9GHtlxE1ejgCiFEy6N27FOiIMgjClFdHnn1pRY4Sc9BHx4jtJ6Nl4WaT4pJwGiLK%2Fnecku%2F0r9LVLzcG7Gga6M8r7aT%2BbbUSq8b9jJSs9jgHl3Rv1WtsfNdkR03WOdA4ULyz9BH%2BPhexeMia%2Fl9KoMOT2v8kGOqUB8t55TGUgbaIQ7MCCjwrK6XEUhgkuaTERUo0Cj4x%2FbgjcKfBcMAiqY4WiVXflXplf3dBo1ZySfRMt3HKzOg76Ytmi47IFru9D1IOPw%2Bb8uqgEDWlgY7t2hHpQpm%2FA48zOAqDjU8E90GyKjcVtf2hpjwsq0%2Fz9YsGnfCDFfXghPUlE1P8gEg8LksLj36lQCmOnLJPMM5Vn%2BCzKFnSTa6Ns8tU%2BxoIJ&X-Amz-Signature=df5d652cec61b2bcaa155a55a115d0579d76f3059a3033bc4478e9a649e3aebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7POYPZJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDC6lSs8SC9tqmyg32rpH34lcP1u%2BfbuG8zawOUgnQA2AIgGb7%2FO6YjSLr0xmvtwWIAKjb%2B5rxTjMiVuASr1ew%2FVgIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDATzeY3Oyi2pf0w0XSrcA0%2Bom2Az2RMHeC2k864wacJ2UC4UG9aheydW58079n7017czt%2FBswz6tiuxrd%2BKzssOg9p6fxFOPJ9d7dBwoYzH5WpUmA0dxke15AqM6%2BykRw3qnMzJ5V1P1M9wIdkPjhp%2B4bwo0pz10%2BNKvxv2rOrSpa%2FDlB1uygAFdhiSMm2dXw3B2VFOMjIrKbSDkdTT%2FE%2F%2FKntyTwf5sOKOMrnW5uyXF7Ww1fGvvAfGSA3jfeGniZUgysL02CwKowmZKmhLsLgYPzkl%2Fs17yxjaC7jztBiN01HAF1IoiQblqaO3IZR1tUjDIG4jjHvUc0dTBtVZDBQhm3ZO62SHtg11eEGYcy6WLJZuimKJByYe9GdLKG49IudoLaODAOd%2BGH4T1r1k%2BP4L8sb2pe0%2FhPzyZlLIflw47fRGn6rHbY6TMwaMqEjrh1a8j4oO1FaszLILxvcbEQLfBU0g4BC5YXzZQUnjw%2FGEaYrXjxjgFAxuvDSzk7n11%2FoG8KjHjjzRQ2ZCSSUtXGQxb9wnaq0ngQDqvXwIko6W1Sx40FVF4PONg8kMJ7lXrmXAEO9c2H3hr7lVdLUAzEp3IP%2FzIcq7423WbGwAY1K801IsIUC%2FTYbt2D3M456bUSi6Ieo3%2BsqgeQf%2B%2BMMv1v8kGOqUBEnjgpEaJl7TSif7iwknDQGydN9jlr2gMKHiyva8Q%2BnOPi1HTgpxNcHH5DtBTI40CN1iHFJ%2BBoXPTD7qkPA1QaLsqHKqcNRYe%2FMd%2Fbcuv23e2OIWBN5O8ov9F5JNPQ9yCTvUTzfy5tDpMYf%2Bs41rGmIMlqvwttdHyaZgpTMrhUahAepMVUmKOD%2FyF%2FY79NbnIPVDEAcWIno62q5xScgy2947mycZy&X-Amz-Signature=1c8ab511db3a42538b64c3d51bdfd8bfd46ec57bfe65de8f81814cb100a4c106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

