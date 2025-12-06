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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7X6ODMC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBXpmCn4wPJ%2B52rE%2FZrD8Vs00fu5MUmhbva4VMsbYzcAiAELjlyspK5jcll9mvruhzI6ILYIZ2ylZ2%2Fc2eTbhLJMCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8nlGfzjY%2BNAUW5ZFKtwD%2BEz3jPk8u%2Ff9Wq%2F6w7wez5eAWD2WWDLP56veTd5C0Djz1A5hdHZBt1%2BzifZlxRFGuR4WdAh5lkI0KWwueOZUX1bBUnTgVKjb%2Ba9RCwiOQ0BZGiIA2ZoiUFQfwO1B4ij3EOW2Z1FvQq50gWvbWHPXla2k0oOUp8uArzJe098amiWwY8Y4MS%2B4rco7%2FMOV%2Fa0Jop90Jj%2BYQ2Pzvw8bIMq%2Buykha8rIxlZkhAIQ0wOULvaKGuJyKh0iWEvOQKW2yEwtfqL5LR9pIAbPu5wTujaZXlV1gxfhVM4xbdgnh0SztMN902%2FyukM2j7cWs4tJEUCgBp4NjrTfc5KE%2FSMmAeOzP2vG89RG8Szk8hAzIXmN6%2FUOwBOo80fRd6%2FdMpPuiVZycSOd4A81RokCIJ48vadEEfJ%2BWqN6t24byQQKmPOuOwl63gwWYySDA1I3xnKxHa3rzTfMlXfwZUtL2C2Dcx1jcd%2BCJmyiom3JjkI0%2BxM1gQVIUco%2FGWRdaUwYbB48j8%2FBvsGfipC3frdPWxBomh9%2FL4Zw0Bmoq73%2FtRd8nK4hjtQ2r6%2Bjo%2B2NBbOOkk68QQ5F1RrAoj69HRrW7bsiGBklaDKDPK65d761flKa0%2FUpOWR7qQX9wgTBQusBYPgw6Z7PyQY6pgFoFZ2GOOmF52q%2B7KNkufnHoARaP%2B4%2BUp91m1yffmdYqGN8BFJzebxZQYbIEXMRaAiJevLKohV7UH4gW3ExF4vhnzntBWiX1XP2IGDBCMy4%2FEHY0I8CFni1R%2FQe7Ehgj1aM0QM1XsT532iUsX4s0tAUIAe7anxq6vMklMQ2L1vZXC%2FG31%2FLJ9DoMl6Qh4NkquAEgJIlBT47TF6DQPlVet8alEOK2vj2&X-Amz-Signature=e2012029dbb678d3daf563baca6a23526822481ad481f8b8ad3adf2c11f874ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMOFCJ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT3C1LiI6hsXrC1irX4b6rur9g5D6%2F376iQnpaKK9zNAIgXY0APEsRV5bBPSlxExFZJzF0DC9%2Fye1tXbIBVK3mczcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCA6sgVyWdHu%2BfobhSrcA%2F4tpoBQDPEx%2F8MdP5ox9RRX8tUHcnIj1Gt8SluA8DYymSTVytqgCHeKVn8sD%2BVd%2F%2Fzv5nqiJB1kos66VXvlCyzWP4N50wcpRkuyDDrjgR%2BZJ1l0zNMclmIXZ%2FlF1yBSaW9Rfj1H9MPawEK%2BunUKGUc1t1HbXkMfJ3wZiVm8yr7ANr2ucw8ixcNskrF2aHvGeYK4uP2VO69%2FgvTZo7KMfAXUAcQoFZ%2FLz11SO6vcCETc7MeTPOL4jTATk1qX43T%2FynYniL%2F0ybW8IPmjDzAnH8jJmv%2Bkw7qNsE0VMAnXQzHcZcly6vl1B3o8tbxBcXC900urWYMcQXVJZ51vsEd2s8oQV9aM5MIGTmkwc%2Bei0Bs3v447bhbSfnQJVfok%2F0F477pSXf9uXkayVAQD2xVz2lrl2%2BF8vs17Ckx%2BANVbXIrpCnOvtCzCMxds87vU%2F5lkNV1yZ7c2HlHqaDnY6OibsFwl3VhpzkzG3dFY94nzXGQu%2Fn3rtg2meIC3Uc5qTxQ40H%2BtQppmGG9F6YUnD4Hzy7x2WfJZ5NpH%2Fu%2Bkr38HbesUEOfy7CXCeULOZoASuV99xtApfEWtBoFOjX6nLy2W%2BFMtUXbTSer6T%2Fsj1zHnUVXr5gH9bmfZ6GvN21kuMJWfz8kGOqUBw60fSVgaZe2rSE6tecgitNrA3pdhi%2FOJwQ1kTb3E%2FyM6DChsRCShpZb1EdghU0XEHnaIrkC3oJ88QCHuM4hhoW8v4bGmKRLtHL8zx%2F5Wnrb4DDsnp8FalggtkxDKe%2BlW19rpr6EFKVuMByjkEbfLU98%2FUDuoAMz0HtOAUMEAOYFf4p%2F9YUVaS6epiHJGiTa%2FsP%2BY9hK1rpIy3U4ucIQqgxx%2B4I91&X-Amz-Signature=303ccf7f0cc019af942ca4d730fe2bcfc176bc13d744c9272123e873404451f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

