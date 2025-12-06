---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2A3MKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC0Be23dyQr9WOpfOVfkDfUdYFNrfIoYan28YDNfcuuAIhANeor3vPBMCWxG7oWJccUoQmTjujGKheqTG%2BCyAsOAeHKv8DCGsQABoMNjM3NDIzMTgzODA1IgxyADZq5j%2BoSqOr8xQq3AMhVPebJ1OyW%2FWqXSyqcKYwvU7RW0DnAFqU2cq15hsk%2FdXUZYTUBZsIdyehxj7PnvDqWZ%2F7ZVbotUg9IY%2Bx2uGIxaiV94Nz8SihwTa5WbsGNN%2BiQ1wOukstAkuhELwyptpCBALAzvs76zkTzzWOJ%2F6XrKQI1o28TMtDf9BeSEtS4EdzSJSAa0RqEeFZ3HP61f1VfKWDzQWI%2FvOBuR7dUGsy47yZHyao3YAmYdJtHYeqA%2BXsCAkZ1ofAkRbWr0XebJYHAkraUuHT1%2BytDs0S%2BNSye978JW0ktDCKa4i3SVonppoxKRBOlZqgUgFsApaBAljroriDssEhTjWP7cDWAHcdh8SqeXV97uKXRhDgvWJ7W%2B0WVMbSrPB%2BcZtUQJK%2FQXgQEoT4BCqeT2mytg7tvvdFz554ZX3YO8gx%2BA4Xdg69A715p6XV3g3a%2B%2BKc%2F2Ki8B0p%2BU8lBEQ1M2jQSpwbWtuohE%2FzT5jN9vNW%2BosHpg2wD3YjrV1Fx2%2Bpl4VkHZhnl0lhwwviJRzMbkYJ5TwqI1T5n6FN7bZ1SjYUP1cvobMo%2FZT97BJOIQfkNDwO7OKTbuBzHa40WjhuWEjD1j%2FlOujR1pRF0n6POzKkCjRQOVLaRz%2FD8vyvuQQaq%2F1wljCbqM7JBjqkAbvauYj29305pYACb8MEu%2BOljbvuo0LfC3MgVdxW31nwtEr09IgYWwjC2p15oKrracnE0dmCAc5Uue74stlk6Z5ihpzEtvxd%2Fp2QnO1pQY%2FylTugKdhq182jCpBWCVYI3ewinv0jorCp5e8tg2kx%2FY4ZESyWWPwV2sYjfsfWKTVoyfUwo%2Bx7Sb%2BXzam006Hb1UY1XFAdVUpCJA%2FihHdZw8snHj2O&X-Amz-Signature=0a53258dc07e4c71f4936d11d159c44bdebd9b1a1363da52adbee9c59033b210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2A3MKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC0Be23dyQr9WOpfOVfkDfUdYFNrfIoYan28YDNfcuuAIhANeor3vPBMCWxG7oWJccUoQmTjujGKheqTG%2BCyAsOAeHKv8DCGsQABoMNjM3NDIzMTgzODA1IgxyADZq5j%2BoSqOr8xQq3AMhVPebJ1OyW%2FWqXSyqcKYwvU7RW0DnAFqU2cq15hsk%2FdXUZYTUBZsIdyehxj7PnvDqWZ%2F7ZVbotUg9IY%2Bx2uGIxaiV94Nz8SihwTa5WbsGNN%2BiQ1wOukstAkuhELwyptpCBALAzvs76zkTzzWOJ%2F6XrKQI1o28TMtDf9BeSEtS4EdzSJSAa0RqEeFZ3HP61f1VfKWDzQWI%2FvOBuR7dUGsy47yZHyao3YAmYdJtHYeqA%2BXsCAkZ1ofAkRbWr0XebJYHAkraUuHT1%2BytDs0S%2BNSye978JW0ktDCKa4i3SVonppoxKRBOlZqgUgFsApaBAljroriDssEhTjWP7cDWAHcdh8SqeXV97uKXRhDgvWJ7W%2B0WVMbSrPB%2BcZtUQJK%2FQXgQEoT4BCqeT2mytg7tvvdFz554ZX3YO8gx%2BA4Xdg69A715p6XV3g3a%2B%2BKc%2F2Ki8B0p%2BU8lBEQ1M2jQSpwbWtuohE%2FzT5jN9vNW%2BosHpg2wD3YjrV1Fx2%2Bpl4VkHZhnl0lhwwviJRzMbkYJ5TwqI1T5n6FN7bZ1SjYUP1cvobMo%2FZT97BJOIQfkNDwO7OKTbuBzHa40WjhuWEjD1j%2FlOujR1pRF0n6POzKkCjRQOVLaRz%2FD8vyvuQQaq%2F1wljCbqM7JBjqkAbvauYj29305pYACb8MEu%2BOljbvuo0LfC3MgVdxW31nwtEr09IgYWwjC2p15oKrracnE0dmCAc5Uue74stlk6Z5ihpzEtvxd%2Fp2QnO1pQY%2FylTugKdhq182jCpBWCVYI3ewinv0jorCp5e8tg2kx%2FY4ZESyWWPwV2sYjfsfWKTVoyfUwo%2Bx7Sb%2BXzam006Hb1UY1XFAdVUpCJA%2FihHdZw8snHj2O&X-Amz-Signature=740163c1dd89a2c3ab714acb3dcb1d3c50f37824d29d20566bf981f496881a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

