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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MHCQZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElPokjBOz0OTnO0MCSgfWlHq7rV6D2g%2FdZvtHuxdGR6AiEAlVy5PdD7jRIZwF9XyeVcJcrNRtaL%2B4MrHN10kzrUBzQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS4CcL9CBoxn0xxLircAzLCt2M%2FeImIKWNNmxBLlYTZk55ZWQi08RM%2FyrDso3LZ4BhG3AobSkWDmrN9pz6mJSoyBiFzpM8D6w5K99DKdtqfdiOK0ML4vQD6EGkOhcQ1e1U%2BZi%2BIFgMF18tjbpakQWOaznnYSm4JTaJJJ86OAmrjRc0TMwR%2B7XaMKZcCpuWX9xYdmF3HrqnMCGb3zE3%2FnclSNibjhdti7fcEtsE7xOCKdentVx2O074%2FpCdvWjz4e3bmIX7GFdew2lFUsBE7rsECGumgSemAVHvVhsmHwsSRYAJRPVXOlkZo01Q9WWg5lL8XitNoPRLxxXgeegyaCKuW45zkq08aZkqcHUhwXZPv6XpEFSU16Ih49vuhA1FKW7cPqrLJOfPYSRmOXH80g87xwnqquC%2FsYyRQ6tcePXq8L46q%2BQeGkiFkW9KHUDjR6Vko6qjXij3VFM0jNeTbC5bwM82Hgqr9aZ5gPAmYR2u7Iw5XvnyKH%2FR5CAzBfjNVz%2BMsZPjgqkYyaE3agqrplI4nbvyhQR5d9AxPpHv%2B7HoGaS7RkgIFF62RQOxw34GKvrrmaNuGlQ%2BFTKJVqUqOIhUjRKJB%2FC096iSTkcLx0MubrwVbZZd9Lt5tAnlKEk5TY%2F%2BW0PtBfQhc33SmMJr90skGOqUBMkOenzwl%2BwASFf7ZqEEI%2BjjaLxDvhUBIkXxpt37BbPYSv04jE29yMQE4eJRg22ppD5p2%2F%2BlNt3m2c4Fz7bfB%2BTj5ZQ8z6iANiv4Q%2BoRPqxSiT59uyDsnh7ZMXLeYwQlOvMtDJMyNoV%2BB%2Fhcht%2BZIqRp6hGwmiOuCZKHpBWj5%2Fa3Qbkyzokvuif6GS9EiQKCkBM2V9t1P7MqGKHdNxAHhylyU4CIq&X-Amz-Signature=bc8d5e06edbb8819eba20b58bce4f76b7a72acc72feaead8b39c17baf57cb5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HGDBXX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXzI3vNeAC3IL6HfS3%2FPT%2Fh7Q9BCaElAlFyyT0UICl3AiEAzxTwht7BOQZaZpjvXNaZYfbWiaVeBUC9a%2BUO7iP6ivoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIoisc2AX3ufFCMJMSrcAxFWyS%2FVQkPfrZlct%2Fncl3HEBUA6Rp3lp9gcuUjiCvHN%2Bv4g2u2WhPYLmQvs4%2Foo1tzmfjyEEhgpMM8DjsHDg%2FQM4fR9LxEZy2bjDkklt%2BIhZh6QpKK%2BSYsl67EiRZ4iqaYMzm1r1dE7J4tSqSjGDQj0FFnzKVI0SoAT91TFpzFEBOVL5qXUlvlOuhVJUxmvkdFlQXzJstoyDIag6LeoCWSMNYX00%2FuY0dJh6yY9e9LtcpmHfxd6uVqIILhwOTDEQmlqNRke3K0gS0qT1nX5GBR6FIKyflxD33LeW4N0ceHFw%2B7dO1JuEjT1jE%2FXQd7hkyGdIHipWsTFeTrnObr3q3j67nj1tfl5do1xX4qABGfMaPvhupPhAiGtFmk5yrKDH%2F2Bim0GS746e9eV1xAL%2FqJOl9HRbXfoT71h3yu8BCYcVjaxoCf%2BWnzy8Yo0OMThLKAQkmwwpu7%2FGTdQGqZjem%2FP7ZLwMZYvL360lG3BuLlXuJo%2BYhMXtwEUh6kILHGOkRXUdz6HN896uCsuCuttIOwI9unnAySzBTKARab9ChSMo5KwLlvJ4c%2FwWTK7zfaNl17qTdI5YV7TZRHPs0%2By2f64vMCbgmAFVI%2BAfkJas64Jc%2FlC9xyiRdBHEdC5MNDT0skGOqUBzsNtsRl3N9jDC6r4HN%2Btd%2BxVOG8kKXMf0enDQe0tbCcOwBzpX79GBRpLgwul4k6M9iZVU34KhAjIcRB79YN0qdPbvd5BuAqhN6NInDq0ZCE98pESeT4B7WQKHZp%2FtErQJy4TaHv0zWtw43N6143PJOVU0JG0qUCANG%2Bhe7CCN4TnmdDyLicE6g5FisslXHoLNfSkez6q%2FC%2BoCEIMeWpnhayY1aOq&X-Amz-Signature=b8d15d0969c2d0e43a9e18251771ac49c19c22b1d97665af4f6ed5548074f292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

