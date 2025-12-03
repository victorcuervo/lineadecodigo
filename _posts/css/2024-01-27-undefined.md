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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPPG26GR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGbZGvGdZE4pzuU87iE1yVyfzy%2BQ3fmePK2RTyOKcA5xAiARoBbbCDLpVNrIdZm96gmCOBs2r4Fo8DJe2skgsoouGir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6hAAY9GPMP1CxsXfKtwDUHqlXo1MvV30ldPND8V2cxOj0YJ1PQYUFIVRJavs1kGTlyKTf8zKfCymx1pYYgJqVsfAwJAKHPkC9tTjBaABLegfGcH%2Fxx3HAPuYkDDv4Sx1UfvWLaHtBgGWPyGszWAjLF4mLyvPgf8XMpGPnr0h8FWJ3AWZWhT6QIu5shwyv47y3cHDm4oAf9wds7cfBgNfn%2BE%2BfjMnQWDWrNll2whVzicyYYUOG0l0feNt2CSxdCQN%2FQyZZTJP7kt%2BgmBwtmE4uHlmdUoirEE2ZBAnUHtKohRkIZUsp2g8YOEivYzPGCbn9LtIyH9yrwIBn3hQVdFElvOZ1G9c6K31Y73GAsEoPIkgUIibYGbmqAb0CiEuKPbgenxaq2zSYewbmU3qqiUiDpJ0AKrXux34t2MBlvkfyx%2FAd%2F5ZlcP7STfJ93ytDiM2EQKfNzpBbPSjaTSakEo%2F3yvcrpO3Zh4GsEU22pnedol2o8xRaWfByWaZiSZKxir4uXk08wXS1bArxD5O6bAFBIqGheWn7W9aq5fAkBFarYXG%2BVjalkkytKTykU8iddDiwH3KNWUu%2FMn3%2Fkrw68XYWMtv%2Fx8HcIT4cVT0mfFerlRaoY8E3zV1qZ%2F0t4BEBEpgMzJIONJmnGzlF3kw2ZW%2ByQY6pgGonMYja15PhfJpAtMNapV1Oz2%2BxT7vyWmyYRyMCKyYEPRN7zN%2FlFDWGIiTvmma3gTDaHmnzmIMhXjsICKWQICu8nEPwZmLVHnegWTDO%2BoRgBFz%2FuUtFfQhGTZjiJiQIw4csi5jpAiV50GuvsL%2BBOIYwlM4ZUZUibPVJrLLvYDrWlxoZyeddziPWLmta4%2FNxuJz9%2FweBXGM461Cp8HKwxQX5klLogXU&X-Amz-Signature=b4df03d7290cb2148bb930da1aa19b20c153364f2ad6fe9e97c8f38519daff70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPPG26GR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGbZGvGdZE4pzuU87iE1yVyfzy%2BQ3fmePK2RTyOKcA5xAiARoBbbCDLpVNrIdZm96gmCOBs2r4Fo8DJe2skgsoouGir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6hAAY9GPMP1CxsXfKtwDUHqlXo1MvV30ldPND8V2cxOj0YJ1PQYUFIVRJavs1kGTlyKTf8zKfCymx1pYYgJqVsfAwJAKHPkC9tTjBaABLegfGcH%2Fxx3HAPuYkDDv4Sx1UfvWLaHtBgGWPyGszWAjLF4mLyvPgf8XMpGPnr0h8FWJ3AWZWhT6QIu5shwyv47y3cHDm4oAf9wds7cfBgNfn%2BE%2BfjMnQWDWrNll2whVzicyYYUOG0l0feNt2CSxdCQN%2FQyZZTJP7kt%2BgmBwtmE4uHlmdUoirEE2ZBAnUHtKohRkIZUsp2g8YOEivYzPGCbn9LtIyH9yrwIBn3hQVdFElvOZ1G9c6K31Y73GAsEoPIkgUIibYGbmqAb0CiEuKPbgenxaq2zSYewbmU3qqiUiDpJ0AKrXux34t2MBlvkfyx%2FAd%2F5ZlcP7STfJ93ytDiM2EQKfNzpBbPSjaTSakEo%2F3yvcrpO3Zh4GsEU22pnedol2o8xRaWfByWaZiSZKxir4uXk08wXS1bArxD5O6bAFBIqGheWn7W9aq5fAkBFarYXG%2BVjalkkytKTykU8iddDiwH3KNWUu%2FMn3%2Fkrw68XYWMtv%2Fx8HcIT4cVT0mfFerlRaoY8E3zV1qZ%2F0t4BEBEpgMzJIONJmnGzlF3kw2ZW%2ByQY6pgGonMYja15PhfJpAtMNapV1Oz2%2BxT7vyWmyYRyMCKyYEPRN7zN%2FlFDWGIiTvmma3gTDaHmnzmIMhXjsICKWQICu8nEPwZmLVHnegWTDO%2BoRgBFz%2FuUtFfQhGTZjiJiQIw4csi5jpAiV50GuvsL%2BBOIYwlM4ZUZUibPVJrLLvYDrWlxoZyeddziPWLmta4%2FNxuJz9%2FweBXGM461Cp8HKwxQX5klLogXU&X-Amz-Signature=61fad16b7dc48fb13eb62bbd2d9448b56dc514e780ec6d22894ed992fee8f3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

