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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FG66EHA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzmSYx%2FoehREyk3b3H5TDELmA1hkutbiTJj8kurmRJ6wIhAOeywSvkoxnevknIwIhCUrGItdfKAN1mJ5pReTERpE6MKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTvlswItYQh0aYgxsq3AOUdZ%2BQ5loh4Tm4yVrwujshzaUGZ8Q0idIPlHuHfxATQm1AmNddTYgsFc4u19Nq%2BFrvDq0ZkTmYRmq8PFwTHl3cS2QdHOgM0nN0zEom7eyHFYoq1N7cXDbNlIWikSdJ1fn5Tx0VIRj2QFnP5ky8Je58jS8DgLwXvLoSV4ac5m%2FIKzJgTpjrOiJ288dCqHUoSwA7saz92wd5fmnaxESUToa1%2FQtYc4clKWTLDK038L6Ctjsp3TKiitsRFacfxy%2FGkKvXMDOiYxWSx1DXuFpngNnzoFmeuiHddtUutGcBGcFgoXjrg7xp8bzfBCdKl0LxKuwbhl22n%2FMPSUQOlG1REE4TLBXnz%2Bx2IfS%2FT0JdOhC8np72l3eXrIIoyaE4VG89dLTv3BxmO1YtffB6ITagAdKYU04PcEBVxTHS7Yia6J8IjIPk%2Bhmi4u8CrE8A9%2FhK7PKOEUdI%2BjeYUaOZREmJmXEGRwp7i4QVPACAHPMiiL7fbc1b%2FquMNkpxshEEd7x2O3Ol7blT3UQSXtuQg2Cy8SJKYSEao3CFGRRDn4qQyzEEvVlwBkSvHR1OSY4qPBysjgHWo3HiHtCAemcGvk1si5COWL0vTLhullIkAkdBDe8nicqXyBBsh%2BLfV1TenDCM79jJBjqkAcCMmuO4tY%2FJlhbELVulobGXBWh3Gcx0EfDMIH0jxqIjKsHXjDkvaLDxSUIeB2K36jYFvfA%2Btg6sivZDrxxRRatTpls3h0J%2Fq4eBVSAQ1CIEPLkSj6DEdn0yVt6vQBwuMYnKO8uBYtY09Yq9pmC%2B0GxfGj69q5f6hDjNk%2FHiTdUTw6ITwODRngBKNH3WDE6%2BmOK8%2FabG8X1hF6GlBPyYjiell6vt&X-Amz-Signature=5898e75ebdceaac09a39b0c4a77a0db7bee33b84e8bc05676ce58a62479618bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYD2QEWO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5Gi8w8sPqvsshwfWfuSv7hGvKC%2FjVx%2FwgS793sJIcgIgXQKD9zsO95DyULUV63hv9X73LiYvpD16toYRwX4dAwkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpWLPaSql506QMGyircA0l3wKKvW%2F%2Ba%2BM8cvt3%2BFKt8kh2psN7CtbvBLoDNF59G2UrJtn25b38ZyY8UPFVACyR1isO7a1Dxuhn6u3Dls43yGHaLRFEwy77yDofeUIhxBiKopvEnWOjwh4iro%2BC0SCehrIfrOHGzSeWa9LBhoRCCreTS4b21NZ77CYStNdqw%2F%2BbY%2B2AM7D7IqugrKI%2BYK5y2Iic7btAIcyKx2SGVAmdPqiJcGUWVEZrJRgRf%2BhORwnz1%2B3IRMtMvg2im3Kp3SJE9EzjyfVShBSDtfD9BqTHgTiZI4kN9aGv1%2BYzi32y6Y%2BY149CeA5lDUQJTWuTqCTdQvBZFswIBjfzhJ0dPqVy0uwkpKbFhVS7FqpUATpZcVHyHBJ8CaKPlMaEWel5L%2BnT3eoAacguqNNGenXwM4GAKZgDtgqDetsc3ISs0%2BAPOPuSLbI3dTJ0XzIxOdIh4ZNIKZer7%2BUFZeYapFzw7g0R4bQ0t8JUcDnGU8svhbioJVS05Rn8u15DPJtOAkC8Y9qhKzrzwzUI0nBnGlBrpUaUxbDewRJ9Nvcz6mxwe69ghxdrXpXURY7LlhLIqcAVFlAiDm88Ozo5M1ckdA14DxCDGY91HH%2BX6J1mrPK835QwiZaojYS1JUFD%2BRouVMIvv2MkGOqUBiHFZVDqfeVh%2BitHfXR2381gCdew%2FQkyvoiUaTH7YDHc8oY6apctPzMX8NTAoV7TBHog1yXRCjZW28t2C1onSQ%2BQ7%2BUMMWmqz8QZF8Z0BfM%2BO2JekIL%2F1onDF6G%2BjZtiC3SKm2qsaezRSXUZYbkCSaPbXBG086QC9SfA8KmIr7PHyvAkv7mtIJH3db1aCWa37WlOtflF6LvV0OVRGYmfZGe2a4zU%2F&X-Amz-Signature=0fbd27e31138822cc50109e1faabbd4854490e1a11faa3fb9be15ee93862db71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

