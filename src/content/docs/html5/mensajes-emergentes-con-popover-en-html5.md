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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632CVMDJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHqSv5chsHjdZak3B2J2E4cN5DaOSz18oqaDyjlVZh8AiAgj1ookaZ%2BxL49xuEidN3iQIXt43SXpmmERky6xyn8ICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMznp9PKegislNPzKaKtwDVZaW1vGLOhwuFtPxnvHp9EUUeMSqzMIfLibw%2F8zTCDsCGEdNNa67HoQ4vw9Mpj10snBzb8U9rqTqZgvNuwfW1qa5oyOpUVH%2FwcrmLBtP563%2BpmQi%2Bryqyv5VJxdb2UZhGDxoIzfN%2FuaeVpPX3hr8Y0FTnRr2Xe5OpXcxOSg%2BqniKUy6%2FKe2DEYJDArGPdUKqILzJR3zcnCJrSJlB2OyVZA3F4wya4INNiomjJxh0iRqPAUcJAizM0MH0jnfPdfnaY86Yc4b38WKU1OlPrcEDSbRtYRBVFFoR%2FJGTW2PQR%2FQbCd2H%2FI3V6IwI71TlJnKpGfL8wrTsLmHycbCbDsT6bpX3Vf1HQ3bgRPyXQs%2BBl1VPTmDBCtI99ivUtyFJ5%2FzfXuFQ5MV6kO5Dt5SmrxCBAev429cktz1w27ZBB02OEekkcCyzjYoSAM%2BkToTkQZW6%2BhK0BoZuoruKC3VIHBkOe1FRw7ysMn1mRgfCFOxIdLRbPMBTkvejVg%2FUl8h3Rav6AinolhJaRwM3ODrrakz84%2BBxzEgRicjojx3NxVY9Q1R64Bt66mLMJY9Rqwr1LH%2BGWO9aVtSuR2oeBni%2BRyfHogD4yfkXYfAHlDqj2tAAlxnYzJ5S2zhJm4zkIrQw%2F4zIyQY6pgHwLBpQGA7XHcCO3%2F95gudbMGoC1%2BPhgcfchO%2FeGQ3n5CYzTllarF7ya2EeKH8e1gaDxbOB0Tb5fplo0KbmDc6gg%2B5FGVXnvesGffhd43zDUCwIEEUrIzbSiK4ZLqVR6mvceVI5qqCrs6%2B1CSMsk%2Ffymu4IdSeyZv3yFR%2BGAW3gCfxMTd9ArnOHnfC8he0rJn3SrClWizoIx9CMRGXnx%2F2bEeuzR2eX&X-Amz-Signature=d5d1889b5538d6f155a9e81335f3c4d41e9d8c0878e24ccd0a38191fe27f2daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUEZCLB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFajqls7ZQxCMNp5J%2FrxSJJ9VoG8jdopA%2F6M2sHHqoHrAiEAwtOyGcLz8aqR9v9oaCAerVdUtR5n105%2FjH7xphl1H7Iq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMFvvT0DoFoGtyeywyrcA5Apbkd7seJ1xW13FS93JEfv3Wh73WT3BlZm3uXKp%2Bdys%2B6colKAhKuEPnZjEfoWB5QO1iH3T1HnlUTs7TFlu68pekYb%2Bj6hgoFDV%2FebL9QvR3pZ79jjPHPQzl86K2MzuKJZoIdUqPi%2FIBk6XAUXyyvoxUpO3DnXcp7mEJiQSH1LO4CV1tJyYmyDlTgQnQgDf%2FkjG2X4BGS4ZMsEAO8tNxx1hn%2FqNlI7rmSH7SnuW4HCzaqM1ylkK724a53KuMyHMCF3qtY4%2FhM4D7RB97zpZFcLcipMl2BWum2%2BwB%2BWP4Qpgm0w5BSaYjeVZx3eeCoWgd3adVrLNE8VTXd22H32IEoocXGTni5mpjg%2FuGE5zoV6kht6aNO49AVBVKVNDEyKgm8xBKEGxyglZ8fpaNjOsCt5XivqYy3ChGK3j6ho30I2RcCGxXmGRslgWFBsvDzzsRwgimLTaXghZZEQ90ffodb5MztBCvjpQsGZNbglsl0XLcxPsAexjs2dN68%2FFYrpfOG42OUsK2luqcCexskOjVLBsaa1MrD0%2BKG8SGORfIFE9JQJG385Tak7NyxvWZtHbczk3P0mrlgrIAqe02ttHpEHnJq1lVYKoukVyv%2FwuB8U3eSLV%2Fgq6km7mbt0MOOMyMkGOqUBIZkaPvpZwbbvg%2FlGPdaWWKzzrK%2Fv6mMR4sOGyxsfAmM9OZrXnHPIIMhENQUW%2B%2FZ%2BxWQ%2BAgLbNPgc7uX4fcOslmigejIIylMvA3vPQKvfR0Ndx30eJYTPMT9Y9nVAK1Hymu9CsyTs1cfNcwDIwGmxn1CnAbihBuL%2Bjk1p%2BoWutX8uN%2B4N7VtL%2FAGmnwkq93SknMnroHOfZ%2BSowdox5DWiE3uCByu3&X-Amz-Signature=6a107db19e2bd7a6a52da788a6504f0ee00015c345085e7198914b8aa6517b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

