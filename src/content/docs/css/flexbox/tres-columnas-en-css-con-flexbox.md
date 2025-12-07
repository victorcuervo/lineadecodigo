---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEDYN2W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6ZNUo9P7zvS61D%2F1S6Kf96tCbVGvUjRDZG9zBDTy2AiAT3mcqm0jL7aerNCPOFe%2FpkLylVX7U0Q8Fxwr1d8s33yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1cgeshqySSUhLopKtwDhtCRLxbNmluVYZATHEpMrVVPr8%2F2qV1RwK7SLpQHYEexkAQnQhqGprbhqrwWUfDWEA9n81acghmdUCYiIgIdAB5tR9e29%2BC9n6FYFtg32CXyu39omdMvfBgYJloYLPGreg3WeiIciUyxsAdlEzL86ruKTt90vLD23Vj%2FzKuYhg1SXt%2B%2B5hRW2tMc5DSVD9cc9DViOeD2F7Z4KFKaeu%2BUBiOlqP4vnT3Zyyl0DGAYlBIR%2BR%2BwdV3FhFHbYavCAMbTBExiyjivvJ6%2FyzEKiaib2b0dcoWiykXlP4oUFzo4OzqTJPYYYvE6fgp31B%2BCRJXPvpx7qJH%2FTqZ3PGn%2FCfN5TzUA0IVDsWJt3ict7U8PqmDb3JHPlevLyOMgljuWllCXr4GVNpHeaF%2BFn8balpqfLVr0ft1JMkESPUJpCSDq%2FrN0XOaPOWj9MaCDNU7XTAE4dTJCs48TkUgSzPPY5CSZhCle5MvnwIBwSSZg8%2BJmeWFb8yrtpONy1YGUZk6aivvOf3F25kHTUpXptkG1Fv7CgUB%2BLymHtVGql%2BJN9cmJoJJ9VVpnCwOtvr06Vz7bgtGcjM9Gpk5WjnGAsHS6V%2BDbLqjxvd4MosMdH0KjMDjh871mitOYpbingDl3DyowrprVyQY6pgFfiqJoEWco3h9iqrUAxWUkB9KaDpux488%2FkvVCV2oH8r7ERS4Mw1aT2QPSG%2BzLp0G0ZVTDGD2eOg%2B7syzcswNE30ObbFC7LCzEl%2FEZ3ISJ9UM7CzYTI7qY9sQRCb9AppeXOiZX%2BWK%2Bnw%2Bv2mA3MHdTqds5H2QjQwCGGSUGUshwlA7Exw9CAurUf58f%2FWW%2F4vrEgxBjzTIfm0mTgzegIFu3H8gULcF%2F&X-Amz-Signature=154d4988349520febd2a4e021855c44bcbf8e15195259c34fb873a650b4e2648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPEDYN2W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6ZNUo9P7zvS61D%2F1S6Kf96tCbVGvUjRDZG9zBDTy2AiAT3mcqm0jL7aerNCPOFe%2FpkLylVX7U0Q8Fxwr1d8s33yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO1cgeshqySSUhLopKtwDhtCRLxbNmluVYZATHEpMrVVPr8%2F2qV1RwK7SLpQHYEexkAQnQhqGprbhqrwWUfDWEA9n81acghmdUCYiIgIdAB5tR9e29%2BC9n6FYFtg32CXyu39omdMvfBgYJloYLPGreg3WeiIciUyxsAdlEzL86ruKTt90vLD23Vj%2FzKuYhg1SXt%2B%2B5hRW2tMc5DSVD9cc9DViOeD2F7Z4KFKaeu%2BUBiOlqP4vnT3Zyyl0DGAYlBIR%2BR%2BwdV3FhFHbYavCAMbTBExiyjivvJ6%2FyzEKiaib2b0dcoWiykXlP4oUFzo4OzqTJPYYYvE6fgp31B%2BCRJXPvpx7qJH%2FTqZ3PGn%2FCfN5TzUA0IVDsWJt3ict7U8PqmDb3JHPlevLyOMgljuWllCXr4GVNpHeaF%2BFn8balpqfLVr0ft1JMkESPUJpCSDq%2FrN0XOaPOWj9MaCDNU7XTAE4dTJCs48TkUgSzPPY5CSZhCle5MvnwIBwSSZg8%2BJmeWFb8yrtpONy1YGUZk6aivvOf3F25kHTUpXptkG1Fv7CgUB%2BLymHtVGql%2BJN9cmJoJJ9VVpnCwOtvr06Vz7bgtGcjM9Gpk5WjnGAsHS6V%2BDbLqjxvd4MosMdH0KjMDjh871mitOYpbingDl3DyowrprVyQY6pgFfiqJoEWco3h9iqrUAxWUkB9KaDpux488%2FkvVCV2oH8r7ERS4Mw1aT2QPSG%2BzLp0G0ZVTDGD2eOg%2B7syzcswNE30ObbFC7LCzEl%2FEZ3ISJ9UM7CzYTI7qY9sQRCb9AppeXOiZX%2BWK%2Bnw%2Bv2mA3MHdTqds5H2QjQwCGGSUGUshwlA7Exw9CAurUf58f%2FWW%2F4vrEgxBjzTIfm0mTgzegIFu3H8gULcF%2F&X-Amz-Signature=573fbb579349a63d42aec1bb76906247747ff8270765d82b5a815d9491c4f81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

