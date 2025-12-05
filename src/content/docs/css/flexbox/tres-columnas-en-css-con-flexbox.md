---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDG3AB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQPUPG0ek%2BPks4tBWRdS79AhFOJEtVRIzm5%2B7tLms6wIgLgyacUpN7PsFi9UcFDrI6lbVHuf%2Fg%2F6jcxa15Ji6vJoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD9CoCqI65vnBAz%2B1SrcAxQKoC2PWs1exeuY%2F0zDaJtGkkogiRVawgL%2FPncO8XqgPsYqrR%2BF0kEOYypNMHUo4Jn3H8t2zDoX1NmK0Bqh7foxHKP2IRulWFLcle8ZcJlOoo6umnXS2ICtu%2B6azbOpH4CYFFqeCkLrm%2FbnubzPqyvXZyCC5cJ5o%2FKF4fJVTRhsSiSYI%2FlIm6H5FAv4gwFOp0l6SkV1Div%2Fe%2Brc5XZDi1xyVOZWnVxbUJMHUCE34NCBkFDprKgUTgvD%2BJYo7WncDIKmr4tItTmEPtIU6YMDG1jyEV33lK7bXmAa0HJptz8t3XfrAAZUAUm5%2Bcnx9v6dg9VRdB5OS526p0Usz7ur3VAsvfHkFaiybywFZj7b0ney4b%2FbBLM2qi2gJ%2FWll2mxYsT%2BvnE2i0xpBAAZQL1%2FwAzzDuy4IcePNU0EwIUtC7pBQ8DKFqslkEjXZIeHDLTnf69fZb5kLZlikJcSoxvrq%2B%2FLT6XRB62UyAAh%2FS9Q6838H%2F1DlK0ksNP7VG23ypVuvbdNZchcaOuBwM8vLJ7pGOia6%2BkL%2BFyx%2FDCCsog%2Bvl%2F5JePs3TFqfzJaRMdbKFF7aGxuOzV0GSnVCzoSEKHRkZAlhfbCDHB6685mScnRe4Ym0%2FRJjtWAIvMfYuSCMO%2BLyMkGOqUBOoTB2lSPAqA%2B26beRdfgNaJvTlynf4IsTbGQEARE6TMmXJitpv5r1Md4TpK7i8mAbcUmWKSlOdbboWhj3%2Bxsva8%2FWrMm0MU1Ag0XGRwIMf0D91eGmjsYkFOz%2FYcWbhxI6iaXH%2BIsflDRGkNHOqSgkeWdcoZcwbSW%2BO8LnzJZgnwGE5NTSUZbKnhUUeRj6kGeirTLyOdRWHetfqI3zHTIdU%2FoaRR9&X-Amz-Signature=c430f4b90b891f82c30f17eafadd427f3d7877fd87f8ec4d0b8dbd825b3ff6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDG3AB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeQPUPG0ek%2BPks4tBWRdS79AhFOJEtVRIzm5%2B7tLms6wIgLgyacUpN7PsFi9UcFDrI6lbVHuf%2Fg%2F6jcxa15Ji6vJoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD9CoCqI65vnBAz%2B1SrcAxQKoC2PWs1exeuY%2F0zDaJtGkkogiRVawgL%2FPncO8XqgPsYqrR%2BF0kEOYypNMHUo4Jn3H8t2zDoX1NmK0Bqh7foxHKP2IRulWFLcle8ZcJlOoo6umnXS2ICtu%2B6azbOpH4CYFFqeCkLrm%2FbnubzPqyvXZyCC5cJ5o%2FKF4fJVTRhsSiSYI%2FlIm6H5FAv4gwFOp0l6SkV1Div%2Fe%2Brc5XZDi1xyVOZWnVxbUJMHUCE34NCBkFDprKgUTgvD%2BJYo7WncDIKmr4tItTmEPtIU6YMDG1jyEV33lK7bXmAa0HJptz8t3XfrAAZUAUm5%2Bcnx9v6dg9VRdB5OS526p0Usz7ur3VAsvfHkFaiybywFZj7b0ney4b%2FbBLM2qi2gJ%2FWll2mxYsT%2BvnE2i0xpBAAZQL1%2FwAzzDuy4IcePNU0EwIUtC7pBQ8DKFqslkEjXZIeHDLTnf69fZb5kLZlikJcSoxvrq%2B%2FLT6XRB62UyAAh%2FS9Q6838H%2F1DlK0ksNP7VG23ypVuvbdNZchcaOuBwM8vLJ7pGOia6%2BkL%2BFyx%2FDCCsog%2Bvl%2F5JePs3TFqfzJaRMdbKFF7aGxuOzV0GSnVCzoSEKHRkZAlhfbCDHB6685mScnRe4Ym0%2FRJjtWAIvMfYuSCMO%2BLyMkGOqUBOoTB2lSPAqA%2B26beRdfgNaJvTlynf4IsTbGQEARE6TMmXJitpv5r1Md4TpK7i8mAbcUmWKSlOdbboWhj3%2Bxsva8%2FWrMm0MU1Ag0XGRwIMf0D91eGmjsYkFOz%2FYcWbhxI6iaXH%2BIsflDRGkNHOqSgkeWdcoZcwbSW%2BO8LnzJZgnwGE5NTSUZbKnhUUeRj6kGeirTLyOdRWHetfqI3zHTIdU%2FoaRR9&X-Amz-Signature=ed9efe85aa059e68fe865b82e80e250df33961b54e49e5a0c5c6ba711bd9f8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

