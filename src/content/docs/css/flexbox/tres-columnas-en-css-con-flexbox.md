---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3VIAFM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDAAebJP%2BXf3FqZFmTrjM0X9cfUDhzls3Ajqe7g1Bq%2FGQIga0Sdop%2FmY%2FtI8WGPkzd%2B8SEQ4jd8v8IE2qUIfyPWC9Aq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNU%2FPSkaNB87%2B4NUPyrcAzgsnrQhyr%2BUGEgLpgqEzgKXjl4x2BnFUOeBPoNCO%2BpvmvMm5lFIb7IdQCurvkoRXgNX1ZBtnOPl%2B5fkqL5kSIh7JtltvmtB6AAGHwe3%2FVxvy0nGer%2FPk%2FdLi3ALpUgot39rkN7f86QGsIKMZTDEdtEakY0pY5KpTT0Ayusm2RH0wkQaijY%2Fimijxhlg15I%2BdYbWCWzWHEJiG3ZG8EJLZeeWnRat%2Bye8C7FPj830icrfHNrUNKZ7jcSa0E2lnj%2BxwyGTVz7MeGOLZBrfaLvYX%2By0GnTTCllSiezEAyv5iNGHBzirmBjwSktWGn0dlCser7axTPixtWFxDeQDm8H9H8%2FIsgx%2BatEaeTFL0IrWSVzAdV9oetIF%2Fy19afF2pMu9F8x2uVzQqkP0UAFEuQGsvFxMxEcBgo8VQ58tz0bip5Sg4W4r8pmcnVt7JNQUpI3tdBSVqPp8284Ne8W7bNpI2OT7n3ulwPxiqYr9dSCgLdJPH5Ufokw6gciN%2BUw1CxgSa6YODe7iALZIUQuP5wxC0G7GYuzLg%2By%2FfdV8vCbmozpV7%2BShLG9mOx0ZcplhI%2FwPixqrktuUX%2FXyEd%2FK9NTKCHe%2F8uLfjLl8hIW0r58960CaE1C6zB9DZGaLWp%2FZMLfoxMkGOqUBxTyyfkqqaVc8LpU12b%2F%2FyuEAJ1jv44GOxJ7D%2FF7N9qpdcK6pdd%2Bikqzjcih0QQIz%2BA93oIEbqVd8g%2F2Y%2Btls4wSTH6LZLUnCbrC9TvtbZBxUeubcucJFZNucaEpmAkqH1HWQNUTgzNqqDpCMiV95qRrijwajfxxjfSgfhiC7zfk8oQ37qshOQDr6z%2FGqzQ2mCw7xPQr%2BkJuDg97ZuRa2fu1xTyjr&X-Amz-Signature=99481720bcd41bab40b93a5b9405d29577f7cc1db3153662cf3720e8eb14c7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3VIAFM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDAAebJP%2BXf3FqZFmTrjM0X9cfUDhzls3Ajqe7g1Bq%2FGQIga0Sdop%2FmY%2FtI8WGPkzd%2B8SEQ4jd8v8IE2qUIfyPWC9Aq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNU%2FPSkaNB87%2B4NUPyrcAzgsnrQhyr%2BUGEgLpgqEzgKXjl4x2BnFUOeBPoNCO%2BpvmvMm5lFIb7IdQCurvkoRXgNX1ZBtnOPl%2B5fkqL5kSIh7JtltvmtB6AAGHwe3%2FVxvy0nGer%2FPk%2FdLi3ALpUgot39rkN7f86QGsIKMZTDEdtEakY0pY5KpTT0Ayusm2RH0wkQaijY%2Fimijxhlg15I%2BdYbWCWzWHEJiG3ZG8EJLZeeWnRat%2Bye8C7FPj830icrfHNrUNKZ7jcSa0E2lnj%2BxwyGTVz7MeGOLZBrfaLvYX%2By0GnTTCllSiezEAyv5iNGHBzirmBjwSktWGn0dlCser7axTPixtWFxDeQDm8H9H8%2FIsgx%2BatEaeTFL0IrWSVzAdV9oetIF%2Fy19afF2pMu9F8x2uVzQqkP0UAFEuQGsvFxMxEcBgo8VQ58tz0bip5Sg4W4r8pmcnVt7JNQUpI3tdBSVqPp8284Ne8W7bNpI2OT7n3ulwPxiqYr9dSCgLdJPH5Ufokw6gciN%2BUw1CxgSa6YODe7iALZIUQuP5wxC0G7GYuzLg%2By%2FfdV8vCbmozpV7%2BShLG9mOx0ZcplhI%2FwPixqrktuUX%2FXyEd%2FK9NTKCHe%2F8uLfjLl8hIW0r58960CaE1C6zB9DZGaLWp%2FZMLfoxMkGOqUBxTyyfkqqaVc8LpU12b%2F%2FyuEAJ1jv44GOxJ7D%2FF7N9qpdcK6pdd%2Bikqzjcih0QQIz%2BA93oIEbqVd8g%2F2Y%2Btls4wSTH6LZLUnCbrC9TvtbZBxUeubcucJFZNucaEpmAkqH1HWQNUTgzNqqDpCMiV95qRrijwajfxxjfSgfhiC7zfk8oQ37qshOQDr6z%2FGqzQ2mCw7xPQr%2BkJuDg97ZuRa2fu1xTyjr&X-Amz-Signature=7194e618acd96522c78206373e93afbbd267f9323bdeb8b59c27d148dc482b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

