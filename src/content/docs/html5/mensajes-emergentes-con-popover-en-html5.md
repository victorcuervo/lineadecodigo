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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKN3KBIW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnVuWSPRDfHkM2ZOZ3FLLRNlyMhfnlrfBOZQWnoiWr6QIgaQlR4RNDFA8h0qb3dY2hpdnUu4O5z2T32DtFqFbqooYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAGEk36A6kQESFZ6eyrcAyn%2FfmUPZrHITdO0RHHyhh11VKaAMKKN1WhsVGnRx9ShGS3lWl%2Bk93%2BdtLvgWmgAUe9atSwjZLdyih9rUbtyWlZwP%2BVu%2FoQEHUsYPv9%2BvkY40Vb5gFVjcxHhgtZ%2Fwu8y6nksK09edifuVBjWkLN6Wan%2FcRYE33CdVUSOPvcNM4zZc85Il0c5WpaqY3SvjY2CDytiro3JjxIdgieCX4RucprrI1At5BXyPKkNghS6oAuACM6%2BJYbBMYZCoLoh6ea%2FqTEZK60ctwKjGjeD7Q3D6fjeLa3j9nQnLmrIql4hEt%2BR95Sme5zRJkDnvIqx%2FlUKa2ZlUjLhJXrqoZBXJm%2BNsyTIvw%2BMmltP0TJVdoMkc%2F7R3hstag3urzh5T6TkkinS9TnuCP%2FZTy4f%2BOt6mvgnbCsu9jmtQRwFg5nguWs61kpsgQXRkQNZksDEWLvhlLAv39bn0Qxk5WZAAoCgAHSi0bl4NkYKPHI968tPs6YHqXT4GWL%2BUaHxH7QrftreqRYN0GtzySFU5gcF3zvAVq2l2Tmsc6CTdNnAWcfKYHzguDv6dL1GCQN9%2BsMGEg%2FeY6Qx1i44PTYniyqUj0c%2Btdc5Y%2FrMPUxqku3%2FylscAum%2Bn5MaAB9LJPqEVAN8H7vOMJ2MyMkGOqUByyW3oqs%2FGljOEjeK08nv6msQsbm3qLd9glwfIIoV3EgoUZkQOoWiSxHWeEjueIaicO29mEStj4CR4dDXggbwGvIqjNDADFWSlIb3Bfqi2KfGxI%2B1uIHqarZ814%2BFY0DKlr3ZA1EDwD49AvS3F8%2B%2B1yznq5NHRXTrzsorhtdvg8u38zAkc5VP6VDAFqsoax9A29ZXTMnFioDerr51bbuvpA8Mlgmr&X-Amz-Signature=5ae978a96abd2d67e1cfc6d04e1823622e9e3486cde62097855dc67fb2872f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OSGM7N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxMdTArqRjdxuw9rRBzOCuyDX1YsvWsMnV%2BHL9X0nEjQIhAJ3oEz%2BOeg2k8VbXqO42dI1m9GhVhIY4KPVpJmfY8HZTKv8DCE8QABoMNjM3NDIzMTgzODA1Igxmgve9wMKjasz5yWIq3APaIgKervy2lvM%2BZRqcu7HL9Vn0CEDlBjqspLUu0lmzezQRr%2Bq3TsHicwpshkCXNbB6YStGJ%2BlddF%2Blkw5SPfxXGOEZ%2FrXk1gchsZsUlvMN9lMEMknGfxAjzz4Ayhi0tTdO3J9N6w%2B7rxN%2Bfkxz26MZ8WZXKBuJVPqplRurS9E%2FWPfgW6JPdAgbSL7fLAv18QXQ%2BLZaLEJJ4YrxGaledw09bUUbqlwim2%2BnlMT6K7hiJgsAa9tLx4dIpnxt5BDzhLzkFXy9CCu%2F2RA5zkTveWq3PMarPzgjJCnZ%2F%2FAB9%2Fgybj8temyM35kO%2Fj9aeeWEEBLBLH1CsO9a71F3IxADOq5FGhP6aX5DKgtChAsmbAsZ%2BRzK%2FlQ1rJNPd9z2M1shHLmXnjV4DALa8xz4e2TQtmb6H9jpaaJ%2BRe%2BQ0j6L3COC7oo6f3KtA1DtsMWkhsjvAa5rVpDRwmj7jSiMh62AAqEzvNBf%2FDpFAD0xL3NWk3Mg7T0umaGD84jFG4pcXDcQO8CDQ%2BJBTN%2B5dxtLI3nltTR1P49JOYhB0UDiqkjjMZK44auNk6%2FW%2F2mDRrB9h6HzOVN0CZ61A%2FQoYHsF2g7%2F5hwJl8vV3Ub8GAcZuM1Seg9bKWnbJFz%2FPMlS1tKPVTDWjMjJBjqkAZ4KFE95WV6bRra7no%2BAaVelUKEo5Bjb6PrqXDONk75nhHT7L2LesC6sgtBt%2Bnbs%2FTbREU82eq1GuSD2b%2F7b37LotHUGIVnNaByB1qYc54GMyXKIXk71xyiHcUkCfzl3H8jALJPWmYs0Lgd%2Btf%2FKmUiE%2B6Y9VZ%2BH3vAdeM2decnuAoeKK%2FB88ChHtsRl1iqT4quwfcnDZSm9a6uTI%2FAd58%2FnWQxZ&X-Amz-Signature=341aab45b717b336a84c37c7b3a4323c559ffdd881b321d02dea7b1256568354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

