---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJGCIXO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGIWu1Ubw%2FY8tIHdDRquqK%2BjZcfHnZ5vSTjO5HJhouaQIhAKEU5yWjfZ4%2BTLR4O8bFSGigjwSD3GErbwg5CwZT2tmAKv8DCHoQABoMNjM3NDIzMTgzODA1IgwnmZAbTCEBBY80dRcq3ANTwU%2FiUcfbI0K74wbW8XWGtKFaK%2BS0aGLUp73FaNYePiFPYaJzxBwIi6JgkgjnoV%2F%2FDa9OlxPV7VXolWueLia21ZwmHuSzuWEhRWk4zis%2FmR8rJ3%2F0tLdaRd9euWW8oPO5eGxnweCRf8J%2BFcnnKncdIK7XF%2B2ykHwg6%2B0C%2Fk6c0Xs%2BsL%2Fl8EiQ2ynEvA2hRvVnu6Q77C66S%2FzUMl%2F1SBSp%2BfJ2btQLYkUuPWkxvWJSErZqFll0AIwA2oQ5AWXymKjlHX18usvGh24eYGIylLQCxd9wqj09Iw%2FvtJXjVkeJNC2GQDEs6CtvTDvr8OmqFQigwQ2azqxGToBB1QD%2FPozDlC64mKbCQFl1slDisbontVfPWedblYOBrQvf1B1GhmgPVtaTXdn6PmxoF5DniLppcmCnK0%2B%2FbGvZHfxjJymOgniV52gJ5Cz0sCuCnOxY%2FaG0lFBDdRLYFAflDtfQU7ngsvdGDhNmZ2wLYupe8yAjvXl9Yr41iNRpeaoZ9M8ehaVIDUB2h8%2FSlg7d75rYTfRXfMPxnWqlm3eu6ura82yIOIv8CndqhMOq%2FtCBAzXamEOGyaQU78JmcfuwUq0rJeuo2fXqHckNivWYPMaqGkov9LjyAND8iSUtZGBPCzCOxtHJBjqkAbPHRYKCnT34LO%2BrL8QCNZagPvT%2FstYUy%2Fhtf8byUgSKTmQeXtBvN5KFCfpI316vdr47OmOmtsO36oi5leYWnpl%2Ft4DVJ3JjBBM%2Bn0spoBVhrz0NuBV0vuOHDhX7qa60AIy0nn%2BozzauozKh7wTmwrvOKbQ5ZpU%2F30K5cLlVi3955tJIL9AYk%2BzXRjnwyC96SnJFYM%2FWT6J1nnxFOAfKAn%2FQh%2Bq5&X-Amz-Signature=733f99c5f92d4aacb2387434644f5e144351b689a5b0a0c94fd3203ab6775d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJGCIXO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGIWu1Ubw%2FY8tIHdDRquqK%2BjZcfHnZ5vSTjO5HJhouaQIhAKEU5yWjfZ4%2BTLR4O8bFSGigjwSD3GErbwg5CwZT2tmAKv8DCHoQABoMNjM3NDIzMTgzODA1IgwnmZAbTCEBBY80dRcq3ANTwU%2FiUcfbI0K74wbW8XWGtKFaK%2BS0aGLUp73FaNYePiFPYaJzxBwIi6JgkgjnoV%2F%2FDa9OlxPV7VXolWueLia21ZwmHuSzuWEhRWk4zis%2FmR8rJ3%2F0tLdaRd9euWW8oPO5eGxnweCRf8J%2BFcnnKncdIK7XF%2B2ykHwg6%2B0C%2Fk6c0Xs%2BsL%2Fl8EiQ2ynEvA2hRvVnu6Q77C66S%2FzUMl%2F1SBSp%2BfJ2btQLYkUuPWkxvWJSErZqFll0AIwA2oQ5AWXymKjlHX18usvGh24eYGIylLQCxd9wqj09Iw%2FvtJXjVkeJNC2GQDEs6CtvTDvr8OmqFQigwQ2azqxGToBB1QD%2FPozDlC64mKbCQFl1slDisbontVfPWedblYOBrQvf1B1GhmgPVtaTXdn6PmxoF5DniLppcmCnK0%2B%2FbGvZHfxjJymOgniV52gJ5Cz0sCuCnOxY%2FaG0lFBDdRLYFAflDtfQU7ngsvdGDhNmZ2wLYupe8yAjvXl9Yr41iNRpeaoZ9M8ehaVIDUB2h8%2FSlg7d75rYTfRXfMPxnWqlm3eu6ura82yIOIv8CndqhMOq%2FtCBAzXamEOGyaQU78JmcfuwUq0rJeuo2fXqHckNivWYPMaqGkov9LjyAND8iSUtZGBPCzCOxtHJBjqkAbPHRYKCnT34LO%2BrL8QCNZagPvT%2FstYUy%2Fhtf8byUgSKTmQeXtBvN5KFCfpI316vdr47OmOmtsO36oi5leYWnpl%2Ft4DVJ3JjBBM%2Bn0spoBVhrz0NuBV0vuOHDhX7qa60AIy0nn%2BozzauozKh7wTmwrvOKbQ5ZpU%2F30K5cLlVi3955tJIL9AYk%2BzXRjnwyC96SnJFYM%2FWT6J1nnxFOAfKAn%2FQh%2Bq5&X-Amz-Signature=81f8559bd354c258b1a88350b8ff06b1c9769ab970966fb80062bc677cd63b8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

