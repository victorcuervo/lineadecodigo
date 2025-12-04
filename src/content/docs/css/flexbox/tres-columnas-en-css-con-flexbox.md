---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JSKMHL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3nei%2B6kU15jBd%2BrC2BFPxDZU4WG%2FeuMgLEQSBHaG0GwIgEf493bys0huuZw0hqoGzJjNUxMhr5ob881PvtF%2FjNooq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCS%2BoWvgEVkG8rlilircA3yh0%2B6emsYi8TBnFqZQEg1LhxrYPk03r810EaoYHcRQus3ls36B0eLB4XgKDdSVeXuKdA9R4XJCUJquQnVEF7b5UaFvPb%2BRtW%2FzX8%2BktUDW9MF4C2Ns72OE04WnnD0mwkgp%2Btzy4XDZ5W8%2BLguE3QVcdzt6%2B%2BgEado7p8p%2BhvI07PJ4e2nATjQurB4yNr6Iq3WMDS0Ceh87xhj%2FxHz0dwEo1Pax1FAWVFIz7EGsPUJW1m58KPFBeGz8z8gxGq6MEyvum7XlhJNrTwS3UY7nHvN6VxO2MghfnryiWB6Q4g5yTr448fjeWdsOqSLkwIIzP6rVK5JZSxA%2B9ztsZ6ZrHKScaDLZsFztH5CRXEQfnV7ptnwAl4WPl5Mwa4YKQc92sC%2FjN1IYYSEOeDiXp5%2BKe%2FQ%2Fd94vqGXO9%2Fp7cNlkWade4fHpN6q9u3wkz7EyMHdIMAHS9DOZP50BNkDpbHfgPyKaBBkOGj33aDt8qTlRo7nex4WWD2BNH%2F0B6NCT2Z8Qnv3jiymBVjf9eJVuCBNB9VTJAbcHka5lRQhgXrXg7WpV7j4wrskzhQ9W%2BEsKGz%2FXg2Dpitg1ZGn3BpF3o9xR%2Faa34GTD5kRxMMuSXEGJUQD0Ivi7EVtpuiqudK5SMPKMyMkGOqUBx%2FfMvkixqurLSUN%2FTU1NoIUowK7%2F1cGl447ZeN5WW3WUlXHIPV%2F20LumAdRCBVE6fLbDMhQDeb6KzcmFEWc8P48lk0a37CcWST9jVngd8jTWsIXyCBx3Ax6xis2KVG0wQ3e%2Fa5sCJmfUFUY292dscHpqP8RP3EFkbgVKETbg9OAJZeByUMC1PUQZxV5oIdWSlL9ZW%2B3%2BZkAm%2FmrjYoC5pSSRo5%2F9&X-Amz-Signature=b61b3b4bfd41adc4bb7a279d4863e1f2d63c910bed564f70d49768c488ec98bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JSKMHL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3nei%2B6kU15jBd%2BrC2BFPxDZU4WG%2FeuMgLEQSBHaG0GwIgEf493bys0huuZw0hqoGzJjNUxMhr5ob881PvtF%2FjNooq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCS%2BoWvgEVkG8rlilircA3yh0%2B6emsYi8TBnFqZQEg1LhxrYPk03r810EaoYHcRQus3ls36B0eLB4XgKDdSVeXuKdA9R4XJCUJquQnVEF7b5UaFvPb%2BRtW%2FzX8%2BktUDW9MF4C2Ns72OE04WnnD0mwkgp%2Btzy4XDZ5W8%2BLguE3QVcdzt6%2B%2BgEado7p8p%2BhvI07PJ4e2nATjQurB4yNr6Iq3WMDS0Ceh87xhj%2FxHz0dwEo1Pax1FAWVFIz7EGsPUJW1m58KPFBeGz8z8gxGq6MEyvum7XlhJNrTwS3UY7nHvN6VxO2MghfnryiWB6Q4g5yTr448fjeWdsOqSLkwIIzP6rVK5JZSxA%2B9ztsZ6ZrHKScaDLZsFztH5CRXEQfnV7ptnwAl4WPl5Mwa4YKQc92sC%2FjN1IYYSEOeDiXp5%2BKe%2FQ%2Fd94vqGXO9%2Fp7cNlkWade4fHpN6q9u3wkz7EyMHdIMAHS9DOZP50BNkDpbHfgPyKaBBkOGj33aDt8qTlRo7nex4WWD2BNH%2F0B6NCT2Z8Qnv3jiymBVjf9eJVuCBNB9VTJAbcHka5lRQhgXrXg7WpV7j4wrskzhQ9W%2BEsKGz%2FXg2Dpitg1ZGn3BpF3o9xR%2Faa34GTD5kRxMMuSXEGJUQD0Ivi7EVtpuiqudK5SMPKMyMkGOqUBx%2FfMvkixqurLSUN%2FTU1NoIUowK7%2F1cGl447ZeN5WW3WUlXHIPV%2F20LumAdRCBVE6fLbDMhQDeb6KzcmFEWc8P48lk0a37CcWST9jVngd8jTWsIXyCBx3Ax6xis2KVG0wQ3e%2Fa5sCJmfUFUY292dscHpqP8RP3EFkbgVKETbg9OAJZeByUMC1PUQZxV5oIdWSlL9ZW%2B3%2BZkAm%2FmrjYoC5pSSRo5%2F9&X-Amz-Signature=ed204b9877dc2f6068b1c1eedcefa22ec7e7c2eca7966d112f339c501d762e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

