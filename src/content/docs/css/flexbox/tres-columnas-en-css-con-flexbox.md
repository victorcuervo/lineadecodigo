---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAXPEBA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDC%2Bw4OlMcHbDb4%2BtXhA1GjKNK2X34fNl2YUP8r7mEVwwIgHX1kBvZGLUbWD9NAoJnEEC%2BU0fv3MaZJdeB0bjM5OYQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDO2aIxSCUlItmZc3vircA2yi8zAW68Jp%2BlSQTLUSXzYq%2FQ0y9DUK7Jl6A%2BWBuoLpgLsx63gOSZCOWkly4WMxtCmiE9qdPt%2FSOVx%2FHrHpSCTAMj%2F8E9TKiCWWwRDzI1GvIFxHsDMwUs9EsEAbpLyiy6paFHIVUP0gkSp5MR%2FBgYS1S17bI%2FPVjXWBKPxx7wAfNDY8URX7LdnFUKjEpdI29TUyDzMvF8ZzBFgm%2B%2FGA1%2B8X3kB4oHTMXRZJnrzO5UjnMUnw0%2BXTW00wTHQsdh0gV9j6P%2Begde3QjSDw4AZDqgyfCRvUH7iYT4CMoBLexWQfPVsH1neHpCyQ5utrR8DzP2gcF3Hrb3lxhs2tftzCcp10cMm3L%2FEPSEECDYy7kWY8%2BIcKcLze8RjvXENVOp0SVr%2FylKxjyjMRBZV8XuKd8fVRYvi2lfn7dXJFxsZQZYSvd0uP0NHefUKcU4Gipa9sOtntisuWbOYVUlVnoRGcEm2Qvu%2B9K7IvXXOTYYhgUYzzOdSxVwWj9Pa4WYtKb%2FRW2YZO0MMGDGg630oxCX257y8S5BEC8gmijQWGO%2BZVSxXQMeLWTyx57OUQdSgMyPhXi%2FUyN4H19c%2BM2pUUnkuKFXCIrO7EYlcSaV%2BWG8iiIDaoBGKjgZEe72OhMakhMMqhxskGOqUB6Harbfn5WPQU%2FWVWW8Q3%2B9s7kRUUiHQbAMNQ5iNGXduj%2BT8iE8IS95wkcats97TqJBdI3FYR7a%2FyfQ8pbafHCEvGszBCFjIqC4GtE5K0PyhFUHZeNfZX3%2B%2FpNTnAQlFCzBWKFLtMlHrrtwnbb57hhY4RQaRdN%2B9ixejBWNE2b8CUlV0UodE%2Fj4EF56k6wAI%2BfT1KYtwu27YP3g3789iwNYtHiE2W&X-Amz-Signature=28e53c06f5053d02dd0fcce61bf493a7598284b8cb1e35f4c403b5c6eebd0b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAXPEBA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDC%2Bw4OlMcHbDb4%2BtXhA1GjKNK2X34fNl2YUP8r7mEVwwIgHX1kBvZGLUbWD9NAoJnEEC%2BU0fv3MaZJdeB0bjM5OYQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDO2aIxSCUlItmZc3vircA2yi8zAW68Jp%2BlSQTLUSXzYq%2FQ0y9DUK7Jl6A%2BWBuoLpgLsx63gOSZCOWkly4WMxtCmiE9qdPt%2FSOVx%2FHrHpSCTAMj%2F8E9TKiCWWwRDzI1GvIFxHsDMwUs9EsEAbpLyiy6paFHIVUP0gkSp5MR%2FBgYS1S17bI%2FPVjXWBKPxx7wAfNDY8URX7LdnFUKjEpdI29TUyDzMvF8ZzBFgm%2B%2FGA1%2B8X3kB4oHTMXRZJnrzO5UjnMUnw0%2BXTW00wTHQsdh0gV9j6P%2Begde3QjSDw4AZDqgyfCRvUH7iYT4CMoBLexWQfPVsH1neHpCyQ5utrR8DzP2gcF3Hrb3lxhs2tftzCcp10cMm3L%2FEPSEECDYy7kWY8%2BIcKcLze8RjvXENVOp0SVr%2FylKxjyjMRBZV8XuKd8fVRYvi2lfn7dXJFxsZQZYSvd0uP0NHefUKcU4Gipa9sOtntisuWbOYVUlVnoRGcEm2Qvu%2B9K7IvXXOTYYhgUYzzOdSxVwWj9Pa4WYtKb%2FRW2YZO0MMGDGg630oxCX257y8S5BEC8gmijQWGO%2BZVSxXQMeLWTyx57OUQdSgMyPhXi%2FUyN4H19c%2BM2pUUnkuKFXCIrO7EYlcSaV%2BWG8iiIDaoBGKjgZEe72OhMakhMMqhxskGOqUB6Harbfn5WPQU%2FWVWW8Q3%2B9s7kRUUiHQbAMNQ5iNGXduj%2BT8iE8IS95wkcats97TqJBdI3FYR7a%2FyfQ8pbafHCEvGszBCFjIqC4GtE5K0PyhFUHZeNfZX3%2B%2FpNTnAQlFCzBWKFLtMlHrrtwnbb57hhY4RQaRdN%2B9ixejBWNE2b8CUlV0UodE%2Fj4EF56k6wAI%2BfT1KYtwu27YP3g3789iwNYtHiE2W&X-Amz-Signature=6a6b086d9a1badf9afc77e27f675843196f37435e4cdf60791b97908df49e283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

