---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWZH3CT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBQvKC6V9r%2Bc%2B50%2FUACppHFZ9fj0sQAo33Z75FCkkggcAiEA9UNEigxxR1FxybxEIA%2BUW9p2%2Bs1Lr6CtPwRFoGTwS4Iq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKuseJQrKDjnVJEpCCrcA%2Bfr3WwZn0GiE5w9nYADRDd%2FSWHoJyuuLXxnZg0Zur0FXjGh5WGfcDpkv2E6mym3ENUWpipqYJmy%2Fypc%2FUKiYAUpX73HXk4hgHCXnPDJLNWdvFiZKvC2cK0yHKfq2alpFT8JovAKjI2HuuyQYlsHH1CIwHvoyRH1vaLsXyDH1I%2Fydo%2FYS2t8Z0Ber%2Bbz4E%2FNMqpSwzmjdoWTsaAJdCIctXHbHlnuQiHcH8XkL0HUcRC9i6An25eISfNCeSbualJjeQH%2Bdyk7h47Pbp6Pfl7xm9pK43UJ8eeDcSSl4P621bZy%2Be%2FuMQqTOszerLjyLXep2Ov25KkRm3VQuPKBTv01ZmwVkuhu5Y%2F6ihq7kKgRfSti2iwLjLxz2i7sJnJByk3ahS%2BA%2F3noiLrxtGLie1q%2FkMbb7U5uIyVN7m7oMlL10KscmQf9EOp5BVFCC0Rg7su7SvIM2lA340f%2FjZ39gUcqdV%2Bk4Xqa00ynpMZHCw%2BF%2B%2FRcoDrYR3YpvfW7NdwxR%2Fo4k4iqZ21IUmHsA6L8tI%2B%2FCUQzaeddKltk%2BdIIM44ULvGWtfrpletnr%2Fj7xMhkcLvBZxOuj%2FwsOcjNZlvuC5o3EZn1Pm4TQrsauYn7TlEX5XgqglKHjx4b%2Bl6bNO1aMIDWv8kGOqUBPolAE6%2FMUXwv3Hj6ADcnykjaVSqPNviysOGOO1IOOMCr7dRHWy8W06uMZt79qkeZdfzo0zI%2B0Dn1fv0OiJ0PUS%2BBbIiDKjLWAThMiYYe4%2BnM8JlruvkMRZ%2BnIupa2LEdkq%2FiUVpfYE9yo9y%2BBhKEbrMsRH146GvavZsGtlww2gUBKfqyPjr2UKEUhwcbPboLXL2iakXwXeIgAUUnAqG9m%2FyB6xZE&X-Amz-Signature=8fdb18450e4d08929e746c2c8b0387530fb078321751c79be7277b3d7158bf64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHWZH3CT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBQvKC6V9r%2Bc%2B50%2FUACppHFZ9fj0sQAo33Z75FCkkggcAiEA9UNEigxxR1FxybxEIA%2BUW9p2%2Bs1Lr6CtPwRFoGTwS4Iq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKuseJQrKDjnVJEpCCrcA%2Bfr3WwZn0GiE5w9nYADRDd%2FSWHoJyuuLXxnZg0Zur0FXjGh5WGfcDpkv2E6mym3ENUWpipqYJmy%2Fypc%2FUKiYAUpX73HXk4hgHCXnPDJLNWdvFiZKvC2cK0yHKfq2alpFT8JovAKjI2HuuyQYlsHH1CIwHvoyRH1vaLsXyDH1I%2Fydo%2FYS2t8Z0Ber%2Bbz4E%2FNMqpSwzmjdoWTsaAJdCIctXHbHlnuQiHcH8XkL0HUcRC9i6An25eISfNCeSbualJjeQH%2Bdyk7h47Pbp6Pfl7xm9pK43UJ8eeDcSSl4P621bZy%2Be%2FuMQqTOszerLjyLXep2Ov25KkRm3VQuPKBTv01ZmwVkuhu5Y%2F6ihq7kKgRfSti2iwLjLxz2i7sJnJByk3ahS%2BA%2F3noiLrxtGLie1q%2FkMbb7U5uIyVN7m7oMlL10KscmQf9EOp5BVFCC0Rg7su7SvIM2lA340f%2FjZ39gUcqdV%2Bk4Xqa00ynpMZHCw%2BF%2B%2FRcoDrYR3YpvfW7NdwxR%2Fo4k4iqZ21IUmHsA6L8tI%2B%2FCUQzaeddKltk%2BdIIM44ULvGWtfrpletnr%2Fj7xMhkcLvBZxOuj%2FwsOcjNZlvuC5o3EZn1Pm4TQrsauYn7TlEX5XgqglKHjx4b%2Bl6bNO1aMIDWv8kGOqUBPolAE6%2FMUXwv3Hj6ADcnykjaVSqPNviysOGOO1IOOMCr7dRHWy8W06uMZt79qkeZdfzo0zI%2B0Dn1fv0OiJ0PUS%2BBbIiDKjLWAThMiYYe4%2BnM8JlruvkMRZ%2BnIupa2LEdkq%2FiUVpfYE9yo9y%2BBhKEbrMsRH146GvavZsGtlww2gUBKfqyPjr2UKEUhwcbPboLXL2iakXwXeIgAUUnAqG9m%2FyB6xZE&X-Amz-Signature=16c3e0b48a6f11b1233ff760e0581fab7b53e88adfc30b525e833cf8d8feda56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

