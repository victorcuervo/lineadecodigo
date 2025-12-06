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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRK57TT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJxQxzCCeZ5zqEMQJQDngyDGvbyGfLgJZibjKXCmu5fAiEAkXHYV7tUy9zqC7H6D3onGNEgmQENQRzaDwuP1jI63oUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEFxOFqFpMntg1jLPircA3ITChi1BjgqmVFRoVQZ7NcjbZNFgvqo3TBAhMm%2FAzx5JYEO8uAbVcYQqMUVKEVwX%2BFoj9zUZJLOfnvx3WksSWGdXN2DrzChrPUWZ2Ac6reyMH004TMdLkcAU3DtjbVWlwbGX9nSQfb0IKnxM0rNzF97C1v8K1r7A%2BDQJorMPVl4PWFyxd0Q6QwQXHPAKSEibiL8FHr%2FAyVdEO4CaRd6SrrK%2BzXy8LS6K1VT87aa3WLHrP0hmLjJ9oi40KMOtbLHrJhGo8uUnYzUF0ljvIdWmzF8TfeTanAMaBtaRlFIsmnLxzVhLDamyi4G5CFu4SLzEIOsCER3JVe0IbBGeW8MkgG4N03MMdSCt7M0UrAx12md1zFPTjI%2F4Ok5mL%2FfU%2BGCSJ9nP%2BAADdKR8ZCDATU0tj9Vl9qCpdYT28BN%2F7DBVjxqjpdlPrfqzqrY%2BhnAjB0uYGYDy0lnlh3kmq7VFLMm6YRhXm7efM%2BPA2gLCOdIQ7CH6G9JkRuEnFv7uynCjjgQxru3ahW2R8Tgf5kQPkwoN2IiXjABV2sYLvdurkWgG48pJSmadwqIWQl2wTygeXnEasYbxWo%2F2XYkLOa%2BoGPcAsyfCpk2V5qiTmju61Ulu86dgV9meNJG6Dl%2BvePpMPjqz8kGOqUBwCfDV18k57bYkDzGbdvRH78eRD99y9cL7PsNpw3PfqsD%2F6mw1yheC5dxgGqif7m%2Fko26kP95ufNKK%2BqIfi7y30TwxpcT5tCA7VJILZEZlYqa6uwaRa0qtJLInFMcthbfufiUrGjW%2FHYLfSByHKh2WsqFTRydcGQBbIc8K1%2FOySDHLFYsIpfXz24KhdnY9bzu1i8Yv9Mj85VSdoge6ons51jHzJXr&X-Amz-Signature=c1f3586960f0abeb3b26ba25c56e1473fc928cb80818b1a5f808b0d83bb91135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33AZTOO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgAcgHGXfTiSGz2FYD430jI9%2BHJSwrAfMW8qLUgKFkQIhAOC9siZiSeIn7sliffaY3dqgqJRq3D7vIhln5JkUXh44Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzmXx%2Fd53poepZJR5Yq3AMEDmVP2%2BEVpuJwHtGpD5F3qNWG4UVaNtznbhzZi38LQUHrDgwMegC%2Fp731seawtIwLUKuF9OT%2Fitt%2Fp9BpMgJX96LRlXTeRhmeQM49YUWMX4zrvk8Y1euSx1zRx%2BWxZlXFknfkoF6t1BCeM%2BS7a5owpvhLgSWqXcLEgKNNXjQkgmpYd0J3YauCFilO%2FsBxGusA6HWX8LfE3FsOt6Z6weIMrKHSAxN49plAYczcdi6DDwz47cri9z25Dy3VGjPzqwmsnKcnxbwApuXVpWOSL5Ii%2BwmXEjROKeA06D8t1vdr53KiK3DUC80OdUf2Om8iGaR2kyz7b5qXM9KFsdENT3PWx84xlxEdmjlYeyiGJrvW%2FkR75Jak3k9wYocD6Dvx5onuB%2FeC5Q55PXCyucJPuh76fjyBf0ZIFfuzx7WU9wLdgzhX30gIcaqn%2Fzu9CDH2lSZxkJd0d%2FCnsWm1As4SPBsAy9eQxHDv4YFHdntwwpy6Tiw3XEh43yFHmuAv0p1ZE%2FRiRi3WudVK2vpjtVdkiMFX%2FZT%2F1FyfxGObnX1FhJ8x2VnS%2BTc%2Fp%2BGvALo%2FWTgNuPDjn7eouR52FlBs0%2FTEFRcnMEwYuZzkRSrcWdNr5XTYOjgydxS3Mcl%2B69weNTDo68%2FJBjqkAcgfjMRVdbeQlzfGLEE6w6i9NlIMkncslvUQ%2FFzaMmVIYWKPGI6jvASYKSNSZwMBNXhxH4OyUZbmq%2B%2BXhU5EKrYN7hg1OgW92TH8l81GK3uuCCQqEnGbSfLrzdhDiui%2BtMKHH2BOql2WscDo%2F0nBRZ4ksT9zKdyczGYU6xsQm5imYQMCjlVSEj5G03z0XmP31WxyK4PQkZISK9CgiUv2yHAqOkzl&X-Amz-Signature=789ffa92b88fd7137121b428d0c4a06d8d387ce527020cbb6a4fa9cab60390ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

