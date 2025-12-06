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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIBTVM7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCve%2FQMt2yTqP9%2F%2FvLA89Fd2jqJvT9VXN9D9KmRXG%2BfKwIhAO9VsccRmZeIfxgmccTvEaU2dq2GyQRiXBIs4km4itd9Kv8DCHQQABoMNjM3NDIzMTgzODA1IgyvHLtsrkS7TcpmlbUq3APnHRP%2FmKX5w09SspIC3n5q879qFMv%2BPKb%2B6a%2BEO5JLPZ4B1homC%2FJbtBuDsrSWWL0jvkucDnwobISt3ScUu1oOtvE1Y2dbkZaZM8e9VUhKp8Xql1yIgDOTRhLy31LeHuXDUMGkQ6P1953DvJs3Mp8E5ep6QKtDOU%2FJHn8K9QCcTPSIV2tTU%2BEG0EN1A%2Fmj%2FIecZkHG2%2FYf1KL0YF0UsWWj%2BI%2FbkeE64o%2BKT5RR1idtEvGYf%2B7UffORHHC%2F%2BCP4O1kRSwQcSHkz5ClpSYC6vQe%2FunKS6rjXyGHi53KPHsxKXCgefO%2FxITPPenLfUMw7d0aYEQzoP0hkmZWHjxMPJDN3mq6BB4UdQqlHbp7FwbelQlocP5%2FhOGtun%2BHCddRBW7FO69kydJeXfyC5TzY3qXFEdeGuPzp3WsJmm3PByPFr2c46zC3La9tRjMpJmnP8vYIIQEDGTLXdKI4UllNfocHB75aogkG3UR4nJC%2Fudd4hVJk5cWkTxUVlkUPN42WT%2F4qSmIIQUOXRYWJtYc1w0jnbozhHZFNHZNh1px8%2FYcQ1h6ge7L6n2eAwXny9ffgdOpRspW8XMbzbTelPxqMhwggLEOBESzduAWDBun%2B04R1XAJqQoR7ATSZs1rpPiDDbptDJBjqkAeAAHdvAdPi8qQoM%2FxTNHX%2BAae93Eu7di8NxJFSVbGTf3DKli4yi3AstgJnWhWzF57IIxzGzJPT3%2BjCOj5hNOzEr7tuJgh87dKyBzmssRvW%2F%2BW7HENd%2BaOX4dHEAkAKLy6Tn%2FPk76n6jLYU3WV3qZBgQdGKXiIPo%2BZ5SrlL7f%2FtKEi9l3otra7OMdb9CQQHPOdnTjgRzbI3q%2FBfihXNywbDFsw0h&X-Amz-Signature=30bb696c6fed2ee7b84b26aecfdc87736f0c06004ef006e5a4aff9db4f09f655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZFQTEB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi72j7mvAijMUtDWPeDIBuxvUFrMxecjtTjPkAUI4oHAIgMWoI84fMHKCN3N%2BGhBgZf%2FfoSI9IlhcCT0FSFS8js8Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCPEywv47E3SMaf9AyrcA%2FTUMhwHj9x7ItDDX7MZZ6rxtvIMlndtt%2BDSeuqtQkkJ8A7mfRjs62IcvfVCyaghym9L3jjrCE7rXy0wzU%2BOp0ktF08pjzjZJ3hWYfMbiMn2P0q%2B9KdGnij%2FVfTR0dwMRhF4T%2FGSbenav5UyyyyrdMIVidY4xSr%2FIYR6mmqI%2F4651IU6fGp0Vyqtl%2Fkhsqkb6yxEkjoSyMjjQNkSPzaF1usehfBjwTyatt%2BsktS1SRtMJKgId1PhBIp5e0XZ7s24DsffEOXusCrPYC8U4rxoqLDNOzSbHatDQgxJXAiF5EYAm8qP2RDu%2FzgmjUAKciGRcUGbaVglcrxM%2B49veXj4%2FC1J1gKTIYYEGlpD27PLzRWqY753AygtSEMlookslTx12%2FQDkiKukni%2FHUFXmi%2FnhAD6PBGLmHtHREyDmyLr%2Bbm63mG%2B7moWG5kh%2FJA2xLaXOqW%2BYNExraQpoaFq9OQCVFwd1bHbqhDVxyn7ur9UepELmzHYmmSGHJcaL9Lzgn2EIh25irmWnEB%2Fub1IYhWA3EfIQ2%2Fzk2s6YtS3XPTzfpdUhdLs3oeLN%2B%2Bl3epCvSfrTW7ZDYQPQTMXsM7njeKDZ4fqWF9vgDlJ6SkAWVLG%2BvA09%2BH5vdiHIf0cxoQ1MKGm0MkGOqUBcYQx%2B5%2FgBweFnZFgPFODcqFp5cLPdyPW%2Bp9yknWJNK6tn0Ghu2bCVbTUXIzyOURA39IijCqNTzE%2FY0LtpUqdZ2hLUe7WHsa9%2BcsXPINdzAkqlBX3zvWADmLfbGNtfL9ww3%2FeSohl%2FQKpEazv5tNxyNTYZdAMAUlSSyhPyR7IAeAsdqtImWu4IZIrgcbuz7FGeHYFU2nRnu5CbSK%2Fy37V8sqDE9od&X-Amz-Signature=3d00da65de9a46d1d2c2a7553ad667ce402101eebd95bd5ce88facb711424935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

