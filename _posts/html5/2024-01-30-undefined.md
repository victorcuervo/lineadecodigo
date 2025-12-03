---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHLY6DZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDuiyFIrNgcJiHgpn0gOCw06wH1Z3BkwMd%2BICLgF7fXTAiEA5aGfA3SHxagUi94%2FnqlUh484ZdkfSG%2Bnf%2Bf8fx%2B4LScq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDM5P%2Flrlsxl8t4qvyrcAxgx3vfO5PQEl7cvYUmvmP1%2FXmIOTauqp3HYjLjxtqA6mqADCfFQ09NrlWWJ6G81GImDHbGCod%2FTIxqyuFVsSCPMks%2FX1J4rB0TZiAVgEMSqH9XF%2FYNznbIqnLsrrU77H9M%2F7sUvohnz2DINVuUWHwkNQ66Y1cBI11R5BFAJtVSM5DjuC3bCkMroLfSmECyHXX6x6TgWRceLdNCUrawL1o4cBAoRIyejhYgIFOJuFO9gt8CGfKtAKySZbH3Oulnm7EPrdJczSHvkEd%2B0HJBnPbayDbmxpqNKnfUaoBqOQjMlXesVGxYt6px%2FI1aqLuUhB%2FoyHFcxfrU8VRdgAQs4U0xfyrcGKysa%2BORupJHpbmROrkuJvxIL3R96Vjf1PFKXMJ9za%2Ffm3uYJJhdLKO%2FHemmIkNKQU1R1JnvtSS3pisZBNwvrB32rWgA6VKa4uL6d6PaufRLNEGD%2F%2FZT1YnlPb7p6S6bY7O7G9ZfPwQbecHXbJdENZe4vrqdkTPGbcUTjFIpChnKAKFmeZagxJhf3ga6oKbcVfW1WMO2j%2FjMNvtt9jf30fPBSv2FRv5bvIKVuQcjGMgQkUz8zd7AbzrV374jCWVYZs0hGxV6QwW4DFASrh2YcFXPU%2BPtbOtNZMMmmwckGOqUBIGt6412NE8jujDKJ%2FBMgC8rcGDc%2FrPOnpawMZuKqucS3inrJ78wRh61y%2B%2Bg%2B2%2F4DEKzev2J4uAf4oUB85z%2B6QV%2F7beAvRBJNLRs0E6IbmfBB8ALB6evjyFCEXY6SC7BAH1dW9bcDsdwBdzQ5wP60fycW97Kc48GwWfTAbOH3gi5jH25TG5hPdVpFQWNSUxUt%2Fo1IZmVvxWdfL5s8Zl3OSOLJxgWl&X-Amz-Signature=9ca14d581dbbf8c96d5f84b720e0a0a58382ee1827091bf1112d466f891cc8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XDPUJ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICvK1u6SmJxz5%2FGf1OlMy5AH1KO%2F1U8Ct5SNJX50kE8sAiEAijfIDQajwTdR%2Bn5Vjnkkn9m%2BryAw6WscVpoeJjdql3Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDK%2FAHZqFYM5LxCZm7CrcA9yy05H8x1Etp9XdupbDmfPZTjfBZHLRKojRw5GXV9nXB5f3CACdajB%2BMLQUWX1sOjLBTn8dPO9u4BHZvO%2FU1DlhYd4iPa%2Fq4%2BV1ndZMghxIqJNqqEc6hlMddT7cgST0Y134T%2BnKHgyEOEeScb86T5qNezMuRij8j%2FHYd6JO4%2FDM%2BIkcFo%2FCPpmMePINJ0FjmrGEl3x8DJs6LDY5DaouLy%2Fsco2xTq%2Bzr9auXfM9E1r32c5I99%2BGbvHsaa7%2BQETTCjaS7%2FArpU02qZlG%2BUsFcERmXCiG9G%2BXpL67V8foIuedojJl3T2GYkV9jdhFg5H0h5wMJD5KlcGhkXcit3AG%2FPhHqfRsOsrz264yxP13KoulYhFn%2FVsTsD%2BBfba2o1pNIAX4g3%2FTUrX8S8OjWFM01qqNvnyBuCErMwOn%2BiBEB6UW3WmSzeJj2NUHpVTS1RPQJBmiMDt3qbWmck1W%2B3fifbuRFSQ6If7YZfg7wSfkJx4f5Bqtc8yQmzAj7lbe4TOx6Ouw0TI4cL6wKD0YCJfS53FwOm3W874FnfvPRd2b640rh9FaYPIZNm64rFp%2BhALQim3%2B5zJJf%2FJQuxqHAxTuGx6dLsPgTngpbZGSv2u2nHFhPFQ%2F9xZD5oYxo2TfMKynwckGOqUBv7r4iCgtub1rxngmyxFlEloJAOWUjPu5u9aAD9%2BoA9%2Bs4qJ%2FHsnf3HSfNf3Fl9u%2BkznA2FWdLzeeIiRvxVBs%2BzenQjh5JVCcTKlCXsU9Dm5oBE%2B8BZinw5VlnZxkpUOu3lafr%2Br5xnJzj7tbPTG9wDoiCdHLiypi6IrOBDJ1StjJ1Al7AILqjC%2FfSGIYnGwZ2%2BX3eFKAKZ3JS4sSMPrniN8GnHJe&X-Amz-Signature=0f185b071c08ae512c5809c08e254468e5bb19e4afc6d7e90a852e5746d6f480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

