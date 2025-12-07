---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GQO7S4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRBzJTftT3%2BEuGdMqzqgcvqTZ2Bd6GvMdFXJiD75rSUgIhAOeqgme4aE1kLpV0117yzNAJU4WyJGpxbO1087X9HzjnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYpg8EJyv3OCcFnF0q3APdNogmzEZ%2BoNvg%2BKisq6%2FTGLPzrGaviLVsuik5l%2BHaknl4cDdQC35wNODp5M8%2Fehqx5ywIE9FFAdHkXuZ0Ic0uHZza%2F8RcdWR62qz%2FjYxir5KRUQNhFd7EjTrn8DdWXtTWet6KSnpkblDB3tf1f4FRaAliMlw%2BlhDURz9W%2F06uhD18JVu%2BhTIaBWeUUAAYyi69w7jgywX%2F8VsNuO2o5UgjrALHNUKVfA%2F9zIt4bV%2Fc1jPmguWjuJUgb4N7z5B9G7VVZnRwEcGzmbY5D0VvDJnouheWO9Wlfapq5AiA59A2vjc7O90ilD2pIYrj86wJFcyoXoqofedQZ9MJh8i1CyPeC8w3JW%2BzDurPyaYXaZ7TQuNlg3bqpn76YSb1Nw4z4Nwc3OnSJ3K5uRZ17AtTPlx7hTx4yPism0GR%2Bre7N6InZQozAsXdqOnzcmI1jSU5FM%2FUj5CfhKPPKPhpbJ6ywRG6eMPo27OUZXkT%2ByIqoC5asHzXhyfkK42xC6hshqTTOWQHeu%2BLn1svBRn5ri57fmw3tTJbKZQFMnOu23oAHIRuz1sWVlhRqzcJMTW%2FoJG57iLSea53sqlLXoDlArbL7gn7sJnOf15XYbKax8VKQ2c2cuFtaEU%2FQFaNxV3N%2FzCO%2FdLJBjqkAa61fGyqwf0gLwduCigz8IagIcth%2BRXxObyj9QVfA8b5k8hG8XwMw5phAXvy1eNqtUn1DZu6n5ZNsF7fGwzaLdxQV1Qefsj%2BM3RW4jil%2B3gG6VTxlNRGm%2F7py25SG%2B0auB3Eiauh60nE0994gd0PijfZ4eJjoctj8sa%2FT%2FSrZV6E4iTbgLE1XOpO9r8goFk%2BrELnt8JqPSYI9V2n%2BktwffYIO6Ue&X-Amz-Signature=a1499a8ec92458ab06febcbb9fc47ae8545dc315fc9170b9dffd626bb4280c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GQO7S4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRBzJTftT3%2BEuGdMqzqgcvqTZ2Bd6GvMdFXJiD75rSUgIhAOeqgme4aE1kLpV0117yzNAJU4WyJGpxbO1087X9HzjnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYpg8EJyv3OCcFnF0q3APdNogmzEZ%2BoNvg%2BKisq6%2FTGLPzrGaviLVsuik5l%2BHaknl4cDdQC35wNODp5M8%2Fehqx5ywIE9FFAdHkXuZ0Ic0uHZza%2F8RcdWR62qz%2FjYxir5KRUQNhFd7EjTrn8DdWXtTWet6KSnpkblDB3tf1f4FRaAliMlw%2BlhDURz9W%2F06uhD18JVu%2BhTIaBWeUUAAYyi69w7jgywX%2F8VsNuO2o5UgjrALHNUKVfA%2F9zIt4bV%2Fc1jPmguWjuJUgb4N7z5B9G7VVZnRwEcGzmbY5D0VvDJnouheWO9Wlfapq5AiA59A2vjc7O90ilD2pIYrj86wJFcyoXoqofedQZ9MJh8i1CyPeC8w3JW%2BzDurPyaYXaZ7TQuNlg3bqpn76YSb1Nw4z4Nwc3OnSJ3K5uRZ17AtTPlx7hTx4yPism0GR%2Bre7N6InZQozAsXdqOnzcmI1jSU5FM%2FUj5CfhKPPKPhpbJ6ywRG6eMPo27OUZXkT%2ByIqoC5asHzXhyfkK42xC6hshqTTOWQHeu%2BLn1svBRn5ri57fmw3tTJbKZQFMnOu23oAHIRuz1sWVlhRqzcJMTW%2FoJG57iLSea53sqlLXoDlArbL7gn7sJnOf15XYbKax8VKQ2c2cuFtaEU%2FQFaNxV3N%2FzCO%2FdLJBjqkAa61fGyqwf0gLwduCigz8IagIcth%2BRXxObyj9QVfA8b5k8hG8XwMw5phAXvy1eNqtUn1DZu6n5ZNsF7fGwzaLdxQV1Qefsj%2BM3RW4jil%2B3gG6VTxlNRGm%2F7py25SG%2B0auB3Eiauh60nE0994gd0PijfZ4eJjoctj8sa%2FT%2FSrZV6E4iTbgLE1XOpO9r8goFk%2BrELnt8JqPSYI9V2n%2BktwffYIO6Ue&X-Amz-Signature=3b200c7368d83bd82718a26ab7ac7da1881b7a392fc135c614f7cdeb8e5c92da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

