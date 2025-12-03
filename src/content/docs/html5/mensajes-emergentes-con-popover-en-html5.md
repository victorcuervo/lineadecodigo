---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3ACA4G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICeRk%2BeNJ0gTf%2BVVVfyi4rhOFN%2F6hweQIjqWg0EvOCm0AiEAuXlIscgkc5W6VM6EM8mZC0boIN6mtKusTHGV6Cme1ygq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPHR2O0jSgJPASILNyrcAx27BYAEGTJaZM5QovHGlcF%2BnsanB2suA62VXtZIB9lX0LL5cdy%2B%2BSWJ1FMlDmtNoUK1WmvJiE6R%2F2G2ewp3SpZAhI7%2BK0%2BYAG5TyVxSsyQ00hu39OylmH6s14UMMkqGJQlxyXaS%2BcwD4BAHveQRWBt0%2BUY0QdeT8%2BGtS6oCuTVbLZFKu2Pss%2FI%2BwoxUxJySmdC0ZbhqQ62DVWtsY5d29dg%2Fcff0bHV8HNRJX9B%2BTukA4xpcvQ%2Bk5YFsF4kX9IFPmq443ZIpbRbW3wWfbxKGI30F%2BYhYtFFmtClGbqov3zk8iLE7n04oh10bGx4pVrJ4GE5hasLmc8ge0%2BlGKFLIIS%2BBOhRNgn5KuYb%2BgNnfUgdsCokilfq2Q2vSRGufm6hQ4uY9G3HwHEzyfgfmWL6h%2BSUIUWRjJF4oWEiviY97QnWc6njWRASynIHp5emXd0dIRPYNKsrV0HWNsKAtZFRkgPYnxdCBFG3UbYiauhI0qDvAGy59v8mp8I%2F7fcqMjVNmX1GNNFrqB2w7RBZk7zmvvgMyp2M5vM48dZ3ksAsn7Z6PGA3bEiBM0KhKpbXsPjcHk1ev1uo4Qx%2FlTICcQ5pH2OaBvJSgej4kmpjjgfnED5DKRgh11qnGdg0nkJ2pMMi%2BwskGOqUBs08VZEQ%2BCJ6Detn%2BPcnL%2BXc8JxZLh1birU86KXbyKOQZdghZe26EUVWapdUX7SM58zeE3JSwF0U7uZ0Z6CBKmE0FJdet5JLABT1RGN1vhlPz6j8BACuZDS3Xcbtc8Z7LHAvo24vWxta5T3z0ny63nybxt3ZJxEqm49NgCYVoX2IITXayMFsxSDjiko2t20IitWNx5vFkqzN0ME5hScCng6At8X1A&X-Amz-Signature=a29fb59afd44f8e3a112eb56e46d8d4c55f54141b31a71d903412a8939ebf5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5BU7UR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCkN%2B9%2B2DcHy81AUHhYSPuFUL3fjEcA0YRb4ySY2Bv2ZgIhAIHti3NWyweU%2Bf%2B%2F8cJ7akHt4n0oHaYeHMHj9cAwNLC7Kv8DCDYQABoMNjM3NDIzMTgzODA1IgyCtLk97cfiMwSAEh0q3APg%2FLdUCpxYca1vOhCMKnEj8VU1YeEnf8xJqID4scuMyDGsRaAiuspdNZ5PevUDokvdhldS3d8jLu2KaW%2B5owYfs8DivzPZAkAjZ3d2p5OiQGvCfuSgQrax7HrvX4ZbNK5p87DuDXCjW4u6sQucrTJcwZf5ikAwbGtc4l8At0ff7LuK%2FS33OJipKPvHSetrZdg%2BQ8emIuoS6Uios0X81PhQd0nXU1D73FBzVYSIKvDZcKmZHbb31UEDG2r7CzjlsDEHOKPrLphChYExH54DF5WDMk%2F1ZeBosr34B5UWf4WeT9gQfG3BcuIm1U5535wmwWbuK25iFX%2F6ETO4MshJq1Aw70WVwCyUR6wR%2FuJc%2FgLroWS92oTX29HghK6OH67ByFCRyAelDxL4rsBR1eOQ5AYlOGUw0OQx9Es0iwoWd0k9VPna7p9w5vrXdmgQL8hcDLEh1u1TP%2BoRcnbxwJBZUutGZhBmS3%2F07DDk2PhQDeP6Y%2FQPqDTV9EOviTI9YMuzQ19yO4WzxxqCB3a%2FZx5GtoBegUSUQAQowZhsSwOQzXfo1K2VfvzmD9B791FGIfCOCpg8USS8bqPKrF%2Fyr9a%2BXXP1oTSfjzSAPshAnSkv1YfbRhIlHdauoSNoPlHCUzCFvsLJBjqkAZFEL8ETA7NEvx0f2ylmufNPiiHjJFMYOzMxx56AzL4fficsPOtYVYvAzGlf5uVa96gyiYCuuSyE%2FrSRt735VEx4%2BdRgplvJ95ej5lZAaJCFLoQoina1GWMLxW1bhr0eIh2fVT3nxNCEfwlprLPpGOfULZwS4AEsgD%2FOvpYh%2BIakPRErxZ8%2BqmvHznc7yt7AEeg6%2FsH%2BMWsUsIb%2Fct4y5e6oiJcs&X-Amz-Signature=4e3c01d351752fdf68acd8aac6f349bb2822aad037e54870172349fc0cc1e61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

