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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UTRNO5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFbn9EPelKkKVThN0zW3M%2B2xUBpPihOMRZsQDI6qhRQIhAMT3Buv3T7xETsXde%2FvMT5GSYjG%2B0qAOUN2iBq3ssEtEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqBIMfAZNoHY6QCK4q3AMgQJSlA32DjLHHCc4SrG810Ux7pgM%2B4jGICPrFyPWlEcX1%2BKDC%2BCVpgsYWNUQ2UyBIWJVThvD6tPUniEeuk%2FuQXleOZODdiABb%2FlY7V9k4yIlPRF46pdB4BDYe9hjdk9IgoMYTgNohdePj%2F9%2FYM1kovfrQ6txzyqrisD2iV7GMjb%2FQ7yrXgD13QoNC12gHqGJE9HkzwLF35azMycdIfKZrkOAktjyIIqp3QfSmneU%2F6kJxHPDv9X6whzL3JwYd%2FphX3E2AFvaa%2FNSGkJFPMX66rW0XOzYCTOhswaeTOlTJbJuhmCPSdyr0b6KoUCSqK7xSQL1JL%2F08sUVkmbJALv8tda%2BMNxf2D%2FGQHH%2Fp5uztunTGU2fouT4W1lQJ5ieT%2FpDf28aRW%2BQ95JLxPWsQsk1CUDHFJbb%2FFsTn2iqmq%2FA0PI%2BXi45up%2BkHfz5BWP0%2FSu6X7Pj5Sjx%2FQGRY%2Bk7kMbx7J9iYiu1OoOcDtcRaQJ22%2BB02Us%2Fp5KzPfUw6ligvLUuc7VzYEkVduQHAXrtrL6x%2FgdS93hEtuMqycTrIuR9tW6ZftR0%2Foo7tT%2BinCgDb4HS%2FErqobeQPQAlB6WCKbgpefKs%2FXK9fdRkTQ3sfdg%2Bqnku6gLfL9L0%2Fa5i9vDCiw9%2FJBjqkAYgoPgo2hbctFmZeAZnbvKNGEeMzT9UREC%2F1VpK3cVP8zcsdte8Nj%2FhLCwG83GNVYhtVy8zY4mbzTS0Un9208LZJCFnnXnnj3%2F69lnmXrXNn62HM7E8nSK9G%2BBNceV551JWfvgGepnPvNRYoiUhwFRaGntrmKk%2BNhKtkLr0SCuGwEPaH8isbhtfcT60UxJ8iXM%2FZYWLhwmAM4sTWG1FBGOUPGhXG&X-Amz-Signature=4a9e76644b6185a7380199d5cb1e40269b43536ac3202391edf0f02d9d39127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOTQHDF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTii104NUL9ppZGcHMwgFB6Zk58dvVfcBW8UE%2Fni1XrAiATu6lL65ivxcjrD8huPWnU5XLbJPRUN1vtoiy7Zj4gwyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Brdpj84Dv695yOMNKtwDJzQ8WUxK9Sc1LFcA1x9XS8h20OT%2FsmHp2X2NNTEwtxz4F0PDA3Gt7808JSQLZWGpqP8dK7O4Nq9IEMbCs9wCRfU1L2sSlZwHa5zbtN4X1CZfSJIAwa1hlFs6uczsS47j4GNzJUm%2FE2SbK47fbE4Zm8%2Fgclmh3aFYMH94yzIH4cpyRdEDef5IU4blpCoREIq%2B%2BWtEb0lQeADSmkWrlQTEv5naYesPBRuBvkXvDgJXy19dFInIIlBeEfDia1%2BV%2FCbFs15qsuHtwEwOFwyUtS2yvc397S4JSTbDSC%2FI8YTkwPVbY1X%2BqJdpsRisWRA79ZQL3TaF5TrZIA1aQm%2FtQ1K8lIeuPEHRNMsDsPyRE1dhZ9n%2B9WcFfV3u1mELkgSiBQsR0D7EJtDHH3J%2BZTG0fq7pwYnlH7u6N2EeyVyqNLcs3su0uJ0RA8d%2FpZB7K%2FEaDyJt9d5gRx1l9yttjyd0voC9Nx%2BfmGT0AnZMZqHRkRJDGPIaoKsWTde2lkohOZSOKb3REWeFpR9kE4TMGEKWKUAmttc2I5FV6sGEl3WYKIQHFVqA92AUD5UGUJ3hc%2FZdJqyLLfR3B1ZIF0PiPFEPr%2FiOp2W8Adm47WMvbxElFZJsdqVGwbeQenSVoq8ArX0ws8TfyQY6pgH%2BhXBrVzr0EJ%2B6xvpuGBBTbxi4zFKPr3U05h4k30IpTDKWrPzh%2BhYc4aUU1zF32kh0fKo57XQE3gPkEICEuVvc7bJgakKCnJk5eBhiHuEJ%2BsTwxgGaa161xKGNoY3mz6h6P82Y1GEoyfYacyFas72QKbOEd4VM46JTTjX05pyi8nrRcGtuSter7irlZT5Z7T4qRfzNfpkHtT%2BfBtT9wv2gmb0gi34P&X-Amz-Signature=3420a2a6e409fcf8fedbdf304fdfd3047a04054cc72279545bb8a80ee20cd026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

