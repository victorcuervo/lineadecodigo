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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7JG75DE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVbfjsK3fZ2dqq7UYHCXQ35izq0ZTDILwCWr%2FZywxb4gIhANUp%2FYdgIo1ESNpL201gkEp%2FsVn%2FjX8tBNjr88unitaIKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywM%2BE%2FpxEqwwUVJb4q3AMSEtWFlR9ObXOux41o8OwCnI1fP%2B%2FDGfVTMBL6PElhfQhmpoHBK6N%2FXaJAYNuWrAdWSYEf%2BFeLje8W0zL4lCS4d4CEOMqNkPyX7rhoa293EIehC2ydxRxL5mJhDZ8t%2BgFohG7NISuPS0J9MAqS%2Fxo8wJOwUMOwcVxWOly644fgXMY6Y5qYU4b74VNrsRESkCv2cu3OIsSLOrsd%2Bz1zxyXH%2BgSOK%2BZbS%2BswwRpkoqIm3p5ynhuVXZDpgHeCcpTGUYOdAeHUXbtWtWnCrgoBVHTtMYYEFqureOEUgoVP3mBBgcg1lTrAp%2FxhA60wX%2FFAyUVVLhmSY3G72SrEY6aoQxoEDFWiZi0kz3EPBQegrJbYDP%2BaDyBi7B8M9MgGLo6rfzA2D1fpTeWn2KRqM1xsUYS09MvbiV5w6Tb8YJ8H9HUu6QPqt7rwjznjx3gzI9h7VdQWWpjgoyTQoRfD3cn0%2Fy7inKKtGbeZ%2BH6LykUmKbC2M81OAPJ7ptWTBlMweHgV9z9CJE2N3MTANCqhj67FDN2fMfjT7nFEqnE2thVZxi7TLJfC%2B9RGevCsNXj3f%2Fwzarkk4mT6AVaCmVrRUOfDkmufDErhtUDk9adh0BcbAFHsP9MOa5dQ5Etmt%2BLCpDDF7dnJBjqkAb36%2B%2BICOE%2FqcmQt9UoptcwtO7MIwJ1Dc7b8YQhBvUETzn5zfQP5uXO47StNJBmeZRt1UPZcEClgF77dAAtyo7dFcvDFMQ5QwXQVCtaf3VDkqcesbGHFtxuaF8Bp4tRK899SKpJxHxjcsPoPsKZx23VkcyHfodCfpysUi0Og5tz9UxIY1YsikzjbAKqlpq6rlVt82JcYtXd94BTWEUZbmuleU1Jp&X-Amz-Signature=d2683274cf62a5261dc4c2f4452bbf273cc7ab811b42b8b12f0be617b3da0bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYJATBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9lM%2FLwRryf1jBfF0aNfj32GBRbrU916wlO45ReVIBxwIhAKSWM8s%2BZCpXd74DMXhk%2BMtheJikm%2FuWijrfOfh1Ur4HKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy4cRQey8m0b95z44q3APTxx3W6uba%2BVGDQkZkZJbl9LRDhjnkDS2xDO6honZqZ5e8p3lD%2FtCpui34wXZyNNscl%2Ba4fKJpnzt%2Ba0ndNZcASXnpqOrDpFMaf1AdqAtIIIcqHdxn6qukoyemhn1of5I48FJJ3IWjELJtrEMEM6RfcnEDWMrdDBkU93%2B8FwRYDZXr0GdROtPasoR2%2BIJRg5iktxZLWrATfk3Ql2OGYD%2BLZX7sz%2B3NTfZeW0Anw28Rfdqu6%2BIml1JuXaaSMYGg5pD%2BaBN7%2BkFE6rpfMIB%2BcTOSg0EnCoNhkVNRsKEnxVh3XngDrqzqlKlsluk6162gxfLAS87GUQ3ZbWfDwR%2B5kANzzhoX%2Fy0yF1Y6jAjpUovHaPN1ry%2BGxwCGcvnrjS5pecV5dVL60%2F2ft42KVR7VXZI69QKWhFG%2B0U%2Bq4OoMkKKufcOPCQZ8UCmPeR308tAYDbEay6vkNf4Jr9W5fJ85bOVCE3mo7ZKPMKN9fPTDaURYiuBZlI%2BzVEexhZsXyTaoYpw9Gu%2FfLieSrD6yq9Wha3xUIuyGQIcfsWvPxvrMzdnCMQdRU4H2bm6NTU2vkyM6fQSB9GB9yoA84ALTX9Xog%2BUKjI8McqOmz%2FYo596d0n0G80XzQ%2BU9ZcYtcn%2B2FDCb7tnJBjqkATZE1l%2BN8pWlsLMaMMpmnNfmLpeIU5o%2FwgAIwymM8VZrT3fAFF3gp6x0TjLC3%2Fk%2BSjNskcu675mDynb1IEV%2BT8W7wsSmlxyqOcWvnElTBfDKSUp7bURXwo9AHjZVE%2B%2B2zMyERgw2vu240wDhmv2Rhtt0pER9xRWNl0%2FC%2BqQ6trst2np4CeRgPQK7nT%2B8E5nFcm4oRyVHJ35dx%2BIurp3TafiVG9IN&X-Amz-Signature=48bf2e9399eacbc2bc090b7bc45f3fc3e792205001bb55d74e0b1f9045c47c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

