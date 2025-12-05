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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTLNIL6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7vI0DOBzAleteDGbC5E5c8iQnnrLAEznY1N6rA6jpugIhAKEEFfKl5TSLPpwwmJmOCQUeuOCg4IeO%2BvNYm353q%2ByzKv8DCFsQABoMNjM3NDIzMTgzODA1IgxTCs9dGG5oM%2FTlJ7wq3APcm9brsq3DQUNh%2FxC3BbkBNsNw6U35%2FEXn0bK8KNPkhMzsVVbsAqc9oM3SAKTh9o6KYw6OE7iNvUxAU76EbpCXqPV8yKsUCcozx9%2Bu2gbJltoDxb99mZSegB19Ie%2BXnC93iv6NhncQxhl2JxZGdnNcdSUElGviLZP7khFxzoQHkWP5pN9BaS3tpXLBibFkdeMeRsoLA0dSxS2zSUMdm03nQeBy5bz6LPYUioUpRQZ9cJt%2FrVMEV0ywNLFiIKHYfi3GPuRofZcZQ8ZNfJvhk43XQ8IqgQ9QHqr7DTBjTVXPxCi7o70Xiib4F15yhBs7r%2F7Lyxr3JNpFr7HsBKTrsIRTNCucnrsh4sJyZuQPLhDznCeHeSgIwmNfO43xa050yGD%2BusmK0rCERB4sDzN6WoL%2FTxxwqbHyHB8C5RaelGiFZErsevZ%2B5ghUGB2IAC%2FBSSKs7mAuAOIxEIfatcF3liYX345FKaqhpWKJckc7JG4qQq0UUjhzECmx33sp1HzeCQ1oqBGPoSgXuuBTf8QjNVW0Y7uFNLcXRg1QvMsDBoBaRk9wKlfxkylA0YPtc6LbSNnmhQbYjheEEuThlAJ60hq4I8v2272OYC%2B5uQvWegi2MSCe9MqBtc4gORdmMTC0y8rJBjqkAUfpY9tbjP4yqT6pJbsqiM6og0RXBzNq%2B4DAx3%2FbqY0D5Mk0dxRuINKVsZk0HBVVDkxdMNU%2FYb9kIrnPz%2BY0Y9fHEyH2zOdS7Xa8pbqAOlm3K9kRPaixqwlPg3SGNGuadfRcY3NPDV%2BUp%2B6w4TadDrLqytlfyxUqyahaLR1irAUzDa8JHE8g34uX9wFIKsn68dZtj%2B4eDNqSY4wgPiTlMfUBmknn&X-Amz-Signature=6fbfcd7dc961cb858a1aa404d26b40435ce30341fd2f409dc573742283ff21ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DC75RCC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQMUtfJxPY7rPYZ03mqwYc1Ki1elJrwyhh7B5dFYfUPAiEAjFgO2iHJLF0otp6rgRwQgfb84nX%2B36ehIlYsqKY52uMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCOfH3cT0h09N6A0BircA6qri4q7%2F%2BJG6rHl9xzJHBr5SBC3f1cEuWwaY%2FqruXMohd0K3tZZITF53ORkZgL2VUyFNYpadwHrnZCDPNHCr2xlXJ18%2BwbyotcyjhzZpuGQABVmZ4OcLVOp2t0Joz7%2FSscc8XA3F%2BQTWGCJ8MML77PBJLBNqKMQ94KuplY8hp9VNMV97YdPOenCREmQqhm4XkMUcs0Cvkz4sTRQntRGC%2F4c%2BZCS1LXK3Lxf5eXXNIsapyFZmci7lvutuX6B%2BwNu3c0FXzdYTmoFr4SmprmqqF5Sf5KcS9zj4XkJqTFGx21wu82F8E%2FA5vtPGGPB0Bj6YfVTamUsQuLyd25e9h0dfxAtTOgVJZt4OR8EOXuikUmQIstUl8zMeIS9sq5yPKmHSRuptF9jPaniux8dtLWu%2FgXTNioSemMG%2Fb4VVmokVdbkjc1%2FK49oOn1uecWLNqYFjK83CUt0Im3W4AGh%2B0f07GDoFofom2T1WvS24CNGTwD8p8Tn68tlqxgv6gsk8aFrChqYDNbErbHxMyEThkrlUmM%2FLm1xsH4NKTG7TkW5B5XWGdatAgP%2BjGuB0b219bAxkdC3KPGcK6ZHZXgy4TGNANGvUSZQR72vVSd58c2hCy0yuDb5iqOQrGHuc1sjMJ%2FTyskGOqUB9wZY%2B2aGMZDGCN2FTzxSL%2FrVgVPQ%2B7k2lHKrQmNlm0Yx3jTE75oix3d8SXoonSofHFhut1GRHj%2FG3aAYn%2FGgaNdAu0AQI4PKaaH0QBWFi7JstcJn2nR%2FUyBE2AGRxKfDfQRVVXgl6yg%2B06SGTILe9IqFYBTIPsB823DGDzdn1g6mfFbkKFKkxovDsleEZUI3x%2F9vK2WTObGJhg%2FhhUu9kZtL1f7C&X-Amz-Signature=66cda8920a41fe1d15b88d6b4421a3669b993ada8c3a97b4c1162edde1c5506b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

