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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VF66X4S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX5D35QIpQCHjFwmJ8XZCp6qalTkK%2Fl3yhqzc3p%2FUHJQIhAPNzj3hkpwQSd%2FXlb0tWMPZQ2S%2BQmOZu%2FdUVMhdbAo%2FJKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8uBIZRNDkKJaers0q3AM6TEHyMT1gXMkaKIlT%2Fmovr70UNEt%2B4LX%2Bd%2FBPR375FQlF%2F3iQFpQNdCsi9u0IBykXZDGrDWDu5d9SdfH9%2Fa5I8CDpIJx39Cp5yGlp6S2H7XJqWRZE7fhRBLc%2FMKevd%2FdHPL3xxKSj9Kk1yC0qkKM%2BKCfj5r7f1hP3Znziy2aQjG2eS%2BNn46NhUWJsqJDTdvxEaCa9bMZ5En0At4aYpvHjOEx%2BJxA%2FwzkQEPwt23NXLM64%2FiaAcNwF0HK7EOTkt5TGPFquZpuYIJiyUvu7uDaWXdjhJisZ7bwzpWhlqv3t9tg57ncF9DEStr%2FW%2F7DTD%2BNcmyvy2sU%2ByOD9toPiMelTCr7SUz7rm3vFtRIsMdklXc%2BUPtEZbsKsiukJwRJPB25K2BP09oL%2Bxwgqu5hFoT0hBFaDqGXL9Cl555igpKusav%2BmChNfja%2BsQ1agwWyqIPDdvd4yHt3nthgBdMkfGGNFNDq5B%2FEqNfIFFMEyXgp6fBnmS%2BvS6Y%2FSMKhXu2e4EUMIm7%2Faz7uOpyY9V6CKjkOWSOXNo2S83eV9BoSS1pABgvJhHhFvl%2Bo74zNA8est5wFJZ2C8Arm2RsvxuTIWGDdc9nAile4N2OCrto%2BdTilc87WfhsIbyjoqksahVjDlx9fJBjqkATeGT1pHd00FtnW%2FQJtL0hi2sJ5rrE%2Bbx%2Bfw%2Fomg5eVGfgasvZtwfltZm6lZAzVdde86qMmue39%2Bszy7uKpJgQ%2F%2Bw7QLZK4s8fKWwpdbLvOwf8nGPHxLKWYApcIyDugbO43WXKdR1wiDshK2IhPYgaxSNYZQEI8jLJiEIkeQ8eppTwNTfikmxjSJNTGZA2GYl19yVY%2F5obOaLwnNUXOcPxKFR2t3&X-Amz-Signature=142749521217500e68fa02269cf336c161d0802226243fdf41541671a1b25cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZYWBAL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyu4jHE7MW4i8i0RC%2FWnnxOPxc5bptwWHfvOCH1Run1gIgYg57UpFiafhLd5JXfoUIoEg78E%2FZBJ5OMBTrb3hVDgEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObXtOlo4ZO6%2BEQsRircAys%2FgRpn8b58HGpcuEK92CK0%2BZF0Bir7%2B6gavo3Ml4aqNGU7LVTOYKLkDVC%2FIfHfaR7K%2B4Azt%2BuQIz9p7NXHz0YAqk3uI0AB3cZOmGAHSW%2FwS8YZRQlg4mMYRU0sbjGyS5VlbRD%2F2uZodoMpoCI6jtA2lYlMD3WS1dW%2BWr%2B%2Fc5cfUhJavV3hoATneZqQP6u1EzxPgkSZcKJnoira0BSixG7SaIs4ZuAMzwlvRCmJ5hrkyBpeYiNDW2rRXCVy67y%2F33aSl60HbC1Tc415lXx%2FODuxDrqcL0E1mWgzSgiDOGsGc6n30iHkP6qw5ZJ4ygoT2ewI%2FYphnkVV29h%2BmHny5c1HaAhMaAFuqo%2BWvsKP3AwVufzRMNKrwBFVqbwVFclf2NDcMt5JSEnU7VvoMU7t8LXHm1Ag3cV7vBTeSl1f1bjQ%2F6H74szdZiU%2F52FmJ4x4KZx2QyWrurGsLUHXiYwUXC%2BtBA8cae94HYG0KN9eeTN7%2FaDK2bzrbUsHr9HYOYbkc5qTCCLq1QN%2FAgkPGvvciMi8FqWqYey1n19Ddsn6c%2BE0WkOCvovKt9Ids1rrIx3qawUFXY5jKLxOz7gm5DStMbqQfG3OjbRUwXKLTM9xLCIG8%2BH%2Fidww%2BXzpXUn8MNmE2MkGOqUBgDriKustXw73HohmffSdY1XswLb%2FqCxGpxr3iIrLm2AangwRIsFkgdXIt%2FGpDVLQIrh4Jya%2BG9iKd3wzIHfyzleIcG20EM%2F26NsoNpUaHN7xqN1MBo6E9VWHWCTLtl8JBRBO%2ByiYCrS4E%2BAtVZPc1EUdEmbZEg2zKX95HD5wxclUBABfnMir3yAHpoPOjr7Y74YwqSU7HbkvpmtiErBZc2qfqsoT&X-Amz-Signature=b90b541c285202248b4defbec22284230eaeb94f203a88aa0dc8ad6ab09020d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

