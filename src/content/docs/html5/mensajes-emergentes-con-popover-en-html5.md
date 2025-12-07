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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TGA522%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw0B4o2TgQuZGwdNF2NJu%2BF0hClClfWYyhxzeOteSeAAiBRYRU%2BO6EzB5jUE35ww9vcL3X2gfXo%2BSuSDSN%2BAe%2FxxyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYY0IKowbfO6z3ti8KtwDasDdImDrFx6paTkGjmy5oRgV9VocHg7H0OAa5f5rF8%2BLKvqrsEq5jLpep%2F%2B6LaQvHCk8epkEYRQgandaDwar8o1A5uKRccNcvVnjbcF6QtrI33FerrfYkMqOyU2AKpi98QEpYvjvoCv0JSbbHDHK9DyZISs4oZrtg0P0j8Wn3xkPiqajH9FQwmKVHbTNj0VTwQhuDRWQHQjZIR4B461GbjCXbyaPREdcOp4COupdRdT4KmhyI03cH9ZN1XTzD1kPlyqjACiMj1%2FewqFPU9jyoyVgnL%2BdDDPjlgB0FRsB95kZHzI2o9LI3d1Lla2c9DryseoQggf%2Fb261mfz7UPEikcsSaDCAhK6UpqSr9yc7G12XZS7ts6UBesWW7iQF9yya9wTvjpNst0czWDzWsjaeVICu%2BW9aPnhtFatFdICEg4hkn783SHRd2m0cm%2FPz9nKdoMqNtT1GInUdce6PYdpP8Z2ughbXbTTZm6gba9AZarq41IK%2BYVh3Ya0KuC9R6VEwhLwIAk2lu%2BnfDTBSj%2BLNtZOEbMxaRqRYFDtkEDRANBGUGZHNgLkVq3J2lyzU%2BQBxVFrZFPPsSs6xRyBdjKrn6yfQmNeare4%2BAK6rG%2BtyK%2FCuk5u7YNfk2YXXiMgwmf3SyQY6pgEdQwWxB0ikQ1fRt2Cx7zUtcfw8qC6Ua7W9%2BwGu831CtjQoos4LdMUTLouRHlEAXF8B%2BHRdJjGO6lF7pCzMgdu2%2Fk1Lu2xY5rRlQ8piwC7lvpCk%2FBeJ0YPRM0YtZCftbb6St5PAtBZbOsbttmZgiSzAzo%2BC9PlRgouIVvAFqVZg2WXL2dLN4i%2FDttUgDQOznwHbwzxAKKIzsc5bsb%2BGjBRRdiSsiV61&X-Amz-Signature=9ac8993a9ec2c7b66dac7213875253ebdfd75fd023be4f2aa80f9a330c045f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6XEZFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9GXZIL4OcFTNrJb97cjWZCauDH62%2F14pA5yc33euriAiBUq%2FNv%2BUXsVwZXgNpyVM3t5JpkmPNd4l%2FKv1%2BI1BQCuSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUUpZZlBBrUf3aulKtwDCN%2B7Az9DBRdS5bvHxTReXjCZGWW2SW8jViLrjmg9p%2FL3jh8bdLNoilEYw9Ud1h%2B%2BmOW4t%2BhizYyrXLLP2Yf5eHXxCA1i6KLFd7S4GfDnV8mr%2FleWUyzCHIvaXHMcsL6VQiKPm%2BHdFPSXhAJAyfE5wHZWspHUNPmqGb4z9ygOuLgVBinPkmZLHZ0Y1LGCd6Llra1%2Fg%2BjKWuLfpoTlGkjLdVtGS58poy5s9545wlAoqw9inWkAwsH6D4mOb4GZNzdoKAEWs6Hp8bHhtRCOX%2FIrcd3XXGerw7k%2FFLd6cJGTgmS0O%2BwGlmgkGblJ7pWxoIcQsdEdRQx%2FwNa4G6EgEylxon5hWCPHBp3f4f5eiYgWY8o%2BJzbebppYQv4DeM2X4cUFAmm13xtebtT%2FYWSSDv5W%2BfY612X46Go9i%2FuTUYTuBxLJNh5sFnvmto0qGg5FXMEKGQu2CI15N4Q9H%2FXskbPeH%2F17k9j8pCTDwm9gVA6cZg1tEozr6EbESev%2BCKFph2cldpl8wJrgVJ1rvOU9Fd0GIPu91QhQUE9sWZ6BswBJWkwffSK3kb3tSI2JTGn%2F%2BCmoSuootX6dMW3%2FtwjE1dx5k7m6Qx57zPOu1rgqgAG%2BHtwjyS6BgyBHGAod38ow1v3SyQY6pgE97NuXHuaxD9eY%2FYCNt1mUCeo0gtLT3hmR2zgcuHRZBhlY0yx%2FONn%2FAuE6LIvS1UR8VnIjG6h9djnM4tfVOZkJIe1%2F2B%2FddxgQEqwplSl3NLRgdeiTNBcGe0aAXAQeTeylNP%2ByC9xYSG4HK0571p4K4uHogYIlgMg2778IquaQYohb09JW25vFIAFF1k7P48qCgKCoQPiHTwHzr77lFrXMe4t8cM3a&X-Amz-Signature=de16cebf4e50c9607ac2c17e1e39cd44f7d2cfff3962a67dd8630a152edd0374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

