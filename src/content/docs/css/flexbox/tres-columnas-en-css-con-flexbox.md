---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535OLHOE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVNCwJz363WSu%2FVeX45LQp6BOPRbY5UwUaDt0mdW5AsAIhAO43rYGy%2BJSQTGidwvyMRKIDP6VMWT5L4YPRn5aONnHLKv8DCHoQABoMNjM3NDIzMTgzODA1IgxxlXI2ftIb7Zta%2F4gq3AOZvnsViq5xpw9iiPhkgC14ksFwosozzp0tVG%2F%2FtlnSrrsZZfmdtDuAktHi9ECohb9AngF4BvVViKckRy6kKkf86SdrJr2q%2FRyjqB5Ff6cc0rtpncoqpwtmZXwjoea3Bw9sb0I10XdsjpBqicNOBd1QL47%2BNGlvpWDlu%2FhS0KrSRhc44eXx%2Fj7HJxm27BoYU3Lp%2Bwp9UixbD6WoKJpryzRxgwZ8Thk%2BZGP8D5f74UzvrhW9vGHnG8jEOEYtaVqNoye0RyuY%2FPF2p22J%2FT%2BES7DVjnHbHBKO13v91xHZDvOJJoio3qMdduD%2F362Pt9mVS%2FD3ZWDYTdis5IqDm3sweCtIyy7XboxS5yxZvjBqM0Vq%2F4a5Rw2o01U7m%2FbtbJmZ00Fg0xxiHhnRPmrAcQ6HgiFkRlikIxYpRqW83F6cBcVZfCgwjjZJbegCR0Ey1o7pxBfzr%2FzZof%2BtfF4Vq4KIWNvonz%2F3qxd%2FbvLQ34ZtVAB9%2B8lrLjJYlpbKK4D4KQKzsWzpyPEJD1nK7n%2BlKi87nBe8OseWdVNXHzfowGb1pHWK9b2V6nl14vF1hK57KDz8S3CX%2BBF3aTEQAZj4zEKSAhxpximu2wdKh10aHP5WuMrYd5fj4VLr91LV9AYGPTCTzNHJBjqkAQR7eCCRjwmLScUJn%2FDQliaH6egANSa4XyUa4rFiDtEUVEAhXLymZ8z0oCEFwnyUJFenqqBTBLwIgsPQ8E4ECjJw3PIrKfxd3Wi8WcV7jucU2oSRkD85FH7WNmxoeQh%2FTGLNYoOtRfR1J8U1gi%2BwqlVtXxcS1P87ru%2Bng3BvVdBhDHVuLWYOjrLe6%2F7iw%2BR%2FZ98K5AZ6Rmzuit8UBVeApumMOavS&X-Amz-Signature=b2073c3062941198c2715b7a47f35a2e6e38b0552a5203f9515f573c6e827175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535OLHOE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVNCwJz363WSu%2FVeX45LQp6BOPRbY5UwUaDt0mdW5AsAIhAO43rYGy%2BJSQTGidwvyMRKIDP6VMWT5L4YPRn5aONnHLKv8DCHoQABoMNjM3NDIzMTgzODA1IgxxlXI2ftIb7Zta%2F4gq3AOZvnsViq5xpw9iiPhkgC14ksFwosozzp0tVG%2F%2FtlnSrrsZZfmdtDuAktHi9ECohb9AngF4BvVViKckRy6kKkf86SdrJr2q%2FRyjqB5Ff6cc0rtpncoqpwtmZXwjoea3Bw9sb0I10XdsjpBqicNOBd1QL47%2BNGlvpWDlu%2FhS0KrSRhc44eXx%2Fj7HJxm27BoYU3Lp%2Bwp9UixbD6WoKJpryzRxgwZ8Thk%2BZGP8D5f74UzvrhW9vGHnG8jEOEYtaVqNoye0RyuY%2FPF2p22J%2FT%2BES7DVjnHbHBKO13v91xHZDvOJJoio3qMdduD%2F362Pt9mVS%2FD3ZWDYTdis5IqDm3sweCtIyy7XboxS5yxZvjBqM0Vq%2F4a5Rw2o01U7m%2FbtbJmZ00Fg0xxiHhnRPmrAcQ6HgiFkRlikIxYpRqW83F6cBcVZfCgwjjZJbegCR0Ey1o7pxBfzr%2FzZof%2BtfF4Vq4KIWNvonz%2F3qxd%2FbvLQ34ZtVAB9%2B8lrLjJYlpbKK4D4KQKzsWzpyPEJD1nK7n%2BlKi87nBe8OseWdVNXHzfowGb1pHWK9b2V6nl14vF1hK57KDz8S3CX%2BBF3aTEQAZj4zEKSAhxpximu2wdKh10aHP5WuMrYd5fj4VLr91LV9AYGPTCTzNHJBjqkAQR7eCCRjwmLScUJn%2FDQliaH6egANSa4XyUa4rFiDtEUVEAhXLymZ8z0oCEFwnyUJFenqqBTBLwIgsPQ8E4ECjJw3PIrKfxd3Wi8WcV7jucU2oSRkD85FH7WNmxoeQh%2FTGLNYoOtRfR1J8U1gi%2BwqlVtXxcS1P87ru%2Bng3BvVdBhDHVuLWYOjrLe6%2F7iw%2BR%2FZ98K5AZ6Rmzuit8UBVeApumMOavS&X-Amz-Signature=1e18d09084d1beb7d15b337f98126a7d658b3c0e428c409a6ea223a066fe5067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

