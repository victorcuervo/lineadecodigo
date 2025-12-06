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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6WQX3MN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyLWOtnWi7pmmbsfi9Xhk3A%2BRFZFjdFxlTNTxLrkUWgIhAIiL6BeSnYts0QHMhCHOcthuXLfTTSTQn1ScMMxlnvalKv8DCHMQABoMNjM3NDIzMTgzODA1IgzqYqetdRd9YOtQ4xwq3AP7OwijcMS2BSRPk%2FcLzqQCzwDY%2FD6amjDPh7er3UX%2BmfPz5q1piZ92LSNYI5mafwzjff3jStSq9F9EuJAtfzeWysQ%2BCRnhv%2FTpJNQdCKZAUlv2nZh1m7l0gYINfkA0rLaWz3YEpDjtpEqS1KlhDJsItMwhkGcOrV28Roixm%2BguofeQVM9ECcyGhH9ud4KEGyqfUAiGfe5LrNVNBUrp0FYRH0xGaDdKozXOIoBl2tKuBVSwOLPnDRGatnAenXnoCu0QkPoocb19dW8A6DBtNh9nHL9Pl0FpxpIZLGP0HVD4n21nD2mjP5mYLYQg%2Bcsl64K30fzEgQxI4tm46a006NgWQCT5VU%2B01LFZVY0Bd9XJ9oRNqMS91q2ATj2dTLmlW7EetYcV0irLJpb%2FYplzkB3bx%2BbzkvV1o2Tt%2FueZT8Qn%2FbFKhh2OdgpixKGeFKdg7V6JFj5SqTUgSL28C0buwBoW0znmgpLIUwF7K4%2BoNu2vokEoYEu1u1n4gqRbBMSeXbOBnFaZEmqGG7WdnI0Q0zlT8cOVemJ1%2B8X0wzBeB6RRyMMN1piSdS449rYrx4eUGfM7vo83bb3ZqTaicWiAQuErFyHuIoSRICygHwAr%2F%2BdU6LfRpYxGqeT5wRWBRjCDitDJBjqkAQZEUbxjzCaQph4CbvaiRBvJpPBOLgsp3TH8G2vmC%2FwaEf4p3rFf9AasZf6IqrhTSHPING6ZcshK1oYOZNH6GCCBar3cNJZ56pvxRFd5K7mj84bo8Fs9xycEqS20opob2v%2BUMqW35Kmo8Vv3IFp8ilXIXivNIjkaBzZiKBNJOK8Gww3hKDak9nH01uaPAPV27HXBGkMxuWUpbPFjgWTE8e084WDy&X-Amz-Signature=5c5c46bb366b7f89172d7c3b6d016800d8ce1ed66eae577efc999d26e51e9fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MQAYXM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gcL8iCBMYquZG4JuWvqEazXvzfjrQeUZ7ymFel7M1gIhALKINb%2BKMc6EJM8sCYjidU4UPRQUiIQNPZz8DcGrFB49Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwaHH8OyEr5lUT6260q3ANQd5W%2BFgxO4RuGCxDUFp6fF4JTsnIAqpQUowExYFzBPrU%2BWFbtnsa3o3NmASsR5bIC%2Fae1ZSRfl8VzKk6aVHnE0%2Fsqf1v8QcM3s53ntXmkFRCTgjJKRoV1HGdy5VgI0CawDLgjaFiHdwORrFkcKEwsCIplHDQiIu2pOo4pj69l8njWcEfrMgpOsSatXgTulpHcH8Qyw0%2Bdd%2BYcBhgo44Sz019Yi%2BD8gL3Re%2BaRQjkMu3l%2FfJZWutFqd637BsY6ZLI4a8koJQd8LOlRe0g8%2BxM0tMvMMXM7pf9Vrs15HPs39i0QZW3OHmujvhPBJKhNYP2LP08cjkyxhY1OCkhjIhgyIo1QGNhC86A9k1CPXNNt2h9x1G5cpbUEa79odItiFO8E24ZMV7EDYf26TnakYy%2FP4d3cdtYN1D0GoUOccqJm8fVGmKFTnOFoxTe2dDtiEcHHtuYDHjceNu335hWuuACbbOyAQRHwyWfOqc8YbtyWM4tLh%2BMxb1pnvkJRzsaVn3BTYXn6eyUiDrFU%2Fod5zBLDiKEgNnuGwejRQmu1q4h5dbQtTpYDZ%2BeYpFdNqr5zDa1J5O%2FIS638h5K%2BOqoGbRXYqjvP2G8twAMHGI4mDg1Y5XEZ7Z7jxwN%2Fhsy1%2FDCKitDJBjqkAaGaVze5hmSOU93SkgEUd6IVzNairxyIQgbtGoJ0UfUasmHdMuHoFGH6EUwW2K7G6p1gYzfXXSUWkVqgMzHs17xz8dAR%2FzimGK4o7L4EIJ3SUnEhAyKuBNHxZ6%2B6kbINiOhdw5XL0U86Ef2IQGjKmUxboGUDSCzmk1zQUnvRDLkrDItR80Gu%2FcPO21rb0S7H9Uj%2FNqtNQizC2%2F3saikOsU%2BEYjCt&X-Amz-Signature=dbb33cc19b65462c25de0736a6194123a1223746fae0b9fd6db5dbd90948efe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

