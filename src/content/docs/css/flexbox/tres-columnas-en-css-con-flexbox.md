---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3D3DEMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAshhkaLIOGAiD43UqMikFvdzCFIgK%2BP6vVT32SVhBPqAiBLpD6NyS51GuiFKxJ3T04Xz0Ozf%2Fyc1iFlMeI2c%2FZGECr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpuzd5HKo9hJeHuWOKtwDLcnVDtTrWk2iRx%2Fg%2F0%2BK0DEmizNYdtSXiiQ0H3FkcmRpSLkBDLetQU2LhVHwqksy78sAxoByXQGCy5iG8munX6dMU3dRiRhbzeCIoKefhKQPTAmW2w1ho5c3b7kd7pfAW1Mc0tC6oyx75oEU13ee819iQxNfTPnSGji7i4R0XSAmveSVTtax4qTSJ4ycJL9ljFhpmcLXiodohSDqhRN06y%2BloGHKUfGmriiZkLW46ry%2B28ARZpeWqjNS08Dv%2BJdOnzmWcSp0dzHTqw0xJgYWv0597%2BlsS%2B5kXFX45cHglB3RxBrNuqyYkJEEmfmDPPFIHop6dYf%2BP5H3oY9%2FEyAtlHHVC2t2Gb%2BAY8R8vngBmZB7xy3EzT6B8XCGa0Waqrq2kjtdx%2FNyC2N3tlmh3n4sNjuhoaXNwEIyv1VfS5irpZpu4FWGwRb1uw%2FJAbW0w6f6vS0wF19EErgsRdIMWfugXGF%2BGBkyEj9HmlyTqkHrUM6uEyIp9420vhLQmhnwGY8t%2FHlT7u97raM43g4fcgAZiQY4KE1G%2BnL3MOpXdhL%2F9UhPXi07CdS2fzOdVRYmK733%2FHiV8bWx1ee1br0opzPzU0YPW70tLFsDGG1rd9nK4LNjOsKVr7jReUxU2Qgw9ejEyQY6pgECiJOSGG%2FKbl3Hfnmd4DuQyuIriQFfRdIGWMp7104bpJfWywv%2BsEjNa%2FXNBgfFglcaa2iS5ruN0qYWoXiJ%2Bp9ECTdicEj1ZL6y9cR6KOdoi8Q8WfespQXP6zPDylFc6N8GvXHfdoHIVASYKYf%2BKo7glJV65uX55rClwXDRxOah8wSsJgiCRF5aYebBIgKLp4sTkITjOyloJy2K%2F5re6B05Mh48M26l&X-Amz-Signature=246d21c0a1281ed8252fad9542446e371905ef17ef66b71404a13566069b280c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3D3DEMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAshhkaLIOGAiD43UqMikFvdzCFIgK%2BP6vVT32SVhBPqAiBLpD6NyS51GuiFKxJ3T04Xz0Ozf%2Fyc1iFlMeI2c%2FZGECr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpuzd5HKo9hJeHuWOKtwDLcnVDtTrWk2iRx%2Fg%2F0%2BK0DEmizNYdtSXiiQ0H3FkcmRpSLkBDLetQU2LhVHwqksy78sAxoByXQGCy5iG8munX6dMU3dRiRhbzeCIoKefhKQPTAmW2w1ho5c3b7kd7pfAW1Mc0tC6oyx75oEU13ee819iQxNfTPnSGji7i4R0XSAmveSVTtax4qTSJ4ycJL9ljFhpmcLXiodohSDqhRN06y%2BloGHKUfGmriiZkLW46ry%2B28ARZpeWqjNS08Dv%2BJdOnzmWcSp0dzHTqw0xJgYWv0597%2BlsS%2B5kXFX45cHglB3RxBrNuqyYkJEEmfmDPPFIHop6dYf%2BP5H3oY9%2FEyAtlHHVC2t2Gb%2BAY8R8vngBmZB7xy3EzT6B8XCGa0Waqrq2kjtdx%2FNyC2N3tlmh3n4sNjuhoaXNwEIyv1VfS5irpZpu4FWGwRb1uw%2FJAbW0w6f6vS0wF19EErgsRdIMWfugXGF%2BGBkyEj9HmlyTqkHrUM6uEyIp9420vhLQmhnwGY8t%2FHlT7u97raM43g4fcgAZiQY4KE1G%2BnL3MOpXdhL%2F9UhPXi07CdS2fzOdVRYmK733%2FHiV8bWx1ee1br0opzPzU0YPW70tLFsDGG1rd9nK4LNjOsKVr7jReUxU2Qgw9ejEyQY6pgECiJOSGG%2FKbl3Hfnmd4DuQyuIriQFfRdIGWMp7104bpJfWywv%2BsEjNa%2FXNBgfFglcaa2iS5ruN0qYWoXiJ%2Bp9ECTdicEj1ZL6y9cR6KOdoi8Q8WfespQXP6zPDylFc6N8GvXHfdoHIVASYKYf%2BKo7glJV65uX55rClwXDRxOah8wSsJgiCRF5aYebBIgKLp4sTkITjOyloJy2K%2F5re6B05Mh48M26l&X-Amz-Signature=99bc4d5d19a955338782485974e0aa1fb2a5f47bad00ea38603dc3a1465c5839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

