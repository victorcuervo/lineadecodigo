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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCVV7RZL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGS74ypoCOJJOZ4ZgFjiVQFZ%2FD4fFWVT1A6ALlwUWEZgAiEAoIRBWAKai6Qcut8OyDPUirsXt%2BFYoq0PppdyYJZgVWYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBgdWuBgtiKxNhOWyyrcAyQKiIWhzSAl%2FNcqPj6PrhYsteoiqaj1rwbAhpcLqFOrCZu%2BLLCd7quM6BpjfiFiHGyiWhxkUeXM8veCWtHEup5VbuEkh3ysYqHHVyncAF4m%2FSC5dHlPfmNGwgd7SlZHdsTillW9lngQ6k1PRZGlcsM3rO8yvTArLAGWjocL6fh%2B3%2F8lyN1ujueedU2F1m9PBurwFYfKdHN6lOCAy0idbtA0LIf5HrJG3daPrwRwnyUmBNoLfPKacd0XJma4ZLM9W6tbhEchDxn49eHxfM9uy6eJLedGXNNE%2FCXdRLSVcw%2FuW4kuXBbtzWOZXBDTwE%2BjmCIEKNU%2Fa89Qqe7Kwd4vKX4wlEq%2BbVx37IDiys%2FFFsZjIcdiRlTcj2u0yoOASZGkRsudkbBbFJTs8u0Y%2FInERNF3joCMlaImD5%2BelRJUdksMMXI8MT42rFHDXfX5Q%2FGfUIQkMoA8hkNZI9kpg3dcMlY%2BxREOoAI90nd509t%2BvaVdvu3y2F%2FfpTuT%2FXyJhgyuE32veAyTDU2ofKasPX1cgyjKK8mAIZIo99WYGV7KF22S0GE5SWhDauEq9d2G9OitwOsBBkeM1JBT7hAW4p0Wx%2BXlGr4QLUrZG1L45tSlFEbqRO57RsNwTq%2Bv2fYfML%2FnxMkGOqUBHxyJiLEmpqoly2l0NelmibywY0ftRheYqhthvvSwBwiEuzmaty8bL5Zg41A75AZoS6ZGLui%2FNN1GyvJ7LzSTTExi%2FWDLC%2Fq6AOGWGput%2FerOOX81tJQuIAbqPLGOBoL8UYN42xKAdduQXNX1Fn7ijiDBVxvlu4RqOXFSpJuOIIgGjJyA4cOgaYWLfef2jP02LY%2BP%2FKDY97JQI6r9Y4DYEATLQhRS&X-Amz-Signature=fa8c8e5e20ebf611938784274edbeee80ab161ebcc2df3c98de619455fcbb08d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WQLYRT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHUtAkkarBVMwOHcBlACPT3XJsg5cCvWXQPDTSzkW1X%2BAiBtG1hYm487TERA9wnymnc5yF5UWliQQJGin%2FAxQr3woSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMA0egDneM62iOuZkvKtwD1tfUS9Ee3YipdDYpUgqJEx3a2CNwLa163K8GveAlvX1tCL%2FFDYSLG3ICPA1OZzm3hg9Ol0Ovhe5uylOS8p8Y2mWUZjg%2FY%2FB4RgsEEPVAmhGMV1IaAHW6GULq0INwibPfdXOIQFG24MpOwu1oaxu22N6rLEQbT3pxWRlb8g%2B3On8bgyjUlzok361H%2BacQQRPPocEpbxixvcYwEMLypwnQaeFYmZ994yWnnkIF2Z4LD573kj3OhNyu5rIM6E4q2jxH%2FAuUZCNtfbqjfk9Hzh%2B8cYYOw8vCRuAPehpwYG7N1z6R59lQ92y85gpZ%2Bipn5wscqTm9R8CKrlr%2FHdzSDIoLc1AHqVsw%2BkdS%2FeC8UcnCkopZRacTruRyxtHnOb7eHDUbMuCPDDcX3jC41dgZBJPFcdAbd9AtszDF%2FcuRmehImlE8dqBfEw9Zrer4ZSqqE8KlI22U0Gg66baU5GWnOTeKFq1C5qR%2FsXYM4G50A9MEZ%2B98Hb1tgzdI3uYTPlWztbTP4k9kYEK4V0et60Sl0dtWeMxZb4hvyiHsENrFbP%2Fzr4UDcufG%2FXq%2Fguih5pCF4fUv1AQ%2F4vwJl%2F9hWxyg0cMLON38L7tcBXjiN7DLzfL%2F0j2puTVlA24OpoLS%2FiQwtefEyQY6pgHJAjnyedy3OgQdYnTXtiJkNbQ1J3uguxQ2cIjjLzTL23aODt7MnElBdSD4MF3t4OgRQNMeZAbvav5B9acWDSiJfnjbhuJAavyDq%2Bandw5RoNhOvGmxQCcja9I1sfnCZb1eEF25x7tObNmRlsaAPzLx9ZmAEYS50Pcy4MiKQ92KBQQGQFN7oVfZIEq6GbWyBVEQr2kBuCh3GvGSzXzDdueumQ5scKnC&X-Amz-Signature=6f73295c6b8bafcd9b09b644cf413670a5454f09e484be07da00cef5723f263e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

