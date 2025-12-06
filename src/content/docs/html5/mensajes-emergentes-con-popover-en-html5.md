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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH2X7VN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfQoan84kMqHn9Z5EVt0riMaWXno92qtm4ETpuqiDnLAiBvlyf3vTSUuHqHqfXixk3mMrtSNcVBBcYq7Sci9h599ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1bYe2%2BUS5NU9dPseKtwDnOo00bSCRBxR%2BNuQzOXuNPk7%2FmafG31BjY6B410Lg7giA%2BV1qwWhBTjsN4zQNL3bNaiywbslDw1QsVjR7UXRG79BxnNeIKddHJmCm0s%2Fl62Mrket6%2FIIKutggU8OgthBplY4osZ8wVTw4qT4WEGw1yCTu8bddvu%2BRLatE7oo1JUSWyOKk9G9RqpOXJvojxHMzhlmuxMp1av8ow9DOcTibb7BAykhN30gae7XqJRbblm%2FxKOKmHQzO7WNMPdouDA2DyygRLoi8NfgH3fg5n82wZeqirZqk7aFux1bWEI8yn8U7fLzBziMFtjAc451r2rC9WXMCdLYjVjbjPbaEK0xXFdJmRsAaQBFpb2vzGPROOijjrtw2Vat1eGLFjeyGJP%2FMmDLZiGhFL0p47LOTOjoXCkG0ILM%2BdivMwF9ndOIxzhpDS5a0El0RwlEEoGFvzEbrSnc6Oa%2BSe6YJXh%2FTKig65XB2%2FSYpj69w5UaEtTjryGOjLH%2FjuMCD92ZbAepn87RrDQ%2B4gFVqYK8bXWT3%2F6J82ujFwqiOXeWpK%2F4FIUbcXnuhgNJgv0Mm9%2FeRT5AheKrH1DGt5Qn6L6YntG2IlqBsnNLO4ZrSbGvDU59e3ko62x7GM88v4gTyJWIdsYwxabQyQY6pgEqhkOIornWGEzt4WzXlinkN9YoNDdsROciq%2F4roH1%2BIyfo%2FjUATLTPG8Oge7hMeHgZ3%2BqBv5ReJqc4oxo0H3zSBKGlWOwHVVGgkwIRQ17s4ZpXRRdbab%2Bv3Z6skP4ENqQfHOy8W4lgXx4ZFEsnOBxPAyxmyJbHhVLAAAXt81vuJLReCaareVYJ1KDRfJh7eFAtMADkx%2Bgdtyz7eM5CyR%2BjKH%2BWfsZ7&X-Amz-Signature=dab2702de8637c1f8e94586315bbcdcf458058db4b6cd97e2f34e57cd027fc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJYDFOB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgYAqve2f69nmY22FRIEHGWng3bRO5hrvcEWBL%2BbJ1MAiB809b7E1nCP23TxKHKcWV%2BvIWYZWMK6UsJse1rwdtVRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNrOx9L%2Fw0MR0Gv2JKtwDRy9RCFT2%2Fad7E9LxYIFlhX751JPo1ejSJV7pAg4sCnd07f5ToyepoM4ucMdeyq77X%2BmpQgAzobOIaL3KOuhW3s3HIzilT%2FGD6ozNGeisiOzQqCJGY1eLMfmhqZQ3PYKbXwF4%2BOjVLRJY%2F2ApucR06hQfUo4Gf%2FCEY0Um5m1WwjHZm6DgEyj8GDHDeF9TQZrSD8OvFhewb6ArjhGoRxjXSOSVud0S3Vb4v81mwF%2BBTsQVYep5xT8bxBNAIN7fD2jXFXmx%2BTdkP14o%2FaAKaboVodBq3Op7OI9FM1sTmuuFQ%2BRq%2F5Vfe%2FxzME49Uub1bjHozs%2Bp10tlOb7pBFQnWr2pq7k1g4XfHTHZY6xQkyxrcCB%2F7AbShKXKg6BARbpLJ9vVzc6UJ3%2Bi8BTf9soyudx%2FYc4y3SPHyDrAw2hn9MJQ4PVZgsWMLtSjopRNmnld3AXg%2FInx%2BDinLY3D%2FkbRNTWpRaJkXuhZmhZ1tyDHw705oWN4ctGSKL5LCxF6yO%2BawwCcS6Xqt3GdsnG4AlAuCTI3PT6GLBj%2BMxXAmt6WxX4%2FWNASZKgPgoAzMbPMXjAyHWaZfCA72DxQaYmAIZJ4nHHd%2Beb79ybTTPJrUZz8iVqb%2BgOjEnBlvsL3041aFiswx6bQyQY6pgE9iITFUAzQa2JEP1%2BVE7iGO%2FWv99nBDKLSRhqVW9xlpzJSEh9Sx0tChqg6NQYvivR%2BLgQ3uCrI8MqZVxTpaAso2L5xyH2bj9Bd%2BBLOKV8JkbsGYAwWx%2FSwuja2jG8tzJhsnsF8YAr8x0xJSQ2JRvkpj6n9lcTif4eZYoCPDNC5fXfoQox8VKkW3qhASLOTligROrD5mQr5zM6gZSskP%2BqUHZR1xeXA&X-Amz-Signature=a948f816a715e52fd2f349a7e936c914d63a29a95a11aa53a60a7e92e76374e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

