---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNELXZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7fc6yHDCHIhIXSS8Fimc5nJQ2BsH1EL0wXzlXLM6ShwIhAJzKfoMo6tvU6Fmk2kqXiS8%2B5rHYACAmsA9u%2FfIi746YKv8DCHoQABoMNjM3NDIzMTgzODA1IgzBaXdAK0JkVwOrx2Aq3AOF%2BF8Vw9ZlsbhDmIuHCpEXhAFxaBn2EQm9wW9BCxP0uI%2FwrttTN2EmAQMLT1jNvguvHXHmzFcnYJB%2FTwjhDhtTCSXenOfTyNbSy1OUgNhugXCA5gDu5UZDnd894STNgeMAoZLPKatqkG5h6DxGGguI%2Fjqdkb71m5JtpAgbXVLpHpEsyRADbQnqsZKfYg%2FL2a7xJ9hxeHosfeC0Q0%2Bb3KDwbg5t8G%2Fd%2FbfjsnTTl1HffMuH8RQKq5wfL17soeFNEJ8JCtKuspgSWmptsf97ZLyDmGfds4TvQfGedK9GXiOqHpJjIrGO2c%2FhebzF3JibiSQCJ8byDVuMtTbjhkhjvEiLUrbYe%2BG12wefbEPS3Y8KB1tEKqollO2DiAdNX3cILImpO3f0TlH1gH4ZWiPCYlms%2BmlUDHk1jQ3WTC%2BI5Y%2FXJTGCke0BiEIh%2BjfNHxzlYYwXcSSdC28%2BktScQhcnNPsH2uhJhAPPSyXeHpUQlp57fyMSBmEDNe43VYoNcqqjjHNWcWZAMMew5X4%2B6P770p51cParNI%2BANM%2FK8MhoA6FE5dTVovDsDaYyP0MbbHHSvNSOBNrPi2vl8G3uF2JT0FkKeQJnbV2V05dBOBP%2FeOnQnLJPoAwpQXoFG5zCYTDkx9HJBjqkAXI63Bnwwsbment5pd%2B5tZDeU2ms27WEOxTCr5sk2llCvodhn%2FChbCvtI5tFlFf3LDSiI6oukLA8aemUVqotM77KlsbpFOzIfBDBrowtWHbeSpoSYKZfIa7zcdbWG5mPpY5eah6Sg90djorAJQiBYIEL6uw1rAU8o2TLypGG7jqe%2BI9LQmYIjERdKgrzEW%2F0A%2FAngYgx3QP4HbUD9u1dd%2FkPmxhc&X-Amz-Signature=a94ff019afd88682ba484210f912d02154d2384f4fb7dda8f683116cf1df4c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNELXZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7fc6yHDCHIhIXSS8Fimc5nJQ2BsH1EL0wXzlXLM6ShwIhAJzKfoMo6tvU6Fmk2kqXiS8%2B5rHYACAmsA9u%2FfIi746YKv8DCHoQABoMNjM3NDIzMTgzODA1IgzBaXdAK0JkVwOrx2Aq3AOF%2BF8Vw9ZlsbhDmIuHCpEXhAFxaBn2EQm9wW9BCxP0uI%2FwrttTN2EmAQMLT1jNvguvHXHmzFcnYJB%2FTwjhDhtTCSXenOfTyNbSy1OUgNhugXCA5gDu5UZDnd894STNgeMAoZLPKatqkG5h6DxGGguI%2Fjqdkb71m5JtpAgbXVLpHpEsyRADbQnqsZKfYg%2FL2a7xJ9hxeHosfeC0Q0%2Bb3KDwbg5t8G%2Fd%2FbfjsnTTl1HffMuH8RQKq5wfL17soeFNEJ8JCtKuspgSWmptsf97ZLyDmGfds4TvQfGedK9GXiOqHpJjIrGO2c%2FhebzF3JibiSQCJ8byDVuMtTbjhkhjvEiLUrbYe%2BG12wefbEPS3Y8KB1tEKqollO2DiAdNX3cILImpO3f0TlH1gH4ZWiPCYlms%2BmlUDHk1jQ3WTC%2BI5Y%2FXJTGCke0BiEIh%2BjfNHxzlYYwXcSSdC28%2BktScQhcnNPsH2uhJhAPPSyXeHpUQlp57fyMSBmEDNe43VYoNcqqjjHNWcWZAMMew5X4%2B6P770p51cParNI%2BANM%2FK8MhoA6FE5dTVovDsDaYyP0MbbHHSvNSOBNrPi2vl8G3uF2JT0FkKeQJnbV2V05dBOBP%2FeOnQnLJPoAwpQXoFG5zCYTDkx9HJBjqkAXI63Bnwwsbment5pd%2B5tZDeU2ms27WEOxTCr5sk2llCvodhn%2FChbCvtI5tFlFf3LDSiI6oukLA8aemUVqotM77KlsbpFOzIfBDBrowtWHbeSpoSYKZfIa7zcdbWG5mPpY5eah6Sg90djorAJQiBYIEL6uw1rAU8o2TLypGG7jqe%2BI9LQmYIjERdKgrzEW%2F0A%2FAngYgx3QP4HbUD9u1dd%2FkPmxhc&X-Amz-Signature=c81f6e9f89891dac540bbc63e74a6d7327a239c736ef5c7bb04499cbfd5a1d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

