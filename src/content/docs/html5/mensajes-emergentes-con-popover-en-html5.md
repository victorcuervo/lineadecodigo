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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5246O3G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6RVLj4w%2FBDEWJvO2qK0EI2MR20t6AV85JRfH7b%2FJJnAIgV%2FvBHA11axPe5KjoKcmoYnKuCvpWKAEy0RS5eW3%2BwXMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4pXElPGxT%2FiCnMDircAx23Vb%2Bk%2BkWJpBSjQhUqoju8XB%2B1Te%2FB58%2FXmCWCZVM17zmwXQTC5jxhP%2FuQorCQWS3WN4TNdfJNg6XJAFNjOVwo2mLNBkf5BixI0YXXslcV1NPKLopdFWBOzIzRPEwagjCRjFbp2Gb%2B9BkOEaEd86Xp1nDcuE%2BZUnx%2Fgj2jYPyMejuae8wuEYnC2H%2BddGS2byzTH8XaougXtSB3rn%2F44mv1AbtyJAIWz4fLhPj2xSD0tHevCuL1JI8zj8PwiDKHzmJ92l7IxFwHG0%2FCEeT3L2JQvBc%2BAbRnIKc%2FxVMsS6caMB825OZ470w05H4inI9oM9G9KshGv4UU%2BqqLH75O5kwnroAHMwf%2BSyxUPfigHytzXv%2FiiXzPi%2BNNz3m47NIWsIp0mfcEsdhE9L877NERfTJy75%2FAWOeY9EgAZSDqACG9MK6bcxqwNkm%2FU2R7VQftklj%2FXifF0WrfI6Q5lP9b35we27Y9mK4jPF3tFFiC2Sg75KnFWbbxsv%2BIEpR2G9bXtK294l0LLx6zjXM%2Bd7%2FzUOnZ4A7sByuFAgzrUMuzG2qxuT1P14o4PR7e73%2BKA7PlQKoOvojQBKR8FY2qA0Y%2BnOTkzUJxDFLUSe2t9fe5oZojnUis0sIYOe0FYF%2FbMJm61skGOqUBXMsHlhi%2Fv2mq%2FmWQWssed3HbnFdR5YSTdsNsid8zMsI7nhQON7pJDhHZxFSDy5OFzQ6jSexYOX6OQk2iC7l08w3AB%2BSqgnz%2F9lCUSZKAqWarJfptpmZycKJFXaFl9%2FWrvGGIlQdZ8yRICqgiuZmqdzb0o356urIBfU4ATxTBsD4YbW7KEZ8BLnxEvkouCrfmkGtpRcvXj9Rl43%2B3pcqbex3LRjs5&X-Amz-Signature=62123c4b1b0c906fd44d0c60780ca9157e0f48cc1e1df68e4d93cd111d689e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJTSLMI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRxdwBG4MW8pKgJxHNM%2Fe9ndOZX9fD7%2FF7gcB2x65CpAIgNSM2FTqPxOtSTfaZuV%2F0byGMfdDtM1BtrdHmoaFHQAsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZzVQoiM2wO2cXkgSrcA02MFAFzXbYXBK9ywJs%2FiwU%2FqNy%2BVq9zwZCexOIM8HOqMlgEGlhbitArv%2BmVcKCAbGtn%2F%2B2Bn5m7DGC8fmU8dL3EfieeDCqGRYvUOVr9Wk8cUIBLiSufjAadO03OIj3dlgxKwY%2BZLCf0sSWT9kiEP3T7swyd%2FgVgG0N69YWeY0Mw5rT1EckbmV%2Fxk7b%2Fwi1BxjKquvW6OWcjqzK5CRAi%2FyBzltssncli%2F4haRoRsNfAct%2BsnX1CN2FJXW%2FX%2FxfNdA251ON%2BeohHnnXiAek4nOERjQY9G1F44t5j8bRtqRETv%2BZxjgUSfXXLwH8n06kRhXB4VsTdEVAExnuW7cnDoFOXVxG6jYLXUL%2Bts4eK7S%2BXljQ8btGOAq6Wuoe0YNQJ%2FmurzOLs1JsIxC7DdCVYTb8xDO6WwlnWjzCPZHiuegVVTwQ7VTuf%2B4Am%2Frsiko7d9pGGcyI0KqMF7ouF8c7kG0KpfDRKzzhvdvtWtVRGJiLA4CLbXNZh%2F7SUSMJa1UnxqB2azmD93ad%2F7r4%2BFk%2BG08ZENFcuyloJAyGxp2KqYeQcixQObg2KfvzdeUttzvUSjNWWyuEohi9OLDJ2e1i%2B%2Bp1E%2Bc4YOjlGXxIp6S4dL1vRb%2BxZB5I%2FOGcufhY0GMMS41skGOqUBB4ZiJEhMtrGS%2BWlgWKHl1N4URkh7xqwLoI3uUsYJBGqlMyeFDx31oDZlMZ8zHy%2Fw14dzP%2Fz2reAcDbrEjfR1lhgzHGj8kcNWiNpeen6SPsUvr6Xu8febZblG%2BO9sIm5Od8Wa6qza1%2FxI6JNM%2FiVnkNMjNQ6IAxcgFjtkk4952j%2Fg8xGusa%2BmoLVLr%2B064%2BZCB1AGFccK1ZzukNLVI5QdLayj5w7y&X-Amz-Signature=5f0238e2d31ce363e661ebc9f2147a8ac9c1fd0134cf30fb8ca62101bb1ca24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

