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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJYDOMSI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2t6Crn0mRUJx4sUhPokbg%2Bfn3zB8OEQ7u18QqlkvLrAiEAwrcfnavszJMY4O1QH%2BbxJ%2FKyD9MkQadH6oZtjuYvZGgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV%2BjMLDzJAbfZDEFCrcAz8DboEqxYWvCPA3cxFBbncGYM8YD3jsEFT47cV%2FihGgJvuZaCo0zGOqLLinsEGswfqA0wtCYGaqtWAwfs%2BhTi1DrTZIfzPolg2q9%2BzgntQn4kMni8p8S9TpruQzkZxzgJI20%2F6Gcz%2FS5vlq0fs5e8FoI6Y94SgG60PtXcqr%2BDKKZOofw6zSGcVGOGt%2BU03s%2BxKQdkKtJTCXEmVYWJR7oxbQT0cgeVWxhyJ9zgtV2sJ2FVS5omTnkbawZxpXSADOD9lBbupct1uEpUQSF52Cg6nTiMsFs1b818omPx0m5%2BXFlJtWiG7yqDdGCYnVCPkh%2FS5uZPOC6XwZkLpU0IDEmp1%2BqSm%2B54j2lU9fB%2BDhPe%2F2UFUVGDA11IHHekWzFFwfLEtpE3biUS%2BBPut8nVI1kc%2FhTNbQKWGbVU2slJ3Vw3PcoIf7Zu5hdVlHqOO3V7yVkTJfiRq7bQP17CDQNgcXo7SA3Tn9nE8a4H6zjH2H6PTdBjR%2BwFAUNbhbB4iwTUA55%2FtSGeLrhvbV6OwUsSoZlyT9vapgF7CTX1aZ9WY9thaZI8nRlwHbrX%2BprlRNDboDduwyUo4ScLFqlewTXw%2BnQ4aHPpiOPBo4NqZZNePsfaeF7FA2qq7n4LkN3Y%2FkMIXD3ckGOqUBnuOd9GhY5uklhkzp9PqLO2eQ2qBOXBbwp0lbEXK6Sc8Nex663fFPvEMb20L2kEPLfAe6o%2FJlIGvnQmaXra4Yv0SVwm%2F0CGgRo488BJdQ5fRnAUDduXfZtOFUsvNIuJoBdym6PMqnRRLzEpE5%2ByFEY3Mccf7lsSIcSe2V4NBCVzKgCaItGpZAww%2B2jAudEfmHNE9S7s6QQOjyMwdkm4AnJGNNnz4k&X-Amz-Signature=67fa303dfe0b9967476c22f11459f6b9715642c3841431eae826336a7b95b0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AP6ZZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBrMNo4BhXIjTnkCSEBrDvFaQrdsHBX3C1nkgr9Z4KCQIgVYRn90hi2YoIIFlpeObf%2F96P83F7ui%2Bx48EMypPnKKQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQAZ977hsb9iFoDAyrcAzIjtb%2BH4x0HMGW8O2syUBdKKIFAN3x%2Fk2veNEJpjU3f0cwzy0JBfZsADmkR2xGkf9zhsLEPJb0l2cF%2FG0PMWVfmqfiE3MvMmZl3sVak8Dm8M7EcXEqjnnY8m%2F6J25j2x8rdqANT5O7daJk%2BvIgnwEyOqyXtaNsF0EGSKKqQQY92TbnvVBJkq56zjVaKp%2F13D0UX0sR1MlXz9EKeyeUIyzD1tdqlFeKYw6O3QRs35SrdlNsBuj345%2FOGJ%2BXzO0NDZ6DQZdB%2FoO7sP59O6wL4YoBuKfgMWqQdGg00Eteg8ezsGhM9TCQr%2FswMojNybjrjbzmkCXgzhb4g6Q%2FF8S2tjRDFFM2bse9Y9k47RC%2BFX%2Fdk0WJYFvkOWfpn0pv%2BBZMMezXPE%2B2fRVgHolb6S9LtgwyZygJdpo7EszoiEz20ogwmoJBgpqH%2FCtWIU6%2BvGSfBfiBrhXf6RS2xSOH3oXnU%2Fts6vJwu%2B9kS3XDpwEcwNcrvyt%2FDs28ggulcFm%2F0lRHbxh9qUk97i9EpSDjbOfWW%2FCNzgRwOc8dQhPVviGh2UlP7%2FwW8WqF%2FaA8TWz1nUtgfNLN2H%2FQasLiDR7F0k5H1iLcxJbWuF8ObJibn4DgNYeJHWB%2Fr5fEOXITu1t7NMLXC3ckGOqUBagEPmMSfIq5a%2BJyV%2Fp9SlHlrf%2Fd5sc2n%2FWePPNZoZVfF4MfyU4P50JdyEkIqW8FeHieVh7CqTPsKdsG7uO3j8CnBoAHA6HpppkEFnITXdZqbvPbaSbSB9HKtrWYgBnh%2FkmgE%2Fh9YZzuYSn%2BnR07sG9cTzEcTbQy1piROopIDiGA3fj2nMazWbm%2BooiGYQqGz6aGBVA%2Fmhb6ubYEtmNqFcVp1L7WH&X-Amz-Signature=9bf6ca58956067615f9180463189d9d5f2183ec1f60eb5ee8e7fa33eac73a4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

