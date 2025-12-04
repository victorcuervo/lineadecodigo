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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCT45IZ4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDlxV16wcmQuWifx%2Fo2FxbjoflwOGoIvhsv0jPTmoIrkwIhAIlr9mYDaGcXkw4olI9ceu5owp1v2NVWC1cpFYE26%2BGeKv8DCD8QABoMNjM3NDIzMTgzODA1IgzYrCNgAn9oal5VaPMq3APCVBBOQ%2Bcsa%2FC3Cu6JqBygbMdetPk6H3acGcD3oVckJ0K%2BFB1iBN825Z459W78pdb8OJtm9x7JWfLwEEXdqfZHt6fiTNld3WGjFTwvBj7SLzs%2BD7W2pHo8Qg5MoOtYSLYOujB3Ef405vgWrPsMMWlS8%2BpFxJvHpbro5BoOTUC5wiuJbDlwEGpxzVUBkse2VmX%2BwvCLiL6rhUD6MXuE1tXJIU0JqQ8BVGgNuOPzF9kP6e0yWcl2ooRU9%2BgXMKQ9eocWUksV6hEDP%2B2Q1wQKHKp6f5%2FsiXIWOh%2BfVFQKYSE5AwO9RFASuljIV56Ymv%2BaNrTh1OxJnrZvBFvxSRbcjCs9trlbzWovIKP0JaOxUrc7FSfAGdvqBnufWbDl11Uw8ZM9ic4GyiqlbmOMFGbfx0uFve4ZY1%2FqQEWXp481C4FbYuHf9f9Rs%2Fbvj4zm4cHucObzzPH5W8NpYQl8hzq7Zq1OqyQ%2F2df0dx8QYKZ5n1u22Izspsb8h06A6Ls2MUM%2FHb8uxywGhd9g%2FalzgvpE5mgVrmJub4rf%2BQ0mJmO6tQsGo1GWiQpDWHVQiiYUogRtLxVKZ37%2FVskULiuX%2FxvzNaDK%2BXi2jYcnGsmby2X0g4RgcdQUpP6QNay8DKicLTCmysTJBjqkAX2AvhUVdCelwVPwJ0cy78PkAaCFc%2BA3l9Y3QKBGoy5zipfV%2FjNPuOYoPoo6iggrHXU4aQk8KB8c%2BKixF2pDAmq6cfQnpj4LtOM6RTmmWcEf0FkVoRLL1cIb5JneP9NrgKohyV6VFAMS7JQXQamIwCQCpV0dRRwtb8KdGTNVVCxkHJytsdlRgRGgCCbKJR1X3buCrYaIIkiyadiTlJuYywrNxupg&X-Amz-Signature=fac21bf0bda8b88d3491466a926fd7bb31b9050a23cd472b5190c19f749b0612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S7EUD2H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2B3ZWbRYwmU7oRFVxjGT9EfE3sAkosSzrIEngPuch10AiAetQeiA6Ow9MX83b3tPwzmcI1GYI8euBofeFbkYLcHuir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMHEr9bwANFDv8T3JPKtwDyn9VT3FGXU4zHy3Ssdsq8iCOHo%2FjQBivp%2BjTdXYf33HlH6ErEMPClKisV7eXm%2B4sQivhvFrLDaGFFNz3Yd%2BtKi7Uu%2BxKKkdDFVS7xHHM7Xs0pe3Pc0UkpdB5xAJvI%2FtwTQ82NLFy9BDzpmHkxCywszKy4vr5lSwOLcfo9QgPEa5AaobQeqy476nIf5Hble%2FVKdht2eT%2FJKhYsEpeaUgKx29zOhOjG058vPu0xEY%2FM2PIqzvAB3PRgEkQuLGTHS57G0JcMekGyNwFbs%2BChxJVg%2FnKdvbt%2FE2j4b7UKL%2FDDua2YrkZELzNnG%2Fp9Au7811QvXPD4Ig4E7PpkVfJWL4SrxoiTz0JuWyPSS5pjZGfIEt2gu078%2BMCi%2BmBbScAImlIlJBMc32WszKASKQ5T4KdcrBDq0tSUiz8lS7kashUcceGieacIYI9gvGDM42TP4ud8eFfjw9EjNX6kxHZjGfSQkw55D6kxqDqebbIXOB3zBImbUHxegdD1Ge0xvpmLxr4WEC4OerXblUJ%2F6wyEjusge8eu6%2FY534UXtiGqjH4OEAJaH0K9b05pGtmobeahkhljMBahV30DiBwCNUylgI9vkqX%2F%2FibnLGzf5uZ8JOR7EHnYCax5VX7heURP%2FAwuMvEyQY6pgEqmAyjl3LFk%2FLoOIt4bFYQjdc25VOrhqv%2BeUo7WdeSDufcxc%2B%2BT%2BkRzK39fvwAIYj%2FYrc1k8%2BWwL0Pz85fgTYMMcaqHf45cUBsM%2BqLUd%2Fy8lHqQTR%2FwhPOpX2K%2FoeZaJGkagfK%2ByIOxFUx8ztmqDkeWECBlv7PAEojamhcOr9k59laTiSZHkl3mMmhTCFsT4o9ZrlnBhwKUp5aS4ol0n%2BWBvNwAnmj&X-Amz-Signature=88547cf1630bc8768a0f445093d86b97835142cb78f297a45b84c2a646ba544e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

