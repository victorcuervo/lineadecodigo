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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYKXVUBE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVXvAS085dWJfZav6tBw%2FVF2daOKnMMwgalMnGE%2FJSgQIhANip0yhPNxe7OZkWLUm9cFhqaKdJGIQ3XX%2FXb82VYQ1WKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz54KyYLDw5i%2F31S5Mq3APgOB1FbY5HuF152H2vcVY4clkHKIvHq4am1ajXP5ZXzU2YtRPC%2FZ8QtZELUaL0ZP2q9WT03c%2Bl6Cjw%2B5f%2FKPzwgCiDq3Tgj06IuCGj0xmuFZ8QwDbTmH%2FWr2O8B83IqDqaEBfZCps8F1Z0%2BceiTO0qpzVs%2BIZ0ce5%2BKYJerdDFeDY%2BLeCeM2ztP5tQMuKbdcu%2BT7U6rWL8yxdgOLaL0hUhpl0zV3PExDVg9n8KHVG1RAhYyfShTNhXoJa0ZRcNwZZsn6kUVGC%2F6Rzx2d%2FCNmBi7xMKhFH85VCrSKLG%2BoJdZz33G7seaLTBAF65%2BkvryTFXnIcu9B6kKiTzF8ydcJ8eFPNHkGYEH%2BjjLV9VrJjhy%2Bx3DCsqTC4TWotuI8mXBrX4mLPqqTo2DDkpnjY0kv%2Bdnohv1ltSSK7NiyQaBlFKcQq0sZcJjCBMzHJOF8JWBo2Nv81z2PixIiHaSPDcoBvI%2FE5BZGbMjsk7ywNQ%2B7fTboQXcJI%2FVTvHjwNqte5DSk%2FeAJKVrayDahZe0zEfra9ipRBYV%2B5SWYpl6iIP70tAGkqpgbSvKWjsA9goYNyMHMG9X1Vmh5clmsxgLAfMThUEynataVtdmrl9B6JldU7glHUEJUmwEroA%2B9bOTDDUv9bJBjqkAaelRTMvmdTfkjulVIEraNOuYH33F8KcmkprmcIGAcxWys0dAmMUF1PyP3OyEOnSkpKTTPkf4q0VBJ3Vr9M7EmmwAaWLhqLGd%2Fx9hMg8%2B6R%2BOGkmP5gaXXZKX1Ksl1Qtvm30Felffkt%2FhH8YadyrDvW2nhrzNOUom4hCnCJePTYUboVgV8Tr5pLmoIngfA8VNvxhzZky%2BjS13aM5NzHYseJKwGfT&X-Amz-Signature=5c109337be54c41e6661254a23aa93791469998b21470f5f39ced06d9ee08566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRB7CE7J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyJh83T%2BrWSvVdEfmVvlMYOvh9evTCSLbXAF8%2BftTRnAIhANkGjBCYqiLNMt28ye0487zqDxOzwcIllsm6oAxrqp94KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUBrB4yTakjM3wQf4q3AOCpdhwcpmZmI2fh7cLd9L5865J1HjndQtdphMjjrrU1KkRUA4WOfoR9mgUsS3uO4%2BJnq6MZCvFQrW7Sayk96vha6XdTN4LpS9bxxtPAJiKwfHVhwzOiVxvwpcj8YtoOuGOQO5nzLXuD%2BfAp7RZtM3ulfttVxPvzQoGnfJTBaa3EUYi61Q4GM8zQlVS3l%2BrfnlYH0JIWxAZsffhlWSYMJ%2FfavacMcLylxAgKCUfmqdaaWDFjQqX1Q9o1Sm4x40VumUI9pnAHcHaWhTXR9GqhEObhkyxsXq8UqFm4ZkYzwUXPHPjzVyT1DYs2ZVf8UuKUuZHOwR6f%2FM%2FMSt2vB3KK7%2FWInhGr43noBqurVE0cMU%2Bo9okLZHfx%2Fog8h5nAlJL3li3TrgaVJt4H0HWieGZBl%2FEleYWK%2BKtQu2GYd%2Fs4R8qL09qL7ePtcFzG6YFfNUl9VPun%2FcJlVLvG6NoluO6X5xX0%2BWDT0mDz64EJRNs6x%2Bv%2FAUP8ZQ8gNS%2BqGwc57XkWTyg9oCjN9zbzmvoP6HWm2QlGPOviAASypIpfATY6NwvA8U01NePy95f5MdWv2BGgog%2FEdWin9Zq3tthc7zhCk4ctdd9pg519QyA%2Fuih2mhWAEjOaICE3%2BRHmB%2FDejDVudbJBjqkAUGLJ13H1aB9AOuw2I8aE8UkKnojuW1zL6rTcZR48tNdzBYUf1cY4vRuypFcCJj5on%2BIo5VC84kUyiFkeHj6DxGkbDvv9mRGKcs5EYgvijBGzjL6mgDq31cvR4ZKYx0wlBQrYncSzGxlJkRVcnNpnUV%2FwKYsS7QiVR5F3D8%2BL6ueotw9OBLjdyVZWZT0cZbjcaGRcghs9AM8FpKP7poHI7G4nwCo&X-Amz-Signature=fe49a12c0fd5f8761dc5e3f3957e51cf2a32b0509d9baa37fe31fa104951279e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

