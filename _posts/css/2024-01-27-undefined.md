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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOXKYUA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCtP3iLiDOji8LpM5uma2LkpfWJg1sZJYG76LeqT1PVwgIhAOfcsjIM5ZlOaGU0WKlmWINJIO32xa9LYgVRIM200SQZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzs1%2BW5F%2F6NuhDH9TQq3AOcu79A3U3E4e%2Bm7PXWi2VXBJJtqq7mq%2FfMCi5J115EEeZqAIZ06DyMapOvam3N3eCw%2B5uzpCp1rMsLC%2F5FHOpBZD372GmG0qMawelEpsYitI9e%2FrE7%2F6NwSl5OY%2F827T7lqEbO2iIH0bscgNM2di7HLARYyjq7R6feMuB0miXq7T78fc96M02Gaft7qSUeuBFQA6W07fp63zB49aAsPmS5P4XwMbLXb4pGdi033REFutwnGtvmrF1en%2BbE%2FpQFr1eOUWie0nqrKHeRhdPm3ZZWA%2BthnsHCgaO%2BZmWLD3tnZiLz3GhkFcaVyGcP7XZPO3FGe2rv7obMJ%2F7bjieZXDWcUaxrhPce%2FS5rK46vsrV%2BpKoPkL0n2nooC5pTi%2FU%2FZR29YH%2BHzBf7QE0yb20tGRRzNcJtkcKbNuaWgHlZ6YQQXjgDdOT1tm5ewrtyqQoaZ63D0tJ9DHuYh7Nw9JUp5YqVp4kKJ4nTgWd4%2BxSdWbxHBOhTNxUd8IaDGrUOxnsnnwSQLcEGfpUca%2Ftalh20FzI4G%2BkbFLaRCq%2F6EARLXaZ6q1dH9n%2FRnPN3vAMDIRw4bJxNykaJq2yXIbNmHUk6bqhponqLfFVgiI1AW%2Fu5Z5tp0wpLNPr3CtfUGLolPDCOwcHJBjqkAejw889MlCW3ikLH4tTDRFaM%2Bwvov3UoLJhZR0W7Ir7hZh5IzCJVdkOO6IGfu0WfHHxKuTJQOilk1L0UcgFGL8wCho%2BwLzyANx1%2FB8e3lhQY5b10jSg%2FuVWTSqirHfONpskmbJH17VMtd9PNwxBSFhpEPZiWyVmjfSXauP4Ec9LaJRO5MJ0SzkM1S3y5Wdzw5m8z%2Bo3CjHamX%2FEciUYIZcPnn8XY&X-Amz-Signature=8eb9cbffc240af4a8d25b8d779ebcc202b90905e76211e5b8630207453f85f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOXKYUA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCtP3iLiDOji8LpM5uma2LkpfWJg1sZJYG76LeqT1PVwgIhAOfcsjIM5ZlOaGU0WKlmWINJIO32xa9LYgVRIM200SQZKv8DCDEQABoMNjM3NDIzMTgzODA1Igzs1%2BW5F%2F6NuhDH9TQq3AOcu79A3U3E4e%2Bm7PXWi2VXBJJtqq7mq%2FfMCi5J115EEeZqAIZ06DyMapOvam3N3eCw%2B5uzpCp1rMsLC%2F5FHOpBZD372GmG0qMawelEpsYitI9e%2FrE7%2F6NwSl5OY%2F827T7lqEbO2iIH0bscgNM2di7HLARYyjq7R6feMuB0miXq7T78fc96M02Gaft7qSUeuBFQA6W07fp63zB49aAsPmS5P4XwMbLXb4pGdi033REFutwnGtvmrF1en%2BbE%2FpQFr1eOUWie0nqrKHeRhdPm3ZZWA%2BthnsHCgaO%2BZmWLD3tnZiLz3GhkFcaVyGcP7XZPO3FGe2rv7obMJ%2F7bjieZXDWcUaxrhPce%2FS5rK46vsrV%2BpKoPkL0n2nooC5pTi%2FU%2FZR29YH%2BHzBf7QE0yb20tGRRzNcJtkcKbNuaWgHlZ6YQQXjgDdOT1tm5ewrtyqQoaZ63D0tJ9DHuYh7Nw9JUp5YqVp4kKJ4nTgWd4%2BxSdWbxHBOhTNxUd8IaDGrUOxnsnnwSQLcEGfpUca%2Ftalh20FzI4G%2BkbFLaRCq%2F6EARLXaZ6q1dH9n%2FRnPN3vAMDIRw4bJxNykaJq2yXIbNmHUk6bqhponqLfFVgiI1AW%2Fu5Z5tp0wpLNPr3CtfUGLolPDCOwcHJBjqkAejw889MlCW3ikLH4tTDRFaM%2Bwvov3UoLJhZR0W7Ir7hZh5IzCJVdkOO6IGfu0WfHHxKuTJQOilk1L0UcgFGL8wCho%2BwLzyANx1%2FB8e3lhQY5b10jSg%2FuVWTSqirHfONpskmbJH17VMtd9PNwxBSFhpEPZiWyVmjfSXauP4Ec9LaJRO5MJ0SzkM1S3y5Wdzw5m8z%2Bo3CjHamX%2FEciUYIZcPnn8XY&X-Amz-Signature=5d30dfbae27b371122ac3f03020599a4840385bf06babc2cafd334921cc47e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

