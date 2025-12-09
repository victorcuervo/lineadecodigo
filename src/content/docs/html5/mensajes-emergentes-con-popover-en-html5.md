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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NYDRGP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQdFNMjIlo%2Fosj07E9YSO90ZXstaUqBCp%2BUsRZclGnYAIhAJrZF4Eqw68tW51l%2BThA39VjUOeekvXTIeNIoTT0sqvcKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqf9vsdbTdCUba30kq3AMlaWiBO31Pn6%2Bg2ljRTlVbKEegAkKFrI3jcO%2BGZ5IdP0ZKZVkzm%2BqI3pSP%2BEUwFiloEXfISUHEu1YUPcFaY%2FXCVbgXpOaDkw4NQEUNDh6OCP36d0aassZOd0ZCjcD9pc4glNpaGZ%2FRTs6E2P2d2%2FhoRd%2FQxP6Mj7UjDhCdebRnJ0dnlfpIcls2YTu31VuO92gka1wixaLrA4FVrJMnR1OE0%2B4crFqYQH1qQjsJGdGA%2BRTa4XRz6gnBSymTsMlzwEnk6t4YyJ8Hzu%2Fu0sSj1O38i%2Fzv%2FsFb1l86oiju3AYaS7aWi31IHkfb8SRqa%2FG8Q8mt2MgbeCtc0PSOHfHIN8ysOIA%2BMhEZtgeTgXzBKVV67p9aOMUuyITGKmmvCXSR7BS6k6fhBKGrG6j%2FCVzZf5EG7WCQHPVSZN1KQpO4FuXL8UctqoLNti8rWYEybXMD3%2B%2BF7fv%2BL%2FkGD6blvORR5P0G2oRXH8LimkYKaaR3lcxrs0ZJfdmezed5EHvg5EPz6TtLwJyLN5zogZ7BSw%2Btyq%2FSdu%2FarNWirEcWz9gXu3PtZhOywU6db1ZWvmCsOVmyhz5nua1Z9%2F%2BLNYlCWh8YhH7eomMmNnweW%2B3YwEx%2FXUzT3IfH3OjjB6ah4uQGtDD56d3JBjqkARWDxx%2B5rILDS%2FThJDJN2W1IECJ337LMGGtDiK2kk%2FY7qsToo8nLhB9bZG2HE2elOhBE5xYyh%2FT66xyaOZJeRpwrp6FnGP3%2BFbOMhJO2xThncwPyjE45Uw671wMRiKqGLmi%2BdHBacmydMIgmzsGHPDqNCO4dPLklh9CL6PPLO%2FEteZoVL7Oi891EvSQqTVDRV0f7%2BpMaXaeXlhDDEfwjep7seLYG&X-Amz-Signature=bed08aaffec33f1aefdaa6ae44c3de8574c51b61e466cc2679960232280fc9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NHWLYZD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3T51S85dEP0ujfWN0b0TQsLi0QYOKl%2BubkXYYXCXJEgIhAKznYzoJgS84YBQVyxe7n2wohoIXI8vOgUXX933SxO7hKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIg4SAK%2Bg0Axwubysq3AO1DRZhT7ee%2BA1WO%2FsHqzw9Fq9gdBjKFvRIK6qY67GM82oUSzfwSK0wjKpCsM2QedOoC3QtCg9XxGN%2F1MUFtfb8pFj5xQhmiHG6pFlDv0cj%2Fuf%2FyFQfw9GYXLeNcWmfogIsWh%2FHEiitpTajOPt2HhezJPqaOBhA71y7WnE%2BbEBToBoRv0g%2BXLQnQAZGTTLeWf6G%2FXYZhhrPbx15c8sRsEOITh87loKZWc%2FuHpc9PHDVRaXFDpXQk3MGWgL%2FIPoN8Z5Px9dijTC08%2BWBUVOJ%2BW67qcdLqBPvYAvjh%2F5ePzxNMkJi3hQG3dG%2F78zqIMrc1ArGiiE3kmI8nTkYm4m4ENJxrnF%2BKSPoWzA0QoSeJfHc5EH79P80fPmvidrmvbOh6XRa5H5IXLsJkvQFlapamHyt%2FlPVAKQ2HfEWLxfoAHeiHxMgdyKJ6eEs%2Fn1Ue7IIYpgDKc56W%2BYAbgIADE6QJ2Q6XbjrhDvnVS2ynyrJt%2BAGj5oF2nxoFWC2rYEWf%2FMY6gTVz43ZRTpkN750WcowAoGPKTL3TFA0VxL0vZbrSH4GIds6V9Sd6qHTpFFRFDnOegnKHYj0jRS%2Fu5cAAG26F36bYxhgab8r1j98J2LLFR73q1qMuOu6%2BfUKdHf2GTCc6t3JBjqkAd0R1brcP4cPlYOlSj8KwDGouhDU98yON4XfSmtF0%2Fh7ce20e9jRaMfWqpWVwj5Hk6a%2BgTfclvo4W9kZPj5LAKn%2F%2FAAoJOyc1uVH8dn86Q5NNJ8P4pyyJQhk9XII64JlTB4JC9fsr6FaVXkZR%2B45wJwDwwfwDVb8%2F51kCdJ2%2FgQoipA3ztWMEIa4vqALs4sRxqR28yW7CXoZ68iNBKQ6SHhtPVhD&X-Amz-Signature=5466198c5c674907afd80bd1543c5bb0cd840fcbbb8eee7e3f02752bd60388e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

