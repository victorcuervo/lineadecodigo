---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG6T7XN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIC2C%2Bpyys8XYI7fMDMbDbAtHK8F2gePpR6IrovnlmlyvAiEArzfBtY5JSDZBMqD%2BIvmFMV5fOKO1NVSO1WVdYA70MjMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKBSRyEsnHyzTNmTUircAx%2BuIiiP0w8X37snMSM7TCpW6EpKkn80UD1oGaup9eAsDjdBOlEvApRWJLUdHtAT4PWe5nmJAnhawpDwey2ZBKIs6Yqf%2FDJdPSHTmXtBqEteFyGRE9IKhJ%2FIFExqy%2BS0OwVn14FCCtixRB0XiWlDIC4OJAJA37HEIcd%2BbSg3oTCMERjohjMCpY5DmL5xb1nOJOmL5h1KmoEmcF%2FnLzm8ebMqRYe2ZdpRgmt0hn971lCPtQsyKAnIsUk%2FPbgNHbSFnyg7MKPLqy6jsVfmQ7dgtDiPeHSEcJ7K9IOtt%2Bjenh9GAuUFBE1oM4RbQ5QYNvkcaz0UJWU6LfsHDe9YG%2F%2Bk21KUU8JH%2Bnit05yFfuhntTKCqVsHdeWzefp8jIN%2FIsyHxHnX00kzvh84w34qvMjWs1%2FQG61fb3x%2BeEM5qQcmo3xJ6UKYsw7xzZF5x2rg15fb%2BlConCs35%2FglYYiciCVmD0R%2F1Twl77TfqeIMltR20z9Ljs7lQ5b9oHU8IWbd%2B7ChqACGLKMOjq7TcwIRwwh9khhA9AUAl073vQSQ51TBSqoYBnHnVv5HFlBr4nzD0p66IUhsb62GK6tIvlz50pzENlus9N7ZNW9m5VicnaWmhwDhjRDtVv5xxRQOjiTaMLGVw8kGOqUBAll5CAhSmqWU08iToXMoxT%2Fr1jRWg%2BfZ8AgVaV9HEIiUjqXBRU27rMs0yzF6C1Ex2%2BeSjJF5w%2F9gljz77T4ZyzK%2Bsoy98FcqF%2Fd67Ol5RTUBO6rdtbt7Obv3sUiwvgpfSARpsbP0pDN1dU3MsWQ3W5XRfNYer3joZVFuT2FoVIgE1hqES2JsCMA2%2Bmv6vqeqQd%2BBIsv3IVC2%2BiIEgOGLcGYT53F1&X-Amz-Signature=dc44826c51c30c92ec53a40f6dbf1cccfca416497ef32a77201fb5b9a120d97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MG6T7XN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIC2C%2Bpyys8XYI7fMDMbDbAtHK8F2gePpR6IrovnlmlyvAiEArzfBtY5JSDZBMqD%2BIvmFMV5fOKO1NVSO1WVdYA70MjMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKBSRyEsnHyzTNmTUircAx%2BuIiiP0w8X37snMSM7TCpW6EpKkn80UD1oGaup9eAsDjdBOlEvApRWJLUdHtAT4PWe5nmJAnhawpDwey2ZBKIs6Yqf%2FDJdPSHTmXtBqEteFyGRE9IKhJ%2FIFExqy%2BS0OwVn14FCCtixRB0XiWlDIC4OJAJA37HEIcd%2BbSg3oTCMERjohjMCpY5DmL5xb1nOJOmL5h1KmoEmcF%2FnLzm8ebMqRYe2ZdpRgmt0hn971lCPtQsyKAnIsUk%2FPbgNHbSFnyg7MKPLqy6jsVfmQ7dgtDiPeHSEcJ7K9IOtt%2Bjenh9GAuUFBE1oM4RbQ5QYNvkcaz0UJWU6LfsHDe9YG%2F%2Bk21KUU8JH%2Bnit05yFfuhntTKCqVsHdeWzefp8jIN%2FIsyHxHnX00kzvh84w34qvMjWs1%2FQG61fb3x%2BeEM5qQcmo3xJ6UKYsw7xzZF5x2rg15fb%2BlConCs35%2FglYYiciCVmD0R%2F1Twl77TfqeIMltR20z9Ljs7lQ5b9oHU8IWbd%2B7ChqACGLKMOjq7TcwIRwwh9khhA9AUAl073vQSQ51TBSqoYBnHnVv5HFlBr4nzD0p66IUhsb62GK6tIvlz50pzENlus9N7ZNW9m5VicnaWmhwDhjRDtVv5xxRQOjiTaMLGVw8kGOqUBAll5CAhSmqWU08iToXMoxT%2Fr1jRWg%2BfZ8AgVaV9HEIiUjqXBRU27rMs0yzF6C1Ex2%2BeSjJF5w%2F9gljz77T4ZyzK%2Bsoy98FcqF%2Fd67Ol5RTUBO6rdtbt7Obv3sUiwvgpfSARpsbP0pDN1dU3MsWQ3W5XRfNYer3joZVFuT2FoVIgE1hqES2JsCMA2%2Bmv6vqeqQd%2BBIsv3IVC2%2BiIEgOGLcGYT53F1&X-Amz-Signature=fc25d1e8e714ff7f75fa8caaf9f3be21b5a5cf70cf6010d9db57661dca0e4bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

