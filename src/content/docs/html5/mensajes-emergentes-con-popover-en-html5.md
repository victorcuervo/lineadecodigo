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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBSO6SF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNzNXH9vnOT8%2B4X5q7EolUWbf5QaOOdBSO%2BbTxORw8eAiBwE%2FkYXulLdOyAOj6HSZjKzDQnYTkPipxGaMXEa%2Fm21iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMblEzUfI091l3akcaKtwDek2SrYXQOIDzogst2N5DBNyk%2B5iEGk3XQdU9ACtwoUjRmpLlJBTCyf5RccyWRmtQLuYgWsCFagBr4OgvABhRtw%2FMhZo2rQZtfQSonQs9D6iWNHxaW9u1w0tq4p6TGN2eGcQvK8RtZgq%2FcvvtDgGpjFPVFHaSV%2B2HgqE2sGwvC2HYmW0X%2FssHBfGsm7GlkCysLO1NpL3k8QydCsA9v2iFmHBcsd7AzxODMLUWSfmF4R5AS%2BBJlFtiP7Dca0DpJn3h9eKC4nzNRNQTcK4Usa5p4CGorQz9JR4bM%2BfCtNCGUVQhHLi97Bk82OigJiIbw71JEJr%2FChge86Rjcl9U5lJlfAfZYyhxZxRXJodxFXRYSynh4LxO27XzXfrfpkDZno12UMUFPD1xVwlF0enkaK8Y9%2Bh%2FtFtJ3863SVr0SaUUWXjU%2B2%2BDR65C8tID6dqb5hMYfuAzlNXerd7V%2Fvk%2FdMv6ELRIfCXEaoXxZsDjbMHuJ3GMwCK2UwnTP4%2FYhxEwr4ZFU9rnvjs4f97axDi5Pbeusnqe28SBz%2FYFHnY1IXco0NOiHOKNXuoetx1CxMXIAJzsI74Vn%2B%2FsT84f%2B5OI%2FVGqhuSN%2FAsdIyi2nr5Igx5GZ6rOMHUGw7%2BpEqmVK0ww2pvUyQY6pgGtxYoNo%2B2bYYlY9dVrqhFlIMQf268Eq%2F0wDi52YLDjivQl%2F7Xcz2HNRnZ6A6pPiqa7inAAZ8gPhmGY3vJmYAghQY2w4SrlP4jDGTMs91fCOsOuPJsUUTBjYaAr5QETgQPee3XMQKUy%2Bz7V8KSaGPcH7PpREr1BI1UwmKCSKaI0WvawZw7JWjzHLOiU1jN%2BN1rE13r2ZGDJq1shuJa75F2oKKMYBAoj&X-Amz-Signature=0e63ec8ae3b664214af18d37d8d1083753a2c08de6c789fec5f6690765e6f6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCV5A47C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzB1xMSUn8YDSox54fegbz0oo5CBrksAJIA%2FlDYaXbDQIgMTceiX%2Bp%2BFYsZVNlegRo%2FXYoBzNhH9nMrzg7b%2FxqjIwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG6TFl8kZDyfwcHtircAwnNWx%2BSaC2kUq5%2FRRzkGwPX70caDVrAqLwL6Bok0oQnQ9WmyOhcH6gpz2PW8nxT9dzeigHhGMqZ9qP5AnC1r%2BIvntF1F8SoyyBmASi3CRVTGDbhXH2BwLYO0OON0H8nST6Wlez2rOLviVwSbcI%2BKB6d%2FTJKnQRaPuZhaXXdaGtoRnDxauo8Ur7Zd3cXd9TguFc3sMNHZCTYFDqCWXz9fUhlQNB6lV2TpxsQf0ZwMjWXff4%2FZamHeytd7ukt78YjjqQFUV10OPwgzWE5i1ZQ8etYtUhxtLj9wWE4lYE3%2ByUkt8syHKBehZmyIxVaVwTUVRiOb5cXFjrD29E2KDYZKnacdEE2ip412%2BmtOXyu6N%2BdDReZgQKgr1tPMKM19HnTIfntW%2Fim0P2VZZZ08v9AuY136CG6oYClGGpVByJSaWLV9RNfk0HmIthFhxY0BO1YB5TM4ItMcS%2BBfX88tVpi%2FACtAw%2BNLmvboREL4vw7bdPbgTgM%2B6e1RsWZVSfJ4X%2F4DnaX1aeUJg%2BdQ4ql7ZEheqekFrWTde8T2P6Qz92q%2Bc9qVdZoqtTLEqKKbFQF0uyb5Mq4mdkfV6Fp%2BFXSChkqXB0XRQImQTdRI1Js9T%2FqiLb%2F3TTOjN5mpRGGqhAyMNqb1MkGOqUBqnDtgmlBRQytaDDJ615qP9yaMTN%2FTAS3HZqYPX%2FXWdqG2iQJg4C%2BjtvBRILDfINJqUt2Mn7g8h9aN8vQ4cDVIs8tg6UloACiOEXfH0w5RFV1rHLxURq1Xd9XxhBJEpD8Nu%2FC7aRhcjas%2FD%2Fiv1XsBn6MUMBMmiz9mG9EXicMpD7gkGKZIh1a2Vu%2BsVtxaqNM4vgItYSrJiNdm8hnXvMWDf%2B73wFt&X-Amz-Signature=cd8d3f7c236044e545088b1cf35d5f3ee4d30d44835cc87cb7ebcbdb2749c398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

