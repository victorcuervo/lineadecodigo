---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LX7QB3Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGPQYn0RynRPKz4KTJCDsED84ZgKC8q6dMIP6xHsWTd6AiBVmNczw2YX4JF2U4xwPG%2BqxVOmCWeWFt3wxYTnvmTlnCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMg0MGKwXNTLBYkBnuKtwDhBYebnvQXxFedwL4aooXYeXZrKXG3YLbotDi0kJN4FAsTlIn6q7NkEJ42szOv6MpkNqWEJBVJLi%2BifEzIERaUxAH3zg9rPJp5ABv5DH00oonSouYzMYCFiP9zH9iGuhmBZxT6UmVL7l%2FruuSbN8j5IW8BYf1EgPeJxZfmxUNtLrDuJZXdONlaFJ9pc49XazTLUiOcA6ZpfaV%2F0D7MKOe8GTedTHFUfedBOW2QZ8tL6ZUJwhx9hKlLuCcS%2FfPNBHsZ7uGSdEHbQwKhvuZn%2BUdK0kk10MznRKh9bI2hnHUzhVL26FWj%2FcDVUp2dHE7Nn6p1%2FUcCdv9ZvRXOR9E296XaaG9fCSPoQ2FGPbAvU8zhNW0rk3ofgxzL2WdLimHi54WkZfjSgFXFzEDggBzGFfXtaLRX1duHxZzWEwNRkyQjB6G8V54mm0Ob9ciTLXqPNiTMhvCK1BDd9bFiwZswNIMISUXe1II0Z08v2s124Ka%2BLnuYxNa%2BY28Qod9IDZ3UJ3Awoouu%2BDS1clBftaXuO8EyTNGn49h3f1ihOqD8qgY5rdHddLSRL93%2BBFh%2BXRgW3MUTGo72qTTXKfzIcujDIwksLonjuwKM3gvR8H84jRO5nUtOAWAklPTHrR%2FESowg93CyQY6pgG5Jqv5%2BCeSIJSC8XzE8CAOVu%2BN5rjqPrc%2FMJwSobmjGGZ5z5Ljjx49f%2FLZANX6uP3af6KCiJvpfmZG1O3VSMcLpEATpBmQca7gkcraGa%2Ff0gedY8TsUPM4ei5ApsEDStQxyWDhkpI1E%2BMNfszgU%2FsBU3Mwd1TVSZvEdDLci3oN7bX%2FWECUjg0QhdSqrWStCI1X5a%2FkV16C6ABT8rIxv1GwOkCnhNYg&X-Amz-Signature=cccc686b183ae72e7e0fdb578a00c07dfc7cc2faf3f50eb7c187c596d2318492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LX7QB3Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGPQYn0RynRPKz4KTJCDsED84ZgKC8q6dMIP6xHsWTd6AiBVmNczw2YX4JF2U4xwPG%2BqxVOmCWeWFt3wxYTnvmTlnCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMg0MGKwXNTLBYkBnuKtwDhBYebnvQXxFedwL4aooXYeXZrKXG3YLbotDi0kJN4FAsTlIn6q7NkEJ42szOv6MpkNqWEJBVJLi%2BifEzIERaUxAH3zg9rPJp5ABv5DH00oonSouYzMYCFiP9zH9iGuhmBZxT6UmVL7l%2FruuSbN8j5IW8BYf1EgPeJxZfmxUNtLrDuJZXdONlaFJ9pc49XazTLUiOcA6ZpfaV%2F0D7MKOe8GTedTHFUfedBOW2QZ8tL6ZUJwhx9hKlLuCcS%2FfPNBHsZ7uGSdEHbQwKhvuZn%2BUdK0kk10MznRKh9bI2hnHUzhVL26FWj%2FcDVUp2dHE7Nn6p1%2FUcCdv9ZvRXOR9E296XaaG9fCSPoQ2FGPbAvU8zhNW0rk3ofgxzL2WdLimHi54WkZfjSgFXFzEDggBzGFfXtaLRX1duHxZzWEwNRkyQjB6G8V54mm0Ob9ciTLXqPNiTMhvCK1BDd9bFiwZswNIMISUXe1II0Z08v2s124Ka%2BLnuYxNa%2BY28Qod9IDZ3UJ3Awoouu%2BDS1clBftaXuO8EyTNGn49h3f1ihOqD8qgY5rdHddLSRL93%2BBFh%2BXRgW3MUTGo72qTTXKfzIcujDIwksLonjuwKM3gvR8H84jRO5nUtOAWAklPTHrR%2FESowg93CyQY6pgG5Jqv5%2BCeSIJSC8XzE8CAOVu%2BN5rjqPrc%2FMJwSobmjGGZ5z5Ljjx49f%2FLZANX6uP3af6KCiJvpfmZG1O3VSMcLpEATpBmQca7gkcraGa%2Ff0gedY8TsUPM4ei5ApsEDStQxyWDhkpI1E%2BMNfszgU%2FsBU3Mwd1TVSZvEdDLci3oN7bX%2FWECUjg0QhdSqrWStCI1X5a%2FkV16C6ABT8rIxv1GwOkCnhNYg&X-Amz-Signature=a4350e493d48a97e8adf6d20feb3ef6eb19a006600388925deaa306f51fa607b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

