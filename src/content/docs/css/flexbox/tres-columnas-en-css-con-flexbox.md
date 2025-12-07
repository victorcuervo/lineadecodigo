---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLTZOGQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WDuyo%2F7gUBCSWYT2VjQTyWPELUDvAhgh8tYeMGtQvAIhANAINqt04Ky2u67BIM%2FYM%2Bl7ouj45vGKfIgPBpjl0%2B6TKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGm3XVRU8JLqH5%2B7Qq3AP0qh96YFQhU8Sab4x%2FSUn6pQjAYchAodclBXgvhryE0O9IuKuFOBrpS2RqCQpBYvUg7YksRb2FsyQ2bGmLZQoXxn1Y05PTjeSfnlxLNdmHyZeaETUxXzhQ1Y8cxuwfeXc5ZWTl5rBl8Vemmw%2Bp0Dug7dU%2BoVcSdNzj9Fc8qWWDaVbhmyfaXQU88IzeP56LSqq9puxCXcQwRjAeG%2BbsNRi0XqQZGR2xyWW5%2FcSVAOMwT0vSYPSwpe3VF29g%2BfRPMCDSWNBFOgnXpK5UPlcuL6GM4eyfq3%2B6U58dq9dcaeD3fug0Jr5sEx0QSWaLxsDK874AAlmkFt4U5uf6FDTnC1AM3Ozbw%2B4sSo5zUNRDwp6qnAMVqxbyTxuVSwvTpvK91KBILT8pcsOBXCd1v%2FLBap1dvrkcyaJKlA9hOw8lo%2B32f1ge7F%2FwTAcgRg9h%2FzEvVaBWOo7%2BIPABXPKHExvATcfBQ7Y4dj8XR6yCX22rTRGIxXesjA43OfmbyMh7JxXfUUPnMoq8y7f%2FlcQ6o7cT%2FNj6yp0sRDXMpuBFGDo7Cpr5cJ3mCMNdGY7xQJNqa1bds2NOFHM6N6lLlzILUiDTI6uukMdIQcheTbl8x2roUtc5mzmf2hpeJktqSFluBjDUhNjJBjqkAWQ8G4hXPEGRBV44GNDs8hFtKeEujoRdSV%2B5WZr7ocjPkUpbjcrv9r2YVv%2FvvYahGMnL0gBUxSkuLBiYxcL3QBRyv%2B%2F1PGvodpXwTp3hyZR%2BfeG%2Fn5z0hHdFj%2F9JrmhlmXgbvTViKfVWwP6DS%2FVGE3CwdXa1aUzNdJ0T%2F33Ig0OIys0fWCu%2FYdXxKcv6XJ8Tyjuu73f2s3mxUZOokGByajcaz6bn&X-Amz-Signature=e1e9438adc0262abbf9a3222af82b09a4ad198ce189e47f6f2c813d736213c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLTZOGQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WDuyo%2F7gUBCSWYT2VjQTyWPELUDvAhgh8tYeMGtQvAIhANAINqt04Ky2u67BIM%2FYM%2Bl7ouj45vGKfIgPBpjl0%2B6TKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGm3XVRU8JLqH5%2B7Qq3AP0qh96YFQhU8Sab4x%2FSUn6pQjAYchAodclBXgvhryE0O9IuKuFOBrpS2RqCQpBYvUg7YksRb2FsyQ2bGmLZQoXxn1Y05PTjeSfnlxLNdmHyZeaETUxXzhQ1Y8cxuwfeXc5ZWTl5rBl8Vemmw%2Bp0Dug7dU%2BoVcSdNzj9Fc8qWWDaVbhmyfaXQU88IzeP56LSqq9puxCXcQwRjAeG%2BbsNRi0XqQZGR2xyWW5%2FcSVAOMwT0vSYPSwpe3VF29g%2BfRPMCDSWNBFOgnXpK5UPlcuL6GM4eyfq3%2B6U58dq9dcaeD3fug0Jr5sEx0QSWaLxsDK874AAlmkFt4U5uf6FDTnC1AM3Ozbw%2B4sSo5zUNRDwp6qnAMVqxbyTxuVSwvTpvK91KBILT8pcsOBXCd1v%2FLBap1dvrkcyaJKlA9hOw8lo%2B32f1ge7F%2FwTAcgRg9h%2FzEvVaBWOo7%2BIPABXPKHExvATcfBQ7Y4dj8XR6yCX22rTRGIxXesjA43OfmbyMh7JxXfUUPnMoq8y7f%2FlcQ6o7cT%2FNj6yp0sRDXMpuBFGDo7Cpr5cJ3mCMNdGY7xQJNqa1bds2NOFHM6N6lLlzILUiDTI6uukMdIQcheTbl8x2roUtc5mzmf2hpeJktqSFluBjDUhNjJBjqkAWQ8G4hXPEGRBV44GNDs8hFtKeEujoRdSV%2B5WZr7ocjPkUpbjcrv9r2YVv%2FvvYahGMnL0gBUxSkuLBiYxcL3QBRyv%2B%2F1PGvodpXwTp3hyZR%2BfeG%2Fn5z0hHdFj%2F9JrmhlmXgbvTViKfVWwP6DS%2FVGE3CwdXa1aUzNdJ0T%2F33Ig0OIys0fWCu%2FYdXxKcv6XJ8Tyjuu73f2s3mxUZOokGByajcaz6bn&X-Amz-Signature=c44b6bd4416de9477085ba147d6873b58c06dba940cfd822ff16ced31fd5ab85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

