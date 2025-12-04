---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIAV2W3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDp1ZvrDiHuAKduI6zKqBcWzyHrhon4tuYrkayUiwkyQAiEA9oyBgZxe4azBc9PSxmX%2BIP%2FcXl1u%2BXHIHx1uEkd3Ij0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFIGO0yJlAYH6WkP1SrcA0dSO9O6HiSnFovdVKiAYIfbxu5N%2F0mX1aUR30GYC5Bfs7JUvZ4scMqMISbCDiP93AZpejJAAseCKQeBsft1x9hk0M12y98IoGlViBOjnbJYQoZ4bJ8a%2FjzH%2BjWCXyxs0Kr2pe9xdxQ1dH4lxlWJSJJ%2BEE99sluLWnTQy9lMfl%2Bv9r5tCIuuwgnzGOYCTr4S%2BZdUqpIl%2FND2lZluoewLpuHLakr%2FvuC67M739Wzc8ret2D3RZt2DB2uybUUXcrS7dpFtwyX2NlIPgd0M7os7%2BOUqz0A%2BC1zJxXyz%2BrrvvuJRTlzSRTTKqwgE9Z05h%2Fcny%2FX0M29N6t7v2wL2VNPEM%2Fdu4tGz8nXF8w1DbbdkJmrTaVw2AJsINqxlN9ldz25HyiInErwE5EMCPvB0qXCA7tl5kfk9zgR7GwTZyxE%2FHvoYGq6GkAvr16L2tLTrhGzyl1WZB2INWX4Rc%2BssDhSLEzkmgtyW2y9QskVZ6TT9AMeOhmZE7V5%2B0%2FQAmFSMGmy4sT2UDovhIPrsRD%2BEawQOAa83AKHEW4vtc4a5vj7FVauaYqVPEMF%2FyR%2F%2FfPDQt%2Fk8dDX%2Bx7DKi6GlStAnBfwhKf5D%2FszBje15pv3pKHQPG1xPP5lMNr9MlTIAth6jMLq1w8kGOqUBL7soy%2FmWXyRlGtH%2Fhe%2FR%2FKSWkZdj5eCYLcRC1GFOaKDQtBo3EoMTzMdV%2FWGepOSLgMNiRqsaNPS7Tc%2B%2BMvPf7%2Bn6mcagj%2Bz%2Blj5QUHjSwz%2FI6ToRiA%2FWph1RaVBuBRYFA3NuDv18SwEpIlzMH2hreQLthJGt5OG3xPJWXTseya0nTEjbqMvmw0LsuQhTdLjfU8m9DA%2FkVnoN2l4LddUpD23RoTMZ&X-Amz-Signature=d0727355afc156003701b39e1746deb820e106e017e3451cf2b676318348659f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIAV2W3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDp1ZvrDiHuAKduI6zKqBcWzyHrhon4tuYrkayUiwkyQAiEA9oyBgZxe4azBc9PSxmX%2BIP%2FcXl1u%2BXHIHx1uEkd3Ij0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFIGO0yJlAYH6WkP1SrcA0dSO9O6HiSnFovdVKiAYIfbxu5N%2F0mX1aUR30GYC5Bfs7JUvZ4scMqMISbCDiP93AZpejJAAseCKQeBsft1x9hk0M12y98IoGlViBOjnbJYQoZ4bJ8a%2FjzH%2BjWCXyxs0Kr2pe9xdxQ1dH4lxlWJSJJ%2BEE99sluLWnTQy9lMfl%2Bv9r5tCIuuwgnzGOYCTr4S%2BZdUqpIl%2FND2lZluoewLpuHLakr%2FvuC67M739Wzc8ret2D3RZt2DB2uybUUXcrS7dpFtwyX2NlIPgd0M7os7%2BOUqz0A%2BC1zJxXyz%2BrrvvuJRTlzSRTTKqwgE9Z05h%2Fcny%2FX0M29N6t7v2wL2VNPEM%2Fdu4tGz8nXF8w1DbbdkJmrTaVw2AJsINqxlN9ldz25HyiInErwE5EMCPvB0qXCA7tl5kfk9zgR7GwTZyxE%2FHvoYGq6GkAvr16L2tLTrhGzyl1WZB2INWX4Rc%2BssDhSLEzkmgtyW2y9QskVZ6TT9AMeOhmZE7V5%2B0%2FQAmFSMGmy4sT2UDovhIPrsRD%2BEawQOAa83AKHEW4vtc4a5vj7FVauaYqVPEMF%2FyR%2F%2FfPDQt%2Fk8dDX%2Bx7DKi6GlStAnBfwhKf5D%2FszBje15pv3pKHQPG1xPP5lMNr9MlTIAth6jMLq1w8kGOqUBL7soy%2FmWXyRlGtH%2Fhe%2FR%2FKSWkZdj5eCYLcRC1GFOaKDQtBo3EoMTzMdV%2FWGepOSLgMNiRqsaNPS7Tc%2B%2BMvPf7%2Bn6mcagj%2Bz%2Blj5QUHjSwz%2FI6ToRiA%2FWph1RaVBuBRYFA3NuDv18SwEpIlzMH2hreQLthJGt5OG3xPJWXTseya0nTEjbqMvmw0LsuQhTdLjfU8m9DA%2FkVnoN2l4LddUpD23RoTMZ&X-Amz-Signature=ffc9db8179e1c7eb57ac11234043bda62a60102fccfbd9f0fabead820d1670f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

