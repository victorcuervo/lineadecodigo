---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAL42NIG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDC2slwXoUIAIZm3vTvK2wr1vv47Vo9aHbSKxRZtXra2AiAdndab%2FgPBX6HDnnXKZM6vb8A9%2FyFaNcgxSKWTi1rCESr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMxIMOB2wCvC0LBTrzKtwDL3BgkvuJevBy%2BIfu1mAfKcTNqxqeMoVcc59yisxbUhjPpJAeC8Ux7c2uZSEzKdTq%2FArEjTft85K%2BZVy1F7bYgFwKEu%2BE0WAjyp78yRtcXIpRTnElT22u6OCxizZT3sTarg46g7W3x654J1FvxJHwrKpQXMqrNPowy9H1G5RplGMCt9y%2F9Oa59GZH%2F9n6TbJtvLQCJQqlDj4sgfj4%2FHkzaBD%2FC8An1e7y2Ga9IcF%2FuVnHgiLxfSoa6aqzAxvtIlznr8rvHpZC0KNM1azimrbYALTTVmfKMtilHrZrsbb0uj7h5QMm9%2BLF1oqmYu%2BZrJ4D%2BKnzndBgIDs3ANx03lsOJdmAV%2BOv40adbaHAK%2F5gJYa9DontJe7FZbkN377rOF7eYjcaR%2FOTnHfb2vr59BVg6bqhEy6LJrbMnhEgN4fuFAobK2pbxOccyBmsSTTI%2BFcdU1jPNjPEr66DZk9YAiWYHZG%2F83Qrg1d8gqDiv%2BTWxaaxeU9LTaRs9foVytC0dXo5hpSD0nkOUG9D6fVvXFMjLdT4RgjDx6JlbK6cuZaqHHbdVjrNH4iCqK1i0xrFN6zRNCSoqbdLN7jeiFBwuWwib9x4KvJv9Ck64G12dTs6Lk2AKQLvFHEnSOKMe7EwkZPAyQY6pgGduYKEAfewTUjFI67e9b6titMxu5FopA6%2FIRiLHkPidW%2BapAQtJAPJnPg92r82pRAQnNxalZxe%2Fkz8sj99Z%2BBD%2B8aPo%2F3icjYHXZnXDPAL3uyuI59XzR7WKihUK1WEqbInYtDahVWTupRX9QMKBqpjP%2Bn%2BcyN6lySVl5r9uQDAM%2BCHlyKbzRLx%2BhmWwE7L8LGzjRDs3ISn%2FyYMJv%2Bq2yD1rLr5HqYl&X-Amz-Signature=df28f521d3e4bc4b4e098e75d5984ae23d5392484b57354fcae3b8c0f2276556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMXIIKH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICpYZKEljN6ZJks3ONz67Gcci0xngq59zImBVU4JDLY3AiADBSfBUAjbux3zwJcgPjHkUNuu6biDGXKq2Knz%2Fo%2Behir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM5kSTLRaTuUvvnBXTKtwD7PuuQbdvN6wHkPweuwC0uvVRtpRKYwGE%2BvqwQzlFEBqhdmC6%2BHLOgQ7gjkx18xOug6bWlFdYjxkgzitbUyZnn4HODuA21yntGwhu%2FXCs9%2Fx0fgXIByKB%2FDjwO%2Ftv1rbX%2BdOZIyOCtP1yL60%2F42MRp6eWQ595W15NDm%2BE0DBXaxXl0JabYEbPMjrmPTrkciR5GvkHNOSYW73vRh0m3tXwJkamurs7cjqiNUyXcX57G4SWcJQVkrY98Wxsw5YjiEBWZM8MklHo%2BrAKds37XzBeFnaJl0jpHgY%2Fmk%2BH2qd59WuObkKy8jdz9%2BrQ%2BSHKepz7jao7Qbtk%2FluS9cEWqNTBLyFVHFvMKzqf6eI9yY5hj6kLpuSmJ4hb3bHXygRc3CdQ2jMJB47D3U%2FDEkyz%2Bat7gf9z58NYDd8GTGnbb7RXi8XGqzKlRkEQvMdHQxfIiE0v7h744Qtxdia%2BSXe8rv8d4s8dJu0btk5qY9pfZSV8oNssJJrXIk%2B6L2qQT8%2FrMfeYY%2F3H%2BPGuZLvILmOGDhQI04EvuW%2BAEzbxyyYVTcrzWXp041eVsZoAM2QLNvbc5KZT%2FcH0Mx%2BvW5O%2BNSeYmqAqcc%2FB69w4uknb8rqfbnFM0503ZoRXcSxzB6YvqHcw4pLAyQY6pgEa8FEo45%2F2gMvUyWPuZM%2FTs9M0JlgAML7FUCdGp1FudlvrHLiZdT%2B2hi%2Be%2Fx1lKc010a5MX%2F5KO3AV3KuUsyk%2B%2Bkh3oKlLmVRHQ6L1uHg926NXpvsVI7cBFdFkmDlyQwsGRfshrq9HK1ajNEgMzxs76uK9qB5fdKZ4uZZiZdWvAmbhY0sfGNCDL0jj4e0arbc7QKoqRGH8K%2BQdUvMH%2F6nBSUvfuFgU&X-Amz-Signature=9337b3754e87ffb0756ce74b4d99c378f4893256cfa0ee132fcdec8540a90264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

