---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQERWWEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFCQsR1sXyYso1eks8vrzOFed1GV8pddY22Jhy09VrMgIhAPF%2B1RHSUoxe1vPog8qvVaeqYiR3YxCfWBwRrxf7OnBYKv8DCHUQABoMNjM3NDIzMTgzODA1IgzytwBD6MIa9moCGiEq3AOA2fMCMoGZDN%2FQx4tBGKHmoZXikfV6egax%2Fg9b5NELKyFWBVtbdjG5%2BY%2FlfvNe7ulGgMOHPMffQBK4h%2BWu9VbnGgYXF3Zmobmgy7BLylF6W2x893ba72FS4ffcEG52Oc1oVpKqnvGOHR6XGLnuMhQcwvlTgClvHVemetKNaL74hrbrhbhkyfg0M11CGgHxYTNPEKtZPgZOEzvNGKV4V826jeF7nOegpYmtLEpDIRpJtARjaPLzGFXWIDES8spzLRXDvmm3ZvDWlEBOYERb7SdaHt63rf7ZO24DMypQHpaHBTSWHjUVo8UmEGp92KLqWIub03psxaWjOuE2CKADTVtUA59ubWxLoiHfocGrrv%2Bs2kSrxQ4hM2YS07AbbtfpDe8VQOARP%2BK4G7BECBBfFms7N6Ki8MnXt7YeZ4GZtLsQ2G3V1o3b7O0o01UMwfLyANlXtbv0knek3%2F%2BlkWMSUa3E8Ms3DFsvXcPIfuqAF9eUX%2B835FP9nKfELnv3es9sqXcf6Us6gsFqJQmVnDyTdB1tI860K%2BLMfIykdcw4U3N1me0w5PQiKpV%2Bok1Ea3tZB2MTWVtV03seaGd0zUOddlV%2FVXrxlSjJ%2BSI%2FNPyjP%2FCeqhbKFxPEhFL1JofISzCcptDJBjqkAV6Cd7cYYOeNEaWY9RzyKpIu5ugwzt1yBr4jqpPdQrQyuHjegwcRYAzh8ZzEkIVDyASlNR9ewhCio4mCgDC8MMfAE4Y4kBkneatqfXA2o%2FrkMfKl%2FQX84pe3BElffduhssGvI1S1C7A8KjkiM2K0vVmYldhIosTZIxC8iqH4J0UXAPJ9gOJGGf2mhwseHdpF%2BghuFkj1doxG5hqsweLLVuQE4ufM&X-Amz-Signature=f924c7e1c82e7e782757b79d767f056d72b60ca140b5bd4d6c5a7d75ad9aff58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQERWWEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFCQsR1sXyYso1eks8vrzOFed1GV8pddY22Jhy09VrMgIhAPF%2B1RHSUoxe1vPog8qvVaeqYiR3YxCfWBwRrxf7OnBYKv8DCHUQABoMNjM3NDIzMTgzODA1IgzytwBD6MIa9moCGiEq3AOA2fMCMoGZDN%2FQx4tBGKHmoZXikfV6egax%2Fg9b5NELKyFWBVtbdjG5%2BY%2FlfvNe7ulGgMOHPMffQBK4h%2BWu9VbnGgYXF3Zmobmgy7BLylF6W2x893ba72FS4ffcEG52Oc1oVpKqnvGOHR6XGLnuMhQcwvlTgClvHVemetKNaL74hrbrhbhkyfg0M11CGgHxYTNPEKtZPgZOEzvNGKV4V826jeF7nOegpYmtLEpDIRpJtARjaPLzGFXWIDES8spzLRXDvmm3ZvDWlEBOYERb7SdaHt63rf7ZO24DMypQHpaHBTSWHjUVo8UmEGp92KLqWIub03psxaWjOuE2CKADTVtUA59ubWxLoiHfocGrrv%2Bs2kSrxQ4hM2YS07AbbtfpDe8VQOARP%2BK4G7BECBBfFms7N6Ki8MnXt7YeZ4GZtLsQ2G3V1o3b7O0o01UMwfLyANlXtbv0knek3%2F%2BlkWMSUa3E8Ms3DFsvXcPIfuqAF9eUX%2B835FP9nKfELnv3es9sqXcf6Us6gsFqJQmVnDyTdB1tI860K%2BLMfIykdcw4U3N1me0w5PQiKpV%2Bok1Ea3tZB2MTWVtV03seaGd0zUOddlV%2FVXrxlSjJ%2BSI%2FNPyjP%2FCeqhbKFxPEhFL1JofISzCcptDJBjqkAV6Cd7cYYOeNEaWY9RzyKpIu5ugwzt1yBr4jqpPdQrQyuHjegwcRYAzh8ZzEkIVDyASlNR9ewhCio4mCgDC8MMfAE4Y4kBkneatqfXA2o%2FrkMfKl%2FQX84pe3BElffduhssGvI1S1C7A8KjkiM2K0vVmYldhIosTZIxC8iqH4J0UXAPJ9gOJGGf2mhwseHdpF%2BghuFkj1doxG5hqsweLLVuQE4ufM&X-Amz-Signature=83ae156adfcdb7334a4e8a2c9ca3a236eb961e6c080e92139ceadd7a723bb25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

