---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM6ETFU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIActOUJrfCSCX2wQU%2Bi6Voz6CUKU6qH7mlhq9GYkv6abAiAgaLw1ly%2FEh0Y4vxaW8bP4PWj5CtVb0i7gqjRVxtoekiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdI2GA7x1U9bK3WoKtwDb8oB1hifmInhuEdGDKFX0zV4HqURLaDPMS8RZAY7C7tCo9dagtnq85WaDxmOTnIrTmwoAUrSUhyKIv74fONucC7i%2FrCASN0kixsTVuvyDLVYcK%2BbuDJ%2FV2TL59QNcTh2YFN8TNqoBVhyl0g5GU5idPRKGFbkE%2BH%2FG2b7sAvObij%2FBqg0AOSt0kn062e3FdjXfDsYfEW8Pheud%2FJ1wSJwfEcedGc9mMSVYsb4aDCDRT5yV1JluRKSdhYI1gsacTpwLe3UoErnzRrZqj7i2PA9AU2ZPtPgQavFozUyl4hATbatWh%2BXj0BhgCTXjFs3hWzm2KjDkM6y5vqhyv1iRxLeHi2X7lPdB0GO%2FVo49fXS%2BQiDPcEgzz5qKjbwz8kng2VYriw1YvtcIslemfY0JCCsOqf7nA4a5fI3OMTnWZM%2FXhCm2zwcfN4s4Cam4dvXAwa2xU%2BSO6xTplci3%2FNGVtwb%2F%2Bs1axGcMrUf1z8IC4ojqpTvnFl482o2ZBjkzhvhY7Tgnqqv6g4zOYgYKB6Jn0FvadBerna5BVQJf9gHiU3XIiUGH%2FNOurI%2FfuWzzddZU1vDcNpYtgUUcIp6HkXgE7h8hMuL38aZc9YHabyQ8JDE7HKQ3ZKdQJIdbpNV1sgwsZrVyQY6pgFYyqxRA59Bwda0TdkPTk6KoqnpjF4j2DaSJ53gz3Al%2B9PIFtdOHFhV8FmCgsI%2FztCCHDfokH%2B5AhjQCZHHdIhynw75mtvoN8mx3Vu3T%2BVHXDi1EMIXfHAMCJ2ngTYqe32Btp06Omm1Rjzo6%2FOdqsxAHpozRrRNcghMrtiSX1s9xOtY%2Fs3ao%2B%2BCfz4YVGOVhL7vxtlDGzAzWAuCcLd6v7CZlB9g5FaW&X-Amz-Signature=994c97b763973480b903bdeeaf1c3f1d9242aeb861bbf2899791f4a251c9f3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM6ETFU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIActOUJrfCSCX2wQU%2Bi6Voz6CUKU6qH7mlhq9GYkv6abAiAgaLw1ly%2FEh0Y4vxaW8bP4PWj5CtVb0i7gqjRVxtoekiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdI2GA7x1U9bK3WoKtwDb8oB1hifmInhuEdGDKFX0zV4HqURLaDPMS8RZAY7C7tCo9dagtnq85WaDxmOTnIrTmwoAUrSUhyKIv74fONucC7i%2FrCASN0kixsTVuvyDLVYcK%2BbuDJ%2FV2TL59QNcTh2YFN8TNqoBVhyl0g5GU5idPRKGFbkE%2BH%2FG2b7sAvObij%2FBqg0AOSt0kn062e3FdjXfDsYfEW8Pheud%2FJ1wSJwfEcedGc9mMSVYsb4aDCDRT5yV1JluRKSdhYI1gsacTpwLe3UoErnzRrZqj7i2PA9AU2ZPtPgQavFozUyl4hATbatWh%2BXj0BhgCTXjFs3hWzm2KjDkM6y5vqhyv1iRxLeHi2X7lPdB0GO%2FVo49fXS%2BQiDPcEgzz5qKjbwz8kng2VYriw1YvtcIslemfY0JCCsOqf7nA4a5fI3OMTnWZM%2FXhCm2zwcfN4s4Cam4dvXAwa2xU%2BSO6xTplci3%2FNGVtwb%2F%2Bs1axGcMrUf1z8IC4ojqpTvnFl482o2ZBjkzhvhY7Tgnqqv6g4zOYgYKB6Jn0FvadBerna5BVQJf9gHiU3XIiUGH%2FNOurI%2FfuWzzddZU1vDcNpYtgUUcIp6HkXgE7h8hMuL38aZc9YHabyQ8JDE7HKQ3ZKdQJIdbpNV1sgwsZrVyQY6pgFYyqxRA59Bwda0TdkPTk6KoqnpjF4j2DaSJ53gz3Al%2B9PIFtdOHFhV8FmCgsI%2FztCCHDfokH%2B5AhjQCZHHdIhynw75mtvoN8mx3Vu3T%2BVHXDi1EMIXfHAMCJ2ngTYqe32Btp06Omm1Rjzo6%2FOdqsxAHpozRrRNcghMrtiSX1s9xOtY%2Fs3ao%2B%2BCfz4YVGOVhL7vxtlDGzAzWAuCcLd6v7CZlB9g5FaW&X-Amz-Signature=25d6e00f9307de16e500f0f1b97b6be7ef06ac9c63dea53fbc3436860cc76cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

