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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BU6NLNK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATc9A1FMFzE3X%2FlzwIut%2FtzFyVu8qasqZqH3fOKer31AiEAgfRxDWBfFi9G%2BS3Rj2iS8CGV%2FkvhJ%2B8TXynxS%2F5UJpAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPeRGf%2FVI%2BK287yUPSrcA2II%2BCqu88f5x56h1EgazYjMflgW%2FyyOhoRSJLvJtFp3N9nfStb%2Fb6YanfD9A0CDU3A%2BtvsP0JTKJdjeRMAEya4I5Hw5BQ%2BNeX%2FqzRnEki9kxsAR80m5yaIUWIb0E%2Bl7EdF0PLgIql9CeRPi6mIjQ24QTxVdIJ60IXgBEfKr5Py01iuqOQC3B6EUcjBbqYnhQKFG38V4fAQwrfmn4JhihQZgTHBRTomyR5EqZeuPI6xbCXu%2BZP1V5SRwDjibvmP36CWWZuBPZ0PU430wKx30WSX9U9B95drpiQtkDGj2E57Qq93JkyICITSgB0QR4wkihMjF%2BYjgx5MV05okhHFX%2FeFA%2F93TiRDzV9dksUNq93ZQmZPVx1JG%2FpWgTsHqTl7W1npnXLwJEmBkbm1%2BteteGCovv0IylCmx2ncs4iBs0tfAGouQ729%2BJ46sUntP1ZOHWaRSYqtYFqYr7TBXh%2F6Kbi5sBRxHBpoq1vayy0ezOA2mH3sLOYOl9bzwYRXo6qXU8hMzaVB7SYwdIN%2BtCLy47cjlrCB%2BEa9fFgOVZX%2FhUK9Wwnoy56eccfTsfynfQlav%2BJ1wjP6z0RLFqQz%2F%2FbLlfS8w996BIr70d0lkbNBiW0AFIOVuXAkoNtVga7NJML%2FozckGOqUB5QJ318NtomcaN6AZqbn%2BknX8%2Bs%2B6MB6QBny63vJ8e5%2FEzyD4IHZSeYIGn8MosmwDA58ruXvRfcvJsidKczBSg5x0SZsP986eRdKck9zV6SzyIQGgSZHxFvxXtbhDGikp5FzfIMUPh3d64kF%2Fo8eCGs634JxtUMVRf8CtuKRkvd50zOUqUxXUiL6c2JpOqIF0USQkmwtXa2AIG%2F3y%2BG79lx4mT7JP&X-Amz-Signature=75183209222f80a0c625d70437451b38fb23dc560afb4f70e15fb645db016fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ37PGJQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B0hDVGBC4vCMkL2gL1a9IUEJaKF4WNBnaVjGWyOWmaAIhAN9PCBmSIsSgnGX7zDmzjQidIv8PvlBLiOEx1AkfRusLKv8DCGkQABoMNjM3NDIzMTgzODA1Igy6i30CfTQl603NNB4q3AOBspWMjJ6DtzvutBWovgqwUb8CGTGuzKm0u2Pztvlvw8c5B2EhZeal82%2FpiEr73c4uNwRbzRYxUICmdaD8d1hPD1tr1yF2qLOzw93ZNRv7hm2%2B36hV%2BIoWWIWT3qnrSr29ZaN0FovLDnDmarylW%2BrFA0eWAon4%2B8bgFsbwsbYqlBMc4MM9CABizN14YzfrcLyESgM8mPcYaiJ4EmsmQaHUFJOERk2zsedq9tRYuk1GdiiBkojHLTGmA%2Btr%2FhbJ8V%2BjXKgp4GWSYApknZV6s1MUQCvnng%2FPBqzJmCfTu8b4vJAd%2BWiATs7LOey2FoUqrfEyE61AJGS7kEQC0DKo7JTSR8qrlQq9p9TICOyhZpeed4AGPAB9HVPIYTc4BtKI5AYQU54zAY1PFwfG8OUsDfnbtqEnaSbVZmxNiwchJztALn%2FG%2F%2F77cLOPPfziuk7qqDFC%2BZd5s18SroNWLV6pT%2B1Vy%2BnQHICDyFS3pk0oJ7c2RqZD%2FBQdlTzsaIXHpigVHciZ42z%2BYRSH4N4Xuwt6XH4BfTlwYwAqaGCiHt2li55t0GUp51L3oSkTM1vGEghPV7UmFWKpQh5ovtmCbZgQwnSiMEL9F7uXvYCKMwM05LnCwLquYMfu7HZB%2B3kggDCS6M3JBjqkAWlxz%2FVwGJv%2Bl2HsJ9l1hALZ%2BVgYxONac4mH8yYBKdg5GA0MY12UDKV978L%2BT1sVNrg3eTTKUMkMMm9ImnDO8HhXo5OYBs68VOcdE1HKZfQfdKbe9CByNQrI88CAwSoEVHKSwlW9nMXOFY%2B3sKeGyGKL5d1QpkvomCu1RIG5cY%2Bz5vMFfm21CELy%2F36uLAXvxd8YR7xJH%2FjRH2dF5anvJywhs1zK&X-Amz-Signature=5fa38ee1b6ef6bc37ef1eb2e4f5b1982766530181fcdf5bdbfa237601f7610e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

