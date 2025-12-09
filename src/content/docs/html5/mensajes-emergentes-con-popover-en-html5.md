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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNKEPQQL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtchjI7buBxVqIvMY0DGs2WYhcVoK4Uw6b3%2FNXrsJR3wIhAKkx4i7dTlwYN1Xblc6plnHvetPioPzdBPer5DHmtCbrKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuaQXtJzgmuo38iU4q3ANEJ2uG22gedc%2BnTdrtmWtqPC5BZ9sr2BVbNUXHgwgZRjM0TmCT91KI25jTS%2Fpt9MJpyxGN16kAi%2BS7w1vwdMizur1ui%2B%2F9XWzZ%2FB2Yi75Th9tl3DgJf8b1KfULwFr4uXRRR9ugOdVtn6GTx8kaQ7DrcccU%2FMd6Av10TqZtLSt2pUvAaRjGBSDTLvWyKjDcT6XYGiuxlmpns8FpsI4Kyi8pXv%2FQcoV1TxO%2Bvg6UE3N2G2FMGwcYhpsOb0pac%2B1QrRRP9fOkq4WkT40td8%2B3BR27rk0v1MJNktDbMG3fWz0o29B9H389teqLFFdZU3s2r1r2yIhQAeREYkiSzPWohU0XEE0sqXvXUF9UEF%2FWtBJDKTpGN53rX1SMYzGzZRdRvr5BnitZpxVaOGqfiMCVu9Ux%2BzbJDJ6dxpcdHhFGAE2eDmEgIKM9RbpFL8%2Fu%2Fw8Ch%2F0f89Oe82dhBSFpbLOdwaRqzYdvpRyeNLBouRCR3NPjORPHHuqFrskiZCMUSJnOj%2BevxYSDDuUwtdUctI4glrcAtZJxqo0i%2F09CKUebta%2BWzZTcM4I1fbm4ldKiwa9Qd7GDADs01iQ7jBNQzyvgcpBrxpyxFZnLvUv8XTNYSEbA%2FmLsGR1JpX4J%2F6OxczC2rt7JBjqkAWz3HzbGJKsnr6MaRq297JMoQssvnvIbv%2Fs582rLt39XjbqfRFPy4yVs85GfMI0m2cThEfzrxAK3SG7T6Rc2KwcHCjDrC8enlrEjfn4AeZ1shKPCRJrWD1nuOQodg6KV63dIrqGimXJAZPIKH0Q2zx9MuKH%2B0EhKpokpKlY%2Fjh305PuDmgaiSH0XvxTIb1n%2Bp30zR%2F%2Brk%2F8CzX0J6pKTAVYUeYQR&X-Amz-Signature=d414aa64612de447503ea2744c232d5af5b6f0c724ed63731d93f1e8eb98445f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUCFMNU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoA91fSUJ33W0t3VWTlkVN%2F0oXE7ZjukRvxiRBuChCMAiEAqJqV2vlDIERLt0C9G6Bohs71FNCkir%2BW5iYceDaG9ggqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtLHLkPD4nzCjlj3ircAyfJFmYIx9NqNGmQulH7SFMQSiyi5CfVi%2FwqagTKYCgyspY0I4YCeGE0EIf66ZYIa4n8CPINHwbvw%2FtK6GjXk6UPbYM%2FfuLmZjN%2Fg8zi7olmNqr9VZ2hFhS6SRE0BYNJVJvUchOC0mZv1p9p0QoHiHbXN4nzPlu3WAAE7kYypkkSD20EQxvuA8A9JJtILzvFZZjFQIp5sh5t4VZozKKEVg9iVcn1MLRi3jfIzqWtV3IkL57jzhV8jVUOOTPXN8OxSuTnlH1U3Ah0VO6Ji%2BDoSq3OfODsquzYAU3%2FdIa%2FVZgCWwCKNV2LPO03y%2F6nn%2ByyjqP8zNvZKB0ei8xTJARA7HsFzTApm1LUoP9GhwlBdFSlKtLQVrNIISfVVhmkGHZbaa%2FVB1kDJKYhVHbTiss1WsIBwhbd3quAN6GfkEocIX2xBVqpxZveyBEOMKYFY3Mr8kyRYvjJvDz2uqqc7yuVZb%2Bp1qMi%2F%2BhK8SM8%2FkgswO862tmp0fsaFhkU9VPdLr4yk%2BaRnvAWnuu6JgxtW61i%2FMPRFehKELdGoBTEUVOF7vLJ1cw33KqU4WI7NnDlRUQYU%2BU4c9ULovg6qgOgJqsDIi74C1wsrHPCOm6wJ0L8e1VCyeZQaCFv9HpNy5VcMNyt3skGOqUBt0MO8Dq9lwT7mSl8OvtWJ8sMDycjZPkjzJaifUyNigElEL3Z5msURGZ5RkRlMSDjeK6ecEc1OKZlvHXpHBZQinex%2FUd56w89vEhpRrZMwsd9jX72SwgxH3QKq0eRxFIbf3uV56jhXU82t8f7Zm1QrQsHGfdS0uUb5EEyyYQ%2B%2Bd%2F5%2BlxJ4m%2BW6POFh%2BV9%2Fikv82Wf1wsIbhfagHthqkyAbS9TY4x9&X-Amz-Signature=0e8c371959c562c29d6331ef86960e12f4769f617d77378a983b44e6fda0534d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

