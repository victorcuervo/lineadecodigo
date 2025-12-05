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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO634ECY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsY%2Bm1HYChZg0uK%2FAh4YN1whgJwHS%2Bol7G5vUSAf1oAIhALB3v1NxQ1OkddsCiXxm%2Bo3FaEMEUPpHzWMUHGQnG%2FZiKv8DCF4QABoMNjM3NDIzMTgzODA1Igy7gQFe1Dtet2226Goq3ANB%2Fm7shJQoEVULJnOx%2BoHIsjfw3Er7ZwMwpakE2amRvdegWgL9ARlOjQwKjHhY4jenGxAKKzMxX7A5z9Idu7wOOkt%2B1lNcrJg7y45cVBhTpTLja%2Bq2Vbh8nsNA%2BScqw5amqOnjVHD1Df4szsP8DSlVm4KJ9JBnScfwe05Di4vuwCjOUbc4fCjV147AszwXwERYDCItdUOmgcoxRouY5D838WyvatWKGsVdB%2BT97iRwSd36ICx3HITk7ohFcFEtFvTZKLk85eRem2GNQ63NZjMfvb5FTXzlrgYdYjUW2mYcn%2BU9J7hUh0r2zznOKkWiQ9bRBHNS73wippb7jiYLpXtZJ1RbbmnYkBk%2FNGdlqAZO3nFY3kqd5wt6zkVxlO1srAGydrUq5UI9G7UMtuflwoX%2BgPpbQ4tlHAdvW9YYJYADD3ImSiqyzrTLZKCTT2HPYY2aM2M8tJQ9TZpMbpm%2B39ewZsJCjifkLMY3wrtMhh5PWdvzawKdJPimG6ngw2VK47H0MGozF9wzL2ZhWJnwGhnQ79IVimo%2B5xQ7tBXBGRqBeFw7G94UPatP9huaMV2t0W7DOrxJgaeBl%2Fm3QHavfPqZbD9mbPbWWhFI4mwbROKIRP1foUgLGDeZXxwWRjClscvJBjqkAepI5KrPfzF%2BbCvwMnWtfiauwqaOuqlkLHi7yLyyW1%2BFURmsM3Jn5TBiG0Kq3wm61fS2LJsQZ%2Bgvwcmp0NAo86%2FcKNVJgrLrX08ZaLiwg%2B7QuA5g4%2BAm%2B0iGFWMuEotwCNvCChbA8SLpBKB7WVeG56jGN2m%2F83ua2RWhEzSo8hA9yVaY0UDKPtZVNtHsknF1Lie1QdLICkMPY3K6SWRG7g1c44fG&X-Amz-Signature=c8283c593e1584ab347929ab0a3bb4359b3003eba2e449fc5506df7ec9bf16bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4DIJ4V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEkgzHJlp2T9dZhob9hPabi9yhJFSOZAEDVV%2F8PpRxXQIhAMObRvH0yXednFp8zGyzHtZ0MxexUKf5c5V8IukKx1fDKv8DCGAQABoMNjM3NDIzMTgzODA1IgzOTSHHScEZiZYp3VUq3AMzQKo4ikbM6oJG4WtDnRTsI%2Bn7ZfkHtmdjuRrK9wt17yWxW8As7HX%2Bh7UvRmoJL2cSJDlEnI%2BCeNU7Dd2f7AJ2ZaN8%2BkMt%2Brzic0z90Jx5Ln9vlQH8oqfSA4vHK3Jw40qKwO28GfIurVyHahjPhqq94aVwul0oRvhXaYcO8jvgPuOG4feSij5MLJmQEmS655IVsocLUrqHyj6cIELX4qdtVLKG6XK%2F0ijhbFKeQ%2BHMB2r9IWQ32ywQvU2o7W0pvdpGTu1daFUnVgNBn8ZV6FWzT8JRR38%2FLxELepU1iliuLE2oTk%2B%2B71aUH05wdwfuJxbOdsdYb7yupOEqvnvrK%2FwgrggV23aQwPESi562dVtmcPErxx4ad%2BeBVVREDC7dNqinwVnpv61vRl2Swxgq5RSbtprVKoJUJQ04qlB8VUSgPa68WSyfkpKWsACav27I1TvZJKCVbMiUQUAwL6iHj12EbcE5T8pdpafZCHqZp83V7opVU3%2B5hnmxtlzuD9L0B9ugvyxqt6giCXayl%2BSYhPMpjAQf7EXUKjA0vABnd4i5WFLYK0LNGqd6RZnaZ1uLudbqk%2BLezbKg7tCG6zcBlmRz3FwXuNHwndKsTaVntQ3kKVfBDGmEmctZaf1b5DDe48vJBjqkAU6f1MyPNsjzA9SLvK7mfPaBL4m9OLJ%2B94JceHZYRhiiqpdoD4K0OsWS20MOdurPFyfBCJHjafl%2FowB882VnqswtO%2F8Uy17Tf2g9iu7FOGgnU%2FkYN8hYmwwcPeDXuroYwd8%2BkUuuVabYekGNXecQhs%2Fa0pdLWzMOEpITCw6uo9yA6lj5dzmv29mOCmbi4uYyddRR6RkfsP9MIB7taE1iAvtNiFAt&X-Amz-Signature=2019783ae67630c528e2627b1ca7398538ae5e321249c24ee8986988c82be344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

