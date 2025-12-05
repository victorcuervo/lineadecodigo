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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R24BYVK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2%2BG3%2Bxhod%2F70fZh3dURCZcBZhb8d5vN86kk96BNJQ4AiEA65nkMbICKr731Xi1u10n0KmOv0Q21l5%2FaphM5iff1X0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEYY9VhQ8lKWgwZaACrcA6y3gUVwiJvloCjLYXZw3H2IeB5HDsohmEragiU9fRVjABe8CL1Wx6Qy7VRvqK90a3%2BljvVUtaF4ROsNCpypb17Oyb0dIC352uLjfmEGi1YAeOHfWzShCnHD3rb8ocp6lep%2BPb7JMrisBKAw4EJrZL%2B5MhSMXPzR4ChfbbCJlSb796%2FS3tvE0c6VsZcHZIp3NQv8JHd2c4MOiv7KyXcpJVHTfZyKe8%2Flr8Tm5Ed3wZwuU75kyTjDeEj2rka8iDfM34ZL8IhzFxx7EvirJ3F6jwXZGamQYU6oGaZU0l3XhW5b8tq%2Bvb4Z4iSBtS4kuJUpVA1nv2yUQnEDrod3plm5J0wtRUcvJtWZVV%2BbXznlITro4NSdZ62TrLob7R01eLYCabrtlxU8hH0uFYFiHDfzkDoEgeIBckjLpXZB7u6RqlNE5UokEpMau3UNh%2FGtDUhBg6Li6Q0gTkKnK5VUqJujCV5XY6avlgDZTEukFQyWQhqUlHotVoiuKJ2NVabHO0wGG2V6sy8gnMcH85RWx%2BTT%2BrOwQlU7QkQ2M%2Bpu2D06o23x3K98SXDeftzGpHwUxZ6t3vNj5uEa1p3RJ1gJFJ0nd%2FafDrwn3nLyfsNJUahTYibjmyYmbeL71PgoUy13MMrky8kGOqUB6B6DgZxxmFikPW3B8pqhpuF0BHhTC6TKT8GhaTFPK77zg9KlRE%2Ft75PTfehRg7tgDms2tSexx3P4EdExlAfG6eJjtSfmbUzF3%2B0DWrXX91kXXnFFI1LtzCpBEIIki%2BNefbuv6xXbMxBUwHWIcsZcigESr5WELI12iDuvcmXxR5IQT8Eh%2Fx96ATS%2B3hhEdKjxk1i5Vhg6foanFMMmCMHGMOURedGb&X-Amz-Signature=7a6cd09cc2267ce210eec1c43c5b5deeb6e808c59aa9accf61409c39890113bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RY35Z3W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK0FQ0xG50GyY1MrmsTIELIz%2F5S2RiSsrHyhX28xcrkAiB8RnOMqWU1ZmsL1H32QkP4u6wqk9lgNH%2FnaKLS9RBMOCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMyVzI%2Fod6xoWHAV%2B6KtwDWqGoI55kM7mTjXEnDmrXfQygCD7imGj6W7Esd9CRjhYkS204G7Kz45O3MMviKjWa0ENW5HEo0UI3u8TC40P3a8tTv2OSrDx%2BXIIAkTIaWUpi3Tv7JaQNUr2A0w4MyPosyuJoVfo87GXbWNncv%2BFAMdENdhZryciM1mvfvy8tV%2BbzCFxLmfV7ISYa2LNjmyQENeqmT%2Fo195FZsjfuwBb5XzRWrRYhZ%2BPus3HLLc69mXFvkUcKAndc5DIFW87RrhJQbeYD9f5g2qnuxewLYu4kdIGrG6JLwaQr2UL9dH8SWEuEx1nXMSW6AyiOHtU6ysNDfPbiChuuldRUmHV5RiJxZAanBWYbAWrlUsdyWLYys0wiVMHoUVQ3LSeASpxoNz4aYx4BZD%2Fnm8vbKvtv798RUPS%2BoR4D3292ODwTBOM8Z0YP0PX0KB5x4PmTL7%2F1kxCeOi9Tl37pN6aPSq%2BpE8gHfZ2GEVEjAwAv%2FeQXqHW2LroDGEuzrfxikoo0LnuoJyir%2BDeGeNxch18f88DtEnv6fvowl60T3ghqzU8Ct65n7YKtH6moh%2F2pB%2BYNkMkQ24VyyoXZAfGpTdzshiJV%2F1CE9FnirfEIloWlWx6lzg%2BcA9nsK2Kc02l5lzz6hoIw5OfLyQY6pgEfRihEDPq%2BuhEu4W%2BozYsaiyTwcATMSHhSAydeUz%2F1XbvwV7szs%2F%2FQR1qM1Y6ajAF%2FyRYXAVlJJ3VNyj%2BrgDkBWSDwmMASfcU8vm5LUgYwSdPAtBJ4bc7tY9VgWIabgmgR4e5xvOVlFVfEZY2GLXt6MfxkFLFXwaKow4pUZkwuaM3RMEFu1xOFUMB7w%2FmKtKdpFYoeLHBlxlGHf0oazMwV87qcaTWz&X-Amz-Signature=0775119bf1cc9cc59079d341bde2c37fc4033d7990f09e5ceb8a33d7c865742e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

