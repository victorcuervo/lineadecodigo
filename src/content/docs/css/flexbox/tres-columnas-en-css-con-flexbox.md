---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2QSQOH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClmXa5X4SbDrgmdnCQlNNjqxXz5RxB2lEDrheWMlLHEAiAjL%2B3YgY8bq4ayunjpLZC2OxkiLFQ5Q3yZusPZLDP5Pir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMU5ztm1xW%2F0aijaYQKtwDh%2BfgufWmPPhnFuulOX3r%2BfBq0VMYxb35dEDJ6QUhHzd%2F2DNBYy8TM1FWdKpAJyY47tw7cxepk%2Bt7WnuyhihQEaaUnm%2FN9y4UI9NJMuHi2rP4%2B5be8UHbGXFEnKaWAq7emVAqIaxlM%2BVxwYRsHMGVfAtLBv%2BNolTVorby4b9qobGngDUnAMjPLOVXWanlr%2FP%2B4MwQU%2FcuHOm7rzN1Eachpofb%2FrWxP1HNzRlPQxqA3%2BHwqz84RzqO%2BJJPLcxBRfhgL3%2FhS8i9SfHil%2FarIseimsLhIze%2Bj5mGk7p13%2BN%2FEHOy4ExTviDeE5zo8t6EsjUzWqRiy3%2BTc%2FPx%2FaCOiv2McMml5PVrW21gg2rFj7kGUZOpS2fSW9wq3hLz%2Bpv87%2BQe623IPPvYAS7H5AR7hM8XqrxLnHp0rK4S3QSl7IWiUWXwI2zBlZmjPBy0xuS1hRbQoAltdU5mn3nUXoXsza%2BrKbH5Gda5kUnRQDOzGEHpqZ6ucHbRk4j3HC70et%2FYxkHdAuf%2BV9jadW5xFdpsEKiLWy6V8FWsi8HhbAQv8eZ4hAUyRrivdNNKC%2BEENhnAuFqxPv76xCFra6NTcZ5cBjObEVbp%2BW5mJm0qSgJtq58HiUPE5cKTjYL8%2FXhxK74w%2BMfKyQY6pgFIblgAqZfdNo9joP2qJK5txW3tlTXc%2FL3tqYg0r67lRg9yhd4Lmqd4Xkzcyel%2Bq8IbYTB1KGsS1g5KxDznH9K0yAEIcBlPfUGlloo4vqeqAHnXLUZglhbgM0t%2FNbr4AP%2BukYC9MzgAH8i1NWUQqjcutJRRBR4vN0zx6yqN6fSThelzqYCy7G8AXBZ83jCOQhNbiKqMUd0ZeMAmM1oDHmEbjnZzZ8gg&X-Amz-Signature=a5b8bd07cd040ee871d38bf605418fd12f0d7bc7346fe9646615c2ce9fcb3e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2QSQOH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClmXa5X4SbDrgmdnCQlNNjqxXz5RxB2lEDrheWMlLHEAiAjL%2B3YgY8bq4ayunjpLZC2OxkiLFQ5Q3yZusPZLDP5Pir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMU5ztm1xW%2F0aijaYQKtwDh%2BfgufWmPPhnFuulOX3r%2BfBq0VMYxb35dEDJ6QUhHzd%2F2DNBYy8TM1FWdKpAJyY47tw7cxepk%2Bt7WnuyhihQEaaUnm%2FN9y4UI9NJMuHi2rP4%2B5be8UHbGXFEnKaWAq7emVAqIaxlM%2BVxwYRsHMGVfAtLBv%2BNolTVorby4b9qobGngDUnAMjPLOVXWanlr%2FP%2B4MwQU%2FcuHOm7rzN1Eachpofb%2FrWxP1HNzRlPQxqA3%2BHwqz84RzqO%2BJJPLcxBRfhgL3%2FhS8i9SfHil%2FarIseimsLhIze%2Bj5mGk7p13%2BN%2FEHOy4ExTviDeE5zo8t6EsjUzWqRiy3%2BTc%2FPx%2FaCOiv2McMml5PVrW21gg2rFj7kGUZOpS2fSW9wq3hLz%2Bpv87%2BQe623IPPvYAS7H5AR7hM8XqrxLnHp0rK4S3QSl7IWiUWXwI2zBlZmjPBy0xuS1hRbQoAltdU5mn3nUXoXsza%2BrKbH5Gda5kUnRQDOzGEHpqZ6ucHbRk4j3HC70et%2FYxkHdAuf%2BV9jadW5xFdpsEKiLWy6V8FWsi8HhbAQv8eZ4hAUyRrivdNNKC%2BEENhnAuFqxPv76xCFra6NTcZ5cBjObEVbp%2BW5mJm0qSgJtq58HiUPE5cKTjYL8%2FXhxK74w%2BMfKyQY6pgFIblgAqZfdNo9joP2qJK5txW3tlTXc%2FL3tqYg0r67lRg9yhd4Lmqd4Xkzcyel%2Bq8IbYTB1KGsS1g5KxDznH9K0yAEIcBlPfUGlloo4vqeqAHnXLUZglhbgM0t%2FNbr4AP%2BukYC9MzgAH8i1NWUQqjcutJRRBR4vN0zx6yqN6fSThelzqYCy7G8AXBZ83jCOQhNbiKqMUd0ZeMAmM1oDHmEbjnZzZ8gg&X-Amz-Signature=20f578b9a64f267bb7c0813e31179f83d32a1604dbdbab737de7c2bc0b7e85e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

