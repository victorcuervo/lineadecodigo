---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQH5TV2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEq5A0YghxZ16J9YZPYejkAAmrjWKAai%2FLvyvUAFXJKqAiAZH%2FpPSDdNR%2B6ITLcWImeYY5ZRr2gqfd9nOP8Yp7mMdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPAfB5qywIBiPkVcEKtwDtnf4rUeNoIjbM877xSvqvxXe6pggd6sEHBp9kDmiruy4iCFhaadaqmBVG0QZ5%2B1YMnCYlLqO4k7XFZwy8S0UWwVNRLNFWFqA9hiSEg2qr8qxPJtvbAj4kcNS9OjccFVIVCqZv4QQ8je2jvIAUixtU%2BAkDI%2Fyg%2BMHwQLkCOiv8gPRsivRpccxFWg6hDo0g%2B66px7BACXkWthJBnB2OeQmnrdxp0%2FmZhvMScTxrsfdyB4tb6szKTeRKppwkBm1DH%2FJLuUbP4woEtSFcUO2m5JuxPLonmv%2F8p5H00RJvwsOQTJDb6XbkG6fwZHAPdbnxvZPakr8mvXNTO%2B8sd0uNMQNcWXtZbBexovKcyiKBXwCZXHm3jfJkY7igr%2BjqA2EPf1eLB3jEsRCF0d5j4m5yPB%2B%2BWngZAApbKFWCZ%2BE7o2RCffjEE8SyFPl%2BuSsRUkB35DhLR9FmOnZHH%2Fxv9Uy%2BtrvfQUrUhr4sq2gBQJ6VD1jOGURHYW8SV9VbZQ%2Fr32Gkt2LHFT076Ib3uqlfStNDhiAqwGecP7GC21zNvUANBA5TDg7pvaPA26GL8GZGi5B%2FMfyzjjqktU5bDPA2JsSBJxcf7zJC1jV3NMiS%2BObaBs02%2BRBu6oohizyNKnY%2B8Qw6%2F%2FcyQY6pgGRjBHoyg3VWp9%2FbIP6zEJsUUDD888i2pxkfRJ0YC3O861Twnfr8OQWqdiPkGxhcPsazqem%2BxDjwAx6tEhrz%2Fajqwd8yRVAEHQUvg0omXx522ul2011ZM6CeXmdqPwZMwivwmpauPwgTICmybXRU%2FuVRvrEbwSOAuewsoFIdCGP9PVB6eYHSREyXTOj5gO%2B9F50x%2BaoV9QGb%2BhNFO4fVvKv5unaYA%2FT&X-Amz-Signature=d7b27f1f5c86df135b1106a2f562b445a678ff73f008c7233978d8ed3d742b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQH5TV2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEq5A0YghxZ16J9YZPYejkAAmrjWKAai%2FLvyvUAFXJKqAiAZH%2FpPSDdNR%2B6ITLcWImeYY5ZRr2gqfd9nOP8Yp7mMdCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPAfB5qywIBiPkVcEKtwDtnf4rUeNoIjbM877xSvqvxXe6pggd6sEHBp9kDmiruy4iCFhaadaqmBVG0QZ5%2B1YMnCYlLqO4k7XFZwy8S0UWwVNRLNFWFqA9hiSEg2qr8qxPJtvbAj4kcNS9OjccFVIVCqZv4QQ8je2jvIAUixtU%2BAkDI%2Fyg%2BMHwQLkCOiv8gPRsivRpccxFWg6hDo0g%2B66px7BACXkWthJBnB2OeQmnrdxp0%2FmZhvMScTxrsfdyB4tb6szKTeRKppwkBm1DH%2FJLuUbP4woEtSFcUO2m5JuxPLonmv%2F8p5H00RJvwsOQTJDb6XbkG6fwZHAPdbnxvZPakr8mvXNTO%2B8sd0uNMQNcWXtZbBexovKcyiKBXwCZXHm3jfJkY7igr%2BjqA2EPf1eLB3jEsRCF0d5j4m5yPB%2B%2BWngZAApbKFWCZ%2BE7o2RCffjEE8SyFPl%2BuSsRUkB35DhLR9FmOnZHH%2Fxv9Uy%2BtrvfQUrUhr4sq2gBQJ6VD1jOGURHYW8SV9VbZQ%2Fr32Gkt2LHFT076Ib3uqlfStNDhiAqwGecP7GC21zNvUANBA5TDg7pvaPA26GL8GZGi5B%2FMfyzjjqktU5bDPA2JsSBJxcf7zJC1jV3NMiS%2BObaBs02%2BRBu6oohizyNKnY%2B8Qw6%2F%2FcyQY6pgGRjBHoyg3VWp9%2FbIP6zEJsUUDD888i2pxkfRJ0YC3O861Twnfr8OQWqdiPkGxhcPsazqem%2BxDjwAx6tEhrz%2Fajqwd8yRVAEHQUvg0omXx522ul2011ZM6CeXmdqPwZMwivwmpauPwgTICmybXRU%2FuVRvrEbwSOAuewsoFIdCGP9PVB6eYHSREyXTOj5gO%2B9F50x%2BaoV9QGb%2BhNFO4fVvKv5unaYA%2FT&X-Amz-Signature=940e1e80afa898ae88cc6baaceece803ff7aa805bb9dcc5447862c05851ab16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

