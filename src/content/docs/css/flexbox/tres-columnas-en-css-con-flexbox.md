---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W26L6TCE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaF8cpD9K6XuKPDINKsUxRui5VWYR7%2FVGn35%2FzisambQIgZPece6RLZ4YzzQfGQjdV%2FhlkF6moFVJ4aOUVHaSO9bIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIt9fCUtZZSp2cZKZircA%2BP4IDSPlh5RWuZBTy4rfhmj3DG5RlfbcIFAtET0vgRHVUsFMWACBb6padvPa9e3yIlWXvBEyhblzozP%2Bm6aGXUJWg2pgueb3P0b33vpNEoj04W%2FUtfBWiXRiWK40BOrY%2BeKQ2gc6e90tk7xL%2FOyt2ILH8FwK2tLb2tpeecPzAzKe%2FCj95mVxdCl1uSQZV7OJwG%2F61R0fW6mtbKK%2FFXcNzPy3V08mQfrt1bMx0YBtFiwnUI1itZPUmWeypuQx4yRwclwbYm070aTNK%2BQQfo%2FhuSr4jdlzgJjClejW640Qm9c0iIq8BU6X71wLur9CWx9TNQg6DOgcDVtMe2p5pv1IwE4zDAkZs4M2zZB6MI%2B0NRxrzHl%2BSZRNNilevyK7Yrzp3MlCrQehiWvKw6C8U9K%2BWdkguSk1Fca%2F18HAP8XlRfhncbRHBdLqd4%2BAyytwQgB7in4FFlYBwSS%2FBrxrYJ13o3Ms9yVVqy%2BFHRgS7AkvIf3L9dIVdtmzuArIem6bIdF3V5QvVZVzIkV6sgHWtjZkX9eqY42P9NkkTOQrjTgltgvrxNKK2tbjRnPx3jIxv4DAopGUzxsgb0PA57Knd9NQzomtkz7AVEg6pQCwqaRK%2B%2FxBPOsuBlolnfAd%2FHzMMmQ3skGOqUBD%2BGbLtIdxIZ%2FfiJfkvmSXlHLFKq72SJltSuKVUnkKm1BEiPtcLyeBm%2FQqXmL17GHZmhUHu6xCW%2B1vczB7m9hEn2Nzw71QvrVo7%2FwoFk%2FhtWMMOivOMEX8MR3XPXfvd23xNofOOQ3v5Hw8%2FUSaLMDZny3Tdao%2Fv4sipmP38r04ccBgHOS5jwojWP3yfAJPUxpCRtliT%2FXhD2XRVWsLC6HV1FN0h6K&X-Amz-Signature=5232959ad25c4e205b3d16726429b76b395971dedcb778f9251a89801257d7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W26L6TCE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaF8cpD9K6XuKPDINKsUxRui5VWYR7%2FVGn35%2FzisambQIgZPece6RLZ4YzzQfGQjdV%2FhlkF6moFVJ4aOUVHaSO9bIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIt9fCUtZZSp2cZKZircA%2BP4IDSPlh5RWuZBTy4rfhmj3DG5RlfbcIFAtET0vgRHVUsFMWACBb6padvPa9e3yIlWXvBEyhblzozP%2Bm6aGXUJWg2pgueb3P0b33vpNEoj04W%2FUtfBWiXRiWK40BOrY%2BeKQ2gc6e90tk7xL%2FOyt2ILH8FwK2tLb2tpeecPzAzKe%2FCj95mVxdCl1uSQZV7OJwG%2F61R0fW6mtbKK%2FFXcNzPy3V08mQfrt1bMx0YBtFiwnUI1itZPUmWeypuQx4yRwclwbYm070aTNK%2BQQfo%2FhuSr4jdlzgJjClejW640Qm9c0iIq8BU6X71wLur9CWx9TNQg6DOgcDVtMe2p5pv1IwE4zDAkZs4M2zZB6MI%2B0NRxrzHl%2BSZRNNilevyK7Yrzp3MlCrQehiWvKw6C8U9K%2BWdkguSk1Fca%2F18HAP8XlRfhncbRHBdLqd4%2BAyytwQgB7in4FFlYBwSS%2FBrxrYJ13o3Ms9yVVqy%2BFHRgS7AkvIf3L9dIVdtmzuArIem6bIdF3V5QvVZVzIkV6sgHWtjZkX9eqY42P9NkkTOQrjTgltgvrxNKK2tbjRnPx3jIxv4DAopGUzxsgb0PA57Knd9NQzomtkz7AVEg6pQCwqaRK%2B%2FxBPOsuBlolnfAd%2FHzMMmQ3skGOqUBD%2BGbLtIdxIZ%2FfiJfkvmSXlHLFKq72SJltSuKVUnkKm1BEiPtcLyeBm%2FQqXmL17GHZmhUHu6xCW%2B1vczB7m9hEn2Nzw71QvrVo7%2FwoFk%2FhtWMMOivOMEX8MR3XPXfvd23xNofOOQ3v5Hw8%2FUSaLMDZny3Tdao%2Fv4sipmP38r04ccBgHOS5jwojWP3yfAJPUxpCRtliT%2FXhD2XRVWsLC6HV1FN0h6K&X-Amz-Signature=d1811e749c4305854dedea6045ad535ceaf3d461fe3fe9383643e6e9b04f893a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

