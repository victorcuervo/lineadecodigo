---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OH2EXKG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoXkKZd6iTYwTr6QCgeeozBKtLzFjyeit2U%2BP5vIHPsgIhAKhIrF8HGcuh0MnIm5%2BEbmis1OTQT4BKaZZCARnrOhIEKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwydrlavFm4gNjZsjIq3AP6c%2ByWDNNVBHQOI4bx3B%2FeIzSlohTCNdZn93AsA0ER6Zou6JOYqQBfvGccz%2FrA6zFQNu%2FYxB9%2B0qMVuiIoaGJsB2eXg8qfAiLY%2BHybbFF7fj%2Fa2sSsZSsp8COWE4%2BDYRIpirpHmeR5sZSg94NfHZtuAC4rHwvfMskz8CXecgZSPpm31I7D4S2iAW5smB46BkJd7uBPA9rwzJh64Nwl1XM%2BJN3%2FNAmOQAxBkp15JaCz7dCnrVHTffTchamIcSo358FQyEuQJCrTWF5QS8ptuEfPel4ZeP9jCGm67v42gD07HRqAT6zV7BmwcdttzqTDONQQqAvLWeusC6WdgLbWzxPEEgjNUuXKM2PU8rLHiMGYCuolATbXxIletXd5Y8JkIa0etszL7kGgGNhmQ3LDcppuOyG8%2BY6A2iSsvvOe41lcqP4Cke%2BovNo1oXDujrDULBw%2BJcAQXjDr7X2YP7cLZ6V48vb3UChSWELCFvvt6Ly1S%2FC0dCX79%2FdiQDBJ0SLqbr8rm4n%2Fuijuiyjjd%2B4en8HsBXGq4i%2FlOPevnhze%2FPS%2Fy5hVwNAqgRmg6Z5bw5xLZtOzJpYLR55v%2FMrd%2FPjU4pMhn2q6%2FGdihd8u%2Fdl5iksOWOSxiOK9Ekk64aHA2jDw5NvJBjqkAY3HHxDVzRXlLZeXolu14N4dc%2Bpwj5Fy%2FtGolyebvq7t88F7OQm2bu1US0dKuE8L3O2OUZx1uZaOIyU3EcHh3ZM0rrEMHCwfMRXnTNMbIDt93KahMcxxjzOoZjYU4WIQrOY43tdcUq50XcVuDRnuS1eYUR6zeE7T28d%2Fc1aDJccdGIIv2myW8gWWvm9dVywPyIBvdL6bwTEvhbBqqOfDAghLFylm&X-Amz-Signature=38f771500b870de8a737d78a45461a02f084970a561234b741286b8c8859fa33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OH2EXKG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoXkKZd6iTYwTr6QCgeeozBKtLzFjyeit2U%2BP5vIHPsgIhAKhIrF8HGcuh0MnIm5%2BEbmis1OTQT4BKaZZCARnrOhIEKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwydrlavFm4gNjZsjIq3AP6c%2ByWDNNVBHQOI4bx3B%2FeIzSlohTCNdZn93AsA0ER6Zou6JOYqQBfvGccz%2FrA6zFQNu%2FYxB9%2B0qMVuiIoaGJsB2eXg8qfAiLY%2BHybbFF7fj%2Fa2sSsZSsp8COWE4%2BDYRIpirpHmeR5sZSg94NfHZtuAC4rHwvfMskz8CXecgZSPpm31I7D4S2iAW5smB46BkJd7uBPA9rwzJh64Nwl1XM%2BJN3%2FNAmOQAxBkp15JaCz7dCnrVHTffTchamIcSo358FQyEuQJCrTWF5QS8ptuEfPel4ZeP9jCGm67v42gD07HRqAT6zV7BmwcdttzqTDONQQqAvLWeusC6WdgLbWzxPEEgjNUuXKM2PU8rLHiMGYCuolATbXxIletXd5Y8JkIa0etszL7kGgGNhmQ3LDcppuOyG8%2BY6A2iSsvvOe41lcqP4Cke%2BovNo1oXDujrDULBw%2BJcAQXjDr7X2YP7cLZ6V48vb3UChSWELCFvvt6Ly1S%2FC0dCX79%2FdiQDBJ0SLqbr8rm4n%2Fuijuiyjjd%2B4en8HsBXGq4i%2FlOPevnhze%2FPS%2Fy5hVwNAqgRmg6Z5bw5xLZtOzJpYLR55v%2FMrd%2FPjU4pMhn2q6%2FGdihd8u%2Fdl5iksOWOSxiOK9Ekk64aHA2jDw5NvJBjqkAY3HHxDVzRXlLZeXolu14N4dc%2Bpwj5Fy%2FtGolyebvq7t88F7OQm2bu1US0dKuE8L3O2OUZx1uZaOIyU3EcHh3ZM0rrEMHCwfMRXnTNMbIDt93KahMcxxjzOoZjYU4WIQrOY43tdcUq50XcVuDRnuS1eYUR6zeE7T28d%2Fc1aDJccdGIIv2myW8gWWvm9dVywPyIBvdL6bwTEvhbBqqOfDAghLFylm&X-Amz-Signature=af71d8118a9908f738a7469899382368ef9645239b041d7580964d9a22fc9d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

