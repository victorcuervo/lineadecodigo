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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDLT6XM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIB%2BPWILourwVQjTqLxXFpYjzQ6SXIYMJ5J%2BUSsuUGKM8AiBLSce32zdvn7MmLwA%2BGu5b0hpx1H%2F0fglqd3YXPH6AnCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMLOecIOJarjbe%2Fq%2BLKtwDEoGR7RN9aY8XYu0kE%2BLx2oi0VnzBXDNoDpvXefoZKgAU8NZO7VZby58RTMBRYkU6z6OTbnVKPlg2D8XC6pO%2BEvD24hlqaXCPB144DY4QJHP%2F34a4cfsTgJ5Nzf2QFMGVUBnmZ2DvGPHPPWiY1BPW9DyyAjgOYQ0oTKdxUwNMqAEgwarUoxLtASMAyafniLFnKzP2GbdT6UjTYGHTxnyVA6xvpiIAozJOMRNjone%2BydWrS5JSqA%2F%2FZNxWZlaLOrOybX9FUYkygmT%2FcPmdbwCOTAaaprkUEwO2GPDxUTQqZY5vsLwEBTJA8dfujWpvURuL95O9LEBR77yUgjqT8MXnfDDal3q7IP2bupub4xsXhZAhYHg8Hiiwq0eHIMnCUYnXndmc0Cr3fu7eMd%2FnUALhe0SArhZ5U0%2BNpsCpNhH5nNW%2FTWQ2AhhfrI3ey6Gfw5Iy5zaSjcyTnmSZLgfPaYjnrQP3Z%2BgHZOWTQUV3TeeM%2BqbUKf4iKQh2kKMq1EPnWtIfaG1SFyLNOGRVz0Yim3h2EA%2B2fcHYO87cLmwO0i%2B1EMLocFOQr26u1sPzaw77gxHZ%2BnqBvfJ1mL%2F5IQIUZRMKa5ZLUejQSuqEXUX%2FpAM14PMyDMS%2Bgvt4Exd5NhUwi7XDyQY6pgH7FY%2FBrm%2FKCdW7IXpVxipHvXGeMqCKdvja22A002shTaEnBStJmL05c7k35gkckkJEKgnpBLmjJiivJ7Kd2lBXgfsqZBTjYe2ziBIjmO%2B55L8p7ZqgQ80TN2Z%2F6USR4cO4WMqFgLP11xo55NKGrFh5I37XTn4u%2FtJk1AwqwzecPBs9ATX4n%2BHPml5sKPV37EXBzAXyhWjl8U8B7T%2BtTlUxGt49X3%2FM&X-Amz-Signature=1dadf3c55806e841988963e923658d66bee3f1d630e034ae080f6a67facc8c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664UUNRYI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGOtf4LAZq8bVQpOXk3JNgWAs%2BHQl0VhaMIhh9xq3P9gAiEAnn3Ib8B4Tiv34pks4KpLcOx9Y230JEKiKDb1isuO8zUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCDhJRTvodoAOSDtJSrcA%2FtAzo%2ByI3NSuBGaHYhPFnpEzznczMd7KGzdgOb%2BidDrxo2cZInSOYLaW7itfTAsjBwkyi%2F1oR53RE%2BZamANHqrEEu6MrKIwnJkF6kFKY1COOX%2B%2FP7tXoeKGaZCrql20og2B2qX%2F2e0yBUT9T88KA%2BicNp213b8fYbSu1OxeLhgnyC85%2Bo4R0MZJFsXxjn0Pn7cyzpo00xU5jQu2GCUczXWL7KxgxOlxntEtCSLHivelEBxBpn38Spb1%2FddjQTfdV4T8Ovdes7WG%2B1qN8B3vgPKttV3zC8%2BStcS%2B3lyHxXPyrjz4kMzIXhcmmY3S3FiCnqtYySFaQLSnjY970nvA0mCTb3x%2BE14idEjqxNqJspwwcQKULUYXX49AqLvnF3GU%2FK01xXC0s6%2FcMMmn66erJsZpmL2JHi9JoULFEIG954f4Gtpj23LdgFwHqGlFCViYcz1iQKFhK5owLSMdoN8r9NTkIZRHXP28vw5pRXQwQoHuA1xwy66iZuuw9wi9uBgYznCD7a7R0igIu2AWy%2FiNPWxSu%2BtUeSeY3N3Sw4WyO%2BOy1lyfkoTuLTHHxonVhhltYlIGDUIkZXgMXXdzZwXdzLfmQXGyfRlav4aHEOCzsOhKA5l9siV3PkIb03l%2FMLm1w8kGOqUBlo%2B5xbCvfmh2x9VrNBp0ACGK5fIWGl6%2F%2BP1gYNUrQLBy3xI4scQ7q8UJLRpnjIxUFJiXJ%2BQoqvB4g5lO27sdqm8pgHtt%2BZmJshzgchYLiSmtsPstHSahzyFREAvKCljlH7bVlI9DlA%2BoI3Qy4GOHCVXT7gtHYhSGbTZHV1BFaDKdkVf0jmaoAGLmY8UwLRAxdTxR8EHmf9xb1JCmTBxMnjP67PO4&X-Amz-Signature=c3bd4e5c00b764caab6f3a9dfbdf0ce213d84774d2aa2fce108c081b420dee47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

