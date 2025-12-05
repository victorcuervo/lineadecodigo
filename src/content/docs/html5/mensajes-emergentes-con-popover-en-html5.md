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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMSPT36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BmkKdseaw8DBLhzH29Pn5CTx82C8uYBgtz7%2FjModkCAiEAzOF6Q3KLwbYUm91E6Da%2B1sEOW2NiHshVtz9xvphfyz8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMN6cvhcpIKI8%2B80WCrcAwz%2BU0fV29Y%2FnoRiJU8eWlwu3kdeZMgz4rZrH5ZhLRlZQ4WuhCgClGt0n4WHob%2ByXJogzFA7Dvu0tXhJTDnkhMakmqo2QacJATF8yq4Rp5QmUg53IEH6yzcV3cNbq6MtYjzCI8YZaCOE%2BXukklsVnM%2BrSE5px5Kwq01HSy0CIXMwoLa38sL6J5lQsPE18NAWMLWhKYhR6aYEmKTISuaCzLF9Yr%2FhkXU00ihDCTy9nBjQEXudJYotVetgknPGz06Rn1gN8w%2Fe4I99tW6Qn9K5fZWPVEDuYLvxALlzvRx5KG2NWVW0g%2B%2FMuxtrfl63AdgWXBFRmJewgZeNgBuc%2Faj%2FvDOQ3ecSJmohhTqfom8hEpMDMzOS7e3ldrusDWKk10MPLlOMJMt3H%2Bcubh02A4WLF8buhAuDe5GMDI%2FWXu%2FMAnN9k%2BkKPHJWljh2wUtvtOKvBbbB7XExhoz%2F0B0K1vHWrQi74uhchbldRdDqDUKiUKmmkytc3y4v97CePJZK%2FeVltYPLKRnMp%2F0KhT646bgeZn5DDtj3gEbjJghi%2FX1nZwGHUsVCwCC%2BD6EN3uzsU6hL8aIUlOKA2aQkplYtXyNKEX5FzkgnVdjqTPLBrT%2BMzn6vW20BWXKBQRCircysMLPLyskGOqUBPd7CxPkuvcUOe0XvZtG8CeOGEtFGJcnWMFUk3HcJXxSXAt%2F9d51Dd0tJJzrSEXAzI7ylkD0aoHUJvaLEqA%2BvOG6auBf5SoUymB0ZVejgajq7nnZ05RzDnEsfo7lWzYkhFxKXxF8xUIXw%2BMt%2Fr3q9yH3T6me3G2WlGC0PAJAEzuYl3GwuJ4%2FrDnxLYGM1BUdQam%2B5nfY8tZxKNOTSyemOtHI5UblB&X-Amz-Signature=0c4c47fb8e6cc9ff8ea40fe84ca4a4241b22742a86e5cd5fa0dc488aff15f060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOFEQBT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE35hLBq7u9WceBVwkoH9oTdAD7N6Bl8RBc6DEOV7AkeAiEAq%2BKYPw1i1Lmrn7lVnYEP5mQurCd5etuN5HwTSS451TEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBPJ%2FH4A3zmXpHfrdyrcA%2FuQE9Xd2xL7430u8Db00iQ2ARXlYEkgFCiMlmN%2FVeK%2FFshzWoWB9gRarkzGng7EZC9sEFLUZRCljFLSIPigX3GA0i89kXZ904TT%2Fs5mA6XeZMvp59B4hMwnVuaTE7IQTx0x49w6i2tZ0Swo5WAtYs3Vto%2FdP6hKh3U5b0YsXywnXO6BzyCE7pE9g6Kr%2ByOSmZggg442ciIPXc0MX%2BIH%2BiF173%2FuSCCDU9GdrXI9txU2jTUusid%2FYNjTiRH4J43N0vuAsaTdHU7Qg2%2FJ%2FdxKHzinBdcPsjEoZxZYgxTkuxwQNfipkg48HX7UsJ6jXh0vFpJMiXujNHaexmpm4x2ECrQ%2F%2FVW%2Bzu0rC%2FvpJ%2B7xKDaxg6riKzNojoi9ffIV1TMLRX%2FxPNXfg99O41bx9oJYQb6mBh67WoC70Z5ppwYs8jntEoPj6OG4APE3tZs4aqVCa60V1lsIVUzLfZ27Z3li1fAjanCBIckbqIy13ypAXdIDygtep8%2FagGBOQTIyQMvXA1FA%2BYvJSUjAI9EZ18zvMKhHYt9I3AhtZrOzrGT0sulKd3eZ2DmhVFeSZxvDwNaei8sKlNUG3DrSEABtNI4X1y6VSiVKSM8pGY9x%2F1VmXsiFeiQEh6Fz0QsOlVL3MJ%2FGyskGOqUBl2jnbImBi%2Bf5NR81sapcgOrOaeab4wgzu528l8UHM4TaVT0fRPN1aG69GKrXTzx12ixopodK8ceXb9yhrWknvMqZmnf7eda2H3GgtcoiCd%2FFQBh8j25%2B7Z38NaMjeDlQVKg3edFkmWtkC48T%2FF%2FDHLDkF4qrcFybTCIpr9d5JGOwisApqKHVZ99tk7dPBbjbMjiaHc8LisvJMSsurURhKdXnbUFa&X-Amz-Signature=be334641e5dd01c6720f9c92cc9754cf9173069b01d8c9ccc3c6bd0ca45d8292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

