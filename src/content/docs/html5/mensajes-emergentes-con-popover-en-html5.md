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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJABX76%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsIDzW4y%2BHptxDsS%2FUSZAxiMAJVze9ocJIBpfS9PKOyAiAPGKGTM9sDxvUbZX7UAm9273%2FvrryQZUF1eFwhmRl8%2FCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2BYAEzBsLHVPmV4eKtwD%2FGmN4CZdPULbtmEUboAi5oBCSngN%2FWaLIkwWqF1jPfmB9w%2B3ayhU5MK0WsVdVJdsCEQ1gSvpCqqYk6297NrVbyO1KLZfxa4wjPm97RZtuqub%2BtBPbsDx9tH3w0e%2BawoShYHDnL63fGpjFRp%2BAXN3jxGaKNm25ziXSqkItdLHRuUfUgISzM0fDasBak3ZSNzc2a8jmNMMMkm4kn2NOqRuCU8Qw%2FTnSHH1D6rn5XlUCvk1o35T9YZYKvX2HtTwizQJP5GwNY31%2BaAmHAaH5e%2BqVVyD18tBhkv9ZvJlWNcZ04PktTZNdUlMN1Osu9gbvDG64%2F6pmjYe6VABdPckP2uZoBnyddtN2%2BcaeSqrGGY1y1NNOc5%2Fq30xUrdAAgfMuubY4eow6ARPyFYq%2BffYkbikTuxt6iKW6MBBdHCpR4boJhijcmBRU%2B4sPgUikT7TB1S7gL4ogG%2FDKOnSvQD5zV3aWZbJPo%2BQM2BZZA35tsFVfjpp2Mizl%2BkJub4O8A44wDi5aDfq%2FIXQLce2vn71%2BvV473vI4jtqx1xxNGqWie32d6AIRIjL2JWUP6E1G%2BkPTAQ0JHkBn4IGjf23p37XUCNIHiOKbBMpnEDcheEMZC0%2FI3Un1et7xByMjIfBFb0wvYXYyQY6pgGBpNiQFeMOQwa10Yb6ErxipDkCdqOSNiRQJ3oD7fYSp%2BF%2FiZjp9ZY7Zwg6u39azMVA7GIrdTw73eccNYAiWSSAxkVsPLhUHR4g90MXtp4m%2FsLsifRiQS6BugljX2aZJ%2BLboHZjRFQ0epBmfeI1JhqvERlqFG%2FMz48HMUvxgGvRQtH1uP%2BOmmsAoO2%2FVfwmyNMmLhldTDutq4zYJNGnV3PTka0txDcW&X-Amz-Signature=a9cef50daf1e0dd8c8d5204d0ca1e64ee8af4bc8221ba50f4a81997e85032bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYIES42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOzNPsOPFhekbWMTfqJWtM3Ggln59AlJI3d6BGmDmR%2FQIgEiwcGBYpnjBY7qyzdwlKObQugc1V4MidbHziVcL8KQcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3Gvyr7sjDnb%2FmDyrcA4gyBAfuPxx3eaeEs%2FI8fK07avZwzJSbOSGwLTbJf5LG0fqIoB1j5vspkMLQgu%2FEn9DO4%2BaJMJ%2BjjY0CoTXF1NoIintXiGXuwaYDs2neYft9buSUIILIQBcBCHKVuLa33caqxXPxQaGKaHmeMPhglr5I1it%2FNncVDgXKbHFRDwKqFXCbZG5xvuiTy3DVZFa%2FU8fUE8OM7pbsSwwDWWIX9hvNjyQnhfb287xouWCw3Ay685aiTliAcnmuz67HbiRXq5jB0CGIwamhzrjFWu21T1r3GG5e%2BdixlRex46Vk9sFOdETOCmIEdtmPc8AGbx6kL5xjkBDJPK%2BXeSA8Dc4vKqo%2Bc%2BfpopAS8X7cWU2nQMpj%2F4VcFeshlS5TWqDIXPH%2FKgDV3GY9YeEjGDtrLALwD4HUuwhOpZvlMtpRvQuYKsXNYYN%2BAKIjcayIAZqB8YKTXq1r5X5e68I7gXA%2BKbZrrhr3ntymoTs8prZQ6iBa5O%2Fo7wAvqD0tzWtEnVUCJJSsNkMXpsUsCVv1TCKdFGwzyBfmGZSIOxoF0dLyIJPrKH7czFMNGrQCUJnK%2FWdneF%2Fj7DMloXBFcIMp%2B3cFi81SSAb9dgxSLgfea%2FTxkn08NCnf%2FFkGwNR1S%2FoHuLfeMIKF2MkGOqUBbE4zv6IfEFzpGZKrgXZc3UwacW55V9qQsxGCfdYijIVgnCZl2c%2FMX6pg%2BMcuGpaow8OgWJ5EoW73XK8hMHzxzTUfg0mfeLDnT1N7TE7YY3xom3JkZ5m1JN6kyMN9CXbzPy5gSEHKZk0DRSyUObw376H6S1qwlWof%2FVPDTDFjdDqnY8GJVUSr7I8G8INFM4t9%2BzkvWjg4tugpcY%2FMEBjv9sNOGIXR&X-Amz-Signature=165a6d09155ba457b59e5c37085205cffc1ce5a06327eb038be9f429f0ff92fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

