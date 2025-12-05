---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXTNLO3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDprugv4t1g%2B2rPgldWlqDYBeyM6Q2Cio7FYX6C4%2FHF8QIhAJhx8WGRkPBybN%2FtxLaP%2BUFQCSq70h7UG%2FsjGIJzVmAHKv8DCGUQABoMNjM3NDIzMTgzODA1Igxu6dHH9hGFt8nM3Toq3ANlcSXKDgvhR%2Fvxr1%2BEWPDHfxTzK56O7JSG8kyVU4MXhQPOnnCVCRxELC5eydT92rmnnZ%2FwW40DF4XeLOffRmwzcY6oA%2FHCQnWyp6tRJhA7r8nWxfucsKvaJPmrtDgX44IyxhNt%2F9GlM6a26fPS8%2FsWt%2FHVqP2kSaxH%2BBDyp%2BuZwurxvH2E9JZY%2FW74GTgX%2F0zZVnjScsbFgQ%2ByKoNx1TQj0U%2FnHsxr4qv3m7YSW7gaaFhIFBzYRpP5qQf2GiACr2fnblFvikQtuhIm0I2fvCDu0TDnONfE9QxZTYTixbthUBOK33vgYH6ak%2F39%2BkOIY0gyK7hHzSLfvT21vKeO1uXTyHpepgf%2F7qJvanrmY41qvGn4pPKnmZR2c%2BO7Sbw3w8ZIWnzXZo8rUkQzqV9JIhb230OHFjFpJlscF59cUek38E%2FrJgK8102W64eQvxxzLbOxv4cLOwC8iqPE3FVSiqruj7YnleJ0ZjY2gkalOpCArU58WEb568xMvyFPYcmnDvJe0MRWmLCTOynlPMo6Knc%2BHfIOJVrPIm13hxuYSanSIT4PzFZSeHo7XyH63rwckkQd6ugzmlYT%2FQaRLzVPyxT0nsHm1iSxyLVHpJxVc2sX4PQARioVAsyuOQuRLDCA8MzJBjqkAfSUVQV18Gx9uEDdWieN4X2x%2BNx5YRArAobuHcmJWGb3b3Ue0SP5uiIJb11pHomn51wrptjct9XV%2BpHYy3oij9O5qR8sNaFH%2BZr3cTt%2FmVfJk%2Bp4avxzhTUN73tXSrMumOgHsr6wlyD1iZK4bJYe0pYYtCgbirwDX7JZoAdTbYvI87uT1qgxm6g3IjMNftlgHLxXZlRzH3jtpi5bn1b3%2BbRxVZZ%2F&X-Amz-Signature=72d950d1b4f736dd80197b996141b7b9661bc32659f1364e4b253617d9c49b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXTNLO3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDprugv4t1g%2B2rPgldWlqDYBeyM6Q2Cio7FYX6C4%2FHF8QIhAJhx8WGRkPBybN%2FtxLaP%2BUFQCSq70h7UG%2FsjGIJzVmAHKv8DCGUQABoMNjM3NDIzMTgzODA1Igxu6dHH9hGFt8nM3Toq3ANlcSXKDgvhR%2Fvxr1%2BEWPDHfxTzK56O7JSG8kyVU4MXhQPOnnCVCRxELC5eydT92rmnnZ%2FwW40DF4XeLOffRmwzcY6oA%2FHCQnWyp6tRJhA7r8nWxfucsKvaJPmrtDgX44IyxhNt%2F9GlM6a26fPS8%2FsWt%2FHVqP2kSaxH%2BBDyp%2BuZwurxvH2E9JZY%2FW74GTgX%2F0zZVnjScsbFgQ%2ByKoNx1TQj0U%2FnHsxr4qv3m7YSW7gaaFhIFBzYRpP5qQf2GiACr2fnblFvikQtuhIm0I2fvCDu0TDnONfE9QxZTYTixbthUBOK33vgYH6ak%2F39%2BkOIY0gyK7hHzSLfvT21vKeO1uXTyHpepgf%2F7qJvanrmY41qvGn4pPKnmZR2c%2BO7Sbw3w8ZIWnzXZo8rUkQzqV9JIhb230OHFjFpJlscF59cUek38E%2FrJgK8102W64eQvxxzLbOxv4cLOwC8iqPE3FVSiqruj7YnleJ0ZjY2gkalOpCArU58WEb568xMvyFPYcmnDvJe0MRWmLCTOynlPMo6Knc%2BHfIOJVrPIm13hxuYSanSIT4PzFZSeHo7XyH63rwckkQd6ugzmlYT%2FQaRLzVPyxT0nsHm1iSxyLVHpJxVc2sX4PQARioVAsyuOQuRLDCA8MzJBjqkAfSUVQV18Gx9uEDdWieN4X2x%2BNx5YRArAobuHcmJWGb3b3Ue0SP5uiIJb11pHomn51wrptjct9XV%2BpHYy3oij9O5qR8sNaFH%2BZr3cTt%2FmVfJk%2Bp4avxzhTUN73tXSrMumOgHsr6wlyD1iZK4bJYe0pYYtCgbirwDX7JZoAdTbYvI87uT1qgxm6g3IjMNftlgHLxXZlRzH3jtpi5bn1b3%2BbRxVZZ%2F&X-Amz-Signature=844118d1ea37f587e11356833db370c6daa96b2ca17e51536d0a23022efbb20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

