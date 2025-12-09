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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G7CAT5X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4EFXWqQY6mQkEjb7FPxEYkOBZ3d%2BFOnnLqGD%2Flp2YwIgJYUDozO5jAiLk8xwx8Db%2BfyiQ06mgHA%2BWx9AEkiG9r8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu7dh%2FXkVp0iyk4lyrcAy1PYj2aiEARQfKWxC8fzxu%2FPK92%2BPZ5AzGsr%2FfTD4riENarAx4xMzZMALTp9CR9rpaBGWmn7Ctzu2KqWlvJEghLLEh7Fw4PQAJbGHSDBJxyGF%2Bbc05zVLaiiddNLV1IBk7NqMVgXy%2BHvOWExs7MCSEaIIFskI07W4CPchaUzYfz8pZlVWbqKWwX1pjFJLpTqUxi9QvBpjMrOYBb2TWM1A3jBK0Twjp9pJ2RbD6a2%2BaLPSpjg%2FsTYzIfZ5TG47kM12V%2FYkrEFKM4t402pL%2BFsvFUI5RSJumN90ck55PrVjbvLYDKCpP%2F8575YSCWcdBXmlAycscUtDIJ7dz0Kz9Ac5Zb5QHgVx%2BRzBns9hdu2Jl9txhvSCU4V8g%2Bbizpn9cZu10CFD5j6w7sSQbaK5PKJhvizE1N6%2FqUIZJMrvwVWszsM2EiSpWOodPV3RSJNA8kU7GNtiiA449cTJt0m7JN3cP%2FSnkjHv4C4lLblBHjfVQ63Yc1%2Bf%2BuCsSTKFHSmGm3T54xzb7tvpvMAfO%2F97jDL%2FWuFCHosFDkZlj%2BKE%2BzBq98F%2BHGiukc8vIJGEjuYvkb13VQQJl%2FFKPnSBEIawSUHKGcd2CaUIT8BcSxr%2BDGpYFKv3g8qGNHjRTVFBiLMMHE38kGOqUB4xio50CKWG4VlqzFm0Mb48BykoLK6L%2BF%2F6%2FjZm9S04ZK3sUcoB1KiLlzrxsGbf2YPMg9gT8AumiR8fgq%2BD6YntoKeSn7NvzjXT%2BGqWp%2FdY1bAHhmSq57NGz13UhtpqmGN2cZ7C1ncHVy%2FeTl%2FEUNdxy5IgIdd7AhCCjhLu8YOFmt3R5zlo6lby81uOP6i8ro1gmW9IwP2e1iWTnbDgG2Wdj8pPEu&X-Amz-Signature=c577c6f6919c37557f80781c4b6c774980ca7d6d97404a847312f0158700fb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UHHUUP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVlJw%2FPSEm4vs19rq6guBvZl3bhNb3ZxnntyyM6X0YYQIgAjuBFvqvEx6Kbpym5q94EhNexDCfx8LLWZ5GwMiFUpkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUD5gRt3xfKuw9uySrcA1%2FMF5JorZgmPEtnYEyNPv2h4F7PcAaju%2B%2B7sSDcAHiv4Rrc1yMs4anagVIPHsz1VcGOQaqAQWlcFtiX7w8bzx8QdZP46%2F%2B93fq4LnLbgEoZeKpTNaljMa%2BUFqsLV6yWocDmTzr%2B9zXXEalTAgIIRZQqAQSxDY8wtJ2ih%2FsIHqQ5DDjzNi2geFCytly9YKN0TFfSwDIi6RSSgfnp1fHClR%2FJzq37CXXFFs76%2FMV5mZnVKnbrb7QNs42%2F9ThXdlAlaqqlOA%2FOaQTF2qVn1wQZbfELiMIkFvhzZKuovnfasbRso0Jq%2BKj3HoInTHZxJHxnE7zKmSy%2B%2BgT0VFdz0%2BnziI4YCKAwwNUHEYAGeQH4ZrSr877hPyM0hsg%2FnNQjYyIG5DNeEKjcXlD3PQ6ABNM8ZH960aKSImPKp3j4fvOcy%2BVbr8Cgkl%2F5BQKpFKNkcdmicXNrXw%2BE8WPnRo6M9AoL%2FUC36IGjVaqXmJ2uS8cgRwoWDQdw5bSAlWKAqBOTcg%2ByH9VhJLei%2BphF6nGX3SGHT9Su7jdZg02GiYdgh8BmZtgNLYUwD2EZTlMQKAF5J9t%2Frv42Se9gszACJoxbv7SUcp0OdT16WFnMN1rzSgd9cPNwphRbVRtgMCCULGQ8ML7E38kGOqUBVUgYtMXXe3Zyg1pX0m%2FUYsTjpCQBFq4H7Oie94%2Bi4bUtMoDvMjJVHjUhYw4ApniWKfhrJ2bJRV8nfmAgTb5D4jMf3QF%2FBcECKI9NHWiyR14YvIpe2tFIddPslH6WMuGp4wxfQSZjyq90gIgNH513ibjygYOW4dtk8%2BO4B9q50RWMyyrySoG5RLN%2BBZ9xw5mHsE6%2FRfbXg6zgT%2FisU4jFMgAvWRDw&X-Amz-Signature=f6ffd100d752794f585347e4290678efea2e4bb2ccff236553bd4276d360b6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

