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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7NAZUE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbjrG6Xjdk83%2FQGoyAZEscr5AIzpU%2BaoAHeKkpJLBCQIhAKMGW8kyY35etpPvWFQHo5afn2ixVGwVFuZ9NIYs6BdNKv8DCE8QABoMNjM3NDIzMTgzODA1IgyyqeKLjiWqQ9LM260q3AMPYZTUzOO7OH7kTphjagBWxW0fvS9sEHQ9yINj1au%2Bxki5I6PAV30iV5p6qxuNJ%2F8UkqW8PfyHl7k6Asku2hLLl8xkHWdGirarCbK2iiTFO6TdXjgAesjj2d2HM1Em%2BiMhRdSHU6VIjgCEgmYHzWTGcMV4FX%2F9x3F7gZ0H%2BFW8eIKBQlUdTEJEj8hkvsmZMkkmjWAmWELJ0gKrgoe%2Fs6d9AQ3Qoup%2FEQzfFpkEaECKnX%2FpdkYhpssKYFrJp%2B3ZrW7aKIalcX3gBAk%2BRgJMdQi2FPnsd0ByUgfQQgVI6DMs46%2BkI80lg3L6uvCeSdVB%2FLDglKIU4WYVtkrkCU%2BpNMQoXNwaqmvQQC9RkxFpNZSmOBU2Mo4x4Bg7EvBV3ExDnVGCFqh0c%2BinbEm2iamgDkuDyHHAtN8xYl4myfP06W2FaccQDmDQbS2UR6Ppdp8zRqngl%2FbKAowhDJbcbmGHhbGNgD%2BhqYPoXtwqqTbEEtD8%2F%2FMU8Ih19hX0Quy7qUuaXQM5jK3Uu8K5dWfVLBHJxzFJaXrBnVCvDfpr9MfScazKMmVrgXcwWSobOgPhMUMzSW7FqOxfdRoWTsowk1luwlvDkFoF4cbNK0qo7p4%2BGdbDI8QVVqIqI1%2FSSf1rZzCLjMjJBjqkAXtfe6pB8x9L%2F89MVA3affcm%2B1EBsdrp6jUycHhJvV7vh6GLA%2Bh42y74h9EUjlR5svPMqyDeC9OQZHulZufxpdD7Iej2FdnFW169uW3%2Bf7fZneDT8%2BwfYnlYkJ4Cfz%2BUWkPDgqXX7LtdX0tw5dGjsHts3RsqgtFJ5HxZ3l9GWjmTGXbb%2BUdLrRf5pLQ5nVdYSTyM0n%2Ft%2FDiQQbyCi3za3%2BqbZbb6&X-Amz-Signature=dd8d4e7e4137ed86643b3c17f5384c818041e0a3b0882c91150d46c629dbabd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGBFCRJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ggO9q%2Fo33qSYas%2Fbgp1K88i60KjmemkJ0cv5KyIV9wIhAPJRWj2amT8pB6hZNnI8QdpPqfldqSLKb5SBKD1u7juLKv8DCE8QABoMNjM3NDIzMTgzODA1IgxUsxy3KkI00DGk9u8q3AP3ZgPczjbP4G9WkWnAynYm0s1ZlFTy1dO2%2F%2FmA7xO9j0EUFR5SGDfMjjaOtHISSqgAmEeRORUD1RTfvzRLtvNiCfw21G1q2Bn7R7u4A8ApMlJ68YHkrb21MOOq8UkguuZ0MyFWqOaZiXQFBuxiPJ9XrQ7pfd4G4ptez7EP%2FqK7ohPBVE8%2BrnUDHkGGyLPKZOiDbsiXMWeSX55S7QFYTxBMp7eG9EvUoUiDYnHVV07OPvgl3%2B3GMuz4w1eoho%2BtVx28aDFs6hwG9N%2BTeI574Ytk2MCRxGdasFK13pMnIaNMszKpgp39tXL0rVmKsbmEq7HQbhZqrX6PojV%2FYGn%2BKehkWe6VvAI00lpG83CNM4Vo4zGd7E3MPao%2FeZRhG4%2FAL1nQXKisQyyPG1w3knrXHippr4Qd3qJ%2B%2BYqZjwhEp1HIGrIH%2ByAdtRkU12583PzppH5fj4HfuGvLOEMEE46wq%2BDmcgGgcFKPMfkr8DtunIDhN7EpE%2BjtlTDLFNtBO7Lk4IZYW6wVXdeITKSLIKVzPOG1DcGWGaTgb0GwiBQbcYcZvw0z4wrG%2B5elhur3CSuRh20ZBUTXa1QuQO4Gy%2FzaUu%2FoyM59ghj33MDHyKZy7kPGabJ3%2BBYBMNt2N5Dp1DD2i8jJBjqkAVuTbTj0GiKuOkM0m2kT0fD8FzUnTpwo9%2BafnOoV0JYY6KusG7A4qCa0Cf2CjT2y5mDFo%2FEFfEjv5ciVGnbT1wImqzMUzHblsTj2Tb%2FBgEre%2Fr%2FF5u%2FbbAmyC2Qw8vHYd84H1uRUguF6TdTM8mn5T%2FO74YqJqz0LOfHxNYg3KM2HygzG%2BwOMqFxiIWsSBNPVmk2YSoFuvvzK2s7OxZPGRK2g3hju&X-Amz-Signature=5a4dca4fc3616dc25401895f06911c5548aa50648c932bfcda007fd92f6ea180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

