---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFFN3WD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCynrA3B%2FJFL5fib5m7Oee7Oxzfo%2BkvNfo1ldhcy44XvwIgFrudPOs8cXc2yiNGfxT0qK6V%2BHKEHVzgtdrAhK7cCMcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO5ZovOjsliupZXbeSrcA62q3GcAaKmb1xl8afZOEjYjO%2FYj86Zlyg55KIsuG6F287Y9fVku8Oj61jMUb2o2Eu3oh7%2FV%2Bjdo%2FmEVQwn5NTQ0k2%2FDMB7dZ0oNjpWWvMwddSPhfsW7SvTeD9Jm0DTHFxgyZX9mK52KIN7o8g5rmKbChYzaUJF%2F5bkX3X%2FAcYSmdq2%2Bn87aYmcTYI0FBkC%2FKdC1JPs%2BWiOx1tHjoY0hFWkjstV5bmpTu7XVNVRRMRiD4Mgf8poolod4Pn4Tai7xsTZFuDCKJF%2B5xLJZr9GFLMsIXDwmusnhdvgpGyNe1EkkeScYk3cs06BytnUwcf73iPvlmsJ2RzluDhkFAZqCmAtkdupvWoyhEvvhryCxBnvIDVjFt1VY206z0Iqy8LyrJFX4C%2BkFFaAVnh1JbZLW7wlMHiQaqMUPjfcryS7MDpCW5iZzXznnscfkWvv%2BNm3T%2FdDRv7Jt8%2Ffas2i6T46JtxpdHMhWZjgW4NiPwbcOS0eTRzX5IbC%2FQmkv0QRNAnGYvwYihgxQINjFlVUeTP3J%2B7gSH63a2Xz%2BLxdPLsI4v5sNuu9VN5QL4r1eEfWwMSBAAPmn1fOZ5NLCpszMCAv8xBJtW3sstBbnyfoHuiZtbaVIQILRZdqZ0GIZuIP6MM74wskGOqUBzfgV0IyNUvU8ShknabG6k9%2BU%2BNH2R%2BbbXnD2lFFoTFU9AoPZIbw8VxVPO%2Bxk%2Bm8gZPtcxWmo9YNeKuFhMOStH%2FRhEk8sNUDDzcW%2B8jUxzp2p54SeDQL92%2B6a1s%2Bdu8KbO1y6MJ7mMVFCNIr70nCgnvc3yb0lXz1lW%2FfXYh5M2E6xAVHLZNVjfvymUAZuvfUNXaiaA7EB%2B9hTTGATUV%2BhiWMyfwWi&X-Amz-Signature=9699d79cc778fdd2190dbbb9ec5d53b18d6e67b43b0633bc33df2c8d24e0730a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFFN3WD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCynrA3B%2FJFL5fib5m7Oee7Oxzfo%2BkvNfo1ldhcy44XvwIgFrudPOs8cXc2yiNGfxT0qK6V%2BHKEHVzgtdrAhK7cCMcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO5ZovOjsliupZXbeSrcA62q3GcAaKmb1xl8afZOEjYjO%2FYj86Zlyg55KIsuG6F287Y9fVku8Oj61jMUb2o2Eu3oh7%2FV%2Bjdo%2FmEVQwn5NTQ0k2%2FDMB7dZ0oNjpWWvMwddSPhfsW7SvTeD9Jm0DTHFxgyZX9mK52KIN7o8g5rmKbChYzaUJF%2F5bkX3X%2FAcYSmdq2%2Bn87aYmcTYI0FBkC%2FKdC1JPs%2BWiOx1tHjoY0hFWkjstV5bmpTu7XVNVRRMRiD4Mgf8poolod4Pn4Tai7xsTZFuDCKJF%2B5xLJZr9GFLMsIXDwmusnhdvgpGyNe1EkkeScYk3cs06BytnUwcf73iPvlmsJ2RzluDhkFAZqCmAtkdupvWoyhEvvhryCxBnvIDVjFt1VY206z0Iqy8LyrJFX4C%2BkFFaAVnh1JbZLW7wlMHiQaqMUPjfcryS7MDpCW5iZzXznnscfkWvv%2BNm3T%2FdDRv7Jt8%2Ffas2i6T46JtxpdHMhWZjgW4NiPwbcOS0eTRzX5IbC%2FQmkv0QRNAnGYvwYihgxQINjFlVUeTP3J%2B7gSH63a2Xz%2BLxdPLsI4v5sNuu9VN5QL4r1eEfWwMSBAAPmn1fOZ5NLCpszMCAv8xBJtW3sstBbnyfoHuiZtbaVIQILRZdqZ0GIZuIP6MM74wskGOqUBzfgV0IyNUvU8ShknabG6k9%2BU%2BNH2R%2BbbXnD2lFFoTFU9AoPZIbw8VxVPO%2Bxk%2Bm8gZPtcxWmo9YNeKuFhMOStH%2FRhEk8sNUDDzcW%2B8jUxzp2p54SeDQL92%2B6a1s%2Bdu8KbO1y6MJ7mMVFCNIr70nCgnvc3yb0lXz1lW%2FfXYh5M2E6xAVHLZNVjfvymUAZuvfUNXaiaA7EB%2B9hTTGATUV%2BhiWMyfwWi&X-Amz-Signature=3c711186c070c71ab55e71df63f8a62689f7ab2120f6956e34a3ca047d994e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

