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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSK7V3N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9vs8EvhgIG2g%2BsI3uWPm7jk%2BP2Wc7yj1e1IAJ9TcqQIgHx7vl4kOSXbgPg5Qk96n%2BFomdEoEV0eBcJgiEZ2i97Yq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIXk9BiJ1DyW7EzRdCrcA%2Bq4v1AzOsN%2F5t5FuEcHhhEPVNK4H6pKqPAlyWNHNZayucPKf545%2FOqI46CMxsKuDOg1a7IS9u4wPMoBXxfGGTobVP7%2Bsbc3fLesZQROHPq0c9HjZlw2T1DvK8YfzbQ00D%2FG%2B11uLgO5dsacJITinpHHE4G9B0g0743De6ZEKtyDcgVIBH3ptN%2F7McuXuSpwi%2BieNPi3FTTBfIg1gjoiZtwVES1sfZSkDIwhyPqOqWXTFL%2FHp3N7ksGAjuztpOo%2F2LPyE2ILCItIQIKUnNS0b2FfYPULrpbNCISEa4AZT1v9jRtUl9YI8plgU13UMsS9vy06OxCkLHarPCZ8JQqDxl4MpuP8Jzzzkl29aMc55Zc1Le4av%2Fl0I5ujxHJq2qRORiTjzWHOOQe1xht7uH79%2FOb6PCEDobggStk7MfOgns3EP3FHeJzZx%2BsQ0G11w2lmO%2FZu4VPuxDVo4BcLTgAfQQTNC5RhGSSjytj1CAkIMyZd2Yx8DIUqtSpV95aIJ%2Bb7k%2FWRE%2BHF4U6Dx8sx3kjuPpQqrib5mx6yhtrPIQg5lbONOGY5zAs8ykUD65xaJh2cksgMramcsObQBZPeE%2FtS6bEHqJeWZpVkwffiV1oRUyUXkinc6b0ruOO8%2BlvrMOTny8kGOqUBiO%2BSqQ2ZuJySJi3m3HiDDajI%2B7mQws95nNdslXBLtIi0ViR2qRrt8drCNnHbSfjJntoAtG%2B38rZsOdRbQ1o1PN6m3bGHeWkvY1QzeapDO78RszcG5HMM9EbQNMuY2uQot%2FtjbFt5S4g%2FsjmKzw%2BfKRYUMBFGL2jG1cLb4K%2FtklmhxEA8Kb4W0pIFWIKhczRrJttf5c5DkLoEI7Nf54nVYtdOrUuW&X-Amz-Signature=b691b71639db048e5384a53b6f3c69d1d175b227278a33aecdcb4bb5d984408c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPFDVZU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeKuG%2F%2FPRv72mV5gWvTH9vzw7qTR77syGC1NIWTdLElgIgD%2FZ6iANqydaaR3DVRvUlfrGSCc09d7eXjBfzFX53b1sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOl7rknBQF78WfwwxircA0Zp1GdsnOz%2BqxRf4H0c9K9YV8Mr2%2FSMvkHFpWeB%2FK%2FoevqY29bH3bedibq83adMeKVHkIU73umGB%2FoMfxsvhVI5K7CEPHf2udTmJ5zNezLG%2BpJlIwcsUtEu1M2tqu4%2FTFkyvIBslnJjkSrNEtoGf6rs65QVNiaFx0ayBc%2BIdhH2vvzD06rYL%2FF3b08VwghmqzfAAjGqps1YEglm1Qcn9P1H3Kg63PSBBe1BlCbGX92G4V2uNAUur4ssPlX%2Br6yyW43iwoD5VHX4ITSxu9idv28WBYWjVws9pl%2BQSLt1w2pFr8rxVYnayozgPWjgtwZfoqF1jGhGfApoVq83j0mgmjqrlXkcNnIJowa9J8%2BwVXy%2Bc2Fo9pWQ4fT%2F49X2Hs1%2BLk9GWPpetqtpbr%2BX7OU8rgqPLhDOIVmI8jnZMVQylY4%2Fkq5z3gmUNjlC9OXO%2F%2F5YQKLihcR1QhJSjWe%2Ff4lghkqRziuuJNPJ6aBtkGAQ27kouR8bvqzSuAl99pRlXhmMg10R9XuSSjde%2FqtA6m3Sc2uR752rOh6O8jra8fEjeem%2FO%2Fzs6twWTggMo7OLf5M2u7zheztUHe60lQid74BJ6CQ1UHIjN3n0zQv7zeDCGHsshMtn52sx5Oo8lL7LMJj1y8kGOqUBVw1dx%2Fo2BjFuwFVp25c%2FKZMWDbLEJstLjmBiDpNRR3TX2ftpqy%2F7QNJzwY1PxiWzckI1XUgibqjo5Z5JyDWvKHuoOSIUoWVw%2BlaiJws%2FD9SR%2BmKwjqka%2Bx8NbrlTsBDuJaXYyVtyaa8osbIQYX82KF1rTRsiaCBpk2kyQd%2BeaIrN1dOEAvKTSfVbq826SvekZtZKOhQAqnbjkD4dQJ7Cwc0jyiW%2B&X-Amz-Signature=082eec1a06662ea938423ba00b18d07527728672d8d9acae132079a683380fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

