---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YO6DTJS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG2CbwwjLQ%2BrPKqBwr0V03sGAAP6xDXGzwZKHRuBsOPgIhAKne5eCVcXUPzyMxSd%2FMi0%2FT2efnqmwqxFrNkXY0XPrLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5q6P9kDg%2FsiZitSkq3ANNLvbdYJb6hITL5W5EZ%2FmpzuiAlqyCODfktNJeEmkxHWRbKYy1Yt03TzSR5OgcPU7DJ0q1wLrQHs6wpKlAUh%2FIY%2BLCW0rPq4B3yTdrfeo77TMPWPFzV4s7nE2%2BkZ11w6wXm1ea8saBXTlR%2BMPQJQZzGrlR%2BWGZXU4T%2BomIDwYuy%2FZVHVaW4kgNV0MVqkcZwWQM4ioPLMnQ6ltTTVar8UB2LflLAucUXHvIo1S1bbFydwGsjLhpRsI6QO696BDEH0eq2uZcWNjNyY8C8Du6WFEoSC2TpJQ0te2SzhBMQwVmQHtF33YUa3RK6jCzzaJdNzyMNFGeRlhVIGGPJEomZhNZOwwmvFwwhslBS6TsGgxBf0Oq5I4rJHSf5gSSEcG6YneysXzYxf0SUDvEUqk5ML8NZosmuQFMMnDQT8IdG1z4FDN7I1o7Ljswjjp%2FqcuChg6Xj%2B3JEdvzylVCCUQYlD0XqaMj84OdFNoGDsEM8Z8SaXnh4WaNupgbwosBJWgAQ7j3IpyJ4DfDLEa0L6blDgNi0IRkdk01g6jT2AqksmdyT9nnKwRxLSZKXJMTUxhC6tbs555YTB1cHrEpkPEuTjasozhEMhYkHEhYyNJ2yb%2F1ez5N3NvmsIAzAmARNDCGw93JBjqkAcDnIVeD%2BhEMTGKWJFcZKKS4yEzng9ANZSSHyrfLAhoBr8HqyxWM3DXCtjtQ%2BbYQuIBge1BMGjv6LnCS2zA5GLJ3ghDvp2bUHLNxkuYBdbccjimON4Fl6vhKcJrTeNK1Du56pIO1RB%2BM%2BB3hrFtrEbiJJvt4udp7c3QEmKqmVjd55sSf0Y5sxADXX5lExb0efFG8CNzBFeGVPZz88SLWuT8eY0WF&X-Amz-Signature=faa1a7c4862f4f4040ad851ecb3ca0c7ea3d44738b4f208e60d5e36dfaa712fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YO6DTJS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG2CbwwjLQ%2BrPKqBwr0V03sGAAP6xDXGzwZKHRuBsOPgIhAKne5eCVcXUPzyMxSd%2FMi0%2FT2efnqmwqxFrNkXY0XPrLKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5q6P9kDg%2FsiZitSkq3ANNLvbdYJb6hITL5W5EZ%2FmpzuiAlqyCODfktNJeEmkxHWRbKYy1Yt03TzSR5OgcPU7DJ0q1wLrQHs6wpKlAUh%2FIY%2BLCW0rPq4B3yTdrfeo77TMPWPFzV4s7nE2%2BkZ11w6wXm1ea8saBXTlR%2BMPQJQZzGrlR%2BWGZXU4T%2BomIDwYuy%2FZVHVaW4kgNV0MVqkcZwWQM4ioPLMnQ6ltTTVar8UB2LflLAucUXHvIo1S1bbFydwGsjLhpRsI6QO696BDEH0eq2uZcWNjNyY8C8Du6WFEoSC2TpJQ0te2SzhBMQwVmQHtF33YUa3RK6jCzzaJdNzyMNFGeRlhVIGGPJEomZhNZOwwmvFwwhslBS6TsGgxBf0Oq5I4rJHSf5gSSEcG6YneysXzYxf0SUDvEUqk5ML8NZosmuQFMMnDQT8IdG1z4FDN7I1o7Ljswjjp%2FqcuChg6Xj%2B3JEdvzylVCCUQYlD0XqaMj84OdFNoGDsEM8Z8SaXnh4WaNupgbwosBJWgAQ7j3IpyJ4DfDLEa0L6blDgNi0IRkdk01g6jT2AqksmdyT9nnKwRxLSZKXJMTUxhC6tbs555YTB1cHrEpkPEuTjasozhEMhYkHEhYyNJ2yb%2F1ez5N3NvmsIAzAmARNDCGw93JBjqkAcDnIVeD%2BhEMTGKWJFcZKKS4yEzng9ANZSSHyrfLAhoBr8HqyxWM3DXCtjtQ%2BbYQuIBge1BMGjv6LnCS2zA5GLJ3ghDvp2bUHLNxkuYBdbccjimON4Fl6vhKcJrTeNK1Du56pIO1RB%2BM%2BB3hrFtrEbiJJvt4udp7c3QEmKqmVjd55sSf0Y5sxADXX5lExb0efFG8CNzBFeGVPZz88SLWuT8eY0WF&X-Amz-Signature=6e0d0b713b27f1194d20ed67747b70c2de96cfa752350ea778c3a0aac91edfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

