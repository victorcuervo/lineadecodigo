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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZFVVPAN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCST2yvKvTCxoj9E3PKvOhhtj9ZovpZJAYJSUWuLyC1IwIhAILdTBvky%2BYs5%2BZBhvEK21jgHwSaYBBkvQBmadXGyELkKv8DCG8QABoMNjM3NDIzMTgzODA1IgzUgB%2FS82urZrlY3H8q3AM6WYbJQrmsgWuB%2FswNOY%2FGundZtr4fLn2wPbB7MTEIOrDWFGsPTvkJCVpcwsIM0oP3EXxYSIDD4UPOts4Ghg%2F7IqElFu%2Bp8L3m0LoKvzMCnMheQpI1NQJUS6DPsR0scVM08nU2yMQOJIK77JdbyhIxVBT8n%2FSV7QRf8AO6hKOE6BtnirI5UWkmpFID3%2Fxj5i69wxv2Wlx7nzOxhpjecaMlX5WeSBrw1DsnLvBhgcetct4LuNYf5BhFShMxhUD0WY666DhHiDuKu9U0R9GMNxukptn2ZgU4q6q%2FFfqE6zIt1divBnxxTEDlzjtkRh3RnsMgIfED2tEbGk5eXhC3jjlimcpfUVm2nmsvV9kjzf3YfwwIYc8okMWtNDI7j7bC6gU2CLTu%2BXt5JlT5Ok%2BH%2FC%2B26ozCWgTbIl9lQ00O5wg%2B4Kq8wFQdf%2B6bDVrdz%2FgvhD7IIkYDIE4k68tfKddcsAm3jI3a03gRgjWGgdgegUE4qMuk3Ch5BsJM8rDK2VywFOne2jRo8jIwqEv57eK5mGHFDq33HnX6IHwZr4SnEg3MGg7JgdsejNqJYbz4m%2B%2Bah8wyVDAEFHZvKuoNWFbAX3J7EOTGM2d9y7JP9Npvkgzfr4eWL1vBbTxF%2FbNprTDa%2FM7JBjqkAVWLcX29KHd990rsmqT2%2FT6sURdxHFhlWqaOpXLRTHlWpyFvf00%2F%2B%2FomFmVI5lTbKARo2fffSzdO9ixXMiWAqVxgKaKz3zF8jsao4Uzv6UfUY9KrVfMp1YUe6mZocAspiCi0OTk%2F7Dn1rgmDo%2BUZ4m7Pux8sd%2F%2BMgT8diqDSQNdpG36f01fV4ffJFnwTOw%2FJLkqYZ5w2a4TXjkFXLY4rPL6Y%2FsEM&X-Amz-Signature=f8c78bc044dbff18af3c1885bd71b0e2b4bba782791716d950d8f1137b447e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRLXDR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQk9Gm%2BdH8iC%2F2imfiR4taZPLDkL44K3Bem88Od0jJhAiEAx62Yod6EnyLeB%2BGs5q0hLpiM%2FVuFRgf6gE6JQiGIcYIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPM2jhaUE%2B5ygtquISrcAwj04PLrzd6OS4b7%2BtgBOpuaNAlMhB8sQgn0vtCpsxZJrlGCaB%2FJlBWGQ4DjjsK1ced1O9k2DiPCxldBDEneVxdiJBLErfHNChkI0mEQb95OOquL%2BS153me1ksF%2FXqsj%2F%2FU%2Fegy8rEzGobT3sRAm173X093%2B0nvwZ%2B1W3wENdDv1Gs67Co4LUOEZ1gqxMfJ%2B2Bkqu7F5VICU4UbDsEC%2FxGMDMA%2Biglp8OTUm3AUo5pA3cfEkLEqdrAmg52YxUryO1wrKHrsbmN%2FyPecAs8ZXvRc3fkvI0fXTa5Ro6EqeWwmg%2FJt8rQch7wPpsaehEQFY7%2F7dLqvRifhbru74Bix9aCTd%2BZaTreTxE%2BY6r5VGP1AJ7dmANTKBxokYvPNU%2FPIXKdEnoOmxkhytTAY4bg1d7plgR84YhJ25JYRkPUoqhkvIfTgRgvQKMIP9eRn79PDBO3w28SF%2F5hnUF%2BjSVN8SbkMOtTlrwN9u0Emdy6spJa4ARqP4jbLL5iKVUPLqqoFY1amDk8ICLyUzAVXmDA8%2FBWmbI0gTMLlsenm3HOEa1axhxDwFH8XMANUKWxqiU18KKVDEvLUF7JYgBx3v1QBzcpXdup2SV0Cv6u5o8ixLL7%2FD9eyU%2BcxfhvOz%2FPpEMKr9zskGOqUBq4EDL3scpp3laXcmIx7Ud7AkuOjpyCRjaqbf1gv06GZ6QXzwcW8qo6zApqbnYYt0wfGGrb4tdClubQf0ZSAtAQxz4fHZFcxNdO%2Fb9%2B2wm9bkAudwrwajVQhIetz5GXOVh5qP6KP1mNjcXjY2fkuL20Xvkq4hCaCOvGLspC0VC8%2BLBe7XP0kh1Nuj2jtmPyY1KHrQB1FWHJIxmuyC6kFtIfUEgVWn&X-Amz-Signature=febd717564edb5ff5bd06c16f479c4598d2520e282026c706da17c0789454238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

