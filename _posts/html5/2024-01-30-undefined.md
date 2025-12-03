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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WM62T43%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCLM%2Fd9PlYiC01hKWCz7V7iGEPkfRn027PuY7HrXFE9wAIgSvPSWC1V1oxnj2irehEaz6SzPiZ3Q%2BhjLGjmWGgJmnMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEj2nMbNukS4Jt1L3SrcAxXy2qfzbL0CVImoiYy2V5NU6lI1780zla8b9gOy8xGBzc9TJyoWeNLrHZbGsK%2B8FWXLov0gamnNCv0HGtoPJ2rtUjJE31ftEy8HyeK372TJAn7FB2tTtCB33zBH09Di9t1w1YBbvROcPlITw%2BcC6otyQgweK1A7clIpaoFTdX%2FJGEt8GapgwAth9WDNd1AGWcNe4fPnc4JeuUXq%2FrWJplh5fx3JnXTi9AJN4WX%2F6pfRT0P0aWo48KaR7BemP4UOOt%2B5ab4zncMefKSGGbaN4%2FPPEfQD1xDe3CBfW7h9DGV0pa8vAqVQ4ejvthtD7GHOSqQtNrIKj4F3z6qjbxSNprFNp1588RRins0YxBfyK4mjKMQEi3iLO%2FN9jXy%2BPATLHpFRcUBwfmsgEIT5PPWSLguo6gXQtsFz4VVVc7GjZxnZl2amk2oIrWdE6KAHohUHEJ1PcE%2FtSIhBFCZW4Mc1th2sUSu8L4tv3Xhgjpy5cmodZ3rohmBzHCH1kq19zL33euVuVkBORplOXFHSw9lZNN6zODOAHXvf2B8QFHjY9Qp1xGUXlXzLnpIVjPdMAcxlsxPYs79U4nAzb1dRQLBuWyyP3CCg7l15PY%2FkCDRUD6W3kzC9WOyjSBz908wVMKzpwMkGOqUBepH73yVkSdinHy8rFE5NDlpt1cn0QlnmJahWckooyg5h7BFIbw39JylUDYOG28kmj591ICX53mYylRSFzoLvi95vvAtifgFhmdvhLauawK%2F5pUnXtk5%2Bds7fT6Yy70pgGMnoEwSLSOV67sz3Orxw9mW9KmKzHvHaNoasz9wkpcvD9fzYonE39XZ3WTAtzMxxwsIRSIkZ5d%2Bb%2BXFJ405jNl8w%2BezS&X-Amz-Signature=704c70f88f6393cdeddaa487b6d12b66420e0f80591f1d3cb5f864f47f0f9701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5JHS7M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCIAwDgx4EXyzlQ8dI74nd%2BwNCMkbT%2BaIWNieTDUkEnKQIhAPFtPwliBfG3V0sxeEBRrUneS5GG7Fowb3MtoWKYBzT5Kv8DCC4QABoMNjM3NDIzMTgzODA1Igzw%2F4ooy9P%2FMbdhBkYq3APC%2BOw0m%2BlVq%2Bd8oKKwoYIuiACa59omvnWtDaTlW7XmZzlbNi0xl%2FmgPGizvAECf4ayCDh24Y8frGEqednKuBaRfdK8eYI3lWjHmSawL6EI%2FAkpCzvdMkzMSWGuwgDwQUw%2FAE0XFwXCTYxBlu33cGJw5eztWrBGt4KfJHS07ez0bB3UtmPVHtR0Z2kB0ITciPHuxezVbjJLFLyFdKepW%2BDfZLQe8nH0sbS5DKL7%2F6dGK5IgbzExxutY0NFa3NTnsxULXUU1R4bsUsyYjnvJrAUtRW0bpLUn0NOJVfo3h%2FPEeu2KoOjRZAG0%2FPhApOgqi%2FRfhRrXP0PfCBwwpkjzPmsNLnIb9b%2Fb624ifHMafkh7LrXybO4PXf1E31sMxZ8gQ6n0tBlIO%2FBL9nrkLl%2F%2F8N5Jxt8bDNjoQJXR2wgY%2BzPmHng5rGLJh%2BOFq422WgeC9l4VMShUqUJ1nzO%2FC8SXlwM66fTh3mDTV27j3AcSsmVv2HAjLrusxIEA5%2F85A85taqBIHL5ScScDtSo20bzdhBomaEfx1sUkpFJpnYnhPKFtDXrzVICpm%2BHvwRYzUfHDl5Or5hkS7ShOpdhv9Ipo0cWHL77y80idrCSqoyOjRqBXfgYn8r6SxXJ5ZErFiTDt6cDJBjqkAaAsJi6EbGfFLjGO6b%2Fn00mnDYZxcu1odsL193QCqFcb8Yk87cgl%2BVSVEpUQ8L7xBlbPrXPA8R4NatALPmGeX2E2Y26rH9o88hBCY%2BD8dG4JgkwpygpC2%2F4%2BFHoZG89%2BL65CAbqa2EKRlgRrJgNi32s2JbxTy4RN1PadoLTNVtxcO6cjS%2FdBBf6VWNhtHqlcKfybqSiP4M%2FRrY4czVQfyBYghjiO&X-Amz-Signature=f25b18f4b8ded63e5386023bc7fe7fea30f1124b4ec083478d6826cf996a0091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

