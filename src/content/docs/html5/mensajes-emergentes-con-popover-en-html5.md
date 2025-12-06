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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4YCIO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVRY8%2BprZhBScn3lLyFncho95v0haMNNsgaH%2BU9MzL5AiEA0AXjWTnsWHUk4Fi41KLD8%2Bi7zJTS568mgAw6G%2BNw6zYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEyRcUOAhxliC7d%2BVyrcA0hqWcPkCJQapYIn9VNzjXCCJ8ntQtecaxKZYef4ctI4VSEJREs6WkmqNTgEN5CPabRuEgnKFBZ83PV72zuxOMCEsBOaEp5GDFhUu0zO12G%2FO%2B1z%2Bhhh8G6wdl2b8FHer8cyUxMozBrUwIWjWuScQk9d8mZ8aTvewJYfvSAzsQfPDHxfvHNXaUeBGA6YivZhc9pMfvYWElWdunqwTgmSWdZ%2FxP%2FJES3tBkJUU0LgCXrMSUWRdu3ZEG9yorSOqmJZdKMD636opXS9SLAqNUNbnk4XQDziGGNRa%2FW4NXg3azJo1LrHXFwMrVf7CNL7fvGCeZwMnA%2FOxgNttG%2BQBCSwcDsj1jpASfMlWGhfY5zzP0SJcbxGuw56dlj%2BHsBtaVNIbcoyWFGbC2ttExHcMYiXSmolAABzv5njB9LDnlG8Rm4w0OPLJHgB8jCupB8NTxy%2FPxBnytObjlZCTmxDs5JWmwbeQAGmkKjXKriI2nFXLv2W4VzVxosfj8tb1HNcvYByWBbscBzx3SYHf34XIMdlFPtAPx5DOUxrKsILE9gWdkdzsafbCOEJ3Sgr5x2LDC3ib2W6X0tPMNJazqYcJwwzAPO5d3TojjxfX3S7zbvEuXW%2FjIdrm4Zi6YHgpnPWMLrT0skGOqUBm6Up7O0zuiGj8WUsJj96u0cJZsTQv0ID3wWqV7gC%2Fc7x1PecPJLWkHwJe6SGQ0tPAQmpXg1GMku0q3oFspYO2ZekAHF5sWVSIwuzvb0KG%2FcjRTxT4CPvG1yWmC4b9BlVjqSOu9JHLz4yXC6IiHMtM8V7ew%2BLpJjeKrejiADr7jR5GhkUi2CdlPppTDt1hkKkH317jzk4NLxD5bD8ifaFPgBWPJx5&X-Amz-Signature=b80591f9e988d426c19ea1b319bb6702168fbff2ec2562365c59941e4d81f108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUM7VAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcYUmiMPk9o4nw%2BQ5cYQ%2B3JPTd%2B7lkeXrlIjv0QtxmSAIgCTzb3auP89lD8L2FDvxIffhQHe7WXmfZaCTdVkTuQ1Mq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEVWylw1wnOi99jLpircA6JMXHqbEMWMwtc0Dw9kuw8WmzmVUtj%2B85PMg5PGygfRgsjJQoU2gbvI50qseD7bxaKAwsdm4m1x5bgF9oNFY3jE8O0Tq%2BQJh84nELMXmPcWiv6QBDNuk%2BPZD%2Fy76VqVGV2vzLNwY9gel2TdSJt4dLyz4mFMsqPjgZucqQ0%2FVFWmEj2jjfnzeeti44bNcBtNnTZEPPlJjeotH%2Bj39vce8m%2B%2FGm%2BiZjQdajl3BxbYOcTAV0H%2FK6EtcXkf0gvjhcF0JpMeVHc7J1DnYzDUBe8wwE5%2FTfimb3sCTM9Fzx4xwoy0dca95M%2BnT4Bhl3cyFWv29XLK6EF6RzQXj4Fm3dB113t5d%2B3qP%2BaLwD9JmLvvHqoS8Pi7PAgbTkE4SNtJs%2FH1G7Mumw4USmnwpLnt4xNul5j0YlyEbEeEe675YgMRhAHv4QW0Li1J3pyGuoqrOM4wdR0m5%2FL8vlXGeJoDfy2%2FdohZBQm%2BHEoGFzrL2TSNM9pgCcdl2zff%2Boc%2F2ehOIbVXkl66hz%2B0tt2%2B3n4iWX%2B873um7SOQ5TzXEcT3F85YeX9RgsR3L84yK5hEm0uQUidSCymcDZYkpNo%2B%2FDB0VxhSoB7eJlJMlHOlV5aXyySiEbwzfXAGiPrlPGDX7SwFMPbT0skGOqUBPFqI3K1oWzruwenAtBvD0ZleWrE3it21qO8UrPJnuzl%2B95bLJqGEzCkfZWziDkOPUgTrWqDQbJuOZinwjjMdfstNGOjM7MKLllNi%2F94rN%2B%2BxNf3g8tw8QjlOBABZSZuW4WuYbY5d7dyeIScjAx9g4aIW2VmWqkVAWITtQgWJncrNQ9wIyQlBCW1KX60dsIoDW8AoKt0tgt1l411ZYVyBbgBBPOzn&X-Amz-Signature=3bca33f8169c50614b312b012698e9c14764808a013cccb518a74b46135a7b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

