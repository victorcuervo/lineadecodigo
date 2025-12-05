---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMH2LE5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2aBvgoo9eGeRvZ6Renr9J99rT7WQXr1V5I2MauXNMnQIhAOarqG6yLog3AIsaJ8CrsZKP58f7izKUb5tbNFjntinvKv8DCFsQABoMNjM3NDIzMTgzODA1Igy27dg%2Fgv6cwKqA5Pgq3ANck7TArDq%2B9niXbJoLhs7Z9CIRsBgq3q%2BBmNpJMjf8dcauLfn0CusxTHtbJRlNTwPb6VsJQ4ziyzamqpb4ytIhkkuo0xj1fVGGVAwqMeocTle7eMImJCndNAl7SOR33HG181QRDmQ70%2Fv%2FPdkyfO3Qr9BwRQPrPtcLbp6Q1SroEHRXUaoz2jyI%2F8doHRGyt2TPYLO5XLIBdmjbNOf6qrE6s%2BpFUpbfnVAKfkxxwthqxiETY1u7fxncG8GWvV7vYU0qwJXPe3Y%2BVI3TaXbayyuDmz6Y591Gu5uurAkfLuQjyYLPYLqMJsZjqeXEFPQXVYATm2z%2FVoCUff6Q09GRwhzZwWlAdBaAEXhAJ6iFoKrkeAbs%2FWXckqNN9Id0jxF9F8lSDlSlgi2HJ%2FzfENOGI8Jb3NdzkClJtF5o1p5Yi1Wz3PTcXrCsVeILJFHMPxkhMavCIdlyexB8Qw680dz%2BUrKL1E4JOTaqVthwfMaVmhBdIOMZHmPVxyp3SPlPEtjcIpr9wPR1832jcXgBPI16v%2FKzABLkZzXBpS3BdhJf3HMod6GELGCZ6Wr1JftojyT2nMRXs1S8JMMjjsI8hZlVEGxfcypl%2BLCOwX5kES2mCo8cQ%2BTAGODikY66HYi%2BwjDTz8rJBjqkARNaNjnfUhuy0NV8tfcPvSP66%2FH%2BUOmWDhnYreAoq5g5OkjuHcvnjm86ZFmEomY1gjScr6kyYmYvyl3SmLFIAwxDRm%2Bp0E8pO74sDokoFcUms0%2F92tkgYU8TwKqdHhkyveTEZzmssUpAHJ%2BqvRzAx4xAWcaKuIDKVNKB7RqqtMSlFiTUzgAwGw6sDFpOA%2BiesEM68PUHHQYi%2FGegDO%2FZ%2BjmDyquy&X-Amz-Signature=13d8e8d429a4b438273e221120adfaae3d97f79c1b62ed61a5222a0c8fc57fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMH2LE5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2aBvgoo9eGeRvZ6Renr9J99rT7WQXr1V5I2MauXNMnQIhAOarqG6yLog3AIsaJ8CrsZKP58f7izKUb5tbNFjntinvKv8DCFsQABoMNjM3NDIzMTgzODA1Igy27dg%2Fgv6cwKqA5Pgq3ANck7TArDq%2B9niXbJoLhs7Z9CIRsBgq3q%2BBmNpJMjf8dcauLfn0CusxTHtbJRlNTwPb6VsJQ4ziyzamqpb4ytIhkkuo0xj1fVGGVAwqMeocTle7eMImJCndNAl7SOR33HG181QRDmQ70%2Fv%2FPdkyfO3Qr9BwRQPrPtcLbp6Q1SroEHRXUaoz2jyI%2F8doHRGyt2TPYLO5XLIBdmjbNOf6qrE6s%2BpFUpbfnVAKfkxxwthqxiETY1u7fxncG8GWvV7vYU0qwJXPe3Y%2BVI3TaXbayyuDmz6Y591Gu5uurAkfLuQjyYLPYLqMJsZjqeXEFPQXVYATm2z%2FVoCUff6Q09GRwhzZwWlAdBaAEXhAJ6iFoKrkeAbs%2FWXckqNN9Id0jxF9F8lSDlSlgi2HJ%2FzfENOGI8Jb3NdzkClJtF5o1p5Yi1Wz3PTcXrCsVeILJFHMPxkhMavCIdlyexB8Qw680dz%2BUrKL1E4JOTaqVthwfMaVmhBdIOMZHmPVxyp3SPlPEtjcIpr9wPR1832jcXgBPI16v%2FKzABLkZzXBpS3BdhJf3HMod6GELGCZ6Wr1JftojyT2nMRXs1S8JMMjjsI8hZlVEGxfcypl%2BLCOwX5kES2mCo8cQ%2BTAGODikY66HYi%2BwjDTz8rJBjqkARNaNjnfUhuy0NV8tfcPvSP66%2FH%2BUOmWDhnYreAoq5g5OkjuHcvnjm86ZFmEomY1gjScr6kyYmYvyl3SmLFIAwxDRm%2Bp0E8pO74sDokoFcUms0%2F92tkgYU8TwKqdHhkyveTEZzmssUpAHJ%2BqvRzAx4xAWcaKuIDKVNKB7RqqtMSlFiTUzgAwGw6sDFpOA%2BiesEM68PUHHQYi%2FGegDO%2FZ%2BjmDyquy&X-Amz-Signature=5323670b5ee75b5776b28fa8a96d6559e5acbb69bb1ae4d73bb67c7a8bd02289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

