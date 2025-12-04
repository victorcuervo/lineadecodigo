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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQAIQQG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDwIYMVFP4pkNFT5TiBRz94ECtHhHSRRJlkoQh4mUG2igIgFfR77bJiS1Enl9d3dxQFY9BWebWtwA%2B0Fxh31zl1yWQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJFXGrCdEGqjOf%2BkYCrcA0uJ6WGd%2Bpwc9kM3X%2BOhA4ko2LqKiO2A6z%2FdEr88xNtao%2BkLKLdLvmoCKQ%2FOztQfg%2Bw6nl94RkANjtj%2BELbgkApTg64Uh8jyxXCyq3V%2FXN0R%2FCnRhrkVo1LL8LVmbBDSj6QTW5IBvwAMdLVe3m6le%2FqpjNVm7lDgX2bH3AtOnyOVCjo4tu8tmXnMdd8UNLOu54xRc63UV%2Faemavt3d6NqhDR00x7K9kl0ygmdf1pezSItHwJK%2FuT0hP93j7iZlk3KOPpcB5k%2BxlqAK8N%2BiuBSfmwAx7P28MRQmxibfKv3kVcl0%2F5GngJaLjDilUw8JzsndNzGH%2FsgRNZ1NaJnLZ8fVK%2Fya0zZ5G88YTFkxEW84UUjdyP7hD7WEZpP%2Fsi1h0kt%2B%2FexppcKLzZzwdUrmuZGfDJoGd61JvJEWjf3nP7ghHVO%2F4nte5iCqgd1xcYsi7UsKTHclFmZ%2F7l68602BH2%2FySq5aJ5NeHU%2ByOhq8OhxIIzbmvhbiuC3Bx2g1Gr4Pbwlp8NhlgNEony6YSgHYq7GrHu3LwM5ZAcD%2FYoKpXBcypm8%2BEqN93PSgPm5ko0Mr996pmWgGBjouA3rMmoQB%2FBQwbiFCvMqeHRwPGCdMhqBoX0O5Litcd%2Bx%2BotFdvBMMLnxckGOqUB8fUpdKXtAPhtHCsczoiPv4%2Bb9F93bGB5l%2Br%2FCfX0KzZ7gYDd9IUARfttiEv7yUTkOv1clMNZuAV5lOqNka8tvx344cLntw2f2vbph8VwrrTfUgC%2Bch6KwcdCEIgdVDYtXNUjGWeM5KrlRTl7whCOhpgQL8YVAeKzcyYWN3BisQu9xQKDp3m7a7EONg3j4NooSNCfaatrOs2bMrUY9txv8ItUbV28&X-Amz-Signature=dc897cdb1faad90ee5e7b2c5f068e86c9fe174b47e81ce5a14c5dcd575da6ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MFOKURC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCu3fnahz3sked4r%2BtVfMjKaEBzg6GsTPWOmaIKNvavJAIgb2yonHm1QJO3bbxZI4Ap02M8Yc6AfPQ0ErwB1xeAKuIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCbdRX2DbYLNi1Bm1ircA3ccHD%2B6exoF8NTxmw0unYuhCsb2Cfx6oKCHYPMZwD7T2XgFIKc5znsFVvXUQ6s5%2BNdPUD3ZliQMmiPjz1sIFUPd0vKL9Mlrre4cajMPs1GaoRShNAwpPE7NNAqh1D45DCCHFYrVzkxZkrPYJA0qh%2BqIvITEPoGpGJ85H40DtFIolDK5GXrw3yrC9Z13MVkI6PVrovLMW%2FksEJR3Ma5yRxzIz9FYY8Nrf4Gr7lZ1yO9GYt3S6CZQmsagBcHQJy5iI%2FIg6nmb4wlq6tENg%2FUkVR3byb6X0nOkaB%2BlB%2FTgiUSOotBdpaofytziaApCN4k4FHeEwEqXgkR16rlrYzOrxS39NLtApmzsFkkrXQ1Tth%2Fg2P9j1coyNhaDehVDDX8HVkV6Qz72MXusupiHQmOs66kp9aG2x8Zzlqd%2F8tTYwxvzhOo2Jl0IsKcX8Tm23%2FAy5wco6QVxKMuoqmsHEgmNpvlz%2Fqxaw%2Bmm6BjuErEEr7j7aXXjdcYrajvaCAh2NtsQSJGnvoBzx0OPj1JhmuiZOe7wK%2FN5vaDj1kZoIC8IX9%2B%2FnBnZzPusV0ns9GAxGs83UF8%2BHpYhVJpABEhyvpat1LTGKnAvADdgO35jw2rgaPyqr7e9m%2BEg2Xk62c9gML7mxckGOqUBIz%2BS26jfQCq%2Fv%2BoaGu8Qw1Hob1XFunwUaSheLGzZso8fHY4j%2Bu9eThcbt85RHC%2F91ri5lnHFWHCHTCySRugqIEcLRnec0cHwl4l7xn5CHjj3jGuI%2BlbidsXvwsF4AeloocRktS9ksL7pU6iXIjqARPOZDMH%2BON2xRnaHw0FEFVBU2aDPq8hpVCMSE9FXz50itKs4P1sOFcqWnuROxthI8kPfa2kI&X-Amz-Signature=773e520b5875741ed63a4014d23eedb2eeef19e0cbb881c5c28a01834efa68cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

