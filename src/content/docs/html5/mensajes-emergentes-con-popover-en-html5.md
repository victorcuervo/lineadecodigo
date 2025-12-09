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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4GMDAV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb%2BCx0jny7MvRCfaA7Da8H7ZkrQrPVp6lOMWjZLW4xDAIgAh%2FhBJhgwSFzcSwAw1TXoLsp2Eo8AsuRys6SUh0mvPgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtO4aA6%2FysMC48HUCrcA8NTONR3SW2JQ2bwT39h6tFT2mBF8dR9epIrXucuAzUfdaixaNwKguvoCKzngD1SjiRAm9ijorQLbewZVtzYym09oFMa57hYK0UqVVFG%2FD0Ozp5p0ZowKQvIP6RltM8dNmYWeJLSX6viNgROs1mEFMwQ8A0DeAcLrxSPQ2Kh%2F5oVbzO8vSWh8veQnPlo3njzaH9vGLNVZYR7F%2BGSyCQJ4dM4uYJeI1jeDpArovvPfwK3KChZ%2BijP0Q2yJxdlqtUClQKdNo4zuZjEBkdq561x%2BhS7PLXSLaTCLMW8%2Buf6WkmBRRCJV87FbfQA3fx1kG9scH1njaEwBtaNpEG6rfmKJ8DskhXG%2BQKasJnh3UIsshQPz0v5kuRvms9qMQ6Dil6vdsG1NTVw3e2mmMH%2BWXQSBUNz37u%2FI80oMsXv2Mn0CND%2F9POBEgh0aaTihu6%2BOEi9FDS9K5%2BuwEX%2FtnA%2FB4xPziCg6Tu6z5kGIiXvKyF5ZupiRi2aY5LSAx%2F7E4S1BOH54fdw0vLERorv%2FsOcS3Sj8wytBJt0sRgWy%2FwCwQPX52vwDrcj37%2BIUCRvoAgEMyLGHp9RueUJxQS168LCheB2SJWVRtz2OwpjU%2F0R7eYzyCUfyMDi9ZZKpTOI%2BfC2MK3D3ckGOqUBD1KDf9uWQlktmuy2cMof52R6dlzGV%2BkkurIiVquDqmq0gp0peGMq%2FvRQrO2W9VlECBJfTyo%2FVQ3vLOuEB0z7AtybTZ4qjDhDK2vd8g%2FSTy8Ok3p5nB4ZlJaM%2BB74NiJe9gQLPTFzDwA30wqRRNhsI7SBQdub6oHuj4cyIGe%2BJZd8cIxfALuAN3nA3So9qZaHpn7fsl4pGlqVpjY7POOJen9LSedy&X-Amz-Signature=9c7590ca18618429b92a12798a3e366d0323a6ed82c6f20d57d3a9dbaa103e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3J3P6A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPf3v2bqagb%2B0R9uyVM8xlbBh6bez4tML3kLjeURbyLQIhAMcaqb60YrMlIoIbYcowsQiK5HTPNC%2FdOZeqOOfoz8SvKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsHGPVgI8FjQZvxAq3AMnLDY0reJvFBrGPUZJBUlfBayv1Cm7iYZBVsLO4mniOeQphiq8RWnWe2NIQiLGOpWDQNy20g7mirhcpMwk10%2Ff%2FgJPW8wWuj%2BNPaQ5E22Nbh5QLw7lq05g0Grs%2Bb3YmrC8r9RtFST2YV0zDzQvlqQyIVdJRSK4Rr%2FZzeiExEzACc2B2rE36p5tPTxSNuRlcBhYYm%2BR%2Bvpb%2FL%2Boq7g8DN5DfFu3wsRdhDPakmLoaHNLuF3l3Q2JTfp9tqaS4010DAyejpjD5rnKozpCPY3JcBdhAcIR8HTWc2I8MXoVobEqom3VkZN4fLSDA5ozuYzUKIzjXBxLRkdIvi31S0r5RgZWZBIggIY4CYDceZukvQwRnMYZSAiTQKIeksfo01TbMvyBUe40l2j4wNaREkPOclzHn6S7gMK8%2FUY4JnIv86ZjIyr%2BZKt8CkP8ZRKEOIygkWpKazGmsu0i4w6qpzW%2FVdbgHJLqpmsFLpPFj0z9YBZVGcLfCUu5mucuTtDEBsui91CVdvg2H4VzZL%2BBx5RJ4aLRCqVrcYdLTdQ8zR%2FHCcpB0rrAwJUc51uH7FbyZqYkDtTWoVaGNcNf5qC%2BWA7eXp81kiXifZ1jo6WxmJXVrjcqQ%2BYAvz%2BwnXRd4xfSbjDEw93JBjqkASK0UTHhgatRzBnisHTjnqNlcoy65MFvwxKveZmvzNcwdBlgRi82nH%2FSS%2FkZH7Hzi8QqQD0cWGkqZdxMgrtOvg5c%2F8TksO4t5U6NcMO4GcqPxMyZgNmt%2BU4MK%2BjgMuGixNsVW6CF1TvBQ9jUnKPH1gQkTedVkefVXQ3lNN2FDYXB%2FhOjr%2BwkoyRmQF7p%2BkVF08sl4MDyMIUQSYTW9PPxg9rBuU3Y&X-Amz-Signature=8685fe3a00ba8f5762f61f0280f9ad142235ebb753b780293ca169f4309f4988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

