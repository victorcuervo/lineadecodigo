---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5B2MO2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICryz9nZB%2Bq%2BSl%2Bh5DCOj57ga5DSAYz9yfWxTMYw6N3JAiEAvpyI6C0jDeH29aI%2BFRWZzejzvuesz9eF1Uwy1Ri8yYAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPLY7bYN%2FJXd90XB%2FyrcA5dq5mm90Ipdvr4YgBVSO7aFZ%2FP9Rj%2BJqP08htOmff7uylBF2HL63kWdrD5tITDgcjLMW8fUoPZHKNtfQOkhLqeaWefqg9SQeUb9nJTnDyvHbTva2RmByObHU%2BFwol0p4tv0nr1TAJNvPH3TVwZrD%2FLQ1ibjPzy9MEYJzI%2F4oJ30t1Dugmz3oak6gD%2FrL8PaF61oMnAeWVfKtqVguUoF59apUR07hK%2F0raqq133NYJ7ItFk3gdibVtFvPizSma%2Bt65hbN%2FeqR52u%2Fq36j2XrikJb4BT17OeMiUUnOBGT4CLAJIQwpkgpYkXI%2B3vHkTYzZs3py6Bzz%2Ftwm3x6XOhLxNvUrOFKceZSm8%2FzfEl5VbztIpFUZmD0MzNkR%2BRejpJfIGqzc2vHt20uTLNFzMdJOG53DE%2FYUwAT%2BuqJohuKaht2E2zLkRfq5Xgxtgm60oyjdJg5w3K7qHwEkVnqRVqqliaSiNt8844iNrimVbMQRjt%2Fv%2BXX8bCNNOenM3yt%2BJV%2BMCCH3RaPRWYVjh904UzUdsCOolRtlJAVLU07EkrlRrA%2B2FGyjxbfx9z1%2FsvhoBx4X9MlxzrnKfCuJtY6TVauvKb2ziCWXzgFoklJm2W1%2B024CyDltr6JHVu7P4rDMKe%2BxskGOqUBalPCsrpsY3enOe7VBgLg%2FeQckQG8xC1Lf1lkqBCRgaX59%2Bdjn0%2FQBjRmmr1ZT4sAFxAw6wc7n7gI7P3z2ERzqXQmvJ3NJ%2B3c1JJ8hU%2FpqwN%2BkiYfq7QeWQ2xYNLtXX7JU%2BkcxXVxeQb%2Fat6jRqyZhzSN6K7RpQEKYyWbLUA0yuWECjlAABv%2BmPuG4LtvVdNdfxSvO0Ir92IukXpClePTzEz9Nlq2&X-Amz-Signature=d3137eb6cce89edf8b12c44a01a03d6255c0a191bcffc2dc623c6848a709f30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5B2MO2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICryz9nZB%2Bq%2BSl%2Bh5DCOj57ga5DSAYz9yfWxTMYw6N3JAiEAvpyI6C0jDeH29aI%2BFRWZzejzvuesz9eF1Uwy1Ri8yYAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPLY7bYN%2FJXd90XB%2FyrcA5dq5mm90Ipdvr4YgBVSO7aFZ%2FP9Rj%2BJqP08htOmff7uylBF2HL63kWdrD5tITDgcjLMW8fUoPZHKNtfQOkhLqeaWefqg9SQeUb9nJTnDyvHbTva2RmByObHU%2BFwol0p4tv0nr1TAJNvPH3TVwZrD%2FLQ1ibjPzy9MEYJzI%2F4oJ30t1Dugmz3oak6gD%2FrL8PaF61oMnAeWVfKtqVguUoF59apUR07hK%2F0raqq133NYJ7ItFk3gdibVtFvPizSma%2Bt65hbN%2FeqR52u%2Fq36j2XrikJb4BT17OeMiUUnOBGT4CLAJIQwpkgpYkXI%2B3vHkTYzZs3py6Bzz%2Ftwm3x6XOhLxNvUrOFKceZSm8%2FzfEl5VbztIpFUZmD0MzNkR%2BRejpJfIGqzc2vHt20uTLNFzMdJOG53DE%2FYUwAT%2BuqJohuKaht2E2zLkRfq5Xgxtgm60oyjdJg5w3K7qHwEkVnqRVqqliaSiNt8844iNrimVbMQRjt%2Fv%2BXX8bCNNOenM3yt%2BJV%2BMCCH3RaPRWYVjh904UzUdsCOolRtlJAVLU07EkrlRrA%2B2FGyjxbfx9z1%2FsvhoBx4X9MlxzrnKfCuJtY6TVauvKb2ziCWXzgFoklJm2W1%2B024CyDltr6JHVu7P4rDMKe%2BxskGOqUBalPCsrpsY3enOe7VBgLg%2FeQckQG8xC1Lf1lkqBCRgaX59%2Bdjn0%2FQBjRmmr1ZT4sAFxAw6wc7n7gI7P3z2ERzqXQmvJ3NJ%2B3c1JJ8hU%2FpqwN%2BkiYfq7QeWQ2xYNLtXX7JU%2BkcxXVxeQb%2Fat6jRqyZhzSN6K7RpQEKYyWbLUA0yuWECjlAABv%2BmPuG4LtvVdNdfxSvO0Ir92IukXpClePTzEz9Nlq2&X-Amz-Signature=4180ce218ce03799ed606bf2893cbe3532a31a89474f48dfa8d8d486e5f1c082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

