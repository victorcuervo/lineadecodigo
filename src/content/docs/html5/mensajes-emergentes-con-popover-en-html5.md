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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBYC7CS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIG9zWjBXypGA6qvFus%2Fjp%2BZXo1scTRyu0EOE%2FdnGudzyAiEAnukMCFUsuUzgwFWbDjK4LHmpagNg64mTMCafHUBd6b8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDO3hyJ88a5f2KhjP7SrcA2I7iSHKYlng%2Ba3wkKrqnfhgKBOOCDr7mU5QTNRMVZbzWSzesVj%2F57TFsCx6YhbN5MSgYS5%2FjPTiKKMDoySrmwlKuACA2m13v9NURAP%2Fzlbjso1m7qchGNc9h5Z7%2BxgT4EfRebT5i2CUutBvLI8zfuvhuh3OOTQaA85n0yO9Oe7MjT%2FBglaPV6ubq3VdPwPcJ%2BiKL6pMLpdZqQbMI3XoFOaDSqoaPFMbjf8ade4iHG%2FiEb89FKRUwjXqNADMMOuHqUcEg6KKJ6aY3U8tLR2EHgMQqY5IOJ3CRVofwaSozwY%2BbyndQ%2F4Coz61ZHsdKHW2%2B6VKhHD3LAGF6j5QROOS%2Frs%2B40qxWSDEE6C1KFKmFlcNPBvU5JCjGXzzcN%2F0yMiOJGn73nzNN0EPGBeWLzNYzdpXkCqMsGGK3uh1yZHLcuq1GZfJ0xdhGFMLTfie1utC9vuVfmgcnHXY3QfuVozMM9mBCVCzWHuiDEIvcxWbsRKtbuutycCnU3JgLWOB4qTpKB9lYdt9JSYyJBjKcMejAoasDyvILjh8zAK9XB2OkHdZ0WwZ%2B9ZkgJX3oH2NWPjyJ7cX2sz1ARvHKqzEERV6ZFeMEIHMxPJYiUIeo7lkqj5T3JRQPRjvJJCa7zlHMMyGxckGOqUBKTE8VwHHMdzzenQrgtiE4U%2BKrzEvcxLp2vFvfssoOSpO57I5jF0x80glLCF%2Bffc%2BPZnLpuVoqHiGQ%2BPK8grMwycG3nZLwPLd8fjQM0ttidESkVGkeM%2FeNxvxq9hxBZreqn3tTjzAWjBiOF%2BAKA5FHCFJOVQIsXbM74XCTGdhPLsdLda%2Fp6ugM%2BC6hiRuMfvzE0sVy7bzww5Om1aUiBCWK4ujHtfS&X-Amz-Signature=fbaf43a15f6a7781b4cbf1b58ed4c9f54a5a09783c91c78ca84ddbf0d353ed9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CUB3BWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDAIAXzcs7%2F6PIGeWInDGF60hLlvi1ront8DsRqsM91FAiEA%2FxDbfVyk0V1zPL8bxITHBRqN8XOXzi4SPY9BoaUpgQ0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEfCfGstj2KIXzLQ7ircA5ogJ7%2FiA1WKMXYOCWus0GlFgpfHaNoxUdnC9dWP0a8HxviBJd%2BLUHDCIBQrbX0HYgfNmCqDY6Vq1SDlo%2F6l%2Bh7MUTadi8q%2FRSKp41VjWsR%2BrfMY2e79TfA1VUt42UK%2FMmiRxo2IwHwEakX15YF4dODxxof1lVdeSuTEZZ0qLZx1SneJmtZW9jzuZBW07M43EP0D70f5DgN%2BF8KV8Xytpqg7NSsUjcH7WBiTTAh6eobHWr%2BmswoUWf3X%2FXeZY6maN8O22p0SANQ0Cy%2FMoQwCm0tTuYO0Lo11YvaFtYyka%2FRhnF5LZiL6XMVgD21fDceJ%2BftqyhIRZZdO94jepuz1WzbPbGJ0WvGzgv9tLTsUYwHQqhCdNQd3BetEG0zxWgx%2FblY4vK40mVjB3NUk8mJ4ia1Mu7AI9k3Qxoz170V1PbfdKWIpdFDvm%2FwQOKN5pkbiSO4vC00Rc%2BTFF%2FwTjUxxyU%2BkFxCl9sZsndr4bnQuqia0Wp2xgjDjde11pVbIB5IsHqFQS8qwQpm5f5QYEr%2BbFdK2f5Nkf9m%2FU7hYwDnEyweid2hdXv%2FjkVKmVfVbgxvv%2Fk2lJkhGhPsC7LnC6LiitZmqrUtzU7A%2B4ttso%2B%2B%2Bl1CgQX0NR6SCSpdn9q2xMLGGxckGOqUB5QzI%2F8pXOvvp20m%2F38pDYbbSF5YKOCJVGOS6qyxcEOCoaK7hmiCEaIvDTCM%2FOEOESJl0dRikheTc%2FwSgYT%2FsV9GC63UYKmh6xflvTS507HDM8HlLEtHD4UHxbBdqVepzLo4vyRDshQNDtIgLDO2iiwQQ4T2YCxhxX0T2uJv3bk%2BhQvmSF0WlHrrX18ew2Cpd5iJUbsSkOJi05JW2TovhcgYAk%2Fge&X-Amz-Signature=2b381744b6a51981e05aaa54a257afcc2f354fea0b3dd2b063ed12be703801f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

