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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOXDFKN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FZNptokdq7Np%2F3PfTSerWRJikpilnDpPN%2B%2Fu%2BOy1%2FlAiAy23NcsLHDw9eeO7YcQhIKP%2B%2F1SkPrT9ap8q9Pi8KG6SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM87kN2MOeRckJ4kmNKtwDz72k9O8y0f14%2BnLfSNXJx%2F0fQ7KaOEuG54Kq39PmaKpx4aFVfs0NEi80Plpz3%2BTKF03NCq0sxYWOcf8wSMQWMcVuY3ecdDSYQJnNJEQF1cmOtaaYRqEOeWesKRLoUF1dD4kljg4vW3lI1H2uiOLjz86okmh%2F8Or4TeCr10DUrBC1zH5EygQ1uVKJ%2FRk0V0jlLogYvaI%2BJ83Fiz4Q9F9M%2BOuZqXdL35h6izf4A8QlaC0E8SzeHl8Qj2wsvVdMHBLx5e1rwpJBxJC5UZsMawfEqhJTl3tcWbo4JdJBCbsHxOsUKIsM2F9ywPYGE9CEbWfxod7LkZaz6VhSL5eTuqY5OxyHMqakcFM%2BaqZXPQDRVFziXv4J3KbpsxK9sRTwccADqoWE%2FkvHudwcqhwCxyxWgq01AK7Mig1PCbTuMlk5uLadLDNmvdEU1GibcXgdI7Wqv267fTmM39u2cWaJx3NOqivpJdXcLx4llvHe0Qlfb%2FRH%2B9ieqn21kG%2BEb06ZFqZIDkUIfuv%2BUJumJdDcuY%2BOxM0PV6UHAXztV6cPlBY%2BpsRTWK3M2ID050k0wlG3wfbuOl%2ByaA%2Fdfuo7k8kFOwXpNsAc%2FZ5AV5A%2B4ZV9PnI0SG1bETU34QwiJn0UPq0wz43eyQY6pgGIq3l4yFyFIrCTMwSMXUfvRaaFHED8QIcHnSk9o%2B%2BKqibb9xAW0du06UI2ZNz81OkDI7KjEPm6l81wfDTxlr2P8F%2Fi7jx3qoPLwa4G1KCMivF2Tu8Uwx7jSwVX7P8KdpHz%2F4HiT7mXV6gt5MlGU2v1C4Ny2edTlr80Pd8G2AkRp9mq266edZbe1P3pyeHXSPoQSD9x0VjrYlCqGErzdT4IMf61hBCm&X-Amz-Signature=cb3b5f2499cbc46afe3799b3e834c4eda0240b1cfb9bb47934df9c2e44cba5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFF3E5U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3NP9KZC2NOnJoONjk7R%2FuPKjRJdAoJcWWrlno3GftYAiEAw0BKBX4Ay8JAjcAk%2B1geXjroKJd1tD030fkiPpXmNJ8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbmJg%2BZxX4UCGpg4yrcA2%2F32iO5hwSNudZMAM%2FSPVn64PTYHGdq7OkDoaKDkH2SdDbv4oT5SU7B1rU8F%2BujwRT58nfve0oH%2Buxozm9%2B0xQ%2Bw%2BQDhAxkbwNbd7AwlE4sxdyEzHI%2Fi672txhV453ntCbQcqdIKbxydNM9mocRNV3zRAayQw2WyKu%2F%2BqbJlcGzxnkQM2HunGCZ5OJP%2FccE0QhBqg7WAmV7wES4TcIqEv6PdZzVZiyGiYEZ5XnjU6F23iKD0bWsIGV5%2BrCtQ%2BWn6U7pu1pxthoPmKNzsc22uNvPyPHZ6tIWUY5RNQuqJJydoNWEmJQyGJBnrhjhqBkRscwJrgA%2FXU0Vcn70mMhgGONkwn0Qc6Fst7NdbOEbi9Ab8CnYi7s98LUJqdEL8ATQrx6wE0lR%2FRw1%2BZ9OjHORC1rz2ao8ogVZCqieVGitvGK6mOB6Y17Y5P9T%2BpaTJ5LewgSNUwHtjIB91blRBYLA9JfHq6LAy4qP3XQZhOWvnZTiFB%2FbS9idFp9Qx8y9JddsMslrNvSmGG8j0vH8IhqiZxfr8sb4hbo45WSoWNW%2F8toCBUv3d1k3qIDd8DvzFKwEw%2FCmhRK1a6yH72Go2N2CDOF1XLZM86f89s7wsCPm5dIAhgyIXGBv5Z3e1W%2BKMLmO3skGOqUBs5eRzJR1xudnvydwYChz2HQk9NiYYGuYwaZkP4%2BNRTm93OAmC9f0dPnBOrmQTZkMEw1NYLsETmOD3vHZhylxEG%2F2Yg%2FJAB3dYUoUdWA%2Br2QQ1wLYZTeXAolnBIFclHeh37xEIuoDrGZ7zCTuXpkHl0ynglf8GUZzDxiuZDcUK6eIaxSyDZ9f3qsdNmcJ%2F84FMuUUxLSRMCrE5agR1ZI7cwRHLf1X&X-Amz-Signature=bcf61965db1032aad6b882a6a9cd4ac2efff2cb976595bbe57cbfeee6d407735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

