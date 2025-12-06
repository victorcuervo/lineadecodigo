---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WST4QYSE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD09lR8FVSIp3nAlJep0wgstAjxyo1KVvpbRAFi6xOn6wIgfNjX6TP0NAnlGV6kMZbeE2mWQ6yPMLxKOlOiXPqTAeEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFXtuFQKDIaPCI%2BV0CrcA2tp0lwJYoiWqBP5VcTzU3zeAQVymeaXgJw%2F2TogmXKVnCRywNO%2F5YqFkBIhcfZDqQ75pGR5jRI6ba%2F24hoS2oVu9OteaiKVAYPHalBp2vcFzKFO5zdN90JmDQQ84wENNoWt09fQGrgdEjNGui9wKIU%2FqkLxWyh%2FnJGCoUBxXIsd3HeYx3CIPVCfefUEafbwjCgSsEWwV2duzA%2BEWRVrnSNCoQKc0teA0hCTnpfHRHKHPso9qpvP%2BA9CXSQKMLDW6yaMI7I1Pvvp9G6AJ%2Bqpzx6yY%2BdmezXIW6DuGtgd5kDFVmsSY7X9til9yWiukTgD2zjq4zOvwvi5VMnZg3xFDi9%2BeB8rHwfCRVg%2FF9xueIzHEhBu3g5vYDU9HGa0HsXRe8kSeqqoCzRrVUBFX8FwjcWB4e0bFJLYLV5nObQa1Zqwi%2FHPXdqPPvTj751R72EgQMD8c0S5HuTum2Sq17%2BN82SR4iLzct6Q3cukqKixGyj%2FA8JEPf6P9bsMVh44BJQUfuDtOnsF%2BAOySpbaVvpKB5WKPV57jv%2BEuLR78KIgWOVBbETpbHdXlEMJBSlgWKkU7bxvBOwyxzQGMiUPPBoMSqOg138y5hhqm64akP%2FPW4c%2BWie0JU1%2FIdIKg6%2FYMICfz8kGOqUBkeQWPhJCjtf6Lr8KGT5QcibdzeS%2FnV4ZZZniUtIPeWi1bAL0M5vKJC9C1AbQKZcry2BQTKlUi9Fi5v1FyTyaWYLwzn6GPNReRDULaN1cIFOlpDT5awyrblW75UofeLxJIE2ZtXab2PjzlCNAWGX5mOORBarHaIEd8%2FNGiXNC5vRXGdd9UNpvJZmp3gqBen2V5DVYfCrQ3mzhiVknlBI7oQr2irzo&X-Amz-Signature=797b16e284d3353d61c23ae6d4aae4eab274a4a7c539943241cfb679feb043f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WST4QYSE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD09lR8FVSIp3nAlJep0wgstAjxyo1KVvpbRAFi6xOn6wIgfNjX6TP0NAnlGV6kMZbeE2mWQ6yPMLxKOlOiXPqTAeEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFXtuFQKDIaPCI%2BV0CrcA2tp0lwJYoiWqBP5VcTzU3zeAQVymeaXgJw%2F2TogmXKVnCRywNO%2F5YqFkBIhcfZDqQ75pGR5jRI6ba%2F24hoS2oVu9OteaiKVAYPHalBp2vcFzKFO5zdN90JmDQQ84wENNoWt09fQGrgdEjNGui9wKIU%2FqkLxWyh%2FnJGCoUBxXIsd3HeYx3CIPVCfefUEafbwjCgSsEWwV2duzA%2BEWRVrnSNCoQKc0teA0hCTnpfHRHKHPso9qpvP%2BA9CXSQKMLDW6yaMI7I1Pvvp9G6AJ%2Bqpzx6yY%2BdmezXIW6DuGtgd5kDFVmsSY7X9til9yWiukTgD2zjq4zOvwvi5VMnZg3xFDi9%2BeB8rHwfCRVg%2FF9xueIzHEhBu3g5vYDU9HGa0HsXRe8kSeqqoCzRrVUBFX8FwjcWB4e0bFJLYLV5nObQa1Zqwi%2FHPXdqPPvTj751R72EgQMD8c0S5HuTum2Sq17%2BN82SR4iLzct6Q3cukqKixGyj%2FA8JEPf6P9bsMVh44BJQUfuDtOnsF%2BAOySpbaVvpKB5WKPV57jv%2BEuLR78KIgWOVBbETpbHdXlEMJBSlgWKkU7bxvBOwyxzQGMiUPPBoMSqOg138y5hhqm64akP%2FPW4c%2BWie0JU1%2FIdIKg6%2FYMICfz8kGOqUBkeQWPhJCjtf6Lr8KGT5QcibdzeS%2FnV4ZZZniUtIPeWi1bAL0M5vKJC9C1AbQKZcry2BQTKlUi9Fi5v1FyTyaWYLwzn6GPNReRDULaN1cIFOlpDT5awyrblW75UofeLxJIE2ZtXab2PjzlCNAWGX5mOORBarHaIEd8%2FNGiXNC5vRXGdd9UNpvJZmp3gqBen2V5DVYfCrQ3mzhiVknlBI7oQr2irzo&X-Amz-Signature=31c00db0cb92dde47f4ccd95458fb09e43c0de75ccb6308eaee04d526e5bdea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

