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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45HSI3G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIExNsJnbAPSF0h3OzUQz1EuZP%2BNTvVVUCHcJIAGqKprzAiEApKGRt8QgDlyavJFPMEsn77JmHRdwOKbW1dIO9Niadjwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL4sPceitQUtHbIYiircA5E3n3aDuOj9JInSFCnEr%2FXJhOMnyjgozdAoqMT1q8919N2UbNnJjIOyTzpOKViBpVOPXmveaL91CwwMCX4x91Wb%2F08n0TDHGRQvCwMyC%2ByeU6Ghd%2B7CDH0kzgx%2B6T5%2FvKxsMnJkzfFcCOaY4QXaZCLuAreyqN%2FSx0F%2BE%2FsBe%2BPsOqC4v2GgxnYskv2T6r3c6fLi%2BfuzqDAjHUnJtYcUqTorWiI%2BouU4B8PdrZ%2FvLWQp1HJFYUHVnTNVXRepbHsMEMy5%2FntVtNy%2FKkRl8WJOG3IbfiUqOhweBSqOVHUstWFIiwYIzZmH3X%2BYKxcBBSKpePHancuEgX7rB1RMjVaB5pa2qyCbeuPABvcnhSxoyeEfekXk9C1LnFqNxnWXfcwdkMPlBH5Q05K8wrpXGKTx%2FNPmo%2F3pP%2BQu4zW66lIb7vwOm%2FkUU3rUC4%2FmWoJsAqJ7l2%2BjXr%2BvFoRQ9wUt9gNZPciXG6tjeQAdaj4LyzCdFbD7AUqEa24TlqCqSCulwtu7gx5A3iXgzRYo%2Fj1KfW6Xrdr340Gxp4m4wgZfQsI8Kw7jL%2FeOUE0wE8OednEGiCqet5aDCPBOI3W1OtcLvA7TxXHSikDHBM%2BgfxIYnKBSn76FeI8%2F%2B0T9xuBDzvucMLznxckGOqUBZWWKjOpFj58ykH%2FR9K3Am%2Bk3XMnaTXyE0%2BU6e0q2b9nW4BvxB6ZWkCgRHCT9P203JwWLBh69%2FX7KMHhivf1YIsHbQ4v9sTkGpkyQPNePD7Ly%2FxlYBTuShGH0AA9tjTkFFOI%2FGE65ese45G3fBPRi0TyLrf92xf%2FCBvuKCQt7FxelLNg3TgFZ42FxDDgxOvNqxgHNmjRs1Tsxww1WaO1D4fHtHx21&X-Amz-Signature=f6bda3a33e8f089d49e58c1cf610b42007a28a04371a2596134784689509e9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSQTUFZS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDqfMF6rRtycbwc2guNyDZdZknoLo8kUKxZkI0Dg0D2UgIgCBADfLIjc7Cts3FZ44fPMTbTX3tHOEwQnCWMvsHww74q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJw8l%2FYrC8F2Cl71rircAzBUFqbcEz%2FIKpd6Ig5aLTZYE7PfG3qa2aYvmh3s112jh87ATofjfwwzaQMASqUHgV0W7iSS7tId%2B498Xj%2BeMsidlGVEr1F2ZSE8Wlm5Nm3kd7o69rzEHtf6512AdyD6TQ%2Fhp4khGhMBgV%2FiGqc9svw54Ss2IKXOTbqAHjy%2B8A%2Br1y4x0rppY2%2BHLFvuLorILEK4TNRyDpcbTHypRa31c83iEcaPbhqzfejkT7Zji7HlGrVFjRANDJFUPy0qVI9PzZNNEu93%2F3DvAijA9lLQo%2B6IYHhulsVZ2ac63SYRVvRQzk1OWQKHOddFO5yX8ooiqP%2FBN6ScZvaCywEWLtOiezSY855ZoXt%2BFvbqBxJAXd89xVQ%2F03IdJEP8NrBngYI7%2B0UtFt1%2F6m290rvxGbunQuZAd6DVf%2BWTaJXgUa6Pz6%2F5MmgFNyGUYfA9dkKW9xwszYhuhtOVoMhwkbWkP7%2BdvIVWUPFlBckc8wH8hKgCn%2BD3DSACYK5y%2FQbITkJE7xy5x5XLBp8eFf%2FJVjxRj834gok1AxCCSq7L3dG8OF1EodEcLmJMQi7cYowiu2bZ8IQiFCI1FX54hFVSBQpUduYlQtKdlPizUqho3e%2FEHkhbuwVbmDHEFpDcIytnoaL5ML7nxckGOqUBSghTVPenAItvytskqFBbBScpENMI1i9BV3VaJJdx4vQNoSLq8O9LYcfSKJuP6g9GAlWKs1Vcp8LRHYXmR7dl%2FbsbH%2FztQp9GXMOIpQxTvoDgt4VnI110IaWs65aYnYM6uF2D2RABGadA3mlP1H12Bn3UY4JysFaJ2%2FzpQRO788zapJBDtXliKoxhNa9h4xtVUaUP5E2I%2BdG3qKyhcUSdzvQln%2Bx4&X-Amz-Signature=a9889c88825518391078fa974721268460193f03c554824e885a28600dad33f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

