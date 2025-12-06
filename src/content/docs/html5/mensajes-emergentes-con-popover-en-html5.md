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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSF25VYP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh1b74ZrvvI%2FGDZp9r6KOcywKuiJeK2miBXwawBTfaYAiBC%2BzvOCRBolSsuJfTALkYb7FJ65wAR%2BB1%2BQe13PEt4DCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMVLP%2FtKHIjV0BXm4lKtwDgNPF7bC7dz5ViHwMmCMpZ%2B673hVaxGZAeidKShW2b06oMoQFfAADBBcFDy80BzrgbLiuTriMsT8GN9Ei8M7nERm3Z8suB%2FmjTKvpjPfFvcRDkjVrw85RI7OKpLgq0r8MqJ8wYMvq5Z6HXfeRFZanff7bS6wqlTxKauZGHv8T80wP2caxQidt%2FLZwJA0LwuOAAQThIk1n4HpYMrwkQ86eqpiVwesPY9S0S%2FqgTeaE1m8JktqcE1%2BBE4AqAPkBtQc3gEAwQfkE7nlEVblRDMTIphf0M0eS6IywFxeoJN1yFal3eo0iFQcAQsDwDeTI%2Fmz%2FLsIBSCs6g0EfAjTQJLMIByNpC6vN1pFxs9l%2BiRaPTA2EFB9QnfvB7iZFPCXXQmEJwi7F75jL69gZBayBNQw8TLY9GvBbSYiqvHqjMjqoG2okiYs%2BjAI0qkLMBWL8JNvVdvPIaog2e0Bm2DNZrr56T85P%2BEd5627HTd0DHn%2Bp1DVnjTBXFU3m7aYxP2rKm5diytpQRyLVTYDh%2BKj4%2BQtROto5fVAuuoSmX5LFpwpnfIGGDd10FiuMYN%2FrlGJ6RznG345u1kQ6nl%2Bs2sewcJOEc8kQ4%2Fg9ZuaP5i0AyrcWA3lW4ezsJXZN6pdwu7swtJ7PyQY6pgFuKSfYlCxsds234uVUkX0yfkfv%2Fd9mOZqO1Xk8%2B6xzv0Q03snOSkGVX%2F5bIzz9Yv2U4AL7yO73EpTG%2BNL5AMjHd3Ssx95n5TCqvhYNuGfCKoKIDOwzm%2Ft2cmXuGhlE8qrMMcj%2F%2FoGY1LEwIoy0rFT6c9cqnMt3gLNBnifuQ%2BEDnu5L54rnl5vSvwl%2FTRrs1g2Idv%2Feckuwq4nTGrlafpiWaeNB9ZTO&X-Amz-Signature=3df43b3c94df76a8c8c8a12eff6749d8dbc754e24d4587094e0da844edbff53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAH7IN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdaRiZL41tbRwzLmL8ZmWiRLiEC%2B6ODtYXkc43heubZAiEAqweq7iBjalUWXTiLT9z1eVTb1H0N120QLepWvfskEUcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMXQdkPduERBNcleeyrcA3ebTZ69AXZwpPVetXEuGLIy%2FygIBTmilahq9ATcG8LhEwNSiQwjsQgNsnUp4KDCo2pr15OiDUVttxal4U3NWUbO6To2IAC3uthzQqx7VrSIJjTWmSJCnh08RZbN0XY3j%2BbQqnFWiFLpE9m0dg%2BfFWfpbGkKJ0wxrnNjufi8fVY6UBw2hmY9SIz084wBMT8pz68j%2FOMBDA5gincQvDvyUnQqSCMKvFM1oU7AB7eatDU7G3m%2BIYucKe2VY%2FC8OkoSlhvEYQ6SNui5%2FFWAexV4Cg%2FOSamvZNm8fPqsElG75Ud4qrAUZcjLpc%2BwOw38cjm%2BCopUZDuNsbDNpBu2KN3iQbYWu%2F3dtENAkibj9N%2BsHGaKoD1QwWtWMuUHW7U%2FPKLM%2BgY1wNBSoZRf2eujqVJfz2KssbHx8eS6vdMiQ%2FEgUmBbutNVaTDTPx6UfnuDW3ulnQ8RrBCDUdVmo50qfB6SzyTLZ3ILWjwOiO91O%2FgOL%2B4ysJ3N5kxPbnV5uqCB8KPl5xpcN2JLtA741uPRW5dG5YlqNNmi8niGGJhf4gbuC2xYJd%2BgHnbmhCffjaOxoWXizOjZ0AuwOZws5RYOD%2FAa72L5nrCXiaPMza%2Bn1eapnvqcrSudISvM7n3bkOp%2FMIOez8kGOqUB%2BACwJCksrlKx5bk8eZf0VnkoF70J0MizAk0XatKvbuQSUe66JFUgmfucmifVK0mAAjPzE5OOP%2BPmMcGLerCbk7aZHICB3ey7AehoeQM0WosnfGd4cBOgRFDBvTxckd%2Bk2V0NVhMYMxfmrAksuT4JpOV1BCyyFaS3yE1pMNLQS7ThoR3a%2FogBbgRRh9wxOdNFUw8UdJeQmaEIBB8uPBt9L7A4Rh2w&X-Amz-Signature=ebdf61b7db99c7a4caed3301b445d9f7227acc85d55bdf2785c50572e49f61a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

