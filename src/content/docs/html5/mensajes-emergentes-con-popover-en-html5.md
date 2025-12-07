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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2PY7EU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSSqzvWbVPfZhx9vmuj1fDHKnSaRC3DcCgKo529TTdUAiBiPPdhDcbc5wQ7AsX%2FNOpF%2F%2FvWZQjZzbiwc%2F05XlFxoCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM2TRyFDX4VUw1pcJKtwDZ6PYRIwyi1s80xKyO%2B%2Fh2XQfvDJ7Sz3J6y6AzqPdF%2FCDFkoxgCIOE3CN%2FpzdQGxwWc2VV1iEewKoP%2BQWCfdceT5mAYI1J8Ip036baNqLTX9GFS%2BIw6Typ3gd0LDHHd%2BGO8%2FdIKcV0r0b15Wg7SS8a%2FckcbvLXbU%2B0qgEkWvWqmj4%2Bq3eSh6OFzPhdn7G%2Faym2prIqyv4D6Wzr5JlSLvc5Kw6JhSQ4Cyn3v08EVDrTjGTME9kKEnqa71LKdCOh%2FtEZWw7PlSS3quPlrDXy3eachAbuTZGpTKvd7dPJdj6t%2B4H%2FbBOO4QbFNcfKi9cJOlrhpZdAovuvkO6FHfuyst1NK2GM0ZCWHpkfRKfmZcmbKYOPFMqz%2BueJTlf7xcSHQfh9TT5HQz83ipGsc%2BXlXJeMbH2%2BPneu%2Boute%2FCYoD77%2B8fkRd0X8V%2FyXOHuwoqfzTNZ5XMrgfrRnEgDbLPJB1gjU92hAUcSOlSe6mxBoDWoipNj8syFvoHZaBkVd8AtK76KBByfTHkmLfNnxRTDvWkf1M7yWHaLGviKsXWDe7qdMq%2FvRyhn9D%2FVmsABfZrgdij5%2FckoWBmPnpDwEwfR6LCtXFfAEF10ay0O2TmWkUPD%2BM68se3X%2FqcQkd%2FMfEwiKLUyQY6pgGEHHtnvUsZdG7QD4tLg%2FQJH%2FqQgC09ByAjwaoKsUtQdHNSHDK9RiHypqsT6B33g8SOQPiC80hI1ePop9%2FjI%2B5MRCEYQdM6qRSwFz%2Blx4Uc7QmjF7ZzEhhZT48ET7z7gU%2FXzk1R2xoOxsLM1LtB%2Fc9efCgprWg1nNMBaQLoBnpeRLg3MSTRipSQaCEU4JNOKqOU00acyZon3ZjsRIiFamtqN5CM74i%2B&X-Amz-Signature=2976a3f4ed7f85341c07897950d6abb78aa73a20d5ac45aa4b4d16a6bebda8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY7ILC7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAitYvffccXY6Of2FjDP5HwNOOI53dFTVbUsFXHktySoAiBapjPMdcvKqvFbyHm0LjH8qp4QPyeepXBM5i6OUViWOyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9MfUjgPuc6lPFZlyKtwDYPep0wgkShMv8ETb9inNgFUM%2F6jeis9v%2F0lze4llcdlIbzgFH1Y6do1ZNQ2oy3ODSeQ5HOfHvUuqd9ADbq8CKZb%2FJL5OyPFX4FmIrgP8Mw%2FhEkxfqMr0Tc6NT1bhulZU875Jv6FI8gBYqsYJzgrZIMemh9nL%2F5ZaeV5KQChWi4haNXhEtT5KhVqnLmpnHD05QnQbl5kkKAdmpetlWrqiMxXDfCCi0%2B968ZGl%2FbFH6YbRRp6AqoOUYrJgU2VlXFuGl33w9qMCgVhhtBzR2CHBh%2B6aLA1fjC3ckUSMzZcYFrKQ3w668FOb0W3aP5zQu54pBSf0a32azOUxxyWTud7o%2FmGkPC1oMkm5Pq3t95v09XT%2BvMqEfEToMERv7LscrYFZUHQ3RBzPPkO81zuZji1e6Lnpx1k55mwkhNiZjuw6%2B9TL7I9PQmbLd%2Fq8uewiqRa8C%2FF9VdeeurO4uRM1AH%2FDDi0wDFH3If1iAxaPwM82oJaBDwq6MXQulaFp5y6sshZfr9mzbQmGm%2BMG%2F2anUd2Kz4MgmQAC69HOCx7r%2Bn4kCWPzDlSa4RrACMLZl3sg0%2FMKlcMii8SNqkVrTZLCKH6z7MjuhLkVeWogyNxzYubUNxYtUxsUHDmXppp1uoIw8J3UyQY6pgH%2BAX6B7iS1UY9Nl68SWbxza7Bx2erVpuiKBhl9lp7%2BZiUeHsWdTQZXfxXEt%2BZukD8bYjd5CRZD%2BU1Jb18UfzTA87T3AyOKdTSGg6Z8P7ytdbyZfzP9X7OD1MZoEmJH3Q5A%2Bktz6L%2FO25gYLE0%2BoIMyO8S7EFnBryJIfnauV3o9hYx6ACoFJbx5OoOWNNnsF3WOtC0y6OJf%2BLBJKcs%2BXC9TVHBXgE7j&X-Amz-Signature=9559666c0efea3982438bb957643593b8af153c9734c4f9c1d320e13bd843fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

