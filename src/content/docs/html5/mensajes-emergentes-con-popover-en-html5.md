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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOTIKK7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEiOhUrgesLyHK%2FPxsTybJ56eNmxSmIe%2F%2B02SlgNocGYAiEAlOkuFvVbdic0nKe99oTZk4xnEQKQJkhvgO%2BreT7FCMsq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAot0rv84PaCx%2Bjo0SrcA0oCGPyOwpKU%2Bv2FnDB4vyu6haG5NXM4B%2F17a%2FFjxSmkLvdG4kMkegbgkZtxUADami%2B8onAEZmlu%2FXDnmdGf8s1xVaXwC67e%2BdXpDBi86rwbXnII799UGVNuNSmdmp8dO5kFfkWMwN6%2FTdxebt1sesndrpzAraSy8aVBzcE%2Btv0JkAO%2BlJ9eBoQFRqQoYTmG0D%2FVHsZmHRRXRsuGiVPvQUcWTJ89pFUc4AtlAQy%2BEHGAe3GmTYvpcz%2FAgmodeERC6O5cbwt0jqbJn4rI1qaO4p6tjHLZZ8ftlwEb%2BqTk9gIXyprD%2BQwTj%2BusivQ2G1O%2BrSLTLgvNLxDGMhdRrCodbFTOBRCRwFeL4ruIqIeu8tCzzKhokM0wlDyHALD4rN3gi%2BZhQaoxAq0nQg%2BenSW6zDH3O%2BF6I4fEd4Pn66v8Ysetw5VSj9BSY1I%2BiWTvoufjpCX8jcQlp0pSOnoYhW%2BLo3o8HxgYjdz7Rnu%2FdgomjEvPtvQ0T0OUv9sCWH08eN9lAp%2Fijcd3fXK3mLDXsl8kmK%2BVgiu71ZQkonrQv3uAuLutfKMuOcx36vHbtSAKaT%2F%2FjmZWNbe8B4Z7DQkhxRPOQGew8EC07iWkLIu%2FmC7JRoy0A1HhzsmUGHOTBG6QMITKxMkGOqUBqN3Y09WL7FE2gaBDOrGDd2Uz14%2Ff1f3gMaGVq6CyLwSACTkBUhgMyn8q%2FRgoRNWZnIl3c5YJ7Ik5hMP9JDg0BXCh7QqX2xNb55rOx1wvejKuTqgCHz%2FJvOAeMcSLFMYKvAOVreTGNTGqV%2BDaBFB7xOppqB3tALK1nL8xRc%2BpUNrY8s%2BCl843td9%2BsL%2BgxBOFS7sh%2BcKMNsuvOwbQA1cBtEYOz0vL&X-Amz-Signature=c3834d94243053845b0f2a4bd0468cecb511e66aec70407c6c61c892ac374b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGYLGO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIF3XamuU8g9yLRWN5CwqWI0kZOIGDl%2FAiT4%2F1OO%2B2Xh%2BAiEAoXXk6Zxky4GuUf7CpkalReKcficShgzQn%2BT6j4LMS3Mq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNoyllS6dPvB3z2POyrcA3JK5yW8JruiD6I7uBBA1CubzBrKOUAb3ycEi44z34dHaidI3JcXHioZTeWuVGVbZ0J6Et4QA9TRCUOK%2F9mUMbByyLSCANF2TEtKCUFQrdz%2FHOkYKkdRYjz4CSoqJejxfpvm3ckwkKhZrqqmlj%2BVZR0qZ686ey29tvaQg2VHp4LHbGLMUdp2%2B6HZG3EGgh%2Bl7xdM%2BDj2G1QL71MNKasqoIkpzA%2B3feqqs33eFTS51JP%2FQPAHqxq4rhxCOx3d51g8gsW1hMDeOZCYQUVEWr5CHpin%2BJtaCmYtwNX5%2B5mxGZtanm75ckfN%2FswS3lbO8wW8YL%2FWgiJTm%2BAs8buZw2mUmAYrmCrjhhoH8JExAiIhl4qqn6Oxkp9eNW7f5jZXAhU4pzHRFWgoWeqpXRoWo%2Ffv0MzMxzuUnCFPGWskMAANsS%2BHER9X02ncZt3CbIlPwqmvCMZZRur59Xxe4AbMApdgzo%2FvIKA0X9ef8i7jAWNORpOdhyoV%2BSvv6aRDZWaVKw0TVCey9V6Lh0caENkm%2F231rHh%2Fc7Nm7BKRI1V0RVCZ%2BHZI9h%2Fj9pjkahxI9o9dcHk8uNoyP47zO1TjMjt4moXi4e1lOZKCv9ueI10nqxw3wFq138WzAVgymkOqBs%2B%2FMODMxMkGOqUB3CR38RgS7kdVbnF4hy5pLZheepVKPYJx%2B35fdKDhXJQk8VKro8PzDT6t%2F9EoZ%2BS73nITR1ldMKQ0WlqLvofwgdsywRQHRqJUqMn%2Fki%2B%2BWbJejQ6txqIFHUoADYo9xezQZ1F9sgLannwZYAqPnBxqwZ287QIwGfciOup2LEGPcHRIujwOD9agLxhyleNYjpbAHiXHxeWwDyc43P%2BXJwGZT3sxKxTm&X-Amz-Signature=414b3888e68eaa9a49bb559998edb8a31c27fdc17861edf73cec04b2c8e5c088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

