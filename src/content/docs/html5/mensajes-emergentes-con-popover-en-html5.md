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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFWST5G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv3Hs1LX5KVaSfmRMjzWxuvwbcNDxvg8jtwlgUdMLuLAiEA2LftiHoAkpKZMTq9WHhKVziBoaHIYhTeKG3dRxtkfy8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvd0pYgQeJZKkjG4ircAxwg8Vi2dl8ru0iuMreBlFNiNlLCFjhfMHFiE8e%2Ftdl4YbGN3YdrOhVl%2BYNRC5jsVL9oaXCe81Ve%2B5TZcgodq%2BwUjR70LEbHCIHB9G%2BvIPQKOiA%2BpQz%2F35SJnbD7CIlLTGle%2FGjhtsG5iBatF%2FGnBME1B%2B98UsCRK5gdii7869U1RPo8ONBljbmLtig1ZOgHyvkBXwANZm%2BAfwgaf2sN0rSKVGltiazpeOLnVNZ0IYervqZEaalhiHBs4Q9UNj0F3hF08avOkmvxWGWWB9cMZ%2FodEwfcOU5ma5f0B5XJDJYyG3fAdpdIJTpUhnw9GNcu%2FpJHBr%2FBsZw%2BVVl2wgWqdhEF6fbthbR%2B8ueQfuolWSD40x3MGylK2%2FLOzChLkyBtQDR2dd5fIQKGVu4gYoga%2F0kkBaJ9fulZRno8L%2BnmtsUWQsJzLkP3rMSQwBSVyM2xQmTGh7SjP5c43S%2Fz3n%2FrdvatQnjKGsRqUfmNbiLbnhy2mboRomjQpBzMqQC%2B6M%2BjdoeqKlQOzgIXqwMG93StkKJHAhNmZ50MME8R218FZc0zwJ2PNhqjmBb5D4sL5JLtTVrg4MW5vVXjG4Z4uaRgMxfBkWRNkL%2FRDFKl98Ga918T7nWxZ5zzMkvvdDr6MKbty8kGOqUBhwxJYuJ11F2jfkBUTjtQl1bT7uk0YzvX95fhcb9Xk3SgXuUiLQJSdYKb8vcG5FdEIoUJo2fS1Jsymp0ZMOUujPst8OFqjP1XuqXVrlaIFunPeuPBya8zXajCrFY1TIjKq2DXUN17TkGroBBfRQdDH3kUZtDp1CyaHg3hZlzQYgyrD8OWrywLi0sHC1PjBN1AnYbpjuV5zPm6ZpBMIcBvoNqAY1vA&X-Amz-Signature=f6afa1e4ec6d1390d6d48b85e0b95a7c30458631a5f41036fe819d46fb0ded22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYTH5KO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2rk%2Bms6ZnewgAIAfaW2Gd1UUltjJ7ffNzBPvcSI2PUAiEA3RflRJIO%2Bf1m7adjWEa9twmgSflP4e8e3Gvxrp470uQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIf2up9nw3uBgBM1KircA4GkSIC7JikhOZ28ZGYEvNIAztFFmO1EMige%2FS4wIp4DPCbVmEH458BBtbIQo1%2BHiQ%2BlavxxsuAwvAwCGmKcEKI2LbmGYSumaltfh8872xb523a1CKjNcT%2FkLZgaxVN6T0K13HGp%2Bwc9tWTMnovxzpExua153ZVrASnZ8oe9scLzG5V%2Fkbrg1j5H8WMAIc65X87Jjafa3Bf7wAD%2B2NV7ucI2Y706F1Aj7tTlJlfa5ZakzHK3jECset1yUaVBmUWV3F32XXt7%2BXZ1GW%2BktAg7agKFKxYh3sY9DHCOzdOf921UE6aKoGZjrWjA5MtvfIm%2F3QPVSdtfIuK3CPMWfun7n8Rz647sn%2FDTRL4Xa5NUX%2FUA72Eea45CdjLnR07TQvX2BhZwJOm%2FgeJ71HaZL%2BD6yFRijOfvtRqLtkeuWADqX%2FafslqSrcU0yIpCDAYSmfJHKM6YwcH3SsgiPz1q1%2BYdU43SilgMCCLWzHan3Nw%2B6lNiUrOjj%2BNfGGxS9F%2ByWahoZNNcTPtvf5LjxDBmoS4cmnu5mb7lmHlLKW55rlDUyyNnJbBXXfM1QXJkRmxYcUBDLGLezd4TENaF4BP%2FKVpUbPMt9sGeujp0zxQEXbczONpVWklu%2FyzaBDJn8E1CMNDsy8kGOqUB3doUnq%2BtswL%2F4JkwT7Lbjs3BCEB8Wq38QTP8RqzkOv%2BfErV2jPDtN4iqSXyMqBUEDwndMdhg9L2%2BZlrBOBbC0xTluQBuuh6geauGBEFwV4OwLJTG5A0IDceBqLOoZ%2BwzwzQ7cG0SgZcgpq35e%2FFvZJUr6RkGEp2C%2FhPOgVjHeIH5AvtN4EzajrtF4Ifcf6%2FOSu%2FDR2hcbupi5AHLZOpZAv0Ps685&X-Amz-Signature=a9350cd9c6922f275d8291687cb2062949428228c34fef8d600589bdbff81051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

