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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DH7BFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2Brr8Pfa70zlT346fbpRy5JD7VFVH3ZKoRvmSdfkwpLAiB6WKcbzQpdlgZ4N5%2FMnFsacPFcOVfNQaTNPnSUA954YiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgS5ryUKKtU12bUZZKtwDlubs3qXUonPRmr0P4jkIbmb5K5RxiMBL%2B6vx24TPXj4doM3Nt1lG9I9HI1uTx5uqkA7Aw%2F2gVKqvvnHT9SZLKZWTVR%2B4ncIPgPH%2Fo81wDskUJz4VCf4%2BpMVZDPdiWUI2NV9O7V59KNZMI%2BBNy40X%2BdO1ZRQftjZjqwNHb9Ux4SRIJcwUsgeZlesIs%2Fwjwn%2B6oyHomJTBCMksAx%2FvabRD%2BCMlScpQBr6A%2FZ1qhXwIdLyQZ%2BZs9Yba%2FyvjliojAvZR3ViHJYldjcPAr7qniv0sx9uqVFihQjdarBS59nhOivXuTqGyWvsIQM6fMrg8b2Kdunx2kdshyv5kBtY9qOqMUcymqRNWDLKFCQj8xOVu20Srh%2BP0imY%2BfrskK7twmfRYYLGdoqKuWvASjskkJ7MPvbFTWqt8L7DMqKm%2FjlhKOl%2F0FsZsfRfvX7%2BBXs0ttl%2BrOkHYRTZkvm2DycTmmlrx1Z9qam9xKshVbMnkf5GXbP9fS7EPSX%2BznWlcWFRqQRDk1OxLD36bcADwoZWseMu1HW8NKMne2iSvk5%2BvTk%2Fp%2FV5PZls4ovlG%2FJHPvOZTC6dJJgu%2FLzHHsXrFYJmkNmpI9Lv1x5Ulch1kFKDN9ipWf3NJ1XiJiwfJHRA0vA4wk5TZyQY6pgEu840GJGVIamq%2FKkXTOIc8XtokiUroQ25V6b%2FxNmYeVfV6tRr%2BwaL92o2n9J6qeHbowxEGZRdl0ILD5p80S%2BxwLWy9jWiA7YSL29ADABHJPHiU3IZ7KSNuCX4bz9tZPf04wJu%2BmNSrefuOy62l3ROuVVgCcKju0LKwZcg3oayvi24D5d%2BwCzaD7ooByJOPn0sil4MUTx6S5YVWrkvXcDBjaH%2FlR1No&X-Amz-Signature=36f3503205200fa959fb149098b404f06a3dd5880a5d4842b588ab9e7bb1b7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVKVPEE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD50JUxrB%2Bk4QNsmted%2B%2Bmyo0qO5VNO%2FMEt%2F6neB7iQagIgYcfDlu4QfbscIWos9fpr13A6np14QjmJqw3yNkVBcZgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRStQYmazzRr3nD0SrcA4yY%2F6lXvUqonyeXY78yonOlCN%2FCAEyGkGiVnPst2rzPXsOFBTt4t3n2NutqAHa0tOBG%2FkjBDQmkkaHemDImvzggpukLeduy5UuIytAOBhKMc6jvIuHRbZbJnwhsc6Kgurj33lp5S2mJzS069tBhbX5WJYNA5f1Z2vBPzNIziV92S%2BbfrQO60CVbr70HEcukyNHk2TAttEoZk0G1fASmEjO5VaQhIynWidV4Or3yQOGYDRdTBaNWdosGwulaLprw1A6Qo17wjt1dXr6piWQbzvfxe7dN2aPwTfyhMfz1tENiHQcJbKMdaAy3vy23g7%2FTSKnCIdvl5NTozGPYwM98UDRHBJ8dnViIEqwfyWZfwH%2FeHALSvS%2BogD%2Bmt1NsHZtJWiiBy%2FQcNdX%2Bwe0j7cV9vp6pYmEiK3woVVkMxiC13AbpoDHp7TFBEVBZUA9Ty3ViY32ST6fYG01QfHmvYvGkPU1Zg4ZP5NDCOVB%2BWJ9CWZq0JpkTVXF4Qs86PczxydMZJobt2Fejd16YA2LwR3883kGOIWDWS0Ss%2FMwoG4T5abi8TKA6u6OaU%2F%2FTJe%2BX3Vv%2BPS6Nu1DcIk7LUDMu0MF5O1GaCo2rd7QVsfrZGyNT5wrg1jfim8cxvz%2F%2Fzv41MPWU2ckGOqUB%2FM4V9kktTTlB6YUO0BTlcy1xhgG40D%2BcBVQKfDKTlkFqkXJH93nOba6N1%2FmAA5MmW4%2B7oXXTJSbbhMWioglqk6c%2BFMNCCxs5ViiSCJi%2BRtizMelp9hTtAAzyq2arscR2HwH2kszQUWE8HFjdWo0clRdVqKDiFe6ev0p3oU6nEVZR7Z7KqK0myV6vTQ7baIWK%2FeK5XHSQsZn1DoNfnkI7aAmPic9N&X-Amz-Signature=1ffeefe08a88c0f72bb9c8e5a4894a4d462b3c0f8ad3a7be7c2d0114af0b1377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

