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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNKG54U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAsDcuInCMLzyo3kGEEVkDkSX1Ic2NeyyCkN8jRPv7MAiEA%2FcpKYg5OYrP1zRRuI8NMzvGsBsm%2B7Ylt4P2Ncq7grEQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPgRgh0mVZF5eRfFTircA%2B6stBmxG0LNgb91h7UIqsh8fuGT31XJPOXlfY2UQRbkXx2lHUhfHC2wTETIq6Y0RBccVW1odPFFNagEoyaHVtlTMSR5OtB6Li%2FqH5WKfn%2BeYD65M%2BaNkOZDJKTvZHOH9Aokxkjh5E2T1rYlsgc7PC657UOqdDqNAFP9fSx4E3jjAR5EzVmAfcusAtKb5nJb3f6QaB2wWf4i6qngeQln5PrZBn1juhHeuHPhM3d9tvVaS7gXDcx9DRv8kX%2Bd1CRLr%2FrrUu0JfihjcYog8edun7%2Bdvp7qBOFSLu%2F%2Fll4aDCt8SRr8YTOty1ixBCZhOyaOJhLjql7Zt%2B8qSoCd6zGktfhS8S1Dg6ml57wsBLH%2FHgBKDcW2mEHBPhP5uT0DqjJ5Rzzr6gYa3Bji%2Bgu5s%2BMMOaHUx4pA2xcj%2BIVRgdHhgDjRWecXu41MudEWFrhcKoXLao95kVOvKaEz8YV%2BYYhSL7eqObhJbiPf0ro1DFDN7zEpUyuOELn2DnrV6CHK4ZTLysVw3dkZZ3TTw5MRjHnoKFtuu49b0cO5qOH8KahAvR0oBTz1%2BOt%2BAYdiZyOkxBiMy5NOQevRykW5BknQSKAKBgoB0J2nqtH0%2BdA%2Fg9rbhKYQDLWR3YlpJXotWwTKMKfOyskGOqUBJbck8Df0QFSgZBlLEGkmAKwVWMVa9nxJm4qQaaXU73KV9T9arfPtL3htWVBFsIrUtbnZ4Hux2tH%2BA7hTa7pmBdcCCAfV%2FMVCFf8%2FTSgxfAElATzCPM0HiaSfCpULrwh9%2B%2FfOfh0APSCdBxTsCljsgMZxBbgpmPdmxTeDRHY7LVoy6tujPpz8tMVhapc50gdDXqHyNShs7AcLDDI9%2BT73ZPGRi3VB&X-Amz-Signature=17b4ae7650278634280b35c67e29718045a2b802112e51547a8f283d64a25955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RV2ZX4R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9eV7kzqws%2Fxgd2X2JpJrNEIo%2FxZRD7qQT01TbnU5yMQIhAPmeSQWG5C2QTHIIGkv3H3e8xOB0%2FfM5I08COFv1zERFKv8DCFsQABoMNjM3NDIzMTgzODA1IgzDk90UJ%2F68DsCVcDUq3AOAH0w1rILVawSoyE6ar0kzpxarCk%2BaAurGQ%2BhXOILYWOXYiTfXKpUfIjKLutehX7DLop3vKO2gT2sB9GlbYbH%2BPvUG9NicJ6uqPZ6fiVAqewpBg1YsLdf%2BwFTCmIOAiDp8RVsHl%2FiWZxUxyoZ2okSdcwGQnoDPkfPChs4ZNM1To%2FlkkRmXNIU06X%2BHSUD2DBC4DLDk8AyKZdVzmRW6pwcsawNv0gTt%2B2759grhm18OtSBMpQHyBXN4nL%2FMFZhxKjgnyIHyXOzpq1VbofRfLeCW2eygQJW%2BHfITHy%2FskcrHNFKvhKhB5DGA%2BSmQtJVJadAhG8BGNBClmei9gvLFs%2BRiNpQ8wDGNy2OV8wTR2UfdrM2T8qMegL3af4E10hkqq4hvATJ4eQV7hcSX3ScY6ag6E23JYpeW2gnpDBuFRnfxtWY8x%2BLM7r3J7bikCS43gDeVVcOipQaexfRshuEYox6EbfpNppz0QbPSrs651G7c1vRRrKncLP4I4TAf%2FUoCRtzx%2FNJPu34pn7ZcR9SiAKfSbiZ201h5IxfYPq3gSzYLlSptNQ3xOzIqcmAjLZtPiWk4WB%2BnfetEu3cKF5%2FQScPzRkuEhGkwHG1QM2e4quLQJ7sFClMlnqJPdFl7hzDU1srJBjqkAZjQ8xq0sa2re6KyRAIVjIygx%2Bx4%2FVcoNE4NyD%2Bfdt0SsM8w7xDAESKZcPStwzvbcmGroPJVe7B0F1IymZLIu52uy8slqxH1FPGA67SKDbvskrTlmyEesKzOq8SF4ERkkdDC6OKvaUs37nsySbXRL16DsGcHKTK%2BXf%2BIt7dfjJQqVk1mcvVR5C5sgNmk%2B%2FbNyaQEk3sm0GqqFFaE1edfefIiu0vl&X-Amz-Signature=019b875ff987aa5e9bae4f8b3f1dd1876faa63bf4a4486389ff86c39abed7570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

