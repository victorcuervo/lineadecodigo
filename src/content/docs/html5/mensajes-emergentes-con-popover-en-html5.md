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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RMV2FV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC087C8dymD8%2BMI%2FsbDeUQequ0ct4PKNBFfhJwnZC7zygIgX6YEVFS%2B2UWKSsGp%2FlIZajlRwoLr90rEmsnW%2B2LkOc8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt2%2Fjjo%2F5D16yCuAyrcAx%2BBY%2BWJWAPMkNCRSCobmyZgjQsCrPG89Jsw9Kgys9t%2F1wYXN0%2BssouVgleyghDmFxYBF6Y3MX7YbYmQpoJHwm74umP%2BNqRmqxtp3mje8qsWtZaw7ryLngeVLqwITK7jbTKwDUdyuIa2RbOorRxZA90V%2Bne7UFC5VUD%2FExxBN50m%2BfVXQkJsjjvYie512mgP3uEpLItwP8FY%2FSvtwC4SgJoFVsW9TtIqem1INuVoCwHQOtUzWk4NZLNuYqT%2B87lD054O7RGu1ZVBz1x4tvlq09T%2FjXAgeaXf3qR%2FnD2d5jRU8S5zSeTWOvngDgdM2CYCh0V%2BcZ3YzhtBQMpz2kQdTy7TwVkNqIsVfzQqM4iGldebxcr965Kgx9V9gA2RPmnnL96Uuo9OG%2FhT0ewcqZBCAguhemO%2B7eaCDW1IZZ%2FOpQp81WLTVVbisD4J%2FTZ8Sd5NBE0nCVPpRzbjUFNulbODxud%2FQ6clYttk3NRjNc7u5HkpjxRFOVChdj9VXm4mwh8f7UVW39hNR6eCQZH%2FclMB6FCPFkmdNF4qyRioxeed2fKIVR6Yu65Zi2Eny2ArXjpL9H93tLgcqgW4YR%2FpOpvt0VI8qYwlkUlj88VKm0rE34JfpZso5tzzTbXIP5M3MIii3ckGOqUBbIZHFRn3Pj5m6UcacuJzMLD0ga%2B77DkIgkfnqvRCamB8O%2FZjTYR7JoP7zimCYlzuuchsDIb%2BSKBvKpIsV9m2EDAdFmLup6SzdTVW%2BZu3aJSNZDFxAD%2F6kY%2BsyDgXxmb%2Fs05l2pChX55ltY5L5Nv93WVmJSwzb3lfJjkAAABbYb8l2Xo3x8wYvetJOwJQe81hqNoBUdaebdQN7XTu9zDRB79FKn7G&X-Amz-Signature=16634c2751a631da5af27ee457b012a1a775e352ff81edc73960c12e4819f5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN643WYC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjvhQ1yj5LlL2ci7Omy3zTL0cm%2BijvCK2bUS%2FZlKq%2FEAiEAqLElD%2Bbg0SZeY1bIUxNj9TZ90b6aJOPWtfQWehfRepgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdgnR1H3uAxjYt3zSrcA4nuo%2FZ%2Bc3N9CGqjMcQW68%2FuQhAOXcFhOJHAXtznb%2BmyCm3qm5pluEgR5Iq1fS0UbygrZ4n2k3eq4LDQmzgZGA2z0Y0wrK4bd2FIFcMWVTt6Fp2ZkMwkCz9uJuiMhvH65HVB2xYR28CcjFfj3ZCn4yACQD%2BXGCpehi6JuEG12JBsOZHSiYj7pS7vMQ56%2BbEd6GJWX%2FP8Cdrk%2BZp6I9AwrNGlMCY7ilpPJlvuNBUmg1Gi3klPaejfgyjY7BdDbm6ZLdYzGQ5bV1lxVyIYcKdo9sJJsajcD50fHHxm2cz7T43379wqcqJxKAhoJRJpM79%2FBY0eRlpapCWdqqS9%2FFoWMR8GLJnBD%2FekUh1QXJiIDl%2BZXpwVGtmzz3FGQmyqb0C7XPoDyTUKFP12uDr0HKqIYLRWi94bIaVbs671pnBngQoJq%2BAa1xwtQLsxEnEdVQAxv8fHlnfsPmci%2FAhwmJr4aj%2FLly604mUNHY5NllBBx08k1YVkx89F8STSs4rK2wGfMJpkkHZmQL7rAKlN%2F%2FsEKnGOrH50vrDZH%2Br3eb10vNNNBzSWZeMvIKby4Om52pi9qssUjcJ%2FyE5Yn4yVSt7oUzieiIhvDMH4fn0BCCiKRffYsoJgiaahvUt8E6DeMLmi3ckGOqUBydIBR3SF%2FP7UXfUprzBd%2FN2lruuLSNqHyz9zn1soTydj58xKZ%2FonfGkMgl6I72OOFcEUkQA9aRoYko6IdaNGHZ7VXvSW8hgEXfD8iCFn54NK0%2Fc4OELqCu4%2Bmm%2F58y%2FBgPiZnPfOrXgooArxnpZTJEIckrISdUs7zDKcMO5BUlRTAWNt7sqkJua%2Fwc8X2WIt1aosikEhhwjL8sLyb5StPTVaWzlD&X-Amz-Signature=4d66210cd9f193b807235d276f7f9e7cf0463ae8cb34c80051ac889e74c22410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

