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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVYAUD4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx7bk6BeTj%2FlU3wqlkXT331YuM0hAnrvV4%2F9jvt2FAVAiEAjVCqSQZsL%2FYMBv5x9gOPMsDgP8FCiNecmq%2FypdiOfOUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEnBbD1f7cWAn%2BI5ircA7m1OBbw4UZ%2BwRqYY6kQq%2F9f5BpDSokLBtyXPcEoLM5wsODeMiMv4fZep5I3L%2F92e3L8CFibhBRVs9P25yYOqVH9FNrvab1atkXLON1G%2BLsw65AoPpkveEwrtrD2Uk3p%2FEnWlZW0jcH3hGJborTuZAHe59r1PxTsfrUhkfabdF6pZhVIOFLPLRQJsjV3r3crdycsKFMd4hwcLCtDocvBnjF%2F0jh5OroiwvDD9JIMwklGEEFUMi9PmQbA3ixMRh4mh1GDGK2PQjIpXojVgrtOxmXjLMVTmpmCRkmzgqcRMtZTV%2BRRdBPVStMowCGsuYI2PonhVb5Usa%2F2oILAT9xAZ4dIJmjLCjvlTNy8QR5cGBjB1d%2B8bwfChoN8EK1HLoGwb9mpQyikg7l4i79LhnfIprJmXe8Z0cPn%2BOR%2FZCSmicZ7vZ9VaGpiNBN6vPBpNlweOhJhVeyByF%2FWFzaQkcvUbGgs4O%2B8HXYrH1GgVpdxzaZvQb5alVPvXZUqJmVbSrLRTONxV20Oj8WRqi%2Fgzf1LFKUJvowR4StpqjxB68jBpSQ5jxQKQbctbU8TnhoK7GVT4j2oHlYRUtyL0eY0Zy9dG8RL5bmxa8b%2F5KtSUJwALdZDLsGztHLmwhlWRu4mMOTl3skGOqUB4A%2FXB5AQo%2Bpvsm%2FicGn4dxImqbXcfX8GPJk82Q6H1lUNX33v8J6yecSs%2FrAurGab%2FRQ9WVCCIs2GqxneHfdIABrFFd%2BnYnb5nJB2003ichudqWVesQp6HU0ZWMaStzblmKptfHzoLz%2BWN7eAIhCS8b8IcV4u%2B%2FhtnTyvhMr6PVv%2BO6UujGgD1s%2B1PT5t7lCWNRd%2BmXec3mE%2Bej%2BFzCs0%2F3SDCe8A&X-Amz-Signature=1fe42e8276514213b7bbd30b043c90fa15289b49f86dec278a744eec5c24e9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDV6AI2Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2FKZqqIEcV%2Fh06QbEzuJRhvsTuHk0%2FFH%2FdzFNlZ1wKAIgWgq2fSccaIAHxDTxFa8CX%2F7AJ%2FPbSgDp9K5PM9QFDuEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHww%2B0P5igo7vy4vECrcA4Pv2ObJjgAdTfx3C5nw9g2Z%2BEV8ZXumhAUMBqYo%2FiKmu0zCcu7ac%2FpXjIadQjtWZ65vVC8u6f7iCNtF6AYKfjZr6pgV%2FYeNR%2B%2FCTkJ%2BZhx6gKhFI59uRiJ3HlxWzPgiSj9zHQ087TgIP9tYXgM41eNMEuvhDx80NTeRnwgbGL8sKp%2FC0FZWSSsOVOej98EXH%2Fq30%2Bva2nU8CFoP0g%2BLx1n6%2Bd8POV69vtBI6Z47jTfRoFSj7XQJ7vJDrUQT5JJj9nw%2B2ZeH7GKs5gUmp0DIpPSnjXdrfPxFE8Drwj7Wwg2v5GAYvWqXdr0EwQUn%2FphXMs4z4zU4K380xzU1Wa5fAeriztQqreE13rnI92Ly8xVZgq5le8uoQ9lhtiSDFyv%2F%2BobLZvCcvbPSf3%2FpQUMMMaMYDDXzKWyYg5E6NU0w2DgLR8vDYCt%2B9CJSFSfYao8%2B1%2BEMKO2ZcSJSvobOboEAlv0DO6Z7gp6QQtDpl8KyZD7iEuN3dfAHLL4ocVu6xGaH1cLnTNCKTrpruZPs4D49nDgcI3hETJz7pYq%2Bp%2F5eWZrBwDjHCP6wS38hLVreglJD99cD1MMKRogCNKVQvclHr80yMuE8yFX4%2FGsnpeDfmxgfZe6L0GlYV7Ac8ekpMPnk3skGOqUBqoEkraCqiIlbDxG4o7lWeo3JmXQtHPHn5j%2Bbt%2FTmIXFJfRyoRzi4eWkigGxZMOGs2SS7yCsIUcd23KD7ynOjJsUObJ4cBMDj%2BCHAVDQyxkSHNBETNCwpxE6jbC3CaOpyhES3Os7ms%2BkAKm87Uj5ysb8ZKpoy5hJI%2FidCWEgnMr0YKLd%2B3k3dn%2FJQY%2F553e4xY3ABZAQJoFpAszu93NJrL%2BNvnA61&X-Amz-Signature=31258d5823cab42d8f239b6c6ae5d036d7408a3695dc30e38a8f3570170a4c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

