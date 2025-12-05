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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZMXFW3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGBeCPPCnJ%2FqPxuyWQuELEoX4LWqXKeZlvCheI0bb7yAiEAmsBai%2BO7dTqcTA6SOn1Joi1nd058evURDRGwIUq9D8Mq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNtD8BeIcB9ij4TtoSrcA2JgLuAn8akJLt%2BK6oXe%2F5LZn3ia080uX5tssz9o5eihBEaGsdeRdXMvOncWyedfXkZAK%2FEY%2Bozax2kig95UVAOR1s3Guwg84UU1XEGsly88Vwja13FjaTF%2BWIn4FAWXoVXJC7SJ8uBdtph7kUQ%2FD3WrjmHbyTV0NyPgpDUyu1xW42w4UZmd%2BlTxtw%2F1upPY%2Bbr2pgwkQppYkTGDIwvUUU1nRehIMfhZqtNIhK1wtK5LDyLbaufxyU8Jht82XI1vMFAHexICJUMB6wM2vM3Tppy8gna0uzNBi4Ji52nnpLaUKpytM56YtwhLzlW%2BZFUF0tlgZsGJihFkTUr%2BbXVxwFXbhXpqVGdwVJUCKKBcv%2FjQZuB2jUM0Tulcuoenf6%2FB5StDfSoEEz%2B1fwuOrbKBNWZ7fscLKjuw3hXd%2B9irk%2BPsJnC7i%2B59kZeQBtGfSaxcI%2BBKrDE1brwyvqCJOWPF6RbebxbMzp%2B4ZG6aN2Pq4%2BAqR6TE48hWVI8mWGyVcTb5frVCaU%2FIjeubbWHwSwvsQnX2v3YJKe01oWzJWlU9vru50QskM4fPm2GKOXi%2FHKE%2BEJPha4s%2BD9Py4MkuxcVwWYbDs3gTiljgaax6ucVfRsz7T2nAxNrg8ydCFJiGMJmtyckGOqUB%2ByBYFvT0s9cuChwE%2BQ1zdQLO6zF28nwuPRNUXEoOkrvAmrzGufsn9OpDr0CBKj8Ci0glb72f94MIOBU2hI8J90eIVgdxoERP4ksK12KqCiQB29ckD596do4nAzeAbqsyQsAh97zOSaqqJ7RVQC4pYd1Ux0htI3%2Fu%2FjQAK%2BP%2FZ%2FUBXm21veftnKj%2F44x%2FppmRc46ZCJg%2BJ6%2BKA1JKsbSXhTbxoRD7&X-Amz-Signature=45b89703f6b98433c009e61c88a221e45d4abe28aeedca18ce36cc477d82efd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVD3S7MS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHs9PmsbPDV%2BoNClgInuZhhwVQNhpDx0fKrCsSCrOUdHAiEAibos5sntXT4PgERGuOm%2BcTzha2J0NCMHm1vEXA4Yb4cq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAiV2A%2BDJeOKFbHJ%2FyrcA%2BcFKWDkww%2FLkFwoxUNsIQm1ExKV9xMrCZuClxDn9a7o2cS04XAvSgNf96d2w0i997RGNmIf0m0ZdVitMSy0TEa31solCCvXk%2BDDkW9Tzzo7gSvjDAgYengUsdVS%2BZYwWPBuvzNHie7rnSLhY4Dz%2BeJc8p5ycyhmvbwNQMajaAo8eJbxZlCFCvhPxqxs1lyVwEfOdBLTvnA2WYdWB60cDAzIXF%2FIn7YnNK0K6XZ7r0RSSUFDg60Mk3LTrWGavOm3xADPCOHzlZWx8%2FPBcM3DuC%2Fvr9v7JS8BmSOri7GCrhV%2BelQfzFHKlCOwSb6beMXCmQfyE3tSwXGqFlRizfNZem3ZXTAtrXWwxLjl%2B7jZsBs5t7rBd%2BxiH%2BG7LwoxE9dqo5DYgl3J1xY37VxJSsfys6S689Ac%2B4pZoYDTsauXW2R4UcCny%2F8IhipDTEbZc9rDUcBxDagRvmpxilLx7NW2cC8AMZmCK114cZD3YTRiRa9CYYPKHgb1bgv7dsq3UikKVkcjYh%2B5%2FRpxq93SItuN615AnCud1hxXzB6QwhY8I3xbOuusO9yq8nOh18bvvreqeqCDdKAWEhH%2FQm7ciQ8IPSFVaikuzVQV6SNdfmnMYvX0rW8Qsb0wIR8PsvzlMLGnyckGOqUB0diM5%2F7YGkBjyVgR2kRj5eZ%2BlDH4spVpoYbuwCEFAPk4Fo99rXG2M7t6F7Kd1DLSfPqwYm4Mxwm1UzCfbLAX6W661qO%2FamzlRGNixkWiIc%2FhctopCshR2D8Bxvjzod1Lu%2Bl1nSBBz4Wz2H%2BJA7Nlzv%2FmucUdwoknJV2f3cQHirqF6ktPYqvDZF2x4FkVwt6%2B0GB44X0p8PcUShePnhxnpNEJ1UvT&X-Amz-Signature=0ee6cfb621d4075296f92eda3e570f287b45a30da5b6e8cbd1a7a050b67cdddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

