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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q24AHGFR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqVp9yqQLO4%2FeXzmHr9jS7k%2BAmhOvQG57aWXIObE18GQIgIEKiIrFdoRGmGYeYmi1r%2BuihRXFOZq4k0FbP0WI%2FlU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOAn4u%2BjlV7XralMFSrcA9L7VITSQLApjWH18CEZSQSm%2FD0L%2FD0tfp9ZewrYFISRV3Ze%2F4mns0fCnHAGdOEYcZa%2F14z8PcNzHF9AaBzSc50Qx98Mod661n89a%2BYGMgEW5kVMy3wFCq0eQVgZlEVu0B%2B5E9B2kXORzRfd0yiebD8MlYUH5VxVr0wyCabI8ah59J7StdIFHrNd7cKNmeApkzDfWxKzNSNWLB7NStZZjQKDm%2B9gwTaWfTVURDV0iD%2BbVyGqotmYVs22MIbllOSLz0LkXsqsOVBa168xm6SaBQ6r7SYyUPLSSh%2B8p%2F3wpsE3RYfvPrb0lD2z4%2B7Hnv1ueWYMuaAQP00ImBpBiRt2yZ864hY5SNQ4pZNkN5XrCiks%2BuOaqgXs%2BRnQHFVw6izbT1BxLWwFjgRyF4ijl%2FP1Ae9TXUGId5YKqIzECkOycHZkH4TicjZDLAJnUSlc0U1I8CM2zf4t6%2FHVmh%2F4BeX3MBZrp7HiQCqJ9x6i8aLwyhmzyR5v%2FSx7pT1EyzSjSujmMR3dKFUpkl1TDnDGiVATHeBZ0K1zMGB%2B5rOXZQjpRwk6vPumwuSL35N%2BvVx7LO9ewgkZUtR6j%2BSCexQWtuW6U3wAlR8GcTE%2F8vNFXjsErJNt%2BqapoHrQxMhTwLqjMISfz8kGOqUBXrPG2wl%2Bd8iaBgNPX4JY7QzKc%2Bib5kDyMX750N%2Fb0V84wbLYwRasLvT4IOyyyTiFcyx3dsZMZPVvoc45VOydxLTJg7WRiAnGbTfmHqXv%2Bz8L6Iu9Dl%2FEMDRNagw0AwVHtSgMyN9%2BoA66nF1AaZoBdszQUmU43PZkTDCeVNGjI9GPSypkKVLPdheua0M5z6z34Wx84W9DtbI%2BTpNDC3cWResu3%2Bs%2B&X-Amz-Signature=34ef689c85500ec3fe0923dbd04ec63f4d0b0f07b24fd897283161f01671a818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYBNWMH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHGhkzsWJ%2FEjGvLVIAJhg6azqEni7pT19537R%2BAhAFsAiAoJOelP881q3iI6o3JBY%2BcSEtneqqYJxCHhNEuUb5fsCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM1nooYyGVVdLcVfs8KtwDs01MNxWJNwBgSX2RZuhcKmEHSEsmzCrjgBKb8vNyGR0fFhRWhSS4eRduy1oDp3mn0qgmRk3GKXHHVBttcDuZgsRCw8ZYNGaLz5xYhz%2B15%2BdkCTQG6nLZD7pQiolSqWpYWRytqsbEZu%2BrJyVvt2FBh4bSaKS6EjiTbEM7mIXdEzTlrEiOApsrzHceqz0zClOrFI%2BJ352SYUyH5TBa1tdDl%2BlE8udDVFjcWY5ehmhBeBufJtuy%2BKCM0ToUtGa0jlsLRIbFXnzQLpZXGbicRSzxmTR6jAVbidznShDHQdsCKF8YeI1y6LHilRo%2BO5FW%2BYfC5u%2BqZjEmKadd2HNNTUuGoWdu1%2BnNldr7I2DTgm6yySGMFciyRXwHlopxrTvLKik5cPDyzsjj%2FfwxhXpP8sVfx4qUXvb95zAjxGGzsgGWPlea9tpwKuxop6J2%2Fjy0iswa5GVM1tH7zqIhNVIIjfmvq%2B2Tr%2F3GydarW39EB%2FyO8GmFYIGFlCU4oZ9M%2F9p9itYoVwb0p%2FY0Z8Ch5%2FoQOJIU0qGAVaNOJN%2FEORvCTy5rzCAtYkcQ5amcQIRIoLkY9vsACagT7gcvA3MC%2FG1EF1z3w3a89l49jHd8dOLXl17Ollbjs4ydtiHJo6OobZ0w%2F57PyQY6pgEhPGCTdTGehS7kiNqLqeP6PUtBklTVV8vTbN8VK9imRbAylJVZYdeJNfUi8dmcU4FSDL0lbiH4VyCqhkx9xxOr2H%2BmBiBa92e2ZdtqavfsWAz%2BGr7aPYABzsklX%2B9q1N2RFkfwNeVnDwO8aFrljSNc8pgo6NX06T0Mx%2FqYWVDA%2Fn5aLik%2FhvO0x6AvNLP2sU8O6UaaP8gDE8HwA6XonE6YgPQbG9nK&X-Amz-Signature=9b21b78533b5c797f567ea1757037a2c0147bf0bc20d97dbb64dc1665875d263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

