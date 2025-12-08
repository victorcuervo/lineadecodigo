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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2ZG5IO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfOBXGZovgXgJMIiha9VsezJN7cN7Y4Of%2B4IBOxKpbUAiEAgwoK9dUawamQPSAhuG3zNu3fSSu5XN4xR7VGrBWpPWsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBOkwUgN5eF%2BW8fkCrcA%2FoqEu1%2FzyL%2BCB2wn6yIkfSJRX%2BbrDAE33AhYbBkmQx2JzIUL9GFBIn%2BYWatkePYJlAFvjOeIuqZZiQBAV11IXfgFMLPlRCgGX2GfVKNg1HBmhlUiBddFpws6v%2Bt8MXmziMeswU0kiJH5%2Bs7rDNrC2ec6r56vJ3%2B3Cr%2BAmVW9Ehw4hXbDMBb8dF24PcH70zj%2Brbo8V1KNlCio6gowOdHizvHpmsAOf5pu%2BhVUakrrT1l%2Be1ZrNs57PnJLYnvrkGL3RZHO4%2B6IHzC4prSPpQ2XRgXCFrRhOaZyUjWytdobFbvfkEr%2FW5WFcUvyzF0RPB6ZxARlNaBFOh88EY1DodbP71vIL6AW1sNAstGPDmgid54dj2lE3itJ4ZszG7XYwV9pRYz7Un%2FHJ9OuJJOCUjPG9s5QcFdaAdLiG7skMtu%2BqKlK%2BHY4rqfyzAklDQYzrMA3sEtEp7NeKdEtT7fugT9Cxp1XKOEAutLK4VAaZvsaVw7KFCBaFnm%2FFxctLoHjfxIqMkRct%2Bjlz2EAyjCbx5C%2FlhEnYNMTY2Mdfh8t44zkSE0nEX45LjTE9NA5qB6e%2FnF5rluDXPIl6HhKgzwY6X6DOar9ASabMrcV%2F0cUEbrOFEWeQj%2FEkc3jeV4H3sGMLPu2ckGOqUBUOmslIq1igV1Z9iGg6RUflL6uiT2mvkXMPTXNPkQIwpzWd5JlseT%2BgwF%2FlicgHR3PijEXRTUMakV75nze8talqCQnQ6F22gxboAdopzVkFMByWxaqzJKo6PFL7U3zz2bwwml39ja1KHCl9BwpI30W8YWWbh%2FHJTmzqTnjmotKWF4oXpEcMgXqbj77Cai1S1wsd9uE5X4pRKd8sVPUKP8L04KTqEM&X-Amz-Signature=7e8e2e3c872998afbb85ff3affa880b3586e488b5dc8744b4d0575fce9ab34c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767YX442%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BXnzbGCV0IP6z%2Bj5rJba5wt1%2F4YqFoC1WCETuPv07SAiA334a6e99T1U5DxtyU0fYmuzKr1%2FX27sTyXVSXYxxycSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpGJFInMd%2FcxmMvX3KtwDrEwGndZvP5vR1LhnZSJruixOp8as1%2BeMf%2Fk58vQD6U9C7jq1%2FkRkHEe6fAzgtUirMeyDv6fSlPLKjfVbLOT7og%2F1X%2FpK2WMvTDZWI9Ho1q1AJBdS05wXdiD11NUB36Wn8nD3VIMK0sOsIi1vW2YgySppdI8O1v%2B%2Bcl8JQSe60aIoWfATO3qo4lIxKW0tQ%2FvyPozGxRJa39ZquOrvzXlx4ec2iUWhZ%2BPuYD5FrT%2FRxk7IbU3PhCvEnOn2l2oFzOlDWUncXvLZZFE0X9fgcVJaVrcv74SzxbQd0g3Po6xP6wFzGVWANiKIxuUFmouwH5t7zjtrD1w8iDezDrdF7fXiBKtqZiMIw13SlPu7K91r4Dn0WgtcAwxqlgY1HcZZYnAN5AYmcnNH94E5VtrzbEAODOkLXcFueYrZnv%2FBoTdxzkEEh6ht%2FHNz43ohbrFv1vN5KbUUMoGE97mQ7bFhuUtapn1wuH2Qc7a4tqpxZopzVI%2FNrCfcUJcJO7ZRz92FyQAaMbSs62kdHKCwyqzbQZMm%2FosoSt5l%2FNIrWd6WfVpW0Ve%2F3A9EIvaZG21AhaCEHjL6Ya2P7CedgnRAooCWo6mdc37%2B19i2Om1kBL7TQ03YKCC3O1h%2FrJPo1kdSYlAwuu3ZyQY6pgFS8JLRrlzAkVNOAPOIP8MoGAq8G7RhjHATqdv73UgCvdI%2BWN2gUjo%2B7hH0TxrsSw2bdvj%2FGq%2B9oSVfXbpavZpG9RQM3zsXppydnmKtpSEw417QA8%2F1bMXjhPA6r4kU64%2B%2BSsxQyjekoYHa1m7yrryB5fG4jPMvMSfP%2FLhN1iBbOMblSDFDdE63EbF6guVAHtr%2BeLgirwkqhE3B0OXqx1IokbT6CXp6&X-Amz-Signature=d82201328e80ec2a451221b0cd24f47a7de20cbe27ca7a47c466d96114dd93d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

