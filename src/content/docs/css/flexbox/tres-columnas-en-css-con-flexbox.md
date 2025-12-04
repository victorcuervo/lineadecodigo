---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUERGJ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD%2Bb8cMa%2F7xcnriqILhrJc%2FH%2FTZM%2Frp0pbf10YSJExNgAIhAO6V5T%2F7CMzj4XV51jzjtRxERK7GgFtw5K7jXE4Y3Of6Kv8DCEgQABoMNjM3NDIzMTgzODA1Igy8W%2F6ConAbm35qSfcq3AO43VwOY5lm7hUvHGoOrllx4EOzFVDAFhKFqWhYMLC8JGcm4YEfz7r93stQiRjtHTO5QR9hMer58MWQ7TUH%2Bg3T%2BMBdem%2FYY5woOR%2BI44nTpkYFnjaBBU3yeeb8VqayXbB8E8GREEsrRBU6%2B7MK2ffXypaot6yXZ1no0jo1%2BYs%2B4EqhkMMGihT1sKKw0fg9ZOnNCukNZipGEkzT6voRSHkLxCEwqi%2FIH0sUmi7i5AaJ6B8PvK7YSQLhOw9o74UHFDwlavTnU%2Bsr3sGM7OItx5FK0LAudbE7EdQiyNy07l2QcL4O5j9umOchlfpdqfSQ4F15f1ip%2FcTlF0UcyqnlQHuSOE8utuEIScDnT6gViB5GRVppN0TQ5RiOvvwUwq3ejFHCgeyh0NpIf1KQ75OJrGukKmR9Gt6B%2FxBOYloiySt1HutOevq8oYSixoD1DnWOwfWbZag%2Fbnb%2BlmZWroCtCNkS6LFOPsPXEAmR60ZEkGtzTYGQjloizVh3LHkcjp%2FP0yLcKYn0AblvCFuwemDwUXPy%2F62UsusbZRj%2Bx2UsdjyXlB7l0CWRsmHGDfbVvhMnssQX1ZjXm0qCKn%2F579Wta004YUZM9TBfIybJMGQAUvVlrg7wV2EFv1c202eGvDC7v8bJBjqkAdzkcDtqa1ISTtwFhGrFaoS8tOczQ4%2FXPUykHq%2Bq4YrzwBTvK0mdyhd4%2FSbBQmmrVA1k23%2FaUUyUQqx%2FeIX9W1z3Aehc9PZd93e6JqH%2F1FCcUy8gv2RWS7L9WDnnxXsEEitP2NI%2BOiDmgED6IXLMBt7LXZNH%2B9fbJZa9Wbzpb0ASOk1WDN0Ky3KEPdsGALqPNwKg%2FkCiOZR0rAXYmXJOfTg78pdp&X-Amz-Signature=36e7121016047f749a6ec8d460be7efe540516dff4e7b41a85e5635125047d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUERGJ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD%2Bb8cMa%2F7xcnriqILhrJc%2FH%2FTZM%2Frp0pbf10YSJExNgAIhAO6V5T%2F7CMzj4XV51jzjtRxERK7GgFtw5K7jXE4Y3Of6Kv8DCEgQABoMNjM3NDIzMTgzODA1Igy8W%2F6ConAbm35qSfcq3AO43VwOY5lm7hUvHGoOrllx4EOzFVDAFhKFqWhYMLC8JGcm4YEfz7r93stQiRjtHTO5QR9hMer58MWQ7TUH%2Bg3T%2BMBdem%2FYY5woOR%2BI44nTpkYFnjaBBU3yeeb8VqayXbB8E8GREEsrRBU6%2B7MK2ffXypaot6yXZ1no0jo1%2BYs%2B4EqhkMMGihT1sKKw0fg9ZOnNCukNZipGEkzT6voRSHkLxCEwqi%2FIH0sUmi7i5AaJ6B8PvK7YSQLhOw9o74UHFDwlavTnU%2Bsr3sGM7OItx5FK0LAudbE7EdQiyNy07l2QcL4O5j9umOchlfpdqfSQ4F15f1ip%2FcTlF0UcyqnlQHuSOE8utuEIScDnT6gViB5GRVppN0TQ5RiOvvwUwq3ejFHCgeyh0NpIf1KQ75OJrGukKmR9Gt6B%2FxBOYloiySt1HutOevq8oYSixoD1DnWOwfWbZag%2Fbnb%2BlmZWroCtCNkS6LFOPsPXEAmR60ZEkGtzTYGQjloizVh3LHkcjp%2FP0yLcKYn0AblvCFuwemDwUXPy%2F62UsusbZRj%2Bx2UsdjyXlB7l0CWRsmHGDfbVvhMnssQX1ZjXm0qCKn%2F579Wta004YUZM9TBfIybJMGQAUvVlrg7wV2EFv1c202eGvDC7v8bJBjqkAdzkcDtqa1ISTtwFhGrFaoS8tOczQ4%2FXPUykHq%2Bq4YrzwBTvK0mdyhd4%2FSbBQmmrVA1k23%2FaUUyUQqx%2FeIX9W1z3Aehc9PZd93e6JqH%2F1FCcUy8gv2RWS7L9WDnnxXsEEitP2NI%2BOiDmgED6IXLMBt7LXZNH%2B9fbJZa9Wbzpb0ASOk1WDN0Ky3KEPdsGALqPNwKg%2FkCiOZR0rAXYmXJOfTg78pdp&X-Amz-Signature=73e0a504ba9ecdb046d66ca3fc9fe911bf570c5ccc689ddf95579cedbb317605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

