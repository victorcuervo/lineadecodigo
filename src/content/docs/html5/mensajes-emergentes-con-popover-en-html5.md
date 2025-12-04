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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTJPE7Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERjfzByoyVgUhZEw4VBP0KlOd6TFvpDnR5QMRbXc5YBAiA7t%2FZhjv4BDMCCqjFflG3W%2F29ksrVrPHPSf1etRMSpwir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMo8vermD3YkZBhczhKtwDDqQIKLCnkalPVHAkQlcisQXYLzDQgsXcf%2B59c%2FwRRWRZe5A31k6m6mdxpVqnASOPF4xlrh286%2FL9%2FQ631fu%2Bzqjnfv8dUREt0hOXCvJQDtlgt9xvgPD8WGi0Zv%2FaVF5H9IW%2F3Rva7KdWhoDF%2BIVzGOTF3H37dQWURUWhoEp8RGuRsrGexgMk6vZf2AQk5PFEfP7PXsfF480NMUj7VcgPrj0ZJd1iz6r%2BWfG0uzzFayJ9t7e2w9VuQL5CQxzJyIRlKdqbpDxjvZYyPozK5r2KUcsltDog7TlqeFlfEUL%2Fk2%2Fnq8Tq0buAiX0op3uJn1Ypi8XT1s4nlbpo8uvVTZijNB5S3CuNFiehXZPxDasJbcPAp3DnbA58KLJ663T9pn5IZai8DkAFzR9rzoOloNcGohLFg7x%2FjAPqfLuXB%2FdXrCK%2FGgKVlhiT274MXturqVioPyVm9GSR3qGx35xnIruaeTmn0EmJuXj95RzorcT1bdVhrgL3%2BjSOEBIwW%2BjchnSbRA45k2TIAfyiBxuY0D9aPEDTeJWkwywF7lYAgDCCje9Zi1%2BeIStzSANLNjQ2FSOiXGfwVrYW1cHetfA%2FLGKyjz6YLKnf6TkwXP6%2FAyS8xGZdnDVBRpWNR3eU70wwxtvGyQY6pgGlycoxiqiGRj%2BkofBFe35QH4yXzOtvikWEd1Wn4Ep8Y3qBknv3Y7U5Q9dprjsx3LUN%2Fh4wek%2FPZOqLQSqQMSnA3BxGV3fWCEhg%2FlbOSJz7R%2FZyLczWZEcepw%2FTNt2IcHATEstKs%2FQxu9B9JfL2G4lmfl1JCV8GB3duhVsoi6A2Wh7D0g9MZSiYFVz8xaMLCorIZcAnXv9FM112qMhAlY5BOL9omIDE&X-Amz-Signature=889dfb1277ee0edd07e47b0450d4247c05adba2ab8a2aeaaa2a785c9c6a8aec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAH7NMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTLWw4R8yNeoynQo2d7Ms3kaHctKLzlVfbxM%2BFNr%2B0cAiAQ3Pcn4YaHGvIBb8QkULAmGkNC9LOhQB2vQOmrba1k5yr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM4FBvl1R7ALNNosEMKtwDAnZvqDVmIEC5mGxNsKA5f4rh0zeCf6w%2FltxTrs562PI8YJfosl9p%2FjQ0WUSPtI5L0%2FO519wgcyjU6eU285xoduw9Z3Kka5fXQ25hhKkgfzHoWNuxo1L86sn44h3Qpv8EAoVi6Wew3zFIB72xT%2FCBM7h2b2LO2Lg%2FPK7kgMXXWN0vxEOqX0iSb5rqibVQ6qn08%2BwKPueOhtu4QbyHBo9GLSio721b3Hdcxz9x7TFaTbXz8MfQYI47bp2buINFqcFnITXOYcePVJuaMb41AY6IA%2FwZQvb5Bp8NypSBulZDQJnXziO%2FOmiKRix%2FcGfg%2F9iIcp9VfHSSbAa2DBBxwQzP4ocTMuVxZgPcaGpObW0dfOb%2FHzuDo%2BxUPyY264lkskh8ztPyr5ljjMGeryLtHAuI4u067Oirwq8T5N8nBR6q54rYrHOeKY4iRYGx6Ut2h%2BBSKffj%2BBML42aHntwfO%2BF48lu%2BIkaGl5KMAIBJLwH8UCxKBfnnmh9bwRnLXoHy3Gef%2BU0%2Fa1NYf1KopPF075LijpUfrDmm%2FqslSXJBgpw9xwRl7LHL0XNvXKgVsrh%2Bl5MQnlywX54J%2B2%2B2os621NmwN5Dj6p60kGBjP9f47o8srYkY9CObS1TEufKSJVcw%2F9vGyQY6pgFB%2FXEZ8NOtBAxPoagrYb4M5uXHEVojJXwjsh5ERlgQEhqlTYdmVSY1IJWhUAV36UpcY4VkJaD187jdP1%2FRs2Tqth3OqeXgaslylEer76KOdas00gnO74GbqLK7ewIwHQole2qiUg4hTJHONWxVMO2YW2IPJwyLLhiBpAu8NoGDF6fShf4AxFnYzWajU2CsqtEdI%2BS4VXeUO27EAzgUMOqAiMXI%2Bn0a&X-Amz-Signature=53b7205b65537bdcb623f6672fdfec4147744c9dddce51d121f01b2bf64b7833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

