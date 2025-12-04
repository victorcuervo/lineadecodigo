---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424NJYKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4CeaCuTtA3RPljD9OxgfMxzc%2FQz79iftQ3JH8DlvBZgIgGzNFSyeP62M2TG5P8%2BbgVIGhJ5HbRxChdMGJJEFmQekq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD7T2elR4g5Pj7e7LircA2wmyyewJrwJhpUPZMONJfW6PyCzhEYAHbToJn4m0RolwxJ2bNI9Hq1LZ7yuGpp6BIIMO%2FofaB6ZWrRlhCrUj1AJrE7hOTrFfmsRYqMvgSvPW%2Bxl9tf%2Fpw5PUUnC6v%2BnfVWgT58Z1FXuBOl8xBNY%2Ba6Gg5c0E7a%2FM5iB%2BzmnvTzpvlqmftHOSsYT9THzVYqB%2Fqq0dSjq19BHXmJZT04K07IOjzRjDeo1BwEj51GdYeo6N6yhLxK8PRzZZtedl2XyzldEFgD%2F5H%2Bj%2F486w7y9wDv7MvJ7So5DjleQtaAeW0wDWAJrj4QzgcmuNoWxJnM4JAP9QtBKXW0Cx2bNGvAviXKvUi222%2FH5OofBeCSnciXNGeuxDmUnfS7xCqSU2zx75QjCgOxmq9He8IGum3G%2FOiuDmtWyW9V2QhviOUxt30VII3xAhb9FY0b%2FldI90ZH9MFwEo3DK0Kf6kYCzRPdNyMUx66b7KXrmwgEXedIfVDh5yIiw7oG6Vdr6YKa2%2F%2FFXT1wErflXaBPJoBXf%2BCvxiqtv1DlLcGBfN4fXzCU8XUzqPMtoKNKeKZE98lkeVdWSuFEvOD%2BHFeFCpdkuwt6rsBZmKkxLNdx89LDf22pm4GQ76kI%2F9vQLndImpvr2MJWMyMkGOqUB38gWQyt09cZwR7JGqvOQUuGk20dCXESLlB8DtXTv0XTMkEP0DNH6%2FCZAxfbWMdVftVDUOVVdXZSCOB06MfCBkYc6%2BVggUyBCZc3Ihr5alX%2BDSgbIBFK2WnSwNX9I27hF8%2F4fOojdZtGfDvx3w9nRW20XtvG1FqoakCfVcy5Ej5D%2BUK7u0myEk4Ix517x6RncERPTCIjU9LkAxmF5E%2BmDlKoqFd6q&X-Amz-Signature=3fdac124af5c49052372dcba1c749f8b8d9a518478910e10ae394ec7a5152708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424NJYKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4CeaCuTtA3RPljD9OxgfMxzc%2FQz79iftQ3JH8DlvBZgIgGzNFSyeP62M2TG5P8%2BbgVIGhJ5HbRxChdMGJJEFmQekq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD7T2elR4g5Pj7e7LircA2wmyyewJrwJhpUPZMONJfW6PyCzhEYAHbToJn4m0RolwxJ2bNI9Hq1LZ7yuGpp6BIIMO%2FofaB6ZWrRlhCrUj1AJrE7hOTrFfmsRYqMvgSvPW%2Bxl9tf%2Fpw5PUUnC6v%2BnfVWgT58Z1FXuBOl8xBNY%2Ba6Gg5c0E7a%2FM5iB%2BzmnvTzpvlqmftHOSsYT9THzVYqB%2Fqq0dSjq19BHXmJZT04K07IOjzRjDeo1BwEj51GdYeo6N6yhLxK8PRzZZtedl2XyzldEFgD%2F5H%2Bj%2F486w7y9wDv7MvJ7So5DjleQtaAeW0wDWAJrj4QzgcmuNoWxJnM4JAP9QtBKXW0Cx2bNGvAviXKvUi222%2FH5OofBeCSnciXNGeuxDmUnfS7xCqSU2zx75QjCgOxmq9He8IGum3G%2FOiuDmtWyW9V2QhviOUxt30VII3xAhb9FY0b%2FldI90ZH9MFwEo3DK0Kf6kYCzRPdNyMUx66b7KXrmwgEXedIfVDh5yIiw7oG6Vdr6YKa2%2F%2FFXT1wErflXaBPJoBXf%2BCvxiqtv1DlLcGBfN4fXzCU8XUzqPMtoKNKeKZE98lkeVdWSuFEvOD%2BHFeFCpdkuwt6rsBZmKkxLNdx89LDf22pm4GQ76kI%2F9vQLndImpvr2MJWMyMkGOqUB38gWQyt09cZwR7JGqvOQUuGk20dCXESLlB8DtXTv0XTMkEP0DNH6%2FCZAxfbWMdVftVDUOVVdXZSCOB06MfCBkYc6%2BVggUyBCZc3Ihr5alX%2BDSgbIBFK2WnSwNX9I27hF8%2F4fOojdZtGfDvx3w9nRW20XtvG1FqoakCfVcy5Ej5D%2BUK7u0myEk4Ix517x6RncERPTCIjU9LkAxmF5E%2BmDlKoqFd6q&X-Amz-Signature=a304abd2e3cf38a4d7d2cec29a2a4e7ede351295fa25203b04a86f98dc5ef9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

