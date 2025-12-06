---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IUSQSR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2AE9uXXRR0edz6xLqKyMCOhDxWWoJGm2YPmcgoa0OQIhALba8SgMPt4Ur3T5314cwH9uJSnwo6BIobNW1hvXyMZlKv8DCHUQABoMNjM3NDIzMTgzODA1IgytHBcEtioBPr5k4P0q3ANavYqSZEU2Exnrt6mj3er52rtBOLTBFUA06b21GoVdC%2FFLAU%2F5oTc%2BouWRJ3S2BqicDFUoZ253jmJmLR6ftCxus0AFwunsCqXh4OAEBDW8ei35G9YN9xMI6E1Bm1f%2BbObUf6UGqCw%2BvNM2UWHfnQeRbKyGVHskIxqq1C%2FixEXrbaKWToulPtIJt8OfeYzjXNsodZEg552us1w2mdGjbfD2TbmAOHmwOSvRkKf8MSYu0VGjKLL7F1Wi3kt3boE8Xc4f05yX4LWraWNy59d3lCtVJopxF6t35E%2Fe8x43YwRrEfi6JoKrNoyuxjOH1t0ki0Xf235aBV7MhBfp4a68NyuMacbt7fP94UA9h6UIvgKg9DCnS3%2FRJNm1oHQl6T3jq7XZ3ePgP9HWsgvu8SwWq%2FP2VjLICmvGMQbAQNmYBU8c58WIKsqS29LtaPEO3feXmbdppf81n9jCUI0TpYmUYH2Mju9DqpHlD8dMlyEBpPeOQhSKy5UF94ZYJTo6eWp%2BxYou0evgnt%2BC7Ci9lw8TaIsnPlTwmuUbyFUoP1ST9muldez9j39NSA9gubYnVedWVTeQx%2BL%2B4chQ%2BeH1nAXFqhuIyVz0JYQo2cOC5MZRUhbUA1od6%2FtdqJlClbhWkzCQp9DJBjqkAaqU81fwOSvKEA4no9v%2FvgfSDmswnVbIkoTNRD0CrR1i%2B%2Fi3Y%2FyKEcCc7e%2BLopMXH3oIYKZQy8l15dG9dFWd2OfQZh5OZxHAS53JFJ2eerc6rjifjhJrZq4cSKhGRPc1N%2BEz8LmxQfU7O8281%2F6xsTx91P%2BBnJ9tJn0CHUKOkVOEMw%2F%2B5I%2BMZl4m93o1%2FfcvjF4Nhx5jKf82MbjNAOtJxwItnOVy&X-Amz-Signature=8af4b8a287d02befc31ec89653f9d047f23850500ce7af625930975a7e16f584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IUSQSR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2AE9uXXRR0edz6xLqKyMCOhDxWWoJGm2YPmcgoa0OQIhALba8SgMPt4Ur3T5314cwH9uJSnwo6BIobNW1hvXyMZlKv8DCHUQABoMNjM3NDIzMTgzODA1IgytHBcEtioBPr5k4P0q3ANavYqSZEU2Exnrt6mj3er52rtBOLTBFUA06b21GoVdC%2FFLAU%2F5oTc%2BouWRJ3S2BqicDFUoZ253jmJmLR6ftCxus0AFwunsCqXh4OAEBDW8ei35G9YN9xMI6E1Bm1f%2BbObUf6UGqCw%2BvNM2UWHfnQeRbKyGVHskIxqq1C%2FixEXrbaKWToulPtIJt8OfeYzjXNsodZEg552us1w2mdGjbfD2TbmAOHmwOSvRkKf8MSYu0VGjKLL7F1Wi3kt3boE8Xc4f05yX4LWraWNy59d3lCtVJopxF6t35E%2Fe8x43YwRrEfi6JoKrNoyuxjOH1t0ki0Xf235aBV7MhBfp4a68NyuMacbt7fP94UA9h6UIvgKg9DCnS3%2FRJNm1oHQl6T3jq7XZ3ePgP9HWsgvu8SwWq%2FP2VjLICmvGMQbAQNmYBU8c58WIKsqS29LtaPEO3feXmbdppf81n9jCUI0TpYmUYH2Mju9DqpHlD8dMlyEBpPeOQhSKy5UF94ZYJTo6eWp%2BxYou0evgnt%2BC7Ci9lw8TaIsnPlTwmuUbyFUoP1ST9muldez9j39NSA9gubYnVedWVTeQx%2BL%2B4chQ%2BeH1nAXFqhuIyVz0JYQo2cOC5MZRUhbUA1od6%2FtdqJlClbhWkzCQp9DJBjqkAaqU81fwOSvKEA4no9v%2FvgfSDmswnVbIkoTNRD0CrR1i%2B%2Fi3Y%2FyKEcCc7e%2BLopMXH3oIYKZQy8l15dG9dFWd2OfQZh5OZxHAS53JFJ2eerc6rjifjhJrZq4cSKhGRPc1N%2BEz8LmxQfU7O8281%2F6xsTx91P%2BBnJ9tJn0CHUKOkVOEMw%2F%2B5I%2BMZl4m93o1%2FfcvjF4Nhx5jKf82MbjNAOtJxwItnOVy&X-Amz-Signature=35a669fedce7e7b1be8b4dff323ca7e376d7d6e286502312272c65da954bc8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

