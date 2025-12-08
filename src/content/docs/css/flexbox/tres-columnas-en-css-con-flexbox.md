---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXBCFI4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP%2BNN3inNnz60xyqMp9FA41sw%2BCT1EsPBUHvHaR7gltAiEAtjc0QsTyLb9rK%2FpN3Fe0o%2BQjEfGubGGVVG5r9f8IwN8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsDftx2UMZtelZbuircA0eHYD1m5Um4dYeZsur79apwgE8XCWUe8nSsMha4ISRoSNgd7HqYitzNZ5XRC0nECCKrO8RTdcNqT6aIhilIDHHn0hE3YzdMVu9srOTyG%2BewB%2FhzRCuXuU2Iga%2FI8eWNfZGFlJ5bclPDqkDWnSpu3qZBhtHPNgY%2FW9hIvHK%2BS33AsJ2tIznqgEyJCLZ0kwk8kHx28bX%2B2FNEMGtFJaHvcfqCIe9UtrtucDqiJ9GxT0WQ2heSxfs%2BI07MX2h7FZ9Oju7LtXqF%2B87hmWV6RHSGMcrLDvU77s%2BJ96aGy%2BPNc%2F5wfc811%2FZVQlWkK3%2FsILYeeGXaqu5qU9OvECwJ4OU1yj6NBH89xE5UGfxz4oNT1J0F58YOmRJYTJ03%2Fh9bQcaWpiiSdZ%2BHmPITHKjdBX%2FH%2B8m6iAFQGZw7yZVQ3OKWqd3au8VByCegC9atxuT%2B%2BoAA7UN1GleWNBs8T4%2B1RGAwxh7t%2BpbcLd8m31Ejo5qhnUjzV4ADEH%2F93rrCf6FenhpeAJ6C%2BkfpmjUVtQENcsLqUy6TH291%2FXeglVNfgeKYwc1nzqgO1zdsL1zrVnz0YMSMW71haaXh1No9otdcquLQ4f0pqPtPJ5l6jh3kjPGtqS3YAA1ZnYIVfeawLKppMLzu2ckGOqUB9Og6EmqXAFst57GYk5HV6Fo4BER230DJDoR1%2BtpvtJiul6SVO%2BTLXPtC9zPZVXExXtizK9IyZc56CQFC7ESPPLgIuRC%2FD8g1GvbtAfeUouW9kymI0hQlUX4Y05MlA8PmITkUMQ%2Fl4vkMi7Qebd03UO%2Br64pI%2Bc8lv6ST%2F2ztoUgE61kRbph9ZX4FkwGx0thybRFqtzRfZsHWCvLocFTp4W%2BesoKq&X-Amz-Signature=0481831b20bbfe0963581144a197fe5d858b18065884269fc14198d25f5abde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXBCFI4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP%2BNN3inNnz60xyqMp9FA41sw%2BCT1EsPBUHvHaR7gltAiEAtjc0QsTyLb9rK%2FpN3Fe0o%2BQjEfGubGGVVG5r9f8IwN8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsDftx2UMZtelZbuircA0eHYD1m5Um4dYeZsur79apwgE8XCWUe8nSsMha4ISRoSNgd7HqYitzNZ5XRC0nECCKrO8RTdcNqT6aIhilIDHHn0hE3YzdMVu9srOTyG%2BewB%2FhzRCuXuU2Iga%2FI8eWNfZGFlJ5bclPDqkDWnSpu3qZBhtHPNgY%2FW9hIvHK%2BS33AsJ2tIznqgEyJCLZ0kwk8kHx28bX%2B2FNEMGtFJaHvcfqCIe9UtrtucDqiJ9GxT0WQ2heSxfs%2BI07MX2h7FZ9Oju7LtXqF%2B87hmWV6RHSGMcrLDvU77s%2BJ96aGy%2BPNc%2F5wfc811%2FZVQlWkK3%2FsILYeeGXaqu5qU9OvECwJ4OU1yj6NBH89xE5UGfxz4oNT1J0F58YOmRJYTJ03%2Fh9bQcaWpiiSdZ%2BHmPITHKjdBX%2FH%2B8m6iAFQGZw7yZVQ3OKWqd3au8VByCegC9atxuT%2B%2BoAA7UN1GleWNBs8T4%2B1RGAwxh7t%2BpbcLd8m31Ejo5qhnUjzV4ADEH%2F93rrCf6FenhpeAJ6C%2BkfpmjUVtQENcsLqUy6TH291%2FXeglVNfgeKYwc1nzqgO1zdsL1zrVnz0YMSMW71haaXh1No9otdcquLQ4f0pqPtPJ5l6jh3kjPGtqS3YAA1ZnYIVfeawLKppMLzu2ckGOqUB9Og6EmqXAFst57GYk5HV6Fo4BER230DJDoR1%2BtpvtJiul6SVO%2BTLXPtC9zPZVXExXtizK9IyZc56CQFC7ESPPLgIuRC%2FD8g1GvbtAfeUouW9kymI0hQlUX4Y05MlA8PmITkUMQ%2Fl4vkMi7Qebd03UO%2Br64pI%2Bc8lv6ST%2F2ztoUgE61kRbph9ZX4FkwGx0thybRFqtzRfZsHWCvLocFTp4W%2BesoKq&X-Amz-Signature=4ca08b4c7947f46b6fead911825b25b277985b5ec1e12b967f4a92dbbc5f37cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

