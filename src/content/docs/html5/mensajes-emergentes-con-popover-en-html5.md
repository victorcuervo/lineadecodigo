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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFJ4G5Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdVc64Tjr5nXsRASlPJK5ZwbCssAdqrUSIWpRVVvUCBAiEAl689ewptBLnSrPd8WNvf2a0633DZfOD2DOhr1dzRFiMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMNofDX9KPkwES1ydircA1a1ZjGqJ%2FQyJWw87%2FT6DA1L%2F2cGd9MJMogWkWP1%2BbyxqZ1Uo%2BFeU9VHRCpim2Folf9i83dgnzX%2FO%2FsFVVNNIOWQ2o%2BFofh%2FYtNY%2FgCEY%2FB166wed5uM1RbRkd5rhVqB64H2FjPGM0fwYuLBq5XZMsiC04o%2BUGtkDUyncFHTU6nYH2NEbb53hlbkW3bLf8iu%2BdKs%2FSI2N5iUF734wlffXNFqxFsITKg%2BjnBj7cKKREIbjn1Ddq2nLi4wKA%2BwuiPHwd8or6TsrbFHiUB9tMto6f3V890kDSRXq2TsH715XTG8hSX9VXnaerqKiZYsopniWc%2BPGZsu%2BsYcnanCLGntxXMRyDhiFXYAToKuBMUK1ziiMVHAmgKlykN2zD3%2F0ihT4ebJCU2awTQxZ8h25dQTxzI0MhiFxeCeJzMOQIt7wPfmdYZ7RPrRWMahDUSUPKL7rmoL9TJgeeqiGy6eEUf%2BLDAyvZFKQZUzZYjzojoXm340nhkWVfvF0pm9rk%2FU40%2FKOwcqPgRB%2BZIGL9RYMatdUknk8Nu9oDunq%2FWWfLbXNHgXfTbHlb1HDVzZWeOG%2BibDnz8lwZyYQBiFgZLt4d3UHGAGMWIOYi8A%2B01fiCc4Jh8aMUrVyOiBfXAAHrWsMOzM0ckGOqUBdVTZ9F5cfGSSSpwb%2FdiPOOKrMD%2FpmYT9NRTXhx%2B6nY0%2FvQcG%2FORr%2FxBBBw8G2kFoXUinCjFTrv3PJwqJPpaPLUkzvGcwk8TKUP%2BBPx7o3wCueynf%2Be%2FlmEEtlC%2BVO3EX0dIgK71QhDMNd9yxuyYrbm3YRgCoR52t%2BvfJSCB9SCpDSE0ipr8XUyhMfGuZ%2Fc9TScbbw%2Fs5hjo1g8CnP5q2nUi%2BXk8w&X-Amz-Signature=2905f0d4981512bc3cf34bf2613e1b6898d3328a47507bda9d621627711a7469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QTZLHY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0TzqDu8MytZ9mdf3KK7CF9CA7wCk8FvZgHRhzSNzr1AiBZ3oCx5OnKvca%2FC3tD2DBivFKPyraqqDprobcZed0jbyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMyDtVwHuNHIE8ikkaKtwDdjaDkoUSNoUtoULt8BnNkCYvjQ6NPpFqP8rkjdiyGt%2BhBrldQwb9fm0GlhRLsnBJpJZy1Wg4MyQOIj48PMZRICBVHt8Rgei0FA%2BI3CvpCtHFl3eZ2YNJ2xYfk%2F%2BtMm3yL7A6j5gHtiGgX0SBHwQXr6gosQ2SZM4Xxeuxlha1ghg2lBOke%2BDdMzoWDODi0zfO7bXqkvbGSkDEsYl8DnLSOwsMOQLy7VTb5X5Vav9yjUyM1rPg8lnFVxaxUQP6gq3Xy%2B8%2BcqHmcGNAUbD%2BnrtBPcUPAy7mNjZUuPJUFt4vMARCjCrajtZfczdzZ2StDOqiOLPIgtY%2FsJkNRI343iayjmHf1AX5O8dV%2FJN5cgeeS29WfeQNV3o2DQLkhKrswhKI1ZACGNurTp4vGvk0b2TtSLOpIYzLheABTBJ4y%2F0IYVg2l5EugnfAtCBZnvmJ%2BTZlGfAefa0SokjpTjy%2FsdK5qL4XjlHz4xU4U7MFV9Pk3ULfLVFr2xqGFXUanKzxrXwcBf%2BF4r7KTiQ6lr7YDWMe0ioBWkAalv6%2FrNHAHknSaEDQI8i6HhMjAyxtFKDAEC3e6HE4UnKa7%2FX%2BaofacJMyxROEjoH82DW8avEdL0ltfV4k4YaH4m3Rm8XEq%2BowlcfRyQY6pgHDNaCoWs2Xai5%2FG%2FR%2B0xZcuROqNmAD5cVLVKOHEx%2Bt90ldjl8TZVh52UvLp%2Fye3A8LESWMHKolODFw4JTbOimDddC6M%2Bt6uw1PfpSY2R07XtJFRtfv2D3TSq5Mg6h1ZRE06xZqQNP3qnPnhj50G4jm%2B7Mi07QUCZffAv8nb%2Byc04uSZ%2BYCVVVonuWSUklNgbEY%2BgmswQ5NhXrfJbMpLxfawGKj0GSt&X-Amz-Signature=8d0090533a1ef91598cdf7ee04c9b3cb196d9187a665aeb5440f2a542b00f6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

