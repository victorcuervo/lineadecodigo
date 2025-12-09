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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R6D2RB3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRtGAU%2FVRYHpbfR0S%2Fh%2FyxwRc2GyF91YiETV2oP57HwwIhANwNHNxsfslqWrCXCXpoROEEXIshDzIklYMzn0REmQawKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0F1wxU%2Ffgi8oSBgoq3ANwP29ae%2F%2B3q0YyUNcXAMAFl58NnfNvcx19%2BfOCQMWn9LevcVAsRaikZHdTm59s7VMW2AifWwC7027JHGVR1Hml97UwYlhrikCIzMm1raC4yeKmC1fPo4Fiu%2F2rNcVYlU9ltjcE3nMp%2F%2FfAWtITOk%2F7SDz2Zcm694IIwWhBXuMtdmRVtJJy4jAK3eQ7KQEhWCSeKAndJmKX40xUsdTeZ%2F%2FqXhNyjIJ8HLdk6o9RdVREJDEYfhO7cgYK8S%2FEFZ8KF177mMz9nWgf9mj8Tahbo6OHUKOVO8%2FhCEMs%2FRnY82A9drpwW3UNaFrWe5caVz2GD2%2FvaY1ittFRaYBSr3R5l8El0akxbKGeE11u51nTitBTX11IkPGU3Efq7jbzFUEZZ9d%2F6ViDWHtYPX5HKzd1si%2BIi0hzmnPMdVua5OPB5jqMu5ZBojXoGoz1AXNkWA1ymluSVHOC5S9c8ALTuyyP9DXGh5%2B7ViSgJcvdKCApP1glvKdimk%2B8OBtpobSmg2Z%2F7b2%2BSzNlhEpuedPX7x9b7lSfOvty3K6SBYaQNT19V0CdfWVt31uE8wHbBnZDzOOFDXZ%2FI2q80LS3jNLKeC2lXNoMcajk%2B2tvaspb22HnrWr7TH2ddPcIcsIEVfmJvzDzxd%2FJBjqkAYxY%2Fkgaho7wz4Iy%2FKTpX3QPK6r55LBnzpicgRczWYQPDiUBfOdpmcOuXFOoEfFN%2FyeE0lwWyKJUuds80ist4jRC8gxiGcGQO62ZBmwIR2t5IH1QF06GRH%2FVQ0CK3BO13DT6UPoomHkSPA7w8WsUncK2UTXdgQ%2FpKdHlKCktGKdj0TwO%2FmFHGVbWag3Cn8BJep0mMexk586Vn%2Fgtu8LKzqQ1HGek&X-Amz-Signature=701a4954340293e5de54a089ac7782b6669c9df826984aba9b9adc6c006b90d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHZLPRB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvN78tS652ZsYclqy33D40m3yhU35JDHgEXmlpW22ekAiA47mOZRNJJE4uUc6B6yqvN%2BgCh0GM34U34%2FUX3wajhsSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7d9WmfV6HE7DY1d3KtwDhNO%2FYteW%2FWQGIlWfGeB7FIHJJCGf%2F14cc5%2FC4nB%2B47hoAv0gmbxE7Z4fSlQ2KPbNj8pRdtNRId6SHQXYQLFURJiEiZJ3trTrVYNWYH1gdU0OQZB5OREufocH%2Bmtswi0wHqNsylLXnrbGg7k0Sd4QGqbhcfO%2FTNqB5r%2F3S42WyaEFtvwn%2BpjAQ4SQ7W1PgZJfSCHPvHiHRRLkcRmim%2Bj%2BOtP3GKiSOW3zZqV0Zx5BJJJ0VnEIaTdGzda1vVXuACdr1CBgaYX9h82csAKAJe5gmHvismtr7AdJubDKaVAdLUk0s643S6JoWJg41zCk1VTZ8XDriaiE%2B27D3qVebgc6YVMPhH8TIUhdz87ZVe3IYDUkyWCn8tcfRJp8bQXxEnQPMFkmlTUA%2FNDp1MLNS%2BoVOTTmqUuFx2sZ4lAVtjHTI3TwHVzrc%2F5dA%2BF%2BLvDAiYUeO3XDTpDMWkF7pXGN%2F3E%2FgDVelvewywApjO%2F7iD3YZk%2FjX7%2FhOG5fJizvE9%2FDPsuF23Rshx7mqcy6BqQGCZUUv8SfP00Adf%2Fvt9DhKwquawiup2xU1iwZLHKhO5C8mroD%2BYKwcdmQqvBeqJPmou3hjo7pytKSo%2Bg6hPkdI4if7n1rtSpGY80qCeC7S8QwvsTfyQY6pgGjkEUhD1eeVSZQ42vYz%2Bqn6CIDn%2FEH1FtD9BJ3dD3UpqXIpsKdtvmTazmJ0jIaamFnYa2asW7iXurE%2B90L01M%2FqUZmHAqOsXmDna0m8SLAWyGJ6r1wLcnJcKhxb2JBkqPLtelkDMapggtdNmSIy3LLWizP6wzjKSfmBoj7jg3kDu59KTFKK%2B%2FfA5h1fihyfoP9TWlbW3RgF80e%2FTJxFsevlDFdSHWi&X-Amz-Signature=5d3a46021019473cd52af5beb790c3b8d0c80f14f82a745e62cdb8f68527f9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

