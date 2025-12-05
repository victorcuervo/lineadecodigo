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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WLY64S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk6R7jmNn41CKSg94TgwhewxwpHytC3oHN2iP5cmhUDwIhAJz63esKzs25p50lO8Oy644tza0vmZy99kFaK%2B9%2FrbfrKv8DCGEQABoMNjM3NDIzMTgzODA1IgwgsZgBCAfU%2BshmZesq3AMy8sFvd0dszG1Zgz25vgds5fDNMs2RzthAFT9czIHHWMk36MHLvvJLqaUMTx4879EDlj3r55XtEeQ0WoODjqlyWAr2N%2BeuDSbSLzbeLAvR5RABeY4dPchZE4qWMccQsIO4jFXj8EY%2BcTznLVOd5ukuoiUaTM0ksqu3CoG375Ckm9jkcHaebnb3pSmaeM%2Flb3jOnCDcL3FTH45P%2BPNacMcz7oYlPKgD9px8s0JiIuAIzBFjV3OfGv9LheJxwEKKY8AHjrazxzulWagssZ2uAA6zn7XaPBbOpIIcgnvM%2FP2zDbNmsvH2Qt58WR9C68G64CfrwE8b59GlIhLIbzhGyc77l%2BZQOiqlZNPIemy22N3BCrDU5nozZq8I%2FwAitmzrfnvkf76elVj1Xo1%2FLewjJ1Wp9D63bj3zWiC7crt%2FWyvIXU9L0f5mzPM7Jn6o43BehmecohUiyNABavoUnwwfPdgBDUrjRjmKp8V1swyk8I1Gn72JgLrqn4AkLEG0kM6wLeSdnheL%2BG1zI2YRY1x6H8Rhz5hwosJf0yo9lWIJ%2Bn6j8MQvZPSzoH8HeWi%2ByAe34PZIB5tD7oS8CasTLkxs8JU2jkvr1GUbJwfMwlneB4rbAa7Ie16MhglrOdkZ1TCu9svJBjqkAUWhUPGFIfCKLIB38u%2FPaY0my51UGMEX2jiprdlXRdAk2D0uUaWfEDOgT5oUW2qyXbwMi%2Be90SRhRvKHnvSOanGqKoGqL4y8d2KoaDP%2BU5MD25uQEz9Vr1mJfzKKbbPb5aesbzl5kJ%2B8SX%2FuiUXzjqRbgrqSXBJ7Sv7o96uQsjg2Js7zMrsqlIOv0U8nNNNFw%2BuuWW6YcUfP60prsHBRK0M8m1aS&X-Amz-Signature=0278d33e1bf2525a4038593eb650e0dae38de9f84d2ed817cd341d8c92a41479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W5LNZYD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ymwPHBYyYKa76I9DD4CCO1gabLMSSsoXNCZwFcjeiAiALC3E0EwDa0%2FcWI5rToUcBACzpuAUsLFK9gqKpw3dxESr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMpI4WhH1CpLmFHXHyKtwDdGqkyixge3TNEOtcSk%2BRzuBkVbX76GBzsOsJkAuo84uqIXymMnRvGfHfr7sAVj1aMO6pwUxARqre%2BgAPffjZfjbkvQBuEnbrLjzGqQbvirNHiAf8tGmIwdSe9343gtzvBuH31tcpU5%2BHxOqJ41u146BOTivgesxwVcjMe4f5Kcg%2FzSrOGEUyptyRIYD7yykP6Qiw6h%2B6sCDnD%2Fb8xx25HhI%2BTC6Z3CKHHiTM0z1X2ZPwHsnBKIOFL5AVdcU9yXSmKZPH%2BPjC%2FbS%2F%2F4qwo6nx4BAlXv%2BzmAt2%2BRgsD0FWzfKkAeeBdvh%2BjCwh5U9HE0uEdlbJN0EcBBJtalGA9Qws624XTj%2B5IevqcuAC7HDfOxbBj%2FR6%2FdjE3ju3XNDXZmU%2BKdnT52gMrPhQM9k121ISZU3nBP3%2FP1y%2B2iMzfhuoYTFcdOU4whnflHXqXTDbKtDRhGGX3Egq62ZyVXLGlOgHFlY1eLbNJLhnr4ckCdtm%2FgtgOhPG91kPsEqvkvUHYpGarxo%2BT8BT4Rk4ngqt27rn%2BAO3kNrzz2GgbpvvPTYdpbFvk1zsHSOLVShg6FuWo4CvNIhfSglIsMJ7E2BFK0HncIDXWDpDhab4JiYce7KiJmKNNqntbRhm2uN2TXgw%2B%2B7LyQY6pgGxTgB%2B%2FwWgPlpS%2BnbxFqqKJJTh0qUf9T6wyC8QrXsFAsAx9j3MwThPf0qVPgAPkqqieTRDI5ILQn3PGtFXXBDmAoWHrod8Vnair8ILa2PA5bHv9oxsE2cAuC4E8O06MUolWhVI%2FpfQDnSpXLsEqG4life0kCFcjI5slsoT8n7Ps%2BCeULQ1pQVv5Kt91VRymqAQXHEIrY4nNO9nDWLM0D3IKbGO9StQ&X-Amz-Signature=b812ddd1c172249e36678a415770fbadd90281c613ceff2c53e7c2e4a457b1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

