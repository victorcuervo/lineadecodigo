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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2MN33Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtopzkYUGzC3dq7C%2FCQXyF9VDz183bDaP1yBWqEGlTWAiBuOSX6NUESqV8U7CYBzPnUgnYXRdDGyXagNpl334IKSiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtryS5cmBQVMBgACKtwD6JOiIzYWhnkJCCx9UYkAVJqqUvwUqeCT34Xj%2F3OtqKRT%2BjnI7YxloQamKod2pHtwqd2xpI6QNz8QLmuMhv9Pfs3eUns4bv4PVwqgp1YGDzBYCqcmqgJ9TM8O1RxwN29A2WuCb306gsgbYJV203DMECVG8vFdB%2Bbiil%2FXTHqSDiKEyiMU3sUXjjvlfYcGsXVOx9W%2FBF8i60dxNRB9N9N197q3mHT%2BnOISFW%2BToEny6H%2FNKuWKj5czX3cy84Y9s5AdEP6MyJdviHoGtQFwfmPvPiXZNyV6NWD6kZ82%2B6AQk1AiRbPNTmTG0kYLPbiHz62p3ZUPKo8HAJMuyLKkdWKNZoVO0olhRA8BOsIXxJfoQSVcdx7qF9Ijv5f8O1OxzSbxeikVl8SiW3Ljvcs3KcGtkjwz1W8nweX1NinEroK7oTgCOyZ%2FDQLR7dzermGoC%2BiInpbuH5IfFdYpP7vrqErlYfbV15wGiCQv%2BTLRFcF%2FM37IbBIOZSWqwlfbT7LNf4on07JIS8JxduOd51AumOg%2B7GZoycY9LfM%2Bu4qhkOzQtYbkKr%2FtqKTRRzeasIhemA8VrqSqpFGTjtv0kJLHb2FimBdhkVvS4YpFT2RGc0k99BUNnTRZkyWvqO3iQsEw2cTfyQY6pgFosFlyo%2F6%2FwQX0oHFFX%2Fh3SkVOKS694GBve2PJvoWG9DcByqovVpY%2Bb%2BlU7Rt4T%2F8M4woJetEW9TEo252oFcbmh4f5mr4ktgzNdz4pkRLwdQDYp9zUNlxkbo5KcZFEdDGQv0Q25PzXA8GwWOy54%2BRahcD28Yo2GqGBzyRf%2FQ5pH7FKcxK83pQzYi9xj6ejV5l5bzh2F6jxmsHveK9stAIPC2JnnF%2Fo&X-Amz-Signature=03f63d4c60b9d298d960fe266a93a4dee48468f4435057fc05c0f3684eb84573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SEUOXG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzzezg439Ve9uFAinYCkm4gjLsYhJ%2BIPUeqg%2FkRcy%2BkAIhAKVvlvdW2WpoTSMQRdS4w33JTasZShY0ThE9Y1rDpDWAKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ0Ncd4RfzsXEvC1Yq3AOOgUZvVW8MHgWLVoqkiGwtJdGrEZ1rZfhdTXWleIbMPPxxTWeGMDbtdNSXsEsndBhB6lp5qlHBptajtzrLIN6tyeNELG7T72GsMqMDa9Te0wrIXFEiA0yhf6E1JYkyzNxPLxEgvFQHcqfTTtJfySvRTF2GHayuat%2FKnftAZ6hW1IIcvrF%2BXIT9FCzWSVJ2zC2qUjbIg9bJkBs8baHU%2BQLuWaTSaYkvclRJ1CsiPl81n0p0ou%2F2MQFOWGzHRjShYAI7ZW3GpYzzWKgXk90DDQLYAgjj9iX5TtggB2bPxPVOlhKUjPxmwnMM4uWDsuq1%2BdoiK64ZZhxSyVLcak8ik9jjIbVSSrdWqLuqhovlsMVvnumpSikqUpAh2PfbDa0pRjQvqebCRwD7vCk7YVs3oXk23%2Bq9zjn2Pbxcpzpm%2F629ItWZh1u2g%2B8MxXBcE3eWrP1XUtFBWIaQ9Pr9MiuPH3NP2y1eDLTxYnxJi5lXsQmL0Rat%2Fr8GaQ%2BkCSJWrlGk9e68mRb7B1JP77xz8xjnEFFA%2FnuAmTy5XM8kQKkf55YzEj5o5xnK7eExhvhI%2BBAVrAWusKfIb4%2F15mudUeJg0mJY7hB9QMGC%2B4KuwU%2FY7zuBIekSG0CHDZvAQpSv3TD6w9%2FJBjqkAYFOTW1nmTFzC1RLlv5xd2kb%2Fi6iIj94vN4qUYC2u%2BrqNOjzZ2RMOyjvdmELTdgG598aTUQcb6reC%2FdOqgox%2FxkYpYzSWonQDIiNojLAmjVaAr72jbh4%2BSNZRH0m36UFeC5lvq1C%2Fcm2gX4KanS9UuVp15mGCXFYVKCZe4HdtCxQzB5mSGStbpcP3uSXbB7hBTbQQu0Q9%2FwVxevMuGfEH9RwZagg&X-Amz-Signature=64ae2e995f2e7664832504dcdc5b8a360d364662dea7e72df4d8625e3e6033db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

