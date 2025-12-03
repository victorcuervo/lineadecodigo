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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MMGCBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCPldBzMYkeaFbry2uBjQMEnoRhF7wd3TyVaSR%2B1j4NNwIhAMC1DnnuQcR5pnTJUXt8bbgyGVxuPtHklV2HWvyH4p79Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwTUlfYGgUA%2FjSXBf8q3ANVV7bZiBvmoktspsEUiwTQAK7OkHH6keZSpSeMioTkGwmiQFFRkAGrEhxuxNUNmpiYnM%2BLgCOymT7miK68KbC%2FIWjsYzDrzYN4m1bbWDy2m9wjZMpMTCus42UUp9yrTrP1CMpENVpmDsALQDIQFPOaHtJJlQyW05nufhwNuMKdMxa08YQcKxr%2Bq7hyRDMiTNiTUI5ALvSh3ZJK9l78wtPOKxI3%2FR9cZz3Sf2NkeJf1Es7ka4Qb%2BtBSQkDiU88C8D5RdP%2BGsm%2FbbrOQi3wQ7TxEawnGr8fJAHddAd3xP3DAam7Wk3qfD%2FmJNiTnTv7BUJ13qKz3yAdqY%2BfoRizbRrKxpnQ6%2FkQRhwUmiI86T3Y2kuRSxaEx9ZEq5aMiwDnLn8PiStGOLy5014Y9%2B94vF7dfOBMeyqwRORNvesohhz%2FUhWSTN0geqGhYjwu9C1lKmF3fnuzl9VKwPB%2BWhujaBEz2dbqfadfHnHQpfQi5xPv%2F3nTGErQrPIPAT%2BV%2BeNOb4hpYFEel%2F1uE0NR3RxXbe51M20EAC%2BWYqsCU11Ql%2FNuYjfjAT4C4OtC5fdvzH7G%2BZhTb5lauIREA3TXn1TEqkp%2BI5UqZSoEU5C0VVaNQQoAp5lFIRH0wLVhdBA6i%2FzCelr7JBjqkAftb9ZVrK3%2FA9SUAmVeG2pw%2F75u3EvHHq9yDLh8BreaHji1mSFfO5a1phoOKaf%2B3kiWCm6joUL1j%2F7SO68VYfMYBRTIYsB5CaeuR%2FLWlzgNsi%2Bvs8uZ7kdL9PuqyLped4bVY6%2BGU0iquxtjF5t7zM4yceSm5Pud8DO3va9Af5tKek%2F4zn2xILjloAgi2uqOKJcCKejD5ujMtUeUjJEb6gBSPCUp%2F&X-Amz-Signature=1cc80b186333ec6b94220448a33f85d617db50ba367d3bd9e82c821d08671d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQT2L4S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCqHUfOaH9kZ8M%2F2x0fu9%2Bgdf79iPBhx2GxAVPg4IhnFwIgF1ek2GB06LzyQLtu7%2F5XG%2FGgbkIDzJ9%2F7zhGKaKmsBYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP6ENAgLq0H65%2B5xPircA84hclTRxbgAYThnvf%2FHOZMXkOGK1rLcTv2COp1KnSC%2FYGdFWjTfMEI9majezu65miYFr%2FJFrGVUDzeBOapDGGzwn8wUEwtqcFKdfIk7i%2BCobHGbMNWnA6zYAVOwKF6FOvZf%2Bq4J6Y5qTUjj26hDbnOK1I%2BScvXH2LIFnHosctM8cOjMxO31J439CLN7pMeAopCJLEvHffyhrS02jQtYNpQLLd24cyDyiuVGiHiCz9pfgmaYxaWxK4330FFmMBzOF1XbZrKggkeodA7yg%2F%2F5zsWS%2F3Wx%2FhzmKfr70GcEVNi1c9Tn0xFD3zPz073QRRr5MlwzyTVyXpnK77MEgoQEz9%2FlEuVqzIDckL2xIxLVzE1vm13TUPiM3CDg%2BMU6MDM3koF%2FMeaQjxcZBh0mVLpiospbr6aJqVPjDZcFkjTHbJt6EXELaBZqQ9mxwVxBnXMtTCcbFqSpXjbpy%2Bd74MenkcISiMssbdISNww1ue14VFfU31xS53naHZZyui7W3hdlq%2Bd5c%2BQiZP6UXsTQ4kPWVX4Iu0TIG3l%2FaZJ5v%2F6yt7M1UTAVLmPvKuC5IBeT7vhmtVNGawFhvcvYIFryuyj%2F9VT4gBgiLxBJUCN%2B6blbySkmquvR%2Fwn33T8yycP1MNWWvskGOqUBF4TiE3s0M58tZQxs7gr0I%2BYkpHaDqQldR%2BIlOmsYWJGuSLCMgOjP%2BUT4hZoyyPqXFLYgV23P7bYq%2BUzyvqw%2Fqp57%2FbZ7%2F7JpY0VK6rZEMYpY5IUsSMuIT61I6O02odBmNkkTAvXWTgZYd5FO9tNw0rPYIsB%2FmKTOqjlfMGh8admZqBsANnNu0ftVS%2FeJVwZxTTA62mJoR4f9fE5%2Fii6bX2mkqMOH&X-Amz-Signature=f4a7201b1b807e3b2002b19fc41085661b962c83f39b3f751748210df2d78a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

