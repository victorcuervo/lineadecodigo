---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNG7LHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIG7C5ujFIQ8kAoPeuxtqZKgk4L2SEMMNRUhVRnuZJmccAiB23JkArHX%2FbgKFbUWjyPLgqrSELBWjPx0%2FFFs91hbSfCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMieIlwFjzi%2FnyKkYyKtwD3BwpXCo%2F%2FY5NoWuhIyxMdKd1lz4s0twvJ7Bil4HdNkCbTN9tatn7YSwkeiJTTYgAmllLjNLQycTMVH4RZ9JkCIJEeRaWAS9B%2Fw4OkcccGMrTqBkeEEuGX3tet3JcX2sd4DMmDUd4w9naCxiy3OomeUjium2N2j9DZEDEFfriOYvI%2B4GPNxYFcfcpO9d591kTEow9E3Mtzzq1MkaNF%2FcIodjf3s9JDm56FOCqBtzn7CrVJYdrZlA3jKGKEFugTCZ6%2BPhordPsnpvyaTKxIHT2fuVkZBnuyk9m73G1hDoVzHa91r%2BVqYKYhMCDfMWp98q%2BcVxnf4GaHKcCTnJ2Zr7gvZPi56qrWsc3ayQSFYxcc2Pe1aDQKoCmb0jLcMO5it5Ln8IAuRCG2hboN%2B5fyLSlbPVItUgpPXjZWx3ONdgOG6Ni4Ou%2Fnf4Q3%2FsOcT8T7PaC9guhzFYWqn5Ce9jvFiq7anmi%2F4n6yefHNmWszDuJFDvj8NM1KpcNo9oCNPSblr9uQEujz1q%2FP4rrQcgAUvOyH5ADN%2FPKAONKigJFLi93vfV6zffGHoFeTLE%2BhCOKBSyjpjjA85anXns95YHlxiiQw301lDVJcGMYN6kJSWrjMm1B1wET%2F9uxblbDhHMwr77GyQY6pgESVA27pYIPs3i%2FvEHM33CUwpjbRp6V1gLUzCcb0APGgC653p7xYpOeyz9gqpJw5jQKQ9LJezTg9Wh4d46GpUs1qIKIyhsecbF7vKYDdyUqV2CsApi2AqRpucFdxFdn87JlbqpBKX6DfkGCay6Bn7ExAFXYPkRr3a%2B%2F2stDcWGj52gsp7N4La4QuCvbAtwuJMM5l9w0aItiqDuMyw2YyxjJFkroEEKj&X-Amz-Signature=9658e9a0ad5fb232a5a9df1b7e74183e7245fa93ff5dee48fa619de49f1705e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFNG7LHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIG7C5ujFIQ8kAoPeuxtqZKgk4L2SEMMNRUhVRnuZJmccAiB23JkArHX%2FbgKFbUWjyPLgqrSELBWjPx0%2FFFs91hbSfCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMieIlwFjzi%2FnyKkYyKtwD3BwpXCo%2F%2FY5NoWuhIyxMdKd1lz4s0twvJ7Bil4HdNkCbTN9tatn7YSwkeiJTTYgAmllLjNLQycTMVH4RZ9JkCIJEeRaWAS9B%2Fw4OkcccGMrTqBkeEEuGX3tet3JcX2sd4DMmDUd4w9naCxiy3OomeUjium2N2j9DZEDEFfriOYvI%2B4GPNxYFcfcpO9d591kTEow9E3Mtzzq1MkaNF%2FcIodjf3s9JDm56FOCqBtzn7CrVJYdrZlA3jKGKEFugTCZ6%2BPhordPsnpvyaTKxIHT2fuVkZBnuyk9m73G1hDoVzHa91r%2BVqYKYhMCDfMWp98q%2BcVxnf4GaHKcCTnJ2Zr7gvZPi56qrWsc3ayQSFYxcc2Pe1aDQKoCmb0jLcMO5it5Ln8IAuRCG2hboN%2B5fyLSlbPVItUgpPXjZWx3ONdgOG6Ni4Ou%2Fnf4Q3%2FsOcT8T7PaC9guhzFYWqn5Ce9jvFiq7anmi%2F4n6yefHNmWszDuJFDvj8NM1KpcNo9oCNPSblr9uQEujz1q%2FP4rrQcgAUvOyH5ADN%2FPKAONKigJFLi93vfV6zffGHoFeTLE%2BhCOKBSyjpjjA85anXns95YHlxiiQw301lDVJcGMYN6kJSWrjMm1B1wET%2F9uxblbDhHMwr77GyQY6pgESVA27pYIPs3i%2FvEHM33CUwpjbRp6V1gLUzCcb0APGgC653p7xYpOeyz9gqpJw5jQKQ9LJezTg9Wh4d46GpUs1qIKIyhsecbF7vKYDdyUqV2CsApi2AqRpucFdxFdn87JlbqpBKX6DfkGCay6Bn7ExAFXYPkRr3a%2B%2F2stDcWGj52gsp7N4La4QuCvbAtwuJMM5l9w0aItiqDuMyw2YyxjJFkroEEKj&X-Amz-Signature=73ff027c9d7eb7873ef46130414f4e8fe26ac15aee43d5e1a4a687b7987b23ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

