---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGCNH5A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAIVB%2Fiipf9tobE9C5Vau0S4kxG3bH4c1%2Fpqeny5U6YuAiEA22%2BPuWVjKbWtB4gu%2F2FyiUqf6lnpt7ZU%2FYNmY1iBk2sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAZM%2BD%2BsG%2BNXTBQZNircA3VYF2r0gMvSoqGLQIdzkj2%2FwintFu%2Bnix52kU%2FNETz6%2BLdiS33QuB7D%2Fhoz0OhVpXsOSaQQC%2BGKX4ccEXIhgf%2Bg5yS%2BSRDsPgC5a%2FVrfu0xOI%2FbXTcdP46VeShnhdV8OL58JxAl%2FlI4DGf4DmjL8fl%2BLwZ0VaAWfanQp5hRpy0GkUSdmox3hLOOePSorl9N%2BG2%2Bhf0wU6kUGql%2B6lfP6Z3S123uokNzJ9PeJE5a0JNyJFXv4LzpCjlENA4wxJoKS0AmdmG5lOH%2Fc7SnrkWDIZ1VyN31monE46y8%2F%2FUIn0TDx0scG5OUwujSKfJ7oSW1EdAVM2o1CdCjLBW81pg73f5mc06j1PurLDASbMcDe36YOiTOx93FlJ782KF%2B2fvdTRMVqJat0JLI6Foosn9svyR6vAshWfjbklhFuOe%2F%2B%2Fg3aobjuXY0950DKreSZSaqy%2BbejArniiviyNMjrkma8cSwGSe6Ylfe4FmEJ5h%2B7B328MeYHip1dYYSff84dm56J0lomuS0X9%2BE0jJnowFN8uMkGyXl2f8sw9FwjcmLSNdzoHzEyjFunip92LqrUapyab6u4WJ8%2Fr5pvZvI2ODYp0WJUJgD9rN2c3PgOk%2FB8nEuY1O5YEPnsyK4mjB%2FMKfNwMkGOqUBrxzrjt3Se05gKDLQkcj7tfO%2F2DFiKWOcbUwX31kQQEfRSFQ4YLLUh5CD%2FGl4IzTDG8ipQ2nyM4Xd7H18ZkJpWsBM4wXfByuaEyPWSjNTWyTF03nQSZUggxiohnz9RHeEqoSxHiWF70%2BV4abEmfXlpFUp83CQ5mC9cmzmW8B8UZfCe3bIxZATop%2FKr89OXM%2FcZtkiqoppEdYZsVQLOzncbw75kHCh&X-Amz-Signature=e88708f2c94e83c1e1abfe57c0e25baeca63cf889863669703cb999a6b6acf32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIQFRA5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDZoa3oL%2BUq20TmV2jI1of7miGbx60n0zXofYsmgw9FLAIgM6F0ExtObrryz%2Bv5isnTZo2wOZ%2BQXbWo0oqS%2Bi0oEAYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJTUF6Y%2FXb3dv1ipRyrcAxKgL0pKuyFEimM11gv3goYUWwCzKtfO%2FArUy17WDws%2FW8dMXeTHBi83CpYUXRz1hLaRaJecirbydQC2fNaqrFqXPoIrhV3ocSh0%2FVP2%2BJ2GM%2BclWb1YHiJ2rw9xIc2xul%2FkcHlwhfmUhzrhbhy1nzjTX0prSNEaDaNcwdQDYpKNXwWrkTpt024lbDLEkQ26N013qeZMnFPGer2DXPBXrD%2BuDptbOYE4xlwYoyxB2r8iANhVP%2FRf4ngVgMFL%2FP1Gb0YHbAjNrtcEXbMx9c134%2B6hwJux5Y7tefQ2MmuiJGlrJMR4OSuqIaJPI47ayTn6%2B694mfZ0UDELO8KCl200OAoMU%2FIJGHU1LYPOFLQAZvj3OgN4cjCL2ijJQOgBo1WWI9jfddkzt5GUx9az0FUa66aDpCtirdsXfH0JcNochcyqmSxjPp1Uz7Xpwk5EeYJgwVaDbB5gfOTFTqlq2xGiookj%2BsTtpc98uU2QOMVQXqyYsO%2BrYeUG8jo68t5ALW60mShTrqeXH2VMOZyqf%2FpxYxT%2FcHMhtnJE5%2BwFtQaYBqJuUvjMqrTuKvNFkHVYwI%2BTKIw8oW4c9PaPvxSwbuvAyqAfqa31BkIex8y7wqAJdbDhZNosT7frc0%2FrEaWLMKvNwMkGOqUB1iCNM%2FnAFHASL9PU2wYi4%2BtVTOOvYhGNZptI2td5OkCPwnft%2BPsqNF0%2BHXZ3KLdz8dIbAPcv%2BFm83K3axERhrqF%2FkrA1J82nipX6Fgfqp%2BlNuwOxl1j42djMcbmSb54xYsOYE3bR5jrxRYTk%2B5QtQY1RnWPaeE9IyWtOmcA3udzooA10jaa40B6WeFeBIzS%2FH321e%2FVyD%2F85otfPzpw5wZNpSlAo&X-Amz-Signature=e009cf571da66ad6a25c041ef80ba6a9f1db43a6468b3d4a50a21a125e815f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

