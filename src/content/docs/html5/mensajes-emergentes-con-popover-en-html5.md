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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRLY5SPI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2BbuFVlDheK%2BIsDKowcy%2Fyw6iTmFLjazTrhhkGFh3dwIhAKTTgmKp5vu7Z1m3Q9Bk0tfCtKZ5SuhonKXSZNWp5z0%2BKv8DCE8QABoMNjM3NDIzMTgzODA1IgypEa8M1rvOOnMztMsq3AP78ZZlFo2lksgdofbhdus41PVf%2BrnGwGJo1kpxWvf46gusanM6774XkkMAb9ZoDKy00DaCFfZX8wus%2F6YduNLyyGCXQm%2BM0p15IoS602wb7Om0LNv0sGe7IlAGM6WO5Q1iny%2Bs4AanbNSkoccF1xxS3BYJr8QFuEAqisULUVRS4MsBANdPOXek1o6pKI%2FW%2BHZnrGY0eBKu1Yz89z32YQdXgcd3owlyXW4ciLhNDsbvvuM%2Bm7W74S88hCySZ3gBKvpUGJmmhzaJnD0CDB6PL9wlqy0aCXED0WPyVqMMUrSXwREScgKC86xoPOr751jpKVFKDufugDoYOlMnCS1bDsETIR0jTX%2Fc4wJbLziDymjS2H1f2Iqs0uT5s%2BXTvlB7G2IfR2mpu4XSIfZ%2B5c45ujYlJV9XwUrfpZZDkme6%2BSN59qzeOwCT8gAgiaG3hqt56eYOHGnB%2Bv1iJRNTs9k9aPfkv0rdhF4LHDbtZuABQMm%2BrnADz5KEa9%2BZvdwO%2BjhWlCsdTtB%2F6Yw%2F6UJJUiBOIO4PKWjV6a1B6jWbICKTjYobOTqz90Cy49XWvQeRfJ44rbQLLU2br7R3mvPzcbDeB4T8vR%2F39Y3lTQDpgC8aDGSKXqp38ipI1PAGuDj3lTCVjMjJBjqkASmrYNZllGKfjeKg93yMc%2B%2BA43HRh4ey%2FuuYL97OD0JwFa2qyx%2FtlHeX%2BMHFkZNce078a5e6lp81fedMiWwGuCN8cAvwlCqt9nv4%2BJvKz0PEXdt%2FO%2FryRCWoHUAU%2FiYJu2yRK%2FPtevrspbEvkqYHwa9ybLxsurCYkJ%2FT%2FtFwUCyaNnyMen5yC1evbgBH9JnQsq%2B83W2znf6okO5EOS%2FWqAeEWiYY&X-Amz-Signature=db5e198faca7aa7df4aee9db7710083abf8cdf59856bc0f2cb191eec575c9648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEQTTHJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc0cwby5Jtx5pE9WSVwku6zK%2BL3WtKClXcw4Qx0bChXAiBFFLC0t8N4MOfpXCy7xO%2FrHZ6M3NhDLvw8cQ1TNnmrqCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM9WUn7nryHPLsudFtKtwDXLeQTWXD4dKZTyvYYZufZjGAofF37pEYNqq7SH8FEkShS35FT4VMaOIad5kI2aATfi0FqfigM69blyyafVanYbwYYmvR6ORqfpAWHt2v7vyswxezLXdL6qMrYmZxvQhlaODmLcSfULc5r4MtQcJ3GEtM8qRrrDJlgTAEto6N2AdkPX6ysvWTZc4%2BNmEO%2BZQvyckcwXOZOUYpFpCew1xLXesqed8F5syqJmlQvBjKmb%2FcdWCcQcE2qCWOX1Oy9zcWOKyjyxrGh%2BNeisZwy1bsST3GOVscgY%2B%2Far4LyGb8eo9omTKebLjvf4U%2FUb6IZD7U6hkYiDs5gPFNJJv%2FDi%2FGe6gpTKAw0sCP8NKw5G8L%2F0SPQgbZ%2F6pvtsrBxCvJJzkraxrtMOwDgjWcUgpXAWpXc3ki3ggxtkpJDhLps7OrD8Hd9q%2BZDsJmulQC07t8zwmPQK5RN%2FSWSo0M3db2b0n1sE%2BRZiJBHlAPQBd%2F9f%2Bqnx8xsEayxR3qwt%2FD5eqMrohJHrK0HnA8HW4aoLr%2B0cMhyUQ6BtRMN7vy0%2BBFCBrXfyRNut2tK16Yc%2Fm6ZIJkmNZqUKcg31olddyjK6Eysw%2FcIuYc%2FnjJzMNWN8uZArHi56OhUaGeF3%2Ftaz7kfVwwl4zIyQY6pgHqRqRNEAqXDLzrQHyVJBn1NRgSQb3MU2XxmuVdFV1PvjIYvejvlQBg9irG1%2BOhtxUBUEqNnCk7J%2F1x7o9DWY%2B3ZvIf4trPikvOZi1tm3o2I4gHaGc7Pc0wEqyE71xVCB3Zas4hM2DNlJPmntAgwUykCuyR%2Bm0AyEHuUEa%2B6Askam3ZYiaSFMQ%2BX%2FUTcFkEXkdvV5RXrQqVPkFauXvUjFAWhkDswdK0&X-Amz-Signature=73eb4a1dad5c077b0e9402d95746b9b49b3871788e7bf91287a680ea6dff8cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

