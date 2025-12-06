---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCDR2R5S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPNHVY1y%2BYgLj%2F%2FDV1v0v9d7wb9QkTSPNvKE6au3zfwIgBTPjbDqpXvTIx%2FaTydgNns3%2FFmhh7J1ECrx%2FSaCBq8Mq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHqUPU%2BHHDhFjs9BbSrcA8k5ZI2Iioxr0jmDt8Zaxvi%2BRDB4xhfGiOexQXB0uwpAtZt87qaR964k6Uddkduf4RdTuSsNebQzzAJW3i0Zp5q19YYkrQa7UsCIIvbn6hwP76XHO0ZctqcGc9JuOtRTycYjDGSvzg2sRX3GGcdyi%2Bkn5lMWqZ%2Btrlm%2FEoNgCSOYd6kpzbd2Hn%2Fhr8Fv1jOuTB8Hs%2Bqx7KQxxgxvD%2FkYTgx6FviTcJTbKgd%2BjMUFbOi%2FVBYjgHtNNZBbbv7IU%2FfF0NSrJVdjuylkyI2RM5u29OQbCvXF7BU2zm3qLVX0WrD9goXJd%2BaYhBJuB235zWcNFttE72re9yaWeK4Ap5E78wl37lcsPEyizyY6O64Sg7NHbryctndiLfWpzxJIO23UyNTJvJ9b6d2MwRC0MnC%2BWR2rsAgJA92%2BHj6Al9O%2BEznacgeXTRRPeRwtQPd76yunnxa52l0dIcBYwJt8osZlXobZ0zLyTVH9mqu1WN%2B4LP5XnoHPJ8hlTXj5P3VjbtNHNe8VM8ibJZPw%2Fmn9g%2B%2FXENVEBblgU%2BJlrefVMIgDwflgkF3y7yCgDiXhHhemj4w0GuYoWgU07u8M3mAHTZY%2BfOW045dgBvSBKzqP1j5jzf1VSRwdVt5blfMbSuAwMJGfz8kGOqUBFuMJcLagWOx2ro2hah9xxywekgg2CUwuAWa8dp3QVsnOZPjEojmH55LjHMFnpQqha78kTJh6y97FNigMPUuAogp%2BhSiiFYxN%2B3poXP6rwpYNHFAHWyIqrks43keWrIoDSit7Wr4GioF44Cy6iqV2ldc87qjDFbUN3cPLd0%2B87VOuoKJJ5EdCJxDGL%2BwoRLExptSozgggWeMLOqDPYr2kRNbYvOZz&X-Amz-Signature=b1fff07d152d49de3c75e7fbde59121c7a9fe0c194a703632f54d076f941a86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCDR2R5S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBPNHVY1y%2BYgLj%2F%2FDV1v0v9d7wb9QkTSPNvKE6au3zfwIgBTPjbDqpXvTIx%2FaTydgNns3%2FFmhh7J1ECrx%2FSaCBq8Mq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHqUPU%2BHHDhFjs9BbSrcA8k5ZI2Iioxr0jmDt8Zaxvi%2BRDB4xhfGiOexQXB0uwpAtZt87qaR964k6Uddkduf4RdTuSsNebQzzAJW3i0Zp5q19YYkrQa7UsCIIvbn6hwP76XHO0ZctqcGc9JuOtRTycYjDGSvzg2sRX3GGcdyi%2Bkn5lMWqZ%2Btrlm%2FEoNgCSOYd6kpzbd2Hn%2Fhr8Fv1jOuTB8Hs%2Bqx7KQxxgxvD%2FkYTgx6FviTcJTbKgd%2BjMUFbOi%2FVBYjgHtNNZBbbv7IU%2FfF0NSrJVdjuylkyI2RM5u29OQbCvXF7BU2zm3qLVX0WrD9goXJd%2BaYhBJuB235zWcNFttE72re9yaWeK4Ap5E78wl37lcsPEyizyY6O64Sg7NHbryctndiLfWpzxJIO23UyNTJvJ9b6d2MwRC0MnC%2BWR2rsAgJA92%2BHj6Al9O%2BEznacgeXTRRPeRwtQPd76yunnxa52l0dIcBYwJt8osZlXobZ0zLyTVH9mqu1WN%2B4LP5XnoHPJ8hlTXj5P3VjbtNHNe8VM8ibJZPw%2Fmn9g%2B%2FXENVEBblgU%2BJlrefVMIgDwflgkF3y7yCgDiXhHhemj4w0GuYoWgU07u8M3mAHTZY%2BfOW045dgBvSBKzqP1j5jzf1VSRwdVt5blfMbSuAwMJGfz8kGOqUBFuMJcLagWOx2ro2hah9xxywekgg2CUwuAWa8dp3QVsnOZPjEojmH55LjHMFnpQqha78kTJh6y97FNigMPUuAogp%2BhSiiFYxN%2B3poXP6rwpYNHFAHWyIqrks43keWrIoDSit7Wr4GioF44Cy6iqV2ldc87qjDFbUN3cPLd0%2B87VOuoKJJ5EdCJxDGL%2BwoRLExptSozgggWeMLOqDPYr2kRNbYvOZz&X-Amz-Signature=d0e6de0b266b0fe3c204f5f56f4cd0ccc1649b82198bc80cf209af21aaec19eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

