---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHWJBOQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIExu4SyRiqHUB1yJSe%2FHiqBPznPdNgwDDK9%2FS8yARYMPAiBmkPk09mB6RT9mw0bhrOiAIrnV2QrsH12l1TTkjIpdlir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHG4b4HYj908VasXuKtwDeTME%2BfUDz3eu0K%2FOGZVgxdyjZBIM6VXFJgF7Dv%2B%2BnJz%2FIY8SL%2BCYtWVhAknVPUUyXqkJc%2FKUguvoRHnrw%2FkdDqPJ0i33OTx30RI6Lw7R8wONogVJ%2By5jqCV5EoyMb2xQGJxfAsZMGgu26U0v5DD8x9dtNnTQSEgmWkw8I2xRapwdmCe0CWSbwz6O%2BWYTkQSAnJ2k%2Bycqf4KZ1gd%2BEMV6JzUeENXlLQxRU7n9gXdoxRQ7vYI8c3iURoEU26QGPYIWL0%2BADXf73eGIsRkY370Jo34nT14RWpWDY%2Fujm4Qalr8IqA1l0%2FjHgb0fpYQDn3Dznm6GRCyTQKnSz33mzWiDeN3K9hjxH%2Fd%2B50Q%2FojMpHwiOmLuRPPf8hSrNtYBGfRRFFWPDrEsZUAGCiNR5Z6W40lLxYdVSXRDMC%2F2Ydxt1FgzQUqTO9PjznAcXJgQjJQfTdLQ88JaXutdlHFR%2Bpgle3Sva5StK0bgkv2LCAY69D5gU%2FH6%2B8hi4VMB8da4qSQP0HrxNkZb9oidKH50jw5VRfxwX9ZtsWdR6lL7elBgxagB6NYH%2F5mEkgBny7c78t%2By%2Fbie6BKUIASGlxR6fHyuLvNx0nS1K%2FgR9JZLT2tagwqWu7YHU1vvI7c7rU68wiZXDyQY6pgHz9pd5YsClzYz5TuF8iS%2F3CCpEDUEdiSMDYmAXKatNa7QnY77P6u4O0SwMq%2FR8g9let9uAADpSVu9pXBgqq6pP7v6WQqT7kiSmLeR07sH9%2F3zM%2FXDLsG0k7YdEVixouc%2BLjNAU0Uf12i0lNYlqpJ5rb5Kp6udsDFihP%2FaNtYWCFW5F0QLruJstf4NjICRZlpbtKETrUuY%2B3xJd6oml%2FCCZlfPCJpZe&X-Amz-Signature=32fdfa6d5ded5c680d2e10bedcd46da634e028aa66e235ac86e1613d45963b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHWJBOQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIExu4SyRiqHUB1yJSe%2FHiqBPznPdNgwDDK9%2FS8yARYMPAiBmkPk09mB6RT9mw0bhrOiAIrnV2QrsH12l1TTkjIpdlir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHG4b4HYj908VasXuKtwDeTME%2BfUDz3eu0K%2FOGZVgxdyjZBIM6VXFJgF7Dv%2B%2BnJz%2FIY8SL%2BCYtWVhAknVPUUyXqkJc%2FKUguvoRHnrw%2FkdDqPJ0i33OTx30RI6Lw7R8wONogVJ%2By5jqCV5EoyMb2xQGJxfAsZMGgu26U0v5DD8x9dtNnTQSEgmWkw8I2xRapwdmCe0CWSbwz6O%2BWYTkQSAnJ2k%2Bycqf4KZ1gd%2BEMV6JzUeENXlLQxRU7n9gXdoxRQ7vYI8c3iURoEU26QGPYIWL0%2BADXf73eGIsRkY370Jo34nT14RWpWDY%2Fujm4Qalr8IqA1l0%2FjHgb0fpYQDn3Dznm6GRCyTQKnSz33mzWiDeN3K9hjxH%2Fd%2B50Q%2FojMpHwiOmLuRPPf8hSrNtYBGfRRFFWPDrEsZUAGCiNR5Z6W40lLxYdVSXRDMC%2F2Ydxt1FgzQUqTO9PjznAcXJgQjJQfTdLQ88JaXutdlHFR%2Bpgle3Sva5StK0bgkv2LCAY69D5gU%2FH6%2B8hi4VMB8da4qSQP0HrxNkZb9oidKH50jw5VRfxwX9ZtsWdR6lL7elBgxagB6NYH%2F5mEkgBny7c78t%2By%2Fbie6BKUIASGlxR6fHyuLvNx0nS1K%2FgR9JZLT2tagwqWu7YHU1vvI7c7rU68wiZXDyQY6pgHz9pd5YsClzYz5TuF8iS%2F3CCpEDUEdiSMDYmAXKatNa7QnY77P6u4O0SwMq%2FR8g9let9uAADpSVu9pXBgqq6pP7v6WQqT7kiSmLeR07sH9%2F3zM%2FXDLsG0k7YdEVixouc%2BLjNAU0Uf12i0lNYlqpJ5rb5Kp6udsDFihP%2FaNtYWCFW5F0QLruJstf4NjICRZlpbtKETrUuY%2B3xJd6oml%2FCCZlfPCJpZe&X-Amz-Signature=5820eeb57153c8d44c640ca99a0b0019d363e0e5971b1f6ed226a354cbfeb0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

