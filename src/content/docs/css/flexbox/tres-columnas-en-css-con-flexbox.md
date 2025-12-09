---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H34V22P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWtgpDeT8n%2F4YGipJVJ5tQfbxPcy8mzNzbYjlIWFU7nAiBDugQKDF2XH0pIINpP0wetDj5fw45EpSbJqUhLWelMjSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY8ku5sB6KYMHUy%2BoKtwDTpUPRuA1J24gwpAsQ9A5%2F5zbuKwPynahLt76OmYCBoIG7QiCoQzAOTCHdsHdmxXo5dX9oRVIBDPZ8FO%2FxbiCvmabAJ7zbXcpfo29ix2NxNBf18G%2Bdem8oNfM0E5P6%2Fs7ZA3GvB%2FB3BkPbe%2BrFU4%2BsvXqhMNk5K08rDUBJmHy26qYrWFbTkfExJJqMfusjPmAze%2FaroNAYMc8tV8vgN3sqlZWVOXg13zpmqkc4yv1vJA1O%2FIO7moGZC7dEJCN%2FxFQbvOHLcjw3VHu8OqbCguQKk%2FzJ2jp%2BHaIV87t2O%2FDLjqOsR5n3mmPjyWxvFBVJy3IBkUjjep0gSHQFEZvahs7OsYpaNIK9S%2F9pqAR1n1%2BLPfJ8ltO5lUS0Whz%2BgeFhh%2BXWJUQLLanLDcjKDl589eSg8ohgulj8qhHaI6sPwKHcxlIcxfm53QDNJi0%2BlJv1y6utFuN8oPafHw4Epw4nO6ylVTd%2B1cieZAu2laj4a%2BifcnJKFqwfaNH%2BVppueqBvEyLNtQ5faviH3zScZDCdSMSd9vymLT54TakUb2UB7WxYTy8ZQQrWd4I2O7e9TJO0XOhAZDg2S7pWtsODaBX%2BRUNRNmXaP9batlqJk%2FMGs%2BymuVlGxY%2B7rQHAGiA9Kow3K3eyQY6pgHdnU4nofysJAew6qY0hmo5ZYSDaoDyZa8fzXS1MmDysr5fcwKcSySR8ndldtw7sxbPa7E2cTP1KwDMsHbFAmlx5qLcSXOmGFdFZ2MC3TVMggcUL6kcnCOY%2F5bs1uyYLDoCLmQpgYEqra6xVBxOOtu%2BHvpQjblHZrtwt0PmgvuEKx4yxwp%2FIBOvKFKKlgMeVbYtjLnCkRwOtmWnUfo8vD8UfVtnFYxO&X-Amz-Signature=6bcb3d3d41eb47c63b2ff6017e46c548994bcfca5e3bbf6456a4e011bd064dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H34V22P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWtgpDeT8n%2F4YGipJVJ5tQfbxPcy8mzNzbYjlIWFU7nAiBDugQKDF2XH0pIINpP0wetDj5fw45EpSbJqUhLWelMjSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY8ku5sB6KYMHUy%2BoKtwDTpUPRuA1J24gwpAsQ9A5%2F5zbuKwPynahLt76OmYCBoIG7QiCoQzAOTCHdsHdmxXo5dX9oRVIBDPZ8FO%2FxbiCvmabAJ7zbXcpfo29ix2NxNBf18G%2Bdem8oNfM0E5P6%2Fs7ZA3GvB%2FB3BkPbe%2BrFU4%2BsvXqhMNk5K08rDUBJmHy26qYrWFbTkfExJJqMfusjPmAze%2FaroNAYMc8tV8vgN3sqlZWVOXg13zpmqkc4yv1vJA1O%2FIO7moGZC7dEJCN%2FxFQbvOHLcjw3VHu8OqbCguQKk%2FzJ2jp%2BHaIV87t2O%2FDLjqOsR5n3mmPjyWxvFBVJy3IBkUjjep0gSHQFEZvahs7OsYpaNIK9S%2F9pqAR1n1%2BLPfJ8ltO5lUS0Whz%2BgeFhh%2BXWJUQLLanLDcjKDl589eSg8ohgulj8qhHaI6sPwKHcxlIcxfm53QDNJi0%2BlJv1y6utFuN8oPafHw4Epw4nO6ylVTd%2B1cieZAu2laj4a%2BifcnJKFqwfaNH%2BVppueqBvEyLNtQ5faviH3zScZDCdSMSd9vymLT54TakUb2UB7WxYTy8ZQQrWd4I2O7e9TJO0XOhAZDg2S7pWtsODaBX%2BRUNRNmXaP9batlqJk%2FMGs%2BymuVlGxY%2B7rQHAGiA9Kow3K3eyQY6pgHdnU4nofysJAew6qY0hmo5ZYSDaoDyZa8fzXS1MmDysr5fcwKcSySR8ndldtw7sxbPa7E2cTP1KwDMsHbFAmlx5qLcSXOmGFdFZ2MC3TVMggcUL6kcnCOY%2F5bs1uyYLDoCLmQpgYEqra6xVBxOOtu%2BHvpQjblHZrtwt0PmgvuEKx4yxwp%2FIBOvKFKKlgMeVbYtjLnCkRwOtmWnUfo8vD8UfVtnFYxO&X-Amz-Signature=28fa41309976ce6692e2cad0ac4fbe9b6cb9fc43c02c59ebdb1353268046abc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

