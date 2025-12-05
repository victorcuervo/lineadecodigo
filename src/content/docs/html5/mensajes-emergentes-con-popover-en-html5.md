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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664EFQ5KE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKLYBbT6%2FKhWax6YczN1zgL4MdxW7xvPvqIh8s9xaKQIgVIRsF7kA38FVCOetrdX%2F%2FpOX3Xo0fOCp8dg4d5DEXgQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFyfVOcBAPrQIO%2BPOircA3OZroakdM8TqnluHRirgfMBthu3%2BKF%2FCIPrtoKmO112B6NTAa4E57%2Bt6S%2BZ%2FkmoTdeKZg%2FdeTwH9obBXWQZKlzjyOyjRm5UwG0TAoQ9e0M95vJKNqKwuTnoE%2F5KQJ9FPzsswpzyeLpOPl7%2BZo3SjNl0yKOnOE6XzGyOIgqwdSFyHyGky4HNcwvov5OUNyp9xnUd39IjDYXA37eIsbgpSu1En18cJQ0I%2BrCb5JKKrrMGe4Bt0rqGpYwaOn9vMUrgYFUzXgNBAdLNL4OwTO2cqrIB2LILFCl1xyvMcyXP7nVtRcamNePK6VHUKOEsjdlCtEyKjk14bvJVBBJ0nOdE5Na8K1yP4c3aOTFhLKh2zAEVJ%2FGQPe3fLvgKdLMZXtacNfhGm%2FVDQMVNC0DmlT3oqvHhrDb7Ow%2Fp9ftKR1aoOcbEJCeMmPCYdmXDYWI8AEWo%2FqY92xIB2uBsQjoy20XRb2AOV6ujJzeXPQtZ0A%2FTQd5WCi%2F4IhyJIjgqMDum7KpjTYmAyErhugh0%2F9RaxzMPaIGPM4PiIWyXxKilLLy7ASv7NZjVVk03MiLTSIF9a77kD7%2FxVE9np7vJz1unSC68aKfQ0d59maftWWFo0u8Ie0AMMo8j2E3CtQwDs1J4MNLry8kGOqUBn%2BO4IHYAaKN6Tb9Cam1PHPi2ffVE7CR74U51zS1uSBEM22Zm9cDMrcpWsJJwnQg%2Fx%2BzsXXoa0apl%2BqUa1rmyk6UeDporwk1zlCmdAfI8QxbbTddKjUOedribn8GMFTppStlatSSQ2RtzxWIQZn%2FmpPbMEeq%2BzlqCy1X8VBK2K2Oc2BLz%2BZUoufFPMPgGeINaziGd9%2B7LS8H302nPdq6ctjFZF35F&X-Amz-Signature=a8f1055e2c3648649a1b5a489454fbdf97350615527ed00481c02ea1cb7aa3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TD4TNU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgIwzf1h8PnFItUxW93zJgM1JynnAt%2BAZG7WsT0WExgQIhAMv3jF2oqjCto%2BetZgeaCRgeHSg5G9WSlof8R6x6un1SKv8DCGAQABoMNjM3NDIzMTgzODA1IgzziVIWTF6Uua%2BudRoq3AM9SXUOB0rd5ILizy6HGbLEL%2Fx7DRBF%2BnaYKGUU286F8YxbS6RnT2V%2FHKU78qQliY4HYbJ00SITHWeJkgXQt2cXOBblvhQqJwXjgtd3HT1dMJ2rugnW%2FtQApV3w%2F1KnMbv8p%2BoXzjldecvlWn21FxjWiclXgfm%2B7FVVx90v0cB0xfYrObrYx9rfW8P5P1zc9BufsVe5i5SfBUD0ouKGFhFRt3cjsw1X%2BlS2gUPUw9%2FXto6QLoRvNoBrVriY5TzdGesi8VNwWOf3rxixm8HnAyoINGRn0Dy4CouuOzaINTeu12mxwDMle6f9TQhM8B089rGx1G%2FDi7Px%2FrnOFQ4K74Bn1CIfLY30oxZrsi5e8A2R6KcgOxtwmnTvuAYarTVoihP3vQwPs%2BULvwndvHCj%2FpcA2nPB9Q4vx74ynSxkHTl3irMOwKxUXTiMW1MLL7MOPoRWE8%2F%2FZZZFTVILt61o3paIOLqbh3hMCML37hujH75sct%2FSmWzbr4Jst%2BQOSx1S5fOH5RFWzG%2FqcmMtnuEig79RE%2FhuIR1Izvt0FaIoCJ65YBof71FODS8Brx7145A3zEmwCQp0vL0B8f1XO1ROwTovFXzlymGyM0XaD%2FEc%2BfBTPKMEzo79nDni96y%2FNzDY5svJBjqkAddaFB7XLsDVchlPNl2fyxcj1aTcaWZbY%2Bbn3oZyFre0suZAxK9t3w5YixcuhLVoLsgViD6DQUvcP63riS1mImcVepyvuWAPW5THO8dzObZGBsq8kwFmU2Pna%2BszWpoLHCgcQHymVBz40%2FtU5d2qCi7QmOZmC69soJiGDkLLFhDyqnXN74w9gH2AHHYFQZbcyatoKwOaLipxelP02AMAEJM1L8I4&X-Amz-Signature=5160396cddbcdcc3c197b835ca54b7804ede01eabb04bc334c1672c921ff585d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

