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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XA2TMDM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIF%2B7jG%2FOB6qmER2ov%2F2iard%2BaqkXcGPI1vcd8hgdKJPCAh9sHk32jDMnKRX1opNfLGmS03KBC81melt4V1rBJ%2BGYKv8DCHUQABoMNjM3NDIzMTgzODA1IgzZKl0%2FcE0vAsyD9kgq3AN4y5dJkadMW6j%2B7oS7XCWOfl4dLvLLgCzfpcZhblAuG2qemowS%2FA%2FoZ%2Bg4ciQoVGE05f3mvsT2nWWvB2%2BSkVZUsqVKF%2Fzl3za%2B61k%2FUBPMVW1X9jt7mMHjI5u29FHBn5SiqfLc1F7kvWJnWQjKtLeyBY1hSsyo9IGV2i9SJko1wXMIgu499uFZNvqEJUq4jm%2BwBU%2FnlMNigG4ozYhYC%2Fh9HL19BiZWRpYxQV6zsJNyCwSS%2FjGyfVtfbRgpeWWBEthfZn72W2eHp1hmqMPpFME%2FW9GeUA21ARDL5veGD3Y5HsdU9Di5FBZINmYmkKSgUttmkacVpc1zrwU3pap85NLosG7QNmUU10%2FilW71BxBSwg7B6%2FSH8zq3CfG1dXIdcLPK%2BgvEfTzw5ryq320c5wujoWX85SMosbqOKdzWrpP3B%2BWDG%2Bej5kohFtXFWmjYRwP5ULP%2FfEAwJp%2FJ7%2FQuXoXEJnT1d%2BOusx%2FD4yjRdRAbK00Y6ySeHOgfFR6FyeKdcgEzl%2BaZaN1iKzel%2BiZEzRSsvoYRe9aqW825U%2BYQ4AWiCbdfvOQYM1NwQU0INr2RSa%2F7qAbdloPx%2BoVzmKU8gXqv6K76tMLQMZchOwMvfnf5rgIOYWV1vWhcD8tw7jDsptDJBjqnATm0YYOXykO7U%2F6AhxCcrKcKDdfHjJFA4%2FYV0v3eENe986wUe%2FkRmRs6ofs1gm2jyjHAQ4QF%2FNgstKHlyj%2FViedu8TqVy2FsHmadvdGZJZTFCS4n0xLLduxAgNIOXR7iaxaMzDgDEne9VNxz%2Bnc87ALOiYM2xUaWXumO1fDX3Qj3M%2FsOcSb68gwvPXyzlR%2BjeXjiK26GP497RgRTSvFoZAild3Y9fdP1&X-Amz-Signature=cd08a8178aa157c8a6caa6213e4e11226314092ea0f1d84681288a6486ead508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQXMDYRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKN%2FIbKzmfPbb9%2BFOpoXPuufjrQ0m8%2FTkLxLTIhfceBAiADFXrH0opTLWFXdHNfLcBWDwRXPOcdcy0BYKd8QPbzvyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHaw4k3jwadkSHs4XKtwDwCrqOLE%2FKchmS64x%2FLxyYRdggVq7imOEp7q3VHfpyV6xsCtwZtXo%2FDlE8Xy7cQuIXSFaNbnYehK3eaFisGPdOb3pNJQrsaVPviLUO3W4HdJjH4rWhfn%2FmHgr3dhvT%2FgReBWIrW6z%2BGvUwSovkDuyTEm6maQLSjDdZumLAdh6IBGhfGzmTsWqZA7sxsOWge%2F%2FnOyD6jw%2FWx36JpkqD8XkMGRgydBPezBa9jDEx3CKxKbbpYCsSPUd62HycU3C2JShPncqHQsYj%2FqNHwcBVY6c54MFOxohQFRzQnQ%2BXgakIEIzidQEStk%2FifSNmSC6lrkeiGaHwVr%2BwzeEq%2FL8jVHxCmsjQUFMD6hFKFYi5IQ4Kdw0CoodS1EzqqCvKrXcnjh%2FCWDMvslQXrtD%2FVAsifi6hl7hYXXnaZaGyOeYVJu10K4etdC8fet4o3uJ2%2Fh2G72MuJ5leNBYdT0urkNYvx%2FoBQHVs4lxjIxMsbXmJa1dYd4xqz3XbiywBh0FnhjP2%2FKeETf0sR6fRS29XX1PeStyrMWykaTH0EaP4R6%2BTBcDqdOfeq03oJvaJD0fTBkb3cRsPytpxbp1j7d1y7QxWAiAv3ushBuuTK4JD9Qlt1OXGBL%2Bo3Voa8U%2FHZsJGsYwqKbQyQY6pgHEpD9oQ1Wyu1K3QhwoayJ%2B2As%2BzXvFKwiNmruj8KujSZ3Ak3ASxn4pe3%2BpFBPWNxOuqeapA7Lz8iV13nXwKKBleM%2BpnkLyP498HmlIKKJtLgp%2B8IIZ5m9z2nIpwgtGp3aPC7ABioP0VmWq3R4%2FFIzw2UASKz3gCs%2F4jGMaDeCW2sIslGwF%2BBWCwFkeOALR71p%2BCzbNCxw%2FlgMUUwLR1oPfTCGVGz35&X-Amz-Signature=c5b946ef0293f8ff713fc0cee32f8f1241715ef62a27fe1029c42ff2e89d574c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

