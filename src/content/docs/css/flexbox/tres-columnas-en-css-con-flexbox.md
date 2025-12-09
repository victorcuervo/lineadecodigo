---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NSIVX5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWnhXYjZpXurqH7c1Xr0%2FodHkvNgmK9JXCp2qdVywurAiEAzwCaTw47HKoEVMm2HYbkT8MLrCDNoJKoPzBf6fTKqTQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdR35uiL2ziwIQebircA0m4ODD4l03ZRoF53J7gvTfZgviYeMVbEvLKXM1p0OWHhFxYhYRWNiIIvrUCX%2FnwYI1T0m0mFrp8Jm6eLAKta0sZjRbmJJrWa0BrYkF8MGgpd3vYvrTfrLYbiZn30klSZI1xln3obQN%2FYEfkV%2FMCH2YCifFXVGbuY8N0YxAZ8yKfLfX4ACzFi8fpdNsOcNGzHxXgy%2Bup%2BDIO4QC9Gj1JbjSXV4FJcRv91ZklHpvAr8Ic7Dal70%2BeLuc1S%2BmLDSAkq9hJ4o4tKZo96io0PluTTCkuq09qHCMztzwMvQkC%2FXTdVv0j%2FjGy71oTElYR3NBmrPuAfnGpPuekItP6hTVRkEvxUxUALw25slSVvN5n2Tdsp9G1XXLR80SrpuTz9k1NqdHVfQyRw6TDx3CgVJ5u7H%2BoDqwdl7m9cHb9kgBIIurS303FrSPCvgC5VUNKz40XHQ4HIvmnWpNS8Ozf4RvHv2LAVSzee9a3%2B4aSmHReFLBvzNxuckp%2F3d8wPhAIXc%2BhG9foetT4TvighAdaYyMJil93geraehfGspm9G61n3UA6KWm85eVZrKY5BE%2Btc7tBH3q%2BbTmmW548gtaVyWi5f%2BIdUjn16Ga2XX0SxvA5P4eHjRpx3IrLdP5DYbT7MPKI38kGOqUBHCFWyAnTKRYx8FP%2FmsEfLMnjmSqhVvzRFUgwrd9XGX5FL9yNRhizSpBk6PAqqMjE%2FLX2n5fHUB7meAQliy9wpmoFj383XTGeloBeKZ4eygu3Jxl4zCALwh%2BE5GJnhG3gfLIY7NgFxFNeangyGl4%2BbV99nGwuQ4EXhRghKGxlNmhepsKecK%2BqdcLVpOyqUoxMBsA9Z49mlrFx3%2Bisw6KEVnnELDt3&X-Amz-Signature=b41f82f4ce2fc27b2ed789c425acae1badc804b60f13a00e92f500194df42f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NSIVX5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWnhXYjZpXurqH7c1Xr0%2FodHkvNgmK9JXCp2qdVywurAiEAzwCaTw47HKoEVMm2HYbkT8MLrCDNoJKoPzBf6fTKqTQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdR35uiL2ziwIQebircA0m4ODD4l03ZRoF53J7gvTfZgviYeMVbEvLKXM1p0OWHhFxYhYRWNiIIvrUCX%2FnwYI1T0m0mFrp8Jm6eLAKta0sZjRbmJJrWa0BrYkF8MGgpd3vYvrTfrLYbiZn30klSZI1xln3obQN%2FYEfkV%2FMCH2YCifFXVGbuY8N0YxAZ8yKfLfX4ACzFi8fpdNsOcNGzHxXgy%2Bup%2BDIO4QC9Gj1JbjSXV4FJcRv91ZklHpvAr8Ic7Dal70%2BeLuc1S%2BmLDSAkq9hJ4o4tKZo96io0PluTTCkuq09qHCMztzwMvQkC%2FXTdVv0j%2FjGy71oTElYR3NBmrPuAfnGpPuekItP6hTVRkEvxUxUALw25slSVvN5n2Tdsp9G1XXLR80SrpuTz9k1NqdHVfQyRw6TDx3CgVJ5u7H%2BoDqwdl7m9cHb9kgBIIurS303FrSPCvgC5VUNKz40XHQ4HIvmnWpNS8Ozf4RvHv2LAVSzee9a3%2B4aSmHReFLBvzNxuckp%2F3d8wPhAIXc%2BhG9foetT4TvighAdaYyMJil93geraehfGspm9G61n3UA6KWm85eVZrKY5BE%2Btc7tBH3q%2BbTmmW548gtaVyWi5f%2BIdUjn16Ga2XX0SxvA5P4eHjRpx3IrLdP5DYbT7MPKI38kGOqUBHCFWyAnTKRYx8FP%2FmsEfLMnjmSqhVvzRFUgwrd9XGX5FL9yNRhizSpBk6PAqqMjE%2FLX2n5fHUB7meAQliy9wpmoFj383XTGeloBeKZ4eygu3Jxl4zCALwh%2BE5GJnhG3gfLIY7NgFxFNeangyGl4%2BbV99nGwuQ4EXhRghKGxlNmhepsKecK%2BqdcLVpOyqUoxMBsA9Z49mlrFx3%2Bisw6KEVnnELDt3&X-Amz-Signature=7077bb41ef50652612dfc63011b65567e677fa1be4553df085b1e534a2e57e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

