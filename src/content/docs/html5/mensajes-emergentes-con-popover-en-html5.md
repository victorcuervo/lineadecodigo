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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CALL7U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmvEfhPySL1Au4Qb%2FGyha8gV%2Fop0Mghkd5%2Bua5g8XxBwIhALqzdMFbRrB%2BA4zq1yRFTDyifo8GxkYKEkAXlbYhnXD4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzN76556FpdU2YD9AMq3AN4OtAQC8SyXpPAZgxewXUnOZz7NfBQ4m4toNwEZrdqRlh4LM1meC389VmcWFg2lGi%2BVku3%2F0WTOx%2Bd%2BsFyi3kzRAymsQkAzul3PiibCaeGK5j5na7hS%2FblWXNHqp9%2Bu7a9jbb1VA%2Fd0H%2BI53ttS5zsDKn1liJ6EnI4PyuVPJ9Bs3Yt3%2BY0wlFhoHcwfYu9egyj%2FH9h9rrDfh%2B7K0w6LjbQWWV%2B8Lr6fcvzDas5ZnwwOkbF78EtexeXAKTfYSo%2BoAl9hn7uS7Kzh1ZGe7vh8gRm7JW8VrDSMArT34ZPJFv0Y%2FJOWRW6xzTt%2FuNO81L%2BH6afySLmp9FIIPpBxA5DvKDSOJ8HYntfuBazMMdz59E2wj%2Bz9iyw7RRtYzx4h2iAK7kW47vud%2BxUorIesp6xLhpX%2FW70vtqxUZeWsUL400R8ismlZoErOD%2FKhde9iXvdW5anvCratuHuRi9TuyF9q3V8UAX0H1MFYffxhYqdXj9hLV2yuQixfNr02xoeM8sIFMxhNxnBxuzEkfiwReaOlBbq5%2F8gYxU7s4fVy1YRdp%2BM9OwdfZsXwQQCTAzDn7EVB0d2mfbD214AUIx4%2FVjYP1rTK8dTvCxRj%2BUWep3G7BaAs9bpyv5I%2FnnRTbRPHjDkqcnJBjqkAcr8yTk7%2Bmh6QvhP71gXhmrxjy7o5AYGYL3Eg7BqlANUvJFyIEEay7HIGcqY0iSEy2aY9hklGqHanWOkOYfD3NZinLO3sGJnZLKw016HmnFgdZ3HX%2Furk8C18e4gyVcpwWt0RhxG3%2FupLTZiCbjfqGoY4MIWg%2BhduL1VAnXZKV1uf866i1WxSBez7NZ2GPhKz9coNRAfpXhaefdMKME%2B58MdJhfM&X-Amz-Signature=98c3f7c5a6ef8f3f3e6457c8f9655556a8759961cda46e58da3c63779c306e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI252Q6W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsYMe6SM4zDrF7rj7NPH5MMYjunuyXaOtiphwm6N3sxAiAH9d2oTasv2uCroczl01EzbZ1CqyzOmDm3FZ5ODMvdmir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMnOCsPigbZy1mVJYhKtwDMH0Xz1oIl0vjiNAHYrlpBVU3t%2BjXBNVGSUF0aFIxQu4Ekym5NJOaPeIQBzEbpjlWSVJ2RT1RWu9Mj2bnyfyoGdm1ZIpxuHDaSN4C3S6EX02gQi%2FB9LOLv7nBRq8mi0JPmwknj6pPwVBF5n%2Bos0%2BmX7gbeBvmzjgLRwg7wBSVX0aVDYvDPnmpHVeAd25748q5flrP5LgNO%2FotBVKsp45gFae3Mh59zI%2BVsgq7WjzW71gw7oIKlvryr%2BlK1BcMAIOTtv8FhdHICf7Aghqn5my2AXSY81BXgWV3wpqHaPdT6lCz8wIf2FUGmeUqavpWVgyAjFFOb60H9cw3URcL1i9EkGa5LmAag%2F%2B6Cib8svlTXT7ieKARaa2flvgKkQsY44BlzJQ5DQ5SLm0x7e65HAm0T9X%2BISJibZ%2F4Kq8pNs4RgfYNPoU1T1fmRBO02%2FvjLyxIBVU8lM7MnTYHSE%2FnepLayMckIu1fDxeoAxgB3KCaIsIjNr8wUiSgEn%2Fo3w1dCpCWI1ZwGLIuvhbJh2FAINYUIX4NAOJccS9CNlTrQeA5IKwdyHvN3PtfiKVTCfoX%2Fp73rCAL7EJG5H%2Bc4q1qmUjhlpLzGXkteGToPldH8MyY%2Fg18GWtDlxA%2FVk5BDQowyrLJyQY6pgFPPtOupFgneSe69wLmvIg7QDsMNH87LAC%2ByC6K2nDkIyn90HPNQKiIq%2Fy9Dj9E69f%2B8CC0wss9lxYki1h6XIWO3o%2FRKDnZhhd%2F8iEQQXtwKt7IYgzbA5STyAR9gXVI3t3cZnX4w8qTgbn0GcDRjMFKf1n1GTdmboTRMY5Dfu2TLcueiczXtnxILcuyXhk6Xw9JVMsrenX1b8RNg9rQELOl4QDmuLDC&X-Amz-Signature=71ed21be0b9f7312c8013979a5ff4c358638f99cc26d60c8cb2bd6fe302b1fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

