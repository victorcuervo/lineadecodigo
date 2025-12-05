---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVG3PS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjtnTHX3JdF4AZGBxpVwAvP1HTGAJXwzhbA7NNpJLuUAIhAIXaNhRzJuZI%2ByMwvEkoltowAXmc5uiWmkIHP7au0rO%2FKv8DCGYQABoMNjM3NDIzMTgzODA1IgxcivMZ2fpJiRhRGG4q3AN2%2Bi%2FkvogZAshAkZFx0q5LvOEAbK1dlrsCNe7UfwkIKpusOLG%2FnKmy2Gcb2Rmy3EtZ2UodfhFhqaQzMq8K5%2B5I9YrxR%2BcNCNNRnYTLg%2BWsTRgSMWInzwzQGkKT6YNc2CdTGa5YJpRkTKW0e5RY72tOQUAETmERSkyF%2FXQaLb87YOHJI1ugkM8TsrDsJD8MleqAZ0wunfbr1yRz2T%2Bdn1GnuDp0YuZSsZFoOBRxgtyN81zSpHN0zfb%2BVrD6EJB8s%2Fg5Nq6mImRrdFyA%2BbC3Ey1dGhBKNGvso454KpujKMJlO9fpvNxhwT3iz5rD%2F5w1Iyk5EgpEn096pLM7%2B08Mb5XZndEY%2FvtJi9D1%2B72mMIHYYcIBpLviyxA3OPmStq5nlsAo6e%2BHIO8zz3T0m7X2QNmZ%2FqXxV21X%2BHRZ7Go1gVekYBt21i%2BJNHelOAVEOB1PCybjT4YtK0QJpARFIbL44xztelivdvjPiTx49XQzOSzJm2hXMJLt6LH1l2V9UrftFq5JdxIYeL9BRQwL7prkhFxQP41x%2BFUL5cv0R4TdecGf%2BW0UmTFHA1F%2Bp66wffNj%2FDh9ivEpTmPZahPVI1c8yQ1XZbC87l82yEvr7%2BUFlcZGN1cjOZ7dWFNSwUtsnTCkjM3JBjqkAYA9lA7cRb3GdWs89BbNmpeoam7CrTFt4kRpkpjP5i80ncj2EyTBf5zf0T1IHCNq71SPG9Ii52V0PSY%2BimdPahQGHiLZt0pCn%2FjXC9cPnQhnDlSS9n9SG4TkQW90pdASAGqCSXQaxF1T1whMDUs4zvE%2Feq3wj0k4t00ZPcuGxkcAVodT%2BGghqDlhqQjqXsM23ZJMS5RZO9MBT8TB2xcaij28gcPX&X-Amz-Signature=182004ee5773c45e027e9032e631c64f4fc8e8a9c0e933dcba96d6e664e9b59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMVG3PS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjtnTHX3JdF4AZGBxpVwAvP1HTGAJXwzhbA7NNpJLuUAIhAIXaNhRzJuZI%2ByMwvEkoltowAXmc5uiWmkIHP7au0rO%2FKv8DCGYQABoMNjM3NDIzMTgzODA1IgxcivMZ2fpJiRhRGG4q3AN2%2Bi%2FkvogZAshAkZFx0q5LvOEAbK1dlrsCNe7UfwkIKpusOLG%2FnKmy2Gcb2Rmy3EtZ2UodfhFhqaQzMq8K5%2B5I9YrxR%2BcNCNNRnYTLg%2BWsTRgSMWInzwzQGkKT6YNc2CdTGa5YJpRkTKW0e5RY72tOQUAETmERSkyF%2FXQaLb87YOHJI1ugkM8TsrDsJD8MleqAZ0wunfbr1yRz2T%2Bdn1GnuDp0YuZSsZFoOBRxgtyN81zSpHN0zfb%2BVrD6EJB8s%2Fg5Nq6mImRrdFyA%2BbC3Ey1dGhBKNGvso454KpujKMJlO9fpvNxhwT3iz5rD%2F5w1Iyk5EgpEn096pLM7%2B08Mb5XZndEY%2FvtJi9D1%2B72mMIHYYcIBpLviyxA3OPmStq5nlsAo6e%2BHIO8zz3T0m7X2QNmZ%2FqXxV21X%2BHRZ7Go1gVekYBt21i%2BJNHelOAVEOB1PCybjT4YtK0QJpARFIbL44xztelivdvjPiTx49XQzOSzJm2hXMJLt6LH1l2V9UrftFq5JdxIYeL9BRQwL7prkhFxQP41x%2BFUL5cv0R4TdecGf%2BW0UmTFHA1F%2Bp66wffNj%2FDh9ivEpTmPZahPVI1c8yQ1XZbC87l82yEvr7%2BUFlcZGN1cjOZ7dWFNSwUtsnTCkjM3JBjqkAYA9lA7cRb3GdWs89BbNmpeoam7CrTFt4kRpkpjP5i80ncj2EyTBf5zf0T1IHCNq71SPG9Ii52V0PSY%2BimdPahQGHiLZt0pCn%2FjXC9cPnQhnDlSS9n9SG4TkQW90pdASAGqCSXQaxF1T1whMDUs4zvE%2Feq3wj0k4t00ZPcuGxkcAVodT%2BGghqDlhqQjqXsM23ZJMS5RZO9MBT8TB2xcaij28gcPX&X-Amz-Signature=08cdd63a773ab267a149603fd0dbe9c0414f45d11ded8a7d0c1e2e1a5365c77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

