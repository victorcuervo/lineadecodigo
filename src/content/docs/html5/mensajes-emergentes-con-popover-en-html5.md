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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWBCZYO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDHjiEzdKemBkOdzopSK4aaCC5mYMMbIXA%2BOshpWehniAiEAnU8%2FlzcPU7RAlQC9WeiR5JBA0bePkevVm94dzjFAsa0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNh4Yg%2Bo9lgVKLkjXSrcA5Qs7%2Bh8PE%2F6azheHWxlm%2FTIwXEML66WEO%2FsLx64aWHb45ri%2B2xxwB4U5%2BmNdgvNCcQF62fzAX6L8PtBLqKB%2BvS1EtNU%2BmmRG2tX4af0cQ7HzYeXxbqEzWqks9zHK2xSPzSytVx68TN4Es7d02Um%2FslioR2S%2BtNbM6V8bblwuQfn0hkDHBALvFlYUuhjfqDVlxOYNGOjl1K%2FiXi2uXWTtk4EBN7YtITyEIqcGkUCoTu4wQ%2FFAAFzwstqcjgZYJJdKka%2FWKWFtkX3w4DbCUvjQEy3xcQpKKa02LgarbFD7uqJmVoxwLh4K66rn0BAEodWZecjopUdOC0e4nuV69dtJLicou0eYBA6tPkdAVwVcUrei%2BbwkFgUIvcjSGzJHHTqLawU3%2BjjEBFPyciecZDb6oxxOJcyGRZumtk34qfWjcfp611ypGATbD6oSXZ9B%2Bm1sNn%2FhbtfsvPvSwYFPbFtPyHkIxhY58Y6i8e46ksQBq0wn2qJquwJNpTh59K977%2F70JjXoPSdXm0mcEQ5UmYZfUtgfS2ksAOd8AQSHLyEue4tAGlmM7CTvrT33YLD7Gx1Bhv8l081fFfNmc%2B1OhwBiXbzEKzRrv6Wa%2BlKmz7AeJsS18gzk25hwZGg6XX%2BMLGVw8kGOqUBJn%2BDXZI%2B4hUHrD7E6zF8KHWcwCMqXJy3uSBI0Wl%2Fuk%2BdniDf1VHw39%2Br7htyj8PSOwX4fXRfyc%2BTZxOY3TAY1DgxKwKqLsXCK%2B0Dkivke2l9L8vRjdpLRc0GG9%2Bxyl8a%2FLFqHQYGRsyUUj8kcjIMyC0yGhQnfXqQ6N%2F5axTh9kxhOhxLTDPavVlhFmYK3nVWwIbGo8YiBEjJTjWSvWHQvYa6NNhO&X-Amz-Signature=66213842681e9c26ba3dd0ffb4a043bf00b21ced443a3284b0c2ec482981d150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEECADV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB1vJ%2F7UILg9D%2BZyG3LM0FG3yqYsGfXv%2FF2AQdQzvRiFAiEAjqtnkzJYY2Y4Mqh2d6K%2BMX9FhHMC5HMwEmUtp5FxMUgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMQAeEou3Yy14YZwNyrcA4BHQDs1l6XmBywdhItauMwxbIzCZIFPkquZICmaGwRzRZ%2FnOG8%2B1Xnr7tBDRAl6CZtjh9thjjKZoVSjzioz8d%2F%2FOV3Wv8H9uYsJWyBvYJoZrcqMfK5wGjkNCEzBadQJLhTKTCAwpmxJb3uUtH%2FczC9jzSRVfHVdssJY3gvRHz63TkWbvPVFxCM1nBjqiKuvrZYVX2EUI1e820okBAA4Uf27EbXkUs1C4SDp5M98BQjMHJ4G4eVR%2FsKQ2xnrzqq7Pqy%2FXZ%2BSPzH2pRs8N%2FaLroAanXNmx%2BwVu%2BbXI7kUKB8oB9NOM8iHzbuU4w7Zl3qDY487y33VGaQngIUvu4mO%2BLycX1rODAMERUmhue2vn2wMZ4EM8Oy6tNX1djVPBUggligV2zLwbYNo5GqMYZjXH8IsgBKrgsgodOVUqJgf4Bjj8%2FbObhgsvwSYxLbBPLES0u2WvsAvzIZK8IEVLhuRFPtOjThGlP34TRLMIw7zUD6FuoeMoTZE%2FcLVzOFBJHWp3QdT%2FcV7zgG0hmWNPsEXWkUz5aX1fRtSPbYspN2MhL1R2Nv3AfH%2F%2FNPuUSNWcvVbIHPmsF0elwD9MTF0LxzZleaVymo2wnkcNDwWGmnMd4XQvTNGS%2BRUAkbAL1sCMIuVw8kGOqUB0%2B%2BRm3dyOE8qp0BiJwHsDiX9kE9%2FFf2iDm9c%2BH0Oouwsm%2F1sj6KEZVvJ4oKJUUAJkR70%2FsBSAieM4kROzbNA732nMyGlvswdxmp3acGXMN0g0B9eBDqma7lVR0FcIVbmKjAip8eVh6AIscmr7IlmcBugHYwrfyAPDLixlFvxTrBWMQAGDRxst%2F2NQIv%2Fyl%2FTdqUqAmhLdDffsg5y%2B4ybOjw8BNxn&X-Amz-Signature=597c889525e9572d20fa25f8d09c2bee2af76237002de28099a30beeac65b431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

