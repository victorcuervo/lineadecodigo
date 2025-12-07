---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP5LFYS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqt39K%2BwGLGRj%2FnL8n13NHJQgZ1qcvH8jSeeOD9JuGpQIgEKirLwiwmpVe0ac13CZ4QpBGvaTvwoZvdsnKF47pRmcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCls4M7ZgWObMkTKtSrcA5Dq5LVGfGOnBttL1MfDwYGOQKe%2BESnXUPAR5vcZh3xNqYo9zHMc%2BXufdPqABbAOp4L%2FNj6kppiBMa8%2BdkWOXDNPkkURxpqALY4jzzb9rlOMPxnLY4E6twmCHB%2BYPNBfRgXWTE0fS0QbCGbs1rog%2BHgV2Z3PQ5A%2BFq9GZByXV%2BIEd4tamqwAll%2F0bbEvkti1WHVI7KVspK6U6jk9mBfcOC1kfAuJkDJMffgyHjXFesnUK7lG3H7R%2FXNHyed%2BtOuW8euuvFRYMH1ErcAdoSMBZ9IWvne0aCLwPWOHGI9WRB64QqFrJLpQlG82Evjt0ZSJZIhVXPqAulWMi09fvfeMOlgutrQZ0vsUrD8gbiVDQFQbSZCY4aoCfdPrfCoza6fjvLHbZmMnKjHxrQdw1PfdBvzcLL4q3ebIvFqUUzjr7uVRfWdTJyImbDVbckT6sskGE0WL2qDQYlSDllYc7zKV33OMcx%2FCZJsB8S3bjQbUGn1Ln8kIIJEDzjsHr%2B%2F24VCY0uHaNHqOjUhhitty108jT%2BpFPrym8UGGFHjBkDDwzq%2BO9Hg8UHqSYwRpwBe1BaEV8bZNsCXFw8%2Bp2Pea%2BHYZUgZB7jnbYhsQsiG4BatYTKpsnVaHyWTIX3Zgv9AqMPuh1MkGOqUBYchm%2FFO2tCZcioDD5zMp57CrDvrklrQBI%2BmaZfZaWc%2FoOoKFkCPS%2Fn%2FE6n9wBcVOzOHBs9ZqxfIOv5lELptqqjzDoyPd84x4chuZDrczuBhv2IJf7I7fmqv9wFspFxu9HoUVA0cfVICO3%2FSi5l%2BmLuGfV97Gj4CqYzQ3fl46fOBiSsU%2FogbXnOS0E1kL2RILn0NaSnR8Unr3DOTbkBKP2FCSGRxC&X-Amz-Signature=7f6f9f50a26803b983e59326f6d9a5b42f26d76e964e083c0bd9ea3d4d06f905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP5LFYS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqt39K%2BwGLGRj%2FnL8n13NHJQgZ1qcvH8jSeeOD9JuGpQIgEKirLwiwmpVe0ac13CZ4QpBGvaTvwoZvdsnKF47pRmcqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCls4M7ZgWObMkTKtSrcA5Dq5LVGfGOnBttL1MfDwYGOQKe%2BESnXUPAR5vcZh3xNqYo9zHMc%2BXufdPqABbAOp4L%2FNj6kppiBMa8%2BdkWOXDNPkkURxpqALY4jzzb9rlOMPxnLY4E6twmCHB%2BYPNBfRgXWTE0fS0QbCGbs1rog%2BHgV2Z3PQ5A%2BFq9GZByXV%2BIEd4tamqwAll%2F0bbEvkti1WHVI7KVspK6U6jk9mBfcOC1kfAuJkDJMffgyHjXFesnUK7lG3H7R%2FXNHyed%2BtOuW8euuvFRYMH1ErcAdoSMBZ9IWvne0aCLwPWOHGI9WRB64QqFrJLpQlG82Evjt0ZSJZIhVXPqAulWMi09fvfeMOlgutrQZ0vsUrD8gbiVDQFQbSZCY4aoCfdPrfCoza6fjvLHbZmMnKjHxrQdw1PfdBvzcLL4q3ebIvFqUUzjr7uVRfWdTJyImbDVbckT6sskGE0WL2qDQYlSDllYc7zKV33OMcx%2FCZJsB8S3bjQbUGn1Ln8kIIJEDzjsHr%2B%2F24VCY0uHaNHqOjUhhitty108jT%2BpFPrym8UGGFHjBkDDwzq%2BO9Hg8UHqSYwRpwBe1BaEV8bZNsCXFw8%2Bp2Pea%2BHYZUgZB7jnbYhsQsiG4BatYTKpsnVaHyWTIX3Zgv9AqMPuh1MkGOqUBYchm%2FFO2tCZcioDD5zMp57CrDvrklrQBI%2BmaZfZaWc%2FoOoKFkCPS%2Fn%2FE6n9wBcVOzOHBs9ZqxfIOv5lELptqqjzDoyPd84x4chuZDrczuBhv2IJf7I7fmqv9wFspFxu9HoUVA0cfVICO3%2FSi5l%2BmLuGfV97Gj4CqYzQ3fl46fOBiSsU%2FogbXnOS0E1kL2RILn0NaSnR8Unr3DOTbkBKP2FCSGRxC&X-Amz-Signature=e71dbad9d9184127237a3372de196da7e55143561e5a79d59ea067534b20121e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

