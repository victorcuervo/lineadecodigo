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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKYLAC2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBphE1VHMpYEn0LMLzUxjE9bM0b%2BJYMofpdEsb%2FptptLAiBmEqMwrH3fhSRBm%2FEwhWc2nF9PGzir1DCVyzZfJrQeMir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVPE8cqvmFU4fejYUKtwDj9Ng3mfxdSb5nKtUq8nRs0hjLelLAvoyFxbRg6XNPpoubkdXbU0a5uy3UJtfZPN2PmAmRWXyJeDaxx6mfGnGHr8ZwKuNrfKhF%2FL4yY7P9b4IYupFQDQbP6Q%2F79qDdAaQnGHRdgymfCU7dY94tivjlLjUuT8vwudb57eTxoBYUM5gQal5NdcpTothdMwpOXtwzfz7wWYb2EUKjie7AeS0WXNfJ%2BK%2Bw2DS6%2BCB7kJQZHm9oM5MU53Bgpgi%2F4EVksaNWOHLXmmV1AP2wCP297YndkmRa3qirtn1ThsUUJK1QFYQkZa397sCCXHogq3aXGzILPxCNHug%2FX4dz7qmdKG%2BvAqn6emF1mNpwLm7TM5dKKo3Nhq75PUFbs8ayW42m0xpBrG30FxGzPle1MWPmfV2w8wqDUzuurgRQ2hpT5mwVRzki8AMYOZghk1NRkVV3%2FCnxmSZnG0DnrZKr1F32NYR3NUxUl9yUXiDuO8noBT0f%2BWXovH2KCzC%2FuOo68JUGq%2F1%2B23Q0AujYZ86MBKjbUSVqwr5W6ZQunsbI0oLNxp98YlgpLeKWwEzxlTcQozz4P8VT9IS7nz8RN80SndGL0jpIu1ijtOw4S855aPzQZ0ZfJbgABDmt%2BK9ds%2BRGJwwh8jKyQY6pgHxa5waP6fnwveByMYpBhqU%2FKd9Vrva8iPGIdiI9MoBrgSdiusQaKXVLkBSgsBplGspr%2FnxBQuSrKF6R4IyTPxmb%2F2uk1vulsZvLMYs8D%2ByVXhTEkKljrzig%2F40SOQYzC%2BKHLGnWXK7TS0qWgQhQfdinchA4FVu6TDX%2F6yBBQomSuINjmqU9M9xli3F%2Bt%2FmCOgTqgLKEPrkx8Ct0UPNcCb1JKhpUJve&X-Amz-Signature=edcb799ef9ccff42a1882354562447d7fe835b0ca590515bc46c9f7982ba61bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDHPRC3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRC%2F7gpHq6kGMt6rSV%2F0e3A7M85ugB5Y5LA4cteWiwEAiEAo41OHXF5fWOtTqB5PhAjTCMU84ebdJTEBWM7ghX%2FMlkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDUgGTfbnMxSRqKmSircAxKnpRCuNqAQU4Jb5XgV%2BnGnjvbgA7ysQNPw7mgN6GjzvlNYwUFLepP7tL33BQUuFJ5nr9vVgqEkzAxgGrSGA3z8qJzeBh4wGcFnNCqjF%2FfcCBcUB6KTiDT7iovt6g5jYfFx6IEUNVb9RXQgFzlyC8ztNS6BDwZ61oPCTG0RiqhY8pM3rqN2lWPoqFOzwn6idTy3rxLLNs1FUVZ1U7baqktU7ybYqpepvS6fp3nAUvuUYDIK2OHEBRUe2YxFq5z6nwcnmAFj2pbOZEj6UMciGmu7FBvCJHSZMSs64lKTWowSghL7x3bQ51Xsdp%2BxO3lW2wBbGjqWLuKYfg0hnGYNRHbDjtlYLZs0fRBTbHWvWaDPUEWogOoMhMSIaxcYGvGte7Zsjej7regbpk8IELtDTjvMiBUM2haaDysAKv2WC%2B6gL1oEPW73tqu%2BPcttaP6ZWaPj29EaRphZyxHAw3d99Ko4ufQ2vXOVrBsysCqgVakWK6dr0luF3%2BBMn8gUKXdB%2BWidrezEE6%2B2QO2GZ6vLG4FsXgmwo0kmCNm%2BC6bMJFF3hVBr3jWk%2FPBzRRnVEQ6RMRF3nBCXq7e6Qw4rQPP0wVI1x%2BADBZtJtDJLX%2BZZh3wPnnBiUlzF3drWrj1GMIrLyskGOqUBfpx028IZtfvfbbXv8g2mhjHCcxdQ0935miLda0%2BnIBb0rDMlTKYUdGYfhev3VqGhSPePueCbSGbly7jKwzFXI2v%2B3EA%2FPQcQFgazqO62fEkoDG8YLAS3Ap9pSwi1oiMtdRzxGhRDbEJdxUXUpADcIvDCYgCQ8GaQUl4AxRmryKuZS1CwBygRDsi8OJSVWE2RCzlhh1Kx4raQT2uwnr8xxL8qVkrp&X-Amz-Signature=eb878e46e8a711038e2189c2520144be72c5c97b51ae3850fb66629aaf63d9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

