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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2O3UQUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD%2BffJ9VGW5XatFzQkMyCixfdd4Rx73O%2BqCEc4rwE3O0gIgbR0eYdfF5%2F0aNszIVxQsedAms4zb2T1FxDtCcjylH%2FAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFfYZYowD51FeuoGwircA8GwDVwaSjXwF1T5YhRWbrEdTek6tMTJ330LttYxqKdLFBhm7zovIcI57iK%2FTyLaNJHKVg91voXkaL%2Bbxus%2B66wtUYnvrVxXUFkmAD0J7hP1hNzrG4%2F5JFW%2BVQP7L7cp6uPTjwXKOF1poz7A6hxu72m5C5nXaR1zXOJNfr%2B85NbC3vmv%2B0mw4W8vNhJZzMRFHd7mv4CfcDG3B8rT%2FFRUf69kY1Bg1%2BlMinqT0zJEG5MGt3wgpFeWwUxjubZFyLWY%2Bv9yRyySZcgJOQoeiOfUZ%2BdPTbZjflttokvIHOfHBcogSIzjvks6ZGe4fpVPVrvttoqm5XCCKm%2BQ7oFRCnekjSjNZ6%2Fp%2FVhMqLU1cxLdt0XwI7w2IELcgGojfDG8IxG7lL%2BhgtOKHErgrsMRq7UBHlciKiynQx%2Fv%2Bhm94GfRKXODtXDG1nxBF0POXRD2cfV1Moq3MC0RW0LgiuylYdf4iC3Df6ifTBKoYR6dJ2kUyFBYfMUntIQ7n9q%2FlrBMBoi8vLfPVRZ6RFN8p0nM3SxhOUI9MgHBd3HIqq2cBe09yQ%2BliAh1na1u8Kq%2F6VBXCGymcQrsWsj6xaUANX0ZDnITNfe6qnv9wzp%2BRjws%2BwXZVNrjVCErDqHiHii%2FhK8%2FMJ7KxMkGOqUB2ckSzbBRAA6ipMybgrPmAwRttQahyPL%2BJAYa7JRFqkOmvzpKIrqtQuXpoFLp5sRGO4HTjJ1VOmbgreY41EXEt1pp7Sh%2BWjGDIF5KHgjRwnVd8L5tm4J7XUtqgB3z1UR%2F4ytI03a9JaJHO3nAxQmspVlp5H4g4pGKgEkNiCLjAv7lFsKliIjcXl4V1vmircFg%2BZzsrNh8UGkL4T%2FhVNQGF%2FXmkTtZ&X-Amz-Signature=68a952147e5121abd2d497f85c816f96aa080e84e5e67a0ef57016f87b77ef4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBY6SIB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHU1ktxFAoCW%2F5L6UuO0Ah4Da%2FNTpoksmm%2BPh1VaDab1AiEA%2FDeEOJMMidHpj4NYRmRe1g2KPzFOHQm6A%2FG1J2P8puAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFidAO%2BGARuA1StCiircA0%2FhcIxtPpdaoGdKzaCxJ%2BPD%2Fm6TbfSlcNNWF8GeR%2BIjX2nprEEfu4glpfM%2BfA6rfUDAn5iiysWlFMYBrL2OnYceI%2FQLGyfXebCYVLdyTM1YaD046EleMl%2FPHAddYFRFbJfx7ojBmA7pV93K%2B0SiiwXxnlG3EfwbBxQ8PnjrdE9Fmsz%2BougwUvpgKx%2Fcz4tGZLfz%2BVDPScfaS0PF%2BVJI0T%2FzkQUFvTe6R2NWp3J7Zbbs7Nwymosu1lSgqGWwEjd7c5Mn3ti9TmEqjXn%2Fh2OTu%2FCLK4vG2VSsTfpektQ%2B%2FfVNR6x%2FWM%2FYuvZ8IR1xCZmTTUqpSvNJLlW7eZeFXXmEgXs3DaCTmmQIRBmkONImG%2BJ2z%2Fbijd949A50VYgEAuh%2F4VrRTufWq5uqfOIMHsKXPzx6nQN9dPSBujwAsmT1O1H5kRI%2FqnVt6fsO8%2B6n%2F1CQBg5YmaLhqMGOC2igSf5A%2Bvm%2FAOTRkXSz1tRRy5Cv6pfwG1KGJTXcGMGl3pkMZUaWqfxYJj8cmoNa4On7Mz3ZWyfEfR1EfTHbHzFE%2Bhnj52hrpF1LtvuZngaJFDOUgLiw6S6iFgZoqXXdrEhCOkSIdzkileijJ%2FUElWBVfWwWMACcwki1ag%2BjtnZluLODMKPLxMkGOqUBdnBVjtWvxYk1aoFFkb2D5cO15O6haxGWHwGkVqPc0W%2F%2BG8lMEHkTLLwlJjAjjc3tVIgjj3msnYiEMva56RWhjKfbFudKMcgoO1UJzyEpn%2F6BxI2tIaGaPRJAK%2BM9%2Bg%2FynFTOM%2F91KIMUopYa7m%2B28s0WnxJCf40NlJsNuuhogRixs7bcyiuNkEsMAXG8Wr4hFmB0hnHYHiEsVMla1YDSmDqi3mdd&X-Amz-Signature=6f0eb8a912e54c1bc99c451e0b8c4634a1a79699749a5c82eb5c8b08cbd06dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

