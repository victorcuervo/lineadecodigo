---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKLFOWF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9wPiSEs9Cl1pTxlEmpv8HOFhOjix779dWs6xmDgZ9gIgb5Sx8y0C5OJD5tooC%2Bw6CBO6Dkae6PlFOAuZE61LQOUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0Sae6lyzIZvV3HLSrcA8qoAwAIjDKHpOKM4DZRjqezRJsVyRK0AOFdr133pve5G31Zt9uLvfy5jv%2Fl7tzZJt6cdoCqtdUVcLnViDuW5UBQv9DmBIAqaHj5WpDwke9ca5WllSsDYOHMqJj1mt7OpZQFmfS3de242DSOGlwd4QNBClzCp8X6BC7w7%2F%2FY6wCEim0K4mXgHepeJPkEWwgV1j%2BbR7pDLxyzBoPrYdRsuYc%2FvCQJz8bCrFlPmAFPl7OSXCjdwv1%2B49Ze3BrVG74o0WBhMn6UrzWtAzQeYzky2MLIJ3b1MllOl155%2FF913EZSdSq83WVA41SIEoAScUhuK5aArvoo3zEaF9QBaf7vaQtXaBStAGq6JYB8mJ1Mw%2BOzoiTeRlNL%2Fmq9zjTA1zw4lQJ3FOHaFzCJB6c3D4t9E%2F5bbks%2BddOZvFvmcpPev9ReAtMD8G%2BBad7ZsDWJYS7dpxGYGeRiC2pX%2F8LcUxk4OWs9oMLEmjNaBXgLsp0Irz8dfXDwpYGtuhfcNBK7hB6xmjWoA8KVsfuNUXr5g3WoVdkdQSmiqqVlgE0s%2BfweK6if0PRgUnRXOwX09kaeHbPwgs374sqSX%2BIk07RdzP6pFcL%2BitHJptx1ezMSwxkWTCN5IVFQ6qvDX4hSQdytMLDu2ckGOqUBWXh%2FrLZ1iB8xauRLAUnas31ib%2B41M%2FgxUgygMGiGKcUulU11yqmrZjyqDO%2FLCIbTvgw66uSSAu23RwSe5JYcLBp7zFbmc1qx7SDuZFQGu1Nlpov%2BX9Y0W%2FwB84KuTjbH9pSbkzF5XBxFMVegiBzRnKpZE0rEYm6e78lmvYUY5aVXI66Zjrl%2BEGobTH6QTmcaZvZFG4xSbHUJlHHASIclJ7Og6sxT&X-Amz-Signature=b27b3a62d79c5568339e3d5e27fb8098af698e9db73dc816770de605ba3a50f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKLFOWF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9wPiSEs9Cl1pTxlEmpv8HOFhOjix779dWs6xmDgZ9gIgb5Sx8y0C5OJD5tooC%2Bw6CBO6Dkae6PlFOAuZE61LQOUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0Sae6lyzIZvV3HLSrcA8qoAwAIjDKHpOKM4DZRjqezRJsVyRK0AOFdr133pve5G31Zt9uLvfy5jv%2Fl7tzZJt6cdoCqtdUVcLnViDuW5UBQv9DmBIAqaHj5WpDwke9ca5WllSsDYOHMqJj1mt7OpZQFmfS3de242DSOGlwd4QNBClzCp8X6BC7w7%2F%2FY6wCEim0K4mXgHepeJPkEWwgV1j%2BbR7pDLxyzBoPrYdRsuYc%2FvCQJz8bCrFlPmAFPl7OSXCjdwv1%2B49Ze3BrVG74o0WBhMn6UrzWtAzQeYzky2MLIJ3b1MllOl155%2FF913EZSdSq83WVA41SIEoAScUhuK5aArvoo3zEaF9QBaf7vaQtXaBStAGq6JYB8mJ1Mw%2BOzoiTeRlNL%2Fmq9zjTA1zw4lQJ3FOHaFzCJB6c3D4t9E%2F5bbks%2BddOZvFvmcpPev9ReAtMD8G%2BBad7ZsDWJYS7dpxGYGeRiC2pX%2F8LcUxk4OWs9oMLEmjNaBXgLsp0Irz8dfXDwpYGtuhfcNBK7hB6xmjWoA8KVsfuNUXr5g3WoVdkdQSmiqqVlgE0s%2BfweK6if0PRgUnRXOwX09kaeHbPwgs374sqSX%2BIk07RdzP6pFcL%2BitHJptx1ezMSwxkWTCN5IVFQ6qvDX4hSQdytMLDu2ckGOqUBWXh%2FrLZ1iB8xauRLAUnas31ib%2B41M%2FgxUgygMGiGKcUulU11yqmrZjyqDO%2FLCIbTvgw66uSSAu23RwSe5JYcLBp7zFbmc1qx7SDuZFQGu1Nlpov%2BX9Y0W%2FwB84KuTjbH9pSbkzF5XBxFMVegiBzRnKpZE0rEYm6e78lmvYUY5aVXI66Zjrl%2BEGobTH6QTmcaZvZFG4xSbHUJlHHASIclJ7Og6sxT&X-Amz-Signature=ff7213a224c5fc9d057fbadf5c7136a637dc554fe92cea23fb79e7e08ff15661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

