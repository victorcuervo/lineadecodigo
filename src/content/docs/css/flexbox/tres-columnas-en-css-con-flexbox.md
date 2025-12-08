---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PW7D2YP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVMigLlhxGe2kTpy0ODveABa7e4e%2FAgcputlHYv5uRuQIgO46h015Ke%2B%2BeOcqBJcUvZ1bCTS9dk8BSie2FVNbpUqUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmQ%2BmXUd6cS6QRWYircA8nRnHggvkuna2P%2Fz93H25VgS02i8ZzsjvKb3oL8pQ8LldCuLMMyq09mKNTC10eGvEUEkOQg3cuaoE1dmVJ7cz9VoZ6gYb758Q%2Fgqkd%2FzVzbCvbSwoViNkh%2BP6m%2FxE%2FwtiGZWwoEv1PUVQ7DYJ6p8MC72HamSkazmoGKVI5%2FA1YjyuOMEhf3yrX9ToTOUyxyitoRLpbxJXS2ZlVEINl0XT2D8i5qwa%2B6%2BY7eYqycAjktq2yp7IxQ45thIMpsCm%2Bnja3DcDAEFbqdyfEqQ1KC55SXG9UlcbFuLM33obrr7rOfgW%2Bb5SpOc4jhtmjmAQfamYNM9kfHQKBtpp4ZunhkT7a6IzodH%2Bes3BH6h%2F03i5rxub1mOa2b3X56eE%2B1UHyPzzPKl1atJFOZR1hNfnBTYzDjzO%2BGwYDTajxIHRxJcI%2BkAeL0V0JfLNfKREnoEOfN9Ocud5Bx%2FZLcNKe%2FbC5HB6J9CezK0xSZYBu9SJ46VXs4CBf5m34OltBjyrbWVFupEfYw2nFi2y9TOGjWgNTkcZ%2B2DBVrysWSHt0ZyfrsHJpioue%2FY67yfTHKXV6W2yqsuyxWSFGTAZz8GtQaOOhWtdvEjEGcw06Ym8QTaUe0F25fv85iVs2OzeHyjf7TMODD28kGOqUBYaM16rL72720oUyc0lIGBdn4dd9bjWCfJMthrWCusUBqcC3vRedYY%2FH66TAPIrBBszXhZp8hLTLmOsip3Q%2B2MwVOqNjq0T6GyquoHxH2WluPIylb5xmfoPZhVPsF88xqx3dzW90vQclKBDH%2BuWne7gcFqK4%2FDkY8IcfVSsfPE9DxqwhYBEIMfYMsDjWbjMyfOBTia7Rvc0260JzJvBVxk18gWNJq&X-Amz-Signature=3aba628b03fe5876f78e94cfa952e554c6e20e92df615f3e4efdcf5f7aae4de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PW7D2YP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVMigLlhxGe2kTpy0ODveABa7e4e%2FAgcputlHYv5uRuQIgO46h015Ke%2B%2BeOcqBJcUvZ1bCTS9dk8BSie2FVNbpUqUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmQ%2BmXUd6cS6QRWYircA8nRnHggvkuna2P%2Fz93H25VgS02i8ZzsjvKb3oL8pQ8LldCuLMMyq09mKNTC10eGvEUEkOQg3cuaoE1dmVJ7cz9VoZ6gYb758Q%2Fgqkd%2FzVzbCvbSwoViNkh%2BP6m%2FxE%2FwtiGZWwoEv1PUVQ7DYJ6p8MC72HamSkazmoGKVI5%2FA1YjyuOMEhf3yrX9ToTOUyxyitoRLpbxJXS2ZlVEINl0XT2D8i5qwa%2B6%2BY7eYqycAjktq2yp7IxQ45thIMpsCm%2Bnja3DcDAEFbqdyfEqQ1KC55SXG9UlcbFuLM33obrr7rOfgW%2Bb5SpOc4jhtmjmAQfamYNM9kfHQKBtpp4ZunhkT7a6IzodH%2Bes3BH6h%2F03i5rxub1mOa2b3X56eE%2B1UHyPzzPKl1atJFOZR1hNfnBTYzDjzO%2BGwYDTajxIHRxJcI%2BkAeL0V0JfLNfKREnoEOfN9Ocud5Bx%2FZLcNKe%2FbC5HB6J9CezK0xSZYBu9SJ46VXs4CBf5m34OltBjyrbWVFupEfYw2nFi2y9TOGjWgNTkcZ%2B2DBVrysWSHt0ZyfrsHJpioue%2FY67yfTHKXV6W2yqsuyxWSFGTAZz8GtQaOOhWtdvEjEGcw06Ym8QTaUe0F25fv85iVs2OzeHyjf7TMODD28kGOqUBYaM16rL72720oUyc0lIGBdn4dd9bjWCfJMthrWCusUBqcC3vRedYY%2FH66TAPIrBBszXhZp8hLTLmOsip3Q%2B2MwVOqNjq0T6GyquoHxH2WluPIylb5xmfoPZhVPsF88xqx3dzW90vQclKBDH%2BuWne7gcFqK4%2FDkY8IcfVSsfPE9DxqwhYBEIMfYMsDjWbjMyfOBTia7Rvc0260JzJvBVxk18gWNJq&X-Amz-Signature=8109acad6d39e9ef84eed8fd2243fd9084643ce1f2376a9abc2b811b40dacf49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

