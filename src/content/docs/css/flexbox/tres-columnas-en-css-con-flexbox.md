---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOTROS7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDqIC%2BVm4AGn27fhIcDlpR0G1LBVEg%2F2ejQo3%2FeMqLvAiEA2b%2F1Fu8p05Q8FkC6f2sBEKosPv4jiav4lBAE0Oy7wZ0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4xLgAmZW%2FRX4ZcLSrcA%2Fq%2FDX9krPwbUagemuNvqJOnBNb%2Fd1d4IOpsp%2Fv21qfESLMwqqZ5A4kefGuPvD8IthiZEOZzpXPglGypnahG8pN%2FzqFX26kK0lQ7G6u0aEqTBQTm6G8XmruleQtsZubDv2M3lwlMsftd0h6PVioyL4aEZdciIPMlSAj6eLKwLTu2yD%2FYqOmSLLRw6siulMA9WHXIWAHODTj%2BmylBYzD3MJbje5t%2FYZgDutrP6gCt666t6p2FZIM8v83mcbdTmGd6f5rwVk45QVcA2tJBKF%2Bb9w2ecd8vRwE8NeRZkhuiJ%2BS2D7g7tBpOErPAvyYY8sCEzDwThAvS624cvM%2Fcsk1QYTag%2BLCwaW5HlsEiT%2FOpmZKI%2FoEbIZVhbSQaVsH1GT5lc4rETtm%2F1T8%2BgHpjWLXI%2F5bqB7jgP4tQ2dnVniB%2FZNMPnavhQAtHnpxn7HoCXueJcuyknto5x4S14oaghTdcFNGnfuSdR%2F%2BHnaWaeg%2BQvON0L7jYL3y6APzx8K1Lgma1iZtqbhZz7DnfQxrbQZgIsHjPd9jzkCdnnUVGy8vccgGEvuZXmxmX0bAjnLAtHDL34bZjFt8yHvAwKGq%2BiU3FLth8IaT79log3FEXL2HYp%2BomAAGNyLWjZwowCaesMPyz2ckGOqUBQmtqVWwimOxKttPKoHkDV5OUXNqAPN4kRRUgQOZkjYe%2BRmqtMnunE6KrsX1Fs3tvL2aGWFXD6dmYHlRGFanBcO1t2MCqq5IHU%2B8R0myRusRUTEWS3MYEb1x5qUtCxZH5eiAtzqxtaUspCzCBIm9L5rQachiuxEO%2Br6KdodaNO7HC8%2BAyEYmVwc7Lkc5o1UtyLpUVC6PzO%2Fa2dL20EYvnfbgN7IkG&X-Amz-Signature=f2d171e13842323e868488b5a49f3cc1f49e2b4c51550a552ac05d61fa5a0ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOTROS7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDqIC%2BVm4AGn27fhIcDlpR0G1LBVEg%2F2ejQo3%2FeMqLvAiEA2b%2F1Fu8p05Q8FkC6f2sBEKosPv4jiav4lBAE0Oy7wZ0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4xLgAmZW%2FRX4ZcLSrcA%2Fq%2FDX9krPwbUagemuNvqJOnBNb%2Fd1d4IOpsp%2Fv21qfESLMwqqZ5A4kefGuPvD8IthiZEOZzpXPglGypnahG8pN%2FzqFX26kK0lQ7G6u0aEqTBQTm6G8XmruleQtsZubDv2M3lwlMsftd0h6PVioyL4aEZdciIPMlSAj6eLKwLTu2yD%2FYqOmSLLRw6siulMA9WHXIWAHODTj%2BmylBYzD3MJbje5t%2FYZgDutrP6gCt666t6p2FZIM8v83mcbdTmGd6f5rwVk45QVcA2tJBKF%2Bb9w2ecd8vRwE8NeRZkhuiJ%2BS2D7g7tBpOErPAvyYY8sCEzDwThAvS624cvM%2Fcsk1QYTag%2BLCwaW5HlsEiT%2FOpmZKI%2FoEbIZVhbSQaVsH1GT5lc4rETtm%2F1T8%2BgHpjWLXI%2F5bqB7jgP4tQ2dnVniB%2FZNMPnavhQAtHnpxn7HoCXueJcuyknto5x4S14oaghTdcFNGnfuSdR%2F%2BHnaWaeg%2BQvON0L7jYL3y6APzx8K1Lgma1iZtqbhZz7DnfQxrbQZgIsHjPd9jzkCdnnUVGy8vccgGEvuZXmxmX0bAjnLAtHDL34bZjFt8yHvAwKGq%2BiU3FLth8IaT79log3FEXL2HYp%2BomAAGNyLWjZwowCaesMPyz2ckGOqUBQmtqVWwimOxKttPKoHkDV5OUXNqAPN4kRRUgQOZkjYe%2BRmqtMnunE6KrsX1Fs3tvL2aGWFXD6dmYHlRGFanBcO1t2MCqq5IHU%2B8R0myRusRUTEWS3MYEb1x5qUtCxZH5eiAtzqxtaUspCzCBIm9L5rQachiuxEO%2Br6KdodaNO7HC8%2BAyEYmVwc7Lkc5o1UtyLpUVC6PzO%2Fa2dL20EYvnfbgN7IkG&X-Amz-Signature=14824e9819268b29a6ef810e14525e4c0680364ac4f0bcfa1ba8223a9374bec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

