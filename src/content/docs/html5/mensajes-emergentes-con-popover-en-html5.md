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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IELTOI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3fB6G9yijskmC0MTJj0A2FR5V%2B4gniXwmhBeSBGa9CAiEAza8LcDrab%2BshqGVfTMwMBn9f5Gu6WSoWC9Y%2BAN0wwDAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCsoWJSS7NoM%2FGbGqCrcA5duMmFB7Oka16KFwzYCuuweXR9a5uts%2B0QrsTEmhXcb7ZU7%2BeJsRdkfXhhLeAypZWUXol4lFB1jfttfujd2KIncHeAbP%2BKkJNVMvcrvvzmbwrGQ3GoiofpGsvqU3iE0rgWcctCjBvNDuCn6o5yVp60tt3IYObgjAD8EqhUyQJdr1Myub%2BuThMYYsIOuYn6zMmLU%2BF7S434cZ8GUhu80WP1Qok7BEjkJirXcbk1Zd%2BzDsWy0su6l7VCN5tJnsCRohzzQA50zc1MNZxvsGPyxQIzqxZvCS%2FtOx9%2F%2BoTMgyja1kUBLROMxs8FEEzxGfk4HR86x3skkppWqAcxZLrFs6%2FGFMQUu%2FXlwoEErhf%2F3ACpa2SyoL2Dt67E0o125LkZ3nSM10Jzrjj%2FsUJaLum7ZxM91GO78qKR1LdTU%2Fqi1bhTpWbKmeqjl%2BuEF4KFR2trWlrYksyCzM9DAgmQikjXpcXTeuhJfSZ8mk2vQdZVtMfvRLwXiZ%2FhzhIQeb%2Fle7Nw2nbbxXOIJ3TQyn%2FfopVxOdNe%2BZdmPxt265YjC1lfPeWniOwxrV58y97Ep3ae8iQLbTtYlUmIQoX3zhWtWTjdMM0WxDQdirILsj%2Boc7ek%2F08dCdfIL5oFku81DNomRMKGnzskGOqUBMVF2sL87TmBIgXILxJHlz5HTvo7%2BT%2F%2Fn1FMFGpdZWF8%2BKW34UOu0gVtBcUni6%2B%2Bj%2BqA9%2BMD4jpgwy9zz3bCBh%2BGgI9wnwJtWohAG1%2BDDhIcL6EtMjOoL5hZvNPI72HQ3qVwXHCSHRZP%2FcvbHxf8I8IthdgFrvqUnJ5EqiAE5nnzKeh6%2BnfF%2BxIyWzE7xmNcEsI6D4z%2BC%2BuWRlfkmCz8I0l7kk8nT&X-Amz-Signature=a7298171db4cddcfae485d92bcedb215d81c892a3ba74b460628e3ae0d509b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RGT5CEH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCwazIf1yGSQkw99XVdlI%2BCb7%2FfIqk5DB72BW2IJEJpAIgbj%2BFwly4umgYsc6L9YEyBNHnDOHa7%2F62fpbyftOrjfkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLAUn%2B89M7mZIhqQ2SrcA28zvHqQSSN2X97OnQoy67LJlie%2FYBm1O2Hyyzy9AQIb7SGVmwDxRlLIyr1Q%2FxlkcuVvNk7PWhl%2BLMkOwDhyD6jB2LLIZSjGEnDIcni4X5B2rt2OphxLsehQWQa6y12WcQpzqho9wcchrm4us1KK9YWveks7a6wlR4%2BfeOqgJeyi9xEf%2FJ1hI2bYS6j5qO88x%2FwaQ8SQxf%2B9ZUKUz2VQZ9p2PZYWaZOZpa9%2FDd02UigBr4OexoEGIdi78f%2BAsSQb%2FO8Oanbuv0aNhRvCS0JfAT76lZtbcMn2IhEorljIDcIkgj2Id9F0%2FVBbO7nTXGcNUvjwEiadSBAEaOiUCrKYtbUBYVOgNoGlIbOi2NozXUtQrnOXkOXGgqDLfyThnRVDeoYGcyI3CsbNI%2BT3aoM7idDn%2BmOnSrPAyOE5heHToFNzS%2BE1dRUn7OsNDApBhUIQitOXcCP%2Br5LqPs3xaMjQU%2BKQ6gLSH11tb7qc8XWHEDFb4%2B5lIohOr2K3EY%2FLUulcf3th9vX%2BpyrdYhhi4M54lH%2BoCniaO8ems%2Bfkn142Af%2B7mNXBT9%2BiHxMP0UHYSYxilNF0DJvpEiWVzNccs7Ss7ruDY9EdTz0sgt%2Be1VSAPmpPp%2BbB9X24tMbvlbFcMI2nzskGOqUBpCljh7m0tvGMp4RNUM5PDJM2P5PZ9wW1Zcsw2XxvrqjMuD2LJZOgZZ%2FDgy6IYxAjEHGsQUjajxkLt8RL1kHD38m8vIip1KtN3nizK9IoaVMX16rTOOqUvTRiXRmOEJaXuQ4Ndd%2FM2ewdoyUtPXPSQLuF7L5rl3mF0A2Kkbd2q0DB1XJvcVuzMm%2FbFqLE1oVXz%2BmtOIgHjf%2FyaY7z5O%2BS0kS514qI&X-Amz-Signature=13d019adb2d7a1c6fed602ae17f227c5a32ba2826f0482a1db6102970682310d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

