---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL5APTC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF471yJEW8p%2Bb27FQQ9b6JCK8c1Hbg76WeCIFk%2BOOYIiAiEA66czyGKdUObkBNQ5o15yqxiyyOxz9xV6zdv35U52lwYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZvV1KuG269WH317SrcA1iwTsHV3UIiAa%2BFdoUjbjPLt%2BwwNOm3hq3TdCZmSWzsTt0P%2BIh%2F9I5MwddnjOAEXEsWtD8ae4NRZEOiS7R5DrgeZCgshr1gCYZ9U2p4ER1F6Q2niu%2BH6gX2acC5UEWhZg0AgskSX8S74zys3bOW2SO0Q8FuCSttC9RBmzHJ89bGq1ErHnAGMsXpx42sM8I5Ev8zp5ma8Zt1JYgLlmJFEvuoAp%2FLlSrCpDlpIDIddLsVHV1G1UGzqgnQqbuRwtkTnzrD%2FtJcvMmcPDvtzEbpNpDnmH%2FxN7KRNy0izPzD6BacP%2FyxxJZDVNDhPdrIKUxyq7OUIjXCZKB3O0LrVvr%2FYngfcbMzDzhgDt3gogw5y8hzHTx7zIGhmLXjVqlTC9lEAwOrV2E4isklWVNYkx4TI7f34a8uK5hWqs5UcNARw0Pfpe%2Blbqjf2cohWV2KPu4w8XCRIbcymEro7HHfuLaC%2FSH2X4dYHghJ6JOSvZMe2zpSb8PBRa%2Bg7pN3eCboKKISmgQAqSmsocs2xSfi6ibRC3aC4Sr%2BB9DgwD7psVY5zCdCrJ3kSQCJihTDCAN%2F2k%2BLopbbwDi%2F4zbJgqjoaxESYDyk52DCQndHeHuyZOU6KH8h8zak7yT6dx8jmGv3MK6Q28kGOqUBsqKr9ZTimAK2MdEKeay67BdUP6gJ9dlr9HxbeHXRREY6jaOatvpTrjh9kJs2RYqwUusY1tHttlhrf1m4JpzEhAcUW9o4xvIgjvQHToqEjnGhcCSk0jIAPtkZ9q99%2FSIsax4DviOTPFNfmU0FXVPhzoSRAAKV83oF8BXS5l9VrUbkI9uxQWSWCpaLfQsW8O5p3eDOrUpuMvgWZHgHNGtP41vrDF6n&X-Amz-Signature=716a3ca2da8a4d0b6465e3d4edd59ab81c97920f3269ce7a9f2f6adb1dd0ea0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL5APTC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF471yJEW8p%2Bb27FQQ9b6JCK8c1Hbg76WeCIFk%2BOOYIiAiEA66czyGKdUObkBNQ5o15yqxiyyOxz9xV6zdv35U52lwYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZvV1KuG269WH317SrcA1iwTsHV3UIiAa%2BFdoUjbjPLt%2BwwNOm3hq3TdCZmSWzsTt0P%2BIh%2F9I5MwddnjOAEXEsWtD8ae4NRZEOiS7R5DrgeZCgshr1gCYZ9U2p4ER1F6Q2niu%2BH6gX2acC5UEWhZg0AgskSX8S74zys3bOW2SO0Q8FuCSttC9RBmzHJ89bGq1ErHnAGMsXpx42sM8I5Ev8zp5ma8Zt1JYgLlmJFEvuoAp%2FLlSrCpDlpIDIddLsVHV1G1UGzqgnQqbuRwtkTnzrD%2FtJcvMmcPDvtzEbpNpDnmH%2FxN7KRNy0izPzD6BacP%2FyxxJZDVNDhPdrIKUxyq7OUIjXCZKB3O0LrVvr%2FYngfcbMzDzhgDt3gogw5y8hzHTx7zIGhmLXjVqlTC9lEAwOrV2E4isklWVNYkx4TI7f34a8uK5hWqs5UcNARw0Pfpe%2Blbqjf2cohWV2KPu4w8XCRIbcymEro7HHfuLaC%2FSH2X4dYHghJ6JOSvZMe2zpSb8PBRa%2Bg7pN3eCboKKISmgQAqSmsocs2xSfi6ibRC3aC4Sr%2BB9DgwD7psVY5zCdCrJ3kSQCJihTDCAN%2F2k%2BLopbbwDi%2F4zbJgqjoaxESYDyk52DCQndHeHuyZOU6KH8h8zak7yT6dx8jmGv3MK6Q28kGOqUBsqKr9ZTimAK2MdEKeay67BdUP6gJ9dlr9HxbeHXRREY6jaOatvpTrjh9kJs2RYqwUusY1tHttlhrf1m4JpzEhAcUW9o4xvIgjvQHToqEjnGhcCSk0jIAPtkZ9q99%2FSIsax4DviOTPFNfmU0FXVPhzoSRAAKV83oF8BXS5l9VrUbkI9uxQWSWCpaLfQsW8O5p3eDOrUpuMvgWZHgHNGtP41vrDF6n&X-Amz-Signature=e3e71df1826d5ab5c19b15b36f1995f6489a35e10e9b0fac1b9b840b43feceb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

