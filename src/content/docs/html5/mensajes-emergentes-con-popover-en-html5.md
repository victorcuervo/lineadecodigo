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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYKE7GU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACK0GhiWpYqcSL0yZDbnCAec5eRFPrDKoVQkSZOpsRXAiEAp8j1vd26hrZX1QgjEjg8OzV2aRkMFoplRIa9xontNqwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyiGHoWp%2FYHPRhxDircAy0ckd72LNwbKUTFLoUV9TF8VxDsA1WZghtY62lraIS9BddlFJfHUgCOLLEasUZBrXyjmH%2F9UqH%2BKUNow4bPUm3rAgiJBsiZJZRKS2nm3gD02wbYvzOrTxVLVRizwvTzrf3Pw9jl80aV3oQx14cIEi%2BPJ7LvqWDdcnPbs6pcP3r7glkNhGPYpS4Mfv26qi0G%2BiRHAXp%2F4D2s48dFeVjagHWF0ne62X8Lz4r0%2Fi34rtHVF%2FgBZZKzfZOb49dZ736BlTeKtIpJ3LhHSvOPVZma8GES4DnXLnWrXSV85bHADfWWT%2BWu%2BjoSXvIElb4Tod%2FVumfI7my2M2D7I2lDx8RgRmdlesFVght%2FppmK9dlqWMbpgx5AMWdkha8%2FT8UsjNXkBAo0s%2Bdcs%2F0XN9wD7ng4IrhgkW2co8ppb81Fv14PG6sgvjb8a999DzfI7NQ90j%2FmUKSLH84bPStkndM591BmM5kqNU4ajBZnOH3y1mnVm1SDUAFV%2Bc5MM2oCTCPMpi2bjlxbgWXICN45HEq5ORTokquzlztgDS%2BmmWLq33NNqBD%2FBaiHE5sXcPxG84L7X%2FCl5Q%2FHlN7flWpoBX3PzE3ugKF%2BvEXZmlcJUmGwBpH0paX0bfDQES4ztzugxMr0MIP%2B0skGOqUBFmrzo%2BewkJOkzYifCYycWzi44jWj3j%2BFgaC4Cmd4iSN0vbiosGZGUobyjL8ssxLMzGinQLQp0LoK35dmYOs2j%2BTSqZngRfRj1VY1eGNvFbYY3VKCitwmgpKVOpipCwpT%2Bow%2FoB4nWh91G0XjT2oVWLTwMSaIM%2F%2FpyDf4iqF3GHUM%2BT%2FD6wkPmgGEqueBJVHqlE6cCA5ZRfbXFL4h1oankWRzkXU%2B&X-Amz-Signature=74533558684ba513ee6c53d2fd04618b8b865c0af30cf9c70f18a9ed48c40619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2SW4LW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjIDeL2VPVY2raLIQBC7M2i%2Fi62hsvyMeXzRIgF2PEAiBBuM9te41QelLgECHbL5gT7XlxGNG97%2BFoYn8WnVyP2SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeA9QIEiaJqzlTtPqKtwDBLuSQNA2byCXwnnZatkC1EixrsZlkiA1rjs36qZ74PjLhU%2BbZhTWZ1GMnGAW0p9XkR11jmemgphnxyqca5tHKQirrwCMZ77J6qLK8vm9g10l2XnEpwjOMPToixkwUSjJ%2BngWFqLDOf%2B7%2BIB0I0MVEKRF3IeCj59McgGQxIgLFgXw6cyohTZOaCnSHJgueV8D1IdTl%2BPTdSW6cnFs5LHSZSe%2BiNoK9PvPZ9Ong%2FMV6YYxD5eoOscGsqIN%2FYorj4%2FOB%2BUTQEpT21b2E25dnBHz6Ym0Vv68p580EzIZraqBYDwGEIhWwdxsQRKv%2F70cAWcWJUspAkYajeQ%2BD8OfRgGWVaoCmecNcc77oCkc%2BqBwbnWNkO7WeoT55qAj45KCK2L2v%2FDz62eWMEToux7XDAYU%2BWD8xdV3s%2FKWzUTWV0leMGb1CmK3FTzeOPNwYmKn5CPi7lWcSuxDwNHyPiMFZFp7dIeGvnpgAsDukmZXXHRioevT7%2F2g%2B0tPhhDzuakWIkNxYvbi6PNIjc0rfTSNgx96LX1ttg388jmYHy2Egc7HUZM6T7XQDV%2B%2Br0xQx6zLd5CGSIhyxD7aQruHrl9FdmdajGdHiksyoIMdrNRnneY3A3iIAdZREyQqLLYCNocw8%2F3SyQY6pgEIgC4b3CfDfZeSwa1KKuWJg%2BkkGDo4QzAlkoiPPhehVkYtkI%2FZMYsq20Acuk53pZaC0oJ88YAQuqRsQqiggTftWAAhJA3UG2GzDcfUpJJKEGRoPxIy2KTYK3XgjIQwPVoDuPMcyfsCAk%2BWw6A4nwrBvBJoR2QUNijtDH%2Bq4FAJjS%2Fm6cC0O0o%2BNwuW8Prf9N2vF%2FraA3Vwye%2FrQijnxZrSgF%2BvVdai&X-Amz-Signature=215a229eeaebbad4065949ea01085a7392fef4ba44b8deeee5f5b306c5d8044e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

