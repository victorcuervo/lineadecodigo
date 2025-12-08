---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTBCX3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCseReJ9AlfzyFCymRltmamdCu%2BmUlsMlKXjVAQGvoT2AIgUrCqyrXN6CXbDF6OpEcQJTL8bGwUvY4IXy3haV1r%2FbcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK9FucDrhnwyg%2BWAyrcAzjyYrUNUiFD%2BC7vFtGx7zb7zWNtRV%2FV8xbrOK7qyVF3Vzc%2BpFHu1Vg8M6PS5JR3gOwMBBhtb3OZ6k%2FpaBEplP6tEToKMOAwJyVDEx%2FEfcYuyIuIgYCpL0eeszSNhVvMWz5LKs%2Bs3bHUiud1eqbcK5Lx5jIukx7EA7mN3EG20Shlr2Wf3KB9JdI1yRFiz5rLhxHxrILMfypaPzadCjCItA%2BY7yGBNb2oREPpXzW2MIRE02HW4Q3bWkyPrUn%2BV0mhbubJz8s6yg9xkI%2B2Ivxa670NFkNNcc5kc0BiYyZL7Bs69vwUHsajI84gr7K6q332Tu7zL4ZzCiEzJetL2K%2FPOo56FKt8RsJJD%2FsHsFUg3RJmsZh2SOiF92uB0Jm%2BtHDSRAA72oSsyEAvY3bdkldT5r4m1CMp6PIBywhndqHL%2Fv%2FReTTAye0BVS5O6plV8iDgGl1wNSrn8YEHY5lL7DRpQx%2Bi3BmOo3xTWJR21fUID0JyAXgqwwUZkJlu4d%2B58mKcuvhU9qTR1NDF0YOiDa%2FBaKdtavJUJLnczGlknCeputq%2FgEBiB2fH51%2BFWIA1qo5zuIzX81y8wfL0pGAyWA6VJTaGkHMx%2FM4RngmmU6n1KvEUJ3dHURUxrVq1Xi9%2BMNzR2MkGOqUBYrwfKlDPMN1w%2BmU5pce%2BSUIIFs0KoRaA0zhgYXtOvyBQpEkAshLz8BpLOyTJejssw72mBdq9MG2RT9q3SiumnET4ZIG1FG7vzfhNZpvaDTMChqoS%2FpG22AvagaQ58iLhCBx562vQ3uMglqhP1mIX8FqS6scQIbdqh7vAf7FmnmO1X%2Bna7%2Fm%2FHcAlEC9S%2FYoEQZfNSQCXo9%2F7LnPCLlBIEG6f0ZNi&X-Amz-Signature=d5c916aafab9795091221c1fb1ed9e835a1dbd4983ced9563afb3a27055874b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTBCX3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCseReJ9AlfzyFCymRltmamdCu%2BmUlsMlKXjVAQGvoT2AIgUrCqyrXN6CXbDF6OpEcQJTL8bGwUvY4IXy3haV1r%2FbcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAK9FucDrhnwyg%2BWAyrcAzjyYrUNUiFD%2BC7vFtGx7zb7zWNtRV%2FV8xbrOK7qyVF3Vzc%2BpFHu1Vg8M6PS5JR3gOwMBBhtb3OZ6k%2FpaBEplP6tEToKMOAwJyVDEx%2FEfcYuyIuIgYCpL0eeszSNhVvMWz5LKs%2Bs3bHUiud1eqbcK5Lx5jIukx7EA7mN3EG20Shlr2Wf3KB9JdI1yRFiz5rLhxHxrILMfypaPzadCjCItA%2BY7yGBNb2oREPpXzW2MIRE02HW4Q3bWkyPrUn%2BV0mhbubJz8s6yg9xkI%2B2Ivxa670NFkNNcc5kc0BiYyZL7Bs69vwUHsajI84gr7K6q332Tu7zL4ZzCiEzJetL2K%2FPOo56FKt8RsJJD%2FsHsFUg3RJmsZh2SOiF92uB0Jm%2BtHDSRAA72oSsyEAvY3bdkldT5r4m1CMp6PIBywhndqHL%2Fv%2FReTTAye0BVS5O6plV8iDgGl1wNSrn8YEHY5lL7DRpQx%2Bi3BmOo3xTWJR21fUID0JyAXgqwwUZkJlu4d%2B58mKcuvhU9qTR1NDF0YOiDa%2FBaKdtavJUJLnczGlknCeputq%2FgEBiB2fH51%2BFWIA1qo5zuIzX81y8wfL0pGAyWA6VJTaGkHMx%2FM4RngmmU6n1KvEUJ3dHURUxrVq1Xi9%2BMNzR2MkGOqUBYrwfKlDPMN1w%2BmU5pce%2BSUIIFs0KoRaA0zhgYXtOvyBQpEkAshLz8BpLOyTJejssw72mBdq9MG2RT9q3SiumnET4ZIG1FG7vzfhNZpvaDTMChqoS%2FpG22AvagaQ58iLhCBx562vQ3uMglqhP1mIX8FqS6scQIbdqh7vAf7FmnmO1X%2Bna7%2Fm%2FHcAlEC9S%2FYoEQZfNSQCXo9%2F7LnPCLlBIEG6f0ZNi&X-Amz-Signature=533a68e246a45eabc824ac1d14a47afd36743c03487bc0260bbda7b88a777da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

