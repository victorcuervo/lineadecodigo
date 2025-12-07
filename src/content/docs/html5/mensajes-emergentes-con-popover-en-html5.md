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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444RHGYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8r6KI8DRINDxe%2BUuq%2FAPfD3X9uihy%2BFtazYFJRCn7mQIhAPDufY72SErwEPFQz%2BvOUE9pSpCAjpgwjuF0MtO4v07SKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJUFiSSXb%2Fd%2FpoYQq3AMZ2s3n%2FBSTT4c4ipN0SZHsX%2Bt8YtmWtXjsRKaSAJai0i%2F87%2FVRkPcHGk6%2FWgWTomV2%2B1kY9jc6KvzmKViFxkLsDFiUtFyu5NxsraaPW0JY%2BIgrduAwsyEyCzbZtZ%2FFiBiOjb9JpEGRKgG6mOuq46zpEG1DXaDgvsWs7g%2BOLlXwxCN6FiMVACgmud8QCyF1wyNbdeJ185QTZevDaKw9MiNT1yqoIYf2NPZqNDgX2yjsF6Dz24%2BKFLqYCUdUvGwGst1vwvlavRQ0kHCavXx2ngi2uyGKb0u8zUpfg2SO9tYSueC8DNfk53I0zvjnez%2FGCM%2BYMLB7e%2BNKKA9XgVtAyojn8lE%2BcB0yCrQPMKrluOzTbIEBjemRmTbCWqtoTyhv4B8kr3TvbaRfr%2Fok4opfeX2DtIM%2F8ze%2BeGDGC%2F68xntYC1fttmmL36Cmv16RNYO%2Fcco8QFQ9RZt3QxLjwpAlmxp%2Bu04KrXRkmIcfm1XIGwULgDs1P608HJf0nDXRkN%2FIxQoy5%2Fa3Xmr8Wtx8n9aKIg39C7d1TlE7fbnE9Qfcew7l2zwflKWDOZlR2J1f0m%2F2s%2FoNaaC6mAexKvUkjjRepE5RJb5dTP2f03%2F18VsN1Emxrk7%2FB1IwqOvpEpBfxzCWx9fJBjqkAZqmG6aKnpYBb3HC%2B%2FV%2BzDiomikt297y3P31uXSTCmYoY4G5Xw5j05YKJNBuwPOXK3Ed%2FKpOPMsZml5fqH%2BV9BuIqnhe0Jxei%2B06jA8cE%2BeCNybaJI5Ox8dZiNV6BngByXlttnaq%2BvPECLPqXajp1jVjAL8KTk94gHtYxh8HeVtTwL%2BRt0Pmqm5pTDDnlENaMVySxLmvrMa6iMY8eiH2A7unSnQs&X-Amz-Signature=c036b21f5b4cdeac06ad6017bd117615f64856014e1f5ff39930aca7771c6b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXNOEW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOwUhMzFDQQzkQGBL4LV%2BWPsqZAnPquSMgSC8j6yDgtAiEAh%2F1Ol0A%2BEYoRdvvCXeTncJuKddrVp07kzNSNlMzCptQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr6E%2F%2FwwbXR7sOHTircA4B6O6qtXeHz9PrLEjcuPVA6AsuKq1nLPjrBx6MK31hiDOirp%2F3wzuAHGpdlDZzTUWYmPq%2FeqIpZiAd7ys8JXFr%2F%2BgmkujthChLX6wX0h6YBdj5Rh2I1GPNJ6DP07yE%2FmiO6X0MzItS3nrpA%2BtpPv1qxqXETw0mF%2BMBxjx0U2xL9MYiJnuSvKGT3QlchffoN6bm7QLYGk8vCvYyGyDUVEGfLsXFkiJEYW%2FfMz9iaAKjqLYtAM5zzMHq8OpDuy4SCB4XadrfbCIvsEPVy35EKqxU3jc9%2F470YI1PNXPOgIpr5T9yxtMak56CgvPcZ2F%2Bf%2FsxiR9J7bdcmqZk81vOXmtPOwioFnTR5ff2tW1LO29q11zQoV0%2F33PmbKAMxUee3C4jSOJSXzlPHRML4h58jzyrsTNkvVJx5HF%2F9byYMCJavMfSz0ac%2F3U%2BSMNwKnuBLlPx891XMzoJE0k5728v6XOBNO53XNIq9lXlk6yxIzCTHLj6iwjXOSRnNVUNIOemipkhf7hzxi89FQ7t3jV40iOlQzoKjaG4%2Bun56LPayMmerN7MWO3M%2FwcIHNtW9IL%2BDgAxaf5fWBm8BjmK%2FfKVd8AVPqyplgG09tGJ8dUS6n8SiopQAePqgSa4BzSlRMLvH18kGOqUBG%2FPxrKJ%2BFFENDyuM3rp8pE0wgyxA8gARLfbU3djmyjNkdaWQYJmhKTyR%2B3kmTisu5bW6KulY5WUnPDMbVbBQM2woGg0QQrUbvUnQ0NbmMm6JMcNQ6dHoOdp6aE0R6OAXnawbRITomg6KP9JLbokVhqdlq8xdSaPPIMQGYjPUADufCd5iog3y%2B9XSlQDF0FkxytWqg7scxc6wOKdabOnkQbuCwkL3&X-Amz-Signature=c5196056eca183e0a07013503400212c2891b2f9d7fdab1c623fc244179980b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

