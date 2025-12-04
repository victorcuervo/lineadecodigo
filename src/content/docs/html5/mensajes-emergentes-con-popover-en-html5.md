---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOGCEOA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEXhvDQqnbcn04QMOswOhZ%2BoQ59OUL7QpmNMoOesdrRuAiBWwObm%2BGgw6AU3Vu3diqYv2zy%2FYyLcBfHTZaazFOfzJir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMoQ6HHgUsoPRltvmsKtwDzYi9vfPfmByvS8f2naEjacP1vSE5wmOvQhEEB3pfkXlSrKI4sURd4UfHkVp8aKoOdJQ2VF1MgUtKQHUJz%2BDxNuerUZ3cDbjXNNol8p8FkcOq0TKKPQYbQ3RRwT4FAbmW%2Bx1gSUzMKt%2B62BPvYHi%2FUNH8%2BymRtx6H%2BvEwOMpsP4QXQfrrEiohBsvc92GyO7yr0w6zDumsGvS1Ns8x9ooPxX9rgOxhqZNfQtdqDQCYlO4PPt317mssnpTtVA%2BrN29ifzaCf2z4Jp%2B1uZykMPnqVHJGFPm4M20INPwKU8lf3rbhGS6fsLNCp2MjdOr17sAEx0jN1kWB%2FEiIPAzujTZkXT67kgffP4EXuxZqLE%2FFUeBGy7lgqdjKbxhGPBZwtGq5pEhk%2FrNGjpg%2Bqt2cOt%2FqA5LI0ldXwVeK3%2BsOLxj9iZ1Okcruwh6VpMQb6CS3ltc5yANqnHiJu7xmT5SoWSLhHQhrHfKBpSXv27e1tchCY9KIidUXD%2BIAHrHWTt%2B7dqJWVEHZZ7LnSIkcrk1Kq9BAekEreBGWRqR01%2FedQsyO11KQ%2FAnXbGc5Bs%2BvVxfUciMPZYkGH7c%2Fq7aW46Z4j2wQ7ofc0K60r%2FqcpbSYzc4J%2B5e4zvcJfluvonhhiKQwo8vEyQY6pgHk5WEaOvpp%2FQzEGZ8rCCw5AQyJKevmsi7eJZ9d5PzS8WBlqH5ltpibrXt2kJJMGPzDkQv9QwOMWgOlSIo8Wl9meNbO90TnsUqSzUhL2IFkrULlVqXoo1EUJIQ3EQ34iHfwzig3KTo49fddppGYThneyW82JF70wUz2f%2FCYN6jR5ExA4HkoZ8UrfbQwe%2BK5dhwniVa2djVOvtPSzcpJSaG5W81%2FQ8s3&X-Amz-Signature=43d0aa6972823eb2e517aefe68cf88eebb3ff203d19c189f32070cb6456830a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGDX6YI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGu8lDDimhzKiVfJx6rXjA1HTk6VvtMk2iprCnkxitT8AiEA7x8aB40H4WaX%2FWjGNOLSf9vm7ADDne%2FmhYM5zMPD1hoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCE7A0zCKIAKd1oLMSrcA3NgXRAvURO7DYqATavC4wONuAeCdDh2vZp6vGa1fmITHbYAHFxre1DX928pGDN%2FqlLiAgSnQBF%2FISxqdlkoOtI4rPNwUhJjsffzh5jUAwHh%2F3fCS3p%2BYg1GbCtWDCPXC2uMn2NWIEVQ1m%2B2e4l1%2F3CzY7hhZcjAZ3CNKm2ShhF%2BJlWXrxB0ODnEunhMnjlItF67nqMWTeTOj7tojy6aNQFOKh9lXMtF%2FzKhqa0twns5fleCC2D5SH7HuegKRqgSAOCwExcoLJZhJBX1jfQu89aYk8%2BH7v5zp5bjeKyQ9i3MVN3GWBdfM6M0pptvHY5nOLePxjOHN5wF5g5Qokk2c90QD3MXF4Qrrs%2FVHawx0Zer7U4QOHyFU7MAuSuuy9nRpmTmEejrKMjzJbWcywGpxt%2BLmzCFTxi5Bo1MWCRC6QT12u8%2F%2BEIhv0%2BKiStQm3ejOqTcNg87hVuxXPvjXmacGgXLN9MJcxUzeGd7H9kKe9E0c5iuqcMK%2BOad7WEHuD%2FifM2YlkBk74AP1k2a2nRfplhO0TJo%2BJOeOmQ1RewaJIKgBVQr0l7BAbrz5Ff5EaNhapsx0DwuyLSmo3OhlwYcCIfHB9w%2FUndftjLLe8No50N4%2Fjjs5oxPSaj%2FTIWRMJDLxMkGOqUB4lWd9HoIhQ537847xlEozoQprRHqRFs7uDA08f50Fjf2JDMYdEVRhShZ8hJiqqa7p5ak1JBQM9fKFxaNB0%2FH2rWUqLWp43amLCSvT5R5QLCBeEZ5to851v%2Bb%2BB3bNpk5BKg%2B0uMISTBvaL1TIMfS85o5WeBBOoRGS%2FOlsqfOpRRavtHfW%2FBlBR597Zbb6h6bItQfQ%2BpS3NqQ1s5v8QbHJ%2BCdfCTs&X-Amz-Signature=9d833fccbf7eef487273df2d5f8afad65950c7c5dc9269962905a16dc98a40ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

