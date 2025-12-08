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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QVUDRE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF268YduDOtIf9iZzwbzwaHcp85ZDbmJdAi8biJvGEJqAiEAztw5%2Fkyv%2FGyFmwGslcHH68yVgk0BLroXNw%2BR2W%2FL250qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRFqr2FOxZD8Za4fircAy7TAstbAoAy2JV2UaV2EBR%2FBcyvGqwUK3A%2BuYXcNOaL0liTMUnwiDkFyUd51sgCtJQMkFaYsoMmsLjEYIGNidUcZHUuA73voJIoRZM6IXWT8XY35%2Fc%2BoRVFoz2jgsqgh8Nuyv6%2FzKsu0eQlWVNjs7%2Bx%2BIA2%2FwCNhl04CI9CK8F3M9WNepPadJuKCwQo5rO0UKTZuFndpNl3CyIkJwssP5P%2BJc0zg3lla0XKR8WAIdTz5Xndmahl2tCD4W01Ul9Aes4PKbeiSirIa5R6VL2JnhaP7P6uPb2BI1yw%2B8OuaMUYsYDmRUEVOVE6i2W9EVe4y9Menm5wfHXGA6MmCKRU0gSZ4w1kAVLGl3zJYXeSES5G9JieDr%2BjvtjWB11Hx6VEO2chIg8Cu5XlfUhGWLA6Z8PlmOXdMyJ4bTBBlN3BLz6ZyLC6FNWR5MufhQfB95cngAiXLqUf9B6NamauIYllmjcKRdpLTl1riXX0XXrMjdzax2O3JznxtmqaW3L1iXGScRVPPfvnpPxNN7RFEdoU%2BHq%2FKqwxHpqkV0wxeV%2FMPUTWv1oaynTuMiyNxlUgpoM%2F7RmyOOpWJvDoNaJ5muVZZBmhgmtzTaqIfUtdot4eyvbgohgCyQfZ1%2FXfTGsMMIGA3ckGOqUBS8MtN4REKkf%2Fo4bNnsVYTPqA0HrwV%2B1JgLWAr4zem3H03B2CSegOxEjilz03gp%2BL41Pz%2Bb5N9Nq%2FvmMd8uO%2FYLUplXKtuMJSKj9p%2BmZSPsMyG9%2BlysNxm2e%2ByQ93vnSxlUi47WqE3xO9YTCJQOJ0NEa4MIO64US26euKvDoQ6LwS9YsZFSuY06lMzOD4sqoReBZ%2BIDxN1bzk832ABFqaNj6hCg%2Fh&X-Amz-Signature=1dbea5d6155193a3a41a8ace848d78049fe6646abd14c7b1f69f171f25187b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6JJORS4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDubjy1VT1jcEd1uk7NYMgdgjDZv2ONt52%2Bps8ImNIXdwIgfkBGN2F4Ntn7LCriG5ABTej1ps0mqsYH6RYhvKxe3FQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2ZYGRcZ1f8%2B4TyMSrcA5OLq8TAVNx%2FtiPwnVjyCgn0wVWSBMfwNPrba9%2BLDSgQ%2FMQ70ToAw1xmKHR4gf1iMTuKxDi1937aTX7GmUj%2BPWT4ygyslmkNDP3z6Fm2SH9DaKhcgwBG38we%2FS%2BmAbs0R5qbxvsuAxGug3Hy0nC8hppzxnyQ3f62mDMfzH74T7dhh%2FZrhtm5yMzbCelWD1D281PyRdNmHRtmMQbElFEVl8L%2F3Cp9svCXvJ%2F3FR93ahZshCH%2Bxk6awTFpNRLR13TqS%2FI19QnXE0VljGnS3zcvqybxIUcDNPCNpMmLnOG9qciBbVVkdmdnHDZsth8caC995Y8eTWN3BH5acqEgPPKkUzac7E2uc76NY4N%2B84xKMPeSYkG3txY14btgXA0NcvWIpCIdyXGhKutZSeobjaX%2BOtpZKyBctaL2x0rvqtS6S0bqkYXyrDNDUgnii8wKbiPnEyWEnR3bI8PCIppYSiN5wPvC3zg9Mz9ax19Ru86F5Cu7bpixdSKXMAZt84C69QBusG7lpdQeMyUdRRr6UxN0ZOPzOc2Uv9S8f8i6PcrNdPfHrAAI%2FtkuVV%2FQofFOKbNEo3BFAFU8ze%2FoPeBZPmFnIkoC0ApnQB9PdqyUGJpw6U2HBsC%2F4mF7CFcyg6imMMaA3ckGOqUBvOwKYijf%2FiYPv0FA1WXGeKopYkAgVgv%2FZgVV2HCRRnZAorgmIPNjcQuM6Wo4GNX0yUlTsqzf8Yfn9GJFqAvdpzY2KtLjkCZZ1Vn9dwabxiQJlLZvQ6F%2BcFK2kcBP37YEe7%2Fcy9WB0gxoHWpkdZw7cILgUxvCr2sKSN01Ue%2BFjtkSmN24M%2FmcSSrSJcERDH7UH70NBvx5T0jq9jPqGSUiLzP4qA%2F%2F&X-Amz-Signature=c4f782a5ed5e71c8d22d49fef6085b4b60f6d3aa03d0c5028d098149ef333411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

