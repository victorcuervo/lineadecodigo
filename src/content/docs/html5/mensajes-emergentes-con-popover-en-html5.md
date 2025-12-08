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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3L52HG3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA95reuK6TeoZmMoYgw2eclr2mJfwE9awSixEk09A1MBAiBvoOQ5kARQe1OM6m3QWp1rcpkL5IcMD1vehUoRUeUFySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3akfSJXYQdUvVXmxKtwDs%2FqbRkkxzPyALw2xyrWS5KBNR%2BEzfdz9WsWgFDZvQsk2Jyuf0kh5Ex%2FICd9w7xtYF%2FGNX4hIIWatkGaxIp0RrN2I76Fq2%2FxQKg5k0hv6gQtk3var9bc4wt9qQAj2mOA2dQb0NBLHnjWPq2NEP6YrNW4gqXWJxVXcFJ1PrST3L7h4rKpeQ2EPAHRCbzFVmDaxAHhFtuHiRBXanAhvGzbaGowfl%2BS%2BIURkV73E8DGXUa0vovFZM9LCO8Khn0M7BHtM08tri3FZ%2FN4i47HbXWPdvhZ9tJ8Zwl3xoFPORSu0Vs5GuNH5k1YENbZuW4kUdw7cx2XXtIeYPmkfucBQaCgMPtarW00BIgK9kPGqyqzFCatNIH%2FwTbnbo7uAtdHOjBEu%2BC0NNMEtHpGh308GoVvmyjdz4SK7f4%2BIiCx4mZBhYeYFBXcQFHCfIYQZsauEQBXvqyrnFRVThQUQ4Scs5QHZIeTUEiAi5EUwx13EhQaiQdTx9HVn%2By07QFjM584XjHisNnjLRYiLK4UEVbt6kljEWbBhYaKxu2BnkgM6HKhgODMejw7KWOnOiBKtVFLngvicIzTKQm%2BktbEP5N4hnoAFy7TcevIeNb4CjqLX3n4%2BaR9F9laN92DwJ8HDnGYws7PcyQY6pgEHtRa7f7QGM8hENVlnQ6a7Q5TneD7KNWbOB7wWcQUt9lQiraFXXFN7boBQOx53A4fc63FvdgNpEHa%2Fbt2CqiieE3ybvBqlZPoZm99WdTOCHL1QLEOdLrK%2BZnwu1llgfjo5%2F5zn8p3DJgv0OGdmyE%2FBHDYq1m1e8rAjbQiwQUpIl5HLYaN9WaQTp5iOypLGfJs2A2TuLjnKCYZq%2F7oD2C63HwN2mkMB&X-Amz-Signature=b157af71e65e00ad773822500e9d769a5d34ffec4edd59c69e9c9ba0ee475439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HPRF7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDdchd2dfrKfcSXteRwNJsnRB4hmG%2BG8s%2BGDfxwfvR3QIgcQ8tCF995qAreI63ZDjX6E8%2FN7ZL%2BR2nO%2FX8UukouFoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMvdyHVcJki%2FJCmHyrcA%2B%2BvRnJnLBLvHfZWjYBIN3BpJtFywtdfoLbzfOmgcyIS3v%2FhCn8BQWVgQwXXYQBmyIp%2BXNgwvYPD6YIqJIotvHkNlNs6aXFkuLPd0LUtCvB7C8otrCUNFfjLtUvCThXwhtRUZPAp0VbqBji4xixDNTQAaGXm87e5klxAfW5QRS28U02xRxooDCUMzO67PJNldzoRPe7dD%2FnNm7qrkUzpOqQD3bE41EjnFOA0ipSpK0EDbeEdLu31e2k3jjbYAw8E0sUM8CoZYT%2B0lZQs1f9ozqk4ji4YYP8eCTczt3lzACzy385CGjeI%2BojMZsSJJzG%2BlcmXBEX4PPCFOghQE8MjM%2BGckAP2akkNCd%2FuCscOxvigTXmnC4J2HGCPT2s3hLEWNVUnfz65lBFcq3zJXxoYrEhGj5e1vPI%2FylibGMpeIkGH4sGw%2B3AKn580xpYrZzBIXDnDdCSlVUye%2B2OCUuRBa3aXtlPKQJInk%2B5MSHFMlopW2OtbEV7xlBenIOY4DVWcOBw9Mz695Q9w6JUzUagRi2aoRLBrXHB8%2B9345SRFDFn7oTBe4mYBE5xJuwvNxrMlmglRuztHrw%2BUgZaXeY1SvHvJbpQMgcgqTETzd8CWea5w%2BAnEtncrhVQfvFJjMKK03MkGOqUBNlUn3%2BFQr%2BWLv7wcSzzQ9M4xtRGBae%2BHLuOfbfrcggMN1waoYwZANWObPsTZJkDnGLl1uzwTfKoxW9XnYNLQqTtE6IYWl17gw2HGAPYH4j12mjT8NRftmkD8Mfq1mMlI49aAIIetcIlb6Ooy8dV29QdhYF5o0Y4hK9GO%2BcEu1UU3TVR7PXI18K5RYBaMtwT7%2BVrT4fp1bqlQR3yDjmjtQnU7KKm0&X-Amz-Signature=28719900c33fbd676de9a32fdd2e0e159a480f550d40cfea653137b62a0ab20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

