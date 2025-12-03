---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UIEYORA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCSPGIa8ySSk7GJGsvL4RUHVQ8WHazXzSyyv0ue8vN5ZwIhAP6iW9YFCvV2RNxTQsE%2FY3ZON7uH73CpKXl5dHmFqj9PKv8DCC8QABoMNjM3NDIzMTgzODA1Igx8o43C2n3QHOXVpgwq3APZtKhKJV46FD5cyapud5KOjjjIrB1%2FOFi3OFlqZWQs%2F6hMWWENiu8rUzDvlqLy2KNCTfIujt1xeqnA2GuLHMaKRbYpjxCOB2HoBn%2BbhEvKFbcMQPiNjLBFik8OstnC5EzqDMPqcHgZqAt89tCoq%2Br3PK6kRDLrsVVjxJqomFP6chrApkP2yYeohn%2Bn06EFDugtAtIPZX7gaGSc82UE7AqGC4c0r5p0fM%2BTNjh%2B3XQk%2FdYKvlm7321ncDE26hmhS%2BNWqVQ1goBaG47o32E9ul4SMRZV1N591axHZbAYgsr873SZ5VuVVp%2BOEZUA5pqbbVVPlybFLLQ4i%2BT8fGOUgbbVdfE%2F1RwikiNSq2zP69ELkVtwYb7x5LZQyEybatqf2%2B99UiULt2w7NPhdP9kU4eWi1%2FdsLJU4voPEfai3D2OHKwQrsjHywGfaEmQAubrQ4RXeGmFOsJ2E%2FQsw9AGdB6PIXg5OwaJaH6eVTzTFoiTogRUOmRkZQBY291hxGZnneiNGD7onFyPKypsKXr2MTxU8f5Vcrj05s3Gd2e4g3y%2B6FwbRV%2FGmfAAV7hvjWPOlmvpibKYNx%2FSEo9Bu1rlMpp64FSo%2BzxOPbSS8dfmHzv%2FTNk3jMK6dgt%2Fvl%2Bh%2FNzCZiMHJBjqkAZ2M9fXIIHToeRjvr3F2jnWctyGMEYdcIF1sp2YzVqTKIPRTVFLNoBUzhhRW7x%2FnXQ%2Bq8uFf%2B%2BrRkD3Ihmgy6vzkwat%2FGc%2B0b6vILIwPp6qmZBwLRfQKvdAy%2BejyimF%2BJyeClEEHDS9JWfM0MGjWSJh9ziffnFhNr6XluYKJ7Ico4S%2FNx9M3KZYwGSp5wgfBOH7rTnfxxic7cuncIq0hmM9sAUKw&X-Amz-Signature=c0781b8ab3397934321e2a220bc5431914dfd2225ac872ba9a125f2e70961088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UIEYORA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCSPGIa8ySSk7GJGsvL4RUHVQ8WHazXzSyyv0ue8vN5ZwIhAP6iW9YFCvV2RNxTQsE%2FY3ZON7uH73CpKXl5dHmFqj9PKv8DCC8QABoMNjM3NDIzMTgzODA1Igx8o43C2n3QHOXVpgwq3APZtKhKJV46FD5cyapud5KOjjjIrB1%2FOFi3OFlqZWQs%2F6hMWWENiu8rUzDvlqLy2KNCTfIujt1xeqnA2GuLHMaKRbYpjxCOB2HoBn%2BbhEvKFbcMQPiNjLBFik8OstnC5EzqDMPqcHgZqAt89tCoq%2Br3PK6kRDLrsVVjxJqomFP6chrApkP2yYeohn%2Bn06EFDugtAtIPZX7gaGSc82UE7AqGC4c0r5p0fM%2BTNjh%2B3XQk%2FdYKvlm7321ncDE26hmhS%2BNWqVQ1goBaG47o32E9ul4SMRZV1N591axHZbAYgsr873SZ5VuVVp%2BOEZUA5pqbbVVPlybFLLQ4i%2BT8fGOUgbbVdfE%2F1RwikiNSq2zP69ELkVtwYb7x5LZQyEybatqf2%2B99UiULt2w7NPhdP9kU4eWi1%2FdsLJU4voPEfai3D2OHKwQrsjHywGfaEmQAubrQ4RXeGmFOsJ2E%2FQsw9AGdB6PIXg5OwaJaH6eVTzTFoiTogRUOmRkZQBY291hxGZnneiNGD7onFyPKypsKXr2MTxU8f5Vcrj05s3Gd2e4g3y%2B6FwbRV%2FGmfAAV7hvjWPOlmvpibKYNx%2FSEo9Bu1rlMpp64FSo%2BzxOPbSS8dfmHzv%2FTNk3jMK6dgt%2Fvl%2Bh%2FNzCZiMHJBjqkAZ2M9fXIIHToeRjvr3F2jnWctyGMEYdcIF1sp2YzVqTKIPRTVFLNoBUzhhRW7x%2FnXQ%2Bq8uFf%2B%2BrRkD3Ihmgy6vzkwat%2FGc%2B0b6vILIwPp6qmZBwLRfQKvdAy%2BejyimF%2BJyeClEEHDS9JWfM0MGjWSJh9ziffnFhNr6XluYKJ7Ico4S%2FNx9M3KZYwGSp5wgfBOH7rTnfxxic7cuncIq0hmM9sAUKw&X-Amz-Signature=bb4b53ed17607c546115a25cd93d847f8b28158ee59fc72a7f43d2ccae140ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

