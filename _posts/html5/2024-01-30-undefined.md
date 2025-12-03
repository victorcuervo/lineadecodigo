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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJOIXCO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAPoA7KvuSYUuGW%2BXCe6NxleBY3DEMmzbwFU5J9%2FkaHJAiAkWiuUqENQvPwIgVbnHoXPoTya%2Bbz7qK98IjgI%2B1Bkcyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMu5D6qo9wbnG4Q2R7KtwDTbfPD2a5SZtDCdnRcli%2BGtEiXH7q%2BKh2h%2FaSW7ZcWqJl7m5oqhYvqRzbf6OT7NEiZ%2BqMVySR84lvOb19Bk25lj%2Fl0qGHESQZa98Kq2OW%2BUgWmdqfu6LdHGunF5uz6%2B0Fshd1BMhpXJrHBdAMvmAqLLiKr1DzofKyybIJ4T%2B6R3nQASw%2Bh%2B%2FaT8g8PnaFR%2Brncf%2FgtDqvB52b4Z%2BTmL%2BBKO18EICFHY3%2FA84d6g8OQRAyHeWQBDmBDXrGCzx5PHlOR7jl3IPDBEit9d4O43dSnyQTfysHZ9gew3W9NMl8vYbMbKW2EECkJgyu%2BVSVggHfJvVynacBWDi%2Bf0XQFZ5NiMpoV6s08ku4%2Bg6osLWO%2BenQ9Yp0LUDMtXptjKBMbMK%2Fk9lk5ROWfL%2BsXKxr1G2XWBgHS4DVr%2BTAvPJWtYnYZPtC7Q4%2FzwtZeat5EmkO0BDVg8uCNH51tTHIZdSGEt7%2BOjB8INoPo9ke7FSVSP%2FF0SJt9fw2tPm5YhAKdLNs5vEUkFBtuJ9fSuDuEmap1Nzxdao31vApJfYq66e%2Bujf96vhMMM4jMxHyZ5RjJU4Og0XgzsXYUugzTRI7m2AfdMhWZGIX9emloSJgHMnL7QrcaYLJfjALgLDP4eJ91IcwsNrByQY6pgEuBwgPss6CLOmLXnQV%2BFSsAEu1r2tmOW%2FGl3Vs8wY%2B8Suy%2BuhxMSSV3e%2FbnlAAnPZzbnCzeGyHfIelH%2FF4CxXK367gZ8blYtT6bxQr7StW%2B9%2B0Uhiuyoc9WwCIAS4mjRhcZwOPdrc3cfVvPAXd8c2rnaYr%2BCNG7blPJVqVi7GHn9mbiSlSr1AQC0e8X%2F%2FQ8XjGXqbo7vxuyBEL1fgv9nAaoItyJGnc&X-Amz-Signature=7fb9c9b0261a67e76516375cddaee42dbaf9de7955ebac73749a987baba05547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KK6MDKO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGhsuN3a2LyAABQ4N1xUjo9EzvYr5lzb4I5smFoHeKbfAiA08aL38sgHZHhkpckzQSKYbtWhmClryJRKZmeExB%2FvnSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMrqAnoTAu3QNuyoLYKtwDscdTJRss7ugz2vuqJgoK6Q4QFGk93mT0ommIRSuYaIFLWXlACEdg8fLyXpkbXPJX9rtPviZ6YsEpgySyJ2qUQu62gefgd1ZX%2Bl5YW1wuAELEeKvnDKBOpbNSMSrIh%2FXJ8j0HTJSAc57%2BQL6nAFSBQrIxYuFw%2FHHe7BZVNLnet%2FB8RM0tmF1BQ5ZdfzTmnmf4BOqT%2FDeaE0mJRVht5xFlJ%2F9XkRSR41a9MEWCpHePtRS0DRKjxwLcJTC%2BbOLrwcEVMfFoMqlXaNCNr2F3qdacuDoSvbEXfsk7NsXn%2FBXiBalUnlwo%2Bs8oHB0TdmVaqpn%2Ffef0EuSZI0Boj0spDmk%2FvX4jP3spNhNo0r3FHBLktRgz0Hqs021deBf70enW5dwyDR26Ls9r3ekXFgf4RBUvJNdThYqMu3IW9%2FrDdXkhv%2BSXjLbWrj7EjygaC8s8zyo69N5lxCq0vbmJxeUyqq4MA00MadZI%2BO%2FIW0mLswwZrqO9SI5eZSkVtITNF6sdrrJvXyy8cBPDOQzI5V6a7S392gLbFW5%2Fqvh6vsBjSinPRfcw8O6X2VXhR0Im78nRhKbxsG91cAhmHaxVcVlfNbpi2mZfAra2okuz2r9gMujBR9YgJTHfq5GgoIGehxkwqNrByQY6pgFFRrViaJ0mxBQeowqQ5nk10pHfGguaLTzU4K74b72kfJkyYcW7wbAFwP746jS8%2BF18gHEHcdi0HtYpTtQaFcBkqaqjk6yWfDTf23biWxkOrMUpZujfoju4a2QHYx4%2FpjChqIblmfI344hou8HOpdNHjLmHKsRPmecyNkfmsTOJizdExuDbpcrOMHM0UZZZ1psbtlnitskLeXUz4ZF0r1YQr8tvZiS0&X-Amz-Signature=c90178b04f6bc98fc2ef779c6aba4de28e59056f35d9d8c75290e8a590b73997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

