---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36R7VF6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH03iZteJ%2FpY1X%2Bafzt6Q91Fc%2B1FDsgY8FZfpG%2F7XluPAiEA6Ki0er9M7csUNSJkoYk%2BEQJ56GL4pNBq%2BUHTB8Mqfh0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBGdcPEh1z4bWdWX%2BCrcA%2B9iczNs0yGjruI4746phXg9w9kC3zWFvhsZ1hZUiO1TtoIlN8bo5IhWlb9wc3repMD%2F%2FM3VnBecgzDGNEDn4rmZwDuMJplwpfv%2BaZIUZFRH7BCS9LfkRDyEZqtyYa24RfG6ERICjj%2Fo1VL%2Ff%2F8JLee%2FOsClPJPICAbgdA6niC6TVfkBD8kfgvTLB1hqdT38zwE0%2Bp8X2i1C4b0XwlA1YZDii7jrunReFGyTvBfDw5U9IWVgBBCfLzL%2F%2BwRkc9ThiD0nZwfY%2FeuE1Aw6klbNKb925mXCkkktFDkGQUGTp4%2FOvmPfv9R2N8uZG2x2KFn%2FkFdTB6g%2FJpl8K9p00C4sH0aDSCHsPOL1NCExS0USklVPDENNnny%2BQHbzimUe81ZlgpYI5KrckW9z%2Bd1frU2MYytggfolaW1qigxslehQH%2FFBBfqu7YIeNnstsnmuymFf0zj5j7ZRWAoxx9hG59C2%2Fxbz1jKferURhHd0ITa4iiJVkdLrMqmt0RcZnx6Vae2wKkApFdeq66L5MqH0df0v1PMRf4jlsMr6egKMOyGKlIGUiohEJOkNxCpUWwO4JrE3PRcYafu36DcOaLvRVsBrsLSeyoAve23jH3wL%2F9Dl9tBYtlVtPHt6QrftXwXoML6xyckGOqUBA9iJWF%2BAVaHMW%2Fn%2FtXXrJWoUwR4WcLYgLf2Yz41c5oJ0azjstg6Mr2zvQxxq%2BgiFR4ckHG%2BOKPvAak0TGwjmuZAgYm4G1Z005bxhCBXo0tx9k7bxvV7zvqXj1IFxdTeNRwGS4aqCjmiXTFRFrO5ikgtwIQ%2FUySfTv4IvXcTqsQ7sXS8WooipQF4gRWm8EMwVkmVH5Qphj8kSsreEj3jHucyfrGQb&X-Amz-Signature=50e2139d5474fa307e3e0698b598dc96247131aa7ed07e3a4de74fda150a01ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36R7VF6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH03iZteJ%2FpY1X%2Bafzt6Q91Fc%2B1FDsgY8FZfpG%2F7XluPAiEA6Ki0er9M7csUNSJkoYk%2BEQJ56GL4pNBq%2BUHTB8Mqfh0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBGdcPEh1z4bWdWX%2BCrcA%2B9iczNs0yGjruI4746phXg9w9kC3zWFvhsZ1hZUiO1TtoIlN8bo5IhWlb9wc3repMD%2F%2FM3VnBecgzDGNEDn4rmZwDuMJplwpfv%2BaZIUZFRH7BCS9LfkRDyEZqtyYa24RfG6ERICjj%2Fo1VL%2Ff%2F8JLee%2FOsClPJPICAbgdA6niC6TVfkBD8kfgvTLB1hqdT38zwE0%2Bp8X2i1C4b0XwlA1YZDii7jrunReFGyTvBfDw5U9IWVgBBCfLzL%2F%2BwRkc9ThiD0nZwfY%2FeuE1Aw6klbNKb925mXCkkktFDkGQUGTp4%2FOvmPfv9R2N8uZG2x2KFn%2FkFdTB6g%2FJpl8K9p00C4sH0aDSCHsPOL1NCExS0USklVPDENNnny%2BQHbzimUe81ZlgpYI5KrckW9z%2Bd1frU2MYytggfolaW1qigxslehQH%2FFBBfqu7YIeNnstsnmuymFf0zj5j7ZRWAoxx9hG59C2%2Fxbz1jKferURhHd0ITa4iiJVkdLrMqmt0RcZnx6Vae2wKkApFdeq66L5MqH0df0v1PMRf4jlsMr6egKMOyGKlIGUiohEJOkNxCpUWwO4JrE3PRcYafu36DcOaLvRVsBrsLSeyoAve23jH3wL%2F9Dl9tBYtlVtPHt6QrftXwXoML6xyckGOqUBA9iJWF%2BAVaHMW%2Fn%2FtXXrJWoUwR4WcLYgLf2Yz41c5oJ0azjstg6Mr2zvQxxq%2BgiFR4ckHG%2BOKPvAak0TGwjmuZAgYm4G1Z005bxhCBXo0tx9k7bxvV7zvqXj1IFxdTeNRwGS4aqCjmiXTFRFrO5ikgtwIQ%2FUySfTv4IvXcTqsQ7sXS8WooipQF4gRWm8EMwVkmVH5Qphj8kSsreEj3jHucyfrGQb&X-Amz-Signature=88f088e158794eefb238027b27401ef619ffaade3eec857be62bfc50a25b177b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

