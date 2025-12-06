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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DX62HLA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3mKEHslB5iV5JaPnCPBFREJvwjiBFWLPfITYgNfpRjAiEA2sD70BWeWY6Pb1%2BOAWlx688kacmhzdxZbQwpBX3wKTEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMHDfT5zVIKk%2F9TJVircA%2FArjJ48QRsBS%2FIOIlMHTkkfO6NtpbTAEIa%2B%2F0E8fuQxC532sQE3FxOmxVJVCIao8xl3PsKJGsp6YgOefX%2F%2BrKhs1AM0rwEtKp1ozGtzb5Dwkg0wAS718WwvwPa%2FEr8fjI06lAX0snQDVJr2JLHqLRAhJF4vu%2F5Z2nBw59CzomVNR6ugpQEVnT0L7u095ayCf1UaWx5I6CzMdFQDBLTA%2BHIOIZ7MSFt0NCgzZg5bCYV9%2BaF%2F28H4qGC%2BKcN3KQn6hqpdL98vTa3Vd59gAIN6%2BSc1BwMHNU54TM9Iht6e3452EtZPbXy0IsML4kskJ5bWgmqo9Zfvz7PbYBBGPJlBgjAbAjZC22l7N5c6aGeEEkWrOzk5qFXvQP6yo3A5er8mZivrDSVPFfDRvfk15M%2F8Z6j8qD3Ew7jypWDX2j8r6%2FB44vn7J4A4OKzJWsRznyxZwjsca1tM6P4na%2BYV%2BwIEj4viscPo9NtZROeqn%2BJ35aIAr9DC%2Fza62%2B9iJ76uNzSUh9xm17q0nEKSPzWKFbsVo436C4E7hcJ89R%2FMhM%2FdmPIMS37dlTIQCaRs5CLQjHSREipXxDFUcW6R5bv259EEEtSPO4RYsmD%2FMkVtn1t35tHOuhRSEgWM30i6CHx%2FMJ3DzskGOqUBt0paNntBj%2BZoUWXbih97uaCHaOf1nU6IMWtQtl%2BCX8baTgOrBkeQQPuIx%2F7Ar6AnqUMovztmb295F4WWoRFcvuwmHhHFLj7KfpQ8qHMZKk6Boc%2BAPFISJTeS9PxRk%2FnRgnOHRq08mLlvqnnxKd1WC%2BzVIBuxc8k3thMC3XJpdN8yMuD5lfchfy5gZdQG59xq4wyuYwcs42sszIWsJROZuTPmqgTA&X-Amz-Signature=8dcbd0526866ada352246b39181ab93483df2d2b827ec3cc0de436cbeba24d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDFS3VO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCEuNhHod2JbYTylh6xewuK0%2BkJ29c19JlnH1jhL1eGAiBbSSAXd2RcGxlBzuSEUuKtV5WHAuy0QhLzZynAjy7z4yr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsRPmMBiRfkBggKT1KtwD%2FqDTeqX4M7I0B3P3sFu%2FvcXdMjLyQ%2B5smmnLi%2BMsy7nNpcGA5tuHIjAENK5qmaUbS0xgQpAoZoRwoXRlUu6xxTpMWWXOrTZb7vDXvHg%2Fz933MGAYho5i25lN2scr3p6UNkl4d5pXxP17ZS0KFM31EZbjFjM5QLS%2B0EevkVtTaX1SBQWSyGcD%2BEOWibb7298v3HS7i0IXjyk7Nx7sxQoM8GwBvJenxU2xH3J5mPcXsRpUxBJLBX5paZvDJqwP0jl26nMBO3oKjAok7ySOUx6080cH6E%2F3gZZbHR%2Fs%2B2VwUjmyLBWsFvlEganO%2BsYk3GtqF01wTVkrNsn4Ogx8srLjN5qF%2FbJsVApJFD14CYtFp%2B3plpt0%2BjVIEa3GSW15zscsYK941N5MUlUsri%2Bp7B1DCUrZotSecz50Uk98sFXQODH3TRU6hZJ%2Fo8DSRxdlnpRTcH4FV8H8IyHohITyFjcfKQs5kNNMX%2FGUhniQksZF2q2eTsNe3JfA9%2BzJoIDnsc9BCqD2yK5KUXPAqKthGsJWNHqV1ABytdWn2EtWSEUA0fFg3%2BlB6l6s6dfAm5%2BulDmiFKjN%2FqTYcc29B2P6VT3CQxKkRyTt1YQNWZWS54UvsUuXRSXXkJsPB3gdHkUwy8POyQY6pgGaPFZFLQSOIRs8q%2F6m46HWn3Vv8VgzRXdNNYmYVRo3SUIKmSQPtM%2BPBv3YV39AjGj2kfGWHJMv9p7K%2FmWUYz5CjN11jmfpClNfIMoNyfVoSROYESnThN6mY3aK93oUhXMdYKd8uXqBEgAvGvuTJg7AsYCuk82kCQQLYNFxyiwPQCDk8tTrLtMErytnBbSa860RMmABNMhLjpBk4R624EwjRhzauAwk&X-Amz-Signature=406af7fb919526ac28b5bfe0b892d7164a23586c2c6b7713c1a81e800f0812c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

