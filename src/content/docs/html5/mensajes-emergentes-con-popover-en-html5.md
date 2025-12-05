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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4CJE4G6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtZTfMJSZIojIMxl56RJChvKFBpCZj4eCiZN1ujS3wiQIhAKoRvtuqEgTXjb2tzpU5TJ1QarA3nxVx8AAacZHbPAH8Kv8DCGgQABoMNjM3NDIzMTgzODA1Igwl5ONG2p9e4FgF%2FO0q3ANAnXLrjhoziMY72bIZRq4XxbH7BZDvhftI%2BewyAvdBAeRjwItwVYL5%2B9TJGJFDkOynyRqpme1Ird87ULPIFaoU0Xv1FoAiis8I3br2PC1sjR0vTmBhIweqKYJjbcPFN419msOb2akJtZAVFKc6RreAJ32G0rrhFHRbRIDJ%2F4glEk9zOwUWyRZFM40tfNfzbwSQDzPOrxJ%2F%2BaMgQKFcjgO4ATaRN2NGuMNIcGz9AvEvbgJK66Wb16dYASqe7EkJ9mswtuw63TS%2FC%2BtQ1%2By4WIVmuDjE2oz5qjXsWlqmSrZUZtpgibkZaxCeiAIzWogsQrTFp0zuAL60xCTuYOuqhNXlsKFqywnEYTeQTzqa9tXufMQJLiweooI5M8ZPEGNjZww3XE78N2XXOMqMxFlNj388%2Fv3BCV69LH8UPVNjEa9%2FD9XB2Wv0Y%2FnUz%2FmueWcqh0PQla%2BYScyrE%2FMgnLQNvHTpzPbgmBfjyA%2BmoQbEANJc3Fio6bHAuz1q79N1QYmt7QEfk06w71WyrTR%2F5u1x9G2ENlJLWPuddCRj5pZMUQMT5W6iWZhV8s3Yyj2KOxnjRllViTTtw%2BOtEWYROtPWPtTc6o7EU5LE0%2BHfIv6SVgvbQcxRJBkCY2v7j9oHTDD4xc3JBjqkAW5xYO84Cbl9PYvqJU8zLqs7F32Q4TEF17iDoe%2B7yLgbSXymdmGZknLh4bO1rLZM0QpHdICxh%2BgGplsNbz2qOzo8HxARyG8yoUbbiu3ZAwAVp7BdRX975CwgtMTBobPNBJi%2FGjkoOGtp4llWjDSSkfWQB%2FPM0WhOs2v8REbi06DyaBBu7jeHxkbibhssE9E0zHab8ro8GHu6nQoSechDPpErFlzB&X-Amz-Signature=de42a27ed2f20d9be4f5983bbd45c16740d311ecbdd1a8aef51ca3b80ef4c1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I7UX2K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENYfnd9jjPm%2BEEVGqY8kyZKeLeNJikOiendn0Hd6o1aAiEA8joKRyL7PfEEzftykXNvtDgEf2QpnfKXg9P61jMdkaMq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEC0XH1hnUXwZShTiyrcA6Rpyr095NnQz0YGsMaBqMvAUlLe1RRfQqEX6K1lcoez3mcIIDT%2B3w05zLmD0AWCLNzSNeVJKhu8dPj0j0QFbDu%2Baa660qt3TLbJCg4xGRnin5sn0i5eEN%2F6vOMHkSpoOMJgY3MHL51M1cAnXoT2ECbrkqhRiQLFNEucbagP5l8Y2ZiNkgZdQEpk0V3%2B4EF07TVDhHwNmetPWzEjnWLUUSVPZaFcweKn90f5INkLa%2FxYN1jBzV%2FjlViwMc22Mlsry82xwrG4EwvfLAbneA31gIMHfSYa2Ydjp%2FaqMU3CjYH70pARDyz7RbcRqsLI94lowx2qlXq7njfBo%2FHQ4XMOyBeweKcmtvhRlMguYFhhsDoRKlZOhbgwJtLkZpIdbH0UB2wzsRtemmIg6vTZwq4wp12ccb2yzbqazTwilq6Ijp%2Bo4kAjsD1%2F10n5o9PL66OJvIr4V98yNhJAIEo6ndxFInmpwUC%2BMtJH2Q%2FtQi0wwIjzhXmgMGnNtU4tWj6m6VAKgoD9Mz29762CieGuoniz7hnFxpE9rP%2FRDKg%2FKgNO8yulir4RpbHxf%2FBBrvnDOOLdV5tgOaw4GPPIKdM9DtjhRUui%2B3TGjRC3MtTGi8X3qmHMXmYnTIj8OPgU3sB%2FMJXGzckGOqUBTEKBWhp18U2ZFYzT4lMGN7gDfigrXpVL09ECdVk%2Bwpds4%2F9%2FUfYIEnt7i2aWlPc4e2LUoAXmZFsVgj%2F1Ck9%2B3tW91gOYGnX%2ByzRXvNx%2BgoX8MeERJ8ZjT1JP0IOhGZpG7DP7hDxuWz0O2mx8YPb9p1wXmt6OQUwm03AocpBfXHWHaoKp%2BcojDwPRRrbPRWZVMgSQS87gWG0kpPgHDN1cJSuygi8I&X-Amz-Signature=af64069abceda4fc2bbc62b836de04f1147341fb74031ad2ce0d777e54439fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

