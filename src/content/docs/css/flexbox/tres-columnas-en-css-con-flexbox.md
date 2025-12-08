---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH32MJUV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATnZc%2FmNrxp72XE45Gfm2x62SP5WPdeUFLODlOGEat%2BAiEA4%2BkM3JXzeTOKjaQXWUaB77rkigYDLJS1564gxVkq7P4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR%2FfVrZDs%2BKzkpWrSrcA4J9s%2BvM5Uq12q3OLSpnJY2aY66nS2ImgJrYBz35V%2FXp44tCQ6vRe1hDy2xoKzRyXXP9rHEG9g3nB6%2BNy40TvqdmHff4qkO5O%2FgDFULFeRrX4YhXJpuAWdcvC%2Bx37URrA4oQwbDIA%2FJqXk5shC%2FQOohD4PZWFvNvMscb%2FQwgAlNOYQBozsNKXKo6A76As3fMSfuQZ0VRjajcaQQazf3qrhQQ0qV1SKD6SJeSVtgHDr7yQxv3I9SoU8xJtjARuzBZGSa3cDro6Ym3mIJw9j9GUAmJzuJum3hkc3B6O9dXYyEofiNjeQDuAWAKdty8pq8c3D7SGO%2BJMhFe8KX6VsBIfz7Dn0JagIR576SiaN4JiVoREIcJV74fLgqxnNXZZzp5IbVvACUFMftUVQ8eiCdlN610ieW3INX3uSUSt5JEu6a7LjcWuveGoMHHCd%2BYCHTtZqonRCsfJORHWVxSX3F4uslkCG5DVEdIyry1Kw5rYo5Bq%2B8wQrZ3gCeCTZVdWYkEUb0HHfWR%2BsS8gDdCmAjzOr7hLqm6Bf7ABxoDxhPtNYVwi5%2Fz8EWRUl%2BU%2FrWyUQRzwtppK4lCiO3bDHaWTNib8woGbgK7XdeTibOyT3iuZiIyzJeYe03YBUGZwbQ5MKrQ2ckGOqUBcYhpjGsiaTkeR1XnhsaCcxDVVppn7%2F%2BJ%2B9kdsXEIhyscoyJmSpiohV3n6gwRx%2Bf9Cdc2nSviDC%2FKZE1lUNN2FIlJ%2BkjkNjMGPHKOI%2B5Hz27iMPzsFCDEE7T5fFiW64%2FSpI1WA8w4zNSzJXaRHG3nVW8YCZ6HELOmkP1KYXKFDJodNlonTsPwUH%2BQoKOZBe98UvFTp%2B%2Bc46iKEUMrPf40ZKy%2BPFKG&X-Amz-Signature=348108729ab1b6dbcd09da5cfe148fac9531540632d610824c36baf5b3ebb959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH32MJUV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATnZc%2FmNrxp72XE45Gfm2x62SP5WPdeUFLODlOGEat%2BAiEA4%2BkM3JXzeTOKjaQXWUaB77rkigYDLJS1564gxVkq7P4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR%2FfVrZDs%2BKzkpWrSrcA4J9s%2BvM5Uq12q3OLSpnJY2aY66nS2ImgJrYBz35V%2FXp44tCQ6vRe1hDy2xoKzRyXXP9rHEG9g3nB6%2BNy40TvqdmHff4qkO5O%2FgDFULFeRrX4YhXJpuAWdcvC%2Bx37URrA4oQwbDIA%2FJqXk5shC%2FQOohD4PZWFvNvMscb%2FQwgAlNOYQBozsNKXKo6A76As3fMSfuQZ0VRjajcaQQazf3qrhQQ0qV1SKD6SJeSVtgHDr7yQxv3I9SoU8xJtjARuzBZGSa3cDro6Ym3mIJw9j9GUAmJzuJum3hkc3B6O9dXYyEofiNjeQDuAWAKdty8pq8c3D7SGO%2BJMhFe8KX6VsBIfz7Dn0JagIR576SiaN4JiVoREIcJV74fLgqxnNXZZzp5IbVvACUFMftUVQ8eiCdlN610ieW3INX3uSUSt5JEu6a7LjcWuveGoMHHCd%2BYCHTtZqonRCsfJORHWVxSX3F4uslkCG5DVEdIyry1Kw5rYo5Bq%2B8wQrZ3gCeCTZVdWYkEUb0HHfWR%2BsS8gDdCmAjzOr7hLqm6Bf7ABxoDxhPtNYVwi5%2Fz8EWRUl%2BU%2FrWyUQRzwtppK4lCiO3bDHaWTNib8woGbgK7XdeTibOyT3iuZiIyzJeYe03YBUGZwbQ5MKrQ2ckGOqUBcYhpjGsiaTkeR1XnhsaCcxDVVppn7%2F%2BJ%2B9kdsXEIhyscoyJmSpiohV3n6gwRx%2Bf9Cdc2nSviDC%2FKZE1lUNN2FIlJ%2BkjkNjMGPHKOI%2B5Hz27iMPzsFCDEE7T5fFiW64%2FSpI1WA8w4zNSzJXaRHG3nVW8YCZ6HELOmkP1KYXKFDJodNlonTsPwUH%2BQoKOZBe98UvFTp%2B%2Bc46iKEUMrPf40ZKy%2BPFKG&X-Amz-Signature=420de743219b87de979b552c586a947d16627ac753c8c7046fecd0cb7dae6d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

