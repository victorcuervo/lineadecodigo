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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT7ANI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsWlUSunf9qVhAb0Dv%2BFc6L1Hezn94Z4sohe7B2WmW7AIhALOVOWqChTsGENjYDz7njcYDRBiJDKCwzxJwXBE%2F15yZKv8DCFoQABoMNjM3NDIzMTgzODA1IgyKGb%2BW1yEq1jUIb20q3AM1b9cQQrr9WSR7f39P%2F8n07ZY5w6JYUQVGsgMmBb%2Bh%2BKkmrhPsl3fqsQdlamJCMuPD9QtsfsvKO3l8GtgeSzM5ik49m7AAT8%2Bu5t62mgYYmIAJSPclD7mD1PKl073PRTdTaxK8cXnvX0OX6bnxt6vsi3iZdlCgz2gUT2G%2FSqzzhk5FzoSA6LBKsuUYyvoLLaHA83Nbm0zuvPppdqznOkrjMtoZPIbfzw60hrOajbJJjjoZWrF04AGke7dY%2FQEr1rzvkD723nf3fkWYDnwUT5qs3AMmQUV%2FIM44Ddt5f%2FcSaCU6kReAbjXsRZ9zw3y2BK0tRSeRhIWtN8LEffb9jePqg4LO9K87Z8M5Ub%2F3sdt%2Bn18yLuq9rkuOczwlRrurhjgMKCA1e5f0m4twIaHx%2FfaViAItCnXn1BDILX%2Bsr6TWgkx9V4M9xXlISpLIQwglffx%2BzNCcsb%2Fx7jofns8fIdxerWT0e9RBpafbugKQhDc7URomBgGwq5eJyk%2BqBMcVPT4aieCm7T9%2F%2F3IviR076QQD7oCltBPcPf7N3zwdmWny4DtBzrxAJNg7x1SaawHbbmismCzvYIuc3I2ggB9BaHRBVDZEHDWMnUcPifaeyK0Gc4%2FQj22JuEiyqrAdXDDEyMrJBjqkAbV3YN%2BATAuWbS9tHE7eiJwsj3M%2BV4l8Bk17pselJnwUrzR36hyeIpl603QdQwKndzYVzC%2BpfU%2FqIBvHVQX1Ni3X7qUrTr2sAUn4urQWWpn%2FGI02geSHYvC1G%2FnXuQhmZMHo2aFJJ%2BgYBGmjhjMmsILuoADxNCk6%2FPsd07S3%2FQ8KMzLMfKlU%2B24vGDrJH%2Fc%2FrtXFG0kIMASrgyGVlPchQRC8f8LX&X-Amz-Signature=e59c6504b3559f7e0a65dcadf2f95c429303db85c1336044f763a4f20dc43b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AWNV7NK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtQO48WUbAMDDFcQWjHo4SEuGHVycVqbLDjtEMJTLkWgIgcORtpZhk2lI%2FVRXM74KmBz2qyBHs9SW5UR1%2FJuqB2NAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGAsTNHrPOoQNWS1YyrcA22zTQKxufk%2FmonmxjzIpApnMQonpUhc75%2FmZpUWJN85h6p%2BLHypi0VWJrzHGs3svLs%2Fce71ddggHfkEQaG4Sy%2Bz9ECjCU4a6SMgS3bsw%2FTYKuFK9IkHnliiSx8rQuCG7xgwjFUwjdqRbLKRRKUJvdo25UeTAmd79gQu3vVLywl6Vw4LAjo5nibb5fkNdipX%2BZ3ldPNrVGeM9ViNC6RCGq2immXfvyfh59G1%2BWZa3auv6s8L4PaVeM86ku0F0mTjYx%2FTR619wz1DJbGUZvXpq3Iq0khRB2p0dPFjRjZZqxCOUn3BzXXoF%2BTh6C2nxqEu67XzfcZL1omtvrU6d7p5SGSaJb0Y2ucCmYFHdO4xSGSEniFgJTr%2BYsCy3HsHzNjltRR1bHNMciQX%2FSoh8Ol3ATT4Bq8iDsMLu3jQRJ3oIEKR9GhvYGNrq51zM%2B9oCc76wsM6q07vUZ2zPkJOMaPeexNbSsbkBrrfPeC1j76Keb73hcBYoUI1iwwdz%2FZPU8j33c0jhQFViJ473ITzHZvh9CejU43ssGAA%2FSa0gFQ7m1FwyC7RRZiyplDeFTMqWl2Yy237GsxVCAjyVD8cMJa%2FrVhQLQCFGi%2BSen3IGTFCuV7vaZh4H5E7%2FXjbMqWKMJ%2FQyskGOqUBSX2MuPzOFwwmTATbKaDr52bHf6y5Cq5cclxNHWy3CWNTTCUK%2BI7dj95YcIWO6qRXOxjmgpbLHwbznkh%2F6OlYz6GeokORbdXEHawDyF3E21LmBf4YrgjAPJq3U%2B6OJiDSG10S9ZJVWh%2FM1XZ2ACX1ilaZSRNvyAKyzSCqTVIerlbf7it1zZAMs2DWikLXW%2FECcw9zKrMPZTPJd7MMHFvsayN0h2XS&X-Amz-Signature=e1c77c692037a692bea99598a1cd0dbacb9c553e505ac773697a2117fb64f48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

