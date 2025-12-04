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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3GTSCK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDppw11%2F1MKDK0qynfUsdSxft8WrhoXpxFgJKxb%2BgwLhAiBpHKg6y15Mv3HZbQfBXv96Nd9VP0rdiJt9inzdAbesxir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMnype4jchg4YnTt6DKtwDUmqVIj3%2FFr1h%2F6C%2BnuDULPxF%2BQtWtjzNpfSpyVnB1%2BJ5bGJJ1ZU38qvoJwZ3d0301hfwgX6r0uGALijEX2LvAVHem9VctYQSy0lh1pPqjBlgrmRyuxSQhcSQ%2BwXbgKdI6swBqx19pP79%2BkxKj9OaSaHyD%2FweTGIO2Wl2NxfKvWuAYpiF%2BSySJscUOiV6qq1E8HDu7uRPVoovQdTOchAvvpJm0kLoWnpCbPw9DSkGQ8YuLXMBd0mGknrPeefA8GjKwMpPOl5LdorVDC%2BNI3OEbWYUd8PbUFW%2BpqV9oi56iVSdaYOa%2Bp4eO2J9O4EZBRkW3mxv5UhjvqEW1RPGYoyAtmywvwl2zlQTOBJksoF0oLL4OilGuxrZIzSqFD%2BlQJ2tfdWB9pFa4p5XDgJy48sOzIBLN2%2BWx5G7f1IWi%2BIr2jimixx%2Fp5kH%2Fgubj2tYv4l%2Fu0lRt8nJoEBDhWltCrclH%2FFYd71Tk91raMJnqzvTHAKtcwlZJaug0F36EblRz%2BvmLp3MrIeERVTudIdC5u7xV88I4egLd%2B6xCI7XOE4o4yhIYT%2BDFbARbEub1WImHY1%2BpI1Z4lb3%2BKCAWBu%2FbbFGj7x9snaJIV0kFObmovtl2mujS6atIMP1wCpnpB0wrqvFyQY6pgHCb00y3zFpC3VMYzxGLcuG5lDB0hzqPXfS6E5nfLP3TFMuVDvCEghT13iB4Un1Nl6TFTvxQeYQSGb8qgvskgc8n5MlJy99Oxhxd7RPDnnSg4MZJkK9ZsU%2BxL0aCohQQ%2FEuy%2FSa%2BerfSwmFLp08afiJAJDSLCllX9U%2Bw0ul07qDg87UDmXxRSOs8xsnnevOkIKWCz%2FLqwYMwfgRga2lorP4A2KgZX89&X-Amz-Signature=fe725dc144dea7823557ccafabeaa4cf76f34b1369dede49bb219241b476f4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5UL4DLL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDroppo8mgWLF2jQik2dGZvZf76Jw2E0ao3U3QKlOZtLAiAWuE2COgIgkut7%2FE9sEK730FPU84czOVAYnc2L6pULqyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMm2ULQdr%2FBbS77yNsKtwDDAt1TkcDz12STmij7mk7QUILww6ZCNfQDisssSQ08L5ftgol5lwE9JUNep9SVZj4WFzFsuVrwntXVqNZah3KEEbQ4ZZBsPx6Fut5AK9rEQFmjX7XXHF27Eginy1iZACDCW1bRzomAo6tRswOBW1waQuYnXvcDCCWv63A7W8ECv%2B1TCiT9Rup9JFxSKpWnCok3cVibDKJbaAS93w9UEFH%2Bi5hCIWxQLBrQPmRU3i1RORpANZOADdIGiWOGbJGj85sb33onMERc1k6T1X%2BiJJUQsp9cZsAy2e6SJEdKuWwbZbHOmqiYgyr9dPURqguUFqcup4vIdMILpMV%2BMQJ0ilcbGF%2F34hj%2FyPRiGXhNxzWokOyX0tJGTkrXPheq7es7ZQQ8FH5aKUmhZ4r61GJ1O6obeWGcoPf3o5dyQv3V2XeDT8RyL074NMo%2BBHlkME8HGiWxe%2FW5tE555Tshw3kWL0t1AF5Eqox5nttqJaHtv0ydRaV9RoswW9nZ7lmOtsAbaTwVcEoV2L6FfhysoDqZSh2ALoVmAWsTXNCJrTrkltVpr3apvP3W8LvaXSEDT0ITVZOhtbKTj0SK7oREGK5075qleBzbzXZM8OHBY4OzVIHFJn2n18qmAYgbeOpcZow5qvFyQY6pgGjQ4FEDc6WJUNQZ4M8Jv5bV58CuhYRqRtKmfFuFIfqs%2BBtg04%2FJytQMmLRZaaWUcMJ3%2F42l%2BTbf3g5MC6frxQOxs9XNe4wEr39CfAU4sd%2BbbxpKEHtOMXHH8UpJEJ1kE1HlwQ1KvoVV43s3C%2FG0Vma60pxc72nAPY9GS5SHt3vN7hiFjL1kjTGOE8AI0w1rrPO3CQYNsqaR0PsR8FcchEiLOzypVNM&X-Amz-Signature=f75593a61f52438ee24fac307dfe653439b8a7640d010aef26550443b16f3a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

