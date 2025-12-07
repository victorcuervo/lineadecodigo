---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7XWP63%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ7tmLNIm2szHkIxvx0x4KUAxd6S3yGi154tdbjGpJOAiEA4mxgJ%2FDdFaxM%2F%2Bq2QeZQHu2FqlH0PNcikGklrTTGY1sqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvbqFkdGnPLq0iBAyrcAxVa49rJ8b6kKmkqT0PrA0PXAxb0jFxkUf7WSRr6QtLE6WEP1FXwzZpSXJ6uZ0Pe1hCrukA5%2FxBOQEicvZBzpZ1lqX3a0JhIS%2Fk63vzWIzzOfYk%2Fjfs7bitaJfuBdtp6M4o5wGLP8mXeYv8dyzsYFqyMggFQKDlH9rIPkRAE6XOA31aSPKOUZpkQ1pJHqoimBijstzZg1zXvc03x4eGZy9QZ0a5fbWgjuljGMC6b%2FRzWczeUj1kbLsiq4Dtm%2BofauiANUnM6qGEWRj%2BjfHKNfxVF%2FgWwS7gA3c%2BNmi9%2F5wUaxsGGEm29XcK2Jd06WE3aTSns9lpTl8Gs54FoIx2o7r7FJjsmZbVVt9raDfxKwOw456Ks6I8xmgcs9f9n7CwPvzY7onCUJkN7TOd7PGhzLOzrYEuLZ8YCAVzAWcM%2B6vgeBIfL7jxcF%2BOkXqnFXtB6vNy7t468GYl01rqQzvBkzxMFCiLVOZbFAK6KeWBFZ4iuQ84gSe9PgMtiWjqnTSKQ6urxz2TRTxxT9iG5dFJGrRJqacryzJch0W4dq5Q9ZbqVB17BkSGx3o7QZGkFDnCbGgnGafHaKR77LLFYKT3%2FuIHnqMfGjFwwhci9Sd1lPAmMUBaJBROLnzIYsSq3MPL90skGOqUByff1EWDguoieFueaIUKUpZjmwedpLKEuG5mtueFXlq3ZhbUZAUOaoAyxshMWoKwN1CpLcho%2BjTbQRqlh%2FSZobeJOr3oARDl98bqsqocRVKwW2T7esBMpEp0NSPKAqk%2FNi5cGZy%2BR1BpS38V%2BPki7nNMnsduLUwODk4TW7Jt7kJLcZrGcsxgjibm441Y%2FYLbZKZdo7VvDFOmfBxHT%2Fklj6MlmFJZp&X-Amz-Signature=8864da06c2c8f2c66afa063adc006fd7787f122d04be418c2fab26451dae8883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7XWP63%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ7tmLNIm2szHkIxvx0x4KUAxd6S3yGi154tdbjGpJOAiEA4mxgJ%2FDdFaxM%2F%2Bq2QeZQHu2FqlH0PNcikGklrTTGY1sqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvbqFkdGnPLq0iBAyrcAxVa49rJ8b6kKmkqT0PrA0PXAxb0jFxkUf7WSRr6QtLE6WEP1FXwzZpSXJ6uZ0Pe1hCrukA5%2FxBOQEicvZBzpZ1lqX3a0JhIS%2Fk63vzWIzzOfYk%2Fjfs7bitaJfuBdtp6M4o5wGLP8mXeYv8dyzsYFqyMggFQKDlH9rIPkRAE6XOA31aSPKOUZpkQ1pJHqoimBijstzZg1zXvc03x4eGZy9QZ0a5fbWgjuljGMC6b%2FRzWczeUj1kbLsiq4Dtm%2BofauiANUnM6qGEWRj%2BjfHKNfxVF%2FgWwS7gA3c%2BNmi9%2F5wUaxsGGEm29XcK2Jd06WE3aTSns9lpTl8Gs54FoIx2o7r7FJjsmZbVVt9raDfxKwOw456Ks6I8xmgcs9f9n7CwPvzY7onCUJkN7TOd7PGhzLOzrYEuLZ8YCAVzAWcM%2B6vgeBIfL7jxcF%2BOkXqnFXtB6vNy7t468GYl01rqQzvBkzxMFCiLVOZbFAK6KeWBFZ4iuQ84gSe9PgMtiWjqnTSKQ6urxz2TRTxxT9iG5dFJGrRJqacryzJch0W4dq5Q9ZbqVB17BkSGx3o7QZGkFDnCbGgnGafHaKR77LLFYKT3%2FuIHnqMfGjFwwhci9Sd1lPAmMUBaJBROLnzIYsSq3MPL90skGOqUByff1EWDguoieFueaIUKUpZjmwedpLKEuG5mtueFXlq3ZhbUZAUOaoAyxshMWoKwN1CpLcho%2BjTbQRqlh%2FSZobeJOr3oARDl98bqsqocRVKwW2T7esBMpEp0NSPKAqk%2FNi5cGZy%2BR1BpS38V%2BPki7nNMnsduLUwODk4TW7Jt7kJLcZrGcsxgjibm441Y%2FYLbZKZdo7VvDFOmfBxHT%2Fklj6MlmFJZp&X-Amz-Signature=90d46502b6a811229c3c504b11b0fc19d11c1c769f68edb2c972fd11b88de16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

