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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47BD5O6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEqbteB7qr0tZHAX1pvyDJ7zVpQHkW%2BWRS0n7pctPe%2FAiA6bicfBqqQUAEYeiMtQ56c3ph0SW3zpmgGyWOlD7TDICqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoyIg%2FQZndrrcV8BSKtwDHfpGfWz8hTE7GtcYqdWUZ%2BeCj5ReTcpVghmqdUjhAwSR%2BA8z%2FQ4n%2FJvj%2BrQ4CjM6EFsDbAB9q6vWEaeZHaGPRdQAHoWawzw66wAuro%2FmPQLgcaJopHAgzxTtp6Fo%2FMm63Pqw5FJPymo2vrmkuHCAbIIJR8JJRSl2aBBmwmQcm4zXjHl3PqyjaSx3lP1fTp3G5zEmMW%2B1uh4KbfQL8H2CtuejGcuD2nVgCPz9kyvN7cdlvMn2h%2B90hvGGhJ3jxShkcpPz7XV3TpCF7ZvKPtQE4800uPSOlzBWLaORIoxXpdNk%2Fb0p2rIb8ImxPklvKSI4Lxe4WEXIsfPEZB9%2FRy0UoGLrt76DtDL9Z5%2BOXXA4%2FylzgOC2Vk5%2F6DfXoQu7mHnAlHYNvaoX9eTVSPYwdgC4YOUWR1CeQyyO%2BgO3Ao2UF8Sz7LLnW2aNl9kLGDoc0i8Ke21uaeUFo5J7%2BRkYjWKjggvrRZPXYFM%2F6bIdAtEhpPw3Ur2pZQKq4iC67kK8Y%2F7wc4vlz8K1pL%2BfSeeysKyMYskczUk4KqK9nKLVE0EcRj64I9WXCUPU9rvpqqSsEVFA%2B%2FXWQ3ogIvrxVnhqYHf6xxlB2xEupv%2FM%2FBDlTJwMPrgjuBXMjo7jtuZkX88wxcfXyQY6pgEy72F952lBfeS657OH%2FKeQTdy3wkYYVd1h5ByGxzZ6HPdZKBtE30SnR42SLGFjwzdPnlMI6OOxuHlpcUyBzIzvTRXPXxdHg19tQGjVcNwTbMFzUJiMPS10tGRbh8CRfw0U1zWJNB6cDRX227EAOd3Aa6PwNQ6DMZV6aNOLb0uc%2FALCyIXRJgARNiSLErBSjwrDXsZ3VtkGtvCHmVJWTQXNchRiBM0c&X-Amz-Signature=8adab412c1696a7e269e1a5180ced998be9da9ccb9ca775b2e0ba05cc5fe526c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFVORJ7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6JdVTfEeDXyh1U%2Fmd%2Bh6ARuma7WmxOYBtnjnthYoCagIhANaU04AmXDEkIRUgCMs0pwKqzE%2F9AzhEZyNXgEzdpCDuKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvQcllPOluOwMsIS4q3AO14HWelxQEK6sdWdneNgR1PDDkG%2BHWz299QZdWdemPB2CGiOlaajLf0FvQC37MJeDYfD%2Bn%2FqJ%2Fa2r7lRjVRPwlkkXZtUJ13LCWmOnAO%2BakSdZtV42qSGEdk%2FBFbLCALSwBd6ENpwvpp82ZTWNoITVYipySJaRxJK6Fbc%2Fh91D0mIKXiuMdUvQgzWLcwDZpsFhb4mpIPIGMxUkQVj0CvIu3KGPB%2FoAn%2BczDR6PG5gr98OlPOl6HGWKOJVsH9ttkfLbaiyBGOZlPRh1dKEBFKE%2FMQBHwVRXA8WLP32rD96ToIGvKNFgQR9LVUJxgc0D7jeY7aci0grsP1XfUTiKjAkWQFIpj%2Ffjggk6neTDKEt%2Bg6gZqpVOi3ZN6wU1meNjhqhl8ZsupWNQZNWgqn2TEfcJObO07w7XRYur68xBlH%2FHmmBleI73CMOXRpWekotsnn07BeZ%2FeS7NN63Rhbj0RXzhtZX8QdXBF2Ajj1tPuIfeD6Gyi1cfCjjmIfc5C5CBVEvVlg8il2s0PW3v2dvDFIBaLnSeLnTuV0DUMgUudcz1JcN4%2F3f8%2FKCz4LyHKR1aZ5BrG3Q9BUy1ohAogULTi9W%2B2m9%2Fb9bYpDC%2BtNEasn038AJDy9SAWHBw6VTvdxjDAx9fJBjqkAX9IvYj8eak3EGt%2FfL5O4TcJ6alOvgm8cGITxOcUA2uayBQv3w6ix7%2FLG%2F7NfJV8kT9MO9Ap49XGLXTfvOUiiERDe048tAEASUVJCToG6pMISlTwSKylovGnjiXC9u88GKmb2FAVmBCOnsaHAryq0%2BqbGzMRq0dhsR34mIFkptRd8gzGl8NB%2FqWNKzHU6OnjgBsMSwc719GqM2TfUopOdNuBSgWH&X-Amz-Signature=955d71aea1a83443f8d14fa69da45a1c91a0e70ac91080d1449cec7b838179a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

