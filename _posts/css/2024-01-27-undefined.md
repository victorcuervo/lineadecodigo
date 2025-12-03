---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PKNSP3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBy0qoeDm9VCXtlRhRYaeWyo%2Bv6uDSa6ukuVrKGPUbNKAiEAswXaYXeF9CUPYPVHzu7JdyuCcUKCSEQu9wSbro2T8r4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCZ4%2Fz%2Bo%2BC5xrRWmjyrcA7RTh9imzWBMusmItlTP1f59ReN2J3D%2F0wuMGY3msH7gXiqtFOu%2F6F6odfrWrTMdukAM0r%2FxYybSXG0EN1g2OWK7R3l%2FXH8aafBV17edCvfCtxEl98rO0fMXdcSZL8HeaeMDlJlrnXm1oTTQ%2Fokmfs%2BtKjQw%2BJLHmAjyrXL49xNZsjvct%2FsUOMO%2BycYYNlMXkGtYIDiLbdjWYlqWaeJLFEd3d9XhIeVoEbv9fmIXfPBteGpMwXkuzpSEyKSoHGVsRtJj%2B3qOBbJYdlH7nxBGVYcCY2UacFokJ9S%2BFWaZarqptf3OisJ5bcr6ymon0IHSJiOT2mOQSKgoqarOgZVe5uttZdBGCh1u6vwdnWzwDho8MevWLR9sNMOhbKQIEhi4Nv17qfAcfjZglb4%2BpRJaaIfwPLeFTyY4I%2Bbyy8UB%2BYMZkAJXzlEsnixUOKa1wmjmoF3xxY13zmIBRuqNkLPDvMfjYU%2BCTcqp%2Bk3sjkMHpSvWsamhR0iVkxPVqR7KpqZJ5Z9EupOOWKZTHv%2B6szBAMBorclCLTb0%2FIQZeMNhFWi2BGQ2K2m%2BzBH%2FvxXIaS%2F%2Bvte9LxoSaBs7cd2q9k8xvRnuSAwzwiQCkbClyte4uyQB3V4ED%2FQt8iyMBHT4EMJrpwMkGOqUBec9L3%2ByLr1TxEXcol92y6kkW92Q3B9Opq97JOOnnxZavTyqmOElkCyey20GyRDVkLDLmc0cccUNFjnPfBPXBUi0ideCMMLL7W4OHTvm0fLHQ0lj6CaA0xm7MAopsexuXiqtbOqoDYZqmhM838cx2WubRUR57ktn48YCLgdXrM1Y%2B%2BmNfJ5W9p06%2Bl7BKH7R4rK%2FMsTff22DISUaS2os4qByYwquT&X-Amz-Signature=ad0730c743e15ea8bc4675cb2d822aa53b6f72b2b506bb4aa33799ba51784cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PKNSP3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBy0qoeDm9VCXtlRhRYaeWyo%2Bv6uDSa6ukuVrKGPUbNKAiEAswXaYXeF9CUPYPVHzu7JdyuCcUKCSEQu9wSbro2T8r4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCZ4%2Fz%2Bo%2BC5xrRWmjyrcA7RTh9imzWBMusmItlTP1f59ReN2J3D%2F0wuMGY3msH7gXiqtFOu%2F6F6odfrWrTMdukAM0r%2FxYybSXG0EN1g2OWK7R3l%2FXH8aafBV17edCvfCtxEl98rO0fMXdcSZL8HeaeMDlJlrnXm1oTTQ%2Fokmfs%2BtKjQw%2BJLHmAjyrXL49xNZsjvct%2FsUOMO%2BycYYNlMXkGtYIDiLbdjWYlqWaeJLFEd3d9XhIeVoEbv9fmIXfPBteGpMwXkuzpSEyKSoHGVsRtJj%2B3qOBbJYdlH7nxBGVYcCY2UacFokJ9S%2BFWaZarqptf3OisJ5bcr6ymon0IHSJiOT2mOQSKgoqarOgZVe5uttZdBGCh1u6vwdnWzwDho8MevWLR9sNMOhbKQIEhi4Nv17qfAcfjZglb4%2BpRJaaIfwPLeFTyY4I%2Bbyy8UB%2BYMZkAJXzlEsnixUOKa1wmjmoF3xxY13zmIBRuqNkLPDvMfjYU%2BCTcqp%2Bk3sjkMHpSvWsamhR0iVkxPVqR7KpqZJ5Z9EupOOWKZTHv%2B6szBAMBorclCLTb0%2FIQZeMNhFWi2BGQ2K2m%2BzBH%2FvxXIaS%2F%2Bvte9LxoSaBs7cd2q9k8xvRnuSAwzwiQCkbClyte4uyQB3V4ED%2FQt8iyMBHT4EMJrpwMkGOqUBec9L3%2ByLr1TxEXcol92y6kkW92Q3B9Opq97JOOnnxZavTyqmOElkCyey20GyRDVkLDLmc0cccUNFjnPfBPXBUi0ideCMMLL7W4OHTvm0fLHQ0lj6CaA0xm7MAopsexuXiqtbOqoDYZqmhM838cx2WubRUR57ktn48YCLgdXrM1Y%2B%2BmNfJ5W9p06%2Bl7BKH7R4rK%2FMsTff22DISUaS2os4qByYwquT&X-Amz-Signature=9d363708d6d54dbe74f9710eb834de7f88954833ceb414b11ca38a0dd9544c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

