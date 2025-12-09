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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBV3MU7O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOYDraDvorbsO0GCQkE%2B2S6whnHuEe7VcBrUUbCGbBYQIhAMfABE2aO%2FhPL6duySyDQD7HcafEKrEwYfMW2cZ2WpPMKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1ga9rVaIwl8aWdUq3AOgxANWF1zpYZQaqBD95Q85k0YfgsS4UBAcknFbvw5QK2lXilKMeSEhnbb4mD1q2PARiC4Z7yeqcFTJwDGJCXouCsu5fOGrts%2B52xiZ7uaqBrgfBRYv%2FtgSkwaxevZo%2Fe3n4Ur8QDXruXAg1JLby2xjN5%2F6WLlD4KuHDcgIjsjWhjnk97GohLfUN73%2B3VwyiWesd4B781a%2B9aiT1t0sQiImnQLuefeWrD%2FCY0e7TDzirodlKspnaSEARXW1dplNv%2BljHdGVDKF7Q1OGDnkBXGUAnxXwdAyhCa3W1JDhcWRm8HcrSKAJyt%2BC%2FHTp5vSEl%2FaNOxoSEsQvEdfjyZxglFezzuQ1nZykQ%2B1p87kyXo8PIHVgjEh9Ld5i9uzfPhBGFIqOr0kG284YpS%2FF0zSULiANnKZrAcSolKmoMHp%2FgaIYPlK7J5fpeelGf4KdQqhbLWDAMWnGl3rEdKL8P42e6rd698%2Bt5iYeISapK8nZ4YyuIvfXZEUY0unvM6o9hj4OIocj05ChMidasAkg9WUT6SjBK1YCDH6txtPGZM6NrvqC6TM0ewd7Y7aVmh9XOsu585G7hzYkO2e9cCAHkSy8I5WoxtucOH%2FPmzoUTicde12LXjSEFfflJrWEIpN1QTC5rt7JBjqkATwo3Sr1VsJI0NkiQlefdjqSLoKHtU8f0rDNVwHUe9PHkCss%2BsYhBZilULffBNSDiJyvP5KgWdyYiEh2k%2BBrU7X7yn08z500Uo7z2iKh06VDgru63xIbZ%2FUgmlCerJGkakh%2BrFO83Qr6ENycvE83WIQam1LfJZsXXFF0YmDUAnGGE0i31EJrGjZTVlSU83BKmCU%2FH%2FDa99hKVE22p%2FzxH5evcg0R&X-Amz-Signature=e204e5d75def79add59e091c07b1b98d407a0898b23b0acdfd4ac4d2acd8169f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKK3SWK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHXXxGTv64dq0BBbsck8IvIpwG%2ByDAR9F7qGRuZSx%2FuAiBJXXdQDwaaYm5fk0KTabr6g1ZSyBR%2Bi5Yw0PC6Xq9POiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUmdGEusp1x%2FOKFy7KtwDxYHbKYxZWsGmW5zWNu45D9%2FUP5s0SJ16qh4evkzFiDb8Ozd4orMzH7jbXNmWbt8gDi1nEM52eX1vTOMJenC1LEzVYdSfHSKGfjzW43AD5FIQrXQFtojUkDzMeSq6R9VDK0cHZTQye5%2FSmJ4exCodHj%2BoEWGayEBzUo%2FWUwSZZIApC%2BZiwGsS%2B1yRBoS%2FYnDaZvaR3Vw66iQTYlCCwjqOn1wgg%2B%2FseCm2d6vThW8PORp6HlVGUUzdko1p1itR4Ox57SpLJRZ9FNc%2BOVfw5rU4oYxNbt59jc3kkR%2FB%2BgOrWf%2Bjb1P0pwDVRXTRsLFNmisu%2Br%2Fi0ypO8ygmydyOavmwD0OLNvwm89iB9SSSXYs7b1dREg7QeIeeoOwBtBIIFCMYRGMrMI20PyMKFPpLPVNVpZJoT8690aMXCdMyT4JOdS6LbS%2BEfSY4xLDqoDMnYxy58sKXAzf66d4Yxn%2FOEjTSfs8p0x6Zk%2BOSI2DB3Vgi3aJnf0oNMGxxdIfmlkcN16sSXIeKgEunZPCXm9Z8%2Bh6y2n4B%2Fv%2B5UQz6oqKqHetALf4xl8AGlmgWu3qkLM8jPAMQTGvuM6dKCc91xQxGfPZConDBUm1S%2FJbIyLhrFb%2Fitfk9YueWUIEH%2F5YuSJwwm67eyQY6pgH%2FC%2Fx4faMt9yP5mqnIkTN4ZcNvkeLThXOI%2FU1SpBxqUoWtm%2FJyDOhy9xnIeYPXJavcjBdi9JU3r%2BFTYSx%2FdhYxjedoEyPZ%2Bo4ZooxrcrEal%2BFyb%2BvfwA9%2BuWKlmp3fHYS81MydReDCoTAmIpQB%2FATSgLFQd0JrN2HvqhkS50gPvqWBuA4dH4wselckw9v1fqWSceAmFc0QiWctd6%2F%2BevIGmDAUbxrm&X-Amz-Signature=faef20c9ef8881c70782c43f4593defd666058033b0b916601324366cf28644f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

