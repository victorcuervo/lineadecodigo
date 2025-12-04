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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4RE72L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCj1kBEpSjFmgi3okYB76H11sHk8CO4Wx1vfx%2B%2FbUxV2gIhAJprAlElF6r829rIkeGL7OavKxu2vMWmu5oY0cz8p%2BGXKv8DCEAQABoMNjM3NDIzMTgzODA1Igz4Suts%2BqVVmFpdcjoq3AOTD5BAiReQgemJYnyW%2BJ1IklE5xW1OFO%2FoIViiNj699dNWwbMqNFpWr98U4NzSxZmrl28Cka4S7Dvlvkk6Y10s4MtVELFSncwUXGShUIcuYN5NIATPpj5wfzNsTc8Ufm2tr6TnLiPcfohTOhagpKoXqTMmbb1v58fhr2bpGs5g%2FET8nMoOOX311bpfUULYsN1GIWGQeMn5CQMRcM%2BrCst42AprUidH%2BH1C80b1AY3YeVt7BdrLsgZWL3F1WU0JTv87igsJNW11RuspnIorlrtANkWcAo1LZF6hKXn35q9UGqDE2xNLLpk1mCRttqFx3EBNfnDkK7DpI%2BqJrJPTCdDlPaGVfvLiZf5Q2V%2BIiEmK2M5WPlxvLwEhsIjuvb8B9qgGiH9jtCbd5qWd7ZoZEejfRqUoDbQuPZs1KTPLafHgAIyXPySD4OIQsjDgkHYa%2FBF08eq%2FeuQZZwV4FMbA8%2Br88YksNwiP60vEELonzButDIZ%2FgYFnA%2BvINrDRv3XJDXnDQ87r4MB9SweMa2FPPVqMoAye%2FFCTUdqMXyfg1C48APZUzKMwZ7JAolhZV4T6U2Ek6xX%2FaOuQbKbW1She50q5kUJO4NK9SIvukMjKMbidHGb5O5DEAW3vx7mAwDCJ6cTJBjqkATvKnejDcz8PnVZsLm1f459ZT0GzMiMxqSYr6FXcpDUyaKDDe2LxSWRB%2BZkLAwRKFOJ%2BaMPdGTW7YP27S7DwZR0qUBs8NA2XHitAlKhKDPOWpOKe01kHjB8J%2FiEkS%2BITDN0U9fOBfVMZgY4QuThIAv6kSdSu8N4bCbjppP79N1jAT2b7vT%2Bm6UQhih3caUzKmnzx3RGh6XSeH9jgAjtKnnvNwYhX&X-Amz-Signature=3fd675b0cfa3a53c0248f8d54888e77c1c1dd67d22da414c6fc3f855189d02fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6R2AIYH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEALe30nir%2F4pMoZz67zCT%2F%2FO%2B6d058BQEE8FJF9rHIEAiAqGc%2B7abvnO3AvYQJR0lmpALly6%2FvRiElmKg2iooCYTCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMA61hzn9PSgykUFoMKtwDA%2FSoweK67cw3pMwbykl4%2Bp45SV3mpFrPkJ89D9x4z7PHSTrXC6%2BJCoprU9kIvLZDBYuFeM3lY6cbPY%2FH2h8BYH9jHCkHmC6ShpRyeyxR0nbLfqtEbXsjwhMU%2FOrM4GgkZLakx96SoRsDQWIFLDtbdCzHgpkfG3JG%2BnAoHnUINyyMUktbnphorL5YFBKrf36qXQSQqp4cenlohXPpCgFY%2FEjxbtKBIsmpPuyNRE5K6PAbmWSvMV37BubBHeFDTEsJFiAfzfc0UiPGJFj8IHura4PRgx115nxp7VIS%2F%2FZJWgAwIjjKzI2SM6%2F2Y8U81LkgtV4KovBsViD2t92LVEzt5VIjZSV6iH6N0IZCbKG%2B9jdBzRPY49tgDiM2FqyfF3WPKuP9txU4yy2CBmw%2FVkXivfW4nPCZxe19A3mXWJbnrkhBKKGOq%2FasrLA5x2QC2B3grzO6oz4ff4Juem9kNlVGu9p43qBtmhsewJXC1BpD5VWKaqH5SxhubYopK%2BNeOZbMPh0VXMPbjsmVOY%2BxsqqyTAktq5eAfEpTszMiIxvpYvNOICEUHuBmxmWBr3QUizT7OHeK0f5LcYf%2BV2gmzd3TFbuCRGc6rWJLDKZ9UIZR%2F53F1Q4audZ5wnakX3owgOnEyQY6pgEVHiTMYhSSOpFoidj6FaZ9b2dW1WPNi9r0qtL42YNmriA0HN1BOk%2FifcjHWAibcz4Y46kbjGiC1xP%2B5Dp5BPCc3Wy29N8dKhMJf6VA53Tb1%2FL5eOGyTeIrNnI0NZiWkSiNLqR0HpohLCaIaEuoc%2FD9yUtCaObUDbozHoti6J%2FXCIt0BTTeUQpX0SlqW%2BBxhACRB4ZCNVPmDx%2F9VX5Sk%2BtqW6RmWgnw&X-Amz-Signature=fbfd20e12f7c4539b8bf5e7a681ed4111f8816538fd46ad0c2d274788ba76d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

