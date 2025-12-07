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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767GGYGI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADp%2Bw0mJAguUAj%2F%2BEUM08L0m9URJbRoR5tTLx6EftxwIhAO%2FVwujXT1NEuiMvRHO45tnITr4h%2BLSu6iQDUaRwtEYIKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bd%2FJSBROnHfQYpFEq3APZGeAhCzV8khJyjgJ2x82mtA45LUBVcpUK1VEH5st7LeQiHBt1HuQZza1kXo8%2F22G5qoFyMxmTTI2Ud2gJCuCpdssuBoYmTrd65AmHdm08dzkaCwtsT908IaRo1Guu8%2BZLaFiZS%2F1ULz6YtLryw%2FuvMDqiSi0SiIJhkOMzcsiToFYdQqdE1bRaYQKAA5dRkeTgTEai0CIOwYdwKXVg%2FJZRZ81rxpCz16qWYHX98romTaFmwBn2cI3ZGiTT928W26v8nzVgg2VK0twlZYnv5w5RIj50%2FKSYZWaspRJuJ%2BbrYkliC8OhrbRwbkKX%2BIhITFjUoUjsA4mOWbnrvjYpX4HCzMbeY43gF%2BV%2BCOrY20BBgRXBcxQ3PUT5HckOdul5obndbpFEUmgoJ5yIEOXZpWaVNyvj8osJEa2sFVUiH6YY6GgTzz9MPk8Vbf7heE6s2pb4e%2BF5Dyq90zO5YTAQVT1Czx4BjijxGrFw9%2B7LvJWHNp7JbXEJ51qDvzd0ffhcgSJNcfXXNJavUEc4YLuQBiqHySPPo1KFGShMQveXWBTxE48ZwBKwdfwPhyLS5FJXE9M1E75OG9RdHxxXQXJcECcY51%2F2GaPCS81ybV46uQ3MW5SBmr%2Fn9bMyD0WivjDCo9TJBjqkAWrDPiLBLe0ayVc1m27373N%2BsLx5KgQzNXVdWCDijqfEEVAliTtozyvaqAE5BucfqXAoMiJOXgO9caKUqSz1236Zy6g%2FWmv6FAk2p7%2FDNQerzWHTb%2F%2FzlQTTZSoT6wOskaV6DyIE0YS06jd%2FtYx1XF0P%2BsIb7QL7poZ7eVujibBqarPgF95XDz0PctSKZ5475gp4Gvt%2FWEChERaR%2Bie%2BQfn4fQfr&X-Amz-Signature=0637294e933124fea3c20f5515ae96b4dc70d3e3fa52b294d00ec5b4b60b3868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJY6NJXK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2XDETpyyu4aBbDsdB%2BkohPc9XFYckASFm0vxqlq%2FqwIhAP%2BylwleskZ1mLNQiS7e1f34uncV2HQ%2FzI9Ql9RTE1uiKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BxJ7Ti4oTTnbJLOQq3AO028GwVib0XVOoYdhg0VuYEOSl%2BDT8Im8G5MugsitZRa01lDdco07JV1w7f16DCpGe6tcuo1gtcnbxUh3cVAZU5%2FMLrluskYLhainTWO%2F5rtXG8OfsHi2rdhq8%2F93tKPXi7EnCWLmngzddVJCRlrKjxLK25wTEBhkQLPEuvvkNNNxzY9kWXSdbCQEhk%2B1%2BSFuskLNfE3yC4XKOHyRyR0hslGGLZNMbRhkO5vE%2B%2Fb7OxnQZdq0i0e03XpNf5HPLeQCPWsAbdAhAUqYPO5OQXbRG4keoBGBWNzyGKljGXguOKSAH7CKy3otq1y%2B3G5MlS1Uq69tf9b5QtgPl3QnD%2BReJsyH2r%2B5wED1oJcnNzrh7c0GCfXM%2Fkr%2F7HpNCVKz8OgqdFCe0mF2nKCSlyj2vn%2F0byNHWTTXmWEdKNH1C9ntPKw5wNy%2F8KzVMxOcr4WC%2FMTRVmusdSj78WXWAeVTmqZqNLxE7OVaw6bVnwGQkI4oQagTaMI1GtWU4qTSKJ0UKhQv04jkcIkfj03DtJfpBxL60QaMqmNPjXfS6szSa0mftEqptacbrxNHGsOyyaYfJM4IkfVHCqexdlzAKwOD2C9vAWMO5ezOjArdxM0hAyz%2BB%2BCcq4tsZ5%2FYaLqFr2jCzo9TJBjqkAYaSgNwA%2BDrmQo6sBodkhwyo4w%2Bx4kqUXSw%2B5RtOavG4PZO%2BWT8MwtQHf%2FSNpFViItZRV2wPzzkevtVJ0uszE9kwzgcovjxtrKt653o%2FBStrLQ3QRQDA8p5zaxttNyzT3Q9OZX7Lza%2BvARGR5WGbBsAvFYRWMKEUsme17Bh7tGGV1HGh1LsQUM2y5z6tHB5VjobHpNtlq262WlmHd268v04FP0RG&X-Amz-Signature=612db10fb7f16c8228aa643409ae9a2b78621310d89e89d778be38f1eb81107e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

