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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2LTYZYK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPSVKeHcjCM7GyMx3%2BX0mCYcZgQFIWV2RBV73fPlOKSAIhAKZSCKW3d7ORmqwLQNsKK5yJ3w2CpR2HGDRzAASwk5PxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykqtiINeD9NfPU2qAq3ANmlOFqiBuCs1SR9nHs6nDuN8ECcnBMtL8cH2wvRKm4k5V6TRUTNWH9UbPycjyj8FQQ%2Fs76akyKRlGh8IQice%2BASmq5F1rSwVVB31gh3nvcoNyDe2QhnjjwFkVH2Vwgg4JjJG0xhC71tqKfMwpRtaUVJoUL1gfTcCziJjOD%2B0eB1Zrscxqg%2B8RdVG44TXfOAt%2BHJ%2BMRktKbd%2BUPynpBL4Oxc05U8KduY7M7m1fiPRG6r7%2F1%2B1Pv6qyvUyUNWEJ7kRKFJVunxC8yVokXeicARvUpF2IBKxIXxFh4SijGmoFmNaqqklbwwlcLqY4Jp%2FcgmwewEYRZ33kbWtMi2jWAGvyiydOjaR2ZypFlIP50%2FHhZjd0%2FT9BaHDWSkmPoLu%2FQRPA5RloLEO2DgVWub1cA7b23xMy3XBxYPnnETMdtiiv30999Z%2FXn441a9J76JARLbDy6v7pPMxU%2BYIoQFBcbT0n%2FZePaM1Vgfjd7pTVYrq9Sv4ao4zPlBR1q090yDVNQ%2FbzaN2kRPB2NwlUHKkgaYfzajkbU0rZyaUn28aFgN2grRLHJfHLQxs3x7YpKz9VYY5MHdeu7HgLjUGLh9WQTxNLKAVPY8piPpTms0twO6zq70lU2mp35hHBBI0YpYDD67dnJBjqkAfjvOJ8mk%2F43HLt52v3fE76ZgAnCaiMqf7ArEqzI9D%2BYhTE%2BYQUtUo2wnGXSSE6QrfHL276aDGAClCns53fyypVRZTp4VhxqhUxxMnbmBcqy%2BDXM3nczsO8Yh9j3tnAlgAe788yl4w7cuThmVuO%2FAfzr%2B1gyqGM3UzX26oTT48qpx4Ed7XMGaW0BwW6%2BFLKzP2h0vExCORnspNmdoNeU5O68zy9I&X-Amz-Signature=0883639ed258ccc4d6fc1656eece1ff0621da74d2a946a661d03e69fee8256e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7PLFDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC31Avxde28uu0Z1eeiJAhzf9IdwlKoIR6OFxJ%2FBgbIBQIhAPo%2BkxVSbfIXTm3QRiJmG7Hjfs%2FORfhNOlPHMj5BOnfTKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygA37gc6WynlObAusq3ANN4oWhZxHfUjbIQrddDCHp6wsuyl0p0QcuBBMXIr2VXoOU0B%2BB8iHsWvXAHxJd2p3EWHpk7JCvoUl7kFSq57Hnp71sl4Gr9N1eqqQk22xUo%2Fu9XZCbHPXtXVnF09cI9wJTUKjOnpfjJ6CiPHhPT7vH%2F31s4RuC9KJUoPldYWjunhispaE%2FfzmjmKaSNHUQ%2FFDUfGjN8f%2Faaqb9aCdWjjroZPf3ww0Dfr4sh%2FjGJlx6BaJAjsNJh6Z7twho62tk59SdRdLsXViB48Vaf53i1J1khfZmI8LuPeAQjWDk1l2Yv%2FYR6O6FaTlg6YXsEcTh7PnCSxPoZyDTBKQ1RBGm5QjzQqvDDJq7jt%2F4TFUVw1J20bPvj%2FU6NTaz3Em6aAnDu2WsSfcgRPj8c4AOBhlFJyEvBAPbuC8DGN5c730HlqI9GwAyGp3zmokDeptkLu0mhgBpF%2FvQOWWS0XoB5O2CGy9g%2BYb9Nvl1atoqqiHMESyfmuO5WPEHf8pmgkzJxX9c%2FxK80fP3Av0ZGtZ1oydOGZepyhGW5Nq%2BgFranNVcRPIJmXizGXJVlMD234pit1R4dJEQU%2Fy7oH60oOiC1AG0vfDpQmyukCfm21sSyAWkNNYQhgMEHi9MlbxEhoehHjDG7dnJBjqkAZEpa4nP7D4KRWrodAlUzEE3DTliSN%2FCoIHf1vYYJf4c%2BuUVENkEJj%2BVkimHWYiWKnrt8GBlzviKRS8Ua%2B9Izp%2FAiZIxBU030GnpN3lpBSfZbIbF8D%2BO3rRXKg6ozNUWB7CFBXsK4VWxfKOhXs0p8oyd4vXktOFfb27EBud%2B0QGMnWpwTuhs1nnionDFrmYO9hmsceCROh%2FrDUw7Yu8X3yBzNv4y&X-Amz-Signature=08ca6eeb6a04c9b59f027060d3f6d8f46e337f78143b218c5d58017aae03fb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

