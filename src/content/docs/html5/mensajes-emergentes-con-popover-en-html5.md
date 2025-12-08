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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624J3QMN3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErMAPY05A5XM1btfSfJOgXptc%2ByVxCV%2FqjVM%2FIH8EmYAiEAhY9k9brjSxfl2QSgMAR1Uf1pWm0Xi2cKKq2xpAMdXtMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFanNtqYbyzIxEltircA6fNqVjN1acmllsucueQZ5UpUApSjfpI6KhWKMHsl7Z3XOTBv0nR0xUmYBWxLV9SD1WJOnZZ53g4u5Y2pjI9KHWLAeIU%2Bp%2FC84PY0u%2BzZ9sDMWnfzV%2Fg7BpFtFgTEhXMLzlrXGyD3zONJ63cZNjVCcxelxbK11Mf5SPkoDPiNydKG%2Be%2Bo%2BvQbRnwl2mdiAE%2FR9vpbrtwFg93CvyA3K2QXAuQknKHMgQ%2BoeXJ1bdfTGCYmXoNYlXmYewE4WvFSmFKVOYZ4nUITEun5FZWbM39%2FdsCoC1alOCYsNnfNgzWzWlcq4HZIZrtlo28IQ4n4o2L2LQ0L4tYpuc6u4KAstcWq5JLvbhXMsVerWuxApmb6sxKyxWtVG1XLppPqTne0NPaom4MMgdtEk1FWNkuvGT86RmtiKS6GShw7E89CkMAGVHDOCnp4iilxc5HUs%2BacrlOqeh4sYIK0KAFJlsg%2FAt3hFDf3OhXKuVlS1RKoI2AqDAHeAt2iPoyhsARlblz01csTcVFWuEKh%2FXG1VBzhLwGx77Fui5dLo9lKyYr20qwcKK2JXEooHOL9%2FDNkIAVJ1%2FvkDKUV8yzuDr0FHuCBbLXGiHlqwQRgyf8V8LYc0KVpPbXwaAjBJsWrYzY9k03MIjQ2ckGOqUB1tgDeUJpy3pLAppAT5OO%2Bn6JXQdu2UlyynG%2B6BVjq6UerHI4CpofIyEF0dFsIC%2F7J5hgzR2svUpRDkbvZ%2BR5BiAeZTOr8rovwuBe%2BoTDI6IJEkMAEeoAH17G5T7sEN4Uc0cGmqX1nHbngpzFJjgnhNRCaWsQ65mDKBg4Cs3hMk9ZuQbHAPIkx8yh9mSW6H5aH55whaDjtGmjudd2MwA%2FEYl%2BSa%2Bk&X-Amz-Signature=4617f0a93b11a83abe07853d5b69d3274563bb14219fba48451d68d728a64e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBG5WZTH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdQn85bflsIvff3%2F2%2FSuVoN%2Fj%2FPxT%2BoFSuWZ8RpqLpygIhAL2xbgr%2Bvcmi1xlmJ1TuJc7kgFNA3cw5Ct0KukylhgVOKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJAkx1dcZZHlDhCg8q3ANy5JCIHWEk1daZgdhlrCq0%2BrMyNrJ%2FerKmGcCk5pS3K%2FowtTmYaO8ax91D7HWLJ4%2BlV7J2N9yRf8I9jwW8hgB64O0jBTPbI137DPC6de%2BMj%2BOYrzi1lLjIi6CUEwh%2BvSYgmRyNuNXca9qKoGuiEdWmo49UFhiZgp0TxtSTNZQ4Zg9xidOk28G%2FmF7Ve40CCa5%2Fn4eUxAXjZayAb%2FSO%2B%2FHFic79OKw7buaydsijA%2F%2BHDQJofLKNoypfxK4ULQDHa1oDAI%2FaDoQ3Pj7O2WI0wJRF90iOUTB5yPNv5NF2QteGC9iCv9caor9%2FONrRXqvj9SBiCrbppQqioCzHDSIsXZvLVBUzWLFzy%2F0fHJw1Sf9%2BLpkt9O4eYp9oFCQ2XNd%2B1Oe%2Bmfu4kXF%2B0dn0nQZ%2BEn9nU7BntUprU2qJrpV4TQ5%2BQRO3FTDk4kVZ9rNk7lG%2FvxGp9eT%2BszFeIkaWTICj1EWISWwDsJ4Oeco7al9VaoKuN1rujMQgmuDda1Eo%2Fd5L1PirYdldptRK874DoTpUUmIGifvw5lwt3xKXO%2B1KtWdp9Adse8T7DNERKKjDGxlHC%2FsAYM0FG4vQAMK%2FuUWIJfNkqNKJqsYVNVxW0saEUbQNvA35WoKg7bjiHXt4WTCT0NnJBjqkASykHk8wxRsHVyyymLQGDu%2BhIlQb5h%2BuUQFhjOgXD0kfHx48tK5l5TPobttkLasiJE6DAESTPy9%2Fm%2BRntVahvk9LpiPwbYI6gjphVdeOT213cjcdF3BZNpXBi2zlFTJLhgJVseN%2B3g57yW4EfluxVpFnY%2BjpU4bH38K%2FAl1EJZAY35GWJT7TIBBjGrupEH1J9FfMe0InNhytq0BMZx2AWF3AdaB%2F&X-Amz-Signature=478e5dd92346f9354b77019a61c6bac4cd84f2938dbfa5fd77b6dddab80d5ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

