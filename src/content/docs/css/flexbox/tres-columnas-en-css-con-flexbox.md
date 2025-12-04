---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FC7GOOQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCs%2B89xCUH%2FwMM%2BeYrYp%2FkXne1BTGTTHogmgKOLiX6iggIgUdCOXbREBM3e5KWuuzi7fhg7RU9d3r3sY%2F58wdgkpdAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFeJOfdrNDX2BcZSnircA2C0K4l3FJfy8FkA6%2FBnYwkxtCAqUB1VESdgodrsitzX5sYB%2BfzQbM6ZKZh6vvMnINxUlG%2FU7WtaDo9nVmm9dDxzC89%2BLkJjjGXxge9RniW7rIII605Ed0Z5GWnysU3VXAunBjTFtXcoEMEamFHtPOY%2FEtyRwWDu8x%2Fk56cyKK3EUhRD%2BN9Yr6g0Hs02o7ZrcnvkXg48lpu7%2BbaH0ZDBX5%2FCWlJra31yT%2FNVcfz%2Fjfq2QIbP6eio7pSLh%2BGE9Wc1JcFjry4XH4KmsKz%2BWyUwc4fITWJxCPFI%2BVdxMSb13KWMWm2gltaRBHiZh%2FmaK3hyXf1YX1VCaYioGW5uDlPLxPfrsd3iFNnHLz3o4c6tg4lMbEsKBSinAMXgvrLmwAYol4JOh4nNDr5E0YqPRbK%2BgAvxHjTR0vaHII2ZxMZUzn1EDUaUcPuulbc03ZkB50M64R2COrFHVrBgcSq7kbvNCV2XIg8UxMBkgE%2F9YctcQgyMmSgV4zYG5yqO2jOrpf41u6wAeX0wDeapSvSyKERk1anqmT4TZr4pTPFosNBvQiXaMidsmq3DZtXYa4ICSp4Yh%2BCQ0sDjPY%2BSPB6USVIqrDB9Dy9B76JnynKrhsaCrm6mdI7OxsUM0peEpKyeMM6Uw8kGOqUBzNDyt94hyXg6JLr81frsg2xUX2GV2Fmrbn9acHR3taPSmebrtOgKdzcvoASh9ww3OXT4pgXlok%2BoDmZqLxbSOI8s5e5%2FXSICLkpb2NclhF7WAldf8MAEkSDeqHUgC3dT%2FhUiWVOxlivPu2WuKwYDNPDmyVIoNFvmQZya1CcM7%2B%2FbQdWKfocrebsgkYOXTisZKgfFF2N3BR0YpO2PFOV4mBGAclfs&X-Amz-Signature=06d419259676f723e97809d8609aa72673344476c8652b4d7bd747abcc8ba81a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FC7GOOQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCs%2B89xCUH%2FwMM%2BeYrYp%2FkXne1BTGTTHogmgKOLiX6iggIgUdCOXbREBM3e5KWuuzi7fhg7RU9d3r3sY%2F58wdgkpdAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFeJOfdrNDX2BcZSnircA2C0K4l3FJfy8FkA6%2FBnYwkxtCAqUB1VESdgodrsitzX5sYB%2BfzQbM6ZKZh6vvMnINxUlG%2FU7WtaDo9nVmm9dDxzC89%2BLkJjjGXxge9RniW7rIII605Ed0Z5GWnysU3VXAunBjTFtXcoEMEamFHtPOY%2FEtyRwWDu8x%2Fk56cyKK3EUhRD%2BN9Yr6g0Hs02o7ZrcnvkXg48lpu7%2BbaH0ZDBX5%2FCWlJra31yT%2FNVcfz%2Fjfq2QIbP6eio7pSLh%2BGE9Wc1JcFjry4XH4KmsKz%2BWyUwc4fITWJxCPFI%2BVdxMSb13KWMWm2gltaRBHiZh%2FmaK3hyXf1YX1VCaYioGW5uDlPLxPfrsd3iFNnHLz3o4c6tg4lMbEsKBSinAMXgvrLmwAYol4JOh4nNDr5E0YqPRbK%2BgAvxHjTR0vaHII2ZxMZUzn1EDUaUcPuulbc03ZkB50M64R2COrFHVrBgcSq7kbvNCV2XIg8UxMBkgE%2F9YctcQgyMmSgV4zYG5yqO2jOrpf41u6wAeX0wDeapSvSyKERk1anqmT4TZr4pTPFosNBvQiXaMidsmq3DZtXYa4ICSp4Yh%2BCQ0sDjPY%2BSPB6USVIqrDB9Dy9B76JnynKrhsaCrm6mdI7OxsUM0peEpKyeMM6Uw8kGOqUBzNDyt94hyXg6JLr81frsg2xUX2GV2Fmrbn9acHR3taPSmebrtOgKdzcvoASh9ww3OXT4pgXlok%2BoDmZqLxbSOI8s5e5%2FXSICLkpb2NclhF7WAldf8MAEkSDeqHUgC3dT%2FhUiWVOxlivPu2WuKwYDNPDmyVIoNFvmQZya1CcM7%2B%2FbQdWKfocrebsgkYOXTisZKgfFF2N3BR0YpO2PFOV4mBGAclfs&X-Amz-Signature=a119878b2c9c49d926eaa16e31c76a1851d1bd2827123735d67d240fcbcdd69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

