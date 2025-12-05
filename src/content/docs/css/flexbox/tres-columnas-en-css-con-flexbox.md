---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTGXXZZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB7oEhtjAqpn2SFvPonymLNA7CELOi4mZ0C9oPg61m7wIhAOCjSFutyqV59TRfFzVV3qNOdRMCy%2Fq16UthVixey2cqKv8DCFsQABoMNjM3NDIzMTgzODA1IgwY0Wi1LocAXYykdDMq3APbUdaeQJY4FDBwng4CTVlnQYGe7mN7ewciVXwmn%2FXAvasIZkNTZRvntErzdTivDVWgYfiQqiMBAe3OkulB77z9feSAx94a%2BTbABsmRZUk1HmjrKB%2FPYGAu9JqIBvUev6%2BPBsVhpP4u1w1jBwrJZwO%2FIVvXLH%2FS5rdJyXbATBNE7EFQsEdwemez%2BnlhDIJwOwTZp5rwsSjhLbxwLl954xVys8rzmCAFa%2FaZ333EHkF7Tcydbku5DN6uZzjOjYbBAe2%2F6v88LG8O5X%2BkCfVfrpVaOQTXfkr8z9kIKdrfn8Yz3RmsxYqgl2nQww%2BcjzCWyg9lFHBXYBXxM7e5E69jtEeqH9MVmY7fOv6nmatEZwwXKBYCbPstPIx8XACH7SxHq4gymrYy0jHIBv4H0A%2BgaZ8FYcf3FGk5MAp%2FNoaZlEEAn4pNREUuSia7fB3%2FrEjs1CEwQsm3Se349WlVF8fS4594qbF6JymObQIzT5a39%2BrtGWgacWuvVhw3YyvYe5PGMTiMNv27%2FGeay3uiCDH0E2wMoJ%2B5TxKA9WNzXwZAxwrAPIj54Grdiy9IB61dRVxjrZonbpYkKNXe48za5CUoT2nJw7SGBnpF4wmX5BJqxxAH6ERQBleP4kae2AqIuTCbzcrJBjqkAZGAwvPKFtlLJzVqnm66PHOhS%2BG20AxRaIorhOa8qnJHnZNdDcIycZbtVvmEpjVxGy%2FLEmUOzVHOK23KndjkU%2Beu4Jyz%2BLOkRGC1EdpuMWYYwYwAXby5VYNtoBKgXesNB12X%2BVGJK2ztRn3hmnl497AYeVVSqe1tWRuK9NBcdCARZlQeHXxSajxvQPhOpQjUp6MpfzX9LqQ3ZkhGQa9bzzu8Vwr8&X-Amz-Signature=6d9404ff1e3a41176554ff724e550d3da62af4636c9680f1dc69f03e4652ed9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTGXXZZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB7oEhtjAqpn2SFvPonymLNA7CELOi4mZ0C9oPg61m7wIhAOCjSFutyqV59TRfFzVV3qNOdRMCy%2Fq16UthVixey2cqKv8DCFsQABoMNjM3NDIzMTgzODA1IgwY0Wi1LocAXYykdDMq3APbUdaeQJY4FDBwng4CTVlnQYGe7mN7ewciVXwmn%2FXAvasIZkNTZRvntErzdTivDVWgYfiQqiMBAe3OkulB77z9feSAx94a%2BTbABsmRZUk1HmjrKB%2FPYGAu9JqIBvUev6%2BPBsVhpP4u1w1jBwrJZwO%2FIVvXLH%2FS5rdJyXbATBNE7EFQsEdwemez%2BnlhDIJwOwTZp5rwsSjhLbxwLl954xVys8rzmCAFa%2FaZ333EHkF7Tcydbku5DN6uZzjOjYbBAe2%2F6v88LG8O5X%2BkCfVfrpVaOQTXfkr8z9kIKdrfn8Yz3RmsxYqgl2nQww%2BcjzCWyg9lFHBXYBXxM7e5E69jtEeqH9MVmY7fOv6nmatEZwwXKBYCbPstPIx8XACH7SxHq4gymrYy0jHIBv4H0A%2BgaZ8FYcf3FGk5MAp%2FNoaZlEEAn4pNREUuSia7fB3%2FrEjs1CEwQsm3Se349WlVF8fS4594qbF6JymObQIzT5a39%2BrtGWgacWuvVhw3YyvYe5PGMTiMNv27%2FGeay3uiCDH0E2wMoJ%2B5TxKA9WNzXwZAxwrAPIj54Grdiy9IB61dRVxjrZonbpYkKNXe48za5CUoT2nJw7SGBnpF4wmX5BJqxxAH6ERQBleP4kae2AqIuTCbzcrJBjqkAZGAwvPKFtlLJzVqnm66PHOhS%2BG20AxRaIorhOa8qnJHnZNdDcIycZbtVvmEpjVxGy%2FLEmUOzVHOK23KndjkU%2Beu4Jyz%2BLOkRGC1EdpuMWYYwYwAXby5VYNtoBKgXesNB12X%2BVGJK2ztRn3hmnl497AYeVVSqe1tWRuK9NBcdCARZlQeHXxSajxvQPhOpQjUp6MpfzX9LqQ3ZkhGQa9bzzu8Vwr8&X-Amz-Signature=2eccc0c46caff9c8adcdb549fcbb3b04f7522490b0df6c79b2273a59aa8c044e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

