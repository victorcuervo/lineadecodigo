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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGXJ65H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi6K161g76hd%2FOn1B6aE5OlrPPNOcO1Mp4wPtpXM3zPAiEA3VUm0Odnc%2FPbYbBtWsuQdTA7%2FoGDwm6iRaI4xEVOB70qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdrFbxrBNpNdhCBwircAwSb5IVlwvYroGplatKwI2xZRvrx3JmP2uTp7H1WQ%2BDWKjGL6bTlxcDS6XnHgIo2sx6wM3AzRHuDhAC1GG5GZRpB8wfYJqka0LQSTASTjK4kaKzoULKK8uIlMSrJifL3YZUDfmYwL2%2BZVB3iw7WdfD%2F1s3UcbrLsjysEKMp4l1wuEdnHo7pPUAI7IVlKdhESZ1hHfThw%2FU3rce683gxcVMr%2B31kr79Ttghc6JutLuPMchFws8swWIQHGEuSKj9aaKQ6n%2FMxF1ROfbYLVCk5qsRowXs5y8s709g1kO6Kq8zciOf7paTEi2Y%2Fz8jop0m0z%2FJ76s6HqmexVTQdcAeqEYbqpZCVUk9fx8OwVMtHkWu3YJyalGzyH5b3nGrvkaBDN1Bix8MqTncGRCW7qtfUkz%2B6wJDDGY6EyuQ70C39MxuD8KW8eMjIyBNoPTmlIT3j%2FxkwRPQuzD0pYAroT9CJ8z0W83CybBRwU7cc%2FNYShsQPxqZXFe3vjG%2F1LIcazM4I%2FD%2FrkWoqYzB%2BwtnszvmpoqBfzLd2RR6E7Nd324YbAVFsfO8mN9XoiIKFlVwSxxi0T8kTHO%2BvU0DQmthaKuS7OvYAiGygHLuWKfBDZRn1bl7jOXnxUUSqSeDV%2B1BhlMOOa1MkGOqUBbb5Vt9SOYEGZBuDcQ66vHAT2r10Q1vgbWIv4y9GhGA5v23h7Pk0lkCxdUyx6Sy3vxOx9PcHkpxB8jZ94%2B5W1zcsM8SqNep8wL6uiWqxJfXWr8Gpk2eM6pnasj6VPoVIZfpzriRM5%2B0CxU6E5hklJcbCc94lgEHwtehMgMm%2FttDHAIgh8wGZ7xuniqwCATjcrf6KS3wIriLKFkBVfpAmX1mcuul0m&X-Amz-Signature=852004424c6968b0d9e685562bf4359a064c0e6ff0a63db5478a0ca9521d6841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3SU2XO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2Fet4IeSWf39k25x1G1yAmZJlajOL1jXeOODkLMmDOgIgc5SA3TsGK1k974eiemT9Aripuj79yFyVl%2BdN7V%2BfDTwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1tzE6JzudN8VzHMyrcA1xLDY5f9FS6V0KAkvbcTAOCtB%2Bbjq%2FBc1TRnvrCXi4DH0HRpcgLulfcR9BDNTbYMgEL42CDis%2BfsnL79th%2B4nRyRpmyAqt4H70TRlY36JX9B2qm1LuEdiasixyPQ8iaMbO8bGp5fz1tBijuRsaGJhqG4Ks55%2BWB9ev5RJ9nKmrCdFDlVfUdU4HpmxlkCSFz7VAAiWEy7ZrK1sbiFn66EjMFPU0xi0Ardl2xjJZ8qPOS7PpcU5PROCOC40O%2FhWCmloZ6UgTPG2nri7q%2F2dKDbht34BwROn7FVQFdUPguNQM6xS35aGwwffF5NrEei7Nu%2BAIYTmZZVDLukUIdJE08%2BYX4Wo5ekPQa6qDV2U8izen%2BhIv76jBzZ%2Bd6n8CYIqFK9cS9Y7ZDiAGVy74%2Fq2Gvq9ms3upp5%2FqDlM7CXUNZjcgJVF4tt%2FdE0y5qoKDT8iBIaFLo8wLFZQizxISorZK0xm8ktMwtMO0uYweklwlxoXhRwDMcUYcE84xGKo72H2KJeZMOa%2FjnwZDhMZEJ%2BuvGgR5KR5fzwWUogG9lqst1OKfFcA4VHnrc%2F60JnjkJxHDia4kN9TJR5w8sVO8FuEQ92fF474FWyh4loHOZwE%2F0k9%2F9Kmo9L%2BxWTaMVlq0AMKuZ1MkGOqUBcqmuEAo7Gz1SrZyIKRhxhxm1c%2Fxtu8LDEkrWWGc9pLaO2Dq51poRRBNqxFubmEgymWvCPr%2BKcFf%2Fx7s0XQGIosD%2BvNBEzvpmZFGL%2FtbRhXId3MQaYdR0XwYgKpTSFHA9SRsXq7Iwtd9tnnzRuJyO7MupaGkHYOlBdTdx28AC%2FD6Zh%2F1YjV1jZFXk3UpPV5Y9RpLgCp31xIuOjJvrIVjL3vEBHUXI&X-Amz-Signature=d8a40c4ba03523cc8a853f76f972aa96604d90261afd4a11011b2437b02756e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

