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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MVEU6V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD2855xzswiOtVPwh04Rjh15TLuG2Vin1QRcizipBO%2FIAIhAL1bkGBcu%2Ff9EEVbShg6rYOI2DUNYI%2BAeZ4hdTmMs0N%2FKv8DCDwQABoMNjM3NDIzMTgzODA1Igx4wwW1ivAkbTOHdqYq3AMeOBWgRewy%2BYeRvg2VRjRdsRDJUxcbzhhsleCMjkZTN8gsY3cXMfctORFI8dPwgwMWNyqd1fjwlr09Uwmz9qtTn%2F9UM48T9p1NkbPaczzdMQyjIDFd9w9LkoxmwKTi4r4wMuSUpU%2FyDuiOvPvosYWDdz7YokmNXJPF8%2BoHvRLUG3E0%2FIw2ePHHSbWigG%2B0r%2Fqir4tAGWGEP%2ByvPn7LgPlTMgQvDlP3Kib6J%2F%2B5dhZmmVhIQjUVzpmXI6ZDps5FjMvUZZosxQ0Y0X1ucBn3Lasvp4Wo%2BdS0YuiAmrurrFtDMI6UMuPMXAc1%2Ff%2BttB86QGTGZyInam5N9MwHko2ISkvd166YvJqrK6wFQjzWda8noedKyTSm6yMELgA1HkrfmWyygIZILDia6%2FwCx6Y4qrZxOLk2am0AaAp4fuNVkPAVbOXvzGqvTp6SmVYjl4svd8MXX1brO6xE0agtpnT3qJZCvH3oxB4xfj8CUIj%2Fun5MO2CNzyuW1FXkKwGGguC2R1ltRnlblV4at0goiT%2BnfsV5iZ1BZGsK4zt6f6HXjv89nEJc9w5fz1%2Fp0dD12iYQyT7q8ah7kVcU1bTowz8SUONCPEGk1TsT0vviMYjD3AUCwenxHK3GeuJqbs2c%2BTDw88PJBjqkAaK2AKTPHBr1Qyr0RVhLLmGjSebYfE0xheiVFYb7QPe81DKk%2BO6P%2BE5rWO0W749KjWyV28GWYb%2BaCw%2FA1l70pvdg6j9AB2NxGAw0dskAomlIPBI5tR%2B8OjdD%2B2cDMqxgnujgnm2FRsrV5bU8cwecvB3tFaTY5Xh0PiNx1Tp%2BCgMbcaFE5k7DLH9bxUTIVfngxJHkB4HkMv0IJ4C5d94F4GxYCXVv&X-Amz-Signature=f7c3ac825f6d2716204d0c8074679c22f4965342d78ac0a878c512eed8e9363e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3WZFLH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCyudgUb57efQ2dhJEqvNpwkZ0rlwKVoV4145wUpiDEywIgaPqnB%2FHlWrbhNK6fEahHl97L9QJo0mbmLlRcgsOXTE0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDDzOGwWrbJ3nWGQNzCrcA2ap2QsM9sXDDVIW5%2BZn80D0bQWZs1JByf0IGrONDIVAtlIkvsWnBUiS91K3jFWDwOLNaPFSd5M2rij2u1qa82j6drQRmqL9ECoSOmid68R%2FcRnGh%2BXkV%2BTS6dTi4spgG7Jue9T0HrbSIP6Hi86ENyutPeZsxZN5%2FzVhb%2Bl7BtKEz6feixTcdEYcj5oMtTGNsLqzOhZ0h61B2WxYZ0vEIGn76k8RV3j3RibUi6FgXVk0KFaUiw50WbnQNJkD3a6LE3H%2F70s4uKNp7aOUV%2Bs5zg%2F%2BnLGvai1jbxL44Pzy%2B9xHV2m3x9FB0dwfkKwV0EyZ54yGzvdzwzn6EziyuIRuglYQ6GjFENVS1L8r8s7jgBR0oNr9nny462%2FlZt0a%2Bh17atdgFrTKlszrevt0Ihir%2Bv6bHXerzfBBqEDgeJqTGlXTMGs%2FJWvuuJ4NdG7fDDZYhXNeFp%2FnrrxjNWIn%2FFCWY%2FAR6kdF8EOGjuIbc%2FcZV1DH2fxR4m5nxlxLb8LRman78XHJ6FaVuFGtus9WhW76V%2FOmZbCayV1qHM9celU53Lkgym7ZnOzbFumbc32skmbShBoEmJczNDp8rslD3Uxc%2Bfefn87QkpAztDUBWi3SPF%2FXQgvqKdo3MiIm%2F0DMMPHyw8kGOqUBF%2FGVCZtQ%2FDUAAJ%2BWcyZB7bqWDvT0EE%2BhCTQgCqHhkKym8cORQ%2BvDRG2wLvdoaKFWUXUSYGj7OZ3ivZpR4PlJnqcq%2BJbz8YsW3hC3DjPYfxSpiNWIJuC0WsFFkd7Hb4kunTPnkIwLb4pqlyJaFUYOxphRlDhASqcTFyvSHiniG9w57m%2Bw7S6yJMSMuROaGDP%2FlmlVvheJQhyApo5foHtXndRAUg2s&X-Amz-Signature=7d3a7f7d51849e7191f1e97acb9d6297ee266f62f9bb0d4f8e0587a902217580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

