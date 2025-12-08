---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTGKFGY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfXV6%2ByEfcwQI3miHIbR3d5sug6jNM7v5xw6gctXuC%2FAiBjTSkt9aHyDxr%2FH6pllx2zd1liMvIQtlCH1WdRoDezfyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXHZ%2BdUaP4qqISXkwKtwDMaO%2BhM5pCd7xrCUlQ3KFUvfUZ2PZFYmeudDJpraMN1RwRPISfWeJei1Q9BuP1YlA8YUdy3Xqz9gY7IPf4mW6Iv11BJd2LdOzbyNB6tNONSdmjBzioNWXtBDVwl%2F2dqIUzEshedTCQJ5A3nlY4wg7q4QTuJeFcMbizS%2F9MuFNMVghITAzNOxH1oopemXOjF1ObwrXcrS507JgSgYmwP7tLdXQt2Qc7w8vOS96TI8s0S3qrncjPNtoRD9n0tbOwU3BdTikq2BNVIKTgowN2Zngmo4cWpCKVLvrncF%2FyPeVpJDY8hRJQlHjjMdAaiKcwh%2BFGLpuL2%2BgT6ljPu8G6oArDc7FVemJNWCMUl2ZP%2FEDTVpFhkmdI9MOlYXFGGYMdmnN93yCPRNfTfy4EczoWHhTNT8odffDOEttXXZdNsBEZGp2Vrov0lbK9E5E05RrpX7QG2oRVpKw3sNenVRRY8vuKt4qzRuYJbtsfbjtbhCB0fRfxaO7a6HDytfctSYm8u9jTG8Nv71Rm02rPRDy2rxye5wSwGjKmaAqATDJCwSnwqriBH3TJ63NzQqoGj18cbH%2F2q1BsOrvFPdrSAzdExzqPc0IhYogI8H5KSeMg6Iv3V6%2FCaOJw8fWl0xYrs0whcHbyQY6pgEiSc%2FI%2BpyjPCi4UMYlzQv8xQdofgKRSvj4h09XDD7otKZV3DX7hIAF9vxaE6igtXl14yUyjx7N4KF3nLZ7ELwJsbbDx%2FmsTY8ySyDSRjIDX252Uh2oSbOJiNxVYt4xcz7PS9FpPNnZxCzf%2FJmFjdALOb8F2%2FRCOHWvpU9%2BqwDuM%2F0i2dQ644ebyBHyBoh7xdvgqbBdUZBvkc%2Bzxewc%2FMYsuc1W%2F1xC&X-Amz-Signature=0c17931460e884732c21c7ab9cc24e6c20d526e4971a6de0195cc4ff4b2f5661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTGKFGY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfXV6%2ByEfcwQI3miHIbR3d5sug6jNM7v5xw6gctXuC%2FAiBjTSkt9aHyDxr%2FH6pllx2zd1liMvIQtlCH1WdRoDezfyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXHZ%2BdUaP4qqISXkwKtwDMaO%2BhM5pCd7xrCUlQ3KFUvfUZ2PZFYmeudDJpraMN1RwRPISfWeJei1Q9BuP1YlA8YUdy3Xqz9gY7IPf4mW6Iv11BJd2LdOzbyNB6tNONSdmjBzioNWXtBDVwl%2F2dqIUzEshedTCQJ5A3nlY4wg7q4QTuJeFcMbizS%2F9MuFNMVghITAzNOxH1oopemXOjF1ObwrXcrS507JgSgYmwP7tLdXQt2Qc7w8vOS96TI8s0S3qrncjPNtoRD9n0tbOwU3BdTikq2BNVIKTgowN2Zngmo4cWpCKVLvrncF%2FyPeVpJDY8hRJQlHjjMdAaiKcwh%2BFGLpuL2%2BgT6ljPu8G6oArDc7FVemJNWCMUl2ZP%2FEDTVpFhkmdI9MOlYXFGGYMdmnN93yCPRNfTfy4EczoWHhTNT8odffDOEttXXZdNsBEZGp2Vrov0lbK9E5E05RrpX7QG2oRVpKw3sNenVRRY8vuKt4qzRuYJbtsfbjtbhCB0fRfxaO7a6HDytfctSYm8u9jTG8Nv71Rm02rPRDy2rxye5wSwGjKmaAqATDJCwSnwqriBH3TJ63NzQqoGj18cbH%2F2q1BsOrvFPdrSAzdExzqPc0IhYogI8H5KSeMg6Iv3V6%2FCaOJw8fWl0xYrs0whcHbyQY6pgEiSc%2FI%2BpyjPCi4UMYlzQv8xQdofgKRSvj4h09XDD7otKZV3DX7hIAF9vxaE6igtXl14yUyjx7N4KF3nLZ7ELwJsbbDx%2FmsTY8ySyDSRjIDX252Uh2oSbOJiNxVYt4xcz7PS9FpPNnZxCzf%2FJmFjdALOb8F2%2FRCOHWvpU9%2BqwDuM%2F0i2dQ644ebyBHyBoh7xdvgqbBdUZBvkc%2Bzxewc%2FMYsuc1W%2F1xC&X-Amz-Signature=d8abf5ec29926328200c1db9a5ff7e9284ddb8ef42aaf98bc0057af0a7f5ded4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

