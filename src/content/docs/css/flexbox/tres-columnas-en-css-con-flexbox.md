---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVRVGEX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJ1BtgxDZ%2FRvoZYNFyO9AXU7n3CzOkgT1msUjDIU%2BvAIhAPbMXvVSp48BG%2B1oAB45BdNj201Mf1pvDU6b5q0vV%2BQ5Kv8DCFsQABoMNjM3NDIzMTgzODA1IgwSvcazznoX7JQLVF4q3AP%2BalYRZi7XmBm8LnFnML3%2FvEiW3EucODd25Y9EzeOByRFcAUQaUfKK5LsCX6msNbyHalhYHkXG%2FFAS3lOgxSnpSyrpluFJqHzEIlOgtP2wDg8PaYeEE%2Fs6f1XO3FhJut%2FJnLU3bLnRPJgDKFusYua5pyGzhTWC0%2F3sAjFmoTfgGH0tKJREGQ3iDtliFnK%2BLHJv%2F0putmCMX%2FegsSYTTGDvGnJSIClOhFxDZF865r7VCe1u6aZnKkzwGZNI8Z3I2CAydVPymbWVuXDW7dZfBK%2Fb4YbazJOwYHgKYZhzvYvHBz2HeouYu7cSKXvS8kMtfvCKxtoViQu9DuMx9AM9Ck9UuimdREsxLeUI%2FbTRIZuZ6s6vBOU4AgSeviv15G9RoslTzF5Z35jeFXFC1%2FkJnzKEdk%2Biyk%2B1hdxa5YYk%2BWASdxK7UKGW09SfQfIavAvn8pfW0sHQnpuTjRniKAKNgGmyWgL8GQy1dhC32%2FrITQMbRaLasEt1rCGGMdmAJAtKo5HpC5zBn7GpPTPO1dGbySkw8%2F9%2BincFmpTY4w5emZfRloMrm%2F85uG6Snbn%2Fp4xIanjK9BCjk0VBLWzKIzMOaQrbW2VaQrpv2%2Fd5pqLNB9fbIh8RsyAsiymOl%2BfFhDDM1MrJBjqkAS%2F0x5g22vvDiNZYzmzj4Yk6LZeIrNe6YsYIm1HzgRfXCR%2FRTZ1stfibUjtxzRH68d%2BKPGTPjtJm4fD1ljK2RoAUKRwbtQ438Kpf98eI0XAdN3wS3Tmw6k%2B%2BhalmfMNa%2F8spkop2eHdy1jLiTGwrAbuFjXnkfwheIW1PDXYPLniwOy4hzXnx3%2BwOFnIA%2BiwdXHWVcu1ZvgxOS2h7l5uAaeMx2Nmw&X-Amz-Signature=ee71048092c1af1965b0b9fa4bd49caa98c84a5ce7a0c1ddfe741d1651a19108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVRVGEX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgJ1BtgxDZ%2FRvoZYNFyO9AXU7n3CzOkgT1msUjDIU%2BvAIhAPbMXvVSp48BG%2B1oAB45BdNj201Mf1pvDU6b5q0vV%2BQ5Kv8DCFsQABoMNjM3NDIzMTgzODA1IgwSvcazznoX7JQLVF4q3AP%2BalYRZi7XmBm8LnFnML3%2FvEiW3EucODd25Y9EzeOByRFcAUQaUfKK5LsCX6msNbyHalhYHkXG%2FFAS3lOgxSnpSyrpluFJqHzEIlOgtP2wDg8PaYeEE%2Fs6f1XO3FhJut%2FJnLU3bLnRPJgDKFusYua5pyGzhTWC0%2F3sAjFmoTfgGH0tKJREGQ3iDtliFnK%2BLHJv%2F0putmCMX%2FegsSYTTGDvGnJSIClOhFxDZF865r7VCe1u6aZnKkzwGZNI8Z3I2CAydVPymbWVuXDW7dZfBK%2Fb4YbazJOwYHgKYZhzvYvHBz2HeouYu7cSKXvS8kMtfvCKxtoViQu9DuMx9AM9Ck9UuimdREsxLeUI%2FbTRIZuZ6s6vBOU4AgSeviv15G9RoslTzF5Z35jeFXFC1%2FkJnzKEdk%2Biyk%2B1hdxa5YYk%2BWASdxK7UKGW09SfQfIavAvn8pfW0sHQnpuTjRniKAKNgGmyWgL8GQy1dhC32%2FrITQMbRaLasEt1rCGGMdmAJAtKo5HpC5zBn7GpPTPO1dGbySkw8%2F9%2BincFmpTY4w5emZfRloMrm%2F85uG6Snbn%2Fp4xIanjK9BCjk0VBLWzKIzMOaQrbW2VaQrpv2%2Fd5pqLNB9fbIh8RsyAsiymOl%2BfFhDDM1MrJBjqkAS%2F0x5g22vvDiNZYzmzj4Yk6LZeIrNe6YsYIm1HzgRfXCR%2FRTZ1stfibUjtxzRH68d%2BKPGTPjtJm4fD1ljK2RoAUKRwbtQ438Kpf98eI0XAdN3wS3Tmw6k%2B%2BhalmfMNa%2F8spkop2eHdy1jLiTGwrAbuFjXnkfwheIW1PDXYPLniwOy4hzXnx3%2BwOFnIA%2BiwdXHWVcu1ZvgxOS2h7l5uAaeMx2Nmw&X-Amz-Signature=242c2c1f874bd8ec6d6cdc3a7e5d6088ad9748f43aaa28cf58d6f80d3578c592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

