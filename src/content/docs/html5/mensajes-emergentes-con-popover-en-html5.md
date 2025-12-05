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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65SC6LM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9vRFhYV7uOAp182VxejxDenQtvzX6D3jB9O9%2B4AUVHQIhAI7Jwgp4EuJVudQkqAP8g%2BfpEwIkTB6Yp8%2BCoPWIOHVAKv8DCE8QABoMNjM3NDIzMTgzODA1Igx8laHdskdf2S%2BxmJIq3AMD1g%2BN2J1G1wtQdN0qVCzJh3zMpZiJ9%2B5lry7k%2F6dyF%2BF6ico7BhIdZ38mh07sZpS88E9iiStwFd9N5X0mODffeDm2rjFgxgvgziVSbnLs8vkhCK6BhQQ94at2oMU3WiJWgjDiY4cy%2FgT%2B7wkKuuQnts9tfL6s6ryn1sC6KagJ1PRRzVMUG03IzdMZJdwfy0FwLuUn8wUvkgzxrwXSFnNZAxUpYCnvRofjtyimZUy1F8Nb8lCrp1doF3ng8oQ5nV3%2BqMkc%2BAnoUuKE0gmhcZW766t63rzg6U2HSePvM9WGOyColRSIgKLPZMFnnaKry%2FG3cTdvW4QXPrrk0ODzAc1SRqgHnn1P2y8piEpzrhXVvqdzVKzOhbkX0tr2%2F%2FvX55pppq9t7AAvmapj4jdk2uyBA9%2Be8XEKI8mDNUC5SjBPAnyxnhj40qx3u9SgCRwhP6BmYBYEvR%2BvtRbVkWMqcnM2iUMOX%2BUs7ESycRuCshbNJIz7LnL7U5iaesXk5hEOlDU3or6%2Bs6I%2B5vmeevRNu89uzVb6ThIXJBtMOB96yo6vr3N29Z1X2A2LtGWBJWZij70tiq3aDYLEjGnCdNNyFXMJoLM5tdxCfmFk3btfx7m1EsOgqdwjSnEHa0g8OjC%2BjMjJBjqkAbfrvFS9N0s6%2Fyjqjr9Ee9s8cydUpabLBd4kTM8u9CzUM5luLz8Lc7d0EAkY0WT1jSXZJ79tchhIIKIXyYUSYsjLtcZGwdpgWGU4rNE3hs6zQbDqzWFev65cV%2F6hqN06NW9BA4Ab8ghIkzmGsGKBd1U37ik9AfKkGe0jAWagJh0I0%2B4IDG%2BvfrKiQf7gan8XbS0k9pqCbmFIjOXLJ0vueEXa1zzS&X-Amz-Signature=61adef4c517d7ae1a67960169c4748143491491f6efce76a943f89364db57dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKOZ3RVR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2ks8Q0cZgLDNBnC9qKeMZIT%2B%2B6iYj9wv88jA4BJeWWAiAt2yWZfHHfVVb2p2FeTmtn2wWlNMYKfkPXUKCqbKkDryr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMEqMLsMX8luT24dUAKtwDPruRGnTQD5rwHoXKXm51cjaMtBDGT595xqK2EURZB5FRqu6CQbgoYkRLs%2FTHiHRsWq2ILYOWhl7RNELUFCYhbfDme3H0SoeED0PsDUSutkxI3QimFqUm9BL8b71Kx5acX76JPcve2ULYwscFqeTHorcir0TBgZFzCMLasPuVBCZWub3KPKMDLdwt9KkL9SWyjpOEVkguPQ4%2Fo96QGcrZDe9z8xdBKrg1lT%2Bw0ocCsF3JbCq32tSHyTwY%2B717rrJiEaOTn6uZRDlYHl6jnkr5vTQr1mLQmbxGL5aXF3PnR8Qgj0oKAZz07GF29RNx74BiO9fFTw3h17u%2BBIElDEdoUp5DEAqMq%2Bo1suatyGvGBw66a4KYt%2B8JdEaKj9%2FBM1PQ%2F%2BbwmgUoi9OkaONx9u5vaU8pItQyyrtkD3qE0XAi4D5rR9HZC0Puf%2Bieu5ralJ%2F6zU3Oan%2F67SAPquoQR5EtEpuZnXtPePtit8c2pbdEzseYEtPOzfhICOPmc4zWHE6j%2BGIW7Z1JpUMRxuDu5bfJE30KsE2T2lcjMwUH1%2Bn6ku2jeip9wG%2BIqRbR28mXsRgbCItqbcC0ZMhG0ac1E9PzROuH5KlAgymaU69RyurUw1ISyHU6dB1P8iPyvXsw%2F4vIyQY6pgHPugZKW8Kg1rQfItCYZn%2BybArEOp78zDpNswtaZT2PnfKlC9vAFQd%2B96bhdMBclQBSyb7JSpgCMWy7RgO8dKXNfSVLVdpVbsUxVqwaZBXvJLjeKdVEM6aUXBLTPUgVIym%2Fwdiap4mIK9jXhzNH%2BsSQ6nTXhjf5udia89HRIjOxuEwVXYuTt87YI%2F%2Fso0A1jWHPl8nmqVjru3Mu7uKC2v09RInLlOIB&X-Amz-Signature=0558bac2c46b0f2f975f43cf0bc11652eba0fa6f7c4bd3ae97ff6a55be09959f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

