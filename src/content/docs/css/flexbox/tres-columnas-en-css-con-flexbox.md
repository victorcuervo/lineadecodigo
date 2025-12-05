---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNIEDI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxdGpCRA7%2BKLlmN5G4ABKJaZ8iYWdJQIvtoxQvo8xZUwIgMpGCE5tst3rv1RXhOejn31oUJFchrwrSHGVQZrPyO0Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPlVPg4Q1gVPnsu0hSrcAzQeRTiXh8HVIOomb%2Bzt8ZpDvwBnAzlnRjjjRVmlrMTjC3er%2Bpfro9Mb5sU1x7y9j6ZuJb4OkOHTZXxB6LIUV%2B0sw%2BdCtJZKXNXGqJF%2BIOqCSuyoNh5gKTa%2B9s7nhCIM3FfaQezJx8CmzB3fpehERzJq0VjlpIJqpTl7btFWZazblsB6Qq832XUhD0nCwMRgp0mVqGIP2nkYTSBZR5RcYqF3ZUFtXgVWkUEZQYK%2Bm%2FQeHudN95K%2BdVEOf1r2ZG6cT5sZCDdSVogX5K9EnsFubQnmcn4zgiAsvrDJ%2BgLaW7yne4tw0UWSDDDAFYTobH%2BChg5Tz%2B3fnroVP8aErcu%2BcLi3NTbU8lB28GVy%2BRV%2B8vofENjUdukfpAncPYiuCIrWgS%2Bc1UW9rqnm3jWAT52xhIv%2BgUF0YXGZM%2F1iWPBvwOTAhQyb8sN%2BLQYpan6n6TVXr7kXZWgZ40E%2B02Mntrsnd6%2FAmEcZQu7SnuPxOuPPinp9VdpVRPjEhsVnpbc1ghHMCEGHXHLsskvc18q1jVrpzmLUilSJkD4XSIBkuhKuEFDIpor4BnUHrUTmpnYset9JQRYsC95twstTg68F3t9sBwt%2F6ox2aaOwJRju12rnnkmYRtrt%2FEHb0UHrbc4DMLOsyckGOqUByT7SFmlMso9eOdfJEl9MjGm9gquAMy5xybjRbAuYoqhGEMw9u%2Fn%2BqfLGa29aL6bubI2MeFcoaP%2FU4DtSjD%2B8LZEF2BbXKy14mHslP1Fkz4feiY6Rs%2FtMTM0O6Zexy7raD5yC%2BMnsD0zEqGGKtrkga24WMfFfghqMFl09d0O1BQHiyTtpvS9ZVry1IuNPRbSylPgr%2BSpmMhaTdPnsb8cGP83o8M3O&X-Amz-Signature=8148f2863b32f7a2cb4082feaa00d0f24ca0ec34ec9f27115d0ea14d18715ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNIEDI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxdGpCRA7%2BKLlmN5G4ABKJaZ8iYWdJQIvtoxQvo8xZUwIgMpGCE5tst3rv1RXhOejn31oUJFchrwrSHGVQZrPyO0Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPlVPg4Q1gVPnsu0hSrcAzQeRTiXh8HVIOomb%2Bzt8ZpDvwBnAzlnRjjjRVmlrMTjC3er%2Bpfro9Mb5sU1x7y9j6ZuJb4OkOHTZXxB6LIUV%2B0sw%2BdCtJZKXNXGqJF%2BIOqCSuyoNh5gKTa%2B9s7nhCIM3FfaQezJx8CmzB3fpehERzJq0VjlpIJqpTl7btFWZazblsB6Qq832XUhD0nCwMRgp0mVqGIP2nkYTSBZR5RcYqF3ZUFtXgVWkUEZQYK%2Bm%2FQeHudN95K%2BdVEOf1r2ZG6cT5sZCDdSVogX5K9EnsFubQnmcn4zgiAsvrDJ%2BgLaW7yne4tw0UWSDDDAFYTobH%2BChg5Tz%2B3fnroVP8aErcu%2BcLi3NTbU8lB28GVy%2BRV%2B8vofENjUdukfpAncPYiuCIrWgS%2Bc1UW9rqnm3jWAT52xhIv%2BgUF0YXGZM%2F1iWPBvwOTAhQyb8sN%2BLQYpan6n6TVXr7kXZWgZ40E%2B02Mntrsnd6%2FAmEcZQu7SnuPxOuPPinp9VdpVRPjEhsVnpbc1ghHMCEGHXHLsskvc18q1jVrpzmLUilSJkD4XSIBkuhKuEFDIpor4BnUHrUTmpnYset9JQRYsC95twstTg68F3t9sBwt%2F6ox2aaOwJRju12rnnkmYRtrt%2FEHb0UHrbc4DMLOsyckGOqUByT7SFmlMso9eOdfJEl9MjGm9gquAMy5xybjRbAuYoqhGEMw9u%2Fn%2BqfLGa29aL6bubI2MeFcoaP%2FU4DtSjD%2B8LZEF2BbXKy14mHslP1Fkz4feiY6Rs%2FtMTM0O6Zexy7raD5yC%2BMnsD0zEqGGKtrkga24WMfFfghqMFl09d0O1BQHiyTtpvS9ZVry1IuNPRbSylPgr%2BSpmMhaTdPnsb8cGP83o8M3O&X-Amz-Signature=b29da455456044248aa9e023a125c33ccf48e5cf431ee5c24fc4a5c54d3aadf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

