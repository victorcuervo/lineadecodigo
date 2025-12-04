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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEOSWX5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFJBxOLQ26eqHVWjG2EN2%2BlvR8TjMJs5RrFsLXej8QrAAiBmDig3T6892PvWeZanYd8SIx9yxdEKzQtGpikJI78ovir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMEvMDuKN49t4xgACuKtwDGfOjSZzDYcM08m2BcIQrptGSWKezVoPSaVRp1WCMB%2FxjOltoGSXQGuZXVE0%2Bi4QtCyRaDsbd%2BVuJ%2BnLBxEoKVWR0UaWtM%2FXetlOS%2FkW3kLG3I0ksYR7Y4LC4j9md3gUAKTKzcNDlPmBdpsdR1w9Q8h0OZ9j5jgJOyJs5Ipz61iqQEIlIYWuNU4X6D2D91Y8Ji%2B%2FltRwhjvHSJ7d9Fj0%2FPcSmvnkr6AdaYpViK5qj8%2Fc0uxCZ18%2FlUl%2BArOtg%2Bmtq5i1ZG1ASah%2FblOSHTZd6WQswUlr%2FI2S0PXAvakPE2QAZ62UHDqw41wcTitN24xmCwI%2BYF1PB6D2RD7qQ0x%2Bh6rRrjgOU7HfmYeGyhT9LXZFbGyMYqciMA1cSQCeF%2BcNyWr5zs0lUgnAY6bXTmIQx8m5Y9rQW2QHGA%2F3ZYLEtUGpywt%2Fssuo09Qy7eO9URTZEXmqMMfGBI092JIjiMfX4AYZUp9Qo6TsyVwDfsJ%2BGtroj8XtC75VbwhU5lx9LbenIA9U3p%2FakW4wyc%2F9YrGlCxKOw%2F0vk4QKkQleI2PGu8fSea0lRcZ3dRU9zlpDnMIsR8W31B7y1T%2Fndc2R7m61SAyPWNwhLnFjp2%2BcrMeb111S8kVmbwh5yxzJoBHswlYXFyQY6pgGHbGOtm7CZHXnpZHGSINJRWCyI%2FJO4d8mudN3J%2BFNXQcV5or6NW54srERjh6zgRIQZ8HSan0dFWjDQ1C9hTzILEbcnTj%2FKlNhmVSZ5HpJYfd6cq%2FhIZMroVGINpmhnZlxfvXfSCLRKrysqvKfwWX67FeaEXeN%2FprOve6ioeS3R%2FwhrGGuG1JoZLA%2BzVpEhHR08NiN0wreDYPCSCQrcmHUZ6mKkxQK0&X-Amz-Signature=3ad82f762cc3d738ad834ca61e61f4375e7cfe2c8a71edbb85be4198c2d320f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BMB34Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCz0wQ1HQRFeAgD6DB4XjshOrlED%2FKHODqp1gjh05CT9QIgfWU4mr3nN5QxoXM45c6nredlV1%2FPJYMF6j%2BLjFfYCx0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAWKOP0oPAkcXFyP1CrcA3RvqTVstZDeyicADH9y1DrVnv0XhXuWdvLXCRVDTpTgJ6OP59ynYk6c7c9m2cbuw99ZvvXxoDTlzBnB0Bd0uDwcH5uEvoaxUZ3p7%2FJolB8CMlL4HoDOBQ7n2MXyqXyvCDzncr4v9TMON5EgbEH9xyM6Ozyd3GBhBtwWXiqSBijraoCD4Rs3vMPNbh75HG1C0XY38XCAs8AUvOvNz%2FgIG5FhpSNYnvzyFoxw63UPHL9CnbkxLAV3NMRhZiWrAGR6vELropbxOHKcS4Ttdi3AyV5hjhbVOuOVgvMaDFaSwv%2BPsTagO93cFPF3zyh4zPl%2FPwIyq7oSpiEB2dFYGebsfjumyEmCSzrpiuhHee3iHWcU2KupUKhfILukTaX4W41zlIw1YG5mU0zGiQQhO9qsaWxApsIdlibItxCqXYrUcKNOw4FVmURuc%2FL8PE5uFB4mQcbvO4i9p3t2lsSEH2Dk7nXhyagwMJe7lKSpT%2BsEFBrBW0u1PMBY0WdLGMG9dAKjXJUcb7sv69zLQ2DB%2BtBvDJtbTImzcE%2BOMNDjN8X6rtOy6NwL4IYWYkmDws6Jd3EqgSNGzuyYjAOHmmBEg9e4h75bk3ZN5lcSD%2FkBXzLbHHpIBG%2F4plKnhszTYiuBMOGFxckGOqUBrxq3CzkMEWqDtEJaCRgGLvIm3MLtkGJEtdRWzt6jMogo6eWrUSr6fMMm0gVdX6sTY%2Fafpds6l23xdm0BPPdR9iC803o0ZJctbQxMIlDWzjs1QStXqK0D37LMw%2Fj2v6was4z4V4jDEUPwv0PXAPmsj6GBym3hBG%2FyqRFucqcwLTyJlUpUzLIDRDXpmZNWk1SYGP5SPHpX35rwELLtzs1qVzRd6TAf&X-Amz-Signature=8ee41aedbda270418f7fbee74be18fa29275fd8205433a90be35f809b93fedcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

