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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ADU3WVM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsODS3HVpOSejdzZT300iGP2IPuuHa9pUAk1aNrT%2FEPQIhAK%2BIsEhFlF%2Bv9f%2FXYwgymjZHWD5YGBPt6XYW4rggzzR7Kv8DCE8QABoMNjM3NDIzMTgzODA1Igz3C7s4nAPsvQxluOYq3ANOUsBMI%2Fc8%2F4kmWINCaZYoGtlG%2B62IdoT7Sdja7fSHczkeB6Rth9qreeM0OnNHcjrsUNDL00Yhf%2Fdd7iHBVefsr6GR1Cc4a4Yba%2F%2BBGtb6rY6El0qCGlwZEfJc2qVuoq3cbmkM8Ko0toXq0TNRdpTVedNo59UhQC0L2rLSwThmAg2Hg1gFohjdSBy6O4Omf3C72FbCHU6TP29SBBQ9sDVpAFScRiqQErggxRqFuaMOBZ4fboWJMm1ZdRNboJr5iaw4Io2%2BbephtyaGqBkbpdDSXjU0ZyqYCKkFQqYAn6rY%2F2%2FzS1ZkwhMI5aykMlVLIgZ%2B86E6TNBg89kamuXz5%2F65c1NGr%2BMkE8QgrNNaDqFEYHTfJ8ORONXt76yr2jE3ylU4lzi%2Bcq%2FSdIyBeSgftci71k7NBtWqMmnzo%2FZojXub%2FTFF78tg%2F%2BmOKkvrswp6d1Sd%2F%2B9ZnImSjGA2BHkE39pKTbjBNJdFZgVIU2BV8P4VZ3dhLplMRO%2BjlnGXrO9nLhRAUz0I3T3QQ7yo4tMv7HHQ%2Bp572r8oYLUDHdflZa4RbE%2Ff62pQp2GydV7wvRU%2FJbzUIhF7QQQjNpKeOiali6aCcym3fRt1kKEy3nPqxhYoPo2%2BBVSmhhSOgij8sjD3i8jJBjqkAfpqkMy1DjEk9NBaj8qqIZzgF9T3QZGffjuEpYl5cAxYBXqTvnNRmvzepLEisTcKLCmRexkXn9xtypah4x%2Bn2Vo%2FhuUU8K92936lOh8dZWEMcC%2BPMtRU2G2UIrcrDJNNcVcBRHvUK%2Bs8%2BDGsqv4skeYPZTQO8CxCT1p4vczjyPXwHdh3qPlliSM7%2F67vl71viFWiwUxHjcI%2BDkr5bg3re5Mg66bh&X-Amz-Signature=3bcd68b29b19fddd068366841cfe9ebaf593810b2ca92722d64c3cadf3da4e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMH3WR4R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFothnnTTKSdhc4sI64HFySf8OJW47purrDL0kYlA06BAiA9Hs2tI0MA4ZphvOFgXdGngwn1Kl3YiHymm%2BVZTaxf2ir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMmlT0qtTan3yADkGVKtwDTG2CFp3%2F77ljw6vr287XdsMpdzBZOTpblyPwq4vTV00CUozEzSD0eTQol9zppPwIhlxMRvoRC0P0il7yi1uF4vNUcsQ%2BIDuOiOphOxMUqmHA3JIa3u4Y8DHU9c7veeupqLj5Yh1ORrU4a1%2Fb4fgkczKItPykErvjspaW%2FBETVOxVFSW9MMhTjIi4GywVY8JiksT7WNbXBrqffqERaMkITzKVyz8E22A9f1tbL%2BTMArCseK6nf%2Fn3VeR0pSc4zd6yB%2B0qRgZCCIXdxPRlLSqtg1G%2F%2FF37mqlnsLEHpIOPbCRtsxGZN%2FxJ79R7qA7DaHCI1Y%2F2Ajbf73XY60aNw7IvPmYbFP3ewURUJZNUmJvlZS1BvdRL33u4IGCclu%2BkWU1Ummg4sOrxfxsKTR49wahlva2kDuVHbsPdrGRx7yb6cNc5qTTDw3OLcPJWs9%2B07NaodKB7Oa%2Fr9gjU9RfTB%2FpjWaMM1Kw%2BjF6g9ocxxuAPLh7I8gT0qK8XY6m3WOrhM9j7t7AULYfl8SR6ZR%2FcleuukmSy%2FSWYNMh0eBm9281ZUtdrHsHOT8tnt5oTJ9HZCsvlGfrwcKdhT6gals%2BjwV3oe9QpL4Ns7qvXTWGhyStY1xdPgY9bR5vwLw530XkwlYzIyQY6pgHvpUBTxrFKPjmINftdLUVox9CCI6rzfAlwkcGWz2lZi%2B71SjLH6iTyb2cQpGkh2GC60a%2BrY9vlux9KCYvmvzbd%2FaK5YUGu%2BSrRUSUqawYnqUxcFHh0bG3cJ6GN8TPSf3mNLWxiYRbPL88drbp%2FrYMSn%2FdEm3vMQbWzAEMsiQzCzQnMynNhOffRZ7GMm%2FpGDiDXLqs1YBgIeE2wMqM6PHYfo%2BMCG%2BJh&X-Amz-Signature=66dc2b495c8ba053f9402f178eef2819b40bb64ac40ffeef551a9f676857c4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

