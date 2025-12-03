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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGXQI42%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEKfgXZc7xQJ1QhjgT8SsHnRmtCd1etTHBNe3G0XzRaVAiEAqb4cqfRTBQAc0SeEDca93jANzCYHVvcKdIJEDBMGE%2Bkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDL2ecU24KAp7dCm56SrcAzaWUOV3QrlWGGMCbOzGNj8mFOM4KdE9d9uiLi%2FWzPrxyeGVjAFXNLNdT6Ap7583Svo45cvrrcT5UuF4xLSAEq%2FpaSp9qOML1oOUkfBM3AtXelEYSDH%2B7USKj6hyT4lOykqFSYfZ5VnYkDuQg9rJcO8zwn343%2Fiv440aKhYINQ6snJoxADSeh%2BWe9JO6hpTn8JgmA8%2BN2VYH6l2ygfQHs8Dy4mvsj5%2Fhb0ROXZHdrZhDtdjQj%2BLTd%2Fmvw%2FIGQ2khPfeCYAN0mgveQfbi9zGo9T2XCO4zNkVQHaTjby70YkQiHbQXM7TVf1pG7KxOay0InZPxvsMJoPw9Pnsmtvh3kvoqaCtO7chQQWQnBvub9%2BLRzuPkIt8a5k3T89QTOeWTWH3w3stjtVQn3o%2B37F06%2Fscx9wJMw8uJlKKTe0c13kEaKyoJ%2Bb0u5LBw2lryHtssFPAs6z5%2BQeb6rM%2FrvWEtqiGlqVi4nSvi2WGLMTRFczmJeZYC6AfkQf4JdsAktACCOLFDygvKWQO%2FrU6V7ySi7FjvduC1jG%2FQ7%2FenJAcIi0g3r8t%2Bd%2FSnhU0nbn7u%2FCpLjp81kxxS5qImylCwdQY7A5sHso3wL5nn8LnDMiWYa%2FmOsEViVallLSqW7XioMOu5v8kGOqUBNSq3i1%2BVCE33U0pezuYFzPUI1oR2vbmXmS5oYV4xCfs%2FxZ4qvzm7l%2BvdRR4oio9Ba0WMUGJ7hpCvlf5itMSqlPsoF2%2ByAlVbKqtUy5QipbE6OfgP%2Bgw38gGyz73TeOh4cp%2BkxSDz0SCL3eUsXxUoR1%2Fzfyd3jKSlmkYPso%2BMDs%2Fi%2FFfv4mHiSd2ZDfXLipXY4gvNy5XREsGbGc30zG%2FjOoqQfbOG&X-Amz-Signature=c19bb96a98e757eed29abb62f886a9c7a18b2d3ebc8cdbcdd8a3837abc7cb84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGXQI42%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEKfgXZc7xQJ1QhjgT8SsHnRmtCd1etTHBNe3G0XzRaVAiEAqb4cqfRTBQAc0SeEDca93jANzCYHVvcKdIJEDBMGE%2Bkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDL2ecU24KAp7dCm56SrcAzaWUOV3QrlWGGMCbOzGNj8mFOM4KdE9d9uiLi%2FWzPrxyeGVjAFXNLNdT6Ap7583Svo45cvrrcT5UuF4xLSAEq%2FpaSp9qOML1oOUkfBM3AtXelEYSDH%2B7USKj6hyT4lOykqFSYfZ5VnYkDuQg9rJcO8zwn343%2Fiv440aKhYINQ6snJoxADSeh%2BWe9JO6hpTn8JgmA8%2BN2VYH6l2ygfQHs8Dy4mvsj5%2Fhb0ROXZHdrZhDtdjQj%2BLTd%2Fmvw%2FIGQ2khPfeCYAN0mgveQfbi9zGo9T2XCO4zNkVQHaTjby70YkQiHbQXM7TVf1pG7KxOay0InZPxvsMJoPw9Pnsmtvh3kvoqaCtO7chQQWQnBvub9%2BLRzuPkIt8a5k3T89QTOeWTWH3w3stjtVQn3o%2B37F06%2Fscx9wJMw8uJlKKTe0c13kEaKyoJ%2Bb0u5LBw2lryHtssFPAs6z5%2BQeb6rM%2FrvWEtqiGlqVi4nSvi2WGLMTRFczmJeZYC6AfkQf4JdsAktACCOLFDygvKWQO%2FrU6V7ySi7FjvduC1jG%2FQ7%2FenJAcIi0g3r8t%2Bd%2FSnhU0nbn7u%2FCpLjp81kxxS5qImylCwdQY7A5sHso3wL5nn8LnDMiWYa%2FmOsEViVallLSqW7XioMOu5v8kGOqUBNSq3i1%2BVCE33U0pezuYFzPUI1oR2vbmXmS5oYV4xCfs%2FxZ4qvzm7l%2BvdRR4oio9Ba0WMUGJ7hpCvlf5itMSqlPsoF2%2ByAlVbKqtUy5QipbE6OfgP%2Bgw38gGyz73TeOh4cp%2BkxSDz0SCL3eUsXxUoR1%2Fzfyd3jKSlmkYPso%2BMDs%2Fi%2FFfv4mHiSd2ZDfXLipXY4gvNy5XREsGbGc30zG%2FjOoqQfbOG&X-Amz-Signature=3cd04ee6fccde0e995a8ea5170ad3faa56c40ad86b64fa042aedf4295bb11a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

