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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKIURZU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo7F8Bsp36ZBcmBTLSr50t3rb4ztrbAh9L536gRJNzZAiA8vx6JjEqhNfj3KdN%2FtvnNHEKih4WqfL0Ih7wfrQp4Uir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMKjX%2B3OXctd1dd5GaKtwD9QF2QM3R3pcnhbNR9eu78lk1Nc7uI6Z6zkOzqXZPcJzMdu5PI3ZYUqb6qyZ0OQ%2FJdnPLp40eRj6KHx5Seg4w3YUz%2BKrEcsXjLP6rG%2BiM29b1XRI6KNtguDM%2F273n1qeMdRB7513uk948sBCpHzk47yDRyh359etvFid6ulNJxAuYzoH7htm%2FMPUWt8Si1ccGvU8oQEhEAzd9Xn%2BQ2VRjYi4v9UnPjiaee83Rwr3%2B8cFIOFHmNM9Pi7kyTAIh3ymoriLYWk7nutTi%2F024bZZkzIwdzfOx7S8lT2VvdGclQGkbM0YfX2V2norBgEzF%2BYQtA0ak%2BSuv3I%2BECv9HjBWMGN6dCBXZlkdM6CdzQgSKgW%2B7A8NyVh7yvsy2HYXbYUg6FeqHCqIdFGGmeKveVQ%2Bp1pFVI97x8qcGO3vZw%2BlACPdic%2F2AgUKaeuGS1RjEMCPgCx2vkfO7IcdwBZ7whJKTPO1Qy3IbopcEzV2QObmiBjdsnSuWt1zaNdbb4SMjRdq1Rb5pcRyJTsd4oMjk6P51nEWOW1RLA0MwBpG34n3d4AYBFLv%2BaHec66BCH3DXQoGxSNdFACx5l565PiVr%2BUpgklrX3af5t5I8Y0MNzJipxl9Erxkw5oez9BNDkcUwkPrGyQY6pgHv03GYTQAviECQfJ%2BA8e3Tv%2Bgst14OnSJcNNV9nxaFzg3BgyFpfThwnEkuVIml5IZ628CARsP%2FMKSneW2xj04PRXpirKnF%2BCkux3YmVpb6JWTkSw2Rk2oL3kEB3TD9%2FiETAYPL4WufeDLbc8jK3TVAx2tN1nlbKu5LyH6LTywmLxbImohDG4o4PFYZU3eWpg9nX1NNdEQH4d6FbzTYs0N2JCrp4rgu&X-Amz-Signature=1420628462ff81672e4725f1e39980beaccd0a76db8309da437546e819f30584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BA3MWRU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcdQs%2FA9QTmNjs40kcCId28q9vI3%2FSrkZ6KsWxXgSBEAiBtOnIm4weElgrMqPwYEd6pJfSd7y8qh0FPXOS3di79OSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMkIc9HEKtE2NiRrNLKtwDo4i2YyHW%2B6sDmhSGLwXZXSQ3JEIGI76VeqaZmKq6aMvJu%2F9eF%2FjIQyUe2kRNKlWWeIT3Snsuh719P1flVk792xHyw7daYXDr7g%2FJIrHTwt245mP6lC6rNs1rEYGg2hqskyJQN5BBsHLSJ%2Ba1sS8e6CEC3VBqLR83s%2Bsf%2Fh4HFuBssLi9wVP8TKypPqjOw5szLziBWGq6W%2F4JPwlcGvLVJJUqiXJtCr%2FPLOH1v1zFd3iDRpXyUm26nUIoYVp5DGAo7XDAM8kf8qrV6buWxjtSvSIDlTU3XyUDZC9xWK55Id3X4Ovjo1fErGiet42ZjH3%2B6ViMBKM6phdyt56aQ4HLUxLIO%2BsGgjzxVfCT6ikc9sepiQltKBXA7z4y517ea6%2BD52laMvmT4yTPZz2UTLh5iWLkHJMH9PyYzs85CJk5uh7PQ8dPgQGN3tgOt9q3cTAK2e7%2BHMjewGHwAvuMwbchvVKXrFlqKw7SGn33rxci2sBkQB6NZu83FbEtFuwU0H6va3bEe7fR8Kg9k1q%2FINEi%2Bok7Ib2K4MQbLdhPoBXIxBFGAQ%2BLWhBQtchnJtIuLV2BtlGdiKqNRCOdfJCnYZ4h%2BkQxiQerBLlGmyB5JVPPe9tKxajXch3l3KgG8kAwpvrGyQY6pgEAAyuTQLTtrE4N04Q1xaraHfFRwU05GNwVZR2cc3wQDAPtO%2FU7E48GyixMSVYOs9lElOHLlY9gRJzAbzzNjzWX1jbv8eOQqSH1v3QOnuVY52iKH%2FeNeafuO%2FiHPUUn6mm9RIKROYM7irS0EPBYowGqzGmV2KWapu4etl4I2gpcE1mXNrLJpn6kbX3Zgd5zMcnKbpEZ9yCxkomXCK57QpyxFyLy0ZjI&X-Amz-Signature=049e9f07ad888676abf699bdadf3959221a2474694888cc996cdf32bfb08b758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

