---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNMTF7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGDHpIz%2FeZYee4VIU6UiFk%2FM9ZnaxEMxV7FTYaX7runAiBGpIPT3MPMeFb%2BGxmk9z0MZ3Zvp3hL6uWqaCIMnui1tSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM76WD2uXfg6Q5oIYjKtwDvTnno6vugPk4LDteZX7gwF9PPpcMYAvqBdBfqQXz9DC4ond5KQlHB6e25IM%2BYfCAW1t5f8kIqvzg2BVmBGy6WFDVpRxyNiohfskitwzKmRVBEKmiz76abNur32%2BzwsDhvRlISIm7KJox32Y9IUNnj0pVvQ5MsKVu6G2vmTpibM1a4dB2Fcibk99jA5XpRWi2AUVwomoRVtIimHinvv9GppTHjXnvto9ar44vr5UhJJMCQDX9kB0YbGkPe5Mmjujx2P4WJcOGuswVXfQMgQjGOk0Ha090e14cXcabZ37lH68u9wF0vNNb2WZ%2FEOz%2B0ISv%2FMmVsC%2FYu3kc9qTDsAUEKHkcg2wn9iePOsmdoYHIfuQVyRXPU5gyosO2gZ67dTQiE3MsPJ3s57N%2ByaTjKHWHIguv9jak6AHG3Sxx9friawr9i%2BXVgF3wxfKoZsDQSawwsVUqNlpXWaPuFok5K8idl0aVCE4had5%2BLsOBTeBo4078bqELNuiChZ%2BkvSzExwrPUHnLeHATvYNdphG%2B%2F6ImnaEeWKLOtMhMwQPdSq%2BKIq6YVYi2I9%2FbLv1w6m1tp0Icy7qwwM521hZdAWKjsUSdWc2fCUhVWT87z3BJ5QGt%2BuzjIm7bWS7iQeQnHTIw26bQyQY6pgGAZ85UjQgisjN6fjtje6Q20ZiQPx1Xjl3n6IxbtX0UeWr7lNAdiq8E3ZTj88LJH7x0pchqb0sfixR7V%2FllXsS16YLSbbCH%2BsPnIE4tErVtJ0hm7AatEpjbBvjxtTKLMS%2Fcwdz5%2BUZJiv3V5WS0hObD7cQtBecz9zfew7SiAsGLEcwSBsFeDCXTpF7gIAXNV6OJr%2BAWslVRDxVSTxjHLBcnC%2F%2BkjLoj&X-Amz-Signature=cb66620c9bc7c07326ae54a35b5da45db5332420f5d2fb4079b6f82330d4710f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNMTF7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGDHpIz%2FeZYee4VIU6UiFk%2FM9ZnaxEMxV7FTYaX7runAiBGpIPT3MPMeFb%2BGxmk9z0MZ3Zvp3hL6uWqaCIMnui1tSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM76WD2uXfg6Q5oIYjKtwDvTnno6vugPk4LDteZX7gwF9PPpcMYAvqBdBfqQXz9DC4ond5KQlHB6e25IM%2BYfCAW1t5f8kIqvzg2BVmBGy6WFDVpRxyNiohfskitwzKmRVBEKmiz76abNur32%2BzwsDhvRlISIm7KJox32Y9IUNnj0pVvQ5MsKVu6G2vmTpibM1a4dB2Fcibk99jA5XpRWi2AUVwomoRVtIimHinvv9GppTHjXnvto9ar44vr5UhJJMCQDX9kB0YbGkPe5Mmjujx2P4WJcOGuswVXfQMgQjGOk0Ha090e14cXcabZ37lH68u9wF0vNNb2WZ%2FEOz%2B0ISv%2FMmVsC%2FYu3kc9qTDsAUEKHkcg2wn9iePOsmdoYHIfuQVyRXPU5gyosO2gZ67dTQiE3MsPJ3s57N%2ByaTjKHWHIguv9jak6AHG3Sxx9friawr9i%2BXVgF3wxfKoZsDQSawwsVUqNlpXWaPuFok5K8idl0aVCE4had5%2BLsOBTeBo4078bqELNuiChZ%2BkvSzExwrPUHnLeHATvYNdphG%2B%2F6ImnaEeWKLOtMhMwQPdSq%2BKIq6YVYi2I9%2FbLv1w6m1tp0Icy7qwwM521hZdAWKjsUSdWc2fCUhVWT87z3BJ5QGt%2BuzjIm7bWS7iQeQnHTIw26bQyQY6pgGAZ85UjQgisjN6fjtje6Q20ZiQPx1Xjl3n6IxbtX0UeWr7lNAdiq8E3ZTj88LJH7x0pchqb0sfixR7V%2FllXsS16YLSbbCH%2BsPnIE4tErVtJ0hm7AatEpjbBvjxtTKLMS%2Fcwdz5%2BUZJiv3V5WS0hObD7cQtBecz9zfew7SiAsGLEcwSBsFeDCXTpF7gIAXNV6OJr%2BAWslVRDxVSTxjHLBcnC%2F%2BkjLoj&X-Amz-Signature=a899aef5ae88d07f0d47645420a5a890c8ca4032cc2bb4325cf1d35e6ef4840a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

