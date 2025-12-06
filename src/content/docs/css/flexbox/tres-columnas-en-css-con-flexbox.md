---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNS2QEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6Crz%2F8qwcQkiCHVQ1JW92C7h0Z7f5WzD6qPTPbBHILAiEAzVDS9%2FqRIVP4Tj4WoFPuL317Ovk0r%2BZhc5bIBC1A%2Bdgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDALIFA4XPLb1UgvLTircA4Qr4IS9U5Vp1yatei4QZj0mSBtDYShbFyzsW4PHCFZxTnq5FbAAJWeJTKLND8m%2FB4f2uAFdfnJbQMmc1gSf9nE9rODke6W9Q0rikIz7gztHeoCQptu1s5jnMwJ2uWagcnm1pV0xVcH321ItvjbiNGfRLZO7seKXhYhR1%2FZ7vAxIT4BHBUUBexfBA4Y3eWerzdCr5jPpPAtQJVz%2F7R97M%2BmXGL9m6c9XbwrkBQIhyVnKNPvEASna5GeaXj1E4S9uQ5CNFiVtn2exLdfo47gaN%2BCTH0HhmbvYdCEiLlTDRHQMtKlLhBRL4M5ziMseKdSpRPpr9e9nOL5qbkR74W9sdRMjBr9et0JsL75wxfRYH%2B75pfk9OeKRXMu3q%2F5QX0xTt7aL7SgSVvxw4YAvn8j5vHKatRY3Jm2PYc88i6s0fe3NVPsZaXJ87pMdvc1mJ2f5gypjt5zd3goO4DdMZBv0hKDBrtXv2mdPYsNkMW8244dJB2TA6XSqIQgxwem%2Fx5bQ9vRYbj%2FiH%2BamZgkjf3u%2BLS7QqsAp7qANRi7Gf1B5gCHgSLUl8c3BMwblhSY5qe65eMOg9fHtUNJwsKnNdMMnojZ4eARR30j2d5H%2FXCbgt9sa60rDPxL9j%2FKRS74cMIG10ckGOqUBWkhmK3m8GgfCupPBaz7%2BBj4LrTNVwQLWyfxQUyhJtaK1RTpwTPPbWP6zIOobjKTXPUrzAdGy63FyHTwYORYF1KTTBWgwL85tJqNhZqRK6FqYrRuaGVTaDRIhHiT7VOLjyJBt4p5uB%2FMeG6Tm6hKK1PCS7tKR1qcQoxKqzezVMln2j0XOmS2XJ4bKhNWXMg00mYWqITGQtRuHz2mlvooS%2F7KDDJHb&X-Amz-Signature=9bcb2b86361592dc93eeaae307456808196787377ffd34e4d0ea746afc458310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNS2QEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6Crz%2F8qwcQkiCHVQ1JW92C7h0Z7f5WzD6qPTPbBHILAiEAzVDS9%2FqRIVP4Tj4WoFPuL317Ovk0r%2BZhc5bIBC1A%2Bdgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDALIFA4XPLb1UgvLTircA4Qr4IS9U5Vp1yatei4QZj0mSBtDYShbFyzsW4PHCFZxTnq5FbAAJWeJTKLND8m%2FB4f2uAFdfnJbQMmc1gSf9nE9rODke6W9Q0rikIz7gztHeoCQptu1s5jnMwJ2uWagcnm1pV0xVcH321ItvjbiNGfRLZO7seKXhYhR1%2FZ7vAxIT4BHBUUBexfBA4Y3eWerzdCr5jPpPAtQJVz%2F7R97M%2BmXGL9m6c9XbwrkBQIhyVnKNPvEASna5GeaXj1E4S9uQ5CNFiVtn2exLdfo47gaN%2BCTH0HhmbvYdCEiLlTDRHQMtKlLhBRL4M5ziMseKdSpRPpr9e9nOL5qbkR74W9sdRMjBr9et0JsL75wxfRYH%2B75pfk9OeKRXMu3q%2F5QX0xTt7aL7SgSVvxw4YAvn8j5vHKatRY3Jm2PYc88i6s0fe3NVPsZaXJ87pMdvc1mJ2f5gypjt5zd3goO4DdMZBv0hKDBrtXv2mdPYsNkMW8244dJB2TA6XSqIQgxwem%2Fx5bQ9vRYbj%2FiH%2BamZgkjf3u%2BLS7QqsAp7qANRi7Gf1B5gCHgSLUl8c3BMwblhSY5qe65eMOg9fHtUNJwsKnNdMMnojZ4eARR30j2d5H%2FXCbgt9sa60rDPxL9j%2FKRS74cMIG10ckGOqUBWkhmK3m8GgfCupPBaz7%2BBj4LrTNVwQLWyfxQUyhJtaK1RTpwTPPbWP6zIOobjKTXPUrzAdGy63FyHTwYORYF1KTTBWgwL85tJqNhZqRK6FqYrRuaGVTaDRIhHiT7VOLjyJBt4p5uB%2FMeG6Tm6hKK1PCS7tKR1qcQoxKqzezVMln2j0XOmS2XJ4bKhNWXMg00mYWqITGQtRuHz2mlvooS%2F7KDDJHb&X-Amz-Signature=8f5b09979845397e6817c8c71254af229ae7e7c0e41bb6629e9d0115f599340d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

