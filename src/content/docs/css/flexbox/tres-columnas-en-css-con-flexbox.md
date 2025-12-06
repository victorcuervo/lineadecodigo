---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2FDPTO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPfHbn6IGemZ0yMZhNAgV593znbmRetiF18oVZEvkVtAiApTx7UH40OBNt8mGMM5KRSzId%2B5GjjY%2FZoN5HAlJuSDyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMBIhy6soy7z90wlxmKtwDqxUxYZSCFRM3hzrouL%2BaAfKSUqUEsl7AfdPFZEBttTZB1PoSjVCSvpU1wt%2F1WIFtxTHqGE9yazyUMznkPESkXwpi9frjLq1vqlRXNV0IEV0hhllDxT6c3CAa84mssXwG4gf%2FpElwYb6MIQ5R5fPKMKVQic7NLc6G5TIVQjii3STGvC7oR%2BICWdHcAxvjfoPhTOENxrDeYprVHFBGfBUYiQ%2FSdvmoqd4lZcEOoaPpMncP7HJlLP4ccSEv1eoiGhIglDIHLRXvWB%2Bpa0Py44ezLJe0lMw83Z%2FxxnPeOkQdmVMXH9gaQm6FphMDvpXRoBlD1EPK%2B7o495E6u2y%2FcrXdSme96xSYKNB0ilszDw107drUSrHQfOWYEYJ7p03QkPWmC7MIzZ3CTyIhW6UAn8VhB6lVCfMoPlv58NBfp3MMXf1kyFe91lrRp905aYlCGDm7YwtmbDUBX3Ba%2BIc4PeyHfgz3KuNL49t1anOhiUMFJCXnl%2FZ%2F%2Bofzeb%2FTNCe5C1b9RZc1ppAhYY%2BAAGojOSy38NDPBjNj4O6GTNoGXUsGaWV7tX0SSar4E%2F9r1mnuKZpYEclM%2FPwr1AvgkkkZFeMio0YgV0P%2BaPOghVs4Ff4iMH4iW%2BAWBBiO7GfYmF0wvejNyQY6pgEMoIDAnriV%2BtrJ2BdRb1TA47oB0LG3JZNuzR9KUetDZLztsqkWKeAtEkjIZorsEFK7bIxgaZhDBUkAa1P7Czeh4EL%2FnC65J1QitLHAayH55dmNoLuXD%2BC6kTb2bMzO01NxwyAVGvuDeajMPNzfONCX5USjhqr23XHFSfLTvGgmR7vuJV%2FJdx0K7x18lX6izS3zKLu0BlBuCoj915ppIC%2BU5jV0VJ4b&X-Amz-Signature=bc961ddb58d1645c382d1f488a79d5f23b8f4dc4fa10fbdc7f6397c98d79b221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2FDPTO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPfHbn6IGemZ0yMZhNAgV593znbmRetiF18oVZEvkVtAiApTx7UH40OBNt8mGMM5KRSzId%2B5GjjY%2FZoN5HAlJuSDyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMBIhy6soy7z90wlxmKtwDqxUxYZSCFRM3hzrouL%2BaAfKSUqUEsl7AfdPFZEBttTZB1PoSjVCSvpU1wt%2F1WIFtxTHqGE9yazyUMznkPESkXwpi9frjLq1vqlRXNV0IEV0hhllDxT6c3CAa84mssXwG4gf%2FpElwYb6MIQ5R5fPKMKVQic7NLc6G5TIVQjii3STGvC7oR%2BICWdHcAxvjfoPhTOENxrDeYprVHFBGfBUYiQ%2FSdvmoqd4lZcEOoaPpMncP7HJlLP4ccSEv1eoiGhIglDIHLRXvWB%2Bpa0Py44ezLJe0lMw83Z%2FxxnPeOkQdmVMXH9gaQm6FphMDvpXRoBlD1EPK%2B7o495E6u2y%2FcrXdSme96xSYKNB0ilszDw107drUSrHQfOWYEYJ7p03QkPWmC7MIzZ3CTyIhW6UAn8VhB6lVCfMoPlv58NBfp3MMXf1kyFe91lrRp905aYlCGDm7YwtmbDUBX3Ba%2BIc4PeyHfgz3KuNL49t1anOhiUMFJCXnl%2FZ%2F%2Bofzeb%2FTNCe5C1b9RZc1ppAhYY%2BAAGojOSy38NDPBjNj4O6GTNoGXUsGaWV7tX0SSar4E%2F9r1mnuKZpYEclM%2FPwr1AvgkkkZFeMio0YgV0P%2BaPOghVs4Ff4iMH4iW%2BAWBBiO7GfYmF0wvejNyQY6pgEMoIDAnriV%2BtrJ2BdRb1TA47oB0LG3JZNuzR9KUetDZLztsqkWKeAtEkjIZorsEFK7bIxgaZhDBUkAa1P7Czeh4EL%2FnC65J1QitLHAayH55dmNoLuXD%2BC6kTb2bMzO01NxwyAVGvuDeajMPNzfONCX5USjhqr23XHFSfLTvGgmR7vuJV%2FJdx0K7x18lX6izS3zKLu0BlBuCoj915ppIC%2BU5jV0VJ4b&X-Amz-Signature=83d81cb4c158bd821e8d06da930d20fad5fbd51b9d25ed9ee3705bfb2004c712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

