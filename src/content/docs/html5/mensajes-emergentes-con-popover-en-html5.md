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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCQQWNGH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtZo5moKnvZZOXRYAd5e93WylVVy63I%2BxIyonxOrKHAIhAKxHip3amzAlpmJJTWvyZ%2BG5ntcw82TePERPisQklOj4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgwAFo3x8dSlDGk5e64q3AMn0%2Fzlgny7sn4SdAXvqHA%2BytZ%2F%2BJvD8KmMjDZtbt5EVC11GF5JTiTrXGKgzCkj7TGQPH%2Bv8g3u%2FjniBK4rFNWrMzz1QJ3l75MJS88sFbTC5GWk0xbEqm%2BjKMaInup9wJntUxXQIi94q0cwsq9p1KtQVR2QTd2iMvIMX7edCXBm6Oo2non6qzmJ69Q2rZJ%2FeIlr3UVDyNcGMz1R6UTHIkOvCgYrHRG5Kfm7jbVcQiNCXvY5sBTWo2J1Vl8VhjwZWK8TXPekh5T3c8O7OQncJrQ9K4Pd3fhosFcfjVPqXOQ%2BQ4msanUumtGFXDaA3snelImqOqZ%2BfPlh1GU2I12TSTd0HmqlFFL1czR9XDI11SwL5HvxHw331zWa01Th%2BZWxNO2gt7zCIrAxDY2G74464auJRJMo2hYhtGlBrPLZZL2gxozswHwthRLKpOSpWJ1hYWwu5tW78kte3J32WHC68ZS6BKkbbCi3vQk9bwv%2BlW%2FNhOWuUp3iPDBGPDAKBpy4g7pbzlk9YdRITHwjOuNSxQGML6RXuH0p0gTq3rEb0CjGoS0I757MFD7zvejmgQ%2BT1itaNlVCnGj9XPeFaGIviCayrPSf8vrpcZ8V9cQqUTBV0AwrRbHHct8wTFXpUDDqqsnJBjqkAfnIRH%2BN6cbfQbtmtwxZSVF7eL7OOj8vvhvhgqQsm8lSct6JvCIf7MiARJ6Mp3301WavAPhA04uUtjcWelN%2By0FgS39xH%2BFtOTPxuaEKlP2yEKmAfJYDAMVXurWhrYqQSy7Eq1pLbF0PWjcCD%2B43CkL%2BrXUJ8PrHeCY106Z9ZhGC1dPblBSd9oejPRT0ctdJSxOLyPLKEsLk0pY9zq3M7E7jctAj&X-Amz-Signature=2c0dbe8c92bb5e26538b61396fcaf25e07bcf58ab7e3e273d2559f7d087eeda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZI6EU3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl%2BGSQQe8L%2FG5qQVEUk6rtSzslp4yU1ujOIWmI2EL7DgIgFLnf6nlUmxlzgwbovJnZqGHqylaMPJnNKlLnN7oT0L4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG9mFLfCIa02ndSElSrcA9MkOO8hsfIG5dDAs%2Bz2iwTe65Hw9i%2FEGCfi69A%2BUA3i0gnWk9e1Tg7IUhWuedAaJao9y1HZEM4f2AxwS6Yz0r57WGShWGvRszfM7MARrhKZ3jrwBd7b5SS%2FSf9GJxdbM5O2o1MljlliWdsZE3hKz5EG3BYGxG7eyAeHc75OynBxLHptcpsrpstpPq%2F3UNsgYi%2FNHZilN%2BBzLEEkv1G39f3%2BvbgQbKrZ9x9v9Sd%2Bm3H2oqXbUOTSFOgXlXbrX0eFbBKVuh5YUiU924UKon1FB0Kq9iElIH6lw2WwtSvNupLYu4e90IVSP85sVjhy%2FDbxLLPzWW6cWE6G%2BZQrLjr1GPoYZupV%2F8coTYJZtOkuPA%2Fv53QtU0U3Qbi3InDdBvDao%2FxpeSOoRN8E4lkQMEqY2ftJpMuRfUYhR%2F7NBZD2xlowBN9tQ2OUyHxJ3Gzwor37OfKI%2Bc0a27awhx4ZkCC4KDA3lkG6rDZItwrkYR82fnYqefwvprf7LV1bDm4UQXn3x9Z9xjl8AjWCuZ096pwead9Iv2aP5rmH%2FbWvR%2FLWlwukHqavZ6nvJnlMQ9HKsZJQFG%2Fb3VoWUo5VqiLCD2ZWNthGibjDLWl8WUlPMtJ1x2Uu2Va8Zb355LEg8TCuMKGoyckGOqUBYrNsrAco9EWwoqtsajwaOHNKaymM3Oc1lti%2BoJ8h%2BT%2BM7JWOJon0VnHZRjFfgBFzlQ3dDDpnNClnEvcyTd4UQU9DECPMp6Yrw16lvuspmFbIGKtLm4%2BNdHEjF4vqR1YvCyhuQcY5Qe%2FI2CHZ9yojJ22BVoG%2Blc9tHYAGoyOMRmWV4HzvbKe2LvJFnqJgor2Z8TBoLbvopSas5o%2FBWxPXbhAeAzcs&X-Amz-Signature=c5950b14e88c3f991c5e4a8c64ea162988b607419be4a861771b35a770e519f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

