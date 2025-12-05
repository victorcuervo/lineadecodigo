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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6I4NYX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBaQRgdomSJETkOLJRRtMKB0Qw9OMOP%2FEtopJDbf5iagIgEXXNN5YOtlwSEfVCwgc63%2B7KIyMT0f2vzvm%2B0aDn9DIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLzDVsdzUAOLwXa0CSrcA04oFCjfX53tpO4Mi0LJF%2FFTobRzWQCmd446dBp4%2FOuOaCre71chDUsT5iLomqYobQte2rfdlzKnYtkJxSNZNUJltS0lLMRgh8N37PRhqvvLCFQnvYzrez%2FhpLG5oN%2FtQjhFNIrxUNFgjrbuYRQfvA4rGxjFvJzYydqfDJyXITdU3pvkjmkH5o9ytZZ%2BSFfIF%2Fl2Hd9jbsCTq27kFXdEI0jDSo6Z6h7link9Y7Zrqx%2BuGDCQzz0VImDB8Of4dpxAUPtBBbR5xfK5OCxANoOVjHeLEg51e%2FyACRHVihg%2FkQYeivtN7zoALpd2aO%2FiSzo9%2BH2JjQeBcM7G5jBHVwSknMqzKpY4Nt7bCYGL4qI6DpMihPScthe%2FXbr1dFsIH3n8RGJpDvzUWWhrKCtMyP1NSsQi%2BK8LzEaMp1EdsK1rd%2F8j9ITEjneENUZWqkm%2Bv0KG%2Bp%2FQg2s%2BKYNVp3ORu8Ob1t1RbDEmMTETIo8wXVrr%2FCfBVJzLw4tpEadzAoQdRlO90CEElWth2b12ISFWVUVf1Z5P%2FJWcQ6JRIHGpO%2FO%2FYw8mksWH%2F%2B4L6tefll2P2cD8AQzTBrpQe9UxZfAPHw3WG8w0SYLPzB4f0Pu5JCtZg73eymhW4fkcrhpd2jB2MOmAzckGOqUBXCggB%2BILpoSdRYQlYS0YRzkGk%2FYHH8TRA7P0AtfHejFE8kSk5Xyg%2FIgEXS5jdvEGt%2FIwi8UR2M%2F44SSivR1cZgicIRskTsGAeaQsX%2Fae8bSXFZeleXyjBqo7deZGIKSE7gzdmXmbegGQuQKvLj2s%2F4i3LUktFLXmOH2yPVWbK%2Fz6x6Njg1PPfEpivZKZj2yibpe9fwcZit%2F3%2Fjs%2BU1fCgRKjyaQD&X-Amz-Signature=f405ad03b2e0716bcab9c469dc48c3955f4e822e42ac57c27f5701ffef7cafe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMV37H6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLoJldAg78XH3RpTXZw0MjRtoBRfpRDow5soGsp%2FH8fgIgT41GlAuU1xeGJwLyRsr4hhHctHqjjohcZFN%2B0lBOAhcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDODLxZqLDQ6mYG4d0yrcA0ztxSv0vEcEhv%2FMQbuyUxSkl87mYKSFwEyw8EYqFdOEmwHpA%2BeG64bKOyqAxB2k%2B%2Fny79jMmpHYBz6rIUvp2V7p5pWatgvSMZo9fkvJ5DK8dUYZvD%2FuZMdCgv%2F3a9snXsiUq94uxZBRm67lTGzsvT85bieGmwWiCsJaus%2B6MTwKdWGr4%2B4PDFM9kcT4GO%2FhQxWWjHF%2B6Of7AQRn9kb16JKojhan94e8DsIKv73thxoWKuQRZkV5L9F84RhSOb%2BtwLdxa8Lp5T2gWtm1PXEzNJOZdA9QFo7aieygSd6CByfQ1FqNlAbRgoGJntxYpQU3Kyvflf6%2F5QkgjwnQTZ6XpSFIrz4TL2VHcNojUXopGwqukqIoec6INm4bVqkiO18Rd7LX4HR%2B4ck19f4SIaOZYzXFHPFBtaG9Z5qcNxai00%2B97IBrztd3wdv9OpI6NMemXc1Afkc8vNViAk6YILFxtaywXusSj2vkTY9zi72PuWkxhfAxyVmxdl1Rrb64d595DtdCvIzBCgV0NPMsu16IzJqV5842imKrXtIRfJFtni9%2Bhbh4RgZ%2FKGjNgVx%2Ff7i3fEt2UDoPSDg3wmK1xQ8zyrm3VX%2BLvZi9k%2Fe%2F5wEjDK8bySPIXIsvfl7bjlrzMNLry8kGOqUBPMhlTZ6DtrEoPjHEOY9cdc7QGmN451bgUQiIvKHwdxg4Pub8qmGYisTaCgj%2FUjWwtd9sTIYuOuIp%2FIvxhDhJ4Q7JcKWyz347LO4B0hqrKgWSOhPWjmWOnjUCAaZFZINb722pOEDi3PDSIc6uZJ9eaeMwr1IPZKRhSYEwcUmRfuUh0o48F3obaHep8H7PshtOxdYF1HFvTd%2FNIZy9F7di46PfITCW&X-Amz-Signature=239ffa24b1d312f27ff3b36454b0f59dd80b4f6eb64f0954e7dc1202ecc09363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

