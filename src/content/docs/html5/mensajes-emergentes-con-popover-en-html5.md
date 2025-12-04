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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYM53TJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFeiqse5V9MKXJGpA2jb3LI3A1aBTN3QdsyBvpfkZx6SAiAVk8TZ0kYpwHyM%2BX8o32F5Qj6r0rRlh4gRLnuvPWa6wSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMDuc3FwYMsTjF%2Bpi1KtwDpW14O8%2FrDLD37O526JcALhcT3Jl1w8P7Z4IQjBXnrwi4fGm8wjHqYlDfvjwaJM6f3w6x015LNn2aS2cD4tf7ULVDjR5W5wGdiX1M%2BYBr1kEww%2F0TjLbxYC7gN%2FVL60XvX64MPNVu9oL2oMYgcjyG1oD%2BSUg%2FJBq91GjTr1FwivU3RsFGruK3jbNergkPNu6HpNZh70bAw5NTuC0F3a2DfEb%2BUY6ODj8cKQn0ekkPKc3TXUwKVB4C4n4%2B%2FA4EzyWi2BZF9erHtw8xqNTBWm68VUtbzXPAvp7LwFd36TfZ8Ab0Pxhvx%2FoTKdxZHRW%2Fe510bQ5560AtWLg%2FfGmEh7CMJOpE5l%2FwJFcd0aDb1wgxi7hQlrNSxJQ0aaU0UBauS9QNQqZjfsA8PfJkhfFF3n%2BVUS%2FsbMRNIVmafNGwbdaq2iwxfN3%2B1J%2FGfPqJLzAHM4K8mdjSISa3gbVytxyGZesFK89ubF6Nsf35O8VPmy6gyifY4rcRph7V2IcDeOkch9dAzMSpxfgR5E%2FGSICMMUk0sREyRSBLOZvD6opOeOOPBVUFNIxsKuRnn%2FjRct%2BT1QSflDf1P%2BMKP0wgd5ZT0yOCLaBOnJGtL20W5xzONRyrEOy73ohSDIHWWLzWPAgwyb%2FGyQY6pgEvMKYgupSSVtJZlGmYy2zfbcl8Fb0PzQf0RBbtfWNpAEgYex1wrN3dXaLRd10lDJz4s1zCogXq6ZMLxn2ofmcyphZ5XoWsi9v4mhPCRV5Pqz7AArjLiXGKvmWYRW0ILrmz%2B6SplPsqxtQEgzAI3UXlWhzPYHsK7ZgQE%2BYiSIGM4dem7F6ypDB8cdkURfcFD1TDD%2FjmIaVTH9UgO1zx9hAEMXkFPvky&X-Amz-Signature=36310cc53215b71dc06b560af4543e8b74433cc5a93a7bee9d44093b9ffde529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2XC4Q5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDwYT45Xd%2Bu1V6w%2B%2FMUj7jPyXy2y6cm9AwOKFAqLNOXywIhAK%2FfDOjS65lYKw3nyxFrymSfVJ4f3DRoTugDR%2B%2FfGmBSKv8DCEgQABoMNjM3NDIzMTgzODA1IgyoKWw22NOdZJ0TjS8q3AP%2BkHGglgqCr2d3tJMOu4gZxy0qa4OtQJX9OPRiQLUWfY0yuHM2VGAUaB9Pik2EQcEM1QIb%2Faq%2BqC6cRYbEHWY2mPeNy3cfDkyI8rM0%2Bcc2fIwUnnouM4b66H5gbcEn8u7AHwGTGZc6IdlSWSrPRupLa5CYdtjAul6q4hFM8rAEvCiK2hbjuKcJ2erU6f2HN4r3en0l3fBipbRxiVkljv7zPEyLy0%2F0DP6iTGr%2Fbf6tQWg9sZ%2FTE6IQtlu4WY2YGCVCkLirCwQjFfXeaB1lvLFzdzPd8sJ6ndFAYoy%2BheBHG8NCGGIrRJ%2B0VD0QBsnnKVqKKB9ckM0CvnXMdb%2B%2FuA%2B3vH932fuGpRfREi279vFEiYeVX%2FGV2gCZDKErI9wKH9kAuIATKbGTQu%2FmyuSxtlvTEBCwj7pWoKfEBqgp6Wo8ayXvvlfOAWjilsf8d1qtA9XAOaqbSh%2FNQzbNtY%2BUfXVOdcmVl6hKOm1yTVvU33qSETCBRENAw%2BBrrcfqUbZINYDxNwVH%2BSFXk3gJUvt2jVZIepLA6iVdYUR8y0j09OVxUum4sgVkvxwYycQt9CbM4hcKSzGeGLpkMKlg6S72CJNPCtDRV3ijZsIp1I8tsKBqcsELtalrItFuLsxuhjC6v8bJBjqkAdJ%2BBBfMRmRzQ9UuYRWeEsZX4aufB6FGsBmsv%2BSrM015%2BFcUk9kNHpQ4%2FLLWLxwKnbJGYUmQ%2FryHZH4AxmChfv30Krmrgio8Yo%2F1NPaeTXpi6wqnUpBtnwYu2Pf7%2FB9uTMVuoHFkhsus7yvrM%2BXypMW77vIV5WMY%2F0ZAhrNEtSSc2l%2FO2bQUpEMwShnymZ%2BMFqBQRTZO2FE5xBVyDKFZbUtQ5YAh&X-Amz-Signature=f5720ab102d5dc5f84fbc1505fc03ffab65cc6996a40132a0b1f0dca6a4a468e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

