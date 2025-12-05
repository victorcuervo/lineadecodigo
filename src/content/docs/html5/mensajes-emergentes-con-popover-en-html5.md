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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BPJV5Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjZQCcmrpD31OCL3hVhod7E4TsxTnsvbK8kl8ovU0MAIhAJmPSTiVeZksgeQhmkbaXcC0POya%2F69lIzokJn7hM9ctKv8DCGEQABoMNjM3NDIzMTgzODA1IgzLKQ9HT%2FMoq8jHAc0q3AOL5oWLuHwtprKcLMOzGwz5Ooq%2FwNEcnE08ixJxcoS3g3sJ%2Bix9RVkUYiFOqmY%2FDov3h%2FJ7DutZ0XKx8W%2Bf0sf79saRO5CApTrzZbw4RwGxaLTWagXxm39BNywqRvW1CoqpmP7QOZkn8eafg%2FXmlCGtauCO5ruCAEzHlirr1w1SSTexGR0mBdKh0%2B5vuhjHouLHnvRRUSSktpMBPh2LeTVqq8mYb7On8UqbKjpLg%2B4aVS%2FZnDmhjLAg38aqNwWeLH%2BgG043QX%2FfULseT1Rt7LV6h52ibj0M4lWngnQ0tPDIxMBtd9bBDGkDVTvdyygzOA4jGrW0RMfxHB5RbnseWWU7oE2BI7J9zJYtYwR3F%2FXQoBoracMi0k8rc2478sHz6OaWKqjqBJ2hRq8bOJ7VP7kSQWDnxbh7oCiY6Z5t%2BiVoSx3cjQUsxVndBZDKLNGeDE%2FCjDmTT4J%2FLALBHiYi2jvjQr7GJPXS7LftkJCVP%2FFySbn9ZB%2FFkGMX9iR0897oVnWOL%2F9gZE2esnkmdWsQe66sM%2BBIqftM7yKJegADahqazJr2jDJasrQLD04wJGlVTMgVuSbqdDmU1CKjddv9iRyVepED%2FrnsL7yjMwDJeuDTzxqdaZEOQcjPIDi0NTCQ%2B8vJBjqkAW9HXn%2F7fKCmVIBb7SFhhcIGkA9JqwwdATP6NSQHZG3AhASooi7xbRnbM%2FU6TVqT1J9EID%2Bokg6jgp7Heo0Rm%2BAT2lCWP6uksUGmR3qGp%2BeEssWraWZ00QFiwrnpMtMXkRQejZdtKo8SEvwszsvhC335FJ1ca3LUL%2Fb7RRgdCaMvQhy2MfBdHerSCucRq0fL3Lkxa%2FlRbbMHMolrLBthHXVY6%2Bdi&X-Amz-Signature=40e50c131a430367e352d2dd28766946354a9a21da18507ea7cfd58a61ca2658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVP3ZSS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUTlgB1ez%2Ftff0qLe0glhulpv9h5rYujeARxsHT9HFcgIhALvLGF6D2famQuEwzkQQXDUJvQ07EcMO5qiziNTIPUp0Kv8DCGAQABoMNjM3NDIzMTgzODA1Igz2LdByB3pMBItGKggq3AM5sTCH%2FkojWtZ8q9%2FprHdOuYV6tklzGiCxN4dMOt3%2FHttqm8mFI53w2tmsTUrh%2FqDQNTi%2FY3kz7eNM8WWSrmLii198U2o2Hij8%2FBlwWdHLaOtrld9D7lxDpD2MLjoiu4YkmxQCAKaaIp0ooJuYL%2FoX583fEYhZySx4QG%2Fimj5pc10462h9fOdzyZD94LeTkQn5G1WGNivrghZASQY9F5XpdJqu%2FCoMsTuK5rczpJmZaZf6UORholY2QoUisC3SlEpvmM8bpAxNoA4aH8BlqGIYMHceq%2B35IRG8P6RyQPN%2BQxsBJIQGUDeAiaUfqJul76HTxPv5gQD186kSSnglm6zzjhqbcPZuTabOzMsKHamRG5swb70eMrZBrtC1cs3sh4iSybdxg2Zsttikb90uwFvI7d%2FF5zGJ9M%2FoBJHray7wy17CH0TNkkBGjFOat0S%2BdVAe%2FErkGU%2BKFhQbRnFtgZ3WweEcgdyTjUi0EPZXbWHQm%2Fhy1JV%2BNyVyagQAmE4eaRZi9aNMsFe2YCTSbWU%2Fmd9pj7lUsLEZtcsXnFs7kq4AsxJGT%2FYvCB0M7zNGgdI1Jlstz5Jq79m2XTUiR1RVzWgseOWC%2Br0t2MQUZDAm6%2FF026e29XjDo%2Bdkg5IX8DDC5svJBjqkAaZ2yFu7AU5M5hjD4R8l2E7cFzmTT4mS%2FYwqZBTyrKVxHufvsozKjZYGeeSdho06lnn2bZU6uGhtb5qLGgUo1h16C1U6uuSvkOja2eycm0ur5fHR5YEe03ZSYCczMkRgBYqRqm64c97YcVkJAEX%2Br3O0yiDqQE6drASz6xcs8UvxUpljAf9xT6PcbYcXImHIUSj4h8XWbnyIzfXejpNjLgdqSwNg&X-Amz-Signature=c28e677d5c86a07d716ea76df2987f85d5144b3051439a7026bb917489c26c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

