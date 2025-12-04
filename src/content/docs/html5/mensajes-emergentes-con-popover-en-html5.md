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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663372HQKJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDMePbfJLH7gGmfLPNkKd%2FRR9%2Fu7tVdnX2Lm3MZzcLHYgIhAOaUv%2FVStZFGuQ%2Bg1ybUE%2FpaD%2BxNrWk82Xbs0porXSt7Kv8DCD0QABoMNjM3NDIzMTgzODA1IgzNyDHE7PSFZCyycJcq3AOjMaqb0RgGNC7youTqYrVrI2OLvlWRWBJnSc7GbVOG%2BY%2B%2FChxIvmdSKLVoqh%2FQPbvJwkEt8D29uvYaysjdVDjxqVnVtHdBYQ%2BtqT4pjMQ7lxF%2FsP%2FFJE83P6fXqQKw9GayWGxKVSEIlSpAA5w4UpgoXNlhrq%2B76FtpnEGu50K1LS6U%2BRM%2F%2FVoCQyfYh%2FR5qeMM8KackBzqkgTm9JuSZyFnnEX8IXd5IkHkOtAOF1FgR%2FWvi7LlA9U1vqlJX8S0aWIR2C8qr87h5EBTHF454Eg2NovxFcBBg4SKzb7iGQrlRCODDUFsJNjhfKqz0cXAdN5vxck1%2BbHF3xYgjvng7Az8XwcUDwr%2BS2JB8pKs%2By062lB0l%2F9TyVgZEzN39QZCJWZVN3NCNb7ziTKoh2sXHeP1iZan3qrUT7tnl4PVypsRHvJXgtImGvXzVYDtEWmBQLay%2B7BsF%2FaPp9Z448Bvu5DDWXHjrQjulU0XAUBBZRwaJsWHd%2F6YWmieNlwv3YQTmAT6X8pjbjxU3cLG7a6HcxiocWJETxd9heOorQf9UJQBAdnNremS4%2BhulNM3h0wAsHYWzFUa2OuJdVXr2me%2B%2F5bvBlFRXlV1fogSDx1uc%2BaxAylsOiAQc6C1zRD1YDCzkMTJBjqkAR%2FVbbiEpcmkh9Ip1MxpDWs3FXzzpaHzpyHohXQR4GEnMArM6vHD6WuKOHLxOalGinbQcHtYoBiVYFuJ%2F2oiFFbkThDRPgqPXD9fad2ak2DMCRSNUWCuKpDNOBRsNzS4i6wMLMVlGLaSvSpQ25aH9eFwXez3S%2BsX32hmLHZ%2BMTkUM%2BCPdgI73PdG4B%2BuU52FfE4rS0N0kaZiuwfpHwyssA8E13St&X-Amz-Signature=80e316e942a954bbcf33d1626a742ec86579f1b1f731eb752b34399d8ad697e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWA6MKLD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFyw01UoIQMM8AMofESI%2FOyHSlzLejLqsztfTo43npfnAiAQi0fUF%2BzvxuPajioKAGwf9ESch1hBAk%2BQn8Luhf0NHir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYYijVkeUhnDRpWLcKtwD81Mo4IFe7%2BANz52zJ9%2FH4M8VDQJg5IkwR6j0E7ArRFjB1WzEORCY%2BoPTKuDqu1wK4zi2c0ASMRTYOl4DKaE%2BqyllvpZagrybNPNx5koJtYhNmqUwWoPMV7p9COrDEkJIavUEGaeEAI5QALcPg7huJgyzQKhIZ3MZH0C2ewHgxaT8ODU%2BMozCNKbdsOdi8kNxwjECIIl7nd5CnpXUC1igO51bdqyCfIR00vlga5fdX1kmYPTbSNo8Kn93uJB%2BOawXytKM2VWONja8AxD818Jns0E9sZCLtbUJkbkB5B0er%2Bt2BC81RXsKoYeVZiGDrVTT0mzckrln0UcGhcc09fYQm3quYGaCmSwOEhunK8ADoBse5fjCCYw8j%2BdszibsyM0qJvv59ekREQ7Nj2ANvg9bcC6%2Bj%2FrsbpQdcKAjy0V4T7f9X0W66IHBCkgQXqAB7LHbkNOKPeQckmUPLz01ievEx3thjBa0HOZaGUAlDhTKuSUMYBnMB%2BNjit7iVR8nlyZ67DTmn0Gybcmf95Zx0aPRCP1YYqfduaBuPW%2FA6yKdW7e9RcoIHWeqRN6YgPm3HWAhQCkcBQnUb1I2JVm3SiDpg%2Fm0dm317rgrMm3pyX4eszxdneCND2I8CpfcNEswnZHEyQY6pgE%2B4OmH5olWerU1jaVp7K26Fzmjyt%2F6I8dXQMCSVwOVww70GcOMgy3prPZN7QPzvPnfl9I5SwGaO%2Fs7iL20UXAWmGzH6JGv7rGBrWKqTCmS%2FKLE4XOQRSromzlsOAw21%2BF6JylQP4X2%2BS1ZqvVdYegfjlBuC1YxP7e7zdQ8eH5XTpj9%2FWgfilAcMXJAQ%2BQV7nGD0LZVfzzK7V26SJTaZLVF59dAg3N6&X-Amz-Signature=c38e0535904f0cc32a8a6096f26ce6cd4cac4dbd6dbec01c206a0a36d25bc903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

