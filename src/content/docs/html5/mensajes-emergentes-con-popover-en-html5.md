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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2WYFLZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTb53m9SjyFZhpFHyhbLgkGpoLyjOOmWzhBM1wsITVxwIhAJphO1Sro6U6BqplRu4Ygl%2FzIizk8WuCn3GSDT9zbAfDKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE8i2de8SJbSUBtcsq3AM7sE%2BeqSTJT%2Br%2FyZYfTKKW3nuVl%2FHtj1z3oHrqD9aDwIenXGO3q6PXaQGffAZiHTIy7F49k7bKHXg%2F%2BSxHbFMggzQt6ZQNBezDNXVBwaFwRfN%2BHnKfIrRTcsvNgV5fDr8Ou%2BndNLpCY4EPR%2Ba4jsZDdDNVC0RZ9rTyINy0US3ncJ%2B7ihZR3rUarY8Z4OpIIhFF%2Fn9YwmgOCthjWltOAMy83Sm2OxhLRbNqODKLwI%2BSTbUx7GaKIGBhNcJPZoVdUxhrYyXhR6MJxmw%2FBp4S70j5ce6Ad5L3OPfq23f6CXI9XBK4kBAdPr5haQQRbssiGPzw9hkKOZJp3ElVc3%2FR3pepZbsuT1dmWG%2FJY9TK6Kl797q9ZGcwluZZFUesmZ0gqna%2BcUEjmempWrdXzhaBnAc02GmRLV9X76hSa1pfdaFQVO53TMlsDZLdR5hSi1n72aZNuhJqMmIeysKoOnEPWb8MPzDCk0rHcGSeb4RK4DY62VcEznSoGC7duZezYqY78N6Sr2eZ%2BKeRxWxcxOVLDerp7UKegvERNWub4f6rHRhbuZrIL2hZ5XewsUzN2%2BI8XSD%2F6jxYQcvQfWKSHhm%2Flx35rBga31qknBVk8TfQUwVTPAM%2FZX2FQUyx6224YjCkrt7JBjqkAeIbp0P0%2FHEJA7H7sX4%2BMrAbNEiwVgK3oBStD5fkI1mQsY1l6zGVwniLxODCyCWXVwJdzxQOYsV0jXlcautR6MdYlAm2q3EzMKiIppX2slnlbOGC4RpGbgHSgj159Qg9Oor3TQB%2F3UHwwO2uNLkq%2Fq3VLmg5wO40dRrJA9jbcXoF6EKGGtrsdrVvAmzjrmfJK2AIxdS%2FLjwzuJCx1Ro%2B%2BWu0Fb7P&X-Amz-Signature=9eb46ee5ef46cb5bb4a5ff8924cee149d80a14b346d9c197f47e7434fbd38a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCBVZFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfqrjyOxO1TOJ0bA1kEjD2e%2Be2vi8g6soYO6zjx1h4QIhAKk5TcyVvpgB4hAARFg6XoB0gDQPtDr5T0zHOlj9hc4WKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDB7oLstbJ%2FlfXWBEq3APRcYE4jZ8lr%2BCfLactI7J3Xv%2Fi7gut7AoWWLnOZhYttmNREpV%2BGK%2FMYu1DJPpC53roSsdExAJpmT1HnLzGCFzcBcKS51HM%2BR5hJyjylAQObyW2DJHhBH7d6DCJsD6EVl3X4yR8H0HdxkVU6z4sMz5234JQqB%2FqenBAZLxI19T5dcZ7EFl%2BPUfqwYNNouwrAIiSlhnD4E2mA8eHHdqvgqjWDxpIXXf%2FNowpoDatnMHi0JFrPr7yfrMBO39LZ868pPDdo%2BN5QL%2FePCJUquoHbj%2FdoWnDNtWSvcIbZ9Zd88aLs4mVCjWYP%2BOMNnf2fCKF8OEkh9QW%2B4Os5iZT7oV6UKv7CXg1CciQhixAbLV06xL6eXYP5FzLIhFI5kxAaKY5NANhmfz2nYdwClV%2F%2Fa46LwWF3BIvMvMy%2FC4wiZliNLr4PRn8icaKgOoqw%2FOdu1zEBhv%2BZbGXETMV2pk4Pz%2BicKTQojQ8oSyjRDPMGTnp3GaaE%2FxbMTLJBUEO70kHlpSfrICF3LJ4heoDNJiu1sUbvTlDvF0n%2FlUozXQZxfJnvGPYaPXNguGPlj55o0%2FS3qXZzD1jJn8eTCAQJpTsS0yXHz7fOB6gCmwK9RFZXZ2O4Y1ZZ2GfKDXaB6KbeAf0wDC4rt7JBjqkAQoSpccwWQ4g6x6MDOygSrbgW7opi9aN1japJiTYhlwGABZI%2BXTxrYgoJ7%2FZkduC6KKjcHGb2Z2XWQFr44T67r3wj9Adwv4yL1PP9H8wJ51a2DUVgwK7GFlbBjsAFZlgYb5PZkBNzWLBaGHVl8KLNmdua9PlGj1HkeS9bIa5e7DexqIE8EH6N7a4BOMfo8cmVLOwzvvUvsB7OLHSzB8tm3ELabF%2F&X-Amz-Signature=3513d8492dfc7a6460cb5ffb563a6c4106f4c8a12562428ab9c12d1f93376b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

