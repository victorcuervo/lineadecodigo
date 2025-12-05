---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFHZ7RF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FMpnzjgc48bhk4hK7c1pk0YCih2wVrnW3ARXJpS5FAiEAo6HFxzaA5Du4GX6n%2F5IuPS1bmgVnzoBnMV9pjRbxAGsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOhJHhzOWe3rXhpmjircA0zLf0dTWKy90uIE5Wos02Pp48VGhczQgfpP8oUyi2OxlxHb1aXiA1ikBUqiKtlyokutmXcetER5Pf8IyhF5ks7QHjCQJwAthh5QJkEXApRwhu9qqw5Bt6EfPgxsGqUSHCS8HTUZ4Zirktg7mQbGnKfJJ8%2BiLU%2FX0bUfmuvOAPbM2z9m1pbteAGTG5JsdMD8gp7ttarR7COqcot2kWoP9pn%2BpMPo%2B3RTA3CrcflEhHcEcpXvTpMMsQwyKrsdX%2B1TkhYWiFcXbq3QVQg1CoyGaNBbipKiwqEA%2FBeeM0BkvUAtI1MKYaP2hTmhwKWT1KRNq29xQzGaY7PJLCi%2FKVAEes3J73AYi4bCuMJ40rKYUkxnKeyQxbSGDlqLrelsexeGQEWybaXMTbNJ3BHKGlk6Y2UEsU26oRfau9yJK1SusV%2F2%2FfCjBbZ2SjIM39tzl4%2FV7nMuHpYRSRXRDpVMWq9z31F3KdP6wmalrFmLB6dC%2BI5Ka1hqsKd0olVhDKe1HYziZaBWcvvwE6CxdQNi%2BVN4g3FPKiKq05zwj2QJXtSxNMMYY%2F2%2FoBLRkMJC5nKFgjq6r7LvFI1rEtCtObOoNPDqfKRH6jjgcoHDvTaobT%2FrH0Xm2kkpZX2x%2BymxRs3fMO%2FTyskGOqUBB56zvaN6anlMFA3fGVvjsx06A1fPMgsKjYIE1D1%2FI%2BdJd8chP1fXGQLEkUe5RV2b6ctf0lT87IG3%2FjCoYVmgfoNbvmsbBVhF3XYIki2p01%2FHzmw3cjIzvrVQWXFMZk2GMSgb2ibkQht%2BoYXbMsbwM7b28IMHRCbSuIT%2FvyKT37PZqG7VgfvbXHw88dMMY17boeFWCBiTCDLQZQ14OzrOVnwmTa4Z&X-Amz-Signature=b8c16464a6a0ef00b052615cadbfc65883c06dfef1d339dfba2cac3c1161151e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFHZ7RF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FMpnzjgc48bhk4hK7c1pk0YCih2wVrnW3ARXJpS5FAiEAo6HFxzaA5Du4GX6n%2F5IuPS1bmgVnzoBnMV9pjRbxAGsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOhJHhzOWe3rXhpmjircA0zLf0dTWKy90uIE5Wos02Pp48VGhczQgfpP8oUyi2OxlxHb1aXiA1ikBUqiKtlyokutmXcetER5Pf8IyhF5ks7QHjCQJwAthh5QJkEXApRwhu9qqw5Bt6EfPgxsGqUSHCS8HTUZ4Zirktg7mQbGnKfJJ8%2BiLU%2FX0bUfmuvOAPbM2z9m1pbteAGTG5JsdMD8gp7ttarR7COqcot2kWoP9pn%2BpMPo%2B3RTA3CrcflEhHcEcpXvTpMMsQwyKrsdX%2B1TkhYWiFcXbq3QVQg1CoyGaNBbipKiwqEA%2FBeeM0BkvUAtI1MKYaP2hTmhwKWT1KRNq29xQzGaY7PJLCi%2FKVAEes3J73AYi4bCuMJ40rKYUkxnKeyQxbSGDlqLrelsexeGQEWybaXMTbNJ3BHKGlk6Y2UEsU26oRfau9yJK1SusV%2F2%2FfCjBbZ2SjIM39tzl4%2FV7nMuHpYRSRXRDpVMWq9z31F3KdP6wmalrFmLB6dC%2BI5Ka1hqsKd0olVhDKe1HYziZaBWcvvwE6CxdQNi%2BVN4g3FPKiKq05zwj2QJXtSxNMMYY%2F2%2FoBLRkMJC5nKFgjq6r7LvFI1rEtCtObOoNPDqfKRH6jjgcoHDvTaobT%2FrH0Xm2kkpZX2x%2BymxRs3fMO%2FTyskGOqUBB56zvaN6anlMFA3fGVvjsx06A1fPMgsKjYIE1D1%2FI%2BdJd8chP1fXGQLEkUe5RV2b6ctf0lT87IG3%2FjCoYVmgfoNbvmsbBVhF3XYIki2p01%2FHzmw3cjIzvrVQWXFMZk2GMSgb2ibkQht%2BoYXbMsbwM7b28IMHRCbSuIT%2FvyKT37PZqG7VgfvbXHw88dMMY17boeFWCBiTCDLQZQ14OzrOVnwmTa4Z&X-Amz-Signature=63d77583323627550f5136da630c4d4b06ce6c6b60e651c58cf44fe29d14226f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

