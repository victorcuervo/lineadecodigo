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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDROS57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FJT3t8Bk5png1NxfWIwzXq5Nx6OslD2Cpcs59f%2By22gIhAKeXMeFi4RDO2Yp%2BiOBUVs5ZHvgDIT4eGiQ66Cw2PWsCKv8DCFsQABoMNjM3NDIzMTgzODA1Igxyhp80UiRM21Dza5kq3AM6UJrEK0tRc%2FNhlCSUKIcxRk5OdMClX8N0v%2FY9GzHn8PatJr9I5Zo3M%2BX9enXwJ1OTTtgRv7OGjTOpJE1Nm%2BsCH1SS9pjCJV6ywmU%2FVsNiYKcuwLyblosyioCL6CKU7RRtNH%2BNlHsvlMOUfu3HlwzYGhOVvlOqb4TTgQLqimHTCo%2Bxd21TBaaaiuVL98TQgwP0OgDtenFs3ZIhQbmZfEvikBJOacl7%2BAXHulOcaWkNwjw1b2m2pIMcxw8JRUm2mAchvJ%2B9BuX6uUiJSEB0Q%2F5us2I2vC9BSsWMebIlWujW9rx2nF%2FTf2VxD5L0B5JKKOuFfxn430yMZ2JGE87ZZZugY9LcHjYQP9ud%2FQW%2BJC6hiK9RmHVCZeQZoZo796U5wdAF%2B%2FeG9BxHO4LfoBDizdSdx0lBbYw1P9PBVCCwlU%2FmC%2FC%2FxOg8xwajpnntgI2qKIKssS3QPuUAQP%2Fza%2B7jBciS5rVG50gGLqtwuwQ%2BQTVvB5bXewNKvgQLDTDdva%2FghPQIarnbRgkG7dmPWdMoGlTLA%2BozNSBMaA0Nto9L%2F1PlCoRDk04KBQZDua3aDQ51Tkm93%2BtVZCrFNJq%2FSbTZOxF8K%2Fk4VF3Ow3iiB8FUigVdISifuZiXrXw%2BCcDASTDzzMrJBjqkAa%2BCvJSXPMZnG2xOIyYW0FNJBcZhfg1hPmLeT2F4w8xxbYHrgVcE7FVQRBEI1tjEoowqdQBvk57mcWIS6hJ%2BY6k7Chq6ra8BcNGIniZAzT0t%2BMUqo1Xjn5yXcdYPgMYByNecdExEyHKfPiOt1G7wAyk8rV%2FH2oAVfYJ3YSfHOL0GlTp5F9POfwn1eT6fGxgnPPB99zDrJkQ6YiW1x9KUr7F917BO&X-Amz-Signature=11ad72fcf84f867cd32113cbe2be675aa34b4eb1047a24f413f35c7ae652193b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6G25BL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiIhHBiGdSoO4PcfSNcoHUPwHxS9gDHmMoYRQtlbf68AiEA0Ptt%2FBDDxQOcKWKXIk7OGkIfKdNtgzzdg5USmineIXgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDdxCaXkLjnqBl18SSrcA%2FjvF%2FGtPrWQSK6tFObykS55pHg7uH4LSJhG%2FIuHNcvgVvZrNDMP%2BjbS%2B0vAHt%2FuNyM%2Fd%2BWsTJB6l%2FyFEmoFqTi7ijPSbnMNqRwGtmXxMWjNuPxqSeU64QZM%2FdMpZpS21ed2bT4CuRqJXnfO1AFKS6rgJk%2FQzuKIO1CHwPk3wRqq61FjVaynZulrCfkPpM3SdQqLpikVho2qHOOzh1lNyFQbtHhxWg7ASfVwkqtzfBykCXaMk34iIifJ8Ne1GsENTuthLStrk7Bs7GXl1dLMH%2BVQ4Y6PSwIcrGBr%2BFZ4M%2FMW9LdoOYq2urTB3ioNjoWxPZ1njjdYUsM%2BPGg5ri55sXfurXtCwKvPbyyZH33eTpFQZxRPPj1NgTvFnw4sihU5Rf6QywM1066ra6fLUbdKckNo99xPcJIEZFiFEi%2FOuiCl7SbDdNQgtsTRo0TXwbnEs9zbdton89XgsPspV6VvpPHoxa5MzITLZBgOESkySRJAVNR8XsulhS4Hhem92KCe7P3rZ9iVCZQwNTS56rUYteDsDIJTcGalOFYF%2FWdZDa7pIfLx4ytCzkOK2gYRGGhy4y0uk5RfVweqVeuL6Bfjr8E%2FOH8nDzJai8O9m4G87%2FsZLQMLDuqh0g3cS681MIzByskGOqUBzU38HThKkNpV670tHWj5AZSyhVaSbeV7gBuQa%2Fq91TeXUM2OPgrJ%2B%2BH%2BH9ZSHIhTfLZmzte586Pn1H6k1mZdSRf5puviNH1HMpD1BlVTPLJbCUn4A7geJs7QIuxdKJ39PykOleO%2B7m4lZjjveDh57M7IEnCr16PO6C7jPZWXUPJ%2BpkrHDKev%2ByRfk305ZxzV8zzaFvOFjtwR7eTwE1a%2F7F0zYwKM&X-Amz-Signature=96c300c883c00e9a69aae46ed05e2814671d5b029ad00ba95da145dfe70a23a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

