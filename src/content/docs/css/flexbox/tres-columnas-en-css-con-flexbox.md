---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TPIZWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrR6%2BPu9uTdOHfS3GmkSDovtL0SHiz3YbwMqOrhvPmqwIgascaAXXEbPPFQJiGXq2wQ3RNPlZSTIxcS8l1bK2o%2BJ8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBfghZIWc86ZjVe%2FpyrcA2bO3qpmlNXgYb4%2BkxcnmK1oGIS8djRUflF0MRHnioZufO2OlxEEOkjjC4BC8aaySfIKMw3B47IecKgxLZqwnZi22FnVhM8rH5gD%2BIp9uD60o9O7f2jdRqjcH9qc%2FjDo8K2vVJZHFaSacgFIP2VJbmsTRzs8CMg3dw9oRonk4FnnJsIYm%2F4X01V7FO%2FnzzeH%2FVExK22kq1BDKbxSjIsG77uUSX%2BEtcFz%2Ffs4FA%2BENMI6bA%2FUv4Nk7zdPT0yHD3QT4RUWLNaAujNsY3ecx4YHfNXFWpTEEkD%2B6I0UjNC%2FM25CkXJr8CkWDqFDdjhVoFC%2BlHPsVhoLqxJdYlY9UOIf1Cmk0qY2odxPJb86qEI6nMMXaKawFDroivqcXaeXfwuEMAHgCpxu7BcF%2BfpMcY2Vi3aniUFrOP8Fj%2FJxqj6BR%2BUuL1ktkcZmmkeqA0B5pLFD%2F%2Br7aRSo3JU2R721ZPXKXirGLVN%2BiiyWOy190DB6Q99%2BwHyD3QP2stVtbwNvgY5jJ%2FKnturynSiXWmfkEHsIJP7winW1PwAaLKcIPTF%2BUMcR5gp%2BwBnOE9pas%2FEcy2nf6usjbj7q0XCJtzcwKqzs28%2F6D0VPgYefWw0KgGiOFIYFoDbMzqRYPXcHPzAbMJGn0MkGOqUBUEWTT7UovVWjxSInRU%2B5eIwKBn2DJ6zwde5ZWY1gUOxQ9D03YppB%2F1UxSrordVlzfkNsu1jBT5THRvD2cz3h%2FM5rRxpgkfMnpj97OZOLIqVMLyIWdFLoEEOtN10KbOe7nKbeIq8SV3FVOnnvZdH9ugQNOggaAWhDpRFG7bB%2BxxiO72UqaFsV9xlD4mFaFMg%2FcbFd24ty2Owr2faMGDVGD8AIa0If&X-Amz-Signature=350ffa52e6969d8414d77a76cc462da4173923007d166082a9b13a18bf29bf4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TPIZWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrR6%2BPu9uTdOHfS3GmkSDovtL0SHiz3YbwMqOrhvPmqwIgascaAXXEbPPFQJiGXq2wQ3RNPlZSTIxcS8l1bK2o%2BJ8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBfghZIWc86ZjVe%2FpyrcA2bO3qpmlNXgYb4%2BkxcnmK1oGIS8djRUflF0MRHnioZufO2OlxEEOkjjC4BC8aaySfIKMw3B47IecKgxLZqwnZi22FnVhM8rH5gD%2BIp9uD60o9O7f2jdRqjcH9qc%2FjDo8K2vVJZHFaSacgFIP2VJbmsTRzs8CMg3dw9oRonk4FnnJsIYm%2F4X01V7FO%2FnzzeH%2FVExK22kq1BDKbxSjIsG77uUSX%2BEtcFz%2Ffs4FA%2BENMI6bA%2FUv4Nk7zdPT0yHD3QT4RUWLNaAujNsY3ecx4YHfNXFWpTEEkD%2B6I0UjNC%2FM25CkXJr8CkWDqFDdjhVoFC%2BlHPsVhoLqxJdYlY9UOIf1Cmk0qY2odxPJb86qEI6nMMXaKawFDroivqcXaeXfwuEMAHgCpxu7BcF%2BfpMcY2Vi3aniUFrOP8Fj%2FJxqj6BR%2BUuL1ktkcZmmkeqA0B5pLFD%2F%2Br7aRSo3JU2R721ZPXKXirGLVN%2BiiyWOy190DB6Q99%2BwHyD3QP2stVtbwNvgY5jJ%2FKnturynSiXWmfkEHsIJP7winW1PwAaLKcIPTF%2BUMcR5gp%2BwBnOE9pas%2FEcy2nf6usjbj7q0XCJtzcwKqzs28%2F6D0VPgYefWw0KgGiOFIYFoDbMzqRYPXcHPzAbMJGn0MkGOqUBUEWTT7UovVWjxSInRU%2B5eIwKBn2DJ6zwde5ZWY1gUOxQ9D03YppB%2F1UxSrordVlzfkNsu1jBT5THRvD2cz3h%2FM5rRxpgkfMnpj97OZOLIqVMLyIWdFLoEEOtN10KbOe7nKbeIq8SV3FVOnnvZdH9ugQNOggaAWhDpRFG7bB%2BxxiO72UqaFsV9xlD4mFaFMg%2FcbFd24ty2Owr2faMGDVGD8AIa0If&X-Amz-Signature=b3feb28d32b601a39c89f778fe9cebd1e290a8e846236012c6a12aa07742c2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

