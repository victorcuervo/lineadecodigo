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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYBUD4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB9ae4hiVGSlKgDKLgYParVW3ulGQcXvMrm1i54AMT1UAiBvQPcXDBjx4NTv756sozEMF0r%2FEOfV4C45TyLkdEq8qSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXDn1sMausCEwMf%2B4KtwDOGy3RvQ6NFEF0TJCU3Pu%2BPPaqJa4Ze%2BqFV%2FlqlLZXoNS0%2F4ewngvZ9w%2F%2BdRFEe4OJp58LwkKwkrofq0VE5wOkCwRw6GIResBmyrh6wWpXArMVwKLmoQIvIPOMQvnf%2FVId02p98U9Dl9rJwTjROvf9YufyG1gEIF6wimJP20ooYtFa5JQ5w%2BON52oGInkInrkBPYTaRzUIYKjQK0HGFUSCK75k3d288AqIebSgdGVAFhiNKoGNYNvBiO%2F0pg3y5%2F6tyFI%2Bbbr5agdKe1IelgsK0ShT1%2Bi8yPtFKuvN1z95p%2B3s%2BdKxILdC1%2B1lHGkwVQ9o2Rs%2B7aZrii7546yhkchFLuIT5NHSNg%2B3c3srVYgZhKwO0HafXqa2imJ4haIZ4RyhAt62Nv7hd665ppQdRvaWai%2BlkZHtbTMR9BeCQ1gX9OtbQYIr%2FkfGvWDs15tj1724lbqiu01Z4WL%2FgwrOYMHXD0Lp761FraQ8lFcZks5w4lfhEEDHeLAkbd7k40NmF%2F2j8xCR9sOLWifksdHXsq9g6Q5eopuuHrlvnhLsgon97AxypIA3KNpIK2EF%2Fr1DLx%2F%2FG%2B%2FdoiBbkzTIxWp%2B7BkdwQz1IJ%2FH8kp%2Fuu9sU7aN4RoseeEBchtHq9q7uww%2BNTDyQY6pgHLULnhI3M3ttMCQY6nWMmIxfBbV4nXbMKgmi%2F5fTzQRXcwXg27%2B6e9QGYXM9WzMby%2Fiy1eYduyVRFHxIs19mejSHbPDw0WcUIxoSPqTJ3bO5WglCTGWu92Zsz%2FJoivsBGixhMUVKqBA4OpNUtt7LRSOeyNHCqaRv3h33Dwyl%2BqWZVTE6PM3kPbOzmzi1Tp3TZuuE9EvgfgUYQrzvzRz38qQu1EW1%2F0&X-Amz-Signature=d267fb02f494ae9f1021dac30ebeec72c46e32769fd75638cd293b4c028771b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZLE6Y5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC8p6bpsh0%2BVpaykucP9B8ZhcosHbRETmC4CojEQnjYcQIhALzfRSHGtZzAJNU8OsM9LHid%2F0ebsRGdcALLaK4M%2FZaqKv8DCDsQABoMNjM3NDIzMTgzODA1IgxMNYgYWzIG9mbZaWsq3APPT%2BRZy3OP2qGfnhQFyenBcmGlsldhUhI3M3qGilrylHv%2BXIxtSCqD4vFISZFqanW4nxPKhFfaq3G7ti9mIvtXfXTTDjo4yG5CKeZcAIG8PmcsBCAdbnHps6CTbtetO2UQ2yr4rYR6CCHIVmDe8KywjU6sWZT6VdWFb79PZ2dmfggkQ8OIaZMIfOeHd3XyJ%2BBUZqZ%2FehBPglp%2BXoU0tTjro%2BgTafvdN%2Buic3sYt%2FtKpshisixLzVnqJUXfTaYjxfvrFYJ2CPyZiuFPW%2BJGNjrtObzlnjYi8eWD3uDs8haKNrJC4XByh2UfBzhStWeUpm3Q%2F%2FCslPPc%2B8%2F8aI3R82SbgJSjMzTXpxh1rvH1dhh59g9FV%2FC%2Bxs9mcLw01UOFzgmMwKFmr5njpvDj3f15bJtxLwnFTTld1GpRKDiGEhHUlNgwRyde0an81BGmwFa1JW%2Fmmf5v1LZ21%2FSbC6Q%2BJDvT7WZv0fW%2F6OTmZK2rspBBZDkat8XG2wHQsuNwaJq%2FCLShyZwoKex4IV3xDCAPflMyXPW6RL%2FduCZznKp4y0uT8fv%2BuB1Xhh8mkij2TaeEVQgC9FxXpBcez2HLUotgF%2FJPHmf53%2Fzmfcm4gUst0JDd0TzrsjAOG%2BdIX2lh2zCH1cPJBjqkAXvXm5s04Ftxvj%2BRmOqLwQYjsw5Fac%2Fz1hM73yQJxqlUzvIBmjGe%2Fyx9nHEKXBd72S0Jta7u07XtU9rV6ugCK2HHdWaLcshp1u0sovJTRti47OiYRYJnZ%2BoHIa52ypY3BORmkOh9ONLj9Y%2BMq2Y0jgy2z7xo9SV2G5x9SP2gq7pj4IcjLxNg6I9O0mLCAQM2174nXTH2%2B9n%2B%2B63oyUHRjUi2J19q&X-Amz-Signature=59580baa2d6a44791e3d1bc98aea93581ed0c7aee75a8037185c073d7e1456d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

