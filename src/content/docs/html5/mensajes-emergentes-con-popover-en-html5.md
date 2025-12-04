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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PQRHH72%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDTq1f4IJdvNODBcop%2BkksC8aZkZVG%2Bb1AA97mTCudlkAIgV7%2BkBaoG9YBkyfn%2FbJLJo%2FdHfjqpfvi0rw1xuHpkv7wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBdRz0EF5AzaAFwyDyrcA9Lp3%2Bx%2BdbXM0X7HTvTnsLSi9wU8SH4P2PmjNX06W3W7nnGiuNLj%2Balmg1KCenS8G%2FjEpEfetjG0u9rJ1bFMPV5qLmXcSsgM%2BgoXZo7eIxu49WBwPNnPI3q7A83aYrM%2FGf1dt58WRMMBrVNZOf3YsXYqLJQRWSWcbosKDStligrcy2dvrf2KGvGqYx6tda24Orn92ga7akaHcFC29TwadbjIp12w4nN%2F2OKPCq2ST8ZyIjN35SKJAeb5nn%2Fd%2FsqXOL%2B3vtjwZ2u%2BtVIVMRxHmBbWyoUSEFyREsFVd9EF154XszcGoHwcO%2B5DVXxrdLwtOlbMyXsQT0zJMDPnYIjClEyAk5KpcxLNHIsnPkkUqz1Ixqit%2FnSzabHhauq%2Bpd5H%2F2BcqeZBfuSgCj3yTQV7BSP9f6zb6ALx19LtLOGHx94CKfUvot%2BW2H%2B7%2Fi5Wch7Q8nksnuQBASWJ4yhHOs%2Fip3UQ61HAsTUcuCOsffaW9S%2Bpqddxrcj%2FXGe9T%2FuRTFsWLxRBab%2FSSsEaeP154VdzdHx9KFYBfWeEkRW%2B%2FCQXan39Ya3g9K22T8IGW%2Ba2NrpYz0AhqgGotMSRhWNEKnbIhKwcK4n%2BzQK885Ae4u6e9gMTaYtvZ1EOnJbOb5XxMPbyw8kGOqUBgdd8kjPTq%2FrZGh%2Fl5sMiXrPqzYPCsasFprDPgD%2FikWdG%2Bt2b4pqGxgqGXT50E6sJUrHgZYVwjgn2fzf4oBD%2BBkPijC%2FAV2zB0lybyvdpseagJT5RA8FJ6kab3iN75zy0NB8CAPoVZKWUpWRVBPZkhVs3MtYs2GgJRRqnbzPsVD8c9IvOpS0gaOLhHDrZMc%2BFq7gSre%2BiaWVX%2Fk%2FJCsRKlggFMjY7&X-Amz-Signature=ab3ab2f76cc37317f5f3ba5b8b3617ea9594b312203674d85cda0fb917e26172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OYCGOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDXiGfGFXj4Qq3PmaEnBPMdNjCpEuScBlev48KZIhHvPAiAx9prV3z4au3dtaTqk96NRcqDdNOWfxF4%2F69L7%2F1p2nir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMy9sBu%2FS98xd1evYsKtwDZQBHjtgqiFkOv7cdDU7ONMTHAK3Jz9SIe%2FWC3R2PgKiJRozx7xPY8aqhgAFGTnW2v7kB0PPoVj6Gyn82CUlwqseWWyXx28HqTjHFLQzx4LjgZ1zPYGZSVHMUt0cs%2FiwggGhaOtwbryS4IVU%2BCmd2fDJZ1LFR8sj%2FSnrNOrJ5B1v9I28qN%2FBjD7v0cd4soAuH3%2BEEX%2Fr3UYRVKw70BhI9jDtPEMhOiW%2BZIlaTIpaDdveOY20XiyodjgiZyt9JF0p7EKNR%2FwLXnqtdXEQ0NRoMw8nAuwAIU02LrT9SdJQD6J6fR5cyG1jbaQp073mhw3mVG1euGxsTe0WYUup7YYi9QR%2B5Vb4tnuYo4P3oU6C4XrcgLYyWne%2F84RZfxnNmCXI%2FoyE1PVAIS5BRJs760ISj%2FR6Lc4F35RpQuHKyhEsAsVvQG6Zhbd7mgfZRXpgv4OEalKbTkZ5Hg%2Fj2A0WjkS%2B0TsHoHTsMcJmVk%2FZx9w2k00%2BN7J12VBTa%2F8QOqhVHhLsYm5qW8dR8410Q5YhsNy%2B7o064eKfDZWgf78jQ8AnnGvykRlbU65bO%2BsQf96jfjHhr77p5wvyJzV47iOJ8h%2BOEEf3SZwLLPmik%2BsKGJa1Iign%2FWmpBRqafyJBzWewwv%2FLDyQY6pgHyQsSeiuVhhH49PUAVEemEGi4lDVaAtUXzwHdPdwBaA4gyCR2UBOy%2FW0kJKQy9Uv5YhKnv1Sra%2BvAgcPFizCToqohU6BJxFAKsaP%2BIXZ810LFBpSxi%2F2PBaSnge1GQsWwYVIomnpOPTWozVXTk0NTMybYpedHqjswVUqfi57N7HlKO1q3EG8YUYQvewP3hEF%2B5jtSp8Yj3%2F2k6u1wXyUPwoHp%2FXj5h&X-Amz-Signature=53c111c7eca9f9da419d8366f169a7e8950d4252213f58d8ac1cf28e7cc39d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

