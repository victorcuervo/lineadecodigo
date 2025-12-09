---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XB76QR7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0UrDs6QSryanC0nCrvAua%2BmET24szNgMM7lgOWgHJdAiEA7JZFrsEMpyZUiTQBcylM7WyzmalCqqMpKgruINtAhP4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC0NVvqStKa3KpX%2FSrcA%2Bm8mxFWfUh7VQE45NxNEO0PEFscYP0wEntILLVUJ%2BMbeXEFhFA4y%2BlSaG9uqH4WI5z3DT192DYVrFaIhbi4K1CNaT66OQi0bpaN41oj2bKLntoQzJe%2FRRSlJzuWc3h1RtysngZu%2FzoacP6Ge8IMOW9PRAQbDszbteUKbYUSCP0x5i8%2BjDyw00IIEoA4xCv%2Foz%2BKTkOCntA7idxAAsF40Ove49QQWQ8AO9703o16kTks5KRl3tyMdauZLhMKap%2BbbjM8m6VwZxTdZwRJwQZnMunsv2M3csoj%2FSkW5uvdlRpasIMsJOs1cw1o6viEzDqPe5nh%2Fb%2BjwtPZ7PKAyxJZpTMcOslM51y2s99oSXzCt3ylp%2FmTRE8D4FQMROZK4muP7HPkx%2BjSmxO2COYeUpUlsJqEtThM6vFUpFvufJuqTcy9%2BoaBVa6e3PTWr23M9i89oGTt%2ByJGuYVAM7MhZ%2FR8wBqj2Anl8S%2FQD%2FE2B5FQJ6h4fs5l1RFD%2B1V9fZRLCWYHwiyow3VIospeMCN%2B%2Bg6jsVd%2BmaOZsWE55HknjNNDiUO8c9lBrm0%2BAHF5MFOTZDPnYD4mcIKOitD9rmefesZugb00MB5%2FeibKiK7JZQhH6U2nF1IcQdVHZ0s9nHP9MIzE38kGOqUBxB7IcXDW3eUUVDlTytySnnVwiEvGsPx53pwaaArQw9qK1MvxBvkKhmE8TDeDlxBTCAZug407RFnlIrM8TXX0dMEfS9qgfAiuzieji8ax405tlCdqf3IxnIma4uIy%2Fi7sK0g%2F4Pei4X%2FvHD%2FYyAycyKtX9QecZh7tulbUwhxwjET3XZMtJs3%2Bzkqr87sXZIh3n1Otud%2FtWZZt8%2BDPkei%2Bf3NWq6Uh&X-Amz-Signature=26c04d1fd77542cb7636076c0a0373c85c662b754ac7725b86248e29b4306b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XB76QR7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0UrDs6QSryanC0nCrvAua%2BmET24szNgMM7lgOWgHJdAiEA7JZFrsEMpyZUiTQBcylM7WyzmalCqqMpKgruINtAhP4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC0NVvqStKa3KpX%2FSrcA%2Bm8mxFWfUh7VQE45NxNEO0PEFscYP0wEntILLVUJ%2BMbeXEFhFA4y%2BlSaG9uqH4WI5z3DT192DYVrFaIhbi4K1CNaT66OQi0bpaN41oj2bKLntoQzJe%2FRRSlJzuWc3h1RtysngZu%2FzoacP6Ge8IMOW9PRAQbDszbteUKbYUSCP0x5i8%2BjDyw00IIEoA4xCv%2Foz%2BKTkOCntA7idxAAsF40Ove49QQWQ8AO9703o16kTks5KRl3tyMdauZLhMKap%2BbbjM8m6VwZxTdZwRJwQZnMunsv2M3csoj%2FSkW5uvdlRpasIMsJOs1cw1o6viEzDqPe5nh%2Fb%2BjwtPZ7PKAyxJZpTMcOslM51y2s99oSXzCt3ylp%2FmTRE8D4FQMROZK4muP7HPkx%2BjSmxO2COYeUpUlsJqEtThM6vFUpFvufJuqTcy9%2BoaBVa6e3PTWr23M9i89oGTt%2ByJGuYVAM7MhZ%2FR8wBqj2Anl8S%2FQD%2FE2B5FQJ6h4fs5l1RFD%2B1V9fZRLCWYHwiyow3VIospeMCN%2B%2Bg6jsVd%2BmaOZsWE55HknjNNDiUO8c9lBrm0%2BAHF5MFOTZDPnYD4mcIKOitD9rmefesZugb00MB5%2FeibKiK7JZQhH6U2nF1IcQdVHZ0s9nHP9MIzE38kGOqUBxB7IcXDW3eUUVDlTytySnnVwiEvGsPx53pwaaArQw9qK1MvxBvkKhmE8TDeDlxBTCAZug407RFnlIrM8TXX0dMEfS9qgfAiuzieji8ax405tlCdqf3IxnIma4uIy%2Fi7sK0g%2F4Pei4X%2FvHD%2FYyAycyKtX9QecZh7tulbUwhxwjET3XZMtJs3%2Bzkqr87sXZIh3n1Otud%2FtWZZt8%2BDPkei%2Bf3NWq6Uh&X-Amz-Signature=b30717b577ba7beff8efa38753c8b92014ef9eee191abf95423486e66130743e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

