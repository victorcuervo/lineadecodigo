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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXH2ZYY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZqfnRhJv8Oa4TOdlS7bHZy0Lyv%2For%2F0qZcQ0mKFmWcAIgA18mGSUqDwZ9oRp%2FjHZ3Kfb9I07rojtxF8bSEPN%2FEtQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlZAYt19XZMRg8wbSrcA2ROEsQ7WxzVAi3YnAPXl4PVquKavSyWzhA1VaRi5soZefJKJdIVrBb19zt%2FNpQOAVnvVq60iO0eE%2B%2FdxzrYU%2FbroLREJorf%2FoEnBfdKM7asJp2s7FOLDTWB85Ierp%2BFH6UveUBEgVf1qEiMrBcsTsJGK6d9XI6UDKuZAebUD1sDErW%2BJxcZF%2BSXRRXzLzt9PHg%2BD2RxJTIgpGtoTbmhm4aDVhrJJO7teCzFp1ZH7FUSC%2FdcI3QgkYQS3WqR8skrqKHm1J9IP48Uy28vg%2Bu%2B7c3EUsfd8axTAw6ELEOugi%2BmOfCtWbrn5kRHLWY7c6vZsClOO9KlGzgpVmpBtMRUhBhKSjVymVDHkfL9KbTLUpmxuKtwDT7trpcc4ohRN3PiJorOE1fE32yKpr7hpqVvtbEffiSBlGvyNDEboURKeg2h9jLHPBli%2Bs5mj967dkq%2B2BECjicGGHt6Qqp%2BKVdS%2BVrbb3EcH%2BhIaEkjyMKyuxK5FhOf7nyvbxyqa2A9vC9sG0rboeS%2FSpoHAv%2FzfC%2B6%2FDzcXhJxUeTgAN4UxNepf%2BrS3tJWB%2Fs4AP%2F98jTGU7IF1ciRMioApT0Dq4Bzrp5X0aN3J2kZVsSw%2FbztQ77XQbXRhGjDbPYHtQwlQ%2FDrMKai2MkGOqUB35JaAnFthNzpx3eEBU1W6hzDCseZK9NXaRyY7EcnctNiMZ6oRZdN%2BOyDx1u8VTlVVRxoPilBtX6nsGz8im2joHB%2B5dEKZVvipsyifshW9X44SvFNVzm7jbW2Tdl0CZGYpI%2FKcSGXlVsODjl2TLBr9SWBh30TyFN4VcgHrim5zmGRzxiH%2FpIbXj7Wr51uAce5pvdmehoN3al0Mjz8xcrZUAQtDPdo&X-Amz-Signature=4defd59d06a7b26f08e416404565ab9016ca89845bba59d06cd90ce5d424f3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGQOYZ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw9qa%2BQaw4E%2BA5d1TaT8ei1RsEpTIVESx%2FrU08%2FrUoJwIhAM0u2whT8ODBGO3cSPRk%2FQzPypOsxRlqWfdEU8Kwq1n2KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Gh5mCDZo2MZHYL4q3AOsAVcYszaCX4D7T5h2ZlaYUc%2BwKaVxK5tVxDylc7gSxmdu%2BlsRFSaZ7T6TbMlRDw9Bo3ogG21JUKppiR3VVStVdGOHvIt2O23RWHKFTvoLBIEBZZadJ%2BB8x4c%2FmKDvtD9bLQIiAeWgs3rAYg1bWcNRmAOf7vTJ%2FxqqCS1KPH%2Bvt6fY%2BVIsbVBLxUq9wr0ym%2FTuT72pAvTUf40jIu3gJW%2Fh%2FAP3N6TqEyjjN6tAwNcrQv49UGgbDnF5KVNW6Oio8dfA3T4UJL063fOslVJM5gsBDMivrrKWh%2F%2FfLYRmh4ElOGnnApUpXZO8Tu%2FDNFLDV%2F8W9rp0t0gZ2efoK42DcCnx7nsfkMuA%2FMkyqSw07Gjq0SKOIP5RCJMOZwC%2BsQleSyDXDergKp1qlaTfL%2BYNX0PejvZfjajhbBU3YgUeDREQHq7slF24LPMmGNJuT61rShsuZ18si5NsKl99gQ6QVeRpPmrPdPD5Hs58jmaNPvAx2%2FJrqZ3yrFMRC%2BYsCkBfEeOu5z7pdNc%2BDsVHWV43S%2FFJXBIDbLxa%2BntzVgkeo%2BCuwdZ5jHKDzH85zRHHYjWRDsZzQhPqpsCRofzP4O%2F8B%2Bf60xN7uBJdcldIEF%2FCaDQwMUnzD2CdMGdR4r0bezD2odjJBjqkAY9IXV4aLTcyaiKVq3ueWyrB1uGhP9lypJRVJIpim7m8IE1DWn6lW0C4I3wYY7EVjSMNu%2FlQdjKCiyQ9c%2FDE77%2FWD%2FTj6RfaCR4qHHOPGFP6xgQwYfLayRJ9JX2TDTHE4KLG%2FVgUNXw9fy8wywtL3xuVyk3tsY4Mpzo2U5Uh0FlkKKADWyYzIew3UQOUs021inXfiTQhLgMlSRu1jBvo6TruevLi&X-Amz-Signature=fd81b5c91f415d81a55e6612d0ad3a0bf1b7fff1b43b50d090349b2b33f5f2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

