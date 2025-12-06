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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX6RFYGR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG2YDS3MiUFz6KdFPT2rDCwOYMA9a62purWVSI8L9ViAiBXaqJE7ZwqB8Woeo7ijJu8Faff6WJ7bEi9Z1wy8Jn%2BGSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMR7HGdMAoG8Mmkf%2FoKtwD3y0dqxoXydt%2BZuLbDKslC%2BAv7hs558qD2JNVJFE996vR8UsYSSWoEVuejU853nIsneWliuWqsuI7zP9qTCpdcg5Xoo5pR%2Bw2eUtf%2FpJTF79OEwcb2pT%2BCQekTE19MIjV76jt3JEdgCR%2BDuy%2Bf%2FAJBVOJ3uOdqgiySMPfBNBxBUELnJlxp9aahiefZ%2BCYgdDl5es2v4Yl2%2BOSapKXrBdy0vy%2FxoYfx8AmxFZPZg%2F3igCXHe%2Fx28zmh53r35KwXvJS50QGUcmiSDmoGMPNTSoM4QQxz7TmKvThyyT3TKeSw0K5G8mzR5azzYYceIsFbe%2F%2FqrQmrmQE68Y%2F7rOWGN8%2BF0DcMnnF6z2nD6lAQ5N%2BN4HGHzTXPjAbi%2BWkK9Qr7wAv0Az0fL7lsky1kTyqWRyWUSvuX0Gv0a6c12C%2ByEYBN%2FUf6BES8XAzLUNW4qpUgYz4Vtw4vh740fQboSxKy0nF3TKZlV73%2Bq%2BhAPdcjeEVmvKxha9G7MeH%2FXyiwu3H77iV%2BaAPEzs2UFWZhEzArLMLB%2FpgoHV7ScvAxnyyTO36TLLCEP9IN%2BBEW%2BjldIWercI%2FFPixO54GKUEGMjcuT%2BhpVUXiV%2Bi0d3PCXb9qEPNC9dgb7ndJupR9k3IrIh8w97zPyQY6pgFW1MzIzkw1VvR6IO%2BaYPrQemflEyLE0lYb9IvKSKWdaVmW4%2FzXegbeSRpDVimxrOLEH2qMdgwrkCqKd2y%2FmKv96zGI6hgE5PrE4medP2Z%2B6M0GWtirF8d3ts5%2FKClxqxxtZZS4UmC9nzOevd%2B0FbxIVAL8zxNUiK6%2FAbdv5wncjl7KdTvbIVTn859lQAGh3QceBap5%2Bux%2Fg1nuAx%2FiGbtD5pKSht62&X-Amz-Signature=cf1e651d5e8fd6f121b3757d5f185e8a5699d401d6ffb093b807da3bfdf6d966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCE57WO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3wEN0nauOLx9y4NU0N%2BCBxyNlpQxqxB%2BAM8iuDBgfAIgNx2IBiXmDuuMB4UoPDnO345EO4n5YY4Nv%2FlIaHdSvtgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDH3s2OnRDBZbRIgMLCrcA312ZJ1W1%2FZfLDSy95nfekhBFZ3nebXs0Aut2IiZOtzUqy5SjRwACDI%2F1tcXxLwGAr83UHq7Zm%2BvCP0s6prmz6ZXBl2zMXossgu3pyF1k5SKMCurYh6dTYcB9YeBzVL3gowSuiZb9jnQwF6lmCpB81PGEkh%2BawkaXhvWRHXe%2B%2Ba0r%2FL5QY4mIbs%2BMp6lt%2FOangn1RTUGLsJP8I4CITd8v27MF5ReqsNMG4OdN76kQOlIKMlbbVvvmeGCuV5aOwcIoZeuF09ljGZWhDt4rl%2B8cyFNK8KdaKPqQeo0Tb059pFFsv0dOlXQjjmMSWM%2BC5%2FWE1wJeIibQ%2B00xcuJMtt8iTIja8c4dIdfZAGOTxp0Z8ioC%2Bxx9ua7Qz0A8R583McuCH0uXAo2WyvMur%2BVP5g5RR%2FXRBmBEc5JuyaxUHX9yoZa6179T0esij6Wy%2FBnPh%2FgDv%2FsRnmErR72Ng50PTmmdHyJupkLFxX3Un32neLxEN4nymsjk85dY7FCNrroP5Ey1uY%2Fu40%2Fpu3ArZ9rR%2B3tIxhLAP%2FW4EavxIh7xArssmq%2BqGxURuR1nKYOTZ5QBKuqqcKbahHntC3YK48MPZW8AuVGm8f7Dhq1rLHVYGrbhwoejmRNsvDuZZuXIpbyML28z8kGOqUBWZ4UuwjaSf64DU3rz7BnWREslGUswi6KqQVTSGzgOJKQ%2FiSjffHhy1E57QyxUJQIFRPBclWGgKVykbnHK0GBHQu2YGa%2BtSrVtdxniXajxDIwj8z3U1ZDz5xLluCTTG2jTsf3DAEyo3L3Aa61VGx2clubOPjVmtkzFL%2FG65EhEniUISK0BhsNS2l5J%2FhEbmwD9rbtR2%2F7bZcySG2qCeW59yH7dTrz&X-Amz-Signature=a762eb9934fc57fc7c5053e0548f2fa011a9670df58c09e70233b4237a53c3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

