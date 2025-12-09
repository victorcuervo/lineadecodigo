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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKSXC3U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXKdY6t2eTuPpflQOzf9cAxCnpq1augegkQ6ytFCyF4gIgb1kPtt0zsgszXBgDlfCFjr6Xfggf%2FanFqmrMTWpQ8WUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNa%2B6Unk9BFrnfrDyrcA5GraL8AKuFt2kFfi952rUlrB5gbooMefs%2FpoRBMDlxv2oUheSR16lPplayHAQegDaDAGWN97384DcbIlraxzdJy3obUyyL3MXlxQ%2B3J6NYaaslLBw0OgnPiJqptcSxZYbpc%2BwxyB0Pq68Mi6BJDXlectfVgjEKIg7J3imuzyPGtCVPDdbpV4j4M7la01OVxO9uVZjcW8eB%2FdCk%2FxNiE68L%2BpXtapkLK0HYJDpAgPuubre%2B5lK%2FgdsBlyWmsscqdo1e9he0jTQjtnRLiBlnWWlcsqMmfxIrjPQIuGqua8CIjcOb6fzxDQ6ThDdyzsgUe7KU5hjVbbauNzv6yM6Zp4oTxE%2B1K0ftO6XExzyTjjeFcKWCuT%2Fu37oanVfKWG5oFcwF9nSxnEGKr3dm7HNavJ%2B59YAb9uE60NlVe0q%2Bom3G8Wi3ss5lVk7w2Qx03GNPNKfjVbRS8Y%2BlGzB61E0PRJcXoeBjXLBIdP%2FajQypVUjHZnRxQ6P36h6imnS9UDWtcnNwFngOAvEuKNEe%2FgLtZNRd61VAURArNOs5w2rY2iu9s3ON1Gvdtglk7%2BHFux%2B%2BzxlcRVAc5jvSDGBAllT1YCQF4yx95p6vIrc55fC20%2FlSF5ehKn%2FcWBDO7%2FIulMPnp3ckGOqUBVHoJLjaG7PIcggBVUpEz5Q0h6ZASA4rEfH5nKKlI8HyrOqLEyZ2XThwnF19LYGX%2FqVoDwckf024cmVNHCkLAtOf36Q9nZuq4kgplz0e9j9OFVUQGiRP47wKspEzfG1GBsgbE7vreF0Dv1Wz981pMf3I5wBVcONlGf2%2FzQfWFM3NLC6TzOuRgdKBd7Mupppcxop%2BBEKwaLWNIJEqE5gn2I6Box%2BU2&X-Amz-Signature=03a711333489db497bcd5ca85ff0ffdbea8e27e0a138ddec11ddb82e431fecc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMB2OQTI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDteA8gME2MzhJ%2BBBcifQ%2FZekjrJ7sx6fwFGVoXFi%2B57wIhAJZky3n%2BKSrtTVVPIypgos%2Bd2bsF4Vah%2FJUOCRFX4MwWKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuhlMTAikguR0FLSIq3AMBIqSuhkhbB0PBnTJvvH2%2BEASR3QE069QFw4D6F%2Fbyv54Dlf4542zcKjWaKnijEU3xD4JlOkYIVn0IoSR5%2B8%2BQ9vx4yu%2Ffl4HHLxizkNdvzx2d4p0Ix%2FfpBM1ZMGOz15TCjAH2%2FUD0O2t2JMeUPJt%2FoFP1EBSCR7kfI%2FxIkvYgV1Ig23eHsCiIckibhnvTXUtemBH5xDAWkxpdU95J8PA5ZuWx2%2FAo20fSdECvx0naley0QrMT5OLj9GvP0R2LKeZ4LTWQ3CdH6I5DYChMEHBwcsCZr5pkxngYUE66%2BHJcv7aisxacyZiaSVOiy4BWOi1clroj2L4GX%2FGX6LYfkjNhqPtSEl7dI%2FxX3yE5VHFuAilqVvXvfJ7kHr3mfJWpCPC92clveH14nR1pdBRDoK1LwvAHc7YGri38iUx913lfOl%2Bv%2BUFq6holhJleM3SJVtv3A73Sitm2g4WZpebOMPgxGwn1EdmnlZX9y329VgGeR3jnPkfusaVbqhyy04rBerjyDkOwZYqZUdPyc%2BcDiKSrHiRBiPqD8PHG8sJJ%2BdT4vr1v7pz0QgSY71dWNnyaL2ALzizH30KYYy6RLv8pnwf0nwte707x1Ijbb%2B0oOsrF1cWm%2BURA6zdt8cgchTCZ6d3JBjqkAX1B2bMgVETe965QWX8nDILfti3w6xVWYu9k%2BVJyEa%2FJumj0YE8cUrCNvZqSwvScQADr0o7MWVPkVmbaY%2FyxlUfvxv1wOiipWlMkAa8B3H7hlEbr%2BjN%2BIkXXwMcqk2qs5JfynDE15Vodo8dQbN%2Fu0CsgQuG9gEln3rfR0Z2qb7UQtTG9PoN%2F%2FOOuMhEMmDsHSDY1QnaVCaLFsftq9r6W4YtBcEU8&X-Amz-Signature=153ef656c59ff7c43a59d87f6cf6d10ef34df77f2978c70b61f9d6c4c8e9b291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

