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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLMI5T6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0bQeXOuZT%2F15h0TOIzd7vrBukVlTA9CvVORG0ZBQfgIhANpmoPKY1EyjkRit6IFDNmLrdhNJycAJdbclctrVL33wKv8DCH8QABoMNjM3NDIzMTgzODA1IgyPuZ%2BHN64NYtqRe90q3AO90xtlrjepmHVUj%2BG%2Boj2PfchsDnYQwXc2xnHrb4IxgRZMFhJ0ylhkcHM1vv20f5YRdypSF%2BIXu8%2Bp2SIKA4EvH0mW0hV8kIdJUt%2BSsAEpN71ZrK9Rxc4ib8RTiUiuM07H8LSIPeidg8EY7WIxIZPSOzPIXDvcZq%2BY3iamhquv%2FYs8qNs8avV84uNqgjm5rrznIbkokU3cAsb%2BQj1OLHWFk0mKI8BpJ0s69i5zd5e6i7ArKRoHH21TX5jERTks5LlseTJScyT48RKyJmtsSYgRKC5vif9R%2BrgZKdaY5EyuTeyPQ4A9E%2B%2BwYSnrTZPgu6cRcl3II0VH%2BtydR7hiiq1ge8gRaqokPPHG2XHZbDRm3H0vJypb11rkqngVl9McSa8O%2BTnaX9ph%2BVig3iLNeaFWxgzN%2F4n9n75%2Fs6HhB87aAevdYUk4qe2egl4Yocfw80vKppO3njTM0b7VOMQOq7%2FYD6ke6bo8bYeBMQkX0fZFg9mBo548y3s%2Bs2shddM1GWdkSJu49EpL0qzYiqaOKnvTuSoWDgBkx%2Bd44OQ73S6Zb4DSGp%2BX82UwWuTBWOysk10YM1max3l8XC%2ByPiAN6m473tN6WZilEhCKmq%2BDco26gdstZ7iMAk6TGcua%2BDCj1NLJBjqkAcaTuELtNmjSk%2BDkAFIJuA13PJ7f1eZ%2BXVqzqZ71Uljq6jy7QAHO2Pnj87l8Nen295Lphpp3bSKE9o1Ch0KPU%2BcGQR6jePWMH3wlWeF9A5lQM81yQ6Fb066%2FUFBMe8%2FMzGXnAOTVckeNZNo9JDLrKMECJcnpSIDKnWqtdiRnTO8CtTLLE2qJPsVia029xyI8EuMXsjN%2Bp1yOLT8W9PP5wDlQ5%2FdD&X-Amz-Signature=a0a0addd3b98568b3eb5dce86d3f069e5df4401b6550fdfac1041c92e723b32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZPTICC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0Fi%2BEDGo6eGOvIiWlDcFebb0mXhPJo0AF%2BwnR7fH1BAiEA%2BPFHG99X6bcd5dXgQNqfMyLuLGFfBUSKA9xcHTNzqrgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFGzoNywSkDL7q1L%2FircA1HeL%2F60GwDc5NEihZRwWxbHfrF1X3YUHH7WS6pdj%2B98OH%2BIvGHYvrFuYjiO95vzDDVZqeM%2F%2BiE36f21YiOzCb%2BhlZvOuZWA8QQhqPmwTpr0v9Q91HIZ3LzVuA0AlMMHKPF53zeA3%2F6DFqBGrUNVpjoyc96mCVgFTHOUZx5%2BcHxFD5UUGfoRUAgObqcpWcTA3lHm72P2zX2C2%2BL9LV4ZciIaw5CiJY1yEfpxXMA23%2BfPjo652JTFIhtaJGKkAofoxBSgEB9zXOqJBnnTn4dJUcpVkvEPXuApDSKjEF3tUOKqzhseLGBQ%2BH%2B3YJg2ZbMzxvwQ5nFydegJU5UZNHvXND2rSxm5lzhs%2BvQpea4HwUn27sJwVwsM6Cko3s8q0q61OOtwXb5kNTg6GIQikEHMM13cvQNLVDEde3%2F%2FVMvVSK%2BBGRCd4qRGJh05F6X%2BdkRdcgnFTt9dBYX5pLV1UylEcKxTbP9A3gCuMm9cXxEvxEAuQDHAXT5%2BZ45S9zQZUudpcVq7LiGc4uLOjAPYuUGONhH6%2BQXBtbZiEMHnZUfprEfE7cLEOtMKCNNxTO3ZNq5NlwYS%2Fa%2FmgIUr9JjSA3P%2FXkXw5OQAr2uvI23uEhwhIFpw7%2Fgk1Mlt%2FJhNHOsfMNPU0skGOqUB3uMvh8y947qKUQLhYWNAWMrB0Xd70kS37ktowHLSrdCeZ3f9eF45z16v9SUWh2OGWY86Jf8NbFCHS9hTvV8SxuJLRK756CQoTZ3IN9yEk5EZralKQXpoO3ijUboCYZO%2Fz2dkeG4ulgQu8oEtFumz1taRtdsuDdJqU8xF5a4tIR2XKWya12fE2AmNGXJ4pWC%2BkHGJdixg3Fjm309FU84eA%2BROyAYe&X-Amz-Signature=2f6170dfb4be822502223c3b8ef515fb08e54059e44ee414831292f0a0b276b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

