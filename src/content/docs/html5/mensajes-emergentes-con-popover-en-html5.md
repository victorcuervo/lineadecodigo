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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RHBDODO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqihieIERsiSJxGKmACzyUjFtpIRg30miTvP%2B8uFIAcAiEAoQDd3xSuXlEiw%2BYgUhyXNmKuHIU82O71la0Dg0Xuj7MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX8Dv1C6ABHVd2t5ircA6WLHscuKg7BjmjDuK8netsL0tfUYhOwnv2kKbm5XGq97PNbrEESB41QLVN5sYq4%2FcD3C9jHBgkYJVKkDoa3rpYY%2FSfYHVjN7wcsVloQ730dWdH8oO9iHlUERguEleds48SOjp%2F5HxyPXKGWy3pvT6ma3yVAFHbzR0hPRm5GATSX0oM30gUste7ttPmNSO%2Bs%2BccKqZr08XyEcR5yMJI0aW2F6dMYBNJpzJBDcbL8FcPvNiirxsrCpr4ER3JuIHL8yDfk4H1pGPIiSU7MHXCw7njS4wHS%2BdCwSCuLDQczbNzICHjedtyjcCwGm1YwNG%2F5AlMJ4C7zorerbqsTEyuXFbuEKZO8YNc1mwzUMqpT5%2BfX5MJ%2BpkK%2FZ%2BzM4hnLtKEBXJX4rT4%2BIRgX9wNGIwzJpCZ1AGLm01TyWgcLUMGTgjOnpkEHp4Txo6o2AiFVxpAsyXbjrE3Dve3f2fEuI8ZhU7I4JEcJGqrVrHKkYziSduc%2BuSmWT11Coq1dgJEtfU6lg2a2q6e6tr8ZtEmVQOgnc9JC7iDCbJ8T6bmTPAvh1AEDVgm2cRoFtSAZ8BQz8Nuv8iCOPvNyYopQFEGrr2TSoIuJeWODWNztCkPQ4oG7pFYr6KwU%2F5aJqME4Nx3HMOHl3skGOqUBJVsf1ip3dCVh3ZjcTToLe8O52prl37cCiKU5wzYLXnD5B9LLAQaGTelNA7LpllX92bzuv4dha3aoIWaeks%2F9bLgvyWhZLj2x3pRkZTJIFEBBNmVX9oyc5N1glDRPousXQzEGzY3S5H7F4j%2FZNqF%2BtTcM5vq44qxU4zMHlwTbu45EA7N22r5TLPy4ec%2Brzg5yrAUWMWuXj4%2FRnMCl%2FOtJvrmXSDD6&X-Amz-Signature=1d15c6a6867910e630247165dbc229f9ce00a253fc3300ec47bdc2ca37b7960d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJWWG3H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh58Eifz4p2%2FSgllDnD11yQDQVYTvBEM1fLM7BeDtZsgIgEiLttnyDYWxj9LmT82STWGIeLHGQ6pl1vmFVA616jfcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMYvi0QI%2FoRCMwtjCrcA%2BPYKnkRkG10igO3F1ngN%2FMdpbJRoRnCAK0lxQi2IKZet4OYl80AIMVb90mctb%2FbmEcpOBnE4Icw8zyVzkWMFDutt5PorkAQ3aVw8vdx6R%2B%2BAB4VYee1OhO%2F2kDnf4Th6a7ok0gPK3WvHUoAYNX31sl27hMFqidhO%2BdTQGbZ2DIBTrs6HFUf9lXSH18nK3JJUIxb2ivxvqICSNtO2%2F42aOMlWbYvtEmKT9dfLzmx7%2BrxhyYzhmRdikqCYY%2FO%2BgSHSXLrUebMo4LkIP%2F5WrPtLOK7ICkSZeKYFrqSMZAtWKt08v4hlDZtwroYvPxc%2BLjP%2FXKy%2B6VYObRuPvHMZonpya8jUaPKglOpsdVyYgybZd%2Fvnfkf%2Boh54blSgBGu%2Fwz59G3wV9U6pt8Ce6WphGO38KMuWv0Vd8HHmtX%2BgOk1zNmMCmXA5VG6zuSvvKOhUs2%2Fy4JuqKbIa1kApflKP8Her%2B%2BtOpA0DJANxX1HVKsi3S3Sgq14xX5zGQKHJ0wji%2BMjN5stkKlm0exedKLzvEsSHr381xy6IrRsP0dhUcxmdYgKuD1zE%2BO8EO2TPx5tJLR3kl11kcx%2FLf%2BNdOGxCNjCmRenH0aZ5YMZjPxR%2BilVRWY3evebT4Xg21n%2F0y4yMO%2Fk3skGOqUB4frICvZ2CVcr1zNxLjvI00rQ4hdmor6T7PPu67AUqjCtuStc4vDHYlBAHcWMiK4TnBisQ9iaGAfMu5p4HDki6tAoKHvTM4l5LCDGrxNWKDVBH5PWFIEJUjs5IXULmoMCOnyCke5Uj7K0m0FByan1iDbOfLT32dyZRTr4CcRL4NfjsTgBKNFSmznJxhZAPlkS2zFxSjrwjANYoknshTb7OTXo%2Fexj&X-Amz-Signature=cb319705cb39df70ced53b4844ccd79cf2a26200ad82affd8dbac08c301f9068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

