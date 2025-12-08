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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CWUZX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIpU0eKiVC7hc8xWNDLUCPXpA3Pnl35bWoeNTRuRwGsAIgQsAY0bRKCcmH3EUZn9Ron3u%2Fu0%2FMtaggcu1SGXkfz%2F4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1B2Kj%2FIsJtsHpaeCrcA1dLxe2rf0n6GwR7Fw0qiXkr5RnAwhQw9lcoWct3w9K6dSnSHhjJInTO0ArqomBAnaoIdi86FrRpHMyBxJj76rP%2FfbEcWsTzTNFslMWgJ%2B3BHlw4yk%2Bbjdi6SzXLpd9okwcXmC9LcrH44LpPnLvirGHQGK7T3T%2B5SsJwcObN%2B%2B%2BN4scCihN3Sr7VQANqvxGbltRDB5C3l49pHuJuQbXMkITqp%2FnBm7fsrufjT03ugOJjeg5UUgP6xpVAuRWReOlqmm%2F1hvB8YicpzjXKnV7NsNSFnrKUZMEydfW4kcvMwMgD4hWcGS54OXZRr31wnzoSDZzM48ezpX4XZUlR42q8VD6z8m9QSyzkPJPQjqDYDACiCfXksrRC48UFXrVDdRUvdwZEbJAtUNIXCcf8Nbj6%2ByTDd41q%2F7BI9F3SY3QlqDlNvgiMg7%2FK4DWKzJ5xQnCIBRa1D7exwCf%2F7cJCZsjeUvqXj5TdO7UljBaoISXSG0IoudsH%2FD5wp0PteyKoInJe0ZG%2F0OwrACuMXeDc0nTb4QkqzfWWZeC9qai%2FRqHY9BSIspG891kjEHMm2JmiCTNviGm7mRUP2I4ZVLYkvcwdia5xNyhfTc5Z%2Btj44yRCTYLsKlfN5vYPxYMHi8X7MLXc3MkGOqUBan9gLy3p6lOkWSNm3eq9cAvEYW3%2BJ3AgbLIqQm%2FSnHCLknrYZDPpLvARQQpxtaZ98jLIoGTZkWk%2Bcc7k1xm5AAMvgtoUAzzdWv9Ek%2FN6MQW9fRumhRyxI2gdD5cp%2BE%2BqZNcauWxG7G1xsK7rVx%2Bhj3iNVIqm4hRqCFCaIwcy4taUpXR%2B61ZMTpkrb0DHPMZSN4%2BfOl6C9aYM99pvaGP1u6xIXnSB&X-Amz-Signature=de73ca557ced5569a941e44ca2cca8b5f5626444205be457bce0a29b66f91c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGBQMAR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmAkFX6S8i8Lk%2F587ufwl3EcuU0L57WF4bUOnUE5scPQIgaUfTgGJq2yc8LUBNq2IRE0jUwKlsCGY6kZMY8LGQ7LMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhc8jyQXDmm6g4FtCrcA88Tu%2BCWTGAVMXTIUqDwHLEgV6UZBO8vBzuIaOQGukqYoiWgT2ccD83wC2tw0VrMbzoD1kyl8HZRFVSyFlAJ2SNxIlmI2yV4elGmDuq8gHTwLwvKdDqkMwqikrx2Qv%2FtivVjVL65LmE8MwP%2FUnOxdXmBt6o2UL2TsTxz6KYI0OC9D5nl2SVD0cGZts02Vqx1YhMdxuxsrq1m9ih0OzgbMtqRgrhqk%2BO%2FHuGyvMDsCrcOEJ988iN2%2BEezjOFxLzJ2BvOgqRPiyGtryPEhGa4VmzzMgB3oUT7BM5Udw3G%2BuUA3Nsi4bQaq6HW2HQEXnPB%2BYdq3CJR1qeK5%2B4UYZ2TBuwiq1Ff3WgREy9wxSrEBgos%2FCxSYuRQbviVqqzr%2FoW0VA0vmjceWEMkSv8CicvKjbVyYfcW6VOylGk48%2BtI2T1Y4h66jRGu76PzJJ057dnbs6lmkRnnmude86vvECUv5lateN%2BMN%2BwXTMi5mq4qJQirnNVY%2FZRs4%2Bk82jMbuecqvp6gCOFz0nN3lfW8hu5qjrTMDPTSl25%2BozplOI2s0ehvECtRrojrJmSeADTNs76VXT1d%2B3FdPpz8NmhG8GO%2Bz%2BcKXw1v5%2BsiFt98nc2GNIpxzhpXzvOgNapvhaK5%2BMMLd3MkGOqUB80kiLQBw0lwImY3vlsQzmXwWOueCgMgq68qu6Q6C4Bc0BXW9CaKNpUSnp5S45zu6MLLbG3u%2FyZfS3q5PKVxYRW5M9lOBFthlp2hkb5RVnps0p%2FBDAkhK3E2nwNLsZxYMej%2FFQQACF%2BxOahCM03wVF6MjBSwQcltG1fy%2BgTxHfPSHt83zT2z5%2Bm8JviZrTGInXikNFl4eJTqLmkKDOr3UugAty86Y&X-Amz-Signature=d295e1c427f390d8c4e4ff7a7eaf296ccf2f21a343759b63b6ff53163ce8c4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

