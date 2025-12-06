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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNWLEVF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPYUplCJcK%2FWu8%2FuCnk4aFXVDJoEkuFX1TF%2FQBtKsY4QIhAPkWJJlJfDaZ2nnvD4oJZtzejJnjtcEx2iWn7IQdBot6Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzAWG7K1Rvd0zH2dQcq3APZ9QAaM%2F6JZ2bC5vlMc%2BoCRo4wSf3V63dw0%2F4vvIBji0lumQSUjfKGvwLiuiQoQzeuwDrcK93ptmwVu7YKBHXyeX0QEsISoRsD6%2FpjW5E3OvkMQUVro9i%2Bwku71jrM7bUWXEFVsQIebd8XF%2BrMl3i0H%2F0MXp1VN5FWDm3fjblyTd8KsbiaYOZ8DyHSlKxLeYwq6EYR1YwygnC4P5CGgoi8hdKM%2FB184AZi33CMgDpJFSwnJmhqgCN99uthAfDzmP7Gr6yKL0ekeKviE6aNifFar0595lJHugnft653ULqWFg98KaAj8ul5NC789%2FwkvDLRxX7YFAbE3wLuTQAiWSGt8ghDeXOc2gvWonSTGK48iA2XuRr2%2Fddz6zgAr1NkMhFkjZh%2F2Kt7Lz5KZeUUmf1t%2BUbvdrhI6XwGS8NJOjeLFvy%2FDUA0s8nnFXRTct9gnj7gaV8c%2FqiTDyD2EWGpzWv2kpBB6sNwcB0FMmL8WZU5qlw%2B5SuM%2FAcbD09lefUO4lP92bWeDdd00qFo5X6ed719plikjD2QdEKFkNQwHIzFo7hi9NIUyBSRzyugnno0JSUbpe0r2o7TpI%2Bk22U0Jun0Rt6NokC63U0I8WPH11VgzTN2gFBboyZzpisVQzDT3s7JBjqkAYlXxaAGlEZ3YQun9c5f2D2yBST2FKIHVyCO%2F9OLtxhlwWCp%2BhVrsfVjAIECjNKrdwng4myzo7Gn2tv2%2FbP%2BDnF36boogpys2ZyZroVxz8%2BNRB0kcfLAu%2FgGCPeZHjV36UP5aPplRz8Wd8dhIWC1pF9ZZrJMxouiF4k4uOo0Ji1BzYJvxeEvGKRsHfTwHLeKVQxbk4sM8hHCsqqMvv2%2FAiJGU0cD&X-Amz-Signature=6247680093ed8a830c1fb4eeed4b77f9772733acc441c244844100bdf5f6851a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRPLOQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwi%2BXpjyLBKmeWTo9Wz5X1hBSGvQ8PGtNtB8GCMwqIQAiEAkxm4KvA6V8rJMr%2FirCQyQh9yB5%2Blxx6njRSSmtVKul0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDD%2Bh2MPEC6rSHwYlWircA%2BCfigqzPul40gor5s3MzLWQ6J3ULrHWxg%2B6iGkHc84nuiLuEC5vnI7Jb4nNptvYGOmu6EupynWxImL21ZlShHQ8lKo4XNTw7GL%2BGeBTILLDMc58Ykt4kN1H9GDtSBmt8kkNlpk6ahgsGIbRzfJLpSdmZ3CV8av9wFm0x69xedmXrULVv6lcA0BOsnGSonL%2F5%2FTUXpCNRCUy2mnj3ew41Lyi%2BEJTaLqYmt3AkvzkFFYaT5pSvrudz7xvCKf2UCTa7v6ivSz5juWxzvhq7cQtMvGnPP9usIlSAhLJN0neZ29QSP2IBSeHQmZMVSXHOCtNojwdDL5PuRL%2BsfYIB%2BEXrre%2B9VQItmSxQS%2B7dgITdA6qHBBHQkUPfIm19Y4nc04AOPZrNAI8%2FXSJVr9%2BM7UXCngTyjUG9%2Fxyyeup2QCWvFqmBYkqfqO%2F2GEUgQZjlafpRko3q18DRK4Yk4L9jmMKDYeQ%2Fcni6b%2Bmv1mO%2Bn0K%2FNHz%2Fkn3TF7c3PdXvrugZm3aKV2tTcKT%2Fey8QSN76ywQDMTg4Hw6dhhifWAl7f8q%2FkgrxcwrmZPvaR7%2FR7Hz6m%2FCk%2By6%2FooFOT42Jc83Uh2rPEZI3Pti7llLSiJucGdkzqhmYkNS2B7t%2B%2B7shUVVMKnezskGOqUBv7jofMlZ9G4eefgMrBjzZXcT2xMEoyzqqWbMnAMrSlA5XSrPBVUErtsBDiwL1LTrEqEO3vDmGDKkb%2B6JAuWSWDFaNKL5GISgz8%2BCImjPLCToS6HqXCkL9FRGrLCvD07UxZFUxnuxRIOJpmaXduH6B4vkXDvLt7VPtsbMwyYcKdA9dgdNn6oAV9KgkLKvAe3FLL0OdES8jNrQxfWOwpecBdAdmTJa&X-Amz-Signature=09354ad706134061c221418306d64cb02da977c70cfc26e293580b2ead8f9a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

