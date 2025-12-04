---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3V7LYSX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDwjnE2M7XBLewEabOWzBzEfDnO62btyxxDHIly6WxFXQIgdD9bde%2FFZ4X4Dht8IxRoTZnQG%2F%2FuQb5d1N6hIFRhHiAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNo5h33jpI83%2FY38zircA%2B5qqcr2kFiJc%2BnglXiB35y69EaUmeo%2BR4INBe6iIsxfxmymIHoOgk09suaVWlLUlV%2FO7S5vRqV13fPsM1okm3tgue3Rg0uA0JWp3lSfd1OQy3Tg0QDeCnXLXAET6TvHr9%2B3lfo7wxcDc6e5UBhl2XampWOh5wRzvRlC2tqCUfrhzlMsR3zbkZRPT6vn0uFmoVBPf%2B0CGv9Nw3D0JfRIC9EbfWVclyy0ms1aG5%2BSynWF8nfqC0pZ1pFMuTt%2FK%2BWF3U0rIltYw6m64Ra%2B8mFlNS9jdMczcINcvvzCZEbZ8mZUcKTPOWoj90HqK%2BDiI4w0O1K%2F8Xb79sse5ApgsJ6mNcR2VgiM7UBBNglkCjk90tUHl4iU5rVtRxcBytc0r9MIRDy5qWdOtl01OGFrjwBfz0WbRg5NQVrRFd4eVmdeppq6ur7gfC6DKy7UHmbohuHXyERlQmsoOhhym3VNfe2K0kjfwZMmq4PGV5oHN5tI6vPuRQv1Mn9111RhuP1ECLh8Y46zR2%2FnjaKyDNOeV2XArUaEduUT%2FHtTwNpQxN1eVN05MUmAeBOauV3mWgYoKpYeEmfy84y8e2FmphK62MCpovywaN9%2BgVyIupp27VhP%2Fz7Z5vq1vuzcFPArbNUsMMboxMkGOqUBifv9hdYJoLYHe4kL3b%2BXCiGyoJw96SA%2BWVze9KzgFMh6ALwOgKDb6aLkda9vt3Vjxegshb%2FjN2H9k2M%2BL4digralNWZBH274nanhmovMjU44%2FIkvNTxmktUNXvmUIneZ16FvbS6zGZ3jbnabt8DHT%2F8ElkVNz4oQROzh19vCcGsTSa9Soar9JJqqktEe8GnvT%2FXDPsxocUWezsER3EnkQ36xoi9I&X-Amz-Signature=e24ee4075134f30a3659b2055f0674d1977121e49282d6badbd160dc7ea9190a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYKWHPU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAROF13v82DMjCAAlEZcUeC9TLBJZvlu9XopjO7onHN%2FAiBnO2YRMzQJZVQBKb2XG1iVI1LtDPqhbwcHQRUlyfCtDir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMRuO8I2v3xct3Lk0JKtwDzAlNVEp00Wzv%2FIh5qXajLolT6R1DzfOofJpxvBdA6ZoozfvKNYsM0ORL11lVYDkkgmc7G%2Bswe%2FgY1KZ24P0I39IT0m1MY6XwZ1uF8jfoQQbX%2BfRFFcNGtR5UKZ82tEDrA476%2BrYVgO8kIbPMdsx%2BSXB2fgW9dNzrB4Z9O1IAiwFLlkWD8M8ciwYw%2BjpdiGCpTspWvKDzCH7JXS%2B5hv52qCIQCLUEWrCheMUboBDU6%2FiN1u9W4bUm5TZW8K%2Fe1TpD37s%2FqW1z%2Beq2QCHBNNCLJ9eVNmYylQV9Wx%2FDSv9WtHPMUnf2F%2FGZYSoZoYkc88FW0rL8ODje1ieqLmSpT9vT3VAm1NpPdMbibTRwsu8OxaamS6FI2TTF6iFBvELFZ7sAmlsgcYxtvbrRRssrgk85gpQ3tulFsg3QjohFVfQamPmeWg6upeVXHCAnQPyNG2F9jdPjdl21pNUOickae9uiysE0MEbDM1HnEJwhw80Ik4bg7XKQLLQSs3MT2%2BFRL9zDPSLVK8VQ5ByeG6NGsDjkR%2B3xrU0Xustw2eYTVl3uCGyuyZmiAj0lr6GikZ4P4MFxDptZ44kW%2Bzy6BSaoymoiRWV1Eej%2F4%2BZ%2F6Hnj5suE%2F5lkshuLXXkzbE0OTFIw0ejEyQY6pgE3myHDZGibzfcWHlrVYKwiDrnp4zsNHaoKtcGigpQvVAqbwjS4UnJSjLH79zAecf4xjdzl8bzRgD2zqkGUqgc62t6l0s23%2BaWEYJLTZa65FgqOrEhKOO1H3842xeZjga1YPiT9T0jNi0u43jrpGMVMJ0dvTNMbJBsISbNiWoxcocSJ3DLn8Y2V%2BNRsYL6acVfRVOqXm9n8rpW0bXC0LeH8o%2Bd7G5dm&X-Amz-Signature=596a505936fb3eff9050e5f84595bff173718a18bfbe2a790c1e090056658a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

