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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSH3KIA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2QCHmwN2WNVT%2FRZj7yXzpn9zKndBgXik4R%2BNvyyhVgIhAI1MF83oa3jC8ckpB2BUzdl9IIb9SAidk2R2i1WvPH%2BZKv8DCHEQABoMNjM3NDIzMTgzODA1IgwBgk%2FfMnb%2Fv9USbXIq3AOkGRS%2FBOda0XGzHJ2LLIvO04Mpru8CElV7OKp%2Bo9BSHtAdreRIawQTtZu77cs3KPb%2BTpSS5LU%2BKqlPQuHfyNw4659%2F%2FlpTBgyXsa%2BFqZnrYQVV1OVRp49xoCu1Eug5OzcAbMj1cB4uBT0SUU8QwFG0zqjifpt%2Ffs9ZrOmSH6bvPu4bIsngSrINRXiNGZy7XuwhtGiTHoCnzR%2FBgCLgf%2F1x8%2BxBiXdZb44EMHYDa3dU%2BEmeC4mHUND5w%2BFW%2F0zu8MTD0qSq4Jmg8Ipzk2dpnuaKoVXApJDWaL5drFNPFZi0ztIoBdusmblPQSBCw26igaFZPaeqTlvAkbqhufebbuVVE7Pm6R8EgDkxd4so88CDyKf3GnojHvt9AkjwkjyttI%2BUJHiMqnYlhmzKM3NeFvHJMd1zbJpDqaJAWcW4gNaEyIzr19z0N9kR8gE5KIiIh11GaWhjJS%2FhOOiQtOsZXKmbIi37B6oKqGUQYzWosYD8%2F22KjZmkkDJvzXFlgKq46Jnc8kfBU%2BVd7xAex4byzQFbgAcX4Z7fOBBKLTCejyuR%2BMPFuNI7Vxb2tO5aUbtkrEMW9LEdkHAA9GFwEy%2BmwjE%2BS7KKVE90PHhGB3qvbCSpAK%2F6xLAPM%2B9KSgBy1zCgvM%2FJBjqkAcmlG1%2BKimCF7t86SdFR%2BemQ9Vyoembqy1Ituq8K03XB9LRRBgDWIO4SOoS8E%2BTVZmSNqnh4UMvilUHhEQRktX4WC05U0PgXiCLYeXgXkl7pWzz%2Bedu7pIaJPgtpcBD77Z61ZP8taFJxeKLGiuERw9ypji4lmfNlBW1aotzLaO7OnGYbOchF%2BuBnJ6mgllu9V%2BXD546v95XnaW9s%2BJ4DDp9LUxho&X-Amz-Signature=cdd401b8cf6df5dedbe34e39f7d85fc323450c8cb003a60b65f1d43ad9a8c64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPXXXE2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiuI7m4zRmx4JW%2Bjikeq60qNIluxVsfnw2sVKZtpVy9AiEA5LTcvbnx7ZCTDtVgqVunVrqBXk%2ByWAQJgSpeHjtQ7N4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDQQvw3TD9BkyuF%2BdCrcAx0A7LYEpIGSiLFjDBss8bYXdoAnq7Dqx7xOlx0DIaPOmuYl2nvM8UOY4O2%2FoRQW7vCy08TgeDc37ZSBYtcVCdGFLefwDVd5A3lD7GSa4pqIlHQeN3f2a%2Buto1SWtscjtGcgnP9%2FG%2Bo7VvvGfuwfNgRNy0DPwHDxz25ytRw8dnRPRnMRxiO%2B2D5PZZ0SJm%2B0hvg4tkvgyFI8LlCjDGhSxhzhDV7RtWw9Lr8NwVEyLbzc%2BipEvsIwn3tcuup4LZId5iIG7o%2FSEa0C1EZfbrX61ED%2Bo8%2FsKSbAzQDAewUZjwMbSjrvVwCn9zJU%2B4DRlA9QXedpendhZr%2FspBbrvfGqjeunXn%2Fc%2B%2B%2F1wMApV9QxFUz7zoCEQLZ1mCMI25RUo1YkvtrRjdfv4FCCZIWE4mw4u0aeu2eSFpAgSmXcle9qMEzclSHLHNnOp26RyKsGdjMXd%2B2yeojPSNfhfKMy1IPtAHN3SZxcEGTRbnLu1df5CL%2F4hV%2BCWirHOcifYtZf%2FWgO%2BxuaAdc5%2BVTwwQGspA5VxZuYS7uDE1UKQar9LF5co8atEKHlcNUVS%2FMV5cQKEz0iX37SEoSMLJMu9AoAlYm4cGriBd4u%2Fpy6MKrlAjEBWT9yAjZQ7zTJJDczsT4YMOa8z8kGOqUBF5VwrMcF%2FrWldZHrNCLrjNt8erClhbXJaFVlYWvPJ7z5BlBkzI%2Bvm%2BJPa3u3S%2Bg2XA%2BYHzOLJ236z3Y%2F%2BqeJKwS3T%2FC7qiyebk8P4YTiaR8cRWK7bWPqRuPHuHsRsu0q2Sxbgpv%2Bl2ffkUwJI0XB2sOapfs62UAI9h1I%2BVz6MGLXL1qrZkSOY9pR%2BuZFE%2BtjAzgGJ3cU5uW0puafUwhwE1kJH4KR&X-Amz-Signature=8c39dc70283f055205123d75a410dbb6e59a20155820cd7fb9df152a0b22ec01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

