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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVA3VOT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCJ7P%2BcYZ%2FqnYNpbZTZn5bVKYKhagql0YQTQWXXDFAAzwIhALXqZpcgyB70lwA3pgauju6VFS38NPMsGG6BZLtwA%2BMHKv8DCDkQABoMNjM3NDIzMTgzODA1Igxd6Y5JHkkTjeLplAsq3APukgiHVMHtYY43XJvU9qBkP%2F2CSuzvyJY17pH80Qz3tHau3uS3cTSm4IG5Y1nZxFMBqBkV40%2BMTMpDKg%2B9MgBtgobXaV16KkvjZ3W5QVdEZnjWDyAiiG44lGnKsK9MWVSTeSCcDgPQWOX6m4Kd8TayudIKQPXP9GWAlhlqOon8O%2Ba0ybgiyCVpzccMKtOwmdWpRoKf9ZSWV0qzRZq6d3bNDGHz03gyGMJxD%2BcXrpe%2B5B5tzZxU56%2BLXPZ2CE2mt1obAVMa3RW5Eyn%2FVdHy2Oi29VOZKTvJ0%2B%2BB8JTB0wxTMG2aJ0wrf5Mh22b9OBzDYtfjs9%2BTnxVxVxze%2F%2FXyA5hlnsve09NqA%2FGYAxAkO9kTEcqeMh%2FvUx4NtB2oOBLeE68wFh4qg7HzMlUsOb9RLqyDOSWChwI57vShwaso0J9nuFLZ85Rx99qXdrZOau3VTv2360Nw3ChvpahENmCv0feeU4IQAGciOp1hJT%2FCAoAsmF%2F%2BnjzYLmWlR8%2Bhk0abwOkcTHlh%2BS9V1QbPKd%2FPJUst9Nm6btri99GcOdZrTBnJt7wvwIhq0%2BFY4AF8XyPG%2BfICGNpZzHVk5LgbnO3g%2FwqWJA3Xsz2BVk9fwCZ%2Fk%2Fw0sR%2BEE5C3WcPCsFWlvzCmlcPJBjqkASs3flIYmpMvhWd0OdkpkWc6xa%2FgLXkKlann%2B%2Fq1B2YTXPVVJkduC0I%2FB6Ow3EUbXF%2Flhtsk162nQKdF0GQKTimZOogNg%2B0BcJzEDI1zjpLEC9MppN%2Bf%2Blxpn3AhQOJwZfXz2F9UrYnI3SEyTGB4FULvjpNgqoUi%2FHN2wPUbWqHH80HoD4b%2BadsxWVeo2MhNr2RyWijgV4bEcemB8ygiKcvgGu70&X-Amz-Signature=036689a907e1f92f389d4d31082b95b3a0c76b054ab3880fd4dc86e4261f3f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUWCRILS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIF4zpM0tHkb08hccc8ZeMg2h%2FE10TUbImfHZ2uGkbwsPAiAJqAxLSpQ31Q0vGdpCq9srliISQu6celgFAmRypdl3SCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMSF7ApM2Zb%2FwBcqINKtwDGe7%2Bt23Kpw%2Fr7Jgj5wM%2B%2B%2FFZGvD6YXNVcNVI05nAVd1bn%2Foquv1B62U88vrLuDuRBBkW6S6FJ6dfuUZTb5iAHzmndoC%2BI%2B2p70nmkunbn29R8M%2Bc9pcb3JsEzM3k51RuQ68K%2FdkFGBXTI6l5Pb1JWr%2FFaRwvL2IYwOzrs0OtTKWqBoajUVi05Zh3AcDwt%2F56YgIE5mEJqxDvE7e7DvLNpCKDFIjeuKQoP3NvShvrtgCUPkI5WegcgWdlDMQD9%2F2M49L7pFOZJwXagRbweNWHwY2x2m8RX3Ri4MYbauyMxG8433%2BtPRydk4ft8eed7cCS%2BpESg3km8amoOGhV2NIi%2BpecKqkHXtLDQipc3TiqNG7HySf61h7D85Uf557qi%2F%2Flz5nTrDcKKZm%2FuW8jOnmPizvHm4BeRtvXs01rhuTrcC0x3HFZCIzFpeNBt%2BA98NjDInvwnZyj0Ua57fD0R5mpk%2F1fGOBZVJvPwXhfG7CidB%2FW05QSy%2BshNmLFfzWIqdNDAR26bPRRqtR0%2Fgb4GyK17wY0vwNIl3jCG6tRjfA2KVJMDpDok3VD0NFa6cm9%2BfpaI6P5U%2B0tpBdS0Kr4XFstv%2FurgKN0ygQtS5W9Sw84rnjWrPG98RNaGPU9YwgwxJTDyQY6pgGdGalHR7kVBBy9A3SPCYHEWrxYk3dAEH52v1yduFLwUF%2FQ9GJyFDk%2BmOfe5ILUxu09w9OqxtL3Nz8PlF1EqwB6C3DAWzIL3uF9QXvb5y1x5qcR2VlaEEkHNcrwOsvDxItGag7jWOnT4VuapZF4%2FCSSH4OVIZppRsNbyM4agZDDmDyWpESJRCHpXjo1Hsp3tuceTV%2F1AhZoLJEdg%2BToQOXre19hUona&X-Amz-Signature=812c1f4922a69515daf5a744086a4b0813cfc3dc5f3b6ccb9ea59e3d641a37db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

