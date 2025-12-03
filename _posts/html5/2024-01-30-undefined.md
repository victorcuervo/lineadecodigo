---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIEQXBB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFu%2FYsWib2MipieSUVlv5TqGsdkFLRUxFz4V8w9SRKf9AiEAv1jtA5lbtbR6vv1HyHMi7Kh66Dpj8xYlimwJEN7TuDMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHETGmnr0%2BB56PcqHyrcA6fGLdfbSMtBp%2BAOL8rdoqlTg7%2Bjkqm%2BRpLxFWc2AB8J2saqZQhoWeA3quvuaQKzqSyvPvxDTcDxujv2YdjbDPavWPo%2FCqoGo1UguGj1ymb5C3cY%2B%2BPRDlfN4zWBuTVvGZeOphIP68roPkJcO2bBJFEqqCm3ZU%2BdPk7t5IMk3Z5PdM%2FhneIhm9OJnk4qxRXWRNwoKr5K4afgdaINsorgrhr2OHEAfuj2y0kzuSFYxGRNERsH5XeU4prxwFRwlPrhG0JEQm1Pg8KZOk%2Blr7l8KVArcBbFCzu3DaBf7j9lJ2GpGGeSIFl6%2B7Yuf27k%2FHiXTqiVcPA5SbAz3O1Erp%2FavpswED40EZ1aXdU%2FwSPw15mL6TtaI0kUFWBO1cXmhECd36CnWQxmpkY3PH3aOQul%2FXXRn7wMDtS0Bk1niw1%2BZ8GBNP9NQA47Eq4P1ck7PKunscD5xrXFTy1EFMJIjaacAGCLgYGDkqPv9qA2FMAk4%2BMBOlFAJ5NsDiatOIOYbqmoRg1CpRb3uvI5QUWvWG9Yxd1fEIDqFfC%2FkJuYn0cRtfZiOrTFfplSKJxJ0ZDScbFfRDe6J73mL0PglQfkdtvU3Wa8S38Hk%2BsimUb8yu7mgaVhR3DJgnGdcOd6B74GMNjUv8kGOqUBw12TtZ9CyAf775Gfg0pZfVFsDgNTB%2F%2BpLnCIXF5pOgrk3eXeEjK74SoOP7Gpo84j2cwMvQd6OFnA90yp94VsAUn4da4kRswvv9%2BBW%2FfOrlf6NESCvj2grMOJ70KvDfTT8yNV4fu5LgyJQp8Jj%2FCuRMo23OhPccQCULnyPFDzWL5KTI4tCr%2FRACsGfMEP6vhYdrm1S3z3UlkNw7cW8Lhbe%2FoEXf%2FZ&X-Amz-Signature=69a90f5dfef0e835156787729b6c2d9347c73fa5bcbae039906882ae3725400b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ5VVJTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBZQQmrdbVMum0xmHhSW4098BiL2cxRZzIAjjfJ48%2F6oAiEAssaGUq%2BSGKbe9j%2F3Niqk5wcgWq85s9fO2cY%2BSgJg%2Bp0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIQ5DUi3g5SXY46EuircA9NjFEuEE1V%2FtPbN9SPHfXxwCrB0Ec1elLMR3e7GkyaPRWbzjPIneqvqm%2BNWP%2BrlZEvJ9LJVC1uzRrujWOpA8J5WQAj9fz4%2Fl0mqbrfsW65y0DLRKE9lAcc3SNKk2nVY%2BjUIgD1MnCOq2O5NNxncWQbYzDb5Zr4zJNpjszfxnodJIIhLVqRe58sB3l9CCQk6ZO902sl1DDjHI7nwfpX39lC6yr%2By%2Bg2PLunxlmhMo3VOUETyw0DoViI8NiGJMpNSx3Ob0RYV%2FzBSZd7rtyHe7DQM15KwKlED87nPp98LTYT8aMkfZDSnwnniNAF2Bx%2BWJ8nkQ5UH2auCv6HQfnBck%2FnVWIhQg5foJQrCWzh%2FGTeJgAmy4wrlQP6qDo04elohvHQn7JXZBmq7zaIqH7PwJRrAXcXh1sqJ%2FNlea%2BtS9QHJxKiiTsh3MExsyP%2FtmIzC%2B4gAzVComtnxoIJpQCjbjD%2F6Y8EWfuLMI8ltewpJl57XMVbQcm4v539pb7hwCwBW8GPSvhPHczaJGlQelpNcqe2NxU%2Bi%2BZ9O%2Fm1rALuzrbQKD9QhrLBJDWaB20Ua7vBbgViv2X4jZJRdLC3jaYC4mUh7PgIUwlhWKJbehWDgJVqBkev82u6U8MuzyE3zMK7Vv8kGOqUBkWQt59amwC%2ByWWTlZM6jFAtOOh2tfdFp3FrT%2FkQEd8hE3PLJOKbj%2B5OyoWb2JFgB9%2BFO6%2BAf4fVYposXgLP8QTMZJ61CV8YGaV5mCL2x2xxNNNc14dl33WQq%2FencoUerrHRJ94jmI1L4X%2BVJpQr5CB9xieUDDnByxKtnKktlVQgD2DuKP6jrwPRnC2ENaS01bSYDNrTqR5aztIyCOb0cDbATrvoz&X-Amz-Signature=66e650a54dfd13297ec0dc4c2d5805fba8d8815e815a471080e73bac8e74f3e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

