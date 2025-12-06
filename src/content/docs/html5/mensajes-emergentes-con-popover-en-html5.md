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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZODIPGL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbEcjJ0H8gTqe1%2BEh0JZdywwIWhNwbM3BUbZWA4eaQoAiEAhg2V0PATBWnY%2FrsvkEMLS78YJJafWM71VXgsHkhbFU8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFFXsb6X%2F0BH1R%2B2NCrcA3EeWrx9MEkwafrEE5RxC%2BaAbrLQgWM6NEEHZ9hjm1pkgR5mFGuhOeiBsWrxqy%2F7ZAaOQndkjHvZOJgG56rFemXKfj7qL%2Bn%2BJzqeLiQMqESop7mGFz8g7qkzmeAeMUiX5ZhkElkTGON7ZZ5Mc8sV5582u40ZmZEoiBTzbvWGktc7uSqbjV41RCTNqdsj6kEFw%2BkrkCTwm5n90A5Kshh3u1wcc2rgIou9ujmwr%2Fe%2Fhu7O21l6JSU64Orhq9JRKvWWrt8Ih2Drjx1eqO7Qt0BVDnHchgaSIpvTebK3wcBrZOviMl%2FWLmUggWqiKdQg3veoIviipr6f9I21EQ1E9IdjdEacV07tUo%2FzOUwPqWhrQ9lIPLj8gC9TAdamA5Mru%2FXTtZM%2BvYpSfkvGxMTw9TwJU2H8v%2F4maZyMWXwobcgeINogxMmscRkuxxy3HpSpFYxNcvHjcb%2BLUsORo7zmpJF8kWVGfj0bd98vky9XBO3r8hTc8IYbDO18Dh1aXJp4Cbn797fYae%2Bp0gVmOlfCb%2FvJBBm7EYT%2FUzVFtz1MrSlQkb1wVSzeZuklAac5WKiPNWPjIOPUd5wYTnY4K%2F1iY1SmjfCgKiYpnxZy%2FfKn7rUYKF%2FOEekjt2UXBj4GpOU3ML7CzskGOqUBh4Jkvv19KkI0J9JZBxSyuFX4ZJ%2BzFAhvDGIMKCVrj2TNmcOQMwqgfqDKviPvMVtAZ%2FCf9vQTGbzLE7CB%2FZNJGwUPrXVUjc0%2FdY30wWeSWyE%2F2kqmcK6600BcTcfiSpMQeX1%2F6CcMJq264%2FcQ1tvBJAO%2FSq%2FIPpl28SD8Mngzt5ermUgs%2BssCGBfh%2BnqDhc6kCoioeUFyVARpHxHBbsGkxzepzx7j&X-Amz-Signature=714e5d8ce9069e4e4ea4801a99087baa122c97d5083742dc212f9643a23afd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBCRQIO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bauZhgYtR73dWBuiwP5HBRVk2XFmsqCvuhNXIIW%2F4AiEAhUbsMWEu7a5BiTanSMoI4ziS7pQvPL2y1wxDQ4s77B8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGDJKUBRvO1Oh9iWlCrcA31jYsK4Ja8aAPaJ6QKTOGONBhDQvgRUDpaG5NQcGxodpEH0T2HmkF20n9ZPd2isRRYttE4APuk86sKCcS4%2BzBB1MKbFIVCa98mCZrDr%2Fttb%2BjtnJnb%2B%2BPLMcmKYC404DsfqcY5BEObLYTKTvLdcUg3nFBcBWLwXiiQYbtqXqlL58j%2Bzbq%2BoJ854NuqoEC8%2FK%2FwW8N7V2a2o5FnkhrmIhZWNBw21FkY7UdwmA2qAM9V61WSFkvn4m0WPpFc89KGQP6qU5U29iIdGfHMtyjLBdtTn%2Bb5MqJ1yX9jJhMMdY4TQ%2FI4QfG1bFuJoELz%2B4sQy30RxxS6rBOtk2dHn%2BXsBHprFmvt%2BxYgCt%2FpWzN%2Bzj%2FelfWX0S3R31xjQ2mE6iLx82usE15VPeli%2BMuHiubinCr7Z1CvL4UOwLhoZbjhBEXAh7vSW6NxHNxm5nlvtEg0OgtRBqNjfO%2FVjQuQS3rAt4BqB6J5OyHrTGx8DJ9j9Dr%2Bl55Eynt62jxvykyVUnRi5265CiCctRVt0c%2FxaPXE%2Bazq8pKKs7K16aWaE4q69B5C8K2pE9vIe1m8jDmIEWR9NSQfIt%2FFqBUn6VAzpFgkHjBVIQgihDHtEqQ1OVHEntvRvKVaXsToQn4ejBns9ML7CzskGOqUBN%2BzlROJ%2BVJ6ntoJkmZVfb3f0Wr3Bh4PFD8Mmer3EpU35%2Fv5UUJlscGEjGvB7ePxpDfFDgjFXHuYsy1P0L%2FXqFIgJLDgBSKmH%2FAWVYYjBGz%2B5QdsQrO1ZRtSqXqjSD%2FZkMnE6OUKiX2twv1enpNIIDbfiL43CG23KHPBPgRhiqByhbJkxefXx1TIO4L2xwllipgI6tK2qOdtQ%2BPn0qAIdwfQ34H%2BV&X-Amz-Signature=f108a73b51a784ef1b63d5e923726f4d97668feb442a0a14cc084ed94a026515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

