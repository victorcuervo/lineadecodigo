---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNF5CT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTqOMsHWVXTcLVxB4KWbRwwgzMT3rNSjBzNaSnhbFTFAiAEzwN%2FhGZpLHy1F8JM74FgTvFqJqA8mF7d%2BpDX3bbXjir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMC01eCKWyWy7ba501KtwD56nCp0eQVQvcYX5kdwv9duE78QwhPcfH5vEt5bC%2FkjOzlR1Vhb65tRrZpvg0K3m9R88XV8dBClAGhRkBS9vdtMExD4u63u68xMcc%2BDbMLs3Uh4OaQYOZlRW6mUwJ1yMVM533SLqkUB969faMUkJtFbQNhTKldtyQroGDw4MmlpIRAdTAQrDog372FhYQLX1mlNBMw3qUoyz4nWy9LBRNhuotI25lLQmZBoclI8o2gcP0X%2BSu4xXmbpWrsiBJuzKWXBPM3f%2BqwsKZAGxF4JVpEx1tZ975M6orZoq53%2BSz%2FRPe8EV0umK5o5OiEg3liT%2Bcf6uB6Y2oP%2BV8VTnIf3amVy5tmlzuPhabz%2BnP3sU1384pqnd9jEEy0tUerJjPABKz7tA8rRWPIWAoZq6K71N4IQyAXaZjuoIEYnB1w8q7Cc4wSnkTm8SwiIwizfOVoBhX5Tgz1q7Fp2YBuxJRGNr8KWOFmyOimc5VsshEdOobeR04JPqHYxnhkevGTQLyFzbiPr%2BuAxsQH99mQ88GBzm%2FUpeu8BV%2BXd%2B4S5NkdH1k0nfbLwWbUHseWb9rgs2uAiH763n5jkJINPXDbn6vy%2Bf8y9KPdOXVUgnDwCi9znKJBdUaBTgWGuAeYbBqRFAw0q7JyQY6pgHuf%2BPjbn0FgcHlgdbV7532XsC%2FCwgsRQR7yvLfX8vctCr00uRS72lp33GgiI1VrbHGjM27aDOpHCwqSziNH9n7SLKODd5EPvZFAxy6WG88Bl6sgQLIvRXqIuSfXVZUF%2Bw%2BE8mjgYI%2FMQFPDPVAKmU9Bbwh%2F%2FSW5vEBdOpja9UDz2SwBLG2WhG8uowO0d13CRmlUj9MAoRwWeiMM9BiQBfGU0FNXEDy&X-Amz-Signature=da82fd04059f32a37bb5d5770680edad2c8e16af6f1074eaabe99569481eefa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNF5CT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTqOMsHWVXTcLVxB4KWbRwwgzMT3rNSjBzNaSnhbFTFAiAEzwN%2FhGZpLHy1F8JM74FgTvFqJqA8mF7d%2BpDX3bbXjir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMC01eCKWyWy7ba501KtwD56nCp0eQVQvcYX5kdwv9duE78QwhPcfH5vEt5bC%2FkjOzlR1Vhb65tRrZpvg0K3m9R88XV8dBClAGhRkBS9vdtMExD4u63u68xMcc%2BDbMLs3Uh4OaQYOZlRW6mUwJ1yMVM533SLqkUB969faMUkJtFbQNhTKldtyQroGDw4MmlpIRAdTAQrDog372FhYQLX1mlNBMw3qUoyz4nWy9LBRNhuotI25lLQmZBoclI8o2gcP0X%2BSu4xXmbpWrsiBJuzKWXBPM3f%2BqwsKZAGxF4JVpEx1tZ975M6orZoq53%2BSz%2FRPe8EV0umK5o5OiEg3liT%2Bcf6uB6Y2oP%2BV8VTnIf3amVy5tmlzuPhabz%2BnP3sU1384pqnd9jEEy0tUerJjPABKz7tA8rRWPIWAoZq6K71N4IQyAXaZjuoIEYnB1w8q7Cc4wSnkTm8SwiIwizfOVoBhX5Tgz1q7Fp2YBuxJRGNr8KWOFmyOimc5VsshEdOobeR04JPqHYxnhkevGTQLyFzbiPr%2BuAxsQH99mQ88GBzm%2FUpeu8BV%2BXd%2B4S5NkdH1k0nfbLwWbUHseWb9rgs2uAiH763n5jkJINPXDbn6vy%2Bf8y9KPdOXVUgnDwCi9znKJBdUaBTgWGuAeYbBqRFAw0q7JyQY6pgHuf%2BPjbn0FgcHlgdbV7532XsC%2FCwgsRQR7yvLfX8vctCr00uRS72lp33GgiI1VrbHGjM27aDOpHCwqSziNH9n7SLKODd5EPvZFAxy6WG88Bl6sgQLIvRXqIuSfXVZUF%2Bw%2BE8mjgYI%2FMQFPDPVAKmU9Bbwh%2F%2FSW5vEBdOpja9UDz2SwBLG2WhG8uowO0d13CRmlUj9MAoRwWeiMM9BiQBfGU0FNXEDy&X-Amz-Signature=7c2c917d1475bee9d0fa0bf92c44a5bf4b0325b310d1e518b4a61af6ec20a345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

