---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHTJ63C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sAkYNTI9qwG4NI2QVV2NvWE77nbDa933WaC1ImRi4AiEA%2FM0uGOofHVUnHNBy35XHQNQ1XwjmFcclfBKj0DjEj5UqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ%2FTuZYUpRNc0Ov%2FCrcA0MgE1C8KcguP519Rt4WyN6mb%2FgZFoi7eadVQPOFDGMNOcP7uUJW8O%2FamJG6YNPtOvvSDV26ahot0FmJpOtJyOuDAIns5XH5TKJ4ROwWBWB1xHGrJkDQQ1WjKTnp2QMFevUYmFZ4BPsY%2Fo6PKz2wfZhNpUexrNT4VEZnvAdwpkIHWK50mcmbhLht8TqRclr5JjfKlOaXRIOhrn9ez1UIiszOVDzwIC7%2B9ypKx4S3DmvGNcztZC%2FDHp3Csv3XzJAPLQNsdS1e7BQJg%2BGfbZw5nPVWxrwwzVKL6ZxvFMXPc6jS0JHB%2FIxpn%2BPalmy7Ux81F3jDOmfsiYwBt184cgw5vZkAQQHBwxHXn9JN7U%2F3uqnvG7DHMt10f%2FY5M0vefp0RXmx6OFbSl2qhjgX04mfI31C2IMOYF6fTX7yZHCXOJR0GrJy9bLi5P7wW7dOeDJSlpzv2bh74Orrymzn5gIEcibHuDRWZAeu7ErdwkdTZZqakI%2BL8Q%2BXZUqID0wiSpUNWD2iFZeTQ4BA5NJJYdrVeYkdYl5sRmXKxNgSdm61wNq5zAUQzec5IhNBN78eRu%2FXv2c6eFNTpG5ar8XdMEkwE6tXEYk%2FsIMVKfPVKHYqIwbyST%2F1zH1rtZamNZJR3MM%2Bh3ckGOqUBbbQCSNN%2BdOxlwOGqI9w8gwSPSBvVFIxECOmuzlMPA%2Bk7sJ2G2nGy2pmkTLeNw7br6OITFZ1WVzST3BD%2FvGvGdn%2FBg1bWWdChTpzt9AYmx62FT6dWbofHXfGV%2BynVeyXG4lMLPUAyUpYa9%2FMLVc88wR4AmFOAZpqH5WBCqQ06FM3YAuQ8cPD%2BJmbO1rGExk3SWv61NQBB7zXAtwlzsPugY4qk6jjg&X-Amz-Signature=1533a96d9bec4aa2781162d18d28bda9058a5d839c721be9b5ad0f0a0fadde0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHTJ63C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sAkYNTI9qwG4NI2QVV2NvWE77nbDa933WaC1ImRi4AiEA%2FM0uGOofHVUnHNBy35XHQNQ1XwjmFcclfBKj0DjEj5UqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ%2FTuZYUpRNc0Ov%2FCrcA0MgE1C8KcguP519Rt4WyN6mb%2FgZFoi7eadVQPOFDGMNOcP7uUJW8O%2FamJG6YNPtOvvSDV26ahot0FmJpOtJyOuDAIns5XH5TKJ4ROwWBWB1xHGrJkDQQ1WjKTnp2QMFevUYmFZ4BPsY%2Fo6PKz2wfZhNpUexrNT4VEZnvAdwpkIHWK50mcmbhLht8TqRclr5JjfKlOaXRIOhrn9ez1UIiszOVDzwIC7%2B9ypKx4S3DmvGNcztZC%2FDHp3Csv3XzJAPLQNsdS1e7BQJg%2BGfbZw5nPVWxrwwzVKL6ZxvFMXPc6jS0JHB%2FIxpn%2BPalmy7Ux81F3jDOmfsiYwBt184cgw5vZkAQQHBwxHXn9JN7U%2F3uqnvG7DHMt10f%2FY5M0vefp0RXmx6OFbSl2qhjgX04mfI31C2IMOYF6fTX7yZHCXOJR0GrJy9bLi5P7wW7dOeDJSlpzv2bh74Orrymzn5gIEcibHuDRWZAeu7ErdwkdTZZqakI%2BL8Q%2BXZUqID0wiSpUNWD2iFZeTQ4BA5NJJYdrVeYkdYl5sRmXKxNgSdm61wNq5zAUQzec5IhNBN78eRu%2FXv2c6eFNTpG5ar8XdMEkwE6tXEYk%2FsIMVKfPVKHYqIwbyST%2F1zH1rtZamNZJR3MM%2Bh3ckGOqUBbbQCSNN%2BdOxlwOGqI9w8gwSPSBvVFIxECOmuzlMPA%2Bk7sJ2G2nGy2pmkTLeNw7br6OITFZ1WVzST3BD%2FvGvGdn%2FBg1bWWdChTpzt9AYmx62FT6dWbofHXfGV%2BynVeyXG4lMLPUAyUpYa9%2FMLVc88wR4AmFOAZpqH5WBCqQ06FM3YAuQ8cPD%2BJmbO1rGExk3SWv61NQBB7zXAtwlzsPugY4qk6jjg&X-Amz-Signature=49dd24af6990ff67a7309520713f6b1aaed072d60056ddfaada1011e7637eb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

