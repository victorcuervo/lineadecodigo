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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKMSYZM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZMwvGoMe8laRlh883rh7a0rcejc%2BbYgmTZA1%2Bsyyw6AiAYC76E5u%2FAHk8IXjLPrLZ9xUAB6QqQx%2Bik3L7cPHAJzyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0BZX1BFpLOhl%2F0tmKtwDaDRrngjsRxxVZItAEUramBT45g79rG7POWfVKythEir5C7ffhLhfOowmD4fBixHuVOb%2BSSeyEQ87%2F%2B6aXXIfiGoFcr8hod%2BPYJKw6%2Bz7MUOPwJMBL9p61I1i0gklgfSWd5L%2BidEJG7%2FRriBUtPOaTws5fplIinpmihLQf9fIlujz5ziIrBf8mNokbJFWAnd6GOCuSFmYFI%2FPmDja1cJ5WYnzrPNT9JTK9fnm0Vnfc8WtFB9F%2FBucDp6roQaC2wc5G3OlKfc3AqV8hcks1IOZZF1D%2FqeVbkvk2AcUdNJGHHnYohYV0DbvVaLnWpnvqIfl4D52coOaNAWY9FBNP5QHIbEgtNRvDPVPHWiATPPq96PUsCyVCAXXiwpdwzNJggI2DxNZlZ1%2Fkhy2ol0z87c5R6ppWUtdzUQFeSgp4%2FVanm9Q9QiWeTHTqZWgEBqUTO6HQ0FT2TJsxFR1yo%2BVZ9EeuY3%2BuINVJ5Nd1ThoNp439oQgkjOg5j6mL8oXxtJBY0R7Nf4OasTdwzM7D5CZYljJkDjOcJpSioMwtFvgO0fKfw4SCVm9lSmVz%2FTClr7ciRxLuR21%2BjaWPSQqGqrO6A8AWUBlWESPfQTEeXPlRjdTCpr2Yiw88lZpHnRq6pYw0NHYyQY6pgH3yLQgRvpGC7D5n4kp1ykoLm1KBQBybsR44CSOu63%2Fa4xQmPz%2F2FRCvHKzuniOuv1e1FV5%2BULqbFi7NbZpsCUB44IXdO6arKwVsVJAciL0%2BmcbNKJ30PacCLudF8moa3gLQ1kLk%2FnwIPLiXfPVjX5g4v9uNworqeD0artq2kn8b5KbPTybB2iRvTvkNAyFyee0YAouGhtTFoc57%2Fy7w7V2sP4PXmWv&X-Amz-Signature=0f5380167c7b496743ede629a181bead4aa6d4ff9d16298c12dff82c713bd10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656U7Y5YN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECJ0zXS9p8AKt9fhDnK839pZL0KNI6atUGrlCCtUZrYAiEAirzA%2Fb2X%2Fw3K8naEPcmXvnKL6PRBUrdB0V6q%2BlzxKakqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKhqNxkSm4kkMxoRSrcA2noda9e2FBzQjGh5arHJdllb9k40QlbxpIKshd8TGqL7wOIUeDgLzTM1ZSDpYI%2FWHkIqYonhfDtjJLzssDdSPtV7q83v9axdzHx%2BTk9nSmWSlgH%2BMyQX9NlVEFlwbjR4F2fQDdgbwh%2BqyMdDLAJ3aOqc79BZs1yX1sSGd8C2m83Hn9%2BNkgguL8lXGoJoW2cmiCDEtZsLqPBP0Wv1%2FLsRcuC2HAhjfn1egfBawUczzZw5nZrziwwKQF%2BHz1m9MZ79QhQzK9NjUHI695e3VRAZEfmmJjuVLigyvfuUCJUyLf9XwNhxJUCAmFrgpPrecvPEkEAODft0AaDs5dtkHYDHTgXHyyfMMuKNb9yC7V9%2FD4SikliugvzoEyb%2BMu2Qbei%2FQQ2KkwrNfUXh2RXuSUJe9yaHrp9YKe9csszvVaSErwEqFVp%2B48fK33RHEGe1xD8V6OxDYIXP1NmcAORAXuESyzK2DjjnPbRQ3NJS4W3CPH%2BxmtAhhz2oK215RAhbffAJbvkvHw443BbYRhW1J5rV0jyIoc54LGdv5pw0ba%2B00iJKurlpR9GC%2FXX2Kf3642YGuS4546y6QEjpATrISyB00Kyz%2Fx4KdtvG3lIXriLUPiYVqYDN90MzucY3jCUMOrQ2MkGOqUBKgUG3Tu3n%2BNOpHFvk3RpbjGskAlPbF3li0KKrnxBvFaR9CwRxm4psd%2FeDrk%2Bruzn%2F775g0m09k%2Fu%2Fj216N0uSCaTmW7phZo0shCxHeEm4nz2gw5Fm6MJ1MonqDr%2Bsxvxz8Y%2F5bgpWxFXSlYBN%2BNQLqbl7%2FU%2Flz76qQdH1kHXqrjvJrk%2FXsHPleGGvW4TNj5u8fR7RFc%2BH%2BXGaRcMHUqFlB14q1vv&X-Amz-Signature=dd47789e816714cd25bee8ed16e853995260cafee93204adcfd16d1042814292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

