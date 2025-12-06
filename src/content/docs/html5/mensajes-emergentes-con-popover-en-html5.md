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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGSG5UG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3apEyTx%2BO2UtlB4NzHlBKOh3NyBuFRMCa2bxalm0CrQIgKdKt2U4KiQm9vXhMmQn9yeyO6PllN897w5ans40gpugq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBvkOU%2BHmfYFrU4J9SrcA6iB%2BQ8AB24dy7nmj%2BQnczWZGFF2mPNeQV3zw0Rqrhirv2JdNCCzZd5FPESw%2BJnW87xYN3OBIe6HrKh6d1q3mi%2BW3D%2BvE9xhN%2FH2pI0i%2ByHjfmioHCqdTL4uUaKSmYmIooJBm7EmMR1ToBLla3r0ayr0k5wdaoeZ%2BVqVR%2Bov2AK7hhwCy00epsXEZDbW9vfxsc6Q8CP3TR778bwwOicEcyqQOl7Cpy3910JZk6MEAzkzgILE9q5VxbQHw9CtNnDbgaZK%2B48oRXlfyWp8HCDehNPAcy1zRWLSbrYDQMrCaXh46Jp4gyBD7L5ABOKw%2BdbWK5fdz5abS4MpRhdVkDK1GQLwcjHUJ0NBRxvoQIcBKJuxKVOxa7vAG4zgbMT%2BsuxZQ7u%2Fi%2BWQ%2FJ2A0UEbAsZZD4zvMSyAzpry0PaHNBtgAq%2FwRaPolQC6TNmSp64cU12ryZNIkbkZg3N%2BWgqSlmEbo%2BUPicLbZ%2FiidQ6U2GKiGg5JCKdRYICWD1pt%2F3PyGewsAo1iHL%2FURL2awP5sECAABazzEkC3Df0PPN3XEBNAl6WE0pVrUT8214ONtpekPtwpIbvlFzkcJaArlL6DFgBxp1m0SrVzxC8CZixIvywqTeheWSl79fWOLia%2F%2BwvbMJa8z8kGOqUBzCVs3lYwXH9eYUVvavj31fmn%2F821QkzTJKTSEk9TviAmb0%2BJVzqCAP2wAdBpO2lKOISciDMAowO80uQi7I8E69QtMnYgPQI%2FjRDNLSmPjVAJ6wFW8svnQJgyUFq%2BXkvnk1RqYWXQbOTIkYmgPFb%2BnbT1xb52Ayi5vpK7CDRbP0GxxBtSPTFpP0K4HnRAmJLmwjRKyjy8I03r1T9ynaGiGMY%2BDvjT&X-Amz-Signature=0c20c96a03c724d224e1bd65de64d3f91b71b827fc1175c3008f42f09a8be1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVWTTU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0LLf3fW5sIFevQQ%2B95QQo9e5S9sCUWipOcHw26mX2uAIgLzmDSKDTamzNdobBrGKKDrya8c5zpq%2BtEFK7OvwxkVMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC27CEBIn281qKX2kyrcA3dlfkd%2F%2BRn2tNHspMFqDKdFGfxlYxBwStUflUAcJQIAJjk4tSuf1hZaafNu6l7MIrvL6wbeo3TSmlz9PLV4iUF0OiUIsMZRAIg7%2FaGhJI6rE%2Be%2F2uY6o2YfTE30SZrpzPbXc1kA2POu0%2Bj7e2KTTO4dmrV%2B8ndcH30ILqbEH84EL136l8NHTtL%2FfNwCrXv5HsipIOPGIvryyKmr7IhezDehc5%2FwxC5ecETJazOhzAbdrc4gLKoLY7%2FbAyFalkvqQw0Pgz4Q2oykuDpN6%2FIt%2BaBXzjfoJ86%2FuMerMQ7a%2B2ru8L49Ag3Q%2Bv4ALHtNsYroX7sVZncRULKMsjC9261LzPWNlz6YCKsMee5yHNrrpsrMoeA2h0DaUogs2twoLMQSJtl3dpn8fqOmF%2FWMLihWKe%2BPX5XwbwBhKMF7lNQjryjW8qw19g1GwsBKISNHT1b3cApmlEpnLNAgAtxX90rX1Ih9PK9f%2Fbs8w328h%2BVj9azDpp8pwJTsdPL2mGWa%2Be7dKP6jHoiWl0NSAH0Z248dRjmkXvnbq%2BNmAr9vWrR6JLDhraPv5%2Btjb9sUjpVvBETlUMj7J%2Fhcxobj2PGcOxre6B4JxzPsof2N2SK94Qk%2FlA8cNw%2FgMKDL8jHrl4NjMLO8z8kGOqUBjnleuDvs1DjEJksD5cc57cQr59skFcRfIs3zLMPk3rzf0ZnVAVG4UxvUB%2Bu030fWlOyblDKA0srYuH0%2B%2BeNRg28HJ4kSeWQnpLpgv8fFSvXKZNvO07LiZjh9F1%2FkgeCvODGoMmtw0QNzTZ8W%2FItD0BKTHCfzwM6AllmQelI5Az4jSgOX5Np2zS3Xyj01Ysyjp2TLAzpDi5DrggPe4d3h1lPM%2F0YZ&X-Amz-Signature=8ace2a2dabe276f0e72a39574a54e4e13e5c72ff60051cfd3d2320338fb98afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

