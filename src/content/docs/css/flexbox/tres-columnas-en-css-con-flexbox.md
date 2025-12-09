---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6DKYVN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BUMHsyZfhvfzPZ5H0CTmztVIncBCS5poa41PvNpFM5QIgTt73GbSu8%2BJ0JB8Xg7PMslUSKIBTJLL0AvXPlg9njEIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmDcXGgGzPNjOgcSSrcA89Mhsve4PdyWsbN3NaZ%2BU4wxBgz33LvtCAIGSogu2qPndwaRVuWpEqlxJmjvIA9gdVJKBQpkWKwajlllOE%2B1AgfpVvagOGG2c2nISz%2F2TnlCtfeGEVfn%2FuAf3tszZTxgXgTqV2JZjI8Jl4rOIq%2Fiia1%2By%2BK7W49WqCckXBLDZlfMjfTkl%2BpdF%2FHeePfzzH4gXi1pybNnRy%2FC%2BQydnM05cy4AKA8irTYLA2JXrxOXxZnqKFYLKcfgDSzsRb%2BzOQS3g%2FElepLIrbVXeCBwCEkQaJrsESoxFdhc5IMdt32QqOfhIArKuXrt1YUqyPNhpeHbLavDWKOWOv9Dphxj2A4ahMEKP3CJW08YEXWSVM39I99h70szk1d%2BUEqSBeF7XBcG9FEgjkrEYNi5vnOIYNMPIGNPMl1v%2FnYFafgmHHEn%2Fv%2BADTqRDofe3kF4euhuwUoYLSiTqLNbf%2B2Y0kNTsGdmcEEFnjuNw8V751J2EPXKkcecTfRfAP69Mz0HY9Vwuqw22xrg7V1qNQotrMCwUbf8NeYoMaIpcJavQlEIBqzOMu24Ad%2BWx9ZLeaLyTv4sr75lQBbMAKGOXdQoRxDFGbiaJcf98udl%2F%2FDDxREMAOHHyYTTWCe138iHhRRe3gaMMTJ3skGOqUBjT8iMw2GFZ4sP1GQSs0ElCdVeyIuGjccWZdpdbUKyPsPFJ72Ersd9TKhP%2F%2BsTbp%2Bsv0asMGT9M6gnVbG%2Bz0Gb0mGDdiuS3LFj5GqluhRvkALe99BiyWESAVY%2FFrScQiv6zfPlf%2Btf1ypTfUOMhL4PuE61UoVT6cgstPVCbkrzw%2BGOIkJ4f1O%2BkI2NQ93gUFJrrgdrkaEUsdrRv%2Fzu%2BaGsPz2sCvE&X-Amz-Signature=8e4b548bcbe0d42a8234406d4ec6c2133bcde91f7a681bd411cbf0824895d754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6DKYVN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BUMHsyZfhvfzPZ5H0CTmztVIncBCS5poa41PvNpFM5QIgTt73GbSu8%2BJ0JB8Xg7PMslUSKIBTJLL0AvXPlg9njEIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmDcXGgGzPNjOgcSSrcA89Mhsve4PdyWsbN3NaZ%2BU4wxBgz33LvtCAIGSogu2qPndwaRVuWpEqlxJmjvIA9gdVJKBQpkWKwajlllOE%2B1AgfpVvagOGG2c2nISz%2F2TnlCtfeGEVfn%2FuAf3tszZTxgXgTqV2JZjI8Jl4rOIq%2Fiia1%2By%2BK7W49WqCckXBLDZlfMjfTkl%2BpdF%2FHeePfzzH4gXi1pybNnRy%2FC%2BQydnM05cy4AKA8irTYLA2JXrxOXxZnqKFYLKcfgDSzsRb%2BzOQS3g%2FElepLIrbVXeCBwCEkQaJrsESoxFdhc5IMdt32QqOfhIArKuXrt1YUqyPNhpeHbLavDWKOWOv9Dphxj2A4ahMEKP3CJW08YEXWSVM39I99h70szk1d%2BUEqSBeF7XBcG9FEgjkrEYNi5vnOIYNMPIGNPMl1v%2FnYFafgmHHEn%2Fv%2BADTqRDofe3kF4euhuwUoYLSiTqLNbf%2B2Y0kNTsGdmcEEFnjuNw8V751J2EPXKkcecTfRfAP69Mz0HY9Vwuqw22xrg7V1qNQotrMCwUbf8NeYoMaIpcJavQlEIBqzOMu24Ad%2BWx9ZLeaLyTv4sr75lQBbMAKGOXdQoRxDFGbiaJcf98udl%2F%2FDDxREMAOHHyYTTWCe138iHhRRe3gaMMTJ3skGOqUBjT8iMw2GFZ4sP1GQSs0ElCdVeyIuGjccWZdpdbUKyPsPFJ72Ersd9TKhP%2F%2BsTbp%2Bsv0asMGT9M6gnVbG%2Bz0Gb0mGDdiuS3LFj5GqluhRvkALe99BiyWESAVY%2FFrScQiv6zfPlf%2Btf1ypTfUOMhL4PuE61UoVT6cgstPVCbkrzw%2BGOIkJ4f1O%2BkI2NQ93gUFJrrgdrkaEUsdrRv%2Fzu%2BaGsPz2sCvE&X-Amz-Signature=557aac08b8c2b2c2bc0555e5e28e34eb663cd37ecd8058482cca86cad9346fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

