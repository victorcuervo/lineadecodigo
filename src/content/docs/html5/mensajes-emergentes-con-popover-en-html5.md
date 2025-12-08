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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDITWABO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdHgQzoU9OhjmoH4uq%2BPTT2fcVwam2spz9xkq5DXtKsAiEAklaMJpOsXsN4HtLyCdYZ8irUGbqQrBK6wq0y8C85cG4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOG2AmRY3fiHdhqO1CrcAxOSEe13iRUGEb0S8eGWOzdg1Oqh1R%2BXzSpL5bXywtG%2FYNB%2BPs%2FWhtiCW9DksfGkW40%2B61v305GcxMX%2BHiiWRNjalCbNVgvNQ1NYqzgY85t2wDURYCzOqGY8OXRXpHhd80ZvbJaDbY3sB%2BvsFUNf%2BmQMXG7laSqTvForyqKl873TCoW9eNdOaKEA9mDPEOodvooJ6MCBzW%2BhZ485tKYcSY9FfromVc%2Bjv6N1uOpJEmwwmNSb5mOPaFiHat1gI4RcNbjLvA%2Bk9FbiHlyt0u%2F5hCQsBrlAwrltZqIOsP%2BCHELjF2WEA3BVlFuT%2FnmYdB6TkHkYjxy6lQ5naDd5ZZvSV1%2BkVaeCJACEG%2F1f2Svxo6R3g7pzmtmvm8p1A9iRhKi0Qknogcohm0oem81R6NDxInJKVqsmE3aBZqO8uqscEQTDkBf2jELsLvq%2FvvXNvBUw30lyqfjN2uV%2BNWz9nNcYAyPMpufkGN1vvxvqNsuOaqp%2BofAblmmeYZmeWbT4lwSIhZcQT9TKtW5aBv%2FksC2VxfL%2FCs87duMxxOU1CR61z4rqIjVZmJ79VvWwjVFtyBJFJQhSKRKe93dGuzW%2FljBhWHubTb992FrMnJbHyCMe3xYW4Fh4H06fAqxpLVmcMI%2Fu2ckGOqUBSHG2l2UDcrY%2BHpRWZZgGK0KYoS3A3JPfVmEvV91O9IlLppb3tHYTCOy082PVfaL4V1tPKMuyWVGOwO7n3GwtPi%2BpKJ48gMiIDAQS%2BhjdZPP0%2Fpg1yg%2B%2FwOPcKHkONENCcN14ljC3eOfivsVg6ZTx%2FYyn5YSpIuTnBP%2FaxLBbKkXyIDMVjmZE64Ki6UgE6UZDQ75ax9QGfxHnFpe%2FT8Vnds%2BaBfvH&X-Amz-Signature=0c860040e7964addf3fcb2f5f1f7555aca449bc6d81aa210f959c583150dd566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBGYZ6O6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdqs43l2Dfk0shwtodz2j0%2B3Jx0IztD2e5NH2Ge5Ab7AiEAuAsOnBgnDZHXV7gEt%2FGCA%2FwetvcKeFa%2BFjcoZDkI0ewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORdYYdODkXMjh9HoSrcA0HSPWLmypytCkggGnr2i0Ev4Dqwe3iRZ8iYQt2y7Lmj0iZP8UCMayneTobN5zQeqtiHdedY5YRd8iy8hEGGR0boVR29Ij09MYTokRjGjv3T3JGAWy4dNYwfQ9c41RwxdfwxDco2A%2FxWrX3TmyIJ6dhMvlrBq1bQLmjXDHuIb01xNU6ac7GtIAg6m%2BiubeS3FC1Cfm8qdXrtbXvqc%2BeD9gaPPuQJLLAYgc0JA7EkZlz69YaIb2kOgdGYiDP8j7%2BsjGc5xjNOY7L0x7JC903WHICxPlraZPxsSh%2FGPJAiZ57rGQpF5Gr0iRUwPdME68SMgnnJ4jE%2BEJTP3pimv7FfIB5oRnGRTL5rkVjlJBNhEX77gEp1vw1DsQghfmQzCU21sx7BGQ3t%2FX4ROCkBeCxKPFLKExH%2BsjW87lCFutjOqZy5N2yGKLcfY8VQjqO%2FLR8pwD%2FMaPR6DVHLjVYsivqA1yFGdMHoNeBXVUe6nYK8GBfpxkwlykXpNSD7QsiCC%2BOFyb49B1%2B9%2F%2BKiMFUT3bQkewYViujdijSwaH7wXMGpiM7dowyH9Z6IU1HoGikmPw1XH5cU6nuQzrZpgS3AqWrfAKKWHuBUsX5CEocM7srSLgB9gk4mrkyjO9P4falVMI7u2ckGOqUBg8EdA9axeVcwAmaeXiCesBGPph4%2BQ8p9yY3Pc4NF%2BaLd135%2FzDVK5ft8pSGrdXgjvcnleojynjlCgEUTgz9XJTLu7cm%2FCtL4tIS%2FM02rr2MLRH0j8JvwZkzbZq04fzRxXbyizWKdsJpxNRwN1K2KJ8c4Rdinb6wDIStre1ZlbmR9NL%2BrIiMUInBIpCIbHUgji7wiRzjx2mfHO6KNKg5gNtrVbreJ&X-Amz-Signature=19124598de719850045b40d71aae864cfce37febc267798b159923c59e172fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

