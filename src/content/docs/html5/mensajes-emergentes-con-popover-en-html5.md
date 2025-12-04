---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3Y6MA5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDsr7rWL6oC1T4sVCbWcTSEvl3PjJY5xxDiarczPEFjSQIgRNQj3GhLDrs%2BaaHDGDLPxRgesz3cKYGqdBbcOiMDCdoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAIanFl4AfUFOw7FoCrcAyz0KaD%2F0JeOsRgL%2FB2WxTDi2yXm7eCuwg%2BlF4UumBDiSMQIHkO3vEzZJyH6%2FdL5j5lOEUlhqWS5b7Io39pyshW%2BJsbrXPpaM%2BW%2FZ1Sva76B4UL3Uc4g3WoG1FaAa8pZzeGZp8oY2BG4ar0j%2FO%2BmKL13gSOsf0v08SGhNYjMoZYzS5%2Fz%2F1v6pwTZ9qjWJVano7Yq5Sgn4m3DaBcx2HcejQh2JOBmhbDoVTF8tCrLnL99%2FEQgxcTs%2F4fyWnVadoBVpX%2BdDhb5CHYtsxxVrBDi%2B%2BoCDIGtI4gBJQdejx8Xp7yoJ4%2Bo5FPcbizy9WKEKyB92gvYc%2B3Uq40338fMxhyFkEQjci5nv861cAybUoe2lfU%2BNOIOIpuJF8dTUhyaTBjOvXYO9olq2B2Kt7GakWWtrmJBxEfs0nk0HghOQI03CGJMlttQ9RzGPRl85MIkYUba14%2FHQbzAPADCPDoG994kne2OYXIf0s%2BYhRDQ%2BTnb2A%2FIs%2FNZT9l7mZJqvIF0PuHqUpaSbeyp%2FpO0HXqWrS15Db4k3hrMbrW8SMMTlPSwchYpVPVJj%2FP099UqJDYWb8iJ4kdioD5FfswtIqHqeI%2Bn8p37jVBudOIFDFYy8ZFDYtovp3u7qMpCzzo5GZznMOnyw8kGOqUBcPhCk%2FsIzb6auDVI74%2BVykR74ovQp9ruaP9ElykeAfLTQ8v4u8fb84WVQEFlloKXFT6jcrxjUVMp82y1ukP%2BcvLDoHOZgGUm9MuggxWB6GwZv1tAjveyGUV2bSdR5Mnddi6wKogxB79WaPFTkH6%2F5Th0teABv%2FjF8bTJ8V%2BUIdPb2vn0Y9QoZOzakyomJf%2BbQjvLz6F4E1SscZfgLunoux8deOBP&X-Amz-Signature=c9e6a7d10be884c6bbb920682d9ed194a85c56e2430fc230bca5ed643452e0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DYOBRX3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCmy%2F0xpbRh%2FkFFefzMyNYznu0UrcG0rrlYh03731zG0AIhAKnf0USvdNz1FjZICbs0Vayb3%2B%2BVD9MN%2F8TzCW8%2B0BUUKv8DCDwQABoMNjM3NDIzMTgzODA1IgxrSVsUfd8b9OSffHcq3ANuRo9FeLXXfWJksRJ4rzfCqap9ZVbZBxxfOwYsVzF0IUe8kfBoQqI2uQW6rqtuGdgaQsKx3BJfK5VL7COeA2aJV%2FM0D72n78SRwAgkldQyW6UsyTF00j%2BgILnOiDsZkIrfpWZ4NoZHE38LOoBFds6CKDFMxsl3GdHuOBU5Iku58QmIqtlrtZ2agd5YoGF7AKJ%2FYPmfKXlALIqSPYLCx17f97%2FRTaQiPfqCcx2ukbp06stvCVNGlZTY2jtnlQheUOGgdoOxvPjtMFbH6B5Sg6GA4xm3RkrNqcWxH8xzdzBm3wdwFpPYWeNjdyFgYQlFxftwub5wl3LPDcrdrGo9xOnyzBiq8mJSMoix6Zgt7iaes2zhTzZzKECzohBCR%2BaSWkNVIXRRhXWZXVDvxcUljfv3uOq3FMpwDudss6ugp4YAX3aNZ66HMD1Db1MDvhAM1%2FxbxUIM1koN9NVPUyoD94x1%2BIeky0kp48y3bcb5fBIa5OYyVc6tuzd7F%2BFND3p1sDhP46kWsnxUXAVg6jWTSZ45C0AvwIS9%2Ba1NSjikUElD2gTCauSzBgm6GijlyT911S9Pk13OrYfB3%2B8RIv8YqyM2EUk5Ru%2BQOffx6xbcrrpfEInF3t3cabadiZSEwDDX88PJBjqkAVX6gUPF7ASV9U6TatHgqUkWWDDkGUnzjAFHfoHsiLmppKG8Y2Vec%2BR7zWefJKMToxWJ5IylIFHtvckL7agynFssyoWL%2BNQRi2QU5sv48Ai1WHyjJGDAwebbly8o7lEPQlbnsbi%2Fei5EybIZP1qN2VeYsk9e7LQWMU6c4zH23GHMthzzp49rYTrN3ojhBxQCnEEpLw201QRfRSj3vIzppZEq5syb&X-Amz-Signature=f920767a0ae4f17d8d5dfd1388c1a4384cb8e48f579a973030474b8d9816de5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

