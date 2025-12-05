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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAQYXCD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDatJnd430pfLe%2F95HMYdvgrlqDGXa4bIfht%2BTunjmLAAIhAK7Hg4ABxC%2BLDDK1Oko43a0ac5vcyb1EW3xwbphaJzQIKv8DCFsQABoMNjM3NDIzMTgzODA1Igw348qXBH6bqMSIS%2FQq3AM9V%2BU0Bk8zDkWxdyHbrukcg%2BIJ%2B%2FC6abnKJZb5l%2BdysH5sD3VonHN7JE%2B1g5Uz9XOvZc1tAaI3xxc1S4fHEJBkDeZzrL4nHuwhO%2Btjyj0Ju5o6cqRr1gYY0F4kOvwAz9UHiH2qOXHKEJQmiZa6D0G9hNhwFIdWPcXlAYUO3ZCcC8UH2tOEsJFOIOXMD7Lm1sqe7OOHBzbWnpwVmoI0F9%2Fm9tGIbwpYHf8MT1k6B7BvoAECrNp3dsSSEcW8JKxg%2BKr7AC8Fu6TQFb5I6Y1mk%2B6rTKe4cuDLfBMkHoq96WhpcKJr1iLluwyBAqJY%2BYukN3DNI3ibkZDUnCUO0pK7wa7mVk%2BdLQJebN%2B9QFg1tFgEz8Y1rflf38%2Bfoz1n7LQb%2FFNnbPom5u%2FJGfY4zKt71XhoSDfIe3m6J%2BNF5E4zBjOVWm1X3nLXNGcVNO0P3P9porlIC3AdQNrvLMQcuzXsCA7A4KLgw3t6GtsvNTjDKSrJRItgUb5HKX7qT7KoIvlQqPbxloCYi14ucZaEgVLLgbxzpMD7qq2LKj9UqbdYfdEKUt8eK7HQ6uY545AyCqU0bzBCETv%2BZIrQHlQmGc%2F26bCYi9PksVZTYn5TYXvFq5Dn8FoJJR6UbYkyBdot3jCqzMrJBjqkAb84pTPFOqsnFtdhp55jnsud0%2FrDUanM%2B6cqIruVthjDRzLDR7rzbUbiRfFkL%2FAVcUZa5ySwz%2FATTovS4jTTM0bBtVlOTknZa%2BexgbFmg%2FFdI85P0Nx1UrH93oin0qc1U%2FSs3UzFgNzs%2FcdGknvSdNlNvtAOTzBWtlIMeUqBGpxI7yvxelCjo9CL6vbLR%2BkTNj9wtEr1Jj5H1supKa9fBPxk2Eyq&X-Amz-Signature=bb7bf9aaaddb8aaba5c9bf64693f71ad67d6b175db7d772af3304a425fec8e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624C4I2DT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjwJ27luljX5j8nJlj3PGil1Rh4TyPb0FQnweP0PrvTgIgIl1FILZKRIs3f8EMyIQvLcg%2BxMgGpJRWb8XUlixtHicq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfFAOz7iaeQdkggnircA43oAEOw%2FONrpnSiQRpwiCGWyFy5GprLy0Lam%2BBc%2F1PGiJaMFGc9dYHr9qjjp%2BV3IO1tdcJ3Y9e4PHijYzykiQE1Ep5qDakgg5dWezYfsDLwymZmhCvEQDsL8p3RcnxhxpYs3QvbzFF0k0dBF%2BdKP%2Bcvhl6F4udxavdP%2BfLirFr8g2Y83xBlMfX4l%2BgSPLAQJWdKZSd8JTq6jUxkTc1Rotxun8xBHtqJOfPePjzjboPvLFwH9nZF4r3bmGMswKxqLzRr4AkFWIiH7Y0tgmi75X%2BKQP8Bn8936QsScE3u%2BmQvT%2FbG3PJ2ZkZgF55%2BG00YrcFqtW8%2FpEVFv984k8vV7Nh79APKVyWEqZ5dKrmt6cPe9aIkLXhTxDVO3MQB2P9xfLo4WByudQdvgB24Jztza%2BIeyTYd0QFvd6th9g5YFVHQ4BHiuqzVbIdlI7n0qLPSpRh2BL8pYZyXu%2BCJo78AX1voDduCr56YePhusDJg2%2BSOG1nslif55GfIpFXtWzh8e87GRzuHL%2BHEfBJBDSiTVLNW17uo8kssO6GfY%2BOMwjpfX7AHy7%2Bh5TZSFYiUkIaPBRqoo21OKaekcG6k5mcitVGpW2sUXarOIMR1fWnZjMq%2FimU0JlSF4iGsfQCpMK%2FGyskGOqUBnYgRrRPhYLtmshuYijj82x7%2FjXcqRN6xof926n6YpCCQcycZxwBvfuq9gK2g%2BpxYPKFC%2BWE6EydiGjLW5YmIIErYxzHKyIpwE2LUT7zHBtNxX55Spe6LNnj6MlnWLUY%2BTGXME8GeUXEmVbiVCViPldb%2Bup%2FZVsG8jedTodMn3rbbCycxRz9KGdjSo6D0G%2Fep6PXWEH6XzuEBQ4nsOphl9uqUQdXK&X-Amz-Signature=276fa0ebbdff07f4ba8c6a39c8b0770f40843e69c3e868d18d4f123a08408232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

