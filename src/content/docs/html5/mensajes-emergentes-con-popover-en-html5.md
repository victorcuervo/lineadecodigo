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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATK242H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMJ9DWwSTfIbY8bmsz7F9VMNPf8ewnRz3C7CBJOBr85AiALhH6039%2BKVP8eAnrUn%2B8%2BYi73Atc46nUe87VUC62WICqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTHmtmnKu3QK78hPhKtwDPz71Ex7as15dFU3ETX6sTmsQUWdfIeaXMA8csH4%2Be9lckMzhUqkBuOmTo22epsqFpA%2BDQOIEEzuqD94x5SybCxWwD%2Bu66L2GK1rQKKeOBxGppjtdYn4A%2B3TGl0p5mqZEsFDpEqPZzNxsyl77RQHrCQkLiZjFonDqS%2BTnDRq0tsjV5FouA%2FccitghbuFWfFXyigz8zjMeSyp2u1PXxZeg%2FHj2Qo5DyhAUbkI6%2B%2BRmogoL2qTMvXjpHOf5rpGWkDfA6iyUM1QY8perxblDRs2PgxqGq1yO9mci%2F7Knayqf6HE3l9KPmDECSa169KFnDo6M8CJgMjZV34xaS0Lyv%2FhL%2FSZ6DvC8Pegc%2BJl7xxCsD77wQTOXnLFbnYBt3euF1krigRoscpaeC5pLbhWNJl8hmzjhb2qNBvK%2FK3fUz%2FApxL6LM7iaR0I%2FUgUt5Kb0iWy8rOVzR3uGsILXP0FcKeb%2FmpTxwE5v0dTX9OL5WDcBV16sfjTBAYPTvK9migQiXZELN3%2BzqrA0rdDc%2FmAPSIHIqq8F7n6ejMJcogG7cYsHoaeN%2Fcv2yqG7S9PEh7v1OHVDq6ictTEuVXdqjFwfSxd%2B%2FZgUpMaS5XehPd88U6Su7nNS24jdXrQ2ErESFy4wjsLbyQY6pgHTp%2FBNObFn5mE8PQWd1G1WHhD0%2BmQdnwQ15vgfkJpus1cIOnAL4V%2FdIy3nRtddfY0PO87ajqbkcInOrj8tgJHTdfi9VXsoMDYLE7D7R%2BdWeKkOyzgQ6gvZJMu24yoTO%2B%2FN1CIx0vZ8BiWd33cOWW2mqvSJHgV4wG974PRjpHpnsv%2FDgUbIt1vT4EB4s1qyBwY4j6fhU%2BwdYQtzlq4J%2BKIM2L%2Fj4C9a&X-Amz-Signature=45f232a0a8a4a7ca19f3e80091f44629c77f899bf3c6b4e0a0e73f7a9515e9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BGO3VPG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3V0DxdcvBmWp7MFXfYfOogoXDbzuUW6MeOI0megYt5AiEAyKBZ7Ro6K7nF6fRzz324O1FMTgsgtVJux8q4wFuFpuQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuMVxFZwjyGBbYr9SrcAwejEOl6lALJR5vr3A9iybvK1UYEUCuCmlgkQuGutpaAXTMKWH5i6CE0cTu2UUFyiirAi0enYJAJ9ukGhoBDP3CGABzwPyax%2FGGppJWGZt1xc3hZ0kf1C7%2Bp8We47U0taaYYGF3%2Fvhi%2BigMk7%2BJhFkS0%2BwANl2zPfA2p67dnhrLNUIE8ZaVa7h2UkOuVgw5w5eSYJ2xujPSMGl13vg0Vv5owTmSb%2BjabXKNPFNpZrx9UwIqUHkg%2FM0SSS6RLoSRAlUNT0kXkc6Rq%2BkcnpcXKU8sn3fm0HiHx2CHJ4iJEsnmSKjkSI6Tt53IaxWqMbsRrx6w3%2FSE33o%2FF7cd0WikZudBp0HjfaSRSiUVhRML2CjozpOyEW5fgRD9b9wl61V5duGW17oOURJPQitmMpeJN5Eg6hddkmP9AeTK426t8EOxYvgfdLi0Cm4R0tYgsk60C7qG8JjqUhkSojCDdWRZNZRnx2nhzt9YQG4ucbEHrcIPAxBT7oYeGIy8MvawSfusRPA41SJ34IsDxxIz4%2FzUrbevJ%2B8qUIHayuGzLquqHx%2BCMyVV%2FkPy2mnwkorUOMDJiopm6ZF0TutkvRFzXQBvNTVuuTtZwBCu9fBQRwNlfNkq%2B7ikNKgrTFb2L86cBMO%2FB28kGOqUB6auhza9wuc1DZIRp1CnS2nzBj7iD%2BDiuQqdXmDnzTUH%2Bksp3t2XSFRJVmIG5cH%2BP79a4Fu%2F%2FiXW4SX2QyeOsK8gt0N7TVYR%2BYuGVJCfWqTLAE58tfEURLd%2BOob%2BWdImooBAeKgmoNM6zrnPKKQ7xiDdLIxVeHDp2mHJrjKMGglltDjBoYOf9M%2F3FU5TlxJj1wE9LFe10qNJvjvX187VJ9aI9bkXy&X-Amz-Signature=316a4f726b38d6e37438cc75a172651a192e4171596e20f6a2c44052b97dfa80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

