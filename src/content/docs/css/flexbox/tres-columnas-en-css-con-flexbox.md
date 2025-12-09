---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4ZZHSW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqKSBUJ6RCJNHdUOvOOF6iBBqSrZhIBQY%2BopE9MBMNuAiAiwjk2ahxugv1%2BahyNMBgAUpdOEbEcRWkF8fKmP6OBaiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWe9OtFuQpZ2yH2m5KtwDD98Ur6vOm4shChhEqImukdsJsqo2b2cbRR%2FQeP54P4eI%2FTBaPG0C0iWaIjowsIBIhJSP5ezJwA1L0YyvFpPZU7UwRl75Qd7cjM1mDy5uOHOgWadNQyqxzDuJVXCX1EJmRlnqUm4M5Qi%2B2r3xIpHjyPI2%2BmvpiApeHYr8TemBWwf0UVJslyuognxOcdNOQICvhLoEcwy8z92%2FJYbsZw7lFTzuGYlYqw1ky8XPtmKreznFZRd3cXlSTMtcJTjRB8xSkLzqmx1i0qonFUFFQB9e2ngxyHqPVVwfM2k6mSjqx1d5MuNL7QaWDEPb8TQw5JhAsMm7Dbke2NMrE6SkOuW261RswmUIvRTS0RTEJJBiSI%2FN5bjl00rn7eI1aChMGmkoTPPI%2FxcqJaENNHY61fnMyzPdopyar%2BzJw%2BWzfVa5CiOIX1pgXM8X9ZM8sfjaB%2FXD5XE5%2F2%2FowXOLo9UMmPgbhWer5ueeIoZnqZCpa3yMEOMqnK88XB64mtBG54efHC3yQoaniXIOTv4G70WJ9Th2Ag%2BXzEqOqasDSQs1KmMnBp2W7Qu%2BY8oxZdK9r5EmlvXT0hwNF7J7QgOXkSvLV%2FG7fVkoq3PF%2FdDdCbYfvbUDkRV3w8Uwz5d0whbRoNow8offyQY6pgHgUnaNzjpe8e8Bg3w%2ByxT87jO7b3bad5b48LhkLkGLHiAPD2EAg%2BQ4NxWB49oGvpreeuF8pjUccII4T0cuSt9NrOBuXNFxZXQUqUJiKvPng%2BrnGZ6PRZFi8MEIEuryBKXqtMJoXUs1KwRsltu9svqTLJPqBw%2FO1sCEQcuXIV6G7ICRSlUtm%2FmGPnsjiNy4YKENTG0i%2FeCXU%2FfJ6L3%2F9fV%2Bhp5Tui%2F3&X-Amz-Signature=0db6a7cfe98527e1237088b237be9bb614415fb70818c40a49e30d3b63e0240e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4ZZHSW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqKSBUJ6RCJNHdUOvOOF6iBBqSrZhIBQY%2BopE9MBMNuAiAiwjk2ahxugv1%2BahyNMBgAUpdOEbEcRWkF8fKmP6OBaiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWe9OtFuQpZ2yH2m5KtwDD98Ur6vOm4shChhEqImukdsJsqo2b2cbRR%2FQeP54P4eI%2FTBaPG0C0iWaIjowsIBIhJSP5ezJwA1L0YyvFpPZU7UwRl75Qd7cjM1mDy5uOHOgWadNQyqxzDuJVXCX1EJmRlnqUm4M5Qi%2B2r3xIpHjyPI2%2BmvpiApeHYr8TemBWwf0UVJslyuognxOcdNOQICvhLoEcwy8z92%2FJYbsZw7lFTzuGYlYqw1ky8XPtmKreznFZRd3cXlSTMtcJTjRB8xSkLzqmx1i0qonFUFFQB9e2ngxyHqPVVwfM2k6mSjqx1d5MuNL7QaWDEPb8TQw5JhAsMm7Dbke2NMrE6SkOuW261RswmUIvRTS0RTEJJBiSI%2FN5bjl00rn7eI1aChMGmkoTPPI%2FxcqJaENNHY61fnMyzPdopyar%2BzJw%2BWzfVa5CiOIX1pgXM8X9ZM8sfjaB%2FXD5XE5%2F2%2FowXOLo9UMmPgbhWer5ueeIoZnqZCpa3yMEOMqnK88XB64mtBG54efHC3yQoaniXIOTv4G70WJ9Th2Ag%2BXzEqOqasDSQs1KmMnBp2W7Qu%2BY8oxZdK9r5EmlvXT0hwNF7J7QgOXkSvLV%2FG7fVkoq3PF%2FdDdCbYfvbUDkRV3w8Uwz5d0whbRoNow8offyQY6pgHgUnaNzjpe8e8Bg3w%2ByxT87jO7b3bad5b48LhkLkGLHiAPD2EAg%2BQ4NxWB49oGvpreeuF8pjUccII4T0cuSt9NrOBuXNFxZXQUqUJiKvPng%2BrnGZ6PRZFi8MEIEuryBKXqtMJoXUs1KwRsltu9svqTLJPqBw%2FO1sCEQcuXIV6G7ICRSlUtm%2FmGPnsjiNy4YKENTG0i%2FeCXU%2FfJ6L3%2F9fV%2Bhp5Tui%2F3&X-Amz-Signature=a558985d9ce4473026b57ea75807ff985abe445032958132b53021930c2d631d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

