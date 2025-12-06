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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDTMF5C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeF%2Fb3V7EJ7YmtgmIJ9mY%2F2LZFiaVerXBZU28Er4evOAiEA4Q7npDeqVirIUUKuavy6x5bFeIWsdEfJU0D7TZckNqYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL74gsy2L79DEmEj8CrcA4ED%2FgvCFYig9IfBOJ4y2xiN1hf6vbHsxBeA22ulFk8vVwW7VC4pAyxuZWs1D%2BoPIKhj%2FViBsrLg38nFMMkfZMW3Lia8f6qanLw%2FI8BABNS7lVIA1jDqTTCOCjaVNLu3uTaY%2B4tQmeID9GHKeM3HoP%2BT3DBjuqAw8At2NZONxqgd2UNpeDO9sGzfOotnmXfw%2FS6COR95QVgzCAHg4pEUoRw%2Byp1aX6pCa%2BxU0A9q%2BtKJ77JOxoccpPc1rkpmmRKZIdr%2B7uCSUwtEJjbxKThqrZPDoNXrBJq6rODSqxtygdt%2FcRY3hJq9B4KJGkL9vNwI9UZSmG4GPZgadC3GufAF2SwfLDnX49YTIKgS5lAlFcuERGlpE9aqvCMtk8s5qc0RhVlYDLySgiAQuOfeXU1tGCW9ChTPTsZEIRmh3LxY1INKzxIR3n2qkmwca3DAe%2BkFeLQ165oXoTUE4bpPlsF7DEvMRVkwiHCZaMe1BEAG%2B8ElsVkWl28p8PNeYmAlXEcqeHCe9pMxHYIKyGeUC0CoMUti0WiNzaBOni9J%2FpnXixC%2FTMHsG22j3WZLkITbYl7Rsgjb5eO3VvdWfjR8tZtZogh5bB5AdiX6P4DVtdgXGn2CpTobhVC4Ywj6k9xGMLqm0MkGOqUBK9j1PH1p1ia1S3wJJ8jZxPmJdcebLt57FIpqvuf8c4x5KCDWIATQpdRsoq22I56uWIKUpf%2Bg3HhFH1%2F%2Bk7ewCTk8HTBGRuBIFXeCyxZQgIuUbOSqJ5Jow1FDFFGnrAK%2FHAK%2BMGGva27Oyb8OshnYHcq4UN1k0JsYAhvG3m%2FCB75AcGBpChWirUOBFCPMN5tXBLLLCS8E%2Bhemyj%2FjeJDt%2BeyIEOC6&X-Amz-Signature=77aca53c5a56ade1d8613ecbb94e987f234dc51256789b135f95058b8c79ac03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622B5GQNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtJWYCEOj67rglI7zl%2FQwOv%2FaVi4a1RGQciWz3HdiBxgIgV3Z3I3NWHY%2FTs5bvVzvZf1Z9n%2FhBWlf2EZN9BqtPxKkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFg2jwzuOiTExXTQNCrcAx3gGXvBSFNReo49dG5IMd5GtbgcPsb4AJtaByPHJHvLByLhg%2FoOLr2L9vyJNM1Zuz4%2Bk%2Ff%2B4Tv11o03AuA7rvN7mMS7e4Uf2lfRd4P1QpGzsIpnjUtXX2kDOYD0EGp6GjqC%2F1mnWqGNv7yFk6ndJIWBlb8yGXyrHS6alW%2B2fMljnDcmvUa1ePo8ucA4w6py0Dww%2Br22lQonesHcXyZyPNITVyStnmuOWisnFg8QyyqsjvOBpJwxfWHJDlrbojXvLnDrT9Ox0j68MR0vWOy%2BIi91sHdXTjPSURXZhNm5OMidhmmDlJlWToT0ocR6d7QsqCYtPxetukmTqjkqIRp1QeYzdEcxkcttikQtIegKlRS%2FX2r7geCJGLdoMDBwbvGALMKTOuIIUXAcXLcr7JX%2BOB2BCS5eVfriDSYVxpExBHGdtYbe%2FprvTVnp2fciUdkmczkNkNp36MuJuhaAafJTQxRFeNYbl8BEnCauWVO68oTj9ki%2B5ikAwesIjXbbeuErFLweVTd4rbAa%2BXLsbun4BnoegONRhMPzdQuhOTq6OwWEg9ZuXtv29lULOCXo4AGkckvrmR3JJ5mKnImn9SuQyPrZ%2BxBizMb2dV8ksXD%2FkaLP3558lP%2FkTb75%2B39HMIX%2B0MkGOqUBBbAzH6D3%2B85OistV1owRqePt1Iso97I2CyojB%2Fy3LNHAgtbOzEEsKhC2VKTEfV68qwRTsd4LcHZb%2FNHxi9Fi9g%2F2HznW25x0Dh5aTc%2F9NGU4QIvexT%2BD%2FP10pqWLtpjQKmkin5XQoEPLsUbfgOOzE2h9YvVkcN3pjs3%2BAOA2BOdOgvFEivjfVKaiuX7JCnBIleQahImpJUr3tbFotcHcYTOe3bp1&X-Amz-Signature=ae381e3ce626dbe2bc6b99f2c0080acda897df8ea87eb42b2ac66e0d3d4837cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

