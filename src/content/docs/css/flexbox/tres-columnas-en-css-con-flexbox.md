---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7G2YBZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaOpiaz2ph6A8UwwwwyEMd49tgwgSDDpEFmDqUCRaeKAiBHAYNP36hNhMJmRnZ%2FTVyTY%2FdlSyyGWjkO1YQPRrbltir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMteubPmyqzr%2B6miGQKtwDHeEA9k%2BZMsa7w5Wc7k%2B4DB7AslRqs4wKT9TQIvLD3tEL3sBI7ra5zMCycMMkVsJ2HB8cdfe18T8uAw1pg8B1jkZxmSOEYL7SSP01M9QrjdbwSwBRFC4GqSbRzLLUsIk8PeHhUPw2J%2BNkcywOqo5vMLNq%2BF44cZ9HBkMwiVCokx7uVtrvGd7FqH2zXSYGVsNS%2F6EoSCdTZSte%2FgS3U0nPSDxHbZJ6QRyNyMHYN4ERWp%2BYlrSwF7mh4ELJyx2n7vk1kGzGso1zGf%2BqmeqOFRV7lvnqbax74oNbfTDmF57JVS7kG%2B1BE%2BYuMNQ9UdXVNZuzyjunPj4a2bUuDOD5FI8WJfIaq3mRYD%2Fx1Tti0tR8HDLJRfJwGr%2BOx7ZgfX%2F8GNLZi1WXQJ%2FVqBwvt4V%2FC%2B9NiQtFpAYPNKJkyGPCrzOBXsELCZUhbhF5aCrnv5DVVnFfX%2Ff%2FseH%2BsUvFvZ6b4XepVZxoquat3W70aN2M8B8mb5ompdP3TOxomeUSec09ourSt9j2vi8DUrTctMdxei0uWQB1Fhr1XuvHfh7OPReYP00fWyalCOCCi0vRtxQww94C%2BIVjR%2Bc18Qr31v4UBJHAI9yUPx1MlA00JfrUq664s0yTytg5cByaXDWRpsEw94vIyQY6pgFOHKuBQkWOjHb0D8XFEBcXc6xazjqhsVrwd9V5ucDHmQcBI%2FBAomPdjfcEnMl3cBRNZzc8kg%2BWc%2FKgD5v%2BtrNMxz4Zj6IrM5DTU3kZt9wvtlQjnjkcfXfhSCaD81cNFaDezSnQ63hMGZfse9UyZpYN3%2Ffy8J%2F%2BYgCBF50MIV4v%2Bul3U89noIhAi7NNwuVbcMMS1hdS6RIXd9j3UYuQotabMwXYKfZA&X-Amz-Signature=2b464737ff690b8d0d892bda3b791d4a68941234c0f79c8dfaa874d7218eb9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7G2YBZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaOpiaz2ph6A8UwwwwyEMd49tgwgSDDpEFmDqUCRaeKAiBHAYNP36hNhMJmRnZ%2FTVyTY%2FdlSyyGWjkO1YQPRrbltir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMteubPmyqzr%2B6miGQKtwDHeEA9k%2BZMsa7w5Wc7k%2B4DB7AslRqs4wKT9TQIvLD3tEL3sBI7ra5zMCycMMkVsJ2HB8cdfe18T8uAw1pg8B1jkZxmSOEYL7SSP01M9QrjdbwSwBRFC4GqSbRzLLUsIk8PeHhUPw2J%2BNkcywOqo5vMLNq%2BF44cZ9HBkMwiVCokx7uVtrvGd7FqH2zXSYGVsNS%2F6EoSCdTZSte%2FgS3U0nPSDxHbZJ6QRyNyMHYN4ERWp%2BYlrSwF7mh4ELJyx2n7vk1kGzGso1zGf%2BqmeqOFRV7lvnqbax74oNbfTDmF57JVS7kG%2B1BE%2BYuMNQ9UdXVNZuzyjunPj4a2bUuDOD5FI8WJfIaq3mRYD%2Fx1Tti0tR8HDLJRfJwGr%2BOx7ZgfX%2F8GNLZi1WXQJ%2FVqBwvt4V%2FC%2B9NiQtFpAYPNKJkyGPCrzOBXsELCZUhbhF5aCrnv5DVVnFfX%2Ff%2FseH%2BsUvFvZ6b4XepVZxoquat3W70aN2M8B8mb5ompdP3TOxomeUSec09ourSt9j2vi8DUrTctMdxei0uWQB1Fhr1XuvHfh7OPReYP00fWyalCOCCi0vRtxQww94C%2BIVjR%2Bc18Qr31v4UBJHAI9yUPx1MlA00JfrUq664s0yTytg5cByaXDWRpsEw94vIyQY6pgFOHKuBQkWOjHb0D8XFEBcXc6xazjqhsVrwd9V5ucDHmQcBI%2FBAomPdjfcEnMl3cBRNZzc8kg%2BWc%2FKgD5v%2BtrNMxz4Zj6IrM5DTU3kZt9wvtlQjnjkcfXfhSCaD81cNFaDezSnQ63hMGZfse9UyZpYN3%2Ffy8J%2F%2BYgCBF50MIV4v%2Bul3U89noIhAi7NNwuVbcMMS1hdS6RIXd9j3UYuQotabMwXYKfZA&X-Amz-Signature=faf8bee4e41d6c81c5e05b7d8054d6990c9e81cc730c339b93c862e8d52a2f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

