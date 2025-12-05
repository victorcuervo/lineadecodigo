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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFWERLB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfEeZPEY4x7jTptJK%2BOBee9dJ%2BRKq1SqFMjy%2FR0KFr1AiA4UomElaZbzLijBnBRSXVVy69lpj4M4DJYScLX2xrKdCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMcInNLDXbe3WvDkEnKtwD6w5zezbuKAWQnCtp5naRtcuepXy3fifQaaaC8seBOuevAMxRwVRNOxo4Gt%2F0IIOBDQShRtTmab0ajKWV3rebzQ0cGD%2FvKs7aBxxcz7DEJFKFp0ZZWb1B6R1xvR9ahXplMowOt6jYb76Req9iHc0ewngyHNCpe1mD%2FfVi8%2FxCis5%2B0m5YUctHfj%2FbxdoFR5ZNC0HAA4dOMTLxpHF2GCiGPLWjhFR4likZeYjv9i4ds36pf%2Bgw4wDBOIcj%2FEEV7KMs8E0BRVWXMnS6KBr0Zan7e2PR2EfNmR2h%2F2gHmklilS3L%2FiBUiozTfuYUMr3C3KftldMwayifAWejvhZ4MzSZ0byBTfYF9OVVPHJHxuGFPNuob9Hz%2BeXpWXc9j0F57avBGDzmZv5P%2FdSlWNW9VmGdHpsvpYk477SQG4yv5od2TNpbkAPhx5oq9nbUCBVe2JDW4xR5nsHsf4SYmsYlxvPwu5Q4UQ0vlwKWcCVH31%2FFPOyJRRwdzpAgjYu9JRWMoSTyMRpKWlJ20X%2FZwf6NnO96JCi6OoHdtTtKNp%2F2E%2Fjush6l3oCVPhtQxu1OvQ7Rn%2BBQbBbAgP0aGNj2XFzqy6Q3mSEKttjHYBwYYg1WccS5fTqyPvT59idhfAcqWhow84zIyQY6pgGh9oqxm%2Bc9qUJWXwUyaJrBA8BOoh2Kvn1wA%2B4UIY%2B%2FtASn60PiqggsXEcGUBXo0BlKtJ4l%2BSWRsGOtJMImuF4caanbmkaj67IFgVlwdaoNelAkRF6DlIFZzgLgcBty9pdirqcCciDkbcc%2FW%2FjqgdoNwpxsK9KeS5mfOVTlQk4o%2F%2BAI0jJxXLZaJ%2BJ%2FlYoS81Ksr5r1EvKhttkaAAa1I%2FLX2jEuD1ze&X-Amz-Signature=213ba219a13d1253b9f9750940c9e318aa1261b1f1cc77316257d1ca893c5ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRBWXCD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx1etw%2BLffETTxh3emkuy2qfPxZDxAMH%2FfMHpG7ev7SAiBoDzgPRqvJFoE4WQG3iF8nlxaQXLWlJi9%2FYYr%2Fn7x6RSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMN2kXgNjQBAEUNHEHKtwD7eIJwro7yv2kr4u67tCdk6yEDicIUj75EECWcWcbKC4vjEpziZ%2FbkF9L6msGxWiH4PfPzWHqKE2jygXKyjBmRLBvyxtWrLf%2FVUKy%2FewSnz2Q1c1TVrC7ESLyk%2FVwE5%2BByiD8QlS1rB5hWYCVpy5n2H0hOGh1fjhcnJqlvpQlNAebvKclJG7lxWD0wKTwoCmpQnxnfYmIaZY8xzHmW0lptq9hdiZnowI9CWFWIkTUR%2FQXhW%2FURlN%2FFhQtiVKelmsdTrp2AXf1XlgzRtdKQzig3xOedIUJ0%2FX4tJAksNmHuiSQTpymcqkCxaQ5dWkv8RgGf%2F4qATIWasBHUJ7XnlUOJVz5V3QAZrWCxDHTKLhoVA%2F%2BvV5kgqW1Sho6DXNH2Mz41HGYH5jyfAh%2FrEFF3XCHPLUBvDGfYsP4UetlnQ%2ByUTKixVWdhgZzHlqx81f1NpIK6hG3%2FQcFBUss6k3bjjhh2ak0t0mVWMHoV9YYPypy6jRG24c%2FabzALBGknNAJFRv5NMMGWhD1CNpe1VC0ORwrOmNHjMRBlA3Asj4SZLT%2F%2BIQgQZpPbgCT6QPac1yqDoRFskt%2FtJrqJulOpl1N6ArCyEeVBPG7v3z%2FDqp1RQ%2FVkH1Iu5dy1h8lbgb%2FFaIw8ovIyQY6pgGt0SVx6%2BvDkfU6%2BHvLQ77dYpt2eJk8v5gMIdaaByJJAk4pylasShpjD8ZBrqOML6S1Yk9gsieRiw5%2FYJO9QOEARPgVYILDStNl2vkMyi3NvE%2BbXihpLZ%2B6%2FXFIqW6LNwKkPVBpM4Ow3rMRHGxfp6F3bqiPb9fuUsgRitnZQOxNCK1u3PFrNuNXIIMLUIp8FsJ9dPy9sWoahvvLNi%2BGuy3tkjtZ8XnN&X-Amz-Signature=9958c4a24357091a2bc0a62bcde919c7c0bc08feb9d499bab875b7deaca99186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

