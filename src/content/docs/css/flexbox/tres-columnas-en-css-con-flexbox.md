---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDPRISV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAxrIWCDRUytW%2FUXx5nTBGwh5DVlPk4qhyx1GqqIKamAIgCI0S6gsJKQcneOX8bGChRTLrmxH2G%2BzvLmUHdTj5m18qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkV5N7zrWfLNdZSaSrcAxgr2c5BxIYijotvdq1GKZ7ISYS7V2feI3ZUXIFfgTa0D8j%2B87BKdGjnY2KBKYcES8IsF2rjTTzZ6%2BLqnl8abjk9XRAKI7Tk2oIORgTh17BswhUSlo4LxdGUa1PFVmqWlJYyFVWl53cG9TDsvxuyuYqPm9YCJMZR%2FKgF7iKT%2F5DD4UqxqyI%2BpTPI335J4T6ak1pvhgonrbF2CI4ST2IYEoV22mHQTHSmpp%2FXXdx6QMkIM5ZJtdnk3vsPrdog1aiD6QPJGcPZ%2FSVvESkQp%2Fn%2BYout8GRQ44GiMgrl8JWS%2BMM1f%2FP%2BcZ0mq9IuPNk8IB%2Bd8KcB%2FfnOxTW0qZZUsTUlLcDZzbJiy4i25AVwp1mSmx3nfbe9kXlkKYf7aY1%2FecCzDKZf%2Bp%2BCalg%2FFPMaCb0ODF%2F2L5D96enOKhe%2F6cra0KSs8pqxXEE5Emgn6Qc0%2BQ9NN7bllb11LBZHgPX%2FWXogPdgP1Y99o15eNXaRo1525ahdhRg3d7C3Gwgv6CHycOsXda2U0nF%2FuZjtEr6CbaxGBU%2BnA9QFS4FCgNNUoLLHyM8KU5RYZbCEPKpToMWOhCCi8qzJxlZOIChGJCW7pZlIpIYkBj8ZZMFnptoQnquAqOvTYBOF1%2Bzl8Mh%2BjKYdMK%2F%2B0skGOqUBWNoqq5b3GgiBRH%2FxQ1Lp59iTXo9YIvoAkpn7a%2F8n%2FdTp01m7%2Fn%2BNRr1OomPW3ztAJt70O%2BxG6dNyQl5rVxrsjY1MIw1x1%2FEQIhstLD350S9tEse9JU%2BfM2aP8sxltkdn4IhpbJp3GWBuxr%2FxBEAsQiXY%2BKYtvvjNC6AwsfdyobXBCp7p3oBgQ37Vd3KLtbi2DK3VFfMDVxCAnXBYgT%2FoRgmzm1TG&X-Amz-Signature=ac24e2ebd5f2b3d93108a132c60320b7e660155026b78adaf18b2e29328211f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDPRISV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAxrIWCDRUytW%2FUXx5nTBGwh5DVlPk4qhyx1GqqIKamAIgCI0S6gsJKQcneOX8bGChRTLrmxH2G%2BzvLmUHdTj5m18qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkV5N7zrWfLNdZSaSrcAxgr2c5BxIYijotvdq1GKZ7ISYS7V2feI3ZUXIFfgTa0D8j%2B87BKdGjnY2KBKYcES8IsF2rjTTzZ6%2BLqnl8abjk9XRAKI7Tk2oIORgTh17BswhUSlo4LxdGUa1PFVmqWlJYyFVWl53cG9TDsvxuyuYqPm9YCJMZR%2FKgF7iKT%2F5DD4UqxqyI%2BpTPI335J4T6ak1pvhgonrbF2CI4ST2IYEoV22mHQTHSmpp%2FXXdx6QMkIM5ZJtdnk3vsPrdog1aiD6QPJGcPZ%2FSVvESkQp%2Fn%2BYout8GRQ44GiMgrl8JWS%2BMM1f%2FP%2BcZ0mq9IuPNk8IB%2Bd8KcB%2FfnOxTW0qZZUsTUlLcDZzbJiy4i25AVwp1mSmx3nfbe9kXlkKYf7aY1%2FecCzDKZf%2Bp%2BCalg%2FFPMaCb0ODF%2F2L5D96enOKhe%2F6cra0KSs8pqxXEE5Emgn6Qc0%2BQ9NN7bllb11LBZHgPX%2FWXogPdgP1Y99o15eNXaRo1525ahdhRg3d7C3Gwgv6CHycOsXda2U0nF%2FuZjtEr6CbaxGBU%2BnA9QFS4FCgNNUoLLHyM8KU5RYZbCEPKpToMWOhCCi8qzJxlZOIChGJCW7pZlIpIYkBj8ZZMFnptoQnquAqOvTYBOF1%2Bzl8Mh%2BjKYdMK%2F%2B0skGOqUBWNoqq5b3GgiBRH%2FxQ1Lp59iTXo9YIvoAkpn7a%2F8n%2FdTp01m7%2Fn%2BNRr1OomPW3ztAJt70O%2BxG6dNyQl5rVxrsjY1MIw1x1%2FEQIhstLD350S9tEse9JU%2BfM2aP8sxltkdn4IhpbJp3GWBuxr%2FxBEAsQiXY%2BKYtvvjNC6AwsfdyobXBCp7p3oBgQ37Vd3KLtbi2DK3VFfMDVxCAnXBYgT%2FoRgmzm1TG&X-Amz-Signature=6be15458531b6dae2a926c82dc96d45affe292d6ca4551711266f5a3f32e3623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

