---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFPYJAL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxnYriiGIUzDZHIV%2FiXM7p8Zzh0SKzeqMscqCYKFHrtAiB8b4bw00D0ZE3eaKnKEgagutH8Pjx6LdY6RFAWJAx9vCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRhY2%2F4Z6wAavccIKtwD62FBimDm3m12qNKJtzQyvShS3oglw8qTxv3%2BDatZeKYC0Hl%2FP1KbAeRMuoHFXavxrcjO9%2FsHWJ2jN3N8lI8TY93EWOKZodjVNvBYkDEYgOPJKD%2FPUKR7%2BBrG%2BEOYjkTJYSuy3lToSpjBZCC60IrSw8vvx4zjF9eVQMd3smHDH78aMCI%2B%2B068G%2FGW747B5%2BHKppuyFqxxmi5NMxZPs6jT5HDo9gacpb2g%2F8djQAy2sHPXnLk6SoA%2ForhvUcISCshNjoqnz1X5qXTH4IgcHQeqIwHKakWS0myMOSWpxUfEGSQG0IZgQysl2gRWfhMTJaYcmr8yuoWopuJlvtn%2BDhbgqWoVzo%2FWDOyL4fdT2Cr9wHqIOD9PWvgBbie6xOm2GgNV1YOWDktDdVWsEy53HflqXw9xtU%2Fu1H5pgpe66UOAUqJoFTgD0HXHtCVfG3RP5iUG8DpwTZgwALP%2BdCupoOPkDYPlj6ek3ZLL7Y1wkgmh5%2BJVAfZMxGJZ4ftkxqOJ6HLWA2Ta%2Ba7MaRMcjvQva5v2i%2Fs8N5JQM7YWhPxPsSjfPzKkGFchyNwWU5hvYq0V3bkNcJIkR%2FtSjkGMHVj9%2BLzJeChOlL1Bc3WzTuMZyh3rtrUAUqsBZvoRWhP594owyo%2FbyQY6pgH7oIQJAVB8X%2BYOOmf9vTpdjSN5MmGS%2FT4QlXOV7NbgyJphRN4LjEUu0SzwCaL0d1t0EtTPDYV3tNnpL23DQ0F2KrkdslkxeIfk3x0NAMaFGG8hB5wk2vjSV3CIsDreK8I8B002jYvTKBnWI8A8mlA1N3jMbkmnepCXJyUPGtf8KyNnn9CWGMZWDgtNKpTugDV%2BgV36ZtqMyYnyfIysjPZ3rGUehadf&X-Amz-Signature=86ca0a0b2ae705f845af229ebc99296793f74a5ef048527526af7ad201b85e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFPYJAL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxnYriiGIUzDZHIV%2FiXM7p8Zzh0SKzeqMscqCYKFHrtAiB8b4bw00D0ZE3eaKnKEgagutH8Pjx6LdY6RFAWJAx9vCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRhY2%2F4Z6wAavccIKtwD62FBimDm3m12qNKJtzQyvShS3oglw8qTxv3%2BDatZeKYC0Hl%2FP1KbAeRMuoHFXavxrcjO9%2FsHWJ2jN3N8lI8TY93EWOKZodjVNvBYkDEYgOPJKD%2FPUKR7%2BBrG%2BEOYjkTJYSuy3lToSpjBZCC60IrSw8vvx4zjF9eVQMd3smHDH78aMCI%2B%2B068G%2FGW747B5%2BHKppuyFqxxmi5NMxZPs6jT5HDo9gacpb2g%2F8djQAy2sHPXnLk6SoA%2ForhvUcISCshNjoqnz1X5qXTH4IgcHQeqIwHKakWS0myMOSWpxUfEGSQG0IZgQysl2gRWfhMTJaYcmr8yuoWopuJlvtn%2BDhbgqWoVzo%2FWDOyL4fdT2Cr9wHqIOD9PWvgBbie6xOm2GgNV1YOWDktDdVWsEy53HflqXw9xtU%2Fu1H5pgpe66UOAUqJoFTgD0HXHtCVfG3RP5iUG8DpwTZgwALP%2BdCupoOPkDYPlj6ek3ZLL7Y1wkgmh5%2BJVAfZMxGJZ4ftkxqOJ6HLWA2Ta%2Ba7MaRMcjvQva5v2i%2Fs8N5JQM7YWhPxPsSjfPzKkGFchyNwWU5hvYq0V3bkNcJIkR%2FtSjkGMHVj9%2BLzJeChOlL1Bc3WzTuMZyh3rtrUAUqsBZvoRWhP594owyo%2FbyQY6pgH7oIQJAVB8X%2BYOOmf9vTpdjSN5MmGS%2FT4QlXOV7NbgyJphRN4LjEUu0SzwCaL0d1t0EtTPDYV3tNnpL23DQ0F2KrkdslkxeIfk3x0NAMaFGG8hB5wk2vjSV3CIsDreK8I8B002jYvTKBnWI8A8mlA1N3jMbkmnepCXJyUPGtf8KyNnn9CWGMZWDgtNKpTugDV%2BgV36ZtqMyYnyfIysjPZ3rGUehadf&X-Amz-Signature=366853a73d9f7971ad43eba5ee26306d246913d87ed6fa4cb1ebcc45a656c173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

