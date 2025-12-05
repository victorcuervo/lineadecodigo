---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7EMAVH6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpY9gsH1RugUnvc0%2FXhrPJvqQ6aLJ%2Bi7nO5irioh%2F6AIhANeqrzHstgSMcwKELHHbyCT2hUilW8kgqAtznNnj4d57Kv8DCFsQABoMNjM3NDIzMTgzODA1Igzauo8obUC4CpxLcRMq3APIVpbmW3yjpzq89gnwoo6Ss6%2FDR1d%2BLrlKksWObXFgwIn1f1U3ezVwTLrH5sBCK6SlE5wpuf%2BUj4enGZ06%2Bg7spyfjpkX2t2yu05XGI%2FEOZEcPZBOz6nFF3Xz5uT%2FtfweRKfiFOmPtt7hUxz9MbWtbDlklFlsl1HQVq3xJucVUHLoZyO5ytXj2XfNFkTVqRTSr%2FuhVBfXF0hHTr2q3hVNwx5AvgO8v4VbgzSjcfe4h3qQ1ep85fVZpp3DjZDHVlr3uyx%2FKYm4gyqjDtSZVPtoaZZctiI%2FJUA%2BISwV%2BYDZ682hhkSvx4dPQIObDDCcG3HRfm0mmcW1l4NgwLyCXdN%2Bljjs8w35ZOxeC6lTp7m0Q3%2FjDLsstf3%2BF7hVk0Es2ocpqNgx%2FoP775Lge9PUe9H3Ex4Mw7fiUcpmd0zDpP83KIa3yQVyeAaas5CMU7kr%2BM6F1u7g44YoOWAZgGGTFN3fRG7ZoHBuTUiCc7MakDN3TtdBniQ4%2FXfVbmg%2Be4jnCdTXuCc3bqJOGEIPUY%2BzeLdxX9HSnJbZ9MP9f7tQJrLNif1jLWY5R8W8W9gfoxCuLwaUZcvmYBwdAhjWml3CmQf5PqvN58U6Vy3OFsA2j7fIXoJ7DxA7%2BWPeFX%2BZEajCt1MrJBjqkAcjrM2XTwRKDOxzESKt%2B90jZ5eg7UiBZFp2KJKYRyUfzGL%2Fh3hlW8%2Fzz19OKQq3afwi2vQC1uY0YjZrHlP%2FRTQsuGnv%2B6YAd3GFeZT%2BGpdLwLJvZ4gWiipwE8EuqahSl7wMPm42pgGV8lauBrNlJLm7fVgicKMUroLuA0ONvZKLEeCiA9tnYIiwKcXKD3rf2uwx15z2p1RtaKA67%2BF0NE7ISRbRt&X-Amz-Signature=e6b133df55494c1314a26369d572f4a77f32bdd55bfe767b83e7ca4e4aaa010d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7EMAVH6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpY9gsH1RugUnvc0%2FXhrPJvqQ6aLJ%2Bi7nO5irioh%2F6AIhANeqrzHstgSMcwKELHHbyCT2hUilW8kgqAtznNnj4d57Kv8DCFsQABoMNjM3NDIzMTgzODA1Igzauo8obUC4CpxLcRMq3APIVpbmW3yjpzq89gnwoo6Ss6%2FDR1d%2BLrlKksWObXFgwIn1f1U3ezVwTLrH5sBCK6SlE5wpuf%2BUj4enGZ06%2Bg7spyfjpkX2t2yu05XGI%2FEOZEcPZBOz6nFF3Xz5uT%2FtfweRKfiFOmPtt7hUxz9MbWtbDlklFlsl1HQVq3xJucVUHLoZyO5ytXj2XfNFkTVqRTSr%2FuhVBfXF0hHTr2q3hVNwx5AvgO8v4VbgzSjcfe4h3qQ1ep85fVZpp3DjZDHVlr3uyx%2FKYm4gyqjDtSZVPtoaZZctiI%2FJUA%2BISwV%2BYDZ682hhkSvx4dPQIObDDCcG3HRfm0mmcW1l4NgwLyCXdN%2Bljjs8w35ZOxeC6lTp7m0Q3%2FjDLsstf3%2BF7hVk0Es2ocpqNgx%2FoP775Lge9PUe9H3Ex4Mw7fiUcpmd0zDpP83KIa3yQVyeAaas5CMU7kr%2BM6F1u7g44YoOWAZgGGTFN3fRG7ZoHBuTUiCc7MakDN3TtdBniQ4%2FXfVbmg%2Be4jnCdTXuCc3bqJOGEIPUY%2BzeLdxX9HSnJbZ9MP9f7tQJrLNif1jLWY5R8W8W9gfoxCuLwaUZcvmYBwdAhjWml3CmQf5PqvN58U6Vy3OFsA2j7fIXoJ7DxA7%2BWPeFX%2BZEajCt1MrJBjqkAcjrM2XTwRKDOxzESKt%2B90jZ5eg7UiBZFp2KJKYRyUfzGL%2Fh3hlW8%2Fzz19OKQq3afwi2vQC1uY0YjZrHlP%2FRTQsuGnv%2B6YAd3GFeZT%2BGpdLwLJvZ4gWiipwE8EuqahSl7wMPm42pgGV8lauBrNlJLm7fVgicKMUroLuA0ONvZKLEeCiA9tnYIiwKcXKD3rf2uwx15z2p1RtaKA67%2BF0NE7ISRbRt&X-Amz-Signature=5f10f0e2fac596fb5ca517489e1d3a47f28c929af1d3ffbcc4733262295918ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

