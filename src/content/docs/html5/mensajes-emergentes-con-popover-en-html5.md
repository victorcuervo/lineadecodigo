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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYAESLB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyCQr5%2BqPptq2YQ8fU%2FdeTGZTPdueLDmK9HbZhre27qQIgHBRb99fO%2BDzlk1ztTxJScQ2Pm8yOZXekGqzJXBIFWMsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdjx%2F%2Bsv1QZ5n7BcyrcAwdXfJmLw%2F4ctzYVi5tPcrr1P0lhIiMz3%2BD%2FlQmOGI8PVoScsGmDldv4zo3Ltszkw6MoBaz55S2P9cSJ5y%2BYE9U5IWkAOeOijzH4UZM20ozOEuzY%2Bw%2B2W5h3uiKBPNh1dKvmNJnzKJGInJD%2BFefAEEy69R4nRsQ7nPs80OnUqYbxnoSuwYI1gW%2Figmwqpi29OjPFJQEiBradzkDU61oxQOw7mmW%2B1LfrTBQ0IX0Z3LFhZnGvc%2BCKG9pA0P2eBKRY1XZVaQGyzhh88WIYgp3xyHSGWoEZH07CuuUT6PlHgSDAGoLC34xUNlqgTQcr%2BczMsvZc8Bv2cwf7t1e%2B8LzIvDg2RyHyGvjWvcP%2F9RZ1UqqI4k2gZTKV6m90z1jtclDS3xIGbLze5Yy%2F9a%2B9wSdkm3eAPsNKoeBqHnfmGvd%2BnjK8YGi8iFhViVSH%2FpZs5pYv0HzdOMFmYPQ6EPGDWZ1A8xgbTWUHDmE6X%2BmBnCq6Tc6CfCsfmumsd%2FrPWnvB8UakT%2BXP5qJjLlFCJSYMY%2Fu6suPqQ8i8aVs%2FSBayWmS%2F6hnAwxCw8NJP7LycuF74bgl7WwhTUz%2FphgRt%2FJL1%2FiCqG74AoEkiFdNxTN5vGierH3vqzwVVrwKEXnlOzlVYMJ%2BH3MkGOqUByueHNYQnWvgS5%2BIy2DgnAQnhlvVUro9X%2Bxsrqb%2BWPbHQV6q3mvpPMPTPPGgUtPSYLP0aVOBhSKzSz6S5NbFJjSA8tKc16TYT0dAkCDaJGkHRouF6q5I11lAiKggLz7ca7kzveWARYmzLzM7bfI8alhauYPzXdYtcMPrroUXXQsX9lHT8MhqpY6ollhzYXYOTbLIJ%2FCq2GzzAzLhGEWzZheKqls3K&X-Amz-Signature=a507d18f8b826a015a6103b6f2fa2fe6007b05023eca7ee8b7da1c64a69bdbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AAMRLJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV612sM8dGDCtCPknT6HrpvzvLJqcOuDHbhD07RhD05QIhANCocuiw0%2BtkUG8gyU5mJBRb%2BIadSh8GU%2B9yiy%2BSqlY8KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCgSiTEi7xKjyjnX0q3AOU4MFCdW5KE5VnMebdSJSTEn67cpWfvuklyjrykIlLPD6%2FbJT%2BTl8OUNBwiE2qnyf%2Bab9tc%2BSQ6z%2BqbZvI6Xfut0UYexz5n7fGENfIiwAMy2AJjW%2BJtMVg5hTY81CdMh%2BvjVssJ0AWfmFEvukc9ymIoRlzrfWNqr7HLkVVzhei4RRyGBCwDa9vx%2FI%2BxNQtLrUxes0jeU%2Fo9DwgWp3pGTnFbbKFdhnjqpzmrKUAIb%2FDu%2Bd51XQ7iYLcE%2FFv2h%2B4BHQYhP9mlVEJ%2B07QGfKaQDtgS2%2FUQJtd3YLDb4NpxCZi7Ot8%2FfQiIYrDRHoo7PWkyifKWCP3miDgVKbmMOUW9fZg4QP6xX%2FgvSyQtsy3ziWb6gWGxm0e7fzXqsj92h63amEVYZ2TzYKtNfYVQZfx9Un07rpKG5mewEX4%2FYyrDZPbBjyKvznevzEt8KABlx0eWkV1aMKw2OC%2FAzu8OzC9yZp7fArn%2FRIJJYbnLIL7O6ilaIf47AYGw8RhrkpH8gjl%2BgfNSVuNynlv9G6YrxWD2ZHCXg7Ht0FhGABAGk1eayMskOut2g%2BL%2FSan6hwe3pGez6VYBwjhgxANJB5FVg%2B24L04RxtN9D9OxXzyOgOrhn8gx%2BBCkWlvgenixCIzFDCHh9zJBjqkAcX9szRsYatDcYgnnHlP0pHVHGquhRWJPqqS3FbMPZM0ZAPm%2FTrg%2Fsem2tREZ%2FtUz7pV7WPkXOvIMcFSEEZGK2T6eUVds1FyLKgFGPezmbkO0lzenAUZdmDRMMMEGPiX6wbt3biFjSCGLwBNyYzA5RDsCHGPNyHuhgz2EPrj1czSz0ycEFO9F9h6C1cKFN6X26sAd3VkVfpjkj4d484Q028Axb%2Bn&X-Amz-Signature=a6eb92819ad568ecaa4687522e2ebc29e762ef47928cf8054aa382a25a1beb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

