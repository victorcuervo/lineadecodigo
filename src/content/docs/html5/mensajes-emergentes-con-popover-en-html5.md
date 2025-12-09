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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVF63LOP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHW%2BcHBqCq3%2FNoc3G9CRMi90tXBIFps3GUc1Jv%2BRuKHwIgBGjcmX6H021KOGfDccSkekYCUe7vwKdxyK2YeQ2qzU4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu5FpyVl%2F86IVGAYCrcAygXTSUR%2B2tuw2EPqM76sHJqwHbAqsUhEWKz%2F7%2F%2BG%2FSk%2B4KFIgC%2B7jd%2FVMwo03LoMmKPQoErgiFSEp8eDXZRXvrWLMeMb0irJnD5CDpGDRDebRslRqhmWAw3RzXgT%2F%2BJhEj3Cay1t9fJFqn6UFok%2FwoU4JH%2BYSgbP6%2BfFUhy5hBwQ7h6OxAMvbsmv4j1eJfNxgxQaGRZa2XEd%2FUb3G0iTCL4uZHPpkLQQ%2BE4Q6kXspXXbtQaam8WNp%2BUM1qfbAdBkwQKAIIjXzk1C4bPToKxdaKZPIcoc%2BI797Gzz%2F2DrTv2sA9iX%2F4S6vPdDtjAD9qeD%2F8FlyHy2RHdTJGK%2BJ7P%2Fu4w0Zp4KHDxSkt1nafAoWmhxBg1zXXofj7smcILNc6DfLVxJYQkS%2BABY3z6FbA%2FhHM5lZd6Pc4A5otvaOseIQpJw4dprq6Z33ZeJjOkb0ZmZ%2FAOS8YHsANa6BLPVtrLRSNfpzhv0oqaYN40QY%2F4idQ%2FD4id2Z%2F53CnLK8wnMPD1c2RMBZYmvjdn1O62rzwXV5tU5p1edySrGSrCGOPkEgVOWrfCPXRW9ITK6zlwdJDeJsSYMkFkZqEFcrqqAYVEcANUA6IEpC%2BJ4mNA43RicgUnhH%2BvSMGvpZifGNYAMLuk38kGOqUB7xa66SECMkLacF9FOslucovCW0DiWob5eENkG7oS7NiMMekRNqrxCpvGR8aNvugkSBmXNFvX%2BYstadkYGDJ193DVXT6LWZyi5fs%2B2cRc0BJAgYafDaqvj96rH8fzE8quAcJfRk53k%2BpKvH7wGtPTKi3qL4mANNQADlOK1AbhLu9i3U6kjR57KzSpdZ6e7wttqE09Td%2Frh5gYG5b3KnCsV1MiPN5a&X-Amz-Signature=104f4c59874c3bba5b7c04367dba6bdbe7eed8ebfc094d39a5a59e77c11324a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSKAADH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVtFy2gqXKoa4Uhosn4rGWxpjS5%2F39R1rOWJh480uM5QIgTOAVNGxjpznbjTJCdvc9uJMlWo9ySyhEIh6LtCMYPwYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC49xW1W0iUWsbA4CrcAyczfbxozmThB3RV0V9DDLeEiDa6sDFAx6%2BWuHNGBb%2FEReoCyL3Zjc6lEgq%2BIUPGV4UGmNMVsIhY1zVS4L5FBfAkkVGavZMemwONkCUIjA%2FX3uy9PglYjZDFD9ejy1BxtDXiDTeMNyhXPLNOg%2FRUwXaFkFpP6pV2FPLwzqsLEbiVKgODYBGVgHKyhW38UlnM2ZOxDJnP7ZFtFg2Hz8mbm7JfDOCH0cIQ3mxTEv3yD0m1W0ypYQeL94atxyx4H4VcMCK31w%2FRTd7mwRCTLpqqJU3Gpy1xPFahwAZzUO2FXhQyKB019JWnLSn8ACR5xUJb33lxu6i04dYcKNNJ%2BFKBXZ8z89OxcQOMoALLr11yjFNpUjNK%2F%2FnV3sc5NDBsfpt0lenT65UvbGYa%2FdcSyQZadVPDfnV%2BMcaQZq2SjKICoCbzerDaaeRdfgghkqkVQEkocZSNi79vRy2RWDNhB9p3pu84E7QzoPJ0Kc8JsQ0MjiZfoq5DwvCJFeekz9oQyouXtJLqEv5trWnH9XE%2FMsdOcfGyWXVya%2FFe%2FSqKUC0MZ1PDWeA%2Bs9yGlnRwSJ7bJ3FJwpHnW0Ag7qhFV3QASpY%2BRctJqUvwKaLYKPA%2FhFy6Iy2FlN7KVoZT1AMT6PA4MNqk38kGOqUBjAG7raZXqFLGGii28t3jAVYJ2CYXFPbna24weTVIpqpArc9shdqbTw%2BcftRh7CrXHYJpIjd3L6um6mCoW86P%2FuN%2BEBnWN5yVSITmHPotCPukNDFexFsq%2BLNSIiA%2FKio2q222rsse7Fhi8bCnMa4nH1xlAN0G6QdzYG6518N5iE0dGh3JiNG3gVKxPIyYdnrxXCCIKE%2FcSxV96LbrpzfOFpvotC9F&X-Amz-Signature=ce54bd1eb4f16ab6be1af6bf1ae29971643b9a80984e9648321ff8e71afc5bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

