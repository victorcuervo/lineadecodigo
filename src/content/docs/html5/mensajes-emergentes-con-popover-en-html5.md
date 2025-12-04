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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RAXH2MF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBJGnXudat2343USs2i%2BVJ4RUITkhSrA0yKb%2FymhT3Q%2BAiEA64nYEFY%2Fp3WElko5C4ix549NoJvjd0dECsqr6ZJI2eoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOA2BYUMCnWba%2BC8WSrcA7r1e5n0SGeM83tHpOy%2FlipTfMKBOloFJeQvtdYKXiORi66T136mmQSnaRy4LMtYMDxvbIU3WVOUV9wr26yEfF98dDgfWJEcQu3f7%2Fn2ToONW%2F2PYZ7cqyWf4YEkR9ov43R3M2uFWHpPmPrmP7n%2Fc%2BxlQQnD%2FogyYo6dn0nXrbGOqGbiE75SUC5QhDdlZggui3XKMWvtnYNXjCXicMyl%2FLXQkD%2BhzWpoj5hpGmOBdEL949PEsV54lnX0H4HvgjCGyoX8x68oyapj%2BaWDvwg%2Fe0B4X3f1hXPmIDCZg7UliRNaBWpJqGt%2FbEfaA%2BZQLo05F0N6kq4%2B78fB0A6XcebmmsVbsPdvD%2FMyMBDJGeT76pBzhzru8AB%2FTrT0hwPOA5m86zIbp4shL2zSypPU51PC5ynmhCQbcM5vTm36pS5JJQoW8sWpwlz5C7H8G2fsLlv07w76XAwV6m7vAzRfidxpXd%2F%2BdykeOaTHv8iM7O6kxZ4wEr4nJibKzyTMoW0TUwC2c1rHciOEeg0zAbwYw%2FuCJSUpD01WthU4qghmVrZWtls1%2BBRY%2FyrCE6l8orJe3IL8mb00feK7OTFdAOKYRgVNgqf0fKXUTX7SE9KCzJMItA4LpO297mPNT80B%2FHCeMMiQxMkGOqUBLRVDP%2FdIOR0FYxQYEDBr63gdfmXjoRfsTsTBMujNdMfXk5pOojaD4s44pj2g4wxFr5%2BEVe1QJHQ8PtMH3MBo3Vg3%2FJSAV9sYKRpLtXlJUV%2FNEDYqIjXC%2FseYHUy0Ptjkb6foN0OLBJz86AhtVpkyugSc6YbCxNmprBOle%2FUuixMORWXo7FnSsxUDNl%2FZYmi%2BqhDD0kIm%2F9GGI6HIWj5%2Bxhr%2BpULi&X-Amz-Signature=ef27b844cf4c95124593a343fec50defdf5a56f8d71cc51ef57af35a8b8fef88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJWU775C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFl5taUC%2Fb8koMC%2F%2B8T0k414COfSZB8bkU31rFXOIEqXAiEAsxdkzHDzSEUbTt0YCApnIGokMlnNWgZ5z63uhIz%2F0Qcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFYfPM5qMqNlFpjYdyrcA%2B3BIUE%2FZrcmS87TBy6OoZ4VH6pDYRG%2BqKU%2FwJmo3JS1UzNJJ252NGNWcSEAHvEmCxukZIFk0CiXDhaZ2Z9I2LllljOWpFVFqf59ivh9mM8KdOvTytoo%2BIYHAJLpIv3skcG6s9ztlLvWnOfJ7Fps1JQ8X19KUoW0n1zhFzwB9VIKvurxqKCAHDTAcQuoheBFt8GesXrvx9kPhmtVoX3cNV7PcqqyzYqXS1n1BZ%2Bb3KuuwRymZwoIJOojssEKc31jiMMoSEw9ABEF4k7MN7hrdSRvybgfMDk0W8ilgfUYYK0VQ1Uu%2Fh9TZxCT2C8j3L%2B4pzJUhS%2BfoDAa4y4qJwytSYkqKrTIZAF%2FOPJlSu3Pp17tC0n4IjPaurACSj8hhGNIypYG7lrpNVbDQzdXtq7Mmj8MpCw6mFXH%2Bd8lBEzov0S8c1u6ny7%2BK%2FSlS%2BJRA3tuUhWUnEnhhKSB980yjWYNc5YsCsI1KJfSSOuUStpwm7NdZy9cKK1XwNZuQuIC0WfOowhDmV7kEdIxPX7v5Uim%2Fm8PdRdNwABJBAlGuxsiM5yN2%2FYDao5k%2BSxjum3Vhd%2FdKYjsYU8Wpb%2B4HLgAxzxo7GEP7j%2Faswearlku4ZzNRhUAuFCos7J%2FCVU6uwCvMP6QxMkGOqUBXl%2FR%2BcMbd8z58sCEHAqXnCPgJUwbbROkkT%2F1FbLmlqySddkkMU7nPYyWx6703o%2Bv5UB%2BgsndPzlORpMA4gZvamXo05yaONWCSpiu7OmojBnIzHzR15Ykd%2F1rLyOVFI%2BlxhBwBlgpMvDdXqJPbdR3R213ssNHEOhYRuOto1A1v7xXrDOKdyr3reFsBe63BE%2F5EaKzeJ0rOsRKRS396e4acugiyOyl&X-Amz-Signature=58880363dcfa174ed43e7f7b374e1ad146eecde2beee09dbeac7884d7650e088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

