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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA57CNTR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhaCqniKLnSIhPhO%2B9UW2KrKvqy1635qj3dmOsM3XDdAiA84EtCvnhU0kLVQZMfHaiT2wd6JgM%2F2tGytlZuiZGlVSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMgtWmN7l32eLHCWkYKtwD7yZ3qRf5KBU7RF3P4K%2FF%2BWRqisE3fJCVXL1RIKqCe2V5w2AyIWOYqCvmkytydsMUAvmbTR4PqVeRWvXQsncm2im%2BZ3nVL89uxaM6nv%2Bb9g%2BeNNrJ5jeezTAIi582CIHpxpXsuE1q0XtZhGUSqGThyYtF%2BPil1WTQ3bg5bW1VK4BCA52JQlRaum%2FPApEHr1pL7%2FklH%2BhqVV3vKz1gj7sS4FmyLCrFuR8cLUB8yVCq0AJ9cX4nGXP%2FAGKKYrZG1BZNX7cguVRaVD05h3vd3pshNz6HOJx0jJFIHVN6DSW%2BR3fkdAxtIEkxQX6VA37A3wY5MpQQHCODS2QkyP%2FqQnDmAmS8PJ8Yttg6vmK5H1mRjASAPF8kEJGj%2BWOdoCHinfQLlpRQtEwgvNNeb2cpyG4rOU%2FrMtVemMJCwfvQtDMe%2Fz2q19wVHVKkTwUvz6k0Zvwdlw4zb68erJ%2FlirYHdHa2NLTyOA%2F14KnbnyX3I9TToEvkav%2BH99RsU%2Fg%2BBOtrQO%2FBqthKdBiZUd%2FVwgbljR%2FpJi10RH%2FaVbIihAvHo8LDcHfjK0jCRzvu3xaUpSFSnezvSfYYgD17n1BQ77wUUbAM4j1TKLiXwor48EYQcOyGC3OsJ5Y7jFvDJn0u90wwyoTMyQY6pgFCxzvah2t3knSO%2BrbM5xbaVrDs0lmun0UcU2PMNOXxDh4CTkiRZSR79nuERspRbb3g2WQZYb8IpVolx9UUz9ITVEyuGNlI%2B1Yvf5LCnEDXqkQ%2B786axqkQCTfpDtAnXHqeoUTCSQPS2tHGx1zPyh17c7%2BvI2mBby3Q%2BJT1nIJTKwDrW7oxd8ZbJYNdkoU3ZSKvzU7F3bE2JL1zqsInjof2O0n00PJx&X-Amz-Signature=5c9b1155672379f6e52fcee94d7b2e5fe3e3f067be5155acb9f4e30dae19fb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O35X2CS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAkyaAZpqPQgo7X73Nm13tBhPddQTwyoKemkxjbzGT2AiEA01QajIs6A%2BKXAbPVKcLGZe4RbMa1N2FY8B14dN78QnAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLLByusx1o4ka6ODyCrcA5Y7vVtp6Hjgv3qv9RICn2DmderW6BPhvB1hmTygqf5ikdv9Nhud3dVgUYDUNWt1TAbWJuUYkvg0EO%2FbEVs3XT1ktikpuNKXmEDGfoFwZg8sxzP%2BNlWGaknVVwuGi1q3cDl8VcnZgqTgi%2BdRuQz2xI9zSPaazzxIbSaO5h8qU7FP3ES0n%2ByDX82KbuI23%2FHA5YQtG2LyP%2BgoNKmyOCLNYI2l%2FP9ZBzBXR3kZ73j4x8E%2FSqeNKzRUylAmMEFMVUkt2X43St8BfIHJHIEDdCONp92Atx4ItjrfEe7NUfOiA7O6ZNxYLGhBSXE0xs24P3LY7pMW0tRDivJ4hnqRyP9K6EZLrwZKTHZqtHT7I%2FdNoZrsVLAhsVVoH9Q%2BLuXXQDQXZNT8pSCtc37m7jBDlUZjL9Z90a85V9ZEefDGsye%2BjLgHLwdQCh33z%2FQ3JATKycrmS2GSUkNj%2FO%2FZxyQYb52z%2BrZEVoTCdowfNYzIVba86ZLpEM2gCq2ur5Gihc%2BR8cfZx3VkvINxGQULG8PoSH5Ag7%2BvHpQZ4OE01eU4%2BLm5xB%2ByClWYeGx6Anv5pkjB1WMaXSm2Mlxw6z0xv2Ci9R%2FXi5B97wu1wWce4ZuLYVVBiuFgQa46GoA0qIFjXPirMJ7ty8kGOqUBtuyKFiCA9BERW%2BUWySS3jJEjDvCtW55XQLT%2Fr1oZsnhjZhSUwaZAmvfsuZolVxCdB%2B5dO1qDbI61%2BoHi3S9FebkQ05WjjbGx6jgdWPss6aPgJhaPgxXJtmQRbMeh62U9IV75iFsZMS7B1KApkMbQ4gcyH7WlZcDjN37QMpM76cUowpzylk7vfgoj4vmf1LlUIbojch74jV6ful%2FUrGQ5obFzmHPg&X-Amz-Signature=2f57fbdcce248e846c93eee19adf04033b70a201a4e6fcf3b1e7acc0f3841391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

