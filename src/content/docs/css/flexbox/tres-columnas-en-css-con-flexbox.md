---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFHOVHZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX8jf5rqPcH6MsDoGFMC4372Cfglr8QpXGBnssnRSG5QIhAMciB1mj3llPtN8hFfpB0dpUKzwSaYdFrPsTPeZZ03geKv8DCG0QABoMNjM3NDIzMTgzODA1Igzm6V9n9Uvtl%2FeFvucq3AOEekDcKw7yu%2Bq71240R2euxQ01LyqqzMHp1GacjUC6Ld%2BPchlv%2B5xZwTxExzgEkhOORRb2fuHfUGMpKRIsvcKR3lkXYsbiW%2BQxxODkQoH1QiHOF8iCk8rCYJYrMVxN92cPd39JM0skTf3R7gJdD1wFAOh881rsB7BvK85fxFkyOp1FeEnefybkWUnfqtBZfR9D03Cgm%2BkwK%2FumbrrYEnXOoj1FNEZGvbtLh8K%2BLLnDLbhogyYMJ8nGmFpynnk%2FGVta59iLTZVZgo%2FKaejPz4PnFKVw7KXFH9evnvJNj9lzJjLOhMbl3Ys48aEb5kVu82OlNyUQrqIxNsevZ2j8AL4N7e%2FajS7pLSejC4G4yzwvSJz3cK4R0zXAXdOQJoE2wSNXIj6dKjFvO%2F3Y4Zur6%2B01PKGP4aglYZqI5VPpqwNAgKyom%2BPPOhawXIbP9X21kYvyjDmQoPR0wNKpwS6Xx6LWIwkKjBrHzkyrSsWsPbQw6lRM3SXPVaBzTzr1vvja4rBsNm5Pz2LuYE%2BQh%2BUUI%2BZhNdQ7SxqRczvvZdMv3BcayLX%2FB4OQQDokcsp4BkKAra4Bz74ihxpwcGNQkzOzTnKhm4KeJwPTawMlXi0IrIXwoE5XAwstzcsRbCqKbDCo3s7JBjqkATG73GmfdLDtK8rYZFIwrsTOZ3XrkZo8vwkbHWicTUDn1UyJedf1aKhK41QpWYZWxfLeD7OP7euXZl%2BZmwAuZjhoZX0YhMQGRY4SBGVA9%2FD68tvY8ItXo0ejk%2BM98N16N%2Fy56Yzk%2BZQ%2Bc9q3kgo6WcLczVtIgiCMdqp%2FbndrGyAvztLEIKmZbDaRXJoBGejqQPdS%2BROkL1QZF%2BZdORHGGEWwqJiF&X-Amz-Signature=f2786c316536f587f8ef9195a69be7f9f1c468b65c4336a48b5d2022c255049f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFHOVHZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX8jf5rqPcH6MsDoGFMC4372Cfglr8QpXGBnssnRSG5QIhAMciB1mj3llPtN8hFfpB0dpUKzwSaYdFrPsTPeZZ03geKv8DCG0QABoMNjM3NDIzMTgzODA1Igzm6V9n9Uvtl%2FeFvucq3AOEekDcKw7yu%2Bq71240R2euxQ01LyqqzMHp1GacjUC6Ld%2BPchlv%2B5xZwTxExzgEkhOORRb2fuHfUGMpKRIsvcKR3lkXYsbiW%2BQxxODkQoH1QiHOF8iCk8rCYJYrMVxN92cPd39JM0skTf3R7gJdD1wFAOh881rsB7BvK85fxFkyOp1FeEnefybkWUnfqtBZfR9D03Cgm%2BkwK%2FumbrrYEnXOoj1FNEZGvbtLh8K%2BLLnDLbhogyYMJ8nGmFpynnk%2FGVta59iLTZVZgo%2FKaejPz4PnFKVw7KXFH9evnvJNj9lzJjLOhMbl3Ys48aEb5kVu82OlNyUQrqIxNsevZ2j8AL4N7e%2FajS7pLSejC4G4yzwvSJz3cK4R0zXAXdOQJoE2wSNXIj6dKjFvO%2F3Y4Zur6%2B01PKGP4aglYZqI5VPpqwNAgKyom%2BPPOhawXIbP9X21kYvyjDmQoPR0wNKpwS6Xx6LWIwkKjBrHzkyrSsWsPbQw6lRM3SXPVaBzTzr1vvja4rBsNm5Pz2LuYE%2BQh%2BUUI%2BZhNdQ7SxqRczvvZdMv3BcayLX%2FB4OQQDokcsp4BkKAra4Bz74ihxpwcGNQkzOzTnKhm4KeJwPTawMlXi0IrIXwoE5XAwstzcsRbCqKbDCo3s7JBjqkATG73GmfdLDtK8rYZFIwrsTOZ3XrkZo8vwkbHWicTUDn1UyJedf1aKhK41QpWYZWxfLeD7OP7euXZl%2BZmwAuZjhoZX0YhMQGRY4SBGVA9%2FD68tvY8ItXo0ejk%2BM98N16N%2Fy56Yzk%2BZQ%2Bc9q3kgo6WcLczVtIgiCMdqp%2FbndrGyAvztLEIKmZbDaRXJoBGejqQPdS%2BROkL1QZF%2BZdORHGGEWwqJiF&X-Amz-Signature=fa35c20a2d37e1be3aa03ca67d3e27b4e8ae8214de75efc606d687871048ee51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

