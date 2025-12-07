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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4G5H57A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsHIgFcJKvWu1CY0L8r4QX%2FHTC1SreFcjD11hsXyAlrAiASIftc812r5L%2B1OVpNizTPDUQ%2BTeabju2gIlH7V0UE5iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2BTwJJXGtlwsdq7VKtwDYoklp04Kl8idiy%2BwX6hdK9XJqqSIXAyhMgKGVR51Twa0%2B0biaGw6KsBtpk1h7EUBuy7keQapvbEgEDUJpV7%2BPWAp3oCmu9UzKqNraUBWvE%2BArweEcJvkg3KD8NrsPLsCsh%2FCiS9iPbUUl96mzvNAScJa%2FnHab3AeN0me%2Frh4sQ7TlMlo0gOWOhvclk2V3gQbcdARoLPBx91Rcjb4Z6Nq%2BZfP%2FXP5dASevUQpyCAOq1m3IhSvyo56Dsy1mzsHkzdIaT1sZTWvOmyLPCJI5hHGr5HFL9oc65zcLZrZ8BeS5BpYOFwqobIBBGhFrjAag1csC7wnCbmRjQcTUzYTAh2oAh2n3OA6MuogFTiXUn6Ydg%2F6dw0j9%2BR3%2Btkpav0uy%2BhC0cLyOOcocK%2BGuwUb%2B1Ak2xyNsRN0ZR7WY2%2FjYc175P6LdIuSWbgqdztxremt%2FcKbbaohgkOkOL98f38Gflwrm2%2BCLkccBQtoO%2FMojvKRQmQ41a%2BtH4%2FboQoYTMEMMFK6xlsPVEVKsZAcNVW0xrWT2oDw0QwXzs%2FZaJvGYWgkq97XlUrS1Mf7O%2FntqkmlQHivit08h%2Fgh1H0NUNrHFFXKcx9vsev1Y8X9D2Tq0280pl1PhKkSBImPQ4pA6iwwxcfXyQY6pgH2VrseWTz0bQwxHCxbAD7WY%2BztLyJi%2FcepBbDGEOfcs3oGAlI6vJs4a8zavnP9e442CoDYdP6pZzm9iKX7uSv7AkshPUwmSpSknk2bl5ZrvOkm6S01BdPte0K6vtBch4EouaEgLiccb7neGhUT6w9WCKn%2FaEVBWqhCrazwIcefOvzH1G8yq6%2B1UlsjuBH2YB4tA9TYvP55Q8toSFOBD6g6%2FQjl9tsM&X-Amz-Signature=c04f57da355e54669b200798d4964e6943b7effc4d7f7bf774d096442978466c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674JOUUNT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeKVLljtocJxGzOaaLpYvoGp6sUrdBSVRUf1V9%2B%2Bxu4AiEAlL1akX23hwxm7HUd6OmqGVgvMovbeH3w9guV2L3A9yQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2HcI0sQqNY6siIyircA5R4gvnauXJURzm4489sZbT%2BbP2ug5JPlrPoC7zHXs%2BXTjzkeoT9dggFrIGmF7949aFqTF4jCOuiuCr1rOCSvU4waDNN61pRyBwXAOWXmLI5Nto0jKPPrzzcisvuH48JQdEDZWUEas3E0bMMKj60C3mv2LlLXgh6gUJrFj3nhauWl9GIo0H49iI2LvEsWzNkmMJuBF7%2F8kuwpTt1l2vLDeB9nG5OOUNiIH5CrZhcvHsv7ACBjXC4Y21df%2Fidmxj4xhCCHbGzn5KIP55rkklSXbk2%2BTLpvlL2YmzfnnfBkHyCtSsyK2mN0%2FybKSIpJcuWCS08ij8nUpQI%2FJPuIU8HQ9kSU0QmwzAdoaNWHSTKcD0rgT4t9UQa6MaWzK8Wnb97Iep75Z5s0COLLHgvBsmXgRWMD36VEcNvmW2TiCavUYa%2FneopvxpclDX2gI0jG9SF3Qtd7zukVSYrz3lEsKTu10sXsUPswQPbZtx690nkJzJzyyRF3OtyeVKDk8rBJKxtW%2FYawytWciMXaMmhRiABLNB4i%2FRGHzIwm7fr%2FWOnvIeTG0XLvO2leAelYe%2BwdEqZdzWMKClYFMKtJXmeHWR5%2B30lnSh2Z8pyM20DsqiBgkgVdbOkUCtP1Wf2IJQFMOzH18kGOqUBf7zc2qO4kAalFk%2FcB0Q2ZnEyyo%2FUNTMXQCQx8Pgb6m8%2B5fP3Jjtqu7vc3sPougLuQUKzKFrbeD2y4wLz%2B1Lp847vnpB%2FaBJmdPy7XdyjBsTCx3Kx9gf9Xx8kIM5yVR7CQkDbczHVyhcR8aGvL9wZAIZ9XpaIfXLgT8vuU%2BI%2BXfyK7gI%2BDS2SrEmFsuGOKuxFLUaX2MeDoVKpG5wWM0liR9FzWDXQ&X-Amz-Signature=f3609ac5c97bec8a5ed79365d913e5839a872aa44b246319c1eeb1a80e4c76e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

