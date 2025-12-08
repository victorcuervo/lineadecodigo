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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2ZVMZA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuy%2BWMw31h4w4a40%2FfofFgX86U9E%2FjLSod6d693ip3GAIgA9S6nwp%2FAghx8pLfnvdA6Nfrom%2BLwIIYmb5lfJNqGzkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENNdNgiMeS7co6i7ircA4JjNUDxYcbzOadOlbtq0jNi0%2Bbd8SWLms%2FFQn6NyAZ3o8Yfgq4P1X8EAkOT6YP08DIEuCijseE6vYSADI7Gd5%2FHcsld%2FhnTCF6Jmy7KNirdIY%2BsnExYEAv7FbvCX8%2Bpw7W%2F90GmIFhYf2%2By6yfMVk%2BYbLzwVZha6qe5cuxLmCQbdmM0WtZFNjxrJ1qpKEvE%2B7F8n%2FprmkL3kSUwipZoY7ce%2Bcddlf96SQmThZLDZHTEXSk90yZW2E48ZxVvjYZvvkiFSSSCHQ5REMqJRx6xMLszYy4muvWtQQ7D%2F%2FUULzAQp1JIHH%2F9ELPm9ki2eKg7CUxGFfGLqA0vGad25s8go%2Bmr9lNwxOEMRWELUJa%2FKjLxznzIjkclhXfw2g2v2fLXrN3pdSR6uS8NdMxURw2HUBvJg9D5pb79XeOI2m8R6UHSK5228fHnlEqCbikxEl0xTerXIYuewpuBLxQyLrrtgaIePe%2Fes3Xk%2FrsjuA0XZxpqHQ76X1xyWXNKskm5SXosn2k2OWc0HSdbKWfEYPdgDcHgxtN%2BHG3FnrWap5O4At47yoBaqbqIh48q73UsD3%2FVHQH6Mvs%2Fz5LNPURXraWCMdGgkMUgBvNA3WOBm6yKk5kQaasi6LLP8fKHnbilMOeh2MkGOqUBYqAGsGrkSn3EXRepa7eN84%2FinrByi63I1HvQOtjQG1amerRugFDL6eXXQ7XPrcXr7MvbHa5YJJEgctNRcvNrSEDatJnUjYA5f%2F8ZdqOwroJ2b43iCXs%2Frj9n3VYX0%2F0HBCraey%2FmAlgA33zEU0wuLK88uZ%2Bw8UTVePIxCjw9kj6edNN1PKzY8tOyJ%2BCnXccWmbOWUYScU%2BwVn1657IbqKvpg%2FbxV&X-Amz-Signature=c196bbf1b11509d887fd395be0b3a048e674c60bec4047f03bffa69627c8dbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPONPVLT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyUTj98gjYyGeXBIVkDvMC2wqYIn4L%2FSi5fG0olO%2B6wAiA3gkCOykYyml%2BCiIhwiL1OegWPzQ0409qaLhpHa%2Ff8cyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYpuvg2D4OOSnFj5KtwDgKJTL%2BS9qWmJ%2BCAzrkVVtXhrQHELvyOcPqKmgAYnCuLhlLutLIRkewcnXERXqv2lKcsTEPmsjUk0Nn%2FQbzVXsnchZoA1kUqPF6kxSc9A45esDVI5yCg%2Br4TDiWBlleFhaces5QjFA4veI%2BoQFCNjd4gXdTHo8l5XQ9r3r%2FOT0GaNeAuLt%2BOu23MTVDS8IK4Ma3poLtswX%2FjT3CroMJk5S2m16OzQQ70TUtE0ZdEcIzc1bAxFQb2D1XQUH1a%2BhQBzWDl7m0DhrlQDwOpYgXRylfhmMHfaSqUzdfkPZPkmqaVidFxBMFdK%2B5dSNEdvbYqJ9TFK6HJTU%2BW9j4%2BOycSaiVPyBBcK9MFYaqO%2F5i5Pir8yAP7G3l8hG7g1%2F5R6we34LoSq6ajTn3K%2BybPNf3yJqHgjLQRZXlhLunkNHl1tUCOIufitXv%2Bp685bCHf4RiwruuW2VR47MwBGR7yHiC5IhNAlyYzWjljk4ZXD1ok%2BtAQC%2BrEWozKB%2BNAYtNudswqXv0xidDQ3YcFfABhhpl8w%2BJce%2F2vPKyfs9X%2BMj6gD7Wep87JVcIyiIGt9enbpFmKTMmd0c%2Bmf3w%2FmI71eCI1egM%2BGxcvUh16NwpR0wW3PtXsB9UrnWExGXoXS3TAwwKHYyQY6pgEKvq%2B5aLg4pke9zAehilxHsssOXH2gEUHEUKGBi0NqJ3gbwHcuFxesuEVFgNx1camp6XreavkKxIMosbeCrxQltbEZ49zIRMaTSpocdJwVNah0lj3YSvLYuJ8jC8M6PUUpn20ka%2Brz3xNhi96kFCN21LgX%2FGInPp87GdxsdQX22qj2V9CU6yfQkyiFtxu6j9mFUT3MezemUq6GnmGljW0PFt%2BDKGCW&X-Amz-Signature=8bc282df36be85d632eb1d4ae6ae96ddd3587992adcd7ea50d637b83436e57f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

