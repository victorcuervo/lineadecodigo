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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLFAADBZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjguOYWr5fDZ5C99lfxqoKVks%2FhqqRkYqYj5%2BfumozZAiA%2FB1KNaACSwm5xKvVVoLIATR8Ib2wgK8%2BaG0MjcAI%2BvSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC80oZTmZrEbvdM%2BLKtwDq4K%2FJvYQIXfzUhrg2b7bgbZ6uesubuvShBeKZyden59qwdn%2FRL6S1Q4uWLo68wgS1nZNiIPrQ%2Bqc5AsrcF91NVkCw0ArnWkr4hkBqHw8qzPsV9a132YEKpoB45glcwg9bfYEHrCAdWO%2B6hCE5ydYrM8WK%2FE1b1yeTiO6byAEyTFxOB9trsnMQR869RYyBQaSZACdvGML6jrYWjQA%2BQBZA8JEjMeK7oGmnijEgREoJspP7fsgl5SJuQBfT38Bg8XfrrRTDdm9y9VsPXLFSHobybYrugMuE7%2FeM3K6huhksBafO9o1CR0ajlK1QFBqQzJWoApw2quzlG%2BfRYeToCwPkBsrd7dmlQk7Q88FrBCQx9BspDeA3pgr3ggI7oiVlkTCrAA2vZrc5A29xvS3xxxPe31%2Bew7dRJlHNJgJGgdSbfmio5kamPU12Zd%2BwOLeBGnoDk3Y63ZYIPGAsLp9WMSsTS%2FFzunq5V3Owq29MIVlgDPgQM2xMtA%2FhFmnCvJSa4sIfryzNOqSY9tMhhpG4JH%2B94yZw37mxUFlQaQ4TQRN5dFHyUUPoCc9RK05WWNDOF7mzw0BjWnN62i67FZDBNWaubxvcKNO6zbeoVSt%2F0aD3rF8ll8QNohr5xGJpGMw99vGyQY6pgGN22Lnf4aLKR%2FrUUQSdvnGYtBt6lc2mkwDPy7EWuPA8S%2FSqBt8kqDj86c3DbgvFf0ua85V1n%2Ft35SVN4eXisgupx%2BQ3kbCxqL8cniKo9XzTrkA1q3TplpDgBGgDHnjrldb4v5B1wviXMnsCHhqBB%2BUD5Hb8%2B40u6Q4tH1%2B1gOU%2FBpOkajFODHUfmgk7AnHbSq9NQZBlfdQZhMIUwvGRwNIDyx7J1eD&X-Amz-Signature=347eda1deca6b7fd23497a56897f3652fc62f0062ec87084d0b0cd2db680cfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJ56QPY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR8p36Y3OegbpCAnyqLDzXn8iRoSOTYjvy%2BSknnExDBwIgeSRsGJjH5ag5%2BxVjAtomMA%2Fltb%2B0mOqj8PBS6v2Keysq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPeY5h4CsqzNbDJ9DircA2sYifuvvX1CsnJeUnIdOVOp3QP%2FwB%2FCi3BuTkZ%2FRWbvnj4YmkH2xtLtUJiEWH4wH3qZDNdrnt23ka95cMpr2zmh65o%2B7wUs1HOyPwOFysTApPLdN7OYrQiE7DEgdm3mmznj6gOlmDfzzr6hPyZEBF7zODNB6p%2B5iMlaS%2F3UYu8AHHMZ6KMcsYQ7abc%2BIaFaiuBdYPdS%2F%2FwfLbO3LnAurQvz6kImveCY%2FxKUIMUrQSQ1oNa3bJNguuiiYSQ%2F%2BA6jc7TyuiFrnhemKOvcgl2ZWPyyb0p3g1bIXuoaujZ7dGIoJRNaZfRLtfNmzSqNsJ2gTpz9zgWYK7GN2VSzHkj3eT77cfEzjD%2BGxE86IV5y1csC%2B%2F8pY1j3mhB6OYDq3WV7Lv281d3%2BYIzcvrpRixTxDueFWx%2FmWxi0UhetR%2FSCFtIbYPpmIfyPGzgNvcB30TLUpjnSOBU5FnR2wPccHHqiLB6lHogw8CpXyo5X3N2x4W0vrw0iowDcLeuRdWIEYJklE%2FpiOFmlzA2KlY4lYx40cr3PG5q1bPuLYaLVAVgQJpQAKHa04A1IH1LVG8NwGnYnf0LY7Z%2BaSaucxogizPznSCeuo6GztEgTtd9%2BlVvY2hJ23fle1aklfouE3MIsMOXcxskGOqUBczq2KgabzJ0DdYQD4npEjCQXiH%2B5U0333bpqZ%2F8j0wDXKozSQAHvgGfzfQT6dSqtqckgTPQ%2BpftMURe48PcXxgd5wlwd3ufOP5i8pSwKUVMNN5euCJzKI6yZSsjRb%2BHVfinMTanJ3iOufm3gJYurB0Y%2BuHbxCkvntLjUu%2FrAC1660rkTpgAj4BClQbcBjmmkj3fioRv%2F2Y47bMZGhzCv1%2Be091sh&X-Amz-Signature=b2289e1fb42e0165bf54c45c70aea235f4ef3bbdde7adcfc0a13d4bc7f358d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

