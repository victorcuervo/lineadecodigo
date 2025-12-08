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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KO56GZE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHrdSKc6A9t3rdrZkdfMT4m31ZqKYzIrDhUHk2SC9VnAiEA7AArPl4oApgId%2BJ6a48mqw2SB2zhYFXeP%2B0iIqWpQUgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLDXwfTOmd3teepBCrcA%2B%2FYkQCnIT8neFR5K8vaSp%2BULNn26uTMMTtmEBSPY02XGyIks6m%2BCmSNkws%2F76%2BJvHwVF%2Bbg3VChxS9hSV%2FF0IuMK96FtdP2kmfsgpH4EyNxyleEbeHJP2GyTphuN0iIzoy0AWsqcaaSa%2FwYF53YLIgWKL9%2F5yN0lct%2Fg3zSscjnL19SxwMXoCvrFPpxnzSXtjBBUTKSp8uWiN3IO3hTtUGawpGpltUI1H6sGe4u%2F3crqOuBDZFcZJALg%2BiwP9vKo9Ras%2BTPueNESYwoOgT%2FYuzdVgehQqIrGC2gBDHDsPuC%2BT%2FNYp1kVrfjJWB7C8whSpSVvv%2BZ5CwOl19eHAkWQWpod6ACoCEND1tf5W5A58yrFGbO3JNKnJlWS%2B6Vvy5hmEI4LWFzx%2BC7Rx%2FRYT8aZphr1bm54iCm5tda69s%2F7IxjGU7hwMhrM6H1AsbDMWR%2F9%2Fr8rmPEKGyqEUiMa3aitBmTwRMbtH7%2F%2Fq8o7jhoTeqx%2Brtamm%2BTg5cczQmIQ%2B8i9AXYu6Vt8o8xWUlgj9LbJCGVAvoAjrbAGsSn3etDopKw2JFYdZj%2BjYz6S8PsGjZKOm5EM8FbwVf15xGCPHJksC7AYRkvzR0CKgQSAc2rD0LuLZk2GOxLTbhkc%2B06MLii3ckGOqUBSyd1SZfnyoKOLi7os%2FSSb8gMSrDY1JnY8MDzNCmKaaZrGQ%2FdLiDDopP9n62TrLuDk73%2FNPu38RlX0UHpx1b%2FtSx4%2BNHwWqE9zWWZDZ1OFLBW7p8wSoFFfXYzyFg5bkuZ3mLAlw4i9kJIm3%2B3fYMSXxC7e%2FGI%2FFkQNZGVzgRqgyXLpAMvIOpFKqDPw95YQB6yUFzuX4i1NUY%2FzdrIg2Ry90Nxvd%2F8&X-Amz-Signature=0ada83bb7bd238bfa003148a39f20be8851c476db52832a4c315c8f09e0c2da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLTT654%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY24uCfro8YBK108ES46PQQo50Q7g7BTEoxW%2FqM1h6UAiEAqUKxgTatB2tuOiVExj7Gbti3LVHRAXR1n2l4cRGBdgsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BNUd4R%2F%2FwyGZ%2FdbSrcA2VMigF4%2FDdu%2FzU4seZatpjqx%2BEotZvFXAbbMIKVM5ybEkOL%2BwU26iH0rVdgbaewrlgC%2Fazh7%2B03OhF75Oar%2FSKzSrMVoAs1SpJgT1HrbNJb6y0JUd5uXrW%2F2HWcVVKll%2FU7%2FOai8mlwTu%2BOo27dWqjyKUmfn9HsFqU5B0j3nw220VT3PH4c4o4cBX26ysdpO3%2BVnLHeW0h2VadyxgGYVB5tqzUS73%2F0%2BGWPkAYBTaeNjwhuTsd5oDYEF%2FHXC5AEcz0vK837FrijPeU9cSgRbeX7x3kVy9i1B2%2Fk0IJRcK2%2BGcXuA9D3SLx3X2n5OeT%2B%2FWILk8fLxzAFqfycfJ%2BTehns5Ynax45Cve78Nog%2Fny5RADZymWx0luFImhyfqaa2NnIBfd8CQ%2FjDb%2B2xC%2B1n4QT6qfAjV2OQkkTO%2FIokJge3v5UBAPenYWxpqu2uz6IrmMSyCXP3GCo8c%2B7Yb44HZ8p5KcbjnT%2FsNeqqdADxeeccSwjHLGy%2BNI4337P1go2Cnf6fE224iktwdq2enPeZEAgQ6mR4vnrn%2Bnup32qND0A11VFRh8qNsnCEbygGXDDCE2Eq6E4622wNhC7cj95xaKsw3pYxpIZ0rc0NH1amTgOv2tTipvBTzYklNRaAMNCh3ckGOqUBUWABAdNJX0zQRwQBir4qbGwNfriNqfkNl%2BTfXNr4o2iTXdUQiIvUnAQ%2BSeR%2FiRvt3Yhp%2FdT2IwJn6tS9xpo7a%2FKjOcpGP1f6yy0HVkGa5KsRHFpsOPDMpDIBnHYB1uDkOYUSHexBSfMBXT92PsrZWfGWru5GAjEYRbW9cZOoEKQt07xXLkP%2F1h6Fjk%2FucJipSx5RNGXG6JOVDVe3PLg%2FNULy5ddL&X-Amz-Signature=741f2355aef836fdb1090762c7dd00d0a8e56e39afe1a003d2a0dbe3d43d3492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

