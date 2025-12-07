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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGBGDP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjGmyzK9tkODvlfU80RbPWMSOcRB2CsYCYuY3L19iOHgIhAK9Pr1wk9Rn8SAHyCmZCcExeTkVbu98ODE1o%2FW%2FRdUrPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdR3wf7YG14EGWcPEq3ANLQhEnBtLM7XnqUPBR9ptfFOEao%2FNiclm5Hy%2FvgGu7oLM%2FadBy%2FrwwjoLopvDnWmpb0vNkKn0jcbFOeWSZehyjCDrZa4lqG7zhFOlXofZCA6FTnIVqjxViB%2BxU5La8BmhAZyiKA%2F7wL%2F6z3GmLfhyLQ2bGGZBh1mrJsryZ1fcjnLjx%2FHJKglq5EPA2nnYtZ9gaEKdzE%2BazCQ63oCa%2BFvR1fFIuibZ0KRbCiNzs6ilo2G9tgyz0SjVPByzOPaLvlcuIJQDxWfu2RX0dIHzQO71KVAlYyjIB0btD1gJ31OlWlWUOzxOULOtMkgGnLkZTz4SYSCpH9gNYLYe%2F3shTUGvBfht%2FCSVTo36b73GbZWDYTXMXwjF2%2FE%2BLfXG5QtMR5fb5UxpgXioIjz%2BfM51VM4oRk%2Bd54wpmZOUb2lEMj6RYs4f2wucrq8IX4H1ltgNMoXbrTeRYojXCRJZdyb1tswiWVeV%2BEuCo7LQm6RGLBd9UwgJDD2s6g1BplrKX4XnJzf%2FPw8UXqIE62boPKM0RP%2FfsZ22WskARqF3bG9LdJM8T28eBXKSDFFCA8ecUxKS7GEK9RyVeos%2FtvFTxk2SeRiK3XyniYac%2Fiuo9By1VjRIh%2FX%2F2STUIbw772uC1TzDo%2FdLJBjqkAVfo1ZTzB5ycw0o6q01KfDyMhxQss8txWK%2B31G8R0eiGPkVTF84qacQpOd2lILIYqOC25LLKR0ywVA6MrTk5M9o01yCq9avSRTtzpHo4M6YayfInpX2TjYI4eIZ3rbq5BvbG3kOZPDoWEocn%2Bm9tqAuL2IidA82%2FoFbE5coWjCwk0Q7vl0A5ruFW0NbSyroY%2F%2FF6O5GwaDGF%2BukxtbHEcwq19BKR&X-Amz-Signature=e9d92ca014eefa269559faeef240d8b328a0f6990b37ada939a511cb5f604b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466227GWAQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmoR4ROhWNtKtDdKv0V1WJsnkhbtvo%2FxlN%2BDbB6dM7OAiEA9itpJ11G%2FUC2weUgB3jeNo0ZFHQz9s9%2BL7OiAEgkY1oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjODhj9eLie37o0OCrcA%2BCosDc7djPBb0ytTU5KqCpsL30TSGPsPQvTw4TnxezeOx7AOydElia0ax%2FMFsYau3%2BkIdkGCPBRKYtaoajPlVaYFHBzalWYrwmxSwgCGrgJvMDL%2B1bnsLBsKXqltDQ4Tjfa88Qd2slioLvQ0tkRz3wAy1hRIK%2Fd%2FH4Rvb5vYB3xDBVhSQ%2BvC%2FOEWXXgpfjwr40qPbapz5J7pwit9qvuJaE9ARKxXuq%2BEvgGxpaAmJnLMz3hdCH5igWTT3vVALYIf3bhV0fsx3msPTCd3xEBZz56a%2FS%2F8jSsEn9EunZ4c%2BeGDEQB06Fg3Y6LNbFKCrxFMCy0yvhjGh6Hf556DXxThDPt7PA4E0OzG9UJXyQThAvvS6ZFwIrisZyCE73vKIqk2ZvtvePezxMCsXyKr1wDMYhRnaLygFSv2nz%2BbDm4LJU%2FsTRevjAwRiY6MRabyA7iuET%2BZ4UdDgSj4QkUfT1FVIxGA%2BhEm2BqT4wrFK9Urrj40%2FOlBHPBT%2Bb7n5zKQ7edrNOP%2FMaKuk3siMBb%2F8PNjoJuGAzopgz%2FNiNdp2IjxuAXq4MWGyzOnJnnOo44i0DOZvSD93lw8lQGCFv4rVLKXa98WvTc1b0PctmBCz1EZePzs%2FeZutpQnRghijW%2FMMf90skGOqUB%2Bxcio%2FUeqO5MtVyGAt2A%2FTxgi1XOu4JxOVDxTgTP8fB3wiLz%2B5kpbisyjIEtWf0LdMAZut%2FjjcqaLF8ak7%2B1Y%2FH2eZqMa4lbPc5E2rpqVHRtRJMmLwahwtwWTjbiKyLowHyf4gGD4GuJ8jP3cClcIL3U%2FrQa0eNqKsn64%2BWD68004YL3B5errccMnHF82u5rFMesU3uqB6xh%2BIIxLY4oq3pTzGii&X-Amz-Signature=4f0b6fab08b03b8a4166aebb824cd5eff59177f20858a4e5fbcddc05f7aa0ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

