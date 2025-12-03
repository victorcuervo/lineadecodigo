---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYW4XIC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIELk2E7p8PxaxPO5wV4ulDa7R5brT8yYRTPRuXucxVoMAiEA%2FhpR%2F5ILZxWFNA6AlQfXIl6vLyxke%2Fzo7a8dJrtQanEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDALhssPVrFeVWQ9SLircA6EgG9o1DLW4CA06gxngcn1JprtJg3IxBAMb5A8lCWw3hev2T1cqMSlFizVkWRiQcHKnnLhz4w7AmWghAeKaFZfnHDA3YrmcBrYqVLnuNUg%2FUPUZthK%2FqXG%2FfMUb%2FGJMorya1gSMEPRz%2FZpgj86t2yt80h2tPyqep3sMZhmkxNHsdew61hZ7Pctz6HyWyuiX48s17eQElJ4jo55kM9oEkWlolxjueRK4H1ZzoottdcLXRtqKGRyP4jwuPXSpNvi7K0rRqKHGa%2FIn%2BFRsT3l8MXc8pcR%2FAHinCELaNAwNyyZArdWqxv1a1iiN9dH0xmvBLxDWlzVBFFrHk0ntO2h%2B3eeVCk2uANmkflf3e0fudaVB9sPMhaBiCW9NRe37qWqPnTtzBDKKXvKm6%2B6lBTqdOaWOXNA9FI2qWaN63kpvL4KyXwn3hXo5w%2FDAneLxLb0jZFWzTq6pikqWqs4U57x5jCRrUMJaVbjeSHLv0k5VWoFcYYmvfu1jjR4g1FPUUdOnCd6EoQAJGZZizwmpVxA4YA0kMvCrqrkeCTT6q1kfrk9yOMNTUzRNUJX5p8mN1uayyfMQgxxqXwv2vy7oavdLmM4u8IyTgumxGYCeEVUh5%2B0TdFlWdJumwUTrfmrqMNe9wskGOqUBhCZZco6VUDaXJZULKgwtxrBhM68Uj36oh6iP9Q1a4OAblPZs15tlizKAIcJyAVtvmENM0f7K34c2dfyxmlvNAWyK%2BOWDawqyuGB9Wd7tN1HD6B4vhXhlYPlPCYZuZCA6zkhk6LOGrcndZBiqNFa9C3ut1cikYLBc%2BOlMlLrimbSpt3VeE298w8%2FwJDORt%2B%2Bj%2BZWJNyBpfBQegFhWG5N8U2NwpLJ0&X-Amz-Signature=ad74eca2efede28d8bbe436ce446680c1fef8af67b58650fe39b3ff2c5489d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYW4XIC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIELk2E7p8PxaxPO5wV4ulDa7R5brT8yYRTPRuXucxVoMAiEA%2FhpR%2F5ILZxWFNA6AlQfXIl6vLyxke%2Fzo7a8dJrtQanEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDALhssPVrFeVWQ9SLircA6EgG9o1DLW4CA06gxngcn1JprtJg3IxBAMb5A8lCWw3hev2T1cqMSlFizVkWRiQcHKnnLhz4w7AmWghAeKaFZfnHDA3YrmcBrYqVLnuNUg%2FUPUZthK%2FqXG%2FfMUb%2FGJMorya1gSMEPRz%2FZpgj86t2yt80h2tPyqep3sMZhmkxNHsdew61hZ7Pctz6HyWyuiX48s17eQElJ4jo55kM9oEkWlolxjueRK4H1ZzoottdcLXRtqKGRyP4jwuPXSpNvi7K0rRqKHGa%2FIn%2BFRsT3l8MXc8pcR%2FAHinCELaNAwNyyZArdWqxv1a1iiN9dH0xmvBLxDWlzVBFFrHk0ntO2h%2B3eeVCk2uANmkflf3e0fudaVB9sPMhaBiCW9NRe37qWqPnTtzBDKKXvKm6%2B6lBTqdOaWOXNA9FI2qWaN63kpvL4KyXwn3hXo5w%2FDAneLxLb0jZFWzTq6pikqWqs4U57x5jCRrUMJaVbjeSHLv0k5VWoFcYYmvfu1jjR4g1FPUUdOnCd6EoQAJGZZizwmpVxA4YA0kMvCrqrkeCTT6q1kfrk9yOMNTUzRNUJX5p8mN1uayyfMQgxxqXwv2vy7oavdLmM4u8IyTgumxGYCeEVUh5%2B0TdFlWdJumwUTrfmrqMNe9wskGOqUBhCZZco6VUDaXJZULKgwtxrBhM68Uj36oh6iP9Q1a4OAblPZs15tlizKAIcJyAVtvmENM0f7K34c2dfyxmlvNAWyK%2BOWDawqyuGB9Wd7tN1HD6B4vhXhlYPlPCYZuZCA6zkhk6LOGrcndZBiqNFa9C3ut1cikYLBc%2BOlMlLrimbSpt3VeE298w8%2FwJDORt%2B%2Bj%2BZWJNyBpfBQegFhWG5N8U2NwpLJ0&X-Amz-Signature=d511be9e6558bd0fd2205c38453ac7d6dca74013c879451df327607d5acdb9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

