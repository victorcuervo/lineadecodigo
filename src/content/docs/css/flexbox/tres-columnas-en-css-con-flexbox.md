---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AWURP3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4RGjTz0U1pKjg4LhEX9HXP1N9TeDJOi2%2FHyQCuUQbCAiEA0hV9hSLwi4kybI2wBNACjimSfI3W30r2ZmEO0Yk%2BPVkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeVOpmfJMLq97LnRCrcA25BrX%2BvtvvKTrsfpMFrxuV%2FPghI5QdLQC3zjK6PVDjfKDu5VPAh8MJHufwcjCjqZKRjfa%2BOe6W4A%2FJJPXMhbo5Xa13VzTUX6E3K9Oovd7UO0xTSajd5ke21ZSaU6a%2B6Qafiy8RZUyde02VrCRyoHjIJpe83PC1uq1PBW0GesDc8kzj%2BiFxnyTT2pbcaIohhG5ObtdsoTVqriKR0LVlp%2FnxJb6sOL%2B32QyPg6z0e%2BgVEx2l%2Bn1Ka2z90%2FqedQHQ5k9s6LiQFHaMesk7%2B9nidC1omGz226493959zWXrziOp84936d84cIZq0ZftbOwoHqjlCfKTBeiZnaOEwbFSFtuPhG4yUg8Qca0dU%2Fh6atB9DW684qdmc0geLtPFa3JC6vP821y8X51VjI9JuMIgq6rRH8yyqy3ILA8SlskK0Z0mWEkOK1WYOTjtbX7cntxjiDVRle1Zy%2FFTfjBlk9dE6w6Ig5%2FDpVUcUJcbR8ZGsr276tuRs093h%2BsNKXzjZUEIdNfhIhPB2TedKsAIkhdBinHq%2BfoUSTXeUtvQ%2FUawnF%2BW%2Bs5C%2F1XsgvvLwRgkZCqJZBHU%2FfaHIXJQ3jFSgN4%2ByOPWHHqQI%2Fd1CTqP3qV3IJvy0Z2mpkW4qwUtlO0cdMMXt2ckGOqUBbUqVUQsbWrQhOqpgIe3e%2BPQrYpVv%2FweAD5bndBzOXCUH%2BcQcnrCuuYEYykRcx0pWYJhemdahTQP16FgeWnNAXf4MEtjutSrYhNQGY0tEZ1%2BH8zFquOgxNzP9D97BH1oA3G1jDwNW5nguaZWJXjOiF0cfdtueF1w8VJABOLEt7U2u3s%2FJVJuJJJ6KT6es%2FqdSjHodU9V4IYTAXOyihDkuUmGO19kH&X-Amz-Signature=9582c8ab472fbc738907bc99e170cfbe213599ed176cbb1fef795390b60aa841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AWURP3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4RGjTz0U1pKjg4LhEX9HXP1N9TeDJOi2%2FHyQCuUQbCAiEA0hV9hSLwi4kybI2wBNACjimSfI3W30r2ZmEO0Yk%2BPVkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeVOpmfJMLq97LnRCrcA25BrX%2BvtvvKTrsfpMFrxuV%2FPghI5QdLQC3zjK6PVDjfKDu5VPAh8MJHufwcjCjqZKRjfa%2BOe6W4A%2FJJPXMhbo5Xa13VzTUX6E3K9Oovd7UO0xTSajd5ke21ZSaU6a%2B6Qafiy8RZUyde02VrCRyoHjIJpe83PC1uq1PBW0GesDc8kzj%2BiFxnyTT2pbcaIohhG5ObtdsoTVqriKR0LVlp%2FnxJb6sOL%2B32QyPg6z0e%2BgVEx2l%2Bn1Ka2z90%2FqedQHQ5k9s6LiQFHaMesk7%2B9nidC1omGz226493959zWXrziOp84936d84cIZq0ZftbOwoHqjlCfKTBeiZnaOEwbFSFtuPhG4yUg8Qca0dU%2Fh6atB9DW684qdmc0geLtPFa3JC6vP821y8X51VjI9JuMIgq6rRH8yyqy3ILA8SlskK0Z0mWEkOK1WYOTjtbX7cntxjiDVRle1Zy%2FFTfjBlk9dE6w6Ig5%2FDpVUcUJcbR8ZGsr276tuRs093h%2BsNKXzjZUEIdNfhIhPB2TedKsAIkhdBinHq%2BfoUSTXeUtvQ%2FUawnF%2BW%2Bs5C%2F1XsgvvLwRgkZCqJZBHU%2FfaHIXJQ3jFSgN4%2ByOPWHHqQI%2Fd1CTqP3qV3IJvy0Z2mpkW4qwUtlO0cdMMXt2ckGOqUBbUqVUQsbWrQhOqpgIe3e%2BPQrYpVv%2FweAD5bndBzOXCUH%2BcQcnrCuuYEYykRcx0pWYJhemdahTQP16FgeWnNAXf4MEtjutSrYhNQGY0tEZ1%2BH8zFquOgxNzP9D97BH1oA3G1jDwNW5nguaZWJXjOiF0cfdtueF1w8VJABOLEt7U2u3s%2FJVJuJJJ6KT6es%2FqdSjHodU9V4IYTAXOyihDkuUmGO19kH&X-Amz-Signature=51d910f90ce56617055d2a71443c561f8e432c25b7998e0954050a454acd42e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

