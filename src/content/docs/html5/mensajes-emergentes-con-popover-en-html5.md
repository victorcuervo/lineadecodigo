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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQVVKIO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCamh3UwTXsfa%2BOOrzL1lFz2kPG7Si5shFEkAIF49UvRwIgOUc%2BjxZQdHTpyc%2BVRYSxe3f0A4nfkNTnydSw3hp5t6QqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJQtNplX%2FNhG4K3JCrcA28lKSu3EaJC2IvB5YFQvuts1Fniw3vYeJu0n4kurDVrP7IkGEEtBINbe26M81LiURHwmIStIqvIbybjEIT8JO8zqdQYCZCP%2FwzPXyMOWi3%2FGjCDcFrvMRXLfMYaCI1ZbSEVvCh%2FQkqtU9ZOgodJWXzHdUlI5Pg7KrjNqPgvCEBEBjoaY8fHbXdsmkIMGfWFBZqflZ4nVsH3zIHZEdLOToUhzxJ2Ijp%2FGDq%2BsX09jYkZyEKanWtHCkpASJ3i%2FLc%2BkYO2Vn73bd3smnMYjSjb5rlNU7xwmM3XUGed1liUCXVptsHWj7dzm9UOxuV%2Bf089sO5jFmCiVkNYoN1Utpv1AoaAUJj%2F%2FlsIodQX8qZjbq8No7uEaq5yzScqFgJdBan976iCKaQTyocIA8nX7%2FiFuYhh902M1ahTh8bdxTJLyfwRcHxVSnGfb%2BsBY3nv6e8OLmN36xIk%2ByztqJSM%2FI%2FjgyQS3CtOj8hYnFJQ1IyI0AXT56VV%2FInIOkWis1F2Cc%2FdV7S79hQj6XLGISIjruYPfl4i%2Fqa2mKDmPmSe0IjsBCnvvzV5U%2F4JjzV1lvjzUnV3DJGewHKdxbJbx9gGXT9%2B%2BRuTKg0FXyshkT%2Fc48NDifxqB5FO9Fm0e6Hz1qk3MLPp3ckGOqUBi%2FGFLp1luooic1kcGgfurTBByc%2BLa8Z1goh%2Fv5DzRGHMeR4W7E85QgwWoxk4qJMxHE5dFXTquLOkwmTLxPPauNMkGksbqLQnjXcLlwyBw104bgRYP4c3Rrl%2BhJ9LYZzC4UcWs7lojUlp%2Bx0gF3duga93XucA7xlgF7oEWuKBQaW3CECo%2Bd%2B5B75tErbw9uo3fISY2zr%2FEe80AJx2sa8rUVO4dbzR&X-Amz-Signature=506d93a989c35a61fb97fd946ccb5f9693b0c7f3133a4bf21ea6a2356a84980d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEXSXH2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwr8lHl1BoAalNEWS9a%2BzYKvCm8OoyFrGZG8AZe8v%2BpAiEAvw6fm2dmE1T6FmPW%2Fj3nQ8Hx2OmBaqbi0n7NBHauwdIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARTyXj8bS5RZ7bp3ircA04B1yEnIb%2BxQtGibFhd5KG59Uec7Sg788EPoNJeC52dPOpz1n%2FunmmtB7w8kG%2BirWm%2B18E3UbO9ZIa6Uaq6Y3P2t5gLIIXQjzveso%2FPFF%2F%2FT7f9Xe%2BSOYsbph2jUhWGBHJ7RrRmDIOZOtMQiV083LC9TIyII4C1ifqWqVlmAUOtZz0gL67ZGDijtugSMmbLwsyY4kJCKDPvPtTy%2FXgdEmE33%2Fr7xkTWSQ3SZFQ5K8VYrMf1nKzwLMPMaCPrlnyIXv8yvQJajRURqiNOtzLNm8lh7ns%2Bwuk929%2Fkn5jNmGAtCFFvG0xLzTyCEgEjz27HoWjyc9n1GQJIpjAv%2FbCHUTkfxHXurSah8jZAlKm3OMN%2BPVW4rJ3VjpkU7ZlhBWxmlxgF2%2FEtLCfZ0M1couixxO5Yu5cVzh2Sx1%2Fn6XheNIvxsqVVBuSGsmxrgCuwOHRoUIgDPaWWfjriOlVF%2BV6SzSDCBoK88BBRBgFw3dnzrb%2BL8ZwVUE2ssxz3P9kg3LG%2Bnvs0iEeD8wYlkGTtUJ4307QwwjsZTHHexfNUdo7pkjrOAlxaHKs8H0irarP2YiFxmaz7SR0%2F7F9HVUYpTBdCecKaTkxdvxiU3ATWRauXAUiUaGDHM0XmD5U9JEM4MPSN3skGOqUBpw8%2BtnrOXz%2B%2FFCgO8wUSLKK9PzYiaojxfggDmEW5fcK4NGCaLiJv%2FQk1d9LFfjWBmmtVJTa1cqvTTUhsNzrqm4C33nI8v2PD3CCMboVa0f%2BIcYv8LAfwe9UqFtN%2FVwiOF5dxeQafLF79HOrQGowvVgdjCciFkuKtvKC3WVRzgYfO4Wly%2B1EDSEbW5cbUuEUPkG2BjeZzQTIzHve6xSVIj0W3x31F&X-Amz-Signature=07c1ae42ddc90348d8b022bae22c02f29dff127be9951b9bb281e44234524261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

