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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7RAL35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXQ24exH424kP%2F9ezfv3C%2FaibGNqFKXerBnDHdaoZioAiBvXThN9z9JlnWCleKo3%2Fq79b7oz%2FqxA0nykhpNdzf7jCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyfhqGL9wMOVHenjFKtwDpoM7kNZZQavVhLAD9AEZnp7Qf5rZja%2FWQotRml5t2e4h%2BXH%2BRauerhWa67BkQSmeQqd9sjxaGuVCmC5XT97O85EhGx9rk2DRxkBEL2ft9%2FVskxWcdPdK1TEHU1fjgO3X%2FR1EXXtNB7HuXyAPrU1OzPME2UeVc4YslfMEGrB9wsVr6vswGr0%2BeS5Jc8tNR%2BHx%2F4V%2F52vsIn0UUfFlJVwp74jDOYqWjW8FiQGUD6qag8v%2Bh%2BOdqjpU4F8WbSo2ONmrxzkqTLw2VsNn%2B1pBTohjkaR3xwcT7lbpoMFy7d2N1PC2JzoxHfecm%2FvygTD58IrCSJXqPrRkgxIqpAhM%2FkuFC0E5E9VDJBPv%2FoaY7ozy8gjy4I%2F%2B4CzKfDV3eFIlpRnRWqxtfwYvvekN%2BVXs3XduoTidEFqQTn%2FIbW4BxKcmoPjk%2B9f%2BAOCIFnUUth6X7SxktNMfxtv5ytYNeguIhz17vZB%2Bf7qnW%2BvX9BY1VmALKP%2FDqS47fizrJKH1HX%2BfMiK1a3sbSIESWaajm456KA3yulOLE%2BrJ68b%2BUxu0DSiYFvQMXtqaUAwcS7SBmSH%2FgSMGQatSeFTFXcqSHcFc8wvkAxZEk8dp%2Fh%2FNZz%2FbubVXbH5y3y%2FfwtHe8HzCpGEwxNPSyQY6pgG4oYYNcmOFngqHeIT8XFsPrCtlE1Sa9qkAZPKi7%2F1vPa4K8YlUDi%2B3wuGDsAv52AeMHCC52Bi3L24l6wbyoiAAWTjVArFPJMG2d8qi8F0Kbwn0cz4lRBriQoDeGaoiK22%2FwLXTUEJZaqjVrvKdz8YYFGRV%2FTw47bX9MzJUGuzQ7sudidnRuYamZTtsXYa7pQc9oC5NHYjXuMa7Cu4%2F6eS5iS3Jb6ZQ&X-Amz-Signature=fc0da3646715a7368c61460089838932ad1e5671c8d82eb83f9d199d619997cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCUPBIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNk4Pf%2B%2FsvajmRrcZbtmP8NzFKv8gf2VexdQpBV5A6uAIhAKAIz3CLy2HHHJVFHPerA6PTxFiNgc6IRdUssUrlY%2BWWKv8DCH8QABoMNjM3NDIzMTgzODA1Igy0ckLU2payMiq4UoQq3AOVg8LpDrhPOQtVkM0QydY9agd0GN6GnEE%2BsaF9dQD%2B489AaieQDeQfakG4xzCYGcymFdAOwMkspaH0uNNIL8Z5IlH%2B1K03jfC2E%2FDdBnk2kBQGhB4qYQU9CWuCTyJD12bh9QfLnZSwDde8YA6oQ4zlcbPMSb3YpWT2SZ%2BnwYyAoAvcnhK2TWtDMME%2FS4iC9yOcyW32PiPqq7Ybn59Spxwjm8sA4f9kjcCBn%2Bp5rJAN5JUQ38R7YRfKwV%2Bn9PEuBhtemdozQ%2Fv0R0%2FqIHOQX8aXtqdpXij7iI%2F3ADBqGiitk%2BH5uU1JCNVCFjpfOyV0dvCXmpqpRanhBvMxhmLdzWysGUy%2BXYb26z20YDH1df%2BWGrHZlho8K534aKW8jGYUFZgg%2FzCB5Gc1RtJVkWxCCTEtgks9O7NL8CltWac4bgl9WRln0s%2FmxwO99fGuk6BRypMMg7wQd4jqDOSZG1nIgf24zUeeiRs7uBRZhDVHYqNsXFQXvXUUir6iWDT7vS8%2B%2FrDbq0oKYibMGDt5uyKsUlIZrnDEiyXKwNXuK0BQ9k2H5Nkj7EBSrD%2BZT2MeeierD82C9sTQz7Rt0lZroamQbtSGS6M568OAOJ4OcndQMeO2EPUOaW2E%2Bl%2B4%2FH7BBTCs1NLJBjqkAUeszYnSoWcpefeI4C%2BdNka46SxXmkGfeY4wvNb9JmKtpNetvgQxpIGR%2FB63JqmmSxO9J%2FrpQ%2FqeUh5fDbVQ31FcONRljx0%2FaCvUGX%2Bto4QqcRgQVhpcRfhMhuITUXT1kG6eeX6Y2HCEn%2Fr0oFa7zkYD%2FoZ7UJpWWW%2BHvE13jIcsrwTVniKL0ONhO%2BC59ULyM1vHbogRrBXDs73Lm66e%2FCKtYhqT&X-Amz-Signature=a229656c6ea7f9c174c1bdbde53006dde642b3b68ef56bc3f6fd85eebff2aee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

