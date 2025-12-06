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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPMP77G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDztJotkXOPlXc41SG8tuLqD4f4%2B7QIXYw0scy09%2Bb5LQIgA7aNvuzJLTzM4avT%2FpbwwtbmtmkLKylVOPF9GG1cQJcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNdSEpp2wYbXOtKWcSrcA%2BzpQZuxsb0nDe0kZ8wIcrhIlPi1pM1mXrxuO%2BSpw%2BtehoRQm3EAQzJXFa8Tmuv6uXCPkix9XwJQccAdP25Snzjl1GtGm15Rl69ctSYndE0yz0RfU0FOuyzKxfNzjy1GRF2j4L3wzziNiAXZsgs6R%2BShyXwsQd7UwOIHY%2F90EVRlACPBtiyeE%2Bs2gDorV6iyNFcfvSF5XmhAmyw9uK8%2BAKHRAa9FZbqjo0GaFWwF8in%2FR35YEi27kBUWk%2BwmMWgS9%2Fnf27e%2F1vg%2Bet5N84O1l1q9HywfliTIIIG31fbI0Ypl8vAOLMTXM3Y0u0HKmycpHNxsEIGK59%2F53Gzj6hsPVRjwJBgAzcQJd0zyRQVGVbxY3l0Ar3X%2FhyCHuv7dxrVfUcVmdfU0UTmdtQsSFL0UVo7YXbIez%2B7VoJTPr39l8fxzXZbYj%2FS6U45l3B8bMPOANLyG6FUfMc0vBMiMPUeIQ663rbPUi7hmoUDmSoUfw85dZPZoKu1mh1kUyut3rS%2B%2FehcPbBL52%2FUiQbFMbEgIpXASn1ZdEIoheRtz0osFj1LT2Q8aqcpRGFVTlowHsaftZ%2FHtEQMNbQJLFB2DrrBvKItDp61P0ACRknB6nATjJrizd7GDsHIgLQH%2BSoSSMLPI0ckGOqUBlWcWcIAHYI3GETy6%2Fqd5WDWN4VCwB23DF%2FmfjbzosaDAl1QSirG6z6yfhXB7n6JxgSe8snQG%2BBToyQNebxfUU6w5bVSFVXN2adcMWSJDd5c3goTyPka0I4TeYfezjDWEQacakrQmNZwuZTFi9pWkXvFwwu92cHo9EDcXTcT8mWzGnLJJ1peWiKFohk6R7lOElPGTdTzPEo27tx8C1oaK967ET8Pj&X-Amz-Signature=389b884c47d14d99791117e1562a6e4be615bb3b953a0b86931699a6fbdc2b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USFDYAE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX4o22MnBeOKMbP7uMAjO7Ea2KJ0gtIrhxjT184F5ixAiEA8UMO49%2B2AejSD%2B%2FDj%2F%2BT3c2etELODQlYqBKBxEKFks8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHJBts71o4MD5LabeircA7sM0FLYR03%2F%2B5%2BggOwdvQ4t%2FSAemINZOxgL2OQ2dpvNMaJMnfjl%2B2fcjdFT7j1L40kgYzr9cDk0WpsroiXtqJ747eORNr%2B7b2dLvkwU4Mfg3LlYwUiz1Np7GXDlKziAs6jTocpzeLUkTNgdHz2GjcbtspN67HkJ0fRiN4qBy5Usk5feCarHLFJYPRDl3gEAdmUo4YNwcsMGKO33fjocpVfwSYFPQVNI9NeShmV0e9P%2FWPKuS952iWUp%2Flmb%2FzSupGn%2Fy%2FOEOVkjxGkOpu12HjzbuVKpGUsyzIZAfWvO93wyLLpxUcdtOJSNB7y9lhbGS%2F5M8uQQ2f6095iydT%2B1x98U21oD4RlgJ8WuJzUW9NpXW6TNonBpYpxLX%2BS1nD7lHkBxMkDtgmcYVtrPMSTuHRJwzvhWsQ5hZ5HcSuCrx2qzD4GLWd7Z9BTrLR8d%2FWUGn%2BTtQIax%2B4e5Ap47J%2B9vVpZOdZm9UZbX%2FbGI%2FWyfs8AhdWuvbuw51w29jXd8HGerihvEU%2F2sht6FuwZ2ohzcSsa4a1s6RBadOyQIYStjjivKv%2FHvfDl%2FjA2m4ErS3jGuB3ixBpS9CrPco5h9Z0a4FLUb9he%2FmavmS4QZz7UEt1U6D203eqFDxTZ49RYhMLfN0ckGOqUBPHVnAGq2xB6FhacoLVPrIb4z%2B8VXNp28%2BA8MScswhz7BmJ%2FU5igtxlvCL6oeORmr49bFRjlSFkFnuYTDwX5cRkjdMycaqp%2FvCFqhaRsKo%2BInK0HgK6z3u6Nbe2NmQ11UAZMPUI5GbnwaQcyM%2Bd69NvX4hH9%2BNudEQIB59bO4ZmpKXcgjEdIqarZ92pyNZz0fgoSHa6iVwEG1uUcS5yXyP8%2BXw7wL&X-Amz-Signature=91a45b07d720bd83dccc08b5ca5df671e26cb285c29874c86d0a5a0546d86ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

