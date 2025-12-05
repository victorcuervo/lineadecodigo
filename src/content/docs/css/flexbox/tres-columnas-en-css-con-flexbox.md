---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZI5J25L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FUtxjGnVMcR8vcJGkT%2FOwJVAYIBfPm4m1inEfM%2FTQYAiBq6cxxKQ1jSA4tyXSCkSUWsatRkSPblRlYdjgUzgQCwSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMnmPDJqjzG9AaVHyLKtwDXamYKiHoeyERBSEJ7Sofdr6ssWpQBF%2BhX9r2Lgx4ChrVXDKIn74UoJ3n7SHwa8ZUJR02qMcISpTzBFHjBg1kcJMuB5NUibshEaWNABuFsVIzXIXAD%2Fnuxuh6xk5HgSy3AYms9gJ07Rb5D2%2BUPD1zkOALr4LrT98cOaJU3Xi%2Fv4HIvmiQ0nn3uVc6lTX%2BRGd%2F7oWxjSnKjqctd3Q7XpNfQmxrNFYOJ3MPXtBMif%2Bysej4BFWjy%2BPuQg9ddrFHX%2BekYdn506KwBOBI2tZucaXXDWwH%2BXMTp3Vnb07P06tPs0JOs8e5etFzmF81KdlfM6buj%2FNkrFh6tXLH67EuFZky%2FlYxkZR7EwLDAnlwDzaQ2BMyOWhh3QfPIOpaOUFrlsHOqG%2F9pCWVlfiXR7Lcekl3GhXK%2F4RFnxhzU547VBPTwA4OyLA6ZjkLX4KllgsabXQDmZIqz3m8nVHyd2j5I1DR4vlsOQ5UOnJ2JDQk8CsrRq7POJQO1CMIPdwcN8Eq1kBF%2FvnwdYcGL3byYrrIsx5bVuSBHssAXD2KJtloOd%2BuAjbENvL2x%2FY4a8muqVLZqeh%2BK0w%2FA9ep%2BEE4e5Ndtf4quSdsRNZOLhNJaJiSv9wWFXRa26LMR%2BfoP6PQ3SUwg%2BnLyQY6pgEKoZGKobT06bYDpZTwAPJ7KyNbw5KV4BgdyRXt8Cd1sSyyJzuaPy9wDrPn%2FG6HlECUc4UUjgmhPL7zl1MJaZBHmq3c8jhQbB2DOvMaY4hBUXwoEL9S18uplJOpPMP1Mrhut82MYOt6DzuBIgvsBnjDFaFQy8eBxMqGSyR1z%2Bi2ClHyUxF8P9W0GV7cw1ZQROXP6nxlzzfioSOYDHHYDh7T0%2BLpXq0J&X-Amz-Signature=3b7897c95a30ee5eb91eee45979777c049d70791c825079c03a7de298810eba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZI5J25L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FUtxjGnVMcR8vcJGkT%2FOwJVAYIBfPm4m1inEfM%2FTQYAiBq6cxxKQ1jSA4tyXSCkSUWsatRkSPblRlYdjgUzgQCwSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMnmPDJqjzG9AaVHyLKtwDXamYKiHoeyERBSEJ7Sofdr6ssWpQBF%2BhX9r2Lgx4ChrVXDKIn74UoJ3n7SHwa8ZUJR02qMcISpTzBFHjBg1kcJMuB5NUibshEaWNABuFsVIzXIXAD%2Fnuxuh6xk5HgSy3AYms9gJ07Rb5D2%2BUPD1zkOALr4LrT98cOaJU3Xi%2Fv4HIvmiQ0nn3uVc6lTX%2BRGd%2F7oWxjSnKjqctd3Q7XpNfQmxrNFYOJ3MPXtBMif%2Bysej4BFWjy%2BPuQg9ddrFHX%2BekYdn506KwBOBI2tZucaXXDWwH%2BXMTp3Vnb07P06tPs0JOs8e5etFzmF81KdlfM6buj%2FNkrFh6tXLH67EuFZky%2FlYxkZR7EwLDAnlwDzaQ2BMyOWhh3QfPIOpaOUFrlsHOqG%2F9pCWVlfiXR7Lcekl3GhXK%2F4RFnxhzU547VBPTwA4OyLA6ZjkLX4KllgsabXQDmZIqz3m8nVHyd2j5I1DR4vlsOQ5UOnJ2JDQk8CsrRq7POJQO1CMIPdwcN8Eq1kBF%2FvnwdYcGL3byYrrIsx5bVuSBHssAXD2KJtloOd%2BuAjbENvL2x%2FY4a8muqVLZqeh%2BK0w%2FA9ep%2BEE4e5Ndtf4quSdsRNZOLhNJaJiSv9wWFXRa26LMR%2BfoP6PQ3SUwg%2BnLyQY6pgEKoZGKobT06bYDpZTwAPJ7KyNbw5KV4BgdyRXt8Cd1sSyyJzuaPy9wDrPn%2FG6HlECUc4UUjgmhPL7zl1MJaZBHmq3c8jhQbB2DOvMaY4hBUXwoEL9S18uplJOpPMP1Mrhut82MYOt6DzuBIgvsBnjDFaFQy8eBxMqGSyR1z%2Bi2ClHyUxF8P9W0GV7cw1ZQROXP6nxlzzfioSOYDHHYDh7T0%2BLpXq0J&X-Amz-Signature=f6e1d7723cd5a91ea7764539fa7b90a2cda7e00ea61b02041b19c2216938dad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

