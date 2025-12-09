---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q64KP4I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWvE08ofEDHNwtYlQGypFOi3Fjmt4AHjhM%2B9eSMf3GuQIhANEjLKAwE6FuibR9eE17bn0oGAukjaSaXBpUfTBVQV60KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7pbgbKyqProalCj8q3APLa6%2FGBShEaj%2B1r2VxkLIUOIaLNWyQaC5C2M%2Bqojt81WeacIOhWWjuOpZE1ILNYTILHbMmg8si%2B%2FGVIFecsXxHq%2FxtvHexyaDfFXBaof6JLIBjR8bSyIGQxRgnWIhY5OCVnfpUTlxZuRjbrQT6mnS8BUkZ8gEKwvy4syebMkzhrDAp3a6YVl4pTAO2Ca9dudGC5diFup%2BLh5Lt8eeDDwbeGqTZbIuPVLh%2BLwLIUh8AIe%2F6Ha3HjeEcR0JCmrXjafT%2BSF4WetvRxd%2BhVe6g7zIkWBgjsqLSsKcjZ81anHsyPUO7Mc0mI4qBEYJRssHGxDgf6zPcbHuwLrOBIg%2BsfACm5NrX%2BUiuNzqn3HQiTvUxZSsgnW9ZiZNqu6Os6aKzOjeft3kXjZLDxAqL%2BFlg0krbXh6%2FOeSPlXx7FP9mNKtPusau51cn%2FHqOkDvwiZjmDJn8cLcE1yTc6fIQLwIs3sjrzuo0xvb3fUz6HXqNT%2BJYHN%2Fx2iYTLVqOzhHjqzp5D%2F%2ByZ%2Bq0y6O5PcqbhANBZG2oX6JxY8%2Fh0xwxLosEvgibHNSurDtiHOcc5Mnd65C%2FVbzB1WrLzAOgnLwMnbecUYqipwmrGjUa1DC8PtZNFenwFPutU%2FPlmGgme8aKITDoh9%2FJBjqkAc9LqBWpxw5hpRrAR%2FIS7xRJjDWS%2B0LM%2BnsYsBGuFoCcoHFK%2B6yVm%2BNakjgR8SIqWABFsJ9f7ed6%2BOtBl732UUZn8Tbd2HjgMbNK8MbvBePThOfWbzJENTP2IhR6MViEIO%2FqEWMWRi5nkQMqXpGB6XbRrJ3W9ymJVqr86vnJwXpt2THTIIYlKkaMNIm9kKv%2Bp6GKnANGSOfc%2Bbj6PeCiZ0KWRgHP&X-Amz-Signature=f2dc459910a805870c985c8d5df3f6b5daba1d2d459edb85fa94c1fbaca93e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q64KP4I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWvE08ofEDHNwtYlQGypFOi3Fjmt4AHjhM%2B9eSMf3GuQIhANEjLKAwE6FuibR9eE17bn0oGAukjaSaXBpUfTBVQV60KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7pbgbKyqProalCj8q3APLa6%2FGBShEaj%2B1r2VxkLIUOIaLNWyQaC5C2M%2Bqojt81WeacIOhWWjuOpZE1ILNYTILHbMmg8si%2B%2FGVIFecsXxHq%2FxtvHexyaDfFXBaof6JLIBjR8bSyIGQxRgnWIhY5OCVnfpUTlxZuRjbrQT6mnS8BUkZ8gEKwvy4syebMkzhrDAp3a6YVl4pTAO2Ca9dudGC5diFup%2BLh5Lt8eeDDwbeGqTZbIuPVLh%2BLwLIUh8AIe%2F6Ha3HjeEcR0JCmrXjafT%2BSF4WetvRxd%2BhVe6g7zIkWBgjsqLSsKcjZ81anHsyPUO7Mc0mI4qBEYJRssHGxDgf6zPcbHuwLrOBIg%2BsfACm5NrX%2BUiuNzqn3HQiTvUxZSsgnW9ZiZNqu6Os6aKzOjeft3kXjZLDxAqL%2BFlg0krbXh6%2FOeSPlXx7FP9mNKtPusau51cn%2FHqOkDvwiZjmDJn8cLcE1yTc6fIQLwIs3sjrzuo0xvb3fUz6HXqNT%2BJYHN%2Fx2iYTLVqOzhHjqzp5D%2F%2ByZ%2Bq0y6O5PcqbhANBZG2oX6JxY8%2Fh0xwxLosEvgibHNSurDtiHOcc5Mnd65C%2FVbzB1WrLzAOgnLwMnbecUYqipwmrGjUa1DC8PtZNFenwFPutU%2FPlmGgme8aKITDoh9%2FJBjqkAc9LqBWpxw5hpRrAR%2FIS7xRJjDWS%2B0LM%2BnsYsBGuFoCcoHFK%2B6yVm%2BNakjgR8SIqWABFsJ9f7ed6%2BOtBl732UUZn8Tbd2HjgMbNK8MbvBePThOfWbzJENTP2IhR6MViEIO%2FqEWMWRi5nkQMqXpGB6XbRrJ3W9ymJVqr86vnJwXpt2THTIIYlKkaMNIm9kKv%2Bp6GKnANGSOfc%2Bbj6PeCiZ0KWRgHP&X-Amz-Signature=4e044d513f6b4bf8f6612d6f58dad4d9dd0ec467a19d612024f06dd0bd25801b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

