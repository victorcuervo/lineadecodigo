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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV247KW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZtu9V4QcCc3vvjczHQAsbnQUmS%2F5dCA%2FSeJVxxUNJlAiBRS8rZ3%2BxqoCsWJuJwVT%2FVADFwzt3PwtYqIyg8TTsWKiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgbnjiPT%2FecIdnuYjKtwDf2TaJqlr0UGEzj3Ec4z5vzvcgFAfMqPso8Nto7%2BO6bTte6zcQnNJQkWqR9m3DLMi7Dj4qbAAShH6VxOyfWc6egAxdSSdD9XczCQ2z%2B2C06wCvAv%2FAeTzT3GYlYqrLc0OTTltLHwsikqTh4NO7oobgEHmvNVacXdaUnLJB36HL0xh%2Fzsn6Su%2FMW%2Bme9OLlowIsc0HrEmxMK2nAf9TWiohs3WYGfB6wgsIYSMtD8D9R8BndFLCGGo%2BnPEtmdZI72stnyMZ4B%2FSOusMCSqsjG5yFaKbiTdW5vmTnbyhX35H4tb3YwpFgXi7u5CqlVkDwGZv4WRSUSqWZUiHYRBzbHQ6%2FDa%2FhbLcSsle9C7r2nyZm2CM7DZKbESouzUTo%2Bk2%2Bw0Eql%2Bhxiei3HzWmQ1FsANOFFEuT5UF73Xws0nWIPLbUiiFOAs0nwaIJXru052LKq4HaOWIKq9IG9AllXJUzoICxor6j3cwMh7XsGM58FvwEsP6ikAXVdmn8yxs429ifL3wPvgwLPiDJ23Qt8Z24iDEtj7zcN%2FLsuE6MC9twRHEEOdp1lA6wL5B3687kVSDyas47antk2pGFJBQbVAl1krjh%2Fhy1Q6%2B2mUdhmOoMdiFSNBWv0t6Oz2gc6dV8oAwy5TZyQY6pgG%2BDvkdgZc0BarCbrtoG5%2FWE4bXlFdsSS8D65NLUKaeC33LWxqh1J1Jn96ZL5AofpEpKXb7lC7OrMJZzHB12gldtBNMKvToDngQH8WP3kiwAGcIiYZTlIuzzweHhT7PtYVx4G7law20582fE9RjEzarLeCa4CbbItZWiVjAh2ez5D1S0HyWALw1gpF%2BTBAUuQ6tID9af9QU0aIJaCxEQEpZB%2BZcxoqu&X-Amz-Signature=bcecbbb3ac1d57a5d38c54ea4668fb0e365bcf069cac87b72fd6b31779fa0854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWNDIMW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5qMVbIDylIM1um5tSIxV7O1YvecFQeXlwT8x8RJ2GQIhAIfz%2FOPUMsUTC8TbDs6MY%2Frt0aTxpknDw6babx%2BiTsX4KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjYd4vWXR1Bbdafj4q3ANGn5Dk5q4jX09ADVa%2FRHq%2B4SdQSL1LlXEGEuCS7vKC7bQxmI%2B9OB26iYC7l7V9LZmMIWvSE6z3TDxObr6xdYs2l88eEsXOSdWwgbSQdtR2TJNyWcrTsGXW42b%2FpSjwr0B0IwLMIPKElML29AufGm3nqJ7Iz0n1t2nuPXL%2FXXCUl5huPK72qi6%2B9cDteB3aB%2Fx%2F%2FqyHf%2BTfAJrvfv8Vh977gUuDp0TTNpB5BkAtxQoQFYmeJXeXwuttVVx2pBkQnqU179bojJBnUmb7qFx13gMh7xIFWpTCLlePX3hs4u8%2FWZwt%2FM4AcgFHh9jdnwBjzmc2sbAvHQ%2B15QcBJcv7558e364rZVQbgXLPzM3Mvu0shs22%2FTCxFRptEWsCWGxOZamJSBSKl%2BKRyIcL6gni%2BW%2BQu2CcSzpt96WWusXl%2B%2F2%2Bnm97Z%2BXT89g6r7%2BR%2FPEzHwvHM4ak5kOz6PkyMfmR6zqhmMahBn39auJmTQStFwGKRdE1O3FiNcpWDbWqyE8StsIOBfuETpceNcppVEwouj%2F7IcYMUco4nzoEsFi7sQtEw4BZmAT9g71T3eWqSYKk3Jt%2Fsc%2F0ttiKHs8tNVOx9fo4LJCZb%2Fx8dAb4v3YpP8MKWfUPUyGnaDrzE7L1JDDMlNnJBjqkAcCmlShGQosjFkOY37LAa0bF4jVsACE%2B0OrloHW%2Fpr1gUTyRHEDuo%2B024em7mQX2YF1OCrOzjTXHusC2j10fqJZPwcF%2Bi59Sh9f4Snw9ovKStS31MNSTa6Qr2dAZun7ZDYBzOBGb9mspuSEvPmpOeYnmVXpMYCzZlFYMb5Vu756c8aWMVuHjUL%2FMj1GgbB1fYJMzULUR5sVYXNJt7EkLiaNL5311&X-Amz-Signature=c833fd2c232d16fc259cc25f24bf6786b99b3e1aed91e451d42f619fc3465b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

