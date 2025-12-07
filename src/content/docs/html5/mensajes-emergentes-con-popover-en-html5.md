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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GR724LR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0B2IVZd1ABgGQ1HkmhH6Ii6A8TSpucCXOFzstvzuNCgIgFYuuZqI%2FT2GvgJttFT1mO7SNq2YJ2Mog9JlmMIr1KAkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCtcqWT9VsigK6BtSrcA78n44ONizn5NybPYmobCZpzUjXlJPcbwQi3Sa6dtxV%2FbESFL3atGyLViFRZ0%2Baetsl8l4mh0haB3uuqjMLCLsH6Mj3idtFHIIqZts3wzaxBmkambgc7Y7qF884%2FUEsHz5BgaahQ9yQDbYDXINZCEkuEyBPxbVPVlJFiAddkApvi3kcnbIbNgRqTaFWF8ere5QQfgzUZG%2FYetSMlSxmyHgllux2xyr6CGZvJs0%2FNQ%2FGb%2BzlN8okEas6qA300uTIADgrm9o9y33wHgHGxQcGGBjoMl3qEF4g9nncywHkWqx3wo905%2F8%2Fv7v2aqhS3NFxRI3NWwomXrWVu1hlh0uJloxw5IcDWouiJ6v%2B%2BSRjsGe4iKvibHpZ2JX8bsNcBvlWEw2rGDU4uhwXcp711DDe7YDYG1DtwMPS%2Fo9KyGoGzuFvIi1jnSFXJf%2BF5j39KUz7b%2FBOoyWMFcsmkjCSSJaEir%2FZPO5vjeamq95CmB7xfqxbCoJhRveZq4iU4VOujE2PZd3bv4qMFPERVom9CzNZjEEXtAjjtE7qPmDLCfmxTYtjDHEnkwF8gAC%2F7DOOUcgoTGj7Z7Yx8NCJcZJBE4v%2B8Qj%2BajYsmdChV6zN5FcRU7LJEFOLENSMdTG2yGHTBMNm%2B1skGOqUBFU%2FlRN6bNnRf3oFV%2FuJ1HIPvfEizPR4MKtvb2DQ5Hnx0Bxv3Aid9xgcN6j855SebZDnnxKIvPM52C7OlEptWfJYZZs81EC60w9kPYSpsSu6c0jfrttoGG05Yk1nvY%2B6vTVfjNYperMTnuHsLgxPBzf4dOSH1XR9kzn6sdHcgztbxV0P7qOlL4pxMdZD%2F9oEDaIG0Vxy%2FkTAnLnI6eI69z06IlLyr&X-Amz-Signature=380f50ff0b841875886b53ffc86acb3466c5514ac07a9ed010dc418e141839fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXUTM3A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSGQVRkJ1K8J5Sr%2BF9VUf2Bk5lcD5P%2B5dNgsQkQ4vp2wIhAL2VCANpLFB%2FF2QGAs%2BqlyGy33EdO6UCHvgxfjTiXmD6KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BoWTXk5qJ5bPOzgq3ANAkP1yhxX5fkQVzVsNBq1FB6dw8%2BNaV0jpKkDNbrFLXXtR38wXqj%2FWWi%2BJKm54zLspmMqDvbSQx4EhI5oBSBCgjMIdY%2Fkh7qJpROpzzpuXfTecO4rUBjCnYigwgysWKDS0arGg8ziQkuzTh%2BLWWj0Iw4%2FJIb%2BfOLa7ZBjACaplGdqnFkiIqjSK%2BRhSTKMDBhe4u1BegyXAlMrHqoSsHEIBcSGPT7hcLgRIcan6jYtC1VIamhI1qRAy%2FBtu7SV5iVnTY9Q99O7VME%2FhxAL15AhCPe5u%2BGZ2rp8IUrdAXeUQ8clHly97DSKSIK4Hlg2ofbyBS%2F1h4u8jWJ3Ic6BNCmhFdLfHssPOLVuQDi49947NPiK5T89fOUwPZjrsKPsHRV8zd2M2qGAv6SB%2B73BmieyP5nnkHEQpMhrUu7Fnfk%2FdY0OBk2dY8IknX4GSqL24f2S9xvE8WrRKtbQPyIHMKB0g0Uex5kisTJlxlMlAOY6iy%2FVl2KzHGZIuOyMR7ShBZiVEMdC9531TUy5uDuc8FEOr%2B2mGJoaVIhqRirgZtf9ZOdv9WvRtQ3BFN3EttEJhSJBrb%2Fau9PQLHiHwBCrV2l%2BBH9NGsyZdyEeCm8HLwTZXkYDeYfCGlpXNMP%2BSXzDKs9bJBjqkASNJROXMhjtvt%2FCC%2B%2F1G%2FW%2FpkXbn0ESuEdF3j1a%2BTAsn21yNSij06LOm9Tn9Z0sXSTX2KvMYDBHh23fADcT0J3smmiBcwgs4YPROwPn9rrLrkKCAs8ultsBVD2oJMYXceQArb3iq9Y7%2BBB1iHIKqpYmQoTJd1wFSlu%2BKsDRg7rwzlZyALUszKRf0Br9f2HHEbJm0ShbIxELjt%2F8ZLFwv94uEbaWL&X-Amz-Signature=69f8363d3898fd4781454787970d262d6ddd80db0ba71532ea62b89558560616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

