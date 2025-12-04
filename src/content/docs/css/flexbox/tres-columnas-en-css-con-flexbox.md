---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KD2KHKS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBYyLcjoPxvvMwrhascPDN11laXVypB29HlAM5U8j%2BciAiAgxWRII9z9qLsGGLw0fEMdxTztT0AFE8r6AVmykWLiDCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMroZC4dFkD1zd1l1HKtwDzDvpz2TvVUPN1Mf883Ktg8K5cGFxyjdQVje8LBl1JvIuynCZ15xODQLzLxnmaUeAXWrZ%2F5m%2FHh6aoXRWJKjoI%2FR%2FtmrvLcCU18p1%2ByBdaPhB%2FP%2BeuGU29eGLatRNCQuMez9R2UCz22JjenJ2JFnaYJTiV3d4lXuDfmqD34b1wMaRuYKXMQJrewxGJGcRUYJ44Iau9uHTzd5svM0U5N0wsGSv0%2BNJJjAj0QvMyJ7KeynZTl55I6jWmyB1l80CeLilrNPCA8amkl7yDUgmt7NL%2B361mDRrEluDWoz0Bi49FPrbZ%2F6CDj7G3vHCnYhHGD%2BZh5HTa6Fbej88e8sDSyZkvJluRcnyT4y1bobBUv6nOaS0t5nLMoClJ%2F6uxTqB2j4IOP7DAO%2F%2BjfQ6g7cvRDB4BG37l%2FGUNU%2FTlHlC4ggkWwfLHoNDwTqH6SLjnWiBzljzr4VM%2BKD%2B57moKbo5lgghYq0X8nsWvKA%2BUXC1fIDnpbqS%2FlAzTIOXCurk%2F2Sdgk4FQcxOSZtDnYFLVL9Vbl%2BuAHGFM3wxCDzrKd%2BRLzQD5SAUsDSjTqFS5CTEkTdfNWS5WvNPWjD4k%2Fm7t6kGRISzOoQRgyEMiCoXGpvtyctiyBO0dfRMSJGSCIHg%2FLIwtq7EyQY6pgFbhHr1o0Hz0ObzUJcyK7WmhHJuPDW0ZixEU70tTRx01RyWT3z%2Fs%2BB81mNgL9HSrf96ocGZtjIS16uzKGD6VW%2F%2F4PMU4%2B5UH7J3%2FZvXyzAaY%2B2EP10PC6van1GgZDn19GjKjCUnjAaps%2BArgDvSZRKGPHzvi66H5v4y5%2FBuqynS8fQVFbnRA7VIcjqk0bon0h1tkY2NbDjUNRRl3uS2vckcw9r7bgZ5&X-Amz-Signature=8e2fdfce7f479b4386f60626fbc3278bccb13d5d58673a236b4d63a39fa035ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KD2KHKS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBYyLcjoPxvvMwrhascPDN11laXVypB29HlAM5U8j%2BciAiAgxWRII9z9qLsGGLw0fEMdxTztT0AFE8r6AVmykWLiDCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMroZC4dFkD1zd1l1HKtwDzDvpz2TvVUPN1Mf883Ktg8K5cGFxyjdQVje8LBl1JvIuynCZ15xODQLzLxnmaUeAXWrZ%2F5m%2FHh6aoXRWJKjoI%2FR%2FtmrvLcCU18p1%2ByBdaPhB%2FP%2BeuGU29eGLatRNCQuMez9R2UCz22JjenJ2JFnaYJTiV3d4lXuDfmqD34b1wMaRuYKXMQJrewxGJGcRUYJ44Iau9uHTzd5svM0U5N0wsGSv0%2BNJJjAj0QvMyJ7KeynZTl55I6jWmyB1l80CeLilrNPCA8amkl7yDUgmt7NL%2B361mDRrEluDWoz0Bi49FPrbZ%2F6CDj7G3vHCnYhHGD%2BZh5HTa6Fbej88e8sDSyZkvJluRcnyT4y1bobBUv6nOaS0t5nLMoClJ%2F6uxTqB2j4IOP7DAO%2F%2BjfQ6g7cvRDB4BG37l%2FGUNU%2FTlHlC4ggkWwfLHoNDwTqH6SLjnWiBzljzr4VM%2BKD%2B57moKbo5lgghYq0X8nsWvKA%2BUXC1fIDnpbqS%2FlAzTIOXCurk%2F2Sdgk4FQcxOSZtDnYFLVL9Vbl%2BuAHGFM3wxCDzrKd%2BRLzQD5SAUsDSjTqFS5CTEkTdfNWS5WvNPWjD4k%2Fm7t6kGRISzOoQRgyEMiCoXGpvtyctiyBO0dfRMSJGSCIHg%2FLIwtq7EyQY6pgFbhHr1o0Hz0ObzUJcyK7WmhHJuPDW0ZixEU70tTRx01RyWT3z%2Fs%2BB81mNgL9HSrf96ocGZtjIS16uzKGD6VW%2F%2F4PMU4%2B5UH7J3%2FZvXyzAaY%2B2EP10PC6van1GgZDn19GjKjCUnjAaps%2BArgDvSZRKGPHzvi66H5v4y5%2FBuqynS8fQVFbnRA7VIcjqk0bon0h1tkY2NbDjUNRRl3uS2vckcw9r7bgZ5&X-Amz-Signature=6b0a0ffe9f6b6b26ee5932054fa22515dbf52e14a3c60e42a3c3b2e997a91a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

