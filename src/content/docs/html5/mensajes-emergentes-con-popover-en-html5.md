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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVPDYCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3di82Bxj19HOsr082vqpv%2F1A5JUHpQnRvopaWTBbBhwIgIFDNXd7EPa4xmatw5fKAH0x9CWNLzg4xQjyZT%2FMsbakq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFXXdeFT1QKmZesCKSrcAyz8OcLOwKUo13eXtVNMg1DduvIs9DuA3EoWnf2Ufmjfxpphj3UHK8Q1fWxZI7IWcifDQrk57esebfcpWM2GIj%2B2vKTT7PSKuFlos69LUIuL5xsO1CEMGf35xupyKfdTptdsHPNJw%2BIJuClEo%2Bq0Pcm3wwo8a7P0261LZOpmqpipaoeGDrlIcwNB%2Fenh79DARrekCkUcvzJsf7Seewm2Hef01OiZdismUKt2SjuHaeAQHwWsC39m0fP4knIQuaej6RAr7%2BUHYQsacCbpyXZd%2FshizfL8nuOK8B8y0hdU6yUIpUnA3QXrG3twnQ5DihUpcTdGziYL6mx1mOrpZWTbE9IS%2BA0Skung1XS2lvuxRns3TUFgzUbHJEwrDaQTG5CueGjn%2BBOT7DBLMgHgYq2tzmExIBi7RhYkUBge0CoAndxm7Y8kf5Y8sBkzB5loeeLrgY6WVi2tr7k0M1qT2Gx%2FGBrtX0vKpMZQqBYQOAiTNeOy%2F7JuH09VN9ID%2BJHdWJQWHgSjfv61nyWo3ED9BdBsmZmCxdISLQiQtyxUVEK%2FGNBvkaEic5Ktstxo%2B0MXorWrhVlmQpGAffrTYlxJ9bk5CV0sUwG3Dz5vj1itr3nVMD%2BLBODVnWz3rlhVWAVsMM3T0skGOqUBMCk%2B4I0LA0sfiB4vMerZVl0tz4SFGhw4BvM8FPBTHiGCoihaXHn5VB7%2FcA9dnRNC2kPzl2Or1UWVDfFH08gzo7Cc3wtw5RxQNkK7FA%2BoX1UUGrwpvG2Z7hgVeKLMB%2BWS61%2FYUTFcmgsrGz4aj2crzGsMGbsENqXggpmvmtWJnwxJ5LlxyJFNjMaG1PTRSLQObFtZzMrzHwK5%2F2fE8VFTVgTyptg%2F&X-Amz-Signature=0a47933e4c7f5cfd01559baaeec77fdacd863132d8d1681a1f868714852fc963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6O7DLR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3jq2GyaiBBiWjKhPEChe%2FqVm2XBTFYOALqQpHu2eJlwIgXV%2Bg%2FqlEK%2BVioaivFLG2sLDnbSROEXOOz1m5vmBRMSEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDK8TLIibAlDecP5xCrcAy%2BlIbJvL3gbzvByfXSs7jza0rSvUcC62MSVGoljp7wym5kDwkMVbdGm3EUody%2FbrCog87H1w2bD0uKNaKLgM71s2LQfx83CvsZlZVt%2FEnb0oodzFZ21%2FIpcXTl4jhEoejhlL%2FvT1e%2BlYi%2Ftxffqsl3OuvSuwXoY0tSH5sY61u5%2BRjRm0RxebN9Ery%2Fj5kxZWicdgzqxLofDX%2FnIdMVYz6UqKgYjoPqIEsRX%2BOhAjED8%2BbSTA7SiQzIgEHCrxpuOCzBOjA25FBCMkjrYudfVClvUb2ljLkeVnVqNnV4T7cWQTLLwaiHm%2BzqWJ5HcvpKpf%2Fc8V0Wixl9HX%2FqZSLtV%2BSEyv8jXogE20VK98KYXgg9pW7W8cPztGLVc%2BL1tsgiMwm1rk2N0xwbr%2FrBLNcEckBjTUPLZNgqz3YEXPqmqsSaTb6C6YhDBgVXdm6kw846WTnv%2FNBFUu7xEHX3Vdgw%2BLZMyi%2FQ38KaZrLyNZFLm53IyJM%2BNQqPAM7x8RC9FcaGgxtyVt2Z9HpX61w94vp1MC7w2151i9%2BMgM4%2FM0cNGXRIt42%2B%2F1wQo4wjX%2FlC1l43rtwUfcV48kNdsS1huwOcVgV1AWM551HaXmZMHjcT1%2BSRzOfXfvH4MHB%2Fzxet6MMnU0skGOqUBHVBzYhys2%2Bh6P%2F%2FH9WWYzqbQrFC%2Fz%2FrS4l%2FABoC%2FTvCGJFiaf%2BDGf01zx%2Boyc3nJWyJfGu1fqPOjftZJp2oQQMHM5dN0dE9lnZwM0%2B3Qu5n%2BAT4tGgb3rTNLEp9de2JCM%2B45wGc2WdhQJDOhaBFWcsk4yBcITxNWtqE%2FNjgu9NVsMwBBAfKqbOWo2gO7Jl1xF85HwNzhPJwrpJp03mI9dQf0rAqE&X-Amz-Signature=600e55b90b77a31cdb96b039b6864f80a6b1dae07177897fc4f11608dff4a21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

