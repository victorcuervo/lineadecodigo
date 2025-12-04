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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J3USRH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFlj124WRjBktyXXSV%2FmqUSEbjpVdEF5mu0UpYVuQi5RAiEA2V0wUScMCS%2F77AHzXV9gLiAl9uMme9LLpvA2spKgAuMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDE%2FlhzsOsqeFgj%2BmXCrcA5t4YWC65aBPjd40S9sCzXrpl48OU%2F4%2BciLhRaypfCBMFZrNSQJj8tzOu%2F7W1xKGdWNl%2FGQVq7FVcHdpenzLeYR48BeqiJLs2EpqhsfPEIPU3054rMNvf1jkFXIWK3EUoivaqtc%2B%2Fo63Qq%2BQnRS56FjQitHQoNs7APk0IdNqSeG1hKJPLIN2znJ5q6Xu9X%2FzdN6c6lGdnlRe04C4Vf3c3SvsorAyy2cezKSs6o4v7wHgu4DKNKMjPV1VLLrihKpz1CNEOjKidHap425p1%2Foh8TPRSTKDCfTrM2eoFCzkZ6je%2Bj7fjxy0VsnzAZs1yAbetFR0fuN1vnmDlQClHO%2F3w5i7mxfzq%2FpBX%2F09zU3VV%2BrFj0KKEv4laiyDpLkRanedDfAz1MFrQ1NzwVZDlCoj7bvgosZCu%2B6%2FY2uvSv891ohxxNJGKE0bUcuFZFHNVNYiKcsUcUYeL0O%2FNyct1F87TOiPj5Jmj90qVJvXSXeqQ3tLWimBr1m0LZFAxP%2BfsWUFWauN6Oks%2FdMgiwUbHmbifvGBsC3fNL8VgWiBKWWxCUe%2BkBGg2BH%2BXIpo4GRHJi57rO5AGaskyFh8GiAU7n5A%2BmWABsTA3GeD57EbR0OjOYhhvY7DrlyE%2BTBlIdFQMJirxckGOqUBqvd8WMSzyPwx94Fj2tRFm7RBVUqhwEubanKs9enPiXryGrjilZoSitBtOtS5V6cItU4o1q2RXrOBMc%2BaY%2BryUMUqaKQdvFP1Pbibcs6mVdXchircFSnGLo2tvkVSf1NvDeBjcLF%2BODeqbo0uZmqt5hglUtVu1m68%2BTNqjJofYy0OBSmJy8JibV2Jr8nDmyW1NITtFcMSMVWGFW8ubtgD1WsdnRCS&X-Amz-Signature=0480049928106a896bd9f7be1e4753f83fe5bcdeb35ec4990b5a60ea0021a41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5O6VOF5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBDLvztnXSj6lsXmjkSGfqYGb8x3kZo0FkOnL0XYWL1xAiB992YbWOPHi3VYNshdNXX7lGdxXK4gAt9D1yaHPbxX6ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMbFXFeiFojws8BSQsKtwDLU6r57oZ0EVWj8P18HRsAEYUHEuFhJDRUTTvpIGcJpBHwvFlWYEnWPuQOfy3hnj1596C28wjFXQKXld%2FafAq10Taa7QZ8B0yQRugYZDKX5wJwyg%2B1dNoTv2KwRKjGYkkUMCKC58xvYNrTDAy90B0bYjPY5fVS6sEB01oxaBpTzQjLb2MjLso%2B4vU%2Finkvw2FTUfGRPIrYpI9ODpZKZEEPhhd4gEWh0sx7Q2BSPZ3GEcYW%2FAbk5YLV8sOPjWJxybxG6PZReK4BRH1L1uV05tgOQjysuuAvA%2B9ZNC0%2FS2Aj8N75clWFXbu%2BcyR44EA03RFBsyEHLeYfA1uovD9nXzisdOkVShYjCcipip9fBA%2Fsflw3fafP0NdO6bkiihIx87eu6guHpgm5MkIAE2p4w0ptInP20Av1FUKtstXSp1a0RtgHMnCkZtoiC0O7ora2bdGQmtL9hQ4SM9wjaYcDh18MKQh6Ynunx1FNZacL2BAlXv1mm4j%2F0T3jPFbG%2FiEysf%2B6gs32DNt8A4BuULZyapistH6CaOBLukLdeOcudEGbvbTRIv%2BcPKMsCB4oC5Y%2BBx0OxhQV%2FGqfqFDhGEI8Fiu2GrZzwrgT3HpodOgMM3HKt0dzgIzjm1iv18%2BBJ4w%2BKvFyQY6pgFlsTfXm99me3BizL6gBw2v%2FMianQWzSt0PQXovmi%2F3K956MUcGecbfpQK1qgss7s7TZ9gbvgGExgq7qSW9q%2B8Duqy5M50fgjf7ttmFoOykcp%2F49XU2F2gsmkJVioaICVTHMu8kPCRLGCAkgt5wgExIIkomsFl6Uer56%2Bz3XB38VCFNPwYcLg18y4sb%2F%2Bay15w5Q5bYrDvpB0SWiuhkqz7l3ce38mVO&X-Amz-Signature=b278af1fd5758eab62e089834024c7129c296d1f451c3e86e0be7c9239d167ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

