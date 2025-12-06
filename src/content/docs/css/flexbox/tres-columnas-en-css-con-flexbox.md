---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2S5EO6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bZDQi7qnoNpq8mpc9fDjvxZ8WR%2BsGrk3ZxOInEfZPAiAj1EVcCKbRCO33t0%2F4g%2BYVUpeBS7EVPz032Uv5TbY%2FMyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7%2FEUZSn4D0whEBs9KtwDbWJd6%2F2ETChIF%2Fcdoz2C1pNC5RmlSsLcod0VPrBkicqz8H6k0rUf%2BOZwIhZoiPPF0G27Dyj3LPDQ5G7XEu9g6Z21awQkPVpr3buqvJcTE3PXstrjUZh9itde10zOBBArE448RUOM9%2B8koaUoSRoHXUxi8rpeTIjhXhKIUy6cdC66%2BZiWkug8qwOfOdzT5t2TKxWr3Q60K8LlAk471CdN8oOwMMVnOEQgVjqqkrgbb6KACNut3r31dFuePcKCye4UQJgdzLljp%2FKMHu%2FMNEoUmP%2FrVNLAUCmCXMUYuxuL60sZVGJS1HRfyq1nq0kPn2BR%2BAwuLdMWB1n0Ph9KIkfTvLBfPM3uRfl15mROtXIIM7utHDoA4rgtb5YmUCmipLu6jpQ80NeYHbbkzLz0xAGgsklJT5OcUBNYtBOhF0dydCd1zvPON%2BFJiUjvYEeje37qcD7kA9R9OZEDXP8HbKFjXsLV%2B1l1eYvSMqMpuhWbIlTXu9zcqWc5JDfJt99W9rpGA1dzWgFl1iGEcKkv1fsKXmPonmDdZIC0vpr8HMfZ9xmZE8%2FoHKfS43QM10XvkWg0zTcxpLr4dRBsmFY7Io3lh5B0%2FIHgJTQAiIWA7zdZY93X6E%2FRyl3i5v8NI7IwwsbRyQY6pgGVSuU6LqvZ5br6F%2B81otcZdmd9H3Qm5bOScQ8JMcnruXjn2b6hYNrV%2FMJZVOcextJ3OSxfU7%2Bkgr8duvNpEtJnHuEL5tDhn70MDgvVy25acXoC6GGSsOGQ5VadDyY10RXjsOM%2FO9DI6QQwqb2kfNDzJzzWBgjkkn4raoNUXanHUyZ5lYOpKyWLDSf%2BSFcLk4YPokxQURbjr8y3zDWEj1EqYOSD7kw%2B&X-Amz-Signature=b14650282b4f4f5dbdbfa07f4ca70b7d8093f74720933b60d5c97b023a2f6a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2S5EO6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9bZDQi7qnoNpq8mpc9fDjvxZ8WR%2BsGrk3ZxOInEfZPAiAj1EVcCKbRCO33t0%2F4g%2BYVUpeBS7EVPz032Uv5TbY%2FMyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7%2FEUZSn4D0whEBs9KtwDbWJd6%2F2ETChIF%2Fcdoz2C1pNC5RmlSsLcod0VPrBkicqz8H6k0rUf%2BOZwIhZoiPPF0G27Dyj3LPDQ5G7XEu9g6Z21awQkPVpr3buqvJcTE3PXstrjUZh9itde10zOBBArE448RUOM9%2B8koaUoSRoHXUxi8rpeTIjhXhKIUy6cdC66%2BZiWkug8qwOfOdzT5t2TKxWr3Q60K8LlAk471CdN8oOwMMVnOEQgVjqqkrgbb6KACNut3r31dFuePcKCye4UQJgdzLljp%2FKMHu%2FMNEoUmP%2FrVNLAUCmCXMUYuxuL60sZVGJS1HRfyq1nq0kPn2BR%2BAwuLdMWB1n0Ph9KIkfTvLBfPM3uRfl15mROtXIIM7utHDoA4rgtb5YmUCmipLu6jpQ80NeYHbbkzLz0xAGgsklJT5OcUBNYtBOhF0dydCd1zvPON%2BFJiUjvYEeje37qcD7kA9R9OZEDXP8HbKFjXsLV%2B1l1eYvSMqMpuhWbIlTXu9zcqWc5JDfJt99W9rpGA1dzWgFl1iGEcKkv1fsKXmPonmDdZIC0vpr8HMfZ9xmZE8%2FoHKfS43QM10XvkWg0zTcxpLr4dRBsmFY7Io3lh5B0%2FIHgJTQAiIWA7zdZY93X6E%2FRyl3i5v8NI7IwwsbRyQY6pgGVSuU6LqvZ5br6F%2B81otcZdmd9H3Qm5bOScQ8JMcnruXjn2b6hYNrV%2FMJZVOcextJ3OSxfU7%2Bkgr8duvNpEtJnHuEL5tDhn70MDgvVy25acXoC6GGSsOGQ5VadDyY10RXjsOM%2FO9DI6QQwqb2kfNDzJzzWBgjkkn4raoNUXanHUyZ5lYOpKyWLDSf%2BSFcLk4YPokxQURbjr8y3zDWEj1EqYOSD7kw%2B&X-Amz-Signature=c26668b316a1e7d92e729ea6e417628c1f3a0184108fa575273471b063006a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

