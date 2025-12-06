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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GXWDYZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FUwg4o0O8dXNzAUahijm%2Feq1PcgsMtcJxO%2B0skHnDPAiEAi6JitWkOsfAVKUu7fizYtQT8ZS2PxWBg1MmqBpVzTKMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGco9jJVH0lt3ysulyrcAxMaTeH3fPAbn3LbUKcJPMiu%2FeNRnZP5B6MFsYLSmi5e8wlCHIjPZJONztUXtAyAuE9o9KBj5gpyvSnUSzb1IrNAhIf%2BnXjnH4ha9Hekdx4UiFmdIPLhepepmGl%2BJ0Aab4UiuNYnOL98D7d2Nleldac1qWhEKtJnh0il7av4ahYsWHVmQeda%2BrkunajnBXCwThtglNBVjk170dsKtkEmbS8ifEHge3ngrF9%2BW2zwP5iIK2G0uVbVoXxtyNe010u8wFnyy2%2B1h%2FPo4KEbUh3HC2oFindcfnnssq7bGGFpsyaulJpGczmTIFhh8%2F%2F58bB%2FvBVwSjCfF7P00BAxdtzN2k1EfyoLQJjAPFMEz5h0MlTOXiIU0WHHl6QeNj0fW78326NiZfVHlNMqakQvjqGcYfGDLyAPZSeefBqKsoroRRWlT3ZCpR%2FOenVSuWT5oi%2Fya14Ls57%2BezmbYBf%2F6ARH6C81YcV3SMUyQWLp9cFO1702Qw2LGWxDMCzWCNKZ6VlaQtX%2B3m6tH8R%2Bf6%2F%2BToEGI7e%2FJlIpiOdXB%2Bxnc%2FFbzNWQUJXqBEX%2Ft%2Bk%2BffiUH8KKvtWYg6r5gHO2fsy4MEqsr%2F5BO2qdEhoIdSwE%2FrtqkwHlVcSu6vUDsydxNoVwMKGm0MkGOqUBEmGRqVaQsd7mJJ%2F3unCvPTk6MqoBeSiJVh%2BTL%2F811EwzjWYb3zHfJUoxxynQjvrw43S7VGel%2BzcGeMPg39MUU%2BuKupVDaywMYVPS0Qpjk5EoUEHFbSyGLsIVXok3xIMNH9VlcFYuoyc6c9%2FrKOto20rIvptAJD7Zat8lWVWs4NBr5BKSG%2B26sj9QYuV3SUelhCCoS%2FbZFZS%2FFCSuNa%2FxAxxSjIJl&X-Amz-Signature=890421601edcf45c772f43c2f8489e588240d93b08eaf2cfd9ed72b57dfb17f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCWUDSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuOnVfBIvgwF%2FDNlPBBw6WcZ5gMod6qhxtlDNII9RTBAiEAwmvWgYEg6RHJWpC57nNI3TkscXuFW2SAbKf0FuZ%2FVDAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEfEgA1AMNMzvDRA1CrcA2HR0zXSOCQ3SN1apLB9xHjNvG1Wewp%2BtTUqtEGcpocIOlHu477N3xSkRn1pipllTkSPlqnc6wDyQFPgjg9sW%2F97TKx94R6k%2Bq%2BYwOF23XAD5LgNQnel7axhZ4a%2BLL%2BPyvZ7XvvgqwBxiqwSapifIV1PGKn8Mes%2Bqv9gDF1dR1d1v%2BUwPI79u6MGYxoBEv4PUYY76x7da%2FLPqoeure4%2F5OhBjVncA9zt%2FWEOz4%2BUYNUQkgsG2cbKhk4vEz7u7xUJcgFcVIhfUozjg0TJylB7jdJ%2FwSqkUJzPCMrCxwcrJAp07n223EdS7cKvkLDf9dGWQ2zk4i0wr3SqWJzbWBVtYzna50bh4pdeH7Wk3jTQ6FH18hGmr6E%2Fkt3T4LHKh4%2FSDPqJ%2BmjP0J%2FHDc6mfvZLWQ6b8nGM3VFOuvWa%2FVeK%2BAmj%2BA1B6UmVt5UoKoKIyPESoFcFUcJjUjKiAkH6wlNddjMvA33MzAThM46c53aWY7%2BWwoY1jzPJUlboxmznZGkJmmh7%2BrxapPK0E4u1liilr%2BvOMBYxWu1mJSpSj8eIvsTi3IPf2PhoMkedNTLyQ0MakDfbyApRZ0pR5x2TOxLdple1N9pz5rWcvUNoJgSSFfn7jNd1jMWOYp3vty4KMNum0MkGOqUBNh9%2BClPqq1zyAiC7ZY7BYFOsWKUobe%2FSpiTk47E6yUd5betvRSoP%2B9s%2B6PFJL4CMB8iXxt%2BRzttlx7xePF6NmAMQ%2BbZF4KlCpGoF8dXeEYDdSjlwUyoj2SU1jhauSX2LiM73c8CC%2FWcYrM1abDG2PbD1rZVGjmrcNv4PLbPwZCk6WcbXmG2EHigtbxhLA6aR3ycQ7a%2FwlRWn83C01ZgJ75ul%2Fh6R&X-Amz-Signature=d54e23103b293ee23116906601a3798ec9c31c5f0c65c9a37e19cb26c0c2aa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

