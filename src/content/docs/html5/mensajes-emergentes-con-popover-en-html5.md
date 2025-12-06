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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVFCANM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD70YFMGmAm98MArJqZPmUpzYYXp2T1xbXE%2Fum7p8GwxwIhAOWo%2BBd7Ej1mJy9UIoSAbECs%2FzZsOt%2BmphbNo4QP%2BVDRKv8DCHIQABoMNjM3NDIzMTgzODA1Igzj3dA65BauW9xbcrAq3AMPYa08dWDVteR0ayEP02D7QsvfI77dhys4w2SBgjV%2Bpq02EFdHlXwCZm5XktLxr%2F%2BBnFaPYM6M3d1mZewaBYWn2OX9yu7jlwf86cXPFKpBA7wCE6Disgsx%2FowC8MOnvWr6ka14PVx%2B4fU4R03HimGV8LsxYa%2BuAOt3faZW27WtG2YC2tjoL5UPKx4sfJOJO9C5a%2B58ZyY5CUDRIwF85n4rmhOSvK60fBouMF8QP5K9MyhEOL67JOsI8DYxhn11dP%2B7NSkqSc7B1142mLnyx0a1Qoc4v6Uf12CoUBcTL6TbCsKRu0%2FJ%2Bxa09wxIrT8xgmGUnUZIRyuIVuTqSpWBeaFVQtlhaP%2By6lMT3IqrZd6v8ISiJCIvysfaHqh9Ei3ZdLIRYg8jqyuDk7510LcevAUCiPmqSkY%2BVuB7nUJMnl2cHEvge%2BiDtNaRzosowolyD8baiX5622ww%2BVqBzoghQSo1EvauRSivdpA51r48YigDEMlDf3dZxn0gAlwcZ89S4zqqaZaEjrqvPCyNmtNbKQO5mVnZxh7TY3JPpHyf3w5aTIbzdln7aEGy%2BDXJ5lJ48I%2B7uYVo9YPC22MZhOb6oD0dDnlOMBLCuvBKvN4mdQeHU1v%2BRfz8cg1ZUzW17zCi68%2FJBjqkARfpDn%2B%2FPTCPuu5FiymndY%2B%2F4Yy21qcSrZJyhrc2f7JwoW3tYiNWyGlCPBi%2FDoVU7W7%2FYGfUD44nc9tbya4D5Jermdlk4k04ETPsk0TlDy6Nz6osGzvN%2FQQSgZHqzTEkClaEZ2gi9okVESmfHpeD6ASHfzvVyvMPNzda5luCvncI2XoZ2xbAs5eOEoWADeuVqztYmOm3akn95Bd3J18whmbfhl%2BN&X-Amz-Signature=6986c150be59a5ba85bc23dbdb24d04fb18e5e6ee431685939550cff973a422c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDKC3PB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKKRFlDDqHM0Gxp5%2BVTz244f3U5XCKU9wKZvQQ3%2Fx4pAiBrBqkbFFAsYPyglEMll%2FWeDHNgq2H6NVRZMcp8Bw0dyyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmhcqorbdlwfolYg5KtwDvW9TrsVh%2Bn6oU50neS33p7H27cth9QC8EYUe2ejv0ywiP4OMl%2BwAg8nBUHO7vjB4EcAp%2BI%2BJIiYX02l8SkzUiUKrlXGvDl6hh0MtpeCJXDE4JZ2rzLmhKrdvE2P4dd3CqDjo4e4R1duQ4eHaF%2BJ5c3nr9CP9TFMtZZMXG0QwhZkQxTkpm0JieE%2BrvWG28AB7wx93U58qtoQ5wGZrOL4f%2Ff9NZKQcgsMplZz7OD1uLxNMmeRK3t%2BkWqH3QO7Xgm3UqKwki1qe9juN1hfQIkl0WatjXYQLlnSWhZVt8fcs7osG%2BrNgzHAWQFqOwgkyn%2BiQWTvhAO0f0JeSPjDU8XMWAnnWezPPgIXDSZhUjB4JoaXNej5%2FHQvAorocCGNPcbJ%2BuiJeporAjN69EPNrwUtmcd43c4Spg%2FQcXrbufNkLELIc%2BahVzh8EL2w6duxrnBKepG9l2zUn3a8XyzrmwDsCflg%2FeKaAMblihpZrtc9zqGv69FBDMwOTa2CTzwHquQFEt19UUrrubpn%2FrhgTahHSl%2BDBYseBPt074%2FkFn%2BsypUWfhsVtWvm5bv1D3K62Ff3g1sVnTI9fa0EvQKzqexDmMLZqmjxGHnc1OG0%2FKXfWOUzdlIlZaxKL6A4bAVww5evPyQY6pgHb8nEWQfQHoici8%2BsSa1VOf6r6qJzalZvkDAPVLndkI7YN86%2Fu2e0bUz1aDKx%2F7UTwebpq%2F%2F4RTQBiD1ow5JhlOyex%2F%2B2mnPYxeyGg0k6JyUepI1AHj2oitj2FfGgCMMM3UASEenNQX7gKS8FnomoFW3ZdPXChrXyCqiaP8PtFkZXorIAiRnQ%2F1JBv84EbUsFLsm5ZvoDFvVz%2F%2BmbXoHIgB5%2BTJEVK&X-Amz-Signature=4e803b10a749f5344098afa166ecfc2d8d90f68d235b8d7608cee1e6bdec3aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

