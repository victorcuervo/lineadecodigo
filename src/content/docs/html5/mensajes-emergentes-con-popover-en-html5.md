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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ32KJKL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCamyTHH36SViljEFNt%2FuQ0QQ%2FV%2FCRHbDieRe5%2BsdEQpQIgNcsNx4je6EgAoXYA9hWRQfoDYrzoJ204iDwi56Kbx90qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD05dehTY9MxJZew%2BCrcA1xMFfF5k9WCa20YkKI4tUqhKP6n%2FJ0%2FyAZQK%2B1bCGJojGdsuAwtuIr0HqrhsYAg91e47iJ8UDnQ4P5axTEdeYZcmzSo%2BzzD3v3iWl%2F9wu4dFbhl6OiRp0M3m97%2FpLL%2FmPL4cG4jN%2Bh%2BFkYm%2B66PH7fmPucY%2Fot2KqCuChBJn5Zgi3N5i9f%2FFnvjg768oy%2BINxgkTA8M%2Fk4DRuy2NMQKMt3N40Ieyk47f6%2BlIJsfw8bG9SoHk0ze8OtgD0kO4PtOONt3wMMKmyDXk7D1ZhhcEi2VMgux1jLdk9HhrMG3I85%2FUOJLBW6aRKgipK2YMZkuhNAjjjdvM897zn4zAMs2A8otKVsn8FDlZNBbANZs2%2F%2B5miaiLkoAGOcQv8Musgc%2F1euFD8YyNuYT%2B4mQE8N9BaxDhafbQ%2Bc2gXKMdlgRZKPT%2FIH%2BVW9zKJEa%2F8BczaeqzewmThx5fGtkECqcxbhlRJg%2Fqp8vqiThpUh%2FLGnmfI1YfnT7WtHeGWPdczMh4sS7GQv69Fg4oNIXVPFQ8iCzr22QehjjVq6L3AAtPOWOgOUQ%2F47G0waj%2BymCue%2F5nSqvi6kfc%2BPbSbHRUFeZ%2FUf9NrlYmjzqhR1Urc3UheZoToPCFI7u%2BZ2U7oyvkf2hMJ2f1MkGOqUB77POeq%2FMN4N%2BPUDxtHdz36kr0s59LggvSmXtpxjnKfyHuEMYHA1tQ4kkNrUAMEDcidKdm8Hc3iJSlMYAL0RgVRulg2FPI6FQPF3hrqB5wikzFmwVa5QHKZ1vf7%2BxfVUydxXSIbjNFG899DC6NKDM9ZzmdoOxpTV1eiFyFwZDo%2B60q8F7oWbxAO8z7%2BeolnfLtL0okW8fl0OTO9Uq9yy6yVqjP4FF&X-Amz-Signature=25893d9d2a05422d68d4df23d80151bbe2b4a9c9924af82096236d02039cc109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJFX3AG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3Y7lTb5uggMmPJ5BStkhC29YNRV7fyh6czOg6O6K3BAiB7LX7lvQ7h0Fu5BjVbWRPEXiGuUrmuwvdHlMmcQ4ZiuSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwVikMmwODLyapNvNKtwDDSsCj%2F5kdUbgT%2F1CqJJEKSjfcgPWFwb7oxFG7WSBWL1WkgpVEB342FCmgFSa0p%2BmVzIW%2FV7Nua37RMPf79rQvCxsX%2BMR3JJfjlHPrRQQfuI3f%2B9fPgsBoV7H6n2ng4rO9lsqMm5nRjjpWuGQ2VbHFUlR%2FU2QsZUtKKh5rPbc7RUIoMzbS4woA6U7E9zV5MLcFxQrmLcXYnI94Y3vQHruCiGGOGEDDdTx28%2Fvrf7gQwtNQqOTzFH2c49cdDO0oHoIVDqeAYIdQBJgytpen4btPxZuHom8Ris32kw7KmuS%2FvaSiWQoiuV5wo0Ng2mqgrSj9cJpZECTW1uKyKAHqmpjC8Leiiyr726f2Z1AQMr%2B9L8yJdNge6KAAq5mNu8u54v84mVuBrgSVCwQtWh4yvEgfa6fYUdv0V18uIYIg0x6tb58c%2BrAJ%2BmNJurBtQge2bFjh0xFLRHgvevW86ksU3I0E9L2Z7dk9PpPmihGHiyPWESVKK3G%2F%2Ff3vW4at%2BX91ZvOc6wJgOHCpDsBQ4tZRW1QfpQ%2BhMdphDsCS9GGVhjNtnW5UoJAmznKFrPmJXqkqP8bPNRe17hayCTcd31W1boIMfeNkWbvM6p9NYyks05q%2BrZ78g7ff%2FNYMYpQuskwlZrUyQY6pgFs%2FOEk4drhf7ygMGwkMHl7%2FQgDnwBoL4wlgQgij6lqLOQNEt%2B73xc%2FwJwnmeFJg2KwW0Ba8jo903VT8ghVNgRbNf9iHHVb1E0MnWwzjIFgYsdhcffGZpAvG3EMdEGvlOAaZsD10yfMQht6Ra2pUFV9kaB4BLf9Sjhe%2BsiJHUJESb822XJbO6dRJqPZk4euWjE9wd0F%2FPfkB3dDU2rnJr5FyMFT%2B7p0&X-Amz-Signature=be7f29db47feeb37b486c4e432fb3e36edab4ab5f53daf29b128483d54dc7040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

