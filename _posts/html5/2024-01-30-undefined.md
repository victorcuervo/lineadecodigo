---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXQD53E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAF35S6KwsrBYpmocu6efqVXgNGUFI%2BkyHz574%2BdU5N8AiBNA2GF3RPbxG0F7fYDTxtfriExJ0T0P6qDc8UpMz%2F1Vir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMGG4IhWAcxH3UZUChKtwDZY%2FhXvfke5piXoadMwiWSVW4D3c2xrZTQ3vwHg306H9Dpydoudg9QT3Z6xhTk4eEgxyPhXr3rti7LF4llLdLKY0Ix5LqHJUJvUNv8OLy7MRO4Bb0U3Oj9o8tCRapdbs6OHd%2FACH980MnoVt8ssGSGWoS0DauQAZnkSVmvXVUYatUgC7o1ZpPURbQgTOk708tK4qJSc%2BaRXO0FcmdHPNl8us1FJCIVcy4P61AKpPl9YVq2qUN9On4rNUFeGunIi2WqUVq82FyJrGWOZMVJ9BF86%2BbXZhfLbx%2FJfV4c4oS%2B1J5gFxBpkm5S%2FEQB8Y%2Faw%2BBO0jMZqyEghiIv8PXlPSj03mEQz94xAWBeWCNw%2FYs2F9Wp504NcaqpgiU5XCMrOKDUHVD5I98IhwWhl44SR7tBxCJ0SKCqIpCOr5oCBvF3r0AWSQg0cIRtbI496%2BVT7tVGKf7%2FMntS5PdEc487qiKzn28uiu3VCv9ikdrcI7EKktSBXO7%2FHTq8ixkmWH32sbdlce10Wq%2BZBohOfTO600OYYig7r%2Bqo%2F0wbmU9YSLidyEtZxh5ozv2cBgA4jrCl%2BjzUiPA98NT09QpXyOjv5hKpQAxiLTo9i2Ltpnc7CYPtmsgpA9r2piM30SanYYwwZa%2ByQY6pgEUUF%2BA2T77vB%2FBN7bA9gAhmKD9aFlb%2Fq6oSrkVXPGF991uA4vLmK%2BnhHecyF0o9ox33bZoY1ekByz67TK7ZxCAWdDWnqSXkqHyF%2FMWmL0yC7cymPYJlasmdcm%2Bf8QdFepS%2FN0trhETvCCe9MY0I%2F0Bfb1BmcF5vNWchNfIQ90kKbp%2FCkPSz2GXy3XnFQhgCATH2eJUVWBCH98B%2FJFwRocqk0wbgSzm&X-Amz-Signature=cce7388a58881411daf132e7849186c4b96e4c35d13a650415b049e63326e3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLKICWC4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCQYiC6whr0Av1UEi5XSL7QKOoUV5Njy2kESSHAdD4FxwIhALnGo03bVJBIJALNEwuoJdrzl0YfBfmzztU4MQ%2F6D4MnKv8DCCIQABoMNjM3NDIzMTgzODA1IgwyWqL82bI3zoYokaoq3AOG%2F1YoQPdDmjcbqIXZA8kRQrN82rWbNaWVfJj93nDSHUZCaGVBNYWdcO4eyF0ybawYnhcKkdsxNYF19JQXOe0NPtKURF8JAkES%2BA7IZIYcqz7rioftpWFja%2FVH%2F%2BXgeusPtQOzWuGV3JwXWPxYCa%2FScPAFHI1N%2B6mytSLapB1v%2BjO4dLT1NzgsYHZSaXF0nOmhpLlq3JKP3Gl7jt6weVlQ5O6UuqaAvnjswhiNzb7w%2BulDXPYueYVt%2F3u2bwhBl5ZKaAC0k9bnfak8KTJ692q0MbgWrZfUDwhs%2BWHTX1jFxjGW8bubG1q5%2ByMGLKNCHWlFNvTb7ou1V9o3qWOpM4r65n6SKlgFmljWzIpdUqC2%2B4BJj7ie11k0X7zgJRGrMI8cmsklquNOVueeqHLeX1IQNYzbaKYEwVE%2BBr0lQzNq57jZ9j7Dgky75wu5m3CNSKiGbMdWTOkq4T924zmiZ6liTM2npdCImsczad1WAGcNgmFZ4UnZMp5Hj0hxOl8CnMgyZNBuIrmUn7YPtBQw1Qsr3aCEw60wvb12ZWwtIibngSdTB%2BCyyM3TFW5jpp6D4TCkQZ2dQ4uY4OMBtyiSDUEttGV6GDEMLMKHQSmBfC8I%2FWicNbMBbbqknKAUsTD2l77JBjqkASOJO5y5xLwD6ilWUTkpZCpx9Yrn%2Btjv4fxZ0YdUf9LxKy73YXUWR7rSl%2FZR9%2B%2F95U6Fj81dBsXtjzYZfazJmGYApk0Qcte43n3TufRVEacTEMdmty34uAEyoLSfncaVQu2AHFfPi9bsfDJ0%2FDvsDkw9T70ddLoDEUHmEhyoehzWSeBh9lbSSaoSZF5pB18o9yzm5n6T3ONFI4t4Ok4DuImLQvCM&X-Amz-Signature=d3f280917a20f10052a18de1d91e74c7b6e65b2ce6f0ab20699a595981f8a059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

