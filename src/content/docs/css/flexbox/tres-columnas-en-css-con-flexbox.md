---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JNAGPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGpnIRTqqjqrqmM%2BiZPUWE6EP7nwtbsOEULqq5f2lQIhAMb70evzhQpHgDdJf7bkJHWJa2zxNqQu1BDTQW45IfQ2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKSwbAlWyMfEIWRJIq3AM%2FUMXBgT%2FLR53Y09FtGEsRlva5IieYmhnwhwsUs%2Fb5Cnwns0JcT%2By46Y%2BZPzsVHwoht8ko3RV3rdU2%2FHU56njzLptCRQdsVR%2FGi%2BaCYuA28gNJuvcdNvOmMSDhhGl11EkVBvcLhtz6YYyVA1eUiFuddusHjreWMLyHlUDiEEmwU4hjXp8crVpuuQ0dg8TGg17gJ9a1Ipvjd5O3iJsU3dvAipWYeik8Gqsu8zfZ7e7U%2BYXMEvt33X3VMBX6w3gSXHVvoZKXitXpDB%2BkIqYzK8nMrS%2F0xybUbKvK3t9FeE0IeKKkwpLbi42wyDAH48Vvi1yNYhJTUsDWu3fn11aUFqcAwWKgNEQHOoI0RS%2FuXmy0xbCavaGbqHU3L2sVUjUDcPKxI1FU9K9kqlMmJ0F8sUxSX70oaCbY1I1KwCdevkoU251a%2BwF8Id7DiFDzUPwOA6I9JpqzbW6LGjEqebTBhRFnl%2BaYvOZmMLloo1gQvT6o%2BwChG6G8AEd4ewqGv6%2FRjBfc7ZRQ%2FGyCCfM7pFERPJWheD2HYvldyMHAlaIj0YslIdWibn3E6%2FaSlGZe9e5nj%2FOLOVswNmELVAZvMV71kVerjRZEXgMK52h4Q36DJAgHer2olC6ZuebCAnHlQDDg7dnJBjqkAQrT12h18PuCEMeWRzD7UTsF154KtiaY3ZvNJqPFWTInlg%2FFIBgkbzgKW2TFYOY8LKqNHCcVMBt3%2BOi2b%2FO1XI5uZQbW3I%2B91suIds5CDb%2Bz7SlLuvrW%2FqGIX%2BPqOpjbPUrraGQM%2FVyhJj1ajyJ5IofQ2DgFQ%2BwxU%2FRqZUIKUKFyUrHzVJEHRkOL9E8U4%2B62kPusA5lMZLmgYOIu4a1LCdaWjEnv&X-Amz-Signature=398227fa5e603271acb3087b638e3a036f800cad04069b8839dc02821812c3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JNAGPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGpnIRTqqjqrqmM%2BiZPUWE6EP7nwtbsOEULqq5f2lQIhAMb70evzhQpHgDdJf7bkJHWJa2zxNqQu1BDTQW45IfQ2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKSwbAlWyMfEIWRJIq3AM%2FUMXBgT%2FLR53Y09FtGEsRlva5IieYmhnwhwsUs%2Fb5Cnwns0JcT%2By46Y%2BZPzsVHwoht8ko3RV3rdU2%2FHU56njzLptCRQdsVR%2FGi%2BaCYuA28gNJuvcdNvOmMSDhhGl11EkVBvcLhtz6YYyVA1eUiFuddusHjreWMLyHlUDiEEmwU4hjXp8crVpuuQ0dg8TGg17gJ9a1Ipvjd5O3iJsU3dvAipWYeik8Gqsu8zfZ7e7U%2BYXMEvt33X3VMBX6w3gSXHVvoZKXitXpDB%2BkIqYzK8nMrS%2F0xybUbKvK3t9FeE0IeKKkwpLbi42wyDAH48Vvi1yNYhJTUsDWu3fn11aUFqcAwWKgNEQHOoI0RS%2FuXmy0xbCavaGbqHU3L2sVUjUDcPKxI1FU9K9kqlMmJ0F8sUxSX70oaCbY1I1KwCdevkoU251a%2BwF8Id7DiFDzUPwOA6I9JpqzbW6LGjEqebTBhRFnl%2BaYvOZmMLloo1gQvT6o%2BwChG6G8AEd4ewqGv6%2FRjBfc7ZRQ%2FGyCCfM7pFERPJWheD2HYvldyMHAlaIj0YslIdWibn3E6%2FaSlGZe9e5nj%2FOLOVswNmELVAZvMV71kVerjRZEXgMK52h4Q36DJAgHer2olC6ZuebCAnHlQDDg7dnJBjqkAQrT12h18PuCEMeWRzD7UTsF154KtiaY3ZvNJqPFWTInlg%2FFIBgkbzgKW2TFYOY8LKqNHCcVMBt3%2BOi2b%2FO1XI5uZQbW3I%2B91suIds5CDb%2Bz7SlLuvrW%2FqGIX%2BPqOpjbPUrraGQM%2FVyhJj1ajyJ5IofQ2DgFQ%2BwxU%2FRqZUIKUKFyUrHzVJEHRkOL9E8U4%2B62kPusA5lMZLmgYOIu4a1LCdaWjEnv&X-Amz-Signature=98e930e756121cba41ab8e361db94781afbf78e0247ae913af69aa0879439c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

