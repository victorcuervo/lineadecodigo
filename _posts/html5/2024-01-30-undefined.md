---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUX7FU6R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDL5UtN%2Fb2Xzq2SilAQefh%2FqNN8U%2BHewsvPjFbCcRGnkAIhAOW6OAEhuiwfDVw%2FxecC7%2BWZn7BtnZzkOmFe7j5wMbhRKv8DCDEQABoMNjM3NDIzMTgzODA1Igy1JGm1DCzvEdLTi3oq3ANdC4WHEekOugWZatf37rqh8K6OATrYu%2BjmWKjsQtNixnpws%2FtM4vO%2B9zRkpnispxh6zcqXywkxkwT0ZBaLx9W4Eql4xfqwernE98FT1KnSq5czKac%2FSAKaQ9fABvYHN47zYAhy4AGxOC1Qbb6RZrL4Ba03pmd0wPDYsLpmi2EerUof4VHZARWW2VwbT63RoBrKD4igp2BktCkTJ6NPBq8IvL0aqhplvCtiUjvYzZ5Cj6jTlV2Q%2BXUvDFBiunelCeadcfOLE%2FycM5iD%2BFA4vDNUZQpz0HYaCtu7wxee63xakpUEMscuyi9Ld9VHKKQJHg3mwb14gh5fygo6wBakkEWHYpKdyI20HVl6akPxPRBTxSW4yEkb2qDiYO18lyLj0XF%2BfQ%2B9a8Kgl9HCEzP5yR5PFEa5zwoazx7OG6m71dHFOr2aXuO39rI44NYFLE85JTDAE43Nzegnng%2BnDjgGtoni4p7wAglLj7MrzOMVyVW1BX6Ryc2JJHK668CZu%2FesnaOF80CA5Ng5qgGHUqjsNJUBHMCwQ15qZ6bwttBVAFUFoPRaqJIJiv%2FtGyFbp2SM3QVJ%2F%2Fp%2FGQMXm38DDde1WZHTO802tOgQFswGyczfJwgA0qo01gNmyR4KO8P6TDDnwcHJBjqkAS%2FW3q31Z4EZH6Tx3dq%2F6pnk%2FINd2U%2FMvndHBW%2B%2B2J5Ge%2FSvg3%2FgE9XuXPi2%2FO3sa%2F3UCjQAeBijQ2hp6Ix%2Bcs9vkFMQQtOI42EyuVLZJ6EZe4CdqHNujxVnWQ0t3KHhG3YL0iXSr%2BgWa3LhzTd4%2BA7OAxNJU89g%2FLfPp2QjFt7Cmq%2ByjT8iUKMiANNYNXLJ94oy6ULqAPRFXYqfWs7OzvkWAYO9&X-Amz-Signature=537c2736128e31752872c6903b8f68d31f9c689406c1695800cd29bc1d54879e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BDWX4X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICbeGRMKcU3k4z4QDTEcDZkEoUL2zJIdglehW7a12Xj0AiEA9Y%2Fd%2FIVkXrJBv5r1TvUTp6%2Beh2hUj98scMJidABYCFIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDErabQfXkFq0DYLU8SrcA0vVA5%2BmYuGuStg6Q6BfsEOTs9PXd5Ch74cHfmoSYYkoFbUuIUyTdesh2d6rPRGSsaD8%2BHYBnXhlPKAl%2BaozD0%2FwAuGZbqe%2FzQRIyfFsUVYHzWcTcOXcaDoIc9ZauCcDlpKL49c%2BSJhxU9PEMAefemJ%2FuVdBxUhHV%2FIHeiBfT%2FKFZmxDuM5Sz6A%2B%2FSRs73IZEJBNRVp05k9UfY%2FBQIj0Qo1TcJcNtSKOMK%2FNAxw1%2FxZXyauGzCRIPZ8Cdav7HcbN%2FInMknAzhV6YEK%2Fh4j0Qd8e82RuDl5tw3S3d%2BePisWwB%2Fpy4VF8ZHgCw%2B%2BTgKhE0ru21h0zMQordxyZtN8xczDqY8%2Bc0tLuHhe92j5LExfnG9wMyLKnyE7c2v043z3nhX70fWLCT%2FNQjXG0zJ0E8ZHpQVFjqrnn65lYc8ONJAhgRFNIX6pI878rwRSith8ZJNM5bG2q0cM3mZb5yaEzvRk61gAa7%2FgmWW94DkyaRlr5%2BVTOnUPRMXHnjNtazEUiG9TpsSAbGxSbvfGnH2kriX2DZm8BKIQdcJn%2BAUkZ%2F427LxLtdQ4WLLa6Pu%2BKIndNfavIoqvqhPIwcqz82vviaWqd0uTJAUhdHQbnmDSmkr56YEo1yWoVEq5jEpsXUMPvAwckGOqUBnSbjHKq%2B7HOnBS96id3KoVxIiEhPu6eEt%2B4Fdav28TGdWnXXW2C%2B%2Fy7xIWgKJbB4%2FL7r2YzgDYmYPfRtqKMAgY%2FhcJkvUJ98Jw%2FN3hRCp6ad%2F49ZaSHOe2%2BxI6%2FLAa5mnT8xmSP5RFnKh0L5UBYfys8gWOmrGyCWM3SLVM68iI2UxzPXkPvITAM7KN4nVjzvo6ufmT0ZOhesAqZnN2je7dvTkrh7&X-Amz-Signature=2b05fcf771547f1abf100ac651ae4dc4a02dbeec193a4a3141559fc766eb668c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

