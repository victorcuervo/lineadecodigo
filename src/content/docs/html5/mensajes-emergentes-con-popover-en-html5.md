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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIJZDZP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsVpzt4x10d8IcV8qGnLiAJOJ2NZRfY%2Fs4lfVrY%2By2NAiB2g6Id8MMnHrWrvdh1sLelNQuyqenGKKcVjAC53z1P7yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUqjRYvwkQgcrrdOKtwDr2g7LrIFtI0ONzetdNFm%2B33jjfmzZggeGDlnJhZNRFDF%2FQok8msZ%2FsDP9C4j3juqlSIYMLvzo5nnz%2Fb4S48O9cXAXV1ceReWRvJYc8pCWxqcPeJWLJYj1kSdCF5WoHXywg%2F9So68MCDi6%2BiIb%2B8D472G3JODyUqyJC0pcrhX0e%2B9aGuJU4c9Wq14o%2BhIObNn98oCbqgZwnCO2TwMTn2kX3kWzD4EQ8v53kSxSEZzPpt2gGaJr92lIAmLNFxbSQYkeZhNcUP8rt2wWyCJml0Dwju%2B86Ah0I8X%2BnDep%2BYCFq6TOOJWfc%2BOmTL1dJH4ClsnSsMWFmQF4JzUPZurZPKSUHG58ZcKAtc8rhr3jqCgwWjfQBNtaASrsUNSxN%2BZ2nZuc5VUeb83WvoShHiFr87%2FWAbGyrPTRHTAvsdSvjiAVSu%2Bj4K5tkNKfZDemGfQRNscllTzp3ppf9OypeXcbk7XJbcZ98t7Kq%2BgZ%2BJV7TRKKFdS%2BQwIAWI0pkU63V4GdzdMkqRLA0hQtWktoqC2%2BOOwpE4RBUsbtri%2B1bhvPzpfnZ80B0N7n0ZJQUH6cvorNfzEu7vSVfb%2BYGRFU5v1u9uwzj7BGNPaAKRYoSuv9Qub89M%2BmvneR0Fma%2BSOmLow0IfcyQY6pgEzCHtuglBu79uEkJwLeQm6MrBy6rAFp1uSHHOglnw43d1STjUmXtvNxigjZ%2B7a8DJ%2FDCyw3JwDSIFHG5RdfygDYPi8AdR3ZSsL%2BeAFIJhaiEJz%2FLkrrJFOWm0PptMgzChp6AL3xeorkIDdSFnf38C8nDMFnjl2f6jG1Ckm87mnU2wfCJAMLOAqDso3bRFI%2BeiKeK5CgAlnZzEWzzOdgOACRc3Yior3&X-Amz-Signature=1949a5fe495e5416aebcf1abbf56e6984523bdcd746abffbe0c4ac65081d70b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3HXTVQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmHKCStZE4TIA7fp4L%2FMQMguo%2BVr%2FLPa1UAK8cOEX%2FNAiB28fcJXfrgrVNTg7QwyBmaug4OTJVlhMhDF4ohcws5syqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3JXVWUxuD3a4WWX7KtwDH%2F%2FA0MJW%2FK%2B2Mv%2BZg0DZkPGd5HcvSsZneom7lcDvr635%2FlbxSCB7li8cT80VseU8Zd4NXjjXdHymjWU6vb50YeiNdXU4eLllKQTeKqLiS5TbmvQ3D2Eh2OU4UP3wlSnXwr0p33Ifk3smgKtCUmAxTQ1LgxICimtyGNS0yZ8%2FCrbT8AZUvk26Whx%2BOaBGGTbiCa94gI7DMIzqPfxIJ6fxAHFq0%2FpbvCtnFphIccU0TZykZd%2FVoViNCLqW0JUUC2ighJPArksYpJ519R7b8hRttfHCu%2FZnfiUurgRfakCQuJZh11X1iTjVldXXZ2k0%2FCrCdQ%2Bg8Ri3onPd2pubeQcxLgxu5oI2KnEFd1zo%2B19jnkWSrYf7Xs3d%2FzN4CEZwzTUQeiGOSrtFxzlF73%2BavjLcV3mdrY%2FH%2BNLUMqI%2FZ1tpeaYtXEVG1Qxra75ZY7RpEt4ENKJlSklTV7gqSw%2BlK5DbvglReL0rxzBmsNRcx80u95EiKlGmA0Z3EoP8xZ%2BIqHVRBMWL97c5Z%2Fa%2FvWDkn7T4FC3eR8neK2PgREJ2FryKMXb1CkK%2FybKrIelB%2F5m39iqbzakCb%2BTS%2FZGVhCd5X6HeDzvmFLJMoRhvN9bgT%2Bx3FvUhy7pluvOIX%2ByX%2BEMwz4fcyQY6pgEIenQQFA3o98xB%2FPYjoPNSUXnZMqTft9WzWBipJtPGOayuy9mZfmzVHngT0ERnwHdYAjAxCDAofSqm8U2UY%2BMfGTiNoDZmWbGM%2FWfocZs3Cn5myqXWwXUhSn7CJigKwp7LbMEZ7mNuyCEVtHrF22wabTSbUHXXIKtZz5ng77VnkljCnCz4ibQ%2BLcaTQnOM2shIxKH5YwTmr6bw8cZzwhujIsLHq5Jp&X-Amz-Signature=12b44cbb6c6864e2d940a05c3f09e132c73115e26e8f8e94b7155c5f6746bea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

