---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HHEDCL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSArKZ%2FSRYeYtGttpPal4RHmhOaQ2Q6cTLt4p0ac7nswIhANNRXC4Se8MWc40KBwEwy1LxLGjOk6OWlGOxQw5VXm42KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFR4xApPBPIwtKqoUq3ANsqtMoJRAYzme4ndki21umAisiAFrNC8f3rqXZtIzG%2BxHaTiDaq%2FCrnfNQd5Xk5GYzZQHFUOCTSigFUE8uP4m8%2FafRi4JSOdCBBcsdAu04NorA5PrK%2BgWWBkTPgINjGTgTfc%2BjlwxHqEqqG%2FnAW7m5Jfj%2BiLZzMwfUOLmw8ge%2FP7jQTb0zSklDFxeBPYwcRnKFw%2B2iI8pJ%2FYn87LgdECHAZZpILr7PTS0xr2jYrx543x%2FUXe5ag4vl%2FY%2FmXRIPXmZy3jbvYL7CIPODnIq%2FKU7wVIvhYo9Q77l2BfpZKQfT6l5LPJhxgrQU12JeTNPTmgQnRG7fl2MY37ESN6Yrem%2BD4cU7hcSyY98SGX0djM1i99W50FXj3TdVXwQiyEsDGhUUDMtdMqYMloSJo4dzplCdSugQ3P1CDd%2B2YcJ6%2FJX6v9uGpWGOIWG46d%2BugkpxDFbZFKAqpI%2BMRyDa0pKAw2jIkESeLaAhPbCw8oVSyaSBBkOaIDfK6HV4IMHqvWxCRPSyNJpRRR8GdfTGE7EWa6kbLrpIljLcGZFzd%2FxV9JSyuXzelxrYpBoBYrJPAqhu0ZUbgy5vhA6C%2BouDPwoyBiNdC0ypjKeENpj0WW%2B7BzFku%2FOIvzKouS5ciTnKHDD1xtfJBjqkAc0wxeI%2FcUyerf71Y2oMThT21WZT1k8rftmM6e91wCKGxCC4asJ3BnrUTo9oyGTESH%2ByLQ%2FhH3%2FsPLeO0wMoki92zuqxjoEeVu4CzRFalPcxamkt1RNR6vdcBn4FnV6f7pKJnIRVx5KWzrQrrTFY6ueJDbLGpun4e8t4uM0C1PZaBOpxWTH9NHNfx1XaJqDClSZGJZ5hwgWS4az8ptGWXbH2dEza&X-Amz-Signature=a839f39e59b905d816f200f3f1a6760c9fafaf61053bd0a9bfeb13413a4e06c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HHEDCL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSArKZ%2FSRYeYtGttpPal4RHmhOaQ2Q6cTLt4p0ac7nswIhANNRXC4Se8MWc40KBwEwy1LxLGjOk6OWlGOxQw5VXm42KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFR4xApPBPIwtKqoUq3ANsqtMoJRAYzme4ndki21umAisiAFrNC8f3rqXZtIzG%2BxHaTiDaq%2FCrnfNQd5Xk5GYzZQHFUOCTSigFUE8uP4m8%2FafRi4JSOdCBBcsdAu04NorA5PrK%2BgWWBkTPgINjGTgTfc%2BjlwxHqEqqG%2FnAW7m5Jfj%2BiLZzMwfUOLmw8ge%2FP7jQTb0zSklDFxeBPYwcRnKFw%2B2iI8pJ%2FYn87LgdECHAZZpILr7PTS0xr2jYrx543x%2FUXe5ag4vl%2FY%2FmXRIPXmZy3jbvYL7CIPODnIq%2FKU7wVIvhYo9Q77l2BfpZKQfT6l5LPJhxgrQU12JeTNPTmgQnRG7fl2MY37ESN6Yrem%2BD4cU7hcSyY98SGX0djM1i99W50FXj3TdVXwQiyEsDGhUUDMtdMqYMloSJo4dzplCdSugQ3P1CDd%2B2YcJ6%2FJX6v9uGpWGOIWG46d%2BugkpxDFbZFKAqpI%2BMRyDa0pKAw2jIkESeLaAhPbCw8oVSyaSBBkOaIDfK6HV4IMHqvWxCRPSyNJpRRR8GdfTGE7EWa6kbLrpIljLcGZFzd%2FxV9JSyuXzelxrYpBoBYrJPAqhu0ZUbgy5vhA6C%2BouDPwoyBiNdC0ypjKeENpj0WW%2B7BzFku%2FOIvzKouS5ciTnKHDD1xtfJBjqkAc0wxeI%2FcUyerf71Y2oMThT21WZT1k8rftmM6e91wCKGxCC4asJ3BnrUTo9oyGTESH%2ByLQ%2FhH3%2FsPLeO0wMoki92zuqxjoEeVu4CzRFalPcxamkt1RNR6vdcBn4FnV6f7pKJnIRVx5KWzrQrrTFY6ueJDbLGpun4e8t4uM0C1PZaBOpxWTH9NHNfx1XaJqDClSZGJZ5hwgWS4az8ptGWXbH2dEza&X-Amz-Signature=6415371d6a7e23755234b8b221784e06a0cf83aad2316312a5ed952691343d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

