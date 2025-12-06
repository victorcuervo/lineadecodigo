---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CIRI4R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIJSL3JC7vo7hYuV5wsVOccNX4GZzbZNGdVOkadlv1gAiEA9wmQ35lY0UR5XH5sr8Yht63gGkQzh7PcMgVpEi1K3S8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIy7io0tHmmKzToe3ircA8%2BVuaOkVp28WofUxYEWnVAYeVHumJ8vTJxn%2B7wKshid2Nn3WK%2FqOhZZ%2BkPBlS4VHeKkxWrvInNkqHc8iuwwr%2FLej52FtDa5gZm5VuxyMY1d0FS1Yb%2BNcqaArN0viUEOQZJcJDDvplkq6HdY6NmECXistfhAHMVvpU7SmMWHgNXEbrSF3srUQx3hPqeFJ4%2BaiMErkfpGpbfuV9pqRMjM9LOYZGkBNIxrkIAaxmUeUxsrTjz7MQHoFlWpCM%2FCuam6dcXXS7gFk8UwZ76t%2B0l8Ga9ObD55SAkjdrN0HBEsr5Q3VYte4e48k%2Bu7UYTc5p%2BlBWfvFS95%2FLn6fQGdUpVDuxFbhwTNbTnWS0skNtOIyPfqMYqiyIFQvGMJDMyj8A%2FObRvA5y95XsHoHgcNox%2FDHd4%2BCh1MSROl79irnMDUYYjPFHAkVfnMo23%2FxmD4jnA8sB8ocQe%2B%2BCFUpqatK0r2PlOzZg5R5SBxXZDofxrlAoLQqVIAtdJHR4mnXrnQtYg0i8ZWBZVSDpT1xSic%2F%2BjUppJikygltwlVIpiV0MTTtPiL1y9qOfLJ577jbwbaV%2BesVUdgvvKiJgENrJ3l2IkQrNAVB%2BxYd2qWiBuML7Ck9LJPfHsUdAjrykJsrkA5MIe8z8kGOqUB1iWy4DGX%2FxCWsW3JWcSBAddYmeokclF8EsYnQpJdCYywGFOR2qZd7HzsuQ6q6A9Cp9MCUtJxeCKL%2FlkFmBeR05sRlUUOBfe59zhFEblhrtbtJU4RDMSW6DD%2FLsehRICi5Tt%2BqqRXLy0yVLAAaP4o8Zp3Lbmjr4MG6cS%2BnVVczIAdJuhNnUw0Gjq86A954m%2BX48QphHvtQNDlYjq2CeS6c3hrb0LD&X-Amz-Signature=091ac22a9d62cf261fde570a528af6a4a4f447b3ceedcee125d6d0d597d11993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CIRI4R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIJSL3JC7vo7hYuV5wsVOccNX4GZzbZNGdVOkadlv1gAiEA9wmQ35lY0UR5XH5sr8Yht63gGkQzh7PcMgVpEi1K3S8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIy7io0tHmmKzToe3ircA8%2BVuaOkVp28WofUxYEWnVAYeVHumJ8vTJxn%2B7wKshid2Nn3WK%2FqOhZZ%2BkPBlS4VHeKkxWrvInNkqHc8iuwwr%2FLej52FtDa5gZm5VuxyMY1d0FS1Yb%2BNcqaArN0viUEOQZJcJDDvplkq6HdY6NmECXistfhAHMVvpU7SmMWHgNXEbrSF3srUQx3hPqeFJ4%2BaiMErkfpGpbfuV9pqRMjM9LOYZGkBNIxrkIAaxmUeUxsrTjz7MQHoFlWpCM%2FCuam6dcXXS7gFk8UwZ76t%2B0l8Ga9ObD55SAkjdrN0HBEsr5Q3VYte4e48k%2Bu7UYTc5p%2BlBWfvFS95%2FLn6fQGdUpVDuxFbhwTNbTnWS0skNtOIyPfqMYqiyIFQvGMJDMyj8A%2FObRvA5y95XsHoHgcNox%2FDHd4%2BCh1MSROl79irnMDUYYjPFHAkVfnMo23%2FxmD4jnA8sB8ocQe%2B%2BCFUpqatK0r2PlOzZg5R5SBxXZDofxrlAoLQqVIAtdJHR4mnXrnQtYg0i8ZWBZVSDpT1xSic%2F%2BjUppJikygltwlVIpiV0MTTtPiL1y9qOfLJ577jbwbaV%2BesVUdgvvKiJgENrJ3l2IkQrNAVB%2BxYd2qWiBuML7Ck9LJPfHsUdAjrykJsrkA5MIe8z8kGOqUB1iWy4DGX%2FxCWsW3JWcSBAddYmeokclF8EsYnQpJdCYywGFOR2qZd7HzsuQ6q6A9Cp9MCUtJxeCKL%2FlkFmBeR05sRlUUOBfe59zhFEblhrtbtJU4RDMSW6DD%2FLsehRICi5Tt%2BqqRXLy0yVLAAaP4o8Zp3Lbmjr4MG6cS%2BnVVczIAdJuhNnUw0Gjq86A954m%2BX48QphHvtQNDlYjq2CeS6c3hrb0LD&X-Amz-Signature=9a377901a5ac6f76278913bbbff2d3378667efcf2a5eac2eb3e7f7584e1dc6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

