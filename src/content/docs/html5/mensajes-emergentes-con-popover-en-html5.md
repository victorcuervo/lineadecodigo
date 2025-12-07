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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFYLTFGL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRgmbtUSm4osbqqv0wKsYtJ4qGYgLltrc53D7qk7P4bAiEAksUg%2B6BgUAL%2FKmDG6ezUd0UUYu4grtmRhXjuI54B82AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1aVzERI3lMt1S2VyrcAyLDYfQYqHGlyOkmZiHaZeN8o89EXaToGGukrPKu6lcaxcDsT6N3lZsf5lc2LXqJ7FM0IhzeksXwVy1pCvAvi7b6PR1%2FyFX21HH0gLhqNT0ELuWqGhwtEKHdUnYUAsZGmpzTsU9ywnQ74awbW%2FziIGQQHPGgnzigvuEBZeTHFBXYYY8gEdh%2Bb%2BhIYzJf1GCqQvJj7GT7lSLxlzfS4WiCnoEOIAS%2BZfqUpSuIV4pdrBP6BPgyXNxMiRu2FEPDzHDQArju0Olw5cehPw6z2e8cA4rhag1076XkIcc0sB2E7WiaTBL6KdVcXj2BslHKsKgl0gFsulUVgbSYXvNPVY2nGJNHZmb1t4kBIWLO1fZAkmMFVnT9rbFqVh5p6nDgwWAsyrgQ4CZEv3l21yjdfMc2itToUlgdRX3PyaVwcCQ7OtDeeBWzxHWRr%2FFt91GXoqcl8ZRVhXGo6J0xIq70vKg%2BQnoZ0R7knEUM4RjZUW0Trp24XTV7PQpQ51JyoyYSiUpvdEt5cHO9TbB7gYp2TrOzhy4Nq4%2FmI3Pa5lM73kQsfHu%2BW1FbVzhKiS1ik7Txt%2Bb8QpJpQ%2F9vHvIHg%2BNzA4OQ4K0%2BCkOsnurAxEkUUX%2FlDtK6o99BWiTFXGGJV8TvMK%2F%2B0skGOqUBXcYL0ggrn7AHwyjBv1v2P7mbWnhYeL18gbbVH%2FaWlE6SOhPWBLmcrzWx%2BKuXlkq9mrh%2F9IYv1Wu1Nz03gSilyqmOedKBKRX26HGUNcIt5KFZ%2Fx1WpSbGc7oYZUXQjPI7Ah057HGgPj8ruIeB3rvYJpfYike5emx5Osk%2Fm8wO2U4zeWq0qs8uvbt77IGBUQDflegep%2BAjTIbYK9L8CIkj5K8fg5Y5&X-Amz-Signature=53b3eebfdb26da8f276a421c1ef22e34b1d4d5a1c6d50db560cce1836bbc7b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OBRUIHP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEOh%2FmoYX%2BK%2BknSQtaXbbzxDICLKPdKLNNx5FMNMNG7gIgIwQPIHUuq23FPkNBX6Yj5LSAlYc2RWnwOi9Gb8%2FVwpQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp3XqezdlZcZUD%2F4CrcAxFfa6NmXO%2BiV5tb5MWevAOaIDPxOb2p6695FohbQJHRk%2BoQlA%2FvbUPvgYx6ss5%2BrKRWe6JRnRTn1Efy48dgzkSAXWg%2BBu6ofk6OBYgbGk3c5dNxHD%2FQCJVaFs4YumnHKsww4nruKiydt%2FBiQCo67hZ4mb%2B53rzdbneJ1u3BtVuapyVAmkYcGvDP2RL1HO%2BtKJB2hg5RarMjdro%2FZoDaAhrntMusBUs7xjI4Mi8znpyRrA90F0zGBugi8%2BzHcswOGWCD9IT1eVz0kQDH1y%2BUTuOalKOxOfjpaz619J2Y8g0Sw%2F3AeDmOi2o6B8f9y1UJtQI5jvW7xvV5BpJTAmDb%2BgAkQG%2B1Mh%2Fh1sAMwAi6cdf48XiDsSA%2B%2FhSceNBqZwiyLkNVRJjaaPWyK8nclu5c6crJGCt9Q5wmNeAHgHCTtTEBMTFHmeGjNbfWYy4Ij8RL9ly0LaqSQ3vkojQ9i0JbVGnC7o1re0qgABRk540SIrznC2ohbJJchYNZC1oNU4RnpnroC2EZMIRHHdpBaJ4B8PzurjNgGzCI7Ct7WN5NfUvYAbtSEWUqbD%2BbLp0LJ5LeIosIcZnO2zNk%2BZ0%2FUs2DV%2FtjRiTNwxglDGMCGp2xhkqrolVump91WuXzeYS%2BMMT90skGOqUBnUb1MtCvg2%2BZY90%2Bw6HpzwpwT1jiGWv4HgxAEeD1CLUCfx2NJDGuYbFv3mtvHZWe4hQVqJkKCJBLjHXcNWb9CjGWewEGAQrdJudhILmr5hia4wQa%2B13eSNx2k%2Fx2ZDdExp8FzZgSCycxzZcxxxsamjzRe9FZ9jyS%2BoFvKktcsPF5lgZE6JIVggCC9LdWc1FYsI4iDpUl%2BFIH6Nt5y9rhYpeIuTTb&X-Amz-Signature=77322d39127f72c1002a5b9f16d2487b59c706a65feb3e38a33713b9bd1a82de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

