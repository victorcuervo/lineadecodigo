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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OXUTVT2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYTXRPK8k057vNurxyhcVfztCN4b%2Fv3lvolHmNp5OdgwIgK0gXxotv83nebLaDYvAYXRKfStCSKCj5WquWMXHem9wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN01NxFflDfvI3akwSrcA%2FNTbv1z8Duym6%2FfVt4yMYHHqOE5EcI%2BrSlD7fGG1RvoOvPaa%2BLoq5K9x4FMvYAEsiqlT8r5T6xFbFQ7k1T86YXg40%2FDbPA0Exql52dU0VGQe1f6%2Byda8Ssb0GwcRfNd3z7bwoOh6U5OgioY1luQBQYkKFxzVZ%2BF3TsPHYKPk8DQFMRJ7eZk9zOP2dkIYZHvIriL%2BNJ4QJSfjTTl1x4u82kYYdX9v3yMBo9MEvomALuOdqjCUeh5dsL5rA%2FZqEnw4O6Tqhu3eGnarFApZWbIx%2FIe5rgMasBlIrrIF%2FqCe7YTwECiytW9Ofd8t15i7J749mDLJUTZOgkZF1SuYyVllFbo30YPLWJG%2Bs5IHwgSY%2BOK6W%2Brr%2Fh%2BZ4jeHaMUJrhDH76n4DDDUoQwHFleDsAAIVaRekkiqrgbEIKq9y3j5fEfeSfCgpHefVzZu4Ify%2FKMIpcXCFwd7KeXtZHLrJFja4m7AFn16EKEqKm1GniXAJtGq%2BmejaeyN548D3aLkUz3KgO8QFE46B5WLODN2fmK8QOvUesKb3R%2FEqe1zBL9yaykDAtJ2Li%2FDk7qFKPutWqqUQr%2F3ONYjBjTluxL83L%2B8%2Br2UXfkEGKq90eT85Yl841b7HW3EEqvaoQ7NZVOMM%2FU0skGOqUB0wyMEMHUnMXtkssVjOxW5wK6Pq%2FW1B5mMWv9tB5qBjN8RjTr2iGRuozfN9U4aB4dINOLVnNAW4COD9Vw0MPv6LfeiLXRdKIarS2y7xnVGnSBc4nSU%2FI6KlmZ6gQKhtfZR3%2B%2F87rR9G%2FIWkogeHa2o5Cbniq53%2B6%2BDb8OJrANnvCTy4GxCnWzrh%2B2wgzQ615AiiSmuYb%2FXHEwHOQbYFC%2Fst83Slh5&X-Amz-Signature=29b4895b72805207558bec54cfaf4997b6ab946c7881176bb17d43311d1c5ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6ND3X4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2AR3Yt2CmYDSGeplsixg%2F03PHzyRQMnJ9eZKHtWVDuAiAz5HuHGr6NPiay%2Fi0SWp9RlzZ0nktOnQapu%2BqFb81GSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMNGN5RF8TX4ZvbBILKtwDXIKtCzeUTa%2BM%2BucYnhy2Lcy8yG2OvPSAw3bDJ%2BhHqATw%2Bi0IZ%2FGL4In0CYeEyytcf48TcFJN67lJ0iT%2F7dhyipHTDKJ%2FbcU1iJffiFz%2FA4%2FStWCW2wyK7ModBuxHaVjDm5PJhWhL%2BtcwVItxOoG%2F05ODfEp9RL0Xhrk4RE%2FFLCoqvVP4URTIVF4E7XOHycGymlj1QC85RmB9LnnQARjeE7BwBnvBQNBVOv7UE78OYRIHlv49sV4AKNgXJo%2BbdZaPpqJIXErBVbCz8EW7Y0hL6cfHg6id7fDU4S%2F4jqxbF6cPle2g%2F%2FGmW7bac3guQu%2FG5ib7JZpJPeDT5S4g9CtR93ccTEFigYc5GQ2B2Y3UHrWMl8RU8oc98lrj3gu6WaJhIkyREX8PrNN0pMFo4j0mOEha5oVabnwBhFtWxkhPkpmDj4PXsudvYfMINYtHcKGbQ%2BzXOMZJgWpcHG7dm2duOAE5vre74ior1uqufMK6I7hqW5XTs4jrGuHdCpkiKo%2B9OiVMcOAlFKI2ypRlfwzGay6BeMPsS0W%2F8ryhvkZS83zQf2lWOPo5s7OidOjBENJ0olv%2FTRuH6%2FMh6J05ox3jnMOkU5RK5nHD%2FlhsswyOcPpwK3bnEshbbOa1ppQwotPSyQY6pgHEostY3n9rAGpzeg3noF6WFw4v0qpNbElP41uyfq%2F3f9NYrHL87FTXiqKOfyIUen1S05GPq%2FxKXKD6X97Qxp0Bd%2Bp9kgdmUwfQ%2B7wwDL9jDZgdxJjmiWIr4QIaP9fIqzRXveceJ%2BmBgW%2FrUUtgqNH62AbKrq6pBnwv8WHOtg0WSsTgp30PxPoG4%2BZqG%2Fy87fBMpDpZemuQy6r8GydJlGo4swR2mS8T&X-Amz-Signature=9d38268c3dc14befaf56f67db00e30dfd25bb530556305a4780432b198552b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

