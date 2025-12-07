---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWWFID2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FuK661rNe5wGw4swyz2VmEzHeESd7T9Kr6SACC05OswIhAM02vhinzXCLqzBzpGWg3JLwdq3axa%2BTGHxNF8eMOz4GKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFoVzZWTncyuC33w4q3APSTl0OavVk1Qd%2B5I0brAIPiY4AX%2BF3SAT9Hx9K9cWR0DVCN%2FFwTVzh48qzw1Td4Gr3QiKDqTYi7y5CoU%2FcLtK0cNU%2BPi%2Bw8dJZL%2B7FwaHxXJ7atmZB%2BqEiUMfFm8TO0%2Bw%2F0q8ClIQqW1OWEdKk8zp9pQszlpUcvYfcrFdGXBa3zbs8R3toyIMI4wPHLYl7u95mj8ttppW2koYgue8MEe%2B4DthasFoAYuOvcHRJKUpxMVRHpFtYzb6RPSHqKTw0%2BZ3oHrBKZJNdsDvACblg9nBiWvEmrKp5AHWSJmZQb2w5voAxSmZ8%2BiAw9G616rfk0hb9q92DDLK193zX0egOXlUYZ93ve3Ca2RoE73EnCyiQG5dl7t3dXhOWtfF0DtC7IHHUexvIOndpNdK8gyYkdbWVTb9%2F%2FmSy0yDfGf%2BGLF5ZTI4le5iikpvCtUpi2OiGzENDPShx91p5JTWPgoPuNOXLYddzvszCzhwoRO30YwZ2nqdFwTpTxS8YnySVrCPwYvJw3dKOwueiQf5uy8KWX3BW3VZnygR%2BydXocwXzGhnCwi9%2FKBX%2FYZ5UDYN6yUbDDhgyf8Gw08HVFhOaSpyWvTBRzwmvKV5UfJLRZJaM5zJzgGLhbPRJyOgHy%2FesDjDGo9TJBjqkATpdrKnxAd6XAUy4n6xHAphodbeLFRC%2FRrGGNQxR8WEt1NxPUvGum3%2BxHYrXxsOgaHLCbJ0U6vR%2FJ3j%2Fwl1d4mHB8fG7umqtiWMwW%2FnaOw%2FK%2FnXFJa1PQSq6UfmXhxN%2FVGPtkq9o1G79h8ewxBD6jwOqsk217lt3WXZhyt2IyEmc8Ygkb%2BSJAWm4aZAiQ%2BL59DbAiyhisg0ss2kiQnjjShY2nsf2&X-Amz-Signature=1f5c5a242bb65c659641b2b446d4ae2e9cbc7fe80f20de152cb2f5efd4a6207f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWWFID2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FuK661rNe5wGw4swyz2VmEzHeESd7T9Kr6SACC05OswIhAM02vhinzXCLqzBzpGWg3JLwdq3axa%2BTGHxNF8eMOz4GKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFoVzZWTncyuC33w4q3APSTl0OavVk1Qd%2B5I0brAIPiY4AX%2BF3SAT9Hx9K9cWR0DVCN%2FFwTVzh48qzw1Td4Gr3QiKDqTYi7y5CoU%2FcLtK0cNU%2BPi%2Bw8dJZL%2B7FwaHxXJ7atmZB%2BqEiUMfFm8TO0%2Bw%2F0q8ClIQqW1OWEdKk8zp9pQszlpUcvYfcrFdGXBa3zbs8R3toyIMI4wPHLYl7u95mj8ttppW2koYgue8MEe%2B4DthasFoAYuOvcHRJKUpxMVRHpFtYzb6RPSHqKTw0%2BZ3oHrBKZJNdsDvACblg9nBiWvEmrKp5AHWSJmZQb2w5voAxSmZ8%2BiAw9G616rfk0hb9q92DDLK193zX0egOXlUYZ93ve3Ca2RoE73EnCyiQG5dl7t3dXhOWtfF0DtC7IHHUexvIOndpNdK8gyYkdbWVTb9%2F%2FmSy0yDfGf%2BGLF5ZTI4le5iikpvCtUpi2OiGzENDPShx91p5JTWPgoPuNOXLYddzvszCzhwoRO30YwZ2nqdFwTpTxS8YnySVrCPwYvJw3dKOwueiQf5uy8KWX3BW3VZnygR%2BydXocwXzGhnCwi9%2FKBX%2FYZ5UDYN6yUbDDhgyf8Gw08HVFhOaSpyWvTBRzwmvKV5UfJLRZJaM5zJzgGLhbPRJyOgHy%2FesDjDGo9TJBjqkATpdrKnxAd6XAUy4n6xHAphodbeLFRC%2FRrGGNQxR8WEt1NxPUvGum3%2BxHYrXxsOgaHLCbJ0U6vR%2FJ3j%2Fwl1d4mHB8fG7umqtiWMwW%2FnaOw%2FK%2FnXFJa1PQSq6UfmXhxN%2FVGPtkq9o1G79h8ewxBD6jwOqsk217lt3WXZhyt2IyEmc8Ygkb%2BSJAWm4aZAiQ%2BL59DbAiyhisg0ss2kiQnjjShY2nsf2&X-Amz-Signature=35177a449040389dd865bd1d11ab6f24d9429fbf0aec770bd35ae813fea9f74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

