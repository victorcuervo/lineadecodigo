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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH2RCYG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfxN48kCjvnL0XLg25SsMsvwcamxb%2Bq5RfHUg3EojUQAiBMpfWui0I7boGysN7nCaNIYvvTXjfTWKyXtDIdwnD8myqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM71c0kBAhWNb%2Fee%2FMKtwDUbT1dpLikeQlSUlJMGX37SuzFriKNHmTkSC%2BML%2Bh8KA1pgxouJXPlvYsSbBk2VuCg6PkKcG7SMWgQtuuRfbcZwlgYIz4nTeEO6gmiW%2B%2BeO9S9KCysk9XyrWh4ym9vDGBrOSlmGRTeK3%2BnK0XObsMH%2FnjWoINd1pmM81D2tNdXY%2FaY7qFyzXt5fJs4wmU3P63oP37T%2BQNn6YR%2BNzVKSPGTVde9OlLlBsU%2BS0J5Nd6CWFLtAfP%2B1kM%2FWLs%2BOZAsY09Gc71WQSt2OKYmNfCeAldYEA5mw3Y59krd%2Fv09a2tHuXYqJXshrhNYVrXU57%2BuBdi0Pf2443CN8csCeyW%2Br0vf6p5bXgYCThTVHQ1aGguyePkOs43UmOP5rc4%2BCer4fo8oM%2BQAkVL0CwymmbJJDuckCvgKL19OlKBMRVYF7IBl4HHiH9jfF8G88mMlB4sVitym8gBgkYeTcyQJGbmOGoWLV0uXQQ2SZXg5Nc6DCsLSxE1Pd48o%2FfqnwhOOH4eCECpbl9iuXfjsD42AnNDKHWQn7CPThBtddD8oNe0x%2BxKF8WMV6sFeWKEr6ASZ6%2FDVPCZYuJJLFaCRexJvmlqjcpTwWVZrwsjo1efz63MJ2At7HMnU%2BThAehrQtONhRgw2YTYyQY6pgGU7eRg3%2B6lwoljKhwLMxkpKXY4D6nBY766LY2D%2B7hOD%2BWLWgaOEBtR6leRsEhOf2yfwOhaJS3xF0UdIJdXNfmLoq2vO1afrVM2QH15J3kLF%2Fh3E3%2BTrMP2PD2o0HoTB3fnaYsgPpct7%2FyDz5sMs92ijZzsUg6PXxCWYOBF2UbZM9YddAVwbG5KbrCdQSIaExuHy5paqIotukPs2FP%2FG25tuVnlSgH6&X-Amz-Signature=40c9ff7a6af018c601a68634fa723f604fe4c4809ba15779eb8cae348864a849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PST47J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyl%2BtL%2FbLJItOOl1zD1wq6x4MBxqMnZiv3jO1Q%2Bfht0AIgepgho8QpnVOW6%2B3wmH5dfjBEZwZt%2BEv8TUF6fRKNyj8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYsDyZYn35eQ6yEzyrcA7swytn4vOIyie9LLEBCOxyEiNYB%2B6wCY0UrMbmPVIeEsNi2cszNG%2Fcz3YeF12rzlJNJrsLFUI%2B4JPNgtRr3AMbL3BGSPwwIfbBCi4hALvb%2BxR6CO2OXIPcIxBtnzOq5RZZQ5a8vRyKIoii5JippjghgixfPaR67bSHiYoRCADxi%2FxgO9DLLiYzr2BuA7M%2BUHX%2B%2B7JOIIRw5tqtnU9kyJYgPwpVZ9ktL7hOjVMIJnFfFsfuQYGVX7goVsEYZbiX6VjyilCCIeTlpCsyv4GNChj7TQCqnG5K%2FfazmATAD2v%2FsTXp7KZJ61bRydCS0Lao73IY2Hf%2Fxx9RFViYrl35j1DXKfqfI6q1Y9X5zXe1VIM99FecBouvuuHteQxkX2uqwDTtGyOxdUfHzpfZiC2I5IF3imDebyU4%2F0N%2B%2B2LZddLS5SMsl%2Bq5My6WK5aGS%2FTRuhSqtp7oPzBBkt1ENf%2B3a1fIdDpbCdJbPRCwcy5eduggVHVZUs2HcjuxWXUEv9Tw%2FpQZ0wsUjp2AMslWeyE0Wday2WBXPnrlrNJLTanrJbDsAUr%2B0iYELFZlEXthcjyjNn91M5Gt18zRAqyCd4Sfllgx7l3WDvbKvkUs0MoYa%2BqBE8R%2BAsy013W2Ktdd4MK%2BF2MkGOqUB8xn8cNcZ7YMEY8mjlboDqEuLSVHvoqep7aYzDFmy8tbrWY1rNaZWMvb94psvTKLdFa%2B1oCXTWorV3aj8WJVe3KT%2BMtqT8W7uOSJuj71cxiXsOoLECx8FOniMC837y0ypk9znj%2FpMzCwXVY6gYCW3mVzZ1QE2qUMbY%2BU8NvnZv%2BByX9dWs2MwZEPvtMAfhzCpIre9xguAzzpCBZiCDMwcDxiCF4Nt&X-Amz-Signature=992cd722407da2c515d75c024e2448ccf71d4519034cc324a0dcbbb363f94c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

