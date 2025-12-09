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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5A6AOZV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOZ%2BtAyZMXgNI0%2Bdw3%2FV7ElnxxCmlKp8PpipuxETvo9AiAEW8qX4H1kalY8sv8%2Fs%2Bsm3pNlEELoVtsOhCsISc9%2FQSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGfZ3sJ2TbR7MOxOZKtwD0mZwA3%2FB4Hi9H0LUGGPBIevBdrJmTPDiY2idzoP%2FMYVo59x%2BSpIfNF7TO5zBzrkDVymmZrLIApaIRd%2FByBqp2mTWj6Mzs3gwuRUvLAuX6SbnvPxUSnWLPWODRGPYWpIVXj53avze29%2FC5yIFAhFtkQp%2BoTOqZeD5Pp%2F5Wk2LR9KrdNHshw7giSm6kPs%2BBHqM7wSmkEvMoaxKfYPi71xU4Ov5P548T%2BU2JMyw19Oo6Lz8MsaZh2SkqlL8RvXnggnnBvbKG78K7t%2Fl93G%2FpM4DWzyFQP8WHN8qj%2Fi1UO5D3KO1hLT377mlTzOrobEwSojxVIhsvGxomTlltsN9rWYLUBOY0aFRuL5PgPvb4k4Wc16CGmAv9oGvUoPEv1R8DpGHfFcO21Ezmj5maO4QmcuNCn8NmlHhTY6TMnZ4G8MVqBpM4bzMPVzWErqKvAKxAJgZF%2FqGyhkiYSsEKyyY72D351xCadz9YTSQqlgvD22M1DJ4llEpzzyD6p5R2be6ExTv7br3irijNDaHlVS2kUdBQMsFemb6KY2%2Fa3ALZBNBzJ2fhUkq3n98GpkRXr2CKSNwqgoXiZ0%2Bj%2FEUeWYE7vOwh01uVTkvO%2BXOZ%2BMvVjmPhJbasGVhWGLlr2%2BkVO4wmIffyQY6pgGbPvNX7BzsajZ6xHIkxl%2FkcRqbcreRAR5seGilohEXT9JdAhDdaazFBNAdAg6zz0OVNtKTZ8enCZuWU9Sj83PIDJDFU2OZ%2Fg8xKVhlS7vHLX%2BSNv4EdDZpFxwWWCPmWjI6BHURWYI%2Bhowz3ly%2BKDzgM2dP00HeXHLJmAIubjwSf5ZCq3simN2u1LKEFxUvHSQEiLWbCNglaALYU62LACnbXAj3nuCs&X-Amz-Signature=30bba000babb23ebefc8f8db1c0edb654ffabef8160f1626ad88448d99e17880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHP7PK5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXizl4009abChjc82COy8y0E6yOZgnX1QK2lEIGXfUYwIhAMTRkC2qdeEwJTcltSgeOxSYmFOqVM8TnQO5jQ2An5nZKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFXuze4kSJ6eqd%2F3oq3APg1AO3%2FxH4m4N2QPMQZ1ZCM6ikYdQN%2BEAStgitzQLQxYYzFb5FhdqvCpG0x3XVZ0aGVdSvSXDvFC%2BQc3wwsoDBScqROgyZVaOWCVDreAW28e3qZdIZA6rcR5l6UBI378dMJc%2BUAGpNoYQV5uVGWBzHKfduIMQp8DoIgboE4nALDUbdbmmYS4QazszBSJ52fyUPgxseXXN%2B3xk5peS5PrwCvGB%2BbzxZ%2Ft%2FIbsm6EqZk%2FKVwwewfdZEvb9DZFNEvWnenMdwpFvB%2B0QO9V3X8Fu7xInQ2nntWcO9zHlbkw1gPwQ1kYXpWq7zA0itQoeImSJLyW9IZv5rrIXkVsv8rwzhNMOBJb7kVW9%2FkuPIJHI5akmeVpTiG%2BGnPvkxuUmksFxtFtEsgloXaKjRVZObkKCc74d7SEUqH9J%2Fh0YlhLCln0BPM1g6LHikli9vy%2Fnx7WNLHswxHM%2BAlOR%2B1q9xxQSjQHV4AALNk23%2FvMwTg9R9nA9IqV3cMHpPwuE9naTBenQS6cK6M4W066BvaBnG9S8IhfN3VEZCnYBCpmaUudojNr0%2FuL7FVOkLQYEMnEiBVRdxJuOdwBhV60dbCIAubYEMxiuPd9wyCcGiXQSA%2FkvdO3tlEygvJk6b8QqDwUDCs5d7JBjqkAb5MzNFW8%2Bt5Z26MITgC7sAg%2BcFHdNf7myHgRtJLYx0awDmyoh8kbfeLnaUUtKIG%2F9AjpJAWdpcIrbit4dia8nbgmA35MSuGIR3ZgRuMlfZXeiDofh4WXu65xfDLEq5j6fLCYg8GsaWzDWWWrRT2%2FCBQg1uQ7bgrpAQOdZ00aNXE43LXzvktQ73%2BoyTQ3HpcC9twiyDP6CSwmbGh2qOv1t6Lvl4x&X-Amz-Signature=77afd16f111c50d8e6ab76b559628bb3d0692af3db4ecc2ab5d289e6b393ae38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

