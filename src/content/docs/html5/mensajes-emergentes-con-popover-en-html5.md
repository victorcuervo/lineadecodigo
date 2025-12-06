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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CVKV2X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12ZQAdw%2F8gvCJM9aGjOU4GCXhGCvrDTiSoYZVaHLV8AIgRSfN0nhttGuApa0YKdUqibflf%2FD6oTehjCgBDG0detQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJTIPRd1k8P37vvTTircA1%2FuaaFY9Yr%2BQ6TtaSriHkDe9awz2dfRTjZAQVMlWdbM6jIDKhYwlGlBAQawlYp6u4QcQ1ia1ymm%2BsjZ9hAmmv0JcEIxujjjiLK232QZyldAJZy38NHu1HYSRaQlifdlTJZavNezch84PE7uDhh6rqBPoeSy9ReGPvt4VuDO3frpxHwPZvwa28AKmJaCgnoqGJ9cnWt27OGwCF3AaPZxIUUxppMJprSyzPRrB96Kp7FR7Z6CrRMWapL4ZrOQYYjBM19Vf8yt%2F4vgQSPx%2B3elwgfITHe7SRnZi9XKo8f3zsP9bZg8pRTkBF1yTRfy1q7hpDQao%2Bhcjga%2F7T%2BeJLJqK6KBQqFAIIZJ1aDtZI5dRjiSM9IGkUBuaiKhvJvFkNB7jy30PGgb9vZ2Ay5WQL3o1xslidMN8Hocl%2BDWB9cAmNkF9hVCT798S5qsW92wv2JW2N9o49yICRAlYXtEfv34S12eK1sADKuYu00qXoJb8vwI9U7vAg4HzN3XokeWF%2F2c1R%2F%2BoFCBbJWPsndzusa8EGRl%2FrKXOGMPxdDKJPYEoPjuNP9JyBBkuCRC9A1K1QntaiOaryNTy%2FOtWw6MuWtFQuRxKMoAdjfud0YIlNDHRgeNHPxvQGtPlqn2X4V6MJS8z8kGOqUByoy1%2BatMgRcBItOecEkjLCybbSeGtzaxL6YZ%2B5e93G%2B1Q77D%2B6qCHdI7rs7s0btywuRKLniaVkorDu2W%2BoLnB5Zn3YTCj5grX6yGRBC6cnVoRWIhuxPH4qm0bCi2NrLoplngJho%2Fmkigq7TY2reM9%2FAVqkPZ6L7m9civeloP1M2%2B%2B4wztrSUZD6RpV78eRFjpRsQghyi5g0O4OCT6exLe6NjSHD%2B&X-Amz-Signature=6cb6a3d0eb5d26bee15d99587aada771aaaf87cd308994d278fd35e9ba81b1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373434NV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBR2QhyZnaYm93C0zsuoGKj5IGKOu6X3f9owb4SZFS2AiEA%2FAWvId%2Frrj%2F8D6tS86BFWK9X81BVz0n7ElxSe9cbiFkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEFunT4gUPaUHLHooircA9alkzsAx8YI5n6eiS%2FreADqc4rkoFAsXLCahCh8x%2BcawuOULjXCyS%2F7gdk45TmQVORy12Y3VSVHqm79g0jb2Q7rTDwKzcWFRAYvcYdGTALng5cTJiNAokMES0lusJ5WyRmMaIKXZLc6lOEkXCVnv8IHuThpbG5Du62FR8bk8%2BenR1Zg%2BW8Jl7L03Sw2X9CiA8mT3J0T1AhGev7W5U7cjFAmPiVgqodv1GX2y7AjPSBgST3sKz6m763WAZLgUruZ2tP7BKHEux8KgrMf50RhtIL%2Bab1S6a52OUCPsylXt%2F1uA6%2FUwh8cO4px1JhMq6u8sSO%2Bus%2BzF33buZo492UA%2BUQH6gaVGqKBQslLpP01DZmoe0YaRUUSjAWHjJIG%2BJBQrRD8uo5tzNBWUlyzboY416lFnIKEFTnJRxUmI0Q%2BPM0wilDl9LnU7g9km6wxQk4ymhCXZYVT4KvnUbpo7zW29G1a9nierMjV%2Fi%2Bvu0oaaJwYeGq5MiUePRi5zs9OVCRwtRrW4r8QcgnxrsYYhsRvPB%2FMp89QgIm1lCO%2FlQP1l4G8zxouARBBEM7HlFBu%2BgmqhXiWIOsmsTa2SZuohsxIyCMutSP1wW4qGbmEwNbzuFMA0rJhCjF0i7e4NKnVMPe8z8kGOqUBymvZbcofbKgfShvQmw09MPHkny8LuJIt0sAQlbYusoU9o8eNmsrtzeu1wGipFJFi0mwM1Di%2BlpasoeGO%2FCAdminArKCP9WTgkJGqw7A6JFoNYZ6nAOJw6zFglfK8Yl92%2BlQCSsUgrfFDuq1iX45gMDkaT3yvkqj8LxnjB4HrISPK2QcyW9WtdJ2BcCwV8smiq8MqBA8wu%2FZYTyClgfH4Fli9uAYq&X-Amz-Signature=609a7705afad2f6ea5fea52d8fbb61a510a455b34dac955303c54fe34895958f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

