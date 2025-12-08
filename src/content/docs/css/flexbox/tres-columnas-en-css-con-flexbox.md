---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SCWQRZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWQshytvqyVFI4gWcnhv6hEQTvxubdhlbxZE4rTilnQwIgOCfr2GnsdeLvOWf%2FTMA4O4cDjmnEoTEEXi3RD0H8EP4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3dgvmGLq0VroHLHCrcAxYcAYblBInjQ73C8fRjChCZjWY3P7ot%2BI9DBzrT0dQpJO8b4wHqTC6Dssm6CoXmYIwTw7wMlBAqU2gJrGoPMQsfeZFoHlMftA3FarypkfSCHLLhQB9mTYTA6%2FqguICB9J%2FJOi6JrDp8P0V7hNrCAOcNSfXpvPtyoNMJwLQaF6466pdt7BqrGm0ixNIDHGZf%2FrU69vvXeUiGHAu2MAFJoqWQO9OM3na8o%2FUzPy7UPHgHsFtfHqMIzNCAn8UuIVJvdyXus%2BhiAtnil3DNNdaFZuIl%2FPZLSFSZrmS%2FCrBT23dxuFE3jmFzyyNhuU0zImWZ%2FGpVD8LDOsQX4r2FiBNrQsMdU%2Bz8D7FXZDGmcmOeJphA9C6K2F23Cu2gDiLrzgjXMsij%2BL3DImxj1nsNfk1qsPphdZz8D05v1K9Dus%2BXph9vuWza1TFJRMyD0ZzmF6EoGNjNA1ZOdOOwOSyvheLcHEIinHq15SAlzeWnmjp4jWXnHO5AoQec19uU4w2GaEh%2BPzjQiVQ4yt8RlnsfAr2LcSbxpy2iUYFNxEw7oZjaUEYhW7I%2FQ8qDHXl0Fbaekixylg%2F6bcZZmbkrnYqapDEisDwIO7kGgOkZmgHB%2BuC9yVmr%2B52Ver9XDbZOSzz4MMC02ckGOqUBA4e2DxSAj1KPTN5lwGKzJ%2FqqouX2aFHMP6nKSyvmyBis9i1lcF5bW2SrknK5dmwyYupTlvlphuuYCQkojy2xBUsH5OOfBcS09dIMj%2Fssar205HCsxb2%2BLULxHbmiqB%2F2zDJQwzCj6a0mnncronCUDJTa%2BbkYhZHRqJxc1mPxRNT3AQZ26ujaTxfjw5ZMx8APaziZ7X9ERRNf3ju7JLXh9NemIVFl&X-Amz-Signature=e88b361c9cccf5330b4f599f9564f65dedae8361c8d41a5bb86efdc04984d45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SCWQRZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWQshytvqyVFI4gWcnhv6hEQTvxubdhlbxZE4rTilnQwIgOCfr2GnsdeLvOWf%2FTMA4O4cDjmnEoTEEXi3RD0H8EP4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3dgvmGLq0VroHLHCrcAxYcAYblBInjQ73C8fRjChCZjWY3P7ot%2BI9DBzrT0dQpJO8b4wHqTC6Dssm6CoXmYIwTw7wMlBAqU2gJrGoPMQsfeZFoHlMftA3FarypkfSCHLLhQB9mTYTA6%2FqguICB9J%2FJOi6JrDp8P0V7hNrCAOcNSfXpvPtyoNMJwLQaF6466pdt7BqrGm0ixNIDHGZf%2FrU69vvXeUiGHAu2MAFJoqWQO9OM3na8o%2FUzPy7UPHgHsFtfHqMIzNCAn8UuIVJvdyXus%2BhiAtnil3DNNdaFZuIl%2FPZLSFSZrmS%2FCrBT23dxuFE3jmFzyyNhuU0zImWZ%2FGpVD8LDOsQX4r2FiBNrQsMdU%2Bz8D7FXZDGmcmOeJphA9C6K2F23Cu2gDiLrzgjXMsij%2BL3DImxj1nsNfk1qsPphdZz8D05v1K9Dus%2BXph9vuWza1TFJRMyD0ZzmF6EoGNjNA1ZOdOOwOSyvheLcHEIinHq15SAlzeWnmjp4jWXnHO5AoQec19uU4w2GaEh%2BPzjQiVQ4yt8RlnsfAr2LcSbxpy2iUYFNxEw7oZjaUEYhW7I%2FQ8qDHXl0Fbaekixylg%2F6bcZZmbkrnYqapDEisDwIO7kGgOkZmgHB%2BuC9yVmr%2B52Ver9XDbZOSzz4MMC02ckGOqUBA4e2DxSAj1KPTN5lwGKzJ%2FqqouX2aFHMP6nKSyvmyBis9i1lcF5bW2SrknK5dmwyYupTlvlphuuYCQkojy2xBUsH5OOfBcS09dIMj%2Fssar205HCsxb2%2BLULxHbmiqB%2F2zDJQwzCj6a0mnncronCUDJTa%2BbkYhZHRqJxc1mPxRNT3AQZ26ujaTxfjw5ZMx8APaziZ7X9ERRNf3ju7JLXh9NemIVFl&X-Amz-Signature=2568f00a73eb9fd4c5e4d5c497878c648cff8ee7df05c6c96b9d3e00c5ef657c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

