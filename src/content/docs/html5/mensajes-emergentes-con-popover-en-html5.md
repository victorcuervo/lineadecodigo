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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAADYSUJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsQ28kDz1mCCyKPiO0djCjnlu1OInP%2BF2rQJB3Vk3FTAiAzYeELimEt54sMo4XYsja1SZCaK1%2ByqcK1pNAl0NorASr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM06jmbiMyHwA36IVIKtwDZeGbNDS77toFiF0V2ys0%2BSLZrvuOGhS0Ld2%2F3qxRyf7ZEympD0VK19OyzkmnaVzUF7SyDhUb%2FohuSwsOU%2BfKwZCXj5VY0nikenF192S8D7fHoX2IvfVB8PcOOufVvjtbgHtxBhHTJ8hg%2FEoqkjOOA5ktNQfUwQ6yngbZ35T%2FlME4OTi2MQmigcy0pNlM2%2Bc8qp86tJFHqrtTltf7CRH3SBhi9Do3tSpVZpyRvtIfKzaYczxOgoVTa1VEjqzeMlqYiJGDsefbkEpFeEA4rHtQJCYN7m6hTnmm4dKAyGNJU8xvVGxPeqDkrxyrUll66%2Bv471ZXUj3yo2SWiNxjg1p8MtGXRbRr2TgJc6rLtKfQOZNOSnGIFjhSkYzRIu%2FRtrwhgCtbSgSiDbbQZbjeZdBOFZY4QINXZ%2FOGGb15uCabyVWB9e2zW1ZNo6mIxc9IqNqzmswELyvRWLMrdTTuToHYCMATUyg244JKICv9ANDwdqDtCJeBVBxi7vQCTzKHnN%2B78DaTYwMMMCXMB0CRbfv645u1Ai%2F5ScF%2F7sImaxayrs8qzCr%2BnKqHBiXndXm07MkaJ2MpYSQY7CuG05yHFDzz6D9iwy3gwf6hRppQy7Qs6I39e39kmTRPDqtzwfMwnOvLyQY6pgHkAXAwVHcwMCKw8dyEuHVEDy7dNlkohBek455cG2Jw9z%2BBPTJYMCd7x9%2FoXVjMvsUCJF6XtNLjmWI6Y0yZtei%2FolXd8D%2FcRN8XBn2Jt4ZzAm9ZBb77Upk19STocOYC73avBeenxG%2BHQUWzPkytJDUH72WlC4QrPQqcCAk%2FiX5sW0gfis9YmVAWM%2BU%2B6Fg8XmNFbfL4FHnr3vOTk%2FOYLB0NjV8fTHtL&X-Amz-Signature=a64be1680ea6b2d5e19b8c8f3970b38e2817d28d965019f8c8165a076a8dd35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654GJJQZB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD974ohbfa6wEF8iLsm83SvJC9THBQ2GwHQawxQhEoqxgIgHvxUtMiCPfttI%2F1tKfS0W1thOV42wInxAFPZUnhtBJcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBBb0WSezbpHloH2vSrcAyjLZ7ga8iD%2BT%2FMe7EQ3rbmo55fO5NxCdOE2vARM7y07dkZAUENEN5kwxcowtzqLIuhUFYmgYc8R8HCkJZDun4%2FyTIKJ4U%2FoYC4MTy2H4rgiTsoWWURL2AKEgoUaPoPLlyBAiCnx13kJqgvYmt1Scq281GjGYmxf6mUeiAFrOTVPKjTO5%2B28AfS6EjWRoDWkd2YdJmBjh9e2GTKBo1%2BE%2BbwyhSItrHL2iL67yo9WtlrF%2FFYI%2FhdhEh5cI5SVz1ZlBVSuKBXFhbVdspJyVfizG5xR6ddxRzX%2FqotQYaVBLZSsQ7Jzdoe4ElNLnS4D4GhCQ75pokSXG81ZIlPOMklP0xwRKF7njc5PatIaS7PA60RNAaWWSNC3DrHQTe8PFvxBL7oEHQTNZTcj12LLC9KSRwLW9tg%2FEffbDUglsFq564XOtXsLhdahHxbLPOdZWaofL4GOq0tartz61fuEjZlaOsTAtJrwafhnPWFoK47e8YoSLVtH6au5%2FN2Go2gJxwMmC91UcPf27HzbnIfzmvSPoLEQJvf%2FLL1Q1TmpOnOEM6xd%2BDKO8ZQ0T4NI0RNaDL8zU1RLiCG1gHROKb3xsIyn1c%2FR89ySkrLailhsC%2FHfO2%2BFSj2kwuqls%2FpqBTAlMKrey8kGOqUBGQ%2FvjJ2z6OjXvVwo3pHRFexpHbrmfjyXN%2Fr71l42hS%2FTEK1qgqElQtCFikkgdJVmja0MPfPaoS9PHGpmsCrKYvGgmeZ9PA6HdFQtX%2BkzB0emv3JAUcGa39fCtA3a%2F8QYEWV1LrF5X9uZ0l1YCoiJz6EdVU3XcHJZzIZMWbx57T5vME7B1q2Uzn3n5T06q4kwOlH%2F0SdCyEcA2cHYZq1xM3d6yrTf&X-Amz-Signature=8e752ebc51067b903a1ae715f5c875b02d4add1bafd24467a245fe35db96266b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

