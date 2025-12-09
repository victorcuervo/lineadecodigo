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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHMNXZ7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeZtmYBBOwxexjj2jlSosxm0c87aVI84i31WejEqYTNwIgSJEYSKkFI%2FXyIChdQ0t8lHJ%2BdZsgde0MLKman6%2BcH7MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUJ4G76YJNP9heRJircAzxHA5haq0GbqPmWceAQxb9tdcU6J2bXoyvhGt3jCZml%2F%2BpnD2e85LX%2FMrP29OwpJhBW2NYDuZS7OEsOdv1eAcJRaiLsdpmxgDjmXzOArRjDmiUBpk%2FTwxVNfaYNhvYm5Wh0ll6KgAONzumF8kukiHnIKl8D2xXGl38ZluatPgfsk20xozZXXkaJGGKR0l5FtacG37XZQCSEawlpMTZ%2BFmZQ5GgMVCeORHzthi%2FbqA25w4Neh4pUbMrXYHdtC%2BEIDqyY1yn1oaYYeqezm5lTToKhVDVaG2cNBUPob76OTSaxnB6I3JIjDDcOB6%2B8WT3feHqQ%2B9B1GeJKVFEOWGLXtq3RkrgpMJTShm3DGhxuaXlyRm1iDLXeTOv8mQSZBsxwfCn%2BJ6PEPMWPn%2F1sn8OARjREMkW5rRQ%2FscbIfuzThXGPFX6n0iHj2AjJ4HfQNjVbp8z7GIYe65h2xsQV0WOHHoXyhpggEHUiFr7I4BSSmYq2jT8F5SGzz33e87%2FAkCo3sttJov%2BGT4Q%2FBqHrkSn%2BBXrHItT%2Bv1toBkL%2Fl5%2BYfDRpMwuGY7NNm1sbfpmqZtfOLf0bcjrajcspHqUYkBO1PQtKqdTmMLXpFLVXHbT8fENb1f4EGCibP8XkPPjHMMLl3skGOqUBHP75OZLjK26ja4T3OrfxeeWTVpFB9Y%2FdZ%2BRTaNQTFAHVuLcqHTVrOR2Cn%2FiDM9yz48KSiabIJKk%2BqkNAIaD0nNzeUXyLrreyALsw5VmrxiI9p1H8NaW5xNT3nAIWfxzDujVL4LDbCI6oFUAytp0W7SE0pW6P3zTJ%2FmGitQ3vynskMsEvC6xmygyLGymKQJFRho0NCNln29JPS1f5Otr3oSsmUmi3&X-Amz-Signature=6804927c710f19f032f4d71b5f47fd4336e4d988804cad5ece34d5932cf96833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRXJXQLM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO0sJ%2FGRAvN1uSyPoPYph0k318V6wFoE8Z%2BtfSB2iloQIhALkpoykdzuNyQRal7LqV51mzVjMydVHTYKKDTU%2FhIjUGKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPlnCwP%2B1J1evOulAq3AP8gD%2Bkq6juhOWqBkSQ5gJ5yCjwRQo28LzD6FaJE3qrmRpCyktM%2B9VXLDi27WWlS6EDTN6IaNgeNNObEpcCBtgdSe5VJuht3PCUG8FLvQ4siXzcbQRRctA2TItdMWMnSG9qSPKJqAO7jG2NnRmzb2NYxh%2BCL0yX1a5ONin6L7SL38qHW6L91eEmvyvXMI9Q148SX87PufAaolh3lMvbeUMsXo1LrK8QTRS7C5gPpkSDZkhaqYbgtJmhGd4FD117JkwlKYAMumjamHM0H27liMUcDrXFHk4ci4flcBATTjZzP%2BLQ7IYawpAncivm8%2FCj01pqLonKJCEnFNYDPsNUWs1NvPdc%2FTPtI%2FSWaS84FTuDLqjtrVG3x9dATlZn39RA1lrttG0hDM9V1S6qaLsgLYtPKvPlWqtp%2FfW6IQVk11X9y1kkIVARi%2BmbCe4%2Fb7OAIxPtZR8gseB18lJRBzvO8JowdvAPs2%2Fh2EM9FdAnDiYl2o2OOzszaaMlT9LRFx0JPWzb3jKSXwMI9eB5JgQzsBpr%2BU%2BcGubaYLFBn4Tz8JSAX5WCUzHz6512SGYkVZK%2BwqBe6aEDbjjON%2BGYr1AbwKVa0wU6xmUcROjE26F7mdnS3JxpWmPaSRltgrhcLzCX5d7JBjqkAe2x9C%2FTPKO3lmXdh%2B5KHzJ3vpcMs34FQZEM1x3Fpgi7LAGW8GdC5tD4ZD3yEy%2FWPx%2B20dJD0m9J8kTLtQC%2FRCP44xMUaMSv9C0GTAilZMkKfbgzrfesPiuJBiSp9hkl88LtyXW5Ba920%2BO8JPXy6Sm33EHAdrP5n0Lf8OyHpQg7SyFI8%2B0kY9ozM8DZOai1TFWGPX%2F5g35giEVpHtDa64K2czuf&X-Amz-Signature=de82edaf79f79dd1fab1164aca75943b9548d0675d14b4356763799527f8621f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

