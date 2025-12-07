---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLWQVND%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV93UkeF6d8IF3HDxL2JzLBku4kb24OrVa3EEubCGYXAiAMTtjzjRD183rJhtcc4RR%2B62aQixm%2BcwCeCxSokYvayCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt26KYdhwkl%2Fsvj2KtwDuR9dFLr6aQ8vT06X%2Bx%2FtVhJN4iKrCk0GgDRKGu37e3ALKV4YXj49M2zVk6ltybcspZYxoN2nQrNjZMFrMIt4p91CubjS0KDMiLr%2B0WnuTXLNP0xRUh9X4UoArg0RHFeMzV53JHTfMsm9F3oIzWCEJfS3OtNaZhpB8K6dPq2ZRExOSAiwlLf6jAOvKyjuf8FhfilOhVSO%2BjVkpwNCddl9adKKpkY1MnUCGJjeGJ4J66%2BAvncGESVq0f6wdr06P2HEXy1CW%2FD5N4RQ%2FfZUVhQB37%2BTWZqXOzou912mabDfozviqsD43QddEFtBNxv4RrFyPHc6FdqEGMp188aRXgcatqJHk0cafUSVxaeg%2BiWuMSJy5roMRXLmBs%2BnB0emQPPKI5wsPd6jrRpWsyY49TU5pLtqkL0vXo%2BeKeq%2BU%2BYa0pYdRcW5QYNyM44GyQNHJaudyiaMXndWhiutWSa8Uchrx2tYuHB6TpuXZE6QNufYNQPqfuNxxyRWmLd39MP%2Fn5YwaxdoZj9QNmWWnZ4ukCzHYT5NUeMvq%2BFeKux6SnsDuiouITAcnDI2SaSZhNiYlru1uSQmimYeZ6rmPQ2p4LXzGU7vTArrfnLiHyclDXgT4jiXam6DT3O3QJZ1vPsw8LLWyQY6pgHwk6NwLpIdvj6jRC8Yf1yuBJTCgBgrv5NOd2v3XZLCpkfJGaVb%2B46J385%2BE3Gwe%2FgC0zvnCretZGLYHk9%2BF3rLMJCC%2BoPLL0hDrwthidiDo2oiwrB9hCZGupyRWRUQLfNEmbkr%2BKZ0wAwCKSfjh%2BvTupIlG5LUchBjMte2AJZro3loOXy1jLUroa1Vo%2FQuGoNVlWMruscJZCwyCuj85Me9Z5kI88O6&X-Amz-Signature=da16c0cda4f7ffad09d406504920bedab3f4bd8f977b5f7f4c352c95db066019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLWQVND%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV93UkeF6d8IF3HDxL2JzLBku4kb24OrVa3EEubCGYXAiAMTtjzjRD183rJhtcc4RR%2B62aQixm%2BcwCeCxSokYvayCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvt26KYdhwkl%2Fsvj2KtwDuR9dFLr6aQ8vT06X%2Bx%2FtVhJN4iKrCk0GgDRKGu37e3ALKV4YXj49M2zVk6ltybcspZYxoN2nQrNjZMFrMIt4p91CubjS0KDMiLr%2B0WnuTXLNP0xRUh9X4UoArg0RHFeMzV53JHTfMsm9F3oIzWCEJfS3OtNaZhpB8K6dPq2ZRExOSAiwlLf6jAOvKyjuf8FhfilOhVSO%2BjVkpwNCddl9adKKpkY1MnUCGJjeGJ4J66%2BAvncGESVq0f6wdr06P2HEXy1CW%2FD5N4RQ%2FfZUVhQB37%2BTWZqXOzou912mabDfozviqsD43QddEFtBNxv4RrFyPHc6FdqEGMp188aRXgcatqJHk0cafUSVxaeg%2BiWuMSJy5roMRXLmBs%2BnB0emQPPKI5wsPd6jrRpWsyY49TU5pLtqkL0vXo%2BeKeq%2BU%2BYa0pYdRcW5QYNyM44GyQNHJaudyiaMXndWhiutWSa8Uchrx2tYuHB6TpuXZE6QNufYNQPqfuNxxyRWmLd39MP%2Fn5YwaxdoZj9QNmWWnZ4ukCzHYT5NUeMvq%2BFeKux6SnsDuiouITAcnDI2SaSZhNiYlru1uSQmimYeZ6rmPQ2p4LXzGU7vTArrfnLiHyclDXgT4jiXam6DT3O3QJZ1vPsw8LLWyQY6pgHwk6NwLpIdvj6jRC8Yf1yuBJTCgBgrv5NOd2v3XZLCpkfJGaVb%2B46J385%2BE3Gwe%2FgC0zvnCretZGLYHk9%2BF3rLMJCC%2BoPLL0hDrwthidiDo2oiwrB9hCZGupyRWRUQLfNEmbkr%2BKZ0wAwCKSfjh%2BvTupIlG5LUchBjMte2AJZro3loOXy1jLUroa1Vo%2FQuGoNVlWMruscJZCwyCuj85Me9Z5kI88O6&X-Amz-Signature=453614d4d95b29069c41e14d7d9f7f58599fc59054fc5b98af9231700f47ccc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

