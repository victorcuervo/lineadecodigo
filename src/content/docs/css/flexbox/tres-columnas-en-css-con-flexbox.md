---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKSEUVZV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWpT%2FCvsKGIP5CWGYnF3MH0SVtEcszwXjDRO6Yo50dCAiEA3dPmwoHCbxovKMVRNzo9GICd9jRv7%2FEQ64KbeWwT4d4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0TgSKRRtGXQqEuPyrcA%2Bewv%2FN2aF73lOkwv%2F856uWoaWxGAKB17%2FRG0FNNoHBXvkyXLF8TU37Dzr16ik8ZIpuTZqlTpA%2BxB1w3%2F%2BwbNkGQkbwhuhtVZwPF1iWaSW%2BiYjPrhPlXiSyB6ZkaNnQqH2j5gUnCT886YUDUZpBde%2BOzOrVZqJEID%2F4O4kCi2ocqzZ8yEaLPePkRqPg%2BcVH%2F%2BoN50Dqc6o2DowlwxthcK7HGw5YDXpkggnGQ03geD1WdB3cykvSFTlTwxyYgj7zX9fcczno17edTbNU1Ys0h6I7nV5A6QJmiMtI%2BTXbs1fwWRsJTA1dTuZtQ30pNR3ry%2BcEK%2BUw8YmHDl7WGbL7C7%2Fk0Pu%2BI2o2hYrcI%2BjxA7xFV9vJtEU2v0SiHerxTY1v3TRSqshWZefvtnjaxQbZJzl6xHFA2SFj1qlaJg%2BhMzPJN31NMExQxECWzSV9X81FqCIpUuWGsLXcVyvUKy2SuJunK8FPNJgREcY8DW14AAVsCS5RY9UtQH7HElOUlhPTJN8ppzh6PqdxONwC94z4sHPO3lZO0kGdcUML8dSXrvEbNe74wD3D46Ip6TSzQelYBhigUwGQDlWKfg34F84K0zJQ3c%2FRFk45XBecE9BNbL8iQmzxca29ZJcxoLz2dMMqY1MkGOqUBWw%2BjLFs8CQhuz9jCrC1yvQL2rwsVzwzptJz3wDjmVHPXFF4jqZMVi5uc4t7cqcCoqiGXQ0TEuapQ3kTrW%2Bvc6KIHAaID%2FG9Am8gH81OPi10w8poXB5oNkj%2Fk1CqPeqrjRAN4crB5ia7tY9%2FxmjBJHVbJkKbJYOAEcmrFfI82lq2XB0lI6ILmzcoUxNyjz2YojGXdeFjbk5%2Bd5Q%2FEch39bM1HI7%2Bk&X-Amz-Signature=97046092e6aad34e99de0427b62142148b2908dbfcd0f8eb9f50d5f49a4e15d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKSEUVZV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWpT%2FCvsKGIP5CWGYnF3MH0SVtEcszwXjDRO6Yo50dCAiEA3dPmwoHCbxovKMVRNzo9GICd9jRv7%2FEQ64KbeWwT4d4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0TgSKRRtGXQqEuPyrcA%2Bewv%2FN2aF73lOkwv%2F856uWoaWxGAKB17%2FRG0FNNoHBXvkyXLF8TU37Dzr16ik8ZIpuTZqlTpA%2BxB1w3%2F%2BwbNkGQkbwhuhtVZwPF1iWaSW%2BiYjPrhPlXiSyB6ZkaNnQqH2j5gUnCT886YUDUZpBde%2BOzOrVZqJEID%2F4O4kCi2ocqzZ8yEaLPePkRqPg%2BcVH%2F%2BoN50Dqc6o2DowlwxthcK7HGw5YDXpkggnGQ03geD1WdB3cykvSFTlTwxyYgj7zX9fcczno17edTbNU1Ys0h6I7nV5A6QJmiMtI%2BTXbs1fwWRsJTA1dTuZtQ30pNR3ry%2BcEK%2BUw8YmHDl7WGbL7C7%2Fk0Pu%2BI2o2hYrcI%2BjxA7xFV9vJtEU2v0SiHerxTY1v3TRSqshWZefvtnjaxQbZJzl6xHFA2SFj1qlaJg%2BhMzPJN31NMExQxECWzSV9X81FqCIpUuWGsLXcVyvUKy2SuJunK8FPNJgREcY8DW14AAVsCS5RY9UtQH7HElOUlhPTJN8ppzh6PqdxONwC94z4sHPO3lZO0kGdcUML8dSXrvEbNe74wD3D46Ip6TSzQelYBhigUwGQDlWKfg34F84K0zJQ3c%2FRFk45XBecE9BNbL8iQmzxca29ZJcxoLz2dMMqY1MkGOqUBWw%2BjLFs8CQhuz9jCrC1yvQL2rwsVzwzptJz3wDjmVHPXFF4jqZMVi5uc4t7cqcCoqiGXQ0TEuapQ3kTrW%2Bvc6KIHAaID%2FG9Am8gH81OPi10w8poXB5oNkj%2Fk1CqPeqrjRAN4crB5ia7tY9%2FxmjBJHVbJkKbJYOAEcmrFfI82lq2XB0lI6ILmzcoUxNyjz2YojGXdeFjbk5%2Bd5Q%2FEch39bM1HI7%2Bk&X-Amz-Signature=959ab031824593b7d9cd65fb954f4a7a46270743fae2a48fbc399547a8552796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

