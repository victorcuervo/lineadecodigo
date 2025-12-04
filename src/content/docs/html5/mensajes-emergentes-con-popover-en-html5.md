---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MIAB5YR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHg4sL4O0g%2F3Wgb286QoqUfCTNToHB8bZ7G4QEejRAy9AiA%2BBmgcXhVJJdpd4iNt5%2FClzsJ1BbspouydBtp9lrMx2yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM2fHk075NilPYnh0NKtwDdptNZ8ctg1kiliOy9lydqiMKKfW6VPb7nMiRhdw%2BEosP%2FQa%2FbZD94IBTiOM%2BT4d8rwZhK%2BFdKYjhUObqAs1cXN%2FiJESUGAZ3IJ1g%2BD%2FNHOYUBs%2FZrIwgELpaZri1VfpPYfpHLcg%2FYmRsZIwEMRERCFE8QAW0kT%2BExMrO92HaFIrSehe0YIJA3keK8owhy93zUMDPhv2QG3QCHx94RujjQwje1wFWD9h0zDjIH4ijo8TrF2lqgwF2sdhTv9DuSvtBVgi%2BTKOONLSQCzE3dTWr31VeuJNJOzGFiJYYe9E2U5KEY3R%2FbarjhlBf1LHqVrUo4ignucmjyP0cJAYsTfGIcS1pxawYuLbY0afEaiE6fJMwXJOfzzI0z6VZBxyp3jCvWVcpb9XaCoU7AlffbD2duFhRTytB%2BacgYZRZ8QvHKVn3sSgqGVcHTuipG0vDu2jeZbYYUPRzDGKGRVTUCL23wIzB%2BwtFwVT5%2FYNDJxYPBAiqWWI1GMTlJLiSWavBZ4zyzpZB2Ds8GGECOzUK%2FytBec31o4rkRUpN%2Bxp37FRiMxDwxHcIU1j5sn4h7%2BP0eGBk1QV6GDdCkEaVV7oHUKRpTkCiXBWKV97Vw%2BEXrOr7XBztNUnagXdSkRQ%2F1zoww%2BbFyQY6pgFRz2zvrnZffP1CHQ%2FVyYNZBQLMxbSIKHMhAdaA4CEN8ODW8%2FFaGfdS43SKnjMzcHt%2FNDlslZzIBGoTIuP0RuJ6H%2FL%2BrVN7gI58ms6XXhC2EbSZ1lbAOFgJfGC7kgl4genbQ2frr7rDO95NTYI298DBbm5eM%2ByPiCPvbeV5v5LGT0pT7TadSBvCTpzBw%2FGES9F1yPfuDY4j%2BswwWzE8Txrql6aheQTg&X-Amz-Signature=7c4556f05d2df074986abe53a1ec66cdaaaf393c9bd06531bc3884b9493af743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UKOXCJJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDAYBKMHVCcLfcUVihvVtVaAFXJRbY1lWhWEGU1%2FJY4yQIgULe%2Fp6sSvg0nMRieHWGHSDXKww%2FM3kbrzE4GV7NeU5wq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBiMATpR4VSCj3GN7yrcA%2BLtyZa%2F9UIQ4WN%2F6y%2BfvMsc9CZZdXn6jQ%2F3amcfihz%2FBQJpATS69nZyNYKikvZk3x3GbSw14KG4A5LP81FGnxuy7TPltzvL6a4q%2FT8w8TIPuPmMOEqry5nxU%2BI9NdNHgAV%2BrFAzdf6S471JTPfn031iwTwYMVehAFDVihCJ6TTn601P%2Fl%2Fo7rDLAxyZ0hjeq8hl7U5hwIgKtPPGlvVHX%2B%2F2d2BOtF%2Fu5fmoWeF4vZtmGeqWf0YHfCUtA3VZw9o3mKnDTGUFx6Ix9%2BCxU%2B6q%2B3nHr8x%2Bed8MiJNsUhnplDUPvI1iT7933%2FEzGJNwcZC1OIcoOP1KP4yYsc9ggJyjY2wh1EUqtqufNXOIVX3NQv6tfJtRrMmieU01PswQaKMNLE6j2K6MTXtXpIvmwg2qHqZqNTjz8d5FH4a4qrgJW1HQkNcjAiP3protq9Jfwq4kWUs1kme2NA5zsv8YA41rGnjjh5nOXth5uiEbKjdyHCCqasck7nbUbovpo01KHa2QYY0gj7bIWj4B68kvK5zyOdGQlLLP6d8oY%2F04Qt2j5IvCjqQW7fiPkwJIoENMQ9vDCbpS3tWYy88troXaMy9L8WzD5UNw3hBZ8EN5EVzwF3ZbV6qXz8J%2BszDCSwKgMKLnxckGOqUBkt8o2apKyPHUAM%2FoYN2v13x3dDo7wO%2BxCC7oYGagl8mB2jMKBknRgWN4xexOTC97Aduim4206fFU9UMsMMcV0oqFYC3h8ooKTdhV8tLWthksUzpdKcSd8Ha7gs3WQ2snQFC51m0M7%2BrqwNn3Iyb5dPHymIXHnJeDg8rt3%2FzAGM5I6eL2cAl6kHYxkFfcwF%2Fzo4e%2BK3hNK3J1TAK0W2eVjEsBn96r&X-Amz-Signature=34fca37ee5084ea3e3e7aa07dc4e077f795ab0ae4d12acf58c3e997fe09b442f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

