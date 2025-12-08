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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4NYIYW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk9YfoPVg2gDsBDh91V96pewSEVh24oJM0v6GvQJqYJwIgSLeQ0Wf%2BeO8QRQP8iPknlv3r2tpm7%2BC5m%2FpfydCDgD4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXu9VaMiFJUT8TkBCrcAyk%2BKQkFwkmeLu13Z5uyQv%2Ff2P0WCI%2BGcREa47kq3nGFMuKW2SNwKB3sRYAUTSy9L1h5gwPpsdJXOVhMpkxvZkYlxAM0BFBscbYRHuFohJgmmHxkt08tsiyhAtns2jBvAYseb3DN9lxEQdF9%2Bth0qpdfbHsu0u4HdFmYbDqaWxu2cYg9Xq7M6BhimudLf1INFYN7fmzW0Ppp2YnsGiVlWSNTYZfq%2FYXnTBPOqJSOviMy6yIM8XP3c7NOyEnctz2Vtl2GC1XYxpfl99IUy2bT1vai1jwfvpmhAxX2Kvo4DY6dtCs1SMtZysgbWC4rPuRvVeB1Ir0O2wXOzkji8LTdzc2szpdkxX5%2B6qhwxxqD6CI14o1tktI%2FbUobxdqwPSudfQVXr6YN6Ti7yfTtChs1yyjxjQqXgfC3%2F%2BCiEAqAbW6N7c3aEsHEXGu0Fa2AdCFwv1A7IEOKNi5lAzGfGBX26DQavdQXDS82wEBtT8mGVI%2BNuPKUgvgflwQLyY0Rj8N%2FTxT%2FItlUNs69GDsfICwEycAxEb2ZCjqc3dthd0ieBzzjw165fYwUE0UFYBskXChutoq7vUEUNbOIgQTI3A3x9PfuWVRw2nGQEhfar3xSMiNj%2F86OO%2BA0CKo%2Bkj4iMJrl28kGOqUBQs4CWBxo0YVNt9UmZ4v%2F0wyqH7qoPxwTA4kNVuCD45E%2FJE8FOQoUrcZiqcgEgDZltswgFtrrotruNN%2B31dLJ0nCm3Dqw70oYVr4mq4tNI%2Bcz49D86rzZp%2FQnQtjhSuiyEVqD%2BrpO8kDwfE4dJJ8lRPaaBLr2%2FIY0t7JHMzFc8xB1FmzmIPaFSX4%2B4NUHA2TayB68J8J0Ue%2F9Ygz6MUf6mVzD%2FiRD&X-Amz-Signature=ebfb44cbe877bb9460b42a6c4e6990d58b54cb7bdcec455232645db3a0161999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637G7C65H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC97v0T7g19ucCSiOyXcmcniN5Wb6zZJeEQrTDt0a1%2BzAIgPdS465zv2e%2FulCEqgD8C8sCD2EgHAS0DWkJM8gEmW2UqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyw8Smz5fRcwlgHqSrcA5%2Bo3IqYywYoecQaUFkpxaqBxxst7PRcvcPD1TKAgd0BRE3w9drPfIWI%2FGCn6Kb7uhU1kIushHN8ZNp3ahYFRDwCr8xE5z7eTvZ0%2FLbXVRJ8XGUa60LxwbKLJW%2FQ5HugPK29aEpl%2BmlCAV4l3rhH%2BcVqyfXBAKtFbk%2BApoxW%2BSgh%2BFEPhqOr30dlkH6UXKQCmqigrq0mIZW8gCG9BbLkMGURpzYrye7QP3TCDyc7oAatB63w1XQgqTdJ41zR32k6zZDvXhzmhulMNrfNB%2FE1aZqJlz2tWRvCYYkSSk2Dwy%2FF%2B31zUqqOKW2pgBA4mIbXb9Y9YDsOoNB6K7G0X3i4GStXfCLZB6Akm%2BNJDTnPrpHC88r%2BT4678uUdc5VYBV9vKmuEnr4ZibFsKz%2BSsx%2BKTLkCY9S%2FidUbiwNEquVtgkJCoR7ywWvICXR5ccnVNIJ4%2F0RaM235hal%2ByGg4JgUwPrEMCBZr%2BkE%2BChcO7NKkMBVynEoBOEisrUBc36uEMQSrETAxTlO0NpOz9304IcEkAiP9YEpLMnxiovSaPrGyjZ1G%2FGodviRuQqt1JUzA%2FuPZt%2BucK2Y%2BMOj%2F2VTvRnR%2FCAygo1cIgImgGPFBWFk8ik70UzgTF4AsZxQjSjdcMPrk28kGOqUBi0yvYBqGZq4JQ28Q75VfF6dDzxIwPS2tz65vf9H9iF0Sa0CSOas5FSKNjbW7O8TjmCjYLTNaPYOJ2A3ty6EE1WezgOiUTHFNWpVK5EfxU6swG7IQvOLG4NXfIXqaKzXKYSrY15W0DwuW5EOG2kmUaOlsvy%2B8O6WQ8hUM24yVyCh4c2T1bV0S1XOa%2B4xTTsGTQCkruQ1cVU2jKGPj7B5%2BUcbu2%2BlR&X-Amz-Signature=b78311fe68ac3370fdfc945c185a826d7e65c6eb5ce9fb8a7ae84da72a3008ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

