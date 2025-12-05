---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGFKMP2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbsIMv9Tze5kFGQSrcTI%2Fa9EQLZ2Zk1WNInm%2FSXTPtgAiBLT5gmgvRGMDPYaYBfTqCWo7PooXJbKwYLy2%2F95Tzhvir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3azxx%2Bqb8NN477EPKtwDcNH%2FR5XqWCRnBvbr0LmFUdzV0cg%2FtOF%2FGFrEqXToa6wYg9nLtRGrTbhDqeHEGcAhaOEOAs%2BWZwpakKoJ4%2BS3BN9J776QdZqOGmLrwieNx8o3w1PAtO6IDTwueMf1vK07leNmbnCiqSNV6%2BfRBf3U9FKNOAx57IDswS8BNSw9Btyd%2BN0IJ15vnDckTRyN5MPutTruHqHkoylwbyyAG27gb9iF5itj9YTcfo15yB4MNy00VVU2dz7%2BUQSQhdLU8CoaqP3yKY7HGqIt0DaWv79%2BbOIpXtikR%2FpWSvqmVM7cPN2y7xN1wwF440KsUOhWelteCgYRUg%2FSPdkC49ZTt1UqGlFg2B5IdRjjjGXKuWWCX1PuNC1m08jxxWxDhzumpVLzIyszm5FCxEHPjFyPyQNw5ZIl6ea1Zy5ku7iAIvZeD8bZTG5tVeW5LC2eZgGom5gRb2S7eYfTGXu2vT%2BicTYcN9PfaiVh3rweza5791CPJT8SnGE70G1lAptumdLH84gmDwtV6rvJLXU4SlbkQlYFk9a%2Fz2SgrBHouYgABZ1S1uIV20LwKtluR%2Fb7yb%2BRf3%2Bb1%2FyFj0Xkw96p4scfEeOSbZWv0K%2FQ%2ByGINJozOH3%2BPoTUlOvGCCicPX%2BikswwiZvNyQY6pgGVxE8CHEoT61ZRY%2FImR3zZ9FXHFhpHL3%2BgnTtJeLRQYPmiahHMsIbfaqEFWD820I%2F2bXMiS3xD1hHlYFWspjd0QSTJlmumFsnC5Wrfsi0jcxDBtAlIb2tZOJAe3%2FtYCzrhCTvWyOH8%2F9V0MGl2HqawHTYSdKNBP%2BljJlr60u5IAl9pl2mFdUKwiifxT8YQhQtqWruiwCYrfzg0GneowklSvAS1Wbqf&X-Amz-Signature=2a74c7b110fc662586f023c1639ca5248d981c4ffe91204f2d905217bf55a33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGFKMP2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbsIMv9Tze5kFGQSrcTI%2Fa9EQLZ2Zk1WNInm%2FSXTPtgAiBLT5gmgvRGMDPYaYBfTqCWo7PooXJbKwYLy2%2F95Tzhvir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3azxx%2Bqb8NN477EPKtwDcNH%2FR5XqWCRnBvbr0LmFUdzV0cg%2FtOF%2FGFrEqXToa6wYg9nLtRGrTbhDqeHEGcAhaOEOAs%2BWZwpakKoJ4%2BS3BN9J776QdZqOGmLrwieNx8o3w1PAtO6IDTwueMf1vK07leNmbnCiqSNV6%2BfRBf3U9FKNOAx57IDswS8BNSw9Btyd%2BN0IJ15vnDckTRyN5MPutTruHqHkoylwbyyAG27gb9iF5itj9YTcfo15yB4MNy00VVU2dz7%2BUQSQhdLU8CoaqP3yKY7HGqIt0DaWv79%2BbOIpXtikR%2FpWSvqmVM7cPN2y7xN1wwF440KsUOhWelteCgYRUg%2FSPdkC49ZTt1UqGlFg2B5IdRjjjGXKuWWCX1PuNC1m08jxxWxDhzumpVLzIyszm5FCxEHPjFyPyQNw5ZIl6ea1Zy5ku7iAIvZeD8bZTG5tVeW5LC2eZgGom5gRb2S7eYfTGXu2vT%2BicTYcN9PfaiVh3rweza5791CPJT8SnGE70G1lAptumdLH84gmDwtV6rvJLXU4SlbkQlYFk9a%2Fz2SgrBHouYgABZ1S1uIV20LwKtluR%2Fb7yb%2BRf3%2Bb1%2FyFj0Xkw96p4scfEeOSbZWv0K%2FQ%2ByGINJozOH3%2BPoTUlOvGCCicPX%2BikswwiZvNyQY6pgGVxE8CHEoT61ZRY%2FImR3zZ9FXHFhpHL3%2BgnTtJeLRQYPmiahHMsIbfaqEFWD820I%2F2bXMiS3xD1hHlYFWspjd0QSTJlmumFsnC5Wrfsi0jcxDBtAlIb2tZOJAe3%2FtYCzrhCTvWyOH8%2F9V0MGl2HqawHTYSdKNBP%2BljJlr60u5IAl9pl2mFdUKwiifxT8YQhQtqWruiwCYrfzg0GneowklSvAS1Wbqf&X-Amz-Signature=d27685cfd282a6260bdf5860f897717adec78ce7298a1ba9ca382a108b620a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

