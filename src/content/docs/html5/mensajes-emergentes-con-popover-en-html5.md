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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV6JT2K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICYJDWFEQ5qk%2FSo58QF0lDq6h8%2FHkCr8oMI%2BX6PdG07OAiEA8kJVILyvMSFJ9vkmYTsk4NdfBiU5g0tiY94kEUklP14q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLu%2By6ojQi%2FwHoHhACrcAzPHnRIUR5fpUtkpfvPX63pZ86f8n6apLIec%2FbIyyJl6Q8Vsi53g%2B84pXe5Y%2BmwqZhQaEDOiI1m5FAoSLrbztBX8kBQmIhgtnTkdbYM0rIUjCxez8bc%2F91YnVQKZQbUPtY2NdnSEFnk4EWBTbUCiI7klmlKKAjNdeZw2F%2FugyYQCAGx4Z%2B8iqI9u%2FbBE%2BsmVgUlSH9szdBBpfZaIdAVkhPbVN%2Bs9UGvB%2Fp3siMBN%2BPhQFt9W%2B3hxuuoEBMuGoiuwgBFXkPtSSa96AfSE1%2F01PQldVzygXv1X%2F%2BgQz3flQjmdBch0zrgFP53SYKvOjda1cL0IWpB4GCsFFE%2FFXW63rQRUlFet2VZ3gukbHdZCF%2BAAFieMQE%2F2LNlYYpboWwzQKFoJbY6gKvRCSEWNA6OvUDuHzEPUkAmGqVe9ELVKm05u28sxlsU8FZjzDnRmIpRTiAVpGDQl%2B6MKR7%2Bu7MkteYQLbScT5m0Wptbm1ef%2BHCdUaj%2BjIM59RPk%2FPhR2JbVeDoKTvwPfHOFjVTZxOOGFhYfA3VwTgX9woJJm7hBQ9rC%2Fr%2B3K8BpCRsHwl7sXyB%2FSMMapvk6RToRknkdA%2B5YLFhF9F1ZKPKuehA8mZEiFJTbWNrc8n3xf9B4trkjiMPHKxckGOqUBE3WShjfW2wvlEKb9kKiTYgnu9XrX43AxlQJ46qvpzUwzLDRt%2FLR5AyxfotWStg4MT7KbXdm1bOQk%2BYrs39DWwFq7GdwLy4sydJ65DTuBgCfejCnlEDzd2y4PyWDWlwS6%2Fn7rUEKNENjea4f%2FoHP7WBdUOc4A0LtY0hZUkqis6sDhb6f0PbY3h8BWp6zIVwEAmYtB1fbTQQOSwZe18tP%2BHCzxAgpg&X-Amz-Signature=fedf41351e782abd736a80092baeed0f2bc2ff44ef4a1799731985b1a3aaf4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664A4LIDQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCVzawTn17y42sYfjsv9AWSnDKhTwduKAOVmM3P%2ByHYHAIgT0XpEfAhz%2BJw%2F0%2BzC%2BYnFD9GI7wr8LHYHmZPrq%2B%2Ffqwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMjA2C0IpJk9VDnt6CrcAxKu4ychfC3dCuEv7H3zKAMLlGpz%2F71bgDo7wqvfiXMNmYGHb7ayNYaoZZXu7bRFR9joLlaovDxIWkixHUj38KOaBiy6ta59AOa6lHf7zaOrIGSMg5%2BhuefaGeU40cG1EGE%2FCYj1FFzui557KeL7jXMaBkUi6Pmk0pk3s8kQ0LseF%2FmnZDHcFsLAphEDNDERpBJi%2Byt%2FKl2a8p6x5SDO8NK0ojfbSsgbLi7vHZV0tr6IRB29sV2mjWOUAJ3M4u8%2BRbpvxWlfZc%2FogSiFaakUmXrbsay48%2F7lrOVbOOGSppy16fie1gjSBzjbAbSD8DexH%2BPDaJex49LxoRyOEnakQZh5Zzh3%2Fm8oyXT1%2Bf4b07I4tg7U%2BivNyxNd8l8hqEfvdMceixbwihLwEkp1uD%2F7jmgfH4jDvdgQ8IPnbK070Jvlc5JKjcaaOR1xbBsqToq8dXtr25kfIVVXooWtG06sbdwRAWd%2Bz3uecg1mDgrZLV%2FHNY0vjd4f7dbyllqRWsfEemt%2BNblVu9N0ABT4s9eA0Y3hFFjutY5M36znlk7oCDYgjT2XYxRdgID24l3bPKIK%2B8uUjixbsga0RrXrFmr4mFRX7kEVSFY82CtfJVpoXCQ%2BKWFzOfWKxva%2Bp5Q9MKrJxckGOqUBxOnIqzczqjvP0Tr%2FAH3Kw8yrYDF5oF5bPjwdGCF0%2Fy5FFzy4UOvW8SxZL6y%2Fi8GiWO78HS0FYn5Th8TRunRBEmMpn33wlX9%2Buv7wSpAI8yw%2Bzr%2FALGxtDCG%2F%2BlGaev%2F0bwnDMkIPsWsnwPTrlZq%2BUsomTgayuAv4jcYFab9ez%2Bw3d5XVcVzGUfFUcw7jpJjoQqjm7mIqdQ9FnXkQhhfA%2B%2F0fNeMk&X-Amz-Signature=3b1f4fdb62d7e2293caecb209b2b29b48cb9c923e1cc871f833f15b0a3ad136f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

