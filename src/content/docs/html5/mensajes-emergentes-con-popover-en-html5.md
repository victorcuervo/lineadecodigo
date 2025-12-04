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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVS3AZO4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmP0wRNTzsK25nrvPzcNZF%2BG5%2B79bt4BCb78v19xZnrgIgCQt31PP6wIRCxAAAD8tKaFPmI986HtMT8%2BO3XlKRC5wq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAlmsvomCUZLseLHVCrcA19waQw%2FRbJXdIc9%2Bcx0EluBVkG4T6MlvlquI%2Fr9sFCSXhfV%2FGjXlOZ09L5NDVN%2F4pvlmX4SP84LCSJTfmiSv31ZEqCNsm%2FobHuOBAS20V%2F%2BLohA6X7vxbN2rmXjQycgxRWrLYbLu6Ru2Mf8qYoaVlDT90AuhyAhYi7ufCxntA7D66QbAjH9q5b0UOajiM4yXvzITKSo5VPptFLGp2z%2FFXWdSs5q0BMTxgVuVYQ9tq8im1CQu0lx1OGuKcJPOw7HHUNe7z4RUKCCT1QuKgfzNzkFXQgrPzBTQ9m1WVsiydTibgtl78vfMcL0v%2BMYoYQB%2Be5lKfu%2BXUoym6E77XemUvlsGRIg8tw%2Btgua2iABqm%2BHNyCo8Fc0K7KN8wdlQJWhs5ej7Xm%2FoAfUZ77S%2Fn%2BwEvU20HD1os43hkj21HONNJ%2BBSIsba4QG04C1GUvCdkG7d7%2BbGEeMUw8CYXYk1RevtErn8oG0kKNvFnsuE%2BR4MbqDV73czBJwi4IDxLdsfw9Fcr8UwGrZYh5gQGbzENpPZW%2BqfM4O9e6XsjeWmBaFIBkN4N8kfRwmfKKkDijRSiJuFXuTKabDmUlLpeedYxdSBBIreo%2Fpl1yCBssN8sKi%2B%2F6C8N21VHbh8y74rqG4MPeLyMkGOqUBAJZWb%2FO7FAM2W%2Fj9rlzxSsMd5ohV3HCCz3de35cIe7i58tQpBCYgCK1GcuVUZELIbf012WOB%2Bvs5djX9x%2Bz9SyHmg2952b046sgsB0Q2vWIpn4nX94PJwbiOenrLsnA26P77c05UYubleiqPKg6ozWSEGqtT3GOi5ri%2Fqm4uDAAlk3yYWl6UThOCngTD9V6P8qX5nsD62hJG7uhsfOMq0OkRUyFL&X-Amz-Signature=423d6233c2438e041d7b9657a61b3f5bc20fa74708772daee494eb7a9967b8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4O46QO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIklto2XlGtAq%2FWOs1NVgqlceA%2FKetaxhcFHpjk%2FbvgQIhAOedopfywhLh4hvd2u31PSFoTRGEsqZTQqSPnubWZGdUKv8DCE8QABoMNjM3NDIzMTgzODA1IgxBEZFzY0jWY3OPfH8q3AN0bbwNwuAPfh8OxmUaMHaE8%2BZ8oW%2BoV1csrVarnL85DCffRu5UG7zoRq46tIlGrPtmde8m7gMoYxTNQlqk%2B%2BkecB9uPh5bAKDsesuGdTg8SAZVmLxvbMx83VYUgBcKeX%2Fgbt0Hrcxq1aiP5X3Esic2bGXZ4TI6otciafBr%2FBwKqzduael49cBv7oZXNirtAiSAGun0zSqUjIDLH%2BdHb%2Bsm05MlEGBSpmE%2B7kklSsL6M1RFqHLxIYo8RK6lBu4jmrXXIQhMcUemm25vzIMacwY0sD%2FirmyVMG5QpjPQyUkdJXvsAG9VTxsLMD9jZb%2FijM48TR7jgv6MIE2sEU9FNPxDiPAJABE3N3VdMDSDDLOJ3XMh8bFiVsOhTdegEBjrD%2FDdxDKu3EFNp6citWrXgXLEvTohfxwibWGj9URpBOGREzicdAAyQgRvwjHuafZW%2F%2FCu9ALAxcJk0WiH2HrgTpx4TxR0gNOS2biZMpeYW79Jxm%2BIslrUDP5DPAr5Vyg6%2FQnifxQNGUnKlzDMKc%2BjbIyCsYIx20p%2FpiKeTGdFqMCP3g%2BQIVqMoUroiCrI9pu2lNNnSIYxUzCuO6jYFA72%2Bvg28cJgZYUbpUoOxv%2BWvTJHM4Pt38TUbmGcm8DFazCLjMjJBjqkAXc8ZmBsoYDCX1Xyy%2BBKWck2sEiz4GAHpMah0io5ngALQPAEitVTMUgGCjlsxBW0TwbN0OXaId9yEHz92qaNWyML%2FZw1X7GG5D3huAEAdsbc6J6HNQWq2mk1vVWrt%2BHH0UiSg%2FiAcIEqmQfZFDp%2BjkWEJCBjT5s0PeSm1%2BFJV9ODdzo%2FGZ5%2BFbk1GW1TU%2B0IZpu%2BZOXREV%2BOYqF%2B5q5OOz%2B%2FKMZJ&X-Amz-Signature=6baad35008e9b5ae28b0030f78e55ae0d7d9ce2cb7f7d8f5d9ade3d20cd4e838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

