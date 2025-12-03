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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQ4SORQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICrHTEzsoJ6qovKFl4Rru7VQ1e7irwWeVQjou7rFiZWBAiAqDkxCJcPZgmfKkzPFdVazYZgZTJ9X5NwN7nX2XibB6Cr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMySnfvFYEBk8BZhW9KtwDUXWkJ%2BW3yrCF0YULbDBrcklVQdmnt%2F%2BaGvp6z%2BR7%2F5850tLpUTKyrmRYAhj%2BoJuDqBvqmPPaZihlUewlR7JEeTbtwHK1syroOmycGRAUjq7aOZF1Dp7SKDiltv%2FYfgD4ZCbX%2FDFNWDHhK6%2FpquJrAv9TxFk90z0K63%2BZKcGSgh5K%2B7ArYHrctefhMrnXF2XC95vEdWy4OulXiXoQdLepJlNmQKhEQs99mSu03ylRiMBj6LoqIYHkLFnWO6h9um4CyxRphLAPLdnISOEh6NFCpB2tM3ZMvmnlH6S6441LphEtkFmYHwVIZnI5oW6GyQbpMdvvIwjOcJ8GEXgiz9Ykk7Vtpfufx9Gf88sUgqqmTSLaaFkN%2FnY5hWEmmgwq%2BU7HIH8%2FDS0AlCWu6jNy5SIxgpH5beGTqI5lAOVrTVOh8VyR0tBB9dEhVYf%2FLZqaWg5zm80HuzXHhpk%2BAZ1PeKN6WpfoyHKZoD8JE91730HEtAuVF0o6Y3NDanKXdAN4gfWjET80D03vzR1Sc5GvtYMvQTV1pTuhIgOee0WPVEg37NzKxslFsJFFw5AhYS1Ple4Z3l5L1SBuoR%2BMnLYtpwHej2597wyJw1oBX1Bh1rG%2FH7YGdczA6sWPmyxfri4w%2B9W%2FyQY6pgGqQrZOXlFwR%2BWpZf%2FTUZMCH1eQ8f2zisBP4T2mLbID%2FFTqCage3xkEK1NYHBCI3AenGIJOFDtLmgvTRDVmhMeBQIsHFYS%2FoTG9plpbDeNUfFUHqw3fcmmIdWMDyxlP6ob4LUy4DBy9jDAKZJriHE1ulXi%2FQCNoDrccv1eIcECoP9cQDFeyh5gdqoc71VegHo0I8K32lPT1uJRrJIGpQWx%2FAgyHizj4&X-Amz-Signature=bc352a1a6ed54f2f800b8827208c25acece3f71b8e0f4041219cda2da6d8aebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQ4SORQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCICrHTEzsoJ6qovKFl4Rru7VQ1e7irwWeVQjou7rFiZWBAiAqDkxCJcPZgmfKkzPFdVazYZgZTJ9X5NwN7nX2XibB6Cr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMySnfvFYEBk8BZhW9KtwDUXWkJ%2BW3yrCF0YULbDBrcklVQdmnt%2F%2BaGvp6z%2BR7%2F5850tLpUTKyrmRYAhj%2BoJuDqBvqmPPaZihlUewlR7JEeTbtwHK1syroOmycGRAUjq7aOZF1Dp7SKDiltv%2FYfgD4ZCbX%2FDFNWDHhK6%2FpquJrAv9TxFk90z0K63%2BZKcGSgh5K%2B7ArYHrctefhMrnXF2XC95vEdWy4OulXiXoQdLepJlNmQKhEQs99mSu03ylRiMBj6LoqIYHkLFnWO6h9um4CyxRphLAPLdnISOEh6NFCpB2tM3ZMvmnlH6S6441LphEtkFmYHwVIZnI5oW6GyQbpMdvvIwjOcJ8GEXgiz9Ykk7Vtpfufx9Gf88sUgqqmTSLaaFkN%2FnY5hWEmmgwq%2BU7HIH8%2FDS0AlCWu6jNy5SIxgpH5beGTqI5lAOVrTVOh8VyR0tBB9dEhVYf%2FLZqaWg5zm80HuzXHhpk%2BAZ1PeKN6WpfoyHKZoD8JE91730HEtAuVF0o6Y3NDanKXdAN4gfWjET80D03vzR1Sc5GvtYMvQTV1pTuhIgOee0WPVEg37NzKxslFsJFFw5AhYS1Ple4Z3l5L1SBuoR%2BMnLYtpwHej2597wyJw1oBX1Bh1rG%2FH7YGdczA6sWPmyxfri4w%2B9W%2FyQY6pgGqQrZOXlFwR%2BWpZf%2FTUZMCH1eQ8f2zisBP4T2mLbID%2FFTqCage3xkEK1NYHBCI3AenGIJOFDtLmgvTRDVmhMeBQIsHFYS%2FoTG9plpbDeNUfFUHqw3fcmmIdWMDyxlP6ob4LUy4DBy9jDAKZJriHE1ulXi%2FQCNoDrccv1eIcECoP9cQDFeyh5gdqoc71VegHo0I8K32lPT1uJRrJIGpQWx%2FAgyHizj4&X-Amz-Signature=fda74eb9c0d85d9b23c212351ed599679ebbba2f17fc751aee7b36cb2650b651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

