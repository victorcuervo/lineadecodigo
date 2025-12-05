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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYBKG7U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCURim%2B8IMu1gYxMwVvQM4gE0O2xt9%2FyRMwJvASJu9MgIhALLupniv7tLgDJraRItd3uHwqJEc%2BT5P3ohlXt7AUChOKv8DCGYQABoMNjM3NDIzMTgzODA1IgymNEFNkah83pVGGDsq3AMUHJUEwqD%2FlOUgD%2FuWvbDGUfi2sf1jVrPubp5%2B3IAFIEkFkIXE7PO5MMgGvqHn%2BOXE6jHSFBbUCkDhChP%2BXIK3lLHTrw3AQ58oSVa0S%2B7iWos5MgQs1Hu%2FAPJxqKOaY1cDn6JONkTkTO2BC6y9ezq0ePQKMhKFKLmn5UawXVbiODU0K53KOcJWKR6s8Dlts6vKaOI%2FAZUWk266Hsc6l2ZU1Ad6TfkQHz57Ooxgegpb0ufUV18fX80Flc6JYezDm5nw%2FYSlF1CYbxWkb3XzJCHu%2BY1mtkMO%2FuDX%2BDEaZP7mDeCfT6yhqonsxfbgFsqN09DjSmWKkvkKiUq%2Baa%2B180RIrdD6pOpx4Zl8APDKAvxMJl4pY%2BMUz5XiXE0ZqXAMe7o15zGZ5TpIVevz64zmjsXBMafYRcVbxlbTqREaET7yJAMidOOYTQsVLPMQgVk51zyHLk4VAsDJTiHImcZgsJHzyNvmuKF2peXB9aqSneMP6kSOfnkciWu1OiTQmZAtniorNIgu2MhFN0V6HtEDJaKrq0W5jOaGWBFezDHxVxYl4qBFfeIsrntxmM5dVbYkPr7DaFJADMcd2El3PXSAMa8L79KaElx9Uk%2BZXO25ubnIXVOIGbLbPXq3zYkP0zDohs3JBjqkAe%2FtrfX2IMn7TV0SMSlAXdYvTe50reSupmJdkC4llhuCwcaJCNyxO6uwaYM%2FG0pU%2FVUBplz6o3nn8gGKwjgeSkajeQHhQFluIVD92IdHPHx0dt65414EexnYy77EwDv%2FNHKNkH2VplZaFaJQ5l70NdsTdE%2BgHWweOz9U9djEhzMLEGa6QYupHLIoLM3UnqL0UXDp647IIm5ZrQpJ7%2Bpd8Yc6sGUO&X-Amz-Signature=0580eb1a39750377bed973af71cc7ddff6dcc1de9128a72cd150c1589c51b128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZHWHML%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvH72XJa57LeMdNvy97kitHyGTHAVFk0YNdOX%2BjlObHAiBPSFbaCBUobf847Nxd1zOiJhHb5RlRbvo6v6zBxI46qir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqzCca4t0zfti3ciwKtwDLpqmuGX4m5XMtHUASVoOeJHPTw6oA%2FPzuXeHTvkHlsJzSh63ON949f2sEWm1Bz5%2FkIol7SEMMMfSN4XcY0MteoraSt7IP9oWxuW196%2BOYn7mfK0TKzI1MLWIXZ6XXNgXTVY%2BZv2630Rq%2FqEqqeE6iI%2FvAxGqOQcKCHeiyJnDtdo%2FalpR113RSGYvsH9sgm7xVp4j3iIWlRclN%2BEqFnZCIEyzerrashQEtJzbsBWrh5V2LHf6mygfp0zhHdr%2FWilQBoqTZa91Ama%2Fkec4MU%2Fvwfr76zYev05s7T54qxRE79BhZwur8wBLoXYh%2F3wa7KDH2JlEepTUk4IUuT6%2FSn0mrZ3p0fqq6qzXtTvzlijCBWNspnmJXki6%2FYei6ErQvSvDF54EnzU9vcYNtRluhRbH2WzWaPCpkrucnIStQuRpIKzJsb%2BP%2FwTerOv%2BEJKFcov8Zoa6PpqTfbzT1AsY3kdSQUMrMV0Ss%2FzVtebDJpRoVqwQSFNFEBFSeU5J9YRda3zBFQFMhoDlrmDLUmoHYcy7Ju0tTctez4s6afBSkG0zW3s2ncCEu8Stuo5G4d5faJjG9UpiPQTAj%2BpYneh%2FtwYchguVwh8I%2BlYGb8ZIL%2FAZLmws%2Bm4m14hfUQ9BrpMw7Y7NyQY6pgG3K%2FG0HBnHWhMliKhISHXslUUmJHlcU7%2BM0YPH7SI9wPm2lpMOMSVEmbApSDUESSR%2FKDOhgA61w20QPmILd51FK0xwa8gV%2FJJA14SHJd%2BVWYt4D5A%2FpZj%2By34x9Ie8UsnR2F6WWu4Mh36Y4d4NLCwCuSBjcN%2BvGRVJteuNZi4OIqfn8mA1XXC%2BCVAe1fJhBXzo389XT2s%2Fe0P1xLYgyDKXvaNNcsOy&X-Amz-Signature=6f701da34ed8d39288c83f121f08f3d1ee13a6af3d4b0ea11403fce590da0578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

