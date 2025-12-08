---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUZTZ65%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYlFs3%2F%2BGEfwwrxfVM3AoIlyTRO%2BvOJXicG6jU6Je%2BlwIhALPjqD5Tx8XnFY8w9BOr4O%2BKpFF%2FcbxTrnxUqYAqOznXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6Wj%2BNUoZj2tsBBUq3AM%2F6pcK4fb6aP4uYIIwV4mZl921vKjE2kLXhfAb18%2Bni2FpM%2FmhF6vZUvDupMRhmIZhEG1Ja%2FCwItoAZANiu9h4unb6vmzyjidrnSWZzKzpLiGagF7vxtHwPZl2JWmi0cvWwz88DvSoDc%2BH0aPQm3Sqs9V00taXHj8WTXF4JdxZ4oIbZ9pCamXRGoqMEhMdDi3wm8CLqRNqu1iC9N5gU8nHMEyqOyZZQxs1n%2BAsIH%2BBJIvHI2aPxZ1Yoy%2BAtwBNCHpu4A%2F1SC%2B682RXg5xcE2b80%2B4fCVOij%2Fr%2BU7dxOpUti1cSndZNy83k2NZQY4Xzg5%2FadFkN%2BNltiJBgn5dES4s8SQfsQM6VRuYr%2BaYTIAFYqmwZP7NKIk9DmNxC0C9JtjFsH4wWa%2BF3PLjjuahiQ6sNcaYj77UnS1moX1PzhuJEOVxABNJ2HC1QJ3T1AvK%2FH4f%2BX0EuepQwlJhoDt7D4s7DksPAtSz6SvknNyond06p0z7e9qZhGv7fj%2BSqKb9jyNNB9gFTsIjEl%2Ba%2Bj7SVpTCvwyKJyPL6%2B1z2mNv6xMi9u0im0DZgt%2BA3%2ByPL93jJavC2sAIVu72%2Bw24tTzcZRdjtk0vI57r4uduWAVppF964kxcERNU9%2FuASGChrJDCgtNzJBjqkAT3cL6Wch9nmvFipRxKK21B13JQDgsUFg0jTLUJdDwUWPIVwWwCdY9TG07S0JMHEEztaIL4B75D5IdD%2Ff000vp5H4t2C89gJprW2QAReDXi3tqqF98yN0u74IvjjJK2Baspn%2FB3Ll%2FD%2BFKoTnOxismxxH9d9O0cOSiLKfZwGjRP948BsT1XVQwLm3fOcLP1SBMYRafjQAW2FOAWNcaHN5D1FPDWe&X-Amz-Signature=5442a5e9655f1686fda59d6ca6395bc3cd51272003da73f1d3e611ae17ea9c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUZTZ65%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYlFs3%2F%2BGEfwwrxfVM3AoIlyTRO%2BvOJXicG6jU6Je%2BlwIhALPjqD5Tx8XnFY8w9BOr4O%2BKpFF%2FcbxTrnxUqYAqOznXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC6Wj%2BNUoZj2tsBBUq3AM%2F6pcK4fb6aP4uYIIwV4mZl921vKjE2kLXhfAb18%2Bni2FpM%2FmhF6vZUvDupMRhmIZhEG1Ja%2FCwItoAZANiu9h4unb6vmzyjidrnSWZzKzpLiGagF7vxtHwPZl2JWmi0cvWwz88DvSoDc%2BH0aPQm3Sqs9V00taXHj8WTXF4JdxZ4oIbZ9pCamXRGoqMEhMdDi3wm8CLqRNqu1iC9N5gU8nHMEyqOyZZQxs1n%2BAsIH%2BBJIvHI2aPxZ1Yoy%2BAtwBNCHpu4A%2F1SC%2B682RXg5xcE2b80%2B4fCVOij%2Fr%2BU7dxOpUti1cSndZNy83k2NZQY4Xzg5%2FadFkN%2BNltiJBgn5dES4s8SQfsQM6VRuYr%2BaYTIAFYqmwZP7NKIk9DmNxC0C9JtjFsH4wWa%2BF3PLjjuahiQ6sNcaYj77UnS1moX1PzhuJEOVxABNJ2HC1QJ3T1AvK%2FH4f%2BX0EuepQwlJhoDt7D4s7DksPAtSz6SvknNyond06p0z7e9qZhGv7fj%2BSqKb9jyNNB9gFTsIjEl%2Ba%2Bj7SVpTCvwyKJyPL6%2B1z2mNv6xMi9u0im0DZgt%2BA3%2ByPL93jJavC2sAIVu72%2Bw24tTzcZRdjtk0vI57r4uduWAVppF964kxcERNU9%2FuASGChrJDCgtNzJBjqkAT3cL6Wch9nmvFipRxKK21B13JQDgsUFg0jTLUJdDwUWPIVwWwCdY9TG07S0JMHEEztaIL4B75D5IdD%2Ff000vp5H4t2C89gJprW2QAReDXi3tqqF98yN0u74IvjjJK2Baspn%2FB3Ll%2FD%2BFKoTnOxismxxH9d9O0cOSiLKfZwGjRP948BsT1XVQwLm3fOcLP1SBMYRafjQAW2FOAWNcaHN5D1FPDWe&X-Amz-Signature=3c717e92641898690bdd0becd848a28b656889aeae057438f3753fbf6e71c4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

