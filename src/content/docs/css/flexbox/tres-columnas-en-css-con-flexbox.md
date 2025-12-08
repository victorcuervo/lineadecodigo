---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZQJNVU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSiFtHLvmhMz5rkHcrTrdS8uTAG6yPUQykp3XpytJVAIhAJ235rBlawaXItmeYHFIgbnl3lSJwLAS0VzKDDxRxpiCKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fn433R4c3fQhDJIoq3AMhtM3IIy0hDonBMqoaX1W2jCbv9HOZveGKPuG2svYmHhXBgU9fF6B%2BKT%2BiMJGK6nZXvBaTN%2FteIa59CLMtDh%2Bc5s3nfV8bm3mTIly4tlbyN67TfKCp0m8Nr7v%2BiOb718%2FcInTzHsZyKcKJWjimRg6ikdoOBSpOE8F5dA3A6bJtpqmJnunDs5U74CMcMgoPrpavC2D8TalAzQlHpPJXXYsk%2BB1ran%2B10RhrQiaUQSp%2BmIuafqitjYMeGdtjuFd4B%2ByoNDne6CjMjMhwkz3ezHNpaULIoDUmmuvtijlzCpFWLXONg8%2BNZB6G0XlUpTwyI9r%2FSjyTP2LD2V4GNMfBFM4yMvs0HeK9dRR7HawX%2FFiqhoXWGwTuui8%2Bgk5I8gofyHh%2BUYCgdY4Q5mKj0kOlkTmzM5dAvlUSpiMO8%2Bk5r%2Fr0OyHbecGVFES%2BGC%2FSDUtFG1pGY2Zt0ddKVfumD%2FMMZLKczip5J54MFW7rdjEFBJNQKlHzvtFJ25n7ooJBEugesYwPdpA5h2dcCaZWYD9NPifXAj97LV9%2B4nHckGsuyKPjWzxDgObaPU9AukkJu27bU6XmxvBW1mDOUiYSLZUoMNRHASyjhgBpXiRY3LHs%2BfiuPtNGgcJw6cTgTIM2njD07NnJBjqkAdXy0mf1%2FwqhFxIzFn8MrLsGzMQT7EnOzpTgFvajOaLAM3LmwdR0zZK3KpY3GTndmSTspEzpCKBQQE4tJGCZcd1I5l4u6TDDIAyDHwfr57gW0LMQ8ENYwoFuY0oxltDwMeZamM55L71HSh1eFWdJfq9qjtvsF0USbeWu27RDp9xBpdr1a5g52X%2BvmuGXd5lYXFQvTIoIDl6sbtV9NXfDGipF56Cr&X-Amz-Signature=f87042f06045dd32400510817c1a2ada2dd6b7daba321ffe5bfa2a2cb9a006e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZQJNVU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSiFtHLvmhMz5rkHcrTrdS8uTAG6yPUQykp3XpytJVAIhAJ235rBlawaXItmeYHFIgbnl3lSJwLAS0VzKDDxRxpiCKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Fn433R4c3fQhDJIoq3AMhtM3IIy0hDonBMqoaX1W2jCbv9HOZveGKPuG2svYmHhXBgU9fF6B%2BKT%2BiMJGK6nZXvBaTN%2FteIa59CLMtDh%2Bc5s3nfV8bm3mTIly4tlbyN67TfKCp0m8Nr7v%2BiOb718%2FcInTzHsZyKcKJWjimRg6ikdoOBSpOE8F5dA3A6bJtpqmJnunDs5U74CMcMgoPrpavC2D8TalAzQlHpPJXXYsk%2BB1ran%2B10RhrQiaUQSp%2BmIuafqitjYMeGdtjuFd4B%2ByoNDne6CjMjMhwkz3ezHNpaULIoDUmmuvtijlzCpFWLXONg8%2BNZB6G0XlUpTwyI9r%2FSjyTP2LD2V4GNMfBFM4yMvs0HeK9dRR7HawX%2FFiqhoXWGwTuui8%2Bgk5I8gofyHh%2BUYCgdY4Q5mKj0kOlkTmzM5dAvlUSpiMO8%2Bk5r%2Fr0OyHbecGVFES%2BGC%2FSDUtFG1pGY2Zt0ddKVfumD%2FMMZLKczip5J54MFW7rdjEFBJNQKlHzvtFJ25n7ooJBEugesYwPdpA5h2dcCaZWYD9NPifXAj97LV9%2B4nHckGsuyKPjWzxDgObaPU9AukkJu27bU6XmxvBW1mDOUiYSLZUoMNRHASyjhgBpXiRY3LHs%2BfiuPtNGgcJw6cTgTIM2njD07NnJBjqkAdXy0mf1%2FwqhFxIzFn8MrLsGzMQT7EnOzpTgFvajOaLAM3LmwdR0zZK3KpY3GTndmSTspEzpCKBQQE4tJGCZcd1I5l4u6TDDIAyDHwfr57gW0LMQ8ENYwoFuY0oxltDwMeZamM55L71HSh1eFWdJfq9qjtvsF0USbeWu27RDp9xBpdr1a5g52X%2BvmuGXd5lYXFQvTIoIDl6sbtV9NXfDGipF56Cr&X-Amz-Signature=efa11d050c6afb131506e4ca074ae48c539e8ddda60401074fccd116be92f8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

