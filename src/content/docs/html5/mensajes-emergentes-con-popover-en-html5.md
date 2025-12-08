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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET5JEBN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER2G%2BmSYrnNJivt%2BanThGZgiBpT%2F%2BBFzKDxTx%2BYs%2ByBAiEAiG5MIo%2FSGRjN24duQvtThGCdhXLc%2FevpKpV%2BuNRR2UgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWaGf0bI8YoLn6kUyrcA%2Bqdzhd4GbbCN0Av3SpQjOfs%2BSpqs%2FT2mSEZBFjcO3mAf2U7OJRe6evlWplctmVSzngb3vGFHI1TrkvROpVM74ad%2BR1pglMJQ76AeyAgSLZr3b%2BABQxIYkd6nASsXPn13i5xqb0gWpaaSkwF8yHYEdRdhKHrJDOMovwzL3nfHC%2F%2FkKGmh%2FUZAzwkk6KnaDz3UTH4z0Vu4VIbn54Q3Q6eqnTUdFRVjFplxTmWZQOgjl56CT6BuGsmxphgI7aUxIKG9IR4c%2BE8Wh7O4qx9%2BTEnK%2FM9CFIzcTwy44b5KExnaZHt7q6Xl3K%2Fyn53BxG8Tn5YOz%2FjYc4JEGDL%2FJswPF%2BnwtsEwOlBLvY8qFvo2BtMxOOP3YR4K3KWX7s%2BoZwqeVKuFd0m%2FvOOb8SbvrQBExgNAcTV6u9nvCHSH64qBMcPOeHm3khl2Zz1VJn5Ed5RptVYZN9WJcLWJ2KlH1NiA%2BjBEAWIW5XeqPxzNIQZJSt%2FTpplkrW%2F4pMLFWgBdmTO%2Fo%2FLL1q4rZFpWVG0qFEfQ2djYdUA%2FU3ulUmgMHPDxCfGGvhW9ELXTehY1Zd0MJeO%2BkyL%2FvPj4gTYugG2AyXxnHhv4Pt53KbneGjGd6kSQCUqXMhUAsF8I%2BHtK0I5dlkwMODt2ckGOqUBY0OsrFR%2Bv3qaguK3Gs4TtD%2BtT%2B%2BVgjQpLVO2v68lVnna138%2Bd7BYSUJyQUvFBtQWiLfUfl5s8upd6MGdZHV20ddqfvk%2B8kUyYDmwjpFs4au%2FewBEuKhU4uJFpGmTnqyuxJ1dq0GtjpWD%2FAbXOe2ZTug3B5tbLlO5Wczt5epZmnnQ9h3rZJr%2Fp05F2PCKWnL28UM%2FjuEQ8eexPQiA8qCQoe10%2BndN&X-Amz-Signature=7e3cfbcf8645a90381261f18d9cec4382aee08441a921157d6ccebb5b7abbc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JF6V3B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtVT0H8IrBQ0EU2RDCfxLVkutvqbCkYQlIaNbYFmYLpgIgJxQP1tjhMi54ZEa%2FxfqeVwl0bR3haSL8kPwWJHQFLIAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK15%2F8YKgXpcyES5VSrcA1Mst%2FVsYiXgiUbeJQ4aXHHGSirlVkXlku9oxVU%2B30cYSaTiJBJNHnLrNj9OnfMyMFcBJ84DQjyf4SzF5ZGuB2qHbOQmW20%2BH8yVAiIoJ6a6EQ13cVklCBhlAyLg%2Bdq1fb6t%2FM9O5%2FMVRoCghye6aTIM2q%2FXCgIItBr2ZKZ44mnToQymsijqKh0m0P2pSYnUdEiRHmKEMiA35RSjtfOzlMHXL9scHCrFyE9MaL4J3cybrJDlXV9tRDoBRqnnQiFS9uhvbtCs6e3sCgs3priyVQJPfWAWhyGbwxq52HiMvw%2BeEwf%2F1%2FrAJTNYwU9r3WO8LY7K4rsI3yyL%2Fqk1RoSRNhzDvCTPZl4%2FcYyKsMso%2FbOKd7XgoDpH6Y%2Feh0J%2FJBFn8qUdz8HnGED3QzlD%2Fr7L%2BK2KYgkAn%2F%2BrU5RWoX35nk74GUvW8gHLW3aeELNwDDpiVaDdg%2FPWbqacK3T0C1lfRJfb0Yns4Y%2F5ZqG3pzLoRp%2F%2FlnPXcGjQyeNfxUlJ3fp4tnNvGPxdza9f57Md8Bll457V19aw7Y43EvYrWT37PFgj0zGNLbgWzXPeG2%2FYc7PtFfKC%2BRL1MY6vFg1QQfnue8bh%2BuFHz24eoQLqv609QbCrGr2ssAgEnhDO3%2BMjMILu2ckGOqUBprIQICgZmNGSDCW0n%2BcaFea9QkYfU9jDHB1j8E6JZPwVIph%2FVSv7ukteZMzQalBp7Pb6PKM%2BfokyBpjGG6ycQIjLVTFO7b3LmTLirlgWtKHwDhriaD2qirV30a7%2BjYd3p3YeJ0TecAnG2ieBZ2V336q86B8l1lAg9CwdBDR9VrKj6w%2F2H7Uhh3LlPq%2B%2BG0SRNRrCDGEaUyYqg%2BfBe5WXTkirt%2BuW&X-Amz-Signature=2b536dbeb378bd781379c50ad93392265e81087c7f9ce33330f9815e3cdb3b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

