---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKW3SSDT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICicb0ROhg%2FQKbyyKFCJdbnMiwq6z%2FfCXJmUcTmfGv79AiAtT5RG43IzqF72WoRqTVVbQqHLcB84454tClI0BTUPjSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36WPYJUawGJVZtpBKtwDfyxYsiS0iFuuQsNpUPpoWMbpAIPkgAWZg50nEWQUJA4ubGBJl0DtfsQAqHSZfbnJbPmG2%2BLCooMyjpnudvumFHOt3NRF%2Bw6KybkYNerNPILLwQz2ImhwOGZhUEK0fh0%2F2LeHMMoLsYRMEeGouSq6TsqUTCw%2FGOESdGB%2BrUrN%2BojXh7%2B%2FEmy3fDZ4P2B7uQqaOTvQQoJUN5g4NQ7OoCaHoyaR%2FQE0gHWBw%2FTwvY2oZHygnFeoCxeMpFO8L99s6aoFUP7TPuGTBHEuVOPg783w9yXr5Ba3f5mBhniSdZlB7lES%2FU0I3YPeIhsVuygj2YLCiI7Wbtyv4Q%2BKeDLd6QZshfAJY%2FX3whQjbuBDH46y4zQInxThgeRM30ZBbTdFyinqAh3vKayk2EA0XQ3FwCr2bwXG5CgYIcnhMedBcPkKPZ0hZee2nqWvva25sH3z9kV0dcrpA5EUuDIZoCbo9CXDj0dH1ETRcGSDWWmw%2Bm3MlMA0qE8H8mdnmJFvniPPPu9kF1H4PDEn3fdfhHzwnKwCyC31y4qoK5yOqy8IxhDJIoNv5GrwY0mKMoyiWpDN9rip7BZtEGQQ6CL7PMRYlwgCSSXCESGsMB%2BARJB%2F6Jzh5qZvaiuJjXm36SCxkSEwg5DbyQY6pgG4NnaKt1fL0rT9hhH36QcFlUho0mkG%2F%2Bh9SAobvn7662szpVzYRF9e5GFY2h8qpQWTxcprtnK7glOzpcT1Ce3QwugxxBPt3y0Edlt8oaPuI3U9grK9v1%2BDsYRbgbn6KHI0gLBGtvQUvjAyFQrb2SmbXTHqPgU5mQGBdkazoJAn%2FvPjXSLbq72W1IeW4nC6cT98ClRLvInUFvgh7J%2FMAPdDI2qwvlNt&X-Amz-Signature=579fa1bc4fa8c61b49f7e59eec1a647db72c6d80ec663d5e02adeb3c75406c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKW3SSDT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICicb0ROhg%2FQKbyyKFCJdbnMiwq6z%2FfCXJmUcTmfGv79AiAtT5RG43IzqF72WoRqTVVbQqHLcB84454tClI0BTUPjSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36WPYJUawGJVZtpBKtwDfyxYsiS0iFuuQsNpUPpoWMbpAIPkgAWZg50nEWQUJA4ubGBJl0DtfsQAqHSZfbnJbPmG2%2BLCooMyjpnudvumFHOt3NRF%2Bw6KybkYNerNPILLwQz2ImhwOGZhUEK0fh0%2F2LeHMMoLsYRMEeGouSq6TsqUTCw%2FGOESdGB%2BrUrN%2BojXh7%2B%2FEmy3fDZ4P2B7uQqaOTvQQoJUN5g4NQ7OoCaHoyaR%2FQE0gHWBw%2FTwvY2oZHygnFeoCxeMpFO8L99s6aoFUP7TPuGTBHEuVOPg783w9yXr5Ba3f5mBhniSdZlB7lES%2FU0I3YPeIhsVuygj2YLCiI7Wbtyv4Q%2BKeDLd6QZshfAJY%2FX3whQjbuBDH46y4zQInxThgeRM30ZBbTdFyinqAh3vKayk2EA0XQ3FwCr2bwXG5CgYIcnhMedBcPkKPZ0hZee2nqWvva25sH3z9kV0dcrpA5EUuDIZoCbo9CXDj0dH1ETRcGSDWWmw%2Bm3MlMA0qE8H8mdnmJFvniPPPu9kF1H4PDEn3fdfhHzwnKwCyC31y4qoK5yOqy8IxhDJIoNv5GrwY0mKMoyiWpDN9rip7BZtEGQQ6CL7PMRYlwgCSSXCESGsMB%2BARJB%2F6Jzh5qZvaiuJjXm36SCxkSEwg5DbyQY6pgG4NnaKt1fL0rT9hhH36QcFlUho0mkG%2F%2Bh9SAobvn7662szpVzYRF9e5GFY2h8qpQWTxcprtnK7glOzpcT1Ce3QwugxxBPt3y0Edlt8oaPuI3U9grK9v1%2BDsYRbgbn6KHI0gLBGtvQUvjAyFQrb2SmbXTHqPgU5mQGBdkazoJAn%2FvPjXSLbq72W1IeW4nC6cT98ClRLvInUFvgh7J%2FMAPdDI2qwvlNt&X-Amz-Signature=a6bcf430f422e332c7bc6d49f7fd85f44d078daf4f3c878ed6769b3d849d49dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

