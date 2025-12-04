---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWNBV24%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCKb6JaRWekPCOs1qllNQWlSisxKUk7TGduYIqOTxvuWQIhAL77LT9hlo%2FDh2bB5kmwxlF369iyUEmC%2FCxpTh8q8gKiKv8DCD4QABoMNjM3NDIzMTgzODA1IgwX9eVq%2B94ejJP%2FEg8q3ANPKaTyIp%2FFtYtfti86pxonS%2FSP1xF454GHu1PV4drWIdCWsIA0kJRVIHRpdxrIOpunZhgCod510gLpgLc7Fo941ipVdzfxrOjYYM6bhIIIhcfwIEJxZiZf1sHV%2FIF27PQq698M9C4tAMvV7qCgC2BEwYHZKzcXCOZSy4je8w1gzsKzIJonK%2FDlOA8qExdpuVEzDK6hg3OhcljRVMjPdo0kOeZ9bj6nGfXOZO8tV20MxMuDNS2UV1ku6nDtY0RWo%2FRl%2F1eayk5EUQe31A%2BRtnrN1lG6%2FWM%2B6Y9514I8cHRQmM7ypeAffMCgkihiuULSxQaMeJ76vg2yFFK6pIgxKbm3PHC%2B8TIeW4xFgGEee2OfBuQndmrW9VrwQhQtw%2F952L4BcnbWHSX%2FrmGcVkoFSV2%2FMiFGpHC%2FScnlo8vEVYVCEQKeafFbMGHOXStHsCvevTgWUb4uo1tIBG4F6qfpB6VjvCo2EoB0lG64%2FynLGZ%2BkI8lBlEnqLGQfzlSTgIiRsyHoldt%2Bxa7h3nQnFKKaq7y4tWVmJ4GoKvgGDMe1H5hfhn0Vga%2F9gqLmfJjbA23LkzrSy4E7m%2BVAHQ2azLJqq1c6gSJah0j4KFTc81cQ2IYZ%2FznxDOCdZTfBTFp%2FyDDcrsTJBjqkAQA%2FWqjBnGl6K2Dv9CfklutcVuQ2PLoyqDApJ%2FtXB43xTwzKJJL83eJAnkO9aNeuo69Ey3YDiRjxu7YR1gkIEMJirtuNuxKoGW7XJ1Ig89r5m5X4AcIyAMw7KgaPU4uKQWucz%2Bj9aV4dtbyhglSKB14X9mUH8DJA50G%2BfnOqOD%2FNCI%2FpOBgeEjrN7vEtABlEWHHx8HQ1lLkifTZAnQmcGwMMlKhd&X-Amz-Signature=8f053c56b12da8c8cc2b6575eb513d252ddaf3691eb490845aee2a997ecf9251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWNBV24%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCKb6JaRWekPCOs1qllNQWlSisxKUk7TGduYIqOTxvuWQIhAL77LT9hlo%2FDh2bB5kmwxlF369iyUEmC%2FCxpTh8q8gKiKv8DCD4QABoMNjM3NDIzMTgzODA1IgwX9eVq%2B94ejJP%2FEg8q3ANPKaTyIp%2FFtYtfti86pxonS%2FSP1xF454GHu1PV4drWIdCWsIA0kJRVIHRpdxrIOpunZhgCod510gLpgLc7Fo941ipVdzfxrOjYYM6bhIIIhcfwIEJxZiZf1sHV%2FIF27PQq698M9C4tAMvV7qCgC2BEwYHZKzcXCOZSy4je8w1gzsKzIJonK%2FDlOA8qExdpuVEzDK6hg3OhcljRVMjPdo0kOeZ9bj6nGfXOZO8tV20MxMuDNS2UV1ku6nDtY0RWo%2FRl%2F1eayk5EUQe31A%2BRtnrN1lG6%2FWM%2B6Y9514I8cHRQmM7ypeAffMCgkihiuULSxQaMeJ76vg2yFFK6pIgxKbm3PHC%2B8TIeW4xFgGEee2OfBuQndmrW9VrwQhQtw%2F952L4BcnbWHSX%2FrmGcVkoFSV2%2FMiFGpHC%2FScnlo8vEVYVCEQKeafFbMGHOXStHsCvevTgWUb4uo1tIBG4F6qfpB6VjvCo2EoB0lG64%2FynLGZ%2BkI8lBlEnqLGQfzlSTgIiRsyHoldt%2Bxa7h3nQnFKKaq7y4tWVmJ4GoKvgGDMe1H5hfhn0Vga%2F9gqLmfJjbA23LkzrSy4E7m%2BVAHQ2azLJqq1c6gSJah0j4KFTc81cQ2IYZ%2FznxDOCdZTfBTFp%2FyDDcrsTJBjqkAQA%2FWqjBnGl6K2Dv9CfklutcVuQ2PLoyqDApJ%2FtXB43xTwzKJJL83eJAnkO9aNeuo69Ey3YDiRjxu7YR1gkIEMJirtuNuxKoGW7XJ1Ig89r5m5X4AcIyAMw7KgaPU4uKQWucz%2Bj9aV4dtbyhglSKB14X9mUH8DJA50G%2BfnOqOD%2FNCI%2FpOBgeEjrN7vEtABlEWHHx8HQ1lLkifTZAnQmcGwMMlKhd&X-Amz-Signature=5337412e016d7e589c4cbac91899420a1d440be5a794e61aa6e27cc2c93548c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

