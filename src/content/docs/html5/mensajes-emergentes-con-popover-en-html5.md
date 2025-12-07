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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHQ6RYKW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Tdw0PBWx1swBrTpv%2BI51tWE4krHyDaUJu0uS8QKx1wIhAM2CaDQzc79S%2F76Br1aGJzdwCy3MAlgAF3wB3Nyaw32wKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycQBqnv5PFf4%2FyAxgq3AMxywVB2L6aI%2BdT%2F0Ysdqhov7uXgUpkxK7f4r9m4MT8S%2BxAPoVhwZ1NIdHeNVbporISuRVknVdRj1UN%2FadJkMA6cO4h3d7QQslBDR3uYcVOnsURjNlTydBNAaSR4VVeoOMvD%2BWpfuZ%2BMmZUBCcglCgbfZAcUy42EmezK2YjXNi26Hd6CbRNOE8vnGytmLMnI3oKkmWz144QJOf1Lv2eUCs1T0MYkQkCVkrtYKwam9x%2BJ1EZYoenscZI8NCv3t16NlvDBLnz0CukiF8b%2B7V0oBTrRh36K%2BuVBZj57x1oxJU5sHFoarWRaKptsdu44%2FJRzMiYqD65bCi401TaAMqaZZAqA6jegwyHuevteTXfXOELLnrU4hnAmXi4aPT9U%2FGPWYNTWMc3DZbOhBfbFxV7njOVbNa7hXZDl%2FantBWfTNo0mtN4%2FLygL4%2BfEUjGXJUGPSAqBjfox7h%2BUJTUPoIe7qe1EiPKYHhfJn1ja8ctE1Hr8xKrXs%2FVw3LzOxx6NJVPYtcplULFbMHCZ7y46VJ0Zslc4woF2MIYTKEjs8Nr4EMPPE4Hzsd5ZXsrNYTHfiPbAM7N2ZcS043uadpdIghn0QcjWbydZag%2Fzb1fjlanQZoBtvfCNKMbQJxbHfJISjDjmtTJBjqkARH3BU6oHtMcz3OtOAz4jy4ljLG1qJgqmWnYUaHzBDgS%2Fs2GNwvTc8x%2BX0J4zKK7OAYtH6m3fQBYC4Ele7a5TmNKK10CySbwswkk1C7vpM%2B6HI2xmj7Imno5WxIdTGavOX1%2FelrnMDf0yvvZvjp3UH5OBPTiCSKnKqpPYq9%2F99xfZWR4JpuiSGVqbgwgthFTd1Ysf6Uk8ZyoLREIJ5m%2FdGDjv%2FAx&X-Amz-Signature=b7ad0f987491ab1839fd57df6f35dedcd1fd30d549d35c8e844e4dfeab031271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOGORGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTsOZQa1EC07C%2B%2FB9yn7HA0EwokGKF8PoNUKx%2FdnbFmgIgWLi0oEUfGNt4esGFgKCxSa%2FCPF7OEGFOP26lVatBns0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGX7zvfCW2F%2F3l%2BBircA1%2FrmbkrpTM6aTzeVKS7nYRWd7iqCQNU8XYZec8%2F9V0%2B9U4DMokksIidLh9zDwUEsWNAcaj%2Bqo6GpW%2FeY8JQoFtK6pvzafCcDh8Lk3wfAglxVjrjhBr38K%2BRpLvV8hULcih7cO%2FMt4fVHznzsoVZpfdRRib%2BTmInjk0OeyAtpk%2Fi%2Ba%2F5uxCvrLOhSPhyvxlfxsvP1n2zIzD%2FDp6Nyb31jawCQIB3PZG9duFB4%2FdkAdWmluyoevYcZKb5ZYxZFAdAE779eaDI5i3sbxWY0DiSl%2BA8yRRxk4bL4yAMKMKrSP8mJ92sa6wCYo%2F5MmrbyhHw7QLCnixRwgQ9VWK0QeQgD7sB8v1YvfYMv6KN3tFI2Z8vL1DAarKk05rUwnMgdvVeg6BS04wBeYTEt8zUA%2F81kc%2BaUE2RBUPGCBiPaDrlIYUlqDda75vRoRZjwX0xVZitgGaYyoAKxg6MiKGfIO9cPJzv1IPys%2BQcKKt%2BFS8Zum4hE4EEe9Lp7cRg1NKk6SRRQFNNrbkbxksLE8wbAhyLMHbjV0oPXIc8Yz404BIk1ovkkqtbZtBEoIfcbpxyvOkzCJt2LXwI2PhyaKmwd%2B1khmA1qJ%2FzW5FZsMyPlP6Left3cN2zDLGOkBr%2Fl3LLMKOh1MkGOqUBFVNRKrYCUH2kLxedv8UjRsbhlhoZO4fF%2B9Ke5z6iw4dqcjXHMIPVvRzF9kPJf5F%2BNiVfbqogep1LKNh6l6pUuxTNMM4OVkv%2BG265IyMsVb%2BJ8tf5tyETGG1bFJKM9vqcmIQmaQ%2FMFwVeRRfgENkV4EDMR0fWV5ZhrqfnGaHVmO9TFeaLfBjFDCmx9uo2CtDFqNBnPPTzyehQNJDgyGla4OKjX9%2BA&X-Amz-Signature=6307cd2ff4901a44d3be362d2f7a3a117ea7ab2bf23cfb2277d41bd8edfd2ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

