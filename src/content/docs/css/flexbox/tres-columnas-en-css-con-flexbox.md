---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHQOAQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFTpN%2FzoSGeNFBIkrLJxSTXjcvj0DHbCkj2FTtBOlk5AIhAOgSHPPZjABTZNgMQTJdv472B4D6vKTikY9aYahEEl7CKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRjW8vl%2FjhQ8YwNBMq3AOJc3UjuXOcBxHLW%2BGEQrL0aHcuzs1JSrR%2FPwBX2dhkLn2cyF1fbWESDK4RtU1%2F8zM3EbywwiV6%2F25ic6uCpgUVhyOg8VxS3vrLqgiUyQ8k1%2BP8g6BRowGcFnNA4rbkzAJBflAA4MdRTPgb7qcLLpfsHDLAC32OcxTW1qbmWC6QuhSL7je3pq4kgUCpZzy2JlkyVLcH55v%2BPVfBudFyUWyp6YmGknGej34OGHCllsaW7QXFOA7vrsrG3aGyDkah%2FPSDz%2BWV8iglvbVPWX8uu41UGnteQKXijJ6Cexb59g1SWu0hRDfzgDF8Hm0D7aUivbgWcwJb8ecufl3Y7XTD%2Feaom%2FCjRxuH76V8EFZKNEn4Oab7grHZJTjQmh8pjAsfnHFM8%2Fp%2F7M2p9y0soqlE%2Fy%2FprMNi06oRple%2B%2F4Jjz6i0n2cdAXWg4%2BqoUHnZrr7XYBnfLlbUpLlVcc%2BBdu%2BhWwXzI6uxf0i3hs%2FTOwUFBGHu9jZIsINBOjl8A7GURlhoGX4AlV0WknBBpLzb7iPZ7xLwcS7KaetLhUBVDqKGg2Hf%2FjkLNUma5GZ%2Fg1odDyuBUDLZf5Xs1HeNjPhTMSVkNPJa3UnN7eQRpkyRMX52g1XAtyVDMKieOeJzDRDPkjDsiM3JBjqkATXNMaS8cpBWRzDBJrU3fXbt2tK78isEOLovPgAhDBNB%2B40SJ8X%2BLUf5NLd6PTpg3fpiecgf9Jn6quBZCHAlnxNGnAOHS97kSTecvZIAgFVo0ls27oqGUypiAt03hk4h4K%2FX1nUr287Pg8vBL4CL%2BAfWVMGlK6W7KXMjqm6X2BCGIAsGcTPtDJIOOqvxg3CJGlsmUlpDjhEHxkyCnoKe%2BoYp7AFW&X-Amz-Signature=28e8d1f852197380739237f11e8d3f7038eb81c503f7771d10afd6c545b05944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHQOAQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFTpN%2FzoSGeNFBIkrLJxSTXjcvj0DHbCkj2FTtBOlk5AIhAOgSHPPZjABTZNgMQTJdv472B4D6vKTikY9aYahEEl7CKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRjW8vl%2FjhQ8YwNBMq3AOJc3UjuXOcBxHLW%2BGEQrL0aHcuzs1JSrR%2FPwBX2dhkLn2cyF1fbWESDK4RtU1%2F8zM3EbywwiV6%2F25ic6uCpgUVhyOg8VxS3vrLqgiUyQ8k1%2BP8g6BRowGcFnNA4rbkzAJBflAA4MdRTPgb7qcLLpfsHDLAC32OcxTW1qbmWC6QuhSL7je3pq4kgUCpZzy2JlkyVLcH55v%2BPVfBudFyUWyp6YmGknGej34OGHCllsaW7QXFOA7vrsrG3aGyDkah%2FPSDz%2BWV8iglvbVPWX8uu41UGnteQKXijJ6Cexb59g1SWu0hRDfzgDF8Hm0D7aUivbgWcwJb8ecufl3Y7XTD%2Feaom%2FCjRxuH76V8EFZKNEn4Oab7grHZJTjQmh8pjAsfnHFM8%2Fp%2F7M2p9y0soqlE%2Fy%2FprMNi06oRple%2B%2F4Jjz6i0n2cdAXWg4%2BqoUHnZrr7XYBnfLlbUpLlVcc%2BBdu%2BhWwXzI6uxf0i3hs%2FTOwUFBGHu9jZIsINBOjl8A7GURlhoGX4AlV0WknBBpLzb7iPZ7xLwcS7KaetLhUBVDqKGg2Hf%2FjkLNUma5GZ%2Fg1odDyuBUDLZf5Xs1HeNjPhTMSVkNPJa3UnN7eQRpkyRMX52g1XAtyVDMKieOeJzDRDPkjDsiM3JBjqkATXNMaS8cpBWRzDBJrU3fXbt2tK78isEOLovPgAhDBNB%2B40SJ8X%2BLUf5NLd6PTpg3fpiecgf9Jn6quBZCHAlnxNGnAOHS97kSTecvZIAgFVo0ls27oqGUypiAt03hk4h4K%2FX1nUr287Pg8vBL4CL%2BAfWVMGlK6W7KXMjqm6X2BCGIAsGcTPtDJIOOqvxg3CJGlsmUlpDjhEHxkyCnoKe%2BoYp7AFW&X-Amz-Signature=0a607ad0b7c281a2453bd7e4dd056b0530172fb5021f6898b0d4cdc5bb3b08ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

