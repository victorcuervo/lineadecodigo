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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHTBTZ3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOpoWZBFuyLcICMBLltAexAmxATSWR5%2FGO85BDesF%2BgwIhALaE9scHlpvIViDyg8pY6CMvJYUdfT8RCb3mZSILS39aKv8DCGgQABoMNjM3NDIzMTgzODA1IgzcF%2FFwXwFM8PGinCgq3APPsug%2FDdbh3maIo3p4y%2F2%2FEGSjLdgugZ54Ef0R7nzIP8MV6PqKIxhsP6m2szml%2F23CM22Dh%2FA7VW23i32b9wHM13EO66opPhF9patriLZho%2FAY5ac9jGulgoutbDFokmNhEet1cU8aW1cF%2Be0jZ7Dx3SGBCS1Js31Qy6681gQYKxM%2BuHj0ZMPg7BJrHFZaBpChOTH5w2o4HnOou7o5HgqhlTyOFIZf2ythL8MQpnM4fBB9sKtsNeEd9BYlXO0qV7cx2rOMP0TSVN%2BhqdX%2FJ2%2BSOnXPWV7AI4kLWPXiak%2FIQ96xqHSv8m7vknNYv8y%2FuLTlheTfsk%2B0HNhafS1X6gyLf1u752i%2Fu8TDNU4JDJ0GJKm3pJjH5XS1xhkljnIa5japVpgeQqeIUxBFHOjoinChGI6E85x4ai9zJvE%2Fh7RiOZkalrZUzr6zAMw5GNbl42ql9nUI3d8sm7VvEPOIqy%2BiGzmxo2Sg4AnPFCkrKQDknXZUy2jOhO7lqTf6AWXc58I20T8Eqv%2FjWTJRSlQ7hTsSb5jsuoTO0zdYL0MyuS6ygEyldqi6KNbqaBCQyWgWBbk3Lyzr9dIMxmdJXmFLEMDxK8a8hjIQ%2FEnl7xn6V%2BmjoR3vGOtjAIjINDLr6jCexs3JBjqkAfSyteMrFmji29fajUsx%2BowudSdmUPlllCkGcJRwq4umpCHOi6Fez9YthBT%2BciVsOWMIB529HUhePFyqlG8fA3W4V%2F7JsiZD9WScow7sKlheXGgQXrynVyKUKz8qHYPXKC55UAKv5mmgvP4X3dDsN%2FkijVnfMNzaUb6qCntbzytxw7B3%2BdvgeLDDYi5OYo53SZwrevQLofdUUyjC2u4UmkJkiQEw&X-Amz-Signature=a75cc9e3cb30ff7cc6fc8b677a84c0d142b784c6a5135b22d8b7d457122eea7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBXXDZC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGgCPkjYhgtH9t4WGo%2BiXoSwlZ7AtJk8Xm5NfsXlEAtAIhALuKMjXBs2LkRK8aSumS36k7HyrD1i8ZHQm7tn0L%2FNtiKv8DCGgQABoMNjM3NDIzMTgzODA1IgxT3deH4x0nrKb5V3kq3AM1DxOJr1OB0xVx9qyX8R6CCrz8SIrPUr95yCqZ2ly4wU2C41UoGBuW8DdK1AG63%2BrPOkYHUu7lDOpX5wZCngrEdI2xVKgHHhUXJNn5jfxG%2F4UdiRQ%2BCvDeWV7w4fZ2eMdHFK7fe%2FlBI2RdSjRveXwKU6M6%2FeEhuf1h%2BArKMGp6qMjjTvRtdZsGn%2FCxGjCCK2yt6Aj2pJxWUiEB6MffxlqRh%2FslHu6BhhJeufrAnecWmOXju%2BkEib0VoMzO8NTvYjsDPYm8cr1iHIhCBe3BGL00226hQ9eOi1QJZCiJzbdA5p8hE4JGXEiNdRrWAQ%2Fbo3g0lRsVXFE%2B26eww3msU6l%2FHgHj131ewwLX7J3Gt0Cv%2FAmbC5YhB9ywOLcKy4PqUhj%2FZiUfzkg8RlxVDBvEnxNpU3NjlwnXr7MGWx9AUMnO7p4gwKMyjw8J58CmHvSKrEZKJld9y6VI37R%2BwzWNYW%2F%2FScW5NKXjeiTpnmSiKOJUjb%2BSi798tl6RH%2B03RVVG9ckvFsOzs0cZi%2FXWguH0qiFResqjhGDBdCtLNISrTjBiKh%2BNIUncVl8HarS%2FWZj3QKuKGglSgK%2BzXJqydyesCE3sNDjCmpZROpZzfts%2FmF262H2%2B0%2FSXqhLkgywqZjC%2Bxs3JBjqkAeF8qKycf2tR0k0fQGkYghqM4PNU3JgiHThJj%2BWLorPSQe%2Fjtko2FwPb191jNcdBtTjt2G57zqIjNcIxh6nzqgMiE2xwblVFqtgqsEUAEUR7lCCvUA%2Fx24zAVBAmN3ptMtULDYkhZZ9qsm6z9dkZLy5Jb7B5CZidTRMZfZKX0Wc8y8vYO6tbthGW%2BRHpMsiFpGw85XC3uNAGrvNZ6U4rQZRMzgMM&X-Amz-Signature=86276b3a1476ae80230607a46830b0ed3c3e256eaae0c3fbcbdf056d4a89463a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

