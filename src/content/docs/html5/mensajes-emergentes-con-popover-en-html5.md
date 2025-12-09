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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVH3QAP5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbcFf73aRkChSjFG8dnZA1i588MD3rDclRCxKrNmSuaAiAgfPovX%2BN14GoSWXKwuAZAUfRwpzaIFPaps0SBrIg7CCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GppObW5rlV3Dj%2B0KtwDHELUtws3JWz4g%2BySFq3Qqvw%2BRYQoYuZAd0aY9wB%2B4Bs%2BLlLNT41OTYfowim%2FsRVwmN%2FvvaEkNEYbfF6kVpl1Fgin2ef9qv%2BeKj%2FGCqXq4ttIbJRxTbRlCWBaXg0%2F53CHjnbsx2WySItAWHOr7YibdgdtjVqDOETSOOjIqCVtah9vvmSj%2F8p1VL34iub%2BUT3UeCB4TGvA5LAeGhYq%2Fo9jVTS3B9iU%2B85jao0%2FyhcFjUeO8uKNqnXFakBWUTo8PJT%2FRcIwPLUURIKxQIx3ZChmX%2BgBB8Ll72UCr6YqL%2BgU7%2BJKxqtS0jAmJIj9Eq26V28zMaKyNzU0PdSPnA4lFf%2BGkmXIU1X0Y%2FZWvRg4ossFwPqhT8W0rR8lYSInuSWbimjC7FZv5t76fkU2lBqTBzp0d%2B8LnU1DJ%2BoHpRRoTxYQCTk%2FG5Y%2FOwoFGcz2qtUXVE53rWQo%2F2Yrrjvgw%2F21te6lL9B%2FrdmlfuAivDncn8HW%2BCCcWQgbJmotJN0n1HLnerI77oJb7dz3zTlPp9umxHrqnbmfxSk8LuYWNaO73RdTEOobuuYJIunzbtLeE4X2nwdiTXYIEGY%2BZyVueN22a%2Fl%2BnJ3CMemlT5QXBFn767Ux0c3eD4ZJAjUe7%2BhCJPIwqMPfyQY6pgFAS%2F8Fzpi7hAP4%2Fv3DZNdatFYKO1Us6rPVl1YenMpKd8HGwZLkPGmyM9jCUHbs7xd4MxfTqYp4MsYpBFHxh3bOsuF44DSxtTzJNa30HMJmlPzZb5ngFGdT8XY5OGCSHvMUQWS5Vd21lUw05s3CgBfIvTOg8s%2BftV8g4C1H3%2FOneKGpRjO6js49r0wOWF381KLWhIjXjSG0zcKlsroxCSoIQXpvZQu2&X-Amz-Signature=b0b5a51d7821e78daa035b163f790bb33be96ae5fcad5d8dc1c0d1fc988feb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCOF5HY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7tovA7yJ0MdvRX8nMSS4c8hA23qlL4YZNZrz%2Bmz2arAiEA8YIyRzt02VUYUCCIw%2FS4sN1xM0lvekc2Nps%2Bywpax7IqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqZx053ZuW9V0rr4yrcA1%2FrWHfQgLGVb3Cxf5yJXI%2FexflZc9W5d7%2FwvD%2FBojKz3%2FjlmpLQ6VX8a9HIW02zv0pgGIs2U5BFh2QH9mkIdjwtNW9LCQlD7UG9tq34yedzfbYbJCVKSl%2FstcuT4YMheyPkRXy3leVa6D3tZ8D4SI92Piv4Opmk4MreUbKrQlB0%2Fh5X0sdQZkezMej1qR4%2Bg%2FtooKm9SUjjojgyAcJ%2F%2FSSbbme5owbosIDuttsnfZCWQhEg8fnYC%2FVImFh%2F5FEunTkx9URQppF%2FSVD3Sd94PqC3md4GF1L9dmJcq5iMoOnV8KHBGIXSNJPGWvpazclfsuppC6rJkWqyrFocn%2FBa8o21j0Lar1YjXGM9uSYcfdbwUAov9K2TjOf4KBHUJS%2BCO6TG821N20X967ba2fo%2FPVcODEer4ePdL2nJNwQNTQZUFtoHog727vIO3yCORcPE9Rqb1Qu1rIG1Wq8iua63M1wTTW0s%2F2WPz4RGZxSQ81dYHbj2s8NkWf7TSdBGsyY7ej3MpAY1is6U3DcB8WEz5E6oZG87oB0i11F%2FmyFtxDRp8sBFi543tqB3%2ByaagaDmXL8v0%2FFzoXqi9dmN5ItP%2FAD%2BH9jkgv6n2asvAddizV4gfTdP9f4zJ6UTlGAcML%2FE38kGOqUBORTofyBRkyBNH6jPPuLnIrVMVaA9sTdHLPAOQm6lSIakCevxPIxaSYByAQ9tWFwOXvgpbBg6HJg3nRqE6Y%2BD4lxvhgqlyE26DXWgQoxCpInaxBdWVhbs8rXJQu%2BPN3dUf7Ipieg11schgynaSSvxsGk%2BKzcCA%2Bt4fWXXiXVA0z%2Fmt9QKkVPI%2FosgwfwTP2CfgBL3jrHWFgAVW1tOCyHm01uf13ey&X-Amz-Signature=6a9246e24ffbc2a957a842e974e4c3bad6ac1962db9b4cc87cb8fba8ccf78c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

