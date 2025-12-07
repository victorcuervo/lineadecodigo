---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHWQR3Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BOY9v4hWTouV9oFYYyr6EKeVAEtKX4McBGq0ABLrHmAiEA81wN8NKs2NchCPdLshYGGcRNRLsEHWAAuHZZpzA%2FBF8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbtCodProgJUcOqLyrcA90pEopbIBs9%2BYb94hH74d%2Bun21bWxI%2B0lkztiQsvGm1mSgXtuoZn0dLzhWbHiV%2FfOaiLSa4zZ12PXUNMHxUZiBSZU1GuxzqLdIoAoAKzBSdzCFphf5NqkeBKEZIN%2FObdWNOZpMn2LrLl6s5809GCirPkNEGa5DgFFEp3BXcydvF5hjISs5AOcuSxpZLt6VbRBNiTxQME%2BH8MxXAkoC%2FAcuA3Wlum5dZ8J%2B7xKS2A6hSTZCj9FZV%2F%2BM9tx2XMF3oC30DpOHfzOtf%2B93yJ7xk9SgZEVeiDLqIXBip3PGJ%2B%2BexT%2BPBTGPGaNbGJKGoyPYjsocNRJBcc4COj3mHlAaw1HApidrFdVOcGkfnITVCH1DHA0WlMB1Pk9p3uAjUj1bUWjz6Uidq5ytPkr5J7CvLT5VPMgeePIp9N6t2EQT51UX0ZwSDmeQfz%2By8h3pAmie9F0uwMJWPfUoxFY43vkC4qcHulFbY66gKXRfkxVUQdYAOX3cdSVpnFRVnm9N5OFStiJLEOc634DXS7G7P0QzEaqpO7pOd3Wevlijb%2BggR4CQs3FJDIDGe4s7j0y1kIs22TRZPlLws8hQPZZ7cgEIs8%2B5ojXFeXOFyZDzHViJm%2Bv%2BF2UN0WoGBqVuHWdWvMLv90skGOqUBJXHVqwiNdKr%2FsVlH7qJev2bRx0GTOSsDJ3yo6bdkvK%2FDtLVGcdTOYr%2Fvwi5l9H3NQE81iWrfoUm590noM7eYBSiEMQbQhB0440tlmQ%2F8pyJYlrn1w9exZRu4ueACQ69ZuOD%2FC5gZTsYqINZGesBX55tNn1e92D9eOCLmdE%2BwqcoCHDyqhOUMnMzhjpe4RdlRXZDWW37RbNI1hWsozfMtvFmdjRBa&X-Amz-Signature=84e23e498562f94bc2bd07f8bc32d7fe8f0e222509a725064ece24d72bedcb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHWQR3Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BOY9v4hWTouV9oFYYyr6EKeVAEtKX4McBGq0ABLrHmAiEA81wN8NKs2NchCPdLshYGGcRNRLsEHWAAuHZZpzA%2FBF8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbtCodProgJUcOqLyrcA90pEopbIBs9%2BYb94hH74d%2Bun21bWxI%2B0lkztiQsvGm1mSgXtuoZn0dLzhWbHiV%2FfOaiLSa4zZ12PXUNMHxUZiBSZU1GuxzqLdIoAoAKzBSdzCFphf5NqkeBKEZIN%2FObdWNOZpMn2LrLl6s5809GCirPkNEGa5DgFFEp3BXcydvF5hjISs5AOcuSxpZLt6VbRBNiTxQME%2BH8MxXAkoC%2FAcuA3Wlum5dZ8J%2B7xKS2A6hSTZCj9FZV%2F%2BM9tx2XMF3oC30DpOHfzOtf%2B93yJ7xk9SgZEVeiDLqIXBip3PGJ%2B%2BexT%2BPBTGPGaNbGJKGoyPYjsocNRJBcc4COj3mHlAaw1HApidrFdVOcGkfnITVCH1DHA0WlMB1Pk9p3uAjUj1bUWjz6Uidq5ytPkr5J7CvLT5VPMgeePIp9N6t2EQT51UX0ZwSDmeQfz%2By8h3pAmie9F0uwMJWPfUoxFY43vkC4qcHulFbY66gKXRfkxVUQdYAOX3cdSVpnFRVnm9N5OFStiJLEOc634DXS7G7P0QzEaqpO7pOd3Wevlijb%2BggR4CQs3FJDIDGe4s7j0y1kIs22TRZPlLws8hQPZZ7cgEIs8%2B5ojXFeXOFyZDzHViJm%2Bv%2BF2UN0WoGBqVuHWdWvMLv90skGOqUBJXHVqwiNdKr%2FsVlH7qJev2bRx0GTOSsDJ3yo6bdkvK%2FDtLVGcdTOYr%2Fvwi5l9H3NQE81iWrfoUm590noM7eYBSiEMQbQhB0440tlmQ%2F8pyJYlrn1w9exZRu4ueACQ69ZuOD%2FC5gZTsYqINZGesBX55tNn1e92D9eOCLmdE%2BwqcoCHDyqhOUMnMzhjpe4RdlRXZDWW37RbNI1hWsozfMtvFmdjRBa&X-Amz-Signature=29dbf3d20694d541d889dd402f9d153b56642f52d2c47edb6846516f7fe8947c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

