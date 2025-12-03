---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW4BFNP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIG061ZEKo8DdPoobh7%2B3%2FG3mKAn%2BwfSqLuuFyA4tTriMAiBSSvnjgMzzXzc4jW6SGe8omHdCnh5sJB%2FE%2FArR0RXK8ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMPU1g56bt0U8sSeoKKtwDODWDW6eyc%2FEzARYu1VB%2BKxZzIvX%2FaywvgSDkej%2FbcAUhIWmNexpSQPaqIsCqOyHd1NRmL0ZHwhLI%2FXSkyRMBBwHSOD10ZTya6KlfV0XJYubfcV%2FwK8jMe2%2BFDx5nCpi3SNtVwDyVEdqntkZCFlSkrdpqrhK4aK9LlTFd3%2Fsoe0dQPo5T48yUagVCNRyFV0JZB344uxAfy1za6htFtb2N8yuELiG9pjTtFgQZXeOHFpSC%2BLFchJu47Qry1kP8vBiLW9wFgOByea0yjJ79OkI4tDCzVU7Ln6d4ndn0K5Hxhjd7GbXYrSSL6Rb1hkK7CBsfPCLP60kNP%2FN12Wh8l0IcwfsJAzIeNLlXeUf%2BUJ0a%2BscOCt4nyadTKMEOiIqZ55Bv1Vrym%2Fp0Kjtd5GGyACRUQAs0qsx70EuqFwQWsPnUwDKZHBLjaSLVCLEfJMIAfPh91%2BWAus5GsDMuLnFefzmSx%2FOFwGSqIffBEFz6wMaedlI9TJ49Y5YJ%2BHWWzYBWVbvNIxOfVwK1bnWgkfHCao%2FuAVL23n%2FwSdJgh4Z%2FTlDF5XlU9pYww6bDrHmvm7UdSWih0HX8mck6DW7DVLxiXXYzW%2F7nIhY8W1sV3Ez8XwxfH9nh6hsL%2FXVPgeNbplgw4tzByQY6pgGNZP0fz4k7HchwFxNEXMlnm%2FY%2FVCjdPCxAnh8BIZ4or3Vku%2BInWQZhR5qs2LnzaNnpmqhj88oaUOownhv%2BeIqXcO2Ovy2rU0nEqzLU66QeyAGeKK4wqsUS5URICOja1p8c8yvlA4yjfsg9KLRcvFu2IzErYvPg5fZZCWs%2B8S4guvOdKM8qGT%2FnVmqoaRkh8lx8FTiXVpJcJ2o0bsI22HqH6J7SS8jl&X-Amz-Signature=4a6846178744aa09b16e32ed3d31299029291a58559ac1e26dd7d4c1d605a93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMW4BFNP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIG061ZEKo8DdPoobh7%2B3%2FG3mKAn%2BwfSqLuuFyA4tTriMAiBSSvnjgMzzXzc4jW6SGe8omHdCnh5sJB%2FE%2FArR0RXK8ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMPU1g56bt0U8sSeoKKtwDODWDW6eyc%2FEzARYu1VB%2BKxZzIvX%2FaywvgSDkej%2FbcAUhIWmNexpSQPaqIsCqOyHd1NRmL0ZHwhLI%2FXSkyRMBBwHSOD10ZTya6KlfV0XJYubfcV%2FwK8jMe2%2BFDx5nCpi3SNtVwDyVEdqntkZCFlSkrdpqrhK4aK9LlTFd3%2Fsoe0dQPo5T48yUagVCNRyFV0JZB344uxAfy1za6htFtb2N8yuELiG9pjTtFgQZXeOHFpSC%2BLFchJu47Qry1kP8vBiLW9wFgOByea0yjJ79OkI4tDCzVU7Ln6d4ndn0K5Hxhjd7GbXYrSSL6Rb1hkK7CBsfPCLP60kNP%2FN12Wh8l0IcwfsJAzIeNLlXeUf%2BUJ0a%2BscOCt4nyadTKMEOiIqZ55Bv1Vrym%2Fp0Kjtd5GGyACRUQAs0qsx70EuqFwQWsPnUwDKZHBLjaSLVCLEfJMIAfPh91%2BWAus5GsDMuLnFefzmSx%2FOFwGSqIffBEFz6wMaedlI9TJ49Y5YJ%2BHWWzYBWVbvNIxOfVwK1bnWgkfHCao%2FuAVL23n%2FwSdJgh4Z%2FTlDF5XlU9pYww6bDrHmvm7UdSWih0HX8mck6DW7DVLxiXXYzW%2F7nIhY8W1sV3Ez8XwxfH9nh6hsL%2FXVPgeNbplgw4tzByQY6pgGNZP0fz4k7HchwFxNEXMlnm%2FY%2FVCjdPCxAnh8BIZ4or3Vku%2BInWQZhR5qs2LnzaNnpmqhj88oaUOownhv%2BeIqXcO2Ovy2rU0nEqzLU66QeyAGeKK4wqsUS5URICOja1p8c8yvlA4yjfsg9KLRcvFu2IzErYvPg5fZZCWs%2B8S4guvOdKM8qGT%2FnVmqoaRkh8lx8FTiXVpJcJ2o0bsI22HqH6J7SS8jl&X-Amz-Signature=8d2e8f7b1c95ccb4f3cb5772d08fe59adda9ddca3ba5939dca11f93ab6e906bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

