---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMOFZFO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGs5SgCslz9n%2F5Lptgmkmtt5kCoZgNaUmdn1AZWwbmyFAiEAieOvnfkyZ%2Bh3YEXWhTagkLFJXCCedwTZgCKnLeZ5SDIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDO0h13wJ%2F5p47RGJgSrcA9JHu8bedy9ZbwUFDf9%2FC0puG0sjGuI7MsNS593vVnQnM75diH37isxFCRw1oUPLc0F%2BvwIx7Gt8SIAVjXw7jZ219n07YGH4P6ZU%2Fb0dxvSBlpZIRkaUhTXveqxZBlSqUPVKMyrs1D%2F%2BJOPvq7Rf1WKTpV%2BtBXrlaKRBCk0IfN5l7mLroizr%2B2%2FmhGsxmmluf8cgjsiEs%2BJGnKNDMA94OLiiY9iLbdHnjdc0uIk0%2FPfU%2BdFCE6x8G0UYuJHZHFo8zouH9uXhBPxG%2F8JB%2BasktAqVfLG9tHxT4wP4W9Be9fXeMJNKIH8SKSrz5xwZVYf12Qlej%2BnUHK2%2FLulZQJtPd07ILNXXgpjtMKRZ2o7LtDoI4NEI1GaTeR9S2r2ctX2z9ARqcv0hhIGleJNhtRy7AWub4oQN3lmze8QOutgV97CHlVhCc1Uxwuf2W38lOEkBq8Tyitxp7aogAccgJ%2BNxV%2F8jd0s%2FpseQ1scIcwGjtTlbbgK%2FqMJEVJ1FM0ktNzvQ1Z3Xg5H%2B4ZTIiuJqfJ5tNRhWt0BHXzDhF2WR%2BvZq6oXysQ2At9owxpt1pCSDNTgd5KQCurDcLqOYrbR4Vr1%2BXuPCZhjwAACCySB68Nt%2Bs3K9fJ0Gogw0m3xR7MuaMJK1w8kGOqUBGdPKIa96ac7BEouU2ez2nVlJAkyGy03EPWgRVJH1xfa%2FV2dSIvx5nCN4hSjoYAtK3Id25T2zmrvCHDQ4yBpqG8UUU2K86DK6mTMQXZisxt5qyxrR%2FrEuK1QRWu4NXUpqwo%2Bw1akCZ9dzvM9Y5uDQtRXQg1W0y4HWpSm9RXlL2xiuH0aH8KNEdvDHaYyXh%2FgB7Rq9fDWjx2sk%2BdF4WMLLmxmgDHjd&X-Amz-Signature=130754eb8ae215971f1d087d843f6dcd8638118631345127999274eab4b5cd7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMOFZFO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGs5SgCslz9n%2F5Lptgmkmtt5kCoZgNaUmdn1AZWwbmyFAiEAieOvnfkyZ%2Bh3YEXWhTagkLFJXCCedwTZgCKnLeZ5SDIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDO0h13wJ%2F5p47RGJgSrcA9JHu8bedy9ZbwUFDf9%2FC0puG0sjGuI7MsNS593vVnQnM75diH37isxFCRw1oUPLc0F%2BvwIx7Gt8SIAVjXw7jZ219n07YGH4P6ZU%2Fb0dxvSBlpZIRkaUhTXveqxZBlSqUPVKMyrs1D%2F%2BJOPvq7Rf1WKTpV%2BtBXrlaKRBCk0IfN5l7mLroizr%2B2%2FmhGsxmmluf8cgjsiEs%2BJGnKNDMA94OLiiY9iLbdHnjdc0uIk0%2FPfU%2BdFCE6x8G0UYuJHZHFo8zouH9uXhBPxG%2F8JB%2BasktAqVfLG9tHxT4wP4W9Be9fXeMJNKIH8SKSrz5xwZVYf12Qlej%2BnUHK2%2FLulZQJtPd07ILNXXgpjtMKRZ2o7LtDoI4NEI1GaTeR9S2r2ctX2z9ARqcv0hhIGleJNhtRy7AWub4oQN3lmze8QOutgV97CHlVhCc1Uxwuf2W38lOEkBq8Tyitxp7aogAccgJ%2BNxV%2F8jd0s%2FpseQ1scIcwGjtTlbbgK%2FqMJEVJ1FM0ktNzvQ1Z3Xg5H%2B4ZTIiuJqfJ5tNRhWt0BHXzDhF2WR%2BvZq6oXysQ2At9owxpt1pCSDNTgd5KQCurDcLqOYrbR4Vr1%2BXuPCZhjwAACCySB68Nt%2Bs3K9fJ0Gogw0m3xR7MuaMJK1w8kGOqUBGdPKIa96ac7BEouU2ez2nVlJAkyGy03EPWgRVJH1xfa%2FV2dSIvx5nCN4hSjoYAtK3Id25T2zmrvCHDQ4yBpqG8UUU2K86DK6mTMQXZisxt5qyxrR%2FrEuK1QRWu4NXUpqwo%2Bw1akCZ9dzvM9Y5uDQtRXQg1W0y4HWpSm9RXlL2xiuH0aH8KNEdvDHaYyXh%2FgB7Rq9fDWjx2sk%2BdF4WMLLmxmgDHjd&X-Amz-Signature=92eda547a99d5922fc23d1b1d19bea308f76b68862555ab7a4b0edd2ceec5e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

