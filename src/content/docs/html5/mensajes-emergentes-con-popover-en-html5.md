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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQY3TIK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUH3NU7y%2FibAI%2BgPAfbxDfCtT5FQFe%2FiaBT%2FXyyT8klAiEArkey0ICuseHNrdbmaPYTBF8pPfAgqVt6bWpOozIeercq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNIIrCTNGpw%2Fpr1LnCrcA%2BdN%2FzV6KvKHk%2F9jbQgf6ExZ5%2BKxbjZMdLNC8VOJ8cpk5m3mJMp1oicPnxmvgIlmYeVHR8KQ%2BJXhwcA8yojvYZW9kLNuc%2BA121R4Fn4bUImfsa0i%2F6HqCXpUC%2B2kdE59drjLrChWnYfZT4ZFlOC2yLBWFQubVhnkws4W1FhRUb59fSslIloVxjVrebtWVQ7j%2BxwsSLiAoXSygMoa0XKXeB12lICZO%2FTfOSjguog1MqGT9lxtt1bNCNGj3HQSR2U6W%2Fkugo2WQIhi6mWegTl%2FukSM1rqwHmpWHHsx%2FVmc3JMEbkf54PikXUA2OMUttpVcXeEOdDX%2FA40J25AOcHwHigMtRovaYGfhaedUQYRE5jxD9Rxwi7RC58DNSxjcgA0hxHCLKvHfIVLMQmZWTrY714nt69Dqo2ErkFWcqUElvFmSoegjJTQdZeyzMcXV3gcqJBbsTA6DFjkBM4hV8t2mItxlRQwaYqZloG8Mv8UBNenQxRKqho2k5YhZ2WmSrD2jDILxit5I%2BseuHW6TNXCPfELzJuzmDCtaO7bVrvRE7tFArV1vOHmDuy%2FOWqUl8OEINmfE4fVM8OOWVVdvXTmb82reZdQF3%2Bj7Un9vnOzjJ%2B5xUC6%2FODHzz3SokjEJMIzMyskGOqUBEH3h8E%2FmtScPhNRe5LMoaV3vnjWKhU3KMnYcsQ9hrR3u12iUDWoDPX2h9KBVvZli4NvQrzJed%2FF94TidyZ0ADi%2BxqwM4cV2ugz7bZ3iDtAUYb0morGNkWcQDIbtee2IOnbPWqKRF1PEfDzWSU9Flq59cTp8JFk8ufb%2FgEpF7HwqXzkksCHujahWuHpupzV1HWkQ%2FcDviZ0X8dgkZqKVQF53I0kWU&X-Amz-Signature=34a3b88e01d1a82a1206543139547eaf228590d5cc661d6bc4fc6c07676f041d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YSF5S7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsE2B8MS%2F7dv7McUf8U02zbfZgO%2FYlXW4urmfukl6ajAiBnSmIaqDkXC05HRyQclK7okKgxCG6sGMGG1Wd37oYBsSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMk3MF%2BZNl6r18%2F%2BMtKtwDAUPiT8lAuCtzjpbStabM07ftkxVfX3D5i1DLKIHxiToyRyBa4scaqbVUAApgvFpnEqZu%2FwdmyFbWVKkaf%2Bt1kcWT5Ndr8735rmCp8j4xTDTWmpo%2FEMFB1shOaGpYv2CGawuQl4Dcg7LjzY1KqvFP0LvKNPmQ8n1ZWE5bjpGS9E5N9%2BNsuTCjEShpx6OUIN4GEVwvMsuiKtb0aRH2QFzfbMCgJYOyz7yAT1lNPCKAMUY4rdo0Li%2F8qwh3MMSoGxEDJFsaA37bS%2FpRM%2Fc6zFgQISWZaC2ufA9QmzgqnsIGjNeYV3Ixl%2FwQpo4rVufK2JwyX%2BNK9sLLkrCqQCovGDXJ3xCZVESpA0SLc9R4Qk%2FPvbxZJShHSg82QZGFUSF3w6OSe2y%2FXXC%2B4jcDsIxzFHWFPq4RSTMe%2FYlK8zkA6xkp7AdwT7sf%2FoGTTUXYceUzDS2IMJ47F2VJNtuHwq1e%2FTVzNCDGjOi%2FGgfFL1xX9EB6DsbCBO5WVcjzPSu2KKQ1m7dmQYCIDvA9u4txdhmrEyPXcO%2BBK9FOH8zhp994RU6%2BOzwrKrw8H6NIlXNEUaKZHfonw16aLfzL1fmPQd8SHBETQ7pgNW1i2rN95nNxvynFxRX8xWnUwknqegddJNcw28nKyQY6pgH6u7McFFBmf%2F94llgMID0tTjxLCfAQI%2Bb8Axp4U4FUqMYwHyq3gt2qGgqIC72%2FOdXn00MF3bWrYW132%2BdiV8RhwrB%2BCkR9DUmmf9WdJ%2FQPnG7TXvTRVPkETdIHopyeGddrmcp%2F7%2FWOHk4yXDSl67R%2F0i5ncBUXELFrqOCLObwDCgLFLMXb2JzT7zD%2FlxuGFvQtfFLoOCveX%2Fxu4oq3eBCHk%2B1lDi4z&X-Amz-Signature=0a6ea8c86a9ea3420cdeb5f8e21a2153c624836696139a52b609b068c63add8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

