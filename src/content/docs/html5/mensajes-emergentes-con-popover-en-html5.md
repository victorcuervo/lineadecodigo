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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCZOCKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUsMlPhOF3OCHE%2F1MKxRs1iV2nRE5jL82cSfM12Xe%2FzAiAyO4bKivZFJy70REQSxhZ1I%2BHX%2B4S3oMh1P%2F1rXRyzzyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMKX2FiwcSeqxLsM5pKtwDMe5VQ%2FTUhWNkpawUQbbfYd0E1y7nJ%2Bc8W%2FPYf52Fd4%2BSnllG4CnBPxEawPy0UfXfj9hnMSvyVYR1weKwXq6StWmZQbgB3mlo1QaxHXoT%2BUyTkNnuSCe9qkUd%2BPjtcI5zhSsbqjCmEERhYT%2FxNx%2FCm6YJAMqmzoAGdpX0Iy3lll5gj4DBbD1VHywN6Z8trfeyu02NSV045QkJ3eaIizjLI4sQWid2rRul6eSlJj262SBFQTMjhCdcco51SeKlKnKNRI6CgK%2Bsaw5ECAhUmYOIRIXr1kjYsMChzkc02laxBdrGqdPPGRfSg8SexzBSNhFmy25y7ChEptMWloWSiEo01dkMSqHWapzgPxny3ovmR61gX56q9zsF%2F6egxoWdoPSUM9i%2BImx1uZPnq9XAHdNYn0e7SlFgtsBkObtXItDC5AhxXyiA%2BMLlJS6JtAQa4DeHDfDx9bgyhg1Wp%2F4zWnHlQCuS9XNtvEFUxKXd6%2FIDdk3idK8eunMThmNExMPVSj6O%2Bs0Lf%2BsB7VGoVNCEFZsFJpENk7W2FZT9C6Q95GqXJnVmTWcZir6%2BQcwZRki6t8dYs8J%2ByXpy7NmC9bBo13Av81Ck4kQLrETV%2BqSmOwp%2FpXJCAurFgCLLnKyDFdEw4%2FzJyQY6pgF%2FrhdnyR8aIGlBr9GAXCWygWE0ElSL8cMbGSUbSFHJ%2BLE%2BPo4fo%2BkNDsatWGEaCcmXzsf24FG9OdhXjR%2B%2F1AEfBmz96rDZhy3eM0sArDu2sjfRmRha2P9GgyI9JuiL0Auuojwob95xDVRHvGvUd%2FRYN24w6r4k8Y8MnnhkNyuXBr9sO6UtYYXVyVEpzguDEiNln8HcWM%2BExdrXQgHIAg3kqlemoZmg&X-Amz-Signature=94fcb8e901d369530b16be1e7c0967f2b9f38db36d03b311a8af8a4fd0a81dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CDZDTLC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvhb2GfNfZk7z31o4kFK3ctUmhvCY1v7B8sW5aQyeIsgIgMG37iVsGD%2FZ4UIb0rOmv4%2FPy5pALDEyMsqniqTdHMEQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPBsLuaBdkLFqeUxayrcA7w9J6Tn15eRpZwABo3k4Z5sKN8j4LQK3TZrQ8z8RIxmYsNQAEMHs27Aj85cYprSJGp0b0ZFtMHZ9hrzk41Vtie9eRWHhtkLs739LqWetAGAAjNjtbtHMyhNJDB6vxUMiFo2w4ojbSZy526u%2FOuRT%2BE2VZBgL49JWtFfZQK1iqFKZ4F9kmgWbErOsGFvD%2F8ohwxMb4Orn%2BK1MS%2FeS8mIL9kGHpBkXQHrjN1X8HeOhwECfGLXcv7p7HEMJeuoCmSJ8AN6L%2BAb7RIMoeq6s5QzvuCzQ596e0JtmgPkqAlcGqMSn9Mat%2BNuyY1zCvHHRLAB0A1PEoOutkZPHH9n4PtJ%2F5tf%2BnZlX4Fv9fm0jgoEB5yPMwkj5B0oNMfpIZCvBKVivCokilUe8A5DVYsUGovJj46TqZ91%2FnmWmLMEWzqMrnqwMU97Nv2IPc4Aln1jN1%2FppPao1%2BMl3mVfuqiHb4LfYObouVcIezX%2B6NH3s5JzZRA1AqOhB9lSfQFmyu4fPiH5gwfzQ1vOFY%2FPSxdG1eA9Zuib9Gx8VrMZ0Ai%2BtG9G%2BSl6kTEgRGhmz9cso6JF0JcSgRiHciPRGLnUNFJWCrvyXnbr4dzwyuFStE2bfrzoQg7Daz%2F7bGjAi7g8G3FMMK%2FQyskGOqUBtPHXaJwL6YLBVxQgNxeqcQJSHtpKhWAzSJYMOLKF98vsGyNi7%2FvXxHOmQdpqqzuPQXDzEwTM6zmXorsOp7dufOMZM8mPzJJDl2G1NqC2DESJWGJf%2F6fJwBw3iYgSk5neGaWw8AHBB7TPXVNLwY0mqH04GBvCOeie%2B05FN3dIhKP6KM0K5zTj6z%2BpW5NqwulEPBpz6k4Krr%2FYX0VIBNLmdRFFVmac&X-Amz-Signature=0e3da030320c8e92249c95102127c7646576bfb36308e11ac2b714526173794f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

