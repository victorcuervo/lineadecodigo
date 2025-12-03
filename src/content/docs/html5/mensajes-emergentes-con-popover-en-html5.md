---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6QO5MXH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAVveS8dr6gI%2BmxSj0YsCcNCO83b40T70zIVwFim94W8AiBIzz8YYJDqVXUFPoAQ1%2BFWFxjw%2BxsKE65FsUhsVs89uCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMBGE1wRsWCZQrMv3LKtwDD6C%2BtszjTgJircs8M02pUeSTxj%2Fq5gJze1gKKIDK8K1Iiqxp7N4Pj%2F%2FpTnlEfXHn1WBZQ7wNGAckTQJ%2BoSIj5tq7A5EM%2BosBzcpF18jlykDqO1ZC43H%2FAS6Rx%2BDVMq0f%2BIfIhmmthWJOm6zM1N7kdTUw2sQIHjkvSgzuxrqj%2FWHs6T7WN9Zcoz1d1Pxzi8TU4fP5VoALPFqut%2Bd6FnY9l33oJASxjdGH7hr7wqaylYSW%2FcvR9XDHdWO861CpxUakQ3dJl%2FsayFtrDntE3iQOC1I6wrJCBoe8YOeNygLRsa6aQDcylPILtkxXithyMMMf64iMsNYpPeIOxq0ottfUhQvyOIvgJr%2FbeUcZLly66cqb7KloZFhrOcmCWQq05anPwakplwwxXyl14vAIhRVaJRqR0uxGUmwTCimmmzjRET7nXmjl80pcuRs8ehisXuecfUcTpghY1f0h7KpfWMuwcBRqvMGQQtqQytH7zbdqfJywWmVSQvT0Ulh9PxMEU97aBDnTMe8Crxt5t7GyIG3%2FrzZYq5FW31EI0%2FTfztBPZ7KOB%2FXR37aRsFIXTWMFw3EP5E7X5nVG%2FRSErRL0CXBfdvQXCu2avqB8zRtsIq%2BvirbhmHx99McRuHOG9pMwnL3CyQY6pgGkxpw4xQcSZwoNmCRjD7Dq04JPdftwIHYkBggdBPzgth1BijnnVuiOQxrYSkR1uDjI1fLLjP9uOEHYOAk5g8fNNJcgrjpaSiP%2Bo3ViOKH7M1bfxqk5qwkrdaxAglugIPMjZhPwREKlYvGfGcpi9vxlaxIo%2FNj4WzPSpaZgO11qi543SIrr9KyF1FMf8gKSVR3H5AymaMmq1lEqwjdpF3spk8j%2FN0Kj&X-Amz-Signature=7fd10fb2e9b8d60bc654a7acecdc22f41a1439430518e99b163669da05c3c177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2CIR6AO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCpN3oc9FDgDIHPt5EEwA5mGk02%2BSMBm60uxudQxQTy1QIgXeRJOPF0IXCCVlOWdiI0%2BObrd4i2rpIBzEhNt%2F%2FDIlkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF%2BQLg%2BNshNk2o6E6CrcAzoqiAImAkEEuJC96g3Yxsnx0QwQllUVxGBqCxi0kFz%2BexSZDQGB4qZYEeuo4XAbM579CbU%2Bt65Wn6P5%2F7J59C7n6x3wRsnM%2BOv43E7iAqDlLYVY5WcyQSkgbfUIKJdMIYnh4Wfdo09rtQkasLEsTr6QiDxNOAw%2BVFbPEg5xcrQK3ZHVKqfQnO3eGSUDqEPq14qHh6TvLFZHgUpLedheBsr%2Bi7R0%2FCLNLctYhw1Kz26zCH8bM106itUqAPMGLpHU0irPGItr3o7RUgv%2B7zIhU80d%2FWkq6yJxPiZrPr2ygAIANkvWxOvQVVmnRTa4Q1hxi4kPs%2BaW%2BLSSUNv30mNaogJjW6qRwBL2XBMsrmprY6UxpUvM2SniSCh11h04Vfzh78K43tlxsM8BcGw8ExBTg%2FS8mUbgmdiIDyxPqGiGT2dkTorBoSuK1HFgDyhMi8EnFGMLpKbn061q9N07vx%2BJXUfIcGIIrepRyETySIzfN29NRo9rjCBDAyayWfHsZOIQV9Qb4atG0nOQvefZcE86Upbugs2j1%2FlGVkY82WceXFofLlq%2BqJH9KKOWLilMujdZTiVIw6iBFHkOu6l5UbKBWuDIs%2B9C3ySJzk9IurJiKOIUPrVqyfBuceTZrMGmMLK%2BwskGOqUBoTzwTVv8c4lZz9pvZUvcaHq3tMvmY%2BkI9Qx72nFGQ8dVnrXb7okFhcZWIFOBAEb5SS1lyvo5Ou38p2ooB6rm6o%2BhKAsn79LZf8Mx85MOTtGqWrwy7IB%2FKnmAWCMtoEuCTcrdLoiTSWQ7AyqjBlQgOfZEtR3%2Br6euxyZgg4dm6H4N0Tcl9T7aPikmmDmMquK2HUkDDsX7ZYi%2FY%2FQhJE9GMMXDLpr9&X-Amz-Signature=5aaa5601cfb7c688442c13748922ab8534576a61f638bc54ef4ceb86aa58f379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

