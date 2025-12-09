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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4WDEJN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGg8%2BohjRzF0Z%2FbpPAk6nC0yf9P1Eh4k2VsC58hiljuLAiEAvH%2BqxknvCEKRkboslUY6K%2FFsVHLfcQx0TuGaCGh3fPgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAF0WQV4aT284x3uESrcA9gev849ltz3mtND7H7ZDFx4jCZh2QJ%2FBUD0n%2FOEBZfVVsuJrD%2FshPawiwbNG%2F44jlAHHM4haSwBMWqzlwe%2Ba%2FBJzItcBx6HHvhlYVhcHh3Yq7rRt1swWVBLZKcl7lj%2BqQjlhf%2B0x6wa6rCG%2BQokP4Ax7ef3yUJyx1dB3Xrwb4bVE08MAyS3%2BNwfqm7BZK%2BhMcs54dGsU%2B7kncZdYflzs0rjdkVEYIgqcCql0DvIOHOG9vwIlX9fcF0AY4qi6Y7ZkeFTisQb5gf%2F%2F7n2fPw%2BG5rHDZdM4U7xLtfCQViGE5RqexjTeDkKwQS3o3OhvxWkRwv1Cp0CnzxDV8OkqnVcFYlSgw0F%2FRp07zUR3I0clj84TiB2HSg%2BDrm0X50i5JP%2BVIa0ZBKnJX9myrZ9sIFD5wkcpCQOHZNvkmq5xtJ3Ra7nyhHcJoQSzfeumzVpv%2BPFQzjk3POwS%2BF%2B9DOJupjQnZWjBdXdl%2FSVMpCmuEQCf1uqG4g6stZOmA6JnNN3a%2B0y5wm0zSjSb0f7jw27GhTQRC%2FlqO5BOyvoUdWi4xkm40mjCVT9tgPvpA%2BB8Nnc445Fp5VDwoeIo%2FiRfC142dHkW4ADrXxy9ZWNaKDJ1pqfL10tXczzUdN%2B0KjcrhDGMPnk3skGOqUB7NzN6TnNEEi5DwBnmE%2BC9b4VnPTKt%2F1w8XF6QRqj6x1GEVB6rFqK5NFXvWi85zbhBGU%2FZb7OgSnxreI6qeQyPw%2F6V17XkKsHZpGdXmZjWaDYJU%2FygSgbLOdl40AK4sbJXjR8UuU9kOvndGU5xGDZOA%2F3gx1ofcwZ9rbahM4STE%2FDYb1epfXppKEaGlTBIXyZMpBD1UMIgPaOllSUsukpkSuzqg4U&X-Amz-Signature=60c9945ad75c0173a2d94ea0a2e23e87c3a5233cc8703d26c7204bbcca27a871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXXVC7X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgQMybuEC1x9iUGqFtwCk2O19wNUVTDfDkUYppIzeU9AiEAynkvsH%2Byr2XkWUh%2FsjU20N2Dj5XvzNgzP1iknN8ftboqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPYw1wGhM5Wt8uPQircA1W0A8FeMrW3vkzcTGbzPWsWvTCsf4DDN1pM0ItDhZLgHR5Zh826KBCAkHXPM54U%2F8OyxkydxO%2BRJLZu1JWFAUfy1WCy%2Fxpe9DAoazxsrUKYBDwFtl0m5q5dGxmvvCMHoGdMam2t1JJG01FPBHU2aQooraot78tqJczTQW9vcb3%2BLAgcIdcLeQekVblvPAO2tsWOAPAlf39Y8PvzhAMUcmrOadVyhZK0r71vV45O2WKHmVYMwnImO%2FP9aa54XsKxNso%2F96d6cekNFU5ADzRUFhzwY3zTwW1qO4NPlw5QgG1Gc5vpr%2FBp2TtZM909P60CpiLIRSqJWltnohdRK4geDtRyP%2FCuUtLGnhbXcjUsT6k8t7ggXxWIPKsYV3NQRc8cxkMciCGTRX%2BPLYsr4lrT%2B2A%2BhyACrScH9TjmmAKcGp4rpa25UkgRKBPZPbLDYSG81xZC9b%2FL6Bf8M92qwQwK%2FpSQwaTi4EVg7Zx4d%2FxuYft4SL%2BsxwVaFoQH8qxpLN7VZ%2BggCzABgGRDKpTu%2FMrpfNY6UDzO5rt3TsbMShHVNrk%2B83RKEOTwIe7tcxF%2FMdgYZMDLyp%2BCmw6lUK23BH91zQUP4pJXMuZqP8jhqgrPq%2B4RekLFqUPi6zSnqx13MLXl3skGOqUBs9Qrpyvqog8U1DRHAeQ1Xz%2BoUMNMpMkmwnTejK38oIoSX1aziFC7LjavjDJXS2CDAsMTQYKr%2FMPU0T0FxQLTtudBlWau%2FQMO%2BDPmBY6qfqYZ9V94ZCbxfYWWo6HX8vhv2iezohyC2vZHY33M3MIFBllZFh0juSs60Nsn7T6d5UhvAcg%2BRhZUkAWVzPvRx6YkeVkAVk9gVeKS2n2RLUlDNQq684ln&X-Amz-Signature=433f1d9ac3f5f640887a777d863fc8da3f87542fc17bc2adf9426f1c8d441adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

