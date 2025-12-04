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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4JRTMD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW%2FaFCTc2VbrfoTAVjZ35vY6pacSqg2IYaUuf2%2Fgg4lAIhAO%2BCLI9NEGGDgmZYp2SVA9atLQXAXF8Kp%2BUT6kWD8mwKKv8DCE8QABoMNjM3NDIzMTgzODA1IgzRyEt0iPnzKpIqsLAq3AP%2BeT4tBibysenQFpdp2N5LVYQhixk%2BRfidSrv%2Bh3Xh7%2FKqocOVD8SgXm4TZx%2FllA5EatJhHnUhyOAYB7wQYhjcQjBLsuybrx8GrdLIQvpSAAj2ttMmh2x3R0stuX2cwprUSwGARlDsYVf%2B6z%2FVz%2FjPO4oacew7BaaVB6ui0yEW8noXbrdql2ZLl9c8SAnj9UWdeqczTz4VxzXRLYXAONjSz0CGLXHiwbYCKz0GeLud%2BN8VWhjo9O6YMW%2Fzx39jtYFdhqQ3eLvahtSDVIWCM8%2Ft%2FnuTwYnchzDs%2B03GHcflG%2Bwwu4EPx9b%2BT4h7LAgUWIQyx1%2Ft3MH4OY4dpn6u%2BSsdC1WkWw29ouuDZ84iO6So1k%2FeoVmDgwQlrcb5afw61PBAAdemppKvLbYcsTQqRz2wq4fVuyOCZJU9o%2Fcm9MBRAUsE123fZ8r7xk3kuhUSxsjAvAmuN7d8wVGEgFvGRTDZ80qy%2BXOVkVaOY2oQ%2FTsx5mY4BpkJ7n%2FJ2Oa57QnecLpYp4Znp4dpH%2B59Qivl4wiMDFv%2FzttuSU3vMu1DYhxdSqm%2B%2Fx0iWRCsHNfKLPnQA7mcejldOkJSvq2CBKsrSQm%2FZLKbibv%2BXLzrdQWNvZYl6JSigy1O0fHL5tmRFTCejMjJBjqkAZpeJ8l%2BNyH78wHEhZqbvhn7oRiBUEfh8AdevoL7zLBAC9CFwDN3TbOXPetwNXOdKufUwrSO8fMdmx4rpcVAbTeE7u7kKYR5YzRbWDSMY2O1Dfz0Hs6FSpEY9cZpNaUtVCyGQeH%2F%2BFq6dKPKnYd5%2FRyTYvCG4QQmwGQW%2BJm%2FIyurvpHSFsTBdrWmJwfdC7b5SXY%2BYk1Apm3T4ZjLKy0l8IJTrGxY&X-Amz-Signature=b25bf7d7edb55fff9282292898c8ca031c50e0a291cc617e389e2826ec5b9f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEEQ7EBZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAz5DzGEQ%2FjK2esxlao0aAx686UU0QnJ1LQZa36GcSaqAiEAwAYk44%2Bz19QLPCdE46W23b5Ms8c6TMMKxVuZ1YOJK40q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOgyQlbOVh2roQVKPircAxnmvrg9vElahivh7UPsZOEEwFD3hyyPsxQaPNRnREr03uSy%2FPW47VLv3nNPlcxCGj5SkfG1K4xvBjV%2FtEWPmePp0gOG8oGumsE2P4LxfCW8S9Mu8Z13O%2FflbU6ljeoF%2Bi0%2FfQCW3naJ4PiU07MTu9tvVPWMSUmIK%2B2XjBPHPWAmmXGHoOPla%2BwiKRfHQBJRpz9lsz4lwquFZvzGPct6h9CvdIVKl%2FSRNKGP4SEHhh9M%2Fq6hiaSaboaqGLazmYkwj6Bay4XbL7pS5KefVKp4E6KR%2BT%2FKqJY2zlik%2BXeJHDACi4kFpoGLqm00qpJiTnODBNZYRlOe4tQYrarmqpBFArrm4p6ZStRRE8I%2Fm85KmaUj3F%2FJBU%2BngGPUjuUMIh9IKJ69bqZIV14ZN9Z%2BGKtnz%2BF6QOlYqCdLBMqAlTNyGRuM5hw%2F89Mm9FdzPdJDLE3C67pXUYe9tyuXmVPx%2FjoVwj3ch7NoK3WaNuMUubQjuDDiiWfsq27CnI8Vkfn8LS01rm1bbQhLRYC95khFiuWR4I5DN%2Bf58PJ7%2FzQSZlxZ26eMJn2227noZ18KqqaZIU0Eq7LIJwoUTws5KtuONTBO7rlfzw0n3Jfe4BmcdeR9ztQ3ulhdatJibcSlA3bzMNWMyMkGOqUBd%2BzyO5NC%2BLQOSgzRmnKGYkipi6wLQZvXaG0yhEdxZ6krR9MyYExnGDAOCF8b5k4iFft0ej5Vfv%2BPMFZCqylzJK7EjlNNApgqToPeJ%2BteUDJx4RAS%2BTwYu06umJvrulOXXoUVWp41eHtojzN6LoKe%2FQ70pDltc4peo0istc5YIJOn3kTvHHO7cgsO3T50Hlv0Ciyah6ZJPmgJEMg%2BOstjQ%2B%2FesxNM&X-Amz-Signature=3d4ddf9de21b4d8416ed493065e29e272d7938afb811f9f3ed63b453c5bae000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

