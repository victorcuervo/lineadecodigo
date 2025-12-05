---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLFDUZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlI0HIfg5s2rRcwd0giuW8NgaE2rM1ZXPKOR7x%2FzBZUgIhAPtQZraxfbCDYMOsllyJ%2BrOQNz4%2B5VD7wkjfo3jJsba3Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzBsOKRg5C4bxQHP5Iq3APy95L5NcKZkrZhf3Gdk%2BrkJgK2ZdlX7GsN84cdzIgCP0p5WRrLg1ulNcFoGdAszAOTFCrzuF1OtDJg4XoyWlcT%2F3n5pfaCyCwq5H80fx2iQ3UtEVXsVJfGnRAoMCpnOGlJmfytZZlzROml2Dhi8U603dSlhgcGrSxGT7W9e1NACYEYTm%2FP%2F1QHMSGOdO0oGjzXk61Dda5Mzqpa9Vv%2FFLXtQXuLZVxEnY%2B4Mbx787WPkSjfb%2BMoDm125dr5se55mb745QNeSZBadwDU9l3NuMh7yXGvRuPOTTq36z5bjp%2B2XJ8uvZvApJqfY5tRZMMCo6T%2BCYX11le2g7WS3tCRLqUu1JAFSl4xKpFl9nJULBfsrVPqW9D%2B5fvSX7txpRSYsvxUpwnSMl6cWEbXBg93eOJCpWCbcqgK5tjGl8qxGiOMJcFSn8aJm7x9YQlrxvlZ8HvpHQ7QrUJPwOyvs5mY8Gy9%2FwW6dNK2VXLiSk3nF3JI15yHYN7XzTlW6QnrcD4h%2FMXkJFyeFZZFgPqCL8J1GXx5lzsxJTf7S4sIhm49BtFCmJ1q6jX%2Fi02nYm%2BgTdi30ERf7rZaNN%2BRRO0dkpktwf20yEiOkuDjKTPd60Sa%2BO2AFUgvTzPRLZG2a05VHDCxscnJBjqkAeG%2FHlecyD%2BRR8PG2rdb7VPktIattltH3%2FTfSNHmtt9v3KKeNxoO6FIWYvHdHtPKaP7qyQC1XeYMtv%2Bowo9%2FYtygNDtBcI%2FUIHZjUuS8JfQ4I3B2AVKVF4vJn%2BNEyhpORgSTH3fbvSykCLHoS51pJLVPKxbs29wy3T2p5%2F2wQ0iAoPByy1bx%2FEvkIS%2FMeimw26wpAEwqOEJuous5s4AvM5S%2FF4wF&X-Amz-Signature=a2c1d8c4f9a888a84ef5ee1bcae7667066686f08a42bdd423af169da732de932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLFDUZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlI0HIfg5s2rRcwd0giuW8NgaE2rM1ZXPKOR7x%2FzBZUgIhAPtQZraxfbCDYMOsllyJ%2BrOQNz4%2B5VD7wkjfo3jJsba3Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzBsOKRg5C4bxQHP5Iq3APy95L5NcKZkrZhf3Gdk%2BrkJgK2ZdlX7GsN84cdzIgCP0p5WRrLg1ulNcFoGdAszAOTFCrzuF1OtDJg4XoyWlcT%2F3n5pfaCyCwq5H80fx2iQ3UtEVXsVJfGnRAoMCpnOGlJmfytZZlzROml2Dhi8U603dSlhgcGrSxGT7W9e1NACYEYTm%2FP%2F1QHMSGOdO0oGjzXk61Dda5Mzqpa9Vv%2FFLXtQXuLZVxEnY%2B4Mbx787WPkSjfb%2BMoDm125dr5se55mb745QNeSZBadwDU9l3NuMh7yXGvRuPOTTq36z5bjp%2B2XJ8uvZvApJqfY5tRZMMCo6T%2BCYX11le2g7WS3tCRLqUu1JAFSl4xKpFl9nJULBfsrVPqW9D%2B5fvSX7txpRSYsvxUpwnSMl6cWEbXBg93eOJCpWCbcqgK5tjGl8qxGiOMJcFSn8aJm7x9YQlrxvlZ8HvpHQ7QrUJPwOyvs5mY8Gy9%2FwW6dNK2VXLiSk3nF3JI15yHYN7XzTlW6QnrcD4h%2FMXkJFyeFZZFgPqCL8J1GXx5lzsxJTf7S4sIhm49BtFCmJ1q6jX%2Fi02nYm%2BgTdi30ERf7rZaNN%2BRRO0dkpktwf20yEiOkuDjKTPd60Sa%2BO2AFUgvTzPRLZG2a05VHDCxscnJBjqkAeG%2FHlecyD%2BRR8PG2rdb7VPktIattltH3%2FTfSNHmtt9v3KKeNxoO6FIWYvHdHtPKaP7qyQC1XeYMtv%2Bowo9%2FYtygNDtBcI%2FUIHZjUuS8JfQ4I3B2AVKVF4vJn%2BNEyhpORgSTH3fbvSykCLHoS51pJLVPKxbs29wy3T2p5%2F2wQ0iAoPByy1bx%2FEvkIS%2FMeimw26wpAEwqOEJuous5s4AvM5S%2FF4wF&X-Amz-Signature=638e48608eab3533fd8f6768a9407e5cb9435771a485ec8fa81553c98c7965ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

