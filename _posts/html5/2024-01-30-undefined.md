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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EBGH7F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBTEcR94OAPEPSDGQxvw7ml01m6qFJHat6ErSBj6M%2FohAiEAoy1Mcwx2C2A1VE0scZZFjoTib1VnACpn4yCcajk%2F5Zkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDK%2FgkzvYaynMR7OuSyrcA3OeRI6B0YKnOz9UD5tYjwkFsUhtRAHzF7zKsqesxntsgIpV4NTrii6XgCvhd5iPBrDB87udOJGOd3jlcmCvY4Fh9AC4yvvdRG2BIkwhS6e8leWiccB3ypCquCxyB79NyeGHAby7ihM10FkA9ZBmlwFXMm5XuwxShpnzxEG%2F9i3bI28xQlW5bGIpnTtyECUn2ZqjW96uMlnzw6%2BNfiD2UCPf6vAOb2Yq2LtJFRVDhwksUrEqVOxdagoDpGuSbqtbUmHlJdiucfDLzCoyelUqWgcv4JHx%2BFEsT1sQjvRJAB5TYs4hUQAK%2B5JYYlh6HqevdoU56ylcdGYb5EANWZNOmp%2BVyyVXzSdagT%2Fyz9equ%2F167tqJmxiNA7k%2FntT3fIl47YPWjP7Ts%2ByWmnVQAn2UBqUo77pX79wXBVu5ynnUy2eB3HyOzmIjAKNafACSHZ34SMcBM2bZTF3%2B4dfooVRB%2FnQdFD2TGjxgYQp%2Ffca01yU%2F5Aq%2Bt4QNAPrlO6eIlI6En3dG59QXSZnX2blf1MQcGX738gV0b7ZFlMjlTjK%2FJcVu0xh4DQWdfVNgqFfTBqTBSnDo7HnxvAsuhfueh4PnYMwvc4TqJB%2F%2B3tICkC0q1HJvTJDe4urATw1qddc%2BMKj%2FvckGOqUBLUoRSs24DrIJutXDywqvCn38Sci1sXiO7YStvraZYlnkZRZ3Uc7Pt%2F062VHI9WKBmk9tlXo%2BU4HsOEB8XmP7wckk05Ro21cZXFUQqLvBBgtjV5oNMtCQ46dG5ryOELw19vx9Iw3i3uxNJfDJJltR3AkvMj3WRrF8CF4MXMJOshEt3SG69ydd%2FbHIHeFFb8z0SSpG05%2BGntsKMVulTDrQEnnfdKM%2F&X-Amz-Signature=cdb69f704f992858c34ef38bd48804aa5ff8000bc62b2cb2859d4fe6bd92a80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOA4ZSE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4Vl2ESr%2FuU%2FlohWymles7WYsNrdHN5LMfM8aEJ%2BKK8wIgB1EBEcknPBnEPHWqlmtIEs%2F0IycOeMzakdHzAoSU6Roq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDG1e951MxBeJVyfk1ircA4oclFCCrmWg0TNE%2FWnhSUvj2DSV66uvll6ZBtna5xbi7aUexhM34yQOfzGwdwVqcTRXYa%2FWvdEZuoDeJUSst3tbhP2Uq4LQ%2BNsZxLzqqcRpYoc54miOLdKk6Ysv64KhRta4QCQOZiujzVdUVLDGOAECPmpeNp0PXA8cMEnBEfd2HWClqplTih%2BZTgQC1JLt2gJtKKWUzSAjRiOyAhUOLggckGoln4LWNHDXKoaOqX7%2FAOYCMHBbUqYSY%2FEoGt4JTUTm3BNiOvRTjyB26Zb912%2B%2Fr8h%2FUu%2BzVic6YZByu%2BHxf8G%2FJUK4JQE%2BjOJKcVB648u3Ju4VXI1ZAbwLWoowweWHQGknL%2BnPdz511GEDysieHVrA57etuGxBhWX7ox5yungSu8CURL%2B25orWze5Fe5x%2FP4hVw4JjEZHZ2WFQ0ScawKtlY3DvQpQ2cj3h1XNFauDSAI6WlvFBTS%2BFxW2vwhyNbnQD1syBpBkYIwNSncWJIiDGn0w%2F3J5wRp%2BWqtMHu6nwf3aSG0QNaK7tAM9D6taM6qc%2FEl8RWF%2F3n%2FGxVWBS4QLiRYhr7UCSDWOPgTfKdo8mBoqUj9HMcWWA721IHZy2QvPm6ZEQn8JLZ2heyBdB16iFcflhPkamotAiMPf%2BvckGOqUBONwtA6jvB5tHIA1LoYnGoW10s%2Fkmxe6z0ojNVFFSDTDr8so%2Bg5OTeF8bsY1%2Fyt8LPYzHQyRADggBtKwIpr9b0XaIfN8No0BJccljrGwR8JEXnLkuZrY7Mk6XHpr4Q97ommtn1YFcLD70VIrPpA167ueTITK3Qge6m%2B9Q9CKRCtzhDf7iHNV5hNq52ywsBgtKUlIOXhmdtzdwt26vtxCHVppSwJZ2&X-Amz-Signature=cc3a851514c88cc3222de1fd4638f75ca2f20edc2780eaf24b22a7c9e9c4dcba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

