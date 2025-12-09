---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QXBJEM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh6xKGM6S9LFTnzFHbygC7aLIFSBCA9iB7v2o1DVFvgAiEAslPgemKxOEG7u7Fqkjq%2Fo9JaSD2BpO%2FOK4WMKvyDab0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGimYdMk%2BNQsPT0UVCrcA5Bk39wxfivNtLneBJN2knIX1LEKQ%2FWd8etWEQODpyrO59NKU6SML3kkTbZLBJVymejMPTS1PT4oiVMVyzW%2BY2H06vm7Gh3euuxYZQI%2BL%2FjMh2HbTBBco%2FJLSssuNvUdlKNWBG%2FQ6fWxfCm4GCwgN5hrqOqc5H5UryTFLexCbpflR6cKkE%2BOhZuQMI2Q2JkjR6LZ3%2BlrRMjPWuiCEpwrX0P97cwjCNhjvKU%2BiVTAI8RQu%2BjyX3xum17RpakBH4RskBPJQkn8Cmn30bHY%2BN68xhDfql2fMse%2BKkl1SDRSOztuQMAAIvret5sENNMnjxrOb%2FCYcUQhzzJQlTz5fNdLjiJy8%2Bm6A%2Fh7nhn5HPxMSySMW1VDx%2F5aHk66BkwVk0rXR98D8o02qAt%2FouGRHFtr%2FI09zTOkkBICAghS6IUbUc84jliR%2FIR4tbiYrqgmKvYFBqSeQPF%2FXul9KvVBv1smu6iYnKISohiw7zgr0X8yZE1UwcUs3VR076R8RkMzKr%2F7ghYi4F5g%2B1gkd8BCSikzdi9zZOT20ar9FpqXmSFN7oxVcdQtL1Pw44dT0wc6u9aobCslun%2Byx9YjyHAru3cpPDGbwN%2B04c4SPk7eDzjiuwc1Zdg7kJIuG3tnrqWDMK%2FG38kGOqUBOJF39MaD1f2aCvYUFiujcXbOoLfKtDSGszurAy8bX72gfIHYJSK8cJA9tIeslid47q6zOqFi%2BKuUU0kSd3lbD3Dodchchr%2BuZuXYabJnGD2lv1tiPuKUtzBO5N5hClTMZaitrrQXzx7Jwgi%2FMfud%2FHp4C4bIo%2BzmNkdIIZS6kUrX4bG3c0ww%2BHGD99lVTnbaCDK68vNDepGpofV3D%2FkgEhjJY%2Bz7&X-Amz-Signature=42c04b6b8ca58b7fff77323a413bca47aa8ffa7a7c7f5d765ed77a45aa039524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QXBJEM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh6xKGM6S9LFTnzFHbygC7aLIFSBCA9iB7v2o1DVFvgAiEAslPgemKxOEG7u7Fqkjq%2Fo9JaSD2BpO%2FOK4WMKvyDab0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGimYdMk%2BNQsPT0UVCrcA5Bk39wxfivNtLneBJN2knIX1LEKQ%2FWd8etWEQODpyrO59NKU6SML3kkTbZLBJVymejMPTS1PT4oiVMVyzW%2BY2H06vm7Gh3euuxYZQI%2BL%2FjMh2HbTBBco%2FJLSssuNvUdlKNWBG%2FQ6fWxfCm4GCwgN5hrqOqc5H5UryTFLexCbpflR6cKkE%2BOhZuQMI2Q2JkjR6LZ3%2BlrRMjPWuiCEpwrX0P97cwjCNhjvKU%2BiVTAI8RQu%2BjyX3xum17RpakBH4RskBPJQkn8Cmn30bHY%2BN68xhDfql2fMse%2BKkl1SDRSOztuQMAAIvret5sENNMnjxrOb%2FCYcUQhzzJQlTz5fNdLjiJy8%2Bm6A%2Fh7nhn5HPxMSySMW1VDx%2F5aHk66BkwVk0rXR98D8o02qAt%2FouGRHFtr%2FI09zTOkkBICAghS6IUbUc84jliR%2FIR4tbiYrqgmKvYFBqSeQPF%2FXul9KvVBv1smu6iYnKISohiw7zgr0X8yZE1UwcUs3VR076R8RkMzKr%2F7ghYi4F5g%2B1gkd8BCSikzdi9zZOT20ar9FpqXmSFN7oxVcdQtL1Pw44dT0wc6u9aobCslun%2Byx9YjyHAru3cpPDGbwN%2B04c4SPk7eDzjiuwc1Zdg7kJIuG3tnrqWDMK%2FG38kGOqUBOJF39MaD1f2aCvYUFiujcXbOoLfKtDSGszurAy8bX72gfIHYJSK8cJA9tIeslid47q6zOqFi%2BKuUU0kSd3lbD3Dodchchr%2BuZuXYabJnGD2lv1tiPuKUtzBO5N5hClTMZaitrrQXzx7Jwgi%2FMfud%2FHp4C4bIo%2BzmNkdIIZS6kUrX4bG3c0ww%2BHGD99lVTnbaCDK68vNDepGpofV3D%2FkgEhjJY%2Bz7&X-Amz-Signature=c2dc23c3501edb574caa8a3ebcb09eea704a8947e7afa8c8c7fe2a4b67781a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

