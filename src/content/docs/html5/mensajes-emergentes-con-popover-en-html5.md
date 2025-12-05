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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHK6EVR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdadcs2UXuYc1c2jykrli0KWBXYPphumWuLw1mJvjp3AiBU8aif9JT6yxBqqh88Xl%2FbkHS%2F61mIP%2FyUo5csQFRHdCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMwj2vgZN6hvRZHJfSKtwDKtmpHSdauYd4vfr6kNXPMxAwmZGA0g2HyMhc47ZyxuKDf7Ft6q7j6XaYep0PCsHLQBX%2BCvo3%2FvUkOKevr63ubUTR98nHaTJ4pRd3kbNX%2Fi2m3TWYHxvaiy%2Bie9W44TZB2jaA3s4DSOqPvnxu2YuRIwtHWVSWEc0J9JNqZ07F%2B%2FYtlIJarpMJQC7h24WPiN6Ck7btosR%2BbIfDtgAHBXAXuSddUZSJ8Pj0%2FJ2EhYO8uSKeeWJ3krv8DRcEYIQ73pR%2FXRsYiUdJS5KsjnoJCfw0ygFDByHk0t6ssXq8MT7iHdlxjQCq%2BMtbAc937A5l1LK0qGFiAgnMxjHxE4Xw7TFT8lEnZJ%2FDMzb1U53WznVaw3o5WaJrzIjuooGD9xctMB%2FwU0wdCBd%2BaqD5T4BDiENhsi4hd%2Bgnw0darPL5YxsW2%2Bg077UqkeaK1C5hWy2WSPSNgT7EoUIt5r0VrQpS%2BYtc1YMfqtVxb7j4jpWazmBq16yOh5xJxD9d2%2FCsR9DcPnIzwjKmDRryKpj1lgnyqLbFPzbfm%2FreZ85%2FuPA8amTcbuc3lq3ch8cUe8P37LQK6U6VywpWfi6P1jwjKa9dZlWf2zMDbsvap3xen3hmD%2FIPKYGYvpWTjA4Sv6SA71Qw9dfKyQY6pgGQifvwuvsOAdJAvNMqSeXjm3jiRAMr9Kme21u6I47YZOJFArTX7d%2Fr%2FQt2z4cwuVYvvupGxvbdvb1a%2FtgOAnvceOgcqQuTVJ8xgFz0fn0xZjk1qllmUFioow3T2UJTT2fQ7NTSbZeSlQCQMrEE%2BI6LGByW5zAgYAnlYO%2FTciSvjHIGgfzvOXrDrsSI%2FAx4h1ol7CItc%2B%2FzkdBoG1LryJVaCOupHKBA&X-Amz-Signature=b9a62367409dbdacd358cc85bda2b0cf6ded0fc137cfaee87637fe7605f9a46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFXBZB7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWamLf5Vn4RZGBT%2FcCLSJc7wnI6%2FMo2MBIiuUHTca8AIgTsbqR%2BOmitYe80d3%2BUCWLrQBtNDrPyF82f%2Bh6488tnkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAxqrHEiAOLOTncbByrcA%2Fu4%2BhWvgEbSJJOYrudoa%2F%2Fpv4AN52TW7F2kBIEFhgTYKoHwMW73%2BoRcibf9luidGkqM7jkONiXqvCKlE2rXiM91y%2BF48YBzu4aEDInHv3wcRwR%2BI5kJr4pVxZAOcdAULQij7v2qO88%2BXpLnZoutKJhGh0l4QdzzOxQ%2BmiBani30VevNfsSr1bMFXmhQLX7tgd5Tj7Tmn64yxU8x%2Bh3F8DOBODvmQwWuEMZOk8ViJGkbu6RK3NJTkvs08L5YT4a7gZbpr7rksF%2Bxw52TMyjcoljkao%2Bvz8%2FyVkp6HFY8igexEXa1loM%2FemJ20sIHxg1NxDu%2FPAxxYP4v7AkyWlOiYDmPaL7YrA1VJrCApmy9nzMmmDl7b%2FFe3e2j4hlT98wiMHpGoRHZ7nydQ3Kcw6nYJFbQHP9S4Y99rkozonVDlx4OXmVT%2FF5U3a9bxNx6x1%2Bt4DR%2FqZv%2BLeAsZfrpSj4%2BrNj8fBCfkk1op%2Fr4aznHf6a%2BpWVbGgQ5AEEy0Hc0%2FxjrYeZqK0Onw2Yw5gW3%2B4dJNR7BXmu8LvcDfxem0EVoL0ttI9aBNHJ1ywO3e9UEOyclfgXbxUFcPGzxKjFWjewbY4%2Btzdc3fa984nmDJldkJ590TfBfV5G6WMCGPWbrMPXXyskGOqUB9qK7AxvJAu0Uk6lTPCvDqRNnlgfcdKDu66ekj9Eylgvc%2Fmo2HxadtGaozVs7rbhINKzm%2BxOhm%2FjXra0VIUbG9i%2BYTvzpJylOVLPABaFXW7hduLIXjnak3qRscsdhJqotOirUQarbALyWOA%2BqTbbsTaxIiVIzFdNOzSn5oYZAW%2BaSp7%2BjQ682NF6pRf0YG82LwwO0eGW%2FE3j81BQKtmXGoJ7qWQMw&X-Amz-Signature=88be7f24961d5cd0f3c332b71cb915100a2341c78d65e5f4945d05d36254523e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

