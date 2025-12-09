---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBY42VF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFPYEKp0nCYPIhoF904URaO3IMe8jPkKaat47MrAQGRwIgJBTuvvZcAcg3kn0Jc%2Bnei77MfRmoeK5gco7o%2BknC6RAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP9BFbTtTHc6%2F4q1SrcA6S15kThrD8qgZSJw2%2Bul7xLqhZ%2BnSqwpFdGdEK4a3KYNuR%2BkLtXFul3vBjg8VIDkhXSvrMVb37z%2FlDtGQLfOMTAnoVE%2F2HF6wbF8PaNeinYkOR4mtYKZRPxqlJpUfQ6m%2Bytf1LemqTShtxZzYaSbIcWkkEG52DNtusJhA%2BPX5mjXdXZuBi2co81j8ylw7yIj4cN%2B3OxTR7zPiRmwg8udP174UHbppD1AvdGVrzhp0UAs%2FryIhWx%2F%2FtpxVbDyWK73lI2%2FKgE5qFXnE131Pmn2AkFjdqcuTfCECqkdJjIRrMH4E23ls1XIgnpV9i9sjWg2yS3QWx37uxTnBZwONdT%2BoQ3uGsdsCYpPTwLeezlSZD8QfPgKRu1zmmrTzqcdyTgXfW%2B2LDW%2F493%2FLhzusaSFs2syMa4ncikS%2FGMcIIVk%2FGO8bKmlXsCgCvGFaTVq1ise2ijIVK5LPo04MmG%2BvuZPyuVxscO9QyVIn9GaSolV9LRKjogeY9nUdj56GyXfONnrVbgj6kXKNO%2FG3tp%2F2QaFHtmUphajU0g%2BHul3UvTNj3oVjRzPODjuXkZJ8WoPqwXOEP6YIYx5UxiispvL0tWiU%2BrH69j5TjdqrRxVbaU10VtMSMj18wDUOtjYmC8MISk38kGOqUBF8u8u5blXa01eAp%2BQARHoyLEj%2BP6AamuDW84rzCXxNE%2Fiz%2BFerVlwZNG405zLMZVPmwRWaYCSN%2BIHyXt1sA7TeRPQgJegX8ArMDGejzNQcVR%2BeZ%2FUEZt6P4OQTloplMug19w4q329uYmjjxl2e9D9iqYCvG2L40Nd8QWH5HHn%2B%2BPvWCr67%2FivvJiVCjwRYtrT5zKZtcMPlXi37Tq%2Fo5vGRb%2BYl%2FO&X-Amz-Signature=3e181b4644f80b1094b8749341748049d264b2438e5978e66fa97348e74df1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBY42VF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFPYEKp0nCYPIhoF904URaO3IMe8jPkKaat47MrAQGRwIgJBTuvvZcAcg3kn0Jc%2Bnei77MfRmoeK5gco7o%2BknC6RAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP9BFbTtTHc6%2F4q1SrcA6S15kThrD8qgZSJw2%2Bul7xLqhZ%2BnSqwpFdGdEK4a3KYNuR%2BkLtXFul3vBjg8VIDkhXSvrMVb37z%2FlDtGQLfOMTAnoVE%2F2HF6wbF8PaNeinYkOR4mtYKZRPxqlJpUfQ6m%2Bytf1LemqTShtxZzYaSbIcWkkEG52DNtusJhA%2BPX5mjXdXZuBi2co81j8ylw7yIj4cN%2B3OxTR7zPiRmwg8udP174UHbppD1AvdGVrzhp0UAs%2FryIhWx%2F%2FtpxVbDyWK73lI2%2FKgE5qFXnE131Pmn2AkFjdqcuTfCECqkdJjIRrMH4E23ls1XIgnpV9i9sjWg2yS3QWx37uxTnBZwONdT%2BoQ3uGsdsCYpPTwLeezlSZD8QfPgKRu1zmmrTzqcdyTgXfW%2B2LDW%2F493%2FLhzusaSFs2syMa4ncikS%2FGMcIIVk%2FGO8bKmlXsCgCvGFaTVq1ise2ijIVK5LPo04MmG%2BvuZPyuVxscO9QyVIn9GaSolV9LRKjogeY9nUdj56GyXfONnrVbgj6kXKNO%2FG3tp%2F2QaFHtmUphajU0g%2BHul3UvTNj3oVjRzPODjuXkZJ8WoPqwXOEP6YIYx5UxiispvL0tWiU%2BrH69j5TjdqrRxVbaU10VtMSMj18wDUOtjYmC8MISk38kGOqUBF8u8u5blXa01eAp%2BQARHoyLEj%2BP6AamuDW84rzCXxNE%2Fiz%2BFerVlwZNG405zLMZVPmwRWaYCSN%2BIHyXt1sA7TeRPQgJegX8ArMDGejzNQcVR%2BeZ%2FUEZt6P4OQTloplMug19w4q329uYmjjxl2e9D9iqYCvG2L40Nd8QWH5HHn%2B%2BPvWCr67%2FivvJiVCjwRYtrT5zKZtcMPlXi37Tq%2Fo5vGRb%2BYl%2FO&X-Amz-Signature=e05f556d5b4fbe6340efb81598f52f91346046f0dfcc85bd29037db4db38d383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

