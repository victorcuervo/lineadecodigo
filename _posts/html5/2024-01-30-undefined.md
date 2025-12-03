---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCMMUJ45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICtPeiQUcPm9QL3u38Ftc%2B%2BxKIO6ZlDc13pI9X%2FgNZN3AiAMnfGvt0xYpTAUd1n%2FN1s71qIFq%2FMv1EAT%2FEd9HAn5DCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMTDS6ZT%2BNKelqPwsaKtwD2dyiGJAwf321aRZ4V9jqCR6h7U8ofSewXmTDlG45%2BSUi5uYXYY1%2BhrbAXwXHQ3TTp13jb5i5oc4D2S1qFHWZPeism32bbIX398794AzdBNDSMSygv9Y2lqBzFVy2rSCZmqPH7olb0wbh%2Bg9%2FjLNiQtICBXvgVVT7RhkQ7hx7bBh6KuF%2B7t%2B44lKBMpCrcQNHuvY2iK7s%2FkXVCv7tWd%2FUFQvWWM62ud1sZPKMqVFg9cdUbUpJIwI4q54IXBHc9SxfeZdOkX4cjTWTnd3nbBsMHxMH1Os2sySQC5Wc81ZtwxEAWu8UrytRW6N8N0%2B9uEp67OBGRcVbPq5IHj9U1sNf4TkwAT5BHY8Tn5j0PhEQ19%2F1%2F%2FcpmP5208HDu0Q5sQSfVmoW5WCR8KfR0lXje9gUqN%2F9K6xwxHCvEgC0%2BRmWYmWHJr6aK9pOsFlYyXF5uscNaRUojN0vX%2BNAliBGsH%2FIeE%2FlecfSmT97h3ACtIqgL0DK8MNduG7n7lEAuCMymnJb10Vq9DTnKMPSgipfh3L22TUpXe%2FXbrH%2BV2TO5G2rqV5Ot2q5C2Bwif10nzwA9ooi%2FYM9ovcPZEy%2FEbvfjDRBs0iSsB9bM4c1rE%2FVnbZe%2FgkTeZtYXG7U%2F2H964MwpJa%2ByQY6pgHik1c2OeiR7xz%2F7%2BtDo%2BQElFI74HmRsMttYNV4Mnx5ZDG5OcezPhBfmVDoeQBqySAxLOMYn2tbgVGFyOfHVTZZ0rGSHWo7nrrfeMzRDD36GwhA%2FuJ6sdF6B%2FaBYWRUtwCjzHi19FZCbO21gr8gROGS4tO5spW6ZsU2EXTKcwbLrdWotqclMkMULem6%2BJfF8vQ%2FXL%2FZtyhgdPsP9Uy8N0ouSZX62d%2Fk&X-Amz-Signature=838f242decafeb17e5f2945eb095a8d88272fdd6386da272ece4cf36e8c58596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGVW5LO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCWabehAbCDoVnR%2Fkt479KTTQoXRj5%2BAXIVyPGFMcZEUgIgYqL6AsvhsTAS8%2FLsz2NLEx%2F6%2Fvpw8IrexyQ%2Fv7tcWB0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEvahnu5XAKDNKWl2CrcA7JqvJgaAKtpUg4kFNY3kkiTyNDGpufg7axg6gdJDSk7PuJyzUThWPltvwRam06B%2BqBfVp5pqpVJ5j6a1WRrmytqC8PJ1fQGYLj3Sgwly98fyGA1bZLTPbk3Su9GuTHCBW6v9maPO%2F4QEdQJFXxvw1j47hSQUxA2AHWQHgTZNonzQb19jd3oxqCjt3fDYHhEX1Jkr4f2O%2BHkXtisPmhhpxSPQlwOhSBrQ48WHhT0pg2ODqsL%2FoXi%2Fzf7D2OojnHdhzJjOjCLJAsfmEy4QhEsno83L7vtr2iPB7gzK%2FoTwZHiUtMPv1%2BEsO2lT%2BEDwHRMRsDN9hLv6DlAN1rKrr4ehK8ZMJKLp4is4wfzdI2b8fZnr0gtP5OsziTrNnZbdXOaF8f0u6%2FriINvTT3rvv8GhHAHMGhim2tD2NrW8tDeKxrOt1BvHQQxNpG6ctSCOupx3yOmlY9%2BbPdWpO%2BiT0Y0on9bYOIkXaovCoBlELGvxGre9CDj01ISDQ7%2BCKG2zHzRYyhUwSOWH5knW0yTArt%2F1jhm0wo37OI7pZzBW3vcigytzdawfxUpde9rXlHfp1XtMqHiri9RGocAr7JNlHI0YapJABjGOwkAV%2FOrJAailPQiSzGASBl2CXj8EQBiMMmUvskGOqUBydA%2B9DyZFBkMZ6wvi2tjr%2Buu6PwOib10U2XsyENLy2mre%2FwpXr4fEpgCdd0W9qS0l4riFICLpfbpMFjO5b1Mbb6b8xN4M86bPRq%2FetFs4VUm3t2KHq8aFWm%2BpFiOOahn7Fax32q9%2BighdhyGOB4u2%2Fmvl5hAxE%2FfLcbV0nEdZHv3cQcFUmbW4lnCD8RycRlpCTmkPdCVgxoSq%2FcvXF%2FACUe7kuq9&X-Amz-Signature=63cf1191d3ef0d0e09c80da07f6825b3e31972b82fc8604857c7c7c33e8b543d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

