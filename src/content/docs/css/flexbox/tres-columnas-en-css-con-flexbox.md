---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ2M6TC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ1j%2FroVNoBEWeJ6oaxFcTKWb3FGpLcWZ2wUEyUNPI0AIgauATwGV4TctwaqvL40UeT%2BEM2lBsujiejXeZcURGtcoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNW%2B4wfmg25HLCmDircA5WW5pN0bmQK8GOW5bwpedFk%2FWGptQss7br5dB5%2BonCO%2Fu%2F2NBpfNuBrkT3JwJbcVVsKQB9lLj7K6wuap%2BXKcHJ5jZ%2BN6YAG9UvX5f6UPXDfBTpyfrozLgh1ctzRTQgQKHOSv9oft%2BADafQjVAnEbzQpmDgu6f%2Bdc16x%2B8HISg%2FFnTuJAA5GEW2ugW1%2F3lWhPdpCcRtlPvFi1FnZXELr2sL6bA9RiJagnfu1Tt8Lx2aRqBNW3vrIh65hrTB3TelF%2BfiqHQBaIMWnoi7AX2Kp2ts%2BJbAo5ySNhxpqsFR5DTSfheypLhkbL%2BYQoJQGCEiO8M4A2RPcQyvdqT3pebIR3dvbrZ2X%2FVpYv8rxG1l%2FzfyHWFO%2FF6BLiEHOIUzGsPI%2FAluNYJn4y2J8KYgPZjXNd7uw6g4dDZuLJ5F5%2BXXHkPHtbXzf9aUicKAUpybi%2BCM%2BGx7o0%2F75chm0u6ZhMLBTvYoPaEw0Uh3nR9Jah%2FKMEbiJnmvgD%2BVXKAq%2BvSZBqcQS1qkwnDoEma0e3B5XG%2BdSMeoD7hyKebNvdsknWHQPOMerfdvnhbubQGtpCaj76HzHVa0Lg%2FKq8V9wEZcsucB%2F6FcVCLHpm7qxnv15ifTauuxeFbWDFRBMyL5MJ0xuMPyj1MkGOqUBFt56nsjk7whVESd1KUp%2Bg7w%2BhpeWyOZvPONOA10Rhw%2B08UBqF2FJc3UGoOIuI8pI7YndPKAHsT1kB4jw1N%2FV70pFUl%2BdtZLlnbUdWosocaaXFNo2RqoLbCO5indGbc45RIrYnIOW9uVzLDlvvCLemxxWDy7amwCApvcM4SOoSDlpXRaH8pCyzJPIFf6fPjU6J%2BjPZwcLxnkuhY7%2F9%2Baz7qyWSCJi&X-Amz-Signature=d83eaacf1ef1de0fcbcf9035a98ee8eafb67c2c01c123731c5a5f85c2c47dae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ2M6TC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ1j%2FroVNoBEWeJ6oaxFcTKWb3FGpLcWZ2wUEyUNPI0AIgauATwGV4TctwaqvL40UeT%2BEM2lBsujiejXeZcURGtcoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNW%2B4wfmg25HLCmDircA5WW5pN0bmQK8GOW5bwpedFk%2FWGptQss7br5dB5%2BonCO%2Fu%2F2NBpfNuBrkT3JwJbcVVsKQB9lLj7K6wuap%2BXKcHJ5jZ%2BN6YAG9UvX5f6UPXDfBTpyfrozLgh1ctzRTQgQKHOSv9oft%2BADafQjVAnEbzQpmDgu6f%2Bdc16x%2B8HISg%2FFnTuJAA5GEW2ugW1%2F3lWhPdpCcRtlPvFi1FnZXELr2sL6bA9RiJagnfu1Tt8Lx2aRqBNW3vrIh65hrTB3TelF%2BfiqHQBaIMWnoi7AX2Kp2ts%2BJbAo5ySNhxpqsFR5DTSfheypLhkbL%2BYQoJQGCEiO8M4A2RPcQyvdqT3pebIR3dvbrZ2X%2FVpYv8rxG1l%2FzfyHWFO%2FF6BLiEHOIUzGsPI%2FAluNYJn4y2J8KYgPZjXNd7uw6g4dDZuLJ5F5%2BXXHkPHtbXzf9aUicKAUpybi%2BCM%2BGx7o0%2F75chm0u6ZhMLBTvYoPaEw0Uh3nR9Jah%2FKMEbiJnmvgD%2BVXKAq%2BvSZBqcQS1qkwnDoEma0e3B5XG%2BdSMeoD7hyKebNvdsknWHQPOMerfdvnhbubQGtpCaj76HzHVa0Lg%2FKq8V9wEZcsucB%2F6FcVCLHpm7qxnv15ifTauuxeFbWDFRBMyL5MJ0xuMPyj1MkGOqUBFt56nsjk7whVESd1KUp%2Bg7w%2BhpeWyOZvPONOA10Rhw%2B08UBqF2FJc3UGoOIuI8pI7YndPKAHsT1kB4jw1N%2FV70pFUl%2BdtZLlnbUdWosocaaXFNo2RqoLbCO5indGbc45RIrYnIOW9uVzLDlvvCLemxxWDy7amwCApvcM4SOoSDlpXRaH8pCyzJPIFf6fPjU6J%2BjPZwcLxnkuhY7%2F9%2Baz7qyWSCJi&X-Amz-Signature=5298168bd5a6d4cef9fa82ea6d66a6a62570ec9fe72f253380bdc4546179fe77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

