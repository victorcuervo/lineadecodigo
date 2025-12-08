---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJRRPJQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDglIj3r%2F5mSzIdwxz2xcHgpLeOebRE8u%2FUjgYSZT2HGgIgVUGHvt0rDZIymfjYgERHv7SB7QjE6Zh7OylkpZ3JkQgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FORNPDGfxi3QePoircA1Yi%2BQYrD2ny%2B7jKtCPZmnGXFOEs%2F3iS%2F5NZ%2FuCDvhuiD9aVVCfjvtzq920JAbrST8SCaOBqlG3f2JapdCuJPad65%2F5zc9OUkSzJBn0Fz3VPs0APrHrYC802SK37SSBeyIC8hYWc7QXd03n1IvCdYItFpRcDzPClJfnN5Uv4mrXdrIkwQQeKa3c3Z0%2BRgyTNhF6lTwLzVZHfnwOppHcpmP1qSFjqptbDgt8Yrlf8tHU6Eq1bAPELlM8TortCT%2BrfJg5MOLke7xHwJezr%2FtBEIxzld1dmUqajKek0wFpBjdWf77Kqt20DYoniykOPfCAimmLFnI9uH3glRXII%2B1hb%2Bz8TGNeCIZljERCDvYjbx%2F578%2FOf3t8SOMjP99PPtJm46Gl1%2BhXb%2F4UXAsZGUvH8FLNjfvka6RKsfhX1YsAYw82Ehr0%2FLlkgGOSx8GOieuB%2FqQE8buoWncLyh34yRMB3iUVcqKUlDayjyq%2FW0NQ%2BJlbUrm9ZQQ49jTmR51JEcu4fZqnpdNUAP0Odk69%2B3jtNw8vwPeF15m%2BUaiLOExE%2FkmXSbGs1I3raRf9X%2BQ%2FJXUzJB6OZrf1QSGI1iaj7v8n8qcg9qvzri4tAf8%2BZEmAbipln83gbg9Kvc4c2YTUGMJ%2BH3MkGOqUB2Bp69DXDeD9CB5XTXLGxwIzc1dQvwd82mUzNS2tWoV6wLdMABwsoE%2FlVW5%2FJrvrWIZzUIKRNdZ5UkOnTl7ovpQ9KbOp9qCg1HVUuu9qhqF%2Fc5UVmGHkUJKqRyETL%2FiDXvMhfFNMBZF4yrBpnZdirST5AZw8jwcm1YfxnVKN9LspS9PJLRUgfCg73B8Qe2XlGUvAsbJQzsuDnBJLNR%2BRsCgGR%2BeIV&X-Amz-Signature=e8ed11ea86c429126e2e43de91158710eb0f87965eca4f1c8590f588abf86c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJRRPJQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDglIj3r%2F5mSzIdwxz2xcHgpLeOebRE8u%2FUjgYSZT2HGgIgVUGHvt0rDZIymfjYgERHv7SB7QjE6Zh7OylkpZ3JkQgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FORNPDGfxi3QePoircA1Yi%2BQYrD2ny%2B7jKtCPZmnGXFOEs%2F3iS%2F5NZ%2FuCDvhuiD9aVVCfjvtzq920JAbrST8SCaOBqlG3f2JapdCuJPad65%2F5zc9OUkSzJBn0Fz3VPs0APrHrYC802SK37SSBeyIC8hYWc7QXd03n1IvCdYItFpRcDzPClJfnN5Uv4mrXdrIkwQQeKa3c3Z0%2BRgyTNhF6lTwLzVZHfnwOppHcpmP1qSFjqptbDgt8Yrlf8tHU6Eq1bAPELlM8TortCT%2BrfJg5MOLke7xHwJezr%2FtBEIxzld1dmUqajKek0wFpBjdWf77Kqt20DYoniykOPfCAimmLFnI9uH3glRXII%2B1hb%2Bz8TGNeCIZljERCDvYjbx%2F578%2FOf3t8SOMjP99PPtJm46Gl1%2BhXb%2F4UXAsZGUvH8FLNjfvka6RKsfhX1YsAYw82Ehr0%2FLlkgGOSx8GOieuB%2FqQE8buoWncLyh34yRMB3iUVcqKUlDayjyq%2FW0NQ%2BJlbUrm9ZQQ49jTmR51JEcu4fZqnpdNUAP0Odk69%2B3jtNw8vwPeF15m%2BUaiLOExE%2FkmXSbGs1I3raRf9X%2BQ%2FJXUzJB6OZrf1QSGI1iaj7v8n8qcg9qvzri4tAf8%2BZEmAbipln83gbg9Kvc4c2YTUGMJ%2BH3MkGOqUB2Bp69DXDeD9CB5XTXLGxwIzc1dQvwd82mUzNS2tWoV6wLdMABwsoE%2FlVW5%2FJrvrWIZzUIKRNdZ5UkOnTl7ovpQ9KbOp9qCg1HVUuu9qhqF%2Fc5UVmGHkUJKqRyETL%2FiDXvMhfFNMBZF4yrBpnZdirST5AZw8jwcm1YfxnVKN9LspS9PJLRUgfCg73B8Qe2XlGUvAsbJQzsuDnBJLNR%2BRsCgGR%2BeIV&X-Amz-Signature=35a5b65a235e19eccfbaf7f4079cfdd89c8128119ea0ac7ea23e054b3bce611f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

