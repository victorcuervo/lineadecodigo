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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTTD2F2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ou4edvzFyOgC1wc%2F%2BjT6qua9o3niu3e%2Fg2%2B3N9qziAiBK%2B5kGmm8AHu0g3CDfr353eCWlyvJiwb1wHlmn2yi9PCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMZcdj6dCF3LVZx9TCKtwDhOppIBWuPg99IG%2FjDZAzPQumtnzyDUkE3laSIoGggz7i67QfvSpYCppbz1hwlDMMSjVFRZjT%2BIXNMasDbfv0KsHE%2FgTtVE8XNlbGJXiioaLIxQYbOGWnvQQxuFInn1yytPd7vO3Px6Hjzgxs2Ufj%2BDfH9tCbRwwgNxKmPQG6GzzzzImMyPlnW5C1sRikhgeHYJiomhK37aM7bSlHjXjpJU5dWbYfVuEaN0UOnsELpsjZ68wxlGjjKnt9bYUNBM3xyg5ImI8OQ22X5lK1%2FNJn7Oxoi%2BrRZ1jzmYELJ64s1x0%2FYmjQoo6z0rqPLXfeYij4%2Bi2g6tdD5xllCdpLib%2Bdc%2Bow5GzUSdKq%2FU9IKQ2LRg%2F3YfgWnD4DwMCm6QETFm%2FTVY%2BzHn8qM%2BTLP2HVilJdXnEihjgIFqTeYV9JFT8dwPk1%2BiFlEwivIk14alaSVQWrUaoaeItnlK7F4ULDk0RuZnGUJ6kwdzF6awrvVkxWRmZukX2zvFXLzvDRhMSzzcCns%2F5XKmcK9kK4piKzIIt0bOrwg5dRVjov4jfK0ly%2B7aq0%2BLSgQ2UxBRpWVguzCsNJIbMzb2FXcO5u6Pc0Fz9gfb8U0PQ5BuzH065VRp9JxOpsmSOnSxX9CtmkTUcw6anJyQY6pgHuymplv1i4Pyvu2G3RV2sRY9L0ewZdZMv0Np65nF6zeHDOByxUDYilQXeLM6rvTZOcHhg5WCyWRZCIGShdXWgnosgsBvYq76pLPnFnEwdenDc4YUzw%2FM4yHsoR4S%2ByvZyhtoKusdndcHIx1NuVDrog7gByCNFnTstiGwgcClTDUT5C50HGZNizuLR4%2FNY6RRYonSTaXWtNkTcFWUxcvYnORpY3mOIz&X-Amz-Signature=8937a5383fa61ef5fbcf77d6484147275777be875351d928c0d8b1b9373703da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADDS5HK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYTg%2Fgicm%2B9CjeoolHWidYmksz7mDaraoy5WOn5AV8zwIhANwLlPN%2F7wkcYaXEotGXrtY115gC0RnbUFSgbJFGv%2FrsKv8DCFUQABoMNjM3NDIzMTgzODA1IgxLaAsAwdCRiYtxf0wq3AOzn7UmMoCDLmgiEee3DCtzzcAmfoOO%2F1JmCk0u4sQMH7iqYH%2BFtCK7Jbr4XlXF0Q6VnSVSdlRvfZ3EPDsNvQN3j%2FrvGLM1auZ6q2sAdijaUlP5oDlMg6pOgh3Qc6%2FwakRM6g%2BHkuP%2Frx4eiWjFAqMz1veW3C0HwqpwhgzaMP2mOX16yQu%2B8Zlp29xBVEW4%2FuOpaJGnWuoh26inf6arbsiYwcK028LNY1z6cDOFprSYicl%2FcYczd5wdnjwJvJ6Zq564M3nRE5ogmUQqZtD38GQSi1%2BBLU2SOjAXj%2Foe2ybJTj5b35yri2BlbqGHiN1NQWh8REJscDprMamMFfoEEUn%2BgRj%2FD%2F2VRoBU6rB%2BJ9TbtvPVe26F1fg5J2RKhS8Iwclnmx0JQeZzpbGA5wYjnbdy%2Fl4pownT8bF5SZSKao06%2BuWpx0If6q2BncUngbjJJqVITr8hht4XNs1Ur4%2BqQFD3%2FEuI5O3cQCgDiQbAycgsY9CPKxcyr9q%2Bo356UhEmLZgo5PCKsZak4Yp49GXAmCd83ttask72BweELugSOH5vH2dvF%2FRSlyIceH9H4btHtV05QW9K8Ep3ITM1VJxQC1wTBU1UzjvM4rxhapklkjxRJqeXHJ6fJ4ps94d0djCLscnJBjqkAWqFWAQ%2FhK15zRBz7mIDdLeCJn74cXBlwd5iGRx9Z77ssA%2BqnEr%2B4p5VOmPh6dFxxktFID7v%2BbmN%2BrikX7IdrwcfqzXuwiPofLx%2B%2Bvk7OwgNXIH9k%2Fg7F%2FuUFUihG2zyIa8%2BP1B11h%2BFI%2BL%2BBnwEzd%2B3A8XY8VgcEAsz13kjCqAx6iffyO1D7bYv0zRFTq85Bi0hxXhR9UhPQxxacuMPgbmoPonf&X-Amz-Signature=5af0f32e2293627424ab5cb6aeac7f3825ef4a3b3b836dba2bcfcc9a47941577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

