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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIOFU37%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHJVmNMw%2Bhtp5%2FXCb%2FAcNkln1GlaUQDqvbOpM2cQ7VwIhALsjGsQQcsA50Rgs0hjsKZBNuKPsPR70Rcxsn03zVqMsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy181Uici8cr3dOzUUq3AODgFejkDAQGhjgL9jYP94gI88YqMonNRz9jYlg59aUj1ldiJt7eVaAw2246O8L%2B03aNqWDjb0B5pFrHEajWzu6ywc91PZK0Hzi8ZP%2FqyDHYOsykoMmQ3hkyuVS2p0T2rkq8Ck7S8Tk%2BxuClC3zq1HjAfOZ06CcihowtE7HaXsM5EN%2FNtO2V%2B%2Bf8XeA1Jhep2BgSNckKXyi%2FQffzeSJTYLRmG4m1mw0YbG5r0uhJ%2F%2FyM0qdqT51FWlrX9BjZRJ09TQn44a3QTJDbUbtWLSGHO1%2BUVxU13EPr0K7NwuHz5ssBwqAC5nUnlVIVn%2F5pjJpNm952YJ3suSyOD4M9NR2jZ18HduIzgRz%2FTOiMGliyiurn6VElAyf13LRCSkmLn8zCefAhhJGP3eG7TdEZXmdQgGIP39Ax35aInKQ81dsOuhDeODwBUkLpDGZwgXVTilpO%2B8tMqJf1FLo%2B6SVmq4pPhJrEhEG%2F6sClaffdI2EsYCglLZ3PaMBTJpsmpviZPn8ct8tMYwAxGutwNdtcq9Ona9LHSF3vCdo9Rj87UWkphqzb1SbRGtj%2F4mRv9MRt8OnVjImdaSBSRTfnnRdndsj06pE3Em6kxTZoYakK%2Fg4s2VlnTT75%2B24bjNStzFddzDDodTJBjqkAfUEIfvm5e7%2FsjN5VJ02fjQ1W7BjjhyhIvRcLdJr2PBjK7IJSq8UdVRwT0uGvYpheSS5QBsR%2FuCQEOfKd8tNB8XYPDPG8OgHWwvsyFIJ5GvsUaZ7G3Mi6%2FOWZIG5%2Bx65b9x0zvGZOXcmV%2FGOy%2FFv3t1znhWFD5CY%2FvemCQvmf6Aw4zuwxD935314s9DJyBWpY675ULpkDnLjw3xQTIuCip%2B9fo3Y&X-Amz-Signature=1bf656ee9b2e92ebebe507a24edcc5e0753e42fba577fca3a098dedca078314d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMNH3X4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEQgu0Ro2STRJOM8Y1UZjvmo4RRLsmebPdo4wKGeMxOgIhAPglb8jg6E6oYmd8Vdazz%2BXqfRzu93ZNTQNj2bXOTxsdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWE8SjvmEPrO%2BBnowq3ANTbkW1YPv6wR80rRjz%2BDz7o2lJp7EuLVWULf%2F6Ed5ybr3PghbhuImy7Nrlrw2U%2BEmy71vNHbwbK69uRDcyNBj8AZLL7yqdzPIKV3yW8eHTOe1XdwcxfWTJUxZxuDolyzqZYPFuDUHfMk4ZkvU6Rqf%2FRkFtR%2ByVD7VZY8X8NBk6kX4W%2BIJSM7ckZrVu%2BhUgmd%2B7Xr7a%2BAldNJky%2Bvm3TCZqLcSHg3%2Bo3wGMR%2BDoVGqySzBiZNz%2BO4uyPiXxVK%2FcBCgU5rs%2FJGfcvhoCvkEs0oR0Bj5OVnXRvRLhOUzOb%2Fjw2CVwqagzGWVRCcI8hR9bPv09SMQK5qmclSisVYe0O9RFnZcQuGAM88FCSM7z9SCGy7Tk1eynKZM%2BxZ5d1BhUXh%2Bvr591jevginqE%2Fe00iFQvT9nMpmWkfd%2BuzCFSxKz4sIkgNJBiO594DTKydAv6n78DHnwtDuomUTVGP%2B1r23tmr7D1lj33bDfCojBL%2FI4cMDVE03Art7N%2BgGlU7d3uHmuCum1%2FwB4%2FM%2B3s%2FT4%2FDgUmiEBCLGRR4MVY6uIG0qfMtm4mYzYnaYxlHiI1luKvu9j0THEZVZ45tbOtYEKraSl%2FGLO%2BpvAV%2BUZMBZiUmbx2sUNJls9oBP5aKHL71DCKnNTJBjqkATGjjjTyaAR8U1UIYWLFNgq04f98h2VUCP8h9eqo1TQ8o%2F6vtdgOFjk891dTGPZSPP%2Fdn14QnphCyt8WahF%2BywWWDM6R7TqctHW9r751aRbbhM9H8lWZWVuC5SVRzpQrmBm52f%2FfRSf39mYUJg7PoYWXWDisIPAV5axpg6NQtvqc5L7CouEUQ9THlX3ctHLpmqL7jN6jmUbs9P7nnswabVwvBFx5&X-Amz-Signature=c829847497191f9118280e4b54f3965fc81bd6305db07965639d7104a09a66e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

