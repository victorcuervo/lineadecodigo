---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPPCK5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCTrnlD3HZVBJhk%2BWwBQ6oceyMRzj%2BidTLY8aZWEbO%2BAiEAgduwM%2B6gaWbEv%2BHI2hrLEJA3mRS3LEpWJUIY%2BT8i98Eq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN5x1%2BGeDRpuvxRhDyrcAwUpDy7RuKRGSW6UbzFLFq2DUlZxZUZPE6K9OR1iXUaYMRG6JDT1oBh9u4EBXN2Xv4kC4nKz4AyCw2xb8lzxrL0wMqRQno%2BjLaKeGVQEU%2BVbD%2FoP9AwV4iKRa3SbtE5SnvVRs2T9aL38MZV71uqHdoQ5478RANk2eelSjHxFAqSA43hqgApbhnCuCHIf5ETo2Fm9V5ODCS1Uor7%2BBJjdvhvWpo9%2BQRG9NtQl4L6AQLkrZkZ9czWGMM90ZczjsX9PVtkHhekkN6h1BwRRSl0DZ9Y2KimhooSQEAVBD7B04zBKx8Ys%2Bz3kn4qjMtc7p1u%2Fb4QvZn25BBRWi7WtrbZPHhKaVHPdDgxsW51XFnmbB%2Fq84RiUb7bvQq9n%2F2xhY0gMiMjHv8yd2Bb2%2Fgc60sTXwEStUDaTZgYJlHm0fHJIOdbCwYR70lITaNMQZjKG9KlKMvYuhux00VlKVsD9HP445ftIrRSWXzpU3Q9q3D3cQLw2BaRah5q255Dk3u42nx65sq8b6yo9EmU%2FO6w3cVHBCCqJh2jXuDbONJXudUATqFuVErE2XJ43w85eC5A%2FLToHHu8%2BHRabq%2F941F%2BWMhFe8%2FpXDa4PLWsq8svHvHINSkjGY94Q1XSnMiRalp5qMJ%2Frz8kGOqUBskijlTQ8%2FJxfh9ZSEt4cOFeIzQlR%2FdkQ07RLTSxuy6xJsvj6VzV4GECktOw3EKYcCZKtQ2e1knBFQq79gc%2FO4EKbH7%2BQ1KY7ffUrs5Hu%2FLrJxinySRC4f3jpI%2BOrroCnn4gUPjlsX8Fd8MsSdKHR%2Fc1VMCXU7nUh8gps1YSLApJJSYFVRF06hv3hLp1i7GUqdR0iEMXok2SkZJPlzbsV0keUBzSu&X-Amz-Signature=4f9ab7e697ef0a4b47c2ef0af8bc46a53ebf96b189b9e525189507aca34e95e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPPCK5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCTrnlD3HZVBJhk%2BWwBQ6oceyMRzj%2BidTLY8aZWEbO%2BAiEAgduwM%2B6gaWbEv%2BHI2hrLEJA3mRS3LEpWJUIY%2BT8i98Eq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN5x1%2BGeDRpuvxRhDyrcAwUpDy7RuKRGSW6UbzFLFq2DUlZxZUZPE6K9OR1iXUaYMRG6JDT1oBh9u4EBXN2Xv4kC4nKz4AyCw2xb8lzxrL0wMqRQno%2BjLaKeGVQEU%2BVbD%2FoP9AwV4iKRa3SbtE5SnvVRs2T9aL38MZV71uqHdoQ5478RANk2eelSjHxFAqSA43hqgApbhnCuCHIf5ETo2Fm9V5ODCS1Uor7%2BBJjdvhvWpo9%2BQRG9NtQl4L6AQLkrZkZ9czWGMM90ZczjsX9PVtkHhekkN6h1BwRRSl0DZ9Y2KimhooSQEAVBD7B04zBKx8Ys%2Bz3kn4qjMtc7p1u%2Fb4QvZn25BBRWi7WtrbZPHhKaVHPdDgxsW51XFnmbB%2Fq84RiUb7bvQq9n%2F2xhY0gMiMjHv8yd2Bb2%2Fgc60sTXwEStUDaTZgYJlHm0fHJIOdbCwYR70lITaNMQZjKG9KlKMvYuhux00VlKVsD9HP445ftIrRSWXzpU3Q9q3D3cQLw2BaRah5q255Dk3u42nx65sq8b6yo9EmU%2FO6w3cVHBCCqJh2jXuDbONJXudUATqFuVErE2XJ43w85eC5A%2FLToHHu8%2BHRabq%2F941F%2BWMhFe8%2FpXDa4PLWsq8svHvHINSkjGY94Q1XSnMiRalp5qMJ%2Frz8kGOqUBskijlTQ8%2FJxfh9ZSEt4cOFeIzQlR%2FdkQ07RLTSxuy6xJsvj6VzV4GECktOw3EKYcCZKtQ2e1knBFQq79gc%2FO4EKbH7%2BQ1KY7ffUrs5Hu%2FLrJxinySRC4f3jpI%2BOrroCnn4gUPjlsX8Fd8MsSdKHR%2Fc1VMCXU7nUh8gps1YSLApJJSYFVRF06hv3hLp1i7GUqdR0iEMXok2SkZJPlzbsV0keUBzSu&X-Amz-Signature=5e1257476795a29179fcfc18b37aa385e0b0157b00f02cd9a05f163e6e04d725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

