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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YCBF3R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIC6L%2BcCiA%2F62B6Rc7Mt7iIS8YYinuCx3Ap2q8n%2BjXz4CAiEA76V4YFS4dGjdHpVL8BWwNe8EDOTPL9jF7FpUBXqE%2BIoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNGwxIkE%2BkRjkxti7ircAwQrVJxLkbTcIn2bbOAdA%2FK4tBU7kJSAuCFRZOlVRs%2FY%2BLRZN05nCHrxiBTKgtrVqe%2Frep4ID8uZ%2F3tM%2BghQrh5RhkWfB29VvJ7vWy7K1L73mC3r3y%2FoZIQj1Du9XMahGzCgMw%2BWMURKHfs7YEFo93rAXE6S8bkD%2B556Qw9E1RdvnFvKkxUYNYJnXcf8QHwY33u9E%2FrukYgFB%2BdFIRbTjOje9YPMWM5Z7IamLgmjISqIGdDL%2FsXmu43bTQ1nD1W8b1UVjaiPboZ5TlgQ43Nv2mG0Yr0rlBvP0aNnwrDGUi5a7MuGj9ba5pbCTM35l3SeGlDw1wHyJhScRnlSNdthVRLqYfasGwm9B9hGj0IC11n5dLSR8H%2FQnGavBISL1Zx0ycN9I8qldXpUtI0Djh6fcLsKE%2Bs6Zxx9Fdw7Tthj%2Bx1ylHCrD3BrgIFDzoLWOalAHm4wENmOGMO3MlVcoAKxlDyXa%2BdOUJ8OyJYp8k%2FBc6t2qkipwsLG56SldMUYIvVbK%2F5QOdvDDDpgjSj2MHkc7kQ47B8VAyj2TJy4MLncJFn7kZWi56DN%2FFVqttDXKtv6ohA%2FC6cfnYwMujFefYUOwVLH0CUqwmOLiEANPneGuP3V7%2FIm2Dv1TqUfjIJHMO%2BExckGOqUB4qIYRp6zlW2h5fvNXFeoJDSBcTSL3I2o1iQBLljFeVmDHBJMKUnlQNAv%2FjlpBt1PnnHShjjNQaaHvFG9iYdNDamyh1RWiZ4264NiayMpxVil5u5n3MC2fq3sSp8PlIEZMRTvCm2Djv3tGmoD4IPn3jk2icmbMgBJ9jxDJSlGmaf8XXyw7Gi2uvC0xselF5mIs2986QP%2BI7AOsKICwdZ9lvON1s0L&X-Amz-Signature=c48ef9bd5c73b33e42f512fbded0a851a5456c188ceb7f9624084b25240ea30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUPJIVG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDNrA8v4EBpJkkM%2FOMohD%2B%2BgnyCIaWfzSBajphzqkGZrAiEA6TxZE4pObmzeqi0nbCsCieVZeY8Dt832a6l6HGniyv8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC1HAleXNB7gddqqzircA2n4WgckO%2BGut6QXGOZ8z73xoiHITTpH8pNkvtCAm0%2F%2FS5Pw2Z834i4kiHjNykbWu2pehssmUTWV02mAUsG%2BVbkW%2BbgNPcqXucZMBW0g1xrWnvMKjnV5Fgu5GdmJlMmF01kMfcmh6QThk6dVaE1bLXg7rBhq5U9X3Vuc%2FbwQevmSQuZ9gsBpdbeYB6o6TW2fJAYbRhvW0Fr7SAk2aP%2FQaFFB0%2Fic57Ae7QY0x3Lsud0Sg6zlsJrrGg5ZkBh5cgF75oh1k2lkwLDXH3vUzGtiZqFi4bIkDBu44hWRbBlS1b83W7%2Bha6MYLbkR4%2ByVAsHdhoxIRlrHgLKT3hY3bHiSygfGDJC4KKJnyGD1A2cXS2rxEpYztmBhpy8KkkGLLV8pzgoMYUf4P1EaEcoyVqzu5EMMryKonxQNMrCaaonjFpvi8fjV18I5FTcJUju23egcN3mFA4TqZrYlgvtiEzhOR1SKLxnK0Yzj7TAHWLf0xHUKxj5wjO%2FgwKuaELDHmdgq7qhNtv8jgXmmyPaXlODrK3wt%2FngyCntSiXxQh7WawX1O3vBlo4PVN13CzE6V9%2BxiUmhq3OiOuCuzrO1XZkJmsU8e9qS6WWx%2FuXkwxZi8ZOq9vHpj7My%2F4lfvPkHRMKGHxckGOqUBvUINpcaqsQMW2t1%2BuaMxR4Si%2Be9AB%2BJ3YBzTEpjmCiG%2FNNZJpRJBhPjg2M0EfOLsfFqYs9F3gx%2Fa79MPNst5zBgHXeUpERlDV8N0P3V68SMzm75i%2BtPUJ78ABwRiYApgYNfiEnseSzbZQ9CHhP8dL%2F2EWP3JHzwSdszht3yXRCKopaueUOHv7uvURwSk49OAfgaY82KN9KfHV0V2DG6TEYf4CDcl&X-Amz-Signature=c0a8c2c07357a26c62b688350607a504ea3e4b1ab027af67ccad0527a327486f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

