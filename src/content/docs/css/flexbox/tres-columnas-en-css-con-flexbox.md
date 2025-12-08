---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSNM3EY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FAc5rZpUJgKtW1M0kgINJAfavsnsfjCKQY7sW2DhzdgIhAIXHGk6zDr9I2hXz%2Bmm%2BNFhOzTW%2F72V3EvEqU30fDvzsKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcTqtOKND%2Bw4iutccq3AN85m%2F0icVla%2B3rhRlHZu%2BWIfveT8bf5%2F1nIgu6%2BiUC%2FrSWLdtOmq5M661sHXHnWpTkLbAdAV%2BXpG4aumS4QF5s9KZ9bGGmmY2NXaq0N5qYdVbbp3M9FW%2BgW1gWJEU%2BNePj1SwuM2yKZre1X5fTbk7AJcDqmmDeCByoZ0pYj%2BShVJACOLTqWaKQY02E01XlWxMLh%2FRsKIdMuDqXiWi37RwQlRujIsff1t2rejNOmkhW%2BRS5TMS93sTBwWgf4J0KKkv%2BhkGpc1GlAtT9BHIuJFMMS5ukwYk5PiuO%2FIHwwqZYE1pi5iyLJLzRTef5FFtuLoU6xEi7YqlhKqxMrGXkVPau2E7IArNrvR8WmSc2EpBYd07KTGGtrO5D%2F0gNdeZ5OJK5%2BslKDtV6IxUtURpKm%2BGaH3cCy3Np8j%2FBjoaU4jnXTMZBmIhvBbS0edIZdjERhQoMHtlOlnuGQUy9ALlqdKv7zwEh3MsZywbePhoVD1E%2F50xIRov9Vv9TuY1IGe1npuD%2FD9PtKwk%2F5Eo4LCHLrtrrrAHMIxDp1aJph6bv1HbtuxWQplRA1W9ugdCRHr5y%2B%2ByGa4CHzXc1ANfpLcnmDhXNQkVGh%2B6KtJn6QuX7oUIjbNYaFdiVk9JXw9sQ0jCg5NvJBjqkAccaJJPJmhNXu53QtazOG3DWleHv6eeqXM8WgokkpuZ51AdgVuvNeMkuJkZzCcvuA4mzHjhMlrv7mAWxN%2FsuGjU0u8CRFU5ADS2Ci3ZnNohYRTL%2Fd1JcRaT%2FGH8LulYLU3auFX7n4Ey6rUzm0zYnvVcFkCyFAtGbVPh0ICJYMawl7VTHr%2FFcN0HuyA%2BR3vIWHnYI4bq%2BayZ%2B9dhHLSEWXzRICRDH&X-Amz-Signature=76fcdd553f1bb5a86801022bad6f594ed9d17f2bb13579abd4c431a1df829875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSNM3EY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FAc5rZpUJgKtW1M0kgINJAfavsnsfjCKQY7sW2DhzdgIhAIXHGk6zDr9I2hXz%2Bmm%2BNFhOzTW%2F72V3EvEqU30fDvzsKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcTqtOKND%2Bw4iutccq3AN85m%2F0icVla%2B3rhRlHZu%2BWIfveT8bf5%2F1nIgu6%2BiUC%2FrSWLdtOmq5M661sHXHnWpTkLbAdAV%2BXpG4aumS4QF5s9KZ9bGGmmY2NXaq0N5qYdVbbp3M9FW%2BgW1gWJEU%2BNePj1SwuM2yKZre1X5fTbk7AJcDqmmDeCByoZ0pYj%2BShVJACOLTqWaKQY02E01XlWxMLh%2FRsKIdMuDqXiWi37RwQlRujIsff1t2rejNOmkhW%2BRS5TMS93sTBwWgf4J0KKkv%2BhkGpc1GlAtT9BHIuJFMMS5ukwYk5PiuO%2FIHwwqZYE1pi5iyLJLzRTef5FFtuLoU6xEi7YqlhKqxMrGXkVPau2E7IArNrvR8WmSc2EpBYd07KTGGtrO5D%2F0gNdeZ5OJK5%2BslKDtV6IxUtURpKm%2BGaH3cCy3Np8j%2FBjoaU4jnXTMZBmIhvBbS0edIZdjERhQoMHtlOlnuGQUy9ALlqdKv7zwEh3MsZywbePhoVD1E%2F50xIRov9Vv9TuY1IGe1npuD%2FD9PtKwk%2F5Eo4LCHLrtrrrAHMIxDp1aJph6bv1HbtuxWQplRA1W9ugdCRHr5y%2B%2ByGa4CHzXc1ANfpLcnmDhXNQkVGh%2B6KtJn6QuX7oUIjbNYaFdiVk9JXw9sQ0jCg5NvJBjqkAccaJJPJmhNXu53QtazOG3DWleHv6eeqXM8WgokkpuZ51AdgVuvNeMkuJkZzCcvuA4mzHjhMlrv7mAWxN%2FsuGjU0u8CRFU5ADS2Ci3ZnNohYRTL%2Fd1JcRaT%2FGH8LulYLU3auFX7n4Ey6rUzm0zYnvVcFkCyFAtGbVPh0ICJYMawl7VTHr%2FFcN0HuyA%2BR3vIWHnYI4bq%2BayZ%2B9dhHLSEWXzRICRDH&X-Amz-Signature=591f8ad37cdaeaa2b51695cd0dc108223c689d3051bf86d48404009b6f535798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

