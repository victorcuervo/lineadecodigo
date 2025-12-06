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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWP54JA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHrGWs%2B5c21lR%2B7y8viM1oYGf8bSHUYtV%2BPT14YNrEAiEA%2Fz7gnUYFiUBr3Vi2YnrISIsxFJW0EYi410dON3hv750q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBhU9Vk46%2BjB8hbmMyrcA%2FUQVPrDP76iBKrYsVJ6lSvqUvVtOJvDlw0R1MR2mzE5fLG8qPtsZqYyDyb9n0Ntr0EKl9RYbP255oKJwCRBRykiTbyKtgNkIQZYNA3ZoeEg3zp5XkALkbhEhac6YpHFeve9YvD%2Fsag%2F6AxX93SZqdrZ0L5lNEg2b5ZNAMlimPs4veTMc0xrRmeLxD7HAyfyaQXPsCaNan%2Bi6U%2BZwUbyaC%2F3FYSRiqjka8mdcXNyfB48JrRysuzuuUsUWJel16oYi8y6Zmcevr8gEr4mJJb%2B7g3Klib62vBsr444L%2BekIm6oHaSP65qRf8daycYdCYYhsy9ieys%2FWAss2e9BJ%2F4Ll%2Bwb1tC5xkEsRn9wLjhcccfRU8038F2%2FcRvAI8iLDrFkHk%2B3C61e5BwBEYYtxH40rP8ieisn3OHFLa3DpAKBgnk%2FkvvhUYFtqovtqYK%2BJbyt%2BuwLDEr4DIGYoSezojkedRMQS8qiZaLc%2BRKrgb0mkh4vs4HXbXqNLquWg9uu%2Fxwuxd%2FibXx6SAnvrlpPW%2FsRVPQD9TplWFVI0SUYfScM38LrKAxS4cHAKEdEi9l5KgoFBGoA9OXIUy4Avhyj%2BVF%2F0eIgQZLORUHmsKhO6PBamhzjFNPmx87js3dBUb0pMMvK0ckGOqUBPiJ9Ff87rE1OV30XltLIzunYT60nZD1ALAWbvi7vvv5aMqXOxv2lCSBVwtUMvE3lwQt2fPY36BGm2Y8xy%2FxZUdyYYLbKy3BB9gK%2FVwDLkhIWWPFqHszYg68f7m86QHWNf9b6JVf5n5GvdgFLZ7emWlRBJlsODfanARV7uY4KK%2F23%2BwqX%2BWXZVM%2F%2F021YU4%2Bk8W%2F46hyFCvlrD5jN6haUahI8rZK4&X-Amz-Signature=8dc4131f1bbee26a4eb6fd8ae42a266f95a5bf04b27858bbc7c0b343c71a2a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBN7C3KQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAStWiHQMq6yReNJsZ2P5McRa%2FCKVNR23vY8f5DX6MkfAiBYTemMSD%2FpUwLLXtWD%2F%2BAJp%2FYwaFGUiYvDAykVh2nHvCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMg7yqDSwJrOrBPj%2BBKtwDql9P%2BsTVlyyJUMVilDq0UDMv6Vg%2BgbcNehEtYlFsyrI8NSEK1XO6FMPID0Ccx8Go%2FcYLXSb3Jf0jo%2BDWirQdx762RgzKLBq3Vocmh924AeKnSKNb2YZHrwzZwokeWPfkQ5Jo5vaohftR%2FlmwGBkjNLvz6KOU6Mg9MX%2Beg6M1WXotl1iuZpHLEiy0A4OQLCzaFk5K7ScNZhwHCVZvYki8wAg8xb5r04F%2FTnHkHmuHKO6PcI%2FOwzquYDQs2R3VNWuXtpue115FL8uqiUzC3zI3%2Bpoi%2Fp4iGo6SLG1T7AwQv4WopznlF2zWX6REYfbNUchkZM3Ujba1YMf6vIvOay%2F53x3EEzoVn2UpmVGUy8etFQm6Gmth9r7e4riMXDqM7Bnd91kVW%2B6pnSxZYMR5ViLX0%2BxEfd2WTo8yyaalXjrvNiTLVIRDGctD94UcXQUr5GQ6dBHsruKTG89NsLBYjxTIqeI0CCThC1gNfdq9CKgxYDePl0lLXVCN30M9zhZP2n2S22%2F9a1dBgQQZ5XoND4flD5rcbe4oKQopEEtiGeJvH%2B%2FMFDJ%2BeaD6Z4Lp33BO1v%2F1szTxRpHLMShr83PFy4QYm07wWUNRhmZNU%2FaP%2FPSJq5aqgk2tAzrpqZC%2BJ30wqMfRyQY6pgGApijqjWPtMUzfvrZDtOhVF8Ewiq5%2BrlvppYjpkdhStay22B37ZGuSn0zHwxVi7O0JH6vRxk8gRkaZ8h%2ByBbktoxco8FMN4y6vKqjPHhHa0A7ONgGHJhPblUQqYt3dBBBRvTBPlI6lOGzAQwanGns2aZwVyGldG1UqFfY%2FIQfSIaQFppUahR79RQIyJitWAJWDhLewwfbm92uSJgJwKjfGidTINkdm&X-Amz-Signature=9316d80b2b7d58262aebd264c4083e84e6339572cc1b0a6d2703bcad1b2b988e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

