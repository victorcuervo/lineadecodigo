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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCW2EKS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9ljm5%2FOtvxaxHIgG1Cl3DDVIqrQypbNufMZmETP9DFAiBGs73A4PkKM0PR2ZeXfAT03jOZvfrA6RH%2F67Bc%2BvXWzCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMZOZk5vhGvyJcYdSTKtwDy%2BBbawJ5J93DbV%2BVducGmZCLR4yF%2F00fLTb%2BtBnGk%2FLWTcr1ttbS1jFu4fF9hr26oHyXw9w%2FtqzlCdIHYr9op93K9PK8flbD8qQO70pKnv0XANriP1xPbjUzzO%2BVpPGGQX1Gfc5pPsHlnPB0%2FohJ%2BitDdCoVThtOc09K0CXFJFfcTCxBY2NrOKK1dw2XS6TeHC4FD%2BaSJkjiZqONfjD1kXMwppUUc45PYKEgh6Y2jpdhoBBim0O9oY9ZlV5M%2BhO1kbVc1f8bEWM3wHXUuPdqlHpgKv1qae5vED2wxP6Tmq1DQxsksluP9jGGc%2Fgkq8LdjMJqx7sufLCjnLQAiXvNN9QEbSg%2BsmjJ%2FC6bsgAroIqFPi5k6KuG1cV03z2AfMAeCSnNp6gHSgJWFLZFMkpKg3qr7jkVAujTkzt%2FTYBEqRanm0hoRhTE7UlqJI7hr4l9hjexEHr4Tsr5jRTpue12pgZ5kkoIN1M%2Ffje2G%2FjmYUCnBTX8fxh5MTF8YWxVSnX%2BtpTf%2FA4NRaDarZ%2FR5VpwIPLwWLLYcgcep7AQo2am9PyAfr%2FL29acxOqu1GqWtltxCU09dY5xRgV2OkuQ5eMDKSEW4JmY9F85KQNB9O9TVQs7h8GEybSav8bQoBkw6sbKyQY6pgFOMWNndcJIctSOjwqhOfqzbMQSOgoQ25yXkP4oCDGxK8Z0r%2FYgC8iFMK98vNleLfq2tyFXdZRpV%2BA91yS3UYbmz9EqlwIBRlBG1PIuHpDcPe0vhAqDwsg5uBBTZoAOMW%2BUgoVyO7AiZeDLN8zc5JuVySC%2B4vNL2i1aH%2FIT%2B9HpNGsfE239bQ7PC8d05xJoon7WcaUeAUHQZsf0Tvkue66KoiFv5HHt&X-Amz-Signature=99a8441ea9041dbed7aa937ec908ebcefceeea8a3d7577eee4e11d078e5370f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHBSG3L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHdam42YxXToU0%2FBCFp%2BxAMe%2BdzX3HWVVyue39TEbh7QIgNEst0uHojnzbvM%2B3wR6A61bo4otnEs2R6i%2BdYfvKaKkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL%2Bp7HguE94a%2BUhd2SrcA5ZewVXxHMC3wwSWANCYiP3kHcPDJ8NdZ7EgYn%2BRXh5nHzOYYgagBL%2FNM0hEAS84jU7qGgROKMj3deJVSgu3Iwl6%2F5RpNv3dCTbR%2F2x%2Fkzemu2hcE8tUFe%2BCeYB4%2FlOVciE5YkyOxhJhhENwvZgJ%2Bk7yLsqkeyjQnRzz%2FLd%2B1UIuQfdWgx%2Fk18kBcq3MVNBWaoeVbVTh473hU8YhvsBWe5DCehHscCYv6Tb5lEu2NtBRH4Nju7A6ObC%2BbuLT10lmihg1GZUxUGlSPuapDooS91xCLV6K80nC2GIeReGutblQ0laczdwskBCceFXPAo%2B4C0vqATUJ1%2FYU4M9pYjfdBHFgThlWkgw9j8R%2BJVRGqqZFOKc%2BMWsUrpjIdj6p0g0mFCta4sP1RnAgLZte%2FOHMkN76xv49Dd6Oedo1JyWnb3otCWelVYGPwTTnXVBURnoRfhD4fgE7nC%2BNEYmzVUxPAaNLwPYdMGqcOMPYkY8F6gThdCax6bij9M3%2B1scOURD2OsYOzNvz%2Fwlv74xy6AawsAVT15%2FAoLjG93FogQ9RfgBBuu4PHXyk%2FqfTHl23GYnJKKvysEIFXB77ObD9i1jfpLpMtHXH4hxH4EGtYc9VHbVRkshBzlYBfgFCpbKSMJ7UyskGOqUBlxGMjwiuPTMvEix%2BwcJB%2F7OVL%2BP6OZmxrLeaxKR1mTWADpmytmHpOHj3jGTwEeVpOwCCkedoKBFVhnfU0kms%2BmnOg5HkjF1hpPNO8BsQkc96dj9OJ0fwQwLGYilyFHmYJIlDvsDVXsdiqMPbdicTJhAOGTJ4Akb2Z9kTcncmfHNtG25Vc2gBiM3XR2ackLiAQN%2BF%2FlMCMag8f47RUDpXNmcGMZuZ&X-Amz-Signature=2961b9b77f3845aaff5e3cf05dfbcc15081c203b6c4292ebde8120ed2a4c1256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

