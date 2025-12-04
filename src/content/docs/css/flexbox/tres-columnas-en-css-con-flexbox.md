---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRJMTET%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPM2M3BW1SzfSmtqQb6mhPanell%2FQJrnc%2FuBCTLpcfSQIhAMAtMh16ukGR6EfdBE0aZBRSOahYDR7CFueDMkEPr18JKv8DCE8QABoMNjM3NDIzMTgzODA1Igw%2FxKn07FhY6ht8DxYq3APhKzZLF%2FYC%2FQfcLyVmVrpWwB3u57lAZd%2FW8NoP1sOGjwvwRXSeqWRLqsC2YBpf2s%2FQJwzjjPivMh1JmcBGA5%2BoSpQJgYbtKV94VY17jrv5PWNNX67iyIYdHUsx9XbC9SrVU%2BfzhktwOs7J9iqSN2gcSH%2Bg97poUt9HpP0XjfhqGu%2BYlrOFX4NFCNV7PFWYZG2NCUGsUYQSFAe9xuTZyKoYyTz3WxncFuKv07neoX9Rx0oZbkYBucQHZRJIuh%2BQUnwDT7s3bOwbKh9AhaZKZvnMShzdg3sj4dU8GMbGF0bzi3RliZWEsLffoUmFXDawYQ0leHu159cg2nptqRA0hn3H70n8GcAPQOWxwr5vqJysdC%2FBv6%2FNXlMne9qtvWpxg5k6Jf1FaOH%2FIuTAbPW2Ss0Vmrwn%2BXLqUkbx%2F%2F2UUrmqNmmsNGCzPnjwX3%2FXI2zBYStowOMjfSwLokHJXGHxgjHNdCCGjBKZ5NmEB78l36AcBQ1Gz1TspvRj%2Ba4v002KQYjZyWxg8TJDSdi73q6uhzLctPx1ApwZ3l%2FL%2BWYvPSp4P8nW6rVUqr%2BoXYEYxkVSWIivO%2BKbkuf%2F1xHHB3G9v5s8ZdKBwE2b5I%2BNc1BNOC0okDjw%2Fa95O8pbs6o4ETCzjMjJBjqkASO57T24wCUqVHPpRYHAmxs6oD8IDh6yy%2BJwb%2FEJIe8xq3UUnvJqMDbh%2BEeP4huFqL3aemBBQz4eJxTr2gJ%2FJMrhIbZKecVxuknUsVzyGL2b0EC7YXAe8tU3cvCmJpMAhfAc4bXs30FYk1rlGHwheC5EhNpdJNdKPL%2Fvpyubf8IfHrfdiQbavbCLo3qN9xXmhF%2BI3CoDXN24SCNgskKvUo2tAtu%2F&X-Amz-Signature=5ada979438f98fb00ac221db7e816f80cf479ead2313a0e8f54494ee00a6176a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRJMTET%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPM2M3BW1SzfSmtqQb6mhPanell%2FQJrnc%2FuBCTLpcfSQIhAMAtMh16ukGR6EfdBE0aZBRSOahYDR7CFueDMkEPr18JKv8DCE8QABoMNjM3NDIzMTgzODA1Igw%2FxKn07FhY6ht8DxYq3APhKzZLF%2FYC%2FQfcLyVmVrpWwB3u57lAZd%2FW8NoP1sOGjwvwRXSeqWRLqsC2YBpf2s%2FQJwzjjPivMh1JmcBGA5%2BoSpQJgYbtKV94VY17jrv5PWNNX67iyIYdHUsx9XbC9SrVU%2BfzhktwOs7J9iqSN2gcSH%2Bg97poUt9HpP0XjfhqGu%2BYlrOFX4NFCNV7PFWYZG2NCUGsUYQSFAe9xuTZyKoYyTz3WxncFuKv07neoX9Rx0oZbkYBucQHZRJIuh%2BQUnwDT7s3bOwbKh9AhaZKZvnMShzdg3sj4dU8GMbGF0bzi3RliZWEsLffoUmFXDawYQ0leHu159cg2nptqRA0hn3H70n8GcAPQOWxwr5vqJysdC%2FBv6%2FNXlMne9qtvWpxg5k6Jf1FaOH%2FIuTAbPW2Ss0Vmrwn%2BXLqUkbx%2F%2F2UUrmqNmmsNGCzPnjwX3%2FXI2zBYStowOMjfSwLokHJXGHxgjHNdCCGjBKZ5NmEB78l36AcBQ1Gz1TspvRj%2Ba4v002KQYjZyWxg8TJDSdi73q6uhzLctPx1ApwZ3l%2FL%2BWYvPSp4P8nW6rVUqr%2BoXYEYxkVSWIivO%2BKbkuf%2F1xHHB3G9v5s8ZdKBwE2b5I%2BNc1BNOC0okDjw%2Fa95O8pbs6o4ETCzjMjJBjqkASO57T24wCUqVHPpRYHAmxs6oD8IDh6yy%2BJwb%2FEJIe8xq3UUnvJqMDbh%2BEeP4huFqL3aemBBQz4eJxTr2gJ%2FJMrhIbZKecVxuknUsVzyGL2b0EC7YXAe8tU3cvCmJpMAhfAc4bXs30FYk1rlGHwheC5EhNpdJNdKPL%2Fvpyubf8IfHrfdiQbavbCLo3qN9xXmhF%2BI3CoDXN24SCNgskKvUo2tAtu%2F&X-Amz-Signature=f89a227e5c91883cbf2b8536a057568c5a3f3427172e2e21966473557ecb9b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

