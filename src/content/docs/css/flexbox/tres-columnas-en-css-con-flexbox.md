---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J3FGAJD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAVsxAQ%2FO68XhTM5ExCcdqKVcZymgJkun2gCdbPk0NhgAiEA6xWdbBTInuCzNm1s5H8rQw8OSkTjdmyU9lvFJ%2FLiyUsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFhO7gSbrlcxvNw%2FEircA0S2GA9M6dptN%2FpZq4%2FS0BTGccXNaSsmHDh8vyH9Zl4eCzs6FJUOXtS0eEgML6fjzYzPQiOLkAlz4DvjyDUDVVLffvQ3R2%2FObjogtx%2FRi6MqNRmUWAev3SOif9cMd2nKKyEzUiEmschll0G%2B3sKDrMziHNZwAdKvC%2FUSnwH%2BAeLib%2FAFVfyULvk%2BTaVwYcnI1gmtpyyq7gcw3nrzuog2AkvpUQSqov%2B3vttyybJ8d6GOGi3u46xjeEIdOWP7eDH5u0U9IbdraDWPbBi3J1KpijarXteaxXBdkCjdN1NIcTjIl76ftpduprJuZKGixxmcMLcJCokGQBwwt%2FTUde0NO%2FIoFwPKpmlaXOCk8CuniBItnMZCmOdC7GfcBet3Y5FDSd4OrW3t0hjzWVMS63HgWSASY5n9he4O6i9qVTdR%2FvpCFD%2FsmPwfl5gE%2FDSPMXsT9iGp0Agx46VhtICX0MGWtOm0scUiGZP8HjGjkSnbdaLVs%2BJjVSC84ATJklwX2OXc%2BZbnQYpwkn4ijdld6VUYf4u9F1NUXwJYXLo%2FhUqc0voNR%2FiV4AHMS8WLxIEEA3zhig5YHAihlft8wSXlzN5gsn8RYTjLJxrC8GkbEUp73%2B6%2FzL76c2XpPdkfsC%2FiMN%2BExckGOqUBuW%2FwUTGg7pTtnb15HbEGPAOPL%2FXmV9fPgP7oFApKvrROPY8YcpfEbOGYf1zD0KBYsfInD31%2Bbwb9KKsP%2BHcxqiRIhcbPrPgJGP74b1N9qHcjLFPv0hVUq74lIwZL9PyJ9QLPiCm%2FGD42xHJ8P9pComIPzt3W5r2tWcM7IAkdhh5f8gXnLwS93X7joepQFpvojG8wOIUYNp7h9uTWUVDBoqgSdaW9&X-Amz-Signature=0425ebf93b28964ebc4aae6db7c17084c3c7d93ca0b27e07a781e5d3b38de898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J3FGAJD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAVsxAQ%2FO68XhTM5ExCcdqKVcZymgJkun2gCdbPk0NhgAiEA6xWdbBTInuCzNm1s5H8rQw8OSkTjdmyU9lvFJ%2FLiyUsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFhO7gSbrlcxvNw%2FEircA0S2GA9M6dptN%2FpZq4%2FS0BTGccXNaSsmHDh8vyH9Zl4eCzs6FJUOXtS0eEgML6fjzYzPQiOLkAlz4DvjyDUDVVLffvQ3R2%2FObjogtx%2FRi6MqNRmUWAev3SOif9cMd2nKKyEzUiEmschll0G%2B3sKDrMziHNZwAdKvC%2FUSnwH%2BAeLib%2FAFVfyULvk%2BTaVwYcnI1gmtpyyq7gcw3nrzuog2AkvpUQSqov%2B3vttyybJ8d6GOGi3u46xjeEIdOWP7eDH5u0U9IbdraDWPbBi3J1KpijarXteaxXBdkCjdN1NIcTjIl76ftpduprJuZKGixxmcMLcJCokGQBwwt%2FTUde0NO%2FIoFwPKpmlaXOCk8CuniBItnMZCmOdC7GfcBet3Y5FDSd4OrW3t0hjzWVMS63HgWSASY5n9he4O6i9qVTdR%2FvpCFD%2FsmPwfl5gE%2FDSPMXsT9iGp0Agx46VhtICX0MGWtOm0scUiGZP8HjGjkSnbdaLVs%2BJjVSC84ATJklwX2OXc%2BZbnQYpwkn4ijdld6VUYf4u9F1NUXwJYXLo%2FhUqc0voNR%2FiV4AHMS8WLxIEEA3zhig5YHAihlft8wSXlzN5gsn8RYTjLJxrC8GkbEUp73%2B6%2FzL76c2XpPdkfsC%2FiMN%2BExckGOqUBuW%2FwUTGg7pTtnb15HbEGPAOPL%2FXmV9fPgP7oFApKvrROPY8YcpfEbOGYf1zD0KBYsfInD31%2Bbwb9KKsP%2BHcxqiRIhcbPrPgJGP74b1N9qHcjLFPv0hVUq74lIwZL9PyJ9QLPiCm%2FGD42xHJ8P9pComIPzt3W5r2tWcM7IAkdhh5f8gXnLwS93X7joepQFpvojG8wOIUYNp7h9uTWUVDBoqgSdaW9&X-Amz-Signature=eb3f81790d2630821cccfdbcda45c4460cfc9d9aeca613335251ee2d50cd4b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

