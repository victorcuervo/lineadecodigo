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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXW75IZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm2aT72CVrRDkIpYUDXmCENZp6pITEWMKS2vA28cdpDQIgGhYkJ0EC7BgsolUxYMynsl7iwud6Niifl%2FbfzmprXmkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeEnH%2B%2BBQuVgDATuircAxfvcPCUvl7ipMj%2FKXx2QBVTWroyzB3b6F4wX%2FFryVT7s58SIc8wkEd0FebRyJjPPmkIf1wSBzf%2BCSxDF1cKU%2FL94mnyp4cYcBEqUrqJh5DNxY5x3GFk0EZii8Dia8j%2BynEKEN0NSeoubT8teowdqxeKQz8Xgj84Cfjs296dBAf8x72PwHm9Z6PnkA5OBTxw1ZXsrpnihFnsmHWr4cnF9J4gKrebGekD9g8OhdlOPjdXxUOunimrs3EH1%2BP8gWwZiU%2FCAU%2BM20Ple23BohfFK4nrOwKzEs1MZjZtWjwLcp5BGnuOuQ%2BqmvL5SvEReaAPIL1%2B7hEVv4xtRl0cRbMwphup%2FHtL%2FN9%2BN48E3PuHaRvuZSqOOsBZVKuQ7x1rgOjMdsKL17VyUgdq8Zc6E%2FNwgyjXVXFkW4Gu7CDJf4reWognzwqkXgqZIXSqLgYUbSZ2eTvAI2AxUTTaDn4IDALxMsd%2Bz%2BGHuYrQcvT0hV9FWthnxSrFpyaWo6o6foHppb%2FngaCkIvABx8Xa6ShycNlJ%2Bdame8m3uoAWSHdzxK5WCeLSrWv1YRksU9llyY2A9fHvFyryzw%2BZCj4UUlk3z%2Be%2BrmIy6hF%2F5CQb7G6wo6LI1cM%2BoHs95MB4AKWcRbuEMIHu2ckGOqUBCTVw9As%2FwZwKvv6tcVQxwsz2Y7io%2Bh%2F0KTyDXVeOauPWBaN4PmBiGi5Wv5%2Foo3DnyBfpU8XH0d8YYbKG0oZ6iN2iyhobJGd0mmcDjXgg8wp1G6oslwKkhG%2BfCApOuAt2Ii1M%2BsI%2BLeajiG212%2BhK%2FyurA6%2B4vR5EjVRYsFl3b2uXU%2BSNtpw55XSai%2Fv%2BtWFwdr%2FkKKStIT%2BfA9ZPL68zYgdA8ZfU&X-Amz-Signature=c8b46d43bfce3ac492cfc4786964831cb75c845463d4a8b93afd4f7d7af53ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCS4YRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5aw1eCXeHlPlw5FYNoiFEa0GRDlGwwoiatc5CWTDDLAiEAtaNPVeUybcuL8JjtDDyAWG5rAbn3dcytu5kMrfnh4V0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1ViwXR%2BecaelkfpyrcA21Qv8AzHwDFLPjbQach0MfVGUQzstMxE5FCDTUM8k8qEZ4jigwCYJ2GkQqWkLVfidOy8KC8crly0oBfEJ6dF6MQ%2F4PHjhVezLGIvAi1Gy6uXwVCgon9U3gT%2BYnzregTsB%2FkO9XCmJtPAZEIH1IZTyEcO38Qr9fqLsiA4430HdU0uqjaQoXg3t%2Fpqw0OouAVYB3RADf48KFtQPbnGuLL5%2BeMsAb0gS9jViACA4Yqe5Iy55JlF7xavqD6vbHhzWraiZrjaWItXF7kTUOVEpYlW47TVnULhcCxq4OvK8NOssMCcloIMjeHvxxb0%2BFsEUv8uVwgu0giJII9I%2FR4UM85sZdo5%2FLgmy3CK3Zb3OQUYApKCqqVHb1Ki1WAHDrnGrdsc38fSTW4mShxylEMpZwAKtuO%2BnKs0jEYTa5o%2FdAnMIyNxuTVbjy1mzA9wkb%2B6zR2ma26XrcA6ssUY9ncsHUDSf7u1GLwwIkaStKPuTAX%2Fbg9hb%2Floy2UhqTIcoorRk%2B9yA3%2B7RUNcc0mDLQV%2BG4Vc41047PZ5VE%2FMhYXdHwV1Pj7cGc6f5cv1FHPbPmISIZ3JFG5sXkSzpS%2BWP2O1USlc9563xFpsfu18WAWfKb8oXZP2QdymuUmT6s9NMYeMP7s2ckGOqUBV6Wp5mqOGNoJ4muj4Ywqw6s6CgWB0v4HVYDUgLMrAu539%2F4mjLXm1K7jFldnwILvlXYBLFWg4ZkUsGX0nMJIK%2FBTn3yemuIplvE0ZoyFUH7VKHCJMNbRQg2ypX9ll%2FfZpd58Qv%2FfX13l1EUk4QVdcGLecYJUlyvqS8VICktwUtzPGtIl3gB9nW%2FV%2FU6nbsH%2F8qWhRqOEdYwN3e4jbasxEz7lqqlk&X-Amz-Signature=50d105da26ec74f72a063374f60947dcd228462b9b174cea0ed848eaadc29efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

