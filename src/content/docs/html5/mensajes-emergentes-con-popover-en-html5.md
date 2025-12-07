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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN545ZWC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06gfMjWqaE%2BpkFqQzxG6lzuXSejy%2Bh4DAk2cC9rChuAIgf62pbi2vPXhcD6sDUKvyyPLlcj2vgMavBY5wmyfoT94qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWuce%2BYbNmfFVLyCrcAz4R82PHUl%2F8SFoLeskp5jX918zVhdzSeq4k75LjIgDGgPVsugG%2F%2Fz7XMT09pbNFD260v95A6ux8UVbP6z9hSUecoPWdV4JwY81JY8QKikyyF5sQ0TcXjTNDyGJld1Jh%2BVOx7PqGZpfKmTyTB4e5uehWPdoizZqsrzOYXHC2xcIukLhIcjxpleOi7ZqFux5ccn%2BVpPw8zpkfOUgnfxaq%2BTmm7xP3g3J31xZB%2BK7peBXktawzxJQ3Y0%2BkArv%2FLa05ez8KlaQ6ZZDqzDMkASoUXHD14TDkJcepN%2BonUWZjj7wG%2FjhE8u2Q6kaAINBYSj8nFIb7ngSSQLZkf%2FFuCgI70PaIJ0GFuKGWzocI62aQ5Z7DQQ3056h6SfdZenSwhoB6J4We2XZ0cpnjiSWVkSRldYK9nTv5ZlPElclL5OKZwFud1dH%2BnzMBrhH9KoKcTvQw9e32aRDipSMODycoi3us9ERdDXayqkImzgXa2g0LP19FtkxNr39Ggno9QcA5MO4u58u%2Bjdaie5%2F0CXUfxDS4%2FNONwJH0wkj%2F6pkSxAE%2BTvguPdfRUNaj70jTzeT1U849OUP%2FqZqeIO0C%2FgDn83fCd0sKQ99%2B5Bv3O6c2FbYUuPEcg7lNRKKoH7iDPt2lMNC51skGOqUByzUmjj%2FaOwyRZJbApHfC7BclFny5MvOAQmMyeGXl0X1yPzQH7CkAfYCKW8KILiSbcddmyCx54Ff30NXl13rH6171NHyJwH4xSQW%2BsDBSMso7WE9hT%2Br0ppppC12T%2BuYS3xkYdwA8%2FGVCy8txaLYRBP1twiP7vkmcmOQeZj2AiWcl5SqFrmjpYYNyiNqtRRWCXT%2Fu%2FGeYZ4N8AgwIeQgMISJMnpmP&X-Amz-Signature=2245beb716ad9ec10b62bcd011c059393c1ee09eb02c6894854bfefa3294b9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNWIGBD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNoVgE3jJMS3BHZsCXZ5v7kOieBXpRC%2BGmzad94ujggAiEAgDn9T%2FWWII%2B9z2F8xh2TN8tqk1m9Kuh7QZ04qoCS3lwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvgbUbBeKyOpUkTnCrcA6%2FUZHd%2BjyTN5tlW0qKD1bED%2B9OW7NTp9WawHadSVnVNRSP8hxB315TS2VDuWeVYmRORHb%2FyzKbAwUKamMWH6aF8PdUZFBwlBY40Dssx%2BxFSeeKEGjMH1bDjen33C24PU3NPTSP%2FgdOnhplf715C%2BiIOU3rHfK5kBWwExMZkH8necZ69ECbjeNS%2BortY0rmLjD3nM5rfzTOEWqMZwXw%2FTBR5cwxzAhx8fo0UbPuiWAF7c6cgt0Qo4qFyn543pM6LOGTs6thio09DyZ%2BkuVaBxfxoXF5xAz57E9QJyEzmY4cKTYmwmYcXqNllXxz6o30R6EdMk%2BM99y0BKoXo%2BzKD94osqTYRyPdNiJDzBBeglspMAStrW67aDN4RfCz7u8aROGzGZQcVvpcgPK%2FDmvlyBkP6j69lHOXbr4U8apP0QNDev4KVj8tUwRaA00p2NlaNXm9LsfLdjF46k1f8iU0hhLFGw4xxYyb5YczgUZjUYBxEBUrVs77WmXU0e4SxfRPiLv3CKWEG0j63OwgkFeMnktsgXStkaGCA%2Fc2wzrvcyMpeEWF4a0nu%2BAsEk4%2BsOUgDzY32XQOWaT%2BDB0HQKGSIQAS10J7RdMorAF3bN6sUDjNFy%2FKfn467gds%2BqtYnMJi31skGOqUBREFvjZ4kZ3%2BgvAoEy3Pq%2FBKYObZlvOVDXMXFamz3OtSQxLf6H2TaLf03gGXhEH1a6GiqWAVg1JtEKC5QFbtU5mI9hVLonBdnzndy9VApKNQ5SB%2F2MzYSfVf3qpHUKFqvPkY4ANHVl1C6Lvt7REmL6ykpPtZIckEJHRWWh33nph3AfXealLq5%2F2AB03N6QLAm8f%2B%2FC2x1XB5%2F0t%2FT0QvkU2v9%2Fm%2FS&X-Amz-Signature=1fca46a125bd11be924b25b8519d29f0e4f1af05d72bc59eecbc7c4053e03ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

