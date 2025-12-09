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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GGFI3PU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSTbtFEgNRiV%2FEM4Je%2Bhp2xAE375IWn64E7JI12q8B%2BwIgXsNWXYp6JsOcIA%2BxN5laAYrTwWoh1SSfXbgwvruPCm0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk0dEL8Pt4MFIJbnircA3B4%2Bi%2FoWQa%2BuLaDztTMVGowowC6AhHDl5d%2BLFZiW7sq5twjJKEagPgTfKfFROQkoXF3p2dvydXhKnmLmbaE17BR9G8TNooJ1vBzoVHH0vKQtCwgzZBsDaDsMoprfmQ8SyX07nShcOUn4vP1JBOQM%2BhJiyO7GEJff4MsxWE5mvKlBExfjOtfRQKCDVi0W0wd0%2FBHN0H%2B3uDY%2FU5pKIVC8qgzX%2FQqrGuYhsKIjFLy%2BXaW1wxjglaA229hOpGDDVaYFpgDxYlwsr4jXCLT33yF%2Bd4YPVXT2QEtTnZbvtwqMtBceH8vM4aQHA4k2Sd5AQwbOiNLuU5rGE0%2BiGZ%2BaicCcoAtnbqqvkzsU%2BwXmyuV6%2BsPSPKYpA%2FRCI5qRqswoM0cmG%2BxgvyUwlNs4tSIoV2Ao%2FxFrPKcyRtTIMpA%2BjawgTXnNF28zvTvveYWGF87cTxGEAYRvZ4UGZ5lUEAlvX%2FobDBLkafgfQR0wCDwunRmQQ1LHXB1Yk8EfEuJUftr3gWj0ec260f893oiCi0GHU4UJAxlzMzbe%2FLHFJ9qewpQKhfy1zW%2BBU80QuRk2m52YciKB%2F42LOhQvFwgKtYT%2F2WeBCIukp8vzX1s86zyDObPeHS28YzYhVVANvRlUZqAMPCO3skGOqUBY9Te2Hyd3SAWgwZH3ZpkIelXsFQcH0jbFP%2F3zfL9erJS03lbLbLTTaPCEt5rO4r02l8grwYezQLGGc3%2BOpbSzN3kP7Itcsy5rgveTTmwel6ArEBMkU6F6IRHtu19HKPeAJssOmYhlKma3pICgP3gnkz95cmZuNNIai3IE%2FH2nQBQIBMp4JzXLzvWjsawygpyRCOAN9clL0Dnvj2Nvl8L9ZkJonAF&X-Amz-Signature=eda9887059c42b54180d6c8d6615664a54633fd5b928bba4fa500acce0bee9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU4PFBU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkrmIb4NqMu265Mx7xp9yHtcHycE5oJbtGVJkFwOmL0AIgDIrFmk4FbzeLnNMRDvFuTuXFdPamMvgt6RMh5r%2F%2FGSYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbXTYXGA%2BfTA4jgOircA5rIyc7epM3ka1tyicVZwRrN6EYT2sRzygKYgwAl%2F20X7ypuS1nPFyQEnZmEc69AVkEqKSaJfePlCZm%2BSuw3kQ7DZePmIqaPqvgrOLr79aYIG%2B7nmHqCsg2EoRpqVVMGH7Ac7U5%2FVvoZ9hKQNz4ko4wmldVcejAn6dl7Lry%2BUstHsxK0FpDTKDQY0e83q9b9Iut68SmpKw2qw%2BC9PxiS7tQRLxAuNTCTA0YDwGzkZ1Y5vAyjoZqQMuT74dT3fKGmf8cfssy%2Furbcl6QqBFHgreeejHHB7ZDN7t5Nr%2BzSYxA3z4IG6WlUrvUtCK%2FiSVD1r11Cvvrm8rDLHUdKJeHUYv67IcugVjmcByR6EaDGngQ1pPe3XqWk6QDOWPYf5GOaHXD5OupS8%2BqPHdztTG%2FPu6Ox2HYRLM6%2FCa1FfXWSUk7EO4OseywcGRHYl5D%2FZcmWSpGcy9oYMH9zSa6Ep5GjAZrgZ4ZJ2tCrij2n2lFxmaWv4PcHhqN84jSHHG4oJPxzGHaQ3Lsr%2FwF8i%2FB4Qf129kkYAkWEg2P%2Fe%2FxML0I0iJbq1Qbq43SlsY4YjIlqfvnZViyatqqU1YueR1t0jH0FOJpvWtHRa8UqDtEHsGAtzybY4Py3qaJ1njhbpQpHMP2O3skGOqUBiao1tME%2F1L7Ajgp9FnARE0w5G4AdRJhGT%2FmzlZKsbYgzMBneDqzwUdTGgu%2BEAfzQnpNq%2FzvPslQRg0x6mRHjIZPcnn49laU79nT06Tk935J%2FAXXgbSoaAOXySDSuvFVcaC4SHgaTYmnN5mfhhHjW4es6sG%2Fx3Wykg8B2aovCR8YmjsHgYM12m%2B8jNGolVzV1XDI8LBiryT9I0QPbt%2FyA5jBRdkzG&X-Amz-Signature=b4fac045ae8ca9985689fe343487a92464cb564695b57c95777989e006387ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

