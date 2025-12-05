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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJZCSHS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5YXTAi42EbN0bzhPG%2FL6rKlIcn9NTA3XbehtIvGXXsAiEAydKB5FFL3VPFFH1N7Phdn3F9KqYhML4fQnFXdBc658kq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDByh%2F2k2ZJw2IdOWPircAwlLHXdOU3ZbRksclVCGkeP4Iwi7z2a2CeMfsFw8b%2FTiysO12mpRXrBZhv6oZsIXMut38Td5rl7rfYB3wn9wgpi26hzQvtJWatZhD3VCJPTqpU0X8X9SyqBXZaW0mqFLsOYPso7FJ9JdmUwqoIdKq08UYbLvysFzT208TjNhRFUsSaT%2FHHb4mfSyu9pGxlF0Xamo7akFS%2F7wT9f8vbtlLJM1h3o%2F2FnUd8Yuz8F31RyMlNyblgUFyWFU1DRqJa%2BVV7ycXjaYugv8DD8vrnmFSRPRR%2BLyEynm2%2FpTSrOAshjbnJNCwFD2fY%2FNxJho8efTW9vbguGBd1EJ3qJw2bvdosrcWFPuk01rD0P5k42oMtnmy3kcB6PWPu1iJT1OvAun9vrZS3xlOsDokhy7Nak285Y5qScga5YbSURcq2ZHM19Ri6BQn78O9Odz4iEZuNpSyN5eTajnAJosjQ9hXumXWrb7y5nZLVwBXz4ITRdEyrQWAp0ivyqgvOmJ0J057qFGKtS1AD5gHfHsV4Z4XWAV7QPW8le3pw%2Bsl92PG423MYzv7mmvVrHFaspWFDqKzM386TJgJN4aESNrhAkgdKBo9lVUkYoFs7J0QjexYqqA1ZhUibTex9iTKb2BanTeMPKMyMkGOqUBE%2FPMyz9NMhmT3X%2FE2oDF2njac5a6JscGxb9Gh2dmrRDgdY5QoZY76hK3gpjDUr2ve9R%2FZ5oRnVLw3yPytCfVyp6nfi8%2BsfNBUNu0BsaxFb05xpOqnCe7esU87jRNzbRjLtrcQwE%2FqHH8FRiG6sOD5cFQ%2Fxq8e%2BgEUquw1dqQOr03Wzury4VZkdnfJasKoXaQhWfrJuO4p9dxGDlCOMPtyLJIKrG%2F&X-Amz-Signature=ced0d10b1fe685778345222887824a103b88dcdc48eed43ce03d2d2fc3e77398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3EOAON%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGhy6mS0ZlyFR3Gb9I7kcIC6Z1HBTenFLA%2BgVTaLvA6gIhALgbYhuyZbQj8O%2FYdB2cOkAc3svEmRjMSiLX8wKjSM4XKv8DCE8QABoMNjM3NDIzMTgzODA1IgwqF7OnYDW%2BDr74AOUq3AN6kks8PuQTlhPMEyKIbWlMfkZEP6Sv4QkqXS%2F4oI%2Ba4nefYydwME651rUAI3V%2FE%2F86LRdM3HPKSYvLytTRw61P1i9coGigozcTAYqT2Vj1ThJrt3dtV8UugwoHDkCfi3s5hu3Yuq3lFm19DS5BWwNi5GPIFXzcMBM3wCOPOFFQdhgj7VqFqgSDmX%2BD5cE0%2FwFU5b%2F6MMvXiP82Uf4WcLCCfZMuXREzeATV99hA9ALHq3q%2FYYq%2FVhNAGQwKTX4eUKnhp9GtZc%2BghfV0ZQq3LYikNO3G9SRp1LmY2ndmiPV9I4pHAnp%2BAtpi%2BzxwudUNUMYzr0DJv%2Bn6PdkTkMyyzt6grIhSPgicq01%2FbMenmcUhoAXRPDGBxt6eKVbD9ftMGdY6wHixB9D79VecseTSxYqf0KCPAyzIPhvUferARHHM4fomfBybPJ4UQR8owq0YXW3wDhCAehisr5CKQrgIhCt1RIM7mrM0bLI1qBn43BGqd4AywXKNWHvMzslOT5NQWT%2Fd%2F90Scsous%2B3iioTewsgCXvtDbmnLI4CAwgv2elgzJCUWA3fHYLywGCek%2FLa9C9RMVeKqlfAgw%2FniGNv6Lne02AlVUjjlYqoJnO6%2B0YYYllQAJdjLBx1ytIdzVjDLjMjJBjqkAYLuhD%2BwxyB0DUc3pixdadFbHRA85ZIwHii5f4hiPLapShntMP2lCF0XzqJ%2FDMVPnxn%2Fo4UdFhxbNOIgIgc6mKMUoo54EbaljeNS9B9CDk1SxDqWP7Bbph%2Fd5qY7rqQXHBCJEi1yMM%2Fw4fyBpKAl8u8KnrK5ahMDyh8jDSODuvDiwNquwmhqTHg09lV6ierLcCzPo5bMNHrfwgPaiLjizXzKcxPr&X-Amz-Signature=9c0b842aaff7d5a221359c3b2276d9c161503ed789b69e8982c5941e4f10d4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

