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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBV24EUT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB0e14JfLa5dG5W%2BQAeb80UXmX6gwiEnRU3QELR2DmLAIgfPDiDoqmHtIKbOqJHw92SbF3o0mX19mcgWOAa6hxbnkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7WoDlqBFpPKMbq%2FircAwYMKiqhbtPtacWxZo%2Fp6JEVuvMZv1%2BRgzkrmXMWaiQndWGmjtIyoEFRUyuSXKokldqb0KKoji60zv%2FqLaLb2h%2FfeoYwp%2B4P5GlNkyxWVV%2FdDO4YN53Ke2AWP5GrfCJ5WDVjbe9qGHKfwx5N3AOi3kqS%2FiWlnh6SRH%2FBAhPXxpfjSSXf7S8E1x0XhKEQzG0Zjwu6mNUN1ERV87Nxs0YmeSyKkmUg50nZUuqUlKZVoRFlMxCWxefVNKgXt0JzfcOHMwCxKqtLg9tH8Q4XPJZtxkZoV0qsTxBmHOzGCEs%2Bu0A%2BC86f7MIl6oVdpYXpQ1WoblNw4%2F6RVvKNnMpe1uVv4EVRuhKIzq5dTQvOkKPzHRdfCzrhNnQMLR30ph3PgvJTMrsW5nxWxN%2BpqLP%2FWuqky1%2B9BkCTaCwOWF4h%2B3YIO%2BYXSyg3YzRjmUZODZE608EaVuypimJz4ZKMOHTUWXRZCBISBrMi6jq0kI7fcmPqrkneGsuYxkCHb%2BLiHEMtRtkZ%2FXrZ4sguoHW11JHbo5XoLeNb2MKDFFq5PhnG3Lm7kSh7%2FipzOIbSZg2p%2FysJit23w0PHfyort2Rd%2F5mKt5rUNJQ%2FKmY%2FzsMDOAOqsOpxVbe5ygDzQYe2QVlZQq9lMKHt2ckGOqUBmV730m2udr49ZrlqmkBWwnUCC6Ls38TLn%2Blf55eHmame3%2B2nB9iK9hNGOtuPhxImu8c8JRaoe3YVUnzGBM%2FG328PXLpGZoVS6wg9vWR2z%2BSmmfmLaO6LbRP6Oj%2B4R1nFLK8Rdu%2FbV3dIpe1YAwXOVz15GMhA1TmoSw4rpz%2FQxtRut3pceYdK0%2F4AAQYNQpo1UAd0dk6dENzsEnCdheUPNvl%2FMxvZ&X-Amz-Signature=6bcb1a284a065afa93064d0382aa79f0886ee66d3e7e357573fdbf5d669f99ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STRXG5L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgABw0PrdYHosD%2BHfp9M0iWHpKUGLz7umZbQCZdHx1CgIgXEYznaPCpl6ICGhInleeTz5cgAjiBS46ypSSXVKWXyoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETLAAi1YxVIwHjqdCrcA8mhi4J%2B178H4OmiUo8vzYI5lLWZSnFUZWUc2PNg3PtaoQFPFauiX9LER8mkTDMV89QfIokF%2FyYYjIyzsFtVpRM9RpGE4l7Bg1TxfUXc5%2BBxe3QvigBsJc9K5gbtOnhLBaBVdIKrU76%2FIamNFEiltuvzJ7%2FsgwyDg5LoObI%2B%2B3RrXrkvQvhQMOBmYoaHqY7%2BlhT9rkd36YR8rLlAS7nHJDuQs%2BBMWwX1I2Fn%2FLJP70p6diWQJU69pZ0PNimo6r%2FSRPYNxx30XRSYdTW89B%2FXNtlDLZOScys%2FUIHVVqmozVCpUW7W0rcGyuNpxXmJUe2OIWpQn69agPW3Xf2MB8MOehiLmpFE0UGJaJnSckPToFaPSxB7NW1AbdSuXpyqAekTG4S4a%2FuVj%2BOVALYiwgTpmckf6lQKKg6mlQiISZuI5lKuy1VL37EkXkkRaUHg%2FSk7vBi2M3B%2FfbNf7vF%2Bqq3Nfy39ctI3hlEHUh7005fDPxiN8qBTJ49%2Bkgr%2BJWlchsTXxVNypXpOqNWa3vXxiSlP%2FMq9bvZUeK85r4nu2paIz3pJRD1HIj78NGykpaoOBgpELJrC0AXFMY12zL0Z1Anx4s8TdKSkvNrgRaGbSv4VvhlX5zJWFEanu8LD%2F%2F8ZMIDu2ckGOqUBKX1QtEhbHNVCwfKNGxkt29JxVK5wVuJJGjbz%2BP3XiWs%2BKffMZ9sANIMkmIyh2XRr%2BxeLLGqiuhA1ux6GWki67xr5Voh0N%2FCQN8cPCXDJX30q6%2BgBAewbexNmOrv3qVn2Fq9t4CLZ8uVL5P35y0z76Mw2nkfNoVUa%2FzWtmL5CyAdbREY4HlYFGm7VP5XV5CHjkM%2BGUC5LfGaDQgLT7jnpyfPOzX3R&X-Amz-Signature=376f4cb68cd014871f37174051fcd92c5a4fdceb6fe43525a6d4657f10da7e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

