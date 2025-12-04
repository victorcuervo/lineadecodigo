---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVXBIQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDAgoRWlRVVq8IIUH%2FW0%2FQ%2BZjOqICojTD9ZQXQOU6oD%2BwIgIcUK1Muo5m9yL8RK9Lb4w7UaIAszfsOwXEIEftxJ1Woq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKo3hBA%2FDCMehEx%2FZSrcA%2B7aFMN7o5IlUT%2FsR69Ql%2BhnnPwPF4nS2X8%2Fk7dHKkOJY%2BvNor99%2BNPF6Hw%2BK7qeYG4lKyTFHVfGn%2FK%2B6YalQIdQG8BXkVkJL6X7d4jDlDdQU2llW5H4F5AYSS5Ev%2FR1TiM2mbIbWb5QcJDTMN5YntplqQKBl5NUxloelpcHLnKsSX4JZsczYvASwCI4%2FNxyaGCJlykl7Ee1zt4LycgZGTPeWDC7m3GJg9PsNH3naAqIJsCwEDClwn%2B3ZvpRtkJMuVS6JhwlE6H6jegOKCnjNc37Vyz0woQHu0uljd2BNckI4tbnFCjK1mt4qqeE3AgE2fR8A6QIqFwcPHQI6u9%2FekgiIeO85ssdgjN2P1ii9jKxWv%2BnRT7Pu0LWn7aq5Z7wjj6X%2Bg6QSPBlB%2BmARPUf8CEjrJ2NaH%2FuFc4xdlnK%2F%2BJ6rit57jFQu%2BMFghaQXwD3jiXGxeAWhlXPNMsaDhsgcgxEYzF9Y0HN%2FNM994vqs65F5eqM4%2FRmDJZTtp7cW1NGmoq4%2B0akx0ttm6%2BQlo8w%2BG3GZqcO2JS5Jt6brk%2B5gQb0GoOsNp9CryQ%2BcJ%2BOG4rWXkEEeaJvwmqasDvZ32TsNAlEjpyOyPNyH6QsHN%2BAMR6fLFdT1lJ24ekrnaDfMO7yw8kGOqUBeNbfcuU7KPKJpKfIqxUS0SLfbJ6KbP2dfWssw5LbrH%2BaD0%2FS7QcPqns4s%2F0UpP0S%2FTj6pYxHUtMAoUFpoiIGBf2mv6SbG34M09UYMHqbffjGiDGG%2BX8Ft9DTI9P9iDS2qc3qTtqXRlDq41PrSClCjrGRBDDFHpmBqlR%2FVvziujaEIRLS%2Bsc6dQfVLpOZcJBY35xT%2Bj7V2JrHSqGJKSLOKfSssEzE&X-Amz-Signature=62d4ae8e135407790bd0cb3e12b896a571e21b72904c95cad3b59262fcacef2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435MPCNA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIB34yA78CTNprm3Xgub7S04bnzdLnnSjLYFsDXgk7IPBAiAg5itRA9pr4qq8g%2BKPAyfPqVvDJ9ICPEsZ9F1euVnlQSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMMuQGCtdXBEh00naNKtwD5z8NcEPoSWC9wjaAmVDJJ3mWIZRQoNrFfCwfgJAVxdmIplJEeFPA91lF%2BMF4SsS4BpcDqCAVO6joA6Dd4sfyvdMabISW5wOqbj0zKkocS%2BppoG00tiiWj1SrJnHyu9OnxFgJAlex6AQkItaF2mvJqNqYF8SCBMviFnqBtfIEWvRhzv3EXRaDmTNvpq%2Fq5I1%2Fs1tRT6%2BNlhwqwKGs8Is1uBVr95RhHXArhletrxyhc8%2ByevUY%2FK%2FRrthbFDIpXeh8YgpsOc9tWxBA1Z0R38fJTqe87ZBb%2Fcaijl62%2F7MKVH7wYwVg%2FjRNIvDRspsIe8%2BZaHj3dU1C4F%2F2Cq1mNfiPDh27lPAoHvpQS6aXWH7%2BuboOdR%2BUJD1Ab%2FWvkwXY8pepQkg2HmnKJ2WJ0SmTwkuq7p4cbRvfRd4WDOeM9pz9%2Bj5DwDko7iO7fnvTrIiDJqmLeZOO3iO%2F5t6fZ1JmaUGWY4bmPVdtAiAiJee82TyQ%2FWrRzX%2By6rbn6%2Fr%2FX6UcO9jqQaidqV0KOUHet%2BuvcUGiHQUmv1pYzdzmAFIGRKnZRPeGz6llV42MukfXF5I6sekXK0UkytPIzMa9hkzw4H4f09B3O2k2gTBG65gHWagA6ifk%2BYr5xnSHh2uNunUwhPPDyQY6pgH3lVX0EiLut%2FV8aCI7g0CkpGo4r40edT4tLkvJWSCMoA5undkUxQdt7eTf7n9muVprzwRwFih7fkDQ0vXyV8texbLZeCBdvQTmyY0KxVtVWSrHKo6xf65OwCTbxs7h44Au3F%2FPHso0IqI2S8mQRmL03hv9fyA%2BWAGjoXR9lFJoodZWcd00KvsIrI9MuYvayxZMvQMnxB%2BuDm8ErpTZNfkqi0alyJTv&X-Amz-Signature=f071cdab576bbf293d67553cbf838f9caf87447dbfe9f81037535bbf5f9a1c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

