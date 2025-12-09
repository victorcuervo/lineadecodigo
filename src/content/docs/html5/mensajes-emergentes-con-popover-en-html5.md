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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN67ZPXI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK4ik2caEuXgRA5ZTTYeo%2FxdGda%2FBfA%2BvXOa1YaiEsrgIhAIWepK%2FbBQLY%2BeGGLDJTKSOQn%2FK%2FYylR8%2Bvm9u84d3PCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3X2nr%2B1IYghzW7oUq3APVJnxNNHcBMPM%2BXCotJWykk6FPrrP08ZARp0aGRFBrIamEMxNEfA3IYvYftRbuvcwwJdjWb7qJT3d0D3XkYrVHF54fd1%2FexTKvTDRNuJVmKI6tzSNerw%2Bwwmm77J3E%2FH%2FnHOnAu7hkPhh8jnc%2FUJsBirJRPEF6c%2B6TUrRggVE212IPrFcJew1iNRasXeZ826qCfwaXYZG5TW0esNC3ApM3ZIleKhszukVz9oPSh33p4MKqtLAvimN1yqZ%2Bl4H0F7CHcII3BNXflP4BQPGwyNFKN0qSGWv7emjqX1W6WF70OFtUVUAtXVnLmfeq1CNR8Aymla4jylyjSU8R118ldtWQMJQs2jAB4uAa11To%2B0O0Hc%2Fz1F24wlwQoQFueYc2JKFk4mRk2PGlp09Hgeob5%2FYPCbBDfps46s3uJ0o0BCXHJSuRUzzNlUKRJC%2BALDW4WtqbOVac63qFm7zdRz2a0%2FzzUbgAwMo9MW3bbC2McQH7YU4y9EbJgejXqQHzWnORqmTLf6D2Klm%2Ffx8H5pbncu49SUvmA8bJiOnKs9zkWWk%2FFeQYwKQJ258QdDyBH1bgPZHBvhl8BsHNhEFcG9GEMqUql%2F8rfJeHhaTtk5wut%2FwkJGL2zlCHeEj2dzrPRTCKiN%2FJBjqkAc0Xr0DHBNxjhmy8gkd9GUdU4XVnhqBiiP9NC40Bl2QEQQg8CLq7f1IRiDLrtjcQJSjGyISUH4uqsqd%2Bkf%2B39LaBZSox%2BmIS1bVTAaHvCiNzW%2F5dbJQCInxM0mQkG%2FIVk0k9WSnr6OpfMlLo6vOyJ9Pmz9w86OFsaDlUrc3lbq%2B6KP5ZrmJ93%2Bc5RwoJiM6mTKvjaBlyjisN29S6n3ZHzlnqPzR%2F&X-Amz-Signature=4baf8ae308256afd158d525dd6c2761ee1f2944f0402a377007d5d562d0da3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CCHGU7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6MEWHHqPufe7P3HNZ7q%2Buj5i6OElU7GZmN45RoLjQyQIhAK5ow6%2BTwvk53YH0f1p3ch2bxAjiMYc%2F3RT5%2FQOB3uPkKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqD098wzNsxipFzWEq3AMIErhjJ5s6MY0xkC99MEZf81JeUeFhhrD3PInwX%2B1eBwkwZNbu%2F%2FBYVrWr2ohtVVFvsmo1rvq7y1hmNrvo75fF%2BzDp3x%2FAmTaSEQTDqCQYaW2qIC9lDK5xIcdy4krqAq5%2Fq5eCA5GCfiZQ8FFcAJ2%2B6zb1Tvyc6%2FX9f31%2BrOi71Yxx%2BtcEAMD7SX922xqP7UDZODkuhpB9w6sfw6NNyj4JhBX8KexYBz%2Bi9exSJ9zSdznR9ak4E27sUTCx%2BVk6PqyBq6dpbxEmad5gPfguMZPyf8mcXcf04qtIp%2BjKWsfYatKJdPGLyfX9px%2FNgpGS%2BazO%2Fg5iEBtRxFFVgRhfq3WiBqIgMA%2FWe5gt%2B6JTEm%2FGbkqHPUc2vOMo%2FndMekYxMogS%2F5EBT5%2FyC%2FZFzhp6pwfOGU%2FadMHFYzVeENxyjrv%2FOrcxGVFkZTpJoRP4%2BJlqxhTd%2Fqd1Q0xfs2u7UQCQbUoJN5xuqlMLTWoFm3TsRXtJXXhQCdcLzLCuvSG2g8Ubwx8JGIVqkqU2%2FXUYZ2v04NESKNWaWfKI0ES3YW2xCE1XVX%2FXLidkLznA48zNHpuFZm9tO%2B0mpy%2FodXB2PI7%2BwnyLXeY4NI1bTa%2BQuZLcWCRqrOYRVomF7qSi5YWgYzCjh9%2FJBjqkAS52SDPp%2B74s8rKqADBujcNqvCkUIsy1rKW6v6NlV2RDp47Zgexrjn3PNZl5LNIN8GVRxZ%2Bn7TYkxiWIo8ViEw4%2FjQi1HboGZ5Xzq6yILRrYYZnnhkJwU9tn7GRsISX1fvvgcASNT1HXpr21ZOJREX4NFklLNEP0WSXcMHTLQYlZKdwRVs7KbWxruEWA6wnf%2F%2B8opYlS3wvldvIm6yVnZZcwVdyL&X-Amz-Signature=f4b7f5d9149777b5f38f1aecf71f46e5d5171362979cc0694f27e87afe714e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

