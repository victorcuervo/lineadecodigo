---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNX736F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDTFRtWWo0u6Ej7clQZN9jtZ9j8gORTZen%2Fu5Vkoy%2BReAiABmnStwWVdVHR%2Bu%2B7LAWL7UtTvsSAbAmafnYv0nciflCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2B5m1EE1%2Fv2cG9e7VKtwDM5Dr1Npi3poo%2BSDxTa2PA%2BS8agd9qLHLNDJHSs0nE4AaYy%2BtZ861eH2CT0OsaI%2Fi5EekuA6ZO%2F30Cux0mKkG9nsWPFeOPPwREXbaDV8vdjUqb5eHuUdhEjeI1RnYL6IAFzGmYDXtleES19s3z18gs8R9E9iOgMP%2FfzOBNI51CtyM%2FbuMd05dklzbmThdpmiJtJvl0UKCWjopXvvizAER9BGVtd4mYjyHufx0OVzQYVnH3Y4cnX%2BOVv6xDl84nuS6o16mNGimAeJEfXg47wFp6DfucpjsZ5u7Gwja3Y10tUt96%2BNbLE1K6uQkwZMgipUfthpwb%2F5o3Tszr5OfxS8VRjkL8kmKM4FPnk0nsplR%2BMh2vu5jZa27jkjLyh3j5BzFpDxU0%2Blh147YmKSrsIV0WwlaoMLL50t9dRs%2FN3vUVAdFLGoTkfZu2WtROJufI9OF%2Fyl9oHJGwPQHE3JYXAQRDNcIEmyGCLFY0mdUgdBVXfZEmCSyPuM6snxGZdPPlcCWpj1TjdtLqfhVz3cRUOOYLBVaCu6%2B3uzfsDwVtY43B81%2B6yYqHbL74wvpAdmPPGdjBso3jV22DJgj%2BDPJYH7dVaRT4Rkj3YuEXQm78Tv2bMct1r1Q3FJWnCx0K5Iwqt3CyQY6pgGNE8bhG%2Bpb1pIaEvLCEqGUdA0XyLE3h2LbBSUX%2BHK2oJAz3qkYFHall36eUFUZqODvzZyA3VNgfhISo4N0%2B91%2BIvRohBcYRz5RSTp%2BCEjbBSxJkotSi2rWeSd6pS6VN%2FAdullxoev%2BtWaPlkbHjuuhQPg%2FmXHyN0kjQyRcWKOc9K5ahGg1q2%2B%2F%2BUMnWNJ%2BTyUT69BxwHvWBnDeQEM3xBifX23dHXM1&X-Amz-Signature=9823e76398640cd69c85d5496d7bc66a22d2b002e4f62c85162f64c36daf34c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNX736F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDTFRtWWo0u6Ej7clQZN9jtZ9j8gORTZen%2Fu5Vkoy%2BReAiABmnStwWVdVHR%2Bu%2B7LAWL7UtTvsSAbAmafnYv0nciflCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2B5m1EE1%2Fv2cG9e7VKtwDM5Dr1Npi3poo%2BSDxTa2PA%2BS8agd9qLHLNDJHSs0nE4AaYy%2BtZ861eH2CT0OsaI%2Fi5EekuA6ZO%2F30Cux0mKkG9nsWPFeOPPwREXbaDV8vdjUqb5eHuUdhEjeI1RnYL6IAFzGmYDXtleES19s3z18gs8R9E9iOgMP%2FfzOBNI51CtyM%2FbuMd05dklzbmThdpmiJtJvl0UKCWjopXvvizAER9BGVtd4mYjyHufx0OVzQYVnH3Y4cnX%2BOVv6xDl84nuS6o16mNGimAeJEfXg47wFp6DfucpjsZ5u7Gwja3Y10tUt96%2BNbLE1K6uQkwZMgipUfthpwb%2F5o3Tszr5OfxS8VRjkL8kmKM4FPnk0nsplR%2BMh2vu5jZa27jkjLyh3j5BzFpDxU0%2Blh147YmKSrsIV0WwlaoMLL50t9dRs%2FN3vUVAdFLGoTkfZu2WtROJufI9OF%2Fyl9oHJGwPQHE3JYXAQRDNcIEmyGCLFY0mdUgdBVXfZEmCSyPuM6snxGZdPPlcCWpj1TjdtLqfhVz3cRUOOYLBVaCu6%2B3uzfsDwVtY43B81%2B6yYqHbL74wvpAdmPPGdjBso3jV22DJgj%2BDPJYH7dVaRT4Rkj3YuEXQm78Tv2bMct1r1Q3FJWnCx0K5Iwqt3CyQY6pgGNE8bhG%2Bpb1pIaEvLCEqGUdA0XyLE3h2LbBSUX%2BHK2oJAz3qkYFHall36eUFUZqODvzZyA3VNgfhISo4N0%2B91%2BIvRohBcYRz5RSTp%2BCEjbBSxJkotSi2rWeSd6pS6VN%2FAdullxoev%2BtWaPlkbHjuuhQPg%2FmXHyN0kjQyRcWKOc9K5ahGg1q2%2B%2F%2BUMnWNJ%2BTyUT69BxwHvWBnDeQEM3xBifX23dHXM1&X-Amz-Signature=a3a3c32a60cb9ed1e85a82942f2f01dac985ef866735681fd4cb4e6bfab7152c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

