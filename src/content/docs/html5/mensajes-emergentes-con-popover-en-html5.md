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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GSFQSE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWP9iZXdvHphipw5l15XCQEVznEZpM2Rd0VCF0ofexgIhAIndCXGO%2FrYx8ebeqsju3JZReNVyr0mGzZQ%2B2IrcAzgrKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ%2Fp7asNLFTsKhsPMq3APPfYjYbPGb0W7eTnpVFdgg5TUgeUlkmxoc7PJ7ytm9xnvKrnFjhjfDAzdZcvi%2BE%2F6OTCvJ%2Bzw3PLHNgn3SEE8LP58%2BDiBhMEtHH5B824iu3w10el3qpLl6FdnCzvA%2F3WUd%2BmefSBmisB3331a6fF5MJ0ddyTGq5Mvxs9lA55uF7E8rMsEXeZQQEzQIrfTWQer6XdC%2BfKAuSB5JW62gD75SvN8R83zovN58Vc6x8FM%2FaYNq1makYb8vuYxyCVaRZv4jzsPTRSne7UPPbxTyRVDpB6ctZR0x8ezZomTWSA9VrHqiawC3MKTCjM7CLWFsEM0PKiP13agGkyYY6N%2FL9orCAnxeZIHhezZl8zn%2B6F%2FVEs1J2QzhbqYG3N9q%2Fi5c6aEOi4Q5Ok%2BesRNbGn47t6XhhNRLF%2FacxS5sJhz37oA8yD0kHvdf0%2BAWwTrZEo147RxpUyLWjVxJmB2Scs56zqlV5mlIWeu83OHak5pfc5tsRSWjL%2BkdLjHwSDL2oPmS29L5FYkOaBlctm61qqLmz%2BPRVjGCmvso6CoNjHhlGJm1S%2FKkWjoplF5Y%2BOUkJ9PG%2FV8W0h5TtO2gVd%2FDaOLSsXRiU96oD1jt8e4z2wZzJfxoO0e%2FP3yJfaBb3A3WgjD5utbJBjqkAZuINR4V%2FJMUg9mROPgSejgDWkKxTvOPS3QNi78wl3GHW6ctepy%2FZj2sDFmakpkSZJEAcGHfI2vVmZKpAen525%2FN3OW8KSVLgf6s60dhiOsOORxS1DXmOKEs8sUhswLg9ZXJKsqqbFVXu2fCXrqL0K9G1PPhzSJ2jVSD0yH%2F2dF6v%2FyIVay0ANR%2F3NUcRODNdl40P4mMp5dRhME7dtgSpgpHk4Bf&X-Amz-Signature=f2e45891b74b98188a2de1b6a099287ca6893b34f77f453bf013c7a29b94840f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR64RQVT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLEfibtpuFmxFzkv2rlSPd1qkKeCS3Jm5FoR3Oex7dgIgMimVkPILL561tM%2BbUDnMzEb%2FMLaKM41qUgyNxLcSMJEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2Fy3G2j9X9pHUI%2FircAwup1tTfS07eAG1yE7tK%2BJNZrvnP%2F3hRMgf36X8QlwpWwmgsuGtuAcgwo0%2FzeDPqGGo66L9rJS%2Funq%2FqxFAAXV3ffN%2FQl2tqrMxMB4QQ%2BtW8EJ3VEZ7ROFW1SBLp1JzAuVug%2BspdAUn%2BG%2B5YOgWH9QF9UouoT0By2%2B77Fe9g1NsXs63rBuGkxO5gfGIxuYMV9zYHZ%2Ff7KCEqoqxTJBRgxcBLYRkrupKm%2FD8cGpKgEmFEulM3toATd4mJ0hO3VK8zSqRE7f2%2FQb6Xd%2Fmgeiq0ULfsLv0kO%2BV5h1Uoqow6v5p%2BNMZxDZ84b9rqes%2BVxg3dSj2DbOLhHs6HA4sCOQZIc4e7A3EVbILj45XJASQMKKvLxKamWbqNiACVGLesUcCt9Pk6eiXxwEgfGQ8X079sBUQPHq%2FBtvH0ymZIkyojsPEyYOKF5p1obGwGIdehSUZkPYJpa57tkymF0VLXUwyoV8OuUscLwCt2uBZj%2Bg83om1mXRcz0DYd%2Fqic%2Fu9X70LuUxPdIdv4B%2FhxYEMn%2Fr8GoqFJy0HMDBBRNgBRRWb9AUq36H92UOJQuaqbjTjNHbQ5jPSzXKS33Drry7QzRcPenyACeiPWzX8NCwBHgSM%2Bwy5MQCYCRHURuFrii9vnMJy51skGOqUBki6z3qK8KJx2nMMzst2t5wPcPbcRZq231jYZzVnTuO9a%2FuDT%2FKjnYI%2BcAbAKaB%2FcFtDjHGOvGzwFhI7ZYFj9lQDV9a4ZrmSFBHdXWPUAh5n%2BHDj0XR7q6yuedO4UxDM8wrGSoJM1oZ%2FW0S9kUbQsOSuqVODuOfY1xGUTiYVHsEwTUhf8f3Oel3hPO2Z3u7F1cSGZ3tCtlDL2oQBVDD4d%2FE8Q3z90&X-Amz-Signature=dab52db32d78677c201037feb7ceca52e9f2387aebaab218809f96edef0ce346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

