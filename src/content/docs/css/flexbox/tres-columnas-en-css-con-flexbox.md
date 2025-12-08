---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJYUSBJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKhW3Cz3Zmr2PXk2i5qN7VPo6iqqa0YkdMjV2XEeei2AiAsRhT8zoyJhoHVjKJKH4T7mPtCjQ4PHR0GzYWX2ty2JCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0%2FpdJkVz%2FkIBYNbKtwDG%2FPDeeTZXJBYhlPKHSQDdsuxOdN%2BaMy7tO%2FvDl5RJFkc4WNeRGpRgPCDGarYt7kPWM81iJxikfoEyCZ46%2BZ7LyJ1hJydmM7yK28k%2FooKQ6o82dzXV2ZE3UGaC2i555Wj1fgKGVDQEbjIm831aoaXXyBehQKDdiMiedZSdlZx%2BWDFjOU%2FJj8Hm3WIPakaPPyMBRr8nXogW4225%2BiL7V5JI%2FEHkTNMFb776Iid1TmQI%2FXRDtE7blMSbi69CT6pNVHcFIM4Bdh1bludpiyC074FGQcX%2BiahEqIolpy16vd7wg8KPI3n6Mz59HzFXLt3u5MEsvPZfGAo3Nji%2BxKYqa9aZgi0yjCmMUTRpXvOMpH%2BrklxeF72fsXYSYg5cvkgTCsqfmC%2FMhSVjiJHpELKi50lZ0Cg9KRaxpRkMfBvTQoc76jVB45CoZWEPkF75fovaXGXjwRareclii%2BHplnHlNWQhtJN28jnRx7bNg25ZInhPO3js%2F%2BycZ5v5hoMSjoCU30vnKMkjCZuwVhEF7DTdqZpcvM4kYSvKGPTKorE6dvWlM7HS%2B8MV%2FDmMmz%2Bq7u93C2HqlhFZScCr2B8scyb60d6KKVO0WxrpAJq6dRAuRmYHknMA0ILN%2BWKkVpne7owvIDdyQY6pgEfd7%2BWoj8xUjAeGrnC9ncEVSuKSCkcVSnEou2weP8kaYRkdbbuxvkqbdaLmyyLa8YrfeFZgQHD9Kwjuaj1Y%2FI4bhH9%2FNy3ZIyBa6kwK9z38gL4QUbcyeYNCOOCr0E5zEbtTT%2FcSeRGmfWGoqePoENkanboPq%2FmY4pRsNCrQaL3nTZ%2F5fu6Ssd9d1YIPXgGjgxbKSflA0r14uEMPdK1TWAoLPpprMCH&X-Amz-Signature=b639347b0b136c3a59a2155a927a07cc02d5c48b1ef3f2b6abc18cf25a94b69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJYUSBJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKhW3Cz3Zmr2PXk2i5qN7VPo6iqqa0YkdMjV2XEeei2AiAsRhT8zoyJhoHVjKJKH4T7mPtCjQ4PHR0GzYWX2ty2JCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0%2FpdJkVz%2FkIBYNbKtwDG%2FPDeeTZXJBYhlPKHSQDdsuxOdN%2BaMy7tO%2FvDl5RJFkc4WNeRGpRgPCDGarYt7kPWM81iJxikfoEyCZ46%2BZ7LyJ1hJydmM7yK28k%2FooKQ6o82dzXV2ZE3UGaC2i555Wj1fgKGVDQEbjIm831aoaXXyBehQKDdiMiedZSdlZx%2BWDFjOU%2FJj8Hm3WIPakaPPyMBRr8nXogW4225%2BiL7V5JI%2FEHkTNMFb776Iid1TmQI%2FXRDtE7blMSbi69CT6pNVHcFIM4Bdh1bludpiyC074FGQcX%2BiahEqIolpy16vd7wg8KPI3n6Mz59HzFXLt3u5MEsvPZfGAo3Nji%2BxKYqa9aZgi0yjCmMUTRpXvOMpH%2BrklxeF72fsXYSYg5cvkgTCsqfmC%2FMhSVjiJHpELKi50lZ0Cg9KRaxpRkMfBvTQoc76jVB45CoZWEPkF75fovaXGXjwRareclii%2BHplnHlNWQhtJN28jnRx7bNg25ZInhPO3js%2F%2BycZ5v5hoMSjoCU30vnKMkjCZuwVhEF7DTdqZpcvM4kYSvKGPTKorE6dvWlM7HS%2B8MV%2FDmMmz%2Bq7u93C2HqlhFZScCr2B8scyb60d6KKVO0WxrpAJq6dRAuRmYHknMA0ILN%2BWKkVpne7owvIDdyQY6pgEfd7%2BWoj8xUjAeGrnC9ncEVSuKSCkcVSnEou2weP8kaYRkdbbuxvkqbdaLmyyLa8YrfeFZgQHD9Kwjuaj1Y%2FI4bhH9%2FNy3ZIyBa6kwK9z38gL4QUbcyeYNCOOCr0E5zEbtTT%2FcSeRGmfWGoqePoENkanboPq%2FmY4pRsNCrQaL3nTZ%2F5fu6Ssd9d1YIPXgGjgxbKSflA0r14uEMPdK1TWAoLPpprMCH&X-Amz-Signature=575dba4a1f8707055fa78dd667cf4fe12038f8e0792f92860c97b8b00412f461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

