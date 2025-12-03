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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRYHCP2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHffJ%2BR3JJ2uJR2aq59FcIShdS82o2bgO0nTBmjSQDHMAiEA2OjfRaRWlEqXlQdyropkcmkHK2EpoIwm3noVacdISZEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFPl5wXif0MaubFJ0CrcAykEzDSvLoPEASnLfj0HZaDGO%2B4o3txvldh794kaD%2B6JVOid%2B6AD1peTee2PYL6d3vFwnvv56AelzSLOlX7pc76tZkVm3hZIwNMT6K%2F8iemHllnJ%2BiMIdvHdrT%2FB0c88idUPXHl%2FvcQ9gg2JmQSWZt6s2tGX3WPuXZW196jiVeSbp7k0Fg0sf3ik%2Bm%2Bg5WhtsltYv2LUTm%2B2xbPUHJlTL3UxbhH0mgs1zfV%2BApxK3ikDJp5eS6%2FcRS90ueZ3L%2BXOo9tyNZ1l6wfo82ol27GmkwKw45F%2FltZknGWwNYNeAfJ5of%2BMxVrbupFocw9G2ga%2FXWJq6MOC94DcQKd9YRR9XB2vugWk43NJxlQk%2B%2BtGWqPagYeDhHwH2zUlkB5KJ9v2ImVoPAHjt7sNcmnZFwxd6a7HLEIjU59WVK64KL%2FeNYeSUF9fWZ5K%2BBv%2BJ%2BBSE1OSitQxloEC1Bj3jdjUDD8O7458wkkVL8%2BUb8vnvxtsKslOg7as%2BQdDUso5LXPPaJNOIlpv9mb6WFUOyTKhPA00ydU%2FIi1lBwUVN8m%2FERvPg531YOR%2FHmqN3jBEOpZ0cds7O5Y%2B8f0yl0yl%2F8T7S8WXcJaOLxE9oN4eAwNEd5COhF738KxWsjXpd5g81qijMLv2v8kGOqUBq0cZ53jB4%2B3pw4f%2BcJhnFPQ9bhf4KZr4M%2BJl92KUa70mHII2uBblHkxHZ5A%2BF9jBIQuU9IVPfWbXc7lQZC2Z0ght7gKr%2FlBax%2BFE0n5flPBECLSbEcAtXaphyITaEy3VCDM7QziIWBSUdC2YMzhiZe80BdiZY6TkkiAnw8DlArZyOF5DEEYYaeMSgg9QQA4QVxEr0EBD97wONSOXN8eytmCMi4Es&X-Amz-Signature=abd7507b073d20506a1148a7686118f27f9898fbfd66809f9da9391161fa7bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CUGVMNJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHwdc0Di9eaDOUfInOwXQCaNkTr3NNPKJxO63d6XJO2gAiEAytXg4uDJDNOq1kBqDaMyJ2Rthz3vbhGlMYVZ1xAyNYoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH%2BjcrJeGnzBO6AjCyrcA1pUFb%2B%2FwXQLj48mFgQj%2Bqu14tkPZX2Is6PPvgSbjEuGsf33uP8A%2FvkhxFlz5TigHwwcEn%2FRGT3y7XHeWc2MqBNpuzwoA0IyVo3lUj2AjSEQSZWPE2v9LZlrnXus%2FpTNiOPIUQzJNgG0WS0%2FL%2BQzrSMgQPoZQQqN0cXzcSEbKF2rGwUUIMTXj%2BLHBNaKNF774BXmV%2FXcx68g3MvTamWZlVeacnqKdtCR9HWtZ969nBHt%2Bmm1UQxC9yNKKkyqFP5WGILYlfbZsBgHX%2BeMtDaj9LbSfI3Adaoh3UXrbz7VlP0Tnz5Ctw636c0c6bqK49AteqWWBTtDqN6KHbu60PzAXXAfHznfPQt4stQ6ZUhApt1VMdXlAyvlMsf7e0JoeCNJ6JSHGfR0jK3g4cf9H4R5LQx6AYloTh7UzKUXBQwPkhjAq%2BWpvuXT1hx5EAWDyofMV5ceD1hkjbl94YcCfRmZqnI8lFa5UAM1y%2FBQCYdy6rOXNQTrbZYMJHXp%2Fmg8I9a0oBihR%2FX13unyNKOoC43vdszyBQoJLHKY4b7zskUIzwGGMMpj7duPG793HDPawPP5k4DXiFDnJ74w5tbwrKjmfu1%2FaqQg%2FYM0UDeJEoFQhdrcdGSbLk4EoFytwHIMMOf2v8kGOqUB2%2Fnffy2GJqg8K8mSgGUnA7o8xLHy87dStR%2BZMbiqODfRpjkekMU%2BubbKeQKObJW55IPEd%2BgKzaA8iB25%2FcT06pRpY0ZIDO1eoQp5TOikzglBoq1zIfSeAFSnOr5I%2FoqBsxJoSphexPyeH0cxyZQDK%2FAZ62EEgDQ3cNJjHdgJBhPHP3wLFEqtdSdHvxVQJnvp%2FNbkNggFhXw8bWegRM10ZCebnWGX&X-Amz-Signature=4e98d1485ff7fe906a23b9695fb4c6dceb9c3bc2b928b1ba9be41c92cf3c0c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

