---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7N7RRX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7Nrglq6wcdI9vHyocGkCnN433ugkB3X5iSt0WFzr0VAiAGL6o2M4HlzGBV4DQDqlT59RsjWpJ1IdC39Al%2FfJLNcCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IZZx%2ByfivXtlGFEKtwDQ4ZpSfaip7%2Bfr%2Fp9Fs0f3nWXcu70jPho4jri3meYpBV9urLy0T8Rn0tggaDoAMbpMaqJYs21nTZeb%2Fzx2EOEJ7tmDrUjO%2FFiuO8Jp%2FlJEQv8Uvn%2F47P0ag7HlmL6n1ah%2FmJIUITz4%2BqSU0WNBrisUNE%2Ff%2BC5ijM%2Fu5v51GKQ0zTFiXkOEz97nKwKZ0DJX9BNk%2Ff%2BiPmJiuhw1dKsxXd2KZRHVCU0ABwF2BfsO3K3nEyjww7ydJFb4hmmmNURLBOYv6EHYI5NlhG6zm%2Bo%2FvY4Vw0AMzO3HMMXjHmWv%2FbqRV07XuTbcksSO2YOhvDU1jpzRz%2FTvp0dgSqniYm4DHkMOJUqpJaHOy6P9QAdMz%2FlG0pz0UiqwfPLPguBpwXrhS3%2B5%2F1kCz5tRL7WeLdzNCotpTDZyofhK9up77XzahlG2rgeXQhhxsiRSBdvzdJ6NCjwx2f2O7epqecr5%2BEPfxetfOXkoswXQv8NmlTq7oPfiY30eHR3kdmQBfbVNZ22FGf7tH3SicdJ%2FiX4KgNav6WDV7s8nktOr7aoWTK%2F4EWH7SVw0g59Q9k%2FvV5YZVvSjDqFZIgOb1MXSO2aytqdcfWe%2FABLwNFZJnr2jSGy83MWpQN0XuHK%2FXqdPv%2BvLFkwqcLdyQY6pgFpHAGZLM%2BPkE29h5DX5iyNOtHOzBdOHUdmXdF%2FAfiGj9DYN4nK82KJ9Qbq2IjJEVtkaSI%2BklpitqHPMACDKjYnQQYndovPNjBX6RW%2BR6ufKf3WKwtEOcrzki188zwroHax5Mh6IwfivqqXmFyhZcW91hRGw62cbZqGQ3zvl8%2BixRA2oxWgK%2BVEpQ%2FlhjqINeCVXJMNgeTnHwq7%2BFhtZ0%2BSszE2R9h%2B&X-Amz-Signature=4d72bac5fa05a1a46c41a10756c63d2a7723253ef81402b0e27d883f6f056e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7N7RRX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7Nrglq6wcdI9vHyocGkCnN433ugkB3X5iSt0WFzr0VAiAGL6o2M4HlzGBV4DQDqlT59RsjWpJ1IdC39Al%2FfJLNcCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IZZx%2ByfivXtlGFEKtwDQ4ZpSfaip7%2Bfr%2Fp9Fs0f3nWXcu70jPho4jri3meYpBV9urLy0T8Rn0tggaDoAMbpMaqJYs21nTZeb%2Fzx2EOEJ7tmDrUjO%2FFiuO8Jp%2FlJEQv8Uvn%2F47P0ag7HlmL6n1ah%2FmJIUITz4%2BqSU0WNBrisUNE%2Ff%2BC5ijM%2Fu5v51GKQ0zTFiXkOEz97nKwKZ0DJX9BNk%2Ff%2BiPmJiuhw1dKsxXd2KZRHVCU0ABwF2BfsO3K3nEyjww7ydJFb4hmmmNURLBOYv6EHYI5NlhG6zm%2Bo%2FvY4Vw0AMzO3HMMXjHmWv%2FbqRV07XuTbcksSO2YOhvDU1jpzRz%2FTvp0dgSqniYm4DHkMOJUqpJaHOy6P9QAdMz%2FlG0pz0UiqwfPLPguBpwXrhS3%2B5%2F1kCz5tRL7WeLdzNCotpTDZyofhK9up77XzahlG2rgeXQhhxsiRSBdvzdJ6NCjwx2f2O7epqecr5%2BEPfxetfOXkoswXQv8NmlTq7oPfiY30eHR3kdmQBfbVNZ22FGf7tH3SicdJ%2FiX4KgNav6WDV7s8nktOr7aoWTK%2F4EWH7SVw0g59Q9k%2FvV5YZVvSjDqFZIgOb1MXSO2aytqdcfWe%2FABLwNFZJnr2jSGy83MWpQN0XuHK%2FXqdPv%2BvLFkwqcLdyQY6pgFpHAGZLM%2BPkE29h5DX5iyNOtHOzBdOHUdmXdF%2FAfiGj9DYN4nK82KJ9Qbq2IjJEVtkaSI%2BklpitqHPMACDKjYnQQYndovPNjBX6RW%2BR6ufKf3WKwtEOcrzki188zwroHax5Mh6IwfivqqXmFyhZcW91hRGw62cbZqGQ3zvl8%2BixRA2oxWgK%2BVEpQ%2FlhjqINeCVXJMNgeTnHwq7%2BFhtZ0%2BSszE2R9h%2B&X-Amz-Signature=29c1d898d219ac1bcf3fdaa5f60f3fd2ee8cd459e482132429f247558b271947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

