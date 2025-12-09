---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZHOM7J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdSgjZqyOyhzsIlZTDLZZD1oRKoMRPE6Yrqer4ZQDARAiAEYkt8iV386LllmNenNNP8Ni70e1BDtEWDjYPX9%2BwufCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7%2BgxXHJZODYiZooKtwDGQK4LvQ3oRQOurTg%2FF6qBwbcKEp0YTY86oKzKQI43UveE%2FL2AjebumzJTGg8Xus5iYhxrxbSS2il1GW1PTCMgTV%2F3Cnof%2B9%2BGhJCOPww9WxXEvskdnZYeOtEMBvcj65YNSYR%2BCYR4ypFP83RoFlAsrZR%2BHowJr%2BXPSFw9BVfJDbH9fIzrNFYDw9dgaq6Yoqq8fn2IoKsqI8gugPYfMEuXFfDOfbsuvkNu1Wy9GOflNS%2FvJ7fYeFxd8sWacXk9L6O%2FFt%2BptGbQX2pFbIu3N4e97GMChSUvPp4A4jCawQ7aghVxWWLG5CTLpWktycvo8pD0qcXv2GRkdodY6isdrSvjwgteFMyU%2F7XSee29ESVgmclhq7jfqufde9irEyD2XHI8zDDoqkkutc0fC1MSIqcp4NeFt9QDXYzK79ep3edzgAahpBXmEE1BIwPzjZ%2F2HqThk27eJTeCXTCAOVJ7P8TQWi%2BZJNQNH7ZeJmFkC16yj2%2F0ao%2BvP3xf5mCqDpiddx8cZn7UiEAjWNoE1McEq414eAg%2FULwCBl34yXE9tCDd2wqOcRDZvb8RZJ6qPgVwOgQgiziU%2BljUnugXuqRFko6GTeSRCmDVVNtY49V2Nc%2FNHdLQQnnVzmAZBOCaVMwmOXeyQY6pgH%2Fqvrm%2F6pX43AWcHY0lpwv4hF99%2BySn1%2Bw3VM%2F%2BSmxH0Nh8T08Z4VZiA1DLZHxhq09%2F82a481ID215z4h7mfDAJ%2BIVPICtaOChOlyEfel9O7fxSwfh3gYURBNcwCz8trzemBZaH%2F8lRSJ%2Fju1SM6c1CNGcI3oDLczD%2BtCxyxNjlQAwV%2BlwYbvywyYM8j0RxDZIfe3cWHUvJL37tXxt%2FGDxF7EwSdBL&X-Amz-Signature=2e1738159e4b67ee82dd42b1031f62dbc88f3945bbd33bcdcea617416d56f043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZHOM7J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdSgjZqyOyhzsIlZTDLZZD1oRKoMRPE6Yrqer4ZQDARAiAEYkt8iV386LllmNenNNP8Ni70e1BDtEWDjYPX9%2BwufCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7%2BgxXHJZODYiZooKtwDGQK4LvQ3oRQOurTg%2FF6qBwbcKEp0YTY86oKzKQI43UveE%2FL2AjebumzJTGg8Xus5iYhxrxbSS2il1GW1PTCMgTV%2F3Cnof%2B9%2BGhJCOPww9WxXEvskdnZYeOtEMBvcj65YNSYR%2BCYR4ypFP83RoFlAsrZR%2BHowJr%2BXPSFw9BVfJDbH9fIzrNFYDw9dgaq6Yoqq8fn2IoKsqI8gugPYfMEuXFfDOfbsuvkNu1Wy9GOflNS%2FvJ7fYeFxd8sWacXk9L6O%2FFt%2BptGbQX2pFbIu3N4e97GMChSUvPp4A4jCawQ7aghVxWWLG5CTLpWktycvo8pD0qcXv2GRkdodY6isdrSvjwgteFMyU%2F7XSee29ESVgmclhq7jfqufde9irEyD2XHI8zDDoqkkutc0fC1MSIqcp4NeFt9QDXYzK79ep3edzgAahpBXmEE1BIwPzjZ%2F2HqThk27eJTeCXTCAOVJ7P8TQWi%2BZJNQNH7ZeJmFkC16yj2%2F0ao%2BvP3xf5mCqDpiddx8cZn7UiEAjWNoE1McEq414eAg%2FULwCBl34yXE9tCDd2wqOcRDZvb8RZJ6qPgVwOgQgiziU%2BljUnugXuqRFko6GTeSRCmDVVNtY49V2Nc%2FNHdLQQnnVzmAZBOCaVMwmOXeyQY6pgH%2Fqvrm%2F6pX43AWcHY0lpwv4hF99%2BySn1%2Bw3VM%2F%2BSmxH0Nh8T08Z4VZiA1DLZHxhq09%2F82a481ID215z4h7mfDAJ%2BIVPICtaOChOlyEfel9O7fxSwfh3gYURBNcwCz8trzemBZaH%2F8lRSJ%2Fju1SM6c1CNGcI3oDLczD%2BtCxyxNjlQAwV%2BlwYbvywyYM8j0RxDZIfe3cWHUvJL37tXxt%2FGDxF7EwSdBL&X-Amz-Signature=af12bc797d800a18f1afb7152634fccd1d37a0fd697a32c62ec1dd0dc6c0f2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

