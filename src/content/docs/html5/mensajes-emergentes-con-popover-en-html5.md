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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA36DF2W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQl%2B880ajcKb0WXWkHrQgTrTRUyMJutE7S68fjZrMCQAIhANWTP0CXDHz9Mj3dTrcLxybGGlycnflRR7wiN6SgL4PEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt6m8akgyvmq%2FrwJwq3AM7Czl540ZLL73ugC1G%2BgrJ0VDkDdvw0CVs%2B2i%2ByvzKXBxmmkU3yjP%2FKBkAbIp%2Bq%2FvFg3g99GLnSVExpXl9%2F88j2gwTb7TZnRsstw7cgGgXXunuxGkoVYFNtZwXiWjPUE82V9%2BE2yvhT2nTaxFxbgnNicUpwnXduSr0kLpSG0MP16o3nfj%2BBd77meZMudf%2FwySe3ClGk5giwn0zZzNaUdEXdqDQyMxm4xf666PfpecCW%2B39DPW1nepsaaubZRBgaWNIbMXQo%2B1dY5cC4v012TgOdvmvISEs%2BQFn4l%2FEDiGbMVN8V4AjwN7Pbnj0IchJX91oDcS1Zch6sxN1n3Pxfxwa05baaLBekhZG7bOEPr2n7e4Ck2jEHHzXC71HfHN0gLbrY98fpx5hjVyZEhEtJ9bZ6eZh0YczhnoN8ne1Fw91lDxWBe%2BOz41iym1UAZ6z9eNwwfRx%2FzgCNGgB7BJmICLX8edKKvZZnRo86p2yqwXHHXjvGd6T0gNbM71dZieudCh%2BGaJOOx2a0YJaEFGh91jLAiaF28gkMHjHOrxPU8u5Q0N7momXDi97qsnI4pzoiJzDZng0G5adBcdvU6I7D8%2BZdlJFdkLpjRdLlOGi67%2FqzNKTwgQDZ9GgJql4CTD57NnJBjqkAcArVqO5tX2hWlSvLXoy3aPk7e%2BkoWEoP6KpFjnCZcgM6YPzPj%2BSBVZiY3lwkB8JHoKuvZk8MQnl%2FkpCGnijOucWjS7DwTFuvXfQkmQV68wdeHfUJk6zPJMj3ZqXgMz520IC8aYnDf9L0IyjcqdQ5I%2FUxiZmXEnOaR2Lr24Dl2%2Bz%2Fe0sH0Jd%2FK7wVYP%2F4sXOqnt9JlWx%2BWHy1zDRZPnUr93rgjz1&X-Amz-Signature=91d62d32902eb1f2dfd0e472a1ac31b43c695235a2be120c688d971f0445d183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2PCADU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDMvxg0KDxAItuUU%2FDDzupHrByJ8TeooPqDCwoyvifjAiEAseOdWvoNGw4oZ9eyAZcmSOIN7TJiIt220jSQ6YhAyowqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIQ4aUGJj8FYq5sxircA6eQVkFXERusE0%2BCywJAAZnV5IRscCa36y5Wux3nGmrOH2b8TkCuwIeW8%2FXaWqs7XE%2Fpgy4sHEfZNgkYHKnEO7jDa0WDwhYDJm3tosDLaq6bux2KeksPFdPrlRJi8oD%2FGjOnxAhLT7xJrg5twVRUoQmWXn75tBXYqm8Bv8ADNvZ%2BhBh%2FWrn2zdBXSqgfIqH9WxdsYoGJds4%2BarbqRV3RJhm4xi2kit%2FL8zP8VZlhAnnuiUrBROTC%2BRPwcoZfdo6eDYJX%2B98nGaduJv%2F%2BmNoRJO9paMgiSEG1Swa8qauIeZ4xFwrd1yJnlyLKwVWYtdVDbtmVZT1tAl7IrQesR%2FVdnIZg%2BdSNu1ajJIWfA5WThuybzSaLnPVAybb2dyig0o2GXdA6QSJe7vVos2TmZ9%2BqgCqiICdyOBlh9NbWt3AS5Us8ZRo11RekJGy5SbNp5%2BcyPH3OmNld1W7ULgAiqY%2BnIquWr21pfYMmREcp1WUOH%2FSSDSYCMQOcdnzsPEhn9rTlKYGjbEYu5X7Dybb6s4Aw4%2BQZHHdn%2B0SYzfXP%2B8S3YvOywLx5gBHjbK7s39hk9TvF95fbrieItd%2Bx798l%2FU68QZG2YdhhG6m%2Fx%2FiJKPW08j2ngJyC0nLKWWAyLvDrMN%2Ft2ckGOqUBcXLCJA7a5ykZFOCDqk6%2Fl%2B4UnHOK2X6%2F%2FcfULqETBxKfEATnz65a3vIOZm5A32ky8qsESs%2Bc8MZnLzF6UoiSqHaBkp5EG42s0xSeY5GIPq7%2FKyEeAiT5G1bq91mjJE4w95%2F3ODVoqu6V2R6Csh3He3lsH%2Bo1ODMmPC1%2Bv5nlaD5q7PCPe9tQyCKXpQOuXR7mVtYBbmNoGOtyPV1SLqj%2BxPEutnij&X-Amz-Signature=23ab93d662b4e5a879b9046e35fdf9c3cd4278c681a5e25e8fd73cef46c8007e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

