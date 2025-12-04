---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WVMPU7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCjsmDPVMmzqo2LKK3IvjhlE%2FkZ9L07Uw9IPm20KLJPGQIhAKrQ43ihpNmjIRYPzRl1EJnu3PvzeKmSzQpagHQDMSrZKv8DCDoQABoMNjM3NDIzMTgzODA1IgxlZoljnYPBZldeZWkq3ANl09fDuitVj1Q2OVsy7ogh3%2FH%2F6R9B5fgSV3ETUCTPabEcJX9XxwyYoP3taxmoXJrzA5tOXU3pi5WipPv%2F1xfFjaPVBhTSp9rcDXbU1P9I%2Fb4%2FVPY9rdZFrG%2FIvym%2BzcrsQEaFChm%2FeqhdKbqa6YdU44fSaW1yIBlkLDR5vn9QPxef2nGo6DTxSYTSSUDZjo74v7qr4PYhtipdfHbkmVv7vjIPsB04AsEkIN2LDEs6DJBqC1BuptajZG5qwnzsOPxGFyC%2Bpzs31helxi5Lc5FTh0%2BFvTQwKxrTJVSMJGDoHMg8oD%2FWVCGMGBSSlivvG6Shs2T9FireHSzu0HbJh8d9paSp7XorBzlCyf3g8XW9hd7e2nlAbUHL1t6TN9mJcGMRNgWNbnv8kFeYyODcRTcO8nCeg8bL8VK1r0Uhz5agUDMLY14ISKBquwrq2PeIAeWQhwBoWVDB9Pfgts1dduQ6ZpjnJORvS%2FUzKPrsDanO3cDAfpHApoKZx2xzAMiIIm8RMlhjghbMO11IGUnc13ZvOUXbUfHdaZeAQljL36ztpYf16w3%2BNs5sdRbGmxx5M1uxiXBh5JPFn8AucBzA273pgJQfj876Nc3sA1uTwvOFsyjYTuIKFmy7d856TTCHtcPJBjqkAZOz35zWcu8mpNW6%2B9pHBLhcYOegpDA1en6FF%2B8iPyDTItqXxrDoerP1w4owszi2wSyR7LrWujZOIY8yOahP8x8ss2C%2BUTo1e%2FhD8H8tc8fQLBAWQtQBgYHZE80fnYtMWItjBlrA5qL77JvUbFAptj6ntibxP38WSq8FHv5XQ6Qm%2BCoA%2BVlIZzrPjJV%2FOmJY%2BWKufl6CaZWHEAnEaCoV416b18h7&X-Amz-Signature=87180583b7ad57a04ec23710c0838195eadaea02ca2fbaecccb7627c2dc9bf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WVMPU7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCjsmDPVMmzqo2LKK3IvjhlE%2FkZ9L07Uw9IPm20KLJPGQIhAKrQ43ihpNmjIRYPzRl1EJnu3PvzeKmSzQpagHQDMSrZKv8DCDoQABoMNjM3NDIzMTgzODA1IgxlZoljnYPBZldeZWkq3ANl09fDuitVj1Q2OVsy7ogh3%2FH%2F6R9B5fgSV3ETUCTPabEcJX9XxwyYoP3taxmoXJrzA5tOXU3pi5WipPv%2F1xfFjaPVBhTSp9rcDXbU1P9I%2Fb4%2FVPY9rdZFrG%2FIvym%2BzcrsQEaFChm%2FeqhdKbqa6YdU44fSaW1yIBlkLDR5vn9QPxef2nGo6DTxSYTSSUDZjo74v7qr4PYhtipdfHbkmVv7vjIPsB04AsEkIN2LDEs6DJBqC1BuptajZG5qwnzsOPxGFyC%2Bpzs31helxi5Lc5FTh0%2BFvTQwKxrTJVSMJGDoHMg8oD%2FWVCGMGBSSlivvG6Shs2T9FireHSzu0HbJh8d9paSp7XorBzlCyf3g8XW9hd7e2nlAbUHL1t6TN9mJcGMRNgWNbnv8kFeYyODcRTcO8nCeg8bL8VK1r0Uhz5agUDMLY14ISKBquwrq2PeIAeWQhwBoWVDB9Pfgts1dduQ6ZpjnJORvS%2FUzKPrsDanO3cDAfpHApoKZx2xzAMiIIm8RMlhjghbMO11IGUnc13ZvOUXbUfHdaZeAQljL36ztpYf16w3%2BNs5sdRbGmxx5M1uxiXBh5JPFn8AucBzA273pgJQfj876Nc3sA1uTwvOFsyjYTuIKFmy7d856TTCHtcPJBjqkAZOz35zWcu8mpNW6%2B9pHBLhcYOegpDA1en6FF%2B8iPyDTItqXxrDoerP1w4owszi2wSyR7LrWujZOIY8yOahP8x8ss2C%2BUTo1e%2FhD8H8tc8fQLBAWQtQBgYHZE80fnYtMWItjBlrA5qL77JvUbFAptj6ntibxP38WSq8FHv5XQ6Qm%2BCoA%2BVlIZzrPjJV%2FOmJY%2BWKufl6CaZWHEAnEaCoV416b18h7&X-Amz-Signature=eafea778e8f2b40def3cf4f7bc147b85a9bb1d9786fb799b57ca69a0f9a417ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

