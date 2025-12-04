---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOU2RID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIF116TKfyp7Io5TQcdLh1q2CtrF5uc1jUlwwUYpso2%2FdAiEAn5SOcNgFbzv24Ozv5fgCDyfhOjsgYArwv%2BkpiO1Sy2wq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCgw0E8Blt1FHaBo8ircA%2FjZKRWRgpgqrGgG9Vw3LThbEIzOf589xrFHxNR%2FuLPrwxU9gHG2548ja5fF3sNXGIAgzVT9sLieMaNH1mCV2dDVCRGotj3ri2cWehySyWH%2FerPf%2FzllDWTcs2EOwyVVOZ2yTx%2B4YcY%2B1lF41Hzp1VKVsWBRJxLNqviUAJdvkfCIX7Wvs6TnMMeYaWEfw7HDMkfAhe49%2B3Bwle5SGIbk5jCVj3HAFF8chPg9rKqse10AR5q8zM6duQ%2Fa5Dg6LASVdmQM4NM29aZihzyPBl6VFWHduePE1eCQhRU0hbgWsVnd%2BvVOwlgE%2FyNmMqo1KSvDdaMK64%2F6t5yPhwBK9KEnqRRhPp4rkWX8g9DgesUktKlqOj3qiIw3fL3c40fA8OzBwC8TzwjyNCzWVt5RluTQnlkvFwzBXmoKkdd9t9ZRKHlYX0a77XxETkjKI8MibiuLNy1bvMGXIRMh4ALPjUTicjRqCKuamc%2B%2B5lQktY%2B4yjOWxH9tVb1PMbNbI8wWFjrm5bykZi%2BhVhUaKqTD%2Ba9Pvx5Q9JDzd1fPtkLfbjVABwJ4TVPgkycV4dEe7YugSYz1yPcX%2BKAwhNd3Za9Wrw53cwMNvTrI%2BnorOeFL%2F53C7CI4AJzixOH0WB1AIIEFMMGGxckGOqUBfNTCPoJ38jtv6qxqReZNQ31ZYNQbJEVKypCAxfZppfij84KRsCyA4hSEroL5rwAW7pV2JMiZqYHowlN1c%2FKduR3jXDoe8PPwGZdygWTsnL3mtsvXTekBFKBrm%2B7Tt8rNckwCizPAp1tSg7%2FhNse3ebFz8HGCxi6%2BcTck4sg5iAZSSqhmInYiNGHSj0DMF0xprzpW8ghValzlfxpOuhd1XxEoUxYW&X-Amz-Signature=b6fc57403cecaaad299c5d966ab116a3fbc343d21ccf98f900a575e1214dfeaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JIDRMW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIC4dqkvl9eS5NWG6jtE2wLcV2BIBg5U7Tu5RfjTW%2B3NbAiEA53Q4oGuJMl1VLDCaZhzztjzV70HUTn%2BMadB9Wm9A7UYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2FZEVCtijEPX90mfSrcA8O%2FS%2Bm0uJr12Q8dy8o2Cf2R5vCt3mi3lWON%2BPgCJyxJeEFpTUQJA4XoGdJTOnjCdfteCDJ2gs4LJhFt05CWmU9pVa3gaZU0xL3TNus9Tl780TbW8l61po0c1bRRChzjK7RI%2FwmlSt%2B8GFBTuMkgHdmcyU994JpMl4NUBQrXhM21V57NPdSOeJsxqluoqu6F9nawdDQjSgEo1HQp7rUHMC0uGHo%2F7yB8ummH0Sn%2BazqDIKSRhcU%2FA%2BXRRTwPDdvyAme8HScRqb0tKEPSKUTHZ9Shsn%2FlsRrW1QjeBQpfFrHeMb6eMQ93P5Qk4IsArIk7xAM91P4OgwG%2Ba9RcQs15DwBHjXFBOenFyNdGSRiLdaFQqqWkUPfKxZ2mk6qT4o8JGsexMf8ezIQbgH0vapOWsI%2B03g%2FuA%2B42Nl61tb6aFi92EWZlU4kZrU5MW9EFpCkCzmAPYMRzlH3Fyw3u2Qzd6oT6TXM2RQg2OM1Sioj7hHCxn4UhPEZCkm8LW9eJlJ1C9Ay8R3mNzrgm8025MN1o%2BgYuRwgJwNv53bK19etNwe6mVuETruZwZ%2F%2FST0ARAy7jDTTQJu1F2waI1i%2BXzpzywPxLUnsSFLd5GKK5ZjOHJUS2FCnf%2B58x0yuYTrxnMJKGxckGOqUBP8KrggXVA43Q0Obe295P8wpbZ6QmbbSZHSPBrfEybN0EPnWoncy0vp%2FQ2iz15q5vnkvZEVqG6GCgxu37MJKs9%2BNswYC%2BaOPnFp7S%2BErDwlwqtZPdSI4rGrlhxfc9aHK%2BpJLz7A3Tf1YlQk8Y7GOKS%2BOh9qUB3Nj0GUVZsXy6TGKhMXsXkJ61vkBDdwiQ0OCeUWiZBF9v6GDdfwNBpR8rkCVZgV6C&X-Amz-Signature=ff587e3a216ae4fc9419492601965db2fcffe79b6eab115b528df420483a07e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

