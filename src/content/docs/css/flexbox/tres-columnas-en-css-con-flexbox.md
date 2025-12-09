---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FOAUIRL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWHbX2lhvvqk23s6zfCm52yV29TOGx8v8qYTWIw0QehAiADPU9FwnWlkBJyMHjiTZ7taj0f5vlU0WMrYl5q0vlmGyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCo0skSz620SO2rH2KtwD3by%2B59LLGnu7Mw1Tf3JMzr95uebYHDhO2A8KORTSGa9%2BZkIqZmuBH6rx5SKwBNP1wBZ%2FwVkiz2woL9z%2FhAK0hr2gL7M9oFAn4Tn9kvwBjTdc9ssYByUPSuNs1v44HrJDMotR6RjMuHNR8YmyGYyV1Nu94T2d8puJj2jinD%2BWfeN%2BM6FwwCRMLIa3WhzXcPFTWFj4NOjoz7wCdmkH0EIeVc2eY%2BzFKoB9WK8Ox%2FtWJox%2FdZUvukhjCcfXFfTydLg%2B6Sisg0kHHbJF8OoMJARhOLX3mc5lRy4vi0QHNKNF5xzC1bFvsK4ZsIB%2FvZangy12Aq38vwWt1VgEGdpYbDYXHcxI%2BBGvF38P67F4rwmbczFrxfiQKs2rdkxGIpzBLivBA1X%2BH12%2FIqgjQ8vdgvdSjR8%2FyExAMp0VGJWZLxG%2FB859iKuiE%2FV1g7m0eVfzXLnUjR%2Bj7LyXuUTosM96QPAF63%2FmbcWMTXcFAUxiFhNpbya61sIOvu5fKeiq1jCEszu%2FEk%2FVB%2BNGQihR9pA%2BOaUFBeDLU0f9%2BipSE8HGQ5E%2B%2FEYoDavWlztkZJWwdKvE88QljZwMK7aqUWVaIEjyJzp4pGU6rKPpJgRQhYUfWnsJO2pj0FgGhokUuLnFhM4wrcTfyQY6pgG2w%2F94qotmb6XGKfi3y9gLoq1PQnKyM51xZ312KFG89D0YjQYY38rdGVi%2BNYNFKKp%2BOdqBe%2BzDJlIqqrARMNuvYsEw88hlDCgWnbQdk0UphsrHHPbPUc8vepuLGHiQ5FwRpu43sQxF7X7MGyf4ZPOlI%2FWkoIb85TzvL9TJKermzDsFy0S%2BFTysbIZq7An46UA8iiBABnrgiSTKJf%2B3PQ6NqAe%2B%2F62f&X-Amz-Signature=1f3ce82b87aa304a5094078f2912d8d48130c963f37db8ceb37bddd6b26b0c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FOAUIRL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWHbX2lhvvqk23s6zfCm52yV29TOGx8v8qYTWIw0QehAiADPU9FwnWlkBJyMHjiTZ7taj0f5vlU0WMrYl5q0vlmGyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCo0skSz620SO2rH2KtwD3by%2B59LLGnu7Mw1Tf3JMzr95uebYHDhO2A8KORTSGa9%2BZkIqZmuBH6rx5SKwBNP1wBZ%2FwVkiz2woL9z%2FhAK0hr2gL7M9oFAn4Tn9kvwBjTdc9ssYByUPSuNs1v44HrJDMotR6RjMuHNR8YmyGYyV1Nu94T2d8puJj2jinD%2BWfeN%2BM6FwwCRMLIa3WhzXcPFTWFj4NOjoz7wCdmkH0EIeVc2eY%2BzFKoB9WK8Ox%2FtWJox%2FdZUvukhjCcfXFfTydLg%2B6Sisg0kHHbJF8OoMJARhOLX3mc5lRy4vi0QHNKNF5xzC1bFvsK4ZsIB%2FvZangy12Aq38vwWt1VgEGdpYbDYXHcxI%2BBGvF38P67F4rwmbczFrxfiQKs2rdkxGIpzBLivBA1X%2BH12%2FIqgjQ8vdgvdSjR8%2FyExAMp0VGJWZLxG%2FB859iKuiE%2FV1g7m0eVfzXLnUjR%2Bj7LyXuUTosM96QPAF63%2FmbcWMTXcFAUxiFhNpbya61sIOvu5fKeiq1jCEszu%2FEk%2FVB%2BNGQihR9pA%2BOaUFBeDLU0f9%2BipSE8HGQ5E%2B%2FEYoDavWlztkZJWwdKvE88QljZwMK7aqUWVaIEjyJzp4pGU6rKPpJgRQhYUfWnsJO2pj0FgGhokUuLnFhM4wrcTfyQY6pgG2w%2F94qotmb6XGKfi3y9gLoq1PQnKyM51xZ312KFG89D0YjQYY38rdGVi%2BNYNFKKp%2BOdqBe%2BzDJlIqqrARMNuvYsEw88hlDCgWnbQdk0UphsrHHPbPUc8vepuLGHiQ5FwRpu43sQxF7X7MGyf4ZPOlI%2FWkoIb85TzvL9TJKermzDsFy0S%2BFTysbIZq7An46UA8iiBABnrgiSTKJf%2B3PQ6NqAe%2B%2F62f&X-Amz-Signature=9b97b9dc5d5aa5aff79f3d13799ce87a22d11a3878f4c8c8658bcc07fd67b62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

