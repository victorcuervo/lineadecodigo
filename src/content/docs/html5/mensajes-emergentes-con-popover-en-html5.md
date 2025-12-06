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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2WSU7G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtaH3Id0dXbSv5w25RGDgV5an6K8MoO%2BufkWvo8BXztAIhAODK8NlMxGqvgNOx%2Bjk6k3vXLUAu2AW7KcNu32%2ByJr3yKv8DCG4QABoMNjM3NDIzMTgzODA1Igwkd81K5tf%2FKLVTwksq3APtV5eBAQ7iRqQVhr0TT%2BqBmtOTmHmbK9%2FhtbPZ%2BvtPg0DPeNlWJJU5j1FMEbIXEW%2FcRRa4DYjszDvGBVbHRvFMMporP85ReXP5tKTZPeQPBU%2Biybj4lLZIN283cW6M2udDlbP9QpSzqqm6uAF%2BGue%2F722BlOSj%2FdwPtnffTP1rPgTg%2F9a5aiZrjzj9tqrmTQelw8xKFD2MqL3cgW6zEa%2B%2FbJWZoN4ssjCIJnOT1c2cNTKLc8AA1FbSgJ%2FzoVAimF9uNE4vUEMhOC%2FtPVY9BkJKQdQ7Efh5fc%2FhSSr6a9CypQzn0GHDRA%2B%2B2pgB6LxAMu1VyHoEaiyjGZvEAIwm4icR84aiDr0%2F%2Bnje%2Biwl0mkVNSAi2%2BQMlJ7jVhiiUDPd1%2FGO1KNerDZEdwySTCk2ckHhdF7DEBP1mpcEZdD46111fjOsLJKUqQA8Xgrm5XWSTMi4FA2jU546dJGTcE%2FLTshQ7FWz9E2rOetdz6Mvw%2B3nsfpmIrem3%2BIy4qQW2zFar3GNtpa8pHiUahNTr0QY3i4lP2ZcjstDtFXvQHefwT2fpEWU2AExq3E%2F1er45F4CbbHkfQSKIRUCLTxs%2FLjvaMvISe%2BmSkh5z2nk0O59NnRUP7cxH4UimYt8c2dysTDK%2Fc7JBjqkAQ8oYaiQhwfTXpnONt63QDHELbf4NN0XftzU01ulac89zWLzSj8KHXObI4QEUBm%2BhGdY5vZgb7NFN8efPG%2FBd%2BCW%2BAEBtVpenWHrTWkpb4Z7BAc2h9HwTwZZ2iNnYULunznvw1jvxVNNehB9vrzDgIipHu4Mz0%2FvbhxGle%2BHVuGMNqaLSpzhzhrSre9JxHrZIOkrPtMr5IvFaiDWyHZcksjXSXpI&X-Amz-Signature=7f7c4837db67ea1e2f0d7e68bf7cc68669583e439470e0cdee955e4efdf85ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626DVZUND%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHMYgfCfSfjbrLhgE0WxLzSSFJRp37Y%2BT1X68LGxYlagIhAOcQJ03EePgvKvnRiazqnw8%2BG1f0TZnXGFnTftZtv1m%2FKv8DCG8QABoMNjM3NDIzMTgzODA1IgyJsrwRAsZUBoxTJJwq3AN3GOF%2FxEBe31tAm7hFcThw6ApCbR8EggH%2FDmKHHpfJTkcnN9DqVqcisthYOTl1ipyZrE2hA1NGH3jHradVAYK1nq0PfEBRGQVKGYUYpNzGDcMrlo3Eaz4iIRvz%2Bz2UVPgD7%2BqEje5CuYNrfJ%2BmU0jtlQFSDU8FiZlEV6CdfcID4eIPRs89YUAnGgf9bK6rcbykS1xtBp87J5Sz0vr1YyGPiLtwuziZ2Yr5ABZBlIPTnnqe2o1wHXJWmWXB%2Fvn2WU1TnTYM01QsAs%2FIIT1Y35DN1tLTAwXRVH99q8B9bj%2BEsf95ULd87VmLujO2ZD21RFLH%2FbYsoT6s%2FhNOaYt2qjNnknShYs%2BTpG%2FGr2%2FyD3wh1OzFZGFSvmbwS8rX77vFEitacerHmUCkLJUIqkHIvZCRJceSHGRwNX4WuuvaL0I8K0Mmifm8Q8utcUK%2FRN8Npiz1b8aQUYq5vQk4%2FoB%2Fc3LdSldGQLfrZvtsSsua8ue1%2FNog9MTGk0UHjjm16JN2xjWop9uFITecOuiCVXJcfTrspaSmExlg7v%2Fgqn8Kr47eMP7ml%2FXEq0urSMLhrnkaHo6PMlnPCZg8W9eVgl90BLFz4u2BY9Fbuon7%2B69VDSMV3IYqRZe1fUAIWrnsazDM%2Fc7JBjqkAaYHXckbaUu7uaWUIPPVEqdz8JSbiBsEZh0Br8mxRJLoOO50Uh55UEoRLlX584ftpxZIi10ZmyH4DLcn3e9I7Q3APEVOH99A1doeCerHbeVbppiuyDQnWsDqLgxm9tfHpx%2BLqFiEQ7KWdiFagFJ0JbO9QrT%2FrxO2t8Q9Lf4COhmM%2BFKQTe9dSSQkDax%2Bt%2B3PMxuSUNo5KBMn%2FR9LLfOzcHy6GPqQ&X-Amz-Signature=e24c40f35df60d08ed775038579f58054e545f6b91be81041ce5281039dcf019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

