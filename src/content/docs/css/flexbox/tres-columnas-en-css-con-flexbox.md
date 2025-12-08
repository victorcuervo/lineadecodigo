---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U3BLIG7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE5ROLpHEED%2BLop2jBh8y8WAfI2URQF%2FLAJRxm4UqwVAiEAx4dRcbc9j9Ww8%2BZg7ytcqLcuTTjDGSpvsFb2eNoW6hUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP32RVlNu8BSf2ysESrcA78%2Fr6hpp8iHYlWTHFUmpFzh490q6vmf4QbD5XoX0LAPz8IFE6jUU%2FoEt1M3VQstua79aM8XNGLT3drWCGDPfZtjtZRsX3ydWCGTj%2Bi5mAc6BVSruuVfgQ%2Beru8wMccjbdjXh0k%2B416ndnR1DPa1877%2FYbTHxMdRjBo4G3koMGPIs6Snxm%2FTWQTUDiu9RJjx9JKgdclpO2IlCMS9kynou0rOy%2BHXjKvCB4jjmxzC7%2Fb4vN2Rr%2Fu1zsLNCrgKDKR1tzAHWI8g9qhr7SV90B4mSggxLjh%2Bac%2BipQNH8IVw3%2BnzYzPXz4RfMZwzH0n7CCvWxTYj02d9kbeRdwG9uuH0MYs7hNa9D5ClI3AFBDNUJLn12n9tdMcpwtxj5YL%2Bf%2FZlT5sF%2Feveh1vKxwXaAiEl6IvQHOJbhbgyIVlB3Zbgy9%2Fh6nmX1mCs8TzSkHsjwjU8XiDA31ZSAbBHoEWOn8YXX5xPnAy6nnocnRo%2FNqLDTX2lBrGG7N%2F%2F%2Fy82a6s0QvNFwElEQohf8%2FDJPdFiC8RjWNWSYBMM1fW9qR3UwkQn9vr97AmW1DDoCsM6Kt6lOLfFr91NuxnE8g7Ku8BetF9fhKrIkyITMl4%2BTzGO3OiF8lCqm4HfzF9j2HCEiSQjMJW03MkGOqUBmo0P8UkY4Xlb762LzM0sJZcOP29b60usFEa56s2g93kR4Sv2kbL%2Fb3htg4q1miTpL5jh%2BN2HhytgdBatn9pbl%2FZpy8V1qQvTt3fzTUGPCLfNwL2ox3Mh46DvKTr1CUpaPXL3RPFMhQDtgU9K7sRtC781RyNfSOH5Nh8Yji0yaYeLZgDT38VtR5i5kV3NhO%2FcFsxgxU%2Bu58x5IyBVDNppepcXlwg%2F&X-Amz-Signature=fe653f3cbeaa9378b3e9238e0b47df7e2369c55e49cce1cb140cfc7099088d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U3BLIG7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE5ROLpHEED%2BLop2jBh8y8WAfI2URQF%2FLAJRxm4UqwVAiEAx4dRcbc9j9Ww8%2BZg7ytcqLcuTTjDGSpvsFb2eNoW6hUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP32RVlNu8BSf2ysESrcA78%2Fr6hpp8iHYlWTHFUmpFzh490q6vmf4QbD5XoX0LAPz8IFE6jUU%2FoEt1M3VQstua79aM8XNGLT3drWCGDPfZtjtZRsX3ydWCGTj%2Bi5mAc6BVSruuVfgQ%2Beru8wMccjbdjXh0k%2B416ndnR1DPa1877%2FYbTHxMdRjBo4G3koMGPIs6Snxm%2FTWQTUDiu9RJjx9JKgdclpO2IlCMS9kynou0rOy%2BHXjKvCB4jjmxzC7%2Fb4vN2Rr%2Fu1zsLNCrgKDKR1tzAHWI8g9qhr7SV90B4mSggxLjh%2Bac%2BipQNH8IVw3%2BnzYzPXz4RfMZwzH0n7CCvWxTYj02d9kbeRdwG9uuH0MYs7hNa9D5ClI3AFBDNUJLn12n9tdMcpwtxj5YL%2Bf%2FZlT5sF%2Feveh1vKxwXaAiEl6IvQHOJbhbgyIVlB3Zbgy9%2Fh6nmX1mCs8TzSkHsjwjU8XiDA31ZSAbBHoEWOn8YXX5xPnAy6nnocnRo%2FNqLDTX2lBrGG7N%2F%2F%2Fy82a6s0QvNFwElEQohf8%2FDJPdFiC8RjWNWSYBMM1fW9qR3UwkQn9vr97AmW1DDoCsM6Kt6lOLfFr91NuxnE8g7Ku8BetF9fhKrIkyITMl4%2BTzGO3OiF8lCqm4HfzF9j2HCEiSQjMJW03MkGOqUBmo0P8UkY4Xlb762LzM0sJZcOP29b60usFEa56s2g93kR4Sv2kbL%2Fb3htg4q1miTpL5jh%2BN2HhytgdBatn9pbl%2FZpy8V1qQvTt3fzTUGPCLfNwL2ox3Mh46DvKTr1CUpaPXL3RPFMhQDtgU9K7sRtC781RyNfSOH5Nh8Yji0yaYeLZgDT38VtR5i5kV3NhO%2FcFsxgxU%2Bu58x5IyBVDNppepcXlwg%2F&X-Amz-Signature=b10604f834140161d88698f2834bb7f9ab0cc36f16e3adc1254f6b160572227d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

