---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5J5CGCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwXF6cc95DnnI62%2Fg61g7ALHGcTbfKVqQ6d0O6R3HOAiBgX2gRESo7iPLcIuV7GfTUlq%2BkC%2F6DrTEtDKfBkordWCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMDB3rr5vXB2yP%2BRT7KtwDOyBJ00xfcFpTKKr2yHWs7olWfYD2UbePNQL3%2B%2F0RzPiAx4Thsqp0pe%2FNEndK4zMS0m0dyCV2P1aEq5KIIQEqEQr8dzdDhjkaeQpVx2EPiJXn5b%2B9DadsnNP46OhAon35JUK1rmf%2F85pf496%2F7PC8%2FsJ4vMplKqnLD5Kj0EcZ%2FjK%2FWoIQ1Fyp7dd%2B25mkEtqrXYap%2BczJM4ZdINHe387V1IMYFoKKaQO8BGl3syY4JBUr%2BU3%2FkCO5Y2cn7gpgclHpXZ8T3b0wdEDvjOnUIjAhXoU3q%2FGA5NnK77shIP2UQUsUEanRJ3qcdVZQIYrjPwf7HfQPu6wBDvhJjywTMUh0WCYSyyc5xtQRRRPZSL3L8E8nIlXNKAdsswIxsOt6YGgdKwDNemmvVddsRa2K%2BYbCM6m2wTs3UGlrduYq%2FFV0jnOJ4XduI7L1j84YUZsGT44PknydnWPJS%2BzWm0ynsdWuJa%2BC2hhiGRG2Rq9pqz1aKe%2Bt7T08ilPDHWmSN5pQx9CoNFcUjd920o7llxgw8DU5n%2FgTFDAGa55lrnIJEicDt2bYMaE0wb3iygpKo5Mm7MBflEBmFQIzBMdoGeV8XBTMBmKuK2mibnzkpLRJ6v5J%2F1dC3yk1Kq7fvakR4nAwp97OyQY6pgF31rIRVVVi%2Bt16L7HZ%2F2630z8mDjAaTmIO%2BC6j2fVx91V3y5HGPGcL0v%2Bjk9KzHAqKckSDp0buo%2BkSv0XpD1kWD3DAHAZy84cdrY7R7ShbRBGe6mhcPQrkacDB%2FCxS7EKkWrzqByE222fhAFz2yfZHGD7rFPi2ci7NuTbkVVtDqAas5xkJxa3SrGa6MpbS74b0UH5H7rejzuPNY2Njxk4jqyt20uSi&X-Amz-Signature=bb1d9041a37a12f075c6eb9d01686eae09e797386f046218f891824d6405b9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5J5CGCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVwXF6cc95DnnI62%2Fg61g7ALHGcTbfKVqQ6d0O6R3HOAiBgX2gRESo7iPLcIuV7GfTUlq%2BkC%2F6DrTEtDKfBkordWCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMDB3rr5vXB2yP%2BRT7KtwDOyBJ00xfcFpTKKr2yHWs7olWfYD2UbePNQL3%2B%2F0RzPiAx4Thsqp0pe%2FNEndK4zMS0m0dyCV2P1aEq5KIIQEqEQr8dzdDhjkaeQpVx2EPiJXn5b%2B9DadsnNP46OhAon35JUK1rmf%2F85pf496%2F7PC8%2FsJ4vMplKqnLD5Kj0EcZ%2FjK%2FWoIQ1Fyp7dd%2B25mkEtqrXYap%2BczJM4ZdINHe387V1IMYFoKKaQO8BGl3syY4JBUr%2BU3%2FkCO5Y2cn7gpgclHpXZ8T3b0wdEDvjOnUIjAhXoU3q%2FGA5NnK77shIP2UQUsUEanRJ3qcdVZQIYrjPwf7HfQPu6wBDvhJjywTMUh0WCYSyyc5xtQRRRPZSL3L8E8nIlXNKAdsswIxsOt6YGgdKwDNemmvVddsRa2K%2BYbCM6m2wTs3UGlrduYq%2FFV0jnOJ4XduI7L1j84YUZsGT44PknydnWPJS%2BzWm0ynsdWuJa%2BC2hhiGRG2Rq9pqz1aKe%2Bt7T08ilPDHWmSN5pQx9CoNFcUjd920o7llxgw8DU5n%2FgTFDAGa55lrnIJEicDt2bYMaE0wb3iygpKo5Mm7MBflEBmFQIzBMdoGeV8XBTMBmKuK2mibnzkpLRJ6v5J%2F1dC3yk1Kq7fvakR4nAwp97OyQY6pgF31rIRVVVi%2Bt16L7HZ%2F2630z8mDjAaTmIO%2BC6j2fVx91V3y5HGPGcL0v%2Bjk9KzHAqKckSDp0buo%2BkSv0XpD1kWD3DAHAZy84cdrY7R7ShbRBGe6mhcPQrkacDB%2FCxS7EKkWrzqByE222fhAFz2yfZHGD7rFPi2ci7NuTbkVVtDqAas5xkJxa3SrGa6MpbS74b0UH5H7rejzuPNY2Njxk4jqyt20uSi&X-Amz-Signature=9c80c9037f2068a9b3d2b72fd339f56da42916f3c3346aba92918a60331272d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

