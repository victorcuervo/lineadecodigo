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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4MWFHV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYdDIZbOI5yRNq3Lj3Y73fJF0W4aTpCmlm8iOWr5LHBAiBPE%2BFs%2FxVRZKpQmpFqWeH0XPw0o%2FBRKCp39uDbUtVnbCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJGk3baYTmHa6Q2xKtwDvJw4s0eiVWhT7rJUGUjkkD16FSvStLqPt7UKDtnNQJzbaysem8aFh8IWKl4EfVtLBEESQO%2F3r2IsMERxN%2BiGlM%2FAVLZ2eMHN1HXx%2FQVFAH49e0xp%2Fu3SgqkEdjgYI235SG8X30a7322lx8%2BJ4oZXOc3wLZZX7j9i2neaTAFtURd5uqk9K7WHKBeqzCWOAyzp2ufY2Ct1r5OlPipb55ZM2AQzadSnFicNYxj1HyAoAe05KNOqG%2BxWTXn4MNoMk4kTf1EhJyIsEiJo4UyfbB5rprOdyO%2BDkdk5vRamEX7HNVPyyfle3HbAVLSbkGdhrlJQtmQaH1nPnVQvLMzxPVCB6NfBp%2FEN4ALAjsd%2FUtVzya%2Bw2N2%2FnDWRzsswP9N4ivFRtYjrT80WyE07lh03sHZBLRq0wf2%2FlbmYYZ92GhTYOlOqb2mVb%2FIl1xjqSYo0wlMTo6Hypz6%2BWJKANQvYo8S1j0dqjzPC6A6Sms0o9GZ3msBqCyzHnDg7PComaOcP%2Bp6XtMytWNgwCG36sbHtxkcKoktDLEPHDOdd6pC2skN8j3OwBn2EZaaCIKjvjsjOJ4RCRfwtQcXdnsjmOQv4QkAgCLl4OLqHl1gb5aTkrBa91N5IYXJOX0ovZ7HNkKkw3f3SyQY6pgGKfEff8SRmfHzZw2%2BqAi%2F5N8t5PxE2wP9K5kOcIdVl5ez4COGxeMIut%2F%2BswGi3XOzORRQHrlP5xjtRg6PNadX88TuncgZjcs4%2Ft5puVSQFVAGD6EFROSg961KC8rlfMMMeJiu55HT%2BcKvOYrqk9nffJOMnT%2Fp87LdVFSb7%2FrQYHssg7nDXsCT2vrhWoVYVwBqBmJzT4MUyncgXroS0NHcHhpcQ0br3&X-Amz-Signature=76c8d6b53002bc1487249420635efeb4f8c35d0a9d416fb39a83727bd9c0661e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHB2LAG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM9W%2FqVQrsWl97xpBnFAhuiBUrKlkjwMR2k%2Fmp2KPXIgIgDES3CRtMcVT%2FK1LifxLUT0izMkVmmJSgt7uzqKsX5egqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX2x9pYz3KN0HkYNyrcAyZlb8Z8%2BtHCr1EJ3hDMNwpKfloBGE0%2BqStGPCoP5eGiM%2FlTBkbwJ6LvuyMRGANHVFD%2BiBU%2BEeTLMUZannKOFIt21QPBmxESzuUgWo5hcg6NbDFukTBl947ynQcqkDEDNRObTF%2BVvfHhJ5aj4BTq7CYYN6%2FSsrX7EONQt%2Frp61cB5T76bqMXdAaHF%2F8Frm2q84RoJleDvMBNCkDMy6ZNTr0AFK16T%2FV%2BIgVhguX0z81RzhCLqEmmhtnGY5OA%2FBXPz44aJHIaYSNWSVCoXmfLvOfwU1n5V0siPd53XoWsJ3e81R2Nr8Jehj%2BZ9d48GDoHS%2BgF9N3zMkiil6CK7I2nUigqPHMehIKva1S9uGKoyGwzaOTxICjvQgKncCEjgiUSmOW8BT4FPqX6eE7CCClKkd280Vv%2BV%2Bbnqung%2BwRRk80i2iAaCzBVWbrZuIYD%2FpgpFy%2FRPf3MS5XjHV6nvCS%2BSabdgz%2B3pm26QAY9xzZK375D0uv9Yt5snUcs%2BNvqN%2BBDu%2Bgc8E5958W%2BEFzFn7AzIdsCASYAJtTtXXPe9wXEevmQcm1qNqLtjKhkJUaZ6ClxkmsSW88hsxcpcY4KE0YPOzGs%2BeThhCpncIP5MwzOD9qaLRjVzCt8ErcZE0sVMMb90skGOqUBUwJ64EPg7UOxOwWB%2B6eZr9IEBdgl60W6GS3%2FQBfL2q35Fzy0r9OsiXqLsybLEu6zpXHhIo4hUXIfadWfR4pjEuiLSluBXU0X%2FD1sUoV3QfWw95kWRkxdHYCgFQ3Yqd9LXyYbgZkIEapKFLzLyDwT%2BTzITGvPVJZJyO79C%2BiUFGWlqCPMYZO5O2VKG91DUb5QihDvktO%2Bzjy%2F8IC09h%2F6auVa07s1&X-Amz-Signature=01775d1aa7e3cef4c318f2a110d96dc5d05fd28bd22e1862821dd3d60759c88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

