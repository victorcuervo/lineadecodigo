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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6BWQ6R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIERAu1qgkMidmhi13JA3tvVJSLdCHLn55mD1LIyH%2FIN1AiBDbRYfleqWCiH70scNbcYo8ly6mOP24Sv2OiUJ2G9rsir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMJOAiV91WNGJ3YIvDKtwDVi9JC7hgpC4IPqlmEY3rr1v3nDHlVvvcVjpJTB8SXe3SW%2BJdI2qPDjONhi26c1%2FjVW84hBeNFGWn4un98qNwvDCRORTcOrrlOmfWhETxjWz40rVHq%2B09xwPQcn7qtxvaT0Bshh8toDPmR%2Bjv%2Bs3xfH%2Bhw%2BAiiWt215h45iruyt8VDAjoolGB6bKe%2FftWxB1OoMlniQb%2FVgl218kkaJWG%2Bsqx6VF26q28WPxRyiB0yIDuNcrce0O1w3c7h0ZFQqdJpC19xxxJYYgCUWcduIe8qIFcNpu3%2BVlST4k18jLH1QdKVK6pOIyKQKCDgqIYF%2F9qiiTpR4S1UpXf1RrtbIZxhH3IxugllLZ8k3wxa0rNwOJWRP8NNCcrjs0GFTmI6YggBK54U2OENn45GjuVId5d1XIN9XuC2XiiOlahNjfLnonHbbp4LUO9RYP%2BcCpGsM2Fq4EdcR7HKne3Q2Sil6BxJWIKUD3C3RH0hsyg%2FKsq0B6N9GyyM0vC6nYV9roZdYmhmw%2FY2MK4YCj212RdIyDK50qKrprp4gZn3JH0VgiXkcI%2B8RSyLUHYS1%2BthrfdIt1R8teMi69salZ%2F1iBH5K5WQpZrZEs%2Fhe8ra87%2Brj2%2FOjw53aHsIjRNyw22bokwl6LGyQY6pgHGbZz8Wft0ip%2B0gabSsOLBpkyBHEfs1bxfWeGaAcedwtBfdqoo2kq8t19oiFXZpJnx53GMgF6raJ927j%2B1Gm%2BHDNgfznPTsj9R%2BZCClsee7YP%2BvLGhimqInhEu7pF%2BVO5bGVRA%2FblmVfLxXn0OCkjwGgNKwKpNst%2FTIa%2BQ7OKE8wXqy3PLX8J7uoWxU17QiwtQtmXkEYVSVOb7%2FBjZFeJAvOtffbAg&X-Amz-Signature=95184e3f3d1b3d735848a85545bee16da277f781692be44419ac68596b897357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZES47G2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAoK9V%2BNG%2BUwndEkkfhfXk6b4swFYWa8wddbuzq%2FjvDtAiAMTYW7ue4%2BIl%2FUr%2FUqe9l4TuseME1cGTE4SOEzwDMvtSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMvtOIPsVbf1W9fFZwKtwDSTRDvy41YhA8Ii%2BaHRYfVbg0O0mXZAu00keQpZnpEryCFzuHNmXxwGfkrrnGCqCpjO5Hep%2FDG%2BSNtCJS0GNXC%2BEEX6VlLrgf2zQHQuOlIyvjRf0C4rPkFhO56krahBaSjLxbkU6VBDQvlLe9UFQxEKQuewM27l500AsKVTgcKwpqW9wcf6i24M6mn3LgNm1LO4K1uUKL1fonQcfOJSX%2BDTx571xA2WqYSiG%2FiY48pjs6AXS0ozkqUogqIbZEwmTPYIhChW7uc%2BcyliCylmpzkNjgLVUy0OlVkd9JP9btuhYysJNudPTRvjpFkj5nwe9r36%2B6CmQuV4Uyy2UIjROILUeg3xu3PgTpRTfcfvJXhxqpCWEW30%2FbWjJW5qyyR8y%2BEaDvpsTCevhVE%2Fm3V9sLWdD%2FuVwu%2BAU%2Bw4RIHV7CE60Jj5SkrIV3nfDZRCKMUpzVYuowYaB2xAzoWL%2BErVz60chtoDslGWua4PR6PaQplkl5WSGjJKCj1c06rjY%2FHN1GQ3k065dE%2F%2BTkRmNHb9lKoT8qWLgyU2JuGLuGDQ1av2DMFcJ7s2%2BIj%2BOXN0SljJstctAKacJam9d7WISIBhXOK4XrTIwlBOf68M%2BtCf%2FZpNpUafr56sIwKVWDT8kwkqLGyQY6pgHU%2FymafQbsptbuNv6yyJKCBMvOMsvWZLygMhIVibNn0Gz%2BE8F1DkJjCf%2BbXfJahqbpjd8rIxl9XerphxB%2Bw%2BWDp08d8ub2%2BrMM6j0F3OICMhFWPNhsu9Bt4sIblXW%2BvQ2nfOZE3AgIy9LLaErAFR4z245QQq6BnL6UwD%2F2Y2%2B%2FR2yMOktussAAHgtoMz6hmRI%2F5J26DJHmgCI1ZFP%2BIEkaBeKI9c89&X-Amz-Signature=156b56391f87a77b89e759a53a9b223bed19d0d001b70fa8999cc0e5cbdd5115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

