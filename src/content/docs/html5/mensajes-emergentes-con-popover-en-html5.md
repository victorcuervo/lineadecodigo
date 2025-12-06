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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YNE6ITF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNigBU%2FNML5b7GW%2FbR3x3Rkb5W43E6XSic2jNaieVtbAiAEmXhje5EiW9hVyDUDO3LnO3BdDe%2FK93qTLzvqeGY%2BXCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMjMctCShE%2B8rHf%2Bl4KtwD%2FOgSbRLtZnfTBQlHNDHv9MFH6P7L8i0Dt3PVcwqZSyDAY06VLSH81SLYNd3p4dl15IzFmIpizoAVBwr5rgviMuOahKpJJuhXBJuMqAvp%2FVahd3RgTsL6LPtM%2B61jaiG2LfUr7L7913PCfRSQKE8G5k7Mlw6CjVHVqmIdXmVEREWjL%2FYmnI7lFDF5S8RI7xxSTjg%2FeVDKeeDFK5Dv5BIO1FWBpFfAtOu7Uo8A8KcTUELqleBDcrw033P393jHwwqcdh7GwJ8GS%2B%2Ft7rOAuycImtBOe30mUGeD1Ityp1UzNoTXnhT30KdACWEfc9tiO3pYbH0%2FcCoKQU%2FpNjcfZG2TQcTeTSqTefyIHbeYu1p5p5PNP5YUy6r0GY2lveIhAwp5%2FgluKE%2FXwOoyRK4GcWeNwZYusrmbuGZ6rtcSp%2BN2T%2FoG6q%2BfqXWn3488uemtf8jMkYMsKlz2MytKAZIhm1EgdZwZ6h2UQGTQEQ1EylVuZ%2BNVzn4bee31jBxoap%2FGe452IghL2uFEZbQoiJpMI49K7Sb7cBXoD9dBfmpspL85JCDaInojGrsZc40BG5FhgMepHJ%2BFzdhfYAyZi2qMlDXWLtku08Fnh78CPedRa%2FQNMsRUYC810APTHc4BkHUwif3OyQY6pgGEb2L6iLU38RoUETZdF%2F0BfJH5r%2BolAKIWXDYbKe24sfoDAkB8XEpdO4o39YswSsEO0jglKip%2FwEeou9yj3avUl%2BkyJPLjSpyFKpxngEmI1y5GWU6%2FKfyy1WPXRDscjCiXFpVGhjWjZBf3PJ6xg%2BS4mHPwuio8VVlIUkYA1VGz9W6%2FGOcMnu8W1dfV9bsDFjPaZxDzjpnDDfSJCjdR4iTHg%2BdzIfBe&X-Amz-Signature=b1c81acf6c649776b19159a4f7f660aeb3e1f01bab662ffe1a86f862f94791a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566P6PMD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHt%2BDehUdk%2F0Q71MMdtT20JJDvaicuGut7g8LzuewteQIhALCO4IU0tvphx9%2Fk4v%2FQFPJjfNXzh8%2B5rnxadm%2FwZV0BKv8DCG8QABoMNjM3NDIzMTgzODA1IgwPQHoCW2mlBMp3Csoq3ANAOIClaPNpsSzDAs2uT0ZSZJHg9nNOEkHUhvrm7B9a9EjVAaN0oc31Nep6pm8%2B6z4KXplqMZ3N0TSgXGHqrFRgy0hEaKyMMNAAOcKAB6f4l%2BF%2FI3iSyGAlnR1SaHjEjOj3UoT3%2B4dmQOxw2aZuVogUMCRFZG8CgjlIykNL5n0KHyxSPIzQX5MLVtEgddMNdMZa5TJ37fWdhBcj6ohok7E%2Fh%2BdKd%2FygZeZ%2FXshCi4b2v52ZD1dScimd%2FXT%2FXKoSg4%2BS5iQHKBCiR73ZgmxjdvOUcMWybglgfX9rhaJ8sKOBOerFk%2Bzz4zZJ5gkupsbjIpwxVy4pz68sC5xvFizYwUYdYT1%2F3%2BNZ81PVaF5NFMymrDYyYaZQ7wh%2FuJSudkvwgRp1%2BO%2FNZyeI8x1f56GUgA3aua2SrOjl25i37%2F7tfarWnfYT9rDxPuJVQt%2B4Y72HNpops51khY7MtM%2BfyRpCIHsezNQyAoZl0yKbAZkMGV6O1PpdAzIuKEIGMq1I%2B8XAO4rXysWDK365j8%2Fc%2BCq4oD%2FDXnrPy4nxZkGJHukER7LeMRBleWf04wskOeUBIzR%2BWPwKcep4vJWNaCrGwB3KNUpC3aQXfLxZGkSLNsAmEo8Y3iK6H0MugmtES6VWbjDY%2Fc7JBjqkAQU4efE8WzL6raqbmzYTRTDgCbJILl5iqQyMxXU9ZmA3Rejyic0n5pavSFplKjNLHXVLCTTdlt0vbj1kO6SZxfmw1LPM%2BeYzg%2FcneFLC%2Bej1kbtc3NT9t7%2FPDc8beO%2BeNeC%2F6nCj4sWkHVMag5BnR78JJTmtLFFZEwEhrHzX3rpgYin7KaD5BpOBf3BahVkNZL4ynSG0687Mc73Wmd7BSRcimrXT&X-Amz-Signature=af3bceb6a4d87d2669dfc1361cc5029d4aff1b62d5ce31bdbac7e654b22aa84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

