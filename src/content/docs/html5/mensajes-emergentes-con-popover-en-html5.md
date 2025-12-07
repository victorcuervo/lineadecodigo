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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XKJZST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5kNVYMS%2BQ7HrA2Rj33%2FHZ6P2CBtOTqvnNp83v1X6lAiB5K6pu49TP41SIh%2FMsjBRSZOKfopPxHYwq%2FTiadZX%2BryqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhpx4OzxInOMfRkLKtwDxTabmiXcmpFTJeWvjOAQYUy7octUnc6YXwzXeMttE4Q2sDyIPX8CufwBuM3FqVSunAkfLrpl6EwQpKhCpLEMvOc0V6I14RIbfbISI6QVB1lnQBpUugq5MQgvgxCjL3r0MNka%2BMJee0J44gyKUYb83NmAzEUNtRg7c0GWBqUy2cU6VFzGCwqIu0Y3Epe%2BQbCf3PS5TuLbPnJG0dd4k1uzmEfgEYSWE9r%2FQTORsNVX3kK%2FNlNRkD72hM7UMhzuH8HNI1bDB7yi3dYvxTVglBoPoPxoG0EB8ya6KtaYAm%2BbmyhzxiBC9mRcUDRq0MhtgKm1WMWt9w%2B5LlWshz0LYEJ2ks5JOCt5bqttKqg%2BOkEqiXl7YYdI0l4uJptAXpkgKJ6q92Os11CCwi2KHLcAVX1%2BpAdff%2B72EdeapGcYYQ1LDe3NHm7zSfwAV3VZrYjXd4liaHbS2ixO1sFtHloodLRyh5DLRlbEyA3U9w2besI1q1Uaj5IArkNVHlm10Wbq5ZFb%2BNpWtEEEgD8xBzybDyc9LbaDK5JvZOGexyjL%2FDDiBsy3BhYj%2Fvh98XDxOje8rErerIQBHYL%2FuUGT33yoLmQ%2FWTKwa%2FmbdJ7StOxwgj%2B1sMlHdQVprU%2BxvAuIJiQwmv3SyQY6pgEGryBQrbj0oYFAN42paRr5kgFCkd3mKXNu3IzhbRDvyYqxzdDkcNGWe3Cd9YTJJbxJZd1YOtWwGyCGmj3hZCACPhccL%2B5GlJMtBA3BBbiCOeqmeGOLB56%2Ba1D0J66Efj0NBgqnHIzPHzlu1HgOgtZ%2BL1uhmXyAFDiq%2FZHGkVBxH5wpgprxJ25ZjHCD3Ms0LmX9XzFBS7m0j8fQ2txlJyKXaZmCW3SF&X-Amz-Signature=d41c8adc0a6cf38783a509016f6c459cb81555e41375514a082dd9819bc060cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYI4PYME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbYGMsCk9wKRaOwH0J%2FUEVyoeRApyN3ridCBTfRwJpOAiAviizizk3s3K7gpTTzDeJxCLnX8ByfuZz6HgUM0PL7ICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREXM6XIrSwk1gP8gKtwD27qq7PO5zdB%2BGB0SvSpQKRkbTbEM1rW94iFnSbGK0h7iYOC1zrlw%2BWxG4CqG%2Bkq8lfWob5qWLModA5odLYt6TyVbnmGzRY%2FJmV2V%2BOoaqMyFGZeWIjyhNSzDuAM%2B21U%2FPyPz9ooV4HPSAniiZTXhHBlzmG62gHk8BBidk5FFhZ%2FwVK6n9YYBIQnn%2B7SLtn96asNTx3eqJ%2FhJEwsdr7v6cQBADRT0GuU0m2kV%2F6UoWrB55izKMmptgf6GMRP0swW2denDc3H0QdjWEVbeYXao%2BqVcNxj0soqgi9OVTvHhlH83gHZ5CGM8WBWXHT0CpMRFokMVvy4F1LsHojruIsll7K8ypRztjbRTsGHfI%2FL1D9YFea2Sw%2BUqbmRORfoOWqKetrbVjAV3BJJv7vLCX8UePyBceeP7YlJ9xQr2s8k3vqA44lZidJMLw%2F5RBlunOfwiHdi5VEGVpvITLsFStWchxAK%2BADgVwGKz1ZbSAPGFUCsCXBWHlMyN21H3qwUMQuMGuzFVBvcLmkIh5K%2F6ImnZHPL%2F7FIeHqroU6HcYD5kVlOBA9CT08RyjY76gFKroKajkb1GDcrzeXzGkf0xBqs2eNwibDsaRAz0qNRiyWueco2%2BXA6iI7PdanUKc0ow6v3SyQY6pgGki5hD2Q%2FYZf9Z%2FiU%2FFcHJmdzXK4crKONbeCyhc5p7%2BSKAghT9aiiNrf2QwGIsHo91Q%2FjXE0J590541Epp%2BI%2FI2ilyFH8crHRTwVk3%2F0RxY9LcRJKERnUzNsiIQanXJfvY%2Fy4Awq9ndTTh8KPkz4uc7BiiYgnGLSbWtZjK7ot9zT%2F0tVxJxlIHF6oXW9nFcAh8Mcw9c1v8cvEfpAEZRRw6%2BN2rSsnc&X-Amz-Signature=50e72dd1348f00d4cdd88f584685395e6e18718c2d648007b8444b8c9d41cdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

