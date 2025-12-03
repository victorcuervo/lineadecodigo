---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SGWWUOQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAyCxK%2BjlyusKkBhgKRgOW6k9WCeKBHV5F4SEqbeWweEAiBYplcK3WJFJq%2FVe8pXeRdJvihKvVi5A5g0HGMpQa9ODCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMCTj60NsQP5aaxG7gKtwDHwsw%2F9uPbfTgwrvbT%2BUV%2F6zgIkb%2FqAwcxmsPxa%2FviLISqhhHjAYDqa2ZJWyAyd%2BEavijxdCaFBGYfYkL0XkSlw6XlxETWAl0cPGrWvY6%2BsL65%2BpUeFHIJpe60QPjgSxNcsHKqPibbfLf9AvUyWuOdWGj2%2FQY6y8L3nPeTNEfvrar79InvfsiltV2Vfdg0Tva5yET55v%2BpCfZLtariYNWTxIlYrNKevYMiqPGZQ8q%2BI4s2w8DuPw%2BYziL6B8V81w2nfCy%2FyuP1mFLx%2BcOXEPWvGYGcg1j2C5OgIU5UCOvJdBzRKE%2BI2J83jqParMrIdLGLHpQvFSUFLoIhyasJ2d6z244v3ST5iQIT5UGY5t9V1H4qfnZKilKWN3s9Ge29Amiqf0e2fS6sCcl6Q4%2F5w0VRJBSVcsLS97E1oY3q4oqrHVjWK9lOMYLsvcSjQUwWrRDRjlHLcFsWGTXP5XsTFg7A2MwuNPBlWo52rvpnJ%2BRROAOgPIsAJ4PflTP4d7fMqsr8QHQaEgQPS7iJwlasd4r1Npr9UoLckWGCFvTQWl5pU02PYTRwu4EfJUbf354YclGLtIHTdldHm9xu983UvkzJ6MJvgvk1arqYWwzkcXPfeHmHlePbAtluj91A9MwmPa%2FyQY6pgGkPCrWBQvRHxhBc7UjU%2BImsa4uU6cDq0TP6zkwerZe8pBW6ZYHjh96X2CFSr60TSQVXh1mQHW0k6Z%2BpBtCgX5zjeqAFd2rM5nDLF76uMLdwAbXMWqwwH7nejwDIQKnDff9h%2FkSHp28GrJDxNavleokNL0OU4Bl1bCx%2BSzGo%2B9YL3k3vjEPwvJprSoAXyQchyhnlgDtcUNM18%2BZFQWG6hoWiltfaAvu&X-Amz-Signature=6e91fa003ab15a74c971a64408513a72e6a9685e0287f7e6f01227c5be2a8e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IJS3IN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCbNR8a17lxEVCX0Led8H0D8BkkVQDJFxvvlZmyIKmfDAIhAIJhK6XI%2FHcviXB5jIPIPVWGlk11uBWE%2FOQ8jBBmS581Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwPpvu10CuypPBCyN4q3AN3Q4qCUes4RQm%2Fq3KIqBuITtI52hYTeZvTNRcmVkDexOSEj0dtuzPdTNRrEDwWksTSWvSsCa85K1zRVurA794Qs21J5HKNjwl9C5uzc%2BVnJTQu%2B45%2BbdNUa%2BsqHirB72pMhDfNEkpe%2F8MtwVpUDvRrGOb3ZOwV%2BcCHKYvvhG36m0MIVz0UASyJ%2BBpmfyk8b3z8FwzylVrP0cug1XQO7pAJraV4i4%2BYNthZVRytnzrJgGcmNJINgIRZDijfS0FNm3OhNs0YIL2WiWS2pJev1BopIcyFWpre6xvUdeZrVSU6DTOzorSdFn8rN%2BYShlcezrO4EzYhtaAs6UkVER6ruHdCzHQBp%2FuywerNXjXxBg7M%2Fz5wUdzwrkIlZax4azhZS%2BIrZ6ZqnzYXxTjVySydefaJ3YH1FbuumbQSvfV2llRR%2FgQz0qY4cAr5A%2FusSRcLgZNx4fMdkgEKYpIdfSWG6ynIxiD9D9e7E399yk29KBtOpoAZ5GmDcRbf4o89AhjSNRrYDgLYclHOqJJaxfLdaKpr0FSYPEIfxvYagtXbO8lAMKUb1jFpTyVVHipn%2B%2F81HKa4bpjWV5O6E8uG6lTq5ATrUgGhvbyWvw8eCZ1kSTHEPs%2BFg298EXby2mpkQDDV9b%2FJBjqkAUz2mByd5OCIcqi5QJfogFzixbcv5hAlv1JxFghnvixwTAGBZkaFZyXq%2FjaSZQ8nMCieMUrKhsd8YHoCnaUsB8D3HRMiR5siTzpoZlyWysdUVr4SRKymn%2BmNoun5tZgzfOadbiqB2RX0V81unvx%2ByTouCSz4aolXL4FAFGLWQVJ5V8%2FhCsmc9H%2BgeMuqwoweLkRwi7cKyl0hPAX9o2NtLGcs36So&X-Amz-Signature=2beed1a2d1d14a08309a714beff5be747eed93e162a5ce0aa772929635dedf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

