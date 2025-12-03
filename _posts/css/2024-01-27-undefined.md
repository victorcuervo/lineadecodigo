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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCLI36W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCsXvrlKjeAbp3kv2up%2Foqor8f0bIKyJBayMYxwWmlHcwIgTuxQnB0pebnBff3nFjz2YlJiUsq%2FN8cobqD6jJVCHIwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDISoDkxmZkOwL44IZircA6EGWvCB46ePiCU4L%2FAaFJLz7meOIZ1BEpGdnvOTDCRW4lVABehqP4TF%2BdLA7rnX3w3ePxWY47aWwkY8emr3AAL8%2B%2BDytToRpoK86Xpj5klDaKY0bje483ApdHVJgEbS2xeTkYwGfJ1G7wPLc77XVwfVM%2FW7HJXgHLmKtzQNehYpX5P89nR7KoDyF3BRwmm28pcL1udJdNd0uW6Ef6Ll6ooKfpLXMEozUWHMJeBu%2BCS86tnNr9zn7eTv5C5txT0QHC3RRxvaeaNqDnPaq90iIBoyEYRUH0Y3f01UiHlLxGEbshyFW1Qkl7IUws%2ByRMSE5Wbx%2BVQxa6M7e%2Bx8pij2QDW0B6uJIUR8FtHCErDJKErCP9O9x%2Bq6W137zQWNk4GxVwwjgpdtCzZGZxZABcJl3R7WrMe7Q0tH%2BoBxgQppmT6dvqQaNbxZAzOtJtmFEafp1Cw5vMhiaoLUSqEV129TKRLpLexrfAsNErLSsnY4w22hHBLF76SbTqbohFghF8A27707WxiVd5l8GA2Ano1zmZCapPjORFJwf3TiCQDTH3NFaKFRImLEDnebig73MWU7pf40RNk42A0GziSnMUOHZCeX4s34Um5U3qXUsUFFuN8Jivz%2B7owi1CJAI3ODMMXawckGOqUBn2CsPy%2FMy3vA32OkpKczrWveV31%2FTu%2BMmU0p0rkfImlxif04uTLOaJhCd1w69EJ4ijpRMd%2FIg%2BEyUKe6FZtpWzmKhzARzbuaTb07ODSgvADB9PGBOwkRJ5bbuEnTOJ%2FozSfMMnMtDbYVdZTapKjfVA9tIe5WPmIZa5JErlfJ8MBNh4BgMUCDaJGOx53wNdItE8gO4ruO5EISRaTlhM9PK2cz8DX5&X-Amz-Signature=1c3b42d3bc3af42fd152ae45bcece3e7460580a32bb1c71369655ffc373625b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCLI36W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCsXvrlKjeAbp3kv2up%2Foqor8f0bIKyJBayMYxwWmlHcwIgTuxQnB0pebnBff3nFjz2YlJiUsq%2FN8cobqD6jJVCHIwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDISoDkxmZkOwL44IZircA6EGWvCB46ePiCU4L%2FAaFJLz7meOIZ1BEpGdnvOTDCRW4lVABehqP4TF%2BdLA7rnX3w3ePxWY47aWwkY8emr3AAL8%2B%2BDytToRpoK86Xpj5klDaKY0bje483ApdHVJgEbS2xeTkYwGfJ1G7wPLc77XVwfVM%2FW7HJXgHLmKtzQNehYpX5P89nR7KoDyF3BRwmm28pcL1udJdNd0uW6Ef6Ll6ooKfpLXMEozUWHMJeBu%2BCS86tnNr9zn7eTv5C5txT0QHC3RRxvaeaNqDnPaq90iIBoyEYRUH0Y3f01UiHlLxGEbshyFW1Qkl7IUws%2ByRMSE5Wbx%2BVQxa6M7e%2Bx8pij2QDW0B6uJIUR8FtHCErDJKErCP9O9x%2Bq6W137zQWNk4GxVwwjgpdtCzZGZxZABcJl3R7WrMe7Q0tH%2BoBxgQppmT6dvqQaNbxZAzOtJtmFEafp1Cw5vMhiaoLUSqEV129TKRLpLexrfAsNErLSsnY4w22hHBLF76SbTqbohFghF8A27707WxiVd5l8GA2Ano1zmZCapPjORFJwf3TiCQDTH3NFaKFRImLEDnebig73MWU7pf40RNk42A0GziSnMUOHZCeX4s34Um5U3qXUsUFFuN8Jivz%2B7owi1CJAI3ODMMXawckGOqUBn2CsPy%2FMy3vA32OkpKczrWveV31%2FTu%2BMmU0p0rkfImlxif04uTLOaJhCd1w69EJ4ijpRMd%2FIg%2BEyUKe6FZtpWzmKhzARzbuaTb07ODSgvADB9PGBOwkRJ5bbuEnTOJ%2FozSfMMnMtDbYVdZTapKjfVA9tIe5WPmIZa5JErlfJ8MBNh4BgMUCDaJGOx53wNdItE8gO4ruO5EISRaTlhM9PK2cz8DX5&X-Amz-Signature=dae4d9bfb30b67a5e4984812e28f0f3386fb52b1493aa2ca5aef44fe5c3d5b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

