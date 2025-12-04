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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQE6Y5R5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDboZZ%2B0VvFfXwVO4x8UQuKGYVch3FcnRezUdJd0LcM2wIgbfCuKb65XSYhkMiZyLlASBwWx53L5qcbaekB5Ts9zeIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEy%2Fv1ytkmj1OB4k9SrcA6j3BAXZcr1CRIbAnXjo5intaH1p0j3RAZW1Ac2t7M7a0kiX9TRJahorxguZtLOZAWQ5AxnAEU%2FpJ58UYuPjqpdMzihLaiP3vvZkJ%2Fdn1s%2BbjPgSuO9BA7CXJ0gAdcV%2F%2BwhtufJY3I%2Bg5lKX%2F7CypFeP8QHAhMyShxsyegrD4vf6%2F2AMw6OSCxb1oqoe8%2FLoPe0hxAEOqca5D9OHrCVUiHCI6u1aQz%2Beyxg2VBgewzgkva8SvjxVZWP1Ebh2xIk0GQSOCgqE7O3IBQWgfzq99g0KZvqjR7mIh%2BDJNSvk3n2GLh3t7JIZ59%2F28GMgF5O76uBKf1NCHMokz5uVxuwpzuRPDVDvDEwuGxqbnNkamxP%2B75xhlcqAt0PuC%2Fe1oOV6qQsKUb93vebOZBJ2B1G2gMnVYBzJbKJBRadUIMlg5Fjc1UCl5ofFiAbv%2FFBm9uo13fgvFzbpBs4nJ884%2BRLN0l8cruSBmgcFf9XQWlyi02u4gLjkQmVzWWxYFlVlb1nBo%2FxoEkiZCFJDyqqs%2BYsebdtjefGgX3%2Fum4IKQdc4P4t4LcgBzVKdxOa69NhugGOssRIDm1%2FwHfoZRh88enamvjch18H2Da3Epp4yq%2BFxl1qgwNqCU%2BIQYqURfJnDMJ6GxckGOqUBE%2BONAwMDjkkJsoy%2BF7OZ5nxzD96Lo%2FLe4DsxdgZxhPUVw%2F4OBQ0mfSqPzU1J9a4CwH%2Fp%2Beo2UP8JvueSCqLco9ZmQy%2BAjvaQQVqpUWG1IfMk4HJTJAheuGRtzmqU19XVmvH3Ulb%2BLnSuqlZSZluY%2FsDkshRFrPDG%2FkXcAkJJO99LtOAhboyRUjrADX8tDRWIJF8QdWpPmqWPaWxRnCcHg%2BAaBvzQ&X-Amz-Signature=6091250b3fed3287f66c365b908ad37d6b3f0ac9ba3bfd215c10079a904e9892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBHMVIS2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGlGi6M5X%2Fc5gPYN210LQZue%2BnU%2F38LCCROOL%2F8sGuEjAiEAlYFWnQbKqQBGNodE4ZI4IiUnfDfPwc8x1FKpoNLnjCcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ4X49b4igR0EzpfYyrcA36%2BTYMZVcBYsF59B24oyQ4uh3BCBeLKva5Kf4XEwrEyszmmXIDcHQIqFS1FCeLYRpMBWCEQW5B79jamTuYa7HNPelUFFhzUKDVv%2B3tgYfLmw%2BMTmfrRhED9H2kLAnu8Y0lm91nwebuH3BKHxSbb1yW2xQs2D0hKPHY9LKyBUNfsAeODnvmm3hKqJIVHaBoBH%2F%2FdYxOQt1QbeUvoJYfazBDPzSQMLPMU9l0SygoBH5eA49d92qtYkHKQqJarnHN0UadDYic%2B3SRRP6LrxCwAGYvXLzSRtEAmUQwuk%2FyMOvqPNJ7mSJzf2w6WdhT1rseJTrgdnel93zsU7%2BHYGpfWjUoSo7paNf8lv0TEbnTJJCWHtTKBaA0zTbBLW3IX0zZVYxKGkLDsRrlqXymP7XZZrxX3AdL1wJCWLuysOs4n%2FOdXjhz8%2FnGckrA8THEkWhxS9EdHDuaSFGhZ9ifmqyYHKROQdggR%2BBNJjWG5B4r5KP6Oc8lk2eBgmO2x3XT0F6SEXdKr9WhqejfURzK%2FWp%2FXC4h9MDQbo1fuUOEUBFUkAQYOrwSFwTB0cr7uQUjo9BVV%2FIF9V4av7qfE47wZrxbWYDyiGgW7X8xTcw5bg9COZTbDb9%2FhknXrYuwf5bEjMKiGxckGOqUBi6n9g8JZ6p8tfb8I%2B%2FwM73oExHw%2ByFAizKNJPs%2FkrV5HpE%2Fhs44dJ1anltiiN56laLbvt%2FRSiMmZxnP04KeVDQ8TmRwOYPornf4wT0YCW32%2FT7RS4i3Uf0xPkbl6FWklu1FBCGlrKhbQQDGy7vE%2FXVfQvM%2BBR%2F7l13h%2FMbkPfVKyXsnFG%2BkG2ALB3xDHpH7vXVXWiRFtXX2w2fyBXl0wcE7JomV1&X-Amz-Signature=0953afd8e79c55be58af879cbec9a1d968211462451106b96c5bb86797fa555e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

