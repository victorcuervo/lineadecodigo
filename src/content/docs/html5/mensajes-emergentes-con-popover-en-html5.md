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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHA5QIE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmbIMCTxxFgm2YxXKOqPULHF7RIAAZ9jbFVskW2TQZ7AiBhDQrHhQ08gjkPY7%2Fyrlr9I1PnPFXqUH0aHzBGTdYSLiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGQ3V%2FZVuOQcbV8TmKtwDtGTJsaUugPETMglX%2BP4LjolsjNYZD1xap9n28bZfhINvM8qSJ7cqcGZp6gAVyuVRd%2FP5Uw41SuUoXtmctMKNuzHJnMjIkpc4ba6jlXj8oUOr5%2FVwvZ9jbD4jP0vw3pTb1ElgiCRpvMZ2LjD6Fa4QfBrtUTMWOupasK%2B0VBXvAXHGL5Zv8yZBSZv3H1NdErd%2FYmfWtyqPrT3H7%2FG6xEGZMie676ckKqQPluphonkSkcyABdpsxuxr5p3rI5gGFqMHqRp47k3a0MOrH8Oj7cwMcj4bNdz5kAT5pZAH8BeIwPhDv1mhe58SafK8qYni%2FcoSooE7URvjBYug%2BTfnOSwKChWFa4gMnLVZkXehohqOXvuSrNKWRtRAi6sNDagM3WLJPVDcBXflAI3K3gA0PORtJS9ltgGA9o4%2F%2FNQSIk5d6pUd6uT1MR7Metw5IO41hmuO36CFRNfguFsgGwU6oyvvCHD7j1dAvqmcNntGNY9aFlKURLXBfrtZ5mr5ZafVDafAdoF6eTX%2Bq%2FZ8jZ7lrw2jzDnsHVSPNzpWF3KatyiJiKAkLuQH8qEFmGPHXSDH1t%2BJV4F%2FMVLbgVcL%2FFklotfvJB41vyb0bHDecTuL5eQ60H9AtlSZc7B%2BcgoIakAwrPPayQY6pgFgfF%2FtAc9D0xyuEVt3kijKp7hUFokgPOjaRF9Azp3RYxlDBWxuJIHq6nWtCea1cvgSNlTUXnIpFBNi66WLMnraE9Nn%2Bir%2FdyJk0dfsXx5rv7HvAQJZJUGhNNkbO4aeGP2CDmbRMB53Ykl5HmzvGwmlY3A1U0tC0KUeYiN%2BH7NMKaXLXXNjyFG%2FZUSJTsjYrdSUEaIm3TNLnDhiD%2FBVZbJilIxm8pFI&X-Amz-Signature=5e6ba392c401f4f329abcc65b1368e65920a45b9e4775ad9e729f0541ee15913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EPKZ7D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7AHZejenXqZj4tCnH3KWAEWv6zVA9Zs%2BQ6IV1HA%2BANAiBnTcdIi%2BVskTF1%2Fe8ZcjpItNxlp3DHr48rS7ywlK06EyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtcoK7UFvHb5bWOhEKtwDD3jYOurit6B%2B0u0uq8aj3vqdww85T9oy0kJ4zFVRxVwhXt41K2bzrw6UM1thjGH3%2BhxXARN8sMFbnFt09xoxcsfwTGWkRL0kup%2BXy3L16UsI0gf9NZsErmJp0ToLW99YullkHtyzL0rYn%2Bm5X5cbREvhWABMcCGXsPhHjFTEcjN9%2BreyKwVaAFmLG%2BnHQntpgFBSo2rScdaHawnh6jjBHyV1QlGNDxrHIrve7TxPN%2BZ34e0jkpzGIs8lxyVNaD%2FPQ9bJEC9l3vBIScun6s%2BIzWYVKjqce5RMN7EjgZxl3p9ceI8QOGTkWk%2BWKKGwJCGtMbVlBTa8sRPmyI0shXLZwLIPNAD0fpDOW9rvojj7VqnoSf9HLxX8035MjYv7l5TmQiDzG%2FV%2FJSNMUYe2%2B5MhVHrSDtZ4HKKlYpDkqZV0IG9bItrWMfvX4081sxdTO7Z60HCmUr6xL91gfP3wQJ1oPlxXa1pzekcX3j6X2U%2B86KRrcj9HY%2FV9GPkxbBHmcSq9qrQJYkJjlN84%2FZqEA4Z5K4lg%2FSI4sTTMhzGQHr5MgRIFA12mtgOSg3r%2FA84Em0NK4lRXagF4%2BG24yfKqNUC8i3M11WMbn1Ngfz%2FioA3NjrQykHOStx5f1Ho7N74w%2FPTayQY6pgFWVXrPngOwt2wwPAvN5o%2FPA5tkX6o%2FRIKgFdFVMGa0UmgyRNDqI8HZsuxphukUj3MfIccBESgtXm6XK31Ab57Xlggv6ClYsj03Q9zUIi9t4HKgUSo9uB24h19LDwRmvoc7BZ7MPqVyK6C3T72AMXPBF%2BSKfYKctoeIQsOPM45AGavOwKhMYXpftWU8midbTx6iEcgoWDpC80HSs6zSqP373wo2BH4O&X-Amz-Signature=f465ae38beb7f767d64029b7e123b0b06d1d8905633a063c40deb1cd8d0339d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

