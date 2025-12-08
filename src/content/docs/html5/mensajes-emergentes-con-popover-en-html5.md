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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4WQ5B2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIxlOTH8g9VDARCk41AyC9Px5%2FRhMYce4EJ%2FUMM1FqlgIhAOT%2FBCwL62OLqA1E6awtfYYHpgRk1XFbt4KHnMtSWNfUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZSPqvi7dvR76pfngq3AOAkmF0epxYSe2rmwZwri4XJd12RdyRi%2BDPZYjDCXIBZtfUzqBqZvrwh4CUoZmmDl1u7GuL88y9XrBsrGzfC4zKm5%2FsXFDhbsbuT%2Bi2HAE5zE9Va27ZOZKBUDqtHOKIvFWPMMrd9Z4SrXjoJL4VJUuTiLeghEWJOSTl8ajH0Mge%2FQsgrV82ecJYyYa8gNtbSJkU3qkQlzVszZMMNxNJudiyKy27Wzi3WcdBbWLInjsg7SxkNbPbMzJ6SkFqDFInQkJ1uFkybc95HbGx71m8rHeGbaYKk3g%2FmqVbs%2FgcVhPOC4eyYApdkZxN4n7hawrCT5Cd4izWV2CKB%2BLjFnw95239MkBjLD%2By9l4JNC4ukuC%2BKWreOwIu2wqFqeXNILUIwdvzsmDf2cmFrkefx6ERbMcvWF9nAJeBMV4CphSRMbLpU6cTvUhFDEqVq1tw2%2FcY9epY63QXHZCJMavWd%2FPf%2BXDeflHQVd6ttvb5KugddeKyNoc9%2Byz4e5ssOxsGXGve9Oq1IuTITqxt9ZV2SXw705SKvhrDt1QALE2FW3NngFva2XJVgCXr1mhgjaivnLn4ngwHD7NOQ973%2FuSwDuZa6LJxM1Oij2SvaZLGkQSU5RArGccsAU%2FL35dU4MUdxTCHtNnJBjqkAbDap0MSsGkU%2BrxuAGp489aKBUZx9ViNznNA3DpUKMX2kGI%2F%2FsnT9uNDPhadRdj3104gjJPQo0aB9qHneg%2F%2FDdZ%2BbKDpp%2FPZfUzVq3FN%2BgORmMdnFH2WUegmrigkZOflX0aAy2D8B4zLrpZrSu5wKSRMG%2FWF9deGzsC3kv%2FgvAgvJU0fVJFV5myzOCMrwEqzeblbw%2Fw93iAhPqiZRErRNbI0yfRe&X-Amz-Signature=0e57123987e71405c7eebdba1b77d1e49ed271272728835b7044781950d03bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYHFH3ES%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKJSVpYEFwZ%2BF9vxN%2FJFj1I4niV8HLjbQXjnKqMMBeDAiBRfNWO3ThUFAmu6%2Bz2xFalasfR1wBShN2Z1mYO0qrugyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQ6Q4ejjs24ryIGbKtwDGzQB87I1RLL9OhL%2FHwCds2bIEAsK4YYwEZtv9JXCrSJ97xAdSA%2BZY3PfDN7KnBn7vDuFQXHIXOu6xuVFz7oG7rNlxj3vcPbNJZjXOiHx%2BXlOGCMQJorof4MhyYhok7qodJ0NNVrpsq1fjhP7RMYYS0vyrgIAKCnoMwyNZbzaa9radF%2FZGtNuqBZ0UwUgwG1NShbHRUnsh22Yi9QCp6DWbOWqI3pfB%2Focwt4rt5UxX5s%2FEBuAtel%2BFIkpApOUHBNZwkSuuzL5cgFKZm0j1fNPGMrDVi5F0%2B7libYbPJcyAm6kdrP53V8OXCV5w%2BL%2F7CGXoCx%2BvtVFZZP5hSfVj7mV9Lw%2BK3w9vPcMXqA%2BsMESWHlRfi7fYFc1rZfFh9EwxtM6jG5OcNrhSZmAI13akr01i0PAD9v1%2FSkWShWwnMjzSZT0MBfxD74Q58uR6LPdNMQyhkrKpum0meuNP%2BDp%2BWoqFbGzElZmIVZ6zzMjkwdg3uDxZo%2Fz3cd%2FNxUWXIMyPns1KFne1sCcN169D4pkHk9bOF9EqVnzWOKigfnJL9JU8On2pIjPIwsW7eBqKzFJ%2B%2BMJ7jXsLZ7zbigQUXxGkIisMZFhaPMCACYMLXX4C23HR14z%2FS1pqih26raXENAwvrTZyQY6pgHacR%2BOAVdeqTwesDnAvObjlco8S%2FrtfY76LYVZy6vHakhqGvk4yzX9zUltTd0MiOc9%2F1J6gEx9JKnCGvdLl7CSjnx3H2zVUoICcS0mBnBDCrKl%2B%2BfzSQMvpbXh7fwtgv37NK5Oa9sbrripbpglF477i4VxAAFurQ6JII1dsg822bjfpgKfZcoenOJSrsFMvdLRzyWEQk3LqSgX%2BsMKMsfZ0HUAiNgE&X-Amz-Signature=8a5816db96e633836cf1bb46a7ca630e5dc6aa10630dec2e9c504749104d6d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

