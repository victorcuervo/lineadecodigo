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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT5XCHMQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDNF8MWl0mY%2BJjFd4nBX0clvsMoRJXs0Ue2JWAumhV9zAIgZA%2BgTCLGIVkHZSFku3XX158vGEEUiQ%2FGNDWzCbijuPkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHx%2FBs6VfJQaVG2KcircAzK1SYf6hnXc3BL3XIt3ftmA%2F2GoNxdPVM%2FeKn5eIiKzzuVdSvuq3l9NIZBfm0waR1ouKrWi7fr%2BVjkMQm0yUDnjXXIGG%2F3acRWDTmKVrnja60pzQ1ahSIz1Rc%2F3vtH94wPvGpYsSi6FWweA9YRbq4wBKR%2BPnKwXtc%2FGf2B3a8zyFEyt5cfqJn14cjmafTJ9xVAhhLH6ocgii6zq%2F60NbWtAZDzJbAKuKzLanHM6gy6Zs3GJqSan%2F%2BbG%2B4RDmo%2F9QoPLtVVEUSyhXovkPwP%2Bd%2B7vT3nHsbN%2F7bgtmxV3qh0gZnBdQ2tnUnhlY32NIEJghKAGTlbnzAobfWnVjwl%2BAtOb7zU07ArZ9SuWqv82RqpxGrw%2FDC2Cqa%2FVndByn77zbpbm53dZ9jQd9tq3BrQjZddOKFi6j9ejm81QyduoKKS2nAkMuo3IKt20KWpWOtbHYm7XLfgEaG9jEWN%2F5EHHw21TgNVMn9gU1fYdULta%2BwE6w%2F1L2ct90ruqwLQ4Fzh7ePgGp2elRdEg%2B6KK1k2DYel70CRURP63ffVkvAl0QnADergFOkYI0%2F9aAAubENj13Dk393G3R276N6qOqIpGuJqWISLiiCFuwF1iDFsCjJUmsMxMk1tftKK5QI3fMO2%2FxskGOqUBUI%2BnzS2uC%2BxrkchTtJ486k%2FEkMAJLQ7KZM6ev9Ru2DFGMtlhsyXCYgUHJ1jEFrSdasmUerHSH6s9K1JlsdhbDf2I%2BkeSqVUGV5AADVXSmy1Hm0dQQmDEcFlAauLGh4g%2B1W7hmsFqdEMylt847WcztV6ivgHQWq5w67p8VKjXNzc0R6j8Hss6iBzvBVzWW4eKmLAmnPieaGVSqIzvoYtkx5FvAgTK&X-Amz-Signature=12a3f83546ae1e870711d770b6300cfeeedd30585f2cba5f08ac9485dec3672e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NAOW6I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCID6Nj62F3NqGoW82TuWv79IYQZRZ5R0OLTe5zT80mTg9AiByyWwpWCFKTQ1wtigsJNLAD0C3mwES5iWDB03qENG7Qir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMP7NVCQSJzobFm%2FvXKtwDJRw79iMxyVHCa49G5OzNd8KmsLNigaa8PUUHbvkiTOQnjEniA471hxah7Gb9H5sYg1pyArhHgi%2B0is2TiMt9jJ0A%2B1Z3yirjPwCyWX%2F6hBKznM3CDNj2TOgX%2BD8yZRX%2BdTqV3vFp55fn4swGurpJiGMsMgpkkLNMMxgorCw7Qr3aLsvjJ1Gx9wpSuCpaXW3CwRppIwQcsFjy5yQgnDboKwt2IrZPin1h5JI1%2F11EDA9BGTSiNoD6r%2Fcj%2FGuaLygxMot2WZYPFeU75l9OBKu%2BABZ2asrtKoy%2BH7hanNGaHwlqLDURZMq6Y%2B%2FbDdCNB1V6r5AYzk1ffEqCV3kUvFIC%2B6JeNMDUoadWgbo2Nj%2BB6DyXxVK8NwYEIxFn5dXh7rF%2BMoTeHW7NQjXnk8aJfWFrf1ljWjrbuu4cIluLDW69cvNVGtVio1ALflSzjloDQ3Vth19RYapy0WB25ck8gCCIBahue8GL7TxiX3Mx8Hm%2Buk0J4GqEoFq5B7Kz32L1U8TN1hl%2F15MfJt7u7iO%2BUmcE7epqBhJCqekaSwsV2DhlsgeUQqTje%2FExoLrmYoVn8CNVEtjLmnRT8UpkL4aKazcu3YgrfCBPQIORq5psjCVD2COwK%2BXYmSTk1tOCisswzb7GyQY6pgGNL0J1ZOjqu5EgzJm6XOxSb5VJ2sLGUdg6uVP89XEVy1Yt0vtTsuA8XyM7LyEmiPcF2kCETYWPbjC%2FZOf4pQuHfj4I3b%2FyMP%2FtfclHN2PuKfInpGzSk5NqTOinooTzXrIj7IPBWVI0RGYKFTz02%2Bq4xNCeqYM%2B3vuIBBn4pWq7K9rr%2BQaZVuyteRBo3J0TLSthmILqeal6%2FmGcCzGed3eci%2BUGarhJ&X-Amz-Signature=98aca43587dfb2bbf82d7644c7c280d9bb747fe34118d9dd95058e40bce642c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

