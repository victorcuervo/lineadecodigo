---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUR2YU3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BJlQ3kRDVnDcPPfiAPacexWMnJlyAQKmejaQgt4PpAIgQw1bdlJQQlSFPihUswg3E6gV8xzjJfOM9w9itjyJHSoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6lSfAwmQl6YG15lSrcA1QeDtr3pjB9r%2BP1GQIB2m20X5gWCT9dUEstrayd%2FiWwBIPxZ7FENBi3GZDr%2BlciIrOuUVJwPyObT%2B4Xjom%2Byte2foNK1iL%2F1Tzvg3nBFTWk5X%2FprCiCujGCe3BLk5MjfN%2BTTGeIEper1AdjuPUZbRpkJLZowD9d7pzc%2FBiF2krldqUEn4s5hG6vuKb2tRNO3tBh0SfKbY8QWHg89pFPafTPhBuW1Zb7kJ7D1rJ6wMaHS2OV8gMX3Rjpf791hZLDBn4EbmyVqFURxYPJSw5Ard%2FxrNM9aVOvnGxeY5FvZui0wXr7RKffnXoiHMigfDQ9ncybXZ2MeHO%2FU7ziykr1qeXBjxy%2FIV2Zz1wxbnreAH4C6momCbts1UjH5vjasF3aqB9s1G26fGY8PnCGoiZVpV1egCSRRol9Xr6mjnQY9C%2B1JWHIYzAvVhGuRztOO6JcCdcGmokJvBYhut1UpLMTgCNUu1j8o%2FhBPSz%2BTQOEguM%2BaZlvnx26ZmlHi2D0cVLh%2BG8qHwwkM7pZXHlYn21TNzz1QXdQI%2BInBMbfTOwo%2FwTz4jIfL16OTUZab64pxDMHPDvOMLzFs1%2BIv9d7OQwZKJBQLy8u4EfGzs9B59xOKnwbAbT0OMPaZL%2FgLh4QMPvG18kGOqUBS9mwrJ%2BoBFaRtSN8aQIZlI%2BOOSX2kG4Heb0ugT25HekEVQDgr3vLhN%2BrHVcffQ%2BTSJAXhWjhUvTAdeG6ztUqlMVzyda3OhSzgl83QN3%2BFnddurdV3o0j2rOKZRmn4RB4FpHMM%2BvU41GY7z%2FyqRvW7LSqQjfTg7vNe4X1mnIQQ4YRmjSQhKl4pfzTX%2FgfXAOwzNOzNE%2Bz%2F3vCD0r%2Bdlt5SrMLaFSI&X-Amz-Signature=7c2c40c3c9cadab5effaff638da616fa5788d1bf81cb1f771f6dbe6814d2002a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUR2YU3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BJlQ3kRDVnDcPPfiAPacexWMnJlyAQKmejaQgt4PpAIgQw1bdlJQQlSFPihUswg3E6gV8xzjJfOM9w9itjyJHSoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6lSfAwmQl6YG15lSrcA1QeDtr3pjB9r%2BP1GQIB2m20X5gWCT9dUEstrayd%2FiWwBIPxZ7FENBi3GZDr%2BlciIrOuUVJwPyObT%2B4Xjom%2Byte2foNK1iL%2F1Tzvg3nBFTWk5X%2FprCiCujGCe3BLk5MjfN%2BTTGeIEper1AdjuPUZbRpkJLZowD9d7pzc%2FBiF2krldqUEn4s5hG6vuKb2tRNO3tBh0SfKbY8QWHg89pFPafTPhBuW1Zb7kJ7D1rJ6wMaHS2OV8gMX3Rjpf791hZLDBn4EbmyVqFURxYPJSw5Ard%2FxrNM9aVOvnGxeY5FvZui0wXr7RKffnXoiHMigfDQ9ncybXZ2MeHO%2FU7ziykr1qeXBjxy%2FIV2Zz1wxbnreAH4C6momCbts1UjH5vjasF3aqB9s1G26fGY8PnCGoiZVpV1egCSRRol9Xr6mjnQY9C%2B1JWHIYzAvVhGuRztOO6JcCdcGmokJvBYhut1UpLMTgCNUu1j8o%2FhBPSz%2BTQOEguM%2BaZlvnx26ZmlHi2D0cVLh%2BG8qHwwkM7pZXHlYn21TNzz1QXdQI%2BInBMbfTOwo%2FwTz4jIfL16OTUZab64pxDMHPDvOMLzFs1%2BIv9d7OQwZKJBQLy8u4EfGzs9B59xOKnwbAbT0OMPaZL%2FgLh4QMPvG18kGOqUBS9mwrJ%2BoBFaRtSN8aQIZlI%2BOOSX2kG4Heb0ugT25HekEVQDgr3vLhN%2BrHVcffQ%2BTSJAXhWjhUvTAdeG6ztUqlMVzyda3OhSzgl83QN3%2BFnddurdV3o0j2rOKZRmn4RB4FpHMM%2BvU41GY7z%2FyqRvW7LSqQjfTg7vNe4X1mnIQQ4YRmjSQhKl4pfzTX%2FgfXAOwzNOzNE%2Bz%2F3vCD0r%2Bdlt5SrMLaFSI&X-Amz-Signature=71de1f17dc1ae1ea59ddbccc5f7b137166eaf9c07b57a00effaddbbbaa6c6ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

