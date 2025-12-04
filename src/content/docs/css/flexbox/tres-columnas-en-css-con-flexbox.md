---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RCEV5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpzB%2F4%2B2IuDaH7BYdVBunIPplTqSR3upKca0I%2FWrjRbAiEAxKnk6FjwbmqH%2FRIQDZNO99GsFFxCH1IT2tIwt3mZL0kq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMHcOsyitCoZ7y%2B7tircA5CGcwgXRyHPJoWGNTF0WJd0XoyMChHE2mJgAfyxmt3ljzvMXAxIgyHcLJBXfJVXoQCElnkLRndGRyE2G0bVP2p3ytCt%2F74sX8xXvvhgndoYvUtpoOiydnuWBOMA8OidLpUmi1PIMWTJpoPs2yTsQHKDBu67vhgP7vmFXt%2FVkbpwH7G4zWGMWNqsEaYWC7rfwBtJftDdt4mKYDuo6wxckJ33vgqAu%2BAIRq63izng4Hc1DL9jfd6E%2BY%2BnO7LSmdSIgZIszYSqUArNRXvQf1ltuJ5WNFeCDdx%2BQfatxSzwugyuEeeTjpV%2BV9YyN1iysqB5jOrqY6AyG3I6DTAgVENNCLXsRycjUMS%2FA0Q%2BWFTlYORu4D6AhUVVVNk7yyX%2BzEctbMLi8ecaB5mIW4TRdENF%2BmGtHnN7CUwhGju3cstZb4cBu5fj7XBsFmxfyHYqA7%2BZV0DLiZK9KV9a1Btul8QKoyfpaK1DtaXaxqwZCdpTDp9OOYdwVGDTkMVdloGQg95k7gXH603C%2BJ0WWZ8aDjBEwZanHyDCQJ10pwode1ONIPb%2FKdW5c%2B3mtP%2Bik6Y01tFBP%2B5sj7%2FSAY2XaHy1MF6kJLd93zA5wg3Yr7Jmk9%2F4AA97bEkygyIN%2Fl32KtOaMOPcxskGOqUBeIs8OCHTt39aKU2tGBdIbjjrWyBsrk0Cf6HlQqcraDX7gEWBsTvJWHrsEMBRpcW1ufcO0qVciMP%2FFtFf4ONOLU94ImqylbMSL39H8jQKhxwVxykXrpqfnObNogP8qLbQ0x30kSmGdFxkdOX0PahJ2FagIPHnRe%2BgRqC5ysNboBqcUbOja9ZsTetb76QXokqJ%2BXjppeQaKREFfoU06QPitzaDSdZU&X-Amz-Signature=a5e65aa1ce560fa413b7651178f3447061d0edef67492880773ad02a514471a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2RCEV5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpzB%2F4%2B2IuDaH7BYdVBunIPplTqSR3upKca0I%2FWrjRbAiEAxKnk6FjwbmqH%2FRIQDZNO99GsFFxCH1IT2tIwt3mZL0kq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMHcOsyitCoZ7y%2B7tircA5CGcwgXRyHPJoWGNTF0WJd0XoyMChHE2mJgAfyxmt3ljzvMXAxIgyHcLJBXfJVXoQCElnkLRndGRyE2G0bVP2p3ytCt%2F74sX8xXvvhgndoYvUtpoOiydnuWBOMA8OidLpUmi1PIMWTJpoPs2yTsQHKDBu67vhgP7vmFXt%2FVkbpwH7G4zWGMWNqsEaYWC7rfwBtJftDdt4mKYDuo6wxckJ33vgqAu%2BAIRq63izng4Hc1DL9jfd6E%2BY%2BnO7LSmdSIgZIszYSqUArNRXvQf1ltuJ5WNFeCDdx%2BQfatxSzwugyuEeeTjpV%2BV9YyN1iysqB5jOrqY6AyG3I6DTAgVENNCLXsRycjUMS%2FA0Q%2BWFTlYORu4D6AhUVVVNk7yyX%2BzEctbMLi8ecaB5mIW4TRdENF%2BmGtHnN7CUwhGju3cstZb4cBu5fj7XBsFmxfyHYqA7%2BZV0DLiZK9KV9a1Btul8QKoyfpaK1DtaXaxqwZCdpTDp9OOYdwVGDTkMVdloGQg95k7gXH603C%2BJ0WWZ8aDjBEwZanHyDCQJ10pwode1ONIPb%2FKdW5c%2B3mtP%2Bik6Y01tFBP%2B5sj7%2FSAY2XaHy1MF6kJLd93zA5wg3Yr7Jmk9%2F4AA97bEkygyIN%2Fl32KtOaMOPcxskGOqUBeIs8OCHTt39aKU2tGBdIbjjrWyBsrk0Cf6HlQqcraDX7gEWBsTvJWHrsEMBRpcW1ufcO0qVciMP%2FFtFf4ONOLU94ImqylbMSL39H8jQKhxwVxykXrpqfnObNogP8qLbQ0x30kSmGdFxkdOX0PahJ2FagIPHnRe%2BgRqC5ysNboBqcUbOja9ZsTetb76QXokqJ%2BXjppeQaKREFfoU06QPitzaDSdZU&X-Amz-Signature=c6015a3418df3412f082549eb3cadf31cc66329212d505843885f3b1f49fe736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

