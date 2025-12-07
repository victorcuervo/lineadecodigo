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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJ2N324%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaqx%2FgLA0r7vl3SjAi2acYWurDnloaFbzfPyeJxVbqgIgKJCpwkKRMbJqc%2FNRwhRQupAXnkbNZDF8yebadZimi0MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRzicC0iD26wd5kiCrcA%2F%2FOBkFD1xLrLFiWo%2BIffsPpO6Tnd%2F2zy8Z%2FICwppPS5hf1PK6idnKee%2Fduwb5Anzoz1xjncTrakvgWKas3uHT%2FBtAArMK9ogdW6%2FtD0f7BygHDe2gxlrWGWm%2BW0zlD%2BDzU3H8lUanHXixmuvg%2F40C1pbJaOabMwh%2Fkxx9VMe2EFpGKL0UZUVlMYAQt7u%2BFgoxmnZKNRoTy2BtFph6vPsEFIz%2FfPaGXSvkRyuG5aKb4%2F2M%2F930oCttJ2%2BsRHg1I4G%2FvxauVrbK%2Behmcfk09eFKs30wqWFZaMjaI1ga%2F4dF%2Fcd2Be%2BlCe6z7FPIdwl57O6Q4M1nY1U%2BDnK5E5rnUE9S9MjBFchzErWG3WI2jFFRCfDYK6TYvL1Cgmvo9CIy5aPGsHhdUwiTii5uFDhQoeV5PWb%2FUyWcdtZQXoAjeiADYlCGbphex9cY%2BePPEHpxaEgtdsuSLug%2BPgiXpJT%2Fcjo0Nz8AKWSXGza1F2A2My2ES%2B6PK8nYFaDFhpb7FRPVIlV6GSFbfwCUz04tS38XbDq%2FrA5gNpmGtG9JfPpAF0oP7ghhU44IVbIGlzcl%2Fqy541PUNqNFNmn2nONdNocqa8bBmCHX5jBb%2FcNTjtIUnidEvI7kr4LFFiyMClnqItMLS51skGOqUB3FeOaQDHZneZsRT%2FPpHkOV5b2EAORgPd%2FhAky4ei6273Ml7Zg7JQvYFNP3uSSYko9L0QxxNJoqn5YAvpdGf39J1qvFvWw06zSP19uw5148ccqJENH4S5tw3lo3bDDGq6WjdHzBeYZEXdZHw7vniUOsoXbuW3MEK%2F2xzAvtpUTqMchgQNwUYYjdvwIECfQiSLXaRvUnCmlQspsHzy5Qim55Z1Kg%2Bc&X-Amz-Signature=94855142a73a4e9b51776e5400d1ed125adee8969a37d490a4897892ea9ae9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673DLV7SY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC07ldmdZV8o51uADph8z26iaM8dc%2FoAn4B9oVdiPu6vwIgDt2Wksu%2FhObDp3k753RuAvRAm3RrZAsfThgrXBC82u4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILJ8EI7a7%2FpulByuSrcA5SX2IVrOW%2FiHSx%2FdYx1EGaAgBSGBQForxAS5coHrVgx3ksotI9JBsx6DkQ5mS1TLNii9gRU4E%2Bzx6adGtmAnUneV43Dp8nYa4iuQ%2B93BNfn0FoIfcDYPAocD6O0ykRfl8Zj5ezxHAbHu3FmVOVYpww0lB2bQWoweFvOiZ8%2FJpa1pnK1fFQNDyg2SU70hdg7zS9tjrpnFYx4XlYGhCUO7Isj5vJCenFrFp1AJUV0w67rK%2BGahfd%2BgDjqm3ls9eb91xsR5Qv2psx0UMT0hCK9zm65KtC6YpVtJcmun8vMxLYINJBJbaOhG7BGRqPQETgnzyotEguuPHv69mttCKiz9pXiTIApVnh2sNYLLUjww%2BNYKZpgFhQ%2B8Xaj0dA9lvOEpHfvuhHer6JtYKXHe5KjzbRBpSRJ5ZtFo1RzFcDD79hIOCVrTI8gqLU6isE8pOnKnrd7zwWBaIQwJ3p8gVBO9G6Uh1tuFvzqufPTnRxjCHHxloD5c7qWasuQqSINfXNbfCRycaJIHYPKN8M9DjY7B%2FI%2BXwQ7dr6Khim4KdVi8yamFvk01JZqQaOZk0z0nSiERPw%2B8cwJEf7ay0ixAJCCETjfYk2APOKfIuUV%2FsglYm522lyFngjJ0Ett1ww3MNO51skGOqUBlbyAXwS81EFDbkBYn%2FjKHWxLblENqfpiKlPHG6YwJzHoa6DMwSdKIYJAjxnl1Ihu3hbYzIU8nmU2m4rtMEbns%2Fz6eEHWfFmi8rkllx2gxVqamK9GNHglHSYOPjGJsYp%2BZ7wMzOYSHnSHDzMXZ0K%2FlwCfIPzcvAPyknxOcdjxwhOxYk1w1z8hHA8y17dDdv7tmS3exe09n8h6w1Y6THinHztDZYXg&X-Amz-Signature=c15888dd10a314153b7c6aaa9167f72959002c83817fbed372248810fc035fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

