---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOPOHAF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQ5vTEYQAkYdNtv7yh0PllL9UBUgXgGNe92iQDdWgNgIgVFkgxTgxRauUHevhYpBWJzoAKTcLKVtvpP4uO32N17sqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8jlAXlJ22l8f%2FLJSrcA56g%2B6hH%2Blh%2FUCl3QhbH0sUEWWrRilBLScB2sQAQ5JIkzMKR2Ht%2BrOSlGI7spD0dET38gGML9WqFqNmPcNhY5ZntqXH7%2B2zMV7pZHhD188gJnmNqOEs2hcKqj9IO8mC%2FxLWmtlCrpWzUDJdnqSg3%2FFAvxYf3zmGAgVRyNPtnADTNcd%2FHzHX7FYevVz%2BcJtnoUenIIf%2FYbujq3qbqXPatDnkmH505238gQ3N2rbf2ev08Nn%2FbHBH%2F2bUocMzpCk1vl21Cnfx0107cVuF9lqcic9gJX3oiM1%2BaUh%2Fg71WCF%2FXABdqEWiPRWjTVmD2qiub1rzBORDBeXeKeMh%2FUoakYDdsur7pWXXhCGLkFRKSCp0tTKqXUcgS0Seb5TFfN23sQx6ShXXdY0qeuEQR3TiA8djbY77RAWtHKNvRP%2BrNjMwsJtaocRAOic1f3dO9F6GhUE4dCambmo09HuM40i5Lwoq4DpOJl50Y2%2FxaUYMdpCQAtC3FK6wJA0Ocr7BKWcWg4mI3wHUelzo0nkxvqyaZoBR8%2BC9b3iWBmAlildvyhv%2Bwd8VYFsI12C6sQhAPOBg9XGeSj%2Bein%2BPeWbEx5q9gCHSgmJzKnNrrfcTntoa50ctoQ1RW604%2BBCWXR2xlUMKvu2MkGOqUB6Uk1R90lWy8qJYAOYtR3304GpAyda5%2F2VL4X6L0ESNPlSWgqmOwH1n7RtHvceATN%2F7zihnZgP1LyMciD%2FfymVCCvw3x4Q57y65LGAxxKOCvs1Dlcp0zH4OnmfS1rYbsfIsUNCL834uS3D2oUtrl8PQ8nLexj8PNdw4DMb5FBXAaaxu%2F9xnUTD3J%2FneXmg%2FqDc%2BfUlpyYuv0FOs8o26pwoPMuJTKy&X-Amz-Signature=b836759fbd68d0788dca21de9758b44efab176c7faf2dd0c22b5143adcfd795b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOPOHAF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQ5vTEYQAkYdNtv7yh0PllL9UBUgXgGNe92iQDdWgNgIgVFkgxTgxRauUHevhYpBWJzoAKTcLKVtvpP4uO32N17sqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8jlAXlJ22l8f%2FLJSrcA56g%2B6hH%2Blh%2FUCl3QhbH0sUEWWrRilBLScB2sQAQ5JIkzMKR2Ht%2BrOSlGI7spD0dET38gGML9WqFqNmPcNhY5ZntqXH7%2B2zMV7pZHhD188gJnmNqOEs2hcKqj9IO8mC%2FxLWmtlCrpWzUDJdnqSg3%2FFAvxYf3zmGAgVRyNPtnADTNcd%2FHzHX7FYevVz%2BcJtnoUenIIf%2FYbujq3qbqXPatDnkmH505238gQ3N2rbf2ev08Nn%2FbHBH%2F2bUocMzpCk1vl21Cnfx0107cVuF9lqcic9gJX3oiM1%2BaUh%2Fg71WCF%2FXABdqEWiPRWjTVmD2qiub1rzBORDBeXeKeMh%2FUoakYDdsur7pWXXhCGLkFRKSCp0tTKqXUcgS0Seb5TFfN23sQx6ShXXdY0qeuEQR3TiA8djbY77RAWtHKNvRP%2BrNjMwsJtaocRAOic1f3dO9F6GhUE4dCambmo09HuM40i5Lwoq4DpOJl50Y2%2FxaUYMdpCQAtC3FK6wJA0Ocr7BKWcWg4mI3wHUelzo0nkxvqyaZoBR8%2BC9b3iWBmAlildvyhv%2Bwd8VYFsI12C6sQhAPOBg9XGeSj%2Bein%2BPeWbEx5q9gCHSgmJzKnNrrfcTntoa50ctoQ1RW604%2BBCWXR2xlUMKvu2MkGOqUB6Uk1R90lWy8qJYAOYtR3304GpAyda5%2F2VL4X6L0ESNPlSWgqmOwH1n7RtHvceATN%2F7zihnZgP1LyMciD%2FfymVCCvw3x4Q57y65LGAxxKOCvs1Dlcp0zH4OnmfS1rYbsfIsUNCL834uS3D2oUtrl8PQ8nLexj8PNdw4DMb5FBXAaaxu%2F9xnUTD3J%2FneXmg%2FqDc%2BfUlpyYuv0FOs8o26pwoPMuJTKy&X-Amz-Signature=c66b51a61f95b8290d59659f83044e9d33753a73e0ba6875b4449a258fd3669e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

