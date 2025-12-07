---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=c3348d46ce115d55d6d945eb3f28b21f499a68dc2aba2a66455456d3e64efa10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=b1f67360d724b6a769340c8da05f4b96681951745a598d91ad03ecab40da49a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

