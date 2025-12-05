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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVSKYUX3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt1dj1%2B%2BVq6QHo%2B723H5zmruqMXENnDQH3H1E%2Bf5AWvAiEAp21bniv1FM9uILLll9aJUieglwv11HfMyzu%2FpDP7byIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNhC6e6WFkUx7pRCBSrcA18VgW7YeMd%2FQx86zQkv%2BZePorocpsHG8TaLbmFNSDSNY259FNQR7zWfg%2Fdc1PPacIaTTmoy8YO60FQzILYFP23NzEUpxlzwVcxo9ZCumIBO29MvbkEdrbxTfMqe5AEpIBLAtgzjBnf7r2wUptG0dRZqKXTmn7nV0wciqxZGrV2XWP025DIhCf1kiSdoQ9os2ZNxqU%2BXpgN2%2FFkbAiOykIlPfmmvCUyuicSS1cmiugr%2FFKAgxZMknWsTgaA0%2F3i1GdWb2VXQ7Y7%2F4r%2BrKP7Cy%2BKlaMX7TLOdgehf7TD4iON0InbzA6hOLJ%2BEpg6cQtUtxr5wY%2B02rkEVCWZReKLSyn6zyWguF0UKM3mbUYzfn6kG4xvkTha1O%2BZwOZksNfjC2utvnZw9oeVF0UGLUsbJNHSCarlO9b7bnHj3jUNyg2y7M41tdbJ0nPasJXfPvGliDTk2Ni%2BFZAWN%2BDqO3C2Ne%2FDg0ykoIpyTxvRWF9mCH6znw7TfkZ7ghMB3bYPSVFWtRrNglMbluijqjAakVbIc4fOgP%2Fnt3fqb%2BrXdwMyBgSoofxVuFrlrkTV00EW6UYHXPYw60loohv1BL7bgJlBd2geJTyGsfGScKI8hqX7fnTIJ9i8dlRSk%2ByXoCTVbMJOMyMkGOqUBIFYoRbZ%2BSpybYIINFUez5pYxp0WW51aEQ8R%2FxN%2Bb97DXt5ysMf9T%2F%2BOgHl782w0vMeIS1pxwjGK1j9hT0Sh3%2B8ilP9sqwj49kvw1pqopltulXv%2FnczJJIuTJeNxWfOjim%2Fhc3eh5cqdWb%2F5ttbb60a9KOe2cEzasbhxEFIp%2FDBRHPmznzRuoDM6EPsnftpTZlZOUlb%2Fp6e2M5o4jE%2Bj%2BduZnwVWe&X-Amz-Signature=0ee275f81b866dbdcfcce806dc769a77652ab70aca14788019e2d494c0201bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWFQI57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdANQtIi2bWby57S4OKX6wHXvhGiS%2FMVWBp70NXawPDwIhANN%2BJYsW%2BmMX9mhgFrlw3kZe1F8ZEmkPY8Tbq9W2GncZKv8DCE8QABoMNjM3NDIzMTgzODA1Igzwvln%2Bwx9CeAz%2F%2Brwq3AO6ocWeiJOJeSZK0BSyvGLjVoA0xmNZ%2FF%2BGuju8WWdk8a9%2BIw1sNZuJ2GMIX0%2Fl6hKKfCdfKZ%2FAbqtdVUcxFyg3Iuh7CbONutidSCpNxk6Q5dIqQlnvvYaQ0YLPL5F2V3uZqRU%2B5LQbHssGKTg5hXHstjRDdc3K9u4Jei3R%2BgvyU6NlRxpA17Pff%2BJIGioHqFUbd3w9ViTveoxKy%2BKLi0XBHkw8wB3kE03ZxsSprvvMFJyCTsQ2yBNmGrrSJ4FzBCGS0bImVMcZiRBTMyHmC354RGLwAi9y76L%2F5PspLRD5ZS9akWzypMlbx5cFw1dYbrdRDTxcGXXYTz27h5yK784PlzTrFERQMvkzG46kf1LCzND7QuMmK5ugbZo3Jml1ISh5RPyRRIu1smUIBtJSmQeFsGAnfq79E6kph6fAqtRSwP935BP3QZk%2F3R5L9qwvLQroesRNVCvep2bgDkhQxwvlb%2BA3oXb34tTVjGTUngLzLx2CLA95wmomLgvn7up4qH7SDkW%2BSCqx3WaPuecgg4R%2FicKhbEY5nkjydrsmGktcJMpgjT9QLly0Bdc0k%2F6FJS5jY6XyIRP6ZD5wP3EcKm3Wbo8wi1z2iD%2BFdw1fTnKWHvp8STyV1hnyAd4WzDCgjMjJBjqkAW56%2BJKVfsiI0M5Ol3fiFGIob2Ne3Sa4aDPZ%2BAtfEC5gMK0fvgnRvrJ%2Bqha1o0ZxdfInEr2mFbNt2jk4PA6jFrYfllTFpaMs6hA65F8jdnrCtESB13rXAm93vZDuIika8NBsvz6FcCLTS6avx%2FFqhf2RWq9Vm%2FUyFg9kJg0Glz2RYIC6W5r38nAoVF1BRu4KFLS9AZNYjklMooJS9jG9IXyM4ul0&X-Amz-Signature=dddc54a6980c2c6b9f46da714b39e26ea8f9783bcf1a5b77aa8f02d87573a4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

