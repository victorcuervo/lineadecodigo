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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSRER5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwSndfSg5z4TrBWz7xcySuwS6ORL4OuAqsIrYh%2FveCNwIhAO%2FmzZXWtU84xL9Unzy%2BO%2BlOxrdkynmwbYX5z3b9WvoRKv8DCEEQABoMNjM3NDIzMTgzODA1IgzXklnwHZhAP0%2BXL3oq3ANuJm7jdhTWv4KNBkA1%2FiIvvmojBOFzs5f%2BzLbxxujkmwVsXo7DjZq%2FpcgeX3dTxz0uuKexMNSDfmzRZE5p4AmigEKPxUtPstspNUsbEfPno8DjxsXC6LadchPKDt0rPLZ%2BwXxTxbLwKgwuD6BFa2AcX8zqbLxClW1V5ovvCVFEat%2FA4qUs1dKByyu5lTRT05pJ%2Fz2nE2Tgfcii7g51wLmPiH70w%2BE8D6Ruz%2BCySou%2FHnpGzhRkz6zv0gkWaKIUhtcb67iKDTksBlQwJcha1Tw7ghEJp2%2FOamEcvI%2FTjELCd4Ep0dkrLJyfxoNvNJqwUUJSJf%2FKA61QnqMME9yEyD4XGUvqrOtXWYPXTu8X%2Fud5aBXd9g5YrA6BNVl5NSPNU4bIH8lavbs5z%2BKfL5GvpkR2SHciaaRpDPKKChdeNSPoGZR5YFNsyGmyLN%2FIjSHz%2BWf3eOfp0zpEXdAxRCm3l%2BcB57AXN3pBvWbYdAISpBgb7ioa7Kky3SsKCjYz6dqNc0%2B6g1Q06F7%2By3gxdZShxJAgwcf%2FYXbPuQ5hp1zYsfgJCLIlbDe%2F6o8kWaUQsjn1BFbD8PPG%2BPXYdpANIrOmsEGrecpqoU3gLkIdgJXhdr7wNOZl1pi%2BdjH7bgWHcjCnhsXJBjqkAXeBd65vAZEBVT3mvmAmVixyaKBEqJDJmrixkBeIyOR9mmpwY8XR9aYPSDjKyniK90SgEcyv260CsDayLUgwd3V5ng6cQ5xPr6WC0ORZlsJnZFnTYkzMKmYAleljTabEz3FoIiiTKxiMAgnET71%2FsWgGyH245Wx52J4sQMYjrc3xyEcJUAP1LDsl54k6owjdGk5KoEFS0k2HnxnNvLorSX5q72oP&X-Amz-Signature=305b4e5f3bcc017e7f939d31f3bf969a52d0b6c98ad85c4b55ed3951e32bd37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDM4OHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvUXvYXeNf3JNSMaDX5hvGCY02xBmCTkcIXouCwOi1uQIgYaR0sJ05XtxfPzrnyjauJ%2Bj7a0i0pB0uNENbt8nyjKkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCbJiTjckQIfAMp9IyrcA5h4ImavkfIgwbGA2q8olu0qamGNxcyp451%2BjTFO3R3VHGi%2FnS2lAOhiNXilEInQxHdNJsfdmRC1DoCcGN9ApV4NjelwijHeyaPFHSoBE7ell1BPj44GGILwF2rbG7wCGxqYGCieELCKZH%2BUbNgsbE6oUx1bk2tfTrrSQOYx8U1%2BLOD5r%2F5BhvCn5Z6YpGK1%2FrNdYN5YaNNweKhZKezdMm5NhvX%2BZTuri6CxTCGYd0ThOwBQtG%2FRlvJBLmfcSj9i07bCVWKEq3ZNMml9pmSK4nCtd94zkTXbTi6et5dzUEAz%2F%2FOwTGjxmByhmOq5FA9JEDPdVzt57iNvvUQKxy2xhkYJtAXpp0TIk3npbMuuK%2FqMa9nTaFG5YrrVHGFqix50HnrpEE1zNZxADkrAf%2FknnzwXJ39gwmTVR3%2Fl2IH8RLbzIa6L8zfhrHlqFJgUajZLCfqWADMkxuUJCCOmES3ae1acfUf7u0huxkBQz%2Bu6f335Sp%2FHZ3dgQjxHajBDrRAOhrwovt0S3%2BzPtdF5HNdN%2Bc%2FRxY593BrZfEvX4QEZou8g7uDjETA0ghWgDOjGYXAcpfvTQrokYlrh6oGfNxT50rib%2BvA0Ex0cTBo%2BQdzZdlMeUXUo8DNX%2BQl0SjtbMKCGxckGOqUBY8ET7iGzdDEIsLlehkSfVXob%2Bdu8K1F1QNv%2BTe4XXW%2F7o%2FpazmQpGpvIUWvdBJcQ%2FcTXr9RfAWCF160dvU9qmIAHhAvSnzlWpa4v9glkSWztFOLsc1ZbYr7BoN9RkqCUOIDVkeU%2Bfz8aMU%2FsN6vIzVPaDuyqpxAPylw57mo2mNhdFlOqlc7iYhRjEH2g2TuP0297YMdj2XJH5n21biCj9Q9uA9kX&X-Amz-Signature=5d9e7940c9f6457eacb7d94b3ae9baa786438dd256f2013d93d56063e513c667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

