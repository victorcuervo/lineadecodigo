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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNAEWLI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICd567dzmWAAa13JJPrVljUVttDuJDIVnSj228FN%2FPeZAiB25URiohrBuXFMZnmma2fGmHtCPk2%2Fa4o8LG4hk32wdir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMjdg35Y6d3GyOKYiVKtwDqPlSKNWNVcWlvBTi44j%2FD6hc3r9ITg%2FOFg5RqX4zTjjQicsLTt72T4PqXQlTwsmT%2BPj3s0221yUJBi9HYUWA6yAmaQNCuvVrjwCV7FmJZnqEdjKEGR2%2FqCsvdjpVVIyy6xQlsI42ozpMEu5N%2Br7L09aet8Sse%2FDEeXQmKfdQxIzUp%2Fccr4sa1becHre0GKW4o88SgZZbOpw75JlDUPg7BzBlQt5lxGm66XhvOtKzi5SDQFvNG1W7wgetQH5UWykDZnff3RzBsPNwCfPCZV13O%2FtmSo5jd2%2F8Bcf%2FiaHBzmEmB6g3IpFabrA96NgR53j0ciYvI4eV2VyQEEVfz0d02Xz1FUwWX%2Bldyad%2B8otwbV4hFBxBdYp%2BrAk1lazD8CWl1EGgQF3ie4GgUy2r68VumY9Kr3uOpMk8AnjmT6UfYA6EJ7ITy16KBaR5dMnO7YymigC%2BOBJWE9h0ozlaKJ%2FnVqm7paLWFJZAv9G6yoRnYQu%2F4fodHe%2FISto36cIhC3xKQZlNcWsqD2eg%2BIuo72W7dheddl3pOLi6AsRzCJotPDdNYUIZlrK1z3S2jiNfvEwB6%2BFVTupv6oOWuvyIidNnXILfZoyUNltzZD%2FGjBOnz2RmjFPFJr8%2BNugAYwsw5MnRyQY6pgEbBsTyfVXA7rFJWwHgKjM3WeCRbgPcACgP0eZPlvZBcKbIQBLdTlkhAyJc%2BuFu8QKsINPUbKee7rpVgvgeACuaNLTmL0UcQUh373I%2BzV1qaCEJt8ir6fbgYbkTZZ%2BbaWGbz71ufxNJjwzvnHFLz3WMB494gzQL9oQhCaKHh%2FAlH0cfn8k8A%2BoGRtngMtly2B6WdCnfYagE7KMQPUe6eWgC2AlncH3I&X-Amz-Signature=ed0f0b1bdc63a76c5982b0114b3192920ef5c952913552d5a17e15bfbbfc547b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WSBNTU5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbTqVuRGd2skYOza%2FW2Ib0DEIRklapbT4NxQ4HZsEW1AIhAPDcW%2FzlKMsZR2fw7UxW8EnZM0zgb1gSYmsQCNKCbAqUKv8DCHoQABoMNjM3NDIzMTgzODA1Igw6g%2FtvhRBTYA4iOvMq3AOtX0cSOTDVUs%2F38rKYSC53cO8SpX3ZLnaZknFhUP62sQX6ztp66PwDnLzzgHpv%2BQZz5iJOXRvCf7b47Z0%2FGx3HUZdlE%2Bv%2Frek2sZP%2FyjagSzuvHRzhOZxJBnwOIdzgLEU7%2BJ40XTH8IERb%2BpYhzsLpU8kd9EA%2BEEBLgJIYxEYALnTVXh6OU%2BTZlYnn1OVAU5rjL57jZQrgTLLtUulYRPa%2Fne4BW7EZ0QB%2Bp5g4pIiiS2ngmRJkk339Bhk4qfdDTVc5H8xVFIXhFEPT6mxpnINC8wrV9dNLi0OzBntwaTxvMI0Rbh%2FNCkrT5r9ZiX2vDMKiMH7JfYV7vvhZmQjDG8Xsq1ef9f0RZddsaIredkmLJ7SUSNXOsuYtUIxC8R6JWICTaWufoX4qlstCbZzDa2lxhbkDJ%2B2X4lsslvTlSL1x7IbzGf9WHPIXM%2FongTAXBs6Kp8R3ZOaeamwCuA%2F9GNlC%2BbSqD20SZ2BTy0VqqeVhn20uT9IEvg%2B9abKdjD5cuaTnyiKzKqNj2INZX4272ORoLDD1cxnHe%2ByRM9vhTo%2BDeG9kp805ncTmVApXPAjCyiFdV89b5%2F8S3dfGmorpJgih%2FP84XkP8066%2BWwZFg1wx8FEWb3JpMcU2wrA1JjCLytHJBjqkAajMnYn5v5Ygjm7A8sHY07Yn3IarVBL1KR5qe7iVNopKQdSh4%2FX6yHJIq8wZJyBBP0qt7EAMawPSenuvtoO6%2B4OFOKj2JCaPm%2FiYsBjJcKvSOEp9DgIdO9K%2FcBJvsYlcwwDw0oowu9LM%2FK0ui5vSe17lhVXhdUIR%2BECC8DDhv0Bhhnzc4NNHn1oq%2By2olUZtKAaYkkfJ6%2BwqXEkzRDFWO6I0Yzh6&X-Amz-Signature=e8ecf4e4558429d87feb7432058cba299aa4eb975351b4824baf927dba72dfc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

