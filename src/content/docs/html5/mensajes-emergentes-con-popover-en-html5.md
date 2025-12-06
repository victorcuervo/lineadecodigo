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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIBAOCNA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC2aB7Aeb1Py%2FLm7%2FQIkZkYnDZrpdTIQVbsUtMJJ4x7AiAAl3cjpe3OW7Sz%2Bka9a0gouLsePFiHQZ%2Bwa9g8H0R4YiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FwlYRJ%2BLOdxWuliKtwDx%2FDttWWq%2Fdjv9EQHx9U77wCOtlvKGp7qnCj09qFS%2F5dHB23tlg%2FtJiwpkqEnz0sXIx0CinurhXnn4QMS1ZUrnrqOhSksnGBY19yndEHKnvb%2F4ZPbpQ%2BAQlTBJYQRuUOXexqBg%2FBCPagNpkTf2jHAJolIj8kXK3gzPEiQIWuO4JaHPEkJq%2Bzk5nuFw7loc8735l3E8FSCgmDY6VMzFQyL%2BiDe6z8dlLhaRf29Jpd4HGbukN1Y%2FjVCH5NUQXCT53a5qsZKNl4tEZkHCodzUhBBpYGS6a4s3bYkf5NLE%2BuQRTYwPp2QqXYdQOFXNqw%2Fp6mrHNuWBaazNUgKHTlcbQY1icytVvNbeLWemV%2B2lqjsXkX%2FZk6O41sTfEsFvco0Rcis1tBORJM8zmm8smn2JepRTcXHS9fY2Lzpx4wyE6wJSEBriRLRdSRMliskV5mT4yXbqe3TmVq9i6IlD0ghVZREv3IKahZtnm9voQ6U1boOSWeLHiwK%2BSUJudqs%2BJsCExxhzvDeen5cyGIa%2FZhU98G4d9iBeuD8vcmRGNqKIHJUC4GaUSLvcj6AM65pQJTJHIGGOvPpCVAj%2Bd%2BkWMppSruVORne5xCTku%2FVLYGWlulICumdvY0AEdIMkD5W1bMwhv3SyQY6pgHvs9TSs2%2FtIqu9B%2FUrlGKhFiRHeHrkYHMQ7IljoFteVlmHoiG%2BsK70S3LLHnpzf%2BYiVZUABJsc62e7b4exrJHyaOFj%2BFZ5gyH36pZOwzUB%2FQcu%2FLH85C3JoDQWXyVUF%2BX6x9i79%2BAyI7iVkGOPjsW3B%2F5CBaaZfyP1mkgflDIhwOdA1Bpn6YKFwj4lq%2FS3uwT9u8A38v1BulCA3oiG3gIwzC11Ic8J&X-Amz-Signature=f44dae856888df0d8a41c48d365431eebea70502665f9342377593772b473265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAFSLL4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC6ycPRUehot9Wh6JU1eQqvvNMV0AzTGrEZeWv04HiFAiBcNDx8af%2Bez7LQrro%2FfbfM6mue1K3hIlosWKLyEVM5ISqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQZX3Gvw4PskiScgqKtwDSz%2FUgFr4zTV2qkm%2BOR0wlsvr%2BFQYmPJlHYzkS7rvHKdT6CsHOCNSV4IHvWc6%2FaROaASctxsC2wdRpA%2Bt6v%2FQYt%2BrGl8dk5WpE7mEtIkVlOBD1ja%2BGVz%2FWZPoDdMCXhEz9Kh%2B3Lp5H15z0B0K5r6g27%2BjyohZqv5F%2BOqqF%2F%2BSpLQ6%2B30YbWBe5Oluq0e99lGfid4UKlIsZ%2Fi17MNHWvuao08qA07S09B8RSMurYq82WdXxAYjOMu5BkL%2FPKEGZWW0%2Fxauekm27oq4fLE30ys%2BaLownevDw2yYBiC5YOrDRRqfQ%2FMjDK%2Bj4CCVqndva4kKAplT88kvvdvKadV9vvR862P4fE8lyV81%2FtOlVQSA24lg8bROJgS9Kw3aqo5QbEHU82xCDSIxj1DjdybAp%2FEcFQNA9uMhC8p88yeeUH6mJseoGNPAQyvvtmziNW02i%2B8fvd2AI6oX3gz6fe4gpY3XSznLE%2FYAXnNqEbdY5d7aPTFR%2B4Hg%2BVdPjES3X48Na7dCh2NBADWzKShrOLgN3VMRzjxwPT%2BLYLGVts9mijhB3Fc3a72LR2syxdOqUjwDayy7wSqQ8k9MLRQhMhlHx6Ok4NRc3vLZLm8gp4WI%2FNVvu1NJtJFWJp1foBEkVyYwov3SyQY6pgHlpX1hSfCCrstbTpwsRThc%2BT0PkL8aofLkE3e%2FSKBrdOVEIx47VJiXskEMLhF90MMvzko%2FSnPWHxQSopuCfeW36HBAKPZqTpdVFnI7kkA4%2BGo%2BsG1f2AA0bG8tNQRfyma7ixXE5QuNHuGnLzt84wz0wZdaSr%2FJxuzplP7DojLXyzqjJA5MyAuOQpBo3Wq7FxPE%2F4DbknRigaDHRKhQ2jc87wFp3a5m&X-Amz-Signature=b9c2685ac7d06b9f03c5487a028221d1f337634ea7d877e924488a7f9d7be664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

