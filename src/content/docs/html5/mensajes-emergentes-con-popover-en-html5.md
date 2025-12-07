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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBODV7TR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW%2BWWj8vWy5aRm2ggNLvLR6S8Q%2FM%2Fg2BDbXrnPyYxLwAiAV4RKF%2F7uqAjv5ubqbJy1l0NprBoxT2TCmimkEwNWd8yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6xwPCnNt%2F8B0u7lGKtwDQ%2BvnHYc%2B1ODp5k5pNJWvqFxAAP61nTeJs6Pybe%2F%2BFdouTV%2BbI8UpOvcybVTOA7Hzt2y1X3OlsCPR40hy2vfz76k%2BXnXfcfQGyK1CEXxjuz1Sh64hm8yyaUG%2FrPIQDhkHPh8noDbyqg2kWOUsxilcNWeAkqythtz4OEhSfQxy4zsP6IWXfnwg%2B%2F7yww27WSfJKwas%2F4bx9uKiG8RYJcLjzm%2FDU7KN31i01%2Feyj%2Fkdq%2FPOJYPpMz8K1%2BHgOJuugV7obvFHgBUMSKw%2F7PS%2Bdbqxc%2F6%2FtetIn40b65oyrFgasXUMMesp%2Fggwtuxs9Zwg%2FdVtW5JWpDZeZZLuHKuWMnBs0tFv1%2FD8eAkGPcQxHSdBhcAhB%2FAuZzONzCP5fcFlTGro651JU%2BD6bDI7y%2FdKGwXw7n5q72L9ROzT1EOzY5xzJ6zQlxSUKEwA45ywnxPfhqD5JGbJsmtb%2FGQUIXdtzugpRDWTeboIwzEL9kNlWnUnbzI%2FfV8zdoR1EY8PnHyrnoymkn9M3XdxGTk%2BxLbPA4ifG%2FvVElNXeqZBliCdeku6DqclGB8bQ%2F%2BXy4WhslxUoXiQzd204DEsIeYTKUmzP1i8gf3jJR2FQQhn%2BKbsbHsKulIEeu1FBlnsAfwmiVwwm5vUyQY6pgFNaFqMBZ7jL50gM5gMTMfBLuO7JcycwAdo4JoMmXvAZZObRGJd4otOvdjxuGlsSKFBUjklKhnYWA1ihFWH2yBSxEcI%2ByQyJdGbk2Wf5iTbiqNXapBEVnrC%2FdmcUeoAh1dozVCVYlCbU78acRoeAhuqHcfN%2BUFYT43L39VdEsdrO1ApyDKYkIsHJHctoXLTOYPiMzne5a%2BQAdKlK2QB7S32fq0hoYm%2F&X-Amz-Signature=f0a30e4eb4f3636804dc2a5f7105b26398b67279c6b211676f9ee23160eb19a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427ZLHC5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZhB7mJHOJFckOAACUh5h8XK1HBw0LsDtN1tjPBu4HQIhALs05BpoCvGk%2BbDEsQhRE36fXx3%2FFp8%2BR%2FpRLjb8qO1pKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvYiv3t2I6Zz7zbwkq3APlb9x94vSYSmDIAmuMguh3S%2FTkSA0V3SrmrF1NVv8EzHCm61MKNoKkrqEpCOGSjHVHd9AnE%2FHNIIy7mxIy%2FYQvx8Bs7f6MRJ3fWDD01aqJJF%2FUSImwvejSYuTeq58GvUQEgTO9PwRE3o7GTnRbrqx%2BXaeB6MI6sz%2BwCmzPSBsWmBlfXtuvGvXohogW50XYfUhWofEP%2B6E%2Bz4ktAvLV6qqNIg2soLDu0njsMK66JMKxkg6FmcpC8zXN4xWoJxLyV3p5LbkdscME5YzqsEGT%2FQJq9awzEayNZM76HeRyyBnckPty8WCrev%2Bfnm%2B6BeNzjgTEHe8UQxoj3Ga5yUYlPy%2Fis3abSJ%2BSPdxc4Mge%2FZmErdEyAqHaP%2FpS%2B52XHH3Y51yzKTtb8arINdTAPWsU9Lp7gYRgrYzgotlWuisf1ZuGZjG7BWGoYAzERh1%2FDHMOWZ1OpBFmi70wcbZcVKqAZ2VZtOrqq4zJ2UGVzHfRNb7I8aO%2FaAXfgB5K6tbmbozivAPdbTpm9NaZ6eds%2BGzVe3A8nW66LJ9NgxjOTEWpygiRV%2FI%2F7R9XhbFU8dASNdcAy9I4GajTmrk9XshMrctb2EuOadygqdMkYPun0A2Bmo9UV8lhpc%2Fu96hgy%2Fum5jDKodTJBjqkAfut6MjmPO0CfHEFZYGZLB7rxgaMvRnINqR2TX%2FLYuawFsF8WITcukKTiay1VFpycBqSulr0Y80rwO5TJ3HkmpZuZQB0YEn3PiEvYZ8rJ5OLrNQfH%2BxNe1jvtmyc%2BL5EUD7QlRGG13DcDOl2jE43Q5y9SdSAiCE%2BqKFAkYXFeui6NUokpNqiCBy%2FJeLWamqIwjQvbv3KVy%2FUa2YwKFe%2BZEKNzcrw&X-Amz-Signature=9327a6152531047ef3d553b734f0bf39145293df2868701635d964244dd87587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

