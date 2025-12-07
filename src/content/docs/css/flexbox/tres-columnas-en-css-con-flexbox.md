---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGIBPL6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZpguMddBB5N2rG9eAfecXkbUvX5S9M%2Fa4rUDFK%2Bxu5AIhALmvdYQS9BepsDnTbA2gKdCDZD7sbrpsSBVmYzeHPpRLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyyiOR%2Bj2%2Bz040hZUq3AOdNlTGp%2F72GG4l127fJniMU4KZlfOk%2BSs0GNjbMRAxVg7xCsA7bcd%2FclScPw2zstMwRSeWVjYfz5gfFh25oXKFOi0tIijxXXP1tH5JE09AgLyeEhjleSf%2Fz6RGH%2BTPlKTBBMqOQLZ9A%2FaVb3NDEptthhzarE6zbJBpG%2BHfwi3y25rAhrecPtASuNFZRy44H9KkRtW1zOv0t%2BTp%2BoGRDTjX9FzuYU4EgwcyDbfmJRRb4Uojrd%2FKwfCLL3hso94DvMm%2BZJ5eiIs7ZUUY26r284DuqELEymf1Sc5vffs9BaLpw8PQZDrMJ%2F5sX09LYfIok56%2BO8U1WrnGU%2BFCaEc98XBwNLDhUfv0wuYP%2BUuVjJOyCrlDi%2BuONyuRA5JmPrEJiTbXXsKRJvXm4llV8pC3DLeQvEHQdj4vOE%2FCNDI3jlE5k3VRwr9ah%2BECKpPCxUOQMlQhyaaJVNnlIPYwzs736ksgysCc2qkbd7bf8jcseQ1PNbi2WsOn6dc0wQTH8WA5ouSzROgKMicVubk8QJZ1TUVJSIaPr5XJDnWAGKLdxnsY4Ge91FRKuj70Go3%2BvglDLOmtEkZ7eLnQcbmEKuoCCngPDN4siEJv59aBmftcBeKUT44%2FyPtmCxO1zcDcjTDPqNfJBjqkAbecN2ZydDDLjr8MyQwNIVEAxb32BET%2F2%2Bjg8FYJZ0oFrrIatZ4MYfW4H34q8nL1KzyBu%2B6QZlRm8aTSCrkBNBgNJ6Qw6ypt7SI8LtiOhONJ%2BhdTO9sciXLAnk5iO30qehqceqIkN3tskc4o4QB%2FGAa2%2BB5OJ8gbOj4ljT4dy0Lg7M14G8uoDhpvEOPidT8YaAMLtN2r0XvmTLBtQqczs5MxlOEP&X-Amz-Signature=345bd2aa219c8e9a7a225dabe3c0e8c0b1522e8258f4aec17134bef37ebe8594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGIBPL6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZpguMddBB5N2rG9eAfecXkbUvX5S9M%2Fa4rUDFK%2Bxu5AIhALmvdYQS9BepsDnTbA2gKdCDZD7sbrpsSBVmYzeHPpRLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyyiOR%2Bj2%2Bz040hZUq3AOdNlTGp%2F72GG4l127fJniMU4KZlfOk%2BSs0GNjbMRAxVg7xCsA7bcd%2FclScPw2zstMwRSeWVjYfz5gfFh25oXKFOi0tIijxXXP1tH5JE09AgLyeEhjleSf%2Fz6RGH%2BTPlKTBBMqOQLZ9A%2FaVb3NDEptthhzarE6zbJBpG%2BHfwi3y25rAhrecPtASuNFZRy44H9KkRtW1zOv0t%2BTp%2BoGRDTjX9FzuYU4EgwcyDbfmJRRb4Uojrd%2FKwfCLL3hso94DvMm%2BZJ5eiIs7ZUUY26r284DuqELEymf1Sc5vffs9BaLpw8PQZDrMJ%2F5sX09LYfIok56%2BO8U1WrnGU%2BFCaEc98XBwNLDhUfv0wuYP%2BUuVjJOyCrlDi%2BuONyuRA5JmPrEJiTbXXsKRJvXm4llV8pC3DLeQvEHQdj4vOE%2FCNDI3jlE5k3VRwr9ah%2BECKpPCxUOQMlQhyaaJVNnlIPYwzs736ksgysCc2qkbd7bf8jcseQ1PNbi2WsOn6dc0wQTH8WA5ouSzROgKMicVubk8QJZ1TUVJSIaPr5XJDnWAGKLdxnsY4Ge91FRKuj70Go3%2BvglDLOmtEkZ7eLnQcbmEKuoCCngPDN4siEJv59aBmftcBeKUT44%2FyPtmCxO1zcDcjTDPqNfJBjqkAbecN2ZydDDLjr8MyQwNIVEAxb32BET%2F2%2Bjg8FYJZ0oFrrIatZ4MYfW4H34q8nL1KzyBu%2B6QZlRm8aTSCrkBNBgNJ6Qw6ypt7SI8LtiOhONJ%2BhdTO9sciXLAnk5iO30qehqceqIkN3tskc4o4QB%2FGAa2%2BB5OJ8gbOj4ljT4dy0Lg7M14G8uoDhpvEOPidT8YaAMLtN2r0XvmTLBtQqczs5MxlOEP&X-Amz-Signature=d31b3fbf0bbb2247f08d98a685b84b2c30a7afca8c5d18a44f39da5a91ccb2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

