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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV75QB6X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERLDp2P7CEhdSzEywM2CUkSt9XX3FC6%2FSP68BBXsWcnAiEAz6dHH4vVJp3ed4GY20UkG4lHndyy3ouCC%2FjWs%2Bf4vKAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHjFXtTCk30cqi6eCrcA1zu3iYTXufGxvo6mh0cpU%2FF4wCo79EmFaLS0IwSBdpDHDCqivTio4R%2BtElRzkjLArOPrIMsMePFo9VPuxWrKEm81hOwljIOFmGlqM748%2BZnolr3tCcDocx6KmI2g7WaHHn7hm5TNKz63oE57cbBHdkzlZRaAVdqiutwo%2BoqeCsJIo%2B0RxnP7zDyVroKO7ymvieg8VNnWoVH9EKANZSVoEeKzynKm0D7T9u02hnMXL9SD5NB6wg98yBi%2FXWRCCX4dbl7z9pZijPtlZjMUnjN1VKnM2dr%2B6pmt1s%2BI6T3ejFH%2F%2BaFMRRr6F8IfzczCR6Nw0Cf%2FJAaebS21hweLv1omHRHO9kNe7PzecK%2FKUaJTBZzYQLQzN1P3bARufF0BpI1OcW2ccZNQcSTAwYJlu%2BLDQkHrTqmkFFwwI5Tqba6rksg4ROaECZgdnVNGixYVBdA1UM6tzDturnm%2F1t0FaG7t1sw%2FKxW%2BEH0smaSHwtEJDiUPrOIsHrUt9aetGF7NNFhhTcBnoWnWRklHYhR6EjFtgnPYtHOcTQ7p1BEPbfUrMk8Icrssj0JFlDpKfCpzBRu0tPOVx4e7xA%2FgD1HTPnjznRqaJZ6Z%2FtSrXiJt5QH1H%2BJ6ez%2BiKXrisuDFeRGMN6H38kGOqUBtJTj9Fr8yd%2BmhtGR%2FPBonbIVrGgv74%2FamXWA0ycS208C7fgYO5Gv7Hd1SRj75A08zBsuA2hFh%2Bz%2BFiO84Sqca0ShM5rvTsDaU4taHwcSnCQlhWCfLs4XWYsQyzFlKNwqH2i9aQf99eDXKnIkvync0qfSNuDhuN%2BR7DqjfZqjeu1Agdif0%2FXEzrxCG9UUQThEMPXY%2BpLCKfEPL22yXym2PdADhxVm&X-Amz-Signature=5f7ec44a6264c795ec6b9329fc3be5f39e83d05024dfb77221d1616d3bb594cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOSSPD2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDibFXrwjEA0AMthF%2B06ZhrTOV5wHAhp1bW5gC%2BIWi3rAIhAO35p85mpTKz35umqaJbCvH2FuIDTx7YiZtA7z05N%2F9wKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jjQn7PtV5hrsktMq3ANWJhdvPaVAHq39IHO01Z4Y8vJMbJ8etM6lbCoyCmbZPKpRiFQdPqzffFNB360duUDU9bcoPgiIuOVOfSbF0zY%2ByW0kis1W87LlX7pXjk2VrnRkV6G%2FQIDzNL67M5wwEQtAnjVOB90dXBUVHpCnCiIGnXAabMXzI7JPV%2BrhtgAIcjzcF62SEqMah9dadmSOEOGwqIiN5TTCPFHVa%2BWlLkOZtGuaTcgvCHXeFCWzEWb6ia%2BYUjJbK%2BUG85DlGjvl0uGpi8gyz57X4vSKhVExzhrExTKYsFuGKYQeo6lFc8yzxQWHJKx2bDtNqIEqQ55LimrSu3pGTYTmooR9m9a6Xor8akVBdksZvYcLGVpuz9ckd2TatA6p9EYztlKxeUyrYZmYKP%2F5QCsAmHhMf5x79BHsPgYA%2FExLa6NTSo%2Bk0uznbB7aTVAhQeUznmMS42mZnEkTGolcJ6hMd2FQF7lBZERM%2BCqSCNK4YCB1wCjycgn7vzuzSiaPHQmvyAuOd6tuAhPZTvmc15zuQaaHuzKdo5G2UtGmBHQwPXdPTluveGgoVGGH%2Bf6TaSrt%2Fm1wz04ig7TYAsx60gGvD%2FQbHK7lk2ZxeyXQX2VdsDRwJRVwTr6DL2%2FpXJ6dLfYXoII6tTCsiN%2FJBjqkAVmTCLB0EDXzWLDKWOP0QVyTk6qRKMEKWlUk0TWnpmeqmJVyJH95AaZB6XsHAsFbtB9TyxPDQvpZBfwrosRfneSRuQs8nBq9d9Ui08qYwOZ9LX6njm4nqvevx64xpDh2zPsdV0uiRghpkzURAD4SJk5SgenT3AbONg8C%2F1Z556JUKmoO9bTXIbIsFpcE22EqsX%2Bkma50jDYoQZ32w3Gm8qafN9%2B%2F&X-Amz-Signature=54555c50af678e7c9360eb5e412f2f6cb57a1abf4f66d35881b01d1e2332acfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

