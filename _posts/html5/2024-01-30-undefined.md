---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLS46KAI%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCn3YcdoR3K0f4KoaQKMNbff6P0VvXMd4cNIrJ9pB%2BtKAIhAN%2Bz%2B9eqvdDNb%2B9JPusTaf1PEMYsZGug515lSUIqj2N5Kv8DCCAQABoMNjM3NDIzMTgzODA1IgxQqkc04NlvGGeu3f4q3AOHp1clno4u2yqXGfMFdyo15sPETrjtxi02Z8hdB%2ByqKP56vi5hYo0DkRyzFhpQ%2FkyngWpbOKoZdnAojHAHeFPOVDpThMeqnYt5HZMUD3UkaPdZEduKsNLd42JEQfVCEoDqqh6k3gzezEXRoiQvPli5%2FpeOUYs%2BCla6ZZxTpg1Vr94Q5SmtuZStUd2iacLMsl08eaiCgqbFWcbAfdn3TZ2K%2BSPH1r1gcmdM0tZIAWEEWq3ACxO61c3I54cyllkdPSaecr7A7O%2Ffrt%2FVjjepESXNJr6q0otNdMLLuLAf%2FSebOuxhDtMtsJIAX0SGLvXEG068nLeGXcirPfc2FBlBI0v0f5fp2tnfBSDcewQEgQg%2FRWIikO2%2FRv9Ufmj8Hy1I4W%2BXCMvm1bEdzPEwolLorpUOkNzlYjHJfC%2BAOy1u6pO3wNM%2BOEsaQC%2ByO07%2FEf7gASLcSaR8RmL1TTGBXc3WqW9avHeDyFsVLFODOYWzLZJXTQe%2FY5xf%2FaAgGKhhn6fWLNzZebCLMGP9FXL8yhYfDtqhVOIkzdXEEQt7sTsXYiXtsOS32CWpMkYaUS4ToAFVRxOv%2FTTVExPwN0x8M3%2Bsqo%2FwRyzdEW3wW5zkfWGj1Nb5NyhvG3Ru4NqYHWIy%2FDCK5b3JBjqkAWeaVrBd4PjZcBnPwAd810Hj6M7wGAaq8TcQO4ZRHQM0Y5dZEdAchLxcPf%2FRs9CEUNE2Q8e34NMttA8lhQUW4eOZJ6c60ltHWhmFumg1L0msE6LUki0Wzvwm02g32TXiUHGbUMPRL%2BhhI7xKux77JTPQ5HvDcUhCDRXTKZ%2F4rtM8a01ln9TxSk9kOy%2FFIm9b49cF%2BTnmYdpyEh2f9w0jCAGobKKN&X-Amz-Signature=3c6d8700e955a475f1386db858a96f2486d381c5b616e6d99fc2c2e773afc2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MSDN36%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIARtRHSvCy%2Fc2N1wD5m6T8FoOiW5LPEqhKlUC5gd33NVAiEAqwpTZzB9FpZx0YFl6%2FCEfygfRQXTv1o%2Bzz26bwfigwoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKdSAIyLlYxjl9C%2FZyrcA9nMwFOGDMOyppD7niRCR5d2pKjzkmfZBO8g8yX0bos9FT2yfwm9zH3DPKqCMFkcYongjKfbkUFho32jTk2wo49XZ%2FgtCPKxH7LnienNGbcgWe7sa9FcwE9l7%2FOAJDPaO0KHJV1k9JYqy3CqO0HbVMrSpSEFkcuv4oIjn1355po53qyIBPVrmpJCAaqeogiE%2BSTr3HnHQK6L%2Bw7jACQAfIrG0bFQZ0ysjUgS0pDAgl1ivq%2FSVeM2q5rg2CctLKosp7bH74XbI7IRCYh5%2B8ewyEQKYxr%2Frn6qQZREW4TLAloG%2B0D9N9APfWJ%2BwuesezGl%2BwzQkCdsEPSXebUSxbnA4fFAbBj9OOwStwH0yRLCAKtUwSekNm6gQRR44UtAJU719xvqG5x1kI%2BndVKGsvTjG1ybE6sT9oYzX%2BLfrSo1YJjlC8qxsW0u3BOZfkjS%2F6EVxwvoFYm4QIoSOhcSs%2FV5aRGwdiE%2FiDsTkAZ%2FRh2M%2FabciwRP3inP%2F%2B%2BzBGAGAcnmnHmCcmMZ2lDqv1OT%2BSu1XewLTygdcrhTRDiZroIIw6E0KZw%2FaJu5lolqvvWL86%2B5UN9ipKyA99bxtFbU6qS%2FhzWXvSyhPTJsLH31DkagHaqbfPzxg3UcSmUZ6WozMLzkvckGOqUBBl60NpHeDzV%2BSabrB3zDZOw4EREbOL%2BMTa9kiDS86IH3K1POu25zM91bznbI9OHRzKGVweKr3pZin%2BmhgeezSU5Sx6WOP9MLs5g%2F%2B1V5M1PrXuSA7UtL1AaCLMnVCWAjNrzwqoV4pYndHULy6%2FzbDjpo5tjOZbJlfh5RqWprwLNQqHWo3r%2F2ip2zPO6YZ0wY1OaCsjXI%2BFw23IGomG0o%2F40AeDb8&X-Amz-Signature=5dbeae9fd8daca073499e7287f2959af45f0e9dca67dfa7797347855fe42c496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

