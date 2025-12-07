---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQQPKFN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJZDQFjiCtBVi%2FMkAASK5SZItu%2FonyAEaVh8N4m6umywIgdWmMam%2FzSgB7LmwWdaRcZ%2FsEmWHLXrdJRmtGdBAu25IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5xwb%2BFuxmN4Ttj8SrcA3X0wnlJb1D%2FAmwtBk8y7uOgB78KNxtcNNx6aVnUfoj8HCSTtaEio9LkJoPv1SRtcBz22wKhU3vU5KheeKfilnPZhANzz%2BYOFmmij2ewlQr8b7s%2Fspl0WDXYPe7ieMhUFTokerlo83PJzPLtdjZNrrlCGomb7qeBwP3NOSXHg3d4%2BS6uLtplqydLyOhKGeWZnVeYb7TrQOeIkjBxdQDOjVdKtbt%2BMbGB70ewrw1iIi7%2BRcJ38vfANyR4%2FAQeVTQg6BnK%2BEYM%2B9CA7izMAklfUA33wdp7dp885fs8QejfJPFX1yW9w7ofNx4htD3BDcTOETjy3RS9a1UITw74F2UHEWs7tzPkjPzIe12XTq9RjZlvfvjzgsE9AmTLqzhs3ERvXU0s%2Bi24%2FHmt3doAIijxfRytQ%2FinBwJ34ZS9uxooGXvp1gWcJYVO3W2y6MtEJM4IGKbvIWQsgXCkXTCYt4IyFICjew3sQCc5BtV%2B7Dwr6iZ0VhiHpB36hrd0NiEWToYAHHsfFDSz9zfu1LgbELZ%2FYF4bDDyvaDwYXKIcU10CWylIsdeONceQHllSBxDwkwh1bRFgPjoRBlwPMaVo%2FNkwdWzva974rsWKXW9p0Th10oTDVRWQ73xQPOUD9YRvMN390skGOqUBRyroS3LPzgboHtm36cEx4nP82ltSGOqbfCNzUjvQtOcgkCHORb%2Bt8MfHXt4DMkUb8Pf3Hwjx0u8UHkYFURZmcdNaaec0JMiXEDP34Mxdt8frh66RnycfVuW3dtCg8PWK%2Fz9NN3jFoBWbSlInmIZuSVcz63Sssx4J0w1MPlNfLjvX1cxsb6c8m1sfMuK1E282oywCfVICuwmkjulzrUzIPCPpjdFe&X-Amz-Signature=43981350be69c904a32ff9fe8dbc016b78519f8df3a643d19417c7baf0d15664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQQPKFN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJZDQFjiCtBVi%2FMkAASK5SZItu%2FonyAEaVh8N4m6umywIgdWmMam%2FzSgB7LmwWdaRcZ%2FsEmWHLXrdJRmtGdBAu25IqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5xwb%2BFuxmN4Ttj8SrcA3X0wnlJb1D%2FAmwtBk8y7uOgB78KNxtcNNx6aVnUfoj8HCSTtaEio9LkJoPv1SRtcBz22wKhU3vU5KheeKfilnPZhANzz%2BYOFmmij2ewlQr8b7s%2Fspl0WDXYPe7ieMhUFTokerlo83PJzPLtdjZNrrlCGomb7qeBwP3NOSXHg3d4%2BS6uLtplqydLyOhKGeWZnVeYb7TrQOeIkjBxdQDOjVdKtbt%2BMbGB70ewrw1iIi7%2BRcJ38vfANyR4%2FAQeVTQg6BnK%2BEYM%2B9CA7izMAklfUA33wdp7dp885fs8QejfJPFX1yW9w7ofNx4htD3BDcTOETjy3RS9a1UITw74F2UHEWs7tzPkjPzIe12XTq9RjZlvfvjzgsE9AmTLqzhs3ERvXU0s%2Bi24%2FHmt3doAIijxfRytQ%2FinBwJ34ZS9uxooGXvp1gWcJYVO3W2y6MtEJM4IGKbvIWQsgXCkXTCYt4IyFICjew3sQCc5BtV%2B7Dwr6iZ0VhiHpB36hrd0NiEWToYAHHsfFDSz9zfu1LgbELZ%2FYF4bDDyvaDwYXKIcU10CWylIsdeONceQHllSBxDwkwh1bRFgPjoRBlwPMaVo%2FNkwdWzva974rsWKXW9p0Th10oTDVRWQ73xQPOUD9YRvMN390skGOqUBRyroS3LPzgboHtm36cEx4nP82ltSGOqbfCNzUjvQtOcgkCHORb%2Bt8MfHXt4DMkUb8Pf3Hwjx0u8UHkYFURZmcdNaaec0JMiXEDP34Mxdt8frh66RnycfVuW3dtCg8PWK%2Fz9NN3jFoBWbSlInmIZuSVcz63Sssx4J0w1MPlNfLjvX1cxsb6c8m1sfMuK1E282oywCfVICuwmkjulzrUzIPCPpjdFe&X-Amz-Signature=9f3ede958676c8587008cdb0751fb910912b98b4dc23d3f45431d740c45c54ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

