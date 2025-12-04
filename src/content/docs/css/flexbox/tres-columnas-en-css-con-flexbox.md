---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMWSILT2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCMUUsMLCfQquGjd%2FSNbUelT3%2FRnUq5ehlH%2FuPo6yDl8QIhAJXLeM2BpUQ%2BEY09%2ByzFSxnOlw9N1Gv9FcsqRpyRdoxbKv8DCDsQABoMNjM3NDIzMTgzODA1IgygECDuJ21lz2ONB%2BIq3ANQXuw6oGfiPrlIdlxNTXV6pk%2BXv72qYB1w3SILZKaR9vTLhWtel9DGp%2B8h4OrSODPk1kKOmKx0x46uvaa%2Fc8Sa6GkidOhS58OW43nvZb%2BQyUqmIxoX30LFkZ%2BL3Fa%2BqcXGf6DvNNmBcy2K8DXSRfupE88nhlmuS6lp9O6fkl7tvCtSphc%2F0BEKNGcj2XyycEoqW7WBi0r2Nvya5syYiULgAXv1NI7hzev7GVGrGmF02DG2%2F2pMsEPFklclJXViBDMyqNuTwTkBIDhEF8RJn3zlknwxHn%2BnSH1ae9yyH%2Frsna6wMl19pBnHWPkd2DQ7pjatKl1jnt%2BjIkqgqkDrNH1b9HfwydUXs7PT983A6dmOLHETseqc3Ng%2F20J5T3O9ITIozU8okftxgoFRARVRHwjQ01jPWHFKxNNjLi5JvIM8Aeks8sKaOBzGM30Jc8qMdJW5FicPkCr4h%2FUpTyLaxY3CMHWX8Y3VVGGLaGFw795kGQzi2Qh0%2FQzxFtxjBkMNRWOYLLMGoXSkYDqu9Pnzz8So796RjnL5uuzWjHUNkq2xghCTj4uHXoaMlLw7s8VD6XmR2QfF3pJFXcTU%2Fg21gmu9ar4neMWsswIWZ2Jkh%2FRSrBr6udPpALTmPfw4jTDv1MPJBjqkAW9EIUxWAWdS6C9iaXEZTFL1FQAUUUZpj5hkyenv3LOFmQvkRTb69J9CUmkKVOaUxp8ig%2FXTlcuMD8oOSatCSBy4BaTUnZWDe%2B7FnnhSj%2BRIZysDjTfFUfKgCciwCbVcU2Fofx%2FOULqnITLGBBhfrRZiEVyoMK6uE1vBEE%2FJKqRPRC5W60aWhpv63GsT7gD%2FWin1dB1%2FSX4MZP8UX4mWc3nZDG3j&X-Amz-Signature=e121cc85d8da06d3f7e0eba583094aa2e86283bd6422721022d351390e37969c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMWSILT2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCMUUsMLCfQquGjd%2FSNbUelT3%2FRnUq5ehlH%2FuPo6yDl8QIhAJXLeM2BpUQ%2BEY09%2ByzFSxnOlw9N1Gv9FcsqRpyRdoxbKv8DCDsQABoMNjM3NDIzMTgzODA1IgygECDuJ21lz2ONB%2BIq3ANQXuw6oGfiPrlIdlxNTXV6pk%2BXv72qYB1w3SILZKaR9vTLhWtel9DGp%2B8h4OrSODPk1kKOmKx0x46uvaa%2Fc8Sa6GkidOhS58OW43nvZb%2BQyUqmIxoX30LFkZ%2BL3Fa%2BqcXGf6DvNNmBcy2K8DXSRfupE88nhlmuS6lp9O6fkl7tvCtSphc%2F0BEKNGcj2XyycEoqW7WBi0r2Nvya5syYiULgAXv1NI7hzev7GVGrGmF02DG2%2F2pMsEPFklclJXViBDMyqNuTwTkBIDhEF8RJn3zlknwxHn%2BnSH1ae9yyH%2Frsna6wMl19pBnHWPkd2DQ7pjatKl1jnt%2BjIkqgqkDrNH1b9HfwydUXs7PT983A6dmOLHETseqc3Ng%2F20J5T3O9ITIozU8okftxgoFRARVRHwjQ01jPWHFKxNNjLi5JvIM8Aeks8sKaOBzGM30Jc8qMdJW5FicPkCr4h%2FUpTyLaxY3CMHWX8Y3VVGGLaGFw795kGQzi2Qh0%2FQzxFtxjBkMNRWOYLLMGoXSkYDqu9Pnzz8So796RjnL5uuzWjHUNkq2xghCTj4uHXoaMlLw7s8VD6XmR2QfF3pJFXcTU%2Fg21gmu9ar4neMWsswIWZ2Jkh%2FRSrBr6udPpALTmPfw4jTDv1MPJBjqkAW9EIUxWAWdS6C9iaXEZTFL1FQAUUUZpj5hkyenv3LOFmQvkRTb69J9CUmkKVOaUxp8ig%2FXTlcuMD8oOSatCSBy4BaTUnZWDe%2B7FnnhSj%2BRIZysDjTfFUfKgCciwCbVcU2Fofx%2FOULqnITLGBBhfrRZiEVyoMK6uE1vBEE%2FJKqRPRC5W60aWhpv63GsT7gD%2FWin1dB1%2FSX4MZP8UX4mWc3nZDG3j&X-Amz-Signature=26816179ace2239f238a927d50a1bc00d94a4d26b358d5b7b1d81af806c861c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

