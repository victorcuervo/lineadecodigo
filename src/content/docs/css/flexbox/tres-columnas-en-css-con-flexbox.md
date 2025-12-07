---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADIIG4G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILEmyaWGsVzICy6l%2FMgvq%2FFiqDQpA%2Fc0qyLx0oj7hagIhAIWhoDjKJSrMsyb%2BPB4OKbjnxXlvT1EyNtKDLgry3kFLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2FW9JybcTx2jjXm4q3AM4zyhIDc0EhHZHm6Ka0XCV8ayaFLazPp76KEXxRNlZ6lfxGhBQZvqgqybiA6we0WN%2FJmjWp%2FTn8Kt%2BearsNgF15g7XhkYG0eeDhyOJpHWWhFzKV9XBXYzRwYdTORWDrSlmQ9TWB1letKNY8XHvSR%2FVHe0Ocnjl9Tt%2Bol4J9l38zk6Ok7Q6Z6CNLDwhbaLrWSbfkM2LRxAyc88LbYnUN8XPfUnYpG2iCIVEE0k%2Fh7Sh2G75roTbSGgAro7jWYfWZa%2BhI9MjK3wecIaL255cZGtJS2IRt%2FwDNTnNbmD2PsMSOvuGOhRP%2B1sR%2B2J2jwShcvpHfuq9m1jnYrHs3fNL5jkWU9gxnn9NBmDs%2F3b%2BWgOE97RdRZuJGQMkAkGShATiVnPOzH9sWw%2Bqw48iZtWOjBB4CmxhuvE%2Bx2jyjquTnojmxWXB4bF4uElPnTkE0vVTh7uszVngihdol23UI42OqZZ3aSh3MSWq7PyNHuz7w%2BIld55OQ0SpB0OdXZU4mZx1x3Pk6EtrTeDbyrSUAeN86LD8Q4XZqIn8y0bagyv9LUafs965ap7Pz5Gas0u0wnQ98499oNEyo%2FsumRY8MJ3GHyaZQY0pJfQFFKG5hv0CBZFIMkrHUmtZaE0%2FxZozHTDKmdXJBjqkAbXacaHA%2FYzs6g1zZ%2BRrhSL2opo49QUuva2a4uczBhHxgNWylyiHxye5y558kgx3d%2BNKJ8bCuD1MvbJIVIqkeKdSy8OVQD5YsmVQqUKya4NA%2Fg09g2vXwS0cCmYjqspLDlro%2B%2Fr8%2FFApLExPpNPuuThkjbBKNIDaus2IQwzlUE2txmE2LQFxp3vp3ZFfiEJUWXDX4l49Db8pnSLGchKp09yYkKQ4&X-Amz-Signature=065bf77b301ea77c00d568ebcb8945fc2e04a5833ddc121f60cddb0fb2d15cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADIIG4G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILEmyaWGsVzICy6l%2FMgvq%2FFiqDQpA%2Fc0qyLx0oj7hagIhAIWhoDjKJSrMsyb%2BPB4OKbjnxXlvT1EyNtKDLgry3kFLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2FW9JybcTx2jjXm4q3AM4zyhIDc0EhHZHm6Ka0XCV8ayaFLazPp76KEXxRNlZ6lfxGhBQZvqgqybiA6we0WN%2FJmjWp%2FTn8Kt%2BearsNgF15g7XhkYG0eeDhyOJpHWWhFzKV9XBXYzRwYdTORWDrSlmQ9TWB1letKNY8XHvSR%2FVHe0Ocnjl9Tt%2Bol4J9l38zk6Ok7Q6Z6CNLDwhbaLrWSbfkM2LRxAyc88LbYnUN8XPfUnYpG2iCIVEE0k%2Fh7Sh2G75roTbSGgAro7jWYfWZa%2BhI9MjK3wecIaL255cZGtJS2IRt%2FwDNTnNbmD2PsMSOvuGOhRP%2B1sR%2B2J2jwShcvpHfuq9m1jnYrHs3fNL5jkWU9gxnn9NBmDs%2F3b%2BWgOE97RdRZuJGQMkAkGShATiVnPOzH9sWw%2Bqw48iZtWOjBB4CmxhuvE%2Bx2jyjquTnojmxWXB4bF4uElPnTkE0vVTh7uszVngihdol23UI42OqZZ3aSh3MSWq7PyNHuz7w%2BIld55OQ0SpB0OdXZU4mZx1x3Pk6EtrTeDbyrSUAeN86LD8Q4XZqIn8y0bagyv9LUafs965ap7Pz5Gas0u0wnQ98499oNEyo%2FsumRY8MJ3GHyaZQY0pJfQFFKG5hv0CBZFIMkrHUmtZaE0%2FxZozHTDKmdXJBjqkAbXacaHA%2FYzs6g1zZ%2BRrhSL2opo49QUuva2a4uczBhHxgNWylyiHxye5y558kgx3d%2BNKJ8bCuD1MvbJIVIqkeKdSy8OVQD5YsmVQqUKya4NA%2Fg09g2vXwS0cCmYjqspLDlro%2B%2Fr8%2FFApLExPpNPuuThkjbBKNIDaus2IQwzlUE2txmE2LQFxp3vp3ZFfiEJUWXDX4l49Db8pnSLGchKp09yYkKQ4&X-Amz-Signature=fa76f5c7eb91143b3a53a4843230d683f3247d07d31f51a2cefded8b9b5d12a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

