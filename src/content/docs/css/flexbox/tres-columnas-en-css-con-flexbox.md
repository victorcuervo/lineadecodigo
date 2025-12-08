---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP3HG25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMMaQLlZ5GYQEHO2RLNme%2FEwvWx1vJPaIfTowGqcRQwwIhAMmWcHO3LS8p0meuSnCAfcaYaTJFa8D9r%2FLKgcn63b5IKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwva4Pq6QuxkecUnf4q3APpnCLQD3rJnNrpG24PpuLr6ZoYWzChhWE0i1pJvixCFvrZkCtvxgottMTu5a%2FUCqY72rpmx48kpkDD8oQgAy4GHnwUBSeSYVrc32yfMIPUVK%2BFCfNbvZolxzjU9uJA5DpB6Pk5Aqy7ioDCb9fVtpphfvnjWjApXGxWXCegPN40mJSz9yaHMO4QdcodLLrB43P%2FW3lsbwWKeju9tMhF090mK%2FcFw3wVYkKOwaPgQ%2BmyDNBCW8k9JM7oj8A8o1o8%2Bj5elQAqzt0RuNIcH0vAyK3gYX3DC38Z3bX3Vyeej3fY6%2BImbgFVt9TMWX8vlzXw%2BzeBmaTFgQHWDT51Hnw9v3iPwsuITExQAdJPz%2Bvl5XxkJJ2aRwTUXD7udZKgJZ9X9xe2zMBxJigt62pzuj5V1g2qszokuCn%2FkuvLzWVc46VQWzcqq%2BjGHqvKr08O87SEa%2Beb3d2bVUrURbZBQqFphmoOIKvpLcKkWhI5d7u3rcgUA8Ktk0YStw6IjUV4SIOTwrOAB6aWxEE%2FyXIocFKvd5ePl8Qw95oXOynmaDGWBBWO22%2BCgKsxqDzAaXxVd0O5C1vL1f1UOJs13lOzoIChgtObC53K7NPGNiBym%2ForVvb1WxZ12rRMMwigzTbsbzDMs9zJBjqkAdgq7YNNValrFH%2BtkOD%2BQoWdbfVvF5A2DepBG8QyMiyzQPY16S%2BF3vZNjlaFOUqAAsVGtD49TdT6yzTsc%2FogD0rRE7gaQqbT40RDDfQgQRXco55oyOY2KVxpkozuR5Tnn1e7%2BbE0S%2FDl6nx8458QtViKH19EiPPrBIB%2FvBz%2F6IPixq3lLT%2FI59CXmCYB2%2Fn%2Bh7FKsVu4CE5xTvkBnAjv%2Bx%2F2%2FeDV&X-Amz-Signature=d5c2c9c69872baf54d7883fad7ead4de27945b44a8c4ca5e88d8ab1755d8d919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP3HG25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMMaQLlZ5GYQEHO2RLNme%2FEwvWx1vJPaIfTowGqcRQwwIhAMmWcHO3LS8p0meuSnCAfcaYaTJFa8D9r%2FLKgcn63b5IKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwva4Pq6QuxkecUnf4q3APpnCLQD3rJnNrpG24PpuLr6ZoYWzChhWE0i1pJvixCFvrZkCtvxgottMTu5a%2FUCqY72rpmx48kpkDD8oQgAy4GHnwUBSeSYVrc32yfMIPUVK%2BFCfNbvZolxzjU9uJA5DpB6Pk5Aqy7ioDCb9fVtpphfvnjWjApXGxWXCegPN40mJSz9yaHMO4QdcodLLrB43P%2FW3lsbwWKeju9tMhF090mK%2FcFw3wVYkKOwaPgQ%2BmyDNBCW8k9JM7oj8A8o1o8%2Bj5elQAqzt0RuNIcH0vAyK3gYX3DC38Z3bX3Vyeej3fY6%2BImbgFVt9TMWX8vlzXw%2BzeBmaTFgQHWDT51Hnw9v3iPwsuITExQAdJPz%2Bvl5XxkJJ2aRwTUXD7udZKgJZ9X9xe2zMBxJigt62pzuj5V1g2qszokuCn%2FkuvLzWVc46VQWzcqq%2BjGHqvKr08O87SEa%2Beb3d2bVUrURbZBQqFphmoOIKvpLcKkWhI5d7u3rcgUA8Ktk0YStw6IjUV4SIOTwrOAB6aWxEE%2FyXIocFKvd5ePl8Qw95oXOynmaDGWBBWO22%2BCgKsxqDzAaXxVd0O5C1vL1f1UOJs13lOzoIChgtObC53K7NPGNiBym%2ForVvb1WxZ12rRMMwigzTbsbzDMs9zJBjqkAdgq7YNNValrFH%2BtkOD%2BQoWdbfVvF5A2DepBG8QyMiyzQPY16S%2BF3vZNjlaFOUqAAsVGtD49TdT6yzTsc%2FogD0rRE7gaQqbT40RDDfQgQRXco55oyOY2KVxpkozuR5Tnn1e7%2BbE0S%2FDl6nx8458QtViKH19EiPPrBIB%2FvBz%2F6IPixq3lLT%2FI59CXmCYB2%2Fn%2Bh7FKsVu4CE5xTvkBnAjv%2Bx%2F2%2FeDV&X-Amz-Signature=6f6c436e3655d258d886279dd5a91fd102359ba19e56abf45aaaab5be3344c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

