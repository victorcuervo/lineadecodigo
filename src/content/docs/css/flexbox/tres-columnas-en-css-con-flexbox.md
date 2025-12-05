---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I2RMCF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6fdGJAhcBavNhCYYVNZvIBoIT9KdE%2BAzZPByZTRapUAiEAzs4tQ34%2FmnSV6Pjs7jaFKNJE%2B0x0eR2FBF6M%2Bw3h8sAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGc0QhJi7PU5N1AyVyrcA1ho%2Ff855DiPPre0OdKmjCy10IhHFMzEItGaCO4lx6amVZdG10hfzicgVTTLwKyTr3EvZhi22NsPxIT5ksEVlc2WIOEHhblWiwtAjh0mO9tfD3NFgZ3okEISCZPWXAY8m0vlbgr4%2FaEJPWJG2ws1oFmYSU44Y288%2BJ%2Fb6acGilZjc8u1JXd57kfTW5C%2FRmBfAZnipxz5MwuXyFtOLRoRkAV56nDj1PQPlayuYSSMM3WDNGWdap%2BE6qzDRFg%2B83DdSIE0TG%2B2kC7LqskmSFuyJRKxYV6q4wa0M73PbLrZyWu9GUbcOlV5SNEW9exkcvdZahIVYpakT3c6gjdi9lMq5GAuIvqBpm5T%2BOBnkT3BWgr%2BqpO%2FLhix%2BGg7g6aafpfsTOdv4i1vac3GDaD2x38Yd6o5tOFi8Py%2FhbgdpRTGyu4BLs9Wj2NycA%2Ft651QZP%2BRHVR%2BXlezGuI5Wy2osvgf92zXTeCF6cIver6qnVGNbl3GZ4En%2FrRyDNxxRBSBstBaQFPv1m7zoBdcdDx5N5xo8mvyOtYQ6GsY8dLFYdXtlqSbs2%2BRdDQldrsCX83B3Xh%2FAbB2K2Mg2%2BbVxaKN2Au%2BJRum4f0xgrcRWgFuNjAmfifyW%2BttyoznetLfOU7vMIfQyskGOqUBGVH3h4XpriIJ0oIBQRgJYLQtStlEcjO5JUfb6Y%2BgwDccTR4Rx0z2FJkl8T5DzHrx1OppaP4SaNhUgQFvf9YZcFXdk4H3o9Zzdy2nEKaThd%2FkL2qsui2pL6TblLmAQfbnbTXmdf8zR6PrzniDg0eO8ZVJedlx0M3S7zHVxnWqzQY2SP0ZdRc6RwQ2jgkgAKFL7tjHwxXn8%2Fezud%2BHVkCh4w0q9PCW&X-Amz-Signature=34629e1843ea93f6de192a36697f83c7e7fde11962f2794bc67a190c0cdf2af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I2RMCF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6fdGJAhcBavNhCYYVNZvIBoIT9KdE%2BAzZPByZTRapUAiEAzs4tQ34%2FmnSV6Pjs7jaFKNJE%2B0x0eR2FBF6M%2Bw3h8sAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGc0QhJi7PU5N1AyVyrcA1ho%2Ff855DiPPre0OdKmjCy10IhHFMzEItGaCO4lx6amVZdG10hfzicgVTTLwKyTr3EvZhi22NsPxIT5ksEVlc2WIOEHhblWiwtAjh0mO9tfD3NFgZ3okEISCZPWXAY8m0vlbgr4%2FaEJPWJG2ws1oFmYSU44Y288%2BJ%2Fb6acGilZjc8u1JXd57kfTW5C%2FRmBfAZnipxz5MwuXyFtOLRoRkAV56nDj1PQPlayuYSSMM3WDNGWdap%2BE6qzDRFg%2B83DdSIE0TG%2B2kC7LqskmSFuyJRKxYV6q4wa0M73PbLrZyWu9GUbcOlV5SNEW9exkcvdZahIVYpakT3c6gjdi9lMq5GAuIvqBpm5T%2BOBnkT3BWgr%2BqpO%2FLhix%2BGg7g6aafpfsTOdv4i1vac3GDaD2x38Yd6o5tOFi8Py%2FhbgdpRTGyu4BLs9Wj2NycA%2Ft651QZP%2BRHVR%2BXlezGuI5Wy2osvgf92zXTeCF6cIver6qnVGNbl3GZ4En%2FrRyDNxxRBSBstBaQFPv1m7zoBdcdDx5N5xo8mvyOtYQ6GsY8dLFYdXtlqSbs2%2BRdDQldrsCX83B3Xh%2FAbB2K2Mg2%2BbVxaKN2Au%2BJRum4f0xgrcRWgFuNjAmfifyW%2BttyoznetLfOU7vMIfQyskGOqUBGVH3h4XpriIJ0oIBQRgJYLQtStlEcjO5JUfb6Y%2BgwDccTR4Rx0z2FJkl8T5DzHrx1OppaP4SaNhUgQFvf9YZcFXdk4H3o9Zzdy2nEKaThd%2FkL2qsui2pL6TblLmAQfbnbTXmdf8zR6PrzniDg0eO8ZVJedlx0M3S7zHVxnWqzQY2SP0ZdRc6RwQ2jgkgAKFL7tjHwxXn8%2Fezud%2BHVkCh4w0q9PCW&X-Amz-Signature=8a6901404d233b7952f50029dd3bb9ed3009fc4288c42d3671f581ff11acdefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

