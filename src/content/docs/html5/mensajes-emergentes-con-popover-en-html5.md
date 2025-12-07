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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWARU5OK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHUkKxdf1rmntmWUxgGVhigOQ9eLK9eaugzE227KpwQIgdVxkPu2FM%2BjxftvnTRxxoIXJT7mqoXbLcpxrg2%2FoqRQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtT5blj%2BBLOJ66E%2BCrcAxkgQCq7fkojlFO5r%2FbK9dOFks9qqpA4FRDNlpaLkY%2BY%2BxnnvbuW7NBUekAlo%2Fx4hth6Sn2ATjq3URC%2FaifD65CkepeiZhCSeBd9Www6wLvKa3WMqXGk31TGW800t5Fbbs6lsPz98mkfSwX%2FaSmt4tfQD9plE4uYRenQFwPrvv1z14a5Q32CI2XzJay1mzxJYxGRS6z09LKOcSxqI7m8uJJaG10dyt8ORIaA1tEnR9TcesGJsfmbRbcnGP8wV21SvxQL%2BHh%2Bk5jDYmZeY06GNFE14XEqWIxPjlKWwnXZpz1dHX3tf2AM3cjWrPqovIOXjLe8j4gw05LbDioo%2FdTtOBNe419w%2BWfDxh52seWn1C8FaAf6h3xUCwBBWpteAO3ezbHIFBy6vXukK3XsLzf9rXQ5K3YW8CQhjQkRucNicBlWOi502xLwEpbhFEt6QOZzduF9zPAD44QP9AFnK6aU3HgjyKflACqP9SlKrF3Ck%2FVF1SnsGk%2BEE1Y0t3QeTpYraXtsKrfWh9P3TMsZE6gbkUcNMJd8gfV7AorPwbMoBJW2mo3WTcVRrruWQhKNSX5%2F8TCHW4Ed%2BHmJuX4Byc64VjfZalv1awZxe7Os6FEIQZ0b08DFgp6lZGB%2FW%2BI9MPb90skGOqUBHiEAiYugQvkA9LScG9AYQky08aX9B2ZEHVCpg809cCXRjkgeiEuVr7nSNBc5%2BHqgg2HcETSegKpaNGFNnrKf3nsVPyFUGUDF17bO2AFaT1UK957ceuuwTXr5wA43Zl2x3PzhgqFOzrrgwCHXXs9mTxG5qOlvg16UFJZ1Df5OT6TdEFC5X40nHoCFzsJm99Kc5bsguXqXjoBdSke2HYItq%2Bzh1R8M&X-Amz-Signature=15253de9c7fdda6894a848ce8f8ca276e6de35fe34cde0e20f9b5689d7df6445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVDRITA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKwIRJ96S8oLI%2Bt1WxgBoF2UtR3NlZ2iyEvvPvCA7gLAiEAj6haG1bR%2BWqPaHoNfPLjp4FwW2T78oia%2BWCYChydMO0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHCajik586mWj%2BujyrcAyMULKI9XGxk8cYaflVHrZhDvEVG5L1x2bCk1LSC80q07wMFU51k9C0H4fFgrh5CqqFIA5HUdpjCI%2BIc1RQlltly8Qj%2F%2FBxXAIdfcXJr7hs4acxvpONn84F%2F6PX%2BnX9mm18pXSiEuSShOnzAlHKaay3pfPRc4RZVGEjIgTjsPRMgOWqSobB5eoTmcW5yijWwWaITUbaZqqTDx2us%2BjHXcDyQZNw9pz50pPH%2FQtK0gKswQM%2B0NXQzgC0es3q6zAIa%2F%2Fwa5Rad5d0ODL2Mt%2BwbUuJAtOGd77fwTwikDC71R4i83Km33LKWoPuw%2FWn9J3EvFIpVRC%2BqWdevo%2BKW8zQHd%2Burs%2F6TPTTeeWO2Ogr0EXr%2Bu2FwqRMBpC3STO5%2FrWTZz0bjbkYrCWo%2Fazdn59Q%2BtG5%2FplNiGC%2BkCvNR4oNd1Zsdke3rjgpn5L45yf1T91LYI6Wgdp9sSi1ltE3QnMXB3btdInVImAb77aYyYBKsCdWHNOvwFP%2BmX4oTMfsP4LwSIVi8ETzVka2imnEZrCja7xVNDUxc6FfFMjRJid7OSRuo9A%2FXqHJbKUewfi17Ar1xcUO8ZegvgiMFpObIpvCZv8zo%2BG86hzWdLbD5mz7GuZTmRsn1%2FM1mjsnxQc0fMML%2B0skGOqUB0Dcn7CES5TTdytLHLIfXf0U4BrOjzJP6GFlo4TD5KnbUdfSlk%2Bwvs73dyNoCZ2XvZSXtrp0UGTfC0rlTkZD5MCrZtDEuo3do6cjyTyGY0HXuo073ru44MHvOyInCP31G%2BFOqPqDq9rh29ylj8Mfkhx3kJQNsO95P5QecSqCqbraLko8%2BscepEd%2FYCY6pRga6wJvP9WrEeCcuAOhPOTUHP4axd9TA&X-Amz-Signature=b0db6b3e74f90bec5248a5b1e738e77160be2e8a9c183a19c5d3150adba222a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

