---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMDHRHG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBTqcT1psLTGAHWZPlaOjm97vh4GgxF16FM11YN7XAI1AiEAmB8gpB%2BQf4q0Uw5QGz3dmJuocuNYcs2PPUJsDmwc5MMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEWywSX4yJSZx1PigCrcAxy5MvMl%2BviU4yfq2EJSbm0DTyUTFbhc%2BTN6fn0x%2BfSsfL0KEfeNiYAhPtwXpuRH8qOf5mJU0dP0rtFiJho75%2F11CyF3hDxkdlsOWnO7PJWvDwnKKyCKrBiWD4bBDDAl5S9rrtuYBxqqmDg7mv53O028c%2F9yI1UheXRcpCNYGyWTDWdQ%2BEUe1Le3xljkRxTEJYbHg4%2BX9lLE3ZY3bJEcQ%2Bw9gD3dx6dPw%2BfWihHQdKHEecqKgSP4kzq1SK0I8ELegMCm5YZbn6oy5DUzJUUkie9yGkTAsDdngQvSP1MYBK5n4IsVPU%2F%2F87WYvVwNbpZ58fn6o%2BS%2F4BR9rXhobY%2Bmk1pnp%2BWgbOHD5c2lEycHc4yTQHFvqcvFn%2FddRn0ai%2FtY6NDEhGAYqtbXOZq3m7c4QJawJppKvwG3j%2Fa5azMihKhhdbt%2B16VNZbscPfUvNSjyxoaHw3t2GoBiZ%2BTn3zsFIlw1dEHmuXzb2uBqRn3XaOtfoH8MRt4yaI%2Bgw%2F6OJY1bTxQxiliuUAvbxQoB72BGykxjm%2BnmMDN5MDx94ClsaxmpvFQF6L97UX0KfO6TyGDwqYtj2%2BvLi4A1EfX6fI2AO3jewIR%2BLdlCDWA6A1mL0mJ9jc7XWFMnnfooVYBXMODoxMkGOqUBFpZfoFMz3XyKcI4H%2BlCwmMSl3s6ivcglNQRuNLgGh7X8FsDqG2Yege87COeEO%2FiGS271MQjknQvWj19%2Ff%2F5a1DfIq8OJmgzOuKCmCMNI7vTiXEaFmhACw8wzAAra%2FCZ38L84S0ooNjW3ZmzBzQztebvELEg%2FCpPuzpdVNSBCVCKHYlzdbsJgrQWjvuPypWt7gUDZoL4Y0RFQ2RfQW2uMfUl4TK1L&X-Amz-Signature=bdf12cca1c657c2d9ecfb2daf3d7caf46576b9bc10bd0abc04fae58243cd5efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMDHRHG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBTqcT1psLTGAHWZPlaOjm97vh4GgxF16FM11YN7XAI1AiEAmB8gpB%2BQf4q0Uw5QGz3dmJuocuNYcs2PPUJsDmwc5MMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEWywSX4yJSZx1PigCrcAxy5MvMl%2BviU4yfq2EJSbm0DTyUTFbhc%2BTN6fn0x%2BfSsfL0KEfeNiYAhPtwXpuRH8qOf5mJU0dP0rtFiJho75%2F11CyF3hDxkdlsOWnO7PJWvDwnKKyCKrBiWD4bBDDAl5S9rrtuYBxqqmDg7mv53O028c%2F9yI1UheXRcpCNYGyWTDWdQ%2BEUe1Le3xljkRxTEJYbHg4%2BX9lLE3ZY3bJEcQ%2Bw9gD3dx6dPw%2BfWihHQdKHEecqKgSP4kzq1SK0I8ELegMCm5YZbn6oy5DUzJUUkie9yGkTAsDdngQvSP1MYBK5n4IsVPU%2F%2F87WYvVwNbpZ58fn6o%2BS%2F4BR9rXhobY%2Bmk1pnp%2BWgbOHD5c2lEycHc4yTQHFvqcvFn%2FddRn0ai%2FtY6NDEhGAYqtbXOZq3m7c4QJawJppKvwG3j%2Fa5azMihKhhdbt%2B16VNZbscPfUvNSjyxoaHw3t2GoBiZ%2BTn3zsFIlw1dEHmuXzb2uBqRn3XaOtfoH8MRt4yaI%2Bgw%2F6OJY1bTxQxiliuUAvbxQoB72BGykxjm%2BnmMDN5MDx94ClsaxmpvFQF6L97UX0KfO6TyGDwqYtj2%2BvLi4A1EfX6fI2AO3jewIR%2BLdlCDWA6A1mL0mJ9jc7XWFMnnfooVYBXMODoxMkGOqUBFpZfoFMz3XyKcI4H%2BlCwmMSl3s6ivcglNQRuNLgGh7X8FsDqG2Yege87COeEO%2FiGS271MQjknQvWj19%2Ff%2F5a1DfIq8OJmgzOuKCmCMNI7vTiXEaFmhACw8wzAAra%2FCZ38L84S0ooNjW3ZmzBzQztebvELEg%2FCpPuzpdVNSBCVCKHYlzdbsJgrQWjvuPypWt7gUDZoL4Y0RFQ2RfQW2uMfUl4TK1L&X-Amz-Signature=e494b03a56748abca0e3fc43e4ec42857514dcc583cb70029635851927557872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

