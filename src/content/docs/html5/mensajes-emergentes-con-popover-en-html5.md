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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZALUOEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIC2YoD0cPRCgf60rdbl1V8vsWybxwyKw3CVpwA96paOpAiBddbYc43Bc4OZO%2FlH9WyMd40hlJwEqMBpWYDldDqO%2FtCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMSKUGYkiUZKexCnymKtwDY2QlgtxlTQX33rKSBa%2BxPUJBV8inAkWJODJIseIcx1AvlJNlOJgNWwC0U4kInD20eYuo3QnYjdQJtafuNyHRUm%2FiRnWxvXuLMkFmSuKPwDbxHtKueEpQ4%2FgPACv2dhvWBIa%2F62ecvfSsiO6vnk%2FIHDfdgQ3OCgZYmOh5qfF5ZhDAr0FlnAHTV4XaGjSChkm1jGSB7gAVtc74uy51kwk%2B6iFgg1f8hUcP7b%2FZp8VhwhnAMI19fD3Z53ygZDXQ3H%2FJXizLwKYn7bxIwIL3dhSbFg1295d03vnjn%2Bmkdt6MepnOKQHF2%2BP4HnrlK2cNjFn%2BV%2B0XRR2ACc%2FiJcW83t7fLPf6q55Zc4fEGqfrcEsKI9af8ObwFxGEPa%2FFZJw3mdhX2NO%2Fn5LKUNR9KpE1Ir2QZTIaMgf8S92amz%2Fj0meiO8aam8%2BQFrjLUh2l5UXMfMDkTTtwcZPqAnbCm9yEs2Hzq3UtHsJ5w%2Ba5RWUpI3YmsT84p2Y1YOClJ6egtPEXhbx4ox2mRbbTX4V4OyBS1IwRbhtJR46yApRtPGY8GrfYlNHWmKRuhdoF09nNF55xc3OJWQXujyJE4Y%2BkDmWswRMyTJKMyVwMrSnR5hE9MHQ8JoFMwRAbUXC7b5rL%2F2ow8bTDyQY6pgGtzBHMhvEgcsWzmox85TkRjEPK%2Bp6l4%2FAMHbxu5FmHfOFkqkZA3Eu19UUfzyz%2BUlfXEovoaTUHxSt5q0Jg51bx6B5qM9g9ZdMrLdIZs8%2B3oIc7LcHLxCqlI3ot2H9ubCogUxzVcRMcTj1T4Tw%2Bmad22DTt6KtCYkEJJuJ73g0lW3VDP2yg%2BTAqV8zegVpV5xxbkvJBFwlpiu6y8i0qcOETOvWjBHRC&X-Amz-Signature=34b3797d4339891c9ac3abd51bfdbb522825ff2bf108dedb6a4c855d6768b917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4NVHES%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAMgX8ux3LeLWgOzwcJTx0OJIhGDRI%2BqHV2BadoR0sjAAiEA53eIC5l2V3IR%2BlHbxbP3%2FB3SOYpsC0CzfqbJukboULEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFhndslGhEWeAQEk0ircA1Z2XKldwmwzfXV9KJ81Za28VIKSb4CHewg6er1JLpuT8gLswGMOSM1yoAWgglnVlq4ZcFu5S5WNpyE%2BkOnNAZ9MKENdVQ6VRmfyQOzf2BHpAUmgG56rxbsAVMd7J1wWve3zbKPsqzbvLsSpjbjJxnXRMb4oVXqFkJPFINWsLr10VVv%2FUQNiaM3jUf9JjX2m0%2FSKua5NnUtrBRaUTeVWJiN4Ha6nSITM2me2GGFLB659gSN6MENIXqbm2yQoFXjsT1xIdmAWo3tB4JqWfNqra2ivjyVGw%2BgOcemmRMYQ2rtJwJ0MsVOC9mIIm58M9E%2FwPPJiNy%2FLn4RjlEERblpZ2bGIlpnDvy03x1YYY25n3ie7uhRhvg6cNbQg8LphHO2bURNfnjALs30RH%2FGzjhLOFW9gbR5smibseY7YcK%2B8TuzyYfPZKUqvEDmpM8se6uT1WlcnZuhUBx1SIxdx9CWeUoLT9RwII2Bw3IkeOpDpX2ZNFZBJfin8BAe7WwABgKp8%2FtX8T726r%2F%2BPpNPMN4nfshZLWhrlHD7fP5%2FaxefVwQOrvLHogoAeidX2Y041OMkyc8Oi6s4Q8z3Q7tDtcena8ZjUwh0v%2FFJKlKh72HTqqisv6nKHCvcZN20jeKByMOS8w8kGOqUBWphY%2FqIBDX1D%2BDvA5zePj2XIPVt6BWo61fxXvG7tAZyxbhhiYkgHXmgK5DDtK%2BySGSAiwEeYnSJMJwbpzR%2BH9H4zn6L5pC5e7OSXVUqyWGnfx2hcUzgHuzjPNjZFjnzSfbvSGPu7NcSMmQ3jIRGy2ug%2F0F5twGZAUs2v2igke97PwyrGhU3s21sQ6721n0xAydxVjLbOeNXqce0LiyDTaAMuqRTk&X-Amz-Signature=ca5c3f4221208aa0fbf2a410a9c09da8000852caa07f70db654b4e6ac30e9c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

