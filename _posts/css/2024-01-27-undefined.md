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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGY4W6L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH%2FTkQxF%2FlCDdBlyc9qAT0V%2FONNG5K9G3gr1W4hlvP7wAiBAgw9sbariItaQKGR07GuRMhtHChwYIVO%2FllKiicdp3yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMq1IWb7uR%2BGsebgmjKtwDRUaR0H75kDZrhxd8y%2FsIVn8ZiamYAIDCdZHJHn45ZqVacQmT574EUt%2Bl2j%2FoKmd6yLBF4LCMxy0%2B73VzON51veanzgof%2FUFsdaHw9chFOqOLBAk4JkzWQuLwC%2BDYYDrB0ouOiMdWZIiaTP43%2FuvCiAaMibSSWaH5xP8YIFUzLZdE%2FG0HCwf95dxYNdH%2B6MkPX%2FpP46d35NZbxtbycq6HKHBxD4iz0vw2WtOMMLu2CKnYDxrflgKN5X8nmd2X%2Bt5nvk8vG9cSlvgDeCGgLLTYr%2Bqen5lNUn1%2BcesngdX8a1XUt%2Fc3%2FQ9TJLNcjH9%2BlXW1xio43r3pQ6TLMGMeRjSBTLQn%2FYs6BEP%2FCI9Gbf2lCuQCevSwpUYaVcXcOglZ3chlL5EZIhXF%2Fhl6qsbQBNoAsCvvcMaDMz0gWSArqd275fBLK8YPm8nJzcb6fUcOJ9b9NnCqInEw442j9enxHtx53iOm%2FMg5XuDxV6BWNIihebhLRaXwXTf1FBZiEayTtAZMuMGX6f%2FrdJmJHDrq2VFWW5TY8VRHlH814HB30VUq%2FcYp60xi3Jxd1MwlCUiDtwtoHE50OfCK%2B8C%2B3bZQ8I7ixuZKe65sSMAxbwTS4bH2f6tv8GJcLT79ajea54Ew45W%2ByQY6pgEVPPN%2BG7Dk6%2BhFuWAe2r1CjgSR0LCKh%2BqTokUDXeYObtAFsXoeRtpN11PojwMwSBquxcd7swvHz%2FJZCjVGtfIs6h1Ew4ZiXCbHpxkWFz5wC5KZ54DtKGJHtFL2CKt9WuxMtgsgo82YcxPwH2iQMdK5Dcv6b4M8fyFyjebMDKroQjgVELpcpmfavocBXobATU9t4n8MJYSRlz8SkULhf2BI17LTQ7My&X-Amz-Signature=806c9828a70ba3f580463238d16aea54c0af4f18bd524b483b51e82070d60a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGY4W6L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH%2FTkQxF%2FlCDdBlyc9qAT0V%2FONNG5K9G3gr1W4hlvP7wAiBAgw9sbariItaQKGR07GuRMhtHChwYIVO%2FllKiicdp3yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMq1IWb7uR%2BGsebgmjKtwDRUaR0H75kDZrhxd8y%2FsIVn8ZiamYAIDCdZHJHn45ZqVacQmT574EUt%2Bl2j%2FoKmd6yLBF4LCMxy0%2B73VzON51veanzgof%2FUFsdaHw9chFOqOLBAk4JkzWQuLwC%2BDYYDrB0ouOiMdWZIiaTP43%2FuvCiAaMibSSWaH5xP8YIFUzLZdE%2FG0HCwf95dxYNdH%2B6MkPX%2FpP46d35NZbxtbycq6HKHBxD4iz0vw2WtOMMLu2CKnYDxrflgKN5X8nmd2X%2Bt5nvk8vG9cSlvgDeCGgLLTYr%2Bqen5lNUn1%2BcesngdX8a1XUt%2Fc3%2FQ9TJLNcjH9%2BlXW1xio43r3pQ6TLMGMeRjSBTLQn%2FYs6BEP%2FCI9Gbf2lCuQCevSwpUYaVcXcOglZ3chlL5EZIhXF%2Fhl6qsbQBNoAsCvvcMaDMz0gWSArqd275fBLK8YPm8nJzcb6fUcOJ9b9NnCqInEw442j9enxHtx53iOm%2FMg5XuDxV6BWNIihebhLRaXwXTf1FBZiEayTtAZMuMGX6f%2FrdJmJHDrq2VFWW5TY8VRHlH814HB30VUq%2FcYp60xi3Jxd1MwlCUiDtwtoHE50OfCK%2B8C%2B3bZQ8I7ixuZKe65sSMAxbwTS4bH2f6tv8GJcLT79ajea54Ew45W%2ByQY6pgEVPPN%2BG7Dk6%2BhFuWAe2r1CjgSR0LCKh%2BqTokUDXeYObtAFsXoeRtpN11PojwMwSBquxcd7swvHz%2FJZCjVGtfIs6h1Ew4ZiXCbHpxkWFz5wC5KZ54DtKGJHtFL2CKt9WuxMtgsgo82YcxPwH2iQMdK5Dcv6b4M8fyFyjebMDKroQjgVELpcpmfavocBXobATU9t4n8MJYSRlz8SkULhf2BI17LTQ7My&X-Amz-Signature=e7eba9b412ad37b65f6c85ce81226feceb5567d9276410bb873ca15d480b05cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

