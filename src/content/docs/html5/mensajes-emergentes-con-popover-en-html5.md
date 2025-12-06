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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHQFT26%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE20UcwDW%2FmRX47nyso57QDuiPFIQhrXQw7OrXuuS5gtAiBLGCdzY3W0ZvvuOraFFA2YQL2k02oUE1WtX1Y93qTxxir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMv8ouylmQAmuXizJ4KtwDvXUCGfku1EQ%2BaiUjfFqdFAXlO%2Bky3lO3tC14jq3%2BQdPYEGEfEkLOtoRX9ME9yLnvrJWQRtCheZ7GAYvtPInxA782Q%2FcFSyeTgXX7ZGgiGz6l%2F7C4GBDrUPIMOvrLK0kJ71sYBcWj82JeWEJM2DqYdRh7Nvwh0B7iZrpVgZ61KrfiihdZMNauOjslaCPdiF34Gcs7JILKvQ7nHOpU0oJx79ArzC2A75T3f6BgznUkGw8KQVFod024V7otj%2FbkV0Go5kOjTXDsSpCOQcc1U26N2K4HzFVezkLIbHN%2FH8gtvziZdk6WEUsmahSMLAynGndxsA02jo5lSr2iZXfFlQtSO3MYdCauIhQSlnpGHH3Hx%2BouTYwWQN3DcxFtWo5I5AW%2BfaBjIwa8e7wI0WS2M5OpTh0fK1mrJl38LdQp2IKkmUy7ptBUW1GXPHGzLq0xZUT2NRhUgFTLm83zNBMijZKDZqjKNx6moOWztvwRnBp%2FNWxF47Z%2BwKqXWGLokI10n1WGaLsYtxQgtDuHWW8Or%2BYz2WAl4H9KxvTw2SPsdI4ikOxBd%2FYBm46yIF1tYpWdeAJMykoieQTVIiYowHYemEihYM06uvb5YC0aouGldTr5pTg0k3usW%2Fdw%2Fyr4m9owqrzPyQY6pgF9LXN%2Bst09WVnMGUh6dRKLYIikEylNhkyyRdUR9GtVndLHirSngC5WsjQAghydtrp7iBcH5kmd0vkbFkgRHSr2pOytdDlQtCjF07SZwcEZlksKVrft2DlexRL6JWWPeRagx49V68BzshXvYY64YYhZ%2FNHHr4%2Bt5hleFJ4TYT6SHYqoRJD%2FVKeLHp7X0G39BcCwz8G%2F9yr6Yo%2BC2bYE%2F0lT9bq6FYd%2B&X-Amz-Signature=78b2d965f6708251dada240ebc2b7a0c9ae071c53ccd215e576cb7f31d2478ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZSDW52%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRy1nMP1RFQu23GRJhPmgByWXcWfnbp5D1Hfyl46sAZAiEAlpbnpdJ9Q7P1elg%2F3zViPIQppQkRrCKaZ%2Fre15DiG7wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCZ8MPaisNbGjuZ1KCrcA8%2FgOQQZuFM%2BSAZPI1hQiQO8xrGpEaLEiB9zFpS6b8v1Jjyr6h%2FRxcrwCUIvYSzlfbjiNUUu2khUqy%2B6cZ%2F6nLNxWTfchWKRn9Zf2vIxo4xoyK634L0%2F%2FBOxFrNWPi8H45m8HwlIjJy2gEXkQwWU91Ay%2FusX4KetPeaI1I0PQlelIoreo60f94jvSriVWcjDAdS30yg%2F4K7dJkui6Kjt5a5%2FVTvJjG2r8h0b%2FCrKJs8v7khXl1txkiM1tvQwopEjrDBykIy%2BgK0cz7IXN%2Fc06XnGhfD8%2B8Md1xIwkt18vSnP%2BCRBzg7r3nLHyyFuTI1vRdVK24kB70d%2FLgmAcAgKZgGR8%2B5Rbhm7uZVGyZZhH%2FZIa0CKdMMUjkqCScDWMz%2B%2B4z%2FN%2F3ZfGLPYcx050xWSXbTDevzbK2fGyC3Dvgbc%2FpTsXl8WlVp8K%2Bq96Ig%2B296FsL6fJnkJc%2FHAWp64%2BAu25UWve%2BVgNjg6BxC9iCSvw1sEJSB0fJUODBFovUiTzzPxcxziP0EtbJdnmfYvnaxt4PsIbZOGyX%2FxCVJ%2BZ4HZUq%2BAAYo2QoNuyv%2BnBi8FA4ZEPD47%2F7mZh788Kc5SwRSJDG%2BZdDB6tJ2qZ8eN%2BtIQDye6Av9sCwTQ6EgfJJKIMKe8z8kGOqUB%2FAMEYWbX42ab6MMPpn%2FhqCRrkuq6LmTXl60fFp9BbVf9R54mHfzb67P1lczmCi3mADId%2FJfZMqmR1BAr9qtL5g1piu5Of2cbyuVBWL0PJI86t5hhp5IhnPslThw2GWwhH6Dx%2FZ4mQaOycWyAVWramE488xY20xhEI4c0AzWkLsBi1SFsiHlwZjOfy%2FPy5WzbcTXqLsvWD2VEcg%2F7yoHkWvJNCsGf&X-Amz-Signature=69992a247b55db4b8ab1e3bf5ad0a992795e32f97f0351b82aabdccb9457f716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

