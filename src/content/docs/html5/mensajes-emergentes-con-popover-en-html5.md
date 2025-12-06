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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRXFNBC5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B%2BRXk0cSujcII9sLP5V99XzZ3iOFdQQZdl3G9dMe95AiBO9qkMcmXtAPn1LANlepcJJHqhmW8XcDpWXCBwe8VrDCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMNwWrFarMji6xCEt5KtwDnqQi0rX%2FhxcZuBm2z%2Bz99JYV%2B%2B0rgsjyh%2BGlXgoAtUNXog6gd8DXa0S5P61oX5kP4pqTnvf5qCGgD6TQ8ZdgMtXJL4YILCeCzz6D7BcHeWFScxHxROohzavWL5cTdVIne10ri9%2FpB%2FXtKL6ZUSh22q1XRFyY5lWi1JL1IhDSD3Pm0i%2FFd70%2BpTX4L9M7qr%2BaPSJnRDhqBg4cADTH00py%2BWwtDBRIQ7jdvsWD%2Fsi2KTdxNjjeCEjBNLOC7bmUQfFv3F4oIYmnRmy%2B6%2FXDRPDUQX4THYwFN818A6qKnlBMMgBHB4EWzybNHX0pehmJOBMYUWWrncaMsamBxSaUZaW1k228oHirVE8F1NXwnV5ynP5cNWhvEnJq6tT5FP%2B4Pe0BtIKmIGTPFNm6uoq8Nthn4iVeqzZUREhx9s79KjuD2IQ4IqycFThW6fFrUctfXUkGjPsJIYutTrS1Pb%2FxS4llVFshvKhw%2B60wVrbNv51o52f2hOsPFelJfsDpOAvmpOfHXknj2epmbkE6CHjtcPbFVr0S%2BQEfZQUed5uMqGDizaHHEajMM%2B0L1xaxno1UjyW8u92LeVUe5DMP06NMwzKsIChKl3hRAG6dspBnwqLjm31kA3XfTCiHxOD8jKswztPSyQY6pgEfBeytl0uGo35CAVNGJVJT4pQmhfiSF4f%2Fdfbj7vACRiPFkKSfBp1TmW8XshZFJ7TsiH1eY1FrdQPlcSPv1AdljwkWAMe0wZ2RE5ThO9vyduIcgLRARnMq6YnQ8koMy0qa%2BD%2FF9%2BH9fB0vFmQGKH9Zy0AXUHX2MjXfoz3tzGaF3KsvoKzPVINbLqXoCdLtWqrJuunUNWcfCxQIBx8mMoQE0fHrCXOD&X-Amz-Signature=dc664378bbc1995183296fca80b221fd14fd38e3651bcb753c192e8b33d879ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KR2ACC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUCoUx3pV7JYcI8%2FOd0pKYKEK5pGnmST3fgtU5qXmFTAiEAoYJWCedf5IgJs76tXjTL4n8LEOSE0jTpCNhxDHlJw8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIpelz5fpFbVZwm7ASrcA1dcleM%2FHf67w5yly8YmvNST%2BmIykf%2BZop3wrHNjqJ%2Bk6Y%2FW1E4kfoCeho3ugZ%2FLvlxfhG1895MH2N1k%2Fo6QtxdNEl%2B1R53%2BaCI66isIOwo6B9nnOL%2FjamKbXuu8K0C69kOwYAsoc65QM73lLDwBbvu3xpCR%2BfdpPBBzOqd4NmL10wvJhFmERkxK%2B%2BTomW40N5iqeH9X3yAeNJ81uXXcu9UGDBUQPr7HCV74N30IUH6DijCysLBz7Eby25rL3zLOlglXeTC%2FDmogsWI3df67yAbkzY1lgUGPdf7LyKa6ltHnoGgzaiJcy8OZ4NDA0KCZfdyF5v5LJGl%2FwvvxmDQeJdJvxnvs4Q68asOy0xLp1f7%2FBG%2BZh7cGI7zwapq0X1BP9GBueJbaFkyEynjTpo0YnF9qkmF0nzlI702LmWSpS9mMzLfELHKAYmCn8xiYsLPANPIwDTJqAyUBSRmsdUEfEZR011%2BvXhfyh0YVJbKcH7VX8AlZE0sGBizyQp3PtA8i97yNB7rZtIRfxPDSSoqc8v1qNo8wO0nSLY6OcPKW0AMJjK3fztKC8nao%2BnMNe6A0QNPsm67DDYJJCZQx%2FAVKzMK5PzLwx5MUphmFzVcbxuCmw8MUcItK5JdkHQjeMJXU0skGOqUB2dx67IknNCI%2BqH2bXY2Tnh7gANtF%2Br10CCJGM5CXBdqh2N32ebaJcAvDX%2B4M%2BcoKtCb2fyP6bWeH%2B4mFRyMwrNskM3fhhVaYeTRNQAwTdYMq3zfIxpHOofhqTmW0Bedg87Lowz%2BjB%2FLK3pZzyberIhg2o7A%2FysfcDfydG8fU5r3LSlL6YgLxA0FaaBLZgQ7p7k98J9FSmGBs13XEDVaFL0785voY&X-Amz-Signature=03a2b538e77fef87198c117059e420ff46df82cb70dcb327403233d182e1c47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

