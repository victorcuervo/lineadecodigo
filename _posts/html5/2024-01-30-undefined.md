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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637UERSR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBHZsQng%2BpGBPHbIpMAl2CzpgGmjCEBfVALV7TlBuW3JAiEAhh0YWqenoF4uQRNFmUKKMxIAgkbDeKwSzbX6aoa5f2Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGJulHTABVbPny4zwCrcA97WvLZUyXncRdlkZbEjQwia2xY7OxJsL4pcS2an6pTWX1SV3BupYsWm3PadImMKaZeeUpWenFjQN%2FcregbCsb7KlNG7KQMTmdnbNebx93rCZywrikgIXn7pTDL48WWMBa9XNujmo%2FDFYzgyrVCp9KjeNgfuoPG9w5gjK4srFpJ8CoSiOKBhDljiIq6TFSH5vXbkQvBG28eTN67Eez7uKaGgubK9cUjB5j7VTliFwc%2FuD0Ds8RTnoGF7pSvg0dG5VWlpG%2FjeaFdk3TWZn%2FdUNrygU868J0SqLsg%2BY1wnjTWYhJe2HungoShQqZRqvD0qvwsD0EcPPlzJ6nSQU%2BJ%2B9WbXeMG%2B8wPyLXBLyraoLY%2FHoR2bq3mDmPePNiJQGCL8i2YoVq6%2BbJhGcOu4bwZzANBgX4RRleXxRJCKc%2BBKMmOHxk1PYgVEwE4pfhd8%2BZlsMEEIfekni9TI9e1W6rQFFv5y03h%2BTT54%2FFT50CSh9bYCEW3ljjEVWqUX9gQIDNM9tpK2mxHYYm%2BnpwbewdNd%2BEbHsC%2BGkx6qDUX79JWUfZgt2CrpkIs9V5%2BgCh26qAF%2BLft6bp6nlyIcIgjGmXkc2L2SvUxT4TJy5iYOOcxNNBFz9scQa4YV9WnvlYTAMIubv8kGOqUB9d5c0I2SUdzs9PJtv2KwNfoq%2FCoD7%2BrLds3dFGriHrWdM%2Fb6yGDjEIMPSTR87ybK5T1SsU%2FThCb4p99O9nVJa6U0Io2hMdYoxfHZM0t7ptuURrZb7sd6fPQZth2fV%2Frp8%2B%2BODyRKgwWYTvMCX3L3FYvfBuLUjBotVbpwMUuwlEh8pOKJA9sKhc%2BhBZ%2Bt3T0sndQq7iiPurSxCxiv3dpaMXfvkpuf&X-Amz-Signature=b5557a36692fa23bcc572d2ef28e6379cdf1e3388c6bde2f53f5385f6fbec0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYQUPVOQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDZ6m9FYcuupSBSj%2BEIocFAZ5stEcZVaj3jfMguKXbWZAIhAPQnUYSQBsjKUodRT4BZNnd9gq43ffVWUNidxRnpsfmzKv8DCCcQABoMNjM3NDIzMTgzODA1IgzcY3jP8gvrsjyjnbIq3AOgJdyhODzknSBxllQ%2FZcnLST0wlMfqWsoJqstEjnh895pI2RWJb8jJWqCrWUYy5GWSjbyBKF1H%2FIliBxmja%2FivOB7uUUKelP7xCrJl5BFAHbA973Pb8xeVpoYPJsOQTt663mDBGqVkccWQrF5JEKuwMFhhfwKyFnBv65Z1EWDFQ3J8rpvFaZNxHJ3JQAfd7uQx1Y9KYzsNgxcTwjAdxRBDmyZ914QLA84axj%2FCrf5a%2Fci9E8vv5C2LLJLMlfl50RRummpK01gf5Bb9CZ1ws8z%2FUrI8mk%2BvS7NKKBsiGhUvAmaLXdzEwLS%2BAa1gY14N0paVrcCSjM1jUrxTNSn59gHd6WhrTClj70DkgYHP1GEE%2F6ov8aS1E9yHTifxsWlsG7BSlzVnJ3vC8A2iNNocRm5jo%2BWhu%2BFOfKEV3QXrJdyOxSJUeCCllVedeAKAbxwX1A3zs%2FmBXU2hXjpRioECvcq98HhK6zop3l1eHqj9wjF4ERu4RzORORRd2PVxgzMBBAIYZci%2FYC5zyVNia9ciYKWKuJme5ZRvq0ODrvyGVfWseaKzQwSGh0KlhETUc5y3M75ggI%2F6gtD5jvLCyvoDVy7ftTDVAv9XByQVhpWAYdN%2F0%2B4OCPmmK7DyPxurMDDmmr%2FJBjqkAbrOOTwuXyhpOxur2Y%2FbmKb59l9qFwO%2BNroIQKTH5Hh9xiH185BX3H%2FPBIUo%2Fl7B1zix2jqzpIpB35IW9zr3Mn27o2XvHa1BPyso%2FpgMBladB5JpW4EgjyNVDgjju9JWTkGvdgMV%2BqgQjs64Pm%2F0ZlN0Ih8DvJz9PfJU2qdC4qMaT3LjLkhq%2B4Pp6%2FVG%2BQ31TGd7WDhXeHvjXW6xaKYCrBrehECt&X-Amz-Signature=dff55dc24b6310a6841787b7d7e47c2336a74632eebc11eff838203829cfbcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

